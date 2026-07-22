'use client';

import { useTranslation } from 'react-i18next';

export default function Hero() {
  const { t, i18n } = useTranslation();

  const isPolish = i18n.language === 'pl';
  const headline = isPolish ? 'WŁĄCZ ZWROT W CAŁEJ POLSCE.' : 'TURN ON RETURN ACROSS POLAND.';
  const subheading = isPolish
    ? 'Niezawodna infrastruktura automatów kaucyjnych dla rozwijającego się systemu kaucyjnego w Polsce.'
    : 'Reliable reverse vending infrastructure built for Poland\'s growing deposit-return network.';

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster="/videos/hero-poster.jpg"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Text Content - Overlay */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center text-white">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
          {headline}
        </h1>
        <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed mb-12">
          {subheading}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 bg-white text-primary font-medium rounded-lg hover:bg-gray-100 transition-all">
            Book a Meeting
          </button>
          <button className="px-8 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-primary transition-all">
            Explore Solutions
          </button>
        </div>
      </div>
    </section>
  );
}
