import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Cennik = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section id="cennik-top" className="py-32">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-luxury text-4xl text-foreground mb-6">Cennik</h1>
              <p className="text-muted-foreground mb-8">Poniżej znajdziesz orientacyjne ceny naszych usług. Skontaktuj się z nami, aby uzyskać wycenę dopasowaną do Twojego samochodu.</p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 bg-card rounded-2xl border border-border">
                  <h3 className="text-lg font-medium text-foreground">Korekta lakieru</h3>
                  <p className="text-muted-foreground">od 800 zł</p>
                </div>
                <div className="p-6 bg-card rounded-2xl border border-border">
                  <h3 className="text-lg font-medium text-foreground">Detailing wnętrza</h3>
                  <p className="text-muted-foreground">od 400 zł</p>
                </div>
                <div className="p-6 bg-card rounded-2xl border border-border">
                  <h3 className="text-lg font-medium text-foreground">Folie PPF</h3>
                  <p className="text-muted-foreground">od 1200 zł</p>
                </div>
                <div className="p-6 bg-card rounded-2xl border border-border">
                  <h3 className="text-lg font-medium text-foreground">Powłoki ceramiczne</h3>
                  <p className="text-muted-foreground">na zapytanie</p>
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

export default Cennik;
