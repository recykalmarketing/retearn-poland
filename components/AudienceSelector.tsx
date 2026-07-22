'use client';

import { useTranslation } from 'react-i18next';

interface Audience {
  id: string;
  titleKey: string;
  descriptionKey: string;
  icon: string;
}

export default function AudienceSelector() {
  const { t } = useTranslation();

  const audiences: Audience[] = [
    { id: 'retailers', titleKey: 'audiences.retailers.title', descriptionKey: 'audiences.retailers.description', icon: '🏬' },
    { id: 'drs-operators', titleKey: 'audiences.drsOperators.title', descriptionKey: 'audiences.drsOperators.description', icon: '📊' },
    { id: 'housing-cooperatives', titleKey: 'audiences.housingCooperatives.title', descriptionKey: 'audiences.housingCooperatives.description', icon: '🏘️' },
    { id: 'educational-institutions', titleKey: 'audiences.educationalInstitutions.title', descriptionKey: 'audiences.educationalInstitutions.description', icon: '🎓' },
    { id: 'municipalities', titleKey: 'audiences.municipalities.title', descriptionKey: 'audiences.municipalities.description', icon: '🏛️' },
  ];

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="audience-selector" className="w-full py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          {t('audiences.heading')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {audiences.map((audience) => (
            <button
              key={audience.id}
              onClick={() => handleClick(audience.id)}
              className="p-6 border-2 border-gray-200 rounded-lg hover:border-primary hover:shadow-lg transition-all duration-200 text-center cursor-pointer group"
            >
              <div className="text-4xl mb-4">{audience.icon}</div>
              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                {t(audience.titleKey)}
              </h3>
              <p className="text-sm text-gray-600">
                {t(audience.descriptionKey)}
              </p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
