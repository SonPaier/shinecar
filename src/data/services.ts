export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface ServiceSection {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  tip?: string;
}

export interface ServiceData {
  slug: string;
  urlSlug: string;
  title: string;
  navTitle?: string;
  pageTitle?: string;
  metaTitle: string;
  metaDescription: string;
  description: string;
  content: string[];
  features: string[];
  sections?: ServiceSection[];
  price: string;
  duration: string;
  image: string;
  faq: ServiceFaq[];
  keywords: string[];
}

const serviceImage1 = 'https://cdn.builder.io/api/v1/image/assets%2Fa59c3b14b9b7404f8e5c72990dc66950%2Fa70409b6c6f74d1f8eef91a32c353e5c?format=webp&width=800';
const serviceImage2 = 'https://cdn.builder.io/api/v1/image/assets%2F75ea2179cd6f4e158ae5465605ccca73%2Faa9360e1636e474abf453627071b5f19?format=webp&width=800';
const serviceImage3 = 'https://cdn.builder.io/api/v1/image/assets%2F75ea2179cd6f4e158ae5465605ccca73%2F4381a02e8bfa475ab87e0a6da7f9e7fa?format=webp&width=800';
const serviceImage4 = 'https://cdn.builder.io/api/v1/image/assets%2Fa59c3b14b9b7404f8e5c72990dc66950%2F9013f21d74f14265a7e8ba266de2e2e9?format=webp&width=800';

