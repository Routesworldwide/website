// "use client";

// import React from "react";

// const leftPartners = [
//   "/partners/chatgpt.png",
//   "/partners/rzcc.png",
//   "/partners/swissict.png",
//   "/partners/intel.png",
//   "/partners/ingram.png",
//   "/partners/sipcall.png",
// ];

// const rightPartners = [
//   "/partners/gemini.png",
//   "/partners/aws.png",
//   "/partners/anydesk.png",
//   "/partners/google.png",
//   "/partners/idc.png",
//   "/partners/tree.png",
// ];

// export default function PartnersSection() {
//   return (
//     <section className="relative overflow-hidden py-20 sm:py-28">
//       <div className="mx-auto max-w-7xl px-6 lg:px-8">

//         {/* Main Card */}
//         <div className="relative overflow-hidden rounded-[40px] bg-[#f8f7fb] px-6 py-16 shadow-[0_30px_80px_rgba(15,39,70,0.08)] sm:px-10 lg:px-16">

//           {/* Soft Background Glow */}
//           <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(168,85,247,0.10),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(239,68,68,0.08),transparent_30%)]" />

//           {/* Header */}
//           <div className="relative z-10 text-center">
//             <p className="mb-5 text-sm font-semibold uppercase tracking-[0.28em] text-[#c8102e]">
//               Trusted Partner Network
//             </p>

//             <h2 className="mx-auto max-w-5xl font-[manrope] text-3xl font-semibold leading-tight text-[#071426] sm:text-5xl lg:text-6xl">
//               Technologies & Partners
//               <span className="text-[#c8102e]"> Worldwide</span>
//             </h2>

//             <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-500 sm:text-lg">
//               We collaborate with leading logistics and technology companies
//               worldwide to deliver seamless shipping experiences and reliable
//               freight solutions.
//             </p>
//           </div>

//           {/* HONEYCOMB */}
//           <div className="relative z-10 mt-20 flex flex-col items-center justify-center gap-12 lg:flex-row lg:gap-16">

//             {/* LEFT SIDE */}
//             <div className="flex flex-col gap-[-20px]">

//               {/* Top Row */}
//               <div className="flex justify-center gap-3">
//                 {leftPartners.slice(0, 3).map((logo, index) => (
//                   <Hexagon key={index} logo={logo} />
//                 ))}
//               </div>

//               {/* Bottom Row */}
//               <div className="-mt-7 flex justify-center gap-3 pl-[70px]">
//                 {leftPartners.slice(3, 6).map((logo, index) => (
//                   <Hexagon key={index} logo={logo} />
//                 ))}
//               </div>
//             </div>

//             {/* CENTER HEXAGON */}
//             <div className="relative flex items-center justify-center">

//               {/* Glow */}
//               <div className="absolute h-[220px] w-[220px] rounded-full bg-[#c8102e]/20 blur-3xl" />

//               <div
//                 className="relative flex h-[180px] w-[180px] items-center justify-center shadow-2xl sm:h-[230px] sm:w-[230px]"
//                 style={{
//                   clipPath:
//                     "polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)",
//                   background:
//                     "linear-gradient(135deg, #071426 0%, #0f2746 50%, #c8102e 100%)",
//                 }}
//               >
//                 {/* Inner Glow */}
//                 <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.12),transparent_70%)]" />

//                 {/* Logo */}
//                 <img
//                   src="/logo.png"
//                   alt="Routes Worldwide"
//                   className="relative z-10 h-20 w-20 object-contain sm:h-28 sm:w-28"
//                 />
//               </div>
//             </div>

//             {/* RIGHT SIDE */}
//             <div className="flex flex-col">

//               {/* Top Row */}
//               <div className="flex justify-center gap-3">
//                 {rightPartners.slice(0, 3).map((logo, index) => (
//                   <Hexagon key={index} logo={logo} />
//                 ))}
//               </div>

//               {/* Bottom Row */}
//               <div className="-mt-7 flex justify-center gap-3 pl-[70px]">
//                 {rightPartners.slice(3, 6).map((logo, index) => (
//                   <Hexagon key={index} logo={logo} />
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// /* ───────────────────────────────────────────── */

