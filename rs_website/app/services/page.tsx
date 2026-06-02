import React from 'react'
import ServicesSection from '../components/ServicesSection'
import CTASection from '../components/CtaSection'

export default function ServicesPage() {
  return (
    <main>
      <section
        className="relative h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url(/servicebg.png)",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100/40 via-blue
        -400/50 to-blue-700/50"></div>
        
        <div className="relative px-6 py-4 rounded text-center">
          <h1 className="text-4xl md:text-8xl  font-[manrope] text-white">Comprehensive Logistics</h1>
          <p className="mt-5 text-sm md:text-lg uppercase font-[manrope]"><span className="font-bold text-red-black">Air .</span>  <span className="font-bold text-red-black">Sea .</span>  <span className="font-bold text-red-black">Express .</span>  <span className="font-bold text-red-black">Customs .</span>  <span className="font-bold text-red-black">Commercial .</span>  <span className="font-bold text-red-black">Personal</span></p>
        </div>
      </section>

      <ServicesSection />
      <CTASection />
    </main>
  )
}
