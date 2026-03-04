import Header from '@/components/Header';
import Footer from '@/components/Footer';

const FAQ = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section id="faq-top" className="py-32">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h1 className="font-luxury text-4xl text-foreground mb-6 text-center">FAQ</h1>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-foreground">Jak długo trwa korekta lakieru?</h3>
                  <p className="text-muted-foreground">Zazwyczaj od 6 do 10 godzin, w zależności od stanu lakieru i zakresu prac.</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground">Czy dojeżdżacie do klienta?</h3>
                  <p className="text-muted-foreground">Tak — oferujemy dojazd na terenie okolic Łukowa. Skontaktuj się, aby ustalić szczegóły.</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground">Czy stosujecie folie PPF?</h3>
                  <p className="text-muted-foreground">Tak, oferujemy aplikację folii ochronnych PPF oraz jej konserwację.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
