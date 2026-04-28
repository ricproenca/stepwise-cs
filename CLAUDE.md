# 9618 CS Website — Claude Code Project

## Purpose
Build a Cambridge AS & A Level Computer Science (9618) revision website.
Pipeline: collect resources → create content → build HTML pages.
Covers the full syllabus: AS Level (sections 1–12) and A Level (sections 13–20).

## Quick Start
1. For each topic, run the three pipeline commands in order:
   `/resource-collector [topic] [slug]` → `/content-creator [topic] [slug]` → `/frontend-builder [topic] [slug]`
2. Between topics, review `queue.md` and `gaps.md`; run `/validate-topic [slug]` before marking the topic `[x]`.

## Project Structure
```
9618-learning-platform/
├── CLAUDE.md, README.md, queue.md, gaps.md
├── planning/               ← ARCHITECTURE.md, EXAMPLES.md, IMPROVEMENTS.md
├── .claude/skills/         ← slash commands
├── resources/
│   ├── syllabus.md         ← 9618 spec (sub-points per slug)
│   ├── cambridge-pseudocode.md ← authoritative pseudocode reference
│   ├── md/                 ← markdown source files (user-maintained)
│   │   ├── md-index.md     ← slug-to-file mapping with paper number
│   │   ├── textbook/       ← Hodder Education chapters + answers
│   │   ├── savemyexams/    ← exam-focused notes by syllabus section
│   │   ├── moshikur/       ← concise notes by chapter
│   │   ├── thinka/         ← additional notes by chapter
│   │   ├── pseudocode_pro/ ← worked exercises for AS Level Units 1–6
│   │   ├── moshikur_pseudocode/ ← pseudocode examples
│   │   ├── past-papers/    ← QP and MS markdown by paper/year
│   │   └── guides/         ← syllabus, pseudocode guide, scheme of work
│   └── scraped/            ← Stage 1 output: extracts + past papers (per slug)
├── content/                ← Stage 2 output (per slug)
├── design-system/          ← tokens, components, brand assets
└── frontend/               ← Stage 3 output (topics/, assets/)
```

## Scope Note
This CLAUDE.md applies to this project folder only.
It overrides the parent folder's CLAUDE.md (teacher persona / classroom output style) for all pipeline work.
The teacher-role instructions do not apply when running resource-collector, content-creator, or frontend-builder skills.

---

## Workflow Rules
1. Always follow the 3-step pipeline. Never skip steps.
2. Never build HTML pages before content files exist.
3. Never create content without resources first.
4. Resources come from local markdown files in `resources/md/` — do not fetch from external websites.
5. Step outputs:
   - Step 1 → resources/scraped/{topic-slug}/
   - Step 2 → content/{topic-slug}/
   - Step 3 → frontend/topics/{topic-slug}/

## Naming Convention
Topic slugs use kebab-case. See queue.md for the full topic slug reference.
Each slug maps to exactly one syllabus section (e.g. 1.1 → data-representation).
Every topic has a level (AS or A Level) and paper (1–4) recorded in queue.md. Tag every generated page with both so students can filter by exam.

## Design System
- CSS variables are defined in design-system/style.css
- Component classes are in design-system/components.css
- All generated HTML must link to /assets/style.css and /assets/components.css
- Never use inline styles
- Reference design-tokens.md before generating any HTML

## Project Context

- Framework: Next.js 14+ App Router
- Frontend only — no backend, no API routes
- Styling: CSS Modules only
- Language: TypeScript
- Review standards: see /planning/CODE_REVIEW.md

## Content Standards
- All definitions must be Cambridge-compliant and usable as exam answers
- Questions must follow the command word framework:
  Analyse, Assess, Calculate, Comment, Compare, Complete, Consider, Contrast,
  Define, Demonstrate, Describe, Develop, Discuss, Draw, Evaluate, Examine,
  Explain, Give, Identify, Justify, Outline, Predict, Sketch, State, Suggest,
  Summarise, Write
- Every topic must include at least 3 diagrams or tables
- Notes must cover every syllabus sub-point — complete enough to revise from without a textbook
- Questions must be past-paper style, not textbook exercises

---

