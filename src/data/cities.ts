export interface CityData {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  heading: string;
  intro: string[];
  distance?: string;
  keywords: string[];
}

export const cities: CityData[] = [
  {
    slug: 'detailing-lukow',
    name: 'Łuków',
    metaTitle: 'Detailing Samochodowy Łuków — Folie PPF, Korekta Lakieru',
    metaDescription:
      'Profesjonalny detailing samochodowy w Łukowie. Folie ochronne PPF, korekta lakieru, powłoki ceramiczne, detailing wnętrza. ShineCar — studio detailingu Łuków.',
    heading: 'Detailing Samochodowy Łuków',
    intro: [
      'ShineCar to studio detailingu samochodowego działające w Łukowie i okolicach. Specjalizujemy się w aplikacji folii ochronnych PPF, korekcie lakieru, powłokach ceramicznych i elastomerowych oraz kompleksowym detailingu wnętrza.',
      'Nasz warsztat zlokalizowany jest w Świderkach, w bezpośrednim sąsiedztwie Łukowa. Oferujemy również dojazd do klienta na terenie miasta i powiatu łukowskiego.',
      'Łuków to dynamicznie rozwijające się miasto, w którym coraz więcej właścicieli samochodów szuka profesjonalnej ochrony lakieru. W ShineCar zapewniamy usługi na najwyższym poziomie, korzystając z produktów renomowanych marek.',
    ],
    keywords: ['detailing Łuków', 'folie PPF Łuków', 'korekta lakieru Łuków', 'powłoki ceramiczne Łuków', 'detailing samochodowy Łuków'],
  },
  {
    slug: 'detailing-siedlce',
    name: 'Siedlce',
    metaTitle: 'Detailing Samochodowy Siedlce — Folie PPF, Korekta Lakieru',
    metaDescription:
      'Detailing samochodowy dla klientów z Siedlec. Folie PPF, korekta lakieru, powłoki ceramiczne. ShineCar — dojazd z Łukowa, ok. 50 km.',
    heading: 'Detailing Samochodowy Siedlce',
    intro: [
      'Szukasz profesjonalnego detailingu samochodowego w Siedlcach? ShineCar obsługuje klientów z Siedlec i całego powiatu siedleckiego. Nasz warsztat znajduje się w Świderkach koło Łukowa — ok. 50 km od Siedlec.',
      'Dla klientów z Siedlec oferujemy pełen zakres usług: folie ochronne PPF, korekta lakieru, powłoki ceramiczne i elastomerowe, detailing wnętrza oraz mycie detailingowe. Możliwy jest również dojazd do klienta.',
      'Siedlce to jedno z największych miast wschodniej Polski. Wielu naszych stałych klientów dojeżdża do nas właśnie z Siedlec, ceniąc sobie jakość usług i konkurencyjne ceny w porównaniu z dużymi miastami.',
    ],
    distance: 'ok. 50 km od Siedlec',
    keywords: ['detailing Siedlce', 'folie PPF Siedlce', 'korekta lakieru Siedlce', 'powłoki ceramiczne Siedlce'],
  },
  {
    slug: 'detailing-miedzyrzec-podlaski',
    name: 'Międzyrzec Podlaski',
    metaTitle: 'Detailing Samochodowy Międzyrzec Podlaski — Folie PPF, Korekta',
    metaDescription:
      'Detailing samochodowy dla klientów z Międzyrzeca Podlaskiego. Folie PPF, korekta lakieru, powłoki ceramiczne. ShineCar — dojazd z Łukowa, ok. 30 km.',
    heading: 'Detailing Samochodowy Międzyrzec Podlaski',
    intro: [
      'Mieszkasz w Międzyrzecu Podlaskim i szukasz profesjonalnego detailingu? ShineCar obsługuje klientów z Międzyrzeca Podlaskiego i okolic. Nasz warsztat jest oddalony zaledwie ok. 30 km od Międzyrzeca.',
      'Oferujemy pełen zakres usług detailingu samochodowego: folie ochronne PPF (bezbarwne i kolorowe), korekta lakieru, powłoki ceramiczne i elastomerowe, detailing wnętrza oraz mycie detailingowe premium.',
      'Międzyrzec Podlaski to ważne miasto w regionie. Nasi klienci z Międzyrzeca cenią krótki czas dojazdu i profesjonalną obsługę na każdym etapie — od wyceny po odbiór pojazdu.',
    ],
    distance: 'ok. 30 km od Międzyrzeca Podlaskiego',
    keywords: ['detailing Międzyrzec Podlaski', 'folie PPF Międzyrzec', 'korekta lakieru Międzyrzec Podlaski'],
  },
  {
    slug: 'detailing-radzyn-podlaski',
    name: 'Radzyń Podlaski',
    metaTitle: 'Detailing Samochodowy Radzyń Podlaski — Folie PPF, Korekta',
    metaDescription:
      'Detailing samochodowy dla klientów z Radzynia Podlaskiego. Folie PPF, korekta lakieru, powłoki ceramiczne. ShineCar — dojazd z Łukowa, ok. 25 km.',
    heading: 'Detailing Samochodowy Radzyń Podlaski',
    intro: [
      'ShineCar świadczy usługi detailingu samochodowego dla klientów z Radzynia Podlaskiego i okolic. Nasz warsztat w Świderkach koło Łukowa jest oddalony zaledwie ok. 25 km od Radzynia.',
      'Dla klientów z Radzynia Podlaskiego oferujemy: folie ochronne PPF, folie kolorowe PPF, korektę lakieru, powłoki ceramiczne i elastomerowe, detailing wnętrza oraz mycie detailingowe. Możliwy jest dojazd do klienta.',
      'Radzyń Podlaski to piękne miasto z bogatą historią. Coraz więcej właścicieli samochodów z Radzynia decyduje się na profesjonalną ochronę lakieru folią PPF lub powłoką ceramiczną w naszym studiu.',
    ],
    distance: 'ok. 25 km od Radzynia Podlaskiego',
    keywords: ['detailing Radzyń Podlaski', 'folie PPF Radzyń Podlaski', 'korekta lakieru Radzyń Podlaski'],
  },
  {
    slug: 'detailing-garwolin',
    name: 'Garwolin',
    metaTitle: 'Detailing Samochodowy Garwolin — Folie PPF, Korekta Lakieru',
    metaDescription:
      'Detailing samochodowy dla klientów z Garwolina. Folie PPF, korekta lakieru, powłoki ceramiczne. ShineCar — dojazd z Łukowa, ok. 60 km.',
    heading: 'Detailing Samochodowy Garwolin',
    intro: [
      'ShineCar oferuje profesjonalny detailing samochodowy dla klientów z Garwolina i okolic. Nasz warsztat w Świderkach koło Łukowa znajduje się ok. 60 km od Garwolina — wygodny dojazd drogą krajową nr 76.',
      'Dla klientów z Garwolina realizujemy pełen zakres usług: folie ochronne PPF, korektę lakieru, powłoki ceramiczne i elastomerowe, detailing wnętrza oraz mycie detailingowe premium.',
      'Garwolin to ważne miasto na trasie Warszawa–Lublin. Coraz więcej właścicieli samochodów z Garwolina i powiatu garwolińskiego korzysta z naszych usług, doceniając profesjonalizm i konkurencyjne ceny.',
    ],
    distance: 'ok. 60 km od Garwolina',
    keywords: ['detailing Garwolin', 'folie PPF Garwolin', 'korekta lakieru Garwolin', 'powłoki ceramiczne Garwolin'],
  },
  {
    slug: 'detailing-biala-podlaska',
    name: 'Biała Podlaska',
    metaTitle: 'Detailing Samochodowy Biała Podlaska — Folie PPF, Korekta Lakieru',
    metaDescription:
      'Detailing samochodowy dla klientów z Białej Podlaskiej. Folie PPF, korekta lakieru, powłoki ceramiczne. ShineCar — dojazd z Łukowa, ok. 70 km.',
    heading: 'Detailing Samochodowy Biała Podlaska',
    intro: [
      'Szukasz profesjonalnego detailingu w Białej Podlaskiej? ShineCar obsługuje klientów z Białej Podlaskiej i całego regionu. Nasz warsztat w Świderkach koło Łukowa jest oddalony ok. 70 km od Białej Podlaskiej.',
      'Oferujemy kompletny zakres usług detailingowych: folie ochronne PPF (bezbarwne i kolorowe), korektę lakieru, powłoki ceramiczne i elastomerowe, detailing wnętrza oraz mycie detailingowe.',
      'Biała Podlaska to jedno z największych miast Lubelszczyzny. Nasi klienci z Białej Podlaskiej cenią jakość usług, indywidualne podejście i atrakcyjne ceny w porównaniu z salonami w dużych aglomeracjach.',
    ],
    distance: 'ok. 70 km od Białej Podlaskiej',
    keywords: ['detailing Biała Podlaska', 'folie PPF Biała Podlaska', 'korekta lakieru Biała Podlaska'],
  },
  {
    slug: 'detailing-ryki',
    name: 'Ryki',
    metaTitle: 'Detailing Samochodowy Ryki — Folie PPF, Korekta Lakieru',
    metaDescription:
      'Detailing samochodowy dla klientów z Ryk. Folie PPF, korekta lakieru, powłoki ceramiczne. ShineCar — dojazd z Łukowa, ok. 45 km.',
    heading: 'Detailing Samochodowy Ryki',
    intro: [
      'ShineCar oferuje profesjonalny detailing samochodowy dla klientów z Ryk i okolic. Nasz warsztat w Świderkach koło Łukowa znajduje się ok. 45 km od Ryk — wygodny dojazd drogą przez Adamów.',
      'Dla klientów z Ryk realizujemy pełen zakres usług: folie ochronne PPF, korektę lakieru, powłoki ceramiczne i elastomerowe, detailing wnętrza oraz mycie detailingowe premium.',
      'Ryki to dynamicznie rozwijające się miasto na trasie Lublin–Warszawa. Coraz więcej właścicieli samochodów z Ryk i powiatu ryckiego wybiera ShineCar, doceniając profesjonalną obsługę i konkurencyjne ceny w porównaniu z dużymi miastami.',
    ],
    distance: 'ok. 45 km od Ryk',
    keywords: ['detailing Ryki', 'folie PPF Ryki', 'korekta lakieru Ryki', 'powłoki ceramiczne Ryki'],
  },
  {
    slug: 'detailing-lubartow',
    name: 'Lubartów',
    metaTitle: 'Detailing Samochodowy Lubartów — Folie PPF, Korekta Lakieru',
    metaDescription:
      'Detailing samochodowy dla klientów z Lubartowa. Folie PPF, korekta lakieru, powłoki ceramiczne. ShineCar — dojazd z Łukowa, ok. 55 km.',
    heading: 'Detailing Samochodowy Lubartów',
    intro: [
      'Szukasz profesjonalnego detailingu samochodowego w Lubartowie? ShineCar obsługuje klientów z Lubartowa i całego powiatu lubartowskiego. Nasz warsztat w Świderkach koło Łukowa jest oddalony ok. 55 km od Lubartowa.',
      'Dla klientów z Lubartowa oferujemy kompletny zakres usług: folie ochronne PPF (bezbarwne i kolorowe), korektę lakieru, powłoki ceramiczne i elastomerowe, detailing wnętrza oraz mycie detailingowe.',
      'Lubartów to ważne miasto w województwie lubelskim. Nasi klienci z Lubartowa cenią wysoką jakość usług, indywidualne podejście do każdego pojazdu i atrakcyjne ceny w porównaniu z salonami w Lublinie.',
    ],
    distance: 'ok. 55 km od Lubartowa',
    keywords: ['detailing Lubartów', 'folie PPF Lubartów', 'korekta lakieru Lubartów', 'powłoki ceramiczne Lubartów'],
  },
];

export function getCityBySlug(slug: string): CityData | undefined {
  return cities.find((c) => c.slug === slug);
}

export function getAllCitySlugs(): string[] {
  return cities.map((c) => c.slug);
}
