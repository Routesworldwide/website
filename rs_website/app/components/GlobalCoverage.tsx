"use client";

import { useState } from "react";

interface Country {
  id: string;
  name: string;
  x: number;
  y: number;
  days: string;
  hub?: boolean;
}

const MAP_WIDTH = 2500;
const MAP_HEIGHT = 1600;

const countries: Country[] = [
  { id: "india", name: "India", x: 1625, y: 800, days: "10–15 days", hub: true },
  { id: "usa", name: "United States", x: 520, y: 620, days: "12–18 days", hub: true },
  { id: "canada", name: "Canada", x: 560, y: 380, days: "14–20 days" },
  { id: "uk", name: "United Kingdom", x: 1115, y: 565, days: "10–14 days", hub: true },
  { id: "germany", name: "Germany", x: 1210, y: 585, days: "10–14 days", hub: true },
  { id: "uae", name: "UAE", x: 1465, y: 780, days: "10–14 days", hub: true },
  { id: "china", name: "China", x: 1805, y: 690, days: "10–15 days", hub: true },
  { id: "japan", name: "Japan", x: 2125, y: 655, days: "12–18 days" },
  { id: "singapore", name: "Singapore", x: 1835, y: 940, days: "10–15 days", hub: true },
  { id: "australia", name: "Australia", x: 2045, y: 1205, days: "15–22 days" },
  { id: "south-africa", name: "South Africa", x: 1320, y: 1195, days: "18–25 days" },
  { id: "nigeria", name: "Nigeria", x: 1185, y: 895, days: "18–25 days" },
];

const routes = countries
  .filter((country) => country.id !== "india")
  .map((country) => ["india", country.id]);

const services = ["Air Freight", "Sea Freight", "Express Courier", "Customs Clearance"];

function getCountry(id: string) {
  return countries.find((country) => country.id === id);
}

function createCurve(from: Country, to: Country) {
  const midX = (from.x + to.x) / 2;
  const midY = (from.y + to.y) / 2 - Math.abs(to.x - from.x) * 0.25;
  return `M ${from.x} ${from.y} Q ${midX} ${midY} ${to.x} ${to.y}`;
}

export default function GlobalCoverageMap() {
  const [selectedCountry, setSelectedCountry] = useState<Country>(countries[0]);

  const SelectedCard = () => (
    <div className="rounded bg-[#050505] p-4 shadow-xl md:p-5">
      <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#ef4444] md:text-xs">
        Selected Country
      </p>

      <h3 className="mt-2 text-lg font-bold text-white md:text-xl">
        {selectedCountry.name}
      </h3>

      <div className="mt-4 rounded-lg border-l-4 border-[#dc2626] bg-red-50 px-4 py-3">
        <p className="text-xs text-slate-500">Estimated Delivery</p>
        <p className="text-xl font-bold text-[#c8102e]">
          {selectedCountry.days}
        </p>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
        {services.map((service) => (
          <div
            key={service}
            className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-700"
          >
            {service}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="bg-white py-14 md:py-24">
      <div className="mx-auto max-w-7xl px-4 ">
        <div className="mb-8 max-w-3xl md:mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#c8102e] md:text-sm">
            Global Coverage
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#071a33] md:text-5xl">
            Worldwide shipping network
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-600 md:mt-5 md:text-lg">
            Click on a country to view estimated delivery time and available
            shipping services.
          </p>
        </div>

        <div className="overflow-hidden  border border-slate-200 bg-white shadow-2xl ">
          <div className="bg-[#72bed7]">
            {/* Map */}
            <div className="relative mx-auto h-[260px] w-full max-w-[1400px] overflow-hidden sm:h-[380px] md:h-auto md:aspect-[25/16]">
              <img
                src="/world.svg"
                alt="World map"
                className="absolute inset-0 h-full w-full object-fill opacity-40"
              />

              <svg
                viewBox={`0 0 ${MAP_WIDTH} ${MAP_HEIGHT}`}
                preserveAspectRatio="none"
                className="absolute inset-0 h-full w-full"
              >
                <defs>
                  <filter id="redGlow">
                    <feGaussianBlur stdDeviation="6" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>

                  <style>
                    {`
                      @keyframes routeMove {
                        from { stroke-dashoffset: 72; }
                        to { stroke-dashoffset: 0; }
                      }

                      .moving-route {
                        animation: routeMove 1.4s linear infinite;
                      }

                      @media (prefers-reduced-motion: reduce) {
                        .moving-route {
                          animation: none;
                        }
                      }
                    `}
                  </style>
                </defs>

                {routes.map(([fromId, toId], index) => {
                  const from = getCountry(fromId);
                  const to = getCountry(toId);
                  if (!from || !to) return null;

                  const isActive = selectedCountry.id === to.id;

                  return (
                    <path
                      key={`${fromId}-${toId}-${index}`}
                      d={createCurve(from, to)}
                      fill="none"
                      stroke="#b91c1c"
                      strokeWidth={isActive ? 6 : 3.5}
                      strokeOpacity={isActive ? 0.95 : 0.45}
                      strokeDasharray="18 18"
                      filter={isActive ? "url(#redGlow)" : undefined}
                      className="moving-route"
                    />
                  );
                })}

                {countries.map((country) => {
                  const isSelected = selectedCountry.id === country.id;

                  return (
                    <g
                      key={country.id}
                      onClick={() => setSelectedCountry(country)}
                      className="cursor-pointer"
                    >
                      <circle
                        cx={country.x}
                        cy={country.y}
                        r={country.hub ? 28 : 23}
                        fill="#dc2626"
                        fillOpacity="0.24"
                      />

                      <circle
                        cx={country.x}
                        cy={country.y}
                        r={isSelected ? 17 : 11}
                        fill="#b91c1c"
                        stroke="#ffffff"
                        strokeWidth={isSelected ? 7 : 4}
                        filter="url(#redGlow)"
                      />
                    </g>
                  );
                })}
              </svg>

              {/* Desktop card */}
              <div className="absolute bottom-8 left-8 z-30 hidden w-full max-w-sm md:block">
                <SelectedCard />
              </div>
            </div>

            {/* Mobile card below map */}
            <div className="block p-4 md:hidden">
              <SelectedCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}