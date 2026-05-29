import { useEffect, useState } from "react";

const services = [
  { img: "/icons/air-freight.png", bg: "#E8F1FF" },
  { img: "/icons/plane.png", bg: "#FFF4E5" },
  { img: "/icons/shipping.png", bg: "#E9FFF3" },
  { img: "/icons/train.png", bg: "#F3E8FF" },
  { img: "/icons/delivery.png", bg: "#FFE8EF" },
];

export default function FoldingIcon() {
  const [index, setIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const nextIndex = (index + 1) % services.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimating(true);

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % services.length);
        setAnimating(false);
      }, 900); // slower animation
    }, 4000); // ⬅️ slower interval (important)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center h-[80px]">
      <div className="relative w-18 h-18" style={{ perspective: "1200px" }}>

        {/* STACK DEPTH (top deck visible layers) */}
        <div className="absolute inset-0 rounded-2xl bg-black scale-[0.82] translate-y-3 opacity-20 z-0" />
        <div className="absolute inset-0 rounded-2xl bg-black scale-[0.88] translate-y-2 opacity-30 z-10" />
        <div className="absolute inset-0 rounded-2xl bg-black scale-[0.94] translate-y-1 opacity-50 z-20" />

        {/* CURRENT CARD */}
        <div
          className="absolute inset-0 rounded-3xl z-30 transition-all duration-700"
          style={{
            backgroundColor: services[index].bg,
            transform: animating
              ? "translateZ(-40px) scale(0.9)"
              : "translateZ(0px) scale(1)",
            opacity: animating ? 0.4 : 1,
          }}
        >
          <img
            src={services[index].img}
            className="w-full h-full object-contain p-4"
          />
        </div>

        {/* NEXT CARD (emerges from behind stack) */}
        <div
          className="absolute inset-0 rounded-3xl z-40 transition-all duration-700"
          style={{
            backgroundColor: services[nextIndex].bg,
            transform: animating
              ? "translateZ(0px) scale(1)"
              : "translateZ(-80px) scale(0.85)",
            opacity: animating ? 1 : 0,
          }}
        >
          <img
            src={services[nextIndex].img}
            className="w-full h-full object-contain p-4"
          />
        </div>

      </div>
    </div>
  );
}