"use client";

import { Mail, Phone, MapPin, ArrowRight, Plane, Train, Truck, Globe } from "lucide-react";
import { useState } from "react";

const shippingTypes = [
    { id: "air", label: "Air Freight", icon: Plane },
    { id: "rail", label: "Rail Freight", icon: Train },
    { id: "road", label: "Road Freight", icon: Truck },
    { id: "courier", label: "International Courier", icon: Globe },
];

const benefits = [
    {
        number: "24/7",
        title: "Instant Quotes",
        description: "Get shipping quotes instantly",
    },
    {
        number: "100+",
        title: "Global Routes",
        description: "Coverage to 100+ countries worldwide",
    },
    {
        number: "99%",
        title: "Accuracy",
        description: "Precise pricing with no hidden charges",
    },
];

export default function QuotePage() {
    const [formData, setFormData] = useState({
        name: "",
        company: "",
        email: "",
        phone: "",
        shippingType: "",
        origin: "",
        destination: "",
        weight: "",
        dimensions: "",
        goodsDescription: "",
        shippingDate: "",
        specialRequirements: "",
        contactMethod: "email",
    });

    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
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
            const response = await fetch("/api/quote", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Failed to submit quote request");
            }

            setSubmitted(true);
            setFormData({
                name: "",
                company: "",
                email: "",
                phone: "",
                shippingType: "",
                origin: "",
                destination: "",
                weight: "",
                dimensions: "",
                goodsDescription: "",
                shippingDate: "",
                specialRequirements: "",
                contactMethod: "email",
            });

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
            <section className="relative h-screen px-6 sm:px-8 flex items-center justify-center overflow-hidden">

                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1700716465891-9e5e9f501d7d?q=80&w=1193&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                    }}
                />

                {/* Blue Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-950/50 via-blue-900/70 to-blue-950/75" />

                {/* Existing Decorative Blurs */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-40 -right-40 w-80 h-96 bg-red-500/10 rounded-full blur-3xl" />
                    <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />
                </div>

                <div className="relative mx-auto max-w-7xl text-center">
                    <div>
                        <h1 className="text-5xl sm:text-6xl lg:text-8xl mb-6 font-[manrope] text-white">
                            Get Your Shipping Quote
                        </h1>

                        <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                            Instantly compare shipping rates and options for your cargo.
                            Fast, transparent, and tailored to your needs.
                        </p>
                    </div>
                </div>
            </section>

            {/* Quote Form Section */}
            <section className="py-20 px-6 sm:px-8 bg-white">
                <div className="mx-auto max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                        {/* Left Side - Info */}
                        <div className="lg:col-span-1">
                            <div className="sticky top-20">
                                {/* <h2 className="text-3xl  text-black mb-6 font-[manrope]">
                  Why Get a Quote?
                </h2> */}

                                <div className="space-y-6">
                                    {benefits.map((benefit, index) => (
                                        <div key={index} className="flex gap-4">
                                            <div className="flex-shrink-0">
                                                <div className="flex items-center justify-center h-12 w-12 rounded bg-red-600 text-white font-bold">
                                                    {benefit.number}
                                                </div>
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold text-black">
                                                    {benefit.title}
                                                </h3>
                                                <p className="text-sm text-slate-600 mt-1">
                                                    {benefit.description}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Contact Info */}
                                <div className="mt-10 p-6 rounded bg-gradient-to-br from-blue-700 via-blue-600 to-blue-500 border border-blue-400 shadow-lg">
                                    <p className="text-sm font-semibold text-white mb-4">
                                        Need Help?
                                    </p>

                                    <div className="space-y-3 text-sm">
                                        <div className="flex items-center gap-3 text-white">
                                            <Phone className="w-4 h-4 text-blue-100" />
                                            <span>8796200495</span>
                                        </div>

                                        <div className="flex items-center gap-3 text-white break-all">
                                            <Mail className="w-4 h-4 text-blue-100 flex-shrink-0" />
                                            <span>info@routesworldwideexpress.com</span>
                                        </div>

                                        <div className="flex items-center gap-3 text-white">
                                            <MapPin className="w-4 h-4 text-blue-100" />
                                            <span>24/7 Support</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Form */}
                        <div className="lg:col-span-2  px-4 md:px-10 rounded-lg">
                            <h3 className="text-3xl  text-black mb-2 font-[manrope]">
                                Request a Quote
                            </h3>
                            <p className="text-neutral-600 my-8">
                                Fill in your shipment details to get an accurate quote tailored to your needs. Our team will review your request and get back to you within 24 hours.
                            </p>

                            <form onSubmit={handleSubmit} className="space-y-6 p-2">
                                {/* Shipper Details */}
                                <div>
                                    {/* <h4 className="text-lg font-semibold text-black mb-4">
                                        Your Details
                                    </h4> */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
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
                                    </div>
                                </div>

                                {/* Shipping Details */}
                                <div>
                                    {/* <h4 className="text-lg font-semibold text-black mb-4">
                                        Shipment Details
                                    </h4> */}

                                    <div className="mb-4">
                                        <label className="block text-sm font-medium text-black mb-2">
                                            Shipping Type *
                                        </label>
                                        <select
                                            name="shippingType"
                                            value={formData.shippingType}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-b-3 border-red-500 bg-white text-black focus:outline-none focus:border-black transition-all"
                                        >
                                            <option value="">Select shipping type</option>
                                            {shippingTypes.map((type) => (
                                                <option key={type.id} value={type.id}>
                                                    {type.label}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-black mb-2">
                                                Origin (City/Country) *
                                            </label>
                                            <input
                                                type="text"
                                                name="origin"
                                                value={formData.origin}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 border border-b-3 border-red-500 bg-white text-black placeholder-neutral-400 focus:outline-none focus:border-black transition-all"
                                                placeholder="e.g., New York, USA"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-black mb-2">
                                                Destination (City/Country) *
                                            </label>
                                            <input
                                                type="text"
                                                name="destination"
                                                value={formData.destination}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 border border-b-3 border-red-500 bg-white text-black placeholder-neutral-400 focus:outline-none focus:border-black transition-all"
                                                placeholder="e.g., London, UK"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                                        <div>
                                            <label className="block text-sm font-medium text-black mb-2">
                                                Weight (kg)
                                            </label>
                                            <input
                                                type="number"
                                                name="weight"
                                                value={formData.weight}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border border-b-3 border-red-500 bg-white text-black placeholder-neutral-400 focus:outline-none focus:border-black transition-all"
                                                placeholder="e.g., 100"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-black mb-2">
                                                Dimensions (L×W×H cm)
                                            </label>
                                            <input
                                                type="text"
                                                name="dimensions"
                                                value={formData.dimensions}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border border-b-3 border-red-500 bg-white text-black placeholder-neutral-400 focus:outline-none focus:border-black transition-all"
                                                placeholder="e.g., 100×50×30"
                                            />
                                        </div>
                                    </div>

                                    <div className="mt-4">
                                        <label className="block text-sm font-medium text-black mb-2">
                                            Goods Description *
                                        </label>
                                        <textarea
                                            name="goodsDescription"
                                            value={formData.goodsDescription}
                                            onChange={handleChange}
                                            required
                                            rows={3}
                                            className="w-full px-4 py-3 border border-b-3 border-red-500 bg-white text-black placeholder-neutral-400 focus:outline-none focus:border-black transition-all resize-none"
                                            placeholder="Describe what you're shipping..."
                                        />
                                    </div>

                                    <div className="mt-4">
                                        <label className="block text-sm font-medium text-black mb-2">
                                            Preferred Shipping Date
                                        </label>
                                        <input
                                            type="date"
                                            name="shippingDate"
                                            value={formData.shippingDate}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-b-3 border-red-500 bg-white text-black focus:outline-none focus:border-black transition-all"
                                        />
                                    </div>
                                </div>

                                {/* Additional Requirements */}
                                <div>
                                    <label className="block text-sm font-medium text-black mb-2">
                                        Special Requirements
                                    </label>
                                    <textarea
                                        name="specialRequirements"
                                        value={formData.specialRequirements}
                                        onChange={handleChange}
                                        rows={4}
                                        className="w-full px-4 py-3 border border-b-3 border-red-500 bg-white text-black placeholder-neutral-400 focus:outline-none focus:border-black transition-all resize-none"
                                        placeholder="e.g., Refrigerated, Fragile, Insured cargo..."
                                    />
                                </div>

                                {/* Contact Method */}
                                <div>
                                    <label className="block text-sm font-medium text-black mb-2">
                                        Preferred Contact Method
                                    </label>
                                    <select
                                        name="contactMethod"
                                        value={formData.contactMethod}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-b-3 border-red-500 bg-white text-black focus:outline-none focus:border-black transition-all"
                                    >
                                        <option value="email">Email</option>
                                        <option value="phone">Phone</option>
                                        <option value="both">Both Email & Phone</option>
                                    </select>
                                </div>

                                {error && (
                                    <div className="p-4 bg-red-50 border border-red-200 text-red-700 rounded text-sm">
                                        {error}
                                    </div>
                                )}

                                {submitted && (
                                    <div className="p-4 bg-green-50 border border-green-200 text-green-700 rounded text-sm">
                                        Thank you! Your quote request has been submitted. We&apos;ll get back to you shortly.
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={loading || submitted}
                                    className="w-full bg-blue-950 hover:bg-neutral-800 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold border border-b-3 border-black py-4 px-6 transition-all duration-300 flex items-center justify-center gap-2 group"
                                >
                                    {loading ? (
                                        <span>Submitting...</span>
                                    ) : submitted ? (
                                        <span>Quote Submitted!</span>
                                    ) : (
                                        <>
                                            {/* <Send className="w-4 h-4" /> */}
                                            <span>Get Quote</span>
                                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            {/* <section className="py-16 px-6 sm:px-8 bg-gradient-to-r from-blue-900 to-blue-950">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-[manrope]">
            Ready to Ship?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Get your quote in minutes and start shipping with confidence
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#quote-form"
              className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              Get Started
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 font-semibold py-3 px-8 transition-all duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section> */}
        </main>
    );
}
