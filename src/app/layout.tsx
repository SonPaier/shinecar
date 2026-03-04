import type { Metadata, Viewport } from 'next';
import Providers from './providers';
import '../index.css';
import SeoJsonLd from '@/components/SeoJsonLd';

const baseMetadata: Metadata = {
  metadataBase: new URL('https://shinecar.pl'),
  applicationName: 'ShineCar',
  title: {
    default: 'Folie PPF Łuków - Detailing Samochodowy Łuków',
    template: '%s | ShineCar',
  },
  description:
    'Detailing premium w Łukowie: folie PPF, korekta lakieru, powłoki i detailing wnętrz.',
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
    languages: {
      'pl-PL': '/',
    },
  },
  openGraph: {
    url: 'https://shinecar.pl',
    siteName: 'ShineCar',
    title: 'Folie PPF Łuków - Detailing Samochodowy Łuków',
    description:
      'Detailing premium w Łukowie: folie PPF, korekta lakieru, powłoki i detailing wnętrz.',
    locale: 'pl_PL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Folie PPF Łuków - Detailing Samochodowy Łuków',
    description:
      'Detailing premium w Łukowie: folie PPF, korekta lakieru, powłoki i detailing wnętrz.',
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
    <html lang="pl">
      <body>
        <SeoJsonLd />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
