import Link from 'next/link';
import { Instagram, Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { site, nav, buildWhatsAppLink, buildTelLink } from '@/lib/site-config';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-brand-charcoal text-white/80">
      <div className="container-wide pt-20 pb-10">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="font-serif text-3xl text-white">RAWAT</div>
            <div className="text-[11px] tracking-[0.32em] uppercase text-brand-gold mt-1">Caterers &amp; Decorators</div>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-white/60">{site.tagline}</p>
            <div className="mt-8 flex items-center gap-4">
              <a href={site.instagram} target="_blank" rel="noreferrer" className="p-2 border border-white/15 hover:border-brand-gold hover:text-brand-gold transition-colors" aria-label="Instagram"><Instagram size={16} /></a>
              <a href={site.instagram} target="_blank" rel="noreferrer" className="text-xs tracking-widest uppercase text-white/60 hover:text-brand-gold transition-colors">@rawat_caterers_decoraters</a>
            </div>
          </div>

          <div>
            <div className="eyebrow text-white/50">Explore</div>
            <ul className="mt-5 space-y-3 text-sm">
              {nav.map((n) => (
                <li key={n.href}><Link href={n.href} className="hover:text-brand-gold transition-colors">{n.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <div className="eyebrow text-white/50">Contact</div>
            <ul className="mt-5 space-y-3 text-sm">
              <li className="flex items-start gap-3"><Phone size={14} className="mt-1 text-brand-gold" /><a href={buildTelLink()} className="hover:text-brand-gold">{site.phoneDisplay}</a></li>
              <li className="flex items-start gap-3"><MessageCircle size={14} className="mt-1 text-brand-gold" /><a href={buildWhatsAppLink('Hello Rawat, I would like to enquire about your services.')} target="_blank" rel="noreferrer" className="hover:text-brand-gold">WhatsApp Us</a></li>
              <li className="flex items-start gap-3"><Mail size={14} className="mt-1 text-brand-gold" /><a href={`mailto:${site.email}`} className="hover:text-brand-gold break-all">{site.email}</a></li>
              <li className="flex items-start gap-3"><MapPin size={14} className="mt-1 text-brand-gold" /><span>{site.address}</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <div>© {year} {site.businessName}. All rights reserved.</div>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-brand-gold">Privacy Policy</Link>
            <Link href="#" className="hover:text-brand-gold">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
