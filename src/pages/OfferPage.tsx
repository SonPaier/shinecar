import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ppf2 = 'https://cdn.builder.io/api/v1/image/assets%2F67e4bfba85e64e32b9e894d5c5c768b6%2F7fc10cae46a64eccb3c9103e089879b8?format=webp&width=1200';
const ppf3 = 'https://cdn.builder.io/api/v1/image/assets%2F67e4bfba85e64e32b9e894d5c5c768b6%2F0af0f53bcb3c4144b5e43841de57e7ca?format=webp&width=1200';
const ppf4 = 'https://cdn.builder.io/api/v1/image/assets%2F67e4bfba85e64e32b9e894d5c5c768b6%2F1421f153f5874e309f71c0a8c640349d?format=webp&width=1200';

export default function OfferPage() {
  useEffect(() => {
    const hash = window.location.hash?.replace('#', '') || 'oferta-top';
    const el = document.getElementById(hash);
    if (el) {
      setTimeout(() => {
        const headerEl = document.querySelector('header') as HTMLElement | null;
        const headerHeight = headerEl ? headerEl.offsetHeight : 96;
        const top = window.scrollY + el.getBoundingClientRect().top - headerHeight - 12;
        window.scrollTo({ top, behavior: 'smooth' });
      }, 0);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section id="oferta-top" className="py-32 scroll-mt-28 md:scroll-mt-36">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto text-center">
              <div className="h-1 w-16 bg-gradient-gold rounded-full mx-auto mb-6" />
              <h1 className="font-luxury text-4xl lg:text-5xl text-foreground mb-4">Oferta</h1>
              <p className="text-muted-foreground">Przegląd naszych usług: Revvify (liquid PPF), powłoki ceramiczne/elastomerowe, detailing oraz folie PPF.</p>
            </div>

            <div className="grid lg:grid-cols-1 gap-8 mt-12">
              <article id="powloki" className="bg-gradient-glass rounded-3xl border border-border overflow-hidden shadow-subtle">
                <img src={ppf2} alt="Powłoki ceramiczne i elastomerowe" className="w-full h-[500px] object-cover" />
                <div className="p-6 lg:p-8">
                  <h2 className="text-2xl font-semibold text-foreground mb-2">POWŁOKI CERAMICZNE / ELASTOMEROWE</h2>
                  <p className="text-muted-foreground mb-4">Trwałe zabezpieczenia lakieru przed utlenianiem, chemikaliami i zabrudzeniami. Poprawiają połysk i ułatwiają mycie.</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1.5 mb-4">
                    <li>Warianty 36–60 miesięcy gwarancji w zależności od pakietu</li>
                    <li>Wersje „top coat" dla maksymalnego połysku i śliskości</li>
                    <li>Opcje dla felg, szyb i elementów plastikowych</li>
                  </ul>
                  <div className="grid sm:grid-cols-3 gap-3">
                    <div className="rounded-xl border border-border bg-card/30 p-3 sm:col-span-3">
                      <h3 className="text-sm font-semibold text-foreground">Zakres cen</h3>
                      <p className="text-sm text-muted-foreground">1 500–3 000 zł</p>
                    </div>
                  </div>
                </div>
              </article>

              <article id="detailing" className="bg-gradient-glass rounded-3xl border border-border overflow-hidden shadow-subtle">
                <img src={ppf3} alt="Detailing lakieru i wnętrza" className="w-full h-[500px] object-cover" />
                <div className="p-6 lg:p-8">
                  <h2 className="text-2xl font-semibold text-foreground mb-2">KOREKTA LAKIERU</h2>
                  <p className="text-muted-foreground mb-4">Kompleksowe przygotowanie i odświeżenie auta: korekta lakieru.</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1.5 mb-4">
                    <li>One-step / multi-step korekta lakieru</li>
                    <li>Możliwość łączenia z powłokami i PPF</li>
                  </ul>
                  <div className="grid sm:grid-cols-3 gap-3">
                    <div className="rounded-xl border border-border bg-card/30 p-3">
                      <h3 className="text-sm font-semibold text-foreground">Jeden etap</h3>
                      <p className="text-sm text-muted-foreground">800–1 500 zł</p>
                    </div>
                    <div className="rounded-xl border border-border bg-card/30 p-3">
                      <h3 className="text-sm font-semibold text-foreground">Dwa etapy</h3>
                      <p className="text-sm text-muted-foreground">1 500–2 500 zł</p>
                    </div>
                    <div className="rounded-xl border border-border bg-card/30 p-3">
                      <h3 className="text-sm font-semibold text-foreground">Wieloetapowa</h3>
                      <p className="text-sm text-muted-foreground">Wycena indywidualna</p>
                    </div>
                  </div>
                </div>
              </article>

              <article id="ppf" className="bg-gradient-glass rounded-3xl border border-border overflow-hidden shadow-subtle">
                <img src={ppf4} alt="Folie ochronne PPF" className="w-full h-[500px] object-cover" />
                <div className="p-6 lg:p-8">
                  <h2 className="text-2xl font-semibold text-foreground mb-2">FOLIE OCHRONNE PPF / FOLIE KOLOROWE</h2>
                  <p className="text-muted-foreground mb-4">Najwyższy poziom ochrony przed odpryskami, zarysowaniami i uderzeniami – przy zachowaniu fabrycznego wyglądu.</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1.5 mb-4">
                    <li>Samoregeneracja drobnych rys, odporność na UV</li>
                    <li>Pakiety częściowe lub pełne oklejenie</li>
                    <li>Możliwe warianty mat / połysk</li>
                  </ul>
                  <div className="grid sm:grid-cols-3 gap-3">
                    <div className="rounded-xl border border-border bg-card/30 p-3">
                      <h3 className="text-sm font-semibold text-foreground">Front + miejsca newralgiczne</h3>
                      <p className="text-sm text-muted-foreground">5 500–7 000 zł</p>
                    </div>
                    <div className="rounded-xl border border-border bg-card/30 p-3">
                      <h3 className="text-sm font-semibold text-foreground">Kolorowa folia PPF</h3>
                      <p className="text-sm text-muted-foreground">Wycena indywidualna</p>
                    </div>
                    <div className="rounded-xl border border-border bg-card/30 p-3">
                      <h3 className="text-sm font-semibold text-foreground">Całe auto</h3>
                      <p className="text-sm text-muted-foreground">11 000–16 000 zł</p>
                    </div>
                  </div>
                </div>
              </article>
            </div>

            <div className="text-center mt-10 text-sm text-muted-foreground">
              Ceny są orientacyjne – finalna wycena zależy od modelu auta, stanu lakieru i zakresu prac.
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
