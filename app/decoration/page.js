import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';
import FloatingCTA from '@/components/site/FloatingCTA';
import Link from 'next/link';
import { site } from '@/lib/site-config';
import { ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Decoration — Rawat Caterers & Decorators',
  description: 'Wedding stages, mandaps, florals, entrances, lighting and theme decoration designed around your venue and occasion.',
};

const CATS = site.decorStyles;

const SERVICES = ['Wedding Decoration','Stage Decoration','Mandap Decoration','Floral Decoration','Entrance Decoration','Table Decoration','Reception Décor','Birthday Decoration','Anniversary Decoration','Theme Decoration','Lighting','Backdrop Design'];

export default function DecorationPage() {
  return (
    <main className="min-h-screen bg-brand-offwhite">
      <Header transparent />
      <section className="relative h-[80svh] min-h-[520px] overflow-hidden">
        <img src={site.images.decorShowcase} alt="Decoration by Rawat" className="absolute inset-0 w-full h-full object-cover animate-slow-zoom" />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-charcoal/60 to-brand-charcoal/80" />
        <div className="relative z-10 h-full flex flex-col justify-end pb-20 container-wide text-white">
          <div className="flex items-center gap-3"><span className="gold-line" /><span className="eyebrow">Decoration</span></div>
          <h1 className="font-serif text-5xl md:text-8xl mt-5 leading-[1.02]">Spaces Designed to<br /><em className="text-brand-goldLight">Be Remembered.</em></h1>
          <p className="mt-6 max-w-xl text-white/80">Elegant stages, florals, entrances, tables and themes — designed around your occasion and venue.</p>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto">
            <span className="eyebrow">Decoration Styles</span>
            <h2 className="font-serif text-4xl md:text-5xl mt-4 text-brand-charcoal">Every Venue, <em className="text-brand-gold">Its Own Story.</em></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5 mt-14">
            {CATS.map((c) => (
              <div key={c.name} className="group relative overflow-hidden aspect-[4/5]">
                <img src={c.img} alt={c.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/85 via-brand-charcoal/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-7 text-white">
                  <div className="eyebrow !text-brand-goldLight">Style</div>
                  <div className="font-serif text-3xl mt-2">{c.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-brand-ivory">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-14 items-start">
            <div>
              <span className="eyebrow">What We Design</span>
              <h2 className="font-serif text-4xl md:text-5xl mt-4 text-brand-charcoal">Every Element,<br /><em className="text-brand-gold">Considered.</em></h2>
              <p className="mt-6 text-brand-gray max-w-md">From the first flower to the final light — our team designs around your venue, occasion and personal style.</p>
              <Link href="/#quote" className="btn-gold mt-10 inline-flex">Enquire Now <ArrowRight size={16} /></Link>
            </div>
            <div className="grid grid-cols-2 gap-x-8 gap-y-3">
              {SERVICES.map((s) => (
                <div key={s} className="border-t border-brand-charcoal/10 py-3 text-brand-charcoal/90">{s}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingCTA />
    </main>
  );
}
