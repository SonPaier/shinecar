import { Star, ExternalLink } from 'lucide-react';
import { GOOGLE_REVIEWS_URL, type GoogleReview } from '@/data/googleReviews';

interface Props {
  review: GoogleReview;
  heading?: string;
  /** Wrap in <section> + container. Default true. Use false when embedding inside an existing section. */
  asSection?: boolean;
}

export default function GoogleReviewCard({ review, heading, asSection = true }: Props) {
  const initial = review.author.charAt(0).toUpperCase();
  const reviewJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: {
      '@type': 'AutomotiveBusiness',
      name: 'ShineCar',
      url: 'https://shinecar.pl',
    },
    author: {
      '@type': 'Person',
      name: review.author,
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: review.rating,
      bestRating: 5,
      worstRating: 1,
    },
    reviewBody: review.text,
    publisher: {
      '@type': 'Organization',
      name: 'Google',
    },
  };

  const inner = (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewJsonLd) }}
      />

      {heading && (
        <h2 className="font-luxury text-2xl text-foreground text-center mb-6">
          {heading}
        </h2>
      )}

      <article className="border border-border rounded-2xl p-6 sm:p-8 bg-gradient-glass backdrop-blur-sm">
        <header className="flex items-start gap-4 mb-4">
          <div
            aria-hidden="true"
            className="w-12 h-12 shrink-0 rounded-full bg-primary/15 text-primary font-semibold flex items-center justify-center text-lg"
          >
            {initial}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
              <div className="font-semibold text-foreground">{review.author}</div>
              <a
                href={GOOGLE_REVIEWS_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Zobacz opinię na Google"
                className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors"
              >
                Google
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            <div className="text-xs text-muted-foreground mt-0.5">
              {review.authorReviewCount}
              {review.authorReviewCount && ' · '}
              {review.date}
            </div>
            <div
              role="img"
              aria-label={`Ocena ${review.rating} na 5`}
              className="flex items-center gap-0.5 mt-1.5"
            >
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${i < review.rating ? 'fill-primary text-primary' : 'text-muted-foreground/30'}`}
                />
              ))}
            </div>
          </div>
        </header>

        <blockquote className="text-muted-foreground leading-relaxed text-[15px] whitespace-pre-line">
          {review.text}
        </blockquote>

        <footer className="mt-6 flex items-center justify-between flex-wrap gap-3">
          <span className="text-xs text-muted-foreground">
            Opinia z Google · ShineCar Łuków
          </span>
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline font-medium"
          >
            Zobacz wszystkie opinie na Google
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </footer>
      </article>
    </>
  );

  if (!asSection) return <div>{inner}</div>;

  return (
    <section className="py-16 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">{inner}</div>
      </div>
    </section>
  );
}
