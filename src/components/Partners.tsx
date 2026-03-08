import React from 'react';
import Image from 'next/image';

const LOGOS = [
  {
    src: 'https://cdn.builder.io/api/v1/image/assets%2F67e4bfba85e64e32b9e894d5c5c768b6%2F00a824d09e904348b80f5cb4836dfb07?format=webp&width=800',
    alt: 'Ultrafit Poland',
    url: 'https://ultrafitpoland.pl/',
  },
  {
    src: 'https://cdn.builder.io/api/v1/image/assets%2F67e4bfba85e64e32b9e894d5c5c768b6%2Ff97c3495a83d4966aa56fe22b5fc5ca7?format=webp&width=800',
    alt: 'Revivify Poland',
    url: 'https://revivify.pl/',
  },
];

const Partners: React.FC = () => {
  return (
    <section id="partners" className="py-6">
      <div className="container mx-auto px-4">

        <div className="text-center space-y-4 mb-8">
          <h2 className="text-lg md:text-xl font-semibold text-foreground">Nasze partnerstwa</h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Pracujemy na najlepszych produktach klasy premium, których jesteśmy certyfikowanymi aplikatorami
          </p>
        </div>

        <div className="flex items-center justify-center gap-8 flex-wrap">
          {LOGOS.map((logo) => (
            <a
              key={logo.src}
              href={logo.url}
              title={logo.alt}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-card rounded-2xl border border-border px-6 shadow-card"
              style={{ minWidth: 220 }}
            >
              <div className="h-20 md:h-24 lg:h-28 flex items-center">
                <Image loading="lazy" src={logo.src} alt={logo.alt} width={220} height={112} className="h-full w-auto object-contain" />
              </div>
            </a>
          ))}
        </div>
      </div>

      <br /><br />
    </section>
  );
};

export default Partners;
