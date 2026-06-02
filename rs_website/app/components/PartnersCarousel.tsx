

import React from "react";

// ─── Interfaces ──────────────────────────────────────────────────────────────

export interface Partner {
  id: string;
  name: string;
  image: string;
}

// ─── SVG Recreations of All Partners in the Image ────────────────────────────

const LEFT_PARTNERS: Partner[] = [
  { id: "partner1", name: "Partner 1", image: "/lupinlogo.png" },
  { id: "partner2", name: "Partner 2", image: "/sunpharmalogo.png" },
  { id: "partner3", name: "Partner 3", image: "/dhllogo.jpg" },
  { id: "partner4", name: "Partner 4", image: "/apcologo.jpg" },
  { id: "partner5", name: "Partner 5", image: "/ciplalogo.png" },
  { id: "partner6", name: "Partner 6", image: "/siemenslogo.png" },
];

const RIGHT_PARTNERS: Partner[] = [
  { id: "partner7", name: "Partner 7", image: "/bharatforgelogo.png" },
  { id: "partner8", name: "Partner 8", image: "/metrixlogo.jpg" },
  { id: "partner9", name: "Partner 9", image: "/hyperlinklogo.jpg" },
  { id: "partner10", name: "Partner 10", image: "/maplecarelogo.png" },
  { id: "partner11", name: "Partner 11", image: "/lapllogo.png" },
  { id: "partner12", name: "Partner 12", image: "/audiologo.jpg" },
];

// ─── Constants ────────────────────────────────────────────────────────────────

const HEX_CLIP = "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)";

// Layout sizing configs matching the original pixel aspect ratios
const HEX_W = 124;
const HEX_H = 146;
const GAP_X = 44;
const GAP_Y = -18; // Negative gap merges them nicely into honeycomb joints

// ─── Sub-components ───────────────────────────────────────────────────────────

function HexBadge({ partner }: { partner: Partner }) {
  return (
    <div
      role="img"
      aria-label={partner.name}
      title={partner.name}
      className="relative flex items-center justify-center transition-transform duration-300 hover:scale-105 select-none drop-shadow-[0_4px_10px_rgba(0,0,0,0.04)]"
      style={{
        width: `${HEX_W}px`,
        height: `${HEX_H}px`,
        clipPath: HEX_CLIP,
        background: "white",
      }}
    >
      {/* Hex Inner Frame Design */}
      <div className="absolute inset-[2px] bg-white" style={{ clipPath: HEX_CLIP }} />
      <div className="relative z-10 flex flex-col items-center justify-center p-2 text-center w-full h-full overflow-hidden">
        <img 
          src={partner.image} 
          alt={partner.name}
          className="max-w-full max-h-full w-auto h-auto object-contain"
          style={{ maxHeight: "90px", maxWidth: "100px" }}
        />
      </div>
    </div>
  );
}

