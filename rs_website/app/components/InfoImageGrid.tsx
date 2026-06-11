import React from 'react';

const CheckIcon = () => (
  <svg className="h-5 w-5 text-[#c8102e] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

export default function InfoImageGrid() {
  return (
    <section className="py-16 sm:py-24 bg-white text-slate-900 font-sans flex items-center justify-center">
      <div className="max-w-7xl w-full mx-auto px-6 sm:px-8">
        
        {}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Clean and Structured Text Content */}
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-4">
              {/* <span className="inline-flex items-center text-xs font-semibold uppercase tracking-[0.2em] text-[#c8102e] bg-red-50 px-3 py-1.5 rounded-full border border-red-100">
                Logistics Intelligence
              </span> */}
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold  tracking-tight text-slate-950 leading-tight">
                Powerful logistics designed around your business
              </h2>
              
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                From small parcels to full container loads, we build a route that fits your cargo, timeline, and budget. Our systems adapt to dynamic real-world conditions to keep your business moving forward.
              </p>
            </div>

            {}
            <ul className="space-y-4 pt-2">
              <li className="flex gap-3">
                <CheckIcon />
                <div>
                  <h4 className="font-semibold text-slate-950 text-base">Dynamic Routing</h4>
                  <p className="text-sm text-slate-600 mt-0.5">Adaptable planning configured to avoid season and demand bottlenecks.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <CheckIcon />
                <div>
                  <h4 className="font-semibold text-slate-950 text-base">Real-Time Control</h4>
                  <p className="text-sm text-slate-600 mt-0.5">Visibility and automated status notifications from pickup to final delivery.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <CheckIcon />
                <div>
                  <h4 className="font-semibold text-slate-950 text-base">Global Corridors</h4>
                  <p className="text-sm text-slate-600 mt-0.5">Coordinated handoffs across air and land corridors worldwide.</p>
                </div>
              </li>
            </ul>

            {}
            
          </div>

          {}
          <div className="relative">
            <div className="overflow-hidden rounded-[24px] sm:rounded-[32px] border border-slate-100 shadow-xl bg-slate-50 aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80"
                alt="Modern organized cargo hub"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
        
      </div>
    </section>
  );
}
