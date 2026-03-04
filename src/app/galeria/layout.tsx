import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Galeria',
  description: 'Galeria realizacji: folie PPF, korekta lakieru, detailing wnętrz. ShineCar – Łuków i okolice.',
  alternates: { canonical: '/galeria' },
  openGraph: {
    url: 'https://shinecar.pl/galeria',
    title: 'Galeria',
    description: 'Galeria realizacji: folie PPF, korekta lakieru, detailing wnętrz. ShineCar – Łuków i okolice.',
    type: 'website',
    locale: 'pl_PL',
  },
};

export default function GaleriaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
