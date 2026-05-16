import type { MetadataRoute } from 'next';
import { services, SERVICES_SECTION_UPDATED_AT } from '@/data/services';
import { cities, CITIES_SECTION_UPDATED_AT } from '@/data/cities';
import { blogArticles, BLOG_SECTION_UPDATED_AT } from '@/data/blog';

const TODAY = new Date().toISOString().slice(0, 10);

function dateOr(value: string | undefined, fallback: string): Date {
  return new Date(value ?? fallback);
}

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://shinecar.pl';

  const servicePages = services.map((service) => ({
    url: `${base}/${service.urlSlug}`,
    lastModified: dateOr(service.updatedAt, SERVICES_SECTION_UPDATED_AT),
    priority: 0.9,
  }));

  const cityPages = cities.map((city) => ({
    url: `${base}/${city.slug}`,
    lastModified: dateOr(city.updatedAt, CITIES_SECTION_UPDATED_AT),
    priority: 0.8,
  }));

  const blogPosts = blogArticles.map((article) => ({
    url: `${base}/blog/${article.slug}`,
    lastModified: dateOr(article.updatedAt, article.date),
    priority: 0.7,
  }));

  return [
    {
      url: `${base}/`,
      lastModified: new Date(TODAY),
      priority: 1,
    },
    {
      url: `${base}/uslugi`,
      lastModified: dateOr(undefined, SERVICES_SECTION_UPDATED_AT),
      priority: 0.9,
    },
    ...servicePages,
    {
      url: `${base}/powloka-ochronna-na-auto-lukow`,
      lastModified: dateOr(undefined, SERVICES_SECTION_UPDATED_AT),
      priority: 0.9,
    },
    {
      url: `${base}/cennik`,
      lastModified: dateOr(undefined, SERVICES_SECTION_UPDATED_AT),
      priority: 0.8,
    },
    {
      url: `${base}/wycena`,
      lastModified: new Date(TODAY),
      priority: 0.7,
    },
    {
      url: `${base}/realizacje-detailing-lukow`,
      lastModified: dateOr(undefined, CITIES_SECTION_UPDATED_AT),
      priority: 0.8,
    },
    ...cityPages,
    {
      url: `${base}/blog`,
      lastModified: dateOr(undefined, BLOG_SECTION_UPDATED_AT),
      priority: 0.7,
    },
    ...blogPosts,
    {
      url: `${base}/polityka-prywatnosci`,
      lastModified: new Date('2026-04-29'),
      priority: 0.3,
    },
  ];
}
