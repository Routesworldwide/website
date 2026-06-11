import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';
import { connectDB } from '@/lib/db';
import { ShippingRate } from '@/models/ShippingRate';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

interface ExtractedData {
  origin: string;
  destination: string;
  weightKg: number;
  itemType: string;
  urgency: string;
  shipmentType: string;
}

interface ShippingQuote {
  method: string;
  costPerKg: number;
  totalCost: number;
  transitTime: string;
}

interface ShippingAdvisorResponse {
  success: boolean;
  bestShippingMethod?: string;
  estimatedCost?: number;
  transitTime?: string;
  requiredDocuments?: string[];
  comparison?: ShippingQuote[];
  error?: string;
}

async function extractShippingDetails(
  userInput: string
): Promise<ExtractedData | null> {
  try {
    // Skip OpenAI - use fallback only to avoid quota issues
    return fallbackExtraction(userInput);
  } catch (error) {
    console.error('Error extracting shipping details:', error);
    return null;
  }
}

function fallbackExtraction(userInput: string): ExtractedData | null {
  // Pattern matching for local extraction (no API calls)
  const input = userInput.toLowerCase();

  // Extract weight (kg)
  const weightMatch = input.match(/(\d+(?:\.\d+)?)\s*kg/);
  const weightKg = weightMatch ? parseFloat(weightMatch[1]) : 1;

  // Extract origin city - match "from [City]" pattern
  const fromMatch = input.match(/from\s+([a-z]+)/i);
  const origin = fromMatch
    ? fromMatch[1].charAt(0).toUpperCase() + fromMatch[1].slice(1)
    : null;

  // Extract destination city - match "to [City]" pattern
  // But exclude common verbs: import, export, send, ship, etc.
  let destination = null;
  const toMatches = input.matchAll(/to\s+([a-z]+)/gi);
  for (const match of toMatches) {
    const word = match[1].toLowerCase();
    // Skip common verbs and prepositions
    if (!['send', 'ship', 'export', 'from', 'import'].includes(word)) {
      destination = word.charAt(0).toUpperCase() + word.slice(1);
      break;
    }
  }

  if (!origin || !destination) {
    console.log('Extraction failed:', { origin, destination, input });
    return null;
  }

  // Extract urgency
  let urgency: 'low' | 'medium' | 'high' = 'medium';
  if (
    input.includes('urgent') ||
    input.includes('asap') ||
    input.includes('high priority') ||
    input.includes('fastest') ||
    input.includes('quick')
  ) {
    urgency = 'high';
  } else if (
    input.includes('low cost') ||
    input.includes('cheapest') ||
    input.includes('economy') ||
    input.includes('budget')
  ) {
    urgency = 'low';
  }

  // Extract item type - match "of [items]" pattern
  const itemMatch = input.match(/of\s+([a-z\s]+?)(?:\s+from|\s+to|$)/i);
  const itemType = itemMatch ? itemMatch[1].trim() : 'general cargo';

  console.log('Extraction successful:', { origin, destination, weightKg, itemType, urgency });
  return {
    origin,
    destination,
    weightKg,
    itemType,
    urgency,
    shipmentType: 'any',
  };
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const { userInput } = await request.json();

    if (!userInput || typeof userInput !== 'string') {
      return NextResponse.json(
        { success: false, error: 'Please provide a shipping query' },
        { status: 400 }
      );
    }

    // Extract details using OpenAI
    const extracted = await extractShippingDetails(userInput);
    if (!extracted) {
      console.log('Failed to extract details from:', userInput);
      return NextResponse.json(
        {
          success: false,
          error: 'Could not understand your shipping request. Please try again.',
        },
        { status: 400 }
      );
    }

    console.log('Extracted:', extracted);

    // Connect to MongoDB
    await connectDB();

    // Query for shipping rates
    const shippingRates = await ShippingRate.findOne({
      origin: new RegExp(`^${extracted.origin}$`, 'i'),
      destination: new RegExp(`^${extracted.destination}$`, 'i'),
      isActive: true,
    });

    if (!shippingRates) {
      return NextResponse.json(
        {
          success: false,
          error: `Sorry, we don't have shipping rates for ${extracted.origin} to ${extracted.destination} yet. Please contact our team for a custom quote.`,
        },
        { status: 404 }
      );
    }

    // Calculate costs based on urgency
    const comparison: ShippingQuote[] = [];

    // Air freight - usually fastest, most urgent
    if (extracted.urgency !== 'low') {
      comparison.push({
        method: 'Air Freight',
        costPerKg: shippingRates.airRate,
        totalCost: extracted.weightKg * shippingRates.airRate,
        transitTime: shippingRates.airTransit,
      });
    }

    // Express courier - balanced option
    comparison.push({
      method: 'Express Courier',
      costPerKg: shippingRates.expressRate,
      totalCost: extracted.weightKg * shippingRates.expressRate,
      transitTime: shippingRates.expressTransit,
    });

    // Find best method based on urgency
    let bestMethod = comparison[0];
    if (extracted.urgency === 'high') {
      // Fastest option
      bestMethod = comparison.reduce((best, current) => {
        const bestDays = parseInt(best.transitTime);
        const currentDays = parseInt(current.transitTime);
        return currentDays < bestDays ? current : best;
      });
    } else if (extracted.urgency === 'medium') {
      // Most balanced (express)
      bestMethod =
        comparison.find((m) => m.method === 'Express Courier') ||
        comparison[0];
    } else {
      // Cheapest option
      bestMethod = comparison.reduce((best, current) => {
        return current.totalCost < best.totalCost ? current : best;
      });
    }

    const response: ShippingAdvisorResponse = {
      success: true,
      bestShippingMethod: bestMethod.method,
      estimatedCost: bestMethod.totalCost,
      transitTime: bestMethod.transitTime,
      requiredDocuments: shippingRates.documents || [],
      comparison,
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error('Shipping advisor error:', error);
    const errorMessage = error instanceof Error ? error.message : String(error);
    
    // More detailed error reporting
    if (errorMessage.includes('ECONNREFUSED') || errorMessage.includes('querySrv')) {
      return NextResponse.json(
        {
          success: false,
          error: 'Database connection failed. Please check MongoDB Atlas IP whitelist settings.',
        },
        { status: 500 }
      );
    }
    
    return NextResponse.json(
      {
        success: false,
        error: 'An error occurred while processing your request',
      },
      { status: 500 }
    );
  }
}
