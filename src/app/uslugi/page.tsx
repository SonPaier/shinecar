import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { services } from '@/data/services';
import { ArrowRight } from 'lucide-react';
import Breadcrumbs from '@/components/seo/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Usługi Detailingu Samochodowego',
  description:
    'Sprawdź pełną ofertę ShineCar: folie PPF, korekta lakieru, powłoki ceramiczne, detailing wnętrza, folie kolorowe i mycie detailingowe. Łuków i okolice.',
  alternates: {
    canonical: '/uslugi',
  },
  openGraph: {
    url: 'https://shinecar.pl/uslugi',
    title: 'Usługi Detailingu Samochodowego — ShineCar Łuków',
    description:
      'Sprawdź pełną ofertę ShineCar: folie PPF, korekta lakieru, powłoki ceramiczne, detailing wnętrza, folie kolorowe i mycie detailingowe.',
    type: 'website',
    locale: 'pl_PL',
    images: [{
      url: 'https://cdn.builder.io/api/v1/image/assets%2F75ea2179cd6f4e158ae5465605ccca73%2F9eebaa4a7f7d4db3a5b81f4f46b76ff6?format=webp&width=1200',
      width: 1200,
      height: 630,
      alt: 'Usługi Detailingu ShineCar Łuków',
    }],
  },
};

const itemListJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Usługi detailingu samochodowego ShineCar',
  url: 'https://shinecar.pl/uslugi',
  numberOfItems: services.length,
  itemListElement: services.map((s, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: s.title,
    url: `https://shinecar.pl/uslugi/${s.slug}`,
  })),
};

export default function UslugiPage() {
  return (
    <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }} />
    <section className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-6">
            <Breadcrumbs
              items={[
                { name: 'Strona główna', href: '/' },
                { name: 'Usługi' },
              ]}
            />
          </div>

          <div className="text-center space-y-6 mb-12">
            <div className="h-1 w-16 bg-primary rounded-full mx-auto" />
            <h1 className="font-luxury text-4xl lg:text-5xl text-foreground">
              Usługi Detailingu Samochodowego — Łuków
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Oferujemy pełen zakres usług detailingu samochodowego. Każdą usługę wykonujemy z najwyższą precyzją, używając profesjonalnych produktów i narzędzi.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/uslugi/${service.slug}`}
                className="group border border-border rounded-2xl overflow-hidden bg-gradient-glass backdrop-blur-sm hover:border-primary/50 transition-colors"
              >
                <div className="h-48 overflow-hidden relative">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-5 space-y-3">
                  <h2 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h2>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {service.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-primary font-medium">{service.price.split('|')[0].trim()}</span>
                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
