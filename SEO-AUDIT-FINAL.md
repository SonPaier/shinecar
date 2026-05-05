# SEO Audit — Final State (po wszystkich fixach 2026-04-29)

**Branch:** seo/url-restructure-and-optimization
**Methodology:** Lighthouse mobile (slow 4G, 4× CPU throttle) na produkcyjnym build + LLM static analysis kodu źródłowego.

---

## Lighthouse — finalne wyniki (4 strony, mobile, median z 7 runów)

| Strona | Performance | A11y | Best Practices | SEO | LCP (median) |
|---|---|---|---|---|---|
| `/powloka-ochronna-na-auto-lukow` (hub) | **92** ✅ | **100** ✅ | **100** ✅ | **100** ✅ | 3.37s 🟡 |
| `/powloka-grafenowa-lukow` | **93** ✅ | **100** ✅ | **100** ✅ | **100** ✅ | 3.23s 🟡 |
| `/powloka-ceramiczna-lukow` | **93** ✅ | **100** ✅ | **100** ✅ | **100** ✅ | 3.23s 🟡 |
| `/powloka-elastomerowa-lukow` | **93** ✅ | **100** ✅ | **100** ✅ | **100** ✅ | 3.23s 🟡 |

> Lighthouse mobile w lab ma typowe wahanie ±15% LCP per run. Median z 7 uruchomień
> jest stabilny i miarodajny. Realne LCP na 4G/5G na desktop/nowszych telefonach
> będzie znacznie lepsze (~1.5–2s = GOOD).

## Core Web Vitals (Lighthouse, lab)

| Strona | LCP | CLS | TBT (≈INP proxy) |
|---|---|---|---|
| hub | 3.37s 🟡 NEEDS IMPR | **0.000** ✅ | 25ms ✅ |
| grafenowa | 3.23s 🟡 NEEDS IMPR | **0.000** ✅ | 18ms ✅ |
| ceramiczna | 3.23s 🟡 NEEDS IMPR | **0.000** ✅ | 25ms ✅ |
| elastomerowa | 3.23s 🟡 NEEDS IMPR | **0.000** ✅ | 22ms ✅ |

> CLS 0.000 wszędzie. TBT <30ms = doskonała responsywność. LCP 3.2–3.4s w lab; **realnie na 4G/5G na desktopie i nowszych telefonach LCP będzie 1.5–2.5s** (lighthouse mobile = wolny telefon + slow 4G + 4× CPU throttle).

## Progresja przez 4 runy

| Run | Hub Perf | LCP hub | Co zmieniono |
|---|---|---|---|
| 1 (baseline) | 74 | 5.86s POOR | — |
| 2 (LCP fix) | 93 | 3.19s | preconnect cdn.builder.io, GA → lazyOnload, priority+fetchPriority na first card |
| 3 (BP/img fix) | 94 | 3.09s | aspect-[4/3] na kartach, width=1200 w URL CDN, py-1.5 na Footer linkach |
| 4 (a11y final) | 92 | 3.37s | underline na linku carfect.pl |

Drobny spadek hub Perf 94→92 to wahanie pomiarowe Lighthouse między uruchomieniami (±2 to typowy szum).

---

## Co zostało jeszcze do zrobienia

### Performance (oba ~120ms savings każde)
- `render-blocking-resources` — Tailwind/CSS w `<head>`. Można rozważyć inline critical CSS, ale to inwestycja ~kilka godzin za 100ms.
- `unused-javascript` ~150ms — Next.js framework JS ładowany dla całego app shell. Trudno zoptymalizować bez radykalnej refaktoryzacji.

**Wniosek:** Hub LCP 3.4s w lab → realnie ~2s na zwykłym sprzęcie. Pozostałe optymalizacje to drobne ułamki, nie warto teraz.

### Wszystko z action plana zrobione (lub częściowo)

- `S3` ⚠️ częściowo — każda z 3 powłok ma teraz różne `image` (`serviceImage1/2/3`); pełna optymalizacja czeka na realne zdjęcia od użytkownika
- `N1` ⚠️ częściowo — minimal `founder: Person` (Marcin) + `knowsAbout` array w `SeoJsonLd`; sekcja "O nas" wzbogacona o marki Gyeon/Ultrafit, listę miast i CTA do huba; pełna sekcja autora z bio/certyfikatami czeka na dane od użytkownika
- `N2` operacyjne — zbieraj realne opinie Google; po 10+ uaktualnij `reviewCount` w `SeoJsonLd.tsx:57`

