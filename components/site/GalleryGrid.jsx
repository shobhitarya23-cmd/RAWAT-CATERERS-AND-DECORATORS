'use client';
import { useState, useMemo, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { site } from '@/lib/site-config';

const CATS = ['All', 'Weddings', 'Decor', 'Catering', 'Food', 'Stage'];

export default function GalleryGrid({ compact = false }) {
  const [filter, setFilter] = useState('All');
  const [active, setActive] = useState(null);

  const items = useMemo(() => {
    const list = filter === 'All' ? site.gallery : site.gallery.filter((g) => g.category === filter);
    return compact ? list.slice(0, 8) : list;
  }, [filter, compact]);

  const openAt = (idx) => setActive(idx);
  const close = () => setActive(null);
  const prev = useCallback(() => setActive((i) => (i === null ? i : (i - 1 + items.length) % items.length)), [items.length]);
  const next = useCallback(() => setActive((i) => (i === null ? i : (i + 1) % items.length)), [items.length]);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [active, prev, next]);

  return (
    <div>
      <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-10">
        {CATS.map((c) => (
          <button key={c} onClick={() => setFilter(c)} className={`px-4 py-2 text-[11px] tracking-[0.24em] uppercase transition-all ${filter === c ? 'bg-brand-charcoal text-white' : 'text-brand-charcoal/70 hover:text-brand-gold border border-transparent hover:border-brand-gold/40'}`}>
            {c}
          </button>
        ))}
      </div>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-5 [column-fill:_balance]">
        {items.map((g, idx) => (
          <button key={g.id} onClick={() => openAt(idx)} className="group mb-4 md:mb-5 break-inside-avoid block w-full overflow-hidden bg-brand-ivory">
            <div className="relative overflow-hidden">
              <img loading="lazy" src={g.src} alt={g.title} className="w-full h-auto object-cover transition-transform duration-[1200ms] group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/70 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-4 left-4 right-4 text-left text-white translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="text-[10px] tracking-[0.28em] uppercase text-brand-gold">{g.category}</div>
                <div className="font-serif text-lg mt-1">{g.title}</div>
              </div>
            </div>
          </button>
        ))}
      </div>

      {active !== null && (
        <div className="fixed inset-0 z-[60] bg-brand-charcoal/95 backdrop-blur-sm flex items-center justify-center p-4" onClick={close}>
          <button onClick={close} className="absolute top-6 right-6 text-white/80 hover:text-brand-gold" aria-label="Close"><X size={28} /></button>
          <button onClick={(e) => { e.stopPropagation(); prev(); }} className="absolute left-4 md:left-8 text-white/70 hover:text-brand-gold" aria-label="Previous"><ChevronLeft size={40} /></button>
          <button onClick={(e) => { e.stopPropagation(); next(); }} className="absolute right-4 md:right-8 text-white/70 hover:text-brand-gold" aria-label="Next"><ChevronRight size={40} /></button>
          <div className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <img src={items[active].src} alt={items[active].title} className="w-full max-h-[82vh] object-contain" />
            <div className="mt-4 text-center">
              <div className="text-[10px] tracking-[0.28em] uppercase text-brand-gold">{items[active].category}</div>
              <div className="font-serif text-xl text-white mt-1">{items[active].title}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
