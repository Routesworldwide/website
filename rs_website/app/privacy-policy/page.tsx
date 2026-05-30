import React from 'react'

import { Mail, Phone, MapPin, Building2 } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <main>
      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504123010103-b5f6b5d3a1a2?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&s=8a2b0a6c4d8b0e7a3c1f9a2b6e7d9f0b')",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-700"></div>
        
        <div className="relative px-6 py-4 rounded text-center">
          <h1 className="text-4xl md:text-8xl font-[manrope] text-white">Privacy Policy</h1>
          <p className="mt-5 text-sm md:text-lg text-gray-100">Your privacy is important to us</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl md:text-4xl  font-[manrope] text-slate-900 mb-6">Privacy Policy</h2>
            <p className="text-gray-600 mb-8">Last updated: May 2026</p>

            <h3 className="text-2xl  text-slate-900 mt-8 mb-4">1. Introduction</h3>
            <p className="text-slate-600 leading-8 mb-6">
              Routes Worldwide Express ("we", "us", "our" or "Company") operates the website. This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
            </p>

            <h3 className="text-2xl  text-slate-900 mt-8 mb-4">2. Information Collection and Use</h3>
            <p className="text-slate-600 leading-8 mb-6">
              We collect several different types of information for various purposes to provide and improve our Service to you:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-6">
              <li>Personal Data: Name, email address, phone number, postal address, usage data</li>
              <li>Cookies and Tracking Data: We may use cookies and similar tracking technologies</li>
              <li>Device Information: Device type, operating system, browser type, IP address</li>
              <li>Usage Data: Pages visited, time and date of visits, time spent on pages</li>
            </ul>

            <h3 className="text-2xl  text-slate-900 mt-8 mb-4">3. Use of Data</h3>
            <p className="text-slate-600 leading-8 mb-6">
              Routes Worldwide Express uses the collected data for various purposes:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-6">
              <li>To provide and maintain our Service</li>
              <li>To notify you about changes to our Service</li>
              <li>To allow you to participate in interactive features of our Service</li>
              <li>To provide customer care and support</li>
              <li>To gather analysis or valuable information so that we can improve our Service</li>
              <li>To monitor the usage of our Service</li>
              <li>To detect, prevent and address technical issues</li>
            </ul>

            <h3 className="text-2xl  text-slate-900 mt-8 mb-4">4. Security of Data</h3>
            <p className="text-slate-600 leading-8 mb-6">
              The security of your data is important to us but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
            </p>

            <h3 className="text-2xl  text-slate-900 mt-8 mb-4">5. Changes to This Privacy Policy</h3>
            <p className="text-slate-600 leading-8 mb-6">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "effective date" at the top of this Privacy Policy.
            </p>

            <h3 className="text-2xl  text-slate-900 mt-8 mb-4">6. Contact Us</h3>
            <p className="text-slate-600 leading-8 mb-6">
              If you have any questions about this Privacy Policy, please <a href="/contact" className="text-blue-500 hover:underline">contact us</a>.
            </p>
       
          </div>
        </div>
      </section>
    </main>
  )
}
