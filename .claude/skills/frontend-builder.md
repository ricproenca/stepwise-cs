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

Read `design-system/design-tokens.md` before writing any HTML. Reference the class names in `design-system/components.css` for all component markup.

Output: `frontend/topics/$slug/` (three HTML files) + updated `frontend/index.html`.

---

## Page 1: topics/{slug}/index.html — Notes Page

### Layout
- Header: topic title + syllabus reference badge + level badge (AS / A Level)
- Left sidebar: jump navigation (one link per syllabus sub-section)
- Main content: notes from notes.md, converted to semantic HTML
- Right sidebar (optional): key terms panel linking to glossary

### Diagram Rendering
Convert every `<!-- DIAGRAM: -->` spec into inline SVG. For each type, read the corresponding template from `design-system/svg-templates/` and adapt its content — labels, values, colours — to match the diagram spec. Do not generate SVG from scratch.

| Type | Approach | Template |
|------|----------|----------|
| `flowchart` | Adapt flowchart.svg — adjust box labels, add/remove steps | `svg-templates/flowchart.svg` |
| `comparison-table` | Styled HTML table using `.table` class (preferred over SVG) | `svg-templates/comparison-table.svg` (SVG fallback) |
| `binary-diagram` | Adapt binary-diagram.svg — set bit values and column weights | `svg-templates/binary-diagram.svg` |
| `network-diagram` | **Always use `diagram-placeholder`** — do not attempt SVG | — |
| `memory-map` | Adapt memory-map.svg — adjust segment labels and heights | `svg-templates/memory-map.svg` |
| `timeline` | Adapt timeline.svg — adjust node labels and count | `svg-templates/timeline.svg` |
| `tree-diagram` | Adapt tree-diagram.svg — adjust hierarchy labels | `svg-templates/tree-diagram.svg` |

### SVG Standards
- Always set `viewBox`
- Use CSS variables for all colours (`var(--color-primary)`, etc.)
- Every SVG must have `<title>` and `<desc>` for accessibility
- `role="img"` on the SVG element
- `stroke-width: 2px`, box `border-radius: 4px`, consistent padding

### SVG Fallback
If a diagram cannot be accurately represented as SVG (e.g. complex logic circuits, detailed network topologies):
1. Do NOT emit a broken or approximate SVG
2. Emit this placeholder block instead:

```html
<figure class="diagram-placeholder" aria-label="Diagram: [description]">
  <figcaption>
    <strong>[Diagram type]:</strong> [Full description of what this diagram should show,
    including all labels, relationships, and why it is needed here]
  </figcaption>
</figure>
```

3. Log every placeholder in gaps.md:
   `[VISUAL NEEDED: type — description — page: topics/{slug}/index.html]`

This prevents broken pages from blocking the pipeline. Placeholders can be replaced with proper artwork later.

### Callout Boxes
Wrap key terms in `.callout` divs when first introduced. Link term text to glossary.html.

---

## Page 2: topics/{slug}/questions.html — Questions Page

### Layout
- Questions ordered by mark value (low to high)
- Each question block: question text → hidden model answer (reveal on click)
- Filter bar: filter by Difficulty (Easy/Medium/Hard) and Command Word (JS, no framework)
- Progress tracker using localStorage (mark questions as attempted / correct)

### Question HTML Structure

```html
<article class="question-card" data-marks="2" data-command="Define" data-difficulty="Easy">
  <header class="question-header">
    <span class="badge">2 marks</span>
    <span class="badge badge--outline">Define</span>
    <span class="badge badge--outline">Easy</span>
    <span class="tag">1.1.1</span>
  </header>
  <p class="question-text">Question text here...</p>
  <div class="reveal">
    <button class="btn btn--outline reveal__trigger">Show Answer</button>
    <div class="reveal__content">
      <ul class="mark-scheme">
        <li>Point one [1]</li>
        <li>Point two [1]</li>
      </ul>
      <p class="examiner-tip">Tip text here...</p>
    </div>
  </div>
</article>
```

---

## Page 3: topics/{slug}/glossary.html — Glossary Page

### Layout
- Alphabetical letter navigation bar at top
- Search input (JS filter — no framework)
- Terms grouped under letter headings
- Each term: definition + plain English + example + differentiator (if present) + syllabus ref badge

---

## Update: frontend/index.html

Before inserting a topic card, check whether a card with `data-slug="$slug"` already exists in `frontend/index.html`. If it does, replace that existing `<article>` element. If not, append inside the `.topic-grid` container.

Topic card structure:

```html
<article class="card topic-card" data-level="AS" data-slug="$slug">
  <div class="card__header">
    <span class="badge">1.1</span>
    <span class="badge badge--outline">AS · Paper 1</span>
    <h2 class="card__title">$topic_name</h2>
  </div>
  <p class="card__body">{n} glossary terms · {n} questions</p>
  <div class="card__footer">
    <a href="topics/$slug/index.html" class="btn">Notes</a>
    <a href="topics/$slug/questions.html" class="btn btn--outline">Questions</a>
    <a href="topics/$slug/glossary.html" class="btn btn--outline">Glossary</a>
  </div>
</article>
```

The `data-level` attribute should be `"AS"` or `"A Level"` based on the level in `content/$slug/meta.md`. The `data-slug` attribute enables duplicate detection on subsequent runs.

---

## HTML Standards (apply to all pages)
- Semantic HTML5: use `article`, `section`, `nav`, `aside`, `main`, `header`, `footer`
- All classes from components.css — no inline styles, ever
- ARIA labels on all interactive elements
- Mobile responsive using CSS grid/flexbox from design system
- Vanilla JS only — no external libraries
- Link to `/assets/style.css` and `/assets/components.css` in every page `<head>`

---

## Step — Update queue.md H column

Find the `($slug)` header row in `queue.md` and update the **third** cell (H column):
- `[x]` if all three HTML pages were written and `frontend/index.html` was updated successfully.
- `[~]` if any page failed to build or any diagram had to be logged as a placeholder.

Use the same Edit tool pattern as `content-creator.md` Step 9.

---

## Pacing Rule
After building the three HTML pages and updating frontend/index.html for one topic, STOP.
Ask the user to review the rendered pages before proceeding to the next topic.
