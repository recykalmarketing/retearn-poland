'use client';

import i18n from 'i18next';
import { initReactI18next, useTranslation } from 'react-i18next';
import enTranslations from '@/lib/translations/en.json';
import plTranslations from '@/lib/translations/pl.json';
import Header from '@/components/Header';
import HeroFrames from '@/components/HeroFrames';
import ScrollingSection from '@/components/ScrollingSection';
import Footer from '@/components/Footer';

// No browser-based language auto-detection: it resolves differently on the
// server (no window/navigator) than on the client, which caused a hydration
// mismatch — the page briefly flashed English then snapped to Polish (or vice
// versa) on every load. Always boot deterministically in Polish; the header
// toggle switches language client-side after mount, which is safe.
if (!i18n.isInitialized) {
  i18n
    .use(initReactI18next)
    .init({
      resources: {
        en: { translation: enTranslations },
        pl: { translation: plTranslations },
      },
      lng: 'pl',
      fallbackLng: 'pl',
      interpolation: { escapeValue: false },
    });
}

interface Product {
  name: string;
  subtitle: string;
  description: string;
  specs: string[];
  cta: string;
}

interface TechBlock {
  title: string;
  description: string;
}

interface FaqItem {
  q: string;
  a: string;
}

const audienceIcons: Record<string, string> = {
  retailers: '🏬',
  drsOperators: '📊',
  housingCooperatives: '🏘️',
  educationalInstitutions: '🎓',
  municipalities: '🏛️',
};

const audienceIds: Record<string, string> = {
  retailers: 'retailers',
  drsOperators: 'drs-operators',
  housingCooperatives: 'housing-cooperatives',
  educationalInstitutions: 'educational-institutions',
  municipalities: 'municipalities',
};

const audienceImageText: Record<string, string> = {
  retailers: 'Retail Environment',
  drsOperators: 'Network Dashboard',
  housingCooperatives: 'Residential Community',
  educationalInstitutions: 'Campus Environment',
  municipalities: 'Public Space',
};

