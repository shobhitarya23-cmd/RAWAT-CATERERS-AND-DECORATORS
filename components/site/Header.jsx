'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu, X, Phone } from 'lucide-react';
import { nav, site, buildTelLink } from '@/lib/site-config';

export default function Header({ transparent = false }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const solid = !transparent || scrolled;

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${solid ? 'bg-brand-charcoal/95 backdrop-blur-md shadow-[0_1px_0_rgba(178,138,76,0.15)]' : 'bg-transparent'}`}>
      <div className="container-wide flex items-center justify-between h-20">
        <Link href="/" className="flex items-baseline gap-2 group">
          <span className="font-serif text-2xl md:text-[26px] tracking-wide text-white">RAWAT</span>
          <span className="hidden sm:inline text-[10px] tracking-[0.28em] uppercase text-brand-gold">Caterers &amp; Decorators</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="text-[13px] tracking-widest uppercase text-white/80 hover:text-brand-gold transition-colors">
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a href={buildTelLink()} className="flex items-center gap-2 text-white/80 hover:text-brand-gold text-sm">
            <Phone size={14} /> {site.phoneDisplay}
          </a>
          <Link href="/#quote" className="btn-gold !py-2.5 !px-5 text-[11px]">Get a Quote</Link>
        </div>

        <button className="lg:hidden text-white p-2" aria-label="Menu" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-500 ${open ? 'max-h-[80vh] border-t border-white/10' : 'max-h-0'} bg-brand-charcoal`}>
        <div className="container-wide py-6 flex flex-col gap-1">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} onClick={() => setOpen(false)} className="py-3 text-white/85 text-sm tracking-widest uppercase border-b border-white/5">
              {n.label}
            </Link>
          ))}
          <Link href="/#quote" onClick={() => setOpen(false)} className="btn-gold mt-5 justify-center">Get a Quote</Link>
        </div>
      </div>
    </header>
  );
}
