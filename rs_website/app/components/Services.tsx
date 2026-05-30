import { Plane, Ship, Train, Truck, Package, Globe, Warehouse, FileCheck, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Plane,
    title: "Air Freight",
    description: "Fast and reliable international air transportation for time-sensitive shipments with real-time tracking.",
  },
  {
    icon: Ship,
    title: "Ocean Freight",
    description: "Cost-effective sea freight solutions for bulk shipments with full Container Load (FCL) and Less Than Container Load (LCL) options.",
  },
  {
    icon: Train,
    title: "Rail Freight",
    description: "Efficient rail transportation for bulk cargo with cost-effective solutions and nationwide coverage.",
  },
  {
    icon: Truck,
    title: "Road Freight",
    description: "Flexible road transportation services for quick delivery across all regions and urban areas.",
  },
  {
    icon: Globe,
    title: "International Courier",
    description: "Express courier services for documents and parcels to destinations worldwide with guaranteed delivery times.",
  },
  {
    icon: Package,
    title: "Domestic Transportation",
    description: "Nationwide distribution network ensuring timely delivery across all major cities and remote locations.",
  },
  {
    icon: FileCheck,
    title: "Custom Clearance",
    description: "Expert customs documentation and clearance services ensuring smooth cross-border shipment processing.",
  },
  {
    icon: Warehouse,
    title: "Warehousing",
    description: "Secure climate-controlled storage facilities with inventory management and fulfillment capabilities.",
  },
];

export default function Services() {
  return (
    <section 
      className="relative py-16 sm:py-20 bg-blue-950"
      // style={{
      //   backgroundImage: "url('https://i.pinimg.com/1200x/ac/b3/1a/acb31ab1d9bbdb26c435bf22b7ba0e53.jpg')",
      //   backgroundSize: "contain",
      //   backgroundPosition: "center",
      //   backgroundAttachment: "fixed",
      // }}
    >
      {/* Dark overlay */}
      <div className="absolute "></div>
      
      <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-5xl font-[manrope]">
            Our Comprehensive Services
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg">
            End-to-end logistics solutions tailored to meet your shipping needs, from pickup to doorstep delivery.
          </p>
        </div>

        <div className="min-h-screen  p-3 md:p-16 flex items-center justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl w-full">
        {services.map((service, index) => {
          const IconComponent = service.icon;
          return (
            <div 
              key={index}
              className="relative group w-full aspect-[4/5] flex flex-col justify-end p-6 rounded-[3rem] border border-white overflow-hidden transition-all duration-700 hover:-translate-y-2 hover:border-white/10"
              style={{
                borderRadius: index % 2 === 0 ? "3rem 1rem 3rem 1rem" : "1rem 3rem 1rem 3rem"
              }}
            >
              {/* Abstract Floating Illustration */}
              <div className={`absolute -top-10 -right-10 w-48 h-48 rounded-full  group-hover:opacity-100 transition-opacity duration-1000`} />
              
              <div className="relative z-10">
                <div className="w-12 h-12 mb-6 rounded-2xl flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform duration-500">
                  <IconComponent className="w-6 h-6 text-white/70" />
                </div>
                
                <h3 className="text-xl font-medium text-white mb-2">{service.title}</h3>
                <p className="text-xs text-white/40 leading-relaxed mb-6 max-w-[80%]">
                  {service.description}
                </p>
                
                {/* <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div> */}
              </div>
            </div>
          );
        })}
      </div>
    </div>
      </div>
    </section>
  );
}
