const achievements = [
  { value: "100+ Countries", label: "Global Reach" },
  { value: "10K+ Pin Codes", label: "Pan India" },
  { value: "24/7 Support", label: "Always Available" },
  { value: "100% Secure", label: "Insured Delivery" },
];

export default function Achievement() {
  return (
    <section className="bg-white  sm:py-20 my-22 ">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="mx-auto mb-10 max-w-6xl text-center">
       
          <h2 className="mt-4 text-3xl font-semibold tracking-normal  text-slate-950 sm:text-5xl font-[manrope]">
            Trusted Logistics Performance, Built For Every Route.
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
            We deliver reliability at scale with nationwide coverage, fast support, and secure handling for every shipment.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {achievements.map((item) => (
            <div key={item.value} className="rounded border-b-4 border-b-red-400 bg-slate-50 px-6 py-8 text-center shadow-sm shadow-slate-900/5 transition hover:-translate-y-1 hover:border-[#0f2746]/10 hover:shadow-md">
              <p className="text-3xl font-thin font-[manrope] text-[#c8102e]">{item.value}</p>
              <p className="mt-3 text-sm font-medium  text-slate-500">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
