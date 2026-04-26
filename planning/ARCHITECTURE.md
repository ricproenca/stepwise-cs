# Architecture — 9618 Learning Platform

Describes the actual structure, data flow, and conventions of the project as built.

---

## Principle

**Resources in, content out, HTML last.**

Every topic follows the same three-stage pipeline. No stage runs before the previous one is complete. All source material lives as local markdown files — nothing is fetched from external websites at runtime.

---

## Directory Layout

```
stepwise-cs-9618/
│
├── CLAUDE.md               ← project instructions, content standards, pipeline rules
├── queue.md                ← per-topic R/C/H progress tracker
├── gaps.md                 ← open content gaps and visual placeholders
│
├── planning/
│   ├── ARCHITECTURE.md     ← this file
│   ├── EXAMPLES.md         ← worked pipeline walkthroughs
│   ├── IMPROVEMENTS.md     ← backlog of future work
│   └── papers_plan_9618.md ← past-paper processing tracker (per paper/year)
│   └── markdown/           ← output of /paper-analyser (questions + answers files)
│
├── .claude/
│   └── skills/
│       ├── resource-collector.md   ← Stage 1
│       ├── content-creator.md      ← Stage 2
│       ├── frontend-builder.md     ← Stage 3
│       ├── validate-topic.md       ← QA (read-only)
│       └── paper-analyser.md       ← past-paper question/answer mapping
│
├── resources/
│   ├── syllabus.md                 ← 9618 spec, one ## block per slug
│   ├── cambridge-pseudocode.md     ← authoritative pseudocode reference (from official guide)
│   │
│   ├── md/                         ← all source markdown (user-maintained)
│   │   ├── md-index.md             ← slug → [files, paper number] mapping
│   │   ├── textbook/               ← Hodder Education chapters + chapter answers
│   │   ├── savemyexams/            ← exam-focused notes, one file per syllabus section
│   │   ├── moshikur/               ← concise notes, one file per chapter
│   │   ├── thinka/                 ← additional notes, one file per chapter
│   │   ├── pseudocode_pro/         ← Presentation, Homework, Answers for AS Units 1–6
│   │   ├── moshikur_pseudocode/    ← pseudocode worked examples (programming topics)
│   │   ├── past-papers/            ← QP + MS markdown, organised by paper/year
│   │   │   ├── paper 1/{year}/     ← flat files: 9618_[s|w]YY_[qp|ms]_1[v].md
│   │   │   ├── paper 2/{year}/     ← flat files + insert files
│   │   │   ├── paper 3/{year}/     ← flat files
│   │   │   └── paper 4/{year}/     ← one folder per variant: 9618_[s|w]YY_qp_4[v]/
│   │   └── guides/                 ← syllabus PDF, pseudocode guide, scheme of work, learner guide
│   │
│   └── scraped/                    ← Stage 1 output, one folder per slug
│       └── {slug}/
│           ├── syllabus-scope.md   ← verbatim objectives from resources/syllabus.md
│           ├── extracts.md         ← content from source files, tagged by origin
│           ├── past-papers.md      ← matched exam questions + mark-scheme points
│           └── index.md            ← coverage report: Covered / Partial / Missing per objective
│
├── content/                        ← Stage 2 output, one folder per slug
│   └── {slug}/
│       ├── meta.md                 ← title, syllabus ref, level, paper, stats
│       ├── notes.md                ← full revision notes, ends with ## Syllabus Coverage
│       ├── glossary.md             ← alphabetical terms with definitions
│       └── questions.md            ← 10+ practice questions with model answers
│
├── design-system/
│   ├── design-tokens.md            ← colour, typography, spacing token reference
│   ├── style.css                   ← CSS custom properties + base styles
│   └── components.css              ← component classes (.card, .badge, .btn, etc.)
│
└── frontend/                       ← Stage 3 output
    ├── index.html                  ← topic grid with AS/A Level filter
    ├── assets/                     ← style.css, components.css, main.js
    └── topics/
        └── {slug}/
            ├── index.html          ← notes page
            ├── questions.html      ← questions page with reveal + filter
            └── glossary.html       ← alphabetical glossary with search
```

---

## Resource Layer

### md-index.md

`resources/md/md-index.md` is the single mapping file that tells the resource-collector which files to read for each slug and which paper number to use for past-paper lookup.

Format:
```
## {slug}
paper: {1|2|3|4}
- resources/md/textbook/Chapter XX …
- resources/md/savemyexams/X.X …
- …
```

Source priority within each entry (highest to lowest):
1. **textbook** — Hodder Education, Cambridge-endorsed, most authoritative
2. **textbook Answers** — official worked solutions, mark-scheme language
3. **moshikur** — clean markdown, organized by syllabus sub-point
4. **savemyexams** — exam-focused definitions and key points
5. **pseudocode_pro Presentation** — slide-format key concepts (AS Level Units 1–6)
6. **pseudocode_pro Answers** — worked solutions (AS Level Units 1–6)
7. **pseudocode_pro Homework** — practice problems (AS Level Units 1–6)
8. **thinka** — additional coverage; verbose, use last
9. **moshikur_pseudocode** — pseudocode examples (programming/algorithm topics only)

