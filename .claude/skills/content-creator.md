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

## Prerequisite Check

```!
echo "=== Resource index for $slug ==="
cat resources/scraped/$slug/index.md 2>/dev/null || { echo "ERROR: resources/scraped/$slug/index.md not found. Stage 1 resources must exist in resources/scraped/$slug/ before content can be generated."; exit 1; }
echo ""
echo "=== Syllabus scope ==="
cat resources/scraped/$slug/syllabus-scope.md 2>/dev/null || echo "(syllabus-scope.md missing — resource-collector may need to be re-run)"
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
Full reference: `resources/cambridge-pseudocode.md`

Core rules (always apply):

| Construct | Cambridge 9618 Pseudocode |
|-----------|--------------------------|
| Assignment | `x ← 5` |
| Output | `OUTPUT x` |
| Input | `INPUT x` |
| If / else | `IF condition THEN ... ELSE ... ENDIF` |
| Case | `CASE OF x ... OTHERWISE ... ENDCASE` |
| For loop | `FOR i ← 1 TO 10 ... NEXT i` |
| While loop | `WHILE condition ... ENDWHILE` |
| Repeat loop | `REPEAT ... UNTIL condition` |
| Procedure | `PROCEDURE name(param : TYPE) ... ENDPROCEDURE` |
| Function | `FUNCTION name(param : TYPE) RETURNS TYPE ... ENDFUNCTION` |
| Array (1D) | `DECLARE arr : ARRAY[1:10] OF INTEGER` |
| Array (2D) | `DECLARE grid : ARRAY[1:3, 1:3] OF INTEGER` |
| String concat | `name ← firstName & ' ' & lastName` |
| Equality check | `=` (never `==`) · Not-equal: `<>` |

Use `←` for assignment only. Never use `=` for assignment.

---

## Step 1 — Read all resources

Before writing anything, read these files in order:

1. `resources/scraped/$slug/syllabus-scope.md` — authoritative objectives
2. `resources/scraped/$slug/index.md` — coverage report and gaps
3. `resources/scraped/$slug/extracts.md` — primary source content
4. `resources/scraped/$slug/past-papers.md` — exam questions and mark-scheme wording

Use the mark-scheme wording from `past-papers.md` to calibrate definition language in notes.md and model answers in questions.md.

---

## Step 2 — Cross-topic overlap lookup

Open CLAUDE.md and find the "Cross-Topic Overlap Reference" table.

- If `$slug` (or its syllabus section number, e.g. 4.1) appears in the **Define in** column, this topic is the primary definition site — write the concept in full.
- If it appears in the **Also referenced in** column, the concept is imported from an earlier section — write a brief reference ("As introduced in §X.X, ..."), link to the primary notes page, and change question stems to a different angle.

Document the decision in a short `## Cross-topic notes` block at the top of `notes.md` for rendering as a cross-reference callout.

---

## Step 3 — Write meta.md

Write to `content/$slug/meta.md`:

```markdown
# Topic Metadata

- **Title:** $topic_name
- **Slug:** $slug
- **Syllabus Ref:** {e.g. 1.1}
- **Chapter:** {Chapter name}
- **Level:** AS | A Level
- **Paper:** Paper 1 | Paper 2 | Paper 3 | Paper 4
- **Last Updated:** {YYYY-MM-DD}
- **Question Count:** {n}
- **Glossary Count:** {n}
- **Status:** draft

## Past Papers Checked
- {filename} ({year}, Paper {n}) — checked {YYYY-MM-DD}
```

---

## Step 4 — Write notes.md

Write to `content/$slug/notes.md`.

### Structure rules
- Headings match syllabus numbering from `syllabus-scope.md` exactly (`## X.X.1`, `## X.X.2`, …).
- Cambridge tone: precise, no filler, exam-ready language.
- No prohibited terms (see CLAUDE.md: "basically", "in simple terms", "fast/better" without qualification, "etc.", motivational filler).
- Every technical term defined on first use.
- At least one worked example per calculation-based objective.
- Each H2 section must open with 1–3 sentences of factual context: what the concept covers, why it is examined, and any real-world anchor that grounds the material. No motivational filler.
- Add a one-sentence concept-bridge before each H3 subsection that builds directly on the preceding one, showing how the ideas connect.
- End each H2 section with a `> **Key Takeaway:**` blockquote containing 2–4 exam-critical bullets that summarise the section. Use mark-scheme language where available.

### Diagram specs (minimum 3 per topic)
Embed as HTML comments in the relevant section:

```
<!-- DIAGRAM: [type] — [description] — explains [concept] -->
```

Available types: `flowchart` · `comparison-table` · `binary-diagram` · `network-diagram` · `memory-map` · `timeline` · `tree-diagram`.

If a concept needs a visual that cannot be rendered as SVG (e.g. a real circuit diagram), use this placeholder and log it in gaps.md (Step 9):

```
> [VISUAL NEEDED: type — what it shows — labels required — why it helps here]
```

### Final section — Syllabus Coverage (required)
The last section of every notes.md must mirror the objectives from `syllabus-scope.md`:

```markdown
## Syllabus Coverage

- **{objective verbatim from syllabus-scope.md}** — Covered
- **{objective verbatim}** — Partial (what is missing)
- **{objective verbatim}** — Missing (logged in gaps.md)
```

