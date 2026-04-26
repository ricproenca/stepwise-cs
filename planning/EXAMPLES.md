# Usage Examples — 9618 Learning Platform

Practical walkthroughs of the pipeline. Each example is a real session you can replay.

---

## Example 1 — First Topic End-to-End

Target: 1.1 Data Representation (AS Level, Paper 1, slug: `data-representation`).

### Preconditions

- Claude Code is open in the project root
- `resources/md/` is populated with source files
- `resources/md/md-index.md` has an entry for `data-representation`
- `design-system/` exists with `style.css` and `components.css`

### Stage 1 — Collect Resources

```
/resource-collector "Data Representation" data-representation
```

Expected behaviour:
1. Reads the syllabus block for `data-representation` from `resources/syllabus.md`
2. Reads the markdown sources listed in `md-index.md` (textbook, textbook answers, moshikur, savemyexams, pseudocode_pro, thinka)
3. Searches `resources/md/past-papers/paper 1/` for questions matching objectives (binary, hex, two's complement, ASCII, BCD)
4. Writes 4 files to `resources/scraped/data-representation/`
5. Marks queue.md R column `[x]`
6. Stops and shows coverage summary

Review step:
```bash
cat resources/scraped/data-representation/index.md
```

Check the Coverage section. Any `Missing` rows should either be covered by general knowledge (logged) or flagged in Gaps.

### Stage 2 — Create Content

```
/content-creator "Data Representation" data-representation
```

Expected behaviour:
1. Prereq check confirms all 4 scraped files exist
2. Reads `syllabus-scope.md`, `index.md`, `extracts.md`, `past-papers.md`
3. Writes `content/data-representation/` — meta.md, notes.md, glossary.md, questions.md
4. Runs validation pass (prohibited terms, diagram count, question count, glossary count)
5. Cross-checks notes.md against past-papers.md
6. Marks queue.md C column `[x]`
7. Stops and reports coverage summary + any gaps logged

Review:
```bash
# Check syllabus coverage
grep -A 30 "## Syllabus Coverage" content/data-representation/notes.md

# Check question distribution
grep -E "^\*\*Difficulty|^\*\*Type" content/data-representation/questions.md | sort | uniq -c

# Check for prohibited terms
grep -iE 'basically|in simple terms|this means that' content/data-representation/*.md
```

### Stage 3 — Build HTML

```
/frontend-builder "Data Representation" data-representation
```

Expected behaviour:
1. Prereq check confirms all 4 content files exist
2. Reads `design-system/design-tokens.md`
3. Writes `frontend/topics/data-representation/` — index.html, questions.html, glossary.html
4. Converts `<!-- DIAGRAM: -->` specs to inline SVG; `[VISUAL NEEDED: …]` becomes `<figure class="diagram-placeholder">`
5. Inserts topic card into `frontend/index.html`
6. Marks queue.md H column `[x]`
7. Stops and asks for review

Review:
```bash
open frontend/topics/data-representation/index.html
```

---

## Example 2 — Resuming a Paused Topic

Scenario: `/resource-collector` ran on `logic-gates-circuits` yesterday but you stopped before Stage 2.

### Check state

```bash
ls resources/scraped/logic-gates-circuits/
# Should show: syllabus-scope.md, extracts.md, past-papers.md, index.md

ls content/logic-gates-circuits/ 2>/dev/null
# Empty — Stage 2 not started
```

### Resume from Stage 2

```
/content-creator "Logic Gates and Logic Circuits" logic-gates-circuits
```

The prereq check prints the resource index. The skill generates only missing content files — it will not overwrite any files that are already complete.

---

## Example 3 — Re-generating Questions After New Past Papers

Scenario: `content/data-representation/` is complete, but you've added 2024 Paper 1 markdown files to `resources/md/past-papers/paper 1/2024/`.

### Step 1 — Refresh past papers

```
/resource-collector "Data Representation" data-representation
```

In the chat, instruct: "Only re-run Step 2 (past papers). Do not re-extract sources from md-index. Append new questions to past-papers.md without deleting existing ones."

### Step 2 — Regenerate questions.md only

```
/content-creator "Data Representation" data-representation
```

In the chat, instruct: "Only regenerate questions.md. Incorporate any new past-paper questions from past-papers.md not already in questions.md. Do not touch notes.md, glossary.md — except update Past Papers Checked in meta.md."

### Step 3 — Rebuild questions page only

```
/frontend-builder "Data Representation" data-representation
```

In the chat, instruct: "Only rebuild questions.html. Do not touch index.html or glossary.html."

---

## Example 4 — Chapter 1 QA Pass

Scenario: You've finished all 3 topics in Chapter 1 and want to verify before publishing.

Run validate-topic for each slug:

```
/validate-topic data-representation
```
```
/validate-topic multimedia
```
```
/validate-topic compression
```

Each run produces a PASS/FAIL/REVIEW report. Look for any FAIL lines:
- Content files missing → re-run the relevant skill
- Prohibited terms found → edit the file directly and re-run
- Question count below 10 → add questions in questions.md and re-run frontend-builder
- Visual placeholders not logged → add gap entries in gaps.md

Only mark all three `[x]` in queue.md after all three reports show zero FAILs.

---

## Example 5 — Processing Past Papers for Planning

Scenario: You want to map all Paper 1 (2024) questions to their syllabus slugs before generating content, so you know which topics have the most exam weight.

```
/paper-analyser 1 2024
```

Expected behaviour:
1. Scans `resources/md/past-papers/paper 1/2024/` for all QP files (s24, w24, all variants)
2. Reads each QP and its matching MS
3. Maps every sub-question to a slug + AO level
4. Writes `planning/markdown/paper1_2024_questions.md` (table) and `paper1_2024_answers.md` (by syllabus)
5. Deduplicates mark-scheme entries across variants
6. Updates `planning/papers_plan_9618.md` tracking table

Review:
```bash
cat planning/markdown/paper1_2024_questions.md | grep "| " | sort -t'|' -k6
```

This shows which slugs attracted the most marks — useful for prioritising which topics to build first.

---

## Example 6 — Targeted Regeneration of One Section

Scenario: Section 1.1.4 (binary addition/subtraction) in notes.md is weak. You don't want to regenerate the whole file.

```
/content-creator "Data Representation" data-representation
```

In the chat, instruct:
```
Only rewrite section 1.1.4 in notes.md.
Keep all other sections exactly as they are.

For 1.1.4 specifically:
- Expand the overflow handling explanation
- Add a worked example: subtract 14 from 9 using 8-bit two's complement, show every step
- Add one comparison-table diagram spec for addition vs subtraction
- Preserve the Syllabus Coverage entry for 1.1.4

Do not touch glossary.md, questions.md, or meta.md.
```

---

## Example 7 — Handling a Gap During Content Creation

Scenario: While generating notes.md for `multimedia`, no source covers the sample rate calculation worked example.

Expected behaviour:

1. In notes.md section 1.2.7, mark:
```
> [VISUAL NEEDED: step-by-step — sampling rate × resolution × channels × duration → file size in bytes — needs a numeric example with realistic values]
```

2. Append to gaps.md:
```markdown
### multimedia — missing worked example for 1.2.7
- **Status:** Open
- **Topic:** multimedia
- **Type:** Content Gap
- **Description:** No source gave a numeric sampling rate × resolution worked example. Notes section 1.2.7 describes the formula but lacks a worked calculation.
- **Action:** Add worked example — e.g. 44.1 kHz × 16-bit × 2 channels × 60 s → file size in bytes
- **Logged:** 2026-04-26
```

3. Continue generating the rest of the file.
4. Include the gap count in the final summary report.

---

## Example 8 — Cross-Topic Overlap Handling

Scenario: Running `/content-creator` on `cpu-architecture`. The concept "two's complement" is already defined in `data-representation`.

Expected behaviour (per CLAUDE.md Cross-Topic Overlap Reference):

In notes.md for `cpu-architecture`, instead of redefining two's complement:

```markdown
## 4.1.5 Factors Affecting CPU Performance

Bus width determines how many bits of data the CPU can transfer in one clock cycle.
Wider buses allow larger signed integers (represented in two's complement — see
[§1.1 Data Representation](../data-representation/index.html#binary-number-system))
to be transferred in a single cycle without requiring multiple transfers.
```

In questions.md, the question angle shifts — ask "Explain why a 64-bit bus improves performance over a 32-bit bus when transferring signed integers", not "What is two's complement" (that belongs in data-representation).

---

## Invocation Cheat Sheet

| Scenario | Command or action |
|----------|------------------|
| Start a new topic | `/resource-collector "Topic Name" slug` |
| Generate content | `/content-creator "Topic Name" slug` |
| Build HTML | `/frontend-builder "Topic Name" slug` |
| QA check | `/validate-topic slug` |
| Map past-paper questions | `/paper-analyser [paper] [year]` |
| Check stage state | `ls resources/scraped/SLUG content/SLUG frontend/topics/SLUG 2>/dev/null` |
| Inspect coverage | `grep -A 30 "Coverage" resources/scraped/SLUG/index.md` |
| Check for prohibited terms | `grep -iE 'basically\|in simple terms\|this means that' content/SLUG/*.md` |
| See progress | `head -60 queue.md` |
| See open gaps | `grep "Status.*Open" gaps.md` |
