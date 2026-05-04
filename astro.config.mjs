import { writeFileSync } from 'node:fs';
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

/** Kanoninis domenas (be repo kelio). GitHub Pages: `https://<user>.github.io`; Vercel: `https://<projektas>.vercel.app` */
const defaultSite = 'https://ditreneris.github.io';
const publicTrim = process.env.PUBLIC_SITE_URL?.trim();
const siteUrlTrim = process.env.SITE_URL?.trim();
const vercelUrl = process.env.VERCEL_URL?.trim();
const vercelDerivedSite =
  process.env.VERCEL === '1' && vercelUrl ? `https://${vercelUrl}` : '';
const site = publicTrim || siteUrlTrim || vercelDerivedSite || defaultSite;

/**
 * Kai `ASTRO_BASE` nenurodytas: GitHub Pages projektas → `/intuit`; Vercel build (`VERCEL=1`) → `/`.
 * Kai `ASTRO_BASE` nustatytas (įskaitant tuščią eilutę iš env): normalizuojama žemiau (tuščia → `/intuit`).
 */
function normalizeExplicitBase(baseRaw) {
  const b = baseRaw.trim();
  if (b === '') return '/intuit';
  if (b === '/') return '/';
  return b.startsWith('/') ? b.replace(/\/$/, '') || '/' : `/${b.replace(/\/$/, '')}`;
}

const base =
  process.env.ASTRO_BASE === undefined
    ? process.env.VERCEL === '1'
      ? '/'
      : '/intuit'
    : normalizeExplicitBase(process.env.ASTRO_BASE);

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
