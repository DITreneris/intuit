import { writeFileSync } from 'node:fs';
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

/** Production URL — override su PUBLIC_SITE_URL (Vercel / .env) */
const site =
  process.env.PUBLIC_SITE_URL?.trim() ||
  process.env.SITE_URL?.trim() ||
  'https://67-intuit.vercel.app';

/** Statiniam build generuoja `/sitemap.xml` pagal `PUBLIC_SITE_URL` */
function intuitSitemap() {
  return {
    name: 'intuit-sitemap',
    hooks: {
      'astro:build:done': ({ dir }) => {
        const base = site.replace(/\/$/, '');
        const xml = [
          '<?xml version="1.0" encoding="UTF-8"?>',
          '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
          `  <url><loc>${base}/</loc><changefreq>monthly</changefreq><priority>0.9</priority></url>`,
          `  <url><loc>${base}/en/</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>`,
          '</urlset>',
        ].join('\n');
        writeFileSync(new URL('sitemap.xml', dir), xml);
      },
    },
  };
}

export default defineConfig({
  site,
  output: 'static',
  integrations: [tailwind({ applyBaseStyles: false }), intuitSitemap()],
});
