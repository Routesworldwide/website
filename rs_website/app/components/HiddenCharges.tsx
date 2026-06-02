"use client";

import React from "react";
import {
  ShieldCheck,
  Warehouse,
  Clock3,
  Fuel,
} from "lucide-react";

interface ChargeItem {
  icon: React.ElementType;
  title: string;
  description: string;
}

const charges: ChargeItem[] = [
  {
    icon: ShieldCheck,
    title: "Customs Duties",
    description:
      "Government taxes imposed on imported goods based on product value, classification, and destination country regulations.",
  },
  {
    icon: Warehouse,
    title: "Storage Charges",
    description:
      "Additional fees applied when cargo remains at warehouses, terminals, or ports beyond the allotted free storage period.",
  },
  {
    icon: Clock3,
    title: "Demurrage",
    description:
      "Charges incurred when containers stay at a port or terminal longer than the carrier's permitted free time.",
  },
  {
    icon: Fuel,
    title: "Fuel Surcharges",
    description:
      "Variable transportation fees added by carriers to offset fluctuations in global fuel and operating costs.",
  },
];

const HiddenChargesSection: React.FC = () => {
  return (
    <section className="bg-slate-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#c8102e]">
            Pricing Transparency
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl  font-semibold text-slate-900">
            Hidden Charges Explained
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            Many shipping providers only display the base freight cost.
            Understanding these additional logistics charges helps you
            avoid surprises and plan your shipping budget accurately.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {charges.map((charge, index) => {
            const Icon = charge.icon;

            return (
              <div
                key={index}
                className="group rounded border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#c8102e]/20 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded bg-red-50">
                  <Icon className="h-7 w-7 text-[#c8102e]" />
                </div>

                <h3 className="mt-6 text-xl font-semibold text-slate-900">
                  {charge.title}
                </h3>

                <p className="mt-3 leading-relaxed text-slate-600">
                  {charge.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Info Card */}
        <div className="mt-10 rounded border p-6 md:p-8">
          <p className="text-sm md:text-base leading-relaxed text-slate-700">
            <span className="font-semibold text-slate-900">
              Why this matters:
            </span>{" "}
            Customs duties, storage fees, demurrage, and fuel surcharges are
            common logistics costs that can impact the final shipping price.
            Being aware of these charges helps businesses and individuals
            make informed shipping decisions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HiddenChargesSection;