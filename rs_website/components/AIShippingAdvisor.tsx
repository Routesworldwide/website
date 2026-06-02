'use client';

import { useState } from 'react';
import { Loader2, Send, AlertCircle, CheckCircle, Package } from 'lucide-react';

interface ShippingQuote {
  method: string;
  costPerKg: number;
  totalCost: number;
  transitTime: string;
}

interface APIResponse {
  success: boolean;
  bestShippingMethod?: string;
  estimatedCost?: number;
  transitTime?: string;
  requiredDocuments?: string[];
  comparison?: ShippingQuote[];
  error?: string;
}

export default function AIShippingAdvisor() {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<APIResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!input.trim()) {
      setError('Please enter a shipping query');
      return;
    }

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await fetch('/api/shipping-advisor', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userInput: input }),
      });

      const data: APIResponse = await response.json();

      if (!response.ok || !data.success) {
        setError(data.error || 'Failed to get shipping advice');
        setResult(null);
      } else {
        setResult(data);
        setError(null);
      }
    } catch (err) {
      setError(
        'An error occurred while processing your request. Please try again.'
      );
      setResult(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="flex items-center justify-center mb-4">
            <Package className="w-10 h-10 text-red-600 mr-3" />
            <h1 className="text-4xl font-bold text-slate-900">
              AI Shipping Advisor
            </h1>
          </div>
          <p className="text-lg text-slate-600">
            Get instant shipping quotes and recommendations powered by AI
          </p>
        </div>

        {/* Input Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border-t-4 border-red-600">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-slate-900 mb-3">
                Describe your shipping need
              </label>
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                disabled={loading}
                placeholder="e.g., I want to send 20 kg of garments from Delhi to Dubai"
                className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:outline-none focus:border-red-600 disabled:bg-slate-50 disabled:text-slate-400 resize-none"
                rows={4}
              />
              <p className="mt-2 text-xs text-slate-500">
                Include: weight (kg), items type, origin city, destination city,
                and urgency if relevant
              </p>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 disabled:from-slate-400 disabled:to-slate-400 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Get Shipping Quote
                </>
              )}
            </button>
          </form>
        </div>

        {/* Error State */}
        {error && (
          <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6 mb-8 flex gap-4">
            <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-red-900 mb-1">Error</h3>
              <p className="text-red-700">{error}</p>
            </div>
          </div>
        )}

        {/* Results Section */}
        {result && result.success && (
          <div className="space-y-6">
            {/* Best Recommendation */}
            <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-xl shadow-xl p-8 border-l-4 border-red-600 text-white">
              <div className="flex items-start gap-4 mb-6">
                <CheckCircle className="w-8 h-8 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold mb-2">
                    Recommended Shipping Method
                  </h2>
                  <p className="text-slate-300">
                    Based on your requirements and available rates
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 bg-slate-700/30 rounded-lg p-6">
                <div>
                  <p className="text-slate-300 text-sm mb-1">Method</p>
                  <p className="text-3xl font-bold text-red-500">
                    {result.bestShippingMethod}
                  </p>
                </div>
                <div>
                  <p className="text-slate-300 text-sm mb-1">Estimated Cost</p>
                  <p className="text-3xl font-bold">
                    ₹{result.estimatedCost?.toLocaleString('en-IN', {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </p>
                </div>
                <div>
                  <p className="text-slate-300 text-sm mb-1">Transit Time</p>
                  <p className="text-3xl font-bold">{result.transitTime}</p>
                </div>
              </div>

              {result.requiredDocuments && result.requiredDocuments.length > 0 && (
                <div className="mt-6 pt-6 border-t border-slate-600">
                  <h3 className="font-semibold mb-3">Required Documents</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {result.requiredDocuments.map((doc, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <span className="text-slate-200">{doc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Comparison Table */}
            {result.comparison && result.comparison.length > 1 && (
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-slate-900 to-slate-800 px-8 py-6 text-white">
                  <h3 className="text-xl font-bold">Available Shipping Options</h3>
                  <p className="text-slate-300 text-sm mt-1">
                    Compare all available methods for your shipment
                  </p>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b-2 border-slate-200 bg-slate-50">
                        <th className="px-6 py-4 text-left font-semibold text-slate-900">
                          Method
                        </th>
                        <th className="px-6 py-4 text-left font-semibold text-slate-900">
                          Rate/kg
                        </th>
                        <th className="px-6 py-4 text-left font-semibold text-slate-900">
                          Total Cost
                        </th>
                        <th className="px-6 py-4 text-left font-semibold text-slate-900">
                          Transit Time
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {result.comparison.map((quote, idx) => (
                        <tr
                          key={idx}
                          className={`border-b border-slate-200 ${
                            quote.method === result.bestShippingMethod
                              ? 'bg-red-50'
                              : 'hover:bg-slate-50'
                          } transition-colors`}
                        >
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                              {quote.method === result.bestShippingMethod && (
                                <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                              )}
                              <span className="font-semibold text-slate-900">
                                {quote.method}
                              </span>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-slate-600">
                            ₹{quote.costPerKg.toLocaleString('en-IN', {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            })}
                          </td>
                          <td className="px-6 py-4 font-semibold text-slate-900">
                            ₹{quote.totalCost.toLocaleString('en-IN', {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            })}
                          </td>
                          <td className="px-6 py-4 text-slate-600">
                            {quote.transitTime}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="bg-slate-50 px-8 py-4 text-xs text-slate-500 border-t border-slate-200">
                  <p>
                    ✓ Recommended option is highlighted in red. All prices are
                    derived from our database.
                  </p>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-2">
              <button
                onClick={() => {
                  setInput('');
                  setResult(null);
                  setError(null);
                }}
                className="py-3 px-6 bg-white border-2 border-slate-300 text-slate-900 font-semibold rounded-lg hover:bg-slate-50 transition-colors"
              >
                New Query
              </button>
              <button className="py-3 px-6 bg-gradient-to-r from-slate-900 to-slate-800 text-white font-semibold rounded-lg hover:from-slate-800 hover:to-slate-700 transition-colors">
                Book Now
              </button>
            </div>
          </div>
        )}

        {/* Empty State */}
        {!result && !error && !loading && (
          <div className="bg-white rounded-xl shadow-lg p-12 text-center border-t-4 border-slate-300">
            <Package className="w-16 h-16 text-slate-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-slate-900 mb-2">
              Ready to ship?
            </h3>
            <p className="text-slate-600">
              Enter your shipping details above to get instant quotes and
              recommendations.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