Only mark Covered if the notes fully address the objective. Every Missing entry must be logged in `gaps.md` by Step 9.

---

## Step 5 — Write glossary.md

Write to `content/$slug/glossary.md`.

### Format per term

```markdown
## {Term}
**Definition:** One or two sentences maximum. Cambridge mark-scheme wording. No embedded examples.
**Plain English:** One sentence without jargon.
**Example:** Concrete, specific example (not "for example, a computer").
**Differentiator:** (Only if commonly confused with another term.) The key technical difference that earns the mark.
**Syllabus Ref:** {e.g. X.X.2}

---
```

### Requirements
- Alphabetical order within each letter section; use letter headers (`## A`, `## B`, …).
- Minimum 10 terms per topic.
- Definitions ≤ 2 sentences — no examples inside the definition line.
- Definitions stand alone without referencing the notes.
- Differentiator field required for high-risk confused pairs: RAM/ROM · Lossy/lossless · Virus/worm · Phishing/pharming · Compiler/interpreter · Serial/parallel transmission · Validation/verification · Symmetric/asymmetric encryption.

---

## Step 6 — Write questions.md

Write to `content/$slug/questions.md`.

### Format per question

```markdown
## Question {n}
**Syllabus Ref:** {e.g. X.X.1}
**Marks:** {1–6}
**Difficulty:** Easy | Medium | Hard
**Command Word:** Define | State | Describe | Explain | Calculate | Convert | Discuss | Evaluate
**Type:** recall | application | analysis | misconception | past-paper

{Question text}

### Model Answer
- Point one [1]
- Point two [1]
- (one bullet per mark — use Cambridge mark scheme wording where available)

### Examiner Tip
{One sentence on a common mistake or what the examiner specifically rewards}

---
```

### Distribution requirements (minimum 10 questions)

The distribution applies to the **first 10 questions**. Additional questions beyond 10 are allowed and should respect the same ratios proportionally.

| Dimension | First-10 requirement |
|-----------|---------------------|
| By type | 4 recall · 3 application · 2 analysis/evaluation · 1 misconception trap |
| By marks | ≥ 2 × 1-mark · 3 × 2-mark · 3 × 3–4 mark · 2 × 5–6 mark |
| By difficulty | ≥ 3 Easy · 5 Medium · 2 Hard |
| Past paper | ≥ 1 question sourced from `past-papers.md` (`**Type:** past-paper`, note paper/year in Examiner Tip) |

Cover all major syllabus objectives. Include at least one calculation or trace question where applicable. No prohibited terms in question text or model answers.

---

## Step 7 — Past-paper cross-check

After writing all four files:

1. Re-read `resources/scraped/$slug/past-papers.md`.
2. For each question in that file:
   - Confirm `notes.md` contains content that directly answers it.
   - Confirm the model answer in `questions.md` uses wording consistent with the mark scheme.
3. If a gap is found: update `notes.md` and/or `questions.md`, then log the gap in `gaps.md` (Step 9).
4. Update `## Past Papers Checked` in `meta.md` with the papers reviewed.

---

## Step 8 — Validation pass

Run these checks before declaring the topic complete. Any failure must be resolved (edit the file) or logged (append to gaps.md) before Step 9.

```!
echo "=== A) Prohibited terms (must be empty) ==="
grep -inE 'basically|in simple terms|this means that|simply put|\betc\.\B|^|[[:space:]](great|excellent)[[:space:]]|now let.?s look at' content/$slug/*.md || echo "  none"

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

If any check fails, fix the underlying content or — for `[VISUAL NEEDED:]` placeholders that cannot be rendered — log the entry in `gaps.md` in Step 9 and keep going.

---

## Step 9 — Update queue.md and gaps.md

**Append gaps** — for every Missing objective, unrenderable diagram, or mark-scheme mismatch found in Steps 4–8, append one entry to `gaps.md` under "## Open Gaps" using this template:

```markdown
### $slug — {brief description}
- **Status:** Open
- **Topic:** $slug
- **Type:** Content Gap | Visual Placeholder | Past Paper Missing | Resource Missing
- **Description:** {what is missing and why it matters for exam coverage}
- **Action:** {what needs to be done to resolve it}
- **Logged:** {YYYY-MM-DD}
```

**Update queue.md C column** — find the `| [ ] | [ ] | [ ] |` row directly under the `(\`$slug\`)` header and change the **second** cell:
- `[x]` if all files exist, all validation checks in Step 8 passed (except logged visual gaps), and the past-paper cross-check was completed.
- `[~]` if stopping mid-work (any required file missing, any validation still failing, any unresolved Missing objective without a gap entry).

Use the Edit tool with the unique two-line context `(\`$slug\`)` + the status row.

---

## Pacing Rule

After all steps, STOP. Report to the user:
1. Files written to `content/$slug/`
2. Syllabus coverage: X Covered / Y Partial / Z Missing (from the `## Syllabus Coverage` section)
3. Validation results from Step 8 (any FAIL lines)
4. Past-paper matches in `questions.md`
5. New `gaps.md` entries added
6. `queue.md` C column state

Ask the user to review `content/$slug/` before proceeding.
