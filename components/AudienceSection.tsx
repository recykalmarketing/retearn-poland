'use client';

import { useTranslation } from 'react-i18next';

interface Solution {
  title: string;
  description: string;
}

interface AudienceSectionProps {
  id: string;
  sectionLabel: string;
  headline: string;
  painPoint: string;
  solutionHeadline: string;
  solutions: Solution[];
  outcomes: string[];
  cta: string;
  audienceType: string;
  bgColor: boolean;
}

export default function AudienceSection({
  id,
  sectionLabel,
  headline,
  painPoint,
  solutionHeadline,
  solutions,
  outcomes,
  cta,
  audienceType,
  bgColor,
}: AudienceSectionProps) {
  const { t } = useTranslation();

  const handleCta = () => {
    const form = document.getElementById('book-meeting');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth' });
      // Set audience type in form (would need ref to form component)
      const audienceSelect = document.querySelector('select[name="audienceType"]') as HTMLSelectElement;
      if (audienceSelect) {
        audienceSelect.value = audienceType;
      }
    }
  };

  return (
    <section
      id={id}
      className={`w-full py-20 ${bgColor ? 'bg-secondary' : 'bg-white'}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Label */}
        <div className="text-xs md:text-sm font-bold tracking-widest uppercase text-gray-500 mb-4">
          {sectionLabel}
        </div>

        {/* Headline */}
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          {headline}
        </h2>

        {/* Pain Point */}
        <p className="text-lg text-gray-600 mb-12 max-w-3xl">
          {painPoint}
        </p>

        {/* Solution Headline */}
        <h3 className="text-2xl md:text-3xl font-bold mb-12">
          {solutionHeadline}
        </h3>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {solutions.map((solution, i) => (
            <div key={i} className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h4 className="text-lg font-semibold mb-3">{solution.title}</h4>
              <p className="text-gray-600">{solution.description}</p>
            </div>
          ))}
        </div>

        {/* Outcomes */}
        <div className="mb-12 pb-12 border-b border-gray-200">
          <h4 className="text-sm font-bold uppercase text-gray-500 mb-6">Outcomes</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {outcomes.map((outcome, i) => (
              <div key={i} className="flex items-start">
                <div className="flex-shrink-0 mr-3 mt-1">
                  <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-gray-700">{outcome}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <button
          onClick={handleCta}
          className="btn-primary"
        >
          {cta}
        </button>

        {/* Placeholder for visual */}
        <div className="mt-16 bg-gray-100 h-64 md:h-96 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
          <div className="text-center">
            <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p className="text-gray-500">Section Visual - Add RVM/Product Image</p>
          </div>
        </div>
      </div>
    </section>
  );
}
