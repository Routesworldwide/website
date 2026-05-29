"use client";
import MovingAnimattion from "./MovingAnimattion";
import WhyUs from "./WhyUs";
import TestimonialsSection from "./testimonials";

import {
  Globe,
  ShieldCheck,
  Clock3,
  Truck,
  ArrowRight,
} from "lucide-react";

export default function AboutPage() {
  const features = [
    {
      icon: Globe,
      title: "Global Logistics Network",
      desc: "Reliable freight and shipping solutions across international markets with seamless coordination.",
    },
    {
      icon: Clock3,
      title: "Fast & On-Time Delivery",
      desc: "Efficient operations and real-time tracking to ensure shipments arrive on schedule.",
    },
    {
      icon: ShieldCheck,
      title: "Secure Cargo Handling",
      desc: "Advanced handling standards and secure transportation for every shipment.",
    },
    {
      icon: Truck,
      title: "End-to-End Support",
      desc: "From warehousing to last-mile delivery, we manage the entire logistics process.",
    },
  ];

  return (
    <main className="bg-white text-[#0f172a] overflow-hidden">
      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-[98vh] flex items-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1600&auto=format&fit=crop')",
          }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#071426]/45 via-[#071426]/40 to-[#071426]/40" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-28 w-full text-center">
          <div className="">
            {/* <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm uppercase tracking-[0.2em] text-gray-200 backdrop-blur-sm">
              Global Freight Solutions
            </p> */}

            <h1 className="mt-6 text-4xl font-semibold leading-tight font-[manrope] text-white  sm:text-5xl lg:text-6xl">
              Delivering seamless
               worldwide freight 
              solutions
            </h1>

            <p className="mt-6 max-w-2xl mx-auto text-lg leading-8 text-gray-300 sm:text-xl">
              We help businesses move cargo worldwide through dependable
              logistics, streamlined supply chains, and modern transportation
              solutions built for global operations.
            </p>


          </div>
        </div>
      </section>
      {/* ================= MOVING ANIMATION ================= */}
      <MovingAnimattion />

      {/* ================= WHO WE ARE ================= */}
      <section className="relative py-24 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* Image */}
            <div className="relative h-[560px] w-full">

              {/* Decorative Box */}
              <div className="absolute -top-6 -left-6 h-32 w-32 rounded bg-red-500 z-0" />

              {/* MAIN IMAGE */}
              <img
                src="https://plus.unsplash.com/premium_photo-1681487855134-d6c0434f91f8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAwfHxsb2dpc3RpY3N8ZW58MHx8MHx8fDA%3D"

                alt="Logistics"
                className="relative z-10 h-[500px] w-full rounded-3xl object-cover "
              />



              {/* BOTTOM MID RIGHT IMAGE */}
              <div className="absolute bottom-12 right-[-30px] z-30 h-[260px] w-[260px] overflow-hidden rounded-3xl border-[6px] border-white shadow-2xl">
                <img
                  src="https://plus.unsplash.com/premium_photo-1754640176671-13927d1aff5c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D"
                  alt="Cargo"
                  className="h-full w-full object-cover"

                />
              </div>

            </div>

            {/* Text */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c8102e]">
                Who We Are
              </p>

              <h2 className="mt-4 text-3xl font-semibold font-[manrope] leading-tight text-[#071426] sm:text-4xl">
                Modern Logistics Built For Global Businesses
              </h2>

              <p className="mt-6 text-sm leading-5 text-gray-600">
                We provide smart and dependable logistics services that help
                businesses streamline transportation, improve supply chain
                efficiency, and move freight confidently across the globe.lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, doloremque?
              </p>

              <p className="mt-5 text-sm leading-5 text-gray-600">
                Our team combines operational expertise, modern tracking
                systems, and strong international partnerships to deliver
                seamless freight solutions tailored to every client.lorem300
                ipsum dolor sit amet consectetur adipisicing and strong international partnerships to deliver
                seamless freight solutions tailored to every client.lorem300
                ipsum dolor sit amet consectetur adipisicing and strong international partnerships to deliver
                seamless freight solutions tailored to every client.lorem300
                ipsum dolor sit amet consectetur adipisicing and strong international partnerships to deliver
                seamless freight solutions tailored to every client.lorem300
                ipsum dolor sit amet consectetur adipisicing
              </p>

              <div className="mt-10 grid grid-cols-2 gap-6 text-center">

                <div className="rounded border border-gray-200 border-b-5 border-b-red-500 bg-white p-6 shadow-sm transition hover:-translate-y-1">
                  <h3 className="text-3xl font-bold font-[manrope] text-[#071426]">
                    120 +
                  </h3>

                  <p className="mt-2 text-sm uppercase text-gray-500">
                    Countries Connected
                  </p>
                </div>

                <div className="rounded border border-gray-200 border-b-5 border-b-red-500 bg-white p-6 shadow-sm transition hover:-translate-y-1">
                  <h3 className="text-3xl font-bold font-[manrope] text-[#071426]">
                    24/7
                  </h3>

                  <p className="mt-2 text-sm uppercase text-gray-500">
                    Shipment Support
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
       <WhyUs /> 

       {/* testimonials */}
       <TestimonialsSection />
    </main>
  );
}