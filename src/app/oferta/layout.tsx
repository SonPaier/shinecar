import type { Metadata } from 'next';
import { services } from '@/data/services';

export const metadata: Metadata = {
  title: 'Oferta Usług Detailingu — ShineCar Łuków',
  description:
    'Poznaj pełną ofertę usług ShineCar: folie ochronne PPF, korekta lakieru, powłoki ceramiczne, detailing wnętrz i mycie detailingowe. Dowiedz się, co obejmuje każda usługa.',
  alternates: { canonical: '/oferta' },
  openGraph: {
    url: 'https://shinecar.pl/oferta',
    title: 'Oferta Usług Detailingu — ShineCar Łuków',
    description:
      'Poznaj pełną ofertę usług ShineCar: folie ochronne PPF, korekta lakieru, powłoki ceramiczne, detailing wnętrz i mycie detailingowe.',
    type: 'website',
    locale: 'pl_PL',
    images: [{
      url: 'https://cdn.builder.io/api/v1/image/assets%2F75ea2179cd6f4e158ae5465605ccca73%2F9eebaa4a7f7d4db3a5b81f4f46b76ff6?format=webp&width=1200',
      width: 1200,
      height: 630,
      alt: 'Oferta Usług ShineCar — Detailing Łuków',
    }],
  },
};

const itemListJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Oferta usług detailingu ShineCar',
  url: 'https://shinecar.pl/oferta',
  numberOfItems: services.length,
  itemListElement: services.map((s, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: s.title,
    url: `https://shinecar.pl/uslugi/${s.slug}`,
  })),
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Strona główna', item: 'https://shinecar.pl' },
    { '@type': 'ListItem', position: 2, name: 'Oferta' },
  ],
};

export default function OfertaLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      {children}
    </>
  );
}
