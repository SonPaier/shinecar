# SEO Action Plan — ShineCar (po audycie 2026-04-29)

Priorytet wdrożenia ułożony pod **impact / effort**. Każda pozycja zawiera dokładną zmianę pliku.

---

## 🔴 Must-fix (zrobić przed merge do main)

### M1. Skróć tytuł huba i elastomerowej
**Problem:** SERP cuts ~60 chars.
**Fix:**
- `src/app/powloka-ochronna-na-auto-lukow/page.tsx:29` →
  `'Powłoki ochronne Łuków — Ceramika, Grafen, Elastomer | ShineCar'` (62 znaki, blisko limitu, ale primary keyword zostaje)
  *Alternatywa krótsza:* `'Powłoki ochronne na auto Łuków | ShineCar'` (44 znaki)
- `src/data/services.ts:431` → `'Powłoki Elastomerowe Łuków — Najtrwalsza Ochrona Lakieru | ShineCar'` (60 znaków, dodaje brand)

### M2. Skróć meta description huba i cennika
- Hub `metaDescription` (page.tsx:31): docelowo ~150 znaków:
  `'Powłoki ochronne na samochód w Łukowie: ceramiczna, grafenowa, elastomerowa. Lustrzany blask, hydrofobowość, ochrona UV. ShineCar — 782 195 321.'` (149 znaków)
- Cennik `metaDescription`: skróć do ~155.

### M3. Decyzja: FAQPage schema
**Problem:** Skill rule #3 — FAQPage rich results od 08/2023 ograniczone do witryn rządowych i medycznych. ShineCar = komercja.
**Opcja A (zalecana):** Usuń `FaqJsonLd` z 11 plików:
- `[serviceSlug]/page.tsx:6, 59`
- `powloka-ochronna-na-auto-lukow/page.tsx:7, 350`
- `cennik/page.tsx`
- 8× `detailing-*/page.tsx:4, 54`

Zostaw HTML z pytaniami i odpowiedziami — to nadal silnie pomaga w AEO/AI Overviews i UX. Tylko usuwasz JSON-LD typu `FAQPage`.

**Opcja B (status quo):** Zostaw — nie ma penalizacji, tylko niewykorzystany kod. Acceptable kompromis.

**Rekomendacja:** Opcja A. Mniej kodu, czystszy DOM.

### M4. Spójność `addressLocality` z GMB
**Problem:** GMB place "Shine Car – Auto Detailing Łuków" sugeruje Łuków, JSON-LD mówi "Świderki".
**Akcja:** zweryfikuj wpis w GMB (Search Console → Business Profile). Jeśli GMB ma `Łuków` jako city:
```diff
- addressLocality: 'Świderki',
+ addressLocality: 'Łuków',
```
W 3 plikach: `SeoJsonLd.tsx`, `seo/ServiceJsonLd.tsx`, `powloka-ochronna-na-auto-lukow/page.tsx`. Świderki zostawić w `streetAddress: 'Świderki 155'`. Postal code 21-411 jest poprawne dla Świderki ale GMB pewnie pokazuje Łuków — trzeba potwierdzić.

---

## ⚠️ Should-fix (do końca tygodnia)

### S1. AI crawler allowlist + llms.txt
- `src/app/robots.ts` — dodaj explicit allow dla GPTBot, ClaudeBot, PerplexityBot, Google-Extended, Applebot-Extended:
```ts
return {
  rules: [
    { userAgent: '*', allow: '/', disallow: ['/_next/', '/api/'] },
    { userAgent: 'GPTBot', allow: '/' },
    { userAgent: 'ClaudeBot', allow: '/' },
    { userAgent: 'PerplexityBot', allow: '/' },
    { userAgent: 'Google-Extended', allow: '/' },
    { userAgent: 'Applebot-Extended', allow: '/' },
  ],
  sitemap: 'https://shinecar.pl/sitemap.xml',
  host: 'https://shinecar.pl',
};
```

- Stwórz `public/llms.txt` z pseudokanonicznym opisem firmy + linkami do top stron:
```
# ShineCar — Auto Detailing Łuków

ShineCar to studio detailingu samochodowego w Świderkach pod Łukowem (woj. lubelskie).
Specjalizujemy się w foliach ochronnych PPF, korekcie lakieru i powłokach ochronnych
(ceramiczna, grafenowa, elastomerowa). Obsługujemy klientów z Łukowa, Siedlec,
Radzynia Podlaskiego, Międzyrzeca Podlaskiego, Białej Podlaskiej, Garwolina, Ryk
i Lubartowa.

## Kluczowe strony
- https://shinecar.pl/uslugi
- https://shinecar.pl/powloka-ochronna-na-auto-lukow
- https://shinecar.pl/folia-ppf-lukow
- https://shinecar.pl/korekta-lakieru-lukow
- https://shinecar.pl/cennik

## Kontakt
- Adres: Świderki 155, 21-411 Łuków, Polska
- Telefon: +48 782 195 321
- Email: shinecarkosmetyka@o2.pl
- Mapa: https://www.google.com/maps?q=51.8451033,22.3348136
```

