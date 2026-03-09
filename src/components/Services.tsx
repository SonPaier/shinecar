"use client";
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Clock } from 'lucide-react';

const serviceImage1 = 'https://cdn.builder.io/api/v1/image/assets%2Fa59c3b14b9b7404f8e5c72990dc66950%2Fa70409b6c6f74d1f8eef91a32c353e5c?format=webp&width=800';
const serviceImage2 = 'https://cdn.builder.io/api/v1/image/assets%2F75ea2179cd6f4e158ae5465605ccca73%2Faa9360e1636e474abf453627071b5f19?format=webp&width=800';
const serviceImage3 = 'https://cdn.builder.io/api/v1/image/assets%2F75ea2179cd6f4e158ae5465605ccca73%2F4381a02e8bfa475ab87e0a6da7f9e7fa?format=webp&width=800';
const serviceImage4 = 'https://cdn.builder.io/api/v1/image/assets%2Fa59c3b14b9b7404f8e5c72990dc66950%2F9013f21d74f14265a7e8ba266de2e2e9?format=webp&width=800';

const servicesBg = 'https://cdn.builder.io/api/v1/image/assets%2F75ea2179cd6f4e158ae5465605ccca73%2F7823722033af4b2490d4db819a0021bc?format=webp&width=800';

type Service = {
  id: number;
  slug: string;
  title: string;
  description: string;
  features: string[];
  image: string;
  price: string;
  duration: string;
};

const Services: React.FC = () => {
  const services: Service[] = [
    {
      id: 1,
      slug: 'folie-ppf',
      title: 'FOLIE OCHRONNE PPF',
      description: `Folia ochronna PPF to przezroczysta, poliuretanowa warstwa zabezpieczająca lakier samochodu.`,
      features: ['Ochrona na lata', 'Hydrofobowość', 'Łatwość mycia'],
      image: serviceImage3,
      price: `Full Front: od 4 500 zł
Full Body: od 10 000 zł`,
      duration: '2-7 dni roboczych',
    },
    {
      id: 2,
      slug: 'korekta-lakieru',
      title: 'KOREKTA LAKIERU',
      description:
        `Profesjonalna korekta lakieru przywracająca pierwotny blask i usuwająca mikrorysy oraz zarysowania. Oczyszczanie i polerowanie lakieru.

        `,
      features: ['Usunięcie rys', 'Przywrócenie blasku', 'Ochrona UV'],
      image: serviceImage4,
      price: 'od 1 000 zł do 2 700 zł',
      duration: '1-3 dni roboczych',
    },
    {
      id: 3,
      slug: 'detailing-wnetrza',
      title: 'DETAILING WNĘTRZA',
      description:
        `Kompleksowe czyszczenie i szczegółowa pielęgnacja wnętrza pojazdu z użyciem profesjonalnych produktów.


        `,
      features: ['Czyszczenie tapicerki', 'Pielęgnacja skóry', 'Odświeżenie powietrza'],
      image: serviceImage2,
      price: 'od 250 zł',
      duration: '4-5 godzin',
    },
    {
      id: 4,
      slug: 'powloki-ceramiczne',
      title: 'POWŁOKI CERAMICZNE',
      description: `Trwałe zabezpieczenia lakieru przed utlenianiem, chemikaliami i zabrudzeniami. Poprawiają połysk i ułatwiają mycie.`,
      features: ['36–60 miesięcy gwarancji (w zależności od pakietu)', 'Top coat dla maksymalnego połysku i śliskości', 'Opcje dla felg, szyb i elementów plastikowych'],
      image: serviceImage1,
      price: 'od 1 000 zł do 2 800 zł',
      duration: '1-2 dni robocze',
    },
  ];

  return (
    <section id="services" className="relative py-32 bg-gradient-hero overflow-hidden" style={{ whiteSpace: "pre-line" }}>
      <div className="absolute inset-0 z-0">
        <Image src={servicesBg} alt="" role="presentation" fill className="object-cover opacity-30" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-deep-black/80 via-background/60 to-deep-black/40" />
      </div>
      <div className="max-w-[1500px] mx-auto px-6 relative z-10">
        <div className="text-center space-y-6 mb-16">
          <div className="h-1 w-16 bg-primary rounded-full mx-auto" />
          <h2 className="font-luxury text-4xl lg:text-5xl text-foreground">Premium Detailing</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">Oferta ShineCar detailing Łuków, folie ochronne PPF, korekta lakieru i więcej.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Link
              key={service.id}
              href={`/uslugi/${service.slug}`}
              className="group border border-border rounded-3xl overflow-hidden bg-gradient-glass backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <div className="h-56 overflow-hidden relative">
                <Image src={service.image} alt={service.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw" />
              </div>
              <div className="p-6 space-y-4">
                <h3 className="font-luxury text-2xl text-foreground">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{service.duration}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">{service.price}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
