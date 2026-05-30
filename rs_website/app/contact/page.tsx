"use client";

import { Mail, Phone, MapPin, Clock, Send, ArrowRight } from "lucide-react";
import { useState } from "react";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    value: "8796200495",
    description: "Mon-Sun, 9AM-6PM EST",
  },
  {
    icon: Mail,
    title: "Email",
    value: "routesworldwideexpress@gmail.com",
    description: "We'll respond within 24 hours",
  },
  {
    icon: MapPin,
    title: "Headquarters",
    value: "OFFICE 1016/2 BEEGREEN PLAZA. 2ND FLOOR, MAHIPALPUR, NEW DELHI SOUTH WEST DELHI-110037",
    description: "Visit us for in-person consultation",
  },
  {
    icon: Clock,
    title: "Working Hours",
    value: "24/7 Support Available",
    description: "Emergency support for shipments",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", company: "", message: "" });

      // Reset success message after 3 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen px-6 sm:px-8 flex items-center justify-center bg-red-500">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-[98vh] bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-bold mb-6 font-[manrope]">
              Get in Touch
            </h1>
            <p className="text-lg sm:text-xl text-slate-700 max-w-2xl mx-auto">
              Have questions about our logistics solutions? We're here to help.
              Reach out to our team and we'll get back to you as soon as possible.
            </p>
          </div>
        </div>
      </section>

{/* Contact Info Cards */}
<section className="py-16 px-6 sm:px-8 bg-white">
  <div className="mx-auto max-w-7xl">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {contactInfo.map((info, index) => {
        const IconComponent = info.icon;

        return (
          <div
            key={index}
            className="group b pb-6 transition-all duration-300border border-b-3 border-red-600 hover:border-black"
          >
            {/* Icon */}
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-100 transition-all duration-300 group-hover:bg-black">
              <IconComponent className="h-5 w-5 text-black transition-colors duration-300 group-hover:text-white" />
            </div>

            {/* Content */}
            <h3 className="mb-2 text-lg font-semibold text-black">
              {info.title}
            </h3>

            <p className="mb-2 text-sm font-medium text-neutral-800">
              {info.value}
            </p>

            <p className="text-sm leading-relaxed text-neutral-500">
              {info.description}
            </p>
          </div>
        );
      })}
    </div>
  </div>
</section>

   {/* Contact Form Section */}
<section className="py-20 px-6 sm:px-8 bg-white">
  <div className="mx-auto max-w-7xl">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">

      {/* Left Side */}
      <div className="relative overflow-hidden rounded-[32px] min-h-[700px]">

        {/* Background Image */}
        <img
          src="/contact.png"
          alt="Logistics Tracking"
          className="absolute inset-0 h-full w-full object-contain object-center"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0" />

        {/* Content */}
        <div className="relative z-10 flex h-full flex-col justify-between p-8 sm:p-12">

          {/* <div>
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-white/70 mb-4">
              Contact Us
            </p>

            <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6 font-[manrope] max-w-xl">
              Let’s Move Your Business Forward
            </h2>

            <p className="text-white/80 text-lg leading-relaxed max-w-lg">
              Whether you need fast global shipping, reliable freight solutions,
              or logistics support, our team is ready to help you find the right
              solution for your business.
            </p>
          </div> */}

          {/* Bottom Stats */}
          {/* <div className="grid grid-cols-2 gap-6 pt-10">
            <div className="border-t border-white/20 pt-5">
              <h4 className="text-3xl font-bold text-white mb-1">24/7</h4>
              <p className="text-sm text-white/70">
                Dedicated customer support
              </p>
            </div>

            <div className="border-t border-white/20 pt-5">
              <h4 className="text-3xl font-bold text-white mb-1">120+</h4>
              <p className="text-sm text-white/70">
                Global shipping partners
              </p>
            </div>
          </div> */}
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="border border-neutral-200  p-8 sm:p-10">
        <h3 className="text-3xl font-bold text-black mb-3 font-[manrope]">
          Send us a Message
        </h3>

        <p className="text-neutral-600 mb-8">
          Fill out the form and our team will get back to you shortly.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-black mb-2">
                Full Name *
              </label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-b-3 border-red-500 bg-white text-black placeholder-neutral-400 focus:outline-none focus:border-black transition-all"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-black mb-2">
                Email *
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-b-3 border-red-500 bg-white text-black placeholder-neutral-400 focus:outline-none focus:border-black transition-all"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-black mb-2">
                Phone Number
              </label>

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-b-3 border-red-500 bg-white text-black placeholder-neutral-400 focus:outline-none focus:border-black transition-all"
                placeholder="+1 (555) 000-0000"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-black mb-2">
                Company
              </label>

              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-b-3 border-red-500 bg-white text-black placeholder-neutral-400 focus:outline-none focus:border-black transition-all"
                placeholder="Your company"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-black mb-2">
              Message *
            </label>

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-4 py-3 border border-b-3 border-red-500 bg-white text-black placeholder-neutral-400 focus:outline-none focus:border-black transition-all resize-none"
              placeholder="Tell us about your shipping needs..."
            />
          </div>

          {error && (
            <div className="p-4 bg-red-50 border border-red-200 text-red-700 rounded text-sm">
              {error}
            </div>
          )}

          {submitted && (
            <div className="p-4 bg-green-50 border border-green-200 text-green-700 rounded text-sm">
              Thank you! Your message has been sent successfully. We'll get back to you soon.
            </div>
          )}

          <button
            type="submit"
            disabled={loading || submitted}
            className="w-full bg-blue-950 hover:bg-neutral-800 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold border border-b-3 border-black py-4 px-6 transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            {loading ? (
              <span>Sending...</span>
            ) : submitted ? (
              <span>Message Sent!</span>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Send Message</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  </div>
</section>

      {/* Map Section */}
      <section className="py-16 px-6 sm:px-8 bg-neutral-100">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4 font-[manrope]">
              Visit Our Headquarters
            </h2>
            <p className="text-neutral-600 text-lg">
              Find us at our main office and meet our team in person
            </p>
          </div>

          <div className="rounded overflow-hidden  h-96 sm:h-[500px]  ">
            <iframe
          
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.7137569043525!2d77.13049647549771!3d28.548322275710806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1d2b913124f9%3A0xdd0a795105f06165!2sBeeGreen%20Plaza!5e0!3m2!1sen!2sin!4v1779965935781!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>
      </section>
    
    </main>
  );
}
