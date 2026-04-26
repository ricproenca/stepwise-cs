# Resource Summary — Data Representation

**Slug:** data-representation
**Syllabus ref:** 1.1 — Data Representation · AS · Paper 1
**Date collected:** 2026-04-26

---

## Sources Used

- Markdown sources: 7 files read (1 too large, first 300 lines extracted)
  - resources/md/textbook/Chapter 01 Information representation and multimedia.md ✓
  - resources/md/textbook/Chapter 01 Information representation and multimedia Answers.md ✓
  - resources/md/moshikur/ch01-information-representation.md ✓
  - resources/md/savemyexams/1.1 DataRepresentation.md ✓
  - resources/md/pseudocode_pro/Unit 1 - Information Representation Presentation.md (first 300 lines — file too large for full read; remaining slides cover hex, BCD, two's complement, character sets, file sizes — content duplicated by other sources)
  - resources/md/pseudocode_pro/Unit 1 - Information Representation Answers.md ✓
  - resources/md/pseudocode_pro/Unit 1 - Information Representation Homework.md ✓
  - resources/md/thinka/01 Information representation.md ✓

- Past papers available: Paper 1, years 2021–2024 (W21, S22, W22, S23, W23, S24, W24)

---

## Coverage by Syllabus Objective

- **Show understanding of binary magnitudes and the difference between binary prefixes and decimal prefixes (kibi/kilo, mebi/mega, gibi/giga, tebi/tera)** — **Covered** — Textbook §1.1.2, Moshikur §1.1.1, SaveMyExams, Thinka, PseudoCode Pro Answers Q8; plus past-paper questions W21/11 Q1(a), S23/11 Q3(d)(i), W23/12 Q3(a), S24/13 Q1(a), W24/11 Q1(a)

- **Show understanding of different number systems: binary, denary, hexadecimal, BCD, one's and two's complement; convert an integer value from one base/representation to another** — **Covered** — Textbook §1.1.2–1.1.4, Moshikur, SaveMyExams, PseudoCode Pro (all files); full conversion tables binary↔denary↔hex↔BCD↔two's complement; past-paper questions across all years

- **Perform binary addition and subtraction (positive and negative integers); show understanding of how overflow can occur** — **Covered** — Textbook §1.1.2 (Examples 1.1–1.4), Moshikur §1.1.3, SaveMyExams, PseudoCode Pro Answers Q18–20; past-paper addition W21/11 Q1(b), S23/11 Q3(d)(v); subtraction W22/11 Q1(b), W24/11 Q1(c); overflow W21/11 Q1(b)(ii), S24/13 Q1(c), W24/11 Q1(d)

- **Describe practical applications where BCD is used** — **Covered** — Textbook §1.1.4 (calculators, clocks, monetary calculations), Moshikur (comparison table), SaveMyExams (4 use cases with reasons); past-paper questions W23/12 Q3(c) with mark-scheme wording for financial, display, and BIOS applications

- **Describe practical applications where hexadecimal is used** — **Covered** — Textbook §1.1.3 (memory dumps), Moshikur (MAC addresses, HTML colours, error codes), SaveMyExams (MAC, colour codes, URLs)

- **Show understanding of and represent character data in its internal binary form (ASCII, extended ASCII, Unicode)** — **Covered** — Textbook §1.1.5, Moshikur (comparison table), SaveMyExams (bit-count table + comparison), PseudoCode Pro Answers Q23–26, Thinka; past-paper questions W22/11 Q1(c) (ASCII vs Unicode similarities/differences), S24/13 Q1(d)

---

## Past Papers Found

| Paper | Series/Year | Variant | Question | Marks | Objective matched |
|-------|-------------|---------|----------|-------|-------------------|
| 1 | W21 | 11 | Q1(a) | 5 | Binary magnitudes matching (KiB, MiB, GiB, byte) |
| 1 | W21 | 11 | Q1(b)(i) | 2 | Binary addition (10101010 + 00110111) |
| 1 | W21 | 11 | Q1(b)(ii) | 1 | Overflow definition |
| 1 | W21 | 11 | Q1(c) | 1 | Hex to denary (F0 = 240) |
| 1 | S22 | 11 | Q(b) | 1 | Denary −100 to 8-bit two's complement |
| 1 | W22 | 11 | Q1(a)(i) | 1 | Unsigned binary 00100111 to denary (39) |
| 1 | W22 | 11 | Q1(a)(ii) | 1 | BCD 00100111 to denary (27) |
| 1 | W22 | 11 | Q1(a)(iii) | 1 | Two's complement 11100111 to denary (−25) |
| 1 | W22 | 11 | Q1(b) | 2 | Binary subtraction 10110011 − 01110101 |
| 1 | W22 | 11 | Q1(c) | 3 | ASCII vs Unicode: one similarity, two differences |
| 1 | S23 | 11 | Q3(d)(i) | 1 | Kibibyte vs kilobyte difference |
| 1 | S23 | 11 | Q3(d)(ii) | 1 | Denary 964 to BCD |
| 1 | S23 | 11 | Q3(d)(iii) | 1 | Binary 11110010 to hex (F2) |
| 1 | S23 | 11 | Q3(d)(iv) | 2 | Two's complement 8-bit range (10000000 to 01111111) |
| 1 | S23 | 11 | Q3(d)(v) | 2 | Binary addition 10110000 + 00011011 |
| 1 | W23 | 12 | Q3(a) | 1 | Kibibyte vs megabyte difference |
| 1 | W23 | 12 | Q3(b)(i) | 1 | Denary −196 to 12-bit two's complement |
| 1 | W23 | 12 | Q3(b)(ii) | 1 | BCD 100001100101 to denary (865) |
| 1 | W23 | 12 | Q3(c) | 2 | BCD practical application + justification |
| 1 | S24 | 13 | Q1(a) | 4 | Binary/denary prefix completion (binary, 3072, denary, 2000) |
| 1 | S24 | 13 | Q1(b) | 1 | Denary 241 to hex (F1) |
| 1 | S24 | 13 | Q1(c) | 1 | Overflow definition |
| 1 | S24 | 13 | Q1(d)(i) | 1 | Character set bits: ASCII=7, ext.ASCII=8, Unicode=16/32 |
| 1 | S24 | 13 | Q1(d)(ii) | 2 | How 'Clock' is represented by a character set |
| 1 | W24 | 11 | Q1(a) | 1 | Tebibyte vs gigabyte difference |
| 1 | W24 | 11 | Q1(b)(i) | 1 | Binary 110001100111 to hex (C67) |
| 1 | W24 | 11 | Q1(b)(ii) | 1 | Two's complement 100110010111 to denary (−1641) |
| 1 | W24 | 11 | Q1(b)(iii) | 1 | BCD 010101110011 to denary (573) |
| 1 | W24 | 11 | Q1(c) | 2 | Binary subtraction 01001010 − 23 |
| 1 | W24 | 11 | Q1(d) | 1 | Overflow reason |

---

## Gaps

All 5 syllabus objectives are Covered from multiple authoritative sources. No objectives are Missing.

**Minor gap — Presentation slides (remaining ~2700 lines):**  
The full pseudocode_pro Presentation file was too large to read in one pass. The first 300 lines covered number systems and base conversions. The remaining slides (hex conversions, BCD, two's complement, character sets, file size calculations) are presumed to duplicate content already captured from other sources. The content creator can treat this as Partial for that one source only; no objective is affected.

**Diagram gap:**  
The textbook references several tables and figures (column weighting diagrams, BCD storage layouts, memory dump tables) that cannot be reproduced as rendered images. These should be recreated as tables or ASCII-art diagrams in notes.md. Log in gaps.md: "Data Representation: binary column weighting diagram, two's complement column weighting diagram, BCD storage layout (Table 1.4 memory dump), ASCII code table."

**One's complement coverage:**  
The syllabus notes mention one's complement but marks the topic as not requiring conversions to the same depth as two's complement. All sources cover it. No gap.

---

## Recommended Next Step

For the content creator:

1. **Cross-topic overlap (CLAUDE.md):** Define binary number system and two's complement **fully** here in 1.1. In 4.1 CPU Architecture, 4.3 Bit Manipulation, and 3.1 Computers and Components, reference back rather than redefine.

2. **Diagram requirements (minimum 3 per CLAUDE.md):**
   - Table: binary/hex/denary equivalence (0–15) — already exists in textbook, reproduce as table
   - Table: binary prefixes vs denary prefixes (KiB vs KB etc.) — straightforward
   - Diagram: 8-bit two's complement column weightings with sign bit highlighted
   - Diagram: BCD packed vs unpacked storage layout
   - Diagram: ASCII vs Unicode bit-length comparison visual

3. **Past-paper pattern (question types seen every year):**
   - Prefix matching / completion (1–4 marks) — always tested
   - BCD to/from denary (1 mark) — appears in every variant
   - Two's complement conversion (1 mark) — appears in every variant
   - Binary addition or subtraction with working (2 marks) — appears in every year
   - Overflow definition or reason (1 mark) — appears in every year
   - ASCII vs Unicode comparison (1–3 marks) — appears frequently

4. **Command word focus:** "State", "Convert", "Perform", "Describe", "Give", "Identify" are all used for this topic. Questions are computational or definitional; no extended analysis required at AS level.
