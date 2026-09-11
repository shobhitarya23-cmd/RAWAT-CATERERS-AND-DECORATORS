// ============================================================================
// RAWAT CATERERS & DECORATORS — CENTRAL SITE CONFIGURATION
// Edit this single file to update business info across the entire website.
// ============================================================================

// Real Rawat photographs & videos
const REAL = {
  // Newest batch
  redGoldMandap: 'https://customer-assets-agu9un31.emergentagent.net/job_rawat-events-studio/artifacts/7q88u5be_WhatsApp%20Image%202026-09-12%20at%2012.30.06%20AM.jpeg',
  leafArchTunnel: 'https://customer-assets-agu9un31.emergentagent.net/job_rawat-events-studio/artifacts/ta38remd_WhatsApp%20Image%202026-09-12%20at%2012.31.49%20AM.jpeg',
  orangeStage: 'https://customer-assets-agu9un31.emergentagent.net/job_rawat-events-studio/artifacts/uc5qdfqk_WhatsApp%20Image%202026-09-12%20at%2012.31.51%20AM.jpeg',
  peacockBuffet: 'https://customer-assets-agu9un31.emergentagent.net/job_rawat-events-studio/artifacts/f54a3bex_WhatsApp%20Image%202026-09-12%20at%2012.31.54%20AM.jpeg',
  // Sunset/evening batch
  sunsetGrandVenue: 'https://customer-assets-agu9un31.emergentagent.net/job_rawat-events-studio/artifacts/43yyhpoo_WhatsApp%20Image%202026-09-12%20at%2012.31.53%20AM.jpeg',
  sunsetTwinMandap: 'https://customer-assets-agu9un31.emergentagent.net/job_rawat-events-studio/artifacts/rf1zqguo_WhatsApp%20Image%202026-09-12%20at%2012.31.55%20AM.jpeg',
  floralStage: 'https://customer-assets-agu9un31.emergentagent.net/job_rawat-events-studio/artifacts/4wi9zy5f_WhatsApp%20Image%202026-09-12%20at%2012.31.58%20AM.jpeg',
  // First batch
  punjabiDhaba: 'https://customer-assets-agu9un31.emergentagent.net/job_rawat-events-studio/artifacts/r6yo13l7_WhatsApp%20Image%202026-09-11%20at%2010.49.44%20PM%20%281%29.jpeg',
  entranceChandelier: 'https://customer-assets-agu9un31.emergentagent.net/job_rawat-events-studio/artifacts/sg4kwlv5_WhatsApp%20Image%202026-09-11%20at%2010.49.48%20PM.jpeg',
  floralWalkway: 'https://customer-assets-agu9un31.emergentagent.net/job_rawat-events-studio/artifacts/9y3quf0n_WhatsApp%20Image%202026-09-11%20at%2010.49.48%20PM%20%281%29.jpeg',
  greenLoungeHall: 'https://customer-assets-agu9un31.emergentagent.net/job_rawat-events-studio/artifacts/1xltjlct_WhatsApp%20Image%202026-09-11%20at%2010.49.45%20PM%20%281%29.jpeg',
  liveBuffet: 'https://customer-assets-agu9un31.emergentagent.net/job_rawat-events-studio/artifacts/8rhwmbmr_WhatsApp%20Image%202026-09-11%20at%2010.49.48%20PM%20%283%29.jpeg',
  eveningPartyLounge: 'https://customer-assets-agu9un31.emergentagent.net/job_rawat-events-studio/artifacts/8uvxpm6c_WhatsApp%20Image%202026-09-11%20at%2010.49.49%20PM.jpeg',
  // Videos
  galleryVideo: 'https://customer-assets-agu9un31.emergentagent.net/job_rawat-events-studio/artifacts/w4pnli3z_WhatsApp%20Video%202026-09-12%20at%2012.31.42%20AM.mp4',
};

