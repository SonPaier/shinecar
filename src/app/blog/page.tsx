import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import { blogArticles } from '@/data/blog';
import { Calendar, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog — Porady Detailingowe ShineCar Łuków',
  description:
    'Blog ShineCar Łuków — porady dotyczące pielęgnacji samochodu, folii PPF, powłok ceramicznych, prania tapicerki i czyszczenia skór. Wiedza od specjalistów.',
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    url: 'https://shinecar.pl/blog',
    title: 'Blog — Porady Detailingowe ShineCar Łuków',
    description:
      'Porady dotyczące pielęgnacji samochodu od specjalistów ShineCar Łuków.',
    type: 'website',
    locale: 'pl_PL',
  },
};

function formatDate(dateStr: string) {
  const date = new Date(dateStr);
  return date.toLocaleDateString('pl-PL', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="py-32 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="mb-6">
                <Breadcrumbs
                  items={[
                    { name: 'Strona główna', href: '/' },
                    { name: 'Blog' },
                  ]}
                />
              </div>

              <div className="text-center space-y-6 mb-12">
                <div className="h-1 w-16 bg-primary rounded-full mx-auto" />
                <h1 className="font-luxury text-4xl lg:text-5xl text-foreground">
                  Blog
                </h1>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Porady, poradniki i wiedza od specjalistów ShineCar Łuków.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogArticles.map((article) => (
                  <Link
                    key={article.slug}
                    href={`/blog/${article.slug}`}
                    className="group border border-border rounded-2xl overflow-hidden bg-gradient-glass backdrop-blur-sm hover:border-primary/50 transition-all duration-300"
                  >
                    <div className="h-48 overflow-hidden relative">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                    <div className="p-6 space-y-3">
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {formatDate(article.date)}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {article.readTime}
                        </span>
                      </div>
                      <h2 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                        {article.title}
                      </h2>
                      <p className="text-sm text-muted-foreground line-clamp-3">
                        {article.excerpt}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
