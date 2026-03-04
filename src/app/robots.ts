import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: 'https://shinecar.pl/sitemap.xml',
    host: 'https://shinecar.pl',
  };
}
