import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';
import FloatingCTA from '@/components/site/FloatingCTA';
import QuoteForm from '@/components/site/QuoteForm';
import { site, buildWhatsAppLink } from '@/lib/site-config';
import { Phone, Mail, MapPin, MessageCircle, Clock } from 'lucide-react';

export const metadata = {
  title: 'Contact — Rawat Caterers & Decorators',
  description: 'Contact Rawat Caterers & Decorators for catering, event decoration and celebration services.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-brand-offwhite">
      <Header />
      <section className="pt-36 pb-14 bg-brand-ivory">
        <div className="container-wide text-center">
          <div className="flex items-center justify-center gap-3"><span className="gold-line" /><span className="eyebrow">Contact</span><span className="gold-line" /></div>
          <h1 className="font-serif text-5xl md:text-7xl mt-5 text-brand-charcoal leading-[1.05]">Let&apos;s Plan Something <em className="text-brand-gold">Beautiful.</em></h1>
          <p className="mt-5 max-w-xl mx-auto text-brand-gray">Reach out through the channel you prefer — we usually respond within a few hours.</p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-wide grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <div className="eyebrow">Contact Rawat</div>
              <div className="h-px w-16 bg-brand-gold mt-4" />
            </div>
            <div className="space-y-6">
              <a href={`tel:${site.phone}`} className="flex items-start gap-4 group">
                <span className="h-11 w-11 flex-none border border-brand-gold/40 flex items-center justify-center text-brand-gold"><Phone size={16} /></span>
                <span>
                  <div className="eyebrow">Phone</div>
                  <div className="text-brand-charcoal group-hover:text-brand-gold mt-1">{site.phoneDisplay}</div>
                </span>
              </a>
              <a href={buildWhatsAppLink('Hello Rawat, I would like to enquire.')} target="_blank" rel="noreferrer" className="flex items-start gap-4 group">
                <span className="h-11 w-11 flex-none border border-brand-gold/40 flex items-center justify-center text-brand-gold"><MessageCircle size={16} /></span>
                <span>
                  <div className="eyebrow">WhatsApp</div>
                  <div className="text-brand-charcoal group-hover:text-brand-gold mt-1">{site.whatsappDisplay}</div>
                </span>
              </a>
              <a href={`mailto:${site.email}`} className="flex items-start gap-4 group">
                <span className="h-11 w-11 flex-none border border-brand-gold/40 flex items-center justify-center text-brand-gold"><Mail size={16} /></span>
                <span>
                  <div className="eyebrow">Email</div>
                  <div className="text-brand-charcoal group-hover:text-brand-gold mt-1 break-all">{site.email}</div>
                </span>
              </a>
              <div className="flex items-start gap-4">
                <span className="h-11 w-11 flex-none border border-brand-gold/40 flex items-center justify-center text-brand-gold"><MapPin size={16} /></span>
                <span>
                  <div className="eyebrow">Address</div>
                  <div className="text-brand-charcoal mt-1">{site.address}</div>
                </span>
              </div>
              <div className="flex items-start gap-4">
                <span className="h-11 w-11 flex-none border border-brand-gold/40 flex items-center justify-center text-brand-gold"><Clock size={16} /></span>
                <span>
                  <div className="eyebrow">Hours</div>
                  <div className="text-brand-charcoal mt-1">{site.businessHours}</div>
                </span>
              </div>
            </div>
            <div className="aspect-video bg-brand-ivory border border-brand-charcoal/10 flex items-center justify-center text-brand-gray text-sm">
              Google Map — add embed URL in <code className="mx-1 text-brand-gold">site.mapEmbedUrl</code>
            </div>
          </div>
          <div className="lg:col-span-3 bg-white border border-brand-charcoal/5 p-8 md:p-12">
            <div className="eyebrow">Enquiry Form</div>
            <h2 className="font-serif text-3xl md:text-4xl mt-3 text-brand-charcoal">Tell us about your event.</h2>
            <div className="mt-8">
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <FloatingCTA />
    </main>
  );
}