export default function Home() {
  const { t } = useTranslation();

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const products = t('rvms.products', { returnObjects: true }) as Product[];
  const techBlocks = t('technology.blocks', { returnObjects: true }) as TechBlock[];
  const faqQuestions = t('faq.questions', { returnObjects: true }) as FaqItem[];
  const audienceOptions = t('form.audienceOptions', { returnObjects: true }) as string[];
  const audienceKeys = ['retailers', 'drsOperators', 'housingCooperatives', 'educationalInstitutions', 'municipalities'];

  const scrollingItems = audienceKeys.map((key) => ({
    id: audienceIds[key],
    eyebrow: t(`${key}.sectionLabel`),
    title: t(`${key}.headline`),
    description: t(`${key}.solutionHeadline`),
    highlights: t(`${key}.outcomes`, { returnObjects: true }) as string[],
    cta: t(`${key}.cta`),
    imageText: audienceImageText[key],
  }));

  return (
    <main className="w-full">
      <Header />
      <HeroFrames frameCount={463} fps={30} />

      {/* RVMs Section */}
      <section id="rvms" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">{t('header.rvms')}</span>
            <h2 className="mt-4 text-4xl font-bold text-gray-900">{t('rvms.heading')}</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {products.map((product) => (
              <div key={product.name} className="border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-shadow">
                <div className="bg-gray-100 h-56 rounded-xl mb-8 flex items-center justify-center">
                  <span className="text-gray-400 text-lg">{product.name} Visual</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{product.name}</h3>
                <p className="text-primary font-semibold mt-2">{product.subtitle}</p>
                <p className="text-gray-600 mt-4">{product.description}</p>
                <ul className="mt-6 space-y-3">
                  {product.specs.map((spec) => (
                    <li key={spec} className="flex items-center gap-3 text-gray-700">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      {spec}
                    </li>
                  ))}
                </ul>
                <button onClick={() => handleScroll('book-meeting')} className="mt-8 w-full py-3 bg-white border-2 border-primary text-black font-semibold rounded-full hover:bg-primary hover:text-white transition-all">
                  {product.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audiences */}
      <section id="audiences" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900">{t('audiences.heading')}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {audienceKeys.map((key) => (
              <button
                key={key}
                onClick={() => handleScroll(audienceIds[key])}
                className="p-6 bg-white border border-primary/10 rounded-2xl text-center hover:shadow-lg hover:border-primary/40 hover:-translate-y-2 transition-all group"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center text-2xl group-hover:bg-primary group-hover:scale-110 transition-all">
                  {audienceIcons[key]}
                </div>
                <h3 className="font-bold text-gray-900 group-hover:text-primary transition-colors">{t(`audiences.${key}.title`)}</h3>
                <p className="text-sm text-gray-600 mt-2">{t(`audiences.${key}.description`)}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Scrolling Audience Sections */}
      <ScrollingSection items={scrollingItems} />

      {/* Technology Section */}
      <section id="technology" className="py-24 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">{t('header.technology')}</span>
            <h2 className="mt-4 text-4xl font-bold text-gray-900">{t('technology.heading')}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {techBlocks.map((tech) => (
              <div key={tech.title} className="bg-white p-8 rounded-2xl text-center border-t-4 border-primary shadow-sm hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-gray-900 text-lg">{tech.title}</h3>
                <p className="text-gray-600 text-sm mt-4">{tech.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button onClick={() => handleScroll('book-meeting')} className="btn-primary">
              {t('technology.cta')}
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900">{t('faq.heading')}</h2>
          </div>

          <div className="space-y-6">
            {faqQuestions.map((item, i) => (
              <details key={i} className="group border-b border-gray-200 pb-6">
                <summary className="font-semibold text-gray-900 cursor-pointer hover:text-primary transition-colors flex justify-between items-center">
                  {item.q}
                  <span className="text-gray-400 group-open:rotate-180 transition-transform">▶</span>
                </summary>
                <p className="text-gray-600 mt-4 text-sm leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="book-meeting" className="py-32 bg-gradient-to-br from-primary-dark via-primary to-secondary text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-white">{t('form.heading')}</h2>
            <p className="text-white/80 text-lg">{t('form.supporting')}</p>
          </div>

          <form className="space-y-4 mb-8">
            <input type="text" placeholder={t('form.fields.fullName')} className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/60 rounded-lg focus:outline-none focus:border-white/40 transition-colors" required />
            <input type="email" placeholder={t('form.fields.workEmail')} className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/60 rounded-lg focus:outline-none focus:border-white/40 transition-colors" required />
            <input type="tel" placeholder={t('form.fields.phone')} className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/60 rounded-lg focus:outline-none focus:border-white/40 transition-colors" required />
            <input type="text" placeholder={t('form.fields.organisation')} className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/60 rounded-lg focus:outline-none focus:border-white/40 transition-colors" required />
            <input type="text" placeholder={t('form.fields.role')} className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/60 rounded-lg focus:outline-none focus:border-white/40 transition-colors" required />
            <select className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white rounded-lg focus:outline-none focus:border-white/40 transition-colors">
              <option className="bg-primary-dark" value="">{t('form.fields.audienceType')}</option>
              {audienceOptions.map((opt) => (
                <option key={opt} className="bg-primary-dark">{opt}</option>
              ))}
            </select>
            <input type="number" placeholder={t('form.fields.locations')} className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/60 rounded-lg focus:outline-none focus:border-white/40 transition-colors" />
            <input type="text" placeholder={t('form.fields.timeline')} className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/60 rounded-lg focus:outline-none focus:border-white/40 transition-colors" />
            <textarea placeholder={t('form.fields.message')} rows={4} className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/60 rounded-lg focus:outline-none focus:border-white/40 transition-colors"></textarea>
            <button type="submit" className="w-full py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition-all text-lg">
              {t('form.submit')}
            </button>
          </form>

          <p className="text-white/70 text-center text-sm">{t('form.reassurance')}</p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
