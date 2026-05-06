# Content Standards — Cambridge 9618

Apply these standards throughout all content generation tasks (content-creator Steps 3–7).

## Syllabus

- Cambridge AS & A Level Computer Science, syllabus code 9618
- Follow the current published syllabus learning objectives exactly
- Tag every page with level (AS or A Level) and paper (1–4) as recorded in queue.md

## Syllabus Mapping

- At the end of notes.md, include a Syllabus Coverage checklist
- Each bullet must map to one 9618 syllabus objective covered
- Use exact syllabus wording where possible
- Do not include content that cannot be mapped to a syllabus objective

## Audience

- Students aged 16–18 worldwide
- Mixed experience: some learning a topic for the first time, others revising
- Do not assume knowledge beyond the 9618 syllabus

## Content Standards

- Explanations must be exam-accurate and suitable for use in answers
- Use concrete, specific examples
- Include real-world applications where relevant
- Distinguish clearly between what students must know and what helps understanding
- Flag common misconceptions and typical mark losses
- Use a short Real-World Analogy block for abstract concepts where it genuinely helps
- Do not let the analogy replace technical terminology

## Exam Traps

- Warn students against vague wording
- Do not use "fast" or "better" without technical qualification
- Distinguish clearly between memory and storage
- Use precise technical terms in definitions

## Definition Rules

- Definitions must be short, technical, and mark-scheme accurate
- No examples inside definitions
- Explanations must be mark-point separable — each point earns one mark independently

## Tone and Style

- Direct, clear, and student-friendly
- No filler or motivational phrasing
- No casual wording such as "basically" or "in simple terms"
- Use the language of the mark scheme where possible

## Format

- Output clean markdown only
- Use headings, tables, and code blocks where they help clarity
- Use Cambridge 9618 pseudocode for algorithms and code examples
- Refer to `resources/cambridge-pseudocode.md` for the correct dialect
- Make the content publication-ready

## Visuals

- Visuals are required in notes.md — they are not optional extras
- Use visuals for structure and relationships; use text for precision and reasoning
- Every concept with a natural spatial, sequential, or comparative form must include a visual
- Minimum 3 visuals per topic (diagrams or placeholders)
- See `.claude/skills/references/diagram-specs.md` for types, comment format, and placeholder syntax

## Answer Length Rule

- Keep answers concise and topic-appropriate
- Match detail to marks or complexity
- Avoid unnecessary repetition

## Consistency Check

- Use consistent terminology throughout
- Avoid conflicting definitions or processes

## notes.md Structure Rules

- Headings match syllabus numbering from `syllabus-scope.md` exactly (`## X.X.1`, `## X.X.2`, …)
- Cambridge tone: precise, no filler, exam-ready language
- No prohibited terms (CLAUDE.md): "basically", "in simple terms", "fast/better" without qualification, "etc.", motivational filler
- Every technical term defined on first use
- At least one worked example per calculation-based objective
- Each H2 section must open with 1–3 sentences of factual context: what the concept covers, why it is examined, and any real-world anchor
- Add a one-sentence concept-bridge before each H3 subsection showing how ideas connect
- End each H2 section with a `> **Key Takeaway:**` blockquote containing 2–4 exam-critical bullets in mark-scheme language
