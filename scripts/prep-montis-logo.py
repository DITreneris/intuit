#!/usr/bin/env python3
"""
Montis Magia: baltas ženklas ant mėlyno fono -> brand-mėlynas ženklas permatomame PNG.
Paleidimas iš repo šaknies: python scripts/prep-montis-logo.py
"""
from __future__ import annotations

from pathlib import Path

from PIL import Image

REPO = Path(__file__).resolve().parent.parent
SRC = REPO / "INTUIT LOGO" / "client_logo" / "montis_magia.png"
DST = REPO / "public" / "clients" / "montis-magia.png"
MAX_WIDTH = 400
EPS = 1e-3


def sample_bg_rgba(im: Image.Image) -> tuple[int, int, int]:
    w, h = im.size
    corners = [
        im.getpixel((0, 0)),
        im.getpixel((w - 1, 0)),
        im.getpixel((0, h - 1)),
        im.getpixel((w - 1, h - 1)),
    ]
    # RGB arba RGBA
    rs, gs, bs = [], [], []
    for p in corners:
        rs.append(p[0])
        gs.append(p[1])
        bs.append(p[2])
    return (
        round(sum(rs) / len(rs)),
        round(sum(gs) / len(gs)),
        round(sum(bs) / len(bs)),
    )


def blend_toward_white_t(r: int, g: int, b: int, bg: tuple[int, int, int]) -> float:
    """P = t * 255 + (1-t) * bg  =>  t = (P - bg) / (255 - bg) kiekvienam kanalui."""
    tr = tg = tb = 0.0
    br, bgc, bb = bg
    if abs(255 - br) > EPS:
        tr = (r - br) / (255 - br)
    if abs(255 - bgc) > EPS:
        tg = (g - bgc) / (255 - bgc)
    if abs(255 - bb) > EPS:
        tb = (b - bb) / (255 - bb)
    # Vidurkis — švelnesnis nei min (mažiau „ploninimo“), stabiliau antialiase
    t = (tr + tg + tb) / 3.0
    return max(0.0, min(1.0, t))


def main() -> None:
    if not SRC.is_file():
        raise SystemExit(f"Missing source: {SRC}")

    im = Image.open(SRC).convert("RGB")
    bg = sample_bg_rgba(im)
    brand = bg  # ta pati „Montis“ mėlyna kaip originalo fone

    w, h = im.size
    out = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    px = im.load()
    op = out.load()
    br, bgc, bb = brand

    for y in range(h):
        for x in range(w):
            r, g, b = px[x, y]
            t = blend_toward_white_t(r, g, b, bg)
            a = int(round(255 * t))
            if a <= 0:
                op[x, y] = (0, 0, 0, 0)
            else:
                op[x, y] = (br, bgc, bb, a)

    bbox = out.getchannel("A").getbbox()
    if bbox:
        out = out.crop(bbox)

    tw, th = out.size
    if tw > MAX_WIDTH:
        nh = max(1, round(th * (MAX_WIDTH / tw)))
        out = out.resize((MAX_WIDTH, nh), Image.Resampling.LANCZOS)

    DST.parent.mkdir(parents=True, exist_ok=True)
    out.save(DST, format="PNG", optimize=True)
    print(f"Wrote {DST} ({out.size[0]}x{out.size[1]}) bg_sample={bg}")


if __name__ == "__main__":
    main()
