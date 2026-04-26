---
name: resource-collector
description: Collects and structures learning resources for a 9618 topic into resources/scraped/{slug}/. Triggered by "collect resources for [topic]", "start pipeline for [topic]", or /resource-collector [topic-name] [slug]. Do not auto-invoke during content generation.
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

# Resource Collector — Cambridge 9618

Collect and structure learning resources for topic: **$topic_name** (slug: `$slug`)

Output directory: `resources/scraped/$slug/`

---

## Output Contract

Every run must write the following files. A missing file means the skill has not completed.

| File | Purpose | Required? |
|------|---------|-----------|
| `syllabus-scope.md` | Exact Cambridge sub-points for `$slug`, copied verbatim from `resources/syllabus.md` | **Yes** |
| `extracts.md` | Content extracted from markdown sources listed in `md-index.md` for `$slug` | **Yes** (write a one-line note if no sources map to this slug) |
| `past-papers.md` | Past-paper questions and mark-scheme points relevant to `$slug` | **Yes** (write "no past papers found" if genuinely empty) |
| `index.md` | Coverage report keyed to `syllabus-scope.md` objectives + gap list | **Yes** |

---

## Source Priority Order

1. **Hodder textbook** in `resources/md/textbook/` — Cambridge-endorsed, most authoritative.
2. **Hodder textbook Answers** in `resources/md/textbook/` — official worked solutions, mark-scheme language.
3. **moshikur** in `resources/md/moshikur/` — clean markdown organized by syllabus sub-point.
4. **savemyexams** in `resources/md/savemyexams/` — exam-focused definitions and key points.
5. **pseudocode_pro Presentation** in `resources/md/pseudocode_pro/` — slide-format key concepts (AS Level Units 1–6 only).
6. **pseudocode_pro Answers** in `resources/md/pseudocode_pro/` — worked solutions (AS Level Units 1–6 only).
7. **pseudocode_pro Homework** in `resources/md/pseudocode_pro/` — practice problems (AS Level Units 1–6 only).
8. **thinka** in `resources/md/thinka/` — additional coverage; verbose, use last.
9. **moshikur_pseudocode** in `resources/md/moshikur_pseudocode/` — pseudocode examples (where listed).
10. **General knowledge** — last resort only. Log every such use in `index.md` under "Gaps".

---

## Step 0 — Read syllabus scope and markdown index

```!
echo "=== Syllabus block for $slug ==="
awk -v s="## $slug" 'BEGIN{p=0} $0==s{p=1; print; next} /^## [a-z]/ && p{exit} p' resources/syllabus.md

echo ""
echo "=== Markdown sources and paper number for $slug ==="
awk -v s="## $slug" 'BEGIN{p=0} $0==s{p=1; print; next} /^## [a-z]/ && p{exit} p' resources/md/md-index.md \
  || echo "(slug not found in md-index.md — check slug spelling)"
```

Copy the syllabus block verbatim into `resources/scraped/$slug/syllabus-scope.md`. Every objective becomes one row in the `index.md` coverage report.

Record the `paper:` number from md-index.md — it is needed in Step 2 for past-paper lookup.

If no md-index entry is found, log the slug as missing in `index.md` and proceed using general knowledge only.

---

## Step 1 — Read source markdown files

Read every file listed under `## $slug` in `resources/md/md-index.md`.

When extracting:
- Tag each chunk with `[Source: <relative-path>]` so origin is traceable.
- Preserve tables, lists, worked examples, and diagram descriptions verbatim.
- When a source file covers multiple slugs in the same chapter (e.g. Chapter 01 covers data-representation, multimedia, and compression), read the full file but extract only sections whose headings or content match `$slug`'s syllabus objectives from `syllabus-scope.md`. Do not discard borderline content — include it and note the objective it supports.

Write the combined extracts, grouped by source, to `resources/scraped/$slug/extracts.md`.

---

## Step 2 — Past papers and mark schemes

Use the `paper:` number recorded in Step 0. Scan all years under `resources/md/past-papers/paper $paper/`.

```!
echo "=== Past paper files for paper $paper ==="
find "resources/md/past-papers/paper $paper" -name "*qp*.md" | sort
```

For each question paper file found:
- Identify questions whose wording matches the objectives in `syllabus-scope.md` by keyword (use the queue.md "Resources" search terms as a starting list).
- Find the corresponding mark scheme file (same series/year/variant code, `ms` instead of `qp`).
- Record: paper number, series+year (e.g. S24), variant, question number, mark allocation, exact question wording, and mark-scheme points verbatim.

Write all matches to `resources/scraped/$slug/past-papers.md`. If no questions match, write a single-line note.

---

## Step 3 — Write index.md

Write `resources/scraped/$slug/index.md`:

```markdown
# Resource Summary — $topic_name

**Slug:** $slug
**Syllabus ref:** (from syllabus-scope.md)
**Date collected:** YYYY-MM-DD

## Sources Used
- Markdown sources: [list files read, or "none found in md-index.md"]
- Past papers available: [list paper/series/year, or "none found"]

## Coverage by Syllabus Objective

- [objective verbatim] — Covered / Partially covered / Missing — [source(s)]

## Past Papers Found
| Paper | Series/Year | Variant | Question | Marks | Objective matched |
|-------|-------------|---------|----------|-------|-------------------|

## Gaps
For each Missing or Partial objective: state whether general knowledge can fill it or a source is needed.

## Recommended Next Step
Note anything the content creator must be aware of: missing visuals, complex derivations, overlapping topics from CLAUDE.md's Cross-Topic Overlap Reference.
```

---

## Step 4 — Update queue.md

Mark the R column for `$slug`:
- `[x]` if all required files written and at least one substantive source exists.
- `[~]` if any required file is missing or coverage is < 50% of objectives.

```!
grep -n "\`$slug\`" queue.md
```

Use the Edit tool with the unique context of `` (`$slug`) `` plus the `| [ ] | [ ] | [ ] |` row below it. Replace the first `[ ]` with `[x]` or `[~]` only.

---

## Quality Gate

Before stopping, confirm:
- `syllabus-scope.md` present
- `extracts.md` present (explanation inline if no sources mapped)
- `past-papers.md` present
- `index.md` has one bullet per objective in `syllabus-scope.md`
- Gaps documented
- queue.md R column updated for `$slug`

---

## Pacing Rule

After writing all files and updating queue.md, STOP.
Report to the user:
1. Sources found: markdown file count, past paper count
2. Syllabus coverage: X/Y objectives Covered, Z Partial, W Missing
3. Any gaps to be aware of
4. queue.md R column state (`[x]` or `[~]`)

Ask the user to review `resources/scraped/$slug/index.md` before proceeding.
