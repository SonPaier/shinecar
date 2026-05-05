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
    provider: {
      '@type': 'AutomotiveBusiness',
      name: 'ShineCar',
      url: 'https://shinecar.pl',
      telephone: '+48 782 195 321',
      priceRange: '$$',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Świderki 155',
        addressLocality: 'Świderki',
        addressRegion: 'lubelskie',
        postalCode: '21-411',
        addressCountry: 'PL',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 51.8451033,
        longitude: 22.3348136,
      },
      hasMap: 'https://www.google.com/maps?q=51.8451033,22.3348136',
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '08:00',
          closes: '18:00',
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: 'Saturday',
          opens: '09:00',
          closes: '16:00',
        },
      ],
    },
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
