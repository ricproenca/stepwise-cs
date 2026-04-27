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

→ Paper-to-slug scope table and AO classification rules: `.claude/skills/references/syllabus-scope-mapping.md`

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

If no PDFs are found, report with the expected pattern (`9618_p$paper_[series]_qp_[variant].pdf`) and stop. Do not proceed without source files.

Identify every (QP, MS) pair available — shared series code and variant number. Process all pairs found.

---

## Step 1 — Read the question paper

For each QP PDF identified in Step 0, read it fully (blocks of 20 pages for large PDFs).

Extract for every sub-question:
- Question number, alinea, sub-alinea
- Mark allocation
- Exact question wording (verbatim)
- Command word used

Record each sub-question with its series and variant (e.g., S24 V1) for traceability.

---

## Step 2 — Read the marking scheme

For each MS PDF, read it fully. Extract for every sub-question:
- Mark-scheme answer points verbatim (each bullet = one mark)
- Any "accept / allow / do not accept" guidance
- Total marks awarded

Pair each MS entry to its QP sub-question by question number and alinea.

---

## Step 3 — Map to syllabus topics

For each sub-question, assign:
- **Topic**: primary slug from the scope table in `syllabus-scope-mapping.md`
- **Sub-topic**: specific syllabus objective tested
- **Sub-sub-topic**: precise concept if applicable
- **Difficulty**: AO1, AO2, or AO3 — rules in `.claude/skills/references/syllabus-scope-mapping.md`

Use `resources/syllabus.md` to match question wording against objectives. Multiple sub-questions from one question may map to different topics.

Write a one-sentence description per sub-question summarising what it asks (used as the answer header in the answers file).

---

## Step 4 — Write the questions file

```!
mkdir -p planning/markdown
```

→ File format: `.claude/skills/references/output-templates.md` — "paper-analyser — questions file"

Output path: `planning/markdown/paper$paper_${year}_questions.md`

---

## Step 5 — Write the answers file

→ File format: `.claude/skills/references/output-templates.md` — "paper-analyser — answers file"

Output path: `planning/markdown/paper$paper_${year}_answers.md`

Organise by syllabus structure, not question references. Apply deduplication across variants as described in the template.

---

## Step 6 — Update tracking in papers_plan_9618.md

Read `planning/papers_plan_9618.md` and update for Paper $paper and year $year:

1. Find `- [ ] $year` under the Paper $paper heading and replace `[ ]` with `[x]`.
2. Append or update the Completed Files table row:

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
4. Any sub-questions that could not be mapped to a slug
5. Deduplication summary: how many answer entries were merged

Ask the user to review `planning/markdown/paper$paper_${year}_questions.md` before running the next paper.