export const site = {
  businessName: 'Rawat Caterers & Decorators',
  shortName: 'Rawat',
  tagline: 'Exceptional Food. Elegant Spaces. Memorable Celebrations.',
  altTagline: 'Celebrations, Served Beautifully.',
  description:
    'Rawat Caterers & Decorators offers catering, event decoration and celebration services for weddings, parties, corporate events and special occasions.',

  // ---- CONTACT ----
  phone: '+919953149802',
  phoneDisplay: '+91 99531 49802',
  whatsapp: '919953149802',
  whatsappDisplay: '+91 99531 49802',
  email: 'Ashishrawat9953@gmail.com',
  address: '[EDITABLE_ADDRESS]',
  serviceArea: 'Delhi NCR',
  businessHours: 'Mon – Sun • 9:00 AM – 9:00 PM',

  // ---- SOCIAL ----
  instagram: 'https://www.instagram.com/rawat_caterers_decoraters',
  mapEmbedUrl: '[ADD_GOOGLE_MAPS_EMBED_URL]',

  // ---- IMAGES ----
  images: {
    hero: REAL.eveningPartyLounge, // evening party theme behind "Celebrations Served Beautifully"
    about: REAL.sunsetTwinMandap,
    cateringShowcase: REAL.peacockBuffet,
    decorShowcase: REAL.orangeStage,
    ctaBg: REAL.sunsetGrandVenue,
  },

  // ---- DECORATION STYLES (used on /decoration page) ----
  decorStyles: [
    { name: 'Royal Weddings', img: REAL.orangeStage },
    { name: 'Modern Minimal', img: REAL.leafArchTunnel },
    { name: 'Floral Elegance', img: REAL.floralStage },
    { name: 'Traditional Indian', img: REAL.redGoldMandap },
    { name: 'Grand Reception', img: REAL.sunsetGrandVenue },
    { name: 'Intimate Celebrations', img: REAL.entranceChandelier },
  ],

  // ---- GALLERY (all real Rawat work) ----
  gallery: [
    { id: 'r1', category: 'Weddings', title: 'Sunset Grand Reception', src: REAL.sunsetGrandVenue },
    { id: 'r2', category: 'Stage', title: 'Twin Mandap Setup', src: REAL.sunsetTwinMandap },
    { id: 'r3', category: 'Stage', title: 'Royal Orange Stage', src: REAL.orangeStage },
    { id: 'r4', category: 'Decor', title: 'White Leaf Arch Tunnel', src: REAL.leafArchTunnel },
    { id: 'r5', category: 'Weddings', title: 'Red & Gold Mandap', src: REAL.redGoldMandap },
    { id: 'r6', category: 'Catering', title: 'Peacock Waterfall Buffet', src: REAL.peacockBuffet },
    { id: 'r7', category: 'Stage', title: 'Floral Stage Design', src: REAL.floralStage },
    { id: 'r8', category: 'Decor', title: 'Grand Chandelier Entrance', src: REAL.entranceChandelier },
    { id: 'r9', category: 'Weddings', title: 'Floral Walkway Passage', src: REAL.floralWalkway },
    { id: 'r10', category: 'Decor', title: 'Reception Lounge Setup', src: REAL.greenLoungeHall },
    { id: 'r11', category: 'Catering', title: 'Live Buffet Counters', src: REAL.liveBuffet },
    { id: 'r12', category: 'Catering', title: 'Punjabi Dhaba Live Counter', src: REAL.punjabiDhaba },
    { id: 'r13', category: 'Stage', title: 'Evening Party Lounge', src: REAL.eveningPartyLounge },
  ],

  // ---- GALLERY VIDEOS (shown only on Gallery page) ----
  videos: [
    { id: 'v1', category: 'Weddings', title: 'Event Walkthrough', src: REAL.galleryVideo, poster: REAL.eveningPartyLounge },
  ],

  // ---- REVIEWS ----
  reviews: [
    { id: 'rev1', quote: 'Every detail felt considered. The food was exceptional and the décor made our reception unforgettable.', name: 'Ankit Baisla', event: 'Wedding Reception' },
    { id: 'rev2', quote: 'From the first call to the last guest, Rawat handled everything with grace. Highly recommended.', name: 'Satish Dedha', event: 'Engagement Ceremony' },
    { id: 'rev3', quote: 'A beautiful setup and warm service. Our celebration was exactly what we imagined.', name: 'Prashant Gupta', event: 'Family Celebration' },
  ],

  // ---- EVENTS PORTFOLIO — RECENT CELEBRATIONS ----
  events: [
    { id: 'e1', title: 'Grand Wedding Celebration', type: 'Wedding', venue: 'DDA Ground, Mayur Vihar Phase 3', guests: '2,400 Guests', services: 'Catering + Décor', cover: REAL.peacockBuffet },
    { id: 'e2', title: 'Reception & Sangeet', type: 'Reception', venue: 'DDA Ground, Mayur Vihar Phase 3', guests: '2,000 Guests', services: 'Full Event Support', cover: REAL.sunsetTwinMandap },
    { id: 'e3', title: 'Engagement Ceremony', type: 'Engagement', venue: 'DDA Ground, Mayur Vihar Phase 3', guests: '1,700 Guests', services: 'Catering + Décor', cover: REAL.floralStage },
  ],
};

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/#about' },
  { label: 'Services', href: '/#services' },
  { label: 'Catering', href: '/catering' },
  { label: 'Decoration', href: '/decoration' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Reviews', href: '/#reviews' },
  { label: 'Contact', href: '/contact' },
];

export function buildWhatsAppLink(text = '') {
  const number = (site.whatsapp || '').replace(/[^0-9]/g, '');
  const base = number ? `https://wa.me/${number}` : 'https://wa.me/';
  const q = text ? `?text=${encodeURIComponent(text)}` : '';
  return `${base}${q}`;
}

export function buildTelLink() {
  const p = (site.phone || '').replace(/[^0-9+]/g, '');
  return p ? `tel:${p}` : 'tel:';
}
