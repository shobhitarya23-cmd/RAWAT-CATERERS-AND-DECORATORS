'use client';
import { Phone, MessageCircle, Sparkles } from 'lucide-react';
import { site, buildWhatsAppLink, buildTelLink } from '@/lib/site-config';

export default function FloatingCTA() {
  const waLink = buildWhatsAppLink('Hello Rawat, I would like to enquire about your catering & decoration services.');
  return (
    <>
      {/* Floating WhatsApp button */}
      <a
        href={waLink}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp us"
        className="hidden md:flex fixed bottom-6 right-6 z-40 h-14 w-14 rounded-full items-center justify-center bg-[#25D366] text-white shadow-lg shadow-black/20 hover:scale-105 transition-transform"
      >
        <MessageCircle size={24} />
      </a>

      {/* Mobile sticky bar */}
      <div className="md:hidden fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 bg-brand-charcoal/95 backdrop-blur-md border-t border-brand-gold/30">
        <a href={buildTelLink()} className="flex flex-col items-center justify-center py-2.5 text-white text-[10px] tracking-widest uppercase gap-1">
          <Phone size={16} className="text-brand-gold" /> Call
        </a>
        <a href={waLink} target="_blank" rel="noreferrer" className="flex flex-col items-center justify-center py-2.5 text-white text-[10px] tracking-widest uppercase gap-1 border-x border-white/10">
          <MessageCircle size={16} className="text-[#25D366]" /> WhatsApp
        </a>
        <a href="/#quote" className="flex flex-col items-center justify-center py-2.5 text-brand-charcoal bg-brand-gold text-[10px] tracking-widest uppercase gap-1 font-medium">
          <Sparkles size={16} /> Quote
        </a>
      </div>
    </>
  );
}
