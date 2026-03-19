"use client";
import { useEffect, useRef, useState } from 'react';

export default function CarfectEmbed() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [height, setHeight] = useState(1200);

  useEffect(() => {
    function handleMessage(e: MessageEvent) {
      if (e.data?.type === 'carfect-resize' && typeof e.data.height === 'number') {
        setHeight(e.data.height);
      }
    }
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  return (
    <iframe
      ref={iframeRef}
      src="https://shinecar.carfect.pl/embed"
      width="100%"
      height={height}
      frameBorder="0"
      scrolling="no"
      style={{ border: 'none', borderRadius: '8px', maxWidth: '960px', overflow: 'hidden' }}
      title="Formularz wyceny folii PPF i powłok ceramicznych"
    />
  );
}
