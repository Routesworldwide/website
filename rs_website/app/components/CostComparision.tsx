"use client";

import { useMemo, useState } from "react";
import {
  Plane,
  Package,
  TrendingUp,
  Clock3,
  IndianRupee,
} from "lucide-react";

export default function ShipmentComparison() {
  const [weight, setWeight] = useState(20);

  const options = useMemo(
    () => [
      {
        name: "Air Freight",
        icon: Plane,
        rate: 450,
        transit: "5 - 10 Days",
        color: "bg-blue-50 border-blue-200",
      },
      {
        name: "Express Courier",
        icon: Package,
        rate: 850,
        transit: "2 - 5 Days",
        color: "bg-red-50 border-red-200",
      },
    ],
    []
  );

  const cheapest = options.reduce((a, b) =>
    a.rate < b.rate ? a : b
  );

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-5">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-sm font-semibold tracking-[0.25em] uppercase text-[#c8102e]">
            Real-Time Shipping Comparison
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[#071a33]">
            Compare shipping options instantly
          </h2>

          <p className="mt-5 text-slate-600">
            Compare transit times and estimated costs across
            Air Freight and Express Courier services.
          </p>
        </div>

        {/* Weight Input */}
        <div className="mt-12 max-w-md mx-auto">
          <label className="text-sm font-medium text-slate-700">
            Shipment Weight (KG)
          </label>

          <input
            type="range"
            min="1"
            max="100"
            value={weight}
            onChange={(e) => setWeight(Number(e.target.value))}
            className="w-full mt-3"
          />

          <div className="mt-2 text-center">
            <span className="text-3xl font-bold text-[#c8102e]">
              {weight} KG
            </span>
          </div>
        </div>

        {/* Comparison Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
          {options.map((option) => {
            const Icon = option.icon;
            const total = option.rate * weight;

            return (
              <div
                key={option.name}
                className={`relative rounded-3xl border p-6 ${option.color}`}
              >
                {option.name === cheapest.name && (
                  <div className="absolute top-4 right-4 rounded-full bg-green-600 px-3 py-1 text-xs font-semibold text-white">
                    Best Value
                  </div>
                )}

                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow">
                    <Icon className="h-7 w-7 text-[#c8102e]" />
                  </div>

                  <div>
                    <h3 className="font-bold text-xl text-[#071a33]">
                      {option.name}
                    </h3>
                  </div>
                </div>

                <div className="mt-8 space-y-4">
                  <div className="flex items-center gap-3">
                    <Clock3 className="h-5 w-5 text-[#c8102e]" />
                    <span className="text-slate-700">
                      {option.transit}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <IndianRupee className="h-5 w-5 text-[#c8102e]" />
                    <span className="text-slate-700">
                      ₹{option.rate}/kg
                    </span>
                  </div>

                  <div className="rounded-2xl bg-white p-4 border">
                    <p className="text-sm text-slate-500">
                      Estimated Cost
                    </p>

                    <p className="mt-1 text-3xl font-bold text-[#071a33]">
                      ₹{total.toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Recommendation */}
        <div className="mt-10 rounded-3xl bg-[#071a33] p-6 text-white">
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <TrendingUp className="h-8 w-8 text-red-400" />

            <div>
              <h3 className="font-bold text-xl">
                Recommended Option
              </h3>

              <p className="text-slate-300 mt-1">
                Air Freight offers balanced international cargo pricing for
                {` ${weight} KG`} shipments, while Express Courier provides the
                fastest delivery.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
