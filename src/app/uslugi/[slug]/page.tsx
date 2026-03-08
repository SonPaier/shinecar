import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { services, getServiceBySlug, getAllServiceSlugs } from '@/data/services';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import ServiceJsonLd from '@/components/seo/ServiceJsonLd';
import FaqJsonLd from '@/components/seo/FaqJsonLd';
import ServicePageContent from '@/components/ServicePageContent';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: service.keywords,
    alternates: {
      canonical: `/uslugi/${service.slug}`,
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `https://shinecar.pl/uslugi/${service.slug}`,
      type: 'website',
      locale: 'pl_PL',
      images: [{ url: service.image, width: 1200, height: 630, alt: service.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: service.metaTitle,
      description: service.metaDescription,
      images: [service.image],
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <ServiceJsonLd service={service} />
      <FaqJsonLd items={service.faq} />
      <section className="py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <Breadcrumbs
                items={[
                  { name: 'Strona główna', href: '/' },
                  { name: 'Usługi', href: '/uslugi' },
                  { name: service.title },
                ]}
              />
            </div>

            <ServicePageContent service={service} />
          </div>
        </div>
      </section>
    </>
  );
}
