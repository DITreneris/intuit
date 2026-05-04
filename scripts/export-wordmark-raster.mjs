/**
 * Sukuria horizontalesnius wordmark rasterius iš esamų brand JPG:
 * `trim()` nuima vienodus kraštus (šviesus / tamsius).
 * Light: papildomai PNG + WebP su permatomu fonu (šviesūs pikseliai → alpha 0), kad header `bg-warm` nesikirstų su JPEG baltumu.
 * Tamsiam ženklui paliekami nepermatomi JPG + WebP (Final Cta ant `bg-ink`).
 * Išvestis: `public/brand/logo-wordmark-light.{jpg,png,webp}`, `logo-wordmark-dark.{jpg,webp}`.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const brandDir = path.join(root, 'public', 'brand');

/** Šviesūs / beveik balti pikseliai → visiškai permatomi (UI ant `warm` / `paper`). */
function whiteFringeToTransparent(rgba, width, height) {
  const threshold = 235;
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const i = (y * width + x) * 4;
      const r = rgba[i];
      const g = rgba[i + 1];
      const b = rgba[i + 2];
      if (r >= threshold && g >= threshold && b >= threshold) {
        rgba[i + 3] = 0;
      }
    }
  }
}

/**
 * @param {import('sharp').Sharp} pipeline
 */
async function exportTransparentWebpPng(pipeline, baseOutName) {
  const { data, info } = await pipeline.ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const rgba = Buffer.from(data);
  whiteFringeToTransparent(rgba, info.width, info.height);

  const transparent = sharp(rgba, {
    raw: { width: info.width, height: info.height, channels: 4 },
  });

  const webpPath = path.join(brandDir, `${baseOutName}.webp`);
  const pngPath = path.join(brandDir, `${baseOutName}.png`);

  await transparent.webp({ quality: 90 }).toFile(webpPath);
  await transparent.png({ compressionLevel: 9 }).toFile(pngPath);
}

async function exportWordmarkLight(inputName, baseOutName) {
  const inputPath = path.join(brandDir, inputName);
  if (!fs.existsSync(inputPath)) {
    console.error(`Missing: ${inputPath}`);
    process.exit(1);
  }

  const buf = await sharp(inputPath)
    .rotate()
    .trim({
      threshold: 12,
    })
    .toBuffer({ resolveWithObject: true });

  const meta = buf.info;
  const w = meta.width;
  const h = meta.height;

  const jpgPath = path.join(brandDir, `${baseOutName}.jpg`);

  await sharp(buf.data).jpeg({ quality: 92, mozjpeg: true }).toFile(jpgPath);

  await exportTransparentWebpPng(sharp(buf.data), baseOutName);

  console.log(
    `${inputName} → ${baseOutName}: ${w}×${h} (horizontal ratio ${(w / h).toFixed(2)}:1) + transparent png/webp`,
  );
  return { width: w, height: h };
}

async function exportWordmarkDark(inputName, baseOutName) {
  const inputPath = path.join(brandDir, inputName);
  if (!fs.existsSync(inputPath)) {
    console.error(`Missing: ${inputPath}`);
    process.exit(1);
  }

  const buf = await sharp(inputPath)
    .rotate()
    .trim({
      threshold: 12,
    })
    .toBuffer({ resolveWithObject: true });

  const meta = buf.info;
  const w = meta.width;
  const h = meta.height;

  const jpgPath = path.join(brandDir, `${baseOutName}.jpg`);
  const webpPath = path.join(brandDir, `${baseOutName}.webp`);

  await sharp(buf.data).jpeg({ quality: 92, mozjpeg: true }).toFile(jpgPath);

  await sharp(buf.data).webp({ quality: 90 }).toFile(webpPath);

  console.log(`${inputName} → ${baseOutName}: ${w}×${h} (horizontal ratio ${(w / h).toFixed(2)}:1)`);
  return { width: w, height: h };
}

const light = await exportWordmarkLight('logo-light.jpg', 'logo-wordmark-light');
const dark = await exportWordmarkDark('logo-dark.jpg', 'logo-wordmark-dark');

const meta = {
  logoWordmarkLight: {
    width: light.width,
    height: light.height,
    srcJpg: 'brand/logo-wordmark-light.jpg',
    srcPng: 'brand/logo-wordmark-light.png',
    srcWebp: 'brand/logo-wordmark-light.webp',
  },
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
