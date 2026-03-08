"use client";
import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import { services } from '@/data/services';
import { ArrowRight, CheckCircle, Clock, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function OfertaPage() {
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
            <div className="max-w-5xl mx-auto">
              <div className="mb-6">
                <Breadcrumbs
                  items={[
                    { name: 'Strona główna', href: '/' },
                    { name: 'Oferta' },
                  ]}
                />
              </div>

              <div className="text-center space-y-6 mb-12">
                <div className="h-1 w-16 bg-primary rounded-full mx-auto" />
                <h1 className="font-luxury text-4xl lg:text-5xl text-foreground">
                  Nasze Usługi Detailingu
                </h1>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Oferujemy kompleksową ochronę i pielęgnację Twojego pojazdu. Każda usługa jest wykonywana z najwyższą precyzją, przy użyciu produktów klasy premium.
                </p>
              </div>

              <div className="space-y-10">
                {services.map((service) => (
                  <article
                    key={service.slug}
                    id={service.slug}
                    className="bg-gradient-glass rounded-3xl border border-border overflow-hidden shadow-subtle"
                  >
                    <div className="grid lg:grid-cols-2">
                      <div className="relative h-64 lg:h-auto lg:min-h-[320px]">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                      </div>
                      <div className="p-6 lg:p-8 space-y-4">
                        <h2 className="text-2xl font-semibold text-foreground">
                          {service.title}
                        </h2>
                        <p className="text-muted-foreground leading-relaxed">
                          {service.description}
                        </p>
                        <ul className="space-y-2">
                          {service.features.slice(0, 4).map((feature, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="flex items-center gap-4 pt-2">
                          <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                            <Clock className="w-4 h-4" />
                            <span>{service.duration}</span>
                          </div>
                        </div>
                        <div className="pt-2">
                          <Link
                            href={`/uslugi/${service.slug}`}
                            className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:brightness-110 transition-all"
                          >
                            Dowiedz się więcej
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              <div className="mt-12 text-center space-y-6">
                <p className="text-muted-foreground">
                  Szukasz szczegółowych cen? Sprawdź nasz{' '}
                  <Link href="/cennik" className="text-primary hover:underline font-medium">
                    cennik usług
                  </Link>.
                </p>
              </div>

              <div className="mt-8 border border-border rounded-3xl p-8 bg-gradient-glass backdrop-blur-sm text-center space-y-4">
                <h2 className="font-luxury text-2xl text-foreground">
                  Nie wiesz, którą usługę wybrać?
                </h2>
                <p className="text-muted-foreground max-w-xl mx-auto">
                  Zadzwoń lub napisz — doradzimy najlepsze rozwiązanie dla Twojego auta. Bezpłatna konsultacja.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <Button asChild>
                    <a href="tel:+48782195321">
                      <Phone className="w-4 h-4 mr-2" />
                      Zadzwoń: 782 195 321
                    </a>
                  </Button>
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
