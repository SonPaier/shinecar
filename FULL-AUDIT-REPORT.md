# SEO Audit Report — ShineCar (restructure powłok ochronnych)

**Date:** 2026-04-29
**Branch:** seo/url-restructure-and-optimization
**Scope:** Nowy hub `/powloka-ochronna-na-auto-lukow`, nowa usługa grafenowa (`/powloka-grafenowa-lukow`), wzbogacone strony ceramicznej i elastomerowej, banner hub-link na 8 stronach miast, JSON-LD geo/openingHours/hasMap.

**Methodology:** LLM-first analiza source code (Next.js App Router) + walidacja struktur względem rubryki audytowej. Strony nie są jeszcze deployed, więc external fetch (`fetch_page.py`, PageSpeed, robots checker) został pominięty — flagowane jako *Environment Limitation*. Confidence labels: `Confirmed` (z plików), `Likely` (na bazie wzorców), `Hypothesis` (gdzie brak deploy).

---

## Executive Summary

| Kategoria | Score | Confidence | Komentarz |
|---|---|---|---|
| Technical SEO | 82 / 100 | Confirmed | Build OK, 37 stron static. Brak `llms.txt`. Niektóre titles przekraczają 60 znaków. |
| Content / E-E-A-T | 74 / 100 | Confirmed | Dobra ekspertyza techniczna, brak autora/bylines, brak certyfikatów. |
| On-Page SEO | 86 / 100 | Confirmed | Hierarchia H1/H2/H3 czysta, primary keyword w H1. Internal linking domknięty. |
| Schema / Structured Data | 70 / 100 | Confirmed | Solidne JSON-LD (Service, AutomotiveBusiness, BreadcrumbList) — **ale FAQPage używany na stronach komercyjnych**. |
| Performance (CWV) | n/a | Env limit | Brak deploya = brak PageSpeed. Static SSG + WebP/Image z next/image — sygnały sugerują dobry CWV. |
| Image Optimization | 60 / 100 | Confirmed | Te same 3 obrazki dla 3 powłok. OG image huba = generic logo. Czeka na zdjęcia. |
| AI Search / GEO | 78 / 100 | Confirmed | FAQ format AI-friendly, ale brak `llms.txt` i AI-crawler allowlist. |
| **Local SEO** | **92 / 100** | Confirmed | NAP spójny, geo dokładny (51.8451033, 22.3348136), hasMap, openingHours, areaServed (8 miast), aggregateRating, sameAs. |

**Overall (weighted):** ~78 / 100 — *Good*. Po naprawie 4 must-fix → ~88.

---

## 1. Tagi tytułów i meta

### Title tags (long-form)

| Strona | Title | Długość | Status |
|---|---|---|---|
| Hub `/powloka-ochronna-na-auto-lukow` | Powłoka ochronna na auto Łuków — Ceramika, Grafen, Elastomer \| ShineCar | **71** | ⚠️ +11 ponad ~60 znaków limit |
| `/powloka-ceramiczna-lukow` | Powłoka Ceramiczna Łuków — Cena od 1000 zł \| ShineCar | 53 | ✅ |
| `/powloka-grafenowa-lukow` | Powłoka Grafenowa Łuków — Cena od 1 200 zł \| ShineCar | 53 | ✅ |
| `/powloka-elastomerowa-lukow` | Powłoki Elastomerowe Łuków — Najtrwalsza Ochrona Lakieru Samochodu | **66** | ⚠️ +6 ponad limit, brak brand `\| ShineCar` |
| `/cennik` | Cennik Detailingu Łuków — Folie PPF, Korekta, Powłoki Ceramiczne i Grafenowe | **76** | ⚠️ +16 ponad limit |

**Finding:** Hub i elastomerowa będą obcinane w SERP-ach (~580 px ≈ 60 chars).
**Evidence:** Bezpośredni pomiar `wc -m` na każdym ciągu.
**Impact:** Niższy CTR — obcięty title traci primary keyword albo brand.
**Fix:** Skróć — patrz ACTION-PLAN.

### Meta descriptions

| Strona | Długość | Status |
|---|---|---|
| Hub | 171 | ⚠️ +11 ponad ~160 |
| Ceramiczna | 138 | ✅ |
| Grafenowa | 159 | ✅ borderline |
| Elastomerowa | 144 | ✅ |
| Cennik | 198 | ⚠️ +38 |

---

## 2. Struktura nagłówków (H1/H2/H3)

### Hub `/powloka-ochronna-na-auto-lukow`
**Confirmed:** 1× H1 ("Powłoka ochronna na auto Łuków"), 11× H2 (sekcje), liczne H3 (karty technologii, korzyści, kroki procesu, geo chips). Brak duplikatów H1, hierarchia czysta.

