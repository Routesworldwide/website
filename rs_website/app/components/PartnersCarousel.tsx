import React from "react";

export interface Partner {
  id: string;
  name: string;
  image: string;
}

const PARTNERS: Partner[] = [
  { id: "1", name: "Lupin", image: "/lupinlogo.png" },
  { id: "2", name: "Skynet", image: "/skynetlogo.jpg" },
  { id: "3", name: "DHL", image: "/dhllogo.jpg" },
  { id: "4", name: "Worldwide", image: "/worldwidelogo.jpg" },
  { id: "5", name: "Inext", image: "/inextlogo.png" },
  { id: "6", name: "Siemens", image: "/siemenslogo.png" },
  { id: "7", name: "Bharat Forge", image: "/bharatforgelogo.png" },
  // { id: "8", name: "Metrix", image: "/metrixlogo.jpg" },
  { id: "9", name: "Shiprocket", image: "/shiprocketlogo.jpeg" },
  // { id: "10", name: "Maple Care", image: "/maplecarelogo.png" },
  // { id: "11", name: "LAPL", image: "/lapllogo.png" },
  // { id: "12", name: "Audio", image: "/audiologo.jpg" },
];

const carouselItems = [...PARTNERS, ...PARTNERS];

function PartnerCard({ partner }: { partner: Partner }) {
  return (
    <div className="group flex h-24 w-40 shrink-0 items-center justify-center rounded-lg border border-slate-300 border-x-3 bg-white px-5 shadow-sm shadow-slate-900/5 transition-all duration-300 hover:z-20 hover:scale-110  sm:h-28 sm:w-48">
      <img
        src={partner.image}
        alt={partner.name}
        className="max-h-14 max-w-full object-contain transition-transform duration-300 group-hover:scale-105 sm:max-h-16"
      />
    </div>
  );
}

export default function PartnersSection() {
  return (
    <section className="relative overflow-hidden bg-white py-10 md:py-20">
      <style>{`
        @keyframes partnersScroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .partners-track {
          animation: partnersScroll 8s linear infinite;
          will-change: transform;
        }

        .partners-track:hover {
          animation-play-state: paused;
        }

        @media (max-width: 640px) {
          .partners-track {
            animation-duration: 8s;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .partners-track {
            animation: none;
          }
        }
      `}</style>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mx-auto max-w-4xl text-center">
          <p className="mb-2 text-[10px] font-extrabold uppercase tracking-[0.25em] text-red-600 md:text-sm">
            Partners & Technologies
          </p>

          <h2 className="my-5 text-xl font-semibold leading-tight text-slate-900 md:text-4xl">
            Partners with Routes Worldwide Express
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-[11px] leading-relaxed text-slate-600 md:mt-5 md:text-base">
            We work with trusted logistics partners to provide reliable and
            efficient shipping solutions.
          </p>
        </header>

        <div className="relative mt-12 overflow-hidden rounded-xl py-4">


 

          <div className="partners-track flex w-max gap-4 px-4 sm:gap-6">
            {carouselItems.map((partner, index) => (
              <PartnerCard key={`${partner.id}-${index}`} partner={partner} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}