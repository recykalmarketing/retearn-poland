'use client';

import { useTranslation } from 'react-i18next';

export default function TechnologySection() {
  const { t } = useTranslation();

  const blocks = [
    {
      title: t('technology.blocks.0.title'),
      description: t('technology.blocks.0.description'),
      icon: '🎯',
    },
    {
      title: t('technology.blocks.1.title'),
      description: t('technology.blocks.1.description'),
      icon: '📍',
    },
    {
      title: t('technology.blocks.2.title'),
      description: t('technology.blocks.2.description'),
      icon: '🔌',
    },
    {
      title: t('technology.blocks.3.title'),
      description: t('technology.blocks.3.description'),
      icon: '📊',
    },
  ];

  const handleCta = () => {
    const form = document.getElementById('book-meeting');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="technology" className="w-full py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-16">
          {t('technology.heading')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {blocks.map((block, i) => (
            <div key={i} className="p-6 border-l-4 border-primary hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{block.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{block.title}</h3>
              <p className="text-gray-600">{block.description}</p>
            </div>
          ))}
        </div>

        <button
          onClick={handleCta}
          className="btn-primary"
        >
          {t('technology.cta')}
        </button>
      </div>
    </section>
  );
}
