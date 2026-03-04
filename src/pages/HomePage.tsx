import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Reviews from '@/components/Reviews';
import Partners from '@/components/Partners';
import ScrollHashHandler from '@/components/ScrollHashHandler';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <ScrollHashHandler />
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Reviews />
        <Contact />
        <Partners />
      </main>
      <Footer />
    </div>
  );
}
