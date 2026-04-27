# HTML Templates — Cambridge 9618

## SVG Standards

All inline SVG must follow these rules:
- Set `viewBox` on every SVG element
- Use CSS variables for all colours (`var(--color-primary)`, etc.)
- Every SVG must have `<title>` and `<desc>` elements for accessibility
- Set `role="img"` on the SVG element
- `stroke-width: 2px`, box `border-radius: 4px`, consistent padding

## SVG Fallback Placeholder

Use when a diagram cannot be accurately represented as SVG. Do NOT emit a broken or approximate SVG.

```html
<figure class="diagram-placeholder" aria-label="Diagram: [description]">
  <figcaption>
    <strong>[Diagram type]:</strong> [Full description of what this diagram should show,
    including all labels, relationships, and why it is needed here]
  </figcaption>
</figure>
```

Log every placeholder in `gaps.md`:
`[VISUAL NEEDED: type — description — page: topics/{slug}/index.html]`

---

## Question card (questions.html)

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

## Topic card (frontend/index.html)

Check first: if `data-slug="{slug}"` already exists in `.topic-grid`, replace that `<article>`. Otherwise append.

```html
<article class="card topic-card" data-level="AS" data-slug="{slug}">
  <div class="card__header">
    <span class="badge">1.1</span>
    <span class="badge badge--outline">AS · Paper 1</span>
    <h2 class="card__title">{topic_name}</h2>
  </div>
  <p class="card__body">{n} glossary terms · {n} questions</p>
  <div class="card__footer">
    <a href="topics/{slug}/index.html" class="btn">Notes</a>
    <a href="topics/{slug}/questions.html" class="btn btn--outline">Questions</a>
    <a href="topics/{slug}/glossary.html" class="btn btn--outline">Glossary</a>
  </div>
</article>
```

`data-level`: `"AS"` or `"A Level"` from `content/{slug}/meta.md`.
