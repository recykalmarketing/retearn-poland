'use client';

import { useTranslation } from 'react-i18next';
import Logo from './Logo';

export default function Footer() {
  const { t } = useTranslation();

  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-primary text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-4 flex">
              <Logo />
            </div>
            <p className="text-sm text-gray-300">
              Connected return infrastructure for Poland.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">{t('header.about')}</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#solutions" className="hover:text-white transition-colors">
                  {t('header.solutions')}
                </a>
              </li>
              <li>
                <a href="#rvms" className="hover:text-white transition-colors">
                  {t('header.rvms')}
                </a>
              </li>
              <li>
                <a href="#technology" className="hover:text-white transition-colors">
                  {t('header.technology')}
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  {t('header.moreAboutUs')}
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  {t('header.faq')}
                </a>
              </li>
              <li>
                <a href="#book-meeting" className="hover:text-white transition-colors">
                  {t('header.bookMeeting')}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  {t('footer.contact')}
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  {t('footer.privacy')}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  {t('footer.terms')}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <p className="text-sm text-gray-400 text-center">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}
