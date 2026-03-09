"use client";

import React, { useEffect, useRef } from 'react';

const Reviews = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    if (containerRef.current.dataset.loaded === 'true') return;
    containerRef.current.dataset.loaded = 'true';

    const script = document.createElement('script');
    script.src = 'https://cdn.trustindex.io/loader.js?1f4f73a662de5623a3368da8fa0';
    script.async = true;
    containerRef.current.appendChild(script);

    // Trustindex loader also appends a duplicate widget to document.body.
    // Watch for it and remove any widget that appears outside our container.
    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        for (const node of mutation.addedNodes) {
          if (
            node instanceof HTMLElement &&
            node.parentElement === document.body &&
            (node.classList.contains('ti-widget') ||
              node.getAttribute('src')?.includes('trustindex'))
          ) {
            node.remove();
          }
        }
      }
    });

    observer.observe(document.body, { childList: true });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="reviews" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-center font-luxury text-3xl text-foreground mb-10">Opinie klientów</h2>
        <div ref={containerRef} className="mt-6" />
      </div>
    </section>
  );
};

export default Reviews;