### Past papers

All past papers are in `resources/md/past-papers/`. Papers 1–3 use flat files per year folder. Paper 4 uses a sub-folder per variant (due to file volume). QP and MS files share the same series/year/variant code.

File naming: `9618_[s|w]YY_[qp|ms]_[paper][variant].md`
Example: `9618_s24_qp_11.md`, `9618_s24_ms_11.md`

---

## Stage 1 — Resource Collector

**Skill:** `resource-collector`  
**Input:** `resources/md/md-index.md`, `resources/syllabus.md`, `resources/md/past-papers/paper N/`  
**Output:** `resources/scraped/{slug}/` — 4 files

| File | Contents |
|------|----------|
| `syllabus-scope.md` | Verbatim objectives block from `resources/syllabus.md` |
| `extracts.md` | Content from all listed source files, tagged `[Source: path]` |
| `past-papers.md` | Matched QP questions + MS mark-scheme points verbatim |
| `index.md` | Coverage report: one bullet per objective (Covered / Partial / Missing), past-paper table, gaps |

queue.md R column: `[x]` on success, `[~]` if incomplete.

---

## Stage 2 — Content Creator

**Skill:** `content-creator`  
**Input:** `resources/scraped/{slug}/` (4 files), `resources/cambridge-pseudocode.md`, `CLAUDE.md` cross-topic table  
**Output:** `content/{slug}/` — 4 files

| File | Contents |
|------|----------|
| `meta.md` | Title, slug, syllabus ref, chapter, level, paper, question count, status |
| `notes.md` | Structured revision notes with diagrams/placeholders, ends with `## Syllabus Coverage` |
| `glossary.md` | ≥ 10 alphabetical terms, ≤ 2-sentence definitions, Differentiator fields for confused pairs |
| `questions.md` | ≥ 10 questions: 4 recall, 3 application, 2 analysis/evaluation, 1 misconception; ≥ 1 past-paper |

All pseudocode uses Cambridge 9618 conventions from `resources/cambridge-pseudocode.md`.  
queue.md C column: `[x]` on success, `[~]` if incomplete.

---

## Stage 3 — Frontend Builder

**Skill:** `frontend-builder`  
**Input:** `content/{slug}/` (4 files), `design-system/`  
**Output:** `frontend/topics/{slug}/` — 3 HTML files + updated `frontend/index.html`

| File | Contents |
|------|----------|
| `index.html` | Notes page: sidebar nav, inline SVG diagrams, callout boxes linking to glossary |
| `questions.html` | Questions ordered by mark value, reveal on click, filter by difficulty/command word, localStorage progress |
| `glossary.html` | Alpha nav, JS search, differentiator fields rendered |

`<!-- DIAGRAM: type — description -->` specs are converted to inline SVG.  
`[VISUAL NEEDED: …]` placeholders become `<figure class="diagram-placeholder">` and are logged in gaps.md.  
queue.md H column: `[x]` on success, `[~]` if incomplete.

---

## QA — Validate Topic

**Skill:** `validate-topic`  
**Read-only:** never writes to content or queue.md.

Runs 12 automated checks against the completion checklist in CLAUDE.md. Returns PASS / FAIL / REVIEW per check and a summary verdict. Run before marking any topic `[x]` in queue.md.

---

## Past-Paper Planning — Paper Analyser

**Skill:** `paper-analyser`  
**Input:** `resources/md/past-papers/paper N/{year}/`  
**Output:** `planning/markdown/paperN_YYYY_questions.md` + `paperN_YYYY_answers.md`

Maps every sub-question to a syllabus slug and AO level (AO1/AO2/AO3). Deduplicates mark-scheme entries across variants. Updates the tracking table in `planning/papers_plan_9618.md`.

Run before or after the main pipeline — results are used by resource-collector to confirm past-paper coverage, and by content-creator to cross-check question wording.

---

## Design System

CSS lives in `design-system/`. All generated HTML links to `/assets/style.css` and `/assets/components.css`. Never use inline styles.

Reference `design-system/design-tokens.md` before writing any HTML. Available component classes: `.card`, `.badge`, `.btn`, `.callout`, `.table`, `.reveal`, `.mark-scheme`, `.examiner-tip`, `.question-card`, `.topic-card`, `.diagram-placeholder`.

---

## queue.md Conventions

Each topic has a `| R | C | H |` row. Values:
- `[ ]` — not started
- `[~]` — in progress (skill stopped mid-work)
- `[x]` — complete (all checks passed)

Only the skill that owns a column should update it. `validate-topic` never updates queue.md.

---

## gaps.md Conventions

Every missing objective, unrenderable diagram, or mark-scheme mismatch is logged with:

```markdown
### {slug} — {brief description}
- **Status:** Open
- **Topic:** {slug}
- **Type:** Content Gap | Visual Placeholder | Past Paper Missing | Resource Missing
- **Description:** …
- **Action:** …
- **Logged:** YYYY-MM-DD
```

Gaps are resolved by fixing the underlying content file and updating Status to Closed.
