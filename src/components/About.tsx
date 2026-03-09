"use client";
import Image from 'next/image';
import { CheckCircle } from 'lucide-react';
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
                Studio detailingu samochodowego klasy premium. Specjalizujemy się w Foliach Ochronnych PPF,
                Powłokach Ochronnych, Korektach Lakieru oraz kompleksowej Pielęgnacji Wnętrza – z naciskiem na perfekcję i elegancję.
              </p>
            </AnimatedDiv>
            <motion.ul 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.2 }}
            className="space-y-4">
              {[
                'Studio detailingu klasy premium',
                'Folie PPF, Powłoki Ochronne, Korekta Lakieru',
                'Wysoki standard jakości i transparentna wycena',
                'Stacjonarnie — okolice Łukowa'
              ].map((item, i) => (
                <li key={i} className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-primary/15 flex items-center justify-center mt-1">
                    <CheckCircle className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <span className="text-foreground/90">{item}</span>
                </li>
              ))}
            </motion.ul>
          </div>
          <div>
            <div className="relative aspect-[4/3] w-full">
              <Image src={marcinImage} alt="Studio detailingu ShineCar — warsztat w okolicach Łukowa" fill className="object-cover rounded-3xl shadow-luxury" sizes="(max-width: 1024px) 100vw, 50vw" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
