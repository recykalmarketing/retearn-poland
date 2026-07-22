'use client';

import { useEffect } from 'react';
import i18n from 'i18next';
import { initReactI18next, useTranslation } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import enTranslations from '@/lib/translations/en.json';
import plTranslations from '@/lib/translations/pl.json';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AudienceSelector from '@/components/AudienceSelector';
import AudienceSection from '@/components/AudienceSection';
import SolutionsSection from '@/components/SolutionsSection';
import RVMSection from '@/components/RVMSection';
import TechnologySection from '@/components/TechnologySection';
import AboutSection from '@/components/AboutSection';
import FAQSection from '@/components/FAQSection';
import LeadForm from '@/components/LeadForm';
import Footer from '@/components/Footer';

// Initialize i18next
if (!i18n.isInitialized) {
  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources: {
        en: { translation: enTranslations },
        pl: { translation: plTranslations },
      },
      fallbackLng: 'pl',
      detection: {
        order: ['localStorage', 'navigator'],
        caches: ['localStorage'],
      },
      interpolation: {
        escapeValue: false,
      },
    });
}

export default function Home() {
  const { t } = useTranslation();

  useEffect(() => {
    const savedLang = localStorage.getItem('i18nextLng');
    if (savedLang && savedLang !== i18n.language) {
      i18n.changeLanguage(savedLang);
    } else {
      i18n.changeLanguage('pl');
    }
  }, []);

  return (
    <main className="w-full">
      <Header />
      <Hero />
      <AudienceSelector />

      {/* Retailers Section */}
      <AudienceSection
        id="retailers"
        sectionLabel={t('retailers.sectionLabel')}
        headline={t('retailers.headline')}
        painPoint={t('retailers.painPoint')}
        solutionHeadline={t('retailers.solutionHeadline')}
        solutions={[
          {
            title: t('retailers.solutions.0.title'),
            description: t('retailers.solutions.0.description'),
          },
          {
            title: t('retailers.solutions.1.title'),
            description: t('retailers.solutions.1.description'),
          },
          {
            title: t('retailers.solutions.2.title'),
            description: t('retailers.solutions.2.description'),
          },
          {
            title: t('retailers.solutions.3.title'),
            description: t('retailers.solutions.3.description'),
          },
        ]}
        outcomes={[
          t('retailers.outcomes.0'),
          t('retailers.outcomes.1'),
          t('retailers.outcomes.2'),
          t('retailers.outcomes.3'),
        ]}
        cta={t('retailers.cta')}
        audienceType="Retailer"
        bgColor={false}
      />

      {/* DRS Operators Section */}
      <AudienceSection
        id="drs-operators"
        sectionLabel={t('drsOperators.sectionLabel')}
        headline={t('drsOperators.headline')}
        painPoint={t('drsOperators.painPoint')}
        solutionHeadline={t('drsOperators.solutionHeadline')}
        solutions={[
          {
            title: t('drsOperators.solutions.0.title'),
            description: t('drsOperators.solutions.0.description'),
          },
          {
            title: t('drsOperators.solutions.1.title'),
            description: t('drsOperators.solutions.1.description'),
          },
          {
            title: t('drsOperators.solutions.2.title'),
            description: t('drsOperators.solutions.2.description'),
          },
          {
            title: t('drsOperators.solutions.3.title'),
            description: t('drsOperators.solutions.3.description'),
          },
        ]}
        outcomes={[
          t('drsOperators.outcomes.0'),
          t('drsOperators.outcomes.1'),
          t('drsOperators.outcomes.2'),
          t('drsOperators.outcomes.3'),
        ]}
        cta={t('drsOperators.cta')}
        audienceType="DRS Operator"
        bgColor={true}
      />

      {/* Housing Cooperatives Section */}
      <AudienceSection
        id="housing-cooperatives"
        sectionLabel={t('housingCooperatives.sectionLabel')}
        headline={t('housingCooperatives.headline')}
        painPoint={t('housingCooperatives.painPoint')}
        solutionHeadline={t('housingCooperatives.solutionHeadline')}
        solutions={[
          {
            title: t('housingCooperatives.solutions.0.title'),
            description: t('housingCooperatives.solutions.0.description'),
          },
          {
            title: t('housingCooperatives.solutions.1.title'),
            description: t('housingCooperatives.solutions.1.description'),
          },
          {
            title: t('housingCooperatives.solutions.2.title'),
            description: t('housingCooperatives.solutions.2.description'),
          },
          {
            title: t('housingCooperatives.solutions.3.title'),
            description: t('housingCooperatives.solutions.3.description'),
          },
        ]}
        outcomes={[
          t('housingCooperatives.outcomes.0'),
          t('housingCooperatives.outcomes.1'),
          t('housingCooperatives.outcomes.2'),
          t('housingCooperatives.outcomes.3'),
        ]}
        cta={t('housingCooperatives.cta')}
        audienceType="Housing Cooperative"
        bgColor={false}
      />

      {/* Educational Institutions Section */}
      <AudienceSection
        id="educational-institutions"
        sectionLabel={t('educationalInstitutions.sectionLabel')}
        headline={t('educationalInstitutions.headline')}
        painPoint={t('educationalInstitutions.painPoint')}
        solutionHeadline={t('educationalInstitutions.solutionHeadline')}
        solutions={[
          {
            title: t('educationalInstitutions.solutions.0.title'),
            description: t('educationalInstitutions.solutions.0.description'),
          },
          {
            title: t('educationalInstitutions.solutions.1.title'),
            description: t('educationalInstitutions.solutions.1.description'),
          },
          {
            title: t('educationalInstitutions.solutions.2.title'),
            description: t('educationalInstitutions.solutions.2.description'),
          },
          {
            title: t('educationalInstitutions.solutions.3.title'),
            description: t('educationalInstitutions.solutions.3.description'),
          },
        ]}
        outcomes={[
          t('educationalInstitutions.outcomes.0'),
          t('educationalInstitutions.outcomes.1'),
          t('educationalInstitutions.outcomes.2'),
          t('educationalInstitutions.outcomes.3'),
        ]}
        cta={t('educationalInstitutions.cta')}
        audienceType="Educational Institution"
        bgColor={true}
      />

      {/* Municipalities Section */}
      <AudienceSection
        id="municipalities"
        sectionLabel={t('municipalities.sectionLabel')}
        headline={t('municipalities.headline')}
        painPoint={t('municipalities.painPoint')}
        solutionHeadline={t('municipalities.solutionHeadline')}
        solutions={[
          {
            title: t('municipalities.solutions.0.title'),
            description: t('municipalities.solutions.0.description'),
          },
          {
            title: t('municipalities.solutions.1.title'),
            description: t('municipalities.solutions.1.description'),
          },
          {
            title: t('municipalities.solutions.2.title'),
            description: t('municipalities.solutions.2.description'),
          },
          {
            title: t('municipalities.solutions.3.title'),
            description: t('municipalities.solutions.3.description'),
          },
        ]}
        outcomes={[
          t('municipalities.outcomes.0'),
          t('municipalities.outcomes.1'),
          t('municipalities.outcomes.2'),
          t('municipalities.outcomes.3'),
        ]}
        cta={t('municipalities.cta')}
        audienceType="Municipality"
        bgColor={false}
      />

      <SolutionsSection />
      <RVMSection />
      <TechnologySection />
      <AboutSection />
      <FAQSection />
      <LeadForm />
      <Footer />
    </main>
  );
}
