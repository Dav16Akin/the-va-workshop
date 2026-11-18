# Design 4 — "Control Room" (dark, inspired by launchdarkly.com)

Screenshots: `design-refs/screenshots/d4-launchdarkly/00.png … 09.png`.

## Mood
Midnight control room. Deep charcoal canvas, one cool blue as the only chromatic voice, white type like console output. Dense and technical (panels, mono labels, pill inputs) wrapped in a confident marketing skin. Elevation via **glow**, not shadow.

## Palette (remap — the violet becomes true blue)
| Token | Hex | Use |
|---|---|---|
| d4-midnight | #0a0a0b | canvas |
| d4-carbon | #161618 | nav pill, cards, panels, footer |
| d4-graphite | #3a3a3d | card borders, elevated panels |
| d4-steel | #58595b | input borders |
| d4-slate | #6d6e71 | muted helper text |
| d4-fog | #a7a9ac | secondary text |
| d4-ash | #d1d3d4 | tertiary text, inactive tabs |
| d4-white | #ffffff | primary text; "product UI" panels |
| d4-voltage | #2f6bff | primary CTA fill, active dots |
| d4-signal | #7fb2ff | second line of hero headline, outlines, link accents |
| d4-cyan | #3dd6f5 | rare radial glow partner |
Signal gradient: `linear-gradient(179deg, #2f6bff 1%, #7fb2ff 123%)`. Glows: `0 0 40px rgba(47,107,255,.25)`.

## Type
Geist (`--font-geist`) weight 500 for headings; display 84–100px line-height 1.0 (scale down on mobile). Body 16–18px 400. Eyebrows/tags uppercase 12px tracking 0.13–0.17em. Geist Mono (`--font-geist-mono`) for technical labels, "code" blocks, prices, IDs.

## Shape & elevation
Buttons, tags, cards: 30px radius. Nav pill 60px. Inputs 10px. Borders 1px white/8–10% or #3a3a3d. Glow halos instead of shadows.

## Signature components
- **Floating nav pill** fixed top-center: carbon fill, hairline border, logo, links, text link, blue "Join a cohort" button.
- Hero: centered, two-line display headline — line 1 white, line 2 in signal blue (e.g. "Build a remote career." / "That clients trust."). Sub in ash. A **glowing composite input** (email field + blue button) with blue halo. Ambient radial blue glow behind (Magic UI LightRays / Particles / FlickeringGrid are good fits).
- Logo strip of tools in white-alpha.
- **Segmented tab control** (3 tabs with active blue dot) → e.g. Learn / Build / Get hired, switching a two-column section (left text + checklist, right a **white "product UI" panel** — e.g. a mock cohort schedule / assignment tracker rendered as light UI on the dark page).
- "Code block" panel repurposed: a mono, syntax-coloured "programme.config" or weekly schedule snippet with tabs per track and a copy button.
- 3-col resource cards (carbon, hairline, icon, title, sub, arrow) — offerings / store / talent pool.
- Section gaps 80–120px, max-width 1200px. Body copy left-aligned; only headlines/hero centered.
