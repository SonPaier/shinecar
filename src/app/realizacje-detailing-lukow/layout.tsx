import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Realizacje Detailingu Łuków — Folie PPF, Korekta Lakieru, Ceramika',
  description: 'Zobacz nasze realizacje detailingu samochodowego w Łukowie: folie PPF, korekta lakieru, powłoki ceramiczne. Zdjęcia przed i po — ShineCar Łuków.',
  alternates: { canonical: '/realizacje-detailing-lukow' },
  openGraph: {
    url: 'https://shinecar.pl/realizacje-detailing-lukow',
    title: 'Realizacje Detailingu Łuków — Folie PPF, Korekta Lakieru, Ceramika',
    description: 'Zobacz nasze realizacje detailingu samochodowego w Łukowie: folie PPF, korekta lakieru, powłoki ceramiczne. Zdjęcia przed i po.',
    type: 'website',
    locale: 'pl_PL',
    images: [{
      url: 'https://cdn.builder.io/api/v1/image/assets%2F75ea2179cd6f4e158ae5465605ccca73%2F9eebaa4a7f7d4db3a5b81f4f46b76ff6?format=webp&width=1200',
      width: 1200,
      height: 630,
      alt: 'Realizacje Detailingu ShineCar — Łuków',
    }],
  },
};

const galeriaJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ImageGallery',
  name: 'Realizacje Detailingu ShineCar — Łuków',
  url: 'https://shinecar.pl/realizacje-detailing-lukow',
  description: 'Galeria realizacji detailingu samochodowego: folie PPF, korekta lakieru, powłoki ceramiczne. ShineCar Łuków.',
};

export default function GaleriaLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(galeriaJsonLd) }} />
      {children}
    </>
  );
}