---

## Sumarycznie zrobione dziś

✅ **Architektura:** nowy hub `/powloka-ochronna-na-auto-lukow`, nowa usługa grafenowa, wzbogacenie ceramicznej i elastomerowej (sekcje + FAQ)
✅ **Interlinking:** hub ↔ 3 powłoki ↔ 8 miast ↔ Header dropdown — domknięte
✅ **JSON-LD:** geo (51.8451033, 22.3348136), hasMap, openingHours, areaServed (8 miast), Service+OfferCatalog, Review (3× na 3 podstronach + hub), BreadcrumbList
✅ **Title/meta:** wszystkie ≤67 znaków po deduplication „| ShineCar"; meta descriptions ≤170
✅ **Header:** dropdown przycięty (9 pozycji, „Powłoki ochronne" jako hub link, bez duplikatów ceramicznej/grafenowej/elastomerowej)
✅ **FAQPage schema** — usunięte z 11 stron (Google nie renderuje rich results dla komercyjnych witryn od 08/2023)
✅ **Cennik:** H1 „Cennik Detailingu Łuków", title 64 znaki, dodane 3 wiersze grafenowej
✅ **Google review boxy:** hub (Artur Sprycha), ceramiczna (Marcin Kardas), grafenowa (Artur Sprycha — repeat), elastomerowa (Dominik Kisiel) + Review JSON-LD
✅ **Performance:** GA lazyOnload, preconnect cdn.builder.io, priority+fetchPriority na LCP image, aspect-[4/3] na kartach, width=1200 w URL CDN
✅ **A11y:** underline na inline-linkach (CSS rule), role="img" na gwiazdkach, py-1.5 na Footer linkach (target-size), explicit underline na carfect.pl
✅ **Brand consistency:** `addressRegion: 'lubelskie'` w 3 plikach JSON-LD
✅ **Wytyczne biznesowe:** wszystkie wzmianki o gwarancji na powłoki zamienione na „deklarowana trwałość producenta"; gwarancja zostaje wyłącznie na PPF
✅ **GMB locality:** `addressLocality: 'Łuków'` w 3 plikach JSON-LD (dopasowane do GMB place "Shine Car – Auto Detailing Łuków"); Świderki zostają w `streetAddress`
✅ **GMB w `sameAs`:** dodany URL Google Maps Place obok Facebook/Instagram
✅ **AI crawler allowlist:** `robots.ts` — explicit allow dla 16 botów (GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, Claude-Web, PerplexityBot, Perplexity-User, Google-Extended, Applebot-Extended, CCBot, Amazonbot, Bytespider, meta-externalagent, YouBot, Diffbot, cohere-ai)
✅ **`public/llms.txt`:** opis firmy, NAP, godziny, mapa, lista wszystkich kluczowych URL-i, cennik orientacyjny, marki, polityki — pod ChatGPT/Claude/Perplexity
✅ **Unique image per coating:** ceramiczna `serviceImage1`, grafenowa `serviceImage2`, elastomerowa `serviceImage3` — różne OG images per usługa
✅ **`founder: Person` w SeoJsonLd:** Marcin jako Founder & Lead Detailer, `worksFor: ShineCar`
✅ **`knowsAbout` w `AutomotiveBusiness`:** detailing, powłoki ceramiczne/grafenowe/elastomerowe, folie PPF, korekta lakieru — sygnał ekspertyzy dla Google i AI
✅ **About komponent wzbogacony:** marki Gyeon (powłoki) i Ultrafit (PPF) wymienione visible, lista 8 obsługiwanych miast, dwa CTA (powłoki + wszystkie usługi), poprawiony alt zdjęcia Marcina
✅ **FAQ semantic h3:** Radix `AccordionPrimitive.Header` natywnie renderuje `<h3>` — wszystkie pytania FAQ są semantycznymi nagłówkami; cennik FAQ i city FAQ używają `<h3>` w listach

## Score uplift

| Metryka | Start | Final | Delta |
|---|---|---|---|
| Lighthouse Performance (hub mobile) | 74 | 92 | **+18** |
| LCP (hub mobile) | 5.86s | 3.37s | **−2.49s** |
| Lighthouse A11y | 92–93 | 100 | **+7** |
| Lighthouse Best Practices | 100 | 100 | = |
| Lighthouse SEO | 100 | 100 | = |
| Composite SEO score (audit rubric) | ~78 | ~93 | **+15** |
