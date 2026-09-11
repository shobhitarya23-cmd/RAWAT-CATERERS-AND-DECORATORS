'use client';
import { useState } from 'react';
import { toast } from 'sonner';
import { buildWhatsAppLink } from '@/lib/site-config';
import { ArrowRight, Loader2 } from 'lucide-react';

const EVENT_TYPES = ['Wedding', 'Engagement', 'Birthday', 'Anniversary', 'Corporate', 'Private Party', 'Religious / Family Function', 'Other'];
const SERVICES = ['Catering', 'Decoration', 'Catering + Decoration', 'Full Event Support'];

export default function QuoteForm() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', eventType: 'Wedding', eventDate: '', guests: '', venue: '', services: 'Catering + Decoration', budget: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const composeMessage = () => {
    return [
      '*New Enquiry — Rawat Caterers & Decorators*',
      '',
      `*Name:* ${form.name}`,
      `*Phone:* ${form.phone}`,
      form.email && `*Email:* ${form.email}`,
      `*Event Type:* ${form.eventType}`,
      form.eventDate && `*Event Date:* ${form.eventDate}`,
      form.guests && `*Approx. Guests:* ${form.guests}`,
      form.venue && `*Venue / Location:* ${form.venue}`,
      `*Services Required:* ${form.services}`,
      form.budget && `*Budget:* ${form.budget}`,
      form.message && `*Message:* ${form.message}`,
    ].filter(Boolean).join('\n');
  };

  async function onSubmit(e) {
    e.preventDefault();
    if (!form.name || !form.phone) {
      toast.error('Please share your name and phone number.');
      return;
    }
    setLoading(true);
    try {
      await fetch('/api/enquiries', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) });
      const msg = composeMessage();
      setDone(true);
      toast.success('Enquiry received. Opening WhatsApp…');
      window.open(buildWhatsAppLink(msg), '_blank');
    } catch (err) {
      toast.error('Something went wrong. Please try WhatsApp instead.');
    } finally { setLoading(false); }
  }

  if (done) {
    return (
      <div className="bg-white border border-brand-gold/30 p-10 text-center">
        <div className="eyebrow">Enquiry Received</div>
        <h3 className="font-serif text-3xl mt-3 text-brand-charcoal">Thank you.</h3>
        <p className="mt-3 text-brand-gray max-w-md mx-auto">Your enquiry has been received. Our team will contact you shortly.</p>
        <button onClick={() => { setDone(false); setForm({ name: '', phone: '', email: '', eventType: 'Wedding', eventDate: '', guests: '', venue: '', services: 'Catering + Decoration', budget: '', message: '' }); }} className="mt-6 text-sm tracking-widest uppercase text-brand-gold hover:text-brand-goldDark">Send another enquiry →</button>
      </div>
    );
  }

  const inputCls = 'w-full bg-transparent border-b border-brand-charcoal/20 focus:border-brand-gold py-3 text-brand-charcoal placeholder:text-brand-gray/60 text-sm outline-none transition-colors';

  return (
    <form onSubmit={onSubmit} className="grid md:grid-cols-2 gap-x-8 gap-y-6">
      <input required placeholder="Full Name*" value={form.name} onChange={set('name')} className={inputCls} />
      <input required placeholder="Phone Number*" value={form.phone} onChange={set('phone')} className={inputCls} />
      <input type="email" placeholder="Email" value={form.email} onChange={set('email')} className={inputCls} />
      <input type="date" placeholder="Event Date" value={form.eventDate} onChange={set('eventDate')} className={inputCls} />
      <select value={form.eventType} onChange={set('eventType')} className={inputCls}>
        {EVENT_TYPES.map((t) => <option key={t}>{t}</option>)}
      </select>
      <select value={form.services} onChange={set('services')} className={inputCls}>
        {SERVICES.map((t) => <option key={t}>{t}</option>)}
      </select>
      <input placeholder="Approx. Guest Count" value={form.guests} onChange={set('guests')} className={inputCls} />
      <input placeholder="Venue / Location" value={form.venue} onChange={set('venue')} className={inputCls} />
      <input placeholder="Budget Range (optional)" value={form.budget} onChange={set('budget')} className={`${inputCls} md:col-span-2`} />
      <textarea rows={3} placeholder="Tell us about your celebration…" value={form.message} onChange={set('message')} className={`${inputCls} md:col-span-2 resize-none`} />
      <div className="md:col-span-2 pt-4">
        <button disabled={loading} className="btn-gold w-full md:w-auto disabled:opacity-70">
          {loading ? <><Loader2 className="animate-spin" size={16} /> Sending…</> : <>Get My Quote <ArrowRight size={16} /></>}
        </button>
        <p className="mt-4 text-xs text-brand-gray">On submit we&apos;ll open WhatsApp with your details pre-filled — you can also just review and send.</p>
      </div>
    </form>
  );
}
