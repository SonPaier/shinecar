import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import { getBlogBySlug, getAllBlogSlugs } from '@/data/blog';
import { CheckCircle, Calendar, Clock, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getBlogBySlug(slug);
  if (!article) return {};

  return {
    title: article.metaTitle,
    description: article.metaDescription,
    keywords: article.keywords,
    alternates: {
      canonical: `/blog/${article.slug}`,
    },
    openGraph: {
      title: article.metaTitle,
      description: article.metaDescription,
      url: `https://shinecar.pl/blog/${article.slug}`,
      type: 'article',
      locale: 'pl_PL',
      publishedTime: article.date,
      images: [{ url: article.image, width: 1200, height: 630, alt: article.title }],
    },
  };
}

function formatDate(dateStr: string) {
  const date = new Date(dateStr);
  return date.toLocaleDateString('pl-PL', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getBlogBySlug(slug);

  if (!article) {
    notFound();
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    description: article.metaDescription,
    image: article.image,
    datePublished: article.date,
    author: {
      '@type': 'Organization',
      name: 'ShineCar',
      url: 'https://shinecar.pl',
    },
    publisher: {
      '@type': 'Organization',
      name: 'ShineCar',
      url: 'https://shinecar.pl',
    },
    mainEntityOfPage: `https://shinecar.pl/blog/${article.slug}`,
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <article className="py-32 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="mb-6">
                <Breadcrumbs
                  items={[
                    { name: 'Strona główna', href: '/' },
                    { name: 'Blog', href: '/blog' },
                    { name: article.title },
                  ]}
                />
              </div>

              <div className="space-y-12">
                {/* Hero */}
                <div className="space-y-6">
                  <div className="h-1 w-16 bg-primary rounded-full" />
                  <h1 className="font-luxury text-3xl lg:text-4xl text-foreground">
                    {article.title}
                  </h1>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {formatDate(article.date)}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {article.readTime} czytania
                    </span>
                  </div>
                </div>

                {/* Image */}
                <div className="rounded-3xl overflow-hidden border border-border">
                  <Image
                    src={article.image}
                    alt={article.title}
                    width={1200}
                    height={600}
                    className="w-full h-64 md:h-96 object-cover"
                    sizes="(max-width: 768px) 100vw, 896px"
                  />
                </div>

                {/* Intro */}
                <div className="space-y-4">
                  {article.content.map((paragraph, i) => (
                    <p key={i} className="text-muted-foreground leading-relaxed text-lg">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Sections */}
                {article.sections.map((section, i) => (
                  <div key={i} className="space-y-4">
                    <h2 className="font-luxury text-2xl text-foreground">
                      {section.heading}
                    </h2>
                    {section.paragraphs?.map((p, j) => (
                      <p key={j} className="text-muted-foreground leading-relaxed">
                        {p}
                      </p>
                    ))}
                    {section.bullets && (
                      <ul className="space-y-3">
                        {section.bullets.map((bullet, j) => (
                          <li
                            key={j}
                            className="flex items-start gap-2 text-muted-foreground"
                          >
                            <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}

                {/* CTA */}
                <div className="border border-border rounded-3xl p-8 bg-gradient-glass backdrop-blur-sm text-center space-y-4">
                  <h2 className="font-luxury text-2xl text-foreground">
                    Potrzebujesz profesjonalnej pielęgnacji wnętrza?
                  </h2>
                  <p className="text-muted-foreground">
                    Zadzwoń lub napisz — dobierzemy plan idealnie skrojony pod Twoje auto.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <Button asChild>
                      <a href="tel:+48782195321">
                        <Phone className="w-4 h-4 mr-2" />
                        Zadzwoń: 782 195 321
                      </a>
                    </Button>
                    <Button asChild variant="outline">
                      <Link href="/cennik">Zobacz cennik</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
