import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Retearn - Connected Return Infrastructure for Poland',
  description: 'Intelligent reverse vending machines and operational technology for retailers, DRS operators, housing cooperatives, educational institutions and municipalities.',
  openGraph: {
    title: 'Retearn - Connected Return Infrastructure for Poland',
    description: 'Intelligent reverse vending machines and operational technology for Poland',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl" translate="no" className="notranslate" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="google" content="notranslate" />

        {/* Favicon: black icon for light browser chrome, white icon for dark */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png" media="(prefers-color-scheme: light)" />
        <link rel="icon" type="image/png" sizes="192x192" href="/favicon-192.png" media="(prefers-color-scheme: light)" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-dark-32.png" media="(prefers-color-scheme: dark)" />
        <link rel="icon" type="image/png" sizes="192x192" href="/favicon-dark-192.png" media="(prefers-color-scheme: dark)" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className="bg-white text-primary">
        {children}
      </body>
    </html>
  );
}
