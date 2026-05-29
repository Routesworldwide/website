export default function CTASection() {
  return (
    <section className=" bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* CTA Container */}
        <div className="relative overflow-hidden rounded bg-[#0f2746] px-8 py-16 sm:px-14 lg:px-20">

          {/* Background Glow */}
          <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-[#c8102e]/20 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-52 w-52 rounded-full bg-white/5 blur-3xl" />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">

            {/* Left Content */}
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-red-300">
                Ready to Ship?
              </p>

              <h2 className="mt-5 text-4xl md:text-5xl font-semibold font-[manrope] leading-tight text-white">
                Let’s move your cargo with speed and reliability
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-300">
                From global freight forwarding to warehousing and customs
                clearance, we provide end-to-end logistics solutions tailored
                for modern businesses.
              </p>
            </div>

            {/* Buttons */}
          <div className="flex lg:min-h-full lg:items-end lg:justify-end">
  <a href="/contact" className="inline-block rounded-xl border border-white/20 bg-white/10 px-8 py-4 text-sm font-semibold text-white backdrop-blur transition-all duration-300 hover:bg-white hover:text-slate-900">
    Contact Us
  </a>
</div>
          </div>
        </div>
      </div>
    </section>
  );
}