import type { MetadataRoute } from 'next';
import { getAllServiceSlugs } from '@/data/services';
import { getAllCitySlugs } from '@/data/cities';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://shinecar.pl';
  const now = new Date('2026-03-01');

  const servicePages = getAllServiceSlugs().map((slug) => ({
    url: `${base}/uslugi/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  const cityPages = getAllCitySlugs().map((slug) => ({
    url: `${base}/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: `${base}/`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${base}/uslugi`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    ...servicePages,
    {
      url: `${base}/cennik`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${base}/oferta`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${base}/galeria`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    ...cityPages,
    {
      url: `${base}/polityka-prywatnosci`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];
}
