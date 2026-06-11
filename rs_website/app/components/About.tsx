"use client";

import { useEffect, useRef, useState } from "react";
import MovingAnimattion from "./MovingAnimattion";
import WhyUs from "./WhyUs";
import TestimonialsSection from "./testimonials";

import { Globe, ShieldCheck, Clock3, Truck } from "lucide-react";

export default function AboutPage() {
  const [whoVisible, setWhoVisible] = useState(false);
  const whoRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = whoRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setWhoVisible(true);
          observer.unobserve(section);
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

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
    <main className="overflow-hidden bg-white text-[#0f172a]">
      {/* ================= HERO SECTION ================= */}
      <section className="relative flex min-h-[98vh] items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://pixabay.com/images/download/druckfuchs-container-789488_1920.jpg')",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#071426]/45 via-[#071426]/40 to-[#071426]/40" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-28 text-center lg:px-8">
          <h1 className="mt-6 font-[manrope] text-4xl leading-tight text-white sm:text-5xl lg:text-8xl">
            worldwide freight solutions
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300 sm:text-xl">
            We help businesses move cargo worldwide through dependable
            logistics, streamlined supply chains, and modern transportation
            solutions built for global operations.
          </p>
        </div>
      </section>

      <MovingAnimattion />

      {/* ================= WHO WE ARE ================= */}
      <section ref={whoRef} className="relative bg-[#f8fafc] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* Images */}
            <div
              className={`relative h-[560px] w-full transition-all duration-1000 ease-out ${
                whoVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-16 opacity-0"
              }`}
            >
              <div
                className={`absolute -left-6 -top-6 z-0 h-32 w-32 rounded bg-red-500 transition-all delay-200 duration-700 ${
                  whoVisible ? "scale-100 opacity-100" : "scale-75 opacity-0"
                }`}
              />

              <img
                src="https://plus.unsplash.com/premium_photo-1681487855134-d6c0434f91f8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAwfHxsb2dpc3RpY3N8ZW58MHx8MHx8fDA%3D"
                alt="Logistics"
                className={`relative z-10 h-[500px] w-full rounded-3xl object-cover shadow-xl transition-all delay-150 duration-1000 ease-out ${
                  whoVisible
                    ? "translate-y-0 scale-100 opacity-100"
                    : "translate-y-10 scale-95 opacity-0"
                }`}
              />

              <div
                className={`absolute bottom-12 right-[-30px] z-30 h-[260px] w-[260px] overflow-hidden rounded-3xl border-[6px] border-white shadow-2xl transition-all delay-500 duration-1000 ease-out ${
                  whoVisible
                    ? "translate-x-0 translate-y-0 rotate-0 opacity-100"
                    : "translate-x-12 translate-y-12 rotate-3 opacity-0"
                }`}
              >
                <img
                  src="https://plus.unsplash.com/premium_photo-1754640176671-13927d1aff5c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D"
                  alt="Cargo"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
            </div>

            {/* Text Block */}
            <div
              className={`transition-all delay-300 duration-1000 ease-out ${
                whoVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-16 opacity-0"
              }`}
            >
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c8102e]">
                Who We Are
              </p>

              <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#071426] sm:text-4xl">
                Modern Logistics Built For Global Businesses
              </h2>

              <p className="mt-6 text-sm leading-6 text-gray-600">
                At Routes Worldwide Express, we are committed to providing
                dependable logistics and transportation solutions that help
                businesses move goods efficiently across domestic and
                international markets. With a strong focus on reliability,
                speed, and customer satisfaction, we work closely with our
                clients to understand their unique shipping requirements.
              </p>

              <p className="mt-5 text-sm leading-6 text-gray-600">
                Our comprehensive range of logistics services includes air
                freight, road transportation, warehousing, and
                supply chain management. Backed by an experienced team and a
                trusted global network, we ensure that every shipment is handled
                with care, precision, and complete transparency.
              </p>

              <div className="mt-10 grid grid-cols-2 gap-6 text-center">
                <div
                  className={`rounded border border-gray-200 border-b-4 border-b-red-500 bg-white p-6 shadow-sm transition-all delay-500 duration-700 hover:-translate-y-1 ${
                    whoVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                  }`}
                >
                  <h3 className="font-[manrope] text-3xl font-bold text-[#071426]">
                    120+
                  </h3>
                  <p className="mt-2 text-sm uppercase text-gray-500">
                    Countries Connected
                  </p>
                </div>

                <div
                  className={`rounded border border-gray-200 border-b-4 border-b-red-500 bg-white p-6 shadow-sm transition-all delay-700 duration-700 hover:-translate-y-1 ${
                    whoVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                  }`}
                >
                  <h3 className="font-[manrope] text-3xl font-bold text-[#071426]">
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

      <WhyUs />
      <TestimonialsSection />
    </main>
  );
}
