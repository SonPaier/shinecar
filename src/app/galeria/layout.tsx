import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Galeria Realizacji — Detailing Samochodowy Łuków',
  description: 'Zobacz nasze realizacje: folie PPF, korekta lakieru, powłoki ceramiczne. Galeria zdjęć detailingu samochodowego w Łukowie.',
  alternates: { canonical: '/galeria' },
  openGraph: {
    url: 'https://shinecar.pl/galeria',
    title: 'Galeria Realizacji — Detailing Samochodowy Łuków',
    description: 'Zobacz nasze realizacje: folie PPF, korekta lakieru, powłoki ceramiczne. Galeria zdjęć detailingu samochodowego w Łukowie.',
    type: 'website',
    locale: 'pl_PL',
    images: [{
      url: 'https://cdn.builder.io/api/v1/image/assets%2F75ea2179cd6f4e158ae5465605ccca73%2F9eebaa4a7f7d4db3a5b81f4f46b76ff6?format=webp&width=1200',
      width: 1200,
      height: 630,
      alt: 'Galeria Realizacji ShineCar — Detailing Łuków',
    }],
  },
};

const galeriaJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ImageGallery',
  name: 'Galeria Realizacji ShineCar — Detailing Łuków',
  url: 'https://shinecar.pl/galeria',
  description: 'Galeria zdjęć realizacji detailingu samochodowego: folie PPF, korekta lakieru, powłoki ceramiczne. ShineCar Łuków.',
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Strona główna', item: 'https://shinecar.pl' },
    { '@type': 'ListItem', position: 2, name: 'Galeria' },
  ],
};

export default function GaleriaLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(galeriaJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      {children}
    </>
  );
}
