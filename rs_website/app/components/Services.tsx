import React from "react";
import {
  ArrowRight,
  Plane,
  Ship,
  Package,
  ShieldCheck,
  Factory,
  Home,
} from "lucide-react";

const services = [
  {
    title: "Air Freight",
    description:
      "Fast and reliable international air cargo solutions for urgent shipments, time-sensitive goods, and global business deliveries.",
    icon: Plane,
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Sea Freight",
    description:
      "Cost-effective ocean freight services for bulk cargo, commercial goods, and international container shipments worldwide.",
    icon: Ship,
    image:
      "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Express Courier",
    description:
      "Door-to-door express delivery for documents, parcels, and urgent shipments with real-time tracking and fast transit times.",
    icon: Package,
    image:
      "/courier.png",
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
      "https://images.unsplash.com/photo-1600518464441-9154a4dea21b?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function Services() {
  return (
    <section className="py-24 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="text-sm font-bold tracking-[0.2em] text-[#c8102e] uppercase mb-4 block border-l-4 border-[#c8102e] pl-4">
            Our Services
          </span>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-950 mt-2">
            Complete logistics solutions for every shipment.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;

            return (
              <div
                key={index}
                className="group flex flex-col bg-white border border-slate-200 hover:border-[#c8102e] transition-colors duration-300"
              >
                <div className="relative h-60 w-full overflow-hidden bg-slate-200">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-[#071a33]/30 group-hover:bg-transparent transition-colors duration-500" />
                </div>

                <div className="p-8 flex flex-col flex-1">
                  <div className="mb-6">
                    <div className="w-12 h-12 border border-slate-900 flex items-center justify-center bg-white group-hover:bg-[#c8102e] transition-colors duration-300">
                      <IconComponent className="w-6 h-6 text-slate-900 group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-950 mb-3 tracking-tight">
                    {service.title}
                  </h3>

                  <p className="text-slate-600 leading-relaxed text-sm mb-8 flex-1">
                    {service.description}
                  </p>

                  {/* <button className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.1em] text-[#c8102e] group-hover:gap-4 transition-all">
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4" />
                  </button> */}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}