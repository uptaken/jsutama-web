# JSU branding from the supplied reference

Source: `public/brand/jsu-reference.jpeg` — the exact, unmodified user-supplied image.

## Visual system

- Deep navy: `#09185C` for headlines and brand text.
- Primary blue: `#064BD8` for primary actions and alternating icons.
- Green: `#31994D` for emphasized words and section labels.
- CTA green: `#56A72A`.
- Dark navy: `#00132F` for footer and dark panels.
- White surfaces, very light blue backgrounds, fine gray borders, restrained shadows.
- Bold sans-serif headings; green emphasis uses the same font, not a serif.
- Rounded buttons and service cards, alternating blue and green outline icons.

## Image use

The hero background uses the original JPEG with a CSS viewport crop. Live heading, body text, navigation, and buttons cover the corresponding screenshot text. The laptop, phone, surrounding technology labels, and skyline are the original pixels; no AI recreation was used.

The iceberg and customer marks are also displayed from the original reference through CSS crops. The source resolution is 1024×1536; larger desktop displays enlarge those pixels. Replace with original high-resolution asset exports if available later.

## Content and interactions

The client names and numerical statements reproduce the supplied design. They are user-provided content, not independently verified claims. The existing public contact data can override email and phone. All brand copy remains local in `PremiumLanding.jsx` and does not overwrite CMS records.

Motion: once-per-view entrance reveals, slight service-card lift, button arrow movement, process-line animation on supporting browsers. Reduced-motion preferences disable movement. Mobile navigation preserves destination scrolling when its drawer closes.

## High-resolution hero update

The hero now uses `public/brand/jsu-hero-hd.png` (2117×743), produced with the built-in imagegen tool. It reconstructs the reference artwork at higher resolution; small dashboard details may differ. The original JPEG remains for the other image crops.

Prompt brief: Extract and faithfully reconstruct only the upper hero artwork at high resolution, preserving the black laptop, phone, fleet dashboard, blue connectivity icons and pale Jakarta skyline. Keep the left 35% clear for live text. Remove navigation, marketing copy, buttons, and metric strip; sharpen product detail without redesigning the composition.
