"use client";

import { useState } from "react";
import { ArrowRight, Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Why is my package delayed?",
    answer:
      "Delays can happen due to customs clearance, weather conditions, incorrect address details, high shipment volume, or transit issues. You can track your shipment for the latest update.",
  },
  {
    question: "What do I do if tracking page doesn't show the expected date of arrival?",
    answer:
      "Sometimes tracking updates take time to refresh. Please check again after a few hours or contact our support team with your tracking number for assistance.",
  },
  {
    question: "How can I get the contact number of my delivery partner?",
    answer:
      "For security reasons, delivery partner contact details may not always be shared directly. You can contact our support team to coordinate with the delivery partner.",
  },
  {
    question: "What should I do if I am not available at the time of delivery?",
    answer:
      "You can request a reschedule, provide alternate delivery instructions, or ask someone available at the address to receive the shipment on your behalf.",
  },
  {
    question: "My shipment has been returned/cancelled. What should I do?",
    answer:
      "Please contact our support team with your shipment ID. We’ll help you understand the reason and guide you with re-shipping or refund-related steps.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 ">
        <div className="mb-12">
          <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
            FAQs
          </h2>
          <div className="mt-6 h-1.5 w-40 bg-red-500" />
        </div>

        <div className="space-y-5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="border-l-4 border-slate-900 pl-5 md:pl-8"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-start justify-between gap-5 py-4 text-left"
                >
                  <span className="text-xl font-bold leading-snug text-slate-950 md:text-3xl">
                    {faq.question}
                  </span>

                  <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-900">
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                  </span>
                </button>

                {isOpen && (
                  <p className="max-w-4xl pb-5 text-base leading-7 text-slate-600 md:text-lg">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-12">
          <a
            href="/contact"
            className="inline-flex items-center gap-10 rounded bg-slate-950 px-8 py-5 text-lg font-bold text-white transition hover:bg-red-600 md:px-10 md:text-2xl"
          >
            Need More Help?
            <ArrowRight className="h-7 w-7" />
          </a>
        </div>
      </div>
    </section>
  );
}