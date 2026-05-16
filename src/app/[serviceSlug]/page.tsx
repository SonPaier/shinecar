import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getServiceByUrlSlug, getAllServiceUrlSlugs, getServiceUrl } from '@/data/services';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import ServiceJsonLd from '@/components/seo/ServiceJsonLd';
import ServicePageContent from '@/components/ServicePageContent';

interface Props {
  params: Promise<{ serviceSlug: string }>;
}

export async function generateStaticParams() {
  return getAllServiceUrlSlugs().map((serviceSlug) => ({ serviceSlug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { serviceSlug } = await params;
  const service = getServiceByUrlSlug(serviceSlug);
  if (!service) return {};

  const url = getServiceUrl(service);
  const ogImage = service.image.replace(/width=\d+/, 'width=1200');

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `https://shinecar.pl${url}`,
      type: 'website',
      locale: 'pl_PL',
      images: [{ url: ogImage, width: 1200, height: 630, alt: service.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: service.metaTitle,
      description: service.metaDescription,
      images: [ogImage],
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { serviceSlug } = await params;
  const service = getServiceByUrlSlug(serviceSlug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <ServiceJsonLd service={service} />
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