// Center Ezy One core logo hub with smooth gradient glowing layout
function CenterLogoHex() {
  return (
    <div
      className="relative flex items-center justify-center transition-transform duration-300 hover:scale-105 z-20 select-none drop-shadow-[0_10px_30px_rgba(108,99,255,0.25)]"
      style={{
        width: "154px",
        height: "172px",
        clipPath: HEX_CLIP,
        background: "linear-gradient(135deg, #1e1b4b 0%, #020617 100%)",
      }}
    >
      {/* Dynamic colorful border highlight frame */}
      <div 
        className="absolute inset-[3.5px]" 
        style={{ 
          clipPath: HEX_CLIP,
          background: "linear-gradient(135deg, #2e1065 0%, #030712 100%)" 
        }} 
      />

      <div className="relative z-10 flex flex-col items-center justify-center text-center">
        {/* Glow behind logo */}
        <div className="absolute w-12 h-12 bg-indigo-500/20 rounded-full blur-xl pointer-events-none" />
        
        {/* Company Logo */}
        <img
          src="/logo.png"
          alt="Routes Worldwide Express"
          className="relative z-10 h-20 w-20 object-contain drop-shadow-[0_0_15px_rgba(99,102,241,0.5)]"
        />
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function PartnersSection() {
  return (
    <section 
      className="relative py-8 md:py-24 pb-4 md:pb-24 bg-gradient-to-b from-blue-100 to-blue-300 overflow-hidden font-sans flex flex-col items-center justify-center"
      data-partners-v2=""
    >
      {/* Global CSS scope containing clean dynamic scaling matrix */}
      <style>{`
        @media (max-width: 639px) {
          [data-partners-v2] .honeycomb-wrapper {
            transform: scale(0.36);
            padding: 0;
          }
          [data-partners-v2] .hex-icon-inner {
            transform: scale(1.8);
          }
        }
        @media (min-width: 640px) and (max-width: 1023px) {
          [data-partners-v2] .honeycomb-wrapper {
            transform: scale(0.72);
          }
        }
        @media (min-width: 1024px) {
          [data-partners-v2] .honeycomb-wrapper {
            transform: scale(1.0);
          }
        }
      `}</style>

      {/* Subtle ambient lights */}
      <div className="absolute top-1/2 left-[10%] -translate-y-1/2 w-96 h-96 bg-purple-300/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 right-[10%] -translate-y-1/2 w-96 h-96 bg-indigo-300/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Header content EXACTLY matched with image */}
        <header className="text-center mb sm:mb-8 max-w-5xl mx-auto px-4">
          <p className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.2em] text-red-600 mb-3">
              Partners & Technologies
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-900  mb-5">
            Partners with Routes Worldwide Express
          </h2>
          <p className="text-xs sm:text-lg text-slate-500 max-w-3xl mx-auto leading-relaxed">
     We work with trusted logistics partners, carriers, and industry leaders to provide reliable and efficient shipping solutions. These strong partnerships help us expand our global reach, ensure smooth operations, and deliver exceptional service to our customers every step of the way.

          </p>
        </header>

        {/* Honeycomb grid workspace centerizer wrapper */}
        <div className="w-full flex justify-center overflow-hidden mt-0 md:mt-20">
          <div className="honeycomb-wrapper flex items-center justify-center origin-center transition-transform duration-300">
            
            {/* ─── LEFT WING (6 Hexagons staggered) ─── */}
            <div className="flex flex-col items-end shrink-0" style={{ gap: `${GAP_Y}px`, marginRight: `${GAP_X}px` }}>
              
              {/* Row 1 Left */}
              <div className="flex items-center" style={{ gap: `${GAP_X}px` }}>
                <HexBadge partner={LEFT_PARTNERS[0]} />
                <HexBadge partner={LEFT_PARTNERS[1]} />
              </div>

              {/* Row 2 Left (Staggered offset) */}
              <div className="flex items-center" style={{ gap: `${GAP_X}px`, marginRight: `${(HEX_W + GAP_X) / 2}px` }}>
                <HexBadge partner={LEFT_PARTNERS[2]} />
                <HexBadge partner={LEFT_PARTNERS[3]} />
              </div>

              {/* Row 3 Left */}
              <div className="flex items-center" style={{ gap: `${GAP_X}px` }}>
                <HexBadge partner={LEFT_PARTNERS[4]} />
                <HexBadge partner={LEFT_PARTNERS[5]} />
              </div>

            </div>

            {/* ─── CENTRAL LOGO HUB ─── */}
            <div className="relative shrink-0 flex items-center justify-center mx-1 z-30">
              <CenterLogoHex />
            </div>

            {/* ─── RIGHT WING (6 Hexagons staggered) ─── */}
            <div className="flex flex-col items-start shrink-0" style={{ gap: `${GAP_Y}px`, marginLeft: `${GAP_X}px` }}>
              
              {/* Row 1 Right */}
              <div className="flex items-center" style={{ gap: `${GAP_X}px` }}>
                <HexBadge partner={RIGHT_PARTNERS[0]} />
                <HexBadge partner={RIGHT_PARTNERS[1]} />
              </div>

              {/* Row 2 Right (Staggered offset) */}
              <div className="flex items-center" style={{ gap: `${GAP_X}px`, marginLeft: `${(HEX_W + GAP_X) / 2}px` }}>
                <HexBadge partner={RIGHT_PARTNERS[2]} />
                <HexBadge partner={RIGHT_PARTNERS[3]} />
              </div>

              {/* Row 3 Right */}
              <div className="flex items-center" style={{ gap: `${GAP_X}px` }}>
                <HexBadge partner={RIGHT_PARTNERS[4]} />
                <HexBadge partner={RIGHT_PARTNERS[5]} />
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}