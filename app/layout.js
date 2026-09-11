import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/sonner';
import { site } from '@/lib/site-config';

const serif = Playfair_Display({ subsets: ['latin'], variable: '--font-serif', display: 'swap' });
const sans = Inter({ subsets: ['latin'], variable: '--font-sans', display: 'swap' });

export const metadata = {
  title: 'Rawat Caterers & Decorators | Catering, Decoration & Events',
  description: site.description,
  keywords: ['caterers', 'wedding catering', 'wedding decorators', 'event decoration', 'birthday catering', 'party decorators', 'Rawat Caterers'],
  openGraph: {
    title: 'Rawat Caterers & Decorators',
    description: site.description,
    type: 'website',
    images: [site.images.hero],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rawat Caterers & Decorators',
    description: site.description,
  },
  icons: { icon: '/favicon.ico' },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: site.businessName,
    description: site.description,
    telephone: site.phoneDisplay,
    email: site.email,
    address: { '@type': 'PostalAddress', streetAddress: site.address },
    image: site.images.hero,
  };
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>
        {children}
        <Toaster position="top-center" richColors />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
