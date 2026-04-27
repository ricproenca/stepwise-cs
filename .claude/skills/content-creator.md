---
name: content-creator
description: Generates revision notes, glossary, and practice questions for a 9618 topic into content/{slug}/. Triggered by "create content for [topic]", "generate notes for [slug]", or /content-creator [topic-name] [slug]. Do not auto-invoke during other work.
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

# Content Creator — Cambridge 9618

Generate revision notes, glossary, and practice questions for: **$topic_name** (slug: `$slug`)

Output directory: `content/$slug/`

---

## Role

You are a Cambridge AS & A Level Computer Science 9618 content specialist.

Your job is to transform local resource files into high-quality study content that is:
- syllabus-aligned with the Cambridge 9618 specification,
- exam-accurate and usable as model answers,
- clear for students aged 16–18,
- ready to publish without editing.

---

## Prerequisite Check

```!
echo "=== Resource index for $slug ==="
cat resources/scraped/$slug/index.md 2>/dev/null || { echo "ERROR: resources/scraped/$slug/index.md not found. Stage 1 resources must exist before content can be generated."; exit 1; }
echo ""
echo "=== Scraped files present ==="
ls resources/scraped/$slug/ 2>/dev/null
echo ""
echo "=== Existing content files ==="
ls content/$slug/ 2>/dev/null || echo "(none — starting fresh)"
```

If `index.md` reports critical gaps (Missing coverage on multiple objectives with no resolution), stop and ask the user before proceeding.

If content files already exist, generate only the missing ones — do not overwrite complete files.

---

## Pseudocode Rule

All algorithm and code examples must use Cambridge 9618 pseudocode. No Python, no JavaScript.

→ Syntax table and rules: `.claude/skills/references/pseudocode-syntax.md`

---

## Step 1 — Read all resources

Before writing anything, read these files in order:

1. `resources/scraped/$slug/syllabus-scope.md` — authoritative objectives
2. `resources/scraped/$slug/index.md` — coverage report and gaps
3. `resources/scraped/$slug/extracts.md` — primary source content
4. `resources/scraped/$slug/past-papers.md` — exam questions and mark-scheme wording

Use mark-scheme wording from `past-papers.md` to calibrate definition language in notes.md and model answers in questions.md.

**Source priority:** `.claude/skills/references/source-priority.md` — "Stage 2"  
**Content standards:** `.claude/skills/references/content-standards.md` — apply throughout Steps 3–7.

---

## Step 2 — Cross-topic overlap lookup

Open CLAUDE.md and find the "Cross-Topic Overlap Reference" table.

- If `$slug` appears in the **Define in** column, write the concept in full.
- If it appears in the **Also referenced in** column, write a brief reference ("As introduced in §X.X, ..."), link to the primary notes page, and change question stems to a different angle.

Document the decision in a `## Cross-topic notes` block at the top of `notes.md`.

---

## Step 3 — Write meta.md

Write to `content/$slug/meta.md`.

→ Template: `.claude/skills/references/output-templates.md` — "meta.md"

---

## Step 4 — Write notes.md

Write to `content/$slug/notes.md`.

→ Editorial standards: `.claude/skills/references/content-standards.md` — "notes.md Structure Rules"
→ Diagram comment format and types: `.claude/skills/references/diagram-specs.md`
→ Syllabus Coverage template: `.claude/skills/references/output-templates.md` — "Syllabus Coverage"

---

## Step 5 — Write glossary.md

Write to `content/$slug/glossary.md`.

→ Format and requirements: `.claude/skills/references/output-templates.md` — "glossary.md"

---

## Step 6 — Write questions.md

Write to `content/$slug/questions.md`.

→ Format and distribution: `.claude/skills/references/output-templates.md` — "questions.md"

---

## Step 7 — Past-paper cross-check

After writing all four files:

1. Re-read `resources/scraped/$slug/past-papers.md`.
2. For each question: confirm `notes.md` answers it and `questions.md` model answer matches the mark scheme.
3. If a gap is found: update the relevant file, then log in `gaps.md` (Step 8).
4. Update `## Past Papers Checked` in `meta.md`.

---

## Step 8 — Validation pass

Run these checks before declaring the topic complete:

```!
echo "=== A) Prohibited terms (must be empty) ==="
grep -inE 'basically|in simple terms|this means that|simply put|\betc\.\B|[[:space:]](great|excellent)[[:space:]]|now let.?s look at' content/$slug/*.md || echo "  none"

echo ""
echo "=== B) Diagram count in notes.md (must be >= 3) ==="
diagrams=$(grep -cE '<!-- DIAGRAM:|\[VISUAL NEEDED:' content/$slug/notes.md 2>/dev/null || echo 0)
echo "  diagrams + placeholders: $diagrams"
[ "$diagrams" -lt 3 ] && echo "  FAIL: minimum 3 required"

echo ""
echo "=== C) Syllabus Coverage section present ==="
grep -q '^## Syllabus Coverage' content/$slug/notes.md && echo "  present" || echo "  MISSING"

echo ""
echo "=== D) Question count (must be >= 10) ==="
qcount=$(grep -cE '^## Question ' content/$slug/questions.md 2>/dev/null || echo 0)
echo "  questions: $qcount"
[ "$qcount" -lt 10 ] && echo "  FAIL: minimum 10 required"

echo ""
echo "=== E) At least one past-paper-typed question ==="
grep -q 'Type:\*\* past-paper' content/$slug/questions.md && echo "  present" || echo "  MISSING"

echo ""
echo "=== F) Glossary term count (must be >= 10) ==="
tcount=$(grep -cE '^## [A-Z]' content/$slug/glossary.md 2>/dev/null || echo 0)
echo "  terms (approx): $tcount"
```

Fix any FAIL or — for unrenderable `[VISUAL NEEDED:]` placeholders — log in `gaps.md`.

---

## Step 9 — Update queue.md and gaps.md

**Append gaps** — for every Missing objective, unrenderable diagram, or mark-scheme mismatch:

→ Entry format: `.claude/skills/references/output-templates.md` — "gaps.md"

Append under `## Open Gaps` in `gaps.md`.

**Update queue.md C column** — find the `| [ ] | [ ] | [ ] |` row under the `($slug)` header and change the second cell:
- `[x]` if all files exist, all Step 8 checks pass (except logged visual gaps), and past-paper cross-check done.
- `[~]` if stopping mid-work.

Use the Edit tool with the unique two-line context `($slug)` + the status row.

---

## Pacing Rule

After all steps, STOP. Report to the user:
1. Files written to `content/$slug/`
2. Syllabus coverage: X Covered / Y Partial / Z Missing
3. Validation results from Step 8 (any FAIL lines)
4. Past-paper matches in `questions.md`
5. New `gaps.md` entries added
6. `queue.md` C column state

Ask the user to review `content/$slug/` before proceeding.
