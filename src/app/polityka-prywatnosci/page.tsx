import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/seo/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Polityka Prywatności',
  description:
    'Polityka prywatności ShineCar. Informacje o przetwarzaniu danych osobowych, plikach cookies i prawach użytkowników.',
  alternates: { canonical: '/polityka-prywatnosci' },
  robots: { index: true, follow: true },
};

export default function PolitykaPrywatnosciPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="py-32 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <div className="mb-6">
                <Breadcrumbs
                  items={[
                    { name: 'Strona główna', href: '/' },
                    { name: 'Polityka prywatności' },
                  ]}
                />
              </div>

              <h1 className="font-luxury text-4xl text-foreground mb-8">
                Polityka Prywatności
              </h1>

              <div className="prose prose-invert max-w-none space-y-8 text-muted-foreground">
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold text-foreground">
                    1. Administrator danych
                  </h2>
                  <p>
                    Administratorem danych osobowych jest ShineCar Kosmetyka, Marcin
                    Przybysławski, Świderki 155, 21-411 Świderki, Polska.
                  </p>
                  <p>
                    Kontakt z administratorem: telefon{' '}
                    <a href="tel:+48782195321" className="text-primary hover:underline">
                      +48 782 195 321
                    </a>
                    , email{' '}
                    <a
                      href="mailto:shinecarkosmetyka@o2.pl"
                      className="text-primary hover:underline"
                    >
                      shinecarkosmetyka@o2.pl
                    </a>
                    .
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-xl font-semibold text-foreground">
                    2. Jakie dane zbieramy
                  </h2>
                  <p>W ramach korzystania ze strony shinecar.pl możemy przetwarzać:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>
                      Dane kontaktowe przekazane dobrowolnie (imię, numer telefonu, adres
                      email) — w przypadku kontaktu telefonicznego lub mailowego
                    </li>
                    <li>
                      Dane analityczne zbierane automatycznie (adres IP, typ przeglądarki,
                      czas wizyty, odwiedzane podstrony) — za pomocą Google Analytics
                    </li>
                    <li>
                      Pliki cookies — niezbędne do funkcjonowania strony oraz analityczne
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h2 className="text-xl font-semibold text-foreground">
                    3. Cel przetwarzania danych
                  </h2>
                  <ul className="list-disc list-inside space-y-1">
                    <li>
                      Odpowiedź na zapytania i umówienie wizyt (art. 6 ust. 1 lit. b
                      RODO)
                    </li>
                    <li>
                      Analiza ruchu na stronie i poprawa jakości usług (art. 6 ust. 1 lit.
                      f RODO — prawnie uzasadniony interes administratora)
                    </li>
                    <li>
                      Wypełnienie obowiązków prawnych (art. 6 ust. 1 lit. c RODO)
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h2 className="text-xl font-semibold text-foreground">
                    4. Pliki cookies
                  </h2>
                  <p>Strona wykorzystuje następujące rodzaje plików cookies:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>
                      <strong className="text-foreground">Niezbędne</strong> — wymagane
                      do prawidłowego działania strony (np. zapamiętanie zgody na cookies)
                    </li>
                    <li>
                      <strong className="text-foreground">Analityczne</strong> — Google
                      Analytics 4 (identyfikator: G-SEKRLB5DT4) — służą do analizy ruchu
                      na stronie, zbierają anonimowe dane o sposobie korzystania ze strony
                    </li>
                  </ul>
                  <p>
                    Możesz zarządzać plikami cookies w ustawieniach swojej przeglądarki.
                    Usunięcie lub zablokowanie cookies może wpłynąć na funkcjonalność
                    strony.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-xl font-semibold text-foreground">
                    5. Google Analytics
                  </h2>
                  <p>
                    Korzystamy z usługi Google Analytics 4, świadczonej przez Google LLC.
                    Google Analytics wykorzystuje pliki cookies do analizy sposobu
                    korzystania ze strony. Informacje generowane przez cookies są
                    przekazywane na serwery Google. Adresy IP są anonimizowane.
                  </p>
                  <p>
                    Więcej informacji o polityce prywatności Google:{' '}
                    <a
                      href="https://policies.google.com/privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      policies.google.com/privacy
                    </a>
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-xl font-semibold text-foreground">
                    6. Google Maps
                  </h2>
                  <p>
                    Na stronie kontaktowej osadzamy mapę Google Maps, która może zbierać
                    dane o użytkownikach zgodnie z polityką prywatności Google.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-xl font-semibold text-foreground">
                    7. Twoje prawa
                  </h2>
                  <p>Zgodnie z RODO przysługują Ci następujące prawa:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Prawo dostępu do swoich danych osobowych</li>
                    <li>Prawo do sprostowania danych</li>
                    <li>Prawo do usunięcia danych</li>
                    <li>Prawo do ograniczenia przetwarzania</li>
                    <li>Prawo do przenoszenia danych</li>
                    <li>Prawo do wniesienia sprzeciwu wobec przetwarzania</li>
                    <li>
                      Prawo do wniesienia skargi do Prezesa Urzędu Ochrony Danych
                      Osobowych (UODO)
                    </li>
                  </ul>
                  <p>
                    W celu skorzystania z powyższych praw, skontaktuj się z nami pod
                    adresem email:{' '}
                    <a
                      href="mailto:shinecarkosmetyka@o2.pl"
                      className="text-primary hover:underline"
                    >
                      shinecarkosmetyka@o2.pl
                    </a>
                    .
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-xl font-semibold text-foreground">
                    8. Okres przechowywania danych
                  </h2>
                  <p>
                    Dane osobowe przechowujemy przez okres niezbędny do realizacji celów,
                    dla których zostały zebrane, lub do czasu cofnięcia zgody. Dane
                    analityczne z Google Analytics są przechowywane przez 14 miesięcy.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-xl font-semibold text-foreground">
                    9. Zmiany polityki prywatności
                  </h2>
                  <p>
                    Zastrzegamy sobie prawo do wprowadzania zmian w niniejszej polityce
                    prywatności. Aktualna wersja jest zawsze dostępna na tej stronie.
                  </p>
                  <p className="text-sm">
                    Ostatnia aktualizacja: marzec 2026.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
