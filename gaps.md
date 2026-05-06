# Content Gaps — Cambridge 9618

Log ALL gaps here immediately when found. Do not wait until a topic is finished.

**Status values:** Open | Closed

---

## How to Log a Gap

```
### {slug} — {brief description}
- **Status:** Open
- **Topic:** {slug}
- **Type:** Content Gap | Visual Placeholder | Past Paper Missing | Resource Missing
- **Description:** What is missing and why it matters for exam coverage
- **Action:** What needs to be done to resolve it
- **Logged:** {YYYY-MM-DD}
```

---

## Open Gaps

### data-representation — Binary column weighting diagram
- **Status:** Open
- **Topic:** data-representation
- **Type:** Visual Placeholder
- **Description:** Textbook references a column weighting table for 8-bit binary (128 | 64 | 32 | 16 | 8 | 4 | 2 | 1) and a separate two's complement column weighting diagram with the sign bit (−128 | 64 | 32 | 16 | 8 | 4 | 2 | 1). These appear as rendered images in the PDF; the markdown source contains no table representation.
- **Action:** Content creator must reproduce both as plain markdown tables in notes.md.
- **Logged:** 2026-04-26

### data-representation — BCD packed vs unpacked storage layout
- **Status:** Open
- **Topic:** data-representation
- **Type:** Visual Placeholder
- **Description:** Textbook illustrates two storage methods for BCD using a layout diagram for the denary number 3165. The markdown source contains a `[VISUAL NEEDED]` stub; no renderable SVG exists.
- **Action:** Produce a binary-diagram SVG showing packed BCD (0101 0010, one byte) vs unpacked BCD (0000 0101 / 0000 0010, two bytes) for denary 52. Replace the `diagram-placeholder` block in `frontend/topics/data-representation/index.html` once the SVG is ready.
- **HTML Placeholder:** `[VISUAL NEEDED: binary-diagram — packed BCD vs unpacked BCD — page: topics/data-representation/index.html]`
- **Logged:** 2026-04-26

### data-representation — ASCII code table
- **Status:** Open
- **Topic:** data-representation
- **Type:** Visual Placeholder
- **Description:** Textbook references Table 1.5 (partial ASCII code table, control codes removed) and Table 1.6 (extended ASCII). These are image-only in the PDF source; the markdown contains only the caption text. Candidates need a representative extract to recognise patterns (e.g. 'A'=65, 'a'=97, '0'=48) and the uppercase/lowercase bit-6 relationship.
- **Action:** Content creator must include a representative ASCII subset table (at minimum: digits 0–9, A–Z, a–z with key codes) in notes.md. Full table not required; Cambridge states candidates are not expected to memorise particular character codes.
- **Logged:** 2026-04-26

### data-representation — Memory dump table (hexadecimal use)
- **Status:** Open
- **Topic:** data-representation
- **Type:** Visual Placeholder
- **Description:** Textbook references Table 1.4 (memory dump example showing memory addresses and hexadecimal content) as a rendered image. The markdown source contains only the caption. This table is used to illustrate why hexadecimal is preferred over binary for memory dumps.
- **Action:** Content creator must create a representative memory dump table (address | hex content | binary equivalent) in notes.md to illustrate the practical application of hexadecimal.
- **Logged:** 2026-04-26

---

## Closed Gaps

*(Move entries here once resolved, with a **Resolved:** date.)*
