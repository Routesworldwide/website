"use client";

import { useEffect, useRef, useState } from "react";

const achievements = [
  { value: "100+ Countries", label: "Global Reach" },
  { value: "10K+ Pin Codes", label: "Pan India" },
  { value: "24/7 Support", label: "Always Available" },
  { value: "100% Secure", label: "Insured Delivery" },
];

export default function Achievement() {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(section);
        }
      },
      {
        threshold: 0.25,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="overflow-hidden bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        {/* Heading */}
        <div
          className={`mx-auto mb-10 max-w-6xl text-center transition-all duration-700 ease-out ${
            isInView
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="mt-4 text-3xl font-semibold tracking-normal text-slate-950 sm:text-4xl">
            Trusted Logistics Performance, Built For Every Route.
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
            We deliver reliability at scale with nationwide coverage, fast
            support, and secure handling for every shipment.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {achievements.map((item, index) => (
            <div
              key={item.value}
              style={{
                transitionDelay: isInView ? `${index * 120}ms` : "0ms",
              }}
              className={`rounded border-b-4 border-b-red-400 bg-slate-50 px-6 py-8 text-center shadow-sm shadow-slate-900/5 transition-all duration-700 ease-out hover:-translate-y-1 hover:border-[#0f2746]/10 hover:shadow-md ${
                isInView
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
            >
              <p className="font-[manrope] text-3xl font-thin text-[#c8102e]">
                {item.value}
              </p>

              <p className="mt-3 text-sm font-medium text-slate-500">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}