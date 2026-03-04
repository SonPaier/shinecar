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
          <div className="h-1 w-12 bg-gradient-gold rounded-full mx-auto" />
          <h2 className="font-luxury text-3xl lg:text-4xl text-foreground">Kontakt</h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">Umów termin lub zadaj pytanie.</p>
        </div>

        {/* Info cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {contactInfo.map((item, index) => {
            const IconComponent = item.icon;
            const content = (
              <div className="border border-border rounded-2xl p-4 bg-gradient-glass backdrop-blur-sm h-full">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center">
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
        </div>

        {/* CTA card */}
        <div className="mt-8 border border-border rounded-3xl p-6 bg-gradient-glass backdrop-blur-sm text-center space-y-4">
          <h3 className="font-luxury text-2xl text-foreground">Umów wizytę w 1 minutę</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Najszybciej skontaktujesz się z nami telefonicznie. Możesz też wysłać maila – odpowiemy tego samego dnia.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button asChild className="bg-gradient-gold text-primary-foreground">
              <a href="tel:+48123456789">Zadzwoń teraz</a>
            </Button>
            <button
              onClick={() => { window.location.href = 'mailto:shinecarkosmetyka@o2.pl'; }}
              className="border border-input bg-background px-3 py-2 rounded-md hover:font-semibold"
            >
              Napisz email
            </button>
          </div>
          <p className="text-xs text-muted-foreground">Pracujemy: pn–pt 8:00–18:00, sob 9:00–16:00</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
