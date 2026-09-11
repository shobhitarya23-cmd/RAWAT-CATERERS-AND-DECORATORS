import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';
import FloatingCTA from '@/components/site/FloatingCTA';
import GalleryGrid from '@/components/site/GalleryGrid';
import Link from 'next/link';
import { site } from '@/lib/site-config';

export const metadata = {
  title: 'Gallery — Rawat Caterers & Decorators',
  description: 'A visual journey of weddings, receptions, buffet setups, mandaps, stage decoration and celebrations by Rawat Caterers & Decorators.',
};

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-brand-offwhite">
      <Header />
      <section className="pt-36 pb-14 bg-brand-ivory">
        <div className="container-wide text-center">
          <div className="flex items-center justify-center gap-3"><span className="gold-line" /><span className="eyebrow">Gallery</span><span className="gold-line" /></div>
          <h1 className="font-serif text-5xl md:text-7xl mt-5 text-brand-charcoal leading-[1.05]">A Visual <em className="text-brand-gold">Journey.</em></h1>
          <p className="mt-5 max-w-xl mx-auto text-brand-gray">Moments from celebrations we&apos;ve had the privilege to design and serve.</p>
        </div>
      </section>
      <section className="py-16 md:py-24">
        <div className="container-wide">
          <GalleryGrid />

          {/* EVENT FILMS */}
          {site.videos && site.videos.length > 0 && (
            <div className="mt-24 md:mt-32">
              <div className="text-center max-w-2xl mx-auto">
                <div className="flex items-center justify-center gap-3"><span className="gold-line" /><span className="eyebrow">Event Films</span><span className="gold-line" /></div>
                <h2 className="font-serif text-4xl md:text-5xl mt-5 text-brand-charcoal leading-[1.05]">Celebrations, <em className="text-brand-gold">In Motion.</em></h2>
                <p className="mt-4 text-brand-gray">A short walkthrough of Rawat events — décor, ambience and atmosphere.</p>
              </div>
              <div className={`mt-12 grid gap-6 ${site.videos.length > 1 ? 'md:grid-cols-2' : 'max-w-4xl mx-auto'}`}>
                {site.videos.map((v) => (
                  <div key={v.id} className="bg-brand-charcoal overflow-hidden ring-1 ring-brand-gold/20 shadow-xl shadow-black/20">
                    <div className="relative aspect-video">
                      <video
                        src={v.src}
                        poster={v.poster}
                        controls
                        playsInline
                        preload="metadata"
                        className="absolute inset-0 w-full h-full object-cover bg-black"
                      />
                    </div>
                    <div className="p-5 flex items-center justify-between">
                      <div>
                        <div className="text-[10px] tracking-[0.28em] uppercase text-brand-gold">{v.category}</div>
                        <div className="font-serif text-xl text-white mt-1">{v.title}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="text-center mt-16">
            <Link href="/#quote" className="btn-gold">Plan Yours Next</Link>
          </div>
        </div>
      </section>
      <Footer />
      <FloatingCTA />
    </main>
  );
}
