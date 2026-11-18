# Design 2 — "Marketplace" (inspired by awesomic.com)

Screenshots: `design-refs/screenshots/d2-awesomic/00.png … 09.png`.

## Mood
Editorial zinc grid with one punctuation colour. Confident, infrastructure-grade marketplace. Neutral-first.
Generous rounding (36px cards), hairline borders instead of shadows, bold geometric display type, compact body.

## Palette (remap — the orange becomes electric blue)
| Token | Hex | Use |
|---|---|---|
| d2-obsidian | #09090b | primary CTA fill, display headlines |
| d2-graphite | #18181b | body text, dark feature card |
| d2-slate | #27272a | deep dark card |
| d2-iron | #3f3f46 | filled tag badge, secondary labels |
| d2-steel | #52525b | muted text |
| d2-fog | #71717a | helper text |
| d2-mist | #d4d4d8 | subtle borders |
| d2-cloud | #ececee | primary 1px hairline |
| d2-paper | #f4f4f5 | canvas |
| d2-snow | #ffffff | cards, inputs |
| d2-electric | #0b5cff | THE accent: badges/chips ("Next cohort", "Best seller", "Save 35%"), rotating hero keyword, tiny dots. Never big fills. |
| d2-sky | #7cc0ff | rare decorative spark (one card / one highlight) |

## Type
DM Sans (`--font-dm-sans`) everywhere. Display 56–64px weight 600, line-height 1.1–1.2. Section heads 40px 600. Body 14–15px 400, line-height 1.45. Badges 12–13px.

## Shape & elevation
Cards 36px radius, buttons/inputs 14px radius, badges 12px, nav CTA pills full. No card shadows — 1px #ececee borders.
Primary dark button: `bg #09090b`, white text, 14px radius, shadow `inset 0 .5px 0 rgba(255,255,255,.5), inset 0 9px 14px -5px rgba(117,123,133,.4), 0 0 0 1.5px #2c2e34, 0 4px 6px rgba(0,0,0,.14)` (glossy obsidian).

## Signature components
- Sticky white nav: logo left, centered links, "Log in"-style text link + dark CTA right.
- Split hero: huge left headline with a **rotating keyword** (Magic UI WordRotate) in electric blue; right column = short paragraph + email-style capture (white input + dark button, e.g. "Get the cohort brief") + small trust row.
- Horizontal band of **image-top category cards** (36px radius, image fills top half, title + tag pills below) — use the 3 tracks + store/talent pool.
- Stats row: big numbers (300+, 6 weeks, 3 tracks) with small labels.
- **Dark feature card** (#18181b) listing pain points / benefits with arrow bullets.
- Full-bleed rounded photograph as a "breath" between sections (48–64px top radius).
- Grayscale logo strip (tools).
- Tag pills: outlined (hairline) and filled iron; one electric badge.
- Max-width 1200px, 80px section gaps, 28px card padding.
