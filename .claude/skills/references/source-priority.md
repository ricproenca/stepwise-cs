# Source Priority

## Stage 1 — Resource Collector: collection order

Read sources in this priority order:

1. **Hodder textbook** (`resources/md/textbook/`) — Cambridge-endorsed, most authoritative.
2. **Hodder textbook Answers** (`resources/md/textbook/`) — official worked solutions, mark-scheme language.
3. **moshikur** (`resources/md/moshikur/`) — clean markdown organized by syllabus sub-point.
4. **savemyexams** (`resources/md/savemyexams/`) — exam-focused definitions and key points.
5. **pseudocode_pro Presentation** (`resources/md/pseudocode_pro/`) — slide-format key concepts (AS Level Units 1–6 only).
6. **pseudocode_pro Answers** (`resources/md/pseudocode_pro/`) — worked solutions (AS Level Units 1–6 only).
7. **pseudocode_pro Homework** (`resources/md/pseudocode_pro/`) — practice problems (AS Level Units 1–6 only).
8. **thinka** (`resources/md/thinka/`) — additional coverage; verbose, use last.
9. **moshikur_pseudocode** (`resources/md/moshikur_pseudocode/`) — pseudocode examples (where listed).
10. **General knowledge** — last resort only. Log every such use in `index.md` under "Gaps".

## Stage 2 — Content Creator: writing priority

Apply this order when generating content from collected resources (Steps 3–7):

1. **Scraped extracts** (`resources/scraped/$slug/extracts.md`) — primary source; use mark-scheme wording from this file first.
2. **Textbook** (`resources/md/textbook/`) — Hodder Education chapters; secondary source for depth, worked examples, and diagrams.
3. **SaveMyExams** (`resources/md/savemyexams/`) — use for question wording and mark-scheme style only, not as a primary content source.
4. **Moshikur** (`resources/md/moshikur/`) — concise notes; use to fill gaps after Textbook.
5. **Thinka** (`resources/md/thinka/`) — supplementary detail only; use when all above sources leave a gap.
6. **Pseudocode Pro / Moshikur pseudocode** (`resources/md/pseudocode_pro/`, `resources/md/moshikur_pseudocode/`) — primary source for pseudocode examples and worked algorithm exercises.
7. **Past papers** (`resources/scraped/$slug/past-papers.md`, `resources/md/past-papers/`) — primary source for past-paper questions in `questions.md`; always cross-check answers against the mark scheme.

## Rules (both stages)

- Do not contradict resource files unless correcting a clear factual error.
- Do not invent content that cannot be mapped to a 9618 syllabus objective.
- If resource coverage is too limited to complete the topic, stop and ask the user what to do.
- Log any content gaps or missing visuals in `gaps.md` before proceeding.