// function Hexagon({ logo }: { logo: string }) {
//   return (
//     <div
//       className="group relative flex h-[90px] w-[90px] items-center justify-center bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:h-[120px] sm:w-[120px]"
//       style={{
//         clipPath:
//           "polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)",
//       }}
//     >
//       {/* Border */}
//       <div
//         className="absolute inset-[1px] bg-white"
//         style={{
//           clipPath:
//             "polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)",
//         }}
//       />

//       {/* Logo */}
//       <div className="relative z-10 flex items-center justify-center p-5">
//         <img
//           src={logo}
//           alt="partner"
//           className="max-h-9 w-auto object-contain sm:max-h-12"
//         />
//       </div>
//     </div>
//   );
// }


import React from "react";

// ─── Interfaces ──────────────────────────────────────────────────────────────

export interface Partner {
  id: string;
  name: string;
  logoType: "svg" | "text" | "combined";
  icon: React.ReactNode;
}

// ─── SVG Recreations of All Partners in the Image ────────────────────────────

const LEFT_PARTNERS: Partner[] = [
  // Row 1 (Top Left)
  {
    id: "chatgpt",
    name: "ChatGPT",
    logoType: "combined",
    icon: (
      <div className="flex items-center gap-1">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-[#10a37f]">
          <path d="M20.3 10.3c.4-.7.6-1.5.6-2.3 0-2.2-1.8-4-4-4-.4 0-.8.1-1.2.2-.6-.9-1.6-1.5-2.8-1.5-1.9 0-3.4 1.3-3.8 3-.4-.1-.8-.2-1.2-.2-2.2 0-4 1.8-4 4 0 .7.2 1.4.5 2-.6.5-1 1.3-1 2.2 0 1.9 1.3 3.4 3 3.8-.1.4-.2.8-.2 1.2 0 2.2 1.8 4 4 4 .7 0 1.4-.2 2-.5.5.6 1.3 1 2.2 1 1.9 0 3.4-1.3 3.8-3 .4.1.8.2 1.2.2 2.2 0 4-1.8 4-4 0-.8-.2-1.5-.5-2.1.6-.6 1-1.3 1-2.2.1-1-.3-1.8-1-2.3zm-8.3 11c-.5 0-1-.2-1.3-.6l5.4-3.1 1.3.8-2.1 3.6c-1 .8-2.1 1.3-3.3 1.3zm-5.7-3.3c-.3-.4-.4-1-.1-1.4l5.4-3.1v1.5l-3.3 1.9-1.3-.8c-.3-.5-.6-.7-.7-.1zm-1.6-5.8c0-.5.3-1 .7-1.2l5.4-3.1v1.5l-3.3 1.9v1.5l-2.8-1.6zm8.8-5.3c.5 0 1 .2 1.3.6L9.4 10.6l-1.3-.8 2.1-3.6c.6-.8 1.4-1.1 2.4-1.1zm5.7 3.3c.3.4.4 1 .1 1.4l-5.4 3.1V9.5l3.3-1.9 1.3.8c.4.3.6.8.7 1.2zm1.6 5.8c0 .5-.3 1-.7 1.2l-5.4 3.1v-1.5l3.3-1.9v-1.5l2.8 1.6z" fill="currentColor"/>
        </svg>
        <span className="text-[10px] font-bold text-slate-800 tracking-tight">ChatGPT</span>
      </div>
    )
  },
  {
    id: "rz",
    name: "RZ Rechenzentrum",
    logoType: "combined",
    icon: (
      <div className="flex flex-col items-center">
        <div className="flex items-center gap-1 scale-[0.95]">
          <span className="font-extrabold text-[#005bb6] text-sm italic">RZ</span>
          <div className="w-[1.5px] h-3.5 bg-slate-300" />
          <div className="flex flex-col text-[6px] text-slate-500 leading-[1.1] text-left font-medium">
            <span>Rechenzentrum</span>
            <span>Ostschweiz</span>
          </div>
        </div>
      </div>
    )
  },
  {
    id: "swissict",
    name: "swissICT",
    logoType: "combined",
    icon: (
      <div className="flex flex-col items-center">
        <div className="flex items-baseline gap-[1px]">
          <span className="text-[10px] font-semibold text-slate-800">swiss</span>
          <span className="text-[10px] font-black text-red-600">ICT</span>
        </div>
        <div className="flex gap-[2px] mt-0.5">
          <span className="w-1 h-1 bg-red-600 rounded-full" />
          <span className="w-1 h-1 bg-red-600 rounded-full" />
          <span className="w-1 h-1 bg-red-600 rounded-full" />
        </div>
      </div>
    )
  },
  // Row 2 (Middle Left)
  {
    id: "intel",
    name: "Intel",
    logoType: "svg",
    icon: (
      <svg width="44" height="24" viewBox="0 0 48 24" fill="none" className="text-[#0068B5]">
        <path d="M0 20h4.2v-11.2h-4.2v11.2zm2.1-13c1.3 0 2.3-1 2.3-2.3 0-1.3-1-2.3-2.3-2.3-1.3 0-2.3 1-2.3 2.3 0 1.3 1 2.3 2.3 2.3zm12.3 13h4.2v-7.3c0-2.5-1.1-3.9-3.4-3.9-1.8 0-2.8.9-3.3 1.8v-1.6h-4.1v11h4.1v-6.3c0-1.4.8-2.2 1.8-2.2s1.4.7 1.4 1.9v6.6zm10.7-11.2h-3v-3.1h-4.2v3.1h-2v3.4h2v5.1c0 2.1 1.2 3 3.3 3h3.9v-3.4h-2.3c-.8 0-1.1-.3-1.1-.9v-3.8h3.4v-3.4zm10.9 4.3c-2.3 0-3.9 1.6-3.9 3.8 0 2.1 1.5 3.8 3.9 3.8 1.9 0 3.2-1 3.5-2.5h-3.9v-1.2h7.7v1.1c-.2 3.5-3 5.4-6.8 5.4-4.8 0-8.2-3.2-8.2-7.4 0-4.3 3.6-7.4 8.2-7.4 4.3 0 7.3 2.5 7.6 5.6H36c-.3-1.5-1.5-2.4-3.5-2.4z" fill="currentColor"/>
      </svg>
    )
  },
  {
    id: "ingram",
    name: "Ingram Micro",
    logoType: "svg",
    icon: (
      <div className="flex flex-col items-center">
        <span className="text-[10px] font-extrabold tracking-widest text-[#0066b2] italic">INGRAM</span>
        <span className="text-[6px] font-bold text-slate-400 tracking-[0.2em] -mt-1">MICRO</span>
      </div>
    )
  },
  {
    id: "sipcall",
    name: "Sipcall",
    logoType: "combined",
    icon: (
      <div className="flex flex-col items-center">
        <span className="text-xs font-black text-[#1e293b] tracking-tighter">sipcall</span>
        <span className="text-[5px] font-semibold text-slate-400 tracking-wider">VOIP TELEPHONY</span>
      </div>
    )
  },
  // Row 3 (Bottom Left)
  {
    id: "meta",
    name: "Meta",
    logoType: "svg",
    icon: (
      <div className="flex flex-col items-center">
        <svg width="45" height="15" viewBox="0 0 100 35" fill="none" className="text-[#0064e0]">
          <path d="M31.3 22.3C29.6 22.3 28 21.6 26.8 20.3C25 18.2 25 14.8 26.8 12.7C28 11.4 29.6 10.7 31.3 10.7C33 10.7 34.6 11.4 35.8 12.7C37.6 14.8 37.6 18.2 35.8 20.3C34.6 21.6 33 22.3 31.3 22.3ZM31.3 7.3C28.2 7.3 25.4 8.7 23.5 11.1C21.6 8.7 18.8 7.3 15.7 7.3C9.9 7.3 5 11.7 5 17.5C5 23.3 9.9 27.7 15.7 27.7C18.8 27.7 21.6 26.3 23.5 23.9C25.4 26.3 28.2 27.7 31.3 27.7C37.1 27.7 42 23.3 42 17.5C42 11.7 37.1 7.3 31.3 7.3Z" fill="currentColor"/>
        </svg>
        <span className="text-[10px] font-bold text-slate-800 tracking-wide mt-0.5">Meta</span>
      </div>
    )
  },
  {
    id: "adn",
    name: "ADN",
    logoType: "svg",
    icon: (
      <div className="flex items-center gap-1 font-black italic text-sm">
        <span className="text-red-600">A</span>
        <span className="text-slate-900">D</span>
        <span className="text-slate-900">N</span>
        <span className="text-red-600">°</span>
      </div>
    )
  },
  {
    id: "microsoft",
    name: "Microsoft Partner",
    logoType: "combined",
    icon: (
      <div className="flex items-center gap-1.5 scale-90">
        <div className="grid grid-cols-2 gap-0.5 shrink-0">
          <div className="w-2.5 h-2.5 bg-[#f25022]" />
          <div className="w-2.5 h-2.5 bg-[#7fba00]" />
          <div className="w-2.5 h-2.5 bg-[#00a4ef]" />
          <div className="w-2.5 h-2.5 bg-[#ffb900]" />
        </div>
        <div className="flex flex-col text-left leading-none font-sans">
          <span className="text-[7.5px] font-bold text-slate-700">Microsoft</span>
          <span className="text-[6.5px] text-slate-400">Partner</span>
        </div>
      </div>
    )
  }
];

const RIGHT_PARTNERS: Partner[] = [
  // Row 1 (Top Right)
  {
    id: "gemini",
    name: "Gemini",
    logoType: "combined",
    icon: (
      <div className="flex items-center gap-1 scale-[0.95]">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-[#4285f4]">
          <path d="M12 0l3.09 9.09L24 12l-8.91 2.91L12 24l-3.09-9.09L0 12l8.91-2.91z" fill="url(#gemini-grad)" />
          <defs>
            <linearGradient id="gemini-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#9b51e0" />
              <stop offset="50%" stopColor="#3085f3" />
              <stop offset="100%" stopColor="#e05194" />
            </linearGradient>
          </defs>
        </svg>
        <span className="text-[10px] font-bold text-slate-800 tracking-tight">Gemini</span>
      </div>
    )
  },
  {
    id: "aws",
    name: "AWS",
    logoType: "svg",
    icon: (
      <div className="flex flex-col items-center scale-95">
        <span className="text-[11px] font-black text-slate-800 tracking-tighter leading-none">aws</span>
        <svg width="24" height="10" viewBox="0 0 24 8" fill="none" className="text-[#ff9900] -mt-0.5">
          <path d="M2 1c4 4 15 4 19 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M21 0.5l-2.5 2.5M21 0.5V3.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      </div>
    )
  },
  {
    id: "anydesk",
    name: "AnyDesk",
    logoType: "combined",
    icon: (
      <div className="flex items-center gap-1">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-[#ef4444]">
          <rect x="6" y="6" width="12" height="12" transform="rotate(45 12 12)" fill="currentColor" />
          <circle cx="12" cy="12" r="3" fill="white" />
        </svg>
        <span className="text-[10px] font-bold text-slate-800 tracking-tight">AnyDesk</span>
      </div>
    )
  },
  // Row 2 (Middle Right)
  {
    id: "google",
    name: "Google",
    logoType: "svg",
    icon: (
      <div className="flex items-center font-bold tracking-tight text-xs">
        <span className="text-[#4285F4]">G</span>
        <span className="text-[#EA4335]">o</span>
        <span className="text-[#FBBC05]">o</span>
        <span className="text-[#4285F4]">g</span>
        <span className="text-[#34A853]">l</span>
        <span className="text-[#EA4335]">e</span>
      </div>
    )
  },
  {
    id: "idic",
    name: "IDiC",
    logoType: "svg",
    icon: (
      <div className="flex items-baseline scale-95">
        <span className="text-[8px] font-bold text-slate-400">ID</span>
        <span className="text-[5px] font-semibold text-red-500">i</span>
        <span className="text-[10px] font-black text-slate-800 ml-0.5">C</span>
        <span className="text-[10px] font-light text-red-500 italic">'</span>
      </div>
    )
  },
  {
    id: "greenicon",
    name: "Green Partner",
    logoType: "svg",
    icon: (
      <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold text-xs shadow-sm">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      </div>
    )
  },
  // Row 3 (Bottom Right)
  {
    id: "asus",
    name: "ASUS",
    logoType: "svg",
    icon: (
      <span className="text-[10px] font-black italic text-[#0055b8] tracking-widest">ASUS</span>
    )
  },
  {
    id: "hotelleriesuisse",
    name: "HotellerieSuisse",
    logoType: "combined",
    icon: (
      <div className="flex flex-col text-left scale-90 leading-[1.1]">
        <span className="text-[6px] font-extrabold text-[#991b1b] tracking-tight">HotellerieSuisse</span>
        <span className="text-[5px] text-slate-500 font-medium">Trusted Consultant</span>
      </div>
    )
  },
  {
    id: "swisshosting",
    name: "swiss hosting",
    logoType: "combined",
    icon: (
      <div className="flex items-center gap-1 scale-[0.85]">
        <div className="relative w-5 h-5 bg-[#c8102e] rounded flex items-center justify-center text-white shrink-0">
          <span className="text-[8px] font-bold">+</span>
        </div>
        <div className="flex flex-col text-left leading-[1.1] font-sans">
          <span className="text-[7.5px] font-black text-slate-800">swiss</span>
          <span className="text-[6.5px] text-red-600 font-bold">hosting</span>
        </div>
      </div>
    )
  }
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
      <div className="hex-icon-inner relative z-10 flex flex-col items-center justify-center p-2 text-center">
        {partner.icon}
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
          src="logonobg.png"
          alt="Routes Worldwide Express"
          className="relative z-10 h-20 w-20 sm:h-44 sm:w-44 object-contain drop-shadow-[0_0_15px_rgba(99,102,241,0.5)]"
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
        <header className="text-center mb sm:mb-8 max-w-4xl mx-auto px-4">
          <p className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.2em] text-red-600 mb-3">
              Partners & Technologies
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-900 font-[manrope] mb-5">
            Partners with Routes Worldwide Express
          </h2>
          <p className="text-xs sm:text-lg text-slate-500 max-w-3xl mx-auto leading-relaxed">
     We work with trusted logistics partners, carriers, and industry leaders to provide reliable and efficient shipping solutions. These strong partnerships help us expand our global reach, ensure smooth operations, and deliver exceptional service to our customers every step of the way.

          </p>
        </header>

        {/* Honeycomb grid workspace centerizer wrapper */}
        <div className="w-full flex justify-center overflow-hidden mt-0 md:mt-20">
          <div className="honeycomb-wrapper flex items-center justify-center origin-center transition-transform duration-300">
            
            {/* ─── LEFT WING (9 Hexagons staggered) ─── */}
            <div className="flex flex-col items-end shrink-0" style={{ gap: `${GAP_Y}px`, marginRight: `${GAP_X}px` }}>
              
              {/* Row 1 Left: ChatGPT, RZ, swissICT */}
              <div className="flex items-center" style={{ gap: `${GAP_X}px` }}>
                <HexBadge partner={LEFT_PARTNERS[0]} />
                <HexBadge partner={LEFT_PARTNERS[1]} />
              </div>

              {/* Row 2 Left (Staggered offset): Intel, Ingram Micro, sipcall */}
              <div className="flex items-center" style={{ gap: `${GAP_X}px`, marginRight: `${(HEX_W + GAP_X) / 2}px` }}>
                <HexBadge partner={LEFT_PARTNERS[3]} />
                <HexBadge partner={LEFT_PARTNERS[4]} />
              </div>

              {/* Row 3 Left: Meta, ADN, Microsoft Partner */}
              <div className="flex items-center" style={{ gap: `${GAP_X}px` }}>
                <HexBadge partner={LEFT_PARTNERS[6]} />
                <HexBadge partner={LEFT_PARTNERS[7]} />
              </div>

            </div>

            {/* ─── CENTRAL LOGO HUB ─── */}
            <div className="relative shrink-0 flex items-center justify-center mx-1 z-30">
              <CenterLogoHex />
            </div>

            {/* ─── RIGHT WING (9 Hexagons staggered) ─── */}
            <div className="flex flex-col items-start shrink-0" style={{ gap: `${GAP_Y}px`, marginLeft: `${GAP_X}px` }}>
              
              {/* Row 1 Right: Gemini, AWS, AnyDesk */}
              <div className="flex items-center" style={{ gap: `${GAP_X}px` }}>
                <HexBadge partner={RIGHT_PARTNERS[0]} />
                <HexBadge partner={RIGHT_PARTNERS[1]} />
              </div>

              {/* Row 2 Right (Staggered offset): Google, IDiC, Green Icon */}
              <div className="flex items-center" style={{ gap: `${GAP_X}px`, marginLeft: `${(HEX_W + GAP_X) / 2}px` }}>
                <HexBadge partner={RIGHT_PARTNERS[3]} />
                <HexBadge partner={RIGHT_PARTNERS[4]} />
              </div>

              {/* Row 3 Right: ASUS, HotellerieSuisse, swiss hosting */}
              <div className="flex items-center" style={{ gap: `${GAP_X}px` }}>
                <HexBadge partner={RIGHT_PARTNERS[6]} />
                <HexBadge partner={RIGHT_PARTNERS[7]} />
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}