# Project Improvements — 9618 Learning Platform

Audit of the current project state with concrete fixes organised by area.
Items are removed from this file as they are applied.

---

## Applied (2026-04-23)

**Workflow**
- 1b — Per-stage queue.md writer wired into both resource-collector (Step 5) and content-creator (Step 9).
- 1c — `/validate-topic [slug]` skill created at `.claude/skills/validate-topic.md` — runs the 12-point checklist.

**CLAUDE.md**
- 2a — Pipeline Commands table replaces outdated Skills section.
- 2b — Quick Start block added at top.
- 2c — Level Tags merged into Naming Convention.
- 2d — Project structure tree added.

**Resource-Collector**
- 3a — `resources/pdfs/pdf-index.md` seeded with all existing majidtahir.com PDFs (39 entries) and skip-list for slugs without local sources.
- 3b — Output Contract table at top of skill lists every required file.
- 3c — `resources/syllabus.md` created from the official Cambridge 9618 2026 PDF; Step 0 reads the per-slug block.
- 3d — Subfolder convention documented (`majidtahir.com/` → `[Source: majidtahir.com/<file>]`).

**Content-Creator**
- 4a — Prohibited-terms grep in Step 8 validation block.
- 4b — Question distribution reconciled: "minimum 10, distribution applied to the first 10, additional questions respect the ratios proportionally".
- 4c — Step 9 writes to both `queue.md` (C column) and `gaps.md` with a concrete template.
- 4d — Step 2 performs the Cross-Topic Overlap Reference lookup.
- 4e — Diagram count (`DIAGRAM` + `VISUAL NEEDED`) enforced ≥ 3 in Step 8.

---

## Deferred — frontend / website (skipped on user request)

These are still valid but will be handled when the website build resumes.

### Issue 1a — Bootstrap step for design-system linkage
The `design-system/` folder has `colors_and_type.css`, preview HTML files with inline styles, and UI kits — but the pipeline expects consolidated `design-system/style.css` + `design-system/components.css` + `design-system/design-tokens.md`, and copies in `frontend/assets/`. These are not present.

**Fix (when resumed):** Add a one-time `/bootstrap` skill (new `.claude/skills/bootstrap.md`) that
1. Symlinks or copies `colors_and_type.css` → `design-system/style.css`
2. Extracts component classes from `design-system/preview/components-*.html` into `design-system/components.css`
3. Generates `design-system/design-tokens.md` from the README's VISUAL FOUNDATIONS section
4. Copies both CSS files into `frontend/assets/`
Document it as Stage 0 in CLAUDE.md's Pipeline Commands table (the table already references it).

### Issue 5a — frontend-builder YAML frontmatter (CRITICAL for Stage 3)
`.claude/skills/frontend-builder.md` has no frontmatter — it cannot be invoked as `/frontend-builder`.

**Fix:** Add complete YAML matching resource-collector and content-creator:
```yaml
---
name: frontend-builder
description: Builds HTML pages from generated content. Runs at Stage 3. Invoke with: /frontend-builder [topic-name] [slug]
when_to_use: ...
argument-hint: "[topic-name] [slug]"
arguments: [topic_name, slug]
disable-model-invocation: true
allowed-tools: [Read, Write, Edit, Bash]
---
```

### Issue 5b — No prereq check
Doesn't verify `design-system/*.css` exist, doesn't check which content files are present, doesn't show what's already in `frontend/topics/$slug/`.

**Fix:** Add a `!` shell block at the top:
```
ls content/$slug/
ls design-system/
ls frontend/topics/$slug/ 2>/dev/null || echo "(no pages built yet)"
```

### Issue 5c — Placeholders use `{topic-slug}` instead of `$slug`
All path references need `$slug` / `$topic_name` for argument substitution to work.

### Issue 5d — No SVG templates
The skill says "emit SVG for each diagram type" but gives no template code — Claude will improvise.

**Fix:** Add `design-system/svg-templates/` with one reference SVG per diagram type (flowchart, comparison-table, binary-diagram, network-diagram, memory-map, timeline, tree-diagram). Skill reads the template and adapts it to the diagram spec.

### Issue 5e — `frontend/index.html` update has no duplicate protection
Running frontend-builder twice on the same topic will add two topic cards.

**Fix:** Before inserting a card, the skill checks for an existing `<article>` with `data-slug="$slug"` and replaces it.

### Issue 5f — No queue.md update (H column)
Mirror the Step 9 pattern already added to content-creator.

---

## Deferred — low priority

### Issue 1d — Single-file regeneration argument
Skills only regenerate the full output. A third argument `[file]` = `notes` | `glossary` | `questions` | `all` would let the user refresh one file when a new past paper surfaces.

### Issue 1e — `/milestone [scope]` skill
Batches `/validate-topic` over every slug in a chapter/paper and prints an aggregate pass/fail report. Gate for publication.

### Issue 3e — Web cache
`resources/scraped/_cache/` with TTL-based caching of `WebFetch` results, keyed by URL hash. Reduces re-scraping cost when running the same collector twice in a week.

---

## Recommended Next Actions (once website work resumes)

1. Fix Issue 5a (frontmatter) — unblocks `/frontend-builder`.
2. Run Issue 1a (bootstrap) — populates `design-system/style.css`, `components.css`, `design-tokens.md`, and `frontend/assets/*`.
3. Apply Issues 5b–5f and add SVG templates.
4. Optional: 1d, 1e, 3e.
