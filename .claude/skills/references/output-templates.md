# Output Templates — Cambridge 9618

## meta.md

```markdown
# Topic Metadata

- **Title:** {topic_name}
- **Slug:** {slug}
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

## Syllabus Coverage (final section of notes.md)

```markdown
## Syllabus Coverage

- **{objective verbatim from syllabus-scope.md}** — Covered
- **{objective verbatim}** — Partial (what is missing)
- **{objective verbatim}** — Missing (logged in gaps.md)
```

Only mark Covered if the notes fully address the objective. Every Missing entry must be logged in `gaps.md`.

---

## glossary.md — term format

```markdown
## {Term}
**Definition:** One or two sentences maximum. Cambridge mark-scheme wording. No embedded examples.
**Plain English:** One sentence without jargon.
**Example:** Concrete, specific example (not "for example, a computer").
**Differentiator:** (Only if commonly confused with another term.) The key technical difference that earns the mark.
**Syllabus Ref:** {e.g. X.X.2}

---
```

Requirements:
- Alphabetical order; use letter headers (`## A`, `## B`, …).
- Minimum 10 terms per topic.
- Definitions ≤ 2 sentences — no examples inside the definition line.
- Definitions stand alone without referencing the notes.
- Differentiator field required for high-risk pairs: RAM/ROM · Lossy/lossless · Virus/worm · Phishing/pharming · Compiler/interpreter · Serial/parallel transmission · Validation/verification · Symmetric/asymmetric encryption.

---

## questions.md — question format

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

Distribution requirements (first 10 questions):

| Dimension | First-10 requirement |
|-----------|---------------------|
| By type | 4 recall · 3 application · 2 analysis/evaluation · 1 misconception trap |
| By marks | ≥ 2 × 1-mark · 3 × 2-mark · 3 × 3–4 mark · 2 × 5–6 mark |
| By difficulty | ≥ 3 Easy · 5 Medium · 2 Hard |
| Past paper | ≥ 1 question from `past-papers.md` (`**Type:** past-paper`, note paper/year in Examiner Tip) |

Cover all major syllabus objectives. Include at least one calculation or trace question where applicable. No prohibited terms.

---

## gaps.md — gap entry format

```markdown
### {slug} — {brief description}
- **Status:** Open
- **Topic:** {slug}
- **Type:** Content Gap | Visual Placeholder | Past Paper Missing | Resource Missing
- **Description:** {what is missing and why it matters for exam coverage}
- **Action:** {what needs to be done to resolve it}
- **Logged:** {YYYY-MM-DD}
```

Append under `## Open Gaps`. Log for every: Missing objective, unrenderable diagram, mark-scheme mismatch.

---

## index.md (resource-collector output)

```markdown
# Resource Summary — {topic_name}

**Slug:** {slug}
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
Note anything the content creator must be aware of: missing visuals, complex derivations, overlapping topics from CLAUDE.md Cross-Topic Overlap Reference.
```

---

## paper-analyser — questions file

Output path: `planning/markdown/paper{paper}_{year}_questions.md`

```markdown
# Paper {paper} — {year} — Question Mapping

| Paper | Q | Alinea | Sub-alinea | Marks | Topic | Sub-topic | Sub-sub-topic | Difficulty | Description |
|-------|---|--------|-----------|-------|-------|-----------|---------------|------------|-------------|
| S{YY} V1 | Q1 | a | — | 2 | cpu-architecture | Fetch-Execute cycle | MAR role | AO1 | State the purpose of the MAR register. |
```

- One row per sub-question at the deepest alinea level with its own mark allocation.
- Use `—` in Sub-alinea if no further breakdown.
- Sort: series → variant → Q number → alinea → sub-alinea.
- End with a summary: total rows, total marks, breakdown by topic slug, breakdown by AO.

---

## paper-analyser — answers file

Output path: `planning/markdown/paper{paper}_{year}_answers.md`

```markdown
# Paper {paper} — {year} — Marking Scheme by Syllabus

## [Topic name] (`[slug]`)

### [Sub-topic / Syllabus objective]

#### [Description of question]
*Sources: S{YY} V1 Q1a, S{YY} V2 Q2b — [total marks]*

- [mark point 1]
- [mark point 2]
- Accept: [alternative wording]
- Do not accept: [prohibited wording]
```

Deduplication rule: merge substantially similar mark-scheme answers from different series/variants. List all sources in `Sources:`; consolidate bullets; note mark-allocation differences if they vary.
