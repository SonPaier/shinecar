"use client";
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { AnimatedDiv } from '../hooks/animations';
import { motion } from 'framer-motion';
const marcinImage = 'https://cdn.builder.io/api/v1/image/assets%2F75ea2179cd6f4e158ae5465605ccca73%2F8ea53a0aa5194dc3a9fd6744055212b0?format=webp&width=800';

const About = () => {

  return (
    <section id="about" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="h-1 w-16 bg-primary rounded-full" />
            <AnimatedDiv>
              <h2 className="font-luxury text-4xl sm:text-5xl lg:text-6xl text-foreground">ShineCar Kosmetyka</h2>
            </AnimatedDiv>
            <AnimatedDiv>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Studio detailingu samochodowego klasy premium w Świderkach (sąsiednie miasto: Łuków, woj. lubelskie).
                Specjalizujemy się w foliach ochronnych PPF, powłokach ochronnych (ceramicznych, grafenowych, elastomerowych),
                korekcie lakieru oraz kompleksowej pielęgnacji wnętrza — z naciskiem na perfekcję każdego detalu.
              </p>
            </AnimatedDiv>
            <AnimatedDiv>
              <p className="text-base text-muted-foreground max-w-2xl">
                Założycielem i głównym detailerem ShineCar jest <strong className="text-foreground">Marcin Przybysławski</strong> —
                samochody przyjmuje osobiście, doradza przy doborze powłoki i odpowiada za jakość każdej realizacji.
              </p>
            </AnimatedDiv>
            <motion.ul
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.2 }}
            className="space-y-4">
              {[
                'Studio detailingu klasy premium — Świderki 155, gmina Łuków',
                'Pracujemy na markach Gyeon (powłoki) i Ultrafit (folie PPF)',
                'Folie PPF, powłoki ceramiczne, grafenowe i elastomerowe, korekta lakieru',
                'Indywidualna wycena po oględzinach lakieru — bez ukrytych kosztów',
                'Obsługujemy klientów z Łukowa, Siedlec, Radzynia, Międzyrzeca, Białej Podlaskiej, Garwolina, Ryk i Lubartowa',
              ].map((item, i) => (
                <li key={i} className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-primary/15 flex items-center justify-center mt-1 shrink-0">
                    <CheckCircle className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <span className="text-foreground/90">{item}</span>
                </li>
              ))}
            </motion.ul>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/powloka-ochronna-na-auto-lukow"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-full font-medium hover:brightness-110 transition-all"
              >
                Powłoki ochronne <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/uslugi"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-border text-foreground rounded-full font-medium hover:border-primary transition-colors"
              >
                Wszystkie usługi
              </Link>
            </div>
          </div>
          <div>
            <div className="relative aspect-[4/3] w-full">
              <Image src={marcinImage} alt="Marcin Przybysławski — założyciel i główny detailer ShineCar, studio detailingu w Świderkach (sąsiedztwo Łukowa)" fill className="object-cover rounded-3xl shadow-luxury" sizes="(max-width: 1024px) 100vw, 50vw" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
