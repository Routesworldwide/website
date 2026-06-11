"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

export default function CTASection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(section);
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-white px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div
          className={`relative overflow-hidden rounded-r-2xl border border-slate-200 bg-white shadow-[0_20px_80px_rgba(15,39,70,0.08)] transition-all duration-700 ease-out ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-14 opacity-0"
          }`}
        >
          {/* Accent Line */}
          <div className="absolute left-0 top-0 h-full w-1 bg-[#c8102e]" />

          <div className="grid items-center lg:grid-cols-[1fr_420px]">
            {/* Left Content */}
            <div className="px-8 py-14 sm:px-12 lg:px-16 lg:py-20">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#c8102e] sm:text-sm">
                READY TO SHIP
              </p>

              <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-[#0f2746] sm:text-5xl lg:text-6xl">
                Let’s move your cargo
                <br className="hidden sm:block" />
                across the world.
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                Reliable freight forwarding, customs clearance and logistics
                solutions designed for businesses that need speed,
                transparency and global reach.
              </p>

              <div className="mt-10">
                <a
                  href="/contact"
                  className="group inline-flex items-center gap-3 rounded-full bg-[#0f2746] px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#c8102e]"
                >
                  Get a Quote

                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              </div>
            </div>

            {/* Right GIF Area */}
            <div className="relative h-[300px] overflow-hidden border-t border-slate-200 bg-slate-50 lg:h-full lg:border-l lg:border-t-0">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 h-full w-full object-cover"
              >
                <source src="/ctagif.webm" type="video/webm" />
              </video>

              {/* Optional soft overlay */}
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-white/10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}