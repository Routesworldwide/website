import { ArrowRight, CheckCircle2, Globe2, ShieldCheck } from "lucide-react";

const steps = [
  {
    title: "Request a quote",
    description: "Share your shipment details and destinations so our team can recommend the optimal route and service level.",
    icon: Globe2,
  },
  {
    title: "Book your transport",
    description: "Choose the best shipping option for your cargo and confirm pickup, documentation, and insurance preferences.",
    icon: ShieldCheck,
  },
  {
    title: "Track in real time",
    description: "Monitor your shipment from origin to destination with live updates and proactive status alerts.",
    icon: CheckCircle2,
  },
];

export default function HowToGetStarted() {
  return (
    <section className="py-16 sm:py-20 bg-slate-100">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#c8102e]">
            Getting started
          </p>
          <h2 className=" text-3xl md:mt-12 mt-4 mb-4 font-semibold  font-[manrope] text-slate-950 sm:text-5xl">
            How to launch your first shipment ?
          </h2>
          <p className=" text-base leading-7 text-slate-600 sm:text-lg">
            Start shipping with confidence in just a few simple steps. We make global logistics transparent, predictable, and easy to manage.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={step.title} className="rounded border border-slate-200 bg-white p-8  text-center transition hover:-translate-y-1 hover:shadow-lg">
                <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-[#c8102e]/5">
                    <span className="outlined-number text-6xl font-semibold opacity-80">
                      {index + 1}
                    </span>
                </div>
                <h3 className="mt-3 text-xl  text-slate-950">{step.title}</h3>
                <p className="mt-4 text-sm leading-6 text-slate-600">{step.description}</p>
                <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-[#0f2746] transition hover:text-[#c8102e]">
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
