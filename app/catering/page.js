import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';
import FloatingCTA from '@/components/site/FloatingCTA';
import Link from 'next/link';
import { site } from '@/lib/site-config';
import { ArrowRight, Check } from 'lucide-react';

export const metadata = {
  title: 'Catering — Rawat Caterers & Decorators',
  description: 'Curated catering menus, live counters, buffet setups and guest service for weddings, parties and corporate events.',
};

const MENU = [
  { name: 'Welcome Drinks', img: 'https://images.unsplash.com/photo-1555244162-803834f70033?crop=entropy&cs=srgb&fm=jpg&q=85' },
  { name: 'Starters', img: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?crop=entropy&cs=srgb&fm=jpg&q=85' },
  { name: 'North Indian', img: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?crop=entropy&cs=srgb&fm=jpg&q=85' },
  { name: 'South Indian', img: 'https://images.pexels.com/photos/5410418/pexels-photo-5410418.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' },
  { name: 'Chinese', img: 'https://images.pexels.com/photos/36388454/pexels-photo-36388454.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' },
  { name: 'Live Counters', img: 'https://images.unsplash.com/photo-1740047602722-b4993b79e4b7?crop=entropy&cs=srgb&fm=jpg&q=85' },
  { name: 'Desserts', img: 'https://images.unsplash.com/photo-1696940823960-ee5242bddc47?crop=entropy&cs=srgb&fm=jpg&q=85' },
  { name: 'Beverages', img: 'https://images.unsplash.com/photo-1555244162-803834f70033?crop=entropy&cs=srgb&fm=jpg&q=85' },
];

export default function CateringPage() {
  return (
    <main className="min-h-screen bg-brand-offwhite">
      <Header transparent />
      <section className="relative h-[80svh] min-h-[520px] overflow-hidden">
        <img src={site.images.cateringShowcase} alt="Catering by Rawat" className="absolute inset-0 w-full h-full object-cover animate-slow-zoom" />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-charcoal/60 to-brand-charcoal/80" />
        <div className="relative z-10 h-full flex flex-col justify-end pb-20 container-wide text-white">
          <div className="flex items-center gap-3"><span className="gold-line" /><span className="eyebrow">Catering</span></div>
          <h1 className="font-serif text-5xl md:text-8xl mt-5 leading-[1.02]">Food Worth<br /><em className="text-brand-goldLight">Gathering For.</em></h1>
          <p className="mt-6 max-w-xl text-white/80">Thoughtfully planned menus, beautifully presented food and dependable service for celebrations of every scale.</p>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto">
            <span className="eyebrow">Menu Categories</span>
            <h2 className="font-serif text-4xl md:text-5xl mt-4 text-brand-charcoal">A Menu Built <em className="text-brand-gold">Around You.</em></h2>
            <p className="mt-4 text-brand-gray">Every event is different. Tell us about yours and we&apos;ll create a menu around it.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-14">
            {MENU.map((m) => (
              <div key={m.name} className="group relative overflow-hidden aspect-square">
                <img src={m.img} alt={m.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/85 via-brand-charcoal/25 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <div className="font-serif text-xl md:text-2xl">{m.name}</div>
                  <div className="h-px w-8 bg-brand-gold mt-2 group-hover:w-14 transition-all duration-500" />
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-14">
            <Link href="/#quote" className="btn-gold">Request a Menu <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-brand-ivory">
        <div className="container-wide grid md:grid-cols-2 gap-10">
          {[
            { t: 'Food Presentation', d: 'Every dish styled and plated to feel like part of the décor.' },
            { t: 'Buffet Setup', d: 'Elegant stations designed around venue flow and guest experience.' },
            { t: 'Live Counters', d: 'Chef-led live counters that add theatre to the meal.' },
            { t: 'Guest Service', d: 'Trained service staff attentive to every table.' },
            { t: 'Customized Menus', d: 'Menus adapted to occasion, region and dietary needs.' },
            { t: 'Dependable Execution', d: 'Coordinated timing from welcome drinks to dessert.' },
          ].map((s) => (
            <div key={s.t} className="flex items-start gap-5 border-t border-brand-charcoal/10 pt-6">
              <Check size={20} className="text-brand-gold mt-1 flex-none" />
              <div>
                <div className="font-serif text-2xl text-brand-charcoal">{s.t}</div>
                <div className="mt-2 text-brand-gray">{s.d}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
      <FloatingCTA />
    </main>
  );
}
