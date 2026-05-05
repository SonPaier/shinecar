import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import GoogleReviewCard from '@/components/GoogleReviewCard';
import { cities } from '@/data/cities';
import { getGoogleReview } from '@/data/googleReviews';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  ArrowRight,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  Clock,
  Sparkles,
  Droplets,
  Sun,
  Shield,
  Snowflake,
  Wand2,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Powłoki ochronne Łuków — Ceramika, Grafen, Elastomer',
  description:
    'Powłoki ochronne na samochód w Łukowie: ceramiczna, grafenowa, elastomerowa. Lustrzany blask, hydrofobowość, ochrona UV. ShineCar — 782 195 321.',
  keywords: [
    'powłoka ochronna Łuków',
    'powłoka ochronna na auto Łuków',
    'zabezpieczenie lakieru Łuków',
    'powłoka ceramiczna Łuków',
    'powłoka grafenowa Łuków',
    'powłoka elastomerowa Łuków',
    'ochrona lakieru samochodowego',
  ],
  alternates: {
    canonical: '/powloka-ochronna-na-auto-lukow',
  },
  openGraph: {
    url: 'https://shinecar.pl/powloka-ochronna-na-auto-lukow',
    title: 'Powłoki ochronne Łuków — Ceramika, Grafen, Elastomer | ShineCar',
    description:
      'Powłoki ochronne na samochód w Łukowie. Ceramiczna, grafenowa, elastomerowa — lustrzany blask, hydrofobowość, wieloletnia ochrona lakieru.',
    type: 'website',
    locale: 'pl_PL',
    images: [
      {
        url: 'https://cdn.builder.io/api/v1/image/assets%2F75ea2179cd6f4e158ae5465605ccca73%2F9eebaa4a7f7d4db3a5b81f4f46b76ff6?format=webp&width=1200',
        width: 1200,
        height: 630,
        alt: 'ShineCar — powłoki ochronne na auto Łuków',
      },
    ],
  },
};

interface CoatingCard {
  href: string;
  title: string;
  category: string;
  description: string;
  priceFrom: string;
  image: string;
}

const coatings: CoatingCard[] = [
  {
    href: '/powloka-ceramiczna-lukow',
    title: 'Powłoka ceramiczna',
    category: 'Ceramika',
    description:
      'Klasyczna ochrona 9H na bazie SiO2. Szklisty blask, hydrofobowość, odporność na UV i chemię. Deklarowana trwałość producenta 1–5 lat.',
    priceFrom: 'od 1 000 zł',
    image:
      'https://cdn.builder.io/api/v1/image/assets%2Fa59c3b14b9b7404f8e5c72990dc66950%2Fa70409b6c6f74d1f8eef91a32c353e5c?format=webp&width=1200',
  },
  {
    href: '/powloka-grafenowa-lukow',
    title: 'Powłoka grafenowa',
    category: 'Grafen',
    description:
      'Innowacja oparta na tlenku grafenu. Antystatyczność, wyjątkowa odporność na water spoty i wyższa śliskość niż ceramika. Deklarowana trwałość 2–5 lat.',
    priceFrom: 'od 1 200 zł',
    image:
      'https://cdn.builder.io/api/v1/image/assets%2F75ea2179cd6f4e158ae5465605ccca73%2Faa9360e1636e474abf453627071b5f19?format=webp&width=1200',
  },
  {
    href: '/powloka-elastomerowa-lukow',
    title: 'Powłoka elastomerowa',
    category: 'Elastomer',
    description:
      'Najgrubsza warstwa ochronna z efektem self-healing. Premium wet look i regeneracja mikrorys pod wpływem ciepła. Deklarowana trwałość 3–7 lat.',
    priceFrom: 'od 1 800 zł',
    image:
      'https://cdn.builder.io/api/v1/image/assets%2F75ea2179cd6f4e158ae5465605ccca73%2F4381a02e8bfa475ab87e0a6da7f9e7fa?format=webp&width=1200',
  },
];

interface ComparisonRow {
  feature: string;
  ceramic: string;
  graphene: string;
  elastomer: string;
  highlight?: 'ceramic' | 'graphene' | 'elastomer';
}

