---
name: paper-analyser
description: Analyses 9618 past papers for a given paper (1–4) and year; maps questions to syllabus slugs and writes planning/markdown files. Triggered by "analyse paper [N] [year]", "process past papers for paper [N]", or /paper-analyser [paper] [year]. Do not auto-invoke during the content pipeline.
argument-hint: "[paper] [year]"
arguments:
  - paper
  - year
disable-model-invocation: true
allowed-tools:
  - Read
  - Write
  - Edit
  - Bash
---

# Paper Analyser — Cambridge 9618

Analyse past papers for **Paper $paper** (`$year`) and map every question to the syllabus.

---

## Syllabus Scope Per Paper

Use the table below to determine which slugs and topics are in scope for `$paper`.

| Paper | Slugs in scope |
|-------|---------------|
| 1 | `data-representation`, `multimedia`, `compression`, `networks-internet`, `computers-components`, `logic-gates-circuits`, `cpu-architecture`, `assembly-language`, `bit-manipulation`, `operating-systems`, `language-translators`, `data-security`, `data-integrity`, `ethics-ownership`, `database-concepts`, `dbms`, `ddl-dml` |
| 2 | `computational-thinking`, `algorithms-as`, `data-types-records`, `arrays`, `files-as`, `adt-intro`, `programming-basics`, `constructs`, `structured-programming`, `development-lifecycle`, `program-design`, `testing-maintenance` |
| 3 | `user-defined-types`, `file-organisation`, `floating-point`, `protocols`, `switching`, `processors-vm`, `boolean-algebra`, `os-purposes`, `translation-software`, `encryption-certificates`, `artificial-intelligence`, `programming-paradigms` (low-level + declarative theory only) |
| 4 | `algorithms-alevel`, `recursion`, `programming-paradigms` (OOP + imperative only), `file-processing-exceptions` |

---

## Step 0 — Discover available PDFs

Check which question papers and marking schemes exist for Paper $paper, year $year:

```!
echo "=== QP files ==="
ls resources/pdfs/9618_p$paper_*$year* 2>/dev/null | grep qp || \
ls resources/pdfs/ 2>/dev/null | grep -i "9618" | grep -i "p$paper" | grep -i "$year" || \
echo "(no matching PDFs found — check resources/pdfs/ naming)"

echo ""
echo "=== MS files ==="
ls resources/pdfs/9618_p$paper_*$year* 2>/dev/null | grep ms || \
ls resources/pdfs/ 2>/dev/null | grep -i "9618" | grep -i "p$paper" | grep -i "$year" | grep -i "ms" || \
echo "(no matching mark schemes found)"
```

If no PDFs are found, report to the user with the expected filename pattern (`9618_p$paper_[series]_qp_[variant].pdf`) and stop. Do not proceed without source files.

Identify every (QP, MS) pair available. A pair shares the same series code (`s$YY` or `w$YY`) and variant number (e.g., `11`, `12`). Process all pairs found.

---

## Step 1 — Read the question paper

For each QP PDF identified in Step 0, read it fully. If the PDF is large, read in blocks of 20 pages.

Extract for every sub-question:
- Question number (e.g., Q1)
- Alinea (e.g., a, b, c)
- Sub-alinea (e.g., i, ii, iii)
- Mark allocation
- Exact question wording (verbatim)
- Command word used (Define / State / Explain / Describe / etc.)

Record each sub-question with its series and variant (e.g., S24 V1) so rows remain traceable when aggregating across variants.

---

## Step 2 — Read the marking scheme

For each MS PDF identified in Step 0, read it fully.

Extract for every sub-question:
- The mark-scheme answer points verbatim (each bullet point is one mark)
- Any "accept / allow / do not accept" guidance
- Total marks awarded

Pair each MS entry to its corresponding QP sub-question by question number and alinea.

---

## Step 3 — Map to syllabus topics

For each sub-question, assign:
- **Topic**: the primary slug from the scope table above (e.g., `cpu-architecture`)
- **Sub-topic**: the specific syllabus objective it tests (e.g., "Fetch-Execute cycle")
- **Sub-sub-topic**: the precise concept if applicable (e.g., "register transfer notation")
- **Difficulty**: AO1 (knowledge/recall), AO2 (application), or AO3 (analysis/evaluation/design)

