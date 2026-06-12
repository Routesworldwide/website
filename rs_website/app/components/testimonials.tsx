"use client";

import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    quote:
      "Having a reliable freight partner makes planning and managing logistics so much easier. If you want that full partnership experience, go with Routes Worldwide Express.",
    name: "Rohit jain ",
    role: "Operations Manager",
    company: "AspenTech",
    avatar: "EO",
    avatarBg: "#d1d5db",
    bg: "#FFE94E",
    quoteColor: "#c9a800",
    textColor: "#1a1a1a",
    nameColor: "#1a1a1a",
    roleColor: "#444",
    companyColor: "#1a1a1a",
    size: "large",
  },
  {
    quote:
      "Everything we've seen from this logistics team has been the awesome piece we needed to streamline our supply chain. It's reliability with a purpose.",
    name: "Sandeep kedia",
    role: "Deputy Director of Logistics",
    company: "CMP Group",
    avatar: "KW",
    avatarBg: "#fbbf24",
    bg: "#C4B5FD",
    quoteColor: "#7c3aed",
    textColor: "#1a1a1a",
    nameColor: "#1a1a1a",
    roleColor: "#4b4b4b",
    companyColor: "#1a1a1a",
    size: "large",
  },
  {
    quote:
      "Routes Worldwide Express is simple, easy to work with, and gives us all the features we need. It just works.",
    name: "Rohan Raj",
    role: "Senior Growth Manager",
    company: "Piano",
    avatar: "AF",
    avatarBg: "#6b7280",
    bg: "#3B82F6",
    quoteColor: "#FFE94E",
    textColor: "#ffffff",
    nameColor: "#ffffff",
    roleColor: "#dbeafe",
    companyColor: "#ffffff",
    size: "small",
  },
  {
    quote:
      "The smart tracking and real-time updates were amazing. Our team talked about it long after the delivery. It was a great experience — very memorable.",
    name: "vineeta Tripathi",
    role: "Founder and CEO",
    company: "DPW",
    avatar: "MG",
    avatarBg: "#3b82f6",
    bg: "#FECACA",
    quoteColor: "#3b82f6",
    textColor: "#1a1a1a",
    nameColor: "#1a1a1a",
    roleColor: "#555",
    companyColor: "#1a1a1a",
    size: "small",
  },
  {
    quote:
      "We've never worked with a more helpful, solution-oriented freight partner — ever. I have some great ideas for future collaborations.",
    name: "Govind Sethi",
    role: "Senior Manager, Global Events",
    company: "HubSpot",
    avatar: "SK",
    avatarBg: "#f97316",
    bg: "#F5E6D8",
    quoteColor: "#f97316",
    textColor: "#1a1a1a",
    nameColor: "#1a1a1a",
    roleColor: "#555",
    companyColor: "#1a1a1a",
    size: "small",
  },
];

function Avatar({ initials, bg }: { initials: string; bg: string }) {
  return (
    <div
      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
      style={{ background: bg }}
    >
      {initials}
    </div>
  );
}

function QuoteIcon({ color }: { color: string }) {
  return (
    <svg width="36" height="28" viewBox="0 0 36 28" fill="none">
      <path
        d="M0 28V17.6C0 12.587 1.493 8.48 4.48 5.28 7.467 2.08 11.573 0.373 16.8 0.16L17.92 3.52C15.04 4.053 12.747 5.307 11.04 7.28 9.333 9.253 8.48 11.52 8.48 14.08H15.36V28H0ZM20.48 28V17.6C20.48 12.587 21.973 8.48 24.96 5.28 27.947 2.08 32.053 0.373 37.28 0.16L38.4 3.52C35.52 4.053 33.227 5.307 31.52 7.28 29.813 9.253 28.96 11.52 28.96 14.08H35.84V28H20.48Z"
        fill={color}
        fillOpacity="0.7"
      />
    </svg>
  );
}

export default function TestimonialsSection() {
  const large = testimonials.filter((t) => t.size === "large");
  const small = testimonials.filter((t) => t.size === "small");

  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(section);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-white px-6 py-20 font-sans lg:px-16"
    >
      <div className="mx-auto max-w-6xl space-y-5">
        {/* Row 1 — two large cards */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {large.map((t, i) => (
            <div
              key={i}
              className="flex min-h-[260px] flex-col justify-between rounded-3xl p-8"
              style={{ background: t.bg }}
            >
              <div>
                <div
                  className={`transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
                    visible
                      ? "scale-100 rotate-0 opacity-100"
                      : "scale-0 -rotate-45 opacity-0"
                  }`}
                  style={{ transitionDelay: `${i * 150}ms` }}
                >
                  <QuoteIcon color={t.quoteColor} />
                </div>

                <p
                  className="mt-5 text-lg font-medium leading-relaxed"
                  style={{ color: t.textColor }}
                >
                  {t.quote}
                </p>
              </div>

              <div className="mt-8 flex items-center gap-4">
                <Avatar initials={t.avatar} bg={t.avatarBg} />

                <div>
                  <p
                    className="text-sm font-bold"
                    style={{ color: t.nameColor }}
                  >
                    {t.name}
                  </p>

                  <p className="mt-0.5 text-xs" style={{ color: t.roleColor }}>
                    {t.role}
                  </p>

                  <p
                    className="mt-1 text-sm font-bold"
                    style={{ color: t.companyColor }}
                  >
                    {t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Row 2 — three small cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {small.map((t, i) => (
            <div
              key={i}
              className="flex min-h-[280px] flex-col justify-between rounded-3xl p-7"
              style={{ background: t.bg }}
            >
              <div>
                <div
                  className={`transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
                    visible
                      ? "scale-100 rotate-0 opacity-100"
                      : "scale-0 -rotate-45 opacity-0"
                  }`}
                  style={{ transitionDelay: `${(i + large.length) * 150}ms` }}
                >
                  <QuoteIcon color={t.quoteColor} />
                </div>

                <p
                  className="mt-4 text-base font-medium leading-relaxed"
                  style={{ color: t.textColor }}
                >
                  {t.quote}
                </p>
              </div>

              <div className="mt-6 flex items-center gap-3">
                <Avatar initials={t.avatar} bg={t.avatarBg} />

                <div>
                  <p
                    className="text-sm font-bold"
                    style={{ color: t.nameColor }}
                  >
                    {t.name}
                  </p>

                  <p className="mt-0.5 text-xs" style={{ color: t.roleColor }}>
                    {t.role}
                  </p>

                  <p
                    className="mt-1 text-sm font-bold"
                    style={{ color: t.companyColor }}
                  >
                    {t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}