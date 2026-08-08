"use client";

import { useState } from "react";
import { FAQSchema } from "@/components/schema/FAQSchema";
import type { FAQ } from "@/types";

interface Props {
  faqs: readonly FAQ[];
  title?: string;
  includeSchema?: boolean;
}

export function FAQSection({
  faqs,
  title = "Frequently Asked Questions",
  includeSchema = true,
}: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="py-14 bg-surface" aria-labelledby="faq-heading">
      {includeSchema && <FAQSchema faqs={faqs} />}

      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h2 id="faq-heading" className="text-2xl sm:text-3xl font-bold text-ink text-center mb-10">
          {title}
        </h2>

        <dl className="space-y-2">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="border border-border rounded-xl overflow-hidden bg-white">
                <dt>
                  <button
                    type="button"
                    onClick={() => toggle(index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between px-5 py-4 text-left"
                  >
                    <span className="font-semibold text-ink text-sm sm:text-base pr-4">
                      {faq.question}
                    </span>
                    <svg
                      className={`h-5 w-5 text-ink-light flex-shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </dt>
                {isOpen && (
                  <dd className="px-5 pb-5 pt-0 text-ink-muted text-sm leading-relaxed border-t border-border">
                    {faq.answer}
                  </dd>
                )}
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}
