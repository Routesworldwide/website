import React from 'react'
import ServicesSection from '../components/ServicesSection'
import CTASection from '../components/CtaSection'

export default function ServicesPage() {
  return (
    <main>
      <section
        className="h-screen center bg-cover flex items-center bg-red-500 justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504123010103-b5f6b5d3a1a2?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&s=8a2b0a6c4d8b0e7a3c1f9a2b6e7d9f0b')",
        }}
      >
        <div className="px-6 py-4 rounded text-center">
          <h1 className="text-4xl md:text-5xl font-semibold font-[manrope]">Comprehensive Logistics</h1>
          <p className=" mt-5"><span className="font-bold text-white">Air .</span>  <span className="font-bold text-white">Sea .</span>  <span className="font-bold text-white">Road .</span>  <span className="font-bold text-white">Rail .</span>  <span className="font-bold text-white">Warehousing .</span>  <span className="font-bold text-white">Customs .</span>  <span className="font-bold text-white">Couriers</span></p>
        </div>
      </section>

      <ServicesSection />
      <CTASection />
    </main>
  )
}
