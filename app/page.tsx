'use client';

import { useEffect } from 'react';
import i18n from 'i18next';
import { initReactI18next, useTranslation } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import enTranslations from '@/lib/translations/en.json';
import plTranslations from '@/lib/translations/pl.json';
import Header from '@/components/Header';
import HeroFrames from '@/components/HeroFrames';
import Footer from '@/components/Footer';

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
      detection: { order: ['localStorage', 'navigator'], caches: ['localStorage'] },
      interpolation: { escapeValue: false },
    });
}

export default function Home() {
  const { t } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage('pl');
  }, []);

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="w-full">
      <Header />

      {/* 02. Hero - Frame-based Video */}
      <HeroFrames frameCount={180} fps={30} />

      {/* 03. Audience Selector */}
      <section id="audiences" className="bg-white">
        <div className="max-w-5xl mx-auto">
          <h2>Built for every return location.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mt-8">
            {[
              { title: 'Retailers', desc: 'Simple returns for busy stores.', id: 'retailers' },
              { title: 'DRS Operators', desc: 'Connected control at scale.', id: 'drs-operators' },
              { title: 'Housing Cooperatives', desc: 'Returns closer to residents.', id: 'housing-cooperatives' },
              { title: 'Educational Institutions', desc: 'Better habits across campus.', id: 'educational-institutions' },
              { title: 'Municipalities', desc: 'Accessible returns for communities.', id: 'municipalities' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => handleScroll(item.id)}
                className="text-left p-4 border border-gray-200 rounded-lg hover:border-primary hover:shadow-sm transition-all"
              >
                <h3 className="mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 04. For Retailers */}
      <section id="retailers" className="bg-white">
        <div className="max-w-5xl mx-auto">
          <span className="eyebrow">FOR RETAILERS</span>
          <h2>Keep returns moving.</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl">
            Compact, connected RVMs designed around your store.
          </p>
          <ul className="highlights">
            <li>Compact footprint</li>
            <li>Remote monitoring</li>
            <li>Simple customer experience</li>
          </ul>
          <button className="btn-primary mb-12">Plan a Retail Return Point</button>
          <div className="bg-gray-100 h-80 rounded-lg flex items-center justify-center text-gray-400">
            [Retail Store Visual]
          </div>
        </div>
      </section>

      {/* 05. For DRS Operators */}
      <section id="drs-operators" className="bg-white">
        <div className="max-w-5xl mx-auto">
          <span className="eyebrow">FOR DRS OPERATORS</span>
          <h2>Run every location from one connected view.</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl">
            Monitor machines, returns and capacity across your network.
          </p>
          <ul className="highlights">
            <li>Fleet visibility</li>
            <li>Return data</li>
            <li>Flexible deployment</li>
          </ul>
          <button className="btn-primary mb-12">Discuss Your Network</button>
          <div className="bg-gray-100 h-80 rounded-lg flex items-center justify-center text-gray-400">
            [Network Dashboard Visual]
          </div>
        </div>
      </section>

      {/* 06. For Housing Cooperatives */}
      <section id="housing-cooperatives" className="bg-white">
        <div className="max-w-5xl mx-auto">
          <span className="eyebrow">FOR HOUSING COOPERATIVES</span>
          <h2>Bring returns closer to home.</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl">
            A convenient shared return point for residents.
          </p>
          <ul className="highlights">
            <li>Local access</li>
            <li>Compact setup</li>
            <li>Connected servicing</li>
          </ul>
          <button className="btn-primary mb-12">Plan a Housing Pilot</button>
          <div className="bg-gray-100 h-80 rounded-lg flex items-center justify-center text-gray-400">
            [Residential Community Visual]
          </div>
        </div>
      </section>

      {/* 07. For Educational Institutions */}
      <section id="educational-institutions" className="bg-white">
        <div className="max-w-5xl mx-auto">
          <span className="eyebrow">FOR EDUCATIONAL INSTITUTIONS</span>
          <h2>Make returning a daily habit.</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl">
            Simple return infrastructure for students, staff and visitors.
          </p>
          <ul className="highlights">
            <li>Easy to use</li>
            <li>Visible participation</li>
            <li>Measurable impact</li>
          </ul>
          <button className="btn-primary mb-12">Plan a Campus Programme</button>
          <div className="bg-gray-100 h-80 rounded-lg flex items-center justify-center text-gray-400">
            [Campus Visual]
          </div>
        </div>
      </section>

      {/* 08. For Municipalities */}
      <section id="municipalities" className="bg-white">
        <div className="max-w-5xl mx-auto">
          <span className="eyebrow">FOR MUNICIPALITIES</span>
          <h2>Make returns part of public life.</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl">
            Connected return points for neighbourhoods and public spaces.
          </p>
          <ul className="highlights">
            <li>Accessible locations</li>
            <li>Outdoor-ready options</li>
            <li>Operational visibility</li>
          </ul>
          <button className="btn-primary mb-12">Plan a Municipal Network</button>
          <div className="bg-gray-100 h-80 rounded-lg flex items-center justify-center text-gray-400">
            [Public Plaza Visual]
          </div>
        </div>
      </section>

      {/* 09. Solutions */}
      <section id="solutions" className="bg-white">
        <div className="max-w-5xl mx-auto">
          <span className="eyebrow">SOLUTIONS</span>
          <h2>From location planning to daily operations.</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8 mb-12">
            {[
              { title: 'Assess', desc: 'Understand the location and return volume.' },
              { title: 'Configure', desc: 'Choose the right machine setup.' },
              { title: 'Connect', desc: 'Integrate machines, data and systems.' },
              { title: 'Operate', desc: 'Monitor performance and support growth.' },
            ].map((step) => (
              <div key={step.title}>
                <h3>{step.title}</h3>
                <p className="text-sm text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
          <button className="btn-primary">Build Your Return Plan</button>
        </div>
      </section>

      {/* 10. RVMs */}
      <section id="rvms" className="bg-white">
        <div className="max-w-5xl mx-auto">
          <span className="eyebrow">OUR RVMS</span>
          <h2>Choose the right capacity.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8 mb-12">
            {[
              {
                name: 'Reklaim Ace',
                subtitle: 'Compact RVM',
                desc: 'For smaller stores and lower-volume locations.',
                specs: ['Approximately 200–300 returns per day', 'Compact footprint', 'Remote monitoring', 'Fill-level alerts'],
                cta: 'Explore Reklaim Ace',
              },
              {
                name: 'Reklaim Bulk',
                subtitle: 'High-Capacity RVM',
                desc: 'For large retailers and high-volume return points.',
                specs: ['Built for high return volumes', 'Larger storage capacity', 'Fewer collection runs', 'Connected reporting'],
                cta: 'Explore Reklaim Bulk',
              },
            ].map((product) => (
              <div key={product.name}>
                <div className="bg-gray-100 h-48 rounded-lg mb-6 flex items-center justify-center text-gray-400">
                  [{product.name} Image]
                </div>
                <h3>{product.name}</h3>
                <p className="text-sm text-gray-500 mb-4">{product.subtitle}</p>
                <p className="text-sm text-gray-600 mb-6">{product.desc}</p>
                <ul className="space-y-2 mb-6">
                  {product.specs.map((spec) => (
                    <li key={spec} className="text-sm text-gray-600 flex gap-2">
                      <span>•</span> {spec}
                    </li>
                  ))}
                </ul>
                <button className="btn-secondary text-sm">{product.cta}</button>
              </div>
            ))}
          </div>
          <button className="btn-primary">Get an RVM Recommendation</button>
        </div>
      </section>

      {/* 11. Technology */}
      <section id="technology" className="bg-white">
        <div className="max-w-5xl mx-auto">
          <span className="eyebrow">TECHNOLOGY</span>
          <h2>Intelligence behind every return.</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8 mb-12">
            {[
              { title: 'Recognise', desc: 'Fast container identification.' },
              { title: 'Track', desc: 'Real-time machine data.' },
              { title: 'Connect', desc: 'Flexible system integration.' },
              { title: 'Improve', desc: 'Insights for better operations.' },
            ].map((tech) => (
              <div key={tech.title}>
                <h3>{tech.title}</h3>
                <p className="text-sm text-gray-600">{tech.desc}</p>
              </div>
            ))}
          </div>
          <button className="btn-primary">See the Technology</button>
        </div>
      </section>

      {/* 12. About */}
      <section id="about" className="bg-white">
        <div className="max-w-5xl mx-auto">
          <span className="eyebrow">ABOUT RETEARN</span>
          <h2>Circular infrastructure beyond the machine.</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl">
            Retearn is a Recykal venture building connected technology for material return and recovery.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              { title: 'Circular-economy experience', desc: 'Built on experience across circular-economy technology.' },
              { title: 'AI and computer vision', desc: 'Powered by intelligent material identification.' },
              { title: 'Configurable solutions', desc: 'Adapted for different locations and operators.' },
            ].map((point) => (
              <div key={point.title}>
                <h3>{point.title}</h3>
                <p className="text-sm text-gray-600">{point.desc}</p>
              </div>
            ))}
          </div>
          <button className="btn-primary">Meet Retearn</button>
        </div>
      </section>

      {/* 13. FAQ */}
      <section id="faq" className="bg-white">
        <div className="max-w-3xl mx-auto">
          <h2>Good to know.</h2>
          <div className="space-y-6 mt-8">
            {[
              { q: 'Which RVM is right for our location?', a: 'We recommend a configuration based on space and return volume.' },
              { q: 'Can Retearn support Poland's DRS?', a: 'The deployment is configured around the selected operator and requirements.' },
              { q: 'Can it connect with our systems?', a: 'Integration options are reviewed before deployment.' },
              { q: 'Can an RVM be installed outdoors?', a: 'Yes, depending on location and operating requirements.' },
              { q: 'Can we start with a pilot?', a: 'Yes. We can begin with selected locations.' },
              { q: 'What happens in the first meeting?', a: 'We discuss your locations, volumes and recommended next steps.' },
            ].map((item, i) => (
              <details key={i} className="border-b pb-6">
                <summary className="font-medium cursor-pointer">{item.q}</summary>
                <p className="text-gray-600 mt-3 text-sm">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 14. Book Meeting */}
      <section id="book-meeting" className="bg-primary text-white">
        <div className="max-w-3xl mx-auto">
          <h2 style={{ color: 'white' }}>Let's plan your return solution.</h2>
          <p className="text-white/80 mb-8">
            A focused 30-minute conversation about your locations and requirements.
          </p>
          <form className="space-y-4 mb-8">
            {[
              { label: 'Full Name', name: 'name', type: 'text' },
              { label: 'Work Email', name: 'email', type: 'email' },
              { label: 'Phone Number', name: 'phone', type: 'tel' },
              { label: 'Organisation', name: 'org', type: 'text' },
              { label: 'Role', name: 'role', type: 'text' },
            ].map((field) => (
              <input
                key={field.name}
                type={field.type}
                placeholder={field.label}
                className="text-black"
                required
              />
            ))}
            <select className="text-black" required>
              <option value="">Select Audience Type</option>
              <option>Retailer</option>
              <option>DRS Operator</option>
              <option>Housing Cooperative</option>
              <option>Educational Institution</option>
              <option>Municipality</option>
            </select>
            <input type="number" placeholder="Number of Locations" className="text-black" />
            <input type="text" placeholder="Project Timeline" className="text-black" />
            <textarea placeholder="Message" rows={4} className="text-black"></textarea>
            <button type="submit" className="btn-primary w-full">
              Choose a Meeting Time
            </button>
          </form>
          <p className="text-white/60 text-sm text-center">
            Practical discussion. Clear next steps.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
