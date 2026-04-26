# CS Learning Platform — Cambridge AS & A Level Computer Science 9618
## Project Plan & Build Instructions

---

## Overview

A three-stage pipeline to build a Cambridge AS & A Level Computer Science (9618) revision website covering the full syllabus (sections 1–12 for AS Level, sections 13–20 for A Level). You manually trigger each stage per topic using Claude Code.

**Pipeline:** Collect Resources → Create Content → Build HTML Pages

**Storage format:** Markdown throughout — human-readable, reviewable, git-friendly, and Claude Code handles it natively.

---

## Project Structure

```
9618-cs-frontend/
│
├── CLAUDE.md                              # Root instructions for Claude Code
├── queue.md                               # Topic progress tracker ([x] done / [ ] pending / [~] in progress)
├── gaps.md                                # Log of content gaps and visual placeholders
│
├── .claude/
│   └── skills/
│       ├── resource-collector.md          # Skill: scrape websites + extract PDFs
│       ├── content-creator.md             # Skill: notes, questions, glossary
│       └── frontend-builder.md            # Skill: HTML pages from content
│
├── design-system/
│   ├── style.css                          # CSS variables, typography, layout
│   ├── components.css                     # Reusable classes (cards, tables, callouts)
│   └── design-tokens.md                  # Documents design system for the skill
│
├── resources/
│   ├── cambridge-pseudocode.md            # Cambridge 9618 pseudocode reference (required by content-creator)
│   ├── pdfs/                              # Drop your PDFs here — populate BEFORE running pipeline
│   │   ├── textbook.pdf
│   │   ├── past-papers/
│   │   └── marking-schemes/
│   └── scraped/                           # Auto-populated by resource collector
│       └── {topic-slug}/
│           ├── pdf-extracts.md
│           ├── web-moshikur.md
│           ├── web-physicsandmathstutor.md
│           ├── web-isaaccomputerscience.md
│           ├── web-papersdock.md
│           └── index.md                   # Summary + gap report
│
├── content/
│   └── {topic-slug}/                      # Auto-populated by content creator
│       ├── meta.md                        # Topic metadata
│       ├── notes.md                       # Full revision notes with diagram specs
│       ├── glossary.md                    # Terms and definitions
│       └── questions.md                   # Questions with mark schemes
│
└── frontend/
    ├── index.html                         # Homepage / topic list
    ├── assets/
    │   ├── style.css
    │   ├── components.css
    │   └── main.js
    └── topics/
        └── {topic-slug}/
            ├── index.html                 # Notes page
            ├── questions.html             # Practice questions
            └── glossary.html             # Glossary page
```

---

## Full 9618 Syllabus — Chapters, Topics, and Subtopics

### AS Level Content (Paper 1: sections 1–8 | Paper 2: sections 9–12)

---

#### Chapter 1 — Information Representation

**1.1 Data Representation**
- 1.1.1 Binary magnitudes and prefixes (kibi/kilo, mebi/mega, gibi/giga, tebi/tera)
- 1.1.2 Number systems (binary, denary, hexadecimal, BCD, one's complement, two's complement)
- 1.1.3 Number base conversion (integer values between bases/representations)
- 1.1.4 Binary addition and subtraction (positive and negative integers, overflow)
- 1.1.5 Practical applications of BCD and hexadecimal
- 1.1.6 Character sets and encoding (ASCII, extended ASCII, Unicode)

**1.2 Multimedia**
- 1.2.1 Bitmap graphics (pixel, file header, image resolution, screen resolution, colour depth/bit depth)
- 1.2.2 Bitmap file size calculations
- 1.2.3 Effects of changing image resolution and colour depth on quality and file size
- 1.2.4 Vector graphics (drawing object, property, drawing list)
- 1.2.5 Bitmap vs vector — justifying choice for a given task
- 1.2.6 Sound representation and encoding (sampling, sampling rate, sampling resolution, analogue and digital)
- 1.2.7 Impact of changing sampling rate and resolution on file size and accuracy

**1.3 Compression**
- 1.3.1 Need for compression and examples of use
- 1.3.2 Lossy vs lossless compression — justifying method for a given situation
- 1.3.3 Compression of text files, bitmap images, vector graphics, and sound files
- 1.3.4 Run-length encoding (RLE)

---

#### Chapter 2 — Communication

**2.1 Networks Including the Internet**
- 2.1.1 Purpose and benefits of networking devices
- 2.1.2 LAN and WAN characteristics
- 2.1.3 Client-server and peer-to-peer models (roles, benefits, drawbacks, justification)
- 2.1.4 Thin-client and thick-client (differences and implications)
- 2.1.5 Network topologies — bus, star, mesh, hybrid (packet transmission, justification)
- 2.1.6 Cloud computing (public and private clouds, benefits and drawbacks)
- 2.1.7 Wireless vs wired networks (copper cable, fibre-optic, radio/WiFi, microwaves, satellites)
- 2.1.8 LAN hardware (switch, server, NIC, WNIC, WAP, cables, bridge, repeater)
- 2.1.9 Role and function of a router
- 2.1.10 Ethernet and collision detection/avoidance (CSMA/CD)
- 2.1.11 Bit streaming (real-time and on-demand, bit rates and broadband speed)
- 2.1.12 WWW vs the internet
- 2.1.13 Internet hardware (modems, PSTN, dedicated lines, cell phone network)
- 2.1.14 IP addresses (IPv4, IPv6, subnetting, public vs private, static vs dynamic)
- 2.1.15 URLs and Domain Name Service (DNS)

---

#### Chapter 3 — Hardware

**3.1 Computers and Their Components**
- 3.1.1 Input, output, primary memory, and secondary storage — need and purpose
- 3.1.2 Embedded systems (benefits and drawbacks)
- 3.1.3 Hardware devices (laser printer, 3D printer, microphone, speakers, hard disk, SSD/flash, optical, touchscreen, VR headset)
- 3.1.4 Buffers — purpose and use
- 3.1.5 RAM vs ROM (differences and use in devices)
- 3.1.6 SRAM vs DRAM (differences and appropriate use cases)
- 3.1.7 PROM, EPROM, EEPROM (differences)
- 3.1.8 Monitoring and control systems (monitoring vs control, sensors, actuators, feedback)

**3.2 Logic Gates and Logic Circuits**
- 3.2.1 Logic gate symbols — NOT, AND, OR, NAND, NOR, XOR
- 3.2.2 Functions of NOT, AND, OR, NAND, NOR, XOR (EOR) gates
- 3.2.3 Truth tables for each logic gate
- 3.2.4 Constructing logic circuits (from problem statement, logic expression, truth table)
- 3.2.5 Constructing truth tables (from problem statement, logic circuit, logic expression)
- 3.2.6 Constructing logic expressions (from problem statement, logic circuit, truth table)

---

#### Chapter 4 — Processor Fundamentals

**4.1 Central Processing Unit (CPU) Architecture**
- 4.1.1 Von Neumann model and stored program concept
- 4.1.2 Registers — general purpose vs special purpose (PC, MDR, MAR, ACC, IX, CIR, Status Register)
- 4.1.3 ALU, Control Unit, system clock, Immediate Access Store (IAS)
- 4.1.4 Address bus, data bus, control bus — data transfer between components
- 4.1.5 Factors affecting CPU performance (processor type, number of cores, bus width, clock speed, cache memory)
- 4.1.6 Ports and peripheral connections (USB, HDMI, VGA)
- 4.1.7 Fetch-Execute cycle stages (register transfer notation)
- 4.1.8 Interrupts (causes, applications, ISR, detection during F-E cycle, handling)

