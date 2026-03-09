import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import { Poppins } from 'next/font/google';
import Providers from './providers';
import '../index.css';
import SeoJsonLd from '@/components/SeoJsonLd';
import CookieConsent from '@/components/CookieConsent';

const poppins = Poppins({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-poppins',
});

const baseMetadata: Metadata = {
  metadataBase: new URL('https://shinecar.pl'),
  applicationName: 'ShineCar',
  title: {
    default: 'Folie PPF Łuków - Detailing Samochodowy Łuków',
    template: '%s | ShineCar',
  },
  description:
    'Profesjonalny detailing samochodowy w Łukowie. Folie PPF, korekta lakieru, powłoki ceramiczne, detailing wnętrz. Zadzwoń: 782 195 321 i umów wizytę!',
  manifest: '/site.webmanifest',
  keywords: [
    'detailing Łuków',
    'folie PPF Łuków',
    'korekta lakieru',
    'powłoki ceramiczne',
    'powłoki elastomerowe',
    'mycie premium',
    'studio detailingu',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    url: 'https://shinecar.pl',
    siteName: 'ShineCar',
    title: 'Folie PPF Łuków - Detailing Samochodowy Łuków',
    description:
      'Profesjonalny detailing samochodowy w Łukowie. Folie PPF, korekta lakieru, powłoki ceramiczne, detailing wnętrz. Zadzwoń: 782 195 321 i umów wizytę!',
    locale: 'pl_PL',
    type: 'website',
    images: [{
      url: 'https://cdn.builder.io/api/v1/image/assets%2F75ea2179cd6f4e158ae5465605ccca73%2F9eebaa4a7f7d4db3a5b81f4f46b76ff6?format=webp&width=1200',
      width: 1200,
      height: 630,
      alt: 'ShineCar — Detailing Samochodowy Łuków',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Folie PPF Łuków - Detailing Samochodowy Łuków',
    description:
      'Profesjonalny detailing samochodowy w Łukowie. Folie PPF, korekta lakieru, powłoki ceramiczne, detailing wnętrz. Zadzwoń: 782 195 321 i umów wizytę!',
    images: ['https://cdn.builder.io/api/v1/image/assets%2F75ea2179cd6f4e158ae5465605ccca73%2F9eebaa4a7f7d4db3a5b81f4f46b76ff6?format=webp&width=1200'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.png', sizes: '512x512', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    shortcut: [{ url: '/favicon.png', type: 'image/png' }],
    other: [{ rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#0b0b0b' }],
  },
};

export function generateMetadata(): Metadata {
  const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;
  return {
    ...baseMetadata,
    verification: googleVerification
      ? {
          google: googleVerification,
        }
      : undefined,
  } as Metadata;
}

export const viewport: Viewport = {
  themeColor: '#0b0b0b',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl" className={poppins.variable}>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-SEKRLB5DT4"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-SEKRLB5DT4');
          `}
        </Script>
      </head>
      <body>
        <SeoJsonLd />
        <Providers>{children}</Providers>
        <CookieConsent />
      </body>
    </html>
  );
}
