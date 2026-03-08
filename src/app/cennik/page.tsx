import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { services } from '@/data/services';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import { Phone, Mail, ArrowRight, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Cennik Detailingu Łuków — Folie PPF, Korekta, Powłoki',
  description:
    'Sprawdź cennik usług detailingu samochodowego ShineCar: folie PPF od 5 500 zł, korekta lakieru od 800 zł, powłoki ceramiczne od 1 500 zł. Łuków i okolice.',
  alternates: {
    canonical: '/cennik',
  },
  keywords: ['cennik detailing Łuków', 'ceny folie PPF', 'ile kosztuje korekta lakieru', 'cennik powłoki ceramiczne'],
  openGraph: {
    url: 'https://shinecar.pl/cennik',
    title: 'Cennik Detailingu Łuków — Folie PPF, Korekta, Powłoki',
    description:
      'Sprawdź cennik usług detailingu samochodowego ShineCar: folie PPF od 5 500 zł, korekta lakieru od 800 zł, powłoki ceramiczne od 1 500 zł.',
    type: 'website',
    locale: 'pl_PL',
    images: [{
      url: 'https://cdn.builder.io/api/v1/image/assets%2F75ea2179cd6f4e158ae5465605ccca73%2F9eebaa4a7f7d4db3a5b81f4f46b76ff6?format=webp&width=1200',
      width: 1200,
      height: 630,
      alt: 'ShineCar — Cennik Detailingu',
    }],
  },
};

export default function CennikPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'OfferCatalog',
    name: 'Cennik usług detailingu ShineCar',
    description: 'Cennik profesjonalnego detailingu samochodowego w Łukowie i okolicach.',
    itemListElement: services.map((s) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: s.title,
        url: `https://shinecar.pl/uslugi/${s.slug}`,
      },
      priceSpecification: {
        '@type': 'PriceSpecification',
        priceCurrency: 'PLN',
        price: s.price,
      },
    })),
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <section className="py-32 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="mb-6">
                <Breadcrumbs
                  items={[
                    { name: 'Strona główna', href: '/' },
                    { name: 'Cennik' },
                  ]}
                />
              </div>

              <div className="text-center space-y-6 mb-12">
                <div className="h-1 w-16 bg-primary rounded-full mx-auto" />
                <h1 className="font-luxury text-4xl lg:text-5xl text-foreground">
                  Cennik Detailingu Samochodowego — Łuków
                </h1>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Orientacyjne ceny usług detailingu ShineCar. Finalna wycena zależy od modelu pojazdu, stanu lakieru i zakresu prac. Zadzwoń po indywidualną wycenę.
                </p>
              </div>

              <div className="space-y-6">
                {services.map((service) => (
                  <div
                    key={service.slug}
                    className="border border-border rounded-2xl bg-gradient-glass backdrop-blur-sm overflow-hidden"
                  >
                    <div className="p-6 lg:p-8">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                        <div className="space-y-2">
                          <h2 className="text-xl font-semibold text-foreground">
                            {service.title}
                          </h2>
                          <p className="text-sm text-muted-foreground max-w-xl">
                            {service.description.slice(0, 150)}...
                          </p>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Clock className="w-4 h-4" />
                            <span>{service.duration}</span>
                          </div>
                        </div>
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                          <div className="text-right">
                            <div className="text-lg font-semibold text-primary whitespace-pre-line">
                              {service.price}
                            </div>
                          </div>
                          <Link
                            href={`/uslugi/${service.slug}`}
                            className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:brightness-110 transition-all"
                          >
                            Szczegóły
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 border border-border rounded-2xl bg-gradient-glass p-8 text-center space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">
                  Potrzebujesz indywidualnej wyceny?
                </h2>
                <p className="text-muted-foreground max-w-xl mx-auto">
                  Ceny są orientacyjne i zależą od rozmiaru pojazdu, stanu lakieru oraz zakresu prac. Skontaktuj się z nami, aby otrzymać dokładną wycenę.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                  <a
                    href="tel:+48782195321"
                    className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:brightness-110 transition-all"
                  >
                    <Phone className="w-4 h-4" />
                    +48 782 195 321
                  </a>
                  <a
                    href="mailto:shinecarkosmetyka@o2.pl"
                    className="flex items-center gap-2 px-6 py-3 border border-border rounded-full text-foreground hover:border-primary transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    shinecarkosmetyka@o2.pl
                  </a>
                </div>
              </div>

              <div className="text-center mt-8 text-sm text-muted-foreground">
                Ceny podane w PLN. Ostatnia aktualizacja: styczeń 2026.
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