### S2. FAQ accordion → semantyczne H3
**Problem:** Accordion-trigger to `<button>`, nie heading. Tracimy hierarchię i a11y.
**Fix:** W `ServicePageContent.tsx` (FAQ Accordion) i hub-page (FAQ Accordion) owinąć trigger w heading. Shadcn Accordion akceptuje custom dziecko trigger:
```tsx
<AccordionTrigger className="text-left text-foreground hover:text-primary">
  <h3 className="font-medium text-base">{item.question}</h3>
</AccordionTrigger>
```
**Caveat:** Walidator HTML nie lubi h3 wewnątrz button. Lepsze podejście:
```tsx
<h3 className="m-0">
  <AccordionTrigger ...>{item.question}</AccordionTrigger>
</h3>
```
Sprawdzić styling Accordion po owinięciu.

### S3. Unique OG image per service
Po otrzymaniu zdjęć od użytkownika:
- Każda powłoka — własne `image` w `services.ts`
- Hub OG image — kompozycja 3 powłok lub jedno premium-look auto z napisem "Powłoki ochronne — Ceramika, Grafen, Elastomer"

### S4. GMB URL w sameAs
W `SeoJsonLd.tsx`:
```ts
sameAs: [
  'https://www.facebook.com/ShineCarKosmetyka',
  'https://www.instagram.com/shinecar_kosmetyka/',
  // dodaj:
  'https://www.google.com/maps/place/Shine+Car+%E2%80%93+Auto+Detailing+%C5%81uk%C3%B3w/',
],
```

---

## ℹ️ Nice-to-have (kolejne 2–4 tygodnie)

### N1. E-E-A-T uplift
- Dodaj sekcję "O nas" do huba lub footera z imieniem właściciela ("Tomasz Nastały — założyciel ShineCar, X lat w detailingu, certified Gyeon installer" jeśli faktycznie).
- Dodaj `Person` JSON-LD typu autor (`@type: Person`, `jobTitle`, `worksFor: ShineCar`) do strony "O nas" jeśli istnieje.
- Wzmocnij `Organization`/`AutomotiveBusiness` o `knowsAbout: ['detailing samochodowy', 'powłoki ceramiczne', 'folie PPF', 'korekta lakieru']`.

### N2. Reviews uplift
- Aggregate rating ma 3 — generuj prośby o opinie po realizacjach.
- Po przekroczeniu 10+ realnych Google reviews — uaktualnij `reviewCount` w `SeoJsonLd.tsx:57`.

### N3. Blog content cluster
Stwórz wpisy blogowe linkujące do huba:
- "Powłoka ceramiczna vs grafenowa vs elastomerowa — która jest najlepsza?"
- "Czy powłoka ceramiczna chroni przed kamieniami? Mit vs rzeczywistość"
- "Ile kosztuje zabezpieczenie lakieru w Łukowie? Pełen rozkład cen 2026"

Każdy taki blog daje hubowi internal link z anchor textem zawierającym primary keyword.

### N4. Schema rich results validacja
Po deployu uruchomić:
- https://search.google.com/test/rich-results
- https://validator.schema.org

dla `https://shinecar.pl/powloka-ochronna-na-auto-lukow` i `/powloka-grafenowa-lukow`.

### N5. Po deployu — uruchom skrypty z env-limit listy
```bash
SKILL_DIR=/Users/tomasznastaly/.claude/skills/seo
python3 $SKILL_DIR/scripts/pagespeed.py https://shinecar.pl/powloka-ochronna-na-auto-lukow --strategy mobile
python3 $SKILL_DIR/scripts/robots_checker.py https://shinecar.pl
python3 $SKILL_DIR/scripts/broken_links.py https://shinecar.pl/powloka-ochronna-na-auto-lukow
python3 $SKILL_DIR/scripts/redirect_checker.py https://shinecar.pl/powloka-ochronna-na-auto-lukow
python3 $SKILL_DIR/scripts/social_meta.py https://shinecar.pl/powloka-ochronna-na-auto-lukow
python3 $SKILL_DIR/scripts/llms_txt_checker.py https://shinecar.pl
```

### N6. Internal anchor variety
Linki "Folia PPF Łuków →" / "Korekta lakieru Łuków —" — dorzuć kilka wariantów anchora:
- "Sprawdź folie PPF w Łukowie"
- "Folia PPF — kompendium ochrony przed kamieniami"
- "Profesjonalna korekta lakieru w ShineCar"

### N7. `priceRange` precyzja
SeoJsonLd ma `'PLN 150 - 16000'` — szeroki zakres OK, ale można uzupełnić per-service `Service` JSON-LD `offers.priceRange` zamiast pojedynczego `price`.

---

## Quick Wins Checklist (pierwszy commit po audicie)

- [ ] M1 — skróć title huba
- [ ] M1 — skróć title elastomerowej + dodaj `| ShineCar`
- [ ] M2 — skróć meta description huba
- [ ] M2 — skróć meta description cennika
- [ ] M3 — decyzja FAQPage (jeśli usuwamy: 11 plików)
- [ ] M4 — zweryfikuj GMB i ewentualnie zmień `addressLocality`
- [ ] S1 — AI crawler allowlist w robots.ts
- [ ] S1 — public/llms.txt
- [ ] S4 — GMB URL w sameAs

To 9 zmian, ~30 minut roboty. Po nich score skacze z ~78 do ~88.

---

## Score Forecast

| Stan | Score |
|---|---|
| Obecny | 78 / 100 (Good) |
| Po quick wins | 88 / 100 (Good→Excellent) |
| Po wszystkim z planu (M+S+N) | 93 / 100 (Excellent) |
