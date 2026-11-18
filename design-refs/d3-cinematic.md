# Design 3 — "Cinematic" (inspired by superpower.com)

Screenshots: `design-refs/screenshots/d3-superpower/00.png … 09.png`.

## Mood
Serious promise, cinematic delivery. A full-bleed dark photographic hero (inset with ~16px margin and rounded corners, as in the screenshot) transitions into crisp white content. Color is rationed: black, white, zinc, and one blue.
Typography carries the brand: large weight-400 display with tight negative tracking.

## Palette (remap — the coral becomes signal blue)
| Token | Hex | Use |
|---|---|---|
| d3-carbon | #18181b | text, floating nav, dark sections |
| d3-black | #000000 | logo, deepest contrast, hero base |
| d3-zinc | #71717a | body/secondary |
| d3-ash | #a1a1aa | tertiary |
| d3-mist | #e4e4e7 | hairlines |
| d3-fog | #f4f4f5 | muted surface |
| d3-white | #ffffff | canvas, cards |
| d3-signal | #1f5eff | THE accent: membership-style card, check icons, active thumbnail border, tiny details |
| d3-signal-glow | #6aa8ff | gradient partner |
Gradient for the hero "membership card" visual (use it for the **cohort card**): `linear-gradient(88deg, #1f5eff, #6aa8ff 90%, #ffffff)` with an organic marbled/lava feel (layered radial gradients / blur blobs).

## Type
Inter Tight (`--font-inter-tight`) everywhere. Display 60–72px **weight 400**, line-height 1.0, tracking -0.025em. Section heads 45–56px weight 400 tracking -0.015/-0.022em. Body 15–17px, line-height 1.4–1.5, tracking -0.005em. Weight 700 only for small labels/buttons. Geist Mono 11–13px for clinical micro-labels.

## Shape & elevation
Buttons pill (9999px). Cards 15px radius, small cards 5px, icons 7.5px squircle. Flat; at most `0 2px 2px rgba(0,0,0,.05)`.

## Signature components
- Thin black announcement bar (e.g. "November cohort open — limited spots →").
- Nav: links left, centered wordmark, right "Hire a VA" text + black pill CTA. (The doc also mentions a floating dark pill nav over the hero — either is fine; pick the stronger.)
- **Hero**: inset full-bleed dark photo (use PHOTOS with a dark scrim), small eyebrow, big white weight-400 headline, sub, white pill CTA + underlined text link, then a row of 3 stat columns separated by hairlines at the bottom ("Live weekends / 6 weeks", etc.), and a thin dark marquee strip along the bottom edge of the hero.
- Membership-style card = cohort card with the blue marbled gradient, "November 2026", price-like block, and a feature list with filled blue check squircles.
- Trust badge row under primary CTAs (11–13px zinc: "Recorded classes · Bank transfer or card · Certificate").
- Photo thumbnail strip with one active thumbnail (blue border).
- FAQ: large 30px questions with "Read more"/plus, separated by whitespace or hairlines.
- Max-width 1200px, ~75–100px section gaps.
