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
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const TwoColumnSection = ({ id, eyebrow, title, description, highlights, cta, imageText, isImageRight = false }: any) => (
    <section id={id} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text */}
          <div className={isImageRight ? '' : 'order-2 lg:order-1'}>
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">{eyebrow}</span>
            <h2 className="mt-4 text-4xl font-bold text-gray-900 leading-tight">{title}</h2>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">{description}</p>
            <ul className="mt-8 space-y-4">
              {highlights.map((item: string, i: number) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="text-primary text-2xl font-light mt-1">→</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <button onClick={() => handleScroll('book-meeting')} className="mt-10 px-8 py-3 bg-gray-900 text-white font-medium rounded-full hover:bg-gray-800 transition-all">
              {t(cta) || cta}
            </button>
          </div>

          {/* Right Column - Image */}
          <div className={isImageRight ? 'order-1 lg:order-2' : ''}>
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 h-96 rounded-2xl flex items-center justify-center shadow-lg">
              <span className="text-gray-400 font-medium">{imageText}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <main className="w-full">
      <HeroFrames frameCount={463} fps={30} />

      {/* RVMs Section */}
      <section id="rvms" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">OUR SOLUTIONS</span>
            <h2 className="mt-4 text-4xl font-bold text-gray-900">Choose your RVM.</h2>
            <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">From compact footprints to high-capacity solutions, we have the right machine for your location.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {[
              {
                name: 'Reklaim Ace',
                subtitle: 'Compact Efficiency',
                desc: 'Perfect for smaller retail spaces and starting locations.',
                specs: ['200-300 returns per day', 'Compact 2.2m footprint', 'Remote monitoring', 'Fill-level alerts'],
              },
              {
                name: 'Reklaim Bulk',
                subtitle: 'Maximum Capacity',
                desc: 'Engineered for high-volume return centers and network hubs.',
                specs: ['1000+ returns per day', 'Large storage capacity', 'Fewer collection runs', 'Advanced analytics'],
              },
            ].map((product) => (
              <div key={product.name} className="border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-shadow">
                <div className="bg-gray-100 h-56 rounded-xl mb-8 flex items-center justify-center">
                  <span className="text-gray-400 text-lg">{product.name} Visual</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{product.name}</h3>
                <p className="text-primary font-semibold mt-2">{product.subtitle}</p>
                <p className="text-gray-600 mt-4">{product.desc}</p>
                <ul className="mt-6 space-y-3">
                  {product.specs.map((spec) => (
                    <li key={spec} className="flex items-center gap-3 text-gray-700">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      {spec}
                    </li>
                  ))}
                </ul>
                <button onClick={() => handleScroll('book-meeting')} className="mt-8 w-full py-3 border-2 border-gray-900 text-gray-900 font-medium rounded-full hover:bg-gray-900 hover:text-white transition-all">
                  Learn More
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
            <h2 className="text-4xl font-bold text-gray-900">Built for every location type.</h2>
            <p className="mt-4 text-lg text-gray-600">Tailored solutions for your unique return infrastructure needs.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {[
              { title: 'Retailers', desc: 'Drive store foot traffic', icon: '🏬', id: 'retailers' },
              { title: 'DRS Operators', desc: 'Scale your network', icon: '📊', id: 'drs-operators' },
              { title: 'Housing', desc: 'Community convenience', icon: '🏘️', id: 'housing-cooperatives' },
              { title: 'Education', desc: 'Campus sustainability', icon: '🎓', id: 'educational-institutions' },
              { title: 'Municipalities', desc: 'Public accessibility', icon: '🏛️', id: 'municipalities' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => handleScroll(item.id)}
                className="p-6 bg-white rounded-2xl text-center hover:shadow-lg hover:-translate-y-2 transition-all group"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-gray-900 group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{item.desc}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Retailers Section */}
      <TwoColumnSection
        id="retailers"
        eyebrow="FOR RETAILERS"
        title="Simplify returns. Drive loyalty."
        description="Transform your returns experience with compact, connected machines designed to fit seamlessly into any retail environment."
        highlights={[
          'Boost customer satisfaction with frictionless returns',
          'Reduce staff time spent processing returns',
          'Gain real-time visibility into return patterns',
          'Increase customer dwell time and basket size'
        ]}
        cta="Plan a Retail Pilot"
        imageText="Retail Environment"
      />

      {/* DRS Operators Section */}
      <TwoColumnSection
        id="drs-operators"
        eyebrow="FOR DRS OPERATORS"
        title="Scale with confidence."
        description="Manage entire networks from a single dashboard. Monitor machines, returns, and capacity across all your locations in real time."
        highlights={[
          'Unified control across multiple locations',
          'Predictive maintenance and fill-level alerts',
          'Custom reporting and analytics',
          'Automated collection route optimization'
        ]}
        cta="Discuss Your Scale"
        imageText="Network Dashboard"
        isImageRight={true}
      />

      {/* Housing Section */}
      <TwoColumnSection
        id="housing-cooperatives"
        eyebrow="FOR HOUSING COOPERATIVES"
        title="Convenience at your doorstep."
        description="Bring sustainable returns directly into residential communities. A shared resource that residents appreciate and neighbors value."
        highlights={[
          'Compact design for courtyards and common areas',
          'Reduces packaging waste in residential zones',
          'Increases community engagement with sustainability',
          'Low-maintenance, reliable operation 24/7'
        ]}
        cta="Plan a Housing Project"
        imageText="Residential Community"
      />

      {/* Educational Section */}
      <TwoColumnSection
        id="educational-institutions"
        eyebrow="FOR EDUCATIONAL INSTITUTIONS"
        title="Build sustainability culture."
        description="Make circular practices a daily habit for students and staff. Visible, engaging infrastructure that drives environmental awareness."
        highlights={[
          'Encourage student participation in sustainability',
          'Support institutional environmental commitments',
          'Generate measurable impact data for reporting',
          'Accessible returns across campus'
        ]}
        cta="Start a Campus Program"
        imageText="Campus Environment"
        isImageRight={true}
      />

      {/* Municipalities Section */}
      <TwoColumnSection
        id="municipalities"
        eyebrow="FOR MUNICIPALITIES"
        title="Public infrastructure done right."
        description="Provide accessible, reliable returns infrastructure in public spaces. Serving neighbors while reducing waste in communities."
        highlights={[
          'Accessible returns in high-traffic locations',
          'Weather-resistant outdoor-ready options',
          'Community engagement and participation',
          'Transparent operational reporting'
        ]}
        cta="Build a Municipal Network"
        imageText="Public Space"
      />

      {/* Technology Section */}
      <section id="technology" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">TECHNOLOGY</span>
            <h2 className="mt-4 text-4xl font-bold text-gray-900">Intelligent infrastructure.</h2>
            <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">Powered by AI and computer vision for fast, reliable material identification.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { title: 'Recognise', desc: 'AI-powered container identification in seconds', icon: '🤖' },
              { title: 'Track', desc: 'Real-time machine data and performance metrics', icon: '📡' },
              { title: 'Connect', desc: 'Flexible integration with existing systems', icon: '🔗' },
              { title: 'Optimize', desc: 'Data-driven insights for better operations', icon: '⚡' },
            ].map((tech) => (
              <div key={tech.title} className="bg-white p-8 rounded-2xl text-center">
                <div className="text-5xl mb-4">{tech.icon}</div>
                <h3 className="font-bold text-gray-900 text-lg">{tech.title}</h3>
                <p className="text-gray-600 text-sm mt-4">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Questions? We have answers.</h2>
          </div>

          <div className="space-y-6">
            {[
              { q: 'Which RVM is right for my location?', a: 'We assess your space, volume, and goals to recommend the perfect fit. Every location is unique.' },
              { q: 'How does the AI identification work?', a: 'Our computer vision system recognizes containers in real time. Fast, reliable, and constantly learning.' },
              { q: 'Can it integrate with my existing systems?', a: 'Yes. We support flexible integrations with your current infrastructure and data platforms.' },
              { q: 'What about outdoor installation?', a: 'Absolutely. Our machines are built for weather and tested in harsh conditions.' },
              { q: 'Do you offer pilots?', a: 'Yes. We believe in proof of concept. Start small, scale fast.' },
              { q: 'What comes next?', a: 'A conversation. We discuss your goals, timeline, and locations. Then we build a plan together.' },
            ].map((item, i) => (
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
      <section id="book-meeting" className="py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">{t('cta.heading') || 'Let us build your return solution.'}</h2>
            <p className="text-gray-300 text-lg">{t('cta.subheading') || 'A focused conversation about your locations, volumes, and vision.'}</p>
          </div>

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
                className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-gray-400 rounded-lg focus:outline-none focus:border-white/40 transition-colors"
                required
              />
            ))}
            <select className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white rounded-lg focus:outline-none focus:border-white/40 transition-colors">
              <option className="bg-gray-900" value="">Select Your Sector</option>
              <option className="bg-gray-900">Retailer</option>
              <option className="bg-gray-900">DRS Operator</option>
              <option className="bg-gray-900">Housing Cooperative</option>
              <option className="bg-gray-900">Educational Institution</option>
              <option className="bg-gray-900">Municipality</option>
            </select>
            <input type="number" placeholder="Number of Locations" className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-gray-400 rounded-lg focus:outline-none focus:border-white/40 transition-colors" />
            <input type="text" placeholder="Project Timeline" className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-gray-400 rounded-lg focus:outline-none focus:border-white/40 transition-colors" />
            <textarea placeholder="Tell us about your project" rows={4} className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-gray-400 rounded-lg focus:outline-none focus:border-white/40 transition-colors"></textarea>
            <button type="submit" className="w-full py-4 bg-white text-gray-900 font-semibold rounded-full hover:bg-gray-100 transition-all text-lg">
              {t('cta.submitButton') || 'Schedule a Conversation'}
            </button>
          </form>

          <p className="text-gray-400 text-center text-sm">{t('cta.responseTime') || 'We typically respond within 24 hours on weekdays.'}</p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