## Pacing Rule
Work one topic at a time. After completing all outputs for a topic and updating queue.md, STOP and ask the user to review before proceeding to the next topic.

---

## Completion Checklist
Before marking any topic `[x]` in queue.md, verify ALL of the following:

- [ ] All content files exist: meta.md, notes.md, glossary.md, questions.md
- [ ] notes.md ends with a `## Syllabus Coverage` checklist (one bullet per sub-point: Covered / Partial / Missing)
- [ ] Every syllabus sub-point is Covered or Partial — none left as Missing without a gaps.md entry
- [ ] All pseudocode uses Cambridge 9618 conventions (← for assignment, OUTPUT, WHILE/ENDWHILE, etc.)
- [ ] Every diagram spec or `[VISUAL NEEDED]` placeholder is present — no concept with a spatial/comparative form left as prose only
- [ ] Any unrenderable diagram is logged in gaps.md
- [ ] Past paper cross-check completed: notes.md answers the real exam questions for this topic
- [ ] Model answers in questions.md match Cambridge mark scheme wording
- [ ] questions.md has 10+ questions with Difficulty tags and at least one [Past Paper] question
- [ ] Glossary definitions are ≤ 2 sentences, alphabetically sorted, with Differentiator fields for confused pairs
- [ ] No prohibited terms used (see Prohibited Terms below)
- [ ] HTML pages render correctly — no broken SVGs or missing assets

---

## Prohibited Terms
Never use the following in any generated content:
- "basically", "in simple terms", "this means that", "simply put"
- "fast" or "better" without technical qualification (e.g. "faster access time due to…")
- "etc." — list items explicitly or state the list is non-exhaustive
- Motivational filler: "great", "excellent", "now let's look at"

All definitions must be mark-scheme separable — each point earns one mark independently.

---

## Cross-Topic Overlap Reference
When a concept appears in more than one topic, apply these rules:
- Define the concept in full in the **earliest** section where it appears
- In later sections, reference it briefly — do not redefine
- In questions.md, change the angle — do not reuse the same question stem

| Concept | Define in | Also referenced in |
|---------|-----------|--------------------|
| Binary number system, two's complement | 1.1 Data Representation | 4.1 CPU Architecture, 4.3 Bit Manipulation |
| Character encoding (ASCII, Unicode) | 1.1 Data Representation | 1.2 Multimedia |
| Sampling (sound) | 1.2 Multimedia | 1.3 Compression |
| LAN hardware (switch, NIC, WAP) | 2.1 Networks | 3.1 Computers and Components |
| RAM vs ROM | 3.1 Computers and Components | 4.1 CPU Architecture |
| OS purpose | 5.1 Operating Systems | 16.1 OS Purposes |
| Compiler vs interpreter | 5.2 Language Translators | 16.2 Translation Software |
| Data types (INTEGER, REAL, CHAR, etc.) | 10.1 Data Types and Records | 11.1 Programming Basics |
| Stack, queue, linked list | 10.4 ADT Intro | 19.1 Algorithms (A Level) |
| Pseudocode constructs | 9.2 Algorithms (AS) | 11.1–11.3 Programming |
| Logic gates | 3.2 Logic Gates and Circuits | 15.2 Boolean Algebra |
| Addressing modes | 4.2 Assembly Language | 20.1 Programming Paradigms |

---

## Pipeline Commands

| Stage | Command | Output |
|-------|---------|--------|
| 0 | `/bootstrap` | design-system/style.css · components.css · design-tokens.md · svg-templates/ · frontend/assets/ |
| 1 | `/resource-collector [topic] [slug]` | resources/scraped/{slug}/ |
| 2 | `/content-creator [topic] [slug]` | content/{slug}/ |
| 3 | `/frontend-builder [topic] [slug]` | frontend/topics/{slug}/ |
| QA | `/validate-topic [slug]` | pass/fail report against completion checklist |
| Planning | `/paper-analyser [paper] [year]` | planning/markdown/ question + answer mapping |

Stage 0 (`/bootstrap`) is a one-time setup. Run it once before the first `/frontend-builder` invocation. It is safe to re-run — skips files that are already current.

Every skill ends by updating its column in `queue.md` (R / C / H) to `[x]` on success or `[~]` if stopping mid-work.
