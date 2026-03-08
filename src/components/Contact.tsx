"use client";
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Button } from './ui/button';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefon',
      subtitle: 'Zadzwoń i umów się na wizytę',
      value: '+48 782 195 321',
      href: 'tel:+48782195321',
    },
    {
      icon: Mail,
      title: 'Email',
      subtitle: 'Napisz do nas',
      value: 'shinecarkosmetyka@o2.pl',
      href: 'mailto:shinecarkosmetyka@o2.pl',
    },
    {
      icon: MapPin,
      title: 'Lokalizacja',
      subtitle: 'Świderki 155, 21-411 Świderki',
      value: 'okolice Łukowa',
      href: undefined,
    },
    {
      icon: Clock,
      title: 'Godziny pracy',
      subtitle: 'Poniedziałek - Piątek: 8:00 - 18:00',
      value: 'Sobota: 9:00 - 16:00',
      href: undefined,
    },
  ];

  return (
    <section id="contact" className="mt-12 py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-8">
          <div className="h-1 w-12 bg-primary rounded-full mx-auto" />
          <h2 className="font-luxury text-3xl lg:text-4xl text-foreground">Kontakt</h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">Umów termin lub zadaj pytanie.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left - Contact info */}
          <div className="space-y-4">
            {contactInfo.map((item, index) => {
              const IconComponent = item.icon;
              const content = (
                <div className="border border-border rounded-2xl p-4 bg-gradient-glass backdrop-blur-sm h-full">
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">{item.subtitle}</p>
                      <p className="text-foreground mt-1">{item.value}</p>
                    </div>
                  </div>
                </div>
              );

              return item.href ? (
                <a key={index} href={item.href} className="block">
                  {content}
                </a>
              ) : (
                <div key={index}>{content}</div>
              );
            })}

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button asChild>
                <a href="tel:+48782195321">Zadzwoń teraz</a>
              </Button>
              <a
                href="mailto:shinecarkosmetyka@o2.pl"
                className="border border-input bg-background px-3 py-2 rounded-md hover:bg-accent inline-flex items-center"
              >
                Napisz email
              </a>
            </div>
          </div>

          {/* Right - Google Maps */}
          <div className="border border-border rounded-2xl overflow-hidden bg-gradient-glass backdrop-blur-sm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2710.0!2d22.3348136!3d51.8451033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472207d03ce733a5%3A0x5eb59bb4e54b9f74!2sShine%20Car%20%E2%80%93%20Auto%20Detailing%20%C5%81uk%C3%B3w!5e0!3m2!1spl!2spl"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '458px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokalizacja ShineCar na mapie Google"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
