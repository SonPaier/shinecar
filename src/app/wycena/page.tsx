import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import CarfectEmbed from '@/components/CarfectEmbed';

export const metadata: Metadata = {
  title: 'Wycena Detailingu — Folie PPF, Powłoki, Korekta Lakieru | ShineCar Łuków',
  description:
    'Uzyskaj szybką wycenę usług detailingu: folie PPF, powłoki ceramiczne i elastomerowe, korekta lakieru, detailing wnętrza, mycie detailingowe. ShineCar Łuków.',
  alternates: {
    canonical: '/wycena',
  },
  openGraph: {
    url: 'https://shinecar.pl/wycena',
    title: 'Wycena Detailingu — Folie PPF, Powłoki, Korekta Lakieru | ShineCar Łuków',
    description:
      'Uzyskaj szybką wycenę usług detailingu: folie PPF, powłoki ceramiczne, korekta lakieru i więcej. ShineCar Łuków.',
    type: 'website',
    locale: 'pl_PL',
  },
};

export default function WycenaPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        <div className="container mx-auto px-6 pt-6 pb-2">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <Breadcrumbs
                items={[
                  { name: 'Strona główna', href: '/' },
                  { name: 'Wycena' },
                ]}
              />
            </div>
            <div className="text-center space-y-4">
              <div className="h-1 w-16 bg-primary rounded-full mx-auto" />
              <h1 className="font-luxury text-4xl lg:text-5xl text-primary">
                Wycena usług detailingu
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Wypełnij formularz, a przygotujemy wycenę dopasowaną do Twojego samochodu. Wyceniamy folie PPF, powłoki ceramiczne i elastomerowe, korektę lakieru, detailing wnętrza i mycie detailingowe.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center px-6 py-4">
          <CarfectEmbed />
        </div>
      </main>
      <Footer />
    </div>
  );
}
