# Stepwise Computer Science

A revision website for Cambridge International AS & A Level Computer Science (9618).
Built topic by topic using a three-stage content pipeline powered by Claude Code.

---

## What it is

Stepwise CS generates structured revision material for all 44 syllabus topics across Papers 1–4.
Each topic produces revision notes, a glossary, and practice questions — all Cambridge-aligned,
past-paper calibrated, and rendered as clean HTML pages students can use directly in a browser.

## What it covers

- AS Level — Papers 1 & 2 (sections 1–12): data representation, networks, hardware, CPU architecture,
  operating systems, databases, algorithms, programming, software development, and more
- A Level — Papers 3 & 4 (sections 13–20): data types, protocols, processors, boolean algebra,
  AI, recursion, OOP, file processing, and more

## How it works

Resources → Content → HTML. Three stages, one topic at a time.

**Stage 1 — Resource Collector**
Reads source markdown files (Hodder textbook, SaveMyExams, Moshikur, past papers) mapped
via `resources/md/md-index.md`. Extracts content and matches past-paper questions to objectives.
Output: `resources/scraped/{slug}/`

**Stage 2 — Content Creator**
Synthesises notes, glossary, and questions from the scraped material. Follows Cambridge mark-scheme
wording, pseudocode conventions from the official 9618 guide, and cross-topic overlap rules.
Output: `content/{slug}/`

**Stage 3 — Frontend Builder**
Converts content markdown into three HTML pages per topic using the project design system.
Renders diagrams as inline SVG. Adds reveal-on-click answers and a progress tracker.
Output: `frontend/topics/{slug}/`

## Running the pipeline

```
/resource-collector "Topic Name" slug
/content-creator "Topic Name" slug
/frontend-builder "Topic Name" slug
/validate-topic slug
```

Check `queue.md` for per-topic progress (R / C / H columns).
Check `gaps.md` for open content gaps and unresolved visual placeholders.

## Project layout

```
resources/md/        source markdown (textbook, past papers, revision notes)
resources/scraped/   Stage 1 output
content/             Stage 2 output
frontend/            Stage 3 output — open index.html in a browser
planning/            architecture, examples, past-paper mapping
.claude/skills/      pipeline slash commands
```

## Status

Work in progress. See `queue.md` for current completion state across all 44 topics.# stepwise-cs
