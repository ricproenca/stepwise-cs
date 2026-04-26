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
for f in meta.md notes.md glossary.md questions.md; do
  [ -f "content/$slug/$f" ] || { echo "MISSING: content/$slug/$f — generate content before building HTML."; exit 1; }
done
echo "content/$slug/ ready"
```

Read `design-system/design-tokens.md` before writing any HTML. Reference `design-system/style.css` and `components.css` for available classes.

Output: `frontend/topics/$slug/` (three HTML files) + updated `frontend/index.html`.

---

## Page 1: topics/{slug}/index.html — Notes Page

### Layout
- Header: topic title + syllabus reference badge + level badge (AS / A Level)
- Left sidebar: jump navigation (one link per syllabus sub-section)
- Main content: notes from notes.md, converted to semantic HTML
- Right sidebar (optional): key terms panel linking to glossary

### Diagram Rendering
Convert every `<!-- DIAGRAM: -->` spec into inline SVG:

| Type | SVG Approach |
|------|-------------|
| `flowchart` | Boxes with arrows, decision diamonds for branches |
| `comparison-table` | Styled HTML table using `.table` class |
| `binary-diagram` | SVG grid of bit-cells with labels |
| `network-diagram` | SVG nodes connected by lines with labels |
| `memory-map` | SVG segmented rectangle with labels |
| `timeline` | SVG horizontal or vertical sequence |
| `tree-diagram` | SVG hierarchy with connecting lines |

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

Add a topic card to the topic grid:

```html
<article class="card topic-card" data-level="AS">
  <div class="card__header">
    <span class="badge">1.1</span>
    <span class="badge badge--outline">AS · Paper 1</span>
    <h2 class="card__title">Data Representation</h2>
  </div>
  <p class="card__body">18 glossary terms · 12 questions</p>
  <div class="card__footer">
    <a href="topics/data-representation/index.html" class="btn">Notes</a>
    <a href="topics/data-representation/questions.html" class="btn btn--outline">Questions</a>
    <a href="topics/data-representation/glossary.html" class="btn btn--outline">Glossary</a>
  </div>
</article>
```

Add an AS / A Level toggle filter to index.html using `data-level` attributes and vanilla JS.

---

## HTML Standards (apply to all pages)
- Semantic HTML5: use `article`, `section`, `nav`, `aside`, `main`, `header`, `footer`
- All classes from components.css — no inline styles, ever
- ARIA labels on all interactive elements
- Mobile responsive using CSS grid/flexbox from design system
- Vanilla JS only — no external libraries
- Link to `/assets/style.css` and `/assets/components.css` in every page `<head>`

---

## Pacing Rule
After building the three HTML pages and updating frontend/index.html for one topic, STOP.
Ask the user to review the rendered pages before proceeding to the next topic.
