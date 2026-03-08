"use client";
import Image from 'next/image';
import Link from 'next/link';
import type { ServiceData } from '@/data/services';
import { services } from '@/data/services';
import { cities } from '@/data/cities';
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

export default function ServicePageContent({ service }: Props) {
  return (
    <div className="space-y-12">
      {/* Hero */}
      <div className="space-y-6">
        <div className="h-1 w-16 bg-primary rounded-full" />
        <h1 className="font-luxury text-4xl lg:text-5xl text-foreground">
          {service.pageTitle || `${service.title} — Łuków`}
        </h1>
        <p className="text-lg text-muted-foreground">{service.description}</p>
      </div>

      {/* Image */}
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

      {/* Content paragraphs */}
      <div className="space-y-4">
        {service.content.map((paragraph, i) => (
          <p key={i} className="text-muted-foreground leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>

      {/* Rich sections */}
      {service.sections && service.sections.map((section, i) => (
        <div key={i} className="space-y-4">
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
      ))}

      {/* Features (only if no sections) */}
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

      {/* Price & Duration */}
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

      {/* FAQ */}
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

      {/* Related services */}
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
                  href={`/uslugi/${s.slug}`}
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

      {/* Geo links */}
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

      {/* CTA */}
      <div className="border border-border rounded-3xl p-8 bg-gradient-glass backdrop-blur-sm text-center space-y-4">
        <h2 className="font-luxury text-2xl text-foreground">
          Zainteresowany? Umów się na wizytę
        </h2>
        <p className="text-muted-foreground">
          Zadzwoń lub napisz — odpowiemy tego samego dnia.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button asChild>
            <a href="tel:+48782195321">
              <Phone className="w-4 h-4 mr-2" />
              Zadzwoń: 782 195 321
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
