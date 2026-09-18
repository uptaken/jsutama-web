# JSU reference branding update

The homepage now follows the user-supplied full-page brand reference. See `BRAND-GUIDE.md` for palette, typography, exact asset usage, and content provenance.

## Source

- `src/components/premium/PremiumLanding.jsx`: homepage content and layout.
- `src/components/premium/premium.css`: responsive brand styling and image crops.
- `src/components/premium/useReveal.js`: accessible entrance animations.
- `public/brand/jsu-reference.jpeg`: original reference, unchanged.

Blog/admin routes and their lazy loading are preserved. The homepage reads the existing `/api/content` endpoint for contact email and phone. The reference artwork and homepage copy are local so they display without a working backend. CMS records are not modified.

## Run

Use the preserved Yarn lockfile: `corepack yarn install --frozen-lockfile`. Use `corepack yarn dev --mode production` for the configured public API. `corepack yarn build` creates the original `web/` output. Serve with a fallback to `index.html` for client-side routes. Environment files are excluded; `.env.example` documents the public API setting.

## Delivery

The original public website has not been modified. A private review-site source upload was blocked by approval review in the earlier turn and has not been retried. `.openai/hosting.json` identifies that pending review site.

Before publishing on a production domain, update the absolute Open Graph/X image URLs in `index.html` to that origin. They currently reference the pending private review domain.

## Validation

Production build checked. Desktop and mobile layout reviewed at 1280px and 390px. Mobile menu and internal contact navigation checked. No horizontal overflow at 390px. Existing backend-dependent blog/admin functionality is outside this visual update; the public API previously returned HTTP 500 during a direct read.
