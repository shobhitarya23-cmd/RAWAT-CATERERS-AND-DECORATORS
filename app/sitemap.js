export default function sitemap() {
  const base = process.env.NEXT_PUBLIC_BASE_URL || 'https://example.com';
  const urls = ['', '/catering', '/decoration', '/gallery', '/contact'];
  return urls.map((u) => ({ url: `${base}${u}`, lastModified: new Date() }));
}
