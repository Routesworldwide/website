import React from "react";
import { Plane, Ship, FileCheck, Truck, Folder } from "lucide-react";

const SERVICES = [
  {
    icon: Plane,
    title: "Air Freight",
  },
  {
    icon: Ship,
    title: "Sea Freight",
  },
  {
    icon: FileCheck,
    title: "Customs Clearance",
  },
  {
    icon: Folder,
    title: "Documentation",
  },
  {
    icon: Truck,
    title: "Door-to-Door",
  },
];

export default function FeaturedServices() {
  return (
    <section className="relative overflow-hidden bg-white py-10 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-x-auto rounded-xl  p-3">
          <div className="flex min-w-max md:min-w-0 md:grid md:grid-cols-5 gap-3 bg-blue-950">
            {SERVICES.map((service, index) => {
              const IconComponent = service.icon;

              return (
                <div
                  key={index}
                  className="group relative flex min-w-[180px] flex-col border-r-4 border-white items-center justify-center  px-6 py-8 text-center last:border-r-0 md:min-w-0"
                >
                  <div className="absolute left-0 top-0 h-[2px] w-0 bg-[#c8102e] transition-all duration-300 group-hover:w-full" />

                  <div className="mb-4 flex h-12 w-12 items-center justify-center  border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 group-hover:border-[#c8102e]/40 group-hover:bg-[#c8102e] group-hover:text-white">
                    <IconComponent className="h-6 w-6" strokeWidth={1.6} />
                  </div>

                  <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-white md:text-xs">
                    {service.title}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}