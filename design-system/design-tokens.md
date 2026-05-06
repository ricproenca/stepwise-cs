# Design Tokens — Cambridge 9618

Reference for `frontend-builder`. All tokens are CSS custom properties defined in `style.css`.
Use exact variable names in generated HTML — no hardcoded colour values.

---

## Semantic Colours

| Token | Value | Use |
|-------|-------|-----|
| `--color-bg` | `#FFFFFF` | Page background |
| `--color-bg-subtle` | `#ECEEF1` | Subtle backgrounds, alternating table rows |
| `--color-bg-tint` | `#D1F9F1` | Light Cambridge tint backgrounds |
| `--color-bg-inverse` | `#133844` | Dark section backgrounds |
| `--color-text-primary` | `#232830` | All body text |
| `--color-text-secondary` | `#546072` | Labels, captions, secondary copy |
| `--color-text-inverse` | `#FFFFFF` | Text on dark backgrounds |
| `--color-text-link` | `#133844` | Link colour |
| `--color-text-link-hover` | `#00BDB6` | Link hover |
| `--color-border` | `#ECEEF1` | Subtle borders |
| `--color-border-medium` | `#B5BDC8` | Standard borders, dividers |
| `--color-cta-bg` | `#133844` | Primary button background |
| `--color-cta-bg-hover` | `#1a4d5c` | Primary button hover |
| `--color-cta-text` | `#FFFFFF` | Primary button text |

## Brand Colours

| Token | Hex | Use |
|-------|-----|-----|
| `--color-cambridge-blue` | `#8EE8D8` | Hero tint, stat numbers, active indicators |
| `--color-cambridge-light-blue` | `#D1F9F1` | Key Takeaway bg, badge bg, tint areas |
| `--color-cambridge-warm-blue` | `#00BDB6` | Accents, active borders, CTA secondary |
| `--color-cambridge-dark-blue` | `#133844` | Dark header/footer, primary text accent |
| `--color-green` | `#4DB78C` | Success, easy-difficulty indicator |
| `--color-green-light` | `#DFF2EA` | Success backgrounds |
| `--color-cherry` | `#CD3572` | Hard-difficulty indicator |
| `--color-crest` | `#FD8153` | Warning, differentiator borders |
| `--color-crest-light` | `#FFE2C8` | Differentiator block background |

## Typography

| Token | Value | Use |
|-------|-------|-----|
| `--font-display` | Playfair Display, serif | H1, H2, card titles, pull quotes |
| `--font-body` | Open Sans, sans-serif | All body copy, labels, buttons |
| `--font-mono` | Courier New, monospace | Code blocks, binary examples |
| `--fw-regular` | 400 | Body text |
| `--fw-semibold` | 600 | Subheadings, nav links |
| `--fw-bold` | 700 | Headings, buttons, labels |
| `--text-xs` | 0.75rem | Badges, tags, examiner tips |
| `--text-sm` | 0.875rem | Body-sm, card body, mark scheme |
| `--text-base` | 1rem | Default body text |
| `--text-xl` | 1.25rem | Card titles |
| `--text-2xl` | 1.5rem | H3 |
| `--text-4xl` | 2.25rem | H2 |
| `--text-5xl` | 3rem | H1 |
| `--lh-relaxed` | 1.625 | Body copy |
| `--lh-snug` | 1.375 | Headings |
| `--lh-tight` | 1.2 | Display headings |

## Spacing

| Token | px | Common use |
|-------|----|-----------|
| `--space-1` | 4px | Tight gaps |
| `--space-2` | 8px | Badge/tag gaps, small margins |
| `--space-3` | 12px | Cell padding, small padding |
| `--space-4` | 16px | Standard padding |
| `--space-6` | 24px | Card padding, section margins |
| `--space-8` | 32px | Layout gaps |
| `--space-10` | 40px | Large margins |
| `--space-16` | 64px | Section padding (desktop) |

## Radius, Shadow, Transitions

| Token | Value |
|-------|-------|
| `--radius-sm` | 4px — buttons, inputs, tags |
| `--radius-md` | 6px — cards, callouts |
| `--radius-pill` | 9999px — badges |
| `--shadow-sm` | Subtle card shadow |
| `--shadow-md` | Standard card shadow |
| `--shadow-lg` | Elevated elements |
| `--transition-fast` | 150ms ease |
| `--transition-base` | 200ms ease |

## Layout

| Token | Value |
|-------|-------|
| `--max-width-xl` | 1280px — main container |
| `--container-pad` | clamp(16px, 4vw, 64px) — responsive horizontal padding |
