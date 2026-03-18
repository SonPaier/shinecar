import type { Metadata } from 'next';
import Header from '@/components/Header';

export const metadata: Metadata = {
  title: 'Wycena Folii PPF i Powłok Ceramicznych — ShineCar Łuków',
  description:
    'Uzyskaj szybką wycenę folii PPF i powłok ceramicznych dla swojego samochodu. ShineCar Łuków — profesjonalny detailing samochodowy.',
  alternates: {
    canonical: '/wycena',
  },
  openGraph: {
    url: 'https://shinecar.pl/wycena',
    title: 'Wycena Folii PPF i Powłok Ceramicznych — ShineCar Łuków',
    description:
      'Uzyskaj szybką wycenę folii PPF i powłok ceramicznych dla swojego samochodu.',
    type: 'website',
    locale: 'pl_PL',
  },
};

export default function WycenaPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-24">
        <div className="container mx-auto px-6 pt-6 pb-2 text-center space-y-4">
          <div className="h-1 w-16 bg-primary rounded-full mx-auto" />
          <h1 className="font-luxury text-4xl lg:text-5xl text-primary">
            Zapytaj o wycenę
          </h1>
          <p className="text-lg text-foreground">
            Wypełnij formularz
          </p>
        </div>
        <div className="flex justify-center px-6 py-4">
          <iframe
            src="https://shinecar.carfect.pl/embed"
            width="100%"
            height={1200}
            frameBorder="0"
            style={{ border: 'none', borderRadius: '8px', maxWidth: '960px' }}
            title="Formularz wyceny folii PPF i powłok ceramicznych"
          />
        </div>
      </main>
    </>
  );
}
