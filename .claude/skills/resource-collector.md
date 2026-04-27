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

→ Full ranked list with rules: `.claude/skills/references/source-priority.md` — "Stage 1"

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

Record the `paper:` number from md-index.md — needed in Step 2 for past-paper lookup.

If no md-index entry is found, log the slug as missing in `index.md` and proceed using general knowledge only.

---

## Step 1 — Read source markdown files

Read every file listed under `## $slug` in `resources/md/md-index.md`.

When extracting:
- Tag each chunk with `[Source: <relative-path>]` so origin is traceable.
- Preserve tables, lists, worked examples, and diagram descriptions verbatim.
- When a source file covers multiple slugs, extract only sections matching `$slug`'s objectives from `syllabus-scope.md`. Include borderline content and note the objective it supports.

Write the combined extracts, grouped by source, to `resources/scraped/$slug/extracts.md`.

---

## Step 2 — Past papers and mark schemes

Use the `paper:` number from Step 0. Scan all years under `resources/md/past-papers/paper $paper/`.

```!
echo "=== Past paper files for paper $paper ==="
find "resources/md/past-papers/paper $paper" -name "*qp*.md" | sort
```

For each question paper file found:
- Identify questions matching the objectives in `syllabus-scope.md`.
- Find the corresponding mark scheme file (same series/year/variant, `ms` instead of `qp`).
- Record: paper number, series+year, variant, question number, mark allocation, exact wording, and mark-scheme points verbatim.

Write all matches to `resources/scraped/$slug/past-papers.md`. If no questions match, write a single-line note.

---

## Step 3 — Write index.md

→ Template: `.claude/skills/references/output-templates.md` — "index.md"

Write to `resources/scraped/$slug/index.md`.

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

After writing all files and updating queue.md, STOP. Report to the user:
1. Sources found: markdown file count, past paper count
2. Syllabus coverage: X/Y objectives Covered, Z Partial, W Missing
3. Any gaps to be aware of
4. queue.md R column state (`[x]` or `[~]`)

Ask the user to review `resources/scraped/$slug/index.md` before proceeding.
