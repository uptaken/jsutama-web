# JSU website — brand & structure

Review source: "Review Website JSU - 03Oct26" (client feedback, implemented in `src/components/jsu/`).

## Palette
Navy `#09185C` (headings) · Blue `#064BD8` (primary actions) · Green `#31994D` (accent words) · CTA green `#56A72A` · Dark navy `#00132F` (footer).
Font: Plus Jakarta Sans.

## Pages
| Route | Content |
|---|---|
| `/` | Hero → trust bar → 4 solution cards → About Us strip → latest 3 articles → clients |
| `/about` | About Us · Who We Are · Our Philosophy · Our DNA · We Understand the Challenge · Our Approach (`/about#approach`) → clients |
| `/solutions` | One Partner. Complete Solutions. — 4 cards: the card opens the quick-view modal, "Full page" opens the detail page |
| `/solutions/iot` · `fleet` · `ai` · `devices` | Detail pages (dark hero, sticky sub-nav, capability cards, FAQ). IoT also has the ISO standards and full ED&T Connect / N-Link sections. Content: `SOLUTION_PAGES` in `data.js` |
| `/blog`, `/blog/:slug` | Insights |

Every page shares the header, the "Let's talk" band and the footer (`JsuLayout`).

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
