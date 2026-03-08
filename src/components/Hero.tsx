"use client";
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { AnimatedP, AnimatedDiv } from '../hooks/animations';
const heroImage = 'https://cdn.builder.io/api/v1/image/assets%2F75ea2179cd6f4e158ae5465605ccca73%2F9eebaa4a7f7d4db3a5b81f4f46b76ff6?format=webp&width=800';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      {/* Background Image with enhanced overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImage}
          alt="Detailing samochodowy premium — ShineCar Łuków"
          fill
          priority
          className="object-cover opacity-30"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-deep-black/80 via-background/60 to-deep-black/40"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="min-h-screen flex items-center py-24">
          <div className="max-w-3xl space-y-10">
            <div className="h-1 w-20 bg-primary rounded-full" />
            <AnimatedDiv>
              <h1 className="font-luxury text-5xl sm:text-6xl lg:text-7xl leading-[1.1] text-foreground">ShineCar — Detailing Samochodowy i Folie PPF Łuków</h1>
            </AnimatedDiv>
            <AnimatedDiv>
              <h2 className="text-xl text-muted-foreground max-w-2xl font-normal">Profesjonalna ochrona i pielęgnacja Twojego samochodu. Wykonujemy aplikację folii PPF, korektę lakieru, powłoki ceramiczne oraz kompleksowy detailing wnętrza.</h2>
            </AnimatedDiv>
            <div className="flex flex-col sm:flex-row gap-5 pt-2">
              <AnimatedP>
                <Button
                size="lg"
                className="px-8 py-4 h-auto"
                onClick={() => {
                  const location = window.location.pathname;
                  if (location !== '/') {
                    // navigate via JS to trigger Index scroll behavior
                    window.location.href = '/#contact';
                    return;
                  }
                  const el = document.getElementById('contact');
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth' });
                    return;
                  }
                }}
              >
                Umów wizytę
                <ArrowRight className="ml-3 w-5 h-5" />
              </Button>
              </AnimatedP>
              <Button variant="ghost" size="lg" className="text-foreground/80 hover:text-primary" onClick={() => {
                const location = window.location.pathname;
                if (location !== '/') {
                  window.location.href = '/#services';
                  return;
                }
                const el = document.getElementById('services');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}>
                <AnimatedP>Poznaj ofertę</AnimatedP>
              </Button>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
