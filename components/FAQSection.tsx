'use client';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function FAQSection() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: t('faq.questions.0.q'),
      a: t('faq.questions.0.a'),
    },
    {
      q: t('faq.questions.1.q'),
      a: t('faq.questions.1.a'),
    },
    {
      q: t('faq.questions.2.q'),
      a: t('faq.questions.2.a'),
    },
    {
      q: t('faq.questions.3.q'),
      a: t('faq.questions.3.a'),
    },
    {
      q: t('faq.questions.4.q'),
      a: t('faq.questions.4.a'),
    },
    {
      q: t('faq.questions.5.q'),
      a: t('faq.questions.5.a'),
    },
  ];

  return (
    <section id="faq" className="w-full py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          {t('faq.heading')}
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <h3 className="font-semibold text-lg">{faq.q}</h3>
                <svg
                  className={`w-6 h-6 transition-transform ${openIndex === i ? 'transform rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>

              {openIndex === i && (
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-700 leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
