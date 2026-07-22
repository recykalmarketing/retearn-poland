'use client';

import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Logo from './Logo';

const navItems = [
  { label: 'rvms', id: 'rvms' },
  { label: 'forRetailers', id: 'retailers' },
  { label: 'forDrsOperators', id: 'drs-operators' },
  { label: 'forHousingCooperatives', id: 'housing-cooperatives' },
  { label: 'forEducationalInstitutions', id: 'educational-institutions' },
  { label: 'forMunicipalities', id: 'municipalities' },
  { label: 'technology', id: 'technology' },
  { label: 'faq', id: 'faq' },
];

export default function Header() {
  const { t, i18n } = useTranslation();
  const [activeSection, setActiveSection] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sections = navItems.map(item => item.id);

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
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
  };

  const handleBookMeeting = () => {
    const element = document.getElementById('book-meeting');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-sm' : 'bg-black/40'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <a href="#" className="flex-shrink-0 flex items-center">
            <div className={`font-bold text-2xl font-poppins ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
              retearn.pl
            </div>
          </a>

          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-sm font-bold transition-colors ${
                  activeSection === item.id
                    ? isScrolled ? 'text-primary' : 'text-white'
                    : isScrolled ? 'text-gray-700 hover:text-primary' : 'text-white hover:text-white'
                }`}
              >
                {t(`header.${item.label}`)}
              </button>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className={`text-sm font-semibold px-3 py-1 transition-colors ${
                isScrolled ? 'text-gray-600 hover:text-primary' : 'text-white/80 hover:text-white'
              }`}
            >
              {i18n.language === 'pl' ? 'EN' : 'PL'}
            </button>

            <button
              onClick={handleBookMeeting}
              className="hidden md:block px-6 py-2 bg-white text-primary font-medium rounded-full hover:bg-gray-100 transition-all text-sm"
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
          <div className={`lg:hidden pb-4 ${isScrolled ? 'bg-white' : 'bg-black/80'}`}>
            <nav className="flex flex-col space-y-2 pt-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left px-4 py-2 text-sm transition-colors ${
                    isScrolled ? 'text-gray-600 hover:text-primary' : 'text-white/80 hover:text-white'
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
