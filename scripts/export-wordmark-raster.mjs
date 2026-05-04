/**
 * Sukuria horizontalesnius wordmark rasterius iš esamų brand JPG:
 * `trim()` nuima vienodus kraštus (šviesus / tamsius).
 * Išvestis: `public/brand/logo-wordmark-light.{jpg,webp}`, `logo-wordmark-dark.{jpg,webp}`.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const brandDir = path.join(root, 'public', 'brand');

async function exportWordmark(inputName, baseOutName) {
  const inputPath = path.join(brandDir, inputName);
  if (!fs.existsSync(inputPath)) {
    console.error(`Missing: ${inputPath}`);
    process.exit(1);
  }

  const buf = await sharp(inputPath)
    .rotate() // respect EXIF
    .trim({
      // JPEG kraštai — švelnus slenkstis nuo „gryno“ fono
      threshold: 12,
    })
    .toBuffer({ resolveWithObject: true });

  const meta = buf.info;
  const w = meta.width;
  const h = meta.height;

  const jpgPath = path.join(brandDir, `${baseOutName}.jpg`);
  const webpPath = path.join(brandDir, `${baseOutName}.webp`);

  await sharp(buf.data)
    .jpeg({ quality: 92, mozjpeg: true })
    .toFile(jpgPath);

  await sharp(buf.data)
    .webp({ quality: 90 })
    .toFile(webpPath);

  console.log(`${inputName} → ${baseOutName}: ${w}×${h} (horizontal ratio ${(w / h).toFixed(2)}:1)`);
  return { width: w, height: h };
}

const light = await exportWordmark('logo-light.jpg', 'logo-wordmark-light');
const dark = await exportWordmark('logo-dark.jpg', 'logo-wordmark-dark');

// Metadata for Astro (import) + public copy for reference
const meta = {
  logoWordmarkLight: { width: light.width, height: light.height, srcJpg: 'brand/logo-wordmark-light.jpg' },
  logoWordmarkDark: { width: dark.width, height: dark.height, srcJpg: 'brand/logo-wordmark-dark.jpg' },
};
const metaJson = JSON.stringify(meta, null, 2);
const metaPublic = path.join(brandDir, 'logo-wordmark-meta.json');
const metaSrc = path.join(root, 'src', 'brand', 'logo-wordmark-meta.json');
fs.mkdirSync(path.dirname(metaSrc), { recursive: true });
fs.writeFileSync(metaPublic, metaJson);
fs.writeFileSync(metaSrc, metaJson);
console.log(`Wrote ${path.relative(root, metaPublic)}`);
console.log(`Wrote ${path.relative(root, metaSrc)}`);