const comparisonRows: ComparisonRow[] = [
  { feature: 'Twardość', ceramic: '9H (najwyższa)', graphene: '8–9H', elastomer: '7–8H (elastyczna)' },
  { feature: 'Trwałość (deklarowana)', ceramic: '1–5 lat', graphene: '2–5 lat', elastomer: '3–7 lat', highlight: 'elastomer' },
  { feature: 'Self-healing', ceramic: '—', graphene: '—', elastomer: 'Tak', highlight: 'elastomer' },
  { feature: 'Hydrofobowość', ceramic: 'Bardzo wysoka', graphene: 'Wyjątkowa', elastomer: 'Wysoka', highlight: 'graphene' },
  { feature: 'Antystatyczność', ceramic: 'Niska', graphene: 'Bardzo wysoka', elastomer: 'Średnia', highlight: 'graphene' },
  { feature: 'Odporność na water spoty', ceramic: 'Średnia', graphene: 'Najwyższa', elastomer: 'Wysoka', highlight: 'graphene' },
  { feature: 'Efekt wizualny', ceramic: 'Lustrzany, szklisty blask', graphene: 'Głęboki, mokry połysk', elastomer: 'Ciepły wet look' },
  { feature: 'Grubość warstwy', ceramic: '1–3 µm', graphene: '2–4 µm', elastomer: '8–15 µm', highlight: 'elastomer' },
  { feature: 'Cena od', ceramic: 'od 1 000 zł', graphene: 'od 1 200 zł', elastomer: 'od 1 800 zł' },
];

interface BenefitItem {
  icon: typeof Sparkles;
  title: string;
  body: string;
}

const benefits: BenefitItem[] = [
  {
    icon: Sparkles,
    title: 'Lustrzany blask',
    body:
      'Powłoka wydobywa głębię koloru i nadaje lakierowi mokry, intensywny połysk, który utrzymuje się przez lata. W zależności od technologii efekt różni się — od szklistej ceramiki, przez głęboki połysk grafenu, po ciepły wet look elastomeru. W każdym wariancie auto wygląda jak świeżo z salonu.',
  },
  {
    icon: Droplets,
    title: 'Hydrofobowość',
    body:
      'Woda nie zatrzymuje się na karoserii — spływa w kroplach, zabierając ze sobą brud i kurz. Kąt kontaktu kropli przekracza 110°, co w praktyce oznacza, że samochód dłużej pozostaje czysty między kolejnymi myciami. Twarda woda z kranu nie zostawia osadów wapiennych tak łatwo jak na niezabezpieczonym lakierze.',
  },
  {
    icon: Wand2,
    title: 'Łatwiejsze mycie',
    body:
      'Brud nie przywiera do gładkiej, chronionej powierzchni. Mycie zajmuje połowę czasu i nie wymaga agresywnych środków — wystarczy szampon o neutralnym pH i delikatny strumień wody. To realna oszczędność czasu, szczególnie wiosną i jesienią, kiedy auto brudzi się szybciej.',
  },
  {
    icon: Sun,
    title: 'Ochrona przed UV',
    body:
      'Promieniowanie ultrafioletowe powoduje matowienie, blaknięcie i utlenianie clearcoatu. Powłoka ochronna działa jak filtr UV, dzięki czemu kolor lakieru zostaje głęboki i nasycony. Szczególnie istotne na ciemnych kolorach — czarny, granatowy, ciemnoszary — które najszybciej tracą blask.',
  },
  {
    icon: Snowflake,
    title: 'Ochrona przed solą i chemią drogową',
    body:
      'Zimą drogi w okolicach Łukowa, Siedlec i Białej Podlaskiej są obficie posypywane solą i chlorkiem magnezu — substancjami bardzo agresywnymi dla lakieru i elementów metalowych. Powłoka tworzy chemicznie obojętną barierę, która izoluje lakier od soli, kwaśnych deszczów, ptasich odchodów i żywicy.',
  },
  {
    icon: Shield,
    title: 'Ochrona przed water spotami',
    body:
      'Water spoty to mineralne plamy zostawiane przez wodę z kranu po wyschnięciu — twarda woda zawiera wapń i magnez, które wgryzają się w clearcoat. Powłoki — szczególnie grafenowe — radzą sobie z tym problemem najlepiej dzięki wysokiej śliskości i właściwościom antystatycznym.',
  },
];

interface ProcessStep {
  title: string;
  body: string;
}