export const services: ServiceData[] = [
  {
    slug: 'folie-ppf',
    urlSlug: 'folia-ppf-lukow',
    title: 'Folie Ochronne PPF',
    navTitle: 'Folia PPF',
    pageTitle: 'Folie Ochronne PPF Łuków – Detailing Klasy Premium',
    metaTitle: 'Folie Ochronne PPF Łuków — Bezbarwna Ochrona Lakieru',
    metaDescription:
      'Profesjonalna aplikacja folii ochronnej PPF w Łukowie. Bezbarwna folia chroni lakier przed odpryskami, rysami i uszkodzeniami. Gwarancja producenta do 10 lat.',
    description:
      'W codziennej eksploatacji lakier Twojego auta jest nieustannie wystawiony na próbę. Odpryski od kamieni, szkodliwe promieniowanie UV, kwaśne deszcze czy drobne zarysowania to zagrożenia, z którymi mierzy się każdy kierowca. W ShineCar w Łukowie oferujemy profesjonalną aplikację folii PPF (Paint Protection Film) – najskuteczniejszą na rynku barierę, która zapewnia lakierowi maksymalne bezpieczeństwo.',
    content: [
      'Folia PPF to luksusowa, niemal niewidoczna tarcza dla Twojego auta, działająca 24/7. Dzięki unikalnej konstrukcji nie tylko chroni przed uszkodzeniami mechanicznymi, ale również zachowuje salonowy wygląd pojazdu na lata. Zapraszamy właścicieli aut z Łukowa i okolic, którzy poszukują bezkompromisowej jakości i precyzji wykonania.',
    ],
    features: [
      'Ochrona przed odpryskami kamieni i rysami',
      'Samoregeneracja drobnych zarysowań',
      'Hydrofobowa powierzchnia ułatwiająca mycie',
      'Ochrona UV — brak żółknięcia lakieru',
      'Gwarancja producenta do 10 lat',
      'Możliwość demontażu bez uszkodzenia lakieru',
    ],
    sections: [
      {
        heading: 'Kluczowe korzyści z wyboru folii PPF w ShineCar',
        bullets: [
          'Samoregeneracja (Self-Healing): Pod wpływem ciepła (słońca lub gorącej wody) drobne rysy i zadrapania na folii znikają samoistnie.',
          'Pancerne zabezpieczenie: Skuteczna ochrona przed odpryskami, solą drogową i uderzeniami kamieni.',
          'Trwałość na dekadę: Przy odpowiedniej pielęgnacji folia chroni lakier nawet do 10 lat.',
          'Właściwości hydrofobowe: Powierzchnia odpycha wodę i brud, co sprawia, że mycie auta staje się znacznie prostsze.',
          'Ochrona przed chemią i UV: Zapobiega blaknięciu, żółknięciu oraz matowieniu lakieru pod wpływem słońca i agresywnych kosmetyków.',
          'Wzrost wartości: Zabezpieczony pojazd utrzymuje idealny stan wizualny, co bezpośrednio przekłada się na wyższą cenę przy odsprzedaży.',
        ],
      },
      {
        heading: 'Personalizacja: Bezbarwne, Matowe i Kolorowe Folie PPF',
        paragraphs: ['W ShineCar stawiamy na indywidualne podejście. Oferujemy różne warianty zabezpieczenia, dopasowane do Twoich potrzeb estetycznych:'],
        bullets: [
          'Bezbarwne Folie PPF: Klasyczna, dyskretna ochrona, która nadaje lakierowi głęboki połysk i niesamowitą klarowność.',
          'Matowe Folie PPF: Idealne rozwiązanie dla osób chcących nadać swojemu autu elegancki, satynowy wygląd przy jednoczesnym zachowaniu pełnej ochrony.',
          'Kolorowe Folie PPF: Innowacyjne połączenie pełnej ochrony lakieru z całkowitą zmianą koloru nadwozia. To personalizacja bez kompromisów w kwestii trwałości.',
        ],
        tip: 'Dla uzyskania spektakularnego efektu i jeszcze łatwiejszego czyszczenia, oferujemy połączenie folii PPF z powłoką ceramiczną. To duet, który gwarantuje najwyższy możliwy standard ochrony i estetyki.',
      },
      {
        heading: 'Pakiety Ochronne i Proces Aplikacji',
        paragraphs: ['Każdy proces w naszym studio w Łukowie zaczynamy od drobiazgowego mycia detailingowego oraz dekontaminacji. Musimy uzyskać idealnie czystą bazę, aby folia przylegała perfekcyjnie, bez żadnych pęcherzyków powietrza czy zanieczyszczeń.', 'Dostępne konfiguracje:'],
        bullets: [
          'PPF Front (Bikini Cut): Zabezpieczenie najbardziej narażonych elementów, takich jak przód maski, zderzak i lusterka.',
          'PPF Full Front: Kompleksowa ochrona całej maski, zderzaka, reflektorów i błotników – chroni do 70% powierzchni najbardziej narażonej na uderzenia.',
          'Pakiet Full Body: Całkowite oklejenie nadwozia dla maksymalnego bezpieczeństwa każdego centymetra lakieru.',
          'Indywidualna konfiguracja: Możemy zabezpieczyć wybrane detale, np. progi załadunkowe, wnęki klamek czy słupki Piano Black.',
        ],
      },
      {
        heading: 'Dlaczego warto wybrać ShineCar Łuków?',
        paragraphs: [
          'Aplikacja folii na nowe auta to najlepsza inwestycja, jaką możesz podjąć tuż po wyjeździe z salonu. W ShineCar dbamy o to, by Twój samochód był chroniony od pierwszego kilometra. Jako eksperci z wieloletnim doświadczeniem w detailingu premium, gwarantujemy precyzyjny montaż, dbałość o detale oraz obsługę na najwyższym poziomie.',
          'Twój lakier zasługuje na najlepszą opiekę. Postaw na technologię premium i ciesz się perfekcyjnym wyglądem swojego auta każdego dnia.',
          'Chcesz poznać wycenę dla swojego modelu? Skontaktuj się z nami i umów się na wizytę w ShineCar Łuków!',
        ],
      },
    ],
    price: 'Full Front: od 4 500 zł | Full Body: od 10 000 zł',
    duration: '2–7 dni roboczych',
    image: serviceImage3,
    faq: [
      {
        question: 'Ile kosztuje oklejenie samochodu folią PPF w Łukowie?',
        answer:
          'Koszt oklejenia frontu (Full Front) to od 4 500 zł, a całego pojazdu (Full Body) od 10 000 zł netto. Cena zależy od rozmiaru auta, wybranej folii i zakresu prac.',
      },
      {
        question: 'Jak długo trwa aplikacja folii PPF?',
        answer:
          'Zabezpieczenie frontu trwa 2–3 dni robocze. Pełne oklejenie pojazdu wymaga 5–7 dni roboczych, ponieważ każdy element jest precyzyjnie dopasowywany.',
      },
      {
        question: 'Czy folia PPF zmienia wygląd lakieru?',
        answer:
          'Nie — folia PPF jest w pełni przezroczysta i nie wpływa na kolor lakieru. Dostępna jest również w wersji matowej, jeśli chcesz zmienić wykończenie na satynowe.',
      },
      {
        question: 'Jak dbać o samochód z folią PPF?',
        answer:
          'Samochód z folią PPF myjesz tak samo jak bez niej. Unikaj myjni szczotkowych w pierwszych 2 tygodniach. Folia jest odporna na większość środków chemicznych stosowanych w myjniach.',
      },
    ],
    keywords: ['folie PPF Łuków', 'folia ochronna samochód', 'oklejanie folią PPF', 'paint protection film'],
  },
  {
    slug: 'korekta-lakieru',
    urlSlug: 'korekta-lakieru-lukow',
    navTitle: 'Korekta lakieru',
    title: 'Korekta Lakieru',
    pageTitle: 'Profesjonalna Renowacja i Korekta Lakieru w ShineCar',
    metaTitle: 'Korekta Lakieru Łuków — Polerowanie i Usuwanie Rys',
    metaDescription:
      'Profesjonalna korekta lakieru w Łukowie. Usuwamy rysy, hologramy i oksydację. Przywracamy fabryczny połysk lakieru. Korekta jedno- i dwustopniowa.',
    description:
      'Twoje auto straciło swój salonowy blask? Codzienna eksploatacja, szczotki na myjniach automatycznych czy agresywna chemia zostawiają na karoserii trwały ślad w postaci zmatowień, hologramów i siatki mikrorys. W ShineCar przywracamy lakierowi jego pierwotną głębię i nieskazitelną gładkość. Profesjonalna korekta lakieru to proces, który nie tylko odmładza wizualnie pojazd, ale przede wszystkim eliminuje defekty strukturalne wierzchniej warstwy bezbarwnej.',
    content: [
      'Zapraszamy kierowców dbających o detale z całego regionu: Detailing Łuków, Detailing Siedlce, Detailing Międzyrzec Podlaski oraz Detailing Radzyń Podlaski. Twoje auto zasługuje na drugie życie!',
    ],
    features: [
      'Usunięcie rys i hologramów',
      'Przywrócenie fabrycznego połysku',
      'Pomiar grubości lakieru przed korektą',
      'Ochrona przed UV i oksydacją',
      'Przygotowanie pod powłokę lub folię PPF',
      'Korekta jedno- i dwustopniowa',
    ],
    sections: [
      {
        heading: 'Jak przebiega proces odnowy lakieru w ShineCar?',
        paragraphs: ['Zamiast zwykłego polerowania, oferujemy wieloetapowy proces renowacji, który dopasowujemy do indywidualnego stanu powłoki Twojego samochodu.'],
        bullets: [
          'Dekontaminacja i przygotowanie: Zaczynamy od wieloetapowego mycia detailingowego. Usuwamy osady metaliczne, smołę oraz soki z drzew, tworząc idealnie czystą bazę do dalszych prac.',
          'Precyzyjna inspekcja: Przy użyciu profesjonalnych mierników sprawdzamy grubość lakieru w kilkudziesięciu punktach nadwozia. Dzięki temu wiemy, na jak głęboką korektę możemy sobie pozwolić, dbając o bezpieczeństwo Twojego auta.',
          'Dobór technologii: Pracujemy na maszynach polerskich klasy premium i sprawdzonych pastach. W zależności od potrzeb wykonujemy korektę jednoetapową (odświeżenie typu One-Step) lub pełną, wieloetapową renowację, która usuwa do 95% niedoskonałości.',
        ],
      },
      {
        heading: 'Kiedy warto odwiedzić nasze studio?',
        paragraphs: ['Renowacja lakieru to inwestycja, która zwraca się natychmiastowo. Polecamy ją szczególnie w sytuacjach takich jak:'],
        bullets: [
          'Przygotowanie auta do sprzedaży: Odświeżony lakier znacząco podnosi wartość rynkową pojazdu.',
          'Zakup auta używanego: Usuwamy ślady po poprzednim właścicielu, przywracając efekt "jak z salonu".',
          'Sezonowa regeneracja: Po zimie, gdy lakier jest zmatowiały od soli i piasku, warto zafundować mu profesjonalne spa.',
          'Pielęgnacja aut luksusowych i matowych: Specjalizujemy się w trudnych lakierach, wymagających unikalnej wiedzy i precyzji.',
        ],
      },
      {
        heading: 'Dlaczego ShineCar to najlepszy wybór w regionie?',
        paragraphs: ['Nasze studio to miejsce, gdzie pasja spotyka się z technologią. Obsługujemy klientów szukających usług takich jak Detailing Siedlce czy Detailing Radzyń Podlaski, gwarantując standard premium niezależnie od modelu auta.'],
        bullets: [
          'Bezpieczeństwo przede wszystkim: Każdy etap polerowania kontrolujemy pod specjalistycznym oświetleniem LED, co eliminuje ryzyko powstawania hologramów.',
          'Ochrona po korekcie: Po przywróceniu blasku rekomendujemy zabezpieczenie powierzchni. W naszej ofercie znajdziesz trwałe powłoki ceramiczne, grafenowe oraz elastomerowe, które utrwalą efekt na lata.',
          'Lokalny ekspert: Jesteśmy blisko Ciebie. Mieszkańcy Międzyrzeca Podlaskiego oraz Łukowa mogą liczyć na fachowe doradztwo i terminowość.',
        ],
      },
    ],
    price: 'od 1 000 zł do 2 700 zł',
    duration: '1–3 dni roboczych',
    image: serviceImage4,
    faq: [
      {
        question: 'Czy korekta lakieru usuwa głębokie rysy?',
        answer:
          'Korekta pozwala usunąć rysy powierzchniowe w obrębie lakieru bezbarwnego. Jeśli rysa sięga do podkładu lub blachy, zaproponujemy odpowiedni system zaprawek lub doradzimy inne rozwiązanie.',
      },
      {
        question: 'Czy polerowanie osłabia lakier?',
        answer:
          'W ShineCar pracujemy w sposób konserwatywny. Dzięki dokładnym pomiarom grubości (z precyzją do 1 mikrona), usuwamy tylko tyle warstwy, ile jest niezbędne do zniwelowania rys, zachowując maksymalną trwałość powłoki.',
      },
      {
        question: 'Jak przygotować auto przed wizytą w studio?',
        answer:
          'Zalecamy umycie auta szamponem o neutralnym pH i unikanie woskowania na ok. 14 dni przed planowanym terminem. Resztą zajmiemy się my!',
      },
    ],
    keywords: ['korekta lakieru Łuków', 'polerowanie lakieru', 'usuwanie rys z lakieru', 'polerowanie maszynowe'],
  },
  {
    slug: 'powloki-ceramiczne',
    urlSlug: 'powloka-ceramiczna-lukow',
    navTitle: 'Powłoka ceramiczna',
    title: 'Powłoki Ceramiczne',
    pageTitle: 'Powłoka ceramiczna na samochód Łuków',
    metaTitle: 'Powłoka Ceramiczna Łuków - Cena od 1000 zł, Gwarancja do 5 lat',
    metaDescription:
      'Powłoka ceramiczna na samochód w Łukowie. Cena od 1000 zł, gwarancja do 5 lat. Hydrofobowość, ochrona UV, głębia koloru. Zadzwoń: 782 195 321.',
    description:
      'Lakier samochodowy jest nieustannie wystawiony na próbę. Promieniowanie UV, kwaśne deszcze, sól drogowa czy ptasie odchody to codzienność, która niszczy strukturę karoserii. Aby zapewnić autu długotrwałą ochronę i podkreślić jego estetykę, w ShineCar w Łukowie oferujemy profesjonalną aplikację powłok ceramicznych. To rozwiązanie od lat uznawane za standard w detailingu premium, tworzące na samochodzie twardą, przezroczystą warstwę ochronną.',
    content: [
      'Jeśli planujesz położenie powłoki ceramicznej na swój samochód i mieszkasz w Łukowie, Siedlcach, Międzyrzecu Podlaskim czy Radzyniu Podlaskim, nasze studio to miejsce, gdzie technologia łączy się z pasją do motoryzacji.',
    ],
    features: [
      'Gwarancja 36–60 miesięcy (zależnie od pakietu)',
      'Ekstremalny połysk i głębia koloru',
      'Hydrofobowość — woda spływa w kroplach',
      'Ochrona przed UV, chemikaliami i zanieczyszczeniami',
      'Top coat dla maksymalnej śliskości',
      'Opcje dla felg, szyb i plastików',
    ],
    sections: [
      {
        heading: 'Powłoka ceramiczna na samochód - co daje i czy się opłaca?',
        paragraphs: ['Ceramika to nie wosk – to tarcza, która wnika w mikropory lakieru, tworząc z nim trwałe wiązanie chemiczne. Dzięki swojej unikalnej strukturze nadaje karoserii niesamowitą twardość i odporność na czynniki zewnętrzne. Wybierając powłokę w ShineCar, zyskujesz:'],
        bullets: [
          'Ochronę przed chemią i naturą: Ceramika minimalizuje ryzyko korozji oraz powstawania trwałych wżerów po ptasich odchodach czy owadach.',
          'Blokadę promieni UV: Lakier nie blaknie na słońcu, a kolor pozostaje nasycony i świeży przez lata.',
          'Efekt lustra: Powłoka wydobywa głębię koloru i nadaje mu wyjątkowy połysk, tzw. "wet look".',
          'Łatwiejszą pielęgnację: Dzięki silnym właściwościom hydrofobowym woda i brud spływają po powierzchni, co sprawia, że codzienne mycie auta staje się szybkie i przyjemne.',
          'Wzrost twardości: Zwiększasz odporność lakieru na drobne zarysowania i mikrouszkodzenia powstałe podczas eksploatacji.',
        ],
      },
      {
        heading: 'Jak wygląda aplikacja powłoki ceramicznej krok po kroku?',
        paragraphs: ['W ShineCar proces zabezpieczania auta jest niezwykle precyzyjny i trwa zazwyczaj od 2 do 4 dni. Nie chodzimy na skróty, ponieważ trwałość powłoki zależy od przygotowania powierzchni.'],
        bullets: [
          'Mycie i dekontaminacja: Zaczynamy od dokładnego oczyszczenia lakieru z osadów metalicznych, smoły i innych zanieczyszczeń.',
          'Korekta lakieru: Aby uzyskać idealną gładkość i blask, przeprowadzamy polerowanie maszynowe, usuwając drobne rysy i hologramy.',
          'Aplikacja powłoki SiO2: Precyzyjnie nakładamy warstwy ochronne nie tylko na lakier, ale również – na życzenie – na felgi, szyby czy elementy z tworzyw sztucznych.',
          'Utwardzanie: Pojazd pozostaje w kontrolowanych warunkach, aby powłoka mogła w pełni związać się z lakierem, co gwarantuje jej trwałość nawet do 5-7 lat.',
        ],
      },
      {
        heading: 'Powłoka ceramiczna w Łukowie i okolicach',
        paragraphs: [
          'Jeśli szukasz trwałego zabezpieczenia i chcesz, aby Twój samochód wyróżniał się na drogach w okolicach Siedlec, Radzynia Podlaskiego czy Międzyrzeca Podlaskiego – zapraszamy do kontaktu. W ShineCar w Łukowie dopasujemy najlepsze rozwiązanie do Twoich potrzeb.',
        ],
      },
    ],
    price: 'od 1 000 zł do 2 800 zł',
    duration: '2–4 dni',
    image: serviceImage1,
    faq: [
      {
        question: 'Ile kosztuje powłoka ceramiczna na samochód?',
        answer:
          'Cena powłoki ceramicznej w ShineCar zaczyna się od 1000 zł i sięga do 2800 zł. Zależy od rozmiaru pojazdu, wybranego pakietu i tego, czy potrzebna jest wcześniejsza korekta lakieru.',
      },
      {
        question: 'Jak długo trzyma powłoka ceramiczna?',
        answer:
          'Powłoka ceramiczna w zależności od pakietu utrzymuje się od 3 do 5 lat. Przy odpowiedniej pielęgnacji (mycie ręczne, unikanie myjni szczotkowych) trwałość może być jeszcze dłuższa.',
      },
      {
        question: 'Czy powłoka ceramiczna się opłaca?',
        answer:
          'Tak. Powłoka ceramiczna chroni lakier przed UV, ptasimi odchodami, solą i chemią drogową. Ułatwia mycie, bo brud i woda spływają z powierzchni. Samochód dłużej wygląda jak nowy, co przekłada się też na wyższą wartość przy odsprzedaży.',
      },
      {
        question: 'Ile trwa aplikacja powłoki ceramicznej?',
        answer:
          'Dla aut osobowych proces trwa 2-3 dni. W przypadku SUV-ów lub vanów może się wydłużyć do 4-5 dni ze względu na większą powierzchnię i czas utwardzania.',
      },
      {
        question: 'Czy powłoka ceramiczna zmienia kolor lakieru?',
        answer:
          'Nie, ceramika jest w pełni przezroczysta. Wyciąga głębię koloru i nadaje efekt "mokrego" połysku, ale nie zmienia odcienia lakieru.',
      },
    ],
    keywords: ['powłoka ceramiczna Łuków', 'powłoka ceramiczna cena', 'powłoka ceramiczna na samochód', 'ceramic coating Łuków', 'powłoka SiO2', 'ile kosztuje powłoka ceramiczna', 'powłoki ceramiczne Łuków', 'zabezpieczenie lakieru'],
  },
  {
    slug: 'powloki-elastomerowe',
    urlSlug: 'powloka-elastomerowa-lukow',
    navTitle: 'Powłoka elastomerowa',
    title: 'Powłoki Elastomerowe',
    pageTitle: 'Powłoka elastomerowa Łuków – Nowa era ochrony lakieru w ShineCar',
    metaTitle: 'Powłoki Elastomerowe Łuków — Najtrwalsza Ochrona Lakieru',
    metaDescription:
      'Powłoki elastomerowe w Łukowie. Samoregeneracja, totalna hydrofobowość i gwarancja do 7 lat. Technologia przewyższająca klasyczną ceramikę. ShineCar Łuków.',
    description:
      'Szukasz ochrony, która potrafi więcej niż klasyczna ceramika? W ShineCar Łuków wprowadzamy technologię przyszłości – powłoki elastomerowe. To najbardziej zaawansowane zabezpieczenie lakieru, które łączy ekstremalną odporność z niespotykaną elastycznością.',
    content: [
      'Powłoka elastomerowa to inteligentna warstwa ochronna oparta na nanocząsteczkach elastomeru. W przeciwieństwie do tradycyjnych rozwiązań, elastomer tworzy na powierzchni lakieru trwałe wiązania molekularne, które nie tylko chronią, ale pracują razem z lakierem. Jest to bariera odporna na mikrozarysowania, chemię drogową i promieniowanie UV.',
    ],
    features: [
      'Samoregeneracja drobnych zarysowań pod wpływem ciepła',
      'Totalna hydrofobowość — woda i brud uciekają z lakieru',
      'Odporność na chemię drogową, sól i ptasie odchody',
      'Głębia koloru i „mokry" połysk',
      'Gwarancja trwałości do 7 lat',
      'Elastyczność — lepsza absorpcja uderzeń niż ceramika',
    ],
    sections: [
      {
        heading: 'Dlaczego elastomer wygrywa z powłoką ceramiczną?',
        paragraphs: [
          'Choć ceramika jest świetnym rozwiązaniem, powłoki elastomerowe oferują korzyści, których nie znajdziesz nigdzie indziej:',
        ],
        bullets: [
          'Samoregeneracja i elastyczność: Elastomer jest elastyczny, co sprawia, że lepiej absorbuje uderzenia i jest odporny na mikropęknięcia. Wiele powłok tego typu wykazuje właściwości samonaprawcze pod wpływem ciepła.',
          'Totalna hydrofobowość: Woda i brud dosłownie uciekają z lakieru. Dzięki temu mycie auta staje się czystą przyjemnością, a samochód znacznie dłużej pozostaje czysty.',
          'Odporność na „chemię": Elastomer wykazuje potężną odporność na agresywne środki czyszczące, sól drogową oraz soki z drzew i ptasie odchody, które są zmorą każdego kierowcy.',
          'Głębia koloru: Powłoka nadaje lakierowi niesamowity, „mokry" połysk, który podkreśla każdą linię nadwozia Twojego samochodu.',
        ],
      },
      {
        heading: 'Korzyści z wyboru elastomeru w ShineCar Łuków',
        bullets: [
          'Długoterminowa gwarancja: Oferujemy pakiety zabezpieczenia z pisemną gwarancją trwałości od 3 do nawet 7 lat.',
          'Ochrona przed blaknięciem: Blokada promieni UV sprawia, że Twój lakier zachowa fabryczną intensywność koloru przez lata.',
          'Wzrost wartości auta: Samochód z udokumentowanym zabezpieczeniem elastomerowym to pewniejsza sprzedaż i wyższa cena w przyszłości.',
          'Łatwość eksploatacji: Zapomnij o uciążliwym szorowaniu – brud nie ma punktu zaczepienia.',
        ],
      },
      {
        heading: 'Postaw na technologię premium w swoim mieście',
        paragraphs: [
          'W ShineCar Łuków nie uznajemy kompromisów. Aplikacja powłoki elastomerowej to proces wymagający precyzji i odpowiednich warunków, które zapewniamy w naszym studio.',
          'Chcesz poczuć gładkość lakieru, jakiej jeszcze nie znałeś? Skontaktuj się z nami i zapytaj o wolny termin na zabezpieczenie elastomerem. Twoje auto zasługuje na najlepszą ochronę dostępną na rynku.',
        ],
      },
    ],
    price: 'od 1 800 zł do 2 800 zł',
    duration: '2–4 dni',
    image: serviceImage1,
    faq: [
      {
        question: 'Czym powłoka elastomerowa różni się od ceramicznej?',
        answer:
          'Powłoka elastomerowa jest bardziej elastyczna niż ceramika, co oznacza lepszą absorpcję uderzeń i odporność na mikropęknięcia. Posiada też właściwości samonaprawcze pod wpływem ciepła, czego klasyczna ceramika nie oferuje.',
      },
      {
        question: 'Jak długo utrzymuje się powłoka elastomerowa?',
        answer:
          'W zależności od wybranego pakietu, powłoka elastomerowa utrzymuje się od 3 do 7 lat. Oferujemy pakiety 3-letnie, 5-letnie i 7-letnie z pisemną gwarancją trwałości.',
      },
      {
        question: 'Czy powłoka elastomerowa wymaga specjalnej pielęgnacji?',
        answer:
          'Nie — dzięki silnym właściwościom hydrofobowym codzienne utrzymanie auta w czystości jest łatwiejsze niż kiedykolwiek. Zalecamy jedynie mycie bezpieczną metodą detailingową i unikanie myjni szczotkowych.',
      },
      {
        question: 'Ile kosztuje powłoka elastomerowa w ShineCar Łuków?',
        answer:
          'Koszt powłoki elastomerowej zależy od wybranego pakietu gwarancyjnego: 3 lata od 1 800 zł, 5 lat od 2 300 zł, 7 lat od 2 800 zł netto. Cena może się różnić w zależności od rozmiaru pojazdu.',
      },
    ],
    keywords: ['powłoka elastomerowa Łuków', 'powłoki elastomerowe', 'zabezpieczenie lakieru Łuków', 'ochrona lakieru'],
  },
  {
    slug: 'detailing-wnetrza',
    urlSlug: 'detailing-wnetrza-lukow',
    navTitle: 'Detailing wnętrza',
    title: 'Detailing Wnętrza',
    pageTitle: 'Detailing i profesjonalna pielęgnacja samochodów w ShineCar',
    metaTitle: 'Detailing Wnętrza Łuków — Profesjonalne Czyszczenie Samochodu',
    metaDescription:
      'Kompleksowy detailing wnętrza samochodu w Łukowie. Czyszczenie tapicerki, pielęgnacja skóry, odświeżanie wnętrza. Profesjonalne produkty i efekt jak nowy.',
    description:
      'W ShineCar wierzymy, że Twój samochód zasługuje na znacznie więcej niż tylko wizytę na standardowej myjni. Nasze studio w Łukowie to miejsce, gdzie przywracamy pojazdom ich salonowy blask, głębię koloru i nieskazitelną świeżość. Oferujemy kompleksowe usługi detailingu – od precyzyjnego oczyszczania nadwozia, przez renowację wnętrz, aż po zaawansowaną konserwację skór i aplikację luksusowych wosków. Dbamy o każdy milimetr powierzchni, stosując techniki bezpieczne dla lakieru klasy premium.',
    content: [
      'Jeśli szukasz miejsca, w którym profesjonalne położenie wosku, czyszczenie tapicerki czy detailingowe mycie auta w okolicach Siedlec, Radzynia Podlaskiego czy Międzyrzeca Podlaskiego zostanie wykonane z najwyższą starannością – ShineCar w Łukowie jest do Twojej dyspozycji.',
    ],
    features: [
      'Czyszczenie tapicerki materiałowej i skórzanej',
      'Ekstrakcja gorącą parą',
      'Pielęgnacja skóry naturalnej',
      'Odświeżanie plastików i elementów dekoracyjnych',
      'Usuwanie zapachów i plam',
      'Czyszczenie szyb od wewnątrz',
    ],
    sections: [
      {
        heading: 'Mycie detailingowe: Perfekcja ukryta w detalu',
        paragraphs: ['Standardowe mycie często maskuje brud lub, co gorsza, niszczy lakier powstawaniem mikrozarysowań. Nasze mycie detailingowe to wieloetapowy, bezpieczny proces technologiczny. Usuwamy zanieczyszczenia, których nie widać gołym okiem, dbając o nienaganną kondycję powłoki lakierniczej.'],
        bullets: [
          'Technika "na dwa wiadra": Korzystamy z separatorów brudu i profesjonalnych rękawic z mikrofibry, co eliminuje ryzyko porysowania lakieru.',
          'Aktywna piana i pędzelkowanie: Docieramy do najtrudniej dostępnych miejsc – wnęk, emblematów, uszczelek i grilli.',
          'Bezpieczna chemia: Pracujemy wyłącznie na certyfikowanych środkach pH-neutralnych, które są bezpieczne dla chromów, gum i delikatnych wykończeń.',
        ],
        tip: 'To idealna baza pod dalsze kroki, takie jak korekta lakieru, aplikacja ceramiki czy montaż folii PPF.',
      },
      {
        heading: 'Detailing wnętrza: Komfort i sterylna czystość',
        paragraphs: [
          'Wnętrze samochodu to Twoja strefa komfortu. Nasza usługa detailingu kabiny przywraca jej fabryczną estetykę i eliminuje uciążliwe zabrudzenia, osady oraz nieprzyjemne zapachy.',
          'Pracujemy z milimetrową precyzją, dopasowując techniki do rodzaju materiałów – od nowoczesnych tworzyw i elementów dekoracyjnych (Piano Black), po klasyczną tapicerkę materiałową. Efektem jest wnętrze, które nie tylko wygląda perfekcyjnie, ale zapewnia najwyższą higienę i przyjemność z każdej podróży przez Siedlce, Łuków czy Radzyń Podlaski.',
        ],
      },
      {
        heading: 'Czyszczenie i konserwacja skór: Luksus pod ochroną',
        paragraphs: ['Tapicerka skórzana wymaga specjalistycznego podejścia. W ShineCar przywracamy skórze jej naturalną miękkość, matowe wykończenie i elastyczność. Proces ten zapobiega:'],
        bullets: [
          'Wysychaniu i pękaniu materiału.',
          'Przebarwieniom od odzieży (np. jeansów).',
          'Przedwczesnemu zużyciu i wycieraniu się lica.',
        ],
        tip: 'Używamy dedykowanych cleanerów, które wyciągają brud z porów skóry, a następnie zabezpieczamy ją odżywczymi balsamami. Twoje fotele odzyskają luksusowy charakter i będą chronione przed codzienną eksploatacją.',
      },
      {
        heading: 'Dekontaminacja lakieru: Przygotowanie powierzchni',
        paragraphs: [
          'Często po myciu lakier nadal wydaje się szorstki pod ręką. To zasługa "wrośniętych" zanieczyszczeń, takich jak lotna rdza, smoła, soki z drzew czy drobiny asfaltu. Dekontaminacja to specjalistyczny zabieg chemicznego i mechanicznego oczyszczania powierzchni. Przywracamy lakierowi idealną gładkość, co jest kluczowe przed aplikacją wosku lub powłok ochronnych. Czysty lakier to lepsza przyczepność zabezpieczeń i wyraźnie głębszy blask.',
        ],
      },
      {
        heading: 'Luksusowe woskowanie: Klasyka w wydaniu premium',
        paragraphs: ['Dla miłośników naturalnego, "tłustego" blasku oferujemy profesjonalne woskowanie. Wysokiej jakości woski carnauba lub syntetyczne sealanty tworzą na lakierze warstwę hydrofobową, która:'],
        bullets: [
          'Chroni przed UV: Zapobiega utlenianiu się lakieru.',
          'Ułatwia mycie: Woda i kurz znacznie słabiej przywierają do nadwozia.',
          'Podbija głębię koloru: Szczególnie na ciemnych lakierach uzyskujemy niesamowity efekt wizualny.',
        ],
        tip: 'To doskonała opcja dla tych, którzy chcą eleganckiego zabezpieczenia i chcą, aby ich auto prezentowało się nienagannie na ulicach Międzyrzeca Podlaskiego czy Łukowa.',
      },
      {
        heading: 'Chcesz poczuć różnicę w jakości pielęgnacji?',
        paragraphs: [
          'Zarezerwuj termin w ShineCar i przekonaj się, jak wygląda prawdziwy detailing w profesjonalnym wydaniu.',
        ],
      },
    ],
    price: 'od 250 zł',
    duration: '4–5 godzin',
    image: serviceImage2,
    faq: [
      {
        question: 'Jak długo trwa detailing wnętrza?',
        answer:
          'Standardowy detailing wnętrza trwa 4–5 godzin. Czas może się wydłużyć w przypadku mocno zabrudzonych wnętrz lub konieczności usuwania uporczywych zapachów.',
      },
      {
        question: 'Czy detailing wnętrza usunie zapach papierosów?',
        answer:
          'Tak — stosujemy ozonowanie i specjalistyczne neutralizatory zapachów, które skutecznie eliminują zapach papierosów i inne nieprzyjemne zapachy z wnętrza samochodu.',
      },
      {
        question: 'Jak często robić detailing wnętrza?',
        answer:
          'Zalecamy detailing wnętrza 1–2 razy w roku. Regularne czyszczenie zapobiega utrwalaniu się zabrudzeń i utrzymuje wnętrze w idealnym stanie.',
      },
    ],
    keywords: ['detailing wnętrza Łuków', 'czyszczenie wnętrza samochodu', 'pranie tapicerki samochodowej'],
  },
  {
    slug: 'folie-kolorowe-ppf',
    urlSlug: 'folia-kolorowa-ppf-lukow',
    navTitle: 'Folia kolorowa PPF',
    title: 'Folie Kolorowe PPF',
    pageTitle: 'Zmiana koloru auta folią PPF w ShineCar – Styl i Ochrona w Jednym',
    metaTitle: 'Folie Kolorowe PPF Łuków — Zmiana Koloru Folią Ochronną',
    metaDescription:
      'Zmiana koloru samochodu folią kolorową PPF w Łukowie. Folie kolorowe łączą zmianę wyglądu z ochroną lakieru. Szeroki wybór kolorów i wykończeń.',
    description:
      'Marzysz o całkowitej metamorfozie swojego samochodu, ale boisz się ingerencji w fabryczny lakier? Zmiana koloru auta za pomocą kolorowej folii PPF to przełomowe rozwiązanie, które pozwala na spektakularną przemianę wizualną przy jednoczesnym zapewnieniu najwyższego poziomu ochrony karoserii. W ShineCar oferujemy paletę barw i wykończeń, które nadadzą Twojemu pojazdowi unikalny charakter – od głębokich matów i satyn, po nowoczesne efekty metaliczne, perłowe, a nawet strukturę karbonu czy szczotkowanego aluminium.',
    content: [
      'Jeśli rozważasz zmianę koloru samochodu folią i mieszkasz w Łukowie, Siedlcach, Radzyniu Podlaskim czy Międzyrzecu Podlaskim, nasze studio zaoferuje Ci precyzję wykonania, której nie znajdziesz w standardowych zakładach zajmujących się zwykłym wrappingiem.',
    ],
    features: [
      'Zmiana koloru bez lakierowania',
      'Pełna ochrona lakieru jak bezbarwna PPF',
      'Szeroki wybór kolorów i wykończeń',
      'Samoregeneracja drobnych rys',
      'Możliwość demontażu — powrót do oryginału',
      'Zachowanie wartości pojazdu',
    ],
    sections: [
      {
        heading: 'Kolorowa folia PPF – Coś więcej niż zwykły winyl',
        paragraphs: ['Większość firm oferuje zmianę koloru za pomocą cienkich folii winylowych. W ShineCar idziemy o krok dalej, stosując kolorowe folie PPF (Paint Protection Film). To rozwiązanie "2 w 1", które łączy estetykę z ekstremalną wytrzymałością.', 'Dlaczego warto wybrać zmianę koloru właśnie u nas?'],
        bullets: [
          'Pancerna tarcza: W przeciwieństwie do zwykłych folii do zmiany koloru, kolorowy PPF jest znacznie grubszy. Chroni lakier przed odpryskami od kamieni, zarysowaniami parkingowymi i aktami wandalizmu.',
          'Samoregeneracja: Drobne rysy powstałe podczas mycia znikają z folii pod wpływem ciepła słonecznego lub gorącej wody. Twoje auto zawsze wygląda jak świeżo oklejone.',
          'Głębia i jakość wykończenia: Kolorowe folie PPF mają strukturę niemal identyczną jak prawdziwy lakier – brak na nich efektu "skórki pomarańczy", co jest częstą wadą tanich folii winylowych.',
          'Odwracalność procesu: Folię można bezpiecznie usunąć w dowolnym momencie, odsłaniając nienaruszony, fabryczny lakier. To ogromny atut, który podnosi wartość auta przy odsprzedaży.',
          'Łatwa pielęgnacja: Powłoka folii ma właściwości hydrofobowe, co sprawia, że brud trudniej przywiera do karoserii, a mycie auta na trasach między Siedlcami a Łukowem staje się czystą przyjemnością.',
        ],
      },
      {
        heading: 'Jak przebiega proces metamorfozy w ShineCar Łuków?',
        paragraphs: ['Każdy projekt traktujemy indywidualnie, dbając o to, by efekt końcowy był nieodróżnialny od fabrycznego lakierowania premium.'],
        bullets: [
          'Przygotowanie detailingowe: Proces zaczynamy od demontażu niezbędnych elementów (klamek, emblematów, uszczelek) oraz dogłębnego oczyszczenia lakieru, co gwarantuje idealne przyleganie materiału nawet w najgłębszych wnękach.',
          'Precyzyjna aplikacja: Folię PPF nakładamy z milimetrową dokładnością na wszystkie elementy karoserii. Dbamy o to, by krawędzie były niewidoczne, a folia idealnie opinała przetłoczenia maski, dachu czy zderzaków.',
          'Personalizacja detali: Nie musisz oklejać całego auta. Oferujemy także zmiany częściowe – np. oklejanie dachu na czarny połysk, zabezpieczenie lusterek czy elementów ozdobnych w stylu "dechrome".',
          'Kontrola jakości: Po aplikacji przeprowadzamy finalną inspekcję, sprawdzając trwałość łączeń i brak pęcherzyków powietrza, by oddać Ci auto gotowe do zachwycania na drogach.',
        ],
      },
      {
        heading: 'Eksperckie oklejanie aut dla klientów z Siedlec i Radzynia Podlaskiego',
        paragraphs: [
          'Szukasz unikalności? Nasza bogata paleta kolorystyczna pozwala na stworzenie projektu skrojonego pod Twój gust. Wybierz elegancką satynę, jeśli cenisz luksusowy wygląd, lub postaw na jaskrawy kolor w połysku, by wyróżnić się w tłumie.',
          'Zapraszamy do kontaktu wszystkich właścicieli aut z Łukowa, Siedlec, Międzyrzeca Podlaskiego i Radzynia Podlaskiego. W ShineCar Twoje auto zyska drugie życie, nowy styl i najlepszą na rynku ochronę lakieru.',
          'Gotowy na zmianę? Skontaktuj się z nami i dowiedz się, jakie kolory folii PPF mamy obecnie w ofercie!',
        ],
      },
    ],
    price: 'od 13 000 zł',
    duration: '5–10 dni roboczych',
    image: serviceImage3,
    faq: [
      {
        question: 'Czy folia kolorowa PPF różni się od zwykłego oklejania folią?',
        answer:
          'Tak — folia kolorowa PPF łączy zmianę koloru z ochroną lakieru. Zwykłe folie winylowe tylko zmieniają kolor, natomiast PPF dodatkowo chroni przed odpryskami kamieni, rysami i UV.',
      },
      {
        question: 'Jak długo utrzymuje się folia kolorowa PPF?',
        answer:
          'Folie kolorowe PPF utrzymują się 5–7 lat. Są odporne na blaknięcie, żółknięcie i warunki atmosferyczne. Po zdjęciu lakier jest w idealnym stanie.',
      },
      {
        question: 'Czy zmiana koloru folią PPF wymaga rejestracji w wydziale komunikacji?',
        answer:
          'Tak — po zmianie koloru pojazdu folią należy zgłosić zmianę w wydziale komunikacji w ciągu 30 dni. Pomożemy Ci z wymaganą dokumentacją.',
      },
    ],
    keywords: ['folie kolorowe PPF Łuków', 'zmiana koloru samochodu folią', 'kolorowa folia ochronna'],
  },
  {
    slug: 'mycie-detailingowe',
    urlSlug: 'mycie-detailingowe-lukow',
    title: 'Mycie Detailingowe',
    navTitle: 'Mycie detailingowe',
    pageTitle: 'Mycie detailingowe w ShineCar – Nowy standard czystości Twojego auta',
    metaTitle: 'Mycie Detailingowe Łuków — Premium Mycie Samochodu',
    metaDescription:
      'Profesjonalne mycie detailingowe samochodu w Łukowie. Bezpieczna metoda mycia bezdotykowego i ręcznego. Bez ryzyka rys. Idealne przygotowanie pod zabieg.',
    description:
      'Zapomnij o standardowej myjni bezdotykowej czy automatycznych szczotkach, które rysują lakier. W ShineCar w Łukowie wierzymy, że profesjonalna pielęgnacja to proces, który wymaga czasu, precyzji i wiedzy. Nasze mycie detailingowe to kompleksowy rytuał, który przywraca samochodowi salonową świeżość, docierając do miejsc, o istnieniu których większość kierowców zapomina.',
    content: [
      'Jeśli mieszkasz w Siedlcach, Radzyniu Podlaskim, Międzyrzecu Podlaskim lub samym Łukowie i szukasz usługi, która bezpiecznie usunie najtrudniejsze zabrudzenia, nasze studio jest miejscem stworzonym dla Twojego pojazdu.',
    ],
    features: [
      'Bezpieczna metoda dwóch wiader',
      'Brak ryzyka zarysowań',
      'Mycie wstępne aktywną pianą',
      'Czyszczenie felg, progów, uszczelek',
      'Suszenie ręcznikami waflowymi',
      'Idealne przygotowanie pod zabieg',
    ],
    sections: [
      {
        heading: 'Czym mycie detailingowe różni się od zwykłego czyszczenia?',
        paragraphs: [
          'Myjnia detailingowa to nie tylko "płukanie wodą". To usługa o znacznie wyższym poziomie staranności, skupiona na bezpieczeństwie lakieru i estetyce każdego detalu. Podczas gdy zwykła myjnia usuwa tylko powierzchowny kurz, my eliminujemy zacieki, osady z klocków hamulcowych oraz przywracamy blask, którego nie da się uzyskać tradycyjnymi metodami.',
          'Nasz wieloetapowy proces pielęgnacji:',
        ],
        bullets: [
          'Bezpieczny Pre-Wash: Zaczynamy od aktywnej piany o neutralnym pH, która zmiękcza brud, pozwalając na jego bezdotykowe usunięcie. Chroni to lakier przed powstawaniem mikrozarysowań.',
          'Pielęgnacja detali: Pędzelkujemy wnęki, emblematy, uszczelki i grille. Dopieszczamy koła i felgi, usuwając zapieczony pył hamulcowy.',
          'Dekontaminacja: To kluczowy etap, w którym usuwamy z lakieru asfalt, żywicę, soki z drzew oraz wtrącenia metaliczne. Lakier odzyskuje swoją idealną gładkość.',
          'Bezpieczne osuszanie: Używamy wyłącznie bardzo chłonnych, miękkich ręczników z mikrofibry oraz sprężonego powietrza, aby wyeliminować wodę z każdej szczeliny.',
        ],
      },
      {
        heading: 'Specjalistyczne usuwanie trudnych zabrudzeń i mycie silnika',
        paragraphs: [
          'W ShineCar nie boimy się wyzwań. Dzięki profesjonalnej chemii detailingowej skutecznie usuwamy ślady po smarach, olejach, ptasich odchodach czy resztkach słodyczy z wnętrza. Gwarantujemy pełne bezpieczeństwo dla tapicerek materiałowych, skórzanych oraz delikatnych elementów chromowanych.',
          'Jedną z naszych specjalności jest czyszczenie komory silnika. To proces, który pozwala przywrócić jednostce niemal fabryczny wygląd.',
        ],
        bullets: [
          'Usuwamy zaschnięte ślady po wyciekach i nagromadzony przez lata kurz.',
          'Stosujemy techniki zapewniające 100% bezpieczeństwa dla instalacji elektrycznej i podzespołów.',
          'Niczym nie ryzykujesz – zyskujesz czystą i estetyczną komorę silnika, co ułatwia diagnostykę i podnosi wartość auta przy sprzedaży.',
        ],
      },
      {
        heading: 'Dlaczego kierowcy z okolic Siedlec i Radzynia wybierają ShineCar?',
        paragraphs: [
          'Pracujemy dokładnie, dbając o to, by każdy samochód opuszczający nasze studio w Łukowie wywoływał efekt "WOW". Mycie detailingowe to nie tylko estetyka – to także najlepsza forma przygotowania lakieru pod dalsze zabezpieczenia, takie jak twarde woski czy powłoki ceramiczne.',
          'Zapraszamy wszystkich pasjonatów motoryzacji z Łukowa, Siedlec, Międzyrzeca Podlaskiego i Radzynia Podlaskiego. Poczuj różnicę już od pierwszego spojrzenia na swoje auto!',
        ],
      },
    ],
    price: 'od 250 zł',
    duration: '1,5–2 godziny',
    image: serviceImage1,
    faq: [
      {
        question: 'Czym różni się mycie detailingowe od zwykłego mycia?',
        answer:
          'Mycie detailingowe jest bezpieczniejsze i dokładniejsze. Stosujemy metodę dwóch wiader z separatorami brudu, aby nie przenosić zabrudzeń na lakier. Używamy profesjonalnych produktów i miękkich akcesoriów.',
      },
      {
        question: 'Jak często myć samochód detailingowo?',
        answer:
          'Zalecamy mycie detailingowe co 2–4 tygodnie, w zależności od warunków eksploatacji. Samochody z powłoką ceramiczną lub folią PPF wymagają mycia rzadziej dzięki właściwościom hydrofobowym.',
      },
      {
        question: 'Czy mogę umówić się na samo mycie, bez dodatkowych usług?',
        answer:
          'Tak — mycie detailingowe jest dostępne jako samodzielna usługa. Możesz też połączyć je z innymi zabiegami, takimi jak korekta lakieru czy detailing wnętrza.',
      },
    ],
    keywords: ['mycie detailingowe Łuków', 'mycie premium samochodu', 'bezpieczne mycie auta'],
  },
  {
    slug: 'odbior-auta-z-salonu',
    urlSlug: 'odbior-auta-z-salonu-lukow',
    navTitle: 'Odbiór auta z salonu',
    title: 'Odbiór Auta z Salonu',
    pageTitle: 'Odbiór nowego samochodu z salonu na lawecie | ShineCar Łuków',
    metaTitle: 'Odbiór Auta z Salonu Łuków | Transport Lawetą i Oględziny',
    metaDescription:
      'Odbieramy Twoje nowe auto z salonu na profesjonalnej lawecie i transportujemy do naszego studia. Wspólne oględziny przy odbiorze. Zabezpieczenie od pierwszego kilometra.',
    description:
      'Kupujesz nowy samochód i chcesz go zabezpieczyć zanim przejdzie pierwszy kilometr po drogach publicznych? Przyjeżdżamy naszą lawetą do salonu, pomagamy przy oględzinach i transportujemy pojazd prosto do studia ShineCar w Świderkach koło Łukowa.',
    content: [
      'Twój nowy samochód nie musi spotykać się z odpryskami od kamieni, solą ani brudem. Trafia prosto na lawetę, a potem do studia, gdzie nakładamy folie PPF, powłoki ceramiczne lub elastomerowe. To najlepszy sposób na zachowanie salonowego stanu lakieru.',
    ],
    features: [
      'Transport nowego auta na profesjonalnej lawecie',
      'Pomoc przy odbiorze i wspólne oględziny w salonie',
      'Weryfikacja stanu lakieru przed wyjazdem z salonu',
      'Bezpośredni transport do studia ShineCar',
      'Zabezpieczenie lakieru od pierwszego kilometra',
      'Obsługa salonów w promieniu do 80 km od Łukowa',
    ],
    sections: [
      {
        heading: 'Jak wygląda odbiór auta z salonu?',
        paragraphs: ['Cały proces jest prosty. Wystarczy umówić termin odbioru z salonem i przekazać nam szczegóły, a resztą zajmujemy się my.'],
        bullets: [
          'Umawiamy termin: Kontaktujesz się z nami i podajesz datę odbioru oraz adres salonu. Umawiamy się na wspólne oględziny lub odbieramy auto samodzielnie na Twoje zlecenie.',
          'Jedziemy lawetą do salonu: Przyjeżdżamy naszą lawetą bezpośrednio pod salon samochodowy. Obsługujemy salony w promieniu do 80 km od Łukowa.',
          'Wspólne oględziny przy odbiorze: Na miejscu pomagamy Ci dokładnie sprawdzić stan lakieru, ocenić ewentualne uszkodzenia transportowe i upewnić się, że auto opuszcza salon w idealnym stanie.',
          'Transport na lawecie do studia: Po oględzinach ładujemy samochód na lawetę i bezpiecznie transportujemy do naszego studia w Świderkach. Auto nie pokonuje ani jednego kilometra po drogach publicznych.',
          'Zabezpieczenie w studiu: Nakładamy wybrane zabezpieczenie, np. folię PPF, powłokę ceramiczną lub elastomerową. Auto wraca do Ciebie w pełni chronione.',
        ],
      },
      {
        heading: 'Dlaczego warto odebrać nowe auto na lawecie?',
        paragraphs: ['Pierwszy przejazd z salonu do domu to moment, w którym lakier jest najbardziej narażony na uszkodzenia. Droga krajowa, autostrada czy nawet miejskie ulice pełne są kamieni, piasku i zanieczyszczeń, które zostawiają trwałe ślady na niezabezpieczonym lakierze.'],
        bullets: [
          'Zero kilometrów bez ochrony: Lakier nie spotyka się z odpryskami, solą ani brudem. Trafia prosto na lawetę.',
          'Profesjonalne oględziny: Pomagamy wychwycić ewentualne wady fabryczne lub uszkodzenia transportowe, zanim podpiszesz protokół odbioru.',
          'Spokój ducha: Wiesz, że Twoje nowe auto jest w rękach specjalistów od pierwszej minuty po zakupie.',
          'Oszczędność czasu: Nie musisz sam jechać do salonu i z powrotem. Odbieramy auto i dostarczamy je zabezpieczone pod Twoje drzwi.',
        ],
      },
      {
        heading: 'Dla kogo jest ta usługa?',
        paragraphs: [
          'Usługa odbioru auta z salonu jest idealna dla właścicieli nowych samochodów, którzy planują zabezpieczenie lakieru folią PPF lub powłoką ochronną. Jest szczególnie popularna wśród klientów kupujących auta premium, leasingowe oraz pojazdy z indywidualnym zamówieniem, gdzie każdy detal ma znaczenie.',
          'Obsługujemy salony w promieniu do 80 km od Łukowa, m.in. w Siedlcach, Lublinie i Białej Podlaskiej. Skontaktuj się z nami, a ustalimy szczegóły.',
        ],
      },
    ],
    price: 'Wycena indywidualna (zależy od odległości)',
    duration: '1 dzień (odbiór + transport)',
    image: serviceImage4,
    faq: [
      {
        question: 'Z jak daleka możecie odebrać samochód z salonu?',
        answer:
          'Odbieramy auta z salonów w promieniu do 80 km od Łukowa, m.in. Siedlce, Lublin, Biała Podlaska. Dla dalszych lokalizacji skontaktuj się z nami po wycenę.',
      },
      {
        question: 'Czy mogę być obecny przy odbiorze w salonie?',
        answer:
          'Tak, zachęcamy do wspólnych oględzin w salonie. Pomożemy sprawdzić stan lakieru i wychwycić ewentualne uszkodzenia transportowe przed podpisaniem protokołu odbioru.',
      },
      {
        question: 'Ile kosztuje odbiór auta z salonu na lawecie?',
        answer:
          'Koszt transportu ustalamy indywidualnie, zależy od odległości do salonu. Skontaktuj się z nami po wycenę.',
      },
      {
        question: 'Czy mogę od razu zamówić zabezpieczenie lakieru?',
        answer:
          'Tak, większość klientów łączy odbiór z salonu z pakietem zabezpieczenia (folia PPF, powłoka ceramiczna lub elastomerowa). Dzięki temu auto wraca do Ciebie w pełni chronione, bez dodatkowych wizyt.',
      },
    ],
    keywords: ['odbiór auta z salonu', 'transport samochodu lawetą', 'odbiór nowego samochodu Łuków', 'oględziny samochodu w salonie'],
  },
  {
    slug: 'myjnia-reczna',
    urlSlug: 'myjnia-reczna-lukow',
    title: 'Myjnia Ręczna',
    navTitle: 'Myjnia ręczna',
    pageTitle: 'Myjnia Ręczna Łuków — Bezpieczne Mycie Samochodu w ShineCar',
    metaTitle: 'Myjnia Ręczna Łuków — Bezpieczne Mycie Samochodu od 250 zł',
    metaDescription:
      'Profesjonalna myjnia ręczna w Łukowie. Metoda Two Bucket Wash — zero rys, pełna czystość. Bezpieczne mycie samochodów z folią PPF i powłoką ceramiczną. Zadzwoń: 782 195 321.',
    description:
      'Myjnia automatyczna i bezdotykowa rysują lakier — to fakt, którego nie da się obejść. W ShineCar w Łukowie oferujemy profesjonalne mycie ręczne metodą Two Bucket Wash, która gwarantuje bezpieczeństwo lakieru przy każdym myciu. Nasz proces eliminuje ryzyko mikrozarysowań, które z czasem matowią nawet najdroższy lakier.',
    content: [
      'Jeśli szukasz myjni ręcznej w Łukowie, która zadba o Twój samochód tak, jak na to zasługuje — zapraszamy do naszego studia w Świderkach. Obsługujemy klientów z Łukowa, Siedlec, Radzynia Podlaskiego i okolic.',
    ],
    features: [
      'Metoda Two Bucket Wash — zero przenoszenia brudu',
      'Aktywna piana o neutralnym pH',
      'Bezpieczne dla folii PPF i powłok ceramicznych',
      'Ręczne suszenie mikrofibrą',
      'Czyszczenie felg, uszczelek i detali',
      'Opcjonalna dekontaminacja i quick detailer',
    ],
    sections: [
      {
        heading: 'Czym jest metoda Two Bucket Wash?',
        paragraphs: [
          'Two Bucket Wash to złoty standard bezpiecznego mycia samochodu. Polega na użyciu dwóch oddzielnych wiader — jednego z czystą wodą i środkiem myjącym, drugiego do płukania rękawicy. Dzięki separatorom brudu na dnie wiader zanieczyszczenia opadają i nie wracają na lakier.',
          'W przeciwieństwie do myjni automatycznych i bezdotykowych, metoda ta eliminuje mikrozarysowania, które z czasem tworzą charakterystyczną „pajęczynę" widoczną w świetle słonecznym.',
        ],
      },
      {
        heading: 'Jak wygląda proces mycia ręcznego w ShineCar?',
        bullets: [
          'Spłukanie wstępne — usuwamy luźny brud i piasek myjką ciśnieniową.',
          'Aktywna piana — nakładamy pianę o neutralnym pH, która rozpuszcza zabrudzenia bez kontaktu z lakierem.',
          'Mycie kontaktowe — rękawicą z mikrofibry myczymy każdy panel metodą Two Bucket Wash.',
          'Felgi i detale — czyścimy felgi, wnęki klamek, uszczelki, emblematy i grille dedykowanymi pędzelkami.',
          'Płukanie i suszenie — spłukujemy auto zdemineralizowaną wodą i suszymy miękkimi ręcznikami waflowymi oraz sprężonym powietrzem.',
        ],
      },
      {
        heading: 'Myjnia ręczna vs. myjnia automatyczna — dlaczego warto?',
        paragraphs: [
          'Myjnia automatyczna ze szczotkami to najszybszy sposób na zarysowanie lakieru. Bezdotykowa jest lepsza, ale nie usuwa zapieczonych zabrudzeń i pozostawia zacieki. Mycie ręczne w studiu detailingowym to jedyna metoda, która łączy dokładność z bezpieczeństwem.',
        ],
        bullets: [
          'Myjnia automatyczna: szybka, tania, ale rysuje lakier szczotkami nasączonymi piaskiem z poprzednich aut.',
          'Myjnia bezdotykowa: bezpieczniejsza, ale nie usuwa trudnych zabrudzeń (asfalt, żywica, odchody ptaków).',
          'Myjnia ręczna ShineCar: najwyższy poziom bezpieczeństwa i czystości, idealna dla aut z folią PPF lub powłoką ceramiczną.',
        ],
      },
      {
        heading: 'Dla kogo jest myjnia ręczna?',
        paragraphs: [
          'Myjnia ręczna to idealne rozwiązanie dla właścicieli samochodów, którym zależy na utrzymaniu lakieru w idealnym stanie. Szczególnie polecamy ją posiadaczom aut z folią PPF, powłoką ceramiczną lub elastomerową — bezpieczne mycie przedłuża żywotność zabezpieczeń.',
          'Zapraszamy właścicieli aut premium, klasyków oraz wszystkich, którzy chcą dbać o swój samochód na najwyższym poziomie. Studio ShineCar mieści się w Świderkach k. Łukowa.',
        ],
      },
    ],
    price: 'od 250 zł',
    duration: '1–1,5 godziny',
    image: serviceImage1,
    faq: [
      {
        question: 'Ile kosztuje mycie ręczne samochodu?',
        answer:
          'Cena mycia ręcznego zaczyna się od 250 zł. Finalna cena zależy od wielkości pojazdu i stopnia zabrudzenia. Pakiet z dekontaminacją i quick detailerem to ok. 400 zł.',
      },
      {
        question: 'Czy mycie ręczne jest bezpieczne dla folii PPF?',
        answer:
          'Tak — metoda Two Bucket Wash jest rekomendowana przez producentów folii PPF. Używamy wyłącznie neutralnych środków i miękkich rękawic z mikrofibry.',
      },
      {
        question: 'Jak często powinienem myć auto ręcznie?',
        answer:
          'Zalecamy mycie co 2–4 tygodnie, w zależności od warunków eksploatacji. Auta z powłoką ceramiczną mogą być myte rzadziej dzięki właściwościom hydrofobowym.',
      },
      {
        question: 'Czy mogę umówić się tylko na mycie ręczne?',
        answer:
          'Tak — mycie ręczne jest dostępne jako samodzielna usługa. Możesz też połączyć je z innymi zabiegami, takimi jak aplikacja quick detailera, wosku lub serwis powłoki.',
      },
      {
        question: 'Czym różni się mycie ręczne od mycia detailingowego?',
        answer:
          'Mycie ręczne to sam proces mycia metodą Two Bucket Wash. Mycie detailingowe dodatkowo obejmuje dekontaminację lakieru, czyszczenie komory silnika oraz pełne dopieszczenie detali.',
      },
    ],
    keywords: ['myjnia ręczna Łuków', 'mycie ręczne samochodu Łuków', 'myjnia ręczna', 'bezpieczne mycie samochodu', 'two bucket wash Łuków'],
  },
  {
    slug: 'pranie-tapicerki',
    urlSlug: 'pranie-tapicerki-lukow',
    title: 'Pranie Tapicerki Samochodowej',
    navTitle: 'Pranie tapicerki',
    pageTitle: 'Pranie Tapicerki Samochodowej Łuków — Czyszczenie Tapicerek i Skór',
    metaTitle: 'Pranie Tapicerki Samochodowej Łuków — Czyszczenie Tapicerek i Skór od 350 zł',
    metaDescription:
      'Profesjonalne pranie tapicerki samochodowej w Łukowie. Czyszczenie tapicerki materiałowej, skórzanej i alcantary. Usuwanie plam, zapachów i alergenów. ShineCar Łuków.',
    description:
      'Tapicerka samochodowa zbiera brud, kurz, alergeny i nieprzyjemne zapachy szybciej, niż myślisz. W ShineCar w Łukowie oferujemy profesjonalne pranie tapicerki ekstrakcyjne, które przywraca wnętrzu samochodu świeżość i czystość na poziomie salonowym. Obsługujemy tapicerki materiałowe, skórzane oraz alcantarę.',
    content: [
      'Niezależnie od tego, czy chcesz odświeżyć wnętrze po zimie, usunąć uporczywe plamy, czy przygotować auto do sprzedaży — nasze studio w Świderkach k. Łukowa jest gotowe pomóc. Obsługujemy klientów z Łukowa, Siedlec, Radzynia Podlaskiego i okolic.',
    ],
    features: [
      'Pranie ekstrakcyjne tapicerki materiałowej',
      'Czyszczenie i impregnacja skóry naturalnej',
      'Czyszczenie alcantary',
      'Usuwanie plam i zapachów',
      'Dezynfekcja i usuwanie alergenów',
      'Impregnacja po czyszczeniu',
    ],
    sections: [
      {
        heading: 'Kiedy warto wyprać tapicerkę samochodową?',
        paragraphs: [
          'Tapicerka materiałowa wchłania zabrudzenia jak gąbka — kurz, pot, resztki jedzenia, sierść zwierząt i rozlane napoje wnikają głęboko w tkaninę. Regularne odkurzanie nie wystarczy, by usunąć bakterie i alergeny, które gromadzą się w fotelach i dywanikach.',
        ],
        bullets: [
          'Widoczne plamy na fotelach lub dywanikach',
          'Nieprzyjemny zapach we wnętrzu',
          'Po zimie — sól, błoto i wilgoć osadzają się głęboko w tapicerce',
          'Przed sprzedażą samochodu — czyste wnętrze podnosi wartość',
          'Alergie — regularne pranie usuwa roztocza, pyłki i sierść zwierząt',
        ],
      },
      {
        heading: 'Czyszczenie tapicerki materiałowej vs. skórzanej',
        paragraphs: [
          'Każdy typ tapicerki wymaga innego podejścia. Tapicerkę materiałową pierzemy metodą ekstrakcyjną (wtrysk-odsysanie), która głęboko penetruje włókna i usuwa brud z ich wnętrza. Skóra naturalna wymaga delikatniejszych środków — czyścimy ją specjalistyczną chemią i nakładamy odżywkę, która nawilża i chroni przed pękaniem.',
        ],
        bullets: [
          'Tapicerka materiałowa: pranie ekstrakcyjne + impregnacja hydrofobowa',
          'Skóra naturalna: czyszczenie + odżywienie + impregnacja ceramiczna',
          'Alcantara: delikatne czyszczenie parą lub chemią dedykowaną do zamszów',
          'Podsufitka: czyszczenie ręczne, bez nasączania — zapobiegamy odklejeniu materiału',
        ],
      },
      {
        heading: 'Proces prania tapicerki w ShineCar',
        bullets: [
          'Odkurzanie — usuwamy luźny brud, piasek i okruchy z każdej szczeliny.',
          'Aplikacja środka czyszczącego — wmasowujemy profesjonalną chemię w tapicerkę pędzelkami i szczotkami.',
          'Pranie ekstrakcyjne — wtryskujemy czystą wodę pod ciśnieniem i natychmiast odsysamy razem z brudem.',
          'Suszenie — przyspieszamy schnięcie za pomocą dmuchaw i ozonowania, co jednocześnie dezynfekuje wnętrze.',
          'Impregnacja — nakładamy powłokę hydrofobową, która chroni tapicerkę przed przyszłymi zabrudzeniami.',
        ],
      },
      {
        heading: 'Błędy przy samodzielnym praniu tapicerki',
        paragraphs: [
          'Wiele osób próbuje czyścić tapicerkę domowymi sposobami, co często przynosi więcej szkody niż pożytku. Oto najczęstsze błędy:',
        ],
        bullets: [
          'Używanie zbyt dużej ilości wody — tapicerka nasiąka i zaczyna pleśnieć.',
          'Silne detergenty — mogą odbarwić materiał lub uszkodzić skórę.',
          'Brak suszenia — wilgotna tapicerka to idealne środowisko dla grzybów i bakterii.',
          'Szorowanie podsufitki — materiał się odkleja od podkładu piankowego.',
        ],
        tip: 'Jeśli plama jest świeża, delikatnie ją wchłoń ręcznikiem papierowym — nie wcieraj! Potem umów się na profesjonalne czyszczenie.',
      },
    ],
    price: 'od 350 zł',
    duration: '3–5 godzin (z suszeniem)',
    image: serviceImage2,
    faq: [
      {
        question: 'Ile kosztuje pranie tapicerki samochodowej?',
        answer:
          'Cena prania tapicerki materiałowej zaczyna się od 350 zł. Czyszczenie i impregnacja skóry naturalnej to koszt od 300 zł. Finalna cena zależy od wielkości pojazdu i stopnia zabrudzenia.',
      },
      {
        question: 'Jak długo schnie tapicerka po praniu?',
        answer:
          'Tapicerka materiałowa schnie ok. 4–8 godzin po praniu ekstrakcyjnym. Przyspieszamy proces za pomocą dmuchaw i ozonowania. W ciepłych miesiącach schnięcie może być szybsze.',
      },
      {
        question: 'Czy możecie usunąć zapach dymu papierosowego?',
        answer:
          'Tak — pranie ekstrakcyjne w połączeniu z ozonowaniem skutecznie redukuje zapach dymu. W przypadku intensywnego zadymienia może być potrzebna powtórka lub dodatkowe zabiegi.',
      },
      {
        question: 'Czy pranie tapicerki jest bezpieczne dla podgrzewanych foteli?',
        answer:
          'Tak — metoda ekstrakcyjna jest bezpieczna dla foteli z ogrzewaniem i wentylacją. Kontrolujemy ilość wody i ciśnienie, aby nie uszkodzić instalacji.',
      },
    ],
    keywords: ['pranie tapicerki samochodowej Łuków', 'czyszczenie tapicerki Łuków', 'pranie tapicerki', 'czyszczenie skóry samochodowej', 'pranie foteli samochodowych Łuków'],
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find((s) => s.slug === slug);
}

export function getServiceByUrlSlug(urlSlug: string): ServiceData | undefined {
  return services.find((s) => s.urlSlug === urlSlug);
}

export function getAllServiceSlugs(): string[] {
  return services.map((s) => s.slug);
}

export function getAllServiceUrlSlugs(): string[] {
  return services.map((s) => s.urlSlug);
}

export function getServiceUrl(service: ServiceData): string {
  return `/${service.urlSlug}`;
}
