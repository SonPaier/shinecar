import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import { Phone, Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Cennik Detailingu Łuków — Folie PPF, Korekta, Powłoki Ceramiczne',
  description:
    'Sprawdź cennik usług detailingu ShineCar Łuków: folie PPF od 4 500 zł, korekta lakieru od 1 000 zł, powłoki ceramiczne od 1 000 zł, detailing wnętrza od 250 zł.',
  alternates: {
    canonical: '/cennik',
  },
  keywords: [
    'cennik detailing Łuków',
    'ceny folie PPF',
    'ile kosztuje korekta lakieru',
    'cennik powłoki ceramiczne',
    'cennik mycie detailingowe',
    'cennik detailing wnętrza',
  ],
  openGraph: {
    url: 'https://shinecar.pl/cennik',
    title: 'Cennik Detailingu Łuków — Folie PPF, Korekta, Powłoki',
    description:
      'Sprawdź cennik usług detailingu samochodowego ShineCar Łuków: folie PPF, korekta lakieru, powłoki ceramiczne, detailing wnętrza i więcej.',
    type: 'website',
    locale: 'pl_PL',
    images: [
      {
        url: 'https://cdn.builder.io/api/v1/image/assets%2F75ea2179cd6f4e158ae5465605ccca73%2F9eebaa4a7f7d4db3a5b81f4f46b76ff6?format=webp&width=1200',
        width: 1200,
        height: 630,
        alt: 'ShineCar — Cennik Detailingu',
      },
    ],
  },
};

interface PricingItem {
  name: string;
  description?: string;
  price: string;
}

interface PricingCategory {
  title: string;
  subtitle?: string;
  items: PricingItem[];
}

const pricingData: PricingCategory[] = [
  {
    title: 'Polerowanie',
    subtitle: 'Korekta lakieru i renowacja reflektorów',
    items: [
      { name: 'Korekta lakieru one step', description: 'Odświeżenie lakieru, usunięcie drobnych rys', price: 'od 1 000 zł' },
      { name: '2-etapowa korekta lakieru', description: 'Usuwanie głębszych rys i hologramów', price: 'od 1 800 zł' },
      { name: 'Wieloetapowa korekta lakieru', description: 'Pełna renowacja lakieru, eliminacja do 95% defektów', price: 'od 2 700 zł' },
      { name: 'Polerowanie reflektorów (komplet)', description: 'Przywrócenie przejrzystości reflektorów', price: 'od 150 zł' },
    ],
  },
  {
    title: 'Powłoki ochronne',
    subtitle: 'Ceramiczne, elastomerowe i woskowe zabezpieczenia',
    items: [
      { name: 'Powłoka ceramiczna 1 rok', price: '1 000 zł' },
      { name: 'Powłoka elastomerowa 3 lata', price: '1 800 zł' },
      { name: 'Powłoka elastomerowa 5 lat', price: '2 300 zł' },
      { name: 'Powłoka elastomerowa 7 lat', price: '2 800 zł' },
      { name: 'Powłoka ceramiczna na felgi (komplet)', price: 'od 400 zł' },
      { name: 'Powłoka ceramiczna na szyby', price: 'od 500 zł' },
      { name: 'Powłoka na tapicerkę skórzaną', price: 'od 600 zł' },
      { name: 'Zabezpieczenie woskiem', price: 'od 300 zł' },
    ],
  },
  {
    title: 'Folia ochronna PPF bezbarwna — wnętrze',
    subtitle: 'Ochrona elementów wewnętrznych pojazdu',
    items: [
      { name: 'Ekran', price: '100 zł' },
      { name: 'Dekory Black Piano', price: 'od 200 zł' },
    ],
  },
  {
    title: 'Folia ochronna PPF — zewnątrz',
    subtitle: 'Połysk / mat',
    items: [
      { name: 'Full Body', description: 'Oklejenie całego nadwozia folią ochronną PPF', price: 'od 10 000 zł' },
      { name: 'Full Front', description: 'Maska, zderzak, reflektory, błotniki, lusterka', price: 'od 4 500 zł' },
      {
        name: 'Pakiet Mini',
        description: 'Lampy, słupki Black Piano, wnęki klamek, próg załadunkowy, progi wewnętrzne drzwi',
        price: 'od 600 zł',
      },
      { name: 'Zabezpieczenie szyby czołowej folią ochronną', price: 'od 1 000 zł' },
      { name: 'Zabezpieczenie reflektorów folią PPF (komplet)', price: 'od 300 zł' },
      { name: 'Zabezpieczenie reflektorów folią PPF przyciemniającą (komplet)', price: 'od 400 zł' },
      { name: 'Zabezpieczenie reflektorów folią fotochromatyczną (komplet)', price: 'od 400 zł' },
      { name: 'Dechroming', price: 'Wycena indywidualna' },
    ],
  },
  {
    title: 'Zmiana koloru folią PPF',
    subtitle: 'Pełna metamorfoza pojazdu z ochroną lakieru',
    items: [
      { name: 'Zmiana koloru auta folią ochronną PPF', description: 'Całkowita zmiana koloru nadwozia', price: 'od 13 000 zł' },
    ],
  },
  {
    title: 'Detailing wnętrza',
    subtitle: 'Czyszczenie, pranie i impregnacja',
    items: [
      { name: 'Detailing wnętrza', description: 'Kompleksowe czyszczenie kabiny', price: 'od 250 zł' },
      { name: 'Pranie tapicerki materiałowej', price: 'od 350 zł' },
      { name: 'Czyszczenie i impregnacja tapicerki skórzanej', price: 'od 300 zł' },
      { name: 'Czyszczenie i impregnacja dachu cabrio', description: 'Powłoka do tapicerki materiałowej', price: 'od 1 000 zł' },
    ],
  },
  {
    title: 'Mycie i konserwacja',
    subtitle: 'Mycie detailingowe, serwis powłok i folii',
    items: [
      { name: 'Mycie detailingowe', price: 'od 250 zł' },
      { name: 'Mycie + zabezpieczenie lakieru quick detailerem', price: 'od 400 zł' },
      { name: 'Niewidzialna wycieraczka', price: 'od 150 zł' },
      { name: 'Serwis powłoki', price: 'od 350 zł' },
      { name: 'Serwis folii PPF', price: 'od 450 zł' },
    ],
  },
  {
    title: 'Renowacja',
    items: [
      { name: 'Renowacja i malowanie skór', price: 'Wycena indywidualna' },
    ],
  },
];

