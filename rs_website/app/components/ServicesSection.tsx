"use client";

import { useEffect, useState } from "react";
import {
  PlaneTakeoff,
  Truck,
  ShieldCheck,
  Boxes,
  PackageCheck,
} from "lucide-react";

const services = [
  {
    id: "01",
    title: "Air Freight",
    tagline: "Fast international cargo",
    description:
      "Fast and secure international air freight solutions designed for urgent shipments and time-sensitive cargo worldwide.",
    stat: "Fast",
    statLabel: "Air Cargo",
    icon: PlaneTakeoff,
    image:
      "https://plus.unsplash.com/premium_vector-1723266384407-170261f84fd1?q=80&w=880&auto=format&fit=crop",
  },
  {
    id: "02",
    title: "Express Courier",
    tagline: "Rapid parcel delivery",
    description:
      "Rapid delivery services for urgent packages with guaranteed timely arrival and comprehensive tracking.",
    stat: "24/7",
    statLabel: "Tracking",
    icon: Truck,
    image:
      "https://plus.unsplash.com/premium_vector-1723266253608-85a7f5251b26?q=80&w=880&auto=format&fit=crop",
  },
  {
    id: "03",
    title: "Customs Clearance",
    tagline: "Smooth documentation",
    description:
      "Smooth customs documentation and clearance services for hassle-free international shipping and compliance.",
    stat: "Easy",
    statLabel: "Clearance",
    icon: ShieldCheck,
    image:
      "https://plus.unsplash.com/premium_vector-1723266236025-0596cdc8e9bf?q=80&w=880&auto=format&fit=crop",
  },
  {
    id: "04",
    title: "Commercial Cargo",
    tagline: "Business freight support",
    description:
      "Comprehensive freight solutions for businesses with specialized handling and logistics support for industrial shipments.",
    stat: "B2B",
    statLabel: "Solutions",
    icon: PackageCheck,
    image:
      "https://plus.unsplash.com/premium_vector-1726216916848-eb4deb378e5d?q=80&w=880&auto=format&fit=crop",
  },
  {
    id: "05",
    title: "Personal Shipments",
    tagline: "Secure personal delivery",
    description:
      "Secure and reliable delivery services for individual parcels and personal items with end-to-end tracking.",
    stat: "Safe",
    statLabel: "Delivery",
    icon: Boxes,
    image:
      "https://plus.unsplash.com/premium_vector-1726762238748-ccfe36071798?q=80&w=1074&auto=format&fit=crop",
  },
];

const industries = [
  {
    title: "E-commerce",
    description:
      "Fast and scalable logistics solutions for fulfillment and last-mile delivery operations.",
    iconPath: "M3 7h18M5 7l1 12h12l1-12",
  },
  {
    title: "Manufacturing",
    description:
      "Reliable freight and supply chain support for industrial cargo transportation.",
    iconPath: "M4 20h16M6 16V8m4 8V4m4 12v-6",
  },
  {
    title: "Healthcare",
    description:
      "Secure and temperature-sensitive transportation solutions for healthcare industries.",
    iconPath: "M12 6v12m6-6H6",
  },
  {
    title: "Retail",
    description:
      "Efficient inventory transportation and distribution solutions for modern retail supply chains.",
    iconPath: "M3 13h18M5 17h14M7 9h10",
  },
];

