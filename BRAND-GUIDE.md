# JSU website — brand & structure

Review source: "Review Website JSU - 03Oct26" (client feedback, implemented in `src/components/jsu/`).

## Palette
Navy `#09185C` (headings) · Blue `#064BD8` (primary actions) · Green `#31994D` (accent words) · CTA green `#56A72A` · Dark navy `#00132F` (footer).
Font: Plus Jakarta Sans.

## Page order (single page, `src/pages/Landing.jsx`)
Hero → trust bar → **About Us** (Who We Are · Our Philosophy · Our DNA · We Understand the Challenge · Our Approach)
→ **Solutions** (4 cards, each opens a modal) → clients → "Let's Talk" band → footer.
The blog (`/blog`) shares the same header, footer and pop-ups (`JsuLayout`).

## Pop-ups
| Trigger | Content |
|---|---|
| Solution card / footer link | `SolutionModal` — IoT Connectivity (→ ED&T Connect, N-Link), Fleet Intelligence (Fleet BI), AI & Automation (MinteLix), Smart Devices |
| Any "Schedule a Consultation" | Consultation form (topic pre-selected from the solution it was opened from) |
| "Partner With Us" (header) | Partnership form |
| "Career" (footer) | Career form |

All three forms `POST /api/inquiry`; the API stores them (admin → **Inquiries**) and e-mails `INQUIRY_TO` (default info@jsutama.com).

## Copy
All page copy lives in `src/components/jsu/data.js`. Edit there, not in the components.

## Assets (`public/brand/`)
See `public/brand/ASSETS.md` for the files the page expects and which ones are still placeholders.
