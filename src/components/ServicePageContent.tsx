"use client";
import Image from 'next/image';
import Link from 'next/link';
import type { ServiceData, ServiceSection } from '@/data/services';
import { services, getServiceUrl } from '@/data/services';
import { cities } from '@/data/cities';
import { getGoogleReview } from '@/data/googleReviews';
import GoogleReviewCard from './GoogleReviewCard';
import { Phone, Clock, CheckCircle, Lightbulb, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

interface Props {
  service: ServiceData;
}

function SectionBlock({ section }: { section: ServiceSection }) {
  return (
    <div className="space-y-4">
      <h2 className="font-luxury text-2xl text-foreground">{section.heading}</h2>
      {section.paragraphs?.map((p, j) => (
        <p key={j} className="text-muted-foreground leading-relaxed">{p}</p>
      ))}
      {section.bullets && (
        <ul className="space-y-3">
          {section.bullets.map((bullet, j) => (
            <li key={j} className="flex items-start gap-2 text-muted-foreground">
              <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      )}
      {section.tip && (
        <div className="border border-primary/30 rounded-xl p-4 bg-primary/5 flex items-start gap-3">
          <Lightbulb className="w-5 h-5 text-primary shrink-0 mt-0.5" />
          <p className="text-foreground text-sm"><span className="font-semibold">Pro Tip:</span> {section.tip}</p>
        </div>
      )}
    </div>
  );
}

export default function ServicePageContent({ service }: Props) {
  const isCoating = ['powloki-ceramiczne', 'powloki-grafenowe', 'powloki-elastomerowe'].includes(service.slug);
  const featuredSection = service.sections?.[0];
  const restSections = service.sections?.slice(1) ?? [];
  const review = service.googleReviewId ? getGoogleReview(service.googleReviewId) : null;

  return (
    <div className="space-y-12">
      {/* 1. Hero */}
      <div className="space-y-6">
        <div className="h-1 w-16 bg-primary rounded-full" />
        <h1 className="font-luxury text-4xl lg:text-5xl text-foreground">
          {service.pageTitle || `${service.title} — Łuków`}
        </h1>
        <p className="text-lg text-muted-foreground">{service.description}</p>
      </div>

      {/* 2. Cennik + czas realizacji — sprzedażowo na top */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="border border-border rounded-2xl p-6 bg-gradient-glass backdrop-blur-sm">
          <h3 className="font-semibold text-lg text-foreground mb-2">Cennik</h3>
          <p className="text-primary font-medium text-lg">{service.price}</p>
        </div>
        <div className="border border-border rounded-2xl p-6 bg-gradient-glass backdrop-blur-sm">
          <div className="flex items-center gap-2 mb-2">
            <Clock className="w-5 h-5 text-primary" />
            <h3 className="font-semibold text-lg text-foreground">Czas realizacji</h3>
          </div>
          <p className="text-muted-foreground">{service.duration}</p>
        </div>
      </div>

      {/* 3. CTA: zadzwoń / wycena — quick action po cenniku */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
        <a
          href="tel:+48782195321"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:brightness-110 transition-all whitespace-nowrap no-underline"
        >
          <Phone className="w-4 h-4 shrink-0" />
          <span className="whitespace-nowrap">Zadzwoń: +48 782 195 321</span>
        </a>
        <Link
          href="/wycena"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border rounded-full text-foreground hover:border-primary transition-colors whitespace-nowrap no-underline"
        >
          Zapytaj o wycenę online <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* 4. Hub link banner — only for coatings */}
      {isCoating && (
        <div className="border border-primary/30 rounded-2xl p-6 bg-primary/5 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:justify-between">
          <div>
            <h3 className="font-semibold text-foreground mb-1">
              Wahasz się między ceramiką, grafenem a elastomerem?
            </h3>
            <p className="text-sm text-muted-foreground">
              Porównanie wszystkich trzech technologii w jednym miejscu — twardość, trwałość, ceny od.
            </p>
          </div>
          <Link
            href="/powloka-ochronna-na-auto-lukow"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-full font-medium hover:brightness-110 transition-all whitespace-nowrap no-underline"
          >
            Zobacz porównanie powłok <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      )}

      {/* 5. Opinia Google — social proof */}
      {review && (
        <div>
          <h2 className="font-luxury text-2xl text-foreground mb-6">
            Co mówią o nas klienci
          </h2>
          <GoogleReviewCard review={review} asSection={false} />
        </div>
      )}

      {/* 6. Korzyści (featured section) — sprzedażowa sekcja na górze */}
      {featuredSection && <SectionBlock section={featuredSection} />}

      {/* 7. Image — wizualizacja */}
      <div className="rounded-3xl overflow-hidden border border-border">
        <Image
          src={service.image}
          alt={service.title}
          width={1200}
          height={600}
          className="w-full h-64 md:h-96 object-cover"
          sizes="(max-width: 768px) 100vw, 896px"
        />
      </div>

      {/* 8. Wprowadzający opis (content paragraphs) */}
      {service.content.length > 0 && (
        <div className="space-y-4">
          {service.content.map((paragraph, i) => (
            <p key={i} className="text-muted-foreground leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      )}

      {/* 9. Pozostałe sekcje SEO */}
      {restSections.map((section, i) => (
        <SectionBlock key={i} section={section} />
      ))}

      {/* 10. Features (only if no sections) */}
      {!service.sections && (
        <div className="border border-border rounded-2xl p-6 bg-gradient-glass backdrop-blur-sm">
          <h2 className="font-semibold text-xl text-foreground mb-4">Co otrzymujesz</h2>
          <ul className="grid md:grid-cols-2 gap-3">
            {service.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-2 text-muted-foreground">
                <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* 11. FAQ */}
      {service.faq.length > 0 && (
        <div>
          <h2 className="font-luxury text-2xl text-foreground mb-6">
            Najczęściej zadawane pytania
          </h2>
          <Accordion type="single" collapsible className="space-y-2">
            {service.faq.map((item, i) => (
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
      )}

      {/* 12. Related services */}
      {services.filter((s) => s.slug !== service.slug).length > 0 && (
        <div>
          <h2 className="font-luxury text-2xl text-foreground mb-6">
            Inne usługi, które mogą Cię zainteresować
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services
              .filter((s) => s.slug !== service.slug)
              .slice(0, 3)
              .map((s) => (
                <Link
                  key={s.slug}
                  href={getServiceUrl(s)}
                  className="border border-border rounded-2xl p-5 bg-gradient-glass backdrop-blur-sm hover:border-primary/50 transition-colors group"
                >
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                    {s.description.slice(0, 100)}...
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm text-primary font-medium mt-3">
                    Dowiedz się więcej <ArrowRight className="w-3 h-3" />
                  </span>
                </Link>
              ))}
          </div>
          <div className="mt-4 text-center">
            <Link href="/cennik" className="text-primary hover:text-primary/80 text-sm font-medium transition-colors">
              Zobacz pełny cennik usług →
            </Link>
          </div>
        </div>
      )}

      {/* 13. Geo links */}
      <div className="border border-border rounded-2xl p-6 bg-gradient-glass backdrop-blur-sm">
        <h2 className="font-semibold text-lg text-foreground mb-3">Obsługujemy klientów z okolicznych miast</h2>
        <div className="flex flex-wrap gap-2">
          {cities.map((city) => (
            <Link
              key={city.slug}
              href={`/${city.slug}`}
              className="px-3 py-1.5 text-sm border border-border rounded-full text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
            >
              Detailing {city.name}
            </Link>
          ))}
        </div>
      </div>

      {/* 14. CTA */}
      <div className="border border-border rounded-3xl p-8 bg-gradient-glass backdrop-blur-sm text-center space-y-4">
        <h2 className="font-luxury text-2xl text-foreground">
          Zainteresowany? Umów się na wizytę
        </h2>
        <p className="text-muted-foreground">
          Zadzwoń lub napisz — odpowiemy tego samego dnia.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button asChild>
            <a href="tel:+48782195321" className="whitespace-nowrap">
              <Phone className="w-4 h-4 mr-2 shrink-0" />
              <span className="whitespace-nowrap">Zadzwoń: +48 782 195 321</span>
            </a>
          </Button>
          <Button asChild variant="outline">
            <a href="mailto:shinecarkosmetyka@o2.pl">
              Napisz email
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
