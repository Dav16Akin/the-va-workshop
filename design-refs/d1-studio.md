# Design 1 — "Studio" (inspired by elevenlabs.io)

Screenshots: `design-refs/screenshots/d1-elevenlabs/00.png … 09.png` (1440px wide, scrolled 900px per shot).

## Mood
Warm off-white editorial, whisper-weight headlines, black ink. A Bauhaus studio notebook. 97% achromatic.
Color only lives inside *visuals* (soft gradient orbs), never in UI chrome.

## Palette (VA Workshop remap — no violet/orange; blues replace them)
| Token | Hex | Use |
|---|---|---|
| d1-canvas | #fdfcfc | page background (never pure white) |
| d1-taupe | #f5f3f1 | section bands, feature cards |
| d1-stone | #ebe8e4 | hairline borders/dividers, icon plates |
| d1-ink | #000000 | text, filled buttons, nav |
| d1-graphite | #44403b | strong secondary text |
| d1-smoke | #777169 | body copy |
| d1-ash | #a59f97 | captions |
| d1-cobalt | #1238ff | orb/visual accent only |
| d1-azure | #3d8bff | orb/visual accent only |
| d1-ice | #c4dbff | orb highlight |
| d1-navy | #06134a | orb shadow tone |

Orbs: ~200–260px circles, layered radial gradients mixing cobalt/azure/ice/navy (+ a touch of white), soft grain optional, play/arrow button centered in a white 48px circle.

## Type
- Display: Inter Tight (`--font-inter-tight`) **weight 300**, tracking -0.02em, line-height 1.08. 48px desktop hero (can go to 56–64px), 36/32px section heads. Never bold.
- Body/UI: Inter (`--font-inter`) 400/500, 14–18px, tracking +0.01em at 14–16px, line-height 1.5–1.6.
- Mono: Geist Mono 13px for micro-labels (e.g. "WEEKS 1–4", "₦49,000").

## Shape & elevation
Pill buttons (9999px). Cards 20px radius, large cards 24px. Inputs 4–10px. Flat: hairline 1px #ebe8e4 borders; the only shadow is a whisper: `0 0 1px rgba(0,0,0,.4), 0 1px 1px rgba(0,0,0,.04), 0 2px 4px rgba(0,0,0,.04)`.

## Signature components
- Thin announcement bar on taupe with a small outline pill button.
- Transparent nav: wordmark left, links (Inter 14), right: outline pill "Hire a VA" + black pill "Join a cohort".
- Asymmetric hero: big light headline left, body paragraph right-aligned column; two pills under headline.
- Big taupe panel under the hero with a **tab pill switcher** (white active tab, small colored dot) — e.g. tabs = the 3 programme tracks, each showing an orb carousel or detail.
- Orb carousel row (3 visible, centre larger) with caption + muted description.
- Grayscale logo/tool strip on canvas (tools list), not boxed.
- Sections alternate canvas / taupe bands, 96–128px vertical gaps, max-width 1280px, 64px gutters.
- Hairline dividers between list rows (FAQ, timeline).
