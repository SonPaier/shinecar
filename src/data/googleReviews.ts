export interface GoogleReview {
  id: string;
  author: string;
  authorReviewCount?: string;
  date: string;
  rating: number;
  text: string;
}

export const GOOGLE_REVIEWS_URL =
  'https://www.google.com/maps/place/ShineCar+%C5%81uk%C3%B3w/reviews';

export const googleReviews: Record<string, GoogleReview> = {
  'artur-sprycha': {
    id: 'artur-sprycha',
    author: 'Artur Sprycha',
    authorReviewCount: '4 opinie',
    date: 'miesiąc temu',
    rating: 5,
    text: 'Z czystym sumieniem polecam usługi Marcina każdemu, kto szuka prawdziwego specjalisty od detailingu. Auto zostało wykonane z ogromną dokładnością i dbałością o każdy, nawet najmniejszy detal. Mega jakość i pełen profesjonalizm. Nałożona powłoka to absolutny top — świetnie się trzyma, daje genialny efekt wizualny i realną ochronę na lata. Lakier wygląda obłędnie, a hydrofobowość robi robotę. Cena może nie jest najniższa, ale zdecydowanie adekwatna do jakości. To usługa warta swojej ceny — tutaj płacisz za doświadczenie, precyzję i trwały efekt.',
  },
  'dominik-kisiel': {
    id: 'dominik-kisiel',
    author: 'Dominik Kisiel',
    authorReviewCount: '5 opinii · 7 zdjęć',
    date: '3 tygodnie temu',
    rating: 5,
    text: 'Jeśli ktoś szuka sprawdzonego fachowca od detailingu — polecam Marcina w 100%! Zlecona korekta lakieru, delikatne zaprawki, nałożenie powłoki ochronnej, zabezpieczone wnęki klamek i zderzak pod klapą bagażnika folią PPF. Z całego serca polecam. Dobry kontakt na każdym etapie prac, wytłumaczone wszystko co będzie robione z samochodem oraz jak obchodzić się z powłoką, żeby służyła jak najdłużej.',
  },
  'marcin-kardas': {
    id: 'marcin-kardas',
    author: 'Marcin Kardas',
    authorReviewCount: '3 opinie · 3 zdjęcia',
    date: 'miesiąc temu',
    rating: 5,
    text: 'Zdecydowanie polecam ShineCar Łuków! Zleciłem odświeżenie lakieru oraz aplikację powłoki ceramicznej i efekt jest rewelacyjny. Lakier odzyskał głębię koloru, niesamowity połysk i wygląda jak nowy. Auto zostało bardzo dokładnie przygotowane — widać ogromną dbałość o detale i profesjonalne podejście do pracy. Świetny kontakt, fachowe doradztwo oraz terminowa realizacja. Powłoka ceramiczna nadała lakierowi dodatkową ochronę i efekt „lustra", a samochód prezentuje się zdecydowanie lepiej niż przed usługą. Jeśli ktoś szuka solidnej firmy od korekty lakieru, odświeżenia auta i zabezpieczenia ceramiką — ShineCar Łuków to bardzo dobry wybór. Na pewno skorzystam ponownie!',
  },
};

export function getGoogleReview(id: string): GoogleReview | undefined {
  return googleReviews[id];
}