### `/[serviceSlug]` (ceramiczna, grafenowa, elastomerowa)
**Confirmed:** 1× H1 z `pageTitle`, H2 dla każdej `section.heading`, **brak H3** w pytaniach FAQ — `Accordion` używa `<button>` w trigger, nie heading. To strata: pytania FAQ to keyword-rich nagłówki które w innym strukturze byłyby H3.

**Finding:** FAQ accordion items nie są semantycznymi nagłówkami.
**Impact:** Strata long-tail keywords w hierarchii nagłówków + drobny minus a11y.
**Fix:** Owinąć `AccordionTrigger` w `<h3>` (shadcn pozwala — `asChild` lub własne wrapery).
**Severity:** ⚠️ Warning

---

## 3. Internal linking — Confirmed

| Z | Do | Status |
|---|---|---|
| Hub | 3× powłoka, /folia-ppf-lukow, /korekta-lakieru-lukow, /cennik, /wycena, 8× /detailing-* | ✅ kompletne |
| /[serviceSlug] | 3× pozostałe usługi (related), /cennik, 8× /detailing-* (geo links), kontakty | ✅ przez `ServicePageContent` |
| /detailing-* | hub (banner CTA), /[serviceSlug] (grid usług) | ✅ dodane dziś |
| Header dropdown | hub (top), 11× usług | ✅ |

**Bezsiroce:** brak. Każda nowa strona ma min. 5 wewnętrznych linków przychodzących.

---

## 4. JSON-LD / Schema

### ✅ Confirmed correct
- `AutomotiveBusiness` (SeoJsonLd, w layout root) — pełny: NAP, geo (51.8451033, 22.3348136), hasMap, openingHours (pn–pt 8–18, sob 9–16), areaServed (8 miast), sameAs (FB, IG), aggregateRating (5.0/3), priceRange "PLN 150 - 16000", hasOfferCatalog
- `Service` per usługa (ServiceJsonLd) — provider, areaServed, address, **geo + hasMap (dziś dodane)**, openingHours (dziś dodane), offers
- `Service` z `hasOfferCatalog` na hubie z 3 powłokami i URL-ami do indywidualnych stron
- `BreadcrumbList` (komponent Breadcrumbs) — generowany na każdej stronie z breadcrumbs