Use `resources/syllabus.md` as the reference — read the block for each candidate slug to match question wording against candidate objectives. Multiple sub-questions from one question may map to different topics.

**Mapping rules:**
- AO1: "State", "Define", "Give", "Identify", "Name", "List"
- AO2: "Describe", "Explain", "Show", "Calculate", "Complete", "Write", "Trace"
- AO3: "Evaluate", "Justify", "Assess", "Discuss", "Analyse", "Compare", "Suggest"
- When uncertain between AO2 and AO3, use AO2.
- One sub-question maps to exactly one primary topic slug.

Write a one-sentence description per sub-question that summarises what the question asks (e.g., "State the purpose of the MAR register in the fetch-execute cycle."). This description is used as the answer header in the answers file.

---

## Step 4 — Write the questions file

Output path: `planning/markdown/paper$paper_${year}_questions.md`

Create the `planning/markdown/` directory if it does not exist:

```!
mkdir -p planning/markdown
```

File format:

```markdown
# Paper $paper — $year — Question Mapping

| Paper | Q | Alinea | Sub-alinea | Marks | Topic | Sub-topic | Sub-sub-topic | Difficulty | Description |
|-------|---|--------|-----------|-------|-------|-----------|---------------|------------|-------------|
| S$YY V1 | Q1 | a | — | 2 | cpu-architecture | Fetch-Execute cycle | MAR role | AO1 | State the purpose of the MAR register. |
...
```

- One row per sub-question (at the deepest alinea level with its own mark allocation).
- If a sub-question has no further sub-alineas, use `—` in the Sub-alinea column.
- Sort rows by: Paper (series, then variant) → Q number → Alinea → Sub-alinea.
- Include a summary line at the bottom: total rows, total marks, breakdown by topic slug, breakdown by AO.
```

---

## Step 5 — Write the answers file

Output path: `planning/markdown/paper$paper_${year}_answers.md`

Organise mark-scheme content by syllabus structure. Do not use question references (e.g., "Q1a") as headers — use the description from Step 3 instead.

File format:

```markdown
# Paper $paper — $year — Marking Scheme by Syllabus

## [Topic name] (`[slug]`)

### [Sub-topic / Syllabus objective]

#### [Description of question]
*Sources: S$YY V1 Q1a, S$YY V2 Q2b — [total marks]*

- [mark point 1]
- [mark point 2]
- Accept: [alternative wording]
- Do not accept: [prohibited wording]
```

**Deduplication rule**: if two sub-questions from different series/variants have the same or substantially similar mark-scheme answers, merge them into a single entry. List all source references in the `Sources:` line and consolidate the bullet points (remove exact duplicates, keep all distinct mark points). Do not suppress differences in mark allocation — note them if they vary.

---

## Step 6 — Update tracking in papers_plan_9618.md

Read `planning/papers_plan_9618.md` and update the Completed Files table for Paper $paper and the Years to Process checklist.

Find the line `- [ ] $year` under the Paper $paper heading and replace `[ ]` with `[x]`.

Find the row `| — | — | — |` (or the last data row) under the Paper $paper Completed Files table and append or update:

```
| $year | `planning/markdown/paper$paper_${year}_questions.md` | `planning/markdown/paper$paper_${year}_answers.md` |
```

Use the Edit tool with sufficient surrounding context to make each change unique.

---

## Quality Gate

Before stopping, confirm:
- [ ] `planning/markdown/paper$paper_${year}_questions.md` written
- [ ] `planning/markdown/paper$paper_${year}_answers.md` written
- [ ] All discovered QP/MS pairs processed (none silently skipped)
- [ ] Every sub-question in the QPs has a row in the questions file
- [ ] Every row in the questions file has a matching answer entry
- [ ] Deduplication applied across variants
- [ ] `papers_plan_9618.md` year checklist and Completed Files table updated

---

## Pacing Rule

After writing all files and updating `papers_plan_9618.md`, STOP.

Report to the user:
1. PDFs processed (list series + variant for each QP/MS pair)
2. Total questions extracted and total marks
3. Topic coverage: which slugs appeared and how many marks each attracted
4. Any sub-questions that could not be mapped to a slug (list them explicitly)
5. Deduplication summary: how many answer entries were merged

Ask the user to review `planning/markdown/paper$paper_${year}_questions.md` before running the next paper.
