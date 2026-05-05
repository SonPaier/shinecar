"use client";
import { Phone, Mail, MapPin, Facebook, Instagram, MessageCircle } from 'lucide-react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { services, getServiceUrl } from '@/data/services';

const Footer = () => {
  const pathname = usePathname();
  const router = useRouter();

  const goToSection = (id: string) => (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    if (pathname !== '/') {
      router.push(`/#${id}`);
      return;
    }
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-deep-black border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Image src="https://cdn.builder.io/api/v1/image/assets%2F67e4bfba85e64e32b9e894d5c5c768b6%2F8c36ec01547b4487a8361fd75045be6e?format=webp&width=800" alt="ShineCar — detailing samochodowy Łuków" width={64} height={64} className="w-16 h-16 object-contain" />
              <div>
                <h3 className="text-xl font-luxury text-foreground">ShineCar</h3>
                <p className="text-xs text-muted-foreground">Kosmetyka</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              Profesjonalny detailing samochodowy w okolicach Łukowa.
              Przywracamy blasku Twojemu pojazdowi z pasją i precyzją.
            </p>
            <div className="mb-3 text-foreground font-medium">Śledź nas na mediach</div>
            <div className="flex items-center space-x-5">
              <a href="https://www.facebook.com/ShineCarKosmetyka" aria-label="Facebook" className="block py-1.5 text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="w-7 h-7" />
              </a>
              <a href="https://www.instagram.com/shinecar_kosmetyka/" aria-label="Instagram" className="block py-1.5 text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-7 h-7" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Nasze usługi</h4>
            <ul className="space-y-2 text-sm">
              {services.map((service) => (
                <li key={service.slug}><Link href={getServiceUrl(service)} className="block py-1.5 text-muted-foreground hover:text-primary transition-colors">{service.title}</Link></li>
              ))}
            </ul>
          </div>

          {/* Cities */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Obsługiwane miasta</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/detailing-lukow" className="block py-1.5 text-muted-foreground hover:text-primary transition-colors">Detailing Łuków</Link></li>
              <li><Link href="/detailing-siedlce" className="block py-1.5 text-muted-foreground hover:text-primary transition-colors">Detailing Siedlce</Link></li>
              <li><Link href="/detailing-miedzyrzec-podlaski" className="block py-1.5 text-muted-foreground hover:text-primary transition-colors">Detailing Międzyrzec Podlaski</Link></li>
              <li><Link href="/detailing-radzyn-podlaski" className="block py-1.5 text-muted-foreground hover:text-primary transition-colors">Detailing Radzyń Podlaski</Link></li>
              <li><Link href="/detailing-biala-podlaska" className="block py-1.5 text-muted-foreground hover:text-primary transition-colors">Detailing Biała Podlaska</Link></li>
              <li><Link href="/detailing-garwolin" className="block py-1.5 text-muted-foreground hover:text-primary transition-colors">Detailing Garwolin</Link></li>
              <li><Link href="/detailing-ryki" className="block py-1.5 text-muted-foreground hover:text-primary transition-colors">Detailing Ryki</Link></li>
              <li><Link href="/detailing-lubartow" className="block py-1.5 text-muted-foreground hover:text-primary transition-colors">Detailing Lubartów</Link></li>
            </ul>
            <p className="text-muted-foreground text-sm mt-6">
              Zachęcamy do zobaczenia naszych realizacji oraz sprawdzenia oferty.
            </p>
            <Link href="/realizacje-detailing-lukow" className="text-primary hover:text-primary/80 text-sm font-medium mt-2 transition-colors inline-block">
              Zobacz realizacje →
            </Link>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Szybkie linki</h4>
            <ul className="space-y-2 text-sm">
              <li><button onClick={goToSection('home')} className="block py-1.5 text-left w-full text-muted-foreground hover:text-primary transition-colors">Strona główna</button></li>
              <li><button onClick={goToSection('about')} className="block py-1.5 text-left w-full text-muted-foreground hover:text-primary transition-colors">O nas</button></li>
              <li><Link href="/uslugi" className="block py-1.5 text-muted-foreground hover:text-primary transition-colors">Oferta</Link></li>
              <li><Link href="/cennik" className="block py-1.5 text-muted-foreground hover:text-primary transition-colors">Cennik</Link></li>
              <li><Link href="/realizacje-detailing-lukow" className="block py-1.5 text-muted-foreground hover:text-primary transition-colors">Realizacje</Link></li>
              <li><button onClick={goToSection('contact')} className="block py-1.5 text-left w-full text-muted-foreground hover:text-primary transition-colors">Kontakt</button></li>
              <li><Link href="/polityka-prywatnosci" className="block py-1.5 text-muted-foreground hover:text-primary transition-colors">Polityka prywatności</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Kontakt</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="tel:+48782195321" className="flex items-center space-x-2 hover:text-primary transition-colors">
                  <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">+48 782 195 321</span>
                </a>
              </li>
              <li>
                <a href="https://wa.me/48782195321" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-primary transition-colors">
                  <MessageCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">WhatsApp</span>
                </a>
              </li>
              <li>
                <a href="mailto:shinecarkosmetyka@o2.pl" className="flex items-center space-x-2 hover:text-primary transition-colors">
                  <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">shinecarkosmetyka@o2.pl</span>
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Świderki 155, 21-411<br />okolice Łukowa</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © 2026 ShineCar Kosmetyka. Wszystkie prawa zastrzeżone.
            </div>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <Link href="/polityka-prywatnosci" className="hover:text-primary transition-colors">Polityka prywatności</Link>
              <span>Właściciel: Marcin Przybysławski</span>
            </div>
          </div>
          <div className="text-left text-sm text-muted-foreground mt-6 font-luxury">
            Stworzone z miłością i pomocą{' '}
            <a href="https://carfect.pl" target="_blank" rel="noopener" className="text-primary underline underline-offset-2 hover:text-primary/80 transition-colors">
              carfect.pl
            </a>
            {' '}- system do zarządzania studiem detailingu
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
