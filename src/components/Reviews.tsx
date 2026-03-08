import Script from 'next/script';
import React from 'react';

const Reviews = () => {
  return (
    <section id="reviews" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-center font-luxury text-3xl text-foreground mb-10">Opinie klientów</h2>
        <div className="mt-6">
          <Script
            src="https://cdn.trustindex.io/loader.js?1f4f73a662de5623a3368da8fa0"
            strategy="lazyOnload"
          />
        </div>
      </div>
    </section>
  );
};

export default Reviews;