**4.2 Assembly Language**
- 4.2.1 Relationship between assembly language and machine code
- 4.2.2 Two-pass assembler (stages, applied to a program)
- 4.2.3 Tracing assembly language programs
- 4.2.4 Instruction groups (data movement, I/O, arithmetic, unconditional/conditional, compare)
- 4.2.5 Addressing modes (immediate, direct, indirect, indexed, relative)
- 4.2.6 Instruction set reference (LDM, LDD, LDI, LDX, LDR, MOV, STO, ADD, SUB, INC, DEC, JMP, CMP, CMI, JPE, JPN, IN, OUT, END)

**4.3 Bit Manipulation**
- 4.3.1 Binary shifts (logical, arithmetic, cyclic — left and right)
- 4.3.2 Bit manipulation to monitor/control a device
- 4.3.3 Bit masking — testing and setting a bit (AND, XOR, OR, LSL, LSR instructions)

---

#### Chapter 5 — System Software

**5.1 Operating Systems**
- 5.1.1 Purpose and need for an Operating System
- 5.1.2 Key OS management tasks (memory, file, security, hardware I/O, process management)
- 5.1.3 Utility software (disk formatter, virus checker, defragmentation, disk repair, file compression, backup)
- 5.1.4 Program libraries (purpose, benefits, DLL files)

**5.2 Language Translators**
- 5.2.1 Assembler, compiler, interpreter — need for each
- 5.2.2 Compiler vs interpreter — benefits, drawbacks, justification
- 5.2.3 Partially compiled and partially interpreted languages (e.g. Java)
- 5.2.4 Integrated Development Environment (IDE) features (coding prompts, syntax checking, prettyprint, debugging tools: single stepping, breakpoints, report window)

---

#### Chapter 6 — Security, Privacy and Data Integrity

**6.1 Data Security**
- 6.1.1 Security, privacy, and integrity — definitions and differences
- 6.1.2 Need for data security and system security
- 6.1.3 Security measures (user accounts, passwords, digital signatures, biometrics, firewall, anti-virus, anti-spyware, encryption)
- 6.1.4 Threats (malware: virus/spyware, hackers, phishing, pharming)
- 6.1.5 Methods to restrict threats
- 6.1.6 Data security methods (encryption, access rights)

**6.2 Data Integrity**
- 6.2.1 Data validation and verification — role in protecting integrity
- 6.2.2 Validation methods (range check, format check, length check, presence check, existence check, limit check, check digit)
- 6.2.3 Verification during data entry (visual check, double entry)
- 6.2.4 Verification during data transfer (parity check — byte and block, checksum)

---

#### Chapter 7 — Ethics and Ownership

**7.1 Ethics and Ownership**
- 7.1.1 Ethics in computing — need and purpose
- 7.1.2 Professional ethical bodies (BCS, IEEE)
- 7.1.3 Acting ethically vs unethically — impact for a given situation
- 7.1.4 Copyright legislation — need and purpose
- 7.1.5 Software licensing types (Free Software Foundation, Open Source Initiative, shareware, commercial)
- 7.1.6 Artificial Intelligence — social, economic and environmental impact and applications

---

#### Chapter 8 — Databases

**8.1 Database Concepts**
- 8.1.1 Limitations of file-based storage and retrieval
- 8.1.2 Features of relational databases addressing file-based limitations
- 8.1.3 Relational database terminology (entity, table, record, field, tuple, attribute, primary key, candidate key, secondary key, foreign key, relationships, referential integrity, indexing)
- 8.1.4 Entity-relationship (E-R) diagrams
- 8.1.5 Normalisation process — 1NF, 2NF, 3NF
- 8.1.6 Determining whether tables are in 3NF
- 8.1.7 Producing a normalised database design

**8.2 Database Management Systems (DBMS)**
- 8.2.1 DBMS features (data management, data dictionary, data modelling, logical schema, data integrity, data security, backup, access rights)
- 8.2.2 DBMS software tools (developer interface, query processor)

**8.3 Data Definition Language (DDL) and Data Manipulation Language (DML)**
- 8.3.1 DDL — role in database structure creation/modification
- 8.3.2 DML — role in queries and data maintenance
- 8.3.3 SQL as the industry standard for DDL and DML
- 8.3.4 SQL DDL statements (CREATE DATABASE, CREATE TABLE with data types: CHARACTER, VARCHAR(n), BOOLEAN, INTEGER, REAL, DATE, TIME; ALTER TABLE, PRIMARY KEY, FOREIGN KEY...REFERENCES)
- 8.3.5 SQL DML queries (SELECT...FROM, WHERE, ORDER BY, GROUP BY, INNER JOIN, SUM, COUNT, AVG)
- 8.3.6 SQL DML data maintenance (INSERT INTO, DELETE FROM, UPDATE)

---

#### Chapter 9 — Algorithm Design and Problem-Solving

**9.1 Computational Thinking Skills**
- 9.1.1 Abstraction — need, benefits, purpose
- 9.1.2 Producing an abstract model (essential details only)
- 9.1.3 Decomposition — breaking problems into sub-problems, concept of program modules

**9.2 Algorithms**
- 9.2.1 Algorithm definition (sequence of defined steps)
- 9.2.2 Identifier tables for data representation
- 9.2.3 Pseudocode — input, process, output
- 9.2.4 Pseudocode — sequence, selection, iteration
- 9.2.5 Documenting algorithms (structured English, flowchart, pseudocode)
- 9.2.6 Writing pseudocode from structured English or flowchart
- 9.2.7 Drawing flowcharts from structured English or pseudocode
- 9.2.8 Stepwise refinement
- 9.2.9 Logic statements in algorithm design

---

#### Chapter 10 — Data Types and Structures

**10.1 Data Types and Records**
- 10.1.1 Appropriate data types (INTEGER, REAL, CHAR, STRING, BOOLEAN, DATE, ARRAY, FILE)
- 10.1.2 Record structures — purpose and pseudocode definition
- 10.1.3 Reading from and saving data to record structures in pseudocode

**10.2 Arrays**
- 10.2.1 Array terminology (index, upper bound, lower bound)
- 10.2.2 Choosing 1D or 2D array for a given task
- 10.2.3 Pseudocode for 1D and 2D arrays
- 10.2.4 Bubble sort in pseudocode
- 10.2.5 Linear search in pseudocode

**10.3 Files**
- 10.3.1 Why files are needed
- 10.3.2 Pseudocode for reading and writing text files (one or more lines)

**10.4 Introduction to Abstract Data Types (ADT)**
- 10.4.1 ADT definition (collection of data and operations)
- 10.4.2 Stack, queue, linked list as ADT examples
- 10.4.3 Key features of stack, queue, linked list — justifying use
- 10.4.4 Using stack, queue, linked list to store data (add, edit, delete)
- 10.4.5 Implementing stack, queue, linked list using arrays

---

#### Chapter 11 — Programming

**11.1 Programming Basics**
- 11.1.1 Implementing pseudocode from flowchart or structured English
- 11.1.2 Pseudocode statements (constants, variables, assignment, arithmetic/logical operators, input/output)
- 11.1.3 Built-in functions and library routines
- 11.1.4 String manipulation functions

**11.2 Constructs**
- 11.2.1 IF statement (with ELSE, nested IF)
- 11.2.2 CASE structure
- 11.2.3 Count-controlled loop (FOR)
- 11.2.4 Post-condition loop (REPEAT...UNTIL)
- 11.2.5 Pre-condition loop (WHILE...ENDWHILE)
- 11.2.6 Choosing the appropriate loop structure for a problem

**11.3 Structured Programming**
- 11.3.1 Defining and using procedures (none, one or more parameters; pass by reference vs by value)
- 11.3.2 When to use a procedure in an algorithm
- 11.3.3 Defining and using functions (return value, used in expressions)
- 11.3.4 When to use a function in an algorithm
- 11.3.5 Terminology (procedure/function header, interface, parameter, argument, return value)
- 11.3.6 Writing efficient pseudocode

