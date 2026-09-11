import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';
import FloatingCTA from '@/components/site/FloatingCTA';
import QuoteForm from '@/components/site/QuoteForm';
import GalleryGrid from '@/components/site/GalleryGrid';
import Link from 'next/link';
import { site, buildWhatsAppLink } from '@/lib/site-config';
import { ArrowRight, Utensils, Sparkles, CalendarHeart, Check, MessageCircle, Phone, MapPin, Mail } from 'lucide-react';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-brand-offwhite">
      <Header transparent />

      {/* HERO */}
      <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img src={site.images.hero} alt="Elegant wedding decoration by Rawat Caterers" className="w-full h-full object-cover animate-slow-zoom" />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-charcoal/60 via-brand-charcoal/40 to-brand-charcoal/85" />
        </div>
        <div className="relative z-10 h-full flex flex-col justify-end pb-24 md:pb-28">
          <div className="container-wide">
            <div className="max-w-3xl text-white animate-fade-up">
              <div className="flex items-center gap-4 text-brand-gold">
                <span className="gold-line" />
                <span className="text-[11px] tracking-[0.4em] uppercase">Catering • Decoration • Events</span>
              </div>
              <h1 className="font-serif text-5xl sm:text-6xl md:text-8xl leading-[1.02] mt-6">
                Celebrations,<br /><span className="italic text-brand-goldLight">Served Beautifully.</span>
              </h1>
              <p className="mt-8 text-lg text-white/80 max-w-xl leading-relaxed">
                Exceptional food, elegant décor and thoughtful event execution—brought together under one roof.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link href="#quote" className="btn-gold">Get a Quote <ArrowRight size={16} /></Link>
                <Link href="/gallery" className="btn-outline-light">View Our Work</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2 text-white/60 text-[10px] tracking-[0.4em] uppercase">
          <span>Scroll</span>
          <span className="h-10 w-px bg-white/30" />
        </div>
      </section>

      {/* EVENT CATEGORY STRIP */}
      <section className="bg-brand-charcoal text-white">
        <div className="container-wide py-8">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-[11px] md:text-xs tracking-[0.32em] uppercase text-white/70">
            {['Weddings','Engagements','Birthdays','Anniversaries','Corporate','Private Events'].map((c, i) => (
              <div key={c} className="flex items-center gap-10">
                <span className="hover:text-brand-gold transition-colors">{c}</span>
                {i < 5 && <span className="text-brand-gold">•</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 md:py-32 bg-brand-offwhite">
        <div className="container-wide grid md:grid-cols-2 gap-14 md:gap-20 items-center">
          <div className="relative order-2 md:order-1">
            <img src={site.images.about} alt="Premium event setup" className="w-full aspect-[4/5] object-cover" />
            <div className="absolute -bottom-6 -right-6 hidden md:block bg-brand-gold text-white p-8 max-w-[240px]">
              <div className="font-serif text-4xl leading-none">One team.</div>
              <div className="text-sm mt-3 text-white/90">From menu to final décor touch.</div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="flex items-center gap-3"><span className="gold-line" /><span className="eyebrow">About Rawat</span></div>
            <h2 className="font-serif text-4xl md:text-6xl leading-[1.05] mt-5 text-brand-charcoal">More Than Catering.<br /><em className="text-brand-gold">More Than Decoration.</em></h2>
            <p className="mt-8 text-brand-gray leading-relaxed text-[17px] max-w-xl">We believe every celebration deserves more than good food and beautiful décor. It deserves an experience people remember.</p>
            <div className="mt-10 space-y-6">
              {[
                { n: '01', t: 'Taste', d: 'Food that becomes part of the memory.' },
                { n: '02', t: 'Design', d: 'Décor designed around the occasion, venue and personality.' },
                { n: '03', t: 'Execution', d: 'Professional coordination from planning to the final guest.' },
              ].map((p) => (
                <div key={p.n} className="grid grid-cols-[auto_1fr] gap-5 border-t border-brand-charcoal/10 pt-5">
                  <div className="text-brand-gold font-serif text-2xl">{p.n}</div>
                  <div>
                    <div className="text-[11px] tracking-[0.32em] uppercase text-brand-charcoal">{p.t}</div>
                    <div className="mt-2 text-brand-gray">{p.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 md:py-32 bg-brand-ivory">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3"><span className="gold-line" /><span className="eyebrow">Our Services</span><span className="gold-line" /></div>
            <h2 className="font-serif text-4xl md:text-6xl mt-5 text-brand-charcoal leading-[1.05]">One Team.<br /><em className="text-brand-gold">Every Important Detail.</em></h2>
            <p className="mt-6 text-brand-gray">From menu planning to the final décor touch, our services are designed to work together.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            {[
              { icon: Utensils, title: 'Catering', desc: 'Thoughtfully planned menus, beautifully presented food and dependable service for celebrations of every scale.', href: '/catering' },
              { icon: Sparkles, title: 'Decoration', desc: 'Elegant stages, florals, entrances, tables and themes designed around your occasion and venue.', href: '/decoration' },
              { icon: CalendarHeart, title: 'Events', desc: 'Weddings, engagements, birthdays, anniversaries, corporate gatherings and private celebrations.', href: '#quote' },
            ].map(({ icon: Icon, title, desc, href }) => (
              <div key={title} className="group bg-white border border-brand-charcoal/5 p-10 hover:border-brand-gold/50 transition-all duration-500 hover:-translate-y-1">
                <div className="h-14 w-14 border border-brand-gold/40 flex items-center justify-center text-brand-gold"><Icon size={22} /></div>
                <h3 className="font-serif text-3xl mt-8 text-brand-charcoal">{title}</h3>
                <p className="mt-4 text-brand-gray leading-relaxed">{desc}</p>
                <Link href={href} className="mt-8 inline-flex items-center gap-2 text-sm tracking-widest uppercase text-brand-charcoal group-hover:text-brand-gold transition-colors">
                  Explore <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED WORK */}
      <section className="py-24 md:py-32 bg-brand-offwhite">
        <div className="container-wide">
          <div className="flex items-end justify-between flex-wrap gap-6">
            <div>
              <div className="flex items-center gap-3"><span className="gold-line" /><span className="eyebrow">Featured Work</span></div>
              <h2 className="font-serif text-4xl md:text-6xl mt-5 text-brand-charcoal leading-[1.05]">Spaces Designed to<br /><em className="text-brand-gold">Be Remembered.</em></h2>
            </div>
            <Link href="/gallery" className="btn-outline-dark">Full Gallery <ArrowRight size={14} /></Link>
          </div>
          <div className="mt-14">
            <GalleryGrid compact />
          </div>
        </div>
      </section>

      {/* CATERING SHOWCASE */}
      <section className="relative bg-brand-charcoal text-white overflow-hidden">
        <div className="grid md:grid-cols-2">
          <div className="relative min-h-[420px] md:min-h-[640px]">
            <img src={site.images.cateringShowcase} alt="Curated buffet" className="absolute inset-0 w-full h-full object-cover" />
          </div>
          <div className="p-10 md:p-20 flex flex-col justify-center">
            <div className="flex items-center gap-3"><span className="gold-line" /><span className="eyebrow">Catering</span></div>
            <h2 className="font-serif text-4xl md:text-6xl mt-5 leading-[1.05]">Food Worth<br /><em className="text-brand-goldLight">Gathering For.</em></h2>
            <p className="mt-6 text-white/70 max-w-md leading-relaxed">Curated menus, careful sourcing and elegant presentation — designed for the size, mood and rhythm of your celebration.</p>
            <ul className="mt-8 space-y-3">
              {['Welcome drinks & starters','North Indian, South Indian & Chinese','Live counters & chef stations','Premium buffet & service staff'].map((t) => (
                <li key={t} className="flex items-start gap-3 text-white/85"><Check size={16} className="text-brand-gold mt-1 flex-none" /> {t}</li>
              ))}
            </ul>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/catering" className="btn-gold">View Catering</Link>
              <Link href="#quote" className="btn-outline-light">Request a Menu</Link>
            </div>
          </div>
        </div>
      </section>

      {/* DECORATION SHOWCASE */}
      <section className="relative bg-brand-ivory overflow-hidden">
        <div className="grid md:grid-cols-2">
          <div className="p-10 md:p-20 flex flex-col justify-center order-2 md:order-1">
            <div className="flex items-center gap-3"><span className="gold-line" /><span className="eyebrow">Decoration</span></div>
            <h2 className="font-serif text-4xl md:text-6xl mt-5 leading-[1.05] text-brand-charcoal">Every Space,<br /><em className="text-brand-gold">A Story.</em></h2>
            <p className="mt-6 text-brand-gray max-w-md leading-relaxed">From intimate ceremonies to grand receptions — mandaps, stages, florals, entrances and lighting, tailored to your venue.</p>
            <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-2 text-sm text-brand-charcoal/80">
              {['Royal Weddings','Modern Minimal','Floral Elegance','Traditional Indian','Grand Reception','Intimate Celebrations'].map((t) => (
                <div key={t} className="border-t border-brand-charcoal/10 py-2">{t}</div>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/decoration" className="btn-outline-dark">View Decoration</Link>
              <Link href="#quote" className="btn-gold">Enquire Now</Link>
            </div>
          </div>
          <div className="relative min-h-[420px] md:min-h-[640px] order-1 md:order-2">
            <img src={site.images.decorShowcase} alt="Wedding stage decoration" className="absolute inset-0 w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* WHY RAWAT */}
      <section className="py-24 md:py-32 bg-brand-offwhite">
        <div className="container-tight text-center">
          <div className="flex items-center justify-center gap-3"><span className="gold-line" /><span className="eyebrow">Why Rawat</span><span className="gold-line" /></div>
          <h2 className="font-serif text-4xl md:text-6xl mt-5 text-brand-charcoal leading-[1.05]">The Details Guests<br /><em className="text-brand-gold">Remember.</em></h2>
          <p className="mt-6 text-brand-gray max-w-2xl mx-auto">We focus on the things that make an event feel effortless to the host and memorable to the guest.</p>
          <div className="grid md:grid-cols-2 gap-x-14 gap-y-6 mt-14 text-left">
            {['Complete catering & décor solutions','Menus tailored to your occasion','Décor designed around your venue','Professional event-day coordination','Attention to presentation & guest experience','Personal attention from enquiry to execution'].map((p) => (
              <div key={p} className="flex items-start gap-4 border-t border-brand-charcoal/10 pt-5">
                <Check size={18} className="text-brand-gold mt-1 flex-none" />
                <span className="text-brand-charcoal/90">{p}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EVENT PORTFOLIO */}
      <section className="py-24 md:py-32 bg-brand-ivory">
        <div className="container-wide">
          <div className="flex items-end justify-between flex-wrap gap-6">
            <div>
              <div className="flex items-center gap-3"><span className="gold-line" /><span className="eyebrow">Event Portfolio</span></div>
              <h2 className="font-serif text-4xl md:text-6xl mt-5 text-brand-charcoal leading-[1.05]">Recent<br /><em className="text-brand-gold">Celebrations.</em></h2>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mt-14">
            {site.events.map((e) => (
              <div key={e.id} className="group bg-white overflow-hidden">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={e.cover} alt={e.title} className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" />
                </div>
                <div className="p-7">
                  <div className="eyebrow">{e.type}</div>
                  <h3 className="font-serif text-2xl mt-3 text-brand-charcoal">{e.title}</h3>
                  <div className="mt-4 text-sm text-brand-gray space-y-1">
                    <div><span className="text-brand-charcoal/70">Venue:</span> {e.venue}</div>
                    <div><span className="text-brand-charcoal/70">Guests:</span> {e.guests}</div>
                    <div><span className="text-brand-charcoal/70">Services:</span> {e.services}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-24 md:py-32 bg-brand-charcoal text-white">
        <div className="container-tight text-center">
          <div className="flex items-center justify-center gap-3"><span className="gold-line" /><span className="eyebrow">Client Reviews</span><span className="gold-line" /></div>
          <h2 className="font-serif text-4xl md:text-6xl mt-5 leading-[1.05]">Kind Words From<br /><em className="text-brand-goldLight">Our Hosts.</em></h2>
          <div className="grid md:grid-cols-3 gap-8 mt-16 text-left">
            {site.reviews.map((r) => (
              <div key={r.id} className="border border-white/10 p-8 flex flex-col">
                <div className="text-brand-gold font-serif text-5xl leading-none">“</div>
                <p className="mt-4 text-white/85 leading-relaxed flex-1">{r.quote}</p>
                <div className="mt-8 pt-6 border-t border-white/10">
                  <div className="text-white">{r.name}</div>
                  <div className="text-brand-gold text-[11px] tracking-[0.28em] uppercase mt-1">{r.event}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA + QUOTE FORM */}
      <section id="quote" className="relative py-24 md:py-32 bg-brand-offwhite overflow-hidden">
        <div className="container-wide grid lg:grid-cols-5 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-2 lg:sticky lg:top-28">
            <div className="flex items-center gap-3"><span className="gold-line" /><span className="eyebrow">Get a Quote</span></div>
            <h2 className="font-serif text-4xl md:text-6xl mt-5 text-brand-charcoal leading-[1.05]">Planning Your Next<br /><em className="text-brand-gold">Celebration?</em></h2>
            <p className="mt-6 text-brand-gray leading-relaxed max-w-md">Tell us what you&apos;re celebrating. Share a few details and we&apos;ll get back to you with the right approach.</p>
            <div className="mt-10 space-y-4 text-sm">
              <a href={buildWhatsAppLink('Hello Rawat, I would like a quote.')} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-brand-charcoal hover:text-brand-gold"><MessageCircle size={16} className="text-brand-gold" /> WhatsApp — {site.whatsappDisplay}</a>
              <a href={`tel:${site.phone}`} className="flex items-center gap-3 text-brand-charcoal hover:text-brand-gold"><Phone size={16} className="text-brand-gold" /> Call — {site.phoneDisplay}</a>
              <a href={`mailto:${site.email}`} className="flex items-center gap-3 text-brand-charcoal hover:text-brand-gold"><Mail size={16} className="text-brand-gold" /> {site.email}</a>
              <div className="flex items-start gap-3 text-brand-charcoal"><MapPin size={16} className="text-brand-gold mt-1" /> {site.address}</div>
            </div>
          </div>
          <div className="lg:col-span-3 bg-white border border-brand-charcoal/5 p-8 md:p-12 shadow-[0_1px_0_rgba(0,0,0,0.02)]">
            <QuoteForm />
          </div>
        </div>
      </section>

      <Footer />
      <FloatingCTA />
    </main>
  );
}
