# AI Shipping Advisor Setup Guide

## Overview
This is an AI-powered shipping advisor that uses OpenAI to understand natural language shipping queries and provides instant quotes from your MongoDB database.

## Components Created

### 1. **Models** (`models/ShippingRate.ts`)
- Mongoose schema for shipping rates
- Fields: origin, destination, airRate, expressRate, transit times, documents, isActive
- Compound index on origin + destination + isActive for optimal query performance

### 2. **Database Connection** (`lib/db.ts`)
- Singleton MongoDB connection using Mongoose
- Caches connection to avoid reconnections

### 3. **API Route** (`app/api/shipping-advisor/route.ts`)
- POST endpoint for shipping advisor
- **Flow:**
  1. Accepts natural language input (e.g., "I want to send 20 kg of garments from Delhi to Dubai")
  2. Calls OpenAI GPT-4 to extract: origin, destination, weightKg, itemType, urgency, shipmentType
  3. Queries MongoDB for matching shipping rates (case-insensitive, normalized location names)
  4. Calculates costs based on urgency preference:
     - **High urgency:** Shows Air Freight options (fastest)
     - **Medium urgency:** Shows Express Courier options (balanced)
     - **Low urgency:** Shows the lowest-cost available option
  5. Returns best method + full comparison with all available options
  6. **Important:** Prices only come from MongoDB, never invented by AI

### 4. **React Component** (`components/AIShippingAdvisor.tsx`)
- Client-side component with:
  - Natural language input textarea
  - Loading state with spinner
  - Error state with helpful messages
  - Success state showing:
    - Recommended shipping method in dark blue card
    - Estimated cost
    - Transit time
    - Required documents
    - Comparison table with all options
  - Professional UI using red (#c8102e), dark blue (#0f172a), black, and white theme
  - Responsive design for mobile and desktop

### 5. **Page** (`app/shipping-advisor/page.tsx`)
- Route: `/shipping-advisor`
- Displays the AIShippingAdvisor component with metadata

## Environment Variables Required

Create a `.env.local` file in your project root:

```env
# MongoDB connection string
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/database_name

# OpenAI API Key
OPENAI_API_KEY=sk-your-openai-api-key
```

## Dependencies Added

```json
{
  "mongoose": "^8.0.0",
  "openai": "^4.52.0"
}
```

Install with: `npm install`

## Database Setup

### Create ShippingRate Collection

```javascript
// Insert sample data into MongoDB
db.shippingrates.insertMany([
  {
    origin: "Delhi",
    destination: "Dubai",
    airRate: 250,
    expressRate: 150,
    airTransit: "2-3 days",
    expressTransit: "7-10 days",
    documents: ["Invoice", "Packing List", "Certificate of Origin"],
    isActive: true
  },
  {
    origin: "Mumbai",
    destination: "Singapore",
    airRate: 280,
    expressRate: 170,
    airTransit: "1-2 days",
    expressTransit: "5-7 days",
    documents: ["Invoice", "Packing List"],
    isActive: true
  },
  // Add more routes as needed
]);
```

## API Usage Example

```bash
curl -X POST http://localhost:3000/api/shipping-advisor \
  -H "Content-Type: application/json" \
  -d '{"userInput":"I want to send 20 kg of garments from Delhi to Dubai"}'
```

### Response Format

**Success (200):**
```json
{
  "success": true,
  "bestShippingMethod": "Express Courier",
  "estimatedCost": 3000,
  "transitTime": "7-10 days",
  "requiredDocuments": ["Invoice", "Packing List", "Certificate of Origin"],
  "comparison": [
    {
      "method": "Air Freight",
      "costPerKg": 250,
      "totalCost": 5000,
      "transitTime": "2-3 days"
    },
    {
      "method": "Express Courier",
      "costPerKg": 150,
      "totalCost": 3000,
      "transitTime": "7-10 days"
    }
  ]
}
```

**No Rates Found (404):**
```json
{
  "success": false,
  "error": "Sorry, we don't have shipping rates for [origin] to [destination] yet. Please contact our team for a custom quote."
}
```

**Error (400/500):**
```json
{
  "success": false,
  "error": "Error message describing what went wrong"
}
```

## Key Features

✅ **AI-Powered NLP:** Extracts shipping details from natural language
✅ **Database-First Pricing:** All prices come from MongoDB, never invented
✅ **Smart Recommendations:** Recommends based on urgency level
✅ **Full Comparison:** Shows all available shipping methods
✅ **Professional UI:** Responsive design with red/dark blue theme
✅ **Error Handling:** Graceful error states for missing routes
✅ **Loading States:** Visual feedback during processing
✅ **Document Requirements:** Lists required docs for each shipment

## Testing the Feature

1. **Start dev server:**
   ```bash
   npm run dev
   ```

2. **Navigate to:**
   ```
   http://localhost:3000/shipping-advisor
   ```

3. **Try example queries:**
   - "I want to send 20 kg of garments from Delhi to Dubai"
   - "Send 5 kg urgent package from Mumbai to Singapore"
   - "I need to ship 100 kg of electronics for low cost from Delhi to Bangkok"

## Important Notes

1. **Origin/Destination Normalization:** The API uses case-insensitive regex matching. Store cities in your database consistently (e.g., lowercase during insertion).

2. **Price Integrity:** The system never allows OpenAI to generate prices. All prices are fetched from MongoDB and calculated locally.

3. **Urgency Mapping:**
   - **high:** Prioritizes speed over cost (Air Freight)
   - **medium:** Balanced option (Express Courier)
   - **low:** Prioritizes cost over speed using available options

4. **Error Handling:** If a route isn't found in the database, users are directed to contact the team for custom quotes.

5. **Scaling:** Use MongoDB indexes (already added) for fast lookups even with thousands of routes.

## Customization

### Add More Shipping Methods
Edit the API route to add additional shipping options in the `comparison` array.

### Adjust UI Colors
Update Tailwind classes in `AIShippingAdvisor.tsx`:
- Red: `text-red-600`, `bg-red-600`
- Dark Blue: `text-slate-900`, `bg-slate-900` (or add custom dark blue)
- Black/White: Already using `black`, `white` utilities

### Change AI Model
In `app/api/shipping-advisor/route.ts`, replace `gpt-4-turbo` with:
- `gpt-4` (cheaper)
- `gpt-3.5-turbo` (fastest, cheaper)

### Modify Extraction Prompt
Update the system message in `extractShippingDetails()` function to customize what the AI extracts.

## Troubleshooting

### "MONGODB_URI not defined"
- Check `.env.local` file exists in project root
- Restart dev server after adding env vars

### "OpenAI API Error"
- Verify `OPENAI_API_KEY` is correct
- Check API key has sufficient credits
- Check rate limits (OpenAI has usage limits)

### "Route not found" errors
- Ensure city names in database match the expected format (e.g., "Delhi" not "delhi")
- Add more routes to MongoDB collection

### Component not rendering
- Ensure `AIShippingAdvisor` is imported correctly
- Check if page route is accessible at `/shipping-advisor`
