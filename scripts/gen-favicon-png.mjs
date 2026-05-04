/**
 * Generuoja PNG favicon iš `public/favicon.svg` (reikalauja `@resvg/resvg-js`).
 * Paleisti: `node scripts/gen-favicon-png.mjs`
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { Resvg } from '@resvg/resvg-js';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const svgPath = join(root, 'public', 'favicon.svg');
const svg = readFileSync(svgPath, 'utf8');

function render(width, outName) {
  const resvg = new Resvg(svg, {
    fitTo: { mode: 'width', value: width },
    font: { loadSystemFonts: false },
  });
  const png = resvg.render().asPng();
  writeFileSync(join(root, 'public', outName), png);
}

render(32, 'favicon-32x32.png');
render(180, 'apple-touch-icon.png');
