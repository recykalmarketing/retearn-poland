'use client';

import { useTranslation } from 'react-i18next';

export default function AboutSection() {
  const { t } = useTranslation();

  const proofPoints = [
    {
      title: t('about.proofPoints.0.title'),
      description: t('about.proofPoints.0.description'),
      icon: '🚀',
    },
    {
      title: t('about.proofPoints.1.title'),
      description: t('about.proofPoints.1.description'),
      icon: '⚡',
    },
    {
      title: t('about.proofPoints.2.title'),
      description: t('about.proofPoints.2.description'),
      icon: '🔧',
    },
  ];

  const handleCta = () => {
    const form = document.getElementById('book-meeting');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="w-full py-20 bg-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left side */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {t('about.heading')}
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              {t('about.copy')}
            </p>

            <div className="space-y-6">
              {proofPoints.map((point, i) => (
                <div key={i} className="flex items-start">
                  <div className="text-3xl mr-4">{point.icon}</div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">{point.title}</h4>
                    <p className="text-gray-600">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={handleCta}
              className="btn-primary mt-8"
            >
              {t('about.cta')}
            </button>
          </div>

          {/* Right side - Team image placeholder */}
          <div className="bg-gray-100 h-96 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
            <div className="text-center">
              <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 12H9m4 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              <p className="text-gray-500">Team Photo/Image Placeholder</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
