import type { MetadataRoute } from 'next';
import { getAllServiceUrlSlugs } from '@/data/services';
import { getAllCitySlugs } from '@/data/cities';
import { getAllBlogSlugs } from '@/data/blog';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://shinecar.pl';
  const now = new Date();

  const servicePages = getAllServiceUrlSlugs().map((urlSlug) => ({
    url: `${base}/${urlSlug}`,
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
      url: `${base}/wycena`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${base}/realizacje-detailing-lukow`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    ...cityPages,
    {
      url: `${base}/blog`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    ...getAllBlogSlugs().map((slug) => ({
      url: `${base}/blog/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    {
      url: `${base}/polityka-prywatnosci`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];
}