function PricingTable({ category }: { category: PricingCategory }) {
  return (
    <div className="border border-border rounded-2xl overflow-hidden">
      <div className="bg-primary/20 px-6 py-4">
        <h2 className="text-lg font-semibold text-primary uppercase tracking-wide">
          {category.title}
        </h2>
        {category.subtitle && (
          <p className="text-sm text-muted-foreground mt-1">{category.subtitle}</p>
        )}
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-border bg-primary/10">
              <th className="px-6 py-3 text-xs font-semibold text-primary uppercase tracking-wider">
                Usługa
              </th>
              <th className="px-6 py-3 text-xs font-semibold text-primary uppercase tracking-wider text-right whitespace-nowrap">
                Cena netto (PLN)
              </th>
            </tr>
          </thead>
          <tbody>
            {category.items.map((item, idx) => (
              <tr
                key={idx}
                className="border-b border-border/50 last:border-b-0 hover:bg-primary/5 transition-colors"
              >
                <td className="px-6 py-4">
                  <span className="font-medium text-foreground">{item.name}</span>
                  {item.description && (
                    <span className="block text-sm text-muted-foreground mt-0.5">
                      {item.description}
                    </span>
                  )}
                </td>
                <td className="px-6 py-4 text-right whitespace-nowrap font-semibold text-foreground">
                  {item.price}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function CennikPage() {
  const jsonLdItems = pricingData.flatMap((cat) =>
    cat.items.map((item) => ({
      '@type': 'Offer' as const,
      itemOffered: {
        '@type': 'Service' as const,
        name: item.name,
        description: item.description || cat.title,
      },
      priceSpecification: {
        '@type': 'PriceSpecification' as const,
        priceCurrency: 'PLN',
        price: item.price,
      },
    }))
  );

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'OfferCatalog',
    name: 'Cennik usług detailingu ShineCar',
    description:
      'Cennik profesjonalnego detailingu samochodowego w Łukowie i okolicach.',
    itemListElement: jsonLdItems,
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
                  Cennik usług
                </h1>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Orientacyjne ceny usług detailingu ShineCar. Finalna wycena
                  zależy od modelu pojazdu, stanu lakieru i zakresu prac.
                  Zadzwoń po indywidualną wycenę.
                </p>
              </div>

              <div className="space-y-8">
                {pricingData.map((category) => (
                  <PricingTable key={category.title} category={category} />
                ))}
              </div>

              <div className="mt-12 border border-border rounded-2xl bg-gradient-glass p-8 text-center space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">
                  Potrzebujesz indywidualnej wyceny?
                </h2>
                <p className="text-muted-foreground max-w-xl mx-auto">
                  Ceny są orientacyjne i zależą od rozmiaru pojazdu, stanu
                  lakieru oraz zakresu prac. Skontaktuj się z nami, aby otrzymać
                  dokładną wycenę.
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
                Wszystkie ceny podane netto w PLN. Ostatnia aktualizacja: marzec 2026.
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
