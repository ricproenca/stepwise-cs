# Cambridge 9618 Paper Analysis Plan

## Objective
Analyse all 9618 exam papers and map questions to the syllabus structure. Create one pair of files (questions + answers) per paper per year.

Run: `/paper-analyser [paper] [year]` — e.g. `/paper-analyser 1 2024`

The skill reads the QP and MS markdown files for the specified paper and year, maps every sub-question to a syllabus slug, and writes the output files listed below. Run once per paper per year; process all four papers for a year before moving to the next year.

## Paper Overview

| Paper | Level | Type | Duration | Topics |
|-------|-------|------|----------|--------|
| Paper 1 | AS | Written theory | 1h 30m | 1–8 (sections 1.1–8.3) |
| Paper 2 | AS | Practical on-screen | 2h | 9–12 (sections 9.1–12.3) |
| Paper 3 | A Level | Written theory | 1h 30m | 13–18 (sections 13.1–18.1) |
| Paper 4 | A Level | Practical on-screen | 2h | 19–20 (sections 19.1–20.2) |

---

## Files to Process

Source markdown files are in `resources/md/past-papers/paper [N]/[year]/`.

### Input Files
File naming: `9618_{series}{year2digit}_{type}_{variant}.md`
- Series: `s` = May/June · `w` = Oct/Nov
- Type: `qp` = question paper · `ms` = marking scheme
- Example: `9618_s24_qp_11.md` = May/June 2024, variant 11

### Output Files (Per Paper Per Year)
| File | Description |
|------|-------------|
| `resources/md/past-papers/paper [N]/[year]/questions.md` | Question mapping table |
| `resources/md/past-papers/paper [N]/[year]/answers.md` | Marking scheme content by syllabus |

---

## Output File Structure

### Questions File (`questions.md`)
Question mapping table with columns:
- Paper (e.g., S25 V1)
- Question (e.g., Q1)
- Alinea (e.g., a, b, c)
- Sub-alinea (e.g., i, ii, iii)
- Marks
- Topic
- Sub-topic
- Sub-sub-topic
- Difficulty (AO1, AO2, AO3)
- Description (one-sentence summary)

### Answers File (`answers.md`)
Marking scheme content organised by syllabus structure:
- Topic → Sub-topic → Sub-sub-topic
- Contains key answers, expected responses, and mark allocations
- **Question headers use the description from the questions file** instead of question references (e.g., "Q1a")
- **Deduplication**: Consolidate questions with similar/identical answers into a single entry

---

## Syllabus Coverage Per Paper

### Paper 1 — AS Level Theory (Topics 1–8)

#### 1. Data Representation
- 1.1 Data Representation (`data-representation`)

#### 1. Multimedia and Compression
- 1.2 Multimedia (`multimedia`)
- 1.3 Compression (`compression`)

#### 2. Networks
- 2.1 Networks including the internet (`networks-internet`)

#### 3. Hardware
- 3.1 Computers and their components (`computers-components`)
- 3.2 Logic Gates and Logic Circuits (`logic-gates-circuits`)

#### 4. Processor Architecture
- 4.1 CPU Architecture (`cpu-architecture`)
- 4.2 Assembly Language (`assembly-language`)
- 4.3 Bit Manipulation (`bit-manipulation`)

#### 5. System Software
- 5.1 Operating Systems (`operating-systems`)
- 5.2 Language Translators (`language-translators`)

#### 6. Security and Integrity
- 6.1 Data Security (`data-security`)
- 6.2 Data Integrity (`data-integrity`)

#### 7. Ethics
- 7.1 Ethics and Ownership (`ethics-ownership`)

#### 8. Databases
- 8.1 Database Concepts (`database-concepts`)
- 8.2 DBMS (`dbms`)
- 8.3 DDL and DML (`ddl-dml`)

---

### Paper 2 — AS Level Practical (Topics 9–12)

#### 9. Problem Solving
- 9.1 Computational Thinking (`computational-thinking`)
- 9.2 Algorithms AS (`algorithms-as`)

#### 10. Data Structures
- 10.1 Data Types and Records (`data-types-records`)
- 10.2 Arrays (`arrays`)
- 10.3 Files (`files-as`)
- 10.4 Abstract Data Types intro (`adt-intro`)

#### 11. Programming
- 11.1 Programming Basics (`programming-basics`)
- 11.2 Constructs (`constructs`)
- 11.3 Structured Programming (`structured-programming`)

#### 12. Software Development
- 12.1 Development Lifecycle (`development-lifecycle`)
- 12.2 Program Design (`program-design`)
- 12.3 Testing and Maintenance (`testing-maintenance`)

---

### Paper 3 — A Level Theory (Topics 13–18)

#### 13. Data and File Representation
- 13.1 User-defined Data Types (`user-defined-types`)
- 13.2 File Organisation and Access (`file-organisation`)
- 13.3 Floating-point Numbers (`floating-point`)

#### 14. Communications and Networking
- 14.1 Protocols (`protocols`)
- 14.2 Circuit and Packet Switching (`switching`)

#### 15. Hardware and Virtual Machines
- 15.1 Processors, Parallel Processing and Virtual Machines (`processors-vm`)
- 15.2 Boolean Algebra and Logic Circuits (`boolean-algebra`)

#### 16. System Software
- 16.1 Purposes of an Operating System (`os-purposes`)
- 16.2 Translation Software (`translation-software`)

#### 17. Security
- 17.1 Encryption, Protocols and Digital Certificates (`encryption-certificates`)

#### 18. Artificial Intelligence
- 18.1 Artificial Intelligence (`artificial-intelligence`)

*Note: Paper 3 also assesses Programming Paradigms 20.1 — low-level and declarative theory only (not OOP/imperative).*

---

### Paper 4 — A Level Practical (Topics 19–20)

#### 19. Algorithms and Data Structures
- 19.1 Algorithms A Level (`algorithms-alevel`)
- 19.2 Recursion (`recursion`)

#### 20. Programming
- 20.1 Programming Paradigms — OOP and Imperative only (`programming-paradigms`)
- 20.2 File Processing and Exception Handling (`file-processing-exceptions`)

*Note: Low-level and declarative paradigms (20.1) are theory only — assessed in Paper 3, not Paper 4.*

---

## Assessment Objectives
| Code | Description | Weighting |
|------|-------------|-----------|
| AO1 | Demonstrate knowledge and understanding of the principles and concepts of computer science | ~40% |
| AO2 | Apply knowledge and understanding to familiar and unfamiliar situations | ~40% |
| AO3 | Analyse problems and design, evaluate and make reasoned judgements about computing solutions | ~20% |

---

## Processing Steps

All steps are handled by `/paper-analyser [paper] [year]`. For reference:

1. Discover QP and MS markdown files in `resources/md/past-papers/paper [N]/[year]/`
2. Extract question structure (Q#, alineas, sub-alineas, marks) from each QP
3. Extract mark-scheme content from each MS
4. Map each sub-question to a syllabus slug and sub-topic
5. Assess AO1/AO2/AO3 difficulty and write a one-sentence description
6. **Deduplicate answers**: merge questions with similar/identical answers across variants
7. Write `planning/past-papers/paper[N]/[year]/questions.md`
8. Write `planning/past-papers/paper[N]/[year]/answers.md` organised by syllabus
9. Update this file (year checklist + Completed Files table)

---

## Years to Process

### Paper 1 (AS Theory)
- [x] 2025 (S25, W25)
- [x] 2024 (S24, W24)
- [x] 2023 (S23, W23)
- [x] 2022 (S22, W22)
- [x] 2021 (W21, S21)
- [ ] 2020 (W20, S20)

### Paper 2 (AS Practical)
- [ ] 2025 (S25)
- [ ] 2024 (W24, S24)
- [ ] 2023 (W23, S23)
- [ ] 2022 (W22, S22)
- [ ] 2021 (W21, S21)
- [ ] 2020 (W20, S20)

### Paper 3 (A Level Theory)
- [ ] 2025 (S25)
- [ ] 2024 (W24, S24)
- [ ] 2023 (W23, S23)
- [ ] 2022 (W22, S22)
- [ ] 2021 (W21, S21)
- [ ] 2020 (W20, S20)

### Paper 4 (A Level Practical)
- [ ] 2025 (S25)
- [ ] 2024 (W24, S24)
- [ ] 2023 (W23, S23)
- [ ] 2022 (W22, S22)
- [ ] 2021 (W21, S21)
- [ ] 2020 (W20, S20)

---

## Completed Files

### Paper 1 (AS Theory)
| Year | Questions File | Answers File |
|------|---------------|--------------|
| 2025 (S25, W25) | `resources/md/past-papers/paper 1/2025/questions.md` | `resources/md/past-papers/paper 1/2025/answers.md` |
| 2024 (S24, W24) | `resources/md/past-papers/paper 1/2024/questions.md` | `resources/md/past-papers/paper 1/2024/answers.md` |
| 2023 (S23, W23) | `resources/md/past-papers/paper 1/2023/questions.md` | `resources/md/past-papers/paper 1/2023/answers.md` |
| 2022 (S22, W22) | `resources/md/past-papers/paper 1/2022/questions.md` | `resources/md/past-papers/paper 1/2022/answers.md` |
| 2021 (S21, W21) | `resources/md/past-papers/paper 1/2021/questions.md` | `resources/md/past-papers/paper 1/2021/answers.md` |

### Paper 2 (AS Practical)
| Year | Questions File | Answers File |
|------|---------------|--------------|
| — | — | — |

### Paper 3 (A Level Theory)
| Year | Questions File | Answers File |
|------|---------------|--------------|
| — | — | — |

### Paper 4 (A Level Practical)
| Year | Questions File | Answers File |
|------|---------------|--------------|
| — | — | — |

---

## Master Consolidated Files (Target)
| File | Description |
|------|-------------|
| `resources/md/past-papers/master_paper_1.md` | All Paper 1 questions and answers aggregated by topic/sub-topic (all years) |
| `resources/md/past-papers/master_paper_2` | All Paper 2 questions and answers aggregated by topic/sub-topic (all years) |
| `resources/md/past-papers/master_paper_3` | All Paper 3 questions and answers aggregated by topic/sub-topic (all years) |
| `resources/md/past-papers/master_paper_4` | All Paper 4 questions and answers aggregated by topic/sub-topic (all years) |
