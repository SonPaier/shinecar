import React from 'react';

const SeoJsonLd: React.FC = () => {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'AutomotiveBusiness',
    name: 'ShineCar',
    url: 'https://shinecar.pl/',
    description:
      'Detailing klasy premium – folie PPF, korekta lakieru, powłoki, detailing wnętrz. Łuków i okolice.',
    areaServed: {
      '@type': 'City',
      name: 'Łuków',
      addressCountry: 'PL',
    },
    telephone: '+48 782 195 321',
    email: 'shinecarkosmetyka@o2.pl',
    image: 'https://cdn.builder.io/api/v1/image/assets%2F75ea2179cd6f4e158ae5465605ccca73%2F9eebaa4a7f7d4db3a5b81f4f46b76ff6?format=webp&width=1200',
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

  const servicesSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'ShineCar',
    image: 'https://cdn.builder.io/api/v1/image/assets%2F75ea2179cd6f4e158ae5465605ccca73%2F9eebaa4a7f7d4db3a5b81f4f46b76ff6?format=webp&width=1200',
    description: 'Profesjonalny detailing samochodowy i ochrona lakieru',
    url: 'https://shinecar.pl/',
    telephone: '+48 782 195 321',
    priceRange: 'PLN 800 - 16000',
    areaServed: 'Łuków, Polska',
    servesCuisine: [],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
    </>
  );
};

export default SeoJsonLd;
