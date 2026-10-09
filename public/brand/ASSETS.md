# Brand assets

Replace a file with the same name and the site picks it up. A missing logo falls back to a text wordmark.

| File | Used in | Status |
|---|---|---|
| `jsu-logo.png` | header | final logo supplied by the client |
| `jsu-logo-white.png` | footer | white silhouette generated from the final logo |
| `jsu-hero.jpg` | hero + share image | extracted from the review PDF (1470×730) — replace with the Drive "suggestion image" |
| `edt-connect.png` | IoT Connectivity → ED&T Connect | extracted from the PDF — replace |
| `nlink.png` | IoT Connectivity → N-Link | low-res crop from the PDF — replace |
| `fleet-bi.png` | Fleet Intelligence | low-res crop from the PDF — replace |
| `mintelix.png` | AI & Automation | extracted from the PDF — replace |
| `partners/nova.png`, `multi-entity.png`, `gas.png` | IoT page (NOVA), Fleet page and modal (Multi Entity, GAS), About ecosystem | supplied by the client (Drive zip, 09 Oct) |
| `clients/*.png` (20 logos) | Home / About / Solutions client rails | supplied by the client (Drive zip, 09 Oct); edit the list in `CLIENTS` (`data.js`) |

## Photos (`visuals/`)
`hero-*.jpg`, `devices-*.jpg`, `fleet-product.jpg` are cropped from the client's approved design mockups (the review deck), so they are
modest in resolution (150–650 px wide) and shown at natural size. Replace each file (same name, ideally 2x) with original photography
when available; captions and alt text live in `PHOTOS` (`src/components/jsu/data.js`).
