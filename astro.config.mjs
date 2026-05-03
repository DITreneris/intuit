import { writeFileSync } from 'node:fs';
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

/** Kanoninis domenas (be repo kelio). GitHub Pages: `https://<user>.github.io`; Vercel: `https://<projektas>.vercel.app` */
const defaultSite = 'https://ditreneris.github.io';
const site =
  process.env.PUBLIC_SITE_URL?.trim() || process.env.SITE_URL?.trim() || defaultSite;

/**
 * GitHub Pages projektas: `/repo` (be trailing slash, kaip Astro docs).
 * Vercel šakninis deploy: `ASTRO_BASE=/` arba `ASTRO_BASE=` (tuščia → `/`).
 */
const baseRaw = process.env.ASTRO_BASE?.trim();
const base =
  baseRaw === '' || baseRaw === undefined
    ? '/intuit'
    : baseRaw === '/'
      ? '/'
      : baseRaw.startsWith('/')
        ? baseRaw.replace(/\/$/, '') || '/'
        : `/${baseRaw.replace(/\/$/, '')}`;

/** Statiniam build generuoja `dist/sitemap.xml` pagal `site` + `base` */
function intuitSitemap({ siteOrigin, basePath }) {
  return {
    name: 'intuit-sitemap',
    hooks: {
      'astro:build:done': ({ dir }) => {
        const origin = siteOrigin.replace(/\/$/, '');
        const pathPrefix = basePath === '/' ? '' : `${basePath}`;
        const home = `${origin}${pathPrefix}/`;
        const en = `${origin}${pathPrefix}/en/`;
        const xml = [
          '<?xml version="1.0" encoding="UTF-8"?>',
          '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
          `  <url><loc>${home}</loc><changefreq>monthly</changefreq><priority>0.9</priority></url>`,
          `  <url><loc>${en}</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>`,
          '</urlset>',
        ].join('\n');
        writeFileSync(new URL('sitemap.xml', dir), xml);
      },
    },
  };
}

export default defineConfig({
  site,
  base,
  output: 'static',
  integrations: [tailwind({ applyBaseStyles: false }), intuitSitemap({ siteOrigin: site, basePath: base })],
});
