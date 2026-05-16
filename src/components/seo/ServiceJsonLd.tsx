import type { ServiceData } from '@/data/services';

interface ServiceJsonLdProps {
  service: ServiceData;
}

export default function ServiceJsonLd({ service }: ServiceJsonLdProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.description,
    provider: { '@id': 'https://shinecar.pl/#org' },
    areaServed: [
      { '@type': 'City', name: 'Łuków', addressCountry: 'PL' },
      { '@type': 'City', name: 'Siedlce', addressCountry: 'PL' },
      { '@type': 'City', name: 'Międzyrzec Podlaski', addressCountry: 'PL' },
      { '@type': 'City', name: 'Radzyń Podlaski', addressCountry: 'PL' },
      { '@type': 'City', name: 'Biała Podlaska', addressCountry: 'PL' },
      { '@type': 'City', name: 'Garwolin', addressCountry: 'PL' },
      { '@type': 'City', name: 'Ryki', addressCountry: 'PL' },
      { '@type': 'City', name: 'Lubartów', addressCountry: 'PL' },
    ],
    url: `https://shinecar.pl/${service.urlSlug}`,
    image: service.image,
    offers: {
      '@type': 'Offer',
      priceCurrency: 'PLN',
      price: service.price,
      availability: 'https://schema.org/InStock',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
