export interface CityFaq {
  question: string;
  answer: string;
}

export interface CityData {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  heading: string;
  intro: string[];
  whyUs: string[];
  faq: CityFaq[];
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
    whyUs: [
      'Studio w bezpośrednim sąsiedztwie Łukowa — Świderki 155, bez korków i szukania parkingu.',
      'Produkty klasy premium — pracujemy na markach takich jak Gyeon i Ultrafit.',
      'Indywidualna wycena i podejście — każdy samochód traktujemy inaczej, bo każdy ma inny stan lakieru.',
      'Gwarancja na usługi — na folie PPF do 10 lat, na powłoki ceramiczne do 5 lat.',
    ],
    faq: [
      { question: 'Gdzie dokładnie znajduje się ShineCar?', answer: 'Nasz warsztat mieści się pod adresem Świderki 155, 21-411 — w bezpośrednim sąsiedztwie Łukowa, ok. 5 minut jazdy od centrum miasta.' },
      { question: 'Jakie są godziny otwarcia?', answer: 'Pracujemy od poniedziałku do piątku w godzinach 8:00–18:00 oraz w soboty 9:00–16:00. Wizytę najlepiej umówić telefonicznie.' },
      { question: 'Czy muszę zostawić auto na cały dzień?', answer: 'Zależy od usługi. Mycie detailingowe trwa 1,5–2h, korekta lakieru 1–3 dni, folia PPF 2–7 dni. Dokładny czas podamy przy wycenie.' },
      { question: 'Czy oferujecie dojazd do klienta?', answer: 'Tak — na terenie Łukowa i powiatu łukowskiego możemy odebrać i odwieźć samochód. Szczegóły ustalamy indywidualnie.' },
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
    whyUs: [
      'Wielu stałych klientów z Siedlec — znają nas i polecają dalej.',
      'Wygodny dojazd — ok. 50 km, niecała godzina jazdy drogą krajową.',
      'Ceny niższe niż w dużych miastach, przy tej samej jakości materiałów i wykonania.',
      'Możliwość odbioru i dostarczenia pojazdu na terenie Siedlec.',
    ],
    faq: [
      { question: 'Czy dojazd z Siedlec się opłaca?', answer: 'Tak — nasze ceny są konkurencyjne w stosunku do studiów w Warszawie czy Lublinie, a jakość materiałów i wykonania identyczna. Wielu klientów z Siedlec regularnie do nas dojeżdża.' },
      { question: 'Ile trwa dojazd z Siedlec?', answer: 'Dojazd z centrum Siedlec do naszego studia w Świderkach zajmuje ok. 45–55 minut drogą krajową.' },
      { question: 'Czy możecie odebrać auto z Siedlec?', answer: 'Tak, przy większych zleceniach (folia PPF, powłoka ceramiczna) możemy zorganizować odbiór i dostawę pojazdu. Koszt transportu ustalamy indywidualnie.' },
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
    whyUs: [
      'Zaledwie 30 km od Międzyrzeca — krótki dojazd, wygodna lokalizacja.',
      'Profesjonalne materiały — powłoki Gyeon i folie Ultrafit.',
      'Kompleksowa obsługa — od wyceny przez realizację po odbiór pojazdu.',
    ],
    faq: [
      { question: 'Jak daleko jest z Międzyrzeca do ShineCar?', answer: 'Nasz warsztat w Świderkach jest oddalony ok. 30 km od Międzyrzeca Podlaskiego — to ok. 25–30 minut jazdy.' },
      { question: 'Czy obsługujecie klientów z Międzyrzeca regularnie?', answer: 'Tak — mamy wielu stałych klientów z Międzyrzeca i okolic. Znamy specyfikę lokalnych dróg i typowe problemy z lakierem w tym regionie.' },
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
    whyUs: [
      'Tylko 25 km od Radzynia — najbliższe profesjonalne studio detailingu.',
      'Pełen zakres usług — od mycia detailingowego po pełne oklejenie folią PPF.',
      'Terminowość — ustalamy termin i się go trzymamy.',
    ],
    faq: [
      { question: 'Ile trwa dojazd z Radzynia Podlaskiego?', answer: 'Dojazd z Radzynia do naszego studia zajmuje ok. 20–25 minut. Jesteśmy jednym z najbliższych profesjonalnych studiów detailingu w regionie.' },
      { question: 'Czy oferujecie folie kolorowe PPF?', answer: 'Tak — oprócz bezbarwnych folii PPF oferujemy folie kolorowe, które pozwalają zmienić kolor samochodu z jednoczesną ochroną lakieru. To idealna alternatywa dla klasycznego oklejania.' },
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
    whyUs: [
      'Dojazd drogą krajową nr 76 — ok. 60 km, wygodna trasa.',
      'Konkurencyjne ceny — tańsze niż studia w Warszawie, identyczna jakość.',
      'Profesjonalne materiały renomowanych marek światowych.',
    ],
    faq: [
      { question: 'Czy warto jechać z Garwolina do ShineCar?', answer: 'Zdecydowanie — oferujemy ceny niższe niż studia w Warszawie, a używamy tych samych materiałów premium. Dojazd drogą krajową nr 76 zajmuje ok. 50–60 minut.' },
      { question: 'Czy mogę zostawić auto na kilka dni?', answer: 'Tak — przy większych usługach (folia PPF full body, korekta wieloetapowa) auto zostaje u nas 2–7 dni. Zapewniamy bezpieczne przechowywanie w zamkniętym warsztacie.' },
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
    whyUs: [
      'Obsługujemy klientów z całej Lubelszczyzny — Biała Podlaska to jedno z naszych głównych miast.',
      'Materiały premium — powłoki Gyeon i folie Ultrafit.',
      'Indywidualne podejście do każdego zlecenia.',
    ],
    faq: [
      { question: 'Jak daleko jest z Białej Podlaskiej?', answer: 'Nasz warsztat jest oddalony ok. 70 km od Białej Podlaskiej — to ok. 1 godziny jazdy. Przy większych zleceniach możemy zorganizować transport.' },
      { question: 'Czy detailing to dobry pomysł przed sprzedażą auta?', answer: 'Tak — profesjonalny detailing (korekta lakieru + powłoka) może podnieść wartość samochodu o kilka tysięcy złotych. Szczególnie warto zainwestować w korektę i czyszczenie wnętrza.' },
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
    whyUs: [
      'Wygodny dojazd przez Adamów — ok. 45 km.',
      'Pełen zakres usług detailingowych bez konieczności jazdy do Lublina.',
      'Materiały premium — Gyeon, Ultrafit i inne czołowe marki.',
    ],
    faq: [
      { question: 'Czy z Ryk warto dojeżdżać do ShineCar?', answer: 'Tak — oferujemy profesjonalne usługi detailingowe w cenach niższych niż studia w Lublinie. Dojazd z Ryk zajmuje ok. 40–45 minut.' },
      { question: 'Jakie usługi są najpopularniejsze wśród klientów z Ryk?', answer: 'Najczęściej zamawiają korektę lakieru z powłoką ceramiczną oraz folie ochronne PPF na przód pojazdu (pakiet Full Front).' },
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
    whyUs: [
      'Alternatywa dla drogich studiów w Lublinie — takie same materiały, niższe ceny.',
      'Ok. 55 km od Lubartowa — szybki dojazd.',
      'Gwarancja na usługi — folie PPF do 10 lat, powłoki do 5 lat.',
    ],
    faq: [
      { question: 'Czy jesteście tańsi niż studia w Lublinie?', answer: 'Tak — nasze ceny są konkurencyjne w porównaniu z Lublinem, a używamy tych samych materiałów premium (Gyeon, Ultrafit). Różnica w cenie to efekt niższych kosztów operacyjnych.' },
      { question: 'Ile trwa dojazd z Lubartowa?', answer: 'Dojazd z Lubartowa do naszego studia w Świderkach zajmuje ok. 50–55 minut.' },
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
