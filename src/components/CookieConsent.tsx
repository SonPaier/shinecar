"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-deep-black/95 backdrop-blur-xl border border-border rounded-2xl p-5 shadow-luxury flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <p className="text-sm text-muted-foreground flex-1">
            Używamy plików cookies w celu analizy ruchu na stronie (Google Analytics). Korzystając ze strony, wyrażasz zgodę na ich użycie.{' '}
            <Link href="/polityka-prywatnosci" className="text-primary hover:underline">
              Polityka prywatności
            </Link>
          </p>
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={decline}
              className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
            >
              Odrzuć
            </button>
            <button
              onClick={accept}
              className="px-4 py-2 text-sm bg-primary text-primary-foreground rounded-full font-medium hover:brightness-110 transition-all"
            >
              Akceptuję
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
