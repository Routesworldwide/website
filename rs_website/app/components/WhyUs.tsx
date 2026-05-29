"use client";

const reasons = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
      </svg>
    ),
    color: "from-violet-500 to-purple-600",
    delay: "0s",
    title: "Premium Quality",
    desc: "Every shipment is handled with meticulous care and industry-leading standards, ensuring your cargo arrives in perfect condition.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    color: "from-blue-400 to-blue-600",
    delay: "0.15s",
    title: "On-Time Delivery",
    desc: "We understand that time is money. Our optimised routes and real-time tracking guarantee punctual deliveries, every time.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .84h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
    color: "from-teal-400 to-cyan-500",
    delay: "0.3s",
    title: "24/7 Support",
    desc: "Our dedicated support team is available around the clock to answer questions and resolve any issues that may arise.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
      </svg>
    ),
    color: "from-slate-400 to-slate-500",
    delay: "0.45s",
    title: "Customer First",
    desc: "Your satisfaction drives every decision we make. We build long-term partnerships rooted in trust, transparency, and reliability.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative bg-white overflow-hidden py-24 px-6 lg:px-16 font-sans">

      {/* Large decorative circle background */}
      <div
        className="absolute left-[28%] top-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full bg-gray-100/80 pointer-events-none"
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