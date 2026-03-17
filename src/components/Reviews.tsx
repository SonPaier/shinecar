import { Star, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';

const GOOGLE_REVIEWS_URL =
  'https://www.google.com/maps/place/ShineCar+%C5%81uk%C3%B3w/reviews';

const Reviews = () => {
  return (
    <section id="reviews" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-1.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-9 h-9 fill-primary text-primary" />
              ))}
            </div>
            <div className="text-5xl font-bold text-foreground">5.0</div>
          </div>
          <h2 className="font-luxury text-3xl text-foreground">
            Nasi klienci nas polecają
          </h2>
          <p className="text-muted-foreground text-lg max-w-lg mx-auto">
            Każdy samochód traktujemy jak swój. Dlatego mamy same pozytywne opinie na Google i klienci wracają do nas z kolejnymi autami.
          </p>
          <Button asChild size="lg" className="px-8 py-4 h-auto">
            <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer">
              Zobacz opinie na Google
              <ExternalLink className="ml-2 w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
