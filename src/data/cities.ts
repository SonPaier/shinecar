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
];

export function getCityBySlug(slug: string): CityData | undefined {
  return cities.find((c) => c.slug === slug);
}

export function getAllCitySlugs(): string[] {
  return cities.map((c) => c.slug);
}
