"use client";

import { Zap, Globe, FileCheck, Headphones } from "lucide-react";

const reasons = [
  {
    icon: <Zap className="w-6 h-6" />,
    color: "from-violet-500 to-purple-600",
    delay: "0s",
    title: "Fast Delivery",
    desc: "We prioritize speed and reliability, ensuring your shipments are delivered on time through optimized routes, efficient handling, and a trusted global transportation network.",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    color: "from-blue-400 to-blue-600",
    delay: "0.15s",
    title: "Global Network",
    desc: "Our extensive international network connects businesses and individuals across multiple countries, providing seamless shipping solutions and dependable worldwide logistics support.",
  },
  {
    icon: <FileCheck className="w-6 h-6" />,
    color: "from-teal-400 to-cyan-5",
    delay: "0.3s",
    title: "Customs Expertise",
    desc: "Our customs specialists manage documentation, compliance requirements, and clearance procedures efficiently, helping prevent delays and ensuring smooth cross-border shipments.",
  },
  {
    icon: <Headphones className="w-6 h-6" />,
    color: "from-slate-400 to-slate-500",
    delay: "0.45s",
    title: "Dedicated Support",
    desc: "Our dedicated support team is available to assist with tracking, documentation, shipping inquiries, and logistics solutions throughout your shipment journey.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative bg-white overflow-hidden py-24 px-6 lg:px-16 font-sans">

      {/* Large decorative circle background */}
      {/* Animated Background Circles */}
<div
  className="absolute left-[28%] top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-full bg-gray-100/80 pointer-events-none animate-circle-one"
  style={{ zIndex: 0 }}
/>

<div
  className="absolute left-[30%] top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-gray-200/50 blur-sm pointer-events-none animate-circle-two"
  style={{ zIndex: 0 }}
/>

<div
  className="absolute left-[29%] top-1/2 h-[320px] w-[320px] -translate-y-1/2 rounded-full bg-white/40 blur-md pointer-events-none animate-circle-three"
  style={{ zIndex: 0 }}
/>

      <div className="relative z-10 mx-auto max-w-6xl flex flex-col lg:flex-row items-center gap-12 lg:gap-0">

        {/* LEFT — "Why Choose Us" big circle */}
        <div className="shrink-0 flex items-center justify-center">
          <div
            className="w-52 h-52 lg:w-60 lg:h-60 rounded-full font-[manrope] flex items-center justify-center text-center text-white font-extrabold text-2xl lg:text-3xl leading-tight shadow-2xl"
            style={{
              background: "linear-gradient(135deg, #c8102e 0%, #0f2746 55%, #071426 100%)",
              animation: "floatMain 4s ease-in-out infinite",
            }}
          >
            <span>
              WHY<br />
              CHOOSE<br />
              US
            </span>
          </div>
        </div>

        {/* CENTRE — description text (sits over the big grey circle) */}
        <div className="lg:w-56  text-gray-500 text-sm leading-relaxed text-center lg:text-left z-10 px-4">
          <p className="mb-4">
            We combine cutting-edge logistics technology with a passionate team to deliver an unmatched freight experience for businesses of all sizes.
          </p>
          <p>
            From first mile to last mile, our end-to-end solutions keep your supply chain moving with confidence and clarity.
          </p>
        </div>

        {/* RIGHT — icon circles + labels */}
        <div className="flex-1 flex flex-col gap-8 lg:pl-24">
          {reasons.map((r, i) => (
            <div key={i} className="flex items-center gap-5">

              {/* Floating icon circle */}
              <div
                className={`shrink-0 w-14 h-14 rounded-full bg-gradient-to-br ${r.color} text-white flex items-center justify-center shadow-lg`}
                style={{
                  animation: `float 3.6s ease-in-out infinite`,
                  animationDelay: r.delay,
                }}
              >
                {r.icon}
              </div>

              {/* Connector line */}
              <div className="w-10 h-[2px] bg-gray-300 shrink-0" />

              {/* Text */}
              <div>
                <h3 className="text-base font-bold text-gray-900 mb-1">{r.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed max-w-xs">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Keyframes */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px);  }
          50%       { transform: translateY(-8px); }
        }
        @keyframes floatMain {
          0%, 100% { transform: translateY(0px);   }
          50%       { transform: translateY(-12px); }
        }
      `}</style>
    </section>
  );
}