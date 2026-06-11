"use client";

import { useEffect, useRef, useState } from "react";
import { CheckCircle2, Globe2, ShieldCheck } from "lucide-react";

const steps = [
  {
    title: "Request a quote",
    description:
      "Share your shipment details and destinations so our team can recommend the optimal route and service level.",
    icon: Globe2,
  },
  {
    title: "Book your transport",
    description:
      "Choose the best shipping option for your cargo and confirm pickup, documentation, and insurance preferences.",
    icon: ShieldCheck,
  },
  {
    title: "Track in real time",
    description:
      "Monitor your shipment from origin to destination with live updates and proactive status alerts.",
    icon: CheckCircle2,
  },
];

export default function HowToGetStarted() {
  const [activeStep, setActiveStep] = useState(-1);
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let timers: any[] = [];

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          timers = [
            setTimeout(() => setActiveStep(0), 200),
            setTimeout(() => setActiveStep(1), 700),
            setTimeout(() => setActiveStep(2), 1200),
          ];

          observer.unobserve(section);
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
      timers.forEach((timer) => clearTimeout(timer));
    };
  }, []);

  return (
    <section ref={sectionRef} className="bg-slate-100 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="mx-auto mb-12 max-w-5xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#c8102e]">
            Getting started
          </p>

          <h2 className="mt-4 mb-4 text-3xl font-semibold text-slate-950 sm:text-5xl md:mt-12">
            How to launch your first shipment ?
          </h2>

          <p className="text-base leading-7 text-slate-600 sm:text-lg">
            Start shipping with confidence in just a few simple steps. We make
            global logistics transparent, predictable, and easy to manage.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {steps.map((step, index) => {
            const isActive = activeStep >= index;

            return (
              <div
                key={step.title}
                className={`rounded border bg-white p-8 text-center transition-all duration-500 hover:-translate-y-1 hover:shadow-lg ${
                  isActive
                    ? "border-[#c8102e]/40 shadow-md"
                    : "border-slate-200"
                }`}
              >
                <div
                  className={`mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full transition-all duration-500 ${
                    isActive
                      ? "bg-[#c8102e] shadow-lg shadow-red-500/25"
                      : "bg-[#c8102e]/5"
                  }`}
                >
                  <span
                    className={`text-6xl font-semibold transition-all duration-500 ${
                      isActive
                        ? "scale-110 text-white"
                        : "text-[#c8102e]/70"
                    }`}
                  >
                    {index + 1}
                  </span>
                </div>

                <h3 className="mt-3 text-xl text-slate-950">{step.title}</h3>

                <p className="mt-4 text-sm leading-6 text-slate-600">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}