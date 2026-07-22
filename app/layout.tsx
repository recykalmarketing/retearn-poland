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
    <html lang="pl" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='75' font-size='75' fill='%23231f20'>R</text></svg>" />
      </head>
      <body className="bg-white text-primary">
        {children}
      </body>
    </html>
  );
}
