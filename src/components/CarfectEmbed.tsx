'use client';

import { useEffect } from 'react';

export default function CarfectEmbed() {
  useEffect(() => {
    function onMessage(e: MessageEvent) {
      if (e.origin !== 'https://shinecar.carfect.pl') return;
      if (!e.data || e.data.type !== 'widget-height') return;
      const f = document.getElementById('carfect-widget') as HTMLIFrameElement | null;
      if (f && typeof e.data.height === 'number') {
        f.style.height = e.data.height + 'px';
      }
    }
    window.addEventListener('message', onMessage);
    return () => window.removeEventListener('message', onMessage);
  }, []);

  return (
    <iframe
      id="carfect-widget"
      src="https://shinecar.carfect.pl/embed/"
      width="100%"
      height={200}
      scrolling="no"
      frameBorder="0"
      style={{ border: 0, display: 'block', overflow: 'hidden', margin: '0 auto', maxWidth: '960px' }}
      title="Formularz wyceny folii PPF i powłok ceramicznych"
    />
  );
}
