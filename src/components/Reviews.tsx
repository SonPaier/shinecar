import { Star } from 'lucide-react';
import React from 'react';

const REVIEWS = [
  {
    name: 'Maciej Kędra',
    text: 'Pełen profesjonalizm, dbałość o każdy detal i przyjazne podejście, polecam z całego serca.',
    rating: 5,
  },
  {
    name: 'Artur Celiński',
    text: 'Profesjonalna obsługa, dokładność i dbałość o szczegóły, estetyka pracy. Gorąco polecam!',
    rating: 5,
  },
  {
    name: 'Paweł Gątarczyk',
    text: 'Świetna robota, auto naprawdę dopieszczone — jestem bardzo zadowolony z usług detailingowych.',
    rating: 5,
  },
];

const Reviews = () => {
  return (
    <section
      id="reviews"
      className="py-20 relative bg-[url('https://cdn.builder.io/api/v1/image/assets%2F67e4bfba85e64e32b9e894d5c5c768b6%2F700b4a3ede41434faf60b06c5e8b5dda?format=webp&width=800')] bg-center bg-cover bg-no-repeat"
    >
      <div className="absolute inset-0 bg-black/50" aria-hidden="true" />

      <div className="container mx-auto px-6 relative z-10">
        <h3 className="text-center font-luxury text-3xl text-foreground mb-10">Opinie klientów</h3>

        <div className="mt-6">
          <div className="grid md:grid-cols-3 gap-8">
            {REVIEWS.map((review, index) => (
              <div key={index} className="border border-border rounded-2xl p-8 bg-gradient-glass backdrop-blur-sm">
                <div className="flex justify-center space-x-1 mb-4">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-primary fill-current" />
                  ))}
                </div>
                <blockquote className="text-muted-foreground italic">"{review.text}"</blockquote>
                <div className="text-foreground font-medium mt-4 text-center">{review.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
