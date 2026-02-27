'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQSection({ faqs }: { faqs: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <div key={i} className="border border-gray-200 rounded-lg overflow-hidden">
          <button
            className="w-full text-left px-6 py-4 flex justify-between items-center bg-white hover:bg-gray-50 transition-colors"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            aria-expanded={openIndex === i}
          >
            <span className="font-semibold text-gray-800 pr-4">{faq.question}</span>
            <span className="text-primary-500 text-xl flex-shrink-0" aria-hidden="true">
              {openIndex === i ? '−' : '+'}
            </span>
          </button>
          {openIndex === i && (
            <div className="px-6 pb-4 text-gray-600 text-sm leading-relaxed">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