const carouselImages = [
  "https://plus.unsplash.com/premium_vector-1718307313013-03d8a252dfdd?q=80&w=877&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/vector-1768383602501-13a9af1e189a?q=80&w=880&auto=format&fit=crop",
  "https://plus.unsplash.com/premium_vector-1744201400608-94c9107d7b09?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/vector-1773995889646-b9dfc14d05ed?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

export default function ServicesSection() {
  const [active, setActive] = useState(0);
  const [activeImage, setActiveImage] = useState(0);

  const svc = services[active];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % carouselImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-28">
      <style jsx>{`
        @keyframes serviceFade {
          0% {
            opacity: 0;
            transform: translateX(35px) scale(0.96);
          }
          100% {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }

        @keyframes contentFade {
          0% {
            opacity: 0;
            transform: translateY(18px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-red-500/10 blur-[90px]" />
      <div className="absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full blur-[90px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Services Selector */}
        <div className="grid grid-cols-1 gap-6 rounded border border-gray-300 p-3 sm:p-4 lg:grid-cols-2 lg:gap-10">
          <ul className="border-t border-[#0f2746]/15">
            {services.map((s, i) => {
              const isActive = active === i;

              return (
                <li
                  key={s.id}
                  onClick={() => setActive(i)}
                  className={`group relative grid cursor-pointer grid-cols-[2.75rem_1fr_auto] items-center gap-3 border-b border-[#0f2746]/15 px-3 py-5 transition-all duration-300 sm:grid-cols-[3.5rem_1fr_auto] sm:gap-5 sm:px-4 sm:py-6 ${
                    isActive
                      ? "bg-[#0f2746] text-white"
                      : "bg-white text-[#0f2746] hover:bg-[#18395f]"
                  }`}
                >
                  {isActive && (
                    <span className="absolute left-0 top-0 h-full w-[3px] bg-red-600" />
                  )}

                  <span
                    className={`text-xs font-bold transition-colors duration-300 ${
                      isActive
                        ? "text-red-400"
                        : "text-[#0f2746]/45 group-hover:text-red-300"
                    }`}
                  >
                    {s.id}
                  </span>

                  <span
                    className={`text-sm font-extrabold uppercase tracking-tight transition-colors duration-300 sm:text-base ${
                      isActive
                        ? "text-white"
                        : "text-[#0f2746] group-hover:text-white"
                    }`}
                  >
                    {s.title}
                  </span>

                  <span
                    className={`flex h-8 w-8 items-center justify-center rounded-full border text-sm transition-all duration-300 ${
                      isActive
                        ? "rotate-45 border-red-600 bg-red-600 text-white"
                        : "border-[#0f2746]/20 text-[#0f2746]/50 group-hover:rotate-45 group-hover:border-red-500 group-hover:bg-red-500 group-hover:text-white"
                    }`}
                  >
                    →
                  </span>
                </li>
              );
            })}
          </ul>

          <div
            key={active}
            className="relative flex min-h-[420px] animate-[serviceFade_0.55s_ease-out] flex-col justify-between overflow-hidden rounded border border-[#0f2746]/15 p-6 sm:p-8 md:p-12"
          >
            <div
              className="absolute inset-0 bg-contain bg-center bg-no-repeat transition-all duration-700"
              style={{
                backgroundImage: `url(${svc.image})`,
              }}
            />

            <div className="absolute inset-0 bg-black/85" />
            <div className="absolute bottom-0 left-0 h-1 w-full bg-red-600" />

            <div className="relative z-10 animate-[contentFade_0.7s_ease-out]">
              <div className="mb-5 text-xs font-extrabold uppercase tracking-[0.25em] text-red-400">
                Service {svc.id}
              </div>

              <h3 className="text-3xl font-extrabold uppercase leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
                {svc.title}
              </h3>

              <div className="mt-4 text-sm font-semibold tracking-wide text-red-400">
                — {svc.tagline}
              </div>

              <p className="mt-8 max-w-xl text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
                {svc.description}
              </p>
            </div>

            <div className="relative z-10 mt-12 flex animate-[contentFade_0.8s_ease-out] items-end gap-3 border-t border-white/10 pt-8">
              <span className="text-4xl font-extrabold leading-none text-red-500 sm:text-5xl">
                {svc.stat}
              </span>

              <span className="pb-1 text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                {svc.statLabel}
              </span>
            </div>
          </div>
        </div>

        {/* Industries We Serve */}
        <section className="py-16 sm:py-20 lg:py-32">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-14">
            {/* Left Side */}
            <div>
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#c8102e]">
                  Industries We Serve
                </p>
              </div>

              <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-14 sm:grid-cols-2">
                {industries.map((industry) => (
                  <div
                    key={industry.title}
                    className="group rounded border-b-4 border-red-500 bg-gradient-to-br from-blue-400 via-blue-700 to-blue-950 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-7"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-7 w-7"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.8}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d={industry.iconPath}
                        />
                      </svg>
                    </div>

                    <h3 className="mt-6 text-xl font-semibold text-white">
                      {industry.title}
                    </h3>

                    <p className="mt-4 leading-7 text-white/90">
                      {industry.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image Carousel */}
            <div className="relative h-[360px] overflow-hidden rounded bg-[#0f2746] shadow-xl sm:h-[460px] lg:h-[620px]">
              {carouselImages.map((image, index) => (
                <img
                  key={image}
                  src={image}
                  alt={`Logistics ${index + 1}`}
                  className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ${
                    activeImage === index
                      ? "scale-100 opacity-100"
                      : "scale-105 opacity-0"
                  }`}
                />
              ))}

              <div className="absolute inset-0 bg-[#0f2746]/45" />

              <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2">
                {carouselImages.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    aria-label={`Show logistics image ${index + 1}`}
                    onClick={() => setActiveImage(index)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      activeImage === index
                        ? "w-8 bg-red-500"
                        : "w-2.5 bg-white/60 hover:bg-white"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
