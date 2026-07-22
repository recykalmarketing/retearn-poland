'use client';

import { useTranslation } from 'react-i18next';

export default function SolutionsSection() {
  const { t } = useTranslation();

  const services = [
    {
      title: t('solutions.services.0.title'),
      description: t('solutions.services.0.description'),
      icon: '🔍',
    },
    {
      title: t('solutions.services.1.title'),
      description: t('solutions.services.1.description'),
      icon: '⚙️',
    },
    {
      title: t('solutions.services.2.title'),
      description: t('solutions.services.2.description'),
      icon: '🔗',
    },
    {
      title: t('solutions.services.3.title'),
      description: t('solutions.services.3.description'),
      icon: '📈',
    },
  ];

  const handleCta = () => {
    const form = document.getElementById('book-meeting');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="solutions" className="w-full py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-xs md:text-sm font-bold tracking-widest uppercase text-gray-500 mb-4">
          {t('solutions.sectionLabel')}
        </div>

        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          {t('solutions.heading')}
        </h2>

        <p className="text-lg text-gray-600 mb-16 max-w-3xl">
          {t('solutions.supporting')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, i) => (
            <div key={i} className="text-center">
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 p-6 rounded-lg mb-12 border border-gray-200">
          <p className="text-sm text-gray-600 italic">{t('solutions.disclaimer')}</p>
        </div>

        <button
          onClick={handleCta}
          className="btn-primary"
        >
          {t('solutions.cta')}
        </button>
      </div>
    </section>
  );
}
