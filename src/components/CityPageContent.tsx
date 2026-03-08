"use client";
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import { services } from '@/data/services';
import type { CityData } from '@/data/cities';
import { Phone, Mail, ArrowRight, MapPin, Clock } from 'lucide-react';

const cityDeclensions: Record<string, { locative: string; genitive: string }> = {
  'Łuków': { locative: 'Łukowie', genitive: 'Łukowa' },
  'Siedlce': { locative: 'Siedlcach', genitive: 'Siedlec' },
  'Międzyrzec Podlaski': { locative: 'Międzyrzecu Podlaskim', genitive: 'Międzyrzeca Podlaskiego' },
  'Radzyń Podlaski': { locative: 'Radzyniu Podlaskim', genitive: 'Radzynia Podlaskiego' },
};

export default function CityPageContent({ city }: { city: CityData }) {
  const declension = cityDeclensions[city.name] || { locative: city.name, genitive: city.name };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="py-32 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="mb-6">
                <Breadcrumbs
                  items={[
                    { name: 'Strona główna', href: '/' },
                    { name: `Detailing ${city.name}` },
                  ]}
                />
              </div>

              <div className="text-center space-y-6 mb-12">
                <div className="h-1 w-16 bg-primary rounded-full mx-auto" />
                <h1 className="font-luxury text-4xl lg:text-5xl text-foreground">
                  {city.heading}
                </h1>
                {city.distance && (
                  <div className="flex items-center justify-center gap-2 text-muted-foreground">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>Nasz warsztat: {city.distance}</span>
                  </div>
                )}
              </div>

              <div className="space-y-4 mb-16">
                {city.intro.map((paragraph, i) => (
                  <p key={i} className="text-muted-foreground text-lg leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="space-y-8 mb-16">
                <h2 className="font-luxury text-3xl text-foreground text-center">
                  Nasze usługi w {declension.locative}
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {services.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/uslugi/${service.slug}`}
                      className="group border border-border rounded-2xl overflow-hidden bg-gradient-glass backdrop-blur-sm hover:border-primary/50 transition-colors"
                    >
                      <div className="h-40 overflow-hidden relative">
                        <Image
                          src={service.image}
                          alt={`${service.title} — ${city.name}`}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      </div>
                      <div className="p-5 space-y-2">
                        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          {service.title}
                        </h3>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock className="w-3 h-3" />
                          <span>{service.duration}</span>
                        </div>
                        <div className="flex items-center justify-between pt-1">
                          <span className="text-sm text-primary font-medium">{service.price.split('|')[0].trim()}</span>
                          <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="border border-border rounded-2xl bg-gradient-glass p-8 text-center space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">
                  Umów wizytę — {city.name}
                </h2>
                <p className="text-muted-foreground max-w-xl mx-auto">
                  Zadzwoń lub napisz, aby umówić się na detailing samochodu. Obsługujemy klientów z {declension.genitive} i okolic.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                  <a
                    href="tel:+48782195321"
                    className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:brightness-110 transition-all"
                  >
                    <Phone className="w-4 h-4" />
                    +48 782 195 321
                  </a>
                  <a
                    href="mailto:shinecarkosmetyka@o2.pl"
                    className="flex items-center gap-2 px-6 py-3 border border-border rounded-full text-foreground hover:border-primary transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    shinecarkosmetyka@o2.pl
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
