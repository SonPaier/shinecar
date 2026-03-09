"use client";
import React, { useState, useLayoutEffect, useRef, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import { services } from '@/data/services';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOfertaOpen, setIsOfertaOpen] = useState(false);
  const [isMobileOfertaOpen, setIsMobileOfertaOpen] = useState(false);
  const ofertaRef = useRef<HTMLDivElement>(null);
  const ofertaTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();
  const router = useRouter();

  useLayoutEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useLayoutEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const id = hash.replace('#', '');
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
  }, [pathname]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
    setIsMobileOfertaOpen(false);
  }, [pathname]);

  const scrollToSection = (sectionId: string) => {
    if (pathname !== '/') {
      router.push(`/#${sectionId}`);
      setIsMenuOpen(false);
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      const headerEl = document.querySelector('header');
      const headerHeight = headerEl ? (headerEl as HTMLElement).offsetHeight : 96;
      const top = window.scrollY + element.getBoundingClientRect().top - headerHeight - 12;
      window.scrollTo({ top, behavior: 'smooth' });
    }

    setIsMenuOpen(false);
  };

  const handleOfertaEnter = () => {
    if (ofertaTimeoutRef.current) clearTimeout(ofertaTimeoutRef.current);
    setIsOfertaOpen(true);
  };

  const handleOfertaLeave = () => {
    ofertaTimeoutRef.current = setTimeout(() => setIsOfertaOpen(false), 150);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${isScrolled ? 'bg-deep-black/80 backdrop-blur-2xl border-b border-border/50' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <div className="flex items-center space-x-3 rounded-lg">
            <button
              onClick={() => {
                if (pathname !== '/') {
                  router.push('/#home');
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
              <Image src="https://cdn.builder.io/api/v1/image/assets%2F67e4bfba85e64e32b9e894d5c5c768b6%2F8c36ec01547b4487a8361fd75045be6e?format=webp&width=800" alt="ShineCar — detailing samochodowy Łuków" width={80} height={80} className="w-20 h-20 object-contain" priority />
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-12">
            {[
              { name: 'Strona główna', id: 'home' },
              { name: 'O nas', id: 'about' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground/80 hover:text-primary transition-all duration-300 font-medium text-sm tracking-wide relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}

            {/* Oferta dropdown */}
            <div
              ref={ofertaRef}
              className="relative"
              onMouseEnter={handleOfertaEnter}
              onMouseLeave={handleOfertaLeave}
            >
              <Link
                href="/uslugi"
                className="flex items-center gap-1 text-foreground/80 hover:text-primary transition-all duration-300 font-medium text-sm tracking-wide relative group"
              >
                Oferta
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isOfertaOpen ? 'rotate-180' : ''}`} />
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </Link>

              {isOfertaOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3">
                  <div className="bg-deep-black/95 backdrop-blur-2xl border border-border/50 rounded-xl shadow-luxury py-2 min-w-[240px]">
                    {services.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/uslugi/${service.slug}`}
                        className="block px-5 py-2.5 text-sm text-foreground/80 hover:text-primary hover:bg-white/5 transition-colors"
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {[
              { name: 'Galeria', id: 'gallery' },
              { name: 'Kontakt', id: 'contact' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground/80 hover:text-primary transition-all duration-300 font-medium text-sm tracking-wide relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}

            <Link
              href="/cennik"
              className="text-foreground/80 hover:text-primary transition-all duration-300 font-medium text-sm tracking-wide relative group"
            >
              Cennik
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/blog"
              className="text-foreground/80 hover:text-primary transition-all duration-300 font-medium text-sm tracking-wide relative group"
            >
              Blog
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </Link>
          </nav>

          {/* Contact CTA */}
          <div className="hidden lg:flex items-center space-x-6">
            <a href="tel:+48782195321" className="flex items-center space-x-3 text-sm hover:text-primary transition-colors">
              <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                <Phone className="w-4 h-4 text-primary" />
              </div>
              <span className="text-foreground font-medium">+48 782 195 321</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Zamknij menu' : 'Otwórz menu'}
            aria-expanded={isMenuOpen}
            className="lg:hidden text-foreground p-2"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden fixed left-0 right-0 top-24 z-40 w-full bg-deep-black/95 py-8 max-h-[calc(100vh-6rem)] overflow-y-auto">
            <nav className="flex flex-col px-4">
              <button
                onClick={() => scrollToSection('home')}
                className="text-left text-foreground hover:text-primary transition-colors font-medium px-4 py-3 text-lg"
              >
                Strona główna
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-left text-foreground hover:text-primary transition-colors font-medium px-4 py-3 text-lg"
              >
                O nas
              </button>

              {/* Mobile Oferta dropdown */}
              <div>
                <button
                  onClick={() => setIsMobileOfertaOpen(!isMobileOfertaOpen)}
                  className="flex items-center justify-between w-full text-left text-primary font-medium px-4 py-3 text-lg"
                >
                  Oferta
                  <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${isMobileOfertaOpen ? 'rotate-180' : ''}`} />
                </button>
                {isMobileOfertaOpen && (
                  <div className="pl-6 pb-2">
                    {services.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/uslugi/${service.slug}`}
                        onClick={() => setIsMenuOpen(false)}
                        className="block px-4 py-2.5 text-foreground/80 hover:text-primary transition-colors font-medium text-base uppercase tracking-wide"
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <button
                onClick={() => scrollToSection('gallery')}
                className="text-left text-foreground hover:text-primary transition-colors font-medium px-4 py-3 text-lg"
              >
                Galeria
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-left text-foreground hover:text-primary transition-colors font-medium px-4 py-3 text-lg"
              >
                Kontakt
              </button>
              <Link
                href="/cennik"
                onClick={() => setIsMenuOpen(false)}
                className="text-left text-primary hover:text-primary transition-colors font-medium px-4 py-3 text-lg"
              >
                Cennik
              </Link>
              <Link
                href="/blog"
                onClick={() => setIsMenuOpen(false)}
                className="text-left text-foreground hover:text-primary transition-colors font-medium px-4 py-3 text-lg"
              >
                Blog
              </Link>

              <div className="px-4 py-4 space-y-4">
                <a href="tel:+48782195321" className="flex items-center space-x-3 text-sm hover:text-primary transition-colors">
                  <Phone className="w-4 h-4 text-primary" />
                  <span className="text-foreground font-medium">+48 782 195 321</span>
                </a>
                <Button
                  variant="default"
                  size="default"
                  onClick={() => scrollToSection('contact')}
                  className="w-full"
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
