import React from 'react';

const SeoJsonLd: React.FC = () => {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'AutomotiveBusiness',
    name: 'ShineCar',
    url: 'https://shinecar.pl/',
    description:
      'Detailing klasy premium – folie PPF, korekta lakieru, powłoki, detailing wnętrz. Łuków i okolice.',
    logo: 'https://cdn.builder.io/api/v1/image/assets%2F67e4bfba85e64e32b9e894d5c5c768b6%2F8c36ec01547b4487a8361fd75045be6e?format=webp&width=800',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Świderki 155',
      addressLocality: 'Świderki',
      postalCode: '21-411',
      addressRegion: 'lubelskie',
      addressCountry: 'PL',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 51.925,
      longitude: 22.38,
    },
    areaServed: [
      { '@type': 'City', name: 'Łuków', addressCountry: 'PL' },
      { '@type': 'City', name: 'Siedlce', addressCountry: 'PL' },
      { '@type': 'City', name: 'Radzyń Podlaski', addressCountry: 'PL' },
      { '@type': 'City', name: 'Międzyrzec Podlaski', addressCountry: 'PL' },
    ],
    telephone: '+48 782 195 321',
    email: 'shinecarkosmetyka@o2.pl',
    image:
      'https://cdn.builder.io/api/v1/image/assets%2F75ea2179cd6f4e158ae5465605ccca73%2F9eebaa4a7f7d4db3a5b81f4f46b76ff6?format=webp&width=1200',
    priceRange: 'PLN 150 - 16000',
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
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '3',
      bestRating: '5',
      worstRating: '1',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Usługi detailingu samochodowego',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Folie Ochronne PPF' },
          priceSpecification: {
            '@type': 'PriceSpecification',
            priceCurrency: 'PLN',
            minPrice: 5500,
            maxPrice: 16000,
          },
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Korekta Lakieru' },
          priceSpecification: {
            '@type': 'PriceSpecification',
            priceCurrency: 'PLN',
            minPrice: 800,
            maxPrice: 2500,
          },
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Powłoki Ceramiczne i Elastomerowe' },
          priceSpecification: {
            '@type': 'PriceSpecification',
            priceCurrency: 'PLN',
            minPrice: 1500,
            maxPrice: 3000,
          },
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Detailing Wnętrza' },
          priceSpecification: {
            '@type': 'PriceSpecification',
            priceCurrency: 'PLN',
            minPrice: 400,
          },
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Mycie Detailingowe' },
          priceSpecification: {
            '@type': 'PriceSpecification',
            priceCurrency: 'PLN',
            minPrice: 150,
          },
        },
      ],
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      telephone: '+48 782 195 321',
      email: 'shinecarkosmetyka@o2.pl',
      areaServed: 'PL',
      availableLanguage: 'pl',
    },
    sameAs: [
      'https://www.facebook.com/ShineCarKosmetyka',
      'https://www.instagram.com/shinecar_kosmetyka/',
    ],
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'ShineCar',
    url: 'https://shinecar.pl',
    description: 'Profesjonalny detailing samochodowy w Łukowie — folie PPF, korekta lakieru, powłoki ceramiczne.',
    publisher: {
      '@type': 'AutomotiveBusiness',
      name: 'ShineCar',
      url: 'https://shinecar.pl',
    },
    inLanguage: 'pl-PL',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
};

export default SeoJsonLd;
