---
name: bootstrap
description: One-time Stage 0 setup. Creates design-system/style.css, components.css, design-tokens.md, SVG templates, and copies assets to frontend/assets/. Run before the first /frontend-builder invocation. Safe to re-run — skips files that are already current.
argument-hint: ""
arguments: []
disable-model-invocation: true
allowed-tools:
  - Read
  - Write
  - Bash
---

# Bootstrap — Cambridge 9618

Populate `design-system/` and `frontend/assets/` with all files required by `frontend-builder`.

---

## Step 0 — Preflight

```!
echo "=== Checking existing files ==="
for f in \
  design-system/style.css \
  design-system/components.css \
  design-system/design-tokens.md \
  "design-system/svg-templates/flowchart.svg" \
  "design-system/svg-templates/comparison-table.svg" \
  "design-system/svg-templates/binary-diagram.svg" \
  "design-system/svg-templates/memory-map.svg" \
  "design-system/svg-templates/timeline.svg" \
  "design-system/svg-templates/tree-diagram.svg" \
  frontend/assets/style.css \
  frontend/assets/components.css; do
  [ -f "$f" ] && echo "  EXISTS: $f" || echo "  MISSING: $f"
done
```

For each file marked MISSING, run the corresponding step below. Skip steps for files marked EXISTS.

---

## Step 1 — style.css

Copy `design-system/colors_and_type.css` to `design-system/style.css`.

The file content is identical — `style.css` is the canonical name used by all HTML pages. Do not modify the content.

---

## Step 2 — components.css

Write `design-system/components.css` with the full set of component classes.

Reference: `design-system/README.md` for brand values. All classes must use CSS custom properties from `style.css` — no hardcoded colour hex values.

Required classes:
`.card` `.card__header` `.card__title` `.card__body` `.card__footer`
`.stat-card` `.stat-card__number` `.stat-card__label`
`.badge` `.badge--outline` `.badge--dark` `.badge--green` `.badge--crest`
`.tag`
`.btn` `.btn--outline` `.btn--teal` `.btn--sm` `.btn--lg`
`.callout`
`.key-takeaway`
`.cross-topic-note`
`.reveal` `.reveal__content` `.reveal__content.is-open`
`.mark-scheme`
`.question-card` `.question-header` `.question-text`
`.examiner-tip`
`.diagram-placeholder`
`.table`
`.nav-primary` `.nav-logo` `.nav-logo__main` `.nav-logo__sub` `.nav-links` `.nav-link`
`.subnav` `.subnav-link`
`.sidebar-nav` `.sidebar-nav__title`
`.filter-tabs` `.filter-tab`
`.glossary-search` `.letter-nav` `.glossary-term` `.glossary-term__name` `.glossary-term__definition` `.glossary-term__plain` `.glossary-term__differentiator`
`.page-layout` `.page-layout--wide` `.topic-grid`
`.notes-content`
`.hidden` `.visually-hidden`

---

## Step 3 — design-tokens.md

Write `design-system/design-tokens.md` as a concise markdown token reference table (≤80 lines), grouped by: semantic colours, brand colours, typography, spacing, radius/shadow/transitions, layout.

This file is read by `frontend-builder` before generating HTML to ensure correct CSS variable names are used.

---

## Step 4 — SVG templates

Create `design-system/svg-templates/` and write the following 6 template files. Each must include `viewBox`, `role="img"`, `<title>`, and `<desc>`. Use hex colour literals matching the design tokens (CSS variables don't resolve in standalone SVG files).

| File | Description |
|------|-------------|
| `flowchart.svg` | 2 process boxes + 1 decision diamond + Yes/No arrows |
| `comparison-table.svg` | 3-column × 3-row grid; header row dark blue |
| `binary-diagram.svg` | 8 bit-cells with column weight labels (2⁷–2⁰) |
| `memory-map.svg` | 4 vertical segments with address annotations |
| `timeline.svg` | Horizontal axis with 4 numbered nodes + labels |
| `tree-diagram.svg` | Root node → 2 children → 4 leaf nodes |

Note: `network-diagram` is intentionally excluded. `frontend-builder` always emits `<figure class="diagram-placeholder">` for `<!-- DIAGRAM: network-diagram -->` specs.

---

## Step 5 — Copy to frontend/assets/

```!
cp design-system/style.css frontend/assets/style.css
cp design-system/components.css frontend/assets/components.css
echo "Copied to frontend/assets/"
ls frontend/assets/
```

---

## Step 6 — Report

Print a summary of every file written or skipped. Example output:

```
Bootstrap complete:
  WRITTEN: design-system/style.css
  WRITTEN: design-system/components.css
  WRITTEN: design-system/design-tokens.md
  WRITTEN: design-system/svg-templates/flowchart.svg
  ...
  COPIED:  frontend/assets/style.css
  COPIED:  frontend/assets/components.css
```

Bootstrap does not build any HTML pages. Run `/frontend-builder [topic] [slug]` next.
