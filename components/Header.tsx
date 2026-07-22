'use client';

import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Logo from './Logo';

const navItems = [
  { label: 'forRetailers', id: 'retailers' },
  { label: 'forDrsOperators', id: 'drs-operators' },
  { label: 'forHousingCooperatives', id: 'housing-cooperatives' },
  { label: 'forEducationalInstitutions', id: 'educational-institutions' },
  { label: 'forMunicipalities', id: 'municipalities' },
];

const aboutItems = [
  { label: 'solutions', id: 'solutions' },
  { label: 'rvms', id: 'rvms' },
  { label: 'technology', id: 'technology' },
  { label: 'moreAboutUs', id: 'about' },
];

const otherItems = [
  { label: 'faq', id: 'faq' },
];

export default function Header() {
  const { t, i18n } = useTranslation();
  const [activeSection, setActiveSection] = useState('');
  const [showAboutMenu, setShowAboutMenu] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['retailers', 'drs-operators', 'housing-cooperatives', 'educational-institutions', 'municipalities', 'solutions', 'rvms', 'technology', 'about', 'faq'];

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
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <a href="#" className="flex-shrink-0">
            <Logo />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex flex-1 mx-8 space-x-6">
            {/* Audience links */}
            <div className="flex space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === item.id ? 'text-primary border-b-2 border-primary' : 'text-gray-600 hover:text-primary'
                  }`}
                >
                  {t(`header.${item.label}`)}
                </button>
              ))}
            </div>

            {/* About dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setShowAboutMenu(true)}
                onMouseLeave={() => setShowAboutMenu(false)}
                className="text-sm font-medium text-gray-600 hover:text-primary transition-colors flex items-center"
              >
                {t('header.about')} ▾
              </button>
              {showAboutMenu && (
                <div
                  onMouseEnter={() => setShowAboutMenu(true)}
                  onMouseLeave={() => setShowAboutMenu(false)}
                  className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg"
                >
                  {aboutItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
                    >
                      {t(`header.${item.label}`)}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* FAQ */}
            {otherItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-sm font-medium transition-colors ${
                  activeSection === item.id ? 'text-primary border-b-2 border-primary' : 'text-gray-600 hover:text-primary'
                }`}
              >
                {t(`header.${item.label}`)}
              </button>
            ))}
          </nav>

          {/* Right side controls */}
          <div className="flex items-center space-x-4">
            {/* Language switcher */}
            <button
              onClick={toggleLanguage}
              className="text-sm font-semibold px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {i18n.language === 'pl' ? 'EN' : 'PL'}
            </button>

            {/* Book Meeting button */}
            <button
              onClick={handleBookMeeting}
              className="hidden md:block btn-primary text-sm"
            >
              {t('header.bookMeeting')}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-2 pt-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="text-left px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg"
                >
                  {t(`header.${item.label}`)}
                </button>
              ))}
              {aboutItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="text-left px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg"
                >
                  {t(`header.${item.label}`)}
                </button>
              ))}
              {otherItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="text-left px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg"
                >
                  {t(`header.${item.label}`)}
                </button>
              ))}
            </nav>
            <button
              onClick={handleBookMeeting}
              className="mt-4 w-full mx-4 btn-primary text-sm"
            >
              {t('header.bookMeeting')}
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
