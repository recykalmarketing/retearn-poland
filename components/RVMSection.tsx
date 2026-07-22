'use client';

import { useTranslation } from 'react-i18next';

export default function RVMSection() {
  const { t } = useTranslation();

  const products = [
    {
      name: t('rvms.products.0.name'),
      subtitle: t('rvms.products.0.subtitle'),
      description: t('rvms.products.0.description'),
      specs: [
        t('rvms.products.0.specs.0'),
        t('rvms.products.0.specs.1'),
        t('rvms.products.0.specs.2'),
        t('rvms.products.0.specs.3'),
      ],
      cta: t('rvms.products.0.cta'),
    },
    {
      name: t('rvms.products.1.name'),
      subtitle: t('rvms.products.1.subtitle'),
      description: t('rvms.products.1.description'),
      specs: [
        t('rvms.products.1.specs.0'),
        t('rvms.products.1.specs.1'),
        t('rvms.products.1.specs.2'),
        t('rvms.products.1.specs.3'),
      ],
      cta: t('rvms.products.1.cta'),
    },
  ];

  const handleCta = () => {
    const form = document.getElementById('book-meeting');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="rvms" className="w-full py-20 bg-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-16">
          {t('rvms.heading')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {products.map((product, i) => (
            <div key={i} className="bg-white p-8 rounded-lg shadow-sm">
              {/* Product image placeholder */}
              <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center mb-8 border border-gray-200">
                <div className="text-center">
                  <svg className="w-12 h-12 text-gray-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6z" />
                  </svg>
                  <p className="text-sm text-gray-500">{product.name}</p>
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
              <p className="text-sm text-gray-500 uppercase font-semibold mb-4">{product.subtitle}</p>
              <p className="text-gray-600 mb-6">{product.description}</p>

              <ul className="space-y-3 mb-8">
                {product.specs.map((spec, j) => (
                  <li key={j} className="flex items-start">
                    <svg className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{spec}</span>
                  </li>
                ))}
              </ul>

              <button className="btn-secondary w-full">
                {product.cta}
              </button>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 p-6 rounded-lg mb-12 border border-gray-200">
          <p className="text-sm text-gray-600 italic">{t('rvms.disclaimer')}</p>
        </div>

        <button
          onClick={handleCta}
          className="btn-primary"
        >
          {t('rvms.sharedCta')}
        </button>
      </div>
    </section>
  );
}
