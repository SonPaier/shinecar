import { useState } from 'react';
import { X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from './ui/button';

const g1 = 'https://cdn.builder.io/api/v1/image/assets%2F75ea2179cd6f4e158ae5465605ccca73%2F47c5f7ba08544593b5cc25d4c3678731?format=webp&width=800';
const g2 = 'https://cdn.builder.io/api/v1/image/assets%2F75ea2179cd6f4e158ae5465605ccca73%2F1024f293b49d4afcafb947cc2ab9b361?format=webp&width=800';
const g3 = 'https://cdn.builder.io/api/v1/image/assets%2F75ea2179cd6f4e158ae5465605ccca73%2Fcdada3ce2dc5430ebdb526961518e866?format=webp&width=800';
const g4 = 'https://cdn.builder.io/api/v1/image/assets%2F75ea2179cd6f4e158ae5465605ccca73%2F27af8cd75b8f44448022c52126c8947b?format=webp&width=800';
const g5 = 'https://cdn.builder.io/api/v1/image/assets%2F75ea2179cd6f4e158ae5465605ccca73%2F9a318e83db17480d9b4eae5c1988df73?format=webp&width=800';
const g6 = 'https://cdn.builder.io/api/v1/image/assets%2F75ea2179cd6f4e158ae5465605ccca73%2F2942336cb6c442acbcb46e148f6060f4?format=webp&width=800';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const galleryItems = [
    {
      id: 1,
      title: 'BMW – Detailing premium',
      category: 'Exterior',
      image: g1,
      description: 'Kompleksowy detailing nadwozia BMW – korekta i ochrona lakieru.',
    },
    {
      id: 2,
      title: 'BMW SUV – Detailing premium',
      category: 'Exterior',
      image: g2,
      description: 'Detailing dużego SUV-a BMW – wysoki połysk i ochrona.',
    },
    {
      id: 3,
      title: 'Mercedes – Detailing premium',
      category: 'Exterior',
      image: g3,
      description: 'Perfekcyjne wykończenie lakieru Mercedesa i głęboki połysk.',
    },
    {
      id: 4,
      title: 'Mercedes – Detailing wnętrza',
      category: 'Interior',
      image: g4,
      description: 'Czyszczenie i pielęgnacja skóry oraz elementów wnętrza.',
    },
    {
      id: 5,
      title: 'Mercedes – Folie ochronne PPF',
      category: 'Protection',
      image: g5,
      description: 'Zabezpieczenie karoserii folią ochronną PPF – ochrona przed uszkodzeniami.',
    },
    {
      id: 6,
      title: 'Porsche – Detailing premium',
      category: 'Exterior',
      image: g6,
      description: 'Detailing Porsche – elegancja i ochrona lakieru.',
    },
  ];

  const filteredItems = galleryItems;
  const isHome = location.pathname === '/';

  return (
    <section id="gallery" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <div className="h-1 w-16 bg-gradient-gold rounded-full mx-auto" />
            <h2 className="font-luxury text-4xl lg:text-5xl text-foreground">Galeria</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">Wybrane realizacje.</p>
          </div>

          {isHome ? (
            <div className="max-w-3xl mx-auto text-center rounded-3xl border border-border bg-gradient-glass p-10 shadow-card">
              <p className="text-xl text-foreground/90 leading-relaxed">
                Zachęcamy do zobaczenia naszych realizacji oraz sprawdzenia oferty.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  onClick={() => navigate('/galeria#galeria-top')}
                  className="bg-gradient-gold text-primary-foreground px-8 py-4 h-auto shadow-gold hover:font-semibold"
                >
                  Zobacz galerię
                </Button>
              </div>
            </div>
          ) : (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredItems.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => setSelectedImage(index)}
                    className="group relative h-72 overflow-hidden rounded-3xl border border-border bg-gradient-glass text-left"
                  >
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-deep-black/70 via-transparent to-transparent opacity-60" />
                    <div className="absolute bottom-4 left-4 right-4 space-y-1">
                      <h3 className="text-white font-semibold text-lg">{item.title}</h3>
                      {item.description && (
                        <p className="text-white/80 text-sm leading-snug">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </button>
                ))}
              </div>

              {selectedImage !== null && (
                <div className="fixed inset-0 z-50 bg-deep-black/95 backdrop-blur-sm flex items-center justify-center">
                  <button
                    onClick={() => setSelectedImage(null)}
                    className="absolute top-8 right-8 text-white hover:text-primary transition-colors z-10 p-2"
                  >
                    <X className="w-8 h-8" />
                  </button>

                  <div className="max-w-5xl max-h-[85vh] mx-8 text-center">
                    <img
                      src={filteredItems[selectedImage].image}
                      alt={filteredItems[selectedImage].title}
                      className="w-full h-auto object-contain rounded-2xl shadow-luxury"
                    />
                    <div className="mt-8 space-y-4">
                      <span className="inline-block px-4 py-2 bg-gradient-gold text-primary-foreground text-sm font-semibold rounded-full shadow-gold">
                        {filteredItems[selectedImage].category}
                      </span>
                      <h3 className="text-white text-2xl font-bold">
                        {filteredItems[selectedImage].title}
                      </h3>
                      <p className="text-white/80 text-lg max-w-2xl mx-auto leading-relaxed">
                        {filteredItems[selectedImage].description}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
