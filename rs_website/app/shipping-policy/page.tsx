import React from 'react'

export default function ShippingPolicy() {
  return (
    <main>
      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504123010103-b5f6b5d3a1a2?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&s=8a2b0a6c4d8b0e7a3c1f9a2b6e7d9f0b')",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-700"></div>
        
        <div className="relative px-6 py-4 rounded text-center">
          <h1 className="text-4xl md:text-8xl font-[manrope] text-white">Shipping Policy</h1>
          <p className="mt-5 text-sm md:text-lg text-gray-100">Fast, reliable, and transparent shipping</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl md:text-4xl  font-[manrope] text-slate-900 mb-6">Shipping Policy</h2>
            <p className="text-gray-600 mb-8">Last updated: May 2026</p>

            <h3 className="text-2xl  text-slate-900 mt-8 mb-4">1. Shipping Methods</h3>
            <p className="text-slate-600 leading-8 mb-6">
              Routes Worldwide Express offers multiple shipping methods to meet your needs:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-6">
              <li><strong>Air Freight:</strong> Fast international shipping for urgent shipments (3-7 business days)</li>
              <li><strong>Road Transport:</strong> Domestic and cross-border delivery (2-5 business days)</li>
              <li><strong>Rail Freight:</strong> Bulk cargo for long-distance transportation (7-14 days)</li>
              <li><strong>Express Courier:</strong> Quick delivery for urgent packages (1-3 business days)</li>
            </ul>

            <h3 className="text-2xl  text-slate-900 mt-8 mb-4">2. Shipping Rates</h3>
            <p className="text-slate-600 leading-8 mb-6">
              Shipping rates are calculated based on:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-6">
              <li>Weight and dimensions of the shipment</li>
              <li>Origin and destination locations</li>
              <li>Shipping method selected</li>
              <li>Current fuel surcharges and market conditions</li>
              <li>Special handling requirements (fragile, hazardous, temperature-controlled)</li>
            </ul>

            <h3 className="text-2xl  text-slate-900 mt-8 mb-4">3. Delivery Times</h3>
            <p className="text-slate-600 leading-8 mb-6">
              Estimated delivery times are provided at the time of booking and are calculated from the date of shipment pickup. Please note that delivery times are estimates and cannot be guaranteed. Delays may occur due to customs clearance, weather conditions, or unforeseen circumstances.
            </p>

            <h3 className="text-2xl  text-slate-900 mt-8 mb-4">4. Tracking Your Shipment</h3>
            <p className="text-slate-600 leading-8 mb-6">
              All shipments include tracking capabilities. You will receive a tracking number via email that allows you to monitor your shipment in real-time. Track your shipment using our online tracking system on the website.
            </p>

            <h3 className="text-2xl  text-slate-900 mt-8 mb-4">5. Packaging Requirements</h3>
            <p className="text-slate-600 leading-8 mb-6">
              Proper packaging is essential for safe delivery. We recommend:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-6">
              <li>Using sturdy, new boxes or containers</li>
              <li>Protecting fragile items with bubble wrap or padding</li>
              <li>Ensuring proper weight distribution</li>
              <li>Clearly labeling all packages</li>
              <li>Following specific requirements for hazardous materials</li>
            </ul>

            <h3 className="text-2xl  text-slate-900 mt-8 mb-4">6. Insurance</h3>
            <p className="text-slate-600 leading-8 mb-6">
              While we take great care with all shipments, we recommend purchasing shipping insurance for high-value items. Insurance protects against loss or damage during transit. Please contact us for insurance rates and options.
            </p>

            <h3 className="text-2xl  text-slate-900 mt-8 mb-4">7. Customs and International Shipping</h3>
            <p className="text-slate-600 leading-8 mb-6">
              For international shipments, the customer is responsible for providing accurate customs documentation. We assist with:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-6">
              <li>Preparing customs declarations</li>
              <li>Arranging customs clearance</li>
              <li>Calculating duties and taxes (where applicable)</li>
              <li>Ensuring compliance with import/export regulations</li>
            </ul>

            <h3 className="text-2xl  text-slate-900 mt-8 mb-4">8. Damaged or Lost Shipments</h3>
            <p className="text-slate-600 leading-8 mb-6">
              In case of damage or loss:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-6">
              <li>Report damage within 48 hours of delivery</li>
              <li>Provide photos and documentation</li>
              <li>File a claim with our claims department</li>
              <li>Retain all packaging materials for inspection</li>
            </ul>

            <h3 className="text-2xl  text-slate-900 mt-8 mb-4">9. Return and Refund Policy</h3>
            <p className="text-slate-600 leading-8 mb-6">
              Customers may request a refund within 7 days of shipment if the service requirements are not met. Return shipping costs are the responsibility of the customer unless the delay was due to our error.
            </p>

            <h3 className="text-2xl  text-slate-900 mt-8 mb-4">10. Contact Us</h3>
            <p className="text-slate-600 leading-8 mb-6">
              For shipping inquiries or concerns, please <a href="/contact" className="text-blue-500 hover:underline">contact us</a>.
            </p>
            
          </div>
        </div>
      </section>
    </main>
  )
}