---

#### Chapter 12 — Software Development

**12.1 Program Development Life Cycle**
- 12.1.1 Purpose of a development life cycle
- 12.1.2 Development life cycle types (waterfall, iterative, rapid application development / RAD)
- 12.1.3 Principles, benefits, and drawbacks of each life cycle type
- 12.1.4 Stages of the life cycle (analysis, design, coding, testing, maintenance)

**12.2 Program Design**
- 12.2.1 Structure charts — purpose and construction
- 12.2.2 Deriving pseudocode from a structure chart
- 12.2.3 State-transition diagrams

**12.3 Program Testing and Maintenance**
- 12.3.1 Exposing and avoiding faults in programs
- 12.3.2 Error types (syntax, logic, run-time) and correction
- 12.3.3 Testing methods (dry run, walkthrough, white-box, black-box, integration, alpha, beta, acceptance, stub)
- 12.3.4 Test strategy and test plan — need and contents
- 12.3.5 Test data types (normal, abnormal, extreme/boundary)
- 12.3.6 System maintenance types (perfective, adaptive, corrective)
- 12.3.7 Analysing and amending programs to enhance functionality

---

### A Level Content (Paper 3: sections 13–20 | Paper 4: sections 19–20)

---

#### Chapter 13 — Data Representation

**13.1 User-Defined Data Types**
- 13.1.1 Why user-defined types are necessary
- 13.1.2 Non-composite types (enumerated, pointer)
- 13.1.3 Composite data types (set, record, class/object)
- 13.1.4 Designing appropriate user-defined data types for a given problem

**13.2 File Organisation and Access**
- 13.2.1 File organisation methods (serial, sequential with key field, random with record key)
- 13.2.2 File access methods (sequential access, direct access)
- 13.2.3 Hashing algorithms (reading and writing to random/sequential files)

