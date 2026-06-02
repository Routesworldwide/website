"use client";

import { useEffect, useState, useRef } from "react";

export default function TruckRevealSection() {
  const [phase, setPhase] = useState<
    "idle" | "trucking" | "stopped" | "revealing"
  >("idle");

  const cardRef = useRef<HTMLDivElement>(null);

  // Start animation when section enters viewport
  useEffect(() => {
    const section = cardRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {

            // Start truck animation
            setPhase("trucking");

            // Small stop effect
            setTimeout(() => {
              setPhase("stopped");
            }, 400);

            // Reveal text
            setTimeout(() => {
              setPhase("revealing");
            }, 900);

            // Run once only
            observer.disconnect();
          }
        });
      },
      {
        threshold: 0.4,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-center overflow-hidden bg-none py-16 md:py-28">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">

        {/* Card */}
        <div
          ref={cardRef}
          className="relative flex min-h-[420px] items-center overflow-hidden bg-white py-14 "
        >

          {/* LEFT CONTENT */}
          <div className="relative z-10 w-[80%] px-6 sm:w-[70%] sm:px-10 lg:px-16">

            <div
              style={{
                opacity: phase === "revealing" ? 1 : 0,
                clipPath:
                  phase === "revealing"
                    ? "inset(0 0% 0 0)"
                    : "inset(0 100% 0 0)",
                transition:
                  phase === "revealing"
                    ? "clip-path 1.5s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.15s ease"
                    : "none",
              }}
            >

              <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-[#c8102e] sm:text-sm">
                Global Freight Solutions
              </p>

              <h2 className=" text-xl font-semibold leading-tight tracking-tight text-gray-900 xs:text-2xl sm:text-4xl ">
                Delivering Worldwide Logistics With{" "}
                <span className="text-[#c8102e]">
                  Seamless Precision & Care
                </span>
              </h2>

              <p className="mt-5 text-xs leading-7 text-gray-500 sm:text-base">
                Reliable transportation and smart logistics solutions designed
                to keep your supply chain moving efficiently across the globe.
              </p>

            </div>
          </div>

          {/* RIGHT — truck animation */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">

            <div
              className="absolute bottom-[63px]"
              style={{
                left: 0,
                transform: "translateX(-280px)",
                willChange: "transform",
                animation:
                  phase === "trucking" ||
                  phase === "stopped" ||
                  phase === "revealing"
                    ? "truckDrive 5.5s cubic-bezier(0.18, 1, 0.35, 1) forwards"
                    : "none",
              }}
            >

              <img
                src="/moving.gif"
                alt="Delivery truck"
                className="h-auto w-[80px] pb-3 sm:w-[220px] md:pb-0 lg:w-[300px]"
                style={{ display: "block" }}
              />

            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Desktop */
        @keyframes truckDrive {
          0% {
            transform: translateX(-280px);
          }

          85% {
            transform: translateX(calc(72vw - 150px));
            animation-timing-function: cubic-bezier(
              0.34,
              1.2,
              0.64,
              1
            );
          }

          100% {
            transform: translateX(calc(72vw - 150px));
          }
        }

        /* Tablet */
        @media (max-width: 1024px) {
          @keyframes truckDrive {
            0% {
              transform: translateX(-280px);
            }

            85% {
              transform: translateX(calc(68vw - 110px));
            }

            100% {
              transform: translateX(calc(68vw - 110px));
            }
          }
        }

        /* Mobile */
        @media (max-width: 640px) {
          @keyframes truckDrive {
            0% {
              transform: translateX(-280px);
            }

            85% {
              transform: translateX(calc(80vw - 40px));
            }

            100% {
              transform: translateX(calc(80vw - 40px));
            }
          }
        }
      `}</style>
    </section>
  );
}