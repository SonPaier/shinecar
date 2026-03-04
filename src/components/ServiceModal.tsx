import React, { useEffect, useRef } from 'react';

type Service = {
  id: number;
  title: string;
  description: string;
  features: string[];
  image: string;
  price: string;
  duration: string;
};

type Props = {
  open: boolean;
  service: Service | null;
  onClose: () => void;
};

const ServiceModal: React.FC<Props> = ({ open, service, onClose }) => {
  const overlayRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (open) {
      document.addEventListener('keydown', onKey);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  if (!open || !service) return null;

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) onClose();
  };

  const formatPriceJSX = (price: string) => {
    if (!price) return null;
    const parts = price.split('•').map(p => p.trim()).filter(Boolean);
    if (parts.length === 1) return <div className="text-foreground font-medium break-words">{parts[0]}</div>;

    return (
      <div className="text-foreground font-medium space-y-1">
        {parts.map((part, idx) => {
          const [label, ...rest] = part.split(':');
          const value = rest.join(':').trim();
          if (value) {
            return (
              <div key={idx} className="text-sm">
                <span className="font-semibold">{label.trim()}:</span>
                <span className="ml-2">{value}</span>
              </div>
            );
          }
          return <div key={idx} className="text-sm">{part}</div>;
        })}
      </div>
    );
  };

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      className="fixed inset-0 z-50 flex items-start md:items-center justify-center bg-deep-black/70 backdrop-blur-sm px-4 py-10 md:py-8 overflow-y-auto overscroll-contain touch-pan-y"
      aria-modal="true"
      role="dialog"
      aria-label={`Szczegóły usługi ${service.title}`}
      style={{ whiteSpace: "pre-line" }}
    >
      <div className="relative w-full max-w-[1050px] bg-gradient-glass rounded-3xl shadow-luxury overflow-hidden">
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Zamknij"
          className="absolute right-4 top-4 z-10 rounded-full p-2 text-muted-foreground hover:text-foreground transition-colors bg-transparent"
        >
          ✕
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left - Image */}
          <div className="w-full h-80 md:h-auto md:min-h-[420px] overflow-hidden bg-muted-foreground/5">
            <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
          </div>

          {/* Right - Content */}
          <div className="p-6 md:p-8 flex flex-col justify-between">
            <div>
              <h3 className="font-luxury text-2xl text-foreground mb-2">{service.title}</h3>

              <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
                <div className="flex-1">
                  <div className="text-sm text-muted-foreground">Czas:</div>
                  {service.duration}
                </div>

                <div className="hidden sm:block border-l border-border h-6 mx-2" />

                <div className="flex-1">
                  <div className="text-sm text-muted-foreground">Cena:</div>
                  {formatPriceJSX(service.price)}
                </div>
              </div>

              <p className="text-muted-foreground mb-4">{service.description}</p>

              <div className="mb-4">
                <h4 className="text-sm text-muted-foreground uppercase tracking-wide mb-2">Cechy</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 list-inside list-disc text-foreground">
                  {service.features.map((f, i) => (
                    <li key={i} className="text-sm">{f}</li>
                  ))}
                </ul>
              </div>

              {(service.title && /ppf|foli/i.test(service.title)) && (
                <div className="mb-4">
                  <h4 className="text-sm text-muted-foreground uppercase tracking-wide mb-2">Zalety folii PPF</h4>
                  <p className="text-foreground text-sm">Ochrona przed zarysowaniami, odporność na UV oraz samoregeneracja drobnych rys — idealne rozwiązanie dla wymagających.</p>
                </div>
              )}

            </div>

            <div className="mt-4 flex items-center gap-3">
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-lg border border-border text-muted-foreground hover:text-foreground transition-colors"
              >
                Zamknij
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceModal;
