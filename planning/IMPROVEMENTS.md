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

## Applied (2026-04-26)

**Frontend / website**
- 1a — `/bootstrap` skill created at `.claude/skills/bootstrap.md`; `design-system/style.css`, `components.css`, `design-tokens.md`, and `svg-templates/` all created; `frontend/assets/` populated. Stage 0 row added to CLAUDE.md Pipeline Commands table.
- 5a — `frontend-builder.md` already had YAML frontmatter (resolved before this audit was actioned).
- 5b — Preflight check expanded: verifies `design-system/style.css`, `components.css`, and `design-tokens.md` before proceeding.
- 5c — All `{topic-slug}` and `{topic-name}` placeholders replaced with `$slug` / `$topic_name`.
- 5d — SVG template instructions added to Diagram Rendering section; `network-diagram` always emits `diagram-placeholder`.
- 5e — Duplicate protection added to `frontend/index.html` update step (`data-slug="$slug"` check).
- 5f — queue.md H column update step added to `frontend-builder.md`.

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
