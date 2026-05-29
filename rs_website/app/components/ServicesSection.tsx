"use client";

import Image from "next/image";

const services = [
  {
    title: "Air Freight",
    description:
      "Fast and secure international air freight solutions designed for urgent shipments and time-sensitive cargo worldwide.",
  },
  {
    title: "Sea Freight",
    description:
      "Reliable ocean freight services with optimized shipping routes and cost-effective container solutions.",
  },
  {
    title: "Road Freight",
    description:
      "Efficient domestic and cross-border road transport with real-time tracking and secure handling.",
  },
  {
    title: "Rail Freight",
    description:
      "Sustainable and dependable rail logistics for bulk cargo and long-distance transportation.",
  },
  {
    title: "Warehousing",
    description:
      "Modern storage facilities with inventory management, packaging, and distribution support.",
  },
  {
    title: "Custom Clearance",
    description:
      "Smooth customs documentation and clearance services for hassle-free international shipping.",
  },
  {
    title: "International Couriers",
    description:
      "Express worldwide courier delivery solutions for businesses and personal shipments.",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section Heading */}
        <div className="mb-14 text-center py-4">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
            Our Services
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-semibold font-[manrope]  text-slate-900">
            End-to-end logistics solutions built for modern businesses
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            From international freight forwarding to warehousing and customs
            support, we simplify supply chains with reliable transport
            solutions across the globe.
          </p>
        </div>

        {/* Main Two Blocks */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">

          {/* LEFT IMAGE BLOCK */}
          <div className="sticky top-24 h-[700px] overflow-hidden rounded bg-slate-100 ">

            {/* Main Image */}
            <div className="relative h-[78%] w-full">
              <Image
                src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070&auto=format&fit=crop"
                alt="Logistics"
                fill
                className="object-cover"
              />
            </div>

            {/* Bottom Content */}
            <div className="h-[22%] p-8 flex flex-col justify-center bg-white">
              <h3 className="text-xl font-semibold text-slate-900">
                Global Freight Network
              </h3>

              <p className="mt-3 text-slate-600 leading-7">
                Delivering seamless transportation solutions through air, sea,
                rail, and road freight with worldwide operational support.
              </p>
            </div>
          </div>

          {/* RIGHT SCROLLABLE SERVICES */}
          <div className="h-[700px] overflow-y-auto pr-2 space-y-6">
            {services.map((service, index) => (
              <div
                key={index}
                className={`  p-8 transition-all duration-300
    ${index % 2 === 0
                    ? "bg-[#0f2746] border-[#0f2746] text-white "
                    : "bg-white text-slate-900 "
                  }`}
              >
                <div className="flex items-start gap-5">

                  {/* Number */}
                  <div
                    className={`flex h-9 w-9 shrink-0 items-center justify-center  text-lg font-semibold
        ${index % 2 === 0
                        ? "bg-white/10 text-white"
                        : "bg-red-50 text-red-600"
                      }`}
                  >
                    0{index + 1}
                  </div>

                  {/* Content */}
                  <div>
                    <h3
                      className={`text-xl font-semibold ${index % 2 === 0 ? "text-white" : "text-slate-900"
                        }`}
                    >
                      {service.title}
                    </h3>

                    <p
                      className={`mt-4 leading-7 ${index % 2 === 0 ? "text-slate-200" : "text-slate-600"
                        }`}
                    >
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
      {/* Industries We Serve */}
      <section className="py-24 lg:py-46 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          {/* Main Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

            {/* LEFT SIDE */}
            <div>

              {/* Heading */}
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#c8102e]">
                  Industries We Serve
                </p>

                <h2 className="mt-4 text-4xl md:text-5xl font-semibold font-[manrope] leading-tight text-slate-900">
                  Logistics solutions tailored for every industry
                </h2>

                <p className="mt-6 text-lg leading-8 text-slate-600">
                  We support businesses across multiple industries with reliable,
                  scalable, and time-critical logistics operations worldwide.
                </p>
              </div>

              {/* Cards */}
              <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-6">

                {/* Card */}
                <div className="group rounded border-b-3 border-red-500 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-black text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 7h18M5 7l1 12h12l1-12" />
                    </svg>
                  </div>

                  <h3 className="mt-6 text-xl font-semibold text-slate-900">
                    E-commerce
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    Fast and scalable logistics solutions for fulfillment and
                    last-mile delivery operations.
                  </p>
                </div>

                {/* Card */}
                <div className="group rounded border-b-3 border-red-500 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-black text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 20h16M6 16V8m4 8V4m4 12v-6" />
                    </svg>
                  </div>

                  <h3 className="mt-6 text-xl font-semibold text-slate-900">
                    Manufacturing
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    Reliable freight and supply chain support for industrial cargo
                    transportation.
                  </p>
                </div>

                {/* Card */}
                <div className="group rounded border-b-3 border-red-500 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                    </svg>
                  </div>

                  <h3 className="mt-6 text-xl font-semibold text-slate-900">
                    Healthcare
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    Secure and temperature-sensitive transportation solutions for
                    healthcare industries.
                  </p>
                </div>

                {/* Card */}
                <div className="group rounded border-b-3 border-red-500  bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13h18M5 17h14M7 9h10" />
                    </svg>
                  </div>

                  <h3 className="mt-6 text-xl font-semibold text-slate-900">
                    Retail
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    Efficient inventory transportation and distribution solutions
                    for modern retail supply chains.
                  </p>
                </div>

              </div>
            </div>

            {/* RIGHT IMAGE BLOCK */}
            <div className="lg:sticky lg:top-24">
              <div className="overflow-hidden border border-slate-200 bg-white shadow-sm">

                <div className="grid gap-4">
                  <div className="relative h-[300px] w-full">
                    <img
                      src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=1974&auto=format&fit=crop"
                      alt="Logistics Industry"
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="relative h-[220px] w-full">
                      <img
                        src="https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?q=80&w=1200&auto=format&fit=crop"
                        alt="Warehouse operations"
                        className="h-full w-full object-cover"
                      />
                    </div>

                    <div className="relative h-[220px] w-full">
                      <img
                        src="https://images.unsplash.com/photo-1529253355930-8e0f54b7d054?q=80&w=1200&auto=format&fit=crop"
                        alt="Delivery fleet"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
    </section>
  );
}