const processSteps: ProcessStep[] = [
  {
    title: 'Konsultacja i ocena lakieru',
    body:
      'Spotykamy się w studio w Świderkach pod Łukowem, oglądamy lakier pod oświetleniem punktowym, sprawdzamy grubość clearcoatu miernikiem i dobieramy optymalną powłokę pod styl użytkowania auta. Bez pośpiechu, bez nacisku na droższy pakiet — tylko realna rekomendacja.',
  },
  {
    title: 'Mycie i dekontaminacja',
    body:
      'Dwuetapowe mycie (pre-wash + contact wash metodą dwóch wiader), dekontaminacja chemiczna (iron remover, tar remover) oraz mechaniczna (glinka detailingowa). Usuwamy z powierzchni wszystko, co mogłoby utrudnić wiązanie powłoki.',
  },
  {
    title: 'Korekta lakieru',
    body:
      'Maszynowe polerowanie usuwa mikrozarysowania, hologramy i swirl marki. Korekta jedno-, dwu- lub trzystopniowa — zakres dobieramy do realnego stanu lakieru. Każdy panel sprawdzamy pod oświetleniem punktowym, zanim przejdziemy dalej.',
  },
  {
    title: 'Aplikacja powłoki',
    body:
      'Powłoka nakładana panel po panelu w kontrolowanej temperaturze i wilgotności. Każda warstwa potrzebuje precyzyjnego czasu na związanie z lakierem — proces trwa od kilku godzin do całego dnia roboczego, zależnie od technologii i wybranego pakietu.',
  },
  {
    title: 'Utwardzanie i odbiór',
    body:
      'Powłoka utwardza się 24–72 h w zamkniętym, ogrzewanym pomieszczeniu z kontrolowaną wilgotnością. Końcowa kontrola pod oświetleniem punktowym, przekazanie auta z instrukcją pielęgnacji oraz informacją o deklarowanej przez producenta trwałości danego pakietu.',
  },
];

const hubFaq = [
  {
    question: 'Która powłoka ochronna jest najlepsza dla mojego auta?',
    answer:
      'To zależy od priorytetów. Ceramika to sprawdzony klasyk — najwyższa twardość 9H i lustrzany blask. Grafen wyróżnia się antystatycznością i odpornością na water spoty — sprawdza się świetnie tam, gdzie woda z kranu jest twarda. Elastomer to opcja premium — najgrubsza warstwa, efekt self-healing i wet look. Podczas konsultacji w ShineCar dobieramy technologię do realnego stylu użytkowania, koloru lakieru i budżetu.',
  },
  {
    question: 'Ile kosztuje powłoka ochronna w Łukowie?',
    answer:
      'W ShineCar Łuków ceny zaczynają się od 1 000 zł (powłoka ceramiczna 1-letnia), 1 200 zł (grafenowa 2-letnia) i 1 800 zł (elastomerowa 3-letnia). Końcowa cena zależy od wielkości pojazdu, wybranego pakietu trwałości oraz tego, czy lakier wymaga wcześniejszej korekty. Pełen cennik znajdziesz w zakładce Cennik, a indywidualną wycenę przygotujemy po oględzinach.',
  },
  {
    question: 'Czy powłoka ceramiczna chroni przed kamieniami?',
    answer:
      'Nie — to fundamentalna różnica, którą warto zrozumieć. Powłoka chroni lakier chemicznie (UV, kwaśne deszcze, ptasie odchody, sól, water spoty), ale nie zatrzyma kamienia uderzającego w maskę. Przed odpryskami chroni wyłącznie folia PPF. Najpełniejsze zabezpieczenie to PPF na przód auta + powłoka na całe nadwozie (w tym na folię).',
  },
  {
    question: 'Powłoka ceramiczna czy grafenowa — co wybrać?',
    answer:
      'Ceramika to klasyka — najwyższa twardość 9H, szklisty blask, niższy próg cenowy. Grafen idzie krok dalej: wyższa śliskość, antystatyczność (mniej kurzu na karoserii), lepsza odporność na water spoty i wyższa odporność termiczna. Jeśli woda z kranu w Twojej okolicy jest twarda i zostawia osady — grafen poradzi sobie z tym znacznie lepiej. Jeśli zależy Ci na maksymalnej twardości i klasycznym wyglądzie — wybierz ceramikę.',
  },
  {
    question: 'Czy powłoka ochronna zastępuje folię PPF?',
    answer:
      'Nie — to dwie zupełnie różne formy ochrony. Powłoka chroni chemicznie (przed UV, deszczami, solą, brudem), folia PPF chroni mechanicznie (przed kamieniami, odpryskami, zarysowaniami). Najlepsza konfiguracja: PPF na maskę, zderzak, błotniki i lusterka + powłoka ceramiczna lub grafenowa na całe auto, w tym na folię.',
  },
  {
    question: 'Jak długo trwa aplikacja powłoki ochronnej?',
    answer:
      'Cały proces — od mycia i dekontaminacji, przez korektę lakieru, po aplikację i utwardzanie — trwa zwykle 2–4 dni roboczych. Sam etap nakładania powłoki to kilka godzin, ale potrzebuje 24–72 h na pełne utwardzenie w kontrolowanych warunkach. Po odbiorze przez kolejne 7 dni warto unikać mycia.',
  },
  {
    question: 'Czy mogę nałożyć powłokę na nowe auto z salonu?',
    answer:
      'Jak najbardziej — to wręcz idealny moment. Lakier prosto z fabryki jest w najlepszej kondycji i zwykle nie wymaga pełnej korekty, a jedynie dekontaminacji z wosku transportowego. Cały proces jest wtedy szybszy i tańszy. Im wcześniej zaaplikujesz powłokę, tym dłużej lakier zachowa fabryczny wygląd.',
  },
  {
    question: 'Jak dbać o auto po aplikacji powłoki?',
    answer:
      'Pielęgnacja jest prostsza niż bez powłoki: myj samochód ręcznie metodą dwóch wiader lub na myjni bezdotykowej, używaj szamponu o neutralnym pH dedykowanego do powłok, unikaj myjni szczotkowych, a ptasie odchody i żywicę usuwaj jak najszybciej. Co 6–12 miesięcy zalecamy wizytę kontrolną z odświeżeniem boosterem. Przez pierwsze 7 dni po aplikacji nie myjemy auta — powłoka utwardza się w tym czasie.',
  },
  {
    question: 'Jak ograniczyć water spoty na lakierze?',
    answer:
      'Water spoty to efekt twardej wody, która zawiera wapń i magnez — po wyschnięciu zostawia mineralne plamy. Najskuteczniejsze metody to: mycie wodą demineralizowaną lub szybkie osuszanie po myciu, parkowanie pod dachem podczas deszczu oraz aplikacja powłoki grafenowej, która dzięki antystatyczności i wysokiej śliskości najskuteczniej minimalizuje powstawanie osadów.',
  },
  {
    question: 'Czy ShineCar daje gwarancję na powłoki?',
    answer:
      'Na powłoki ochronne podajemy deklarowaną przez producenta trwałość danego pakietu (np. 1, 2, 3, 5 lub 7 lat). Gwarancji udzielamy wyłącznie na folie PPF — do 10 lat zgodnie z warunkami producenta. Powłoka utrzyma się tak długo, jak deklaruje producent, pod warunkiem prawidłowej pielęgnacji (mycie ręczne, neutralne pH, brak myjni szczotkowych).',
  },
];

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Powłoka ochronna na auto — Łuków',
  description:
    'Profesjonalna aplikacja powłok ochronnych na lakier samochodowy w Łukowie: powłoki ceramiczne, grafenowe i elastomerowe. Studio ShineCar w Świderkach.',
  serviceType: 'Powłoki ochronne na lakier samochodowy',
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
  url: 'https://shinecar.pl/powloka-ochronna-na-auto-lukow',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Powłoki ochronne ShineCar Łuków',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Powłoka ceramiczna' },
        priceCurrency: 'PLN',
        price: '1000',
        url: 'https://shinecar.pl/powloka-ceramiczna-lukow',
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Powłoka grafenowa' },
        priceCurrency: 'PLN',
        price: '1200',
        url: 'https://shinecar.pl/powloka-grafenowa-lukow',
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Powłoka elastomerowa' },
        priceCurrency: 'PLN',
        price: '1800',
        url: 'https://shinecar.pl/powloka-elastomerowa-lukow',
      },
    ],
  },
};

export default function PowlokaOchronnaNaAutoPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
        />

        {/* Hero */}
        <section className="py-32 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="mb-6">
                <Breadcrumbs
                  items={[
                    { name: 'Strona główna', href: '/' },
                    { name: 'Usługi', href: '/uslugi' },
                    { name: 'Powłoka ochronna na auto Łuków' },
                  ]}
                />
              </div>

              <div className="space-y-6">
                <div className="h-1 w-16 bg-primary rounded-full" />
                <h1 className="font-luxury text-4xl lg:text-5xl text-foreground">
                  Powłoka ochronna na auto Łuków
                </h1>
                <p className="text-lg text-muted-foreground max-w-3xl">
                  Ceramika, grafen, elastomer — trzy technologie zabezpieczenia lakieru,
                  które aplikujemy w studio ShineCar w Świderkach pod Łukowem (Lubelszczyzna,
                  woj. lubelskie). Lustrzany blask, hydrofobowość i wieloletnia ochrona
                  przed UV, solą drogową, kwaśnymi deszczami i osadami z twardej wody.
                  Dobieramy rozwiązanie pod realne warunki użytkowania, a nie pod cennik.
                </p>
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground pt-2">
                  <span className="inline-flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    Świderki 155, 21-411 — 5 min od centrum Łukowa
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary" />
                    pn–pt 8:00–18:00, sob 9:00–16:00
                  </span>
                  <a
                    href="tel:+48782195321"
                    className="inline-flex items-center gap-2 text-primary hover:underline"
                  >
                    <Phone className="w-4 h-4" />
                    +48 782 195 321
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Three technologies */}
        <section className="pb-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="space-y-4 mb-10">
                <h2 className="font-luxury text-3xl text-foreground">
                  Trzy technologie ochrony lakieru
                </h2>
                <p className="text-muted-foreground max-w-3xl">
                  Każda z trzech technologii zapewnia wieloletnią ochronę i lustrzany
                  blask, ale różnią się parametrami, trwałością i efektem wizualnym.
                  Poniżej krótkie wprowadzenie — szczegóły, cennik i FAQ znajdziesz
                  na dedykowanych podstronach.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {coatings.map((c, idx) => (
                  <Link
                    key={c.href}
                    href={c.href}
                    className="group border border-border rounded-2xl overflow-hidden bg-gradient-glass backdrop-blur-sm hover:border-primary/50 transition-colors"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={c.image}
                        alt={c.title}
                        fill
                        priority={idx === 0}
                        fetchPriority={idx === 0 ? 'high' : 'auto'}
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                    <div className="p-5 space-y-3">
                      <span className="text-xs uppercase tracking-wider text-primary font-semibold">
                        {c.category}
                      </span>
                      <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                        {c.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-3">
                        {c.description}
                      </p>
                      <div className="flex items-center justify-between pt-2">
                        <span className="text-sm text-primary font-medium">
                          {c.priceFrom}
                        </span>
                        <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Comparison table */}
        <section className="py-20 bg-background border-t border-border">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="space-y-4 mb-10">
                <h2 className="font-luxury text-3xl text-foreground">
                  Ceramika, grafen czy elastomer — porównanie technologii
                </h2>
                <p className="text-muted-foreground max-w-3xl">
                  Która powłoka będzie najlepsza dla Twojego auta? To zależy od
                  priorytetów: maksymalnej trwałości, efektu wizualnego, odporności na
                  water spoty czy funkcji self-healing. Tabela poniżej zestawia trzy
                  technologie w kluczowych kategoriach.
                </p>
              </div>
              <div className="border border-border rounded-2xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="bg-primary/10 border-b border-border">
                        <th className="px-5 py-3 text-xs font-semibold text-primary uppercase tracking-wider">
                          Cecha
                        </th>
                        <th className="px-5 py-3 text-xs font-semibold text-primary uppercase tracking-wider">
                          <Link
                            href="/powloka-ceramiczna-lukow"
                            className="hover:underline"
                          >
                            Ceramiczna
                          </Link>
                        </th>
                        <th className="px-5 py-3 text-xs font-semibold text-primary uppercase tracking-wider">
                          <Link
                            href="/powloka-grafenowa-lukow"
                            className="hover:underline"
                          >
                            Grafenowa
                          </Link>
                        </th>
                        <th className="px-5 py-3 text-xs font-semibold text-primary uppercase tracking-wider">
                          <Link
                            href="/powloka-elastomerowa-lukow"
                            className="hover:underline"
                          >
                            Elastomerowa
                          </Link>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparisonRows.map((row, idx) => (
                        <tr
                          key={idx}
                          className="border-b border-border/50 last:border-b-0"
                        >
                          <td className="px-5 py-3 font-medium text-foreground">
                            {row.feature}
                          </td>
                          <td
                            className={`px-5 py-3 text-sm ${row.highlight === 'ceramic' ? 'text-primary font-semibold' : 'text-muted-foreground'}`}
                          >
                            {row.ceramic}
                          </td>
                          <td
                            className={`px-5 py-3 text-sm ${row.highlight === 'graphene' ? 'text-primary font-semibold' : 'text-muted-foreground'}`}
                          >
                            {row.graphene}
                          </td>
                          <td
                            className={`px-5 py-3 text-sm ${row.highlight === 'elastomer' ? 'text-primary font-semibold' : 'text-muted-foreground'}`}
                          >
                            {row.elastomer}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-4 text-sm">
                <Link
                  href="/powloka-ceramiczna-lukow"
                  className="text-primary hover:underline font-medium"
                >
                  Powłoka ceramiczna →
                </Link>
                <Link
                  href="/powloka-grafenowa-lukow"
                  className="text-primary hover:underline font-medium"
                >
                  Powłoka grafenowa →
                </Link>
                <Link
                  href="/powloka-elastomerowa-lukow"
                  className="text-primary hover:underline font-medium"
                >
                  Powłoka elastomerowa →
                </Link>
                <Link href="/cennik" className="text-muted-foreground hover:text-primary">
                  Pełny cennik usług →
                </Link>
              </div>
              <p className="text-xs text-muted-foreground mt-6">
                * Ceny orientacyjne netto, dla samochodów osobowych. Końcowa wycena
                zależy od rozmiaru pojazdu, stanu lakieru i wybranego pakietu
                trwałości. Trwałość podawana jest zgodnie z deklaracją producenta
                preparatu i zależy od pielęgnacji.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-background border-t border-border">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="space-y-4 mb-10">
                <h2 className="font-luxury text-3xl text-foreground">
                  Korzyści z aplikacji powłoki ochronnej
                </h2>
                <p className="text-muted-foreground max-w-3xl">
                  Niezależnie od wybranej technologii — ceramicznej, grafenowej czy
                  elastomerowej — profesjonalna powłoka ochronna zmienia sposób, w
                  jaki Twój samochód wygląda i jak się go utrzymuje. Sześć
                  praktycznych korzyści, które dostajesz po aplikacji w ShineCar Łuków.
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {benefits.map((b) => {
                  const Icon = b.icon;
                  return (
                    <div
                      key={b.title}
                      className="border border-border rounded-2xl p-6 bg-gradient-glass backdrop-blur-sm"
                    >
                      <div className="w-10 h-10 bg-primary/15 rounded-xl flex items-center justify-center mb-4">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="font-semibold text-foreground mb-2">
                        {b.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {b.body}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Google review */}
        {getGoogleReview('artur-sprycha') && (
          <GoogleReviewCard
            review={getGoogleReview('artur-sprycha')!}
            heading="Co mówią o nas klienci"
          />
        )}

        {/* Powłoka vs PPF */}
        <section className="py-20 bg-background border-t border-border">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-10">
              <div className="space-y-4">
                <h2 className="font-luxury text-3xl text-foreground">
                  Powłoka ochronna czy folia PPF — co wybrać?
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  To jedno z najczęściej zadawanych pytań w naszym studio. Odpowiedź
                  jest prosta: <strong className="text-foreground">powłoka ochronna i folia PPF to dwa zupełnie różne rodzaje ochrony</strong>,
                  które się nie wykluczają — uzupełniają.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Powłoka ceramiczna, grafenowa lub elastomerowa chroni lakier
                  chemicznie — przed UV, kwaśnymi deszczami, ptasimi odchodami,
                  żywicą, solą drogową i osadami z twardej wody. Daje lustrzany
                  blask, hydrofobowość i ułatwia mycie.{' '}
                  <strong className="text-foreground">
                    Nie chroni jednak przed uderzeniami kamieni, głębokimi rysami ani
                    odpryskami
                  </strong>{' '}
                  — to fizycznie niemożliwe przy warstwie kilku mikronów.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  <Link href="/folia-ppf-lukow" className="text-primary hover:underline">
                    Folia PPF
                  </Link>{' '}
                  (Paint Protection Film) to gruba, przezroczysta folia, która
                  fizycznie absorbuje uderzenia kamieni, piasek i zarysowania. Jest
                  niezastąpiona na elementy najbardziej narażone — maskę, zderzak,
                  błotniki, lusterka i progi. Jeśli regularnie jeździsz autostradą,
                  S17 albo drogami wojewódzkimi w okolicach Łukowa i Siedlec, PPF
                  na przód jest praktycznie konieczny.
                </p>
                <p className="text-foreground font-semibold">
                  Najpełniejsza konfiguracja: PPF na najbardziej narażone elementy +
                  powłoka ochronna na całe nadwozie (w tym na folię). To
                  kompleksowe zabezpieczenie chemiczne i mechaniczne.
                </p>
                <div className="pt-2">
                  <Link
                    href="/folia-ppf-lukow"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-lg font-medium hover:brightness-110 transition-all"
                  >
                    Folia PPF Łuków <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
              <div className="border border-border rounded-2xl overflow-hidden self-start">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-primary/10 border-b border-border">
                      <th className="px-5 py-3 text-xs font-semibold text-primary uppercase tracking-wider text-left">
                        Cecha
                      </th>
                      <th className="px-5 py-3 text-xs font-semibold text-primary uppercase tracking-wider text-center">
                        Powłoka
                      </th>
                      <th className="px-5 py-3 text-xs font-semibold text-primary uppercase tracking-wider text-center">
                        Folia PPF
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Ochrona chemiczna (UV, sól, ptasie odchody)', 'Tak', 'Tak'],
                      ['Ochrona przed kamieniami i odpryskami', '—', 'Tak'],
                      ['Hydrofobowość', 'Tak', 'Umiarkowana'],
                      ['Lustrzany blask / głębia koloru', 'Tak', 'Neutralny'],
                      ['Łatwiejsze mycie', 'Tak', 'Umiarkowanie'],
                      ['Pokrycie typowe', 'Całe auto', 'Wybrane panele'],
                    ].map(([feat, c1, c2], idx) => (
                      <tr
                        key={idx}
                        className="border-b border-border/50 last:border-b-0"
                      >
                        <td className="px-5 py-3 font-medium text-foreground">
                          {feat}
                        </td>
                        <td className="px-5 py-3 text-center text-muted-foreground">
                          {c1}
                        </td>
                        <td className="px-5 py-3 text-center text-muted-foreground">
                          {c2}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Nowy samochód */}
        <section className="py-20 bg-background border-t border-border">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto space-y-4">
              <h2 className="font-luxury text-3xl text-foreground">
                Zabezpieczenie lakieru nowego auta z salonu
              </h2>
              <p className="text-muted-foreground leading-relaxed max-w-3xl">
                Kupujesz nowy samochód? To najlepszy moment na aplikację powłoki
                ochronnej. Lakier prosto z fabryki jest w najlepszej kondycji, jaką
                kiedykolwiek będzie — bez rys, hologramów ani osadów z myjni.
                Aplikacja powłoki na nowe auto jest zwykle szybsza i tańsza, bo nie
                wymaga kosztownej korekty lakieru.
              </p>
              <p className="text-muted-foreground leading-relaxed max-w-3xl">
                Im dłużej zwlekasz, tym więcej drobnych zarysowań z myjni i osadów
                wapiennych z twardej wody pojawia się na lakierze. Każdy kolejny
                tydzień to pogorszenie stanu, które trzeba będzie korygować
                maszyną polerską przed aplikacją powłoki.
              </p>
              <p className="text-muted-foreground leading-relaxed max-w-3xl">
                Wielu naszych klientów przyprowadza nowe auto bezpośrednio z salonu
                — jeszcze z folią transportową na progach. Wykonujemy wtedy
                dekontaminację (usuwamy resztki wosku transportowego i osady z
                placu), a następnie aplikujemy wybraną powłokę. Dodatkowy argument
                finansowy: udokumentowane zabezpieczenie z pierwszych miesięcy życia
                auta to konkretny argument przy odsprzedaży.
              </p>
              <p className="text-foreground font-semibold pt-2">
                Im wcześniej zaaplikujesz powłokę, tym dłużej Twój lakier zachowa
                fabryczny wygląd.
              </p>
            </div>
          </div>
        </section>

        {/* Korekta przed powłoką */}
        <section className="py-20 bg-background border-t border-border">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto space-y-4">
              <h2 className="font-luxury text-3xl text-foreground">
                Dlaczego korekta lakieru przed powłoką jest kluczowa?
              </h2>
              <p className="text-muted-foreground leading-relaxed max-w-3xl">
                Powłoka ochronna nie maskuje defektów lakieru — wręcz przeciwnie,{' '}
                <strong className="text-foreground">utrwala je</strong>. Jeśli
                nałożysz ceramikę, grafen czy elastomer na lakier z mikrorysami,
                hologramami i swirl markami, powłoka „zamknie" te defekty pod swoją
                warstwą. Rysy będą widoczne tak samo jak przed aplikacją, a
                późniejsze ich usunięcie wymaga zdjęcia całej powłoki.
              </p>
              <p className="text-muted-foreground leading-relaxed max-w-3xl">
                Dlatego każda profesjonalna aplikacja powłoki powinna być poprzedzona
                korektą lakieru — maszynowym polerowaniem, które eliminuje rysy,
                hologramy i nierówności. Dopiero na idealnie gładkiej, pozbawionej
                defektów powierzchni powłoka pokazuje pełny potencjał — lustrzany
                blask, głębię koloru i efekt wet look.
              </p>
              <p className="text-muted-foreground leading-relaxed max-w-3xl">
                W ShineCar korekta to standard, nie dodatek opcjonalny.
                Wykonujemy korekty jedno-, dwu- i trzystopniowe w zależności od stanu
                lakieru. Każdy panel sprawdzamy pod oświetleniem punktowym — jeśli
                widać niedoskonałości, wracamy do polerki. Wyjątkiem są nowe auta z
                salonu — ich lakier zwykle wymaga jedynie dekontaminacji.
              </p>
              <div className="pt-2">
                <Link
                  href="/korekta-lakieru-lukow"
                  className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
                >
                  Korekta lakieru Łuków — sprawdź ofertę <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 bg-background border-t border-border">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="space-y-4 mb-10">
                <h2 className="font-luxury text-3xl text-foreground">
                  Jak wygląda aplikacja powłoki w ShineCar
                </h2>
                <p className="text-muted-foreground max-w-3xl">
                  Każda powłoka — niezależnie od technologii — przechodzi przez ten
                  sam, pięcioetapowy proces. Nie skracamy go, bo trwałość warstwy
                  zależy od jakości przygotowania powierzchni. Cały cykl trwa zwykle
                  2–4 dni roboczych.
                </p>
              </div>
              <ol className="space-y-4">
                {processSteps.map((step, idx) => (
                  <li
                    key={step.title}
                    className="border border-border rounded-2xl p-6 bg-gradient-glass backdrop-blur-sm flex gap-5"
                  >
                    <div className="shrink-0 w-12 h-12 rounded-full bg-primary/15 text-primary font-semibold flex items-center justify-center text-lg">
                      {idx + 1}
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-semibold text-lg text-foreground">
                        {step.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {step.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-background border-t border-border">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-luxury text-3xl text-foreground mb-8 text-center">
                Najczęściej zadawane pytania
              </h2>
              <Accordion type="single" collapsible className="space-y-2">
                {hubFaq.map((item, i) => (
                  <AccordionItem
                    key={i}
                    value={`faq-${i}`}
                    className="border border-border rounded-xl px-4 bg-gradient-glass backdrop-blur-sm"
                  >
                    <AccordionTrigger className="text-left text-foreground hover:text-primary">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Geo coverage */}
        <section className="py-20 bg-background border-t border-border">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="space-y-4 mb-8">
                <h2 className="font-luxury text-3xl text-foreground">
                  Powłoki ochronne — obsługujemy całą Lubelszczyznę i południowe Podlasie
                </h2>
                <p className="text-muted-foreground max-w-3xl">
                  Studio ShineCar w Świderkach (gmina Łuków, woj. lubelskie) leży w
                  centralnym punkcie regionu. Klienci dojeżdżają do nas z Łukowa,
                  Siedlec, Radzynia Podlaskiego, Międzyrzeca Podlaskiego, Białej
                  Podlaskiej, Garwolina, Ryk i Lubartowa — wybierz swoje miasto, aby
                  zobaczyć szczegóły dojazdu i typowe pakiety zamawiane przez klientów
                  z Twojej okolicy.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {cities.map((city) => (
                  <Link
                    key={city.slug}
                    href={`/${city.slug}`}
                    className="group border border-border rounded-xl px-4 py-3 bg-gradient-glass backdrop-blur-sm hover:border-primary/50 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-foreground group-hover:text-primary transition-colors text-sm">
                          Detailing {city.name}
                        </div>
                        {city.distance && (
                          <div className="text-xs text-muted-foreground mt-0.5">
                            {city.distance}
                          </div>
                        )}
                      </div>
                      <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-background border-t border-border">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center space-y-6 border border-border rounded-3xl p-10 bg-gradient-glass backdrop-blur-sm">
              <h2 className="font-luxury text-3xl text-foreground">
                Zabezpiecz lakier swojego samochodu
              </h2>
              <p className="text-muted-foreground">
                Zapraszamy na bezpłatną konsultację w studio ShineCar w Świderkach
                pod Łukowem. Obejrzymy Twój lakier pod oświetleniem punktowym,
                ocenimy jego stan i doradzimy najlepszą powłokę ochronną — bez
                presji wyboru najdroższego pakietu.
              </p>
              <ul className="grid sm:grid-cols-2 gap-2 text-sm text-muted-foreground text-left max-w-md mx-auto">
                {[
                  'Konsultacja bez zobowiązań',
                  'Indywidualna wycena po oględzinach',
                  'Marki Gyeon i Ultrafit',
                  'Łuków, Siedlce, Radzyń, Międzyrzec',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <a
                  href="tel:+48782195321"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:brightness-110 transition-all whitespace-nowrap"
                >
                  <Phone className="w-4 h-4 shrink-0" />
                  <span className="whitespace-nowrap">+48 782 195 321</span>
                </a>
                <a
                  href="mailto:shinecarkosmetyka@o2.pl"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-full text-foreground hover:border-primary transition-colors whitespace-nowrap"
                >
                  <Mail className="w-4 h-4 shrink-0" />
                  <span className="whitespace-nowrap">shinecarkosmetyka@o2.pl</span>
                </a>
                <Link
                  href="/wycena"
                  className="text-primary hover:underline text-sm font-medium"
                >
                  Zapytaj o wycenę online →
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
