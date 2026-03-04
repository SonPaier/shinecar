import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const goToSection = (id: string) => (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    if (location.pathname !== '/') {
      navigate(`/#${id}`);
      return;
    }
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const goToGallery = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    if (location.pathname !== '/galeria') {
      navigate('/galeria');
      return;
    }
    // if already on /galeria, scroll to top of gallery
    const el = document.getElementById('galeria-top');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-deep-black border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src="https://cdn.builder.io/api/v1/image/assets%2F67e4bfba85e64e32b9e894d5c5c768b6%2F8c36ec01547b4487a8361fd75045be6e?format=webp&width=800" alt="ShineCar" className="w-16 h-16 object-contain" />
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
              <a href="https://www.facebook.com/ShineCarKosmetyka" aria-label="Facebook" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="w-7 h-7" />
              </a>
              <a href="https://www.instagram.com/shinecar_kosmetyka/" aria-label="Instagram" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-7 h-7" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Nasze usługi</h4>
            <ul className="space-y-2 text-sm">
              <li><button onClick={goToSection('services')} className="text-left w-full text-muted-foreground hover:text-primary transition-colors">Korekta lakieru</button></li>
              <li><button onClick={goToSection('services')} className="text-left w-full text-muted-foreground hover:text-primary transition-colors">Detailing wnętrza</button></li>
              <li><button onClick={goToSection('services')} className="text-left w-full text-muted-foreground hover:text-primary transition-colors">Powłoki ceramiczne</button></li>
              <li><button onClick={goToSection('services')} className="text-left w-full text-muted-foreground hover:text-primary transition-colors">Czyszczenie felg</button></li>
              <li><button onClick={goToSection('services')} className="text-left w-full text-muted-foreground hover:text-primary transition-colors">Detailing komory silnika</button></li>
              <li><button onClick={goToSection('services')} className="text-left w-full text-muted-foreground hover:text-primary transition-colors">Ozonowanie wnętrza</button></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Szybkie linki</h4>
            <ul className="space-y-2 text-sm">
              <li><button onClick={goToSection('home')} className="text-left w-full text-muted-foreground hover:text-primary transition-colors">Strona główna</button></li>
              <li><button onClick={goToSection('about')} className="text-left w-full text-muted-foreground hover:text-primary transition-colors">O nas</button></li>
              <li><button onClick={goToGallery} className="text-left w-full text-muted-foreground hover:text-primary transition-colors">Galeria</button></li>
              <li><button onClick={goToSection('contact')} className="text-left w-full text-muted-foreground hover:text-primary transition-colors">Kontakt</button></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Kontakt</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">+48 782 195 321</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">shinecarkosmetyka@o2.pl</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">okolice Łukowa<br />Dojazd do klienta</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © 2024 ShineCar Kosmetyka. Wszystkie prawa zastrzeżone.
            </div>
            <div className="text-sm text-muted-foreground">
              Właściciel: Marcin Przybysławski
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
