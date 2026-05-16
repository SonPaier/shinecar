import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ protocol: 'https', hostname: 'cdn.builder.io' }],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(self), interest-cohort=()' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // Old /uslugi/{slug} → new singular-lukow
      { source: '/uslugi/folie-ppf', destination: '/folia-ppf-lukow', permanent: true },
      { source: '/uslugi/korekta-lakieru', destination: '/korekta-lakieru-lukow', permanent: true },
      { source: '/uslugi/powloki-ceramiczne', destination: '/powloka-ceramiczna-lukow', permanent: true },
      { source: '/uslugi/powloki-elastomerowe', destination: '/powloka-elastomerowa-lukow', permanent: true },
      { source: '/uslugi/detailing-wnetrza', destination: '/detailing-wnetrza-lukow', permanent: true },
      { source: '/uslugi/folie-kolorowe-ppf', destination: '/folia-kolorowa-ppf-lukow', permanent: true },
      { source: '/uslugi/mycie-detailingowe', destination: '/mycie-detailingowe-lukow', permanent: true },
      { source: '/uslugi/odbior-auta-z-salonu', destination: '/odbior-auta-z-salonu-lukow', permanent: true },
      // Old plural URLs → new singular (in case someone bookmarked)
      { source: '/folie-ppf-lukow', destination: '/folia-ppf-lukow', permanent: true },
      { source: '/powloki-ceramiczne-lukow', destination: '/powloka-ceramiczna-lukow', permanent: true },
      { source: '/powloki-elastomerowe-lukow', destination: '/powloka-elastomerowa-lukow', permanent: true },
      { source: '/folie-kolorowe-ppf-lukow', destination: '/folia-kolorowa-ppf-lukow', permanent: true },
      // Consolidate /oferta → /uslugi
      { source: '/oferta', destination: '/uslugi', permanent: true },
      // Old gallery URL
      { source: '/galeria', destination: '/realizacje-detailing-lukow', permanent: true },
    ];
  },
};

export default nextConfig;
