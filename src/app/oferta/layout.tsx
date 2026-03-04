import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Oferta',
  description:
    'Oferta usług: folie ochronne PPF, korekta lakieru, powłoki ceramiczne i elastomerowe, detailing wnętrz. Łuków i okolice.',
  alternates: { canonical: '/oferta' },
  openGraph: {
    url: 'https://shinecar.pl/oferta',
    title: 'Oferta',
    description:
      'Oferta usług: folie ochronne PPF, korekta lakieru, powłoki ceramiczne i elastomerowe, detailing wnętrz. Łuków i okolice.',
    type: 'website',
    locale: 'pl_PL',
  },
};

export default function OfertaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
