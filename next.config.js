/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  i18n: {
    locales: ['en', 'pl'],
    defaultLocale: 'pl',
    localeDetection: false,
  },
};

module.exports = nextConfig;
