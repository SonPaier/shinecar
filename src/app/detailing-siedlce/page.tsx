import type { Metadata } from 'next';
import { getCityBySlug } from '@/data/cities';
import CityPageContent from '@/components/CityPageContent';

const city = getCityBySlug('detailing-siedlce')!;

export const metadata: Metadata = {
  title: city.metaTitle,
  description: city.metaDescription,
  keywords: city.keywords,
  alternates: { canonical: `/${city.slug}` },
  openGraph: {
    title: city.metaTitle,
    description: city.metaDescription,
    url: `https://shinecar.pl/${city.slug}`,
    type: 'website',
    locale: 'pl_PL',
    images: [{
      url: 'https://cdn.builder.io/api/v1/image/assets%2F75ea2179cd6f4e158ae5465605ccca73%2F9eebaa4a7f7d4db3a5b81f4f46b76ff6?format=webp&width=1200',
      width: 1200,
      height: 630,
      alt: `ShineCar — Detailing ${city.name}`,
    }],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AutomotiveBusiness',
  name: `ShineCar — Detailing Samochodowy ${city.name}`,
  url: `https://shinecar.pl/${city.slug}`,
  description: city.metaDescription,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Świderki 155',
    addressLocality: 'Świderki',
    postalCode: '21-411',
    addressRegion: 'lubelskie',
    addressCountry: 'PL',
  },
  areaServed: { '@type': 'City', name: city.name, addressCountry: 'PL' },
  telephone: '+48 782 195 321',
  email: 'shinecarkosmetyka@o2.pl',
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CityPageContent city={city} />
    </>
  );
}
