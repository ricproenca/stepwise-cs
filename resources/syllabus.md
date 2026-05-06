# Cambridge 9618 Syllabus Reference (2026)

Source: [Cambridge International AS & A Level Computer Science 9618 syllabus for 2026](https://www.cambridgeinternational.org/Images/697372-2026-syllabus.pdf) — Subject content, sections 1–20.

Each topic block starts with `## <slug>`. The resource-collector filters this file by `$slug` and uses the sub-points verbatim to drive coverage reporting. Do not paraphrase the candidate objectives; Cambridge exam marks are tied to exact wording.

**Legend**
- *Objective* — the "Candidates should be able to" line (each becomes one row in `## Syllabus Coverage` in notes.md).
- *Notes* — "Notes and guidance" column; constrains scope and lists required sub-details.
- *Level/Paper* — per queue.md.

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

## Appendix — Command words (Section 4)

| Command word | Meaning |
|---|---|
| Analyse | examine in detail to show meaning, identify elements and the relationship between them |
| Assess | make an informed judgement |
| Calculate | work out from given facts, figures or information |
| Comment | give an informed opinion |
| Compare | identify/comment on similarities and/or differences |
| Complete | add information to an incomplete diagram or table |
| Consider | review and respond to given information |
| Contrast | identify/comment on differences |
| Define | give precise meaning |
| Demonstrate | show how or give an example |
| Describe | state the points of a topic / give characteristics and main features |
| Develop | take forward to a more advanced stage or build upon given information |
| Discuss | write about issue(s) or topic(s) in depth in a structured way |
| Draw | draw a line to match a term with a description |
| Evaluate | judge or calculate the quality, importance, amount, or value of something |
| Examine | investigate closely, in detail |
| Explain | set out purposes or reasons / make relationships between things clear / say why and/or how and support with relevant evidence |
| Give | produce an answer from a given source or recall/memory |
| Identify | name/select/recognise |
| Justify | support a case with evidence/argument |
| Outline | set out the main points |
| Predict | suggest what may happen based on available information |
| Sketch | make a simple freehand drawing showing the key features, taking care over proportions |
| State | express in clear terms |
| Suggest | apply knowledge and understanding to situations where there are a range of valid responses in order to make proposals / put forward considerations |
| Summarise | select and present the main points, without detail |
| Write | write an answer in a specific way |