### 🔴 Critical
**Finding:** `FAQPage` schema na stronach komercyjnych.
**Evidence:** `FaqJsonLd` użyty w `[serviceSlug]/page.tsx:59`, `powloka-ochronna-na-auto-lukow/page.tsx:350`, `cennik/page.tsx`, oraz na 8× `detailing-*/page.tsx:54`. Łącznie 11 instancji.
**Impact:** Od sierpnia 2023 Google ogranicza FAQ rich results do witryn rządowych i służby zdrowia. ShineCar to biznes komercyjny — schema będzie ignorowane przy renderowaniu rich results. Nie ma penalizacji, ale też nie ma żadnej korzyści; przy tym konsumuje miejsce w HTML i może wprowadzać zamieszanie.
**Fix:** Usunąć `FaqJsonLd` ze wszystkich 11 instancji. **Zachować** treść FAQ w HTML (świetna pod AEO/AI Overviews i pod userów). Alternatywa: zostawić, ale to czysty no-op.
**Severity:** 🔴 Critical (per skill rule #3)
**Confidence:** Confirmed.

### ⚠️ Warning
**Finding:** JSON-LD `addressLocality: 'Świderki'` — geo wskazuje na wieś, nie na Łuków.
**Impact:** Może mylić Google przy parowaniu z GMB ("Shine Car – Auto Detailing Łuków"). GMB place name wskazuje "Łuków", ale `addressLocality` w schemach mówi "Świderki".
**Fix:** Sprawdzić w GMB jaką "city" tam wpisano. Jeśli "Łuków" — zmienić `addressLocality: 'Łuków'`, dodać `addressLocality.alternateName: 'Świderki'` lub przenieść Świderki do `streetAddress`.
**Severity:** ⚠️ Warning
**Confidence:** Likely.

---

## 5. E-E-A-T

### Experience
- ✅ Konkretny proces 5-etapowy z technicznymi terminami (LED point lighting, miernik grubości, dwa wiadra)
- ❌ Brak liczby lat działalności / liczby wykonanych aplikacji ("od X klientów / Y aplikacji")
- ❌ Brak realizacji / before-after (świadomie odłożone do zdjęć)

### Expertise
- ✅ Solidna terminologia: SiO2, GO, 9H, 800°C, hydrofobowość, swirl marki, water spoty, dekontaminacja
- ✅ Marki produktów (Gyeon, Ultrafit) — sygnał profesjonalizmu
- ❌ Brak nazwy/profilu właściciela ani technika
- ❌ Brak certyfikatów / accreditacji (jeśli istnieją — np. Certified Gyeon Installer — warto wymienić)

### Authoritativeness
- ✅ JSON-LD `sameAs` z FB i IG
- ✅ AggregateRating (5.0 / 3) — niska liczba; warto zwiększyć
- ❌ Brak linków zewnętrznych do branżowych referencji (Gyeon distributor, Ultrafit certified list)

### Trustworthiness
- ✅ Pełny NAP, godziny, mapa, telefon, email — Confirmed
- ✅ **Brak fałszywych obietnic gwarancji** na powłoki — wszędzie "deklarowana trwałość producenta". Audit Confirmed: `grep "gwarancj" services.ts` w sekcjach powłok zwraca tylko fragmenty pisma "deklarowana" lub kontekst PPF.
- ✅ Konkretne ceny (1 000, 1 200, 1 800 zł netto) z odsyłaczem do `/cennik` i `/wycena`
- ⚠️ Brak polityki zwrotów / reklamacji w kontekście usług (jeśli istnieje, podlinkować z hub CTA)

**Overall E-E-A-T:** 74 / 100. Główny gap: brak person/autorstwa.

---

## 6. Local SEO — Confirmed (post-fixes)

| Element | Status |
|---|---|
| NAP spójny w 3 plikach JSON-LD (SeoJsonLd, ServiceJsonLd, hub) | ✅ |
| Geo coordinates (51.8451033, 22.3348136 — z Place ID embedu) | ✅ |
| `hasMap` URL | ✅ |
| `openingHoursSpecification` (pn–pt 8–18, sob 9–16) | ✅ |
| `addressRegion: 'lubelskie'` | ✅ |
| `areaServed` (8 miast) | ✅ |
| 8 dedykowanych stron miast z dystansami i lokalnymi FAQ | ✅ |
| Hub linkuje do 8 miast (geo coverage section) | ✅ |
| Każda strona miasta linkuje do huba (banner) | ✅ |
| Telefon w formacie `+48 782 195 321` (E.164-friendly) | ✅ |
| GMB Place ID w embed iframe (Contact.tsx) | ✅ |
| `sameAs`: FB + IG | ✅ |

**Brak:** Linkedin, GMB URL w `sameAs`, Google Maps short URL.

---

## 7. AEO / GEO (AI Search Readiness)

| Element | Status |
|---|---|
| FAQ format pyt-odpow (good for AI Overviews, ChatGPT, Perplexity) | ✅ |
| Pierwsze zdanie odpowiedzi = direct answer | ✅ większość |
| Konkretne liczby (ceny, czasy, kąty hydrofobowości, °C) | ✅ |
| Strukturyzowane sekcje z H2 odpowiadającymi popularnym zapytaniom | ✅ "Powłoka ceramiczna czy folia PPF — co wybrać?" |
| `llms.txt` w `/public/` | ❌ brak |
| AI crawler allowlist w robots.ts (GPTBot, ClaudeBot, PerplexityBot, Applebot-Extended, Google-Extended) | ⚠️ obecnie `User-agent: *` z `allow: /` — implicit allow, ale brak explicit |
| Author / Organization JSON-LD `knowsAbout` | ❌ brak |

**Score:** 78 / 100. Po dodaniu `llms.txt` i explicit AI allowlist → 90+.

---

## 8. Kanibalizacja keywordów

| Strona | Primary keyword | Konflikt? |
|---|---|---|
| Hub | "powłoka ochronna na auto Łuków" / "powłoki ochronne Łuków" | brak |
| Ceramiczna | "powłoka ceramiczna Łuków" | brak (różny rdzeń) |
| Grafenowa | "powłoka grafenowa Łuków" | brak |
| Elastomerowa | "powłoki elastomerowe Łuków" / "powłoka elastomerowa Łuków" | brak |
| /cennik | "cennik detailing Łuków" | brak |

**Confirmed: brak kanibalizacji.** Hub i 3 podstrony celują w różne intent-tier (wybór technologii vs konkretna technologia).

⚠️ **Drobne ryzyko:** Hub w content używa frazy "powłoka ceramiczna w Łukowie" w sekcji porównania — to overlap z usługą ceramiczną. Wpływ niski (kontekst porównawczy), ale warto zostawić anchor text "powłoka ceramiczna" z linkiem do `/powloka-ceramiczna-lukow` (już zrobione w tabeli).

---

## 9. Image / Media Optimization

**Finding:** Wszystkie 3 powłoki (ceramiczna, grafenowa, elastomerowa) i ich karty na hubie używają tych samych 3 placeholder URL-i z `cdn.builder.io`. Dwa z trzech kart (ceramiczna i elastomerowa) faktycznie linkują do **różnych** zdjęć, ale w `services.ts` wszystkie 3 powłoki mają `image: serviceImage1` — czyli OG/social share pokazuje to samo zdjęcie.

**Impact:**
- Słabe sygnały dla Google Discover / Image Search
- Ten sam OG image w shares dla 3 różnych usług = niski CTR w social
- W AI Overviews thumbnail może być ten sam dla 3 wpisów

**Fix:** Po dostarczeniu zdjęć — różne zdjęcia per powłoka, plus dedykowany OG image dla huba (najlepiej kompozycja 3 powłok).

**Severity:** ⚠️ Warning. **Confidence:** Confirmed.

**Alt-text:** używamy `service.title` lub statycznego stringu — krótkie i opisowe. Acceptable, ale można wzbogacić ("Aplikacja powłoki grafenowej na czarnym lakierze — ShineCar Łuków").

---

## 10. Technical SEO

| Element | Status | Evidence |
|---|---|---|
| Build static (Next.js SSG) | ✅ | 37 stron prerenderowanych |
| sitemap.xml | ✅ | `/sitemap.ts` zawiera hub + servicePages + cityPages + blog |
| robots.txt | ⚠️ | Allow `/`, disallow `/_next/` `/api/`. **Brak explicit AI crawler allowlist.** Brak też explicit allow `/sitemap.xml`. |
| canonical | ✅ | per-page przez `metadata.alternates.canonical` |
| HTTPS | ✅ | All URLs `https://shinecar.pl` |
| Mobile responsive | ✅ | Tailwind breakpoints, viewport meta przez Next.js layout |
| Hreflang | n/a | Single-language Polish |
| 404 page | ✅ | `/not-found.tsx` istnieje |
| INP / Core Web Vitals | n/a (env limit) | Static + next/image — Likely good |

---

## Environment Limitations

- Strony `/powloka-ochronna-na-auto-lukow` i `/powloka-grafenowa-lukow` **nie są jeszcze wdrożone na produkcję** (branch `seo/url-restructure-and-optimization` przed merge). Nie można uruchomić: `pagespeed.py`, `robots_checker.py`, `broken_links.py`, `redirect_checker.py`, `social_meta.py`, `internal_links.py`, `llms_txt_checker.py`, `security_headers.py`. Confidence dla CWV/redirects/security: `Hypothesis`.
- Po deployu — uruchomić te skrypty na live URL.

---

## Findings Summary (severity-sorted)

| # | Severity | Finding | Files |
|---|---|---|---|
| 1 | 🔴 Critical | FAQPage schema na komercyjnym serwisie (per skill rule) | 11× plików |
| 2 | ⚠️ Warning | Hub title 71 znaków (cuts in SERP) | hub page.tsx:29 |
| 3 | ⚠️ Warning | Elastomerowa title 66 znaków, brak brand suffix | services.ts:431 |
| 4 | ⚠️ Warning | Cennik title 76 znaków | cennik/page.tsx:10 |
| 5 | ⚠️ Warning | Hub i cennik meta description >160 chars | 2 pliki |
| 6 | ⚠️ Warning | FAQ accordion bez semantycznych H3 | ServicePageContent.tsx + hub |
| 7 | ⚠️ Warning | `addressLocality: 'Świderki'` vs GMB `Łuków` | SeoJsonLd, ServiceJsonLd, hub |
| 8 | ⚠️ Warning | Brak `llms.txt` i explicit AI crawler allowlist | public/, robots.ts |
| 9 | ⚠️ Warning | Wszystkie 3 powłoki dzielą OG image | services.ts |
| 10 | ℹ️ Info | Brak autora / certyfikatów dla E-E-A-T | global |
| 11 | ℹ️ Info | Tylko 3 reviews w aggregateRating | SeoJsonLd |
| 12 | ℹ️ Info | Brak GMB URL w `sameAs` | SeoJsonLd |
| 13 | ℹ️ Info | Brak `<h3>` wokół FAQ accordion triggers (a11y + keyword) | komponenty |

---

## Files Generated
- `FULL-AUDIT-REPORT.md` (this file)
- `ACTION-PLAN.md` (priorytety + konkretne zmiany kodu)
