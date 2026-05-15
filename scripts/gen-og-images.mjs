/**
 * Generuoja Open Graph (OG) share paveikslus:
 * - `public/social/og-lt.jpg`
 * - `public/social/og-en.jpg`
 *
 * Reikia:
 * - `sharp`
 * - `@resvg/resvg-js` (tekstui iš SVG)
 *
 * Paleisti: `node scripts/gen-og-images.mjs`
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';
import { Resvg } from '@resvg/resvg-js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

const outDir = path.join(root, 'public', 'social');
const brandDir = path.join(root, 'public', 'brand');

const W = 1200;
const H = 630;

const wordmarkPng = path.join(brandDir, 'logo-wordmark-light.png');
const patternJpg = path.join(brandDir, 'logo-pattern-inverse.jpg');

function ensureFile(p) {
  if (!fs.existsSync(p)) {
    console.error(`Missing: ${p}`);
    process.exit(1);
  }
}

ensureFile(wordmarkPng);
ensureFile(patternJpg);

function renderTextSvgPng({ title, subtitle }) {
  // Pastaba: resvg tekstui naudos OS šriftus.
  // Jei nėra Inter, suveiks fallback (system-ui / Arial).
  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <style>
      .t1 { font-family: Inter, system-ui, -apple-system, Segoe UI, Arial, sans-serif; font-size: 56px; font-weight: 700; letter-spacing: -0.02em; fill: #121417; }
      .t2 { font-family: Inter, system-ui, -apple-system, Segoe UI, Arial, sans-serif; font-size: 30px; font-weight: 500; letter-spacing: -0.01em; fill: rgba(18,20,23,0.78); }
    </style>
  </defs>
  <g>
    <text x="96" y="370" class="t1">${escapeXml(title)}</text>
    <text x="96" y="420" class="t2">${escapeXml(subtitle)}</text>
  </g>
</svg>`;

  const resvg = new Resvg(svg, {
    fitTo: { mode: 'original' },
    font: { loadSystemFonts: true },
  });
  return resvg.render().asPng();
}

function escapeXml(s) {
  return String(s)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

async function buildOg({ outName, title, subtitle }) {
  fs.mkdirSync(outDir, { recursive: true });

  const base = sharp({
    create: {
      width: W,
      height: H,
      channels: 3,
      background: '#F7F2EC', // artima `bg-warm`
    },
  });

  const patternLayer = await sharp(patternJpg)
    .resize(W, H, { fit: 'cover', position: 'centre' })
    .ensureAlpha()
    .modulate({ brightness: 1.05, saturation: 0.9 })
    .toBuffer();

  const wordmarkLayer = await sharp(wordmarkPng)
    .resize({ width: 420 })
    .toBuffer();

  const textLayer = renderTextSvgPng({ title, subtitle });

  const outPath = path.join(outDir, outName);

  await base
    .composite([
      { input: patternLayer, blend: 'over', opacity: 0.12 },
      { input: wordmarkLayer, blend: 'over', top: 86, left: 92 },
      { input: textLayer, blend: 'over' },
    ])
    .jpeg({ quality: 90, mozjpeg: true })
    .toFile(outPath);

  console.log(`Wrote ${path.relative(root, outPath)} (${W}×${H})`);
}

/** Sinchronizuota su `src/i18n/lt.ts` / `en.ts` → `meta.title` ir trumpa antra eilutė (telpa į 1200 px SVG). */
await buildOg({
  outName: 'og-lt.jpg',
  title: 'INTUIT — komunikacija, kuria galima pasitikėti',
  subtitle: 'Konsultacijos, krizės ir strateginiai sprendimai.',
});

await buildOg({
  outName: 'og-en.jpg',
  title: 'INTUIT — communications you can trust',
  subtitle: 'Consulting, crisis leadership, and strategic decisions.',
});

