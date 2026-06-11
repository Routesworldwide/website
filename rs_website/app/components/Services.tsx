"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Plane,
  Package,
  ShieldCheck,
  Factory,
  Home,
} from "lucide-react";

type Service = {
  title: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  image: string;
};

const services: Service[] = [
  {
    title: "Air Freight",
    description:
      "Fast and reliable international air cargo solutions for urgent shipments, time-sensitive goods, and global business deliveries.",
    icon: Plane,
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Express Courier",
    description:
      "Door-to-door express delivery for documents, parcels, and urgent shipments with real-time tracking and fast transit times.",
    icon: Package,
    image: "/courier.png",
  },
  {
    title: "Customs Clearance",
    description:
      "Smooth customs processing with expert handling of documentation, compliance requirements, duties, and import/export regulations.",
    icon: ShieldCheck,
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Commercial Cargo",
    description:
      "Specialized logistics solutions for manufacturers, wholesalers, retailers, and businesses moving commercial goods globally.",
    icon: Factory,
    image:
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Personal Shipments",
    description:
      "Secure international shipping for personal belongings, gifts, household items, relocation cargo, and excess baggage.",
    icon: Home,
    image:
      "https://images.unsplash.com/photo-1700716465891-9e5e9f501d7d?q=80&w=1193&auto=format&fit=crop",
  },
];

export default function Services() {
  const [headingVisible, setHeadingVisible] = useState(false);
  const [firstRowVisible, setFirstRowVisible] = useState(false);
  const [secondRowVisible, setSecondRowVisible] = useState(false);

  const headingRef = useRef(null);
  const firstRowRef = useRef(null);
  const secondRowRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.25,
      rootMargin: "0px 0px -80px 0px",
    };

    const headingObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setHeadingVisible(true);
        headingObserver.disconnect();
      }
    }, observerOptions);

    const firstRowObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setFirstRowVisible(true);
        firstRowObserver.disconnect();
      }
    }, observerOptions);

    const secondRowObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setSecondRowVisible(true);
        secondRowObserver.disconnect();
      }
    }, observerOptions);

    if (headingRef.current) headingObserver.observe(headingRef.current);
    if (firstRowRef.current) firstRowObserver.observe(firstRowRef.current);
    if (secondRowRef.current) secondRowObserver.observe(secondRowRef.current);

    return () => {
      headingObserver.disconnect();
      firstRowObserver.disconnect();
      secondRowObserver.disconnect();
    };
  }, []);

  const renderCard = (service: Service, index: number, isVisible: boolean) => {
    const IconComponent = service.icon;

    return (
      <div
        key={service.title}
        style={{
          transitionDelay: isVisible ? `${index * 150}ms` : "0ms",
        }}
        className={`group flex flex-col border border-slate-200 bg-white transition-all duration-700 ease-out hover:-translate-y-2 hover:border-[#c8102e] hover:shadow-xl ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
        }`}
      >
        <div className="relative h-60 w-full overflow-hidden bg-slate-200">
          <img
            src={service.image}
            alt={service.title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-[#071a33]/30 transition-colors duration-500 group-hover:bg-transparent" />
        </div>

        <div className="flex flex-1 flex-col p-8">
          <div className="mb-6">
            <div className="flex h-12 w-12 items-center justify-center border border-slate-900 bg-white transition-colors duration-300 group-hover:bg-[#c8102e]">
              <IconComponent className="h-6 w-6 text-slate-900 transition-colors duration-300 group-hover:text-white" />
            </div>
          </div>

          <h3 className="mb-3 text-xl font-bold tracking-tight text-slate-950">
            {service.title}
          </h3>

          <p className="mb-8 flex-1 text-sm leading-relaxed text-slate-600">
            {service.description}
          </p>
        </div>
      </div>
    );
  };

  return (
    <section className="overflow-hidden bg-slate-50 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div
          ref={headingRef}
          className={`mb-16 transition-all duration-700 ease-out ${
            headingVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          <span className="mb-4 block border-l-4 border-[#c8102e] pl-4 text-sm font-bold uppercase tracking-[0.2em] text-[#c8102e]">
            Our Services
          </span>

          <h2 className="mt-2 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
            Complete logistics solutions for every shipment.
          </h2>
        </div>

        {/* First 3 services */}
        <div
          ref={firstRowRef}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {services
            .slice(0, 3)
            .map((service, index) =>
              renderCard(service, index, firstRowVisible)
            )}
        </div>

        {/* Remaining services */}
        <div
          ref={secondRowRef}
          className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {services
            .slice(3)
            .map((service, index) =>
              renderCard(service, index, secondRowVisible)
            )}
        </div>
      </div>
    </section>
  );
}
