'use client';

import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import Logo from './Logo';

const primaryNavItems = [
  { label: 'rvms', id: 'rvms' },
];

const audienceItems = [
  { label: 'forRetailers', id: 'retailers' },
  { label: 'forDrsOperators', id: 'drs-operators' },
  { label: 'forHousingCooperatives', id: 'housing-cooperatives' },
  { label: 'forEducationalInstitutions', id: 'educational-institutions' },
  { label: 'forMunicipalities', id: 'municipalities' },
];

const trailingNavItems = [
  { label: 'technology', id: 'technology' },
  { label: 'faq', id: 'faq' },
];

const allNavIds = [...primaryNavItems, ...audienceItems, ...trailingNavItems].map((item) => item.id);
const audienceIds = audienceItems.map((item) => item.id);

export default function Header() {
  const { t, i18n } = useTranslation();
  const [activeSection, setActiveSection] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showAudienceMenu, setShowAudienceMenu] = useState(false);
  const audienceMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!showAudienceMenu) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (audienceMenuRef.current && !audienceMenuRef.current.contains(e.target as Node)) {
        setShowAudienceMenu(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showAudienceMenu]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      for (const id of allNavIds) {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'pl' ? 'en' : 'pl';
    i18n.changeLanguage(newLang);
  };

  const handleNavClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
    setShowAudienceMenu(false);
  };

  const handleBookMeeting = () => {
    const element = document.getElementById('book-meeting');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinkClass = (id: string) =>
    `text-[11px] font-semibold uppercase tracking-wide whitespace-nowrap transition-colors ${
      activeSection === id
        ? isScrolled ? 'text-primary' : 'text-white'
        : isScrolled ? 'text-gray-600 hover:text-primary' : 'text-white/85 hover:text-white'
    }`;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-[1fr_auto_1fr] items-center h-16 gap-6">
          <a href="#" className="flex-shrink-0 flex items-center justify-self-start">
            <Logo className={`h-6 w-auto transition-colors ${isScrolled ? 'text-black' : 'text-white'}`} />
          </a>

          <nav className="hidden lg:flex items-center gap-5 justify-self-center">
            {primaryNavItems.map((item) => (
              <button key={item.id} onClick={() => handleNavClick(item.id)} className={navLinkClass(item.id)}>
                {t(`header.${item.label}`)}
              </button>
            ))}

            <div
              className="relative"
              ref={audienceMenuRef}
            >
              <button
                onClick={() => setShowAudienceMenu((prev) => !prev)}
                className={navLinkClass(audienceIds.includes(activeSection) ? activeSection : '')}
              >
                {t('header.forSegments')} ▾
              </button>
              {showAudienceMenu && (
                <div className="absolute top-full left-0 pt-3 w-64">
                  <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2">
                    {audienceItems.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => handleNavClick(item.id)}
                        className="block w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-primary/5 hover:text-primary transition-colors"
                      >
                        {t(`header.${item.label}`)}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {trailingNavItems.map((item) => (
              <button key={item.id} onClick={() => handleNavClick(item.id)} className={navLinkClass(item.id)}>
                {t(`header.${item.label}`)}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3 flex-shrink-0 justify-self-end">
            <button
              onClick={toggleLanguage}
              className={`text-xs font-semibold px-2 py-1 transition-colors ${
                isScrolled ? 'text-gray-600 hover:text-primary' : 'text-white/85 hover:text-white'
              }`}
            >
              {i18n.language === 'pl' ? 'EN' : 'PL'}
            </button>

            <button
              onClick={handleBookMeeting}
              className="hidden md:block px-5 py-2 bg-primary text-white font-semibold rounded-full hover:bg-primary-dark transition-all text-xs whitespace-nowrap"
            >
              {t('header.bookMeeting')}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 transition-colors"
            >
              <svg className={`w-6 h-6 ${isScrolled ? 'text-gray-600' : 'text-white'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className={`lg:hidden pb-4 ${isScrolled ? 'bg-white' : 'bg-primary-dark/95 backdrop-blur-md rounded-b-2xl'}`}>
            <nav className="flex flex-col space-y-1 pt-4">
              {[...primaryNavItems, ...audienceItems, ...trailingNavItems].map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left px-4 py-2 text-sm transition-colors ${
                    isScrolled ? 'text-gray-600 hover:text-primary' : 'text-white/90 hover:text-white'
                  }`}
                >
                  {t(`header.${item.label}`)}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
