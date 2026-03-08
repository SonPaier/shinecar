"use client";
import { useEffect } from 'react';

export default function ScrollHashHandler() {
  useEffect(() => {
    const raw = window.location.hash;
    if (!raw) return;
    const hash = raw.replace('#', '');
    setTimeout(() => {
      const el = document.getElementById(hash);
      if (el) {
        const headerEl = document.querySelector('header') as HTMLElement | null;
        const headerHeight = headerEl ? headerEl.offsetHeight : 96;
        const top = window.scrollY + el.getBoundingClientRect().top - headerHeight - 12;
        window.scrollTo({ top, behavior: 'smooth' });
        history.replaceState({}, document.title, window.location.pathname);
      }
    }, 50);
  }, []);
  return null;
}
