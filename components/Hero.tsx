'use client';

import { useTranslation } from 'react-i18next';

export default function Hero() {
  const { t } = useTranslation();

  const handleFindSolution = () => {
    const element = document.getElementById('audience-selector');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookMeeting = () => {
    const element = document.getElementById('book-meeting');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full h-[600px] md:h-[700px] bg-gradient-to-br from-primary via-gray-900 to-primary flex items-center justify-center overflow-hidden">
      {/* Placeholder video background */}
      <div className="absolute inset-0 opacity-20 flex items-center justify-center bg-black/30">
        <video
          autoPlay
          muted
          loop
          className="w-full h-full object-cover opacity-40"
          poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 600'%3E%3Crect fill='%23231f20' width='1200' height='600'/%3E%3Ctext x='50%' y='50%' font-size='48' fill='%23fff' text-anchor='middle' dominant-baseline='middle'%3EHero Video Placeholder%3C/text%3E%3C/svg%3E"
        >
          <source src="/placeholder-hero-video.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        {/* Eyebrow */}
        <div className="text-sm md:text-base font-semibold tracking-wider uppercase mb-6 text-gray-300">
          {t('hero.eyebrow')}
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
          {t('hero.headline')}
        </h1>

        {/* Supporting text */}
        <p className="text-lg md:text-xl text-gray-200 mb-4 max-w-3xl mx-auto">
          {t('hero.supporting')}
        </p>

        <p className="text-base md:text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
          {t('hero.description')}
        </p>

        {/* Trust line */}
        <div className="mb-12 pb-8 border-b border-white/20">
          <p className="text-sm text-gray-300 mb-4">{t('hero.trustLine')}</p>
          <div className="flex flex-wrap justify-center gap-6">
            {[t('hero.trustPoints.0'), t('hero.trustPoints.1'), t('hero.trustPoints.2')].map((point, i) => (
              <div key={i} className="flex items-center">
                <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                <span className="text-sm text-gray-200">{point}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={handleBookMeeting}
            className="px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200"
          >
            {t('hero.primaryCta')}
          </button>
          <button
            onClick={handleFindSolution}
            className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary transition-all duration-200"
          >
            {t('hero.secondaryCta')}
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <svg
          className="w-6 h-6 text-white/50 animate-bounce"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
