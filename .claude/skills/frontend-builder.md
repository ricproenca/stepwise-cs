---
name: frontend-builder
description: Converts content/{slug}/ markdown files into three polished HTML pages using the 9618 design system. Triggered by "build HTML for [topic]", "generate pages for [slug]", or /frontend-builder [topic-name] [slug].
argument-hint: "[topic-name] [slug]"
arguments:
  - topic_name
  - slug
disable-model-invocation: true
allowed-tools:
  - Read
  - Write
  - Edit
  - Bash
---

# Frontend Builder — Cambridge 9618

Convert `content/$slug/` into three HTML pages and update `frontend/index.html`.

## Step 0 — Preflight

```!
echo "=== Content files ==="
for f in meta.md notes.md glossary.md questions.md; do
  [ -f "content/$slug/$f" ] && echo "  OK: $f" || { echo "  MISSING: content/$slug/$f — run /content-creator first."; exit 1; }
done

echo ""
echo "=== Design system files ==="
for f in design-system/style.css design-system/components.css design-system/design-tokens.md; do
  [ -f "$f" ] && echo "  OK: $f" || { echo "  MISSING: $f — run /bootstrap first."; exit 1; }
done

echo ""
echo "=== Existing output pages ==="
ls frontend/topics/$slug/ 2>/dev/null || echo "  (none — building fresh)"
```

Read `design-system/design-tokens.md` before writing any HTML. Use class names from `design-system/components.css`.

→ Full component class reference: `.claude/skills/references/css-classes.md`

Output: `frontend/topics/$slug/` (three HTML files) + updated `frontend/index.html`.

---

## HTML Standards (apply to all pages)

- Semantic HTML5: `article`, `section`, `nav`, `aside`, `main`, `header`, `footer`
- All classes from `components.css` — no inline styles, ever
- ARIA labels on all interactive elements
- Mobile responsive using CSS grid/flexbox from the design system
- Vanilla JS only — no external libraries
- Link to `/assets/style.css` and `/assets/components.css` in every `<head>`

---

## Page 1: topics/{slug}/index.html — Notes Page

Layout:
- Header: topic title + syllabus reference badge + level badge (AS / A Level)
- Left sidebar: jump navigation (one link per syllabus sub-section)
- Main content: notes from notes.md, converted to semantic HTML
- Right sidebar (optional): key terms panel linking to glossary

Wrap key terms in `.callout` divs when first introduced. Link term text to glossary.html.

### Diagram Rendering

Convert every `<!-- DIAGRAM: -->` spec into inline SVG using the design-system templates.

→ Diagram type → template mapping: `.claude/skills/references/diagram-specs.md` — "frontend-builder — diagram rendering table"
→ SVG standards and fallback placeholder: `.claude/skills/references/html-templates.md`

---

## Page 2: topics/{slug}/questions.html — Questions Page

Layout:
- Questions ordered by mark value (low to high)
- Each question block: question text → hidden model answer (reveal on click)
- Filter bar: filter by Difficulty and Command Word (vanilla JS, no framework)
- Progress tracker using localStorage

→ Question card HTML structure: `.claude/skills/references/html-templates.md` — "Question card"

---

## Page 3: topics/{slug}/glossary.html — Glossary Page

Layout:
- Alphabetical letter navigation bar at top
- Search input (JS filter — no framework)
- Terms grouped under letter headings
- Each term: definition + plain English + example + differentiator (if present) + syllabus ref badge

---

## Update: frontend/index.html

→ Topic card HTML structure and duplicate-detection rule: `.claude/skills/references/html-templates.md` — "Topic card"

---

## Step — Update queue.md H column

Find the `($slug)` header row in `queue.md` and update the **third** cell (H column):
- `[x]` if all three HTML pages were written and `frontend/index.html` was updated successfully.
- `[~]` if any page failed to build or any diagram had to be logged as a placeholder.

Use the same Edit tool pattern as `content-creator.md` Step 9.

---

## Pacing Rule

After building the three HTML pages and updating `frontend/index.html`, STOP.
Ask the user to review the rendered pages before proceeding to the next topic.
