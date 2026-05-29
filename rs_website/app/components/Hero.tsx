"use client";

import React, { useEffect, useRef } from "react";
import FlipingIcons from "./Flipingicons";

export default function Hero() {
  const containerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;

    const items = Array.from(root.querySelectorAll<HTMLElement>(".hero-item"));
    if (typeof window !== "undefined" && !("IntersectionObserver" in window)) {
      // fallback for very old browsers: reveal immediately
      items.forEach((el) => el.classList.add("in-view"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log("Hero in view — adding in-view to items");
            items.forEach((el) => el.classList.add("in-view"));
            io.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );

    const first = items[0] ?? root;
    io.observe(first);

    return () => io.disconnect();
  }, []);

  return (
<section
  ref={containerRef}
  className="relative min-h-[98vh] overflow-hidden text-white flex items-end justify-center pb-20"
  style={{
    backgroundImage:
      "url('https://plus.unsplash.com/premium_photo-1679758629516-6fe7a51fad5c?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wx0...')",
    backgroundSize: "cover",
    backgroundPosition: "top",
  }}
>
  {/* 🔵 DARK BLUE OVERLAY */}
  <div className="absolute inset-0 bg-gradient-to-b from-blue-500 via-[#061a3a]/40 to-[#061a3a]/90 z-0" />

  {/* CONTENT */}
  <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 sm:py-0">
    <div className="space-y-6 text-center">
      <FlipingIcons />

      <p className="hero-item text-sm font-semibold uppercase tracking-[0.24em] text-white">
        Routes Worldwide Express
      </p>

      <h1 className="hero-item text-4xl tracking-tight font-[manrope] sm:text-5xl lg:text-7xl">
        Seamless Global Shipping Made Simple.
      </h1>

      <p className="hero-item mx-auto max-w-2xl text-lg leading-8 sm:text-xl">
        Keep every shipment moving with fast tracking, expert customs support, and dependable logistics from origin to destination.
      </p>

      <div className="hero-item flex items-center justify-center gap-4 mt-6">
        <img src="/icons/online-store.png" className="w-16 h-16 object-contain rounded-2xl bg-white p-2" />
        <img src="/icons/industry.png" className="w-16 h-16 object-contain rounded-2xl bg-white p-2" />
        <img src="/icons/drug.png" className="w-16 h-16 object-contain rounded-2xl bg-white p-2" />
        <img src="/icons/retailer.png" className="w-16 h-16 object-contain rounded-2xl bg-white p-2" />
      </div>

      <div className="hero-item flex flex-col items-center justify-center gap-4 sm:flex-row">
        <a
          href="/track"
          className="inline-flex rounded-full bg-[#c8102e] px-6 py-3 text-sm font-semibold text-white hover:bg-[#a10a25]"
        >
          Track your shipment
        </a>
      </div>
    </div>
  </div>
</section>
  );
}
