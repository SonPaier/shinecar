import React, { useState, useLayoutEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useLayoutEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useLayoutEffect(() => {
    // Handle hash-based navigation
    if (location.hash) {
      const id = location.hash.replace('#', '');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          const headerEl = document.querySelector('header');
          const headerHeight = headerEl ? (headerEl as HTMLElement).offsetHeight : 96;
          const top = window.scrollY + el.getBoundingClientRect().top - headerHeight - 12;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      }, 0);
    }
  }, [location.hash]);

  const scrollToSection = (sectionId: string) => {
    // If we're not on the homepage, navigate to it with hash
    if (location.pathname !== '/') {
      navigate(`/#${sectionId}`);
      setIsMenuOpen(false);
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      // account for fixed header height so the section isn't hidden
      const headerEl = document.querySelector('header');
      const headerHeight = headerEl ? (headerEl as HTMLElement).offsetHeight : 96;
      const top = window.scrollY + element.getBoundingClientRect().top - headerHeight - 12;
      window.scrollTo({ top, behavior: 'smooth' });
    }

    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${isScrolled ? 'bg-deep-black/80 backdrop-blur-2xl border-b border-border/50' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-24">
          {/* Logo - More elegant */}
          <div className="flex items-center space-x-3 rounded-lg">
            <button
              onClick={() => {
                if (location.pathname !== '/') {
                  navigate('/#home');
                  setIsMenuOpen(false);
                  return;
                }

                const el = document.getElementById('home');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
                setIsMenuOpen(false);
              }}
              aria-label="Przejdź do góry strony"
              className="p-0 bg-transparent border-0 cursor-pointer"
            >
              <img src="https://cdn.builder.io/api/v1/image/assets%2F67e4bfba85e64e32b9e894d5c5c768b6%2F8c36ec01547b4487a8361fd75045be6e?format=webp&width=800" alt="ShineCar" className="w-20 h-20 object-contain" />
            </button>
          </div>

          {/* Desktop Navigation - Cleaner spacing */}
          <nav className="hidden lg:flex items-center space-x-12">
            {[
              { name: 'Strona główna', id: 'home' },
              { name: 'O nas', id: 'about' },
              { name: 'Oferta', id: 'services' },
              { name: 'Galeria', id: 'gallery' },
              { name: 'Kontakt', id: 'contact' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground/80 hover:text-primary transition-all duration-300 font-medium text-sm tracking-wide relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-gold group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </nav>

          {/* Contact CTA - More prominent */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center space-x-3 text-sm">
              <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                <Phone className="w-4 h-4 text-primary" />
              </div>
              <span className="text-foreground font-medium">+48 782 195 321</span>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-foreground p-2"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden fixed left-0 right-0 top-24 z-40 w-full bg-deep-black/95 py-8">
            <nav className="flex flex-col space-y-6 px-4">
              {[
                { name: 'Strona główna', id: 'home' },
                { name: 'O nas', id: 'about' },
                { name: 'Oferta', id: 'services' },
                { name: 'Galeria', id: 'gallery' },
                { name: 'Kontakt', id: 'contact' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-foreground hover:text-primary transition-colors font-medium px-4 py-3 text-lg"
                >
                  {item.name}
                </button>
              ))}

              <div className="px-4 py-4 space-y-4">
                <div className="flex items-center space-x-3 text-sm">
                  <Phone className="w-4 h-4 text-primary" />
                  <span className="text-foreground font-medium">+48 782 195 321</span>
                </div>
                <Button
                  variant="default"
                  size="default"
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-gradient-gold text-primary-foreground font-medium shadow-gold hover:font-semibold"
                >
                  Umów wizytę
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
