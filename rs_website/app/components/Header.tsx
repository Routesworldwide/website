"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full border-b transition-all duration-300 ${
        isScrolled
          ? "border-slate-200 bg-white/90 backdrop-blur-xl shadow-sm shadow-slate-900/10"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8">
        <a href="/" className="flex items-center gap-3">
          <div className="relative h-12 w-12 overflow-hidden rounded-2xl">
            <Image
              src="/logo.png"
              alt="Routes Worldwide logo"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <p
              className={`text-lg font-semibold transition-colors duration-300 ${
                isScrolled ? "text-black" : "text-white"
              }`}
            >
              Routes Worldwide Express
            </p>
          </div>
        </a>

        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-8 rounded-3xl bg-white/50 p-3 px-7 md:flex"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-slate-900 transition hover:text-[#0f2746]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="/contact"
            className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
          >
            Get a quote
          </a>

          <a
            href="/track"
            className="rounded-full bg-blue-950 px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#122f63]"
          >
            Track shipment
          </a>
        </div>

        <button
          type="button"
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation menu"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:border-slate-300 hover:text-slate-950 md:hidden"
        >
          <span className="sr-only">Menu</span>

          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="h-5 w-5"
          >
            {isMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <div className="border-t border-slate-200 bg-white/95 px-6 py-5 shadow-sm md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-slate-700 transition hover:text-[#0f2746]"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="mt-5 flex flex-col gap-3">
            <a
              href="/contact"
              className="rounded-full border border-slate-300 bg-white px-4 py-3 text-center text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
            >
              Get a quote
            </a>

            <a
              href="/track"
              className="rounded-full bg-[#0f2746] px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#122f63]"
            >
              Track shipment
            </a>
          </div>
        </div>
      )}
    </header>
  );
} 