**13.3 Floating-Point Numbers, Representation and Manipulation**
- 13.3.1 Format of binary floating-point real numbers (two's complement)
- 13.3.2 Effects of changing mantissa vs exponent bit allocation
- 13.3.3 Converting binary floating-point to denary and vice versa
- 13.3.4 Normalising floating-point numbers (reasons for normalisation)
- 13.3.5 Approximation, underflow, overflow, and rounding errors

---

#### Chapter 14 — Communication and Internet Technologies

**14.1 Protocols**
- 14.1.1 Why protocols are essential for computer communication
- 14.1.2 Protocol stack — each layer has its own functionality
- 14.1.3 TCP/IP protocol suite — four layers (Application, Transport, Internet, Link), purpose and function
- 14.1.4 Message sending from host to host over the internet
- 14.1.5 Application layer protocols and purposes (HTTP, FTP, POP3, IMAP, SMTP, BitTorrent)

**14.2 Circuit Switching and Packet Switching**
- 14.2.1 Circuit switching (benefits, drawbacks, applicability)
- 14.2.2 Packet switching (benefits, drawbacks, applicability)
- 14.2.3 Router function in packet switching
- 14.2.4 How packet switching passes messages across a network including the internet

---

#### Chapter 15 — Hardware and Virtual Machines

**15.1 Processors, Parallel Processing and Virtual Machines**
- 15.1.1 RISC vs CISC processors (differences, interrupt handling)
- 15.1.2 Pipelining and registers in RISC processors
- 15.1.3 Four basic computer architectures (SISD, SIMD, MISD, MIMD)
- 15.1.4 Massively parallel computers
- 15.1.5 Virtual machines (concept, examples, benefits, limitations)

**15.2 Boolean Algebra and Logic Circuits**
- 15.2.1 Truth tables for logic circuits including half adders and full adders
- 15.2.2 Flip-flops — SR and JK (logic circuit, truth table, role as data storage)
- 15.2.3 Boolean algebra and De Morgan's laws
- 15.2.4 Simplifying logic circuits/expressions using Boolean algebra
- 15.2.5 Karnaugh maps (K-maps) — benefits and solving logic problems

---

#### Chapter 16 — System Software

**16.1 Purposes of an Operating System (OS)**
- 16.1.1 How an OS maximises resource use
- 16.1.2 User interface hiding hardware complexity
- 16.1.3 Process management (multi-tasking, process states: running/ready/blocked)
- 16.1.4 Scheduling routines (round robin, shortest job first, first come first served, shortest remaining time)
- 16.1.5 Kernel as interrupt handler and low-level scheduling
- 16.1.6 Virtual memory, paging, and segmentation (concepts, differences, page replacement, disk thrashing)

**16.2 Translation Software**
- 16.2.1 How an interpreter executes programs without a translated version
- 16.2.2 Stages of compilation (lexical analysis, syntax analysis, code generation, optimisation)
- 16.2.3 Grammar representation (syntax diagrams, Backus-Naur Form / BNF)
- 16.2.4 Reverse Polish Notation (RPN) for expression evaluation

---

#### Chapter 17 — Security

**17.1 Encryption, Encryption Protocols and Digital Certificates**
- 17.1.1 How encryption works (public key, private key, plain text, cipher text)
- 17.1.2 Symmetric key cryptography vs asymmetric key cryptography
- 17.1.3 Sending a private message (public to individual/organisation)
- 17.1.4 Sending a verified message to the public
- 17.1.5 Quantum cryptography (purpose, benefits, drawbacks)
- 17.1.6 SSL/TLS (purpose, use in client-server communication, appropriate situations)
- 17.1.7 Digital certificates (acquisition, use in producing digital signatures)

---

#### Chapter 18 — Artificial Intelligence (AI)

**18.1 Artificial Intelligence**
- 18.1.1 Graphs in AI (purpose, structure, A* and Dijkstra's algorithms for graph searches)
- 18.1.2 Artificial neural networks and machine learning
- 18.1.3 Deep Learning, Machine Learning, Reinforcement Learning — reasons for use
- 18.1.4 Machine learning categories (supervised learning, unsupervised learning)
- 18.1.5 Back propagation of errors and regression methods

---

#### Chapter 19 — Computational Thinking and Problem-Solving

**19.1 Algorithms**
- 19.1.1 Linear search — understanding and algorithm
- 19.1.2 Binary search — understanding, algorithm, conditions for use, performance variation
- 19.1.3 Insertion sort — understanding and algorithm
- 19.1.4 Bubble sort — understanding and algorithm (performance depending on data order)
- 19.1.5 ADTs — finding items in linked list and binary tree
- 19.1.6 ADTs — inserting into stack, queue, linked list, binary tree
- 19.1.7 ADTs — deleting from stack, queue, linked list
- 19.1.8 Graphs as ADTs (key features, justification — no code required)
- 19.1.9 Implementing ADTs from other ADTs (stack, queue, linked list, dictionary, binary tree)
- 19.1.10 Comparing algorithms (Big O notation — time and space complexity)

**19.2 Recursion**
- 19.2.1 Recursion — essential features
- 19.2.2 How recursion is expressed in a programming language
- 19.2.3 Writing and tracing recursive algorithms
- 19.2.4 When recursion is beneficial
- 19.2.5 What a compiler does to translate recursive code (stacks and unwinding)

---

#### Chapter 20 — Further Programming

**20.1 Programming Paradigms**
- 20.1.1 What a programming paradigm is
- 20.1.2 Low-level programming (addressing modes: immediate, direct, indirect, indexed, relative)
- 20.1.3 Imperative/Procedural programming (variables, constructs, procedures, functions)
- 20.1.4 Object-Oriented Programming (OOP) terminology (objects, properties/attributes, methods, classes, inheritance, polymorphism, containment/aggregation, encapsulation, getters, setters, instances)
- 20.1.5 Designing appropriate classes to solve a problem
- 20.1.6 Writing OOP code
- 20.1.7 Declarative programming (facts, rules, satisfying a goal)
- 20.1.8 Writing declarative code

**20.2 File Processing and Exception Handling**
- 20.2.1 File processing operations (open in read/write/append mode, close)
- 20.2.2 Reading and writing records to/from files
- 20.2.3 File processing on serial, sequential, and random files
- 20.2.4 Exceptions and exception handling — importance and appropriate use
- 20.2.5 Writing program code using exception handling

---

### Topic Count Summary

| Level | Chapters | Topics (sections) | Subtopics |
|-------|----------|-------------------|-----------|
| AS Level | 12 (Ch. 1–12) | 27 sections | 115 subtopics |
| A Level | 8 (Ch. 13–20) | 16 sections | 67 subtopics |
| **Total** | **20** | **43** | **182** |

---

### Topic Slugs — Full Reference

| Ref | Title | Slug | Level |
|-----|-------|------|-------|
| 1.1 | Data Representation | `data-representation` | AS |
| 1.2 | Multimedia | `multimedia` | AS |
| 1.3 | Compression | `compression` | AS |
| 2.1 | Networks Including the Internet | `networks-internet` | AS |
| 3.1 | Computers and Their Components | `computers-components` | AS |
| 3.2 | Logic Gates and Logic Circuits | `logic-gates-circuits` | AS |
| 4.1 | CPU Architecture | `cpu-architecture` | AS |
| 4.2 | Assembly Language | `assembly-language` | AS |
| 4.3 | Bit Manipulation | `bit-manipulation` | AS |
| 5.1 | Operating Systems | `operating-systems` | AS |
| 5.2 | Language Translators | `language-translators` | AS |
| 6.1 | Data Security | `data-security` | AS |
| 6.2 | Data Integrity | `data-integrity` | AS |
| 7.1 | Ethics and Ownership | `ethics-ownership` | AS |
| 8.1 | Database Concepts | `database-concepts` | AS |
| 8.2 | Database Management Systems | `dbms` | AS |
| 8.3 | DDL and DML | `ddl-dml` | AS |
| 9.1 | Computational Thinking Skills | `computational-thinking` | AS |
| 9.2 | Algorithms (AS) | `algorithms-as` | AS |
| 10.1 | Data Types and Records | `data-types-records` | AS |
| 10.2 | Arrays | `arrays` | AS |
| 10.3 | Files | `files-as` | AS |
| 10.4 | Abstract Data Types (Intro) | `adt-intro` | AS |
| 11.1 | Programming Basics | `programming-basics` | AS |
| 11.2 | Constructs | `constructs` | AS |
| 11.3 | Structured Programming | `structured-programming` | AS |
| 12.1 | Program Development Life Cycle | `development-lifecycle` | AS |
| 12.2 | Program Design | `program-design` | AS |
| 12.3 | Program Testing and Maintenance | `testing-maintenance` | AS |
| 13.1 | User-Defined Data Types | `user-defined-types` | A Level |
| 13.2 | File Organisation and Access | `file-organisation` | A Level |
| 13.3 | Floating-Point Numbers | `floating-point` | A Level |
| 14.1 | Protocols | `protocols` | A Level |
| 14.2 | Circuit and Packet Switching | `switching` | A Level |
| 15.1 | Processors and Virtual Machines | `processors-vm` | A Level |
| 15.2 | Boolean Algebra and Logic Circuits | `boolean-algebra` | A Level |
| 16.1 | OS Purposes | `os-purposes` | A Level |
| 16.2 | Translation Software | `translation-software` | A Level |
| 17.1 | Encryption and Digital Certificates | `encryption-certificates` | A Level |
| 18.1 | Artificial Intelligence | `artificial-intelligence` | A Level |
| 19.1 | Algorithms (A Level) | `algorithms-alevel` | A Level |
| 19.2 | Recursion | `recursion` | A Level |
| 20.1 | Programming Paradigms | `programming-paradigms` | A Level |
| 20.2 | File Processing and Exception Handling | `file-processing-exceptions` | A Level |

---

## File Format Specifications

### `content/{slug}/meta.md`

```markdown
# Topic Metadata

- **Title:** Information Representation
- **Slug:** information-representation
- **Syllabus Ref:** 1.1
- **Chapter:** Information Representation
- **Last Updated:** 2025-01-15
- **Question Count:** 12
- **Glossary Count:** 18
- **Status:** draft | ready | published
```

### `content/{slug}/notes.md`

```markdown
# 1.1 Information Representation

## 1.1.1 Number Systems

Content here written in full Cambridge revision style...

Diagram specs are embedded as HTML comments:
<!-- DIAGRAM: comparison-table showing decimal vs binary vs hex with example conversions -->
<!-- DIAGRAM: flowchart showing how to convert decimal to binary using repeated division -->

## 1.1.2 Representing Text

Content continues...
<!-- DIAGRAM: binary-diagram showing ASCII encoding of letter 'A' = 01000001 -->
```

### `content/{slug}/glossary.md`

```markdown
# Glossary — Information Representation

## A

### ASCII
**Definition:** A 7-bit character encoding standard that maps 128 characters to unique binary values.
**Example:** The letter 'A' is represented as 65 in decimal, or 01000001 in binary.
**Syllabus Ref:** 1.1.2

---

### Analogue Data
**Definition:** Data that can take any value within a continuous range, as opposed to discrete digital values.
**Example:** Sound waves, temperature readings from a thermometer.
**Syllabus Ref:** 1.1.1

---
```

### `content/{slug}/questions.md`

```markdown
# Practice Questions — Information Representation

---

## Question 1
**Syllabus Ref:** 1.1.1
**Marks:** 2
**Command Word:** Define
**Type:** theory

Define the term 'binary number system'.

### Model Answer
- A number system that uses only two digits: 0 and 1 [1]
- Each digit represents a power of 2, making it suitable for digital circuits [1]

### Examiner Tip
Do not just say "computers use binary". Examiners want a definition that works
independently of computers. Focus on the base-2 nature and the digit set.

---

## Question 2
**Syllabus Ref:** 1.1.1
**Marks:** 4
**Command Word:** Convert
**Type:** calculation

Convert the denary number 156 to binary. Show your working.

### Model Answer
- 156 ÷ 2 = 78 remainder 0
- 78 ÷ 2 = 39 remainder 0
- 39 ÷ 2 = 19 remainder 1
- 19 ÷ 2 = 9 remainder 1
- 9 ÷ 2 = 4 remainder 1
- 4 ÷ 2 = 2 remainder 0
- 2 ÷ 2 = 1 remainder 0
- 1 ÷ 2 = 0 remainder 1
- Reading remainders bottom to top: **10011100** [4 marks — deduct 1 per error]

### Examiner Tip
Always show working. Even if the final answer is wrong, method marks are available.

---
```

---

## File Format Specifications — queue.md

```markdown
# Topic Queue — Cambridge 9618

Status: `[x]` = all three pipeline stages complete | `[ ]` = pending | `[~]` = in progress

Pipeline stages per topic: **R** = Resources | **C** = Content | **H** = HTML

If a topic is marked `[~]`, check which files already exist and generate only the missing ones. Do not regenerate complete files.

---

## AS Level Topics

### 1.1 — Data Representation (`data-representation`)
| R | C | H |
|---|---|---|
| [ ] | [ ] | [ ] |

Resources: `resources/pdfs/textbook.pdf pp.X–X`, `resources/pdfs/past-papers/9618_*`

---

### 1.2 — Multimedia (`multimedia`)
...

(Repeat for all 29 AS topics and 14 A Level topics)
```

---

## File Format Specifications — gaps.md

```markdown
# Content Gaps — Cambridge 9618

Log ALL gaps here immediately. Do not wait until a topic is finished.

Format:
- **Status:** Open | Closed
- **Topic:** {slug}
- **Type:** Content Gap | Visual Placeholder | Past Paper Missing
- **Description:** What is missing and why it matters
- **Action:** What needs to be done to resolve it

---

## Open Gaps

### [slug] — [gap description]
- **Status:** Open
- **Topic:** data-representation
- **Type:** Visual Placeholder
- **Description:** [VISUAL NEEDED: binary-diagram — 8-bit register layout with MSB/LSB labels — page: index.html]
- **Action:** Replace diagram-placeholder div with proper SVG or image artwork

---

## Closed Gaps

(Move entries here when resolved)
```

---

## Step 1: Install Claude Code and Initialise

```bash
# Install Claude Code globally
npm install -g @anthropic-ai/claude-code

# Create and enter project
mkdir 9618-cs-website && cd 9618-cs-website
git init

# Create required tracking files
touch queue.md gaps.md

# Create resource folder structure
mkdir -p resources/pdfs/past-papers resources/pdfs/marking-schemes resources/scraped

# Copy your PDFs into resources/pdfs/ before running the pipeline

# Open Claude Code
claude
```

---

## Step 2: Root `CLAUDE.md`

Create this file at the project root:

```markdown
# 9618 CS Website — Claude Code Project

## Purpose
Build a Cambridge AS & A Level Computer Science (9618) revision website.
Pipeline: collect resources → create content → build HTML pages.
Covers the full syllabus: AS Level (sections 1–12) and A Level (sections 13–20).

## Workflow Rules
1. Always follow the 3-step pipeline. Never skip steps.
2. Never build HTML pages before content files exist.
3. Never create content without resources first.
4. Step outputs:
   - Step 1 → resources/scraped/{topic-slug}/
   - Step 2 → content/{topic-slug}/
   - Step 3 → frontend/topics/{topic-slug}/

## Naming Convention
Topic slugs use kebab-case. See the full topic slug reference table in this project.
Each slug maps to exactly one syllabus section (e.g. 1.1 → data-representation).

## Level Tags
Every topic has a level: AS or A Level.
- AS Level topics appear in Paper 1 (sections 1–8) and Paper 2 (sections 9–12)
- A Level topics appear in Paper 3 (sections 13–20) and Paper 4 (sections 19–20)
- Tag every page with its level and paper so students can filter by exam.

## Design System
- CSS variables are defined in design-system/style.css
- Component classes are in design-system/components.css
- All generated HTML must link to /assets/style.css and /assets/components.css
- Never use inline styles
- Reference design-tokens.md before generating any HTML

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

## Skills
Load the appropriate skill before starting each step:
- Step 1: Read .claude/skills/resource-collector.md
- Step 2: Read .claude/skills/content-creator.md
- Step 3: Read .claude/skills/frontend-builder.md

## Pacing Rule
Work one topic at a time. After completing all outputs for a topic and updating queue.md, STOP and ask the user to review before proceeding to the next topic.

## Completion Checklist
Before marking any topic `[x]` in queue.md, verify ALL of the following:

- [ ] All content files exist: meta.md, notes.md, glossary.md, questions.md
- [ ] notes.md ends with a `## Syllabus Coverage` checklist (one bullet per sub-point, Covered / Partial / Missing)
- [ ] Every syllabus sub-point for the topic is Covered or Partial — none left as Missing without a gaps.md entry
- [ ] All pseudocode uses Cambridge 9618 conventions (← for assignment, OUTPUT, WHILE/ENDWHILE, etc.)
- [ ] Every diagram spec or `[VISUAL NEEDED]` placeholder is present — no concept with a spatial/comparative form left as prose only
- [ ] Any unrenderable diagram is logged in gaps.md
- [ ] Past paper cross-check completed: notes.md answers the real exam questions for this topic
- [ ] Model answers in questions.md match Cambridge mark scheme wording
- [ ] questions.md has 10+ questions with difficulty tags and at least one [Past Paper] question
- [ ] Glossary definitions are ≤ 2 sentences, alphabetically sorted, with Differentiator fields for confused pairs
- [ ] No prohibited terms used (see Prohibited Terms below)
- [ ] HTML pages render correctly — no broken SVGs or missing assets

## Prohibited Terms
Never use the following in any generated content:
- "basically", "in simple terms", "this means that", "simply put"
- "fast" or "better" without technical qualification
- "etc." — list items explicitly or state the list is non-exhaustive
- Motivational filler: "great", "excellent", "now let's look at"

All definitions must be mark-scheme separable — each point earns one mark independently.

## Cross-Topic Overlap Reference
When a concept appears in more than one topic, apply these rules:
- Define the concept in full in the **earliest** section where it appears
- In later sections, reference it briefly and link to the primary section — do not redefine
- In questions.md, change the angle — do not reuse the same question stem

Known overlaps (define in the earlier section listed):

| Concept | Define in | Also referenced in |
|---------|-----------|-------------------|
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

## Scope Note
This CLAUDE.md applies to the 9618-cs-frontend/ project only.
It overrides the parent folder's CLAUDE.md (teacher persona / classroom output style) for all pipeline work.
The teacher-role instructions do not apply when running resource-collector, content-creator, or frontend-builder skills.
```

---

## Step 3: Create the Three Skill Files

### `.claude/skills/resource-collector.md`

```markdown
# Skill: Resource Collector

## Purpose
Collect, extract, and structure learning resources for a given 9618 topic.

## Input
User provides: topic name and slug.

## Source Priority Order
Always apply this hierarchy. Never skip to a lower source if a higher one covers the point:
1. **Local PDFs** (`resources/pdfs/`) — textbook, past papers, mark schemes. Primary source for all topics.
2. **Web scraping** — secondary source; adds breadth and supporting examples.
3. **Syllabus-aligned knowledge** — last resort only; use only to fill gaps not covered by 1 or 2. Log all knowledge-filled gaps in `resources/scraped/{slug}/index.md`.

If `resources/pdfs/` is empty, warn the user and do not proceed. Web scraping alone is insufficient as a primary source.

## Process

### 1. PDF Extraction
Search resources/pdfs/ for all PDF files. Read and extract pages relevant to the topic.
- Match using topic name, syllabus reference, and key technical terms
- Extract content verbatim — preserve all tables, lists, and examples
- Tag every chunk with source filename and page range

### 2. Website Scraping
Scrape the following sources for the topic:
- https://moshikur.com/as-level/
- https://www.physicsandmathstutor.com/computer-science-revision/igcse-caie/
- https://isaaccomputerscience.org/topics/a_level#cie
- https://www.papersdock.com/resources

For each site: extract headings, body text, lists, and structured content.
Strip all navigation, headers, footers, ads, and boilerplate.

### 3. Output Files
Write to: resources/scraped/{topic-slug}/

| File                          | Contents                                  |
|-------------------------------|-------------------------------------------|
| pdf-extracts.md               | All PDF content with source/page tags     |
| web-moshikur.md               | Content scraped from moshikur.com         |
| web-physicsandmathstutor.md   | Content from physicsandmathstutor.com     |
| web-isaaccomputerscience.md   | Content from isaaccomputerscience.org     |
| web-papersdock.md             | Content from papersdock.com               |
| index.md                      | Summary + gap report                      |

### 4. index.md Format
```markdown
# Resource Summary — {Topic Name}

## Sources Found
- PDF pages extracted: X
- Websites with useful content: list them

## Coverage by Syllabus Point
- 1.1.1 — Covered / Partially covered / Missing
- 1.1.2 — Covered / Partially covered / Missing

## Gaps
List any syllabus points with no source material found.

## Recommended Next Step
Note anything the content creator should be careful about.
```

## Quality Gate
Before finishing, confirm:
- Every syllabus sub-point has at least one source
- Gaps are documented in index.md
- No source files are empty

## Pacing Rule
After completing all scraped files and index.md for one topic, STOP. Ask the user to review index.md (especially the gap report) before proceeding to the content-creator step.
```

---

### `.claude/skills/content-creator.md`

```markdown
# Skill: Content Creator

## Purpose
Generate Cambridge 9618-aligned notes, questions, and glossary for a topic.
All output is Markdown. No JSON, no HTML at this stage.

## Prerequisites
resources/scraped/{topic-slug}/ must exist and index.md must show no critical gaps.

## Cambridge 9618 Pseudocode Reference
All algorithm and code examples must use Cambridge 9618 pseudocode. No Python, no JavaScript.
Primary reference: `resources/cambridge-pseudocode.md`

Core rules (always apply):

| Construct | Cambridge 9618 Pseudocode |
|-----------|--------------------------|
| Assignment | `x ← 5` |
| Output | `OUTPUT x` |
| Input | `INPUT x` |
| If / else | `IF condition THEN ... ELSE ... ENDIF` |
| Case | `CASE OF x ... OTHERWISE ... ENDCASE` |
| For loop | `FOR i ← 1 TO 10 ... NEXT i` |
| While loop | `WHILE condition DO ... ENDWHILE` |
| Repeat loop | `REPEAT ... UNTIL condition` |
| Procedure | `PROCEDURE name(param : TYPE) ... ENDPROCEDURE` |
| Function | `FUNCTION name(param : TYPE) RETURNS TYPE ... ENDFUNCTION` |
| Array (1D) | `DECLARE arr : ARRAY[1:10] OF INTEGER` |
| Array (2D) | `DECLARE grid : ARRAY[1:3, 1:3] OF INTEGER` |
| String concat | `name ← firstName & ' ' & lastName` |
| Comparison | Use `=` for equality (not `==`), `<>` for not-equal |

Use `←` for assignment only. Never use `=` for assignment.

## Input
- All files in resources/scraped/{topic-slug}/
- Cambridge 9618 syllabus points for this topic
- Any gaps flagged in resources/scraped/{topic-slug}/index.md
- Past papers and mark schemes from resources/pdfs/past-papers/ (required for cross-check step)

## Output Files
Write all files to: content/{topic-slug}/

---

## File 1: meta.md

```markdown
# Topic Metadata

- **Title:** {Topic Name}
- **Slug:** {slug}
- **Syllabus Ref:** {e.g. 1.1}
- **Chapter:** {Chapter name}
- **Last Updated:** {YYYY-MM-DD}
- **Question Count:** {n}
- **Glossary Count:** {n}
- **Status:** draft
```

---

## File 2: notes.md

### Structure
- Use headings that match syllabus numbering (## 1.1.1, ## 1.1.2, etc.)
- Cambridge tone: precise, no filler, exam-ready language
- Include worked examples for all technical and calculation topics
- Minimum 3 diagrams per topic — use comment specs:

```
<!-- DIAGRAM: [type] — [description] — explains [concept] -->
```

Diagram types available:
- flowchart
- comparison-table
- binary-diagram
- network-diagram
- memory-map
- timeline
- tree-diagram

### Example diagram spec
```
<!-- DIAGRAM: comparison-table — comparing ASCII vs Unicode including bit-length, character range, and use cases -->
<!-- DIAGRAM: flowchart — steps to convert denary to binary using repeated division by 2 -->
```

### Quality Checklist
- Every syllabus sub-point covered
- Every technical term defined on first use
- At least one worked example per calculation-based point
- At least 3 diagram specs embedded
- Final section is `## Syllabus Coverage` checklist (see below)

### Syllabus Coverage Checklist (required — final section of every notes.md)
End every notes.md with this section. One bullet per syllabus sub-point for the topic:

```markdown
## Syllabus Coverage

- **X.X.1** [Exact syllabus wording] — Covered
- **X.X.2** [Exact syllabus wording] — Covered
- **X.X.3** [Exact syllabus wording] — Partial (note what is missing)
- **X.X.4** [Exact syllabus wording] — Missing (logged in gaps.md)
```

Only mark Covered if the notes fully address the point. If Missing, log it in gaps.md immediately.

---

## File 3: glossary.md

### Format per term

```markdown
## {Term}
**Definition:** One or two sentences maximum. Cambridge mark-scheme wording. No embedded examples.
**Plain English:** One sentence explaining what it means without jargon.
**Example:** Concrete, specific example (not "for example, a computer").
**Differentiator:** (Only include if this term is commonly confused with another) State the key technical difference that earns the mark.
**Syllabus Ref:** {e.g. 1.1.2}

---
```

### Requirements
- Alphabetical order within each letter section
- Use letter headers (## A, ## B, etc.)
- Minimum 10 terms per topic
- Definitions must stand alone — do not reference the notes
- Definitions ≤ 2 sentences — no examples inside the definition line
- Differentiator field required for high-risk confused pairs, e.g.:
  - RAM / ROM
  - Lossy / lossless compression
  - Virus / worm
  - Phishing / pharming
  - Compiler / interpreter
  - Serial / parallel transmission
  - Validation / verification

---

## File 4: questions.md

### Format per question

```markdown
## Question {n}
**Syllabus Ref:** {e.g. 1.1.1}
**Marks:** {1–6}
**Difficulty:** Easy | Medium | Hard
**Command Word:** Define | State | Describe | Explain | Calculate | Convert | Discuss | Evaluate
**Type:** recall | application | analysis | misconception | past-paper

{Question text here}

### Model Answer
- Point one [1]
- Point two [1]
- (Continue — one bullet per mark)

### Examiner Tip
{One sentence on a common mistake or what examiners look for}

---
```

### Requirements
- Minimum 10 questions per topic
- **Distribution by type:** 4 recall, 3 application, 2 analysis/evaluation, 1 misconception trap
- **Distribution by marks:** at least 2 × 1-mark, 3 × 2-mark, 3 × 3–4 mark, 2 × 5–6 mark
- **Distribution by difficulty:** minimum 3 Easy, 5 Medium, 2 Hard
- At least 1 question must be sourced from a real Cambridge past paper — label it `**Type:** past-paper` and include the paper/year reference
- Cover all major syllabus sub-points
- At least one calculation or trace question where applicable
- Model answers formatted as mark scheme points (one bullet = one mark)
- No prohibited terms in questions or model answers (see CLAUDE.md)

## Step 5: Past Paper Cross-Check (required before marking topic complete)

After generating all four content files:

1. Load the past paper questions for this topic from `resources/pdfs/past-papers/`
2. Load the corresponding mark scheme from `resources/pdfs/marking-schemes/`
3. For each exam question relevant to this topic:
   - Verify that notes.md contains content that directly answers the question
   - Verify that model answers in questions.md are consistent with mark scheme wording
4. If a gap is found: update notes.md, add a question to questions.md, and log the gap in gaps.md
5. Document which papers were checked in meta.md under a `## Past Papers Checked` section

## Pacing Rule
After completing all four files and the past paper cross-check for one topic, STOP. Ask the user to review the content before proceeding to the frontend-builder step or the next topic.
```

---

### `.claude/skills/frontend-builder.md`

```markdown
# Skill: Frontend Builder

## Purpose
Convert Markdown content files into polished HTML pages using the design system.

## Prerequisites
content/{topic-slug}/ must exist with all four files: meta.md, notes.md, glossary.md, questions.md

## Input
- content/{topic-slug}/ — all content files
- design-system/design-tokens.md — read this first before writing any HTML
- design-system/style.css and components.css — reference for available classes

## Output
Write three HTML files to: frontend/topics/{topic-slug}/
Also update: frontend/index.html

---

## Page 1: topics/{slug}/index.html — Notes Page

### Layout
- Header: topic title + syllabus reference badge
- Left sidebar: jump navigation (one link per syllabus sub-section)
- Main content: notes from notes.md, converted to semantic HTML
- Right sidebar (optional): key terms panel linking to glossary

### Diagram Rendering
Convert every `<!-- DIAGRAM: -->` spec into inline SVG:

| Type               | SVG Approach                                              |
|--------------------|-----------------------------------------------------------|
| flowchart          | Boxes with arrows, decision diamonds for branches         |
| comparison-table   | Styled HTML table using .table class                      |
| binary-diagram     | SVG grid of bit-cells with labels                         |
| network-diagram    | SVG nodes connected by lines with labels                  |
| memory-map         | SVG segmented rectangle with labels                       |
| timeline           | SVG horizontal or vertical sequence                       |
| tree-diagram       | SVG hierarchy with connecting lines                       |

### SVG Standards
- Always set viewBox
- Use CSS variables for all colours (var(--color-primary), etc.)
- Every SVG must have `<title>` and `<desc>` for accessibility
- role="img" on the SVG element
- stroke-width: 2px, box border-radius: 4px, consistent padding

### SVG Fallback
If a diagram cannot be accurately represented as SVG (e.g. complex logic circuits, detailed network topologies, multi-layer CPU diagrams):
1. Do NOT emit a broken or approximate SVG
2. Emit a structured placeholder block instead:

```html
<figure class="diagram-placeholder" aria-label="Diagram: [description]">
  <figcaption>
    <strong>[Diagram type]:</strong> [Full description of what this diagram should show,
    including labels, relationships, and why it is needed here]
  </figcaption>
</figure>
```

3. Log every placeholder in gaps.md under the topic entry with the format:
   `[VISUAL NEEDED: type — description — page: index.html]`

This prevents broken pages from blocking the pipeline. Placeholders can be replaced with proper artwork later.

### Callout Boxes
Wrap key terms in `.callout` divs when first introduced. Link term text to glossary.html.

---

## Page 2: topics/{slug}/questions.html — Questions Page

### Layout
- Questions ordered by mark value (low to high)
- Each question block: question text → hidden model answer (reveal on click)
- Filter bar: filter by command word (JS, no framework)
- Progress tracker using localStorage (mark questions as attempted / correct)

### Question HTML Structure
```html
<article class="question-card" data-marks="2" data-command="Define">
  <header class="question-header">
    <span class="badge">2 marks</span>
    <span class="badge badge--outline">Define</span>
    <span class="tag">1.1.1</span>
  </header>
  <p class="question-text">Question text here...</p>
  <div class="reveal">
    <button class="btn btn--outline reveal__trigger">Show Answer</button>
    <div class="reveal__content">
      <ul class="mark-scheme">
        <li>Point one [1]</li>
        <li>Point two [1]</li>
      </ul>
      <p class="examiner-tip">Tip text here...</p>
    </div>
  </div>
</article>
```

---

## Page 3: topics/{slug}/glossary.html — Glossary Page

### Layout
- Alphabetical letter navigation bar at top
- Search input (JS filter — no framework)
- Terms grouped under letter headings
- Each term: definition + example + syllabus ref badge

---

## Update: frontend/index.html

Add a topic card to the topic grid:

```html
<article class="card topic-card">
  <div class="card__header">
    <span class="badge">1.1</span>
    <h2 class="card__title">Information Representation</h2>
  </div>
  <p class="card__body">18 glossary terms · 12 questions</p>
  <div class="card__footer">
    <a href="topics/information-representation/index.html" class="btn">Notes</a>
    <a href="topics/information-representation/questions.html" class="btn btn--outline">Questions</a>
    <a href="topics/information-representation/glossary.html" class="btn btn--outline">Glossary</a>
  </div>
</article>
```

---

## HTML Standards (apply to all pages)
- Semantic HTML5: use article, section, nav, aside, main, header, footer
- All classes from components.css — no inline styles, ever
- ARIA labels on all interactive elements
- Mobile responsive using CSS grid/flexbox from design system
- Vanilla JS only — no external libraries
- Link to /assets/style.css and /assets/components.css in every page head

## Pacing Rule
After building the three HTML pages and updating frontend/index.html for one topic, STOP. Ask the user to review the rendered pages before proceeding to the next topic.
```

---

## Step 4: Cambridge Pseudocode Reference

Create `resources/cambridge-pseudocode.md` — this is the authoritative pseudocode reference used by the content-creator skill:

```markdown
# Cambridge 9618 Pseudocode Reference

## Assignment and Variables
- Assignment: `x ← 5` (use ← not =)
- Constants: `CONSTANT PI ← 3.14159`
- Declare variable: `DECLARE x : INTEGER`

## Data Types
INTEGER, REAL, CHAR, STRING, BOOLEAN, DATE

## Input / Output
- `INPUT x`
- `OUTPUT x`
- `OUTPUT "text", x`

## Arithmetic Operators
`+`  `-`  `*`  `/`  `DIV` (integer division)  `MOD` (remainder)

## Comparison Operators (use in conditions only — never for assignment)
`=`  `<>`  `<`  `>`  `<=`  `>=`

## Boolean Operators
`AND`  `OR`  `NOT`

## String Operations
- Concatenation: `name ← first & " " & last`
- LENGTH(s), LEFT(s, n), RIGHT(s, n), MID(s, start, length), LCASE(s), UCASE(s)

## Selection
```
IF condition THEN
   ...
ELSE
   ...
ENDIF
```

```
CASE OF variable
   value1 : ...
   value2 : ...
   OTHERWISE : ...
ENDCASE
```

## Iteration
```
FOR i ← 1 TO 10
   ...
NEXT i
```

```
WHILE condition DO
   ...
ENDWHILE
```

```
REPEAT
   ...
UNTIL condition
```

## Arrays
```
DECLARE arr : ARRAY[1:10] OF INTEGER
DECLARE grid : ARRAY[1:3, 1:3] OF REAL
arr[1] ← 42
grid[2, 3] ← 1.5
```

## Procedures and Functions
```
PROCEDURE name(param1 : TYPE, BYREF param2 : TYPE)
   ...
ENDPROCEDURE

CALL name(arg1, arg2)
```

```
FUNCTION name(param : TYPE) RETURNS TYPE
   ...
   RETURN value
ENDFUNCTION

result ← name(arg)
```

## File Handling
```
OPENFILE "file.txt" FOR READ
READFILE "file.txt", variable
CLOSEFILE "file.txt"

OPENFILE "file.txt" FOR WRITE
WRITEFILE "file.txt", variable
CLOSEFILE "file.txt"

EOF("file.txt")  ← returns TRUE if end of file
```
```

---

## Step 5: Design System Setup

Create `design-system/design-tokens.md` — this is what the frontend builder reads:

```markdown
# Design Tokens — 9618 CS Website

## Colours (CSS custom properties in style.css)
--color-primary: #2563eb        (blue — headings, links, primary buttons)
--color-secondary: #7c3aed      (purple — accents, syllabus ref badges)
--color-success: #16a34a        (green — correct answers, checkmarks)
--color-warning: #d97706        (amber — tips, important callouts)
--color-danger: #dc2626         (red — warnings, incorrect)
--color-bg: #ffffff
--color-bg-subtle: #f8fafc
--color-text: #1e293b
--color-text-muted: #64748b
--color-border: #e2e8f0

## Typography
Font stack: system-ui, -apple-system, sans-serif (no external fonts)
--text-xs: 0.75rem
--text-sm: 0.875rem
--text-base: 1rem
--text-lg: 1.125rem
--text-xl: 1.25rem
--text-2xl: 1.5rem
--text-3xl: 1.875rem

## Spacing scale
--space-1: 0.25rem
--space-2: 0.5rem
--space-4: 1rem
--space-6: 1.5rem
--space-8: 2rem
--space-12: 3rem

## Available Component Classes (from components.css)
.card               — white card with border, shadow, rounded corners
.card__header       — card top section
.card__body         — card main content
.card__footer       — card bottom section with actions
.callout            — coloured aside box
.callout--warning   — amber callout (tips)
.callout--info      — blue callout (definitions)
.callout--success   — green callout (examples)
.badge              — small pill label
.badge--outline     — outline variant
.btn                — primary filled button
.btn--outline       — outline button
.table              — styled table with thead
.reveal             — collapsible section (toggle with JS)
.reveal__trigger    — the button that opens it
.reveal__content    — the hidden content
.tag                — small topic/syllabus ref tag
.sidebar            — fixed left navigation
.progress-bar       — horizontal progress indicator
.mark-scheme        — list styled for exam mark points
.examiner-tip       — styled paragraph for examiner tips
.question-card      — full question block with header
.topic-card         — card variant for homepage topic grid
```

---

## Step 6: Daily Workflow Per Topic

Once set up, run these commands in Claude Code — one topic at a time:

```bash
# Open Claude Code in the project folder
cd 9618-cs-website
claude
```

Then in the Claude Code chat:

### Stage 1 — Collect Resources
```
Read .claude/skills/resource-collector.md
then collect resources for topic: "Information Representation" (slug: information-representation)
```
Review `resources/scraped/information-representation/index.md` for gaps before continuing.

### Stage 2 — Create Content
```
Read .claude/skills/content-creator.md
then create content for topic: "Information Representation" (slug: information-representation)
```
Review `content/information-representation/` — edit notes.md, check questions.md quality.

### Stage 3 — Build Pages
```
Read .claude/skills/frontend-builder.md
then build pages for topic: "Information Representation" (slug: information-representation)
```
Output: `frontend/topics/information-representation/` — three HTML files ready.

---

## Build Order Recommendation

Start simple. Validate the full pipeline on one AS topic before scaling. A Level topics are harder to source and more abstract — tackle them after AS is complete and verified.

### Phase 1 — Validate the pipeline (AS Level, simple topics first)

| Priority | Section | Topic | Slug | Reason |
|----------|---------|-------|------|--------|
| 1st | 1.1 | Data Representation | `data-representation` | Concrete, well-sourced, good SVG test |
| 2nd | 3.2 | Logic Gates and Circuits | `logic-gates-circuits` | Heavy diagrams — tests SVG quality |
| 3rd | 4.1 | CPU Architecture | `cpu-architecture` | Register diagrams, memory maps |
| 4th | 11.2 | Constructs | `constructs` | Tests pseudocode code-block rendering |

### Phase 2 — Remaining AS Level topics (build all 29 sections)

Work through sections 1–12 systematically. Suggested order within each chapter:

- Chapter 1: 1.2 Multimedia → 1.3 Compression
- Chapter 2: 2.1 Networks
- Chapter 3: 3.1 Computers and Components
- Chapter 4: 4.2 Assembly Language → 4.3 Bit Manipulation
- Chapter 5: 5.1 Operating Systems → 5.2 Language Translators
- Chapter 6: 6.1 Data Security → 6.2 Data Integrity
- Chapter 7: 7.1 Ethics and Ownership
- Chapter 8: 8.1 Database Concepts → 8.2 DBMS → 8.3 DDL and DML
- Chapter 9: 9.1 Computational Thinking → 9.2 Algorithms
- Chapter 10: 10.1 Data Types → 10.2 Arrays → 10.3 Files → 10.4 ADT Intro
- Chapter 11: 11.1 Programming Basics → 11.3 Structured Programming
- Chapter 12: 12.1 Life Cycle → 12.2 Program Design → 12.3 Testing

### Phase 3 — A Level topics (sections 13–20)

| Priority | Section | Topic | Slug | Reason |
|----------|---------|-------|------|--------|
| 1st | 13.3 | Floating-Point Numbers | `floating-point` | Builds on AS binary — good bridge |
| 2nd | 19.1 | Algorithms (A Level) | `algorithms-alevel` | Big O, ADTs — Paper 4 critical |
| 3rd | 19.2 | Recursion | `recursion` | Paper 4 critical |
| 4th | 15.2 | Boolean Algebra | `boolean-algebra` | Extends AS logic gates |
| 5th | 14.1 | Protocols | `protocols` | TCP/IP stack — visual-heavy |
| 6th | 16.1 | OS Purposes | `os-purposes` | Scheduling diagrams |
| Then | remaining | All others in chapter order | — | 13.1, 13.2, 14.2, 15.1, 16.2, 17.1, 18.1, 20.1, 20.2 |

---

### Milestone Publishing Strategy

Do not wait until all topics are complete before publishing. Publish at each milestone and run a manual QA pass.

| Milestone | Trigger | Action |
|-----------|---------|--------|
| **M1 — Pipeline validated** | Phase 1 complete (4 topics) | Publish website with 4 topics. Verify full pipeline end-to-end. Fix any structural issues before scaling. |
| **M2 — Ch.1 complete** | All of Ch.1 done (3 topics) | Publish. Check AS/A Level badge rendering, topic card grid, mobile layout. |
| **M3–M13 — Per chapter** | Each AS chapter complete | Publish incrementally. Run past-paper cross-check QA pass per chapter. |
| **M14 — AS complete** | All 29 AS topics done | Full AS Level site live. Begin A Level phase. |
| **M15–M22 — Per A Level chapter** | Each A Level chapter complete | Publish incrementally. |
| **M23 — Full site** | All 43 topics done | Final QA pass. Add level filter (AS / A Level toggle) to index.html. |

**QA pass per milestone:** Verify that all published topics have: no broken SVGs, no missing diagram placeholders, all past paper cross-checks logged in meta.md, queue.md marked `[x]` for all three pipeline stages.

---

## Checklist Before First Run

**Setup:**
- [ ] Claude Code installed (`npm install -g @anthropic-ai/claude-code`)
- [ ] Folder structure created (including queue.md, gaps.md)
- [ ] PDFs placed in `resources/pdfs/` — textbook, past papers, and mark schemes are present
- [ ] `resources/cambridge-pseudocode.md` created with full 9618 pseudocode reference
- [ ] `CLAUDE.md` created at project root (with scope note, completion checklist, prohibited terms, cross-topic overlap table)
- [ ] All three skill files created in `.claude/skills/`
- [ ] `design-system/design-tokens.md` created
- [ ] `design-system/style.css` created with CSS variables
- [ ] `design-system/components.css` created with component classes
- [ ] `frontend/index.html` created as empty shell (topic cards added by builder)

**queue.md:**
- [ ] All 43 topic slugs entered in queue.md with `[ ]` status and pipeline stage columns
- [ ] Recovery instructions included (what to do if a topic is marked `[~]`)

**gaps.md:**
- [ ] gaps.md created with template sections (Content Gaps / Visual Placeholders / open/closed status)

**Validation:**
- [ ] Pipeline tested end-to-end on one simple AS topic (data-representation) before scaling
- [ ] Milestone M1 QA pass completed after the first 4 Phase 1 topics
- [ ] All 29 AS topic slugs verified against this document
- [ ] All 14 A Level topic slugs verified against this document
- [ ] Website index.html includes level filter (AS / A Level toggle) for students
