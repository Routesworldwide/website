"use client";

import Image from "next/image";

export default function Footer() {
  const socialLinks = [
    {
      name: "Facebook",
      href: "https://www.facebook.com/share/1BFtM96YUQ/?mibextid=wwXIfr",
      icon: "/icons/facebook.png",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/routesworldwide/",
      icon: "/icons/social.png",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/routesworldwide-express-ab1854411?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
      icon: "/icons/linkedin.png",
    },
    {
      name: "WhatsApp",
      href: "https://wa.me/8796200495",
      icon: "/icons/whatsapp.png",
    }
  ];

  return (
    <footer className="bg-[#041230] px-4 pb-6 pt-10 text-white">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[40px] border border-white/10 bg-[#041230]">

        {/* GRID BACKGROUND */}
        <div
          className="relative overflow-hidden px-8 py-16 sm:px-12 lg:px-16"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        >

          {/* MAIN GRID */}
          <div className="grid gap-16 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">

            {/* LEFT CONTENT */}
            <div className="max-w-sm">

              {/* LOGO */}
              <a href="/" className="flex items-center gap-3">
                <div className="relative h-12 w-12 overflow-hidden rounded-2xl">
                  <Image
                    src="/logo.png"
                    alt="Routes Worldwide"
                    fill
                    className="object-cover"
                  />
                </div>

                <div>
                  <h2 className="text-2xl font-bold tracking-tight text-white">
                    Routes
                  </h2>
                  <p className="text-sm text-gray-400">
                    Worldwide Express
                  </p>
                </div>
              </a>

              {/* DESCRIPTION */}
              <p className="mt-8 text-base leading-8 text-gray-400">
                Reliable worldwide freight forwarding and logistics solutions
                designed to keep your business moving with speed and precision.
              </p>

              {/* SOCIALS */}
              <div className="mt-8 flex items-center gap-4">

                {socialLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:bg-[#c8102e]"
                  >
                    <img
                      src={item.icon}
                      alt={item.name}
                      className="h-5 w-5 object-contain"
                    />
                  </a>
                ))}

              </div>
            </div>

            {/* SERVICES */}
            <div>
              <h3 className="text-lg font-semibold text-white">
                Services
              </h3>

              <ul className="mt-8 space-y-5 text-gray-400">

                <li>
                  <a href="#" className="transition hover:text-white">
                    Air Freight
                  </a>
                </li>

                <li>
                  <a href="#" className="transition hover:text-white">
                    Ocean Freight
                  </a>
                </li>

                <li>
                  <a href="#" className="transition hover:text-white">
                    Road Transport
                  </a>
                </li>

                <li>
                  <a href="#" className="transition hover:text-white">
                    Warehousing
                  </a>
                </li>

                <li>
                  <a href="#" className="transition hover:text-white">
                    Customs Clearance
                  </a>
                </li>

              </ul>
            </div>

            {/* COMPANY */}
            <div>
              <h3 className="text-lg font-semibold text-white">
                Company
              </h3>

              <ul className="mt-8 space-y-5 text-gray-400">

                <li>
                  <a href="/about" className="transition hover:text-white">
                    About Us
                  </a>
                </li>

             

              

                <li>
                  <a href="/blog" className="transition hover:text-white">
                    Blog
                  </a>
                </li>

                <li>
                  <a href="/contact" className="transition hover:text-white">
                    Contact
                  </a>
                </li>

              </ul>
            </div>

            {/* CONTACT */}
            <div>
              <h3 className="text-lg font-semibold text-white">
                Contact
              </h3>

              <div className="mt-8 space-y-6 text-gray-400">

                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-gray-500">
                    Address
                  </p>

                  <p className="mt-3 leading-7">
                    Office 1016/2 Beegreen Plaza, Mahipalpur,
                    New Delhi - 110037
                  </p>
                </div>

                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-gray-500">
                    Phone
                  </p>

                  <a
                    href="tel:+918796200495"
                    className="mt-3 block transition hover:text-white"
                  >
                    +91 8796200495
                  </a>
                </div>

                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-gray-500">
                    Email
                  </p>

                  <a
                    href="mailto:routesworldwide@gmail.com"
                    className="mt-3 block transition hover:text-white"
                  >
                    routesworldwideexpress@gmail.com
                  </a>
                </div>

              </div>
            </div>

          </div>

          {/* BOTTOM BAR */}
          <div className="mt-16 rounded-[30px] border border-white/10 bg-white/5 px-8 py-6 backdrop-blur-sm">

            <div className="flex flex-col gap-6 text-sm text-gray-400 lg:flex-row lg:items-center lg:justify-between">

              <p>
                © {new Date().getFullYear()} Routes Worldwide Express.
                All Rights Reserved.
              </p>

              <div className="flex flex-wrap items-center gap-8">

                <a href="#" className="transition hover:text-white">
                  Privacy Policy
                </a>

                <a href="#" className="transition hover:text-white">
                  Terms of Service
                </a>

                <a href="#" className="transition hover:text-white">
                  Shipping Policy
                </a>

              </div>

            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}