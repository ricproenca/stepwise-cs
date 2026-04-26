# Cambridge 9618 Syllabus Reference (2026)

Source: [Cambridge International AS & A Level Computer Science 9618 syllabus for 2026](https://www.cambridgeinternational.org/Images/697372-2026-syllabus.pdf) — Subject content, sections 1–20.

Each topic block starts with `## <slug>`. The resource-collector filters this file by `$slug` and uses the sub-points verbatim to drive coverage reporting. Do not paraphrase the candidate objectives; Cambridge exam marks are tied to exact wording.

**Legend**
- *Objective* — the "Candidates should be able to" line (each becomes one row in `## Syllabus Coverage` in notes.md).
- *Notes* — "Notes and guidance" column; constrains scope and lists required sub-details.
- *Level/Paper* — per queue.md.

---

## data-representation
**Syllabus ref:** 1.1 — Data Representation · AS · Paper 1

- Show understanding of binary magnitudes and the difference between binary prefixes and decimal prefixes.
  *Notes:* kibi/kilo, mebi/mega, gibi/giga, tebi/tera.
- Show understanding of different number systems.
  *Notes:* binary, denary, hexadecimal, Binary Coded Decimal (BCD), one's and two's complement. Convert an integer value from one base/representation to another.
- Perform binary addition and subtraction.
  *Notes:* positive and negative binary integers; show understanding of how overflow can occur.
- Describe practical applications where BCD and hexadecimal are used.
- Show understanding of and represent character data in its internal binary form, depending on the character set used.
  *Notes:* ASCII, extended ASCII, Unicode. Candidates are not expected to memorise particular character codes.

---

## multimedia
**Syllabus ref:** 1.2 — Multimedia (Graphics, Sound) · AS · Paper 1

**Graphics**
- Show understanding of how data for a bitmapped image are encoded.
  *Notes:* pixel, file header, image resolution, screen resolution, colour depth/bit depth.
- Perform calculations to estimate the file size for a bitmap image.
- Show understanding of the effects of changing elements of a bitmap image on image quality and file size.
  *Notes:* image resolution, colour depth/bit depth.
- Show understanding of how data for a vector graphic are encoded.
  *Notes:* drawing object, property, drawing list.
- Justify the use of a bitmap image or a vector graphic for a given task.

**Sound**
- Show understanding of how sound is represented and encoded.
  *Notes:* sampling, sampling rate, sampling resolution, analogue and digital data.
- Show understanding of the impact of changing sampling rate and resolution.
  *Notes:* impact on file size and accuracy.

---

## compression
**Syllabus ref:** 1.3 — Compression · AS · Paper 1

- Show understanding of the need for, and examples of the use of, compression.
- Show understanding of lossy and lossless compression and justify the use of a method in a given situation.
- Show understanding of how a text file, bitmap image, vector graphic and sound file can be compressed.
  *Notes:* including the use of run-length encoding (RLE).

---

## networks-internet
**Syllabus ref:** 2.1 — Networks including the internet · AS · Paper 1

- Show understanding of the purpose and benefits of networking devices.
- Show understanding of the characteristics of a LAN (local area network) and a WAN (wide area network).
- Explain the client-server and peer-to-peer models of networked computers.
  *Notes:* roles of different computers within the network and subnetwork models; benefits and drawbacks of each model; justify the use of a model for a given situation.
- Show understanding of thin-client and thick-client and the differences between them.
- Show understanding of the bus, star, mesh and hybrid topologies.
  *Notes:* how packets are transmitted between two hosts for a given topology; justify the use of a topology for a given situation.
- Show understanding of cloud computing.
  *Notes:* public and private clouds; benefits and drawbacks of cloud computing.
- Show understanding of the differences between and implications of the use of wireless and wired networks.
  *Notes:* copper cable, fibre-optic cable, radio waves (including WiFi), microwaves, satellites.
- Describe the hardware that is used to support a LAN.
  *Notes:* switch, server, NIC, WNIC, Wireless Access Points (WAP), cables, bridge, repeater.
- Describe the role and function of a router in a network.
- Show understanding of Ethernet and how collisions are detected and avoided.
  *Notes:* Carrier Sense Multiple Access / Collision Detection (CSMA/CD).
- Show understanding of bit streaming.
  *Notes:* real-time and on-demand; importance of bit rates and broadband speed on bit streaming.
- Show understanding of the differences between the World Wide Web (WWW) and the internet.
- Describe the hardware that is used to support the internet.
  *Notes:* modems, PSTN (Public Switched Telephone Network), dedicated lines, cell phone network.
- Explain the use of IP addresses in the transmission of data over the internet.
  *Notes:* format of an IP address including IPv4 and IPv6; use of subnetting; how an IP address is associated with a device on a network; public vs private IP address and security implications; static vs dynamic IP address.
- Explain how a Uniform Resource Locator (URL) is used to locate a resource on the World Wide Web (WWW) and the role of the Domain Name Service (DNS).

---

## computers-components
**Syllabus ref:** 3.1 — Computers and their components · AS · Paper 1

- Show understanding of the need for input, output, primary memory and secondary (including removable) storage.
- Show understanding of embedded systems.
  *Notes:* benefits and drawbacks of embedded systems.
- Describe the principal operations of hardware devices.
  *Notes:* laser printer, 3D printer, microphone, speakers, magnetic hard disk, solid state (flash) memory, optical disc reader/writer, touchscreen, virtual reality headset.
- Show understanding of the use of buffers.
- Explain the differences between Random Access Memory (RAM) and Read Only Memory (ROM).
  *Notes:* including their use in a range of devices and systems.
- Explain the differences between Static RAM (SRAM) and Dynamic RAM (DRAM).
  *Notes:* use of SRAM and DRAM in a range of devices/systems and reasons for using one instead of the other.
- Explain the difference between Programmable ROM (PROM), Erasable Programmable ROM (EPROM) and Electrically Erasable Programmable ROM (EEPROM).
- Show an understanding of monitoring and control systems.
  *Notes:* difference between monitoring and control; use of sensors (temperature, pressure, infra-red, sound) and actuators; importance of feedback.

---

## logic-gates-circuits
**Syllabus ref:** 3.2 — Logic Gates and Logic Circuits · AS · Paper 1

- Use the following logic gate symbols: NOT, AND, OR, NAND, NOR, XOR.
- Understand and define the functions of NOT, AND, OR, NAND, NOR and XOR (EOR) gates.
  *Notes:* all gates except NOT will have two inputs only.
- Construct the truth table for each of the logic gates above.
- Construct a logic circuit from: a problem statement, a logic expression, a truth table.
- Construct a truth table from: a problem statement, a logic circuit, a logic expression.
- Construct a logic expression from: a problem statement, a logic circuit, a truth table.

---

## cpu-architecture
**Syllabus ref:** 4.1 — Central Processing Unit (CPU) Architecture · AS · Paper 1

- Show understanding of the basic Von Neumann model for a computer system and the stored program concept.
- Show understanding of the purpose and role of registers, including the difference between general purpose and special purpose registers.
  *Notes:* special purpose registers including Program Counter (PC), Memory Data Register (MDR), Memory Address Register (MAR), Accumulator (ACC), Index Register (IX), Current Instruction Register (CIR), Status Register.
- Show understanding of the purpose and roles of the Arithmetic and Logic Unit (ALU), Control Unit (CU), system clock, Immediate Access Store (IAS).
- Show understanding of how data are transferred between various components of the computer system using the address bus, data bus and control bus.
- Show understanding of how factors contribute to the performance of the computer system.
  *Notes:* processor type and number of cores, bus width, clock speed, cache memory.
- Understand how different ports provide connection to peripheral devices.
  *Notes:* USB, HDMI, VGA.
- Describe the stages of the Fetch-Execute (F-E) cycle.
  *Notes:* describe and use 'register transfer' notation to describe the F-E cycle.
- Show understanding of the purpose of interrupts.
  *Notes:* possible causes; applications; use of an Interrupt Service Routine (ISR); when interrupts are detected during the F-E cycle; how interrupts are handled.

---

## assembly-language
**Syllabus ref:** 4.2 — Assembly Language · AS · Paper 1

- Show understanding of the relationship between assembly language and machine code.
- Describe the different stages of the assembly process for a two-pass assembler.
  *Notes:* apply the two-pass assembler process to a given simple assembly language program.
- Trace a given simple assembly language program.
- Show understanding that a set of instructions are grouped.
  *Notes:* data movement; input/output of data; arithmetic operations; unconditional and conditional instructions; compare instructions.
- Show understanding of and be able to use different modes of addressing.
  *Notes:* immediate, direct, indirect, indexed, relative.

*Reference instruction set (used in exams):* `LDM #n`, `LDD <address>`, `LDI <address>`, `LDX <address>`, `LDR #n`, `MOV <register>`, `STO <address>`, `ADD <address>|#n`, `SUB <address>|#n`, `INC <register>`, `DEC <register>`, `JMP <address>`, `CMP <address>|#n`, `CMI <address>`, `JPE <address>`, `JPN <address>`, `IN`, `OUT`, `END`. One general-purpose register (ACC). `#` = denary, `B` = binary, `&` = hexadecimal.

---

## bit-manipulation
**Syllabus ref:** 4.3 — Bit manipulation · AS · Paper 1

- Show understanding of and perform binary shifts.
  *Notes:* logical, arithmetic and cyclic shifts; left and right.
- Show understanding of how bit manipulation can be used to monitor/control a device.
  *Notes:* carry out bit manipulation operations; test and set a bit (using bit masking).

*Extended instructions:* `AND`, `XOR`, `OR` (both `#n/Bn/&n` and `<address>` forms), `LSL #n`, `LSR #n`, plus label syntax.

---

## operating-systems
**Syllabus ref:** 5.1 — Operating Systems · AS · Paper 1

- Explain why a computer system requires an Operating System (OS).
- Explain the key management tasks carried out by the OS.
  *Notes:* memory management, file management, security management, hardware management (input/output/peripherals), process management.
- Show understanding of the need for typical utility software provided with an OS.
  *Notes:* disk formatter, virus checker, defragmentation software, disk contents analysis/disk repair software, file compression, back-up software.
- Show understanding of program libraries.
  *Notes:* software is often constructed using existing code from program libraries; benefits to the developer, including Dynamic Link Library (DLL) files.

---

## language-translators
**Syllabus ref:** 5.2 — Language Translators · AS · Paper 1

- Show understanding of the need for: assembler software (for assembly language), a compiler (for high-level language), an interpreter (for translation and execution of a high-level language program).
- Explain the benefits and drawbacks of using either a compiler or interpreter and justify the use of each.
- Show awareness that high-level language programs may be partially compiled and partially interpreted (e.g. Java console mode).
- Describe features found in a typical Integrated Development Environment (IDE).
  *Notes:* coding (context-sensitive prompts); initial error detection (dynamic syntax checks); presentation (prettyprint, expand/collapse code blocks); debugging (single stepping, breakpoints — variables, expressions, report window).

---

## data-security
**Syllabus ref:** 6.1 — Data Security · AS · Paper 1

- Explain the difference between the terms security, privacy and integrity of data.
- Show appreciation of the need for both the security of data and the security of the computer system.
- Describe security measures designed to protect computer systems, ranging from the stand-alone PC to a network of computers.
  *Notes:* user accounts, passwords, authentication techniques such as digital signatures and biometrics, firewall, anti-virus software, anti-spyware, encryption.
- Show understanding of the threats to computer and data security posed by networks and the internet.
  *Notes:* malware (virus, spyware), hackers, phishing, pharming.
- Describe methods that can be used to restrict the risks posed by threats.
- Describe security methods designed to protect the security of data.
  *Notes:* encryption, access rights.

---

## data-integrity
**Syllabus ref:** 6.2 — Data Integrity · AS · Paper 1

- Describe how data validation and data verification help protect the integrity of data.
- Describe and use methods of data validation.
  *Notes:* range check, format check, length check, presence check, existence check, limit check, check digit.
- Describe and use methods of data verification during data entry and data transfer.
  *Notes:* during data entry — visual check, double entry. During data transfer — parity check (byte and block), checksum.

---

## ethics-ownership
**Syllabus ref:** 7.1 — Ethics and Ownership · AS · Paper 1

- Show understanding of the need for and purpose of ethics as a computing professional.
  *Notes:* importance of joining a professional ethical body including BCS (British Computer Society), IEEE.
- Show understanding of the need to act ethically and the impact of acting ethically or unethically for a given situation.
- Show understanding of the need for copyright legislation.
- Show understanding of the different types of software licensing and justify the use of a licence for a given situation.
  *Notes:* Free Software Foundation, Open Source Initiative, shareware and commercial software.
- Show understanding of Artificial Intelligence (AI).
  *Notes:* impact of AI including social, economic and environmental issues; applications of AI.

---

## database-concepts
**Syllabus ref:** 8.1 — Database Concepts · AS · Paper 1

- Show understanding of the limitations of using a file-based approach for the storage and retrieval of data.
- Describe the features of a relational database that address the limitations of a file-based approach.
- Show understanding of and use the terminology associated with a relational database model.
  *Notes:* entity, table, record, field, tuple, attribute, primary key, candidate key, secondary key, foreign key, relationship (one-to-many, one-to-one, many-to-many), referential integrity, indexing.
- Use an entity-relationship (E-R) diagram to document a database design.
- Show understanding of the normalisation process.
  *Notes:* First Normal Form (1NF), Second Normal Form (2NF), Third Normal Form (3NF).
- Explain why a given set of database tables are, or are not, in 3NF.
- Produce a normalised database design for a description of a database, a given set of data, or a given set of tables.

---

## dbms
**Syllabus ref:** 8.2 — Database Management Systems (DBMS) · AS · Paper 1

- Show understanding of the features provided by a DBMS that address the issues of a file-based approach.
  *Notes:* data management (maintaining a data dictionary); data modelling; logical schema; data integrity; data security (backup procedures, access rights to individuals/groups of users).
- Show understanding of how software tools found within a DBMS are used in practice.
  *Notes:* use and purpose of developer interface and query processor.

---

## ddl-dml
**Syllabus ref:** 8.3 — Data Definition Language (DDL) and Data Manipulation Language (DML) · AS · Paper 1

- Show understanding that the DBMS carries out all creation/modification of the database structure using its DDL.
- Show understanding that the DBMS carries out all queries and maintenance of data using its DML.
- Show understanding that the industry standard for both DDL and DML is Structured Query Language (SQL).
  *Notes:* understand a given SQL statement.
- Understand given SQL (DDL) statements and be able to write simple SQL (DDL) statements using a sub-set of statements.
  *Notes:* `CREATE DATABASE`; `CREATE TABLE` (with attributes using CHARACTER, VARCHAR(n), BOOLEAN, INTEGER, REAL, DATE, TIME); `ALTER TABLE`; `PRIMARY KEY (field)`; `FOREIGN KEY (field) REFERENCES Table (Field)`.
- Write an SQL script to query or modify data (DML) stored in at most two database tables.
  *Notes:* queries — `SELECT ... FROM`, `WHERE`, `ORDER BY`, `GROUP BY`, `INNER JOIN`, `SUM`, `COUNT`, `AVG`. Maintenance — `INSERT INTO`, `DELETE FROM`, `UPDATE`.

---

## computational-thinking
**Syllabus ref:** 9.1 — Computational Thinking Skills · AS · Paper 2

- Show an understanding of abstraction.
  *Notes:* need for and benefits of using abstraction; describe the purpose of abstraction; produce an abstract model of a system by only including essential details.
- Describe and use decomposition.
  *Notes:* break down problems into sub-problems leading to the concept of a program module (procedure/function).

---

## algorithms-as
**Syllabus ref:** 9.2 — Algorithms (AS) · AS · Paper 2

- Show understanding that an algorithm is a solution to a problem expressed as a sequence of defined steps.
- Use suitable identifier names for the representation of data used by a problem and represent these using an identifier table.
- Write pseudocode that contains input, process and output.
- Write pseudocode using the three basic constructs of sequence, selection and iteration (repetition).
- Document a simple algorithm using a structured English description, a flowchart or pseudocode.
- Write pseudocode from: a structured English description, a flowchart.
- Draw a flowchart from: a structured English description, pseudocode.
- Describe and use the process of stepwise refinement to express an algorithm to a level of detail from which the task may be programmed.
- Use logic statements to define parts of an algorithm solution.

---

## data-types-records
**Syllabus ref:** 10.1 — Data Types and Records · AS · Paper 2

- Select and use appropriate data types for a problem solution.
  *Notes:* integer, real, char, string, Boolean, date. Pseudocode uses: INTEGER, REAL, CHAR, STRING, BOOLEAN, DATE, ARRAY, FILE.
- Show understanding of the purpose of a record structure to hold a set of data of different data types under one identifier.
  *Notes:* write pseudocode to define a record structure; read data from a record structure and save data to a record structure.

---

## arrays
**Syllabus ref:** 10.2 — Arrays · AS · Paper 2

- Use the technical terms associated with arrays.
  *Notes:* index, upper and lower bound.
- Select a suitable data structure (1D or 2D array) to use for a given task.
- Write pseudocode for 1D and 2D arrays.
- Write pseudocode to process array data.
  *Notes:* sort using a bubble sort; search using a linear search.

---

## files-as
**Syllabus ref:** 10.3 — Files · AS · Paper 2

- Show understanding of why files are needed.
- Write pseudocode to handle text files that consist of one or more lines.

---

## adt-intro
**Syllabus ref:** 10.4 — Introduction to Abstract Data Types (ADT) · AS · Paper 2

- Show understanding that an ADT is a collection of data and a set of operations on those data.
- Show understanding that a stack, queue and linked list are examples of ADTs.
  *Notes:* describe the key features of a stack, queue and linked list and justify their use for a given situation.
- Use a stack, queue and linked list to store data.
  *Notes:* candidates will not be required to write pseudocode for these structures, but should be able to add, edit and delete data from them.
- Describe how a queue, stack and linked list can be implemented using arrays.

---

## programming-basics
**Syllabus ref:** 11.1 — Programming Basics · AS · Paper 2

- Implement and write pseudocode from a given design presented as either a program flowchart or structured English.
- Write pseudocode statements for: declaration and initialisation of constants; declaration of variables; assignment of values to variables; expressions involving arithmetic or logical operators (input from keyboard, output to console).
- Use built-in functions and library routines.
  *Notes:* any functions not given in the pseudocode guide will be provided; string manipulation functions will always be given.

---

## constructs
**Syllabus ref:** 11.2 — Constructs · AS · Paper 2

- Use pseudocode to write: an IF statement including the ELSE clause and nested IF; a CASE structure; a count-controlled loop; a post-condition loop; a pre-condition loop.
- Justify why one loop structure may be better suited to solve a problem than the others.

---

## structured-programming
**Syllabus ref:** 11.3 — Structured Programming · AS · Paper 2

- Define and use a procedure.
- Explain where in the construction of an algorithm it would be appropriate to use a procedure.
- Use parameters.
  *Notes:* a procedure may have none, one or more parameters; a parameter can be passed by reference or by value.
- Define and use a function.
- Explain where in the construction of an algorithm it is appropriate to use a function.
  *Notes:* a function is used in an expression, e.g. the return value replaces the call.
- Use the terminology associated with procedures and functions.
  *Notes:* procedure/function header, procedure/function interface, parameter, argument, return value.
- Write efficient pseudocode.

---

## development-lifecycle
**Syllabus ref:** 12.1 — Program Development Life cycle · AS · Paper 2

- Show understanding of the purpose of a development life cycle.
- Show understanding of the need for different development life cycles depending on the program being developed.
  *Notes:* waterfall, iterative, rapid application development (RAD).
- Describe the principles, benefits and drawbacks of each type of life cycle.
- Show understanding of the analysis, design, coding, testing and maintenance stages in the program development life cycle.

---

## program-design
**Syllabus ref:** 12.2 — Program Design · AS · Paper 2

- Use a structure chart to decompose a problem into sub-tasks and express the parameters passed between the various modules/procedures/functions which are part of the algorithm design.
  *Notes:* describe the purpose of a structure chart; construct a structure chart for a given problem; derive equivalent pseudocode from a structure chart.
- Show understanding of the purpose of state-transition diagrams to document an algorithm.

---

## testing-maintenance
**Syllabus ref:** 12.3 — Program Testing and Maintenance · AS · Paper 2

- Show understanding of ways of exposing and avoiding faults in programs.
- Locate and identify the different types of errors: syntax errors, logic errors, run-time errors.
- Correct identified errors.
- Show understanding of the methods of testing available and select appropriate data for a given method.
  *Notes:* dry run, walkthrough, white-box, black-box, integration, alpha, beta, acceptance, stub.
- Show understanding of the need for a test strategy and test plan and their likely contents.
- Choose appropriate test data for a test plan.
  *Notes:* normal, abnormal and extreme/boundary.
- Show understanding of the need for continuing maintenance of a system and the differences between each type of maintenance.
  *Notes:* perfective, adaptive, corrective.
- Analyse an existing program and make amendments to enhance functionality.

---

## user-defined-types
**Syllabus ref:** 13.1 — User-defined data types · A Level · Paper 3

- Show understanding of why user-defined types are necessary.
- Define and use non-composite types.
  *Notes:* including enumerated, pointer.
- Define and use composite data types.
  *Notes:* including set, record and class/object.
- Choose and design an appropriate user-defined data type for a given problem.

---

## file-organisation
**Syllabus ref:** 13.2 — File organisation and access · A Level · Paper 3

- Show understanding of the methods of file organisation and select an appropriate method of file organisation and file access for a given problem.
  *Notes:* serial, sequential (using a key field), random (using a record key).
- Show understanding of methods of file access.
  *Notes:* sequential access for serial and sequential files; direct access for sequential and random files.
- Show understanding of hashing algorithms.
  *Notes:* describe and use different hashing algorithms to read from and write data to a random/sequential file.

---

## floating-point
**Syllabus ref:** 13.3 — Floating-point numbers, representation and manipulation · A Level · Paper 3

- Describe the format of binary floating-point real numbers.
  *Notes:* use two's complement form; understand effects of changing the allocation of bits to mantissa and exponent.
- Convert binary floating-point real numbers into denary and vice versa.
- Normalise floating-point numbers.
  *Notes:* understand the reasons for normalisation.
- Show understanding of the consequences of a binary representation only being an approximation to the real number it represents (in certain cases).
  *Notes:* understand how underflow and overflow can occur.
- Show understanding that binary representations can give rise to rounding errors.

---

## protocols
**Syllabus ref:** 14.1 — Protocols · A Level · Paper 3

- Show understanding of why a protocol is essential for communication between computers.
- Show understanding of how protocol implementation can be viewed as a stack, where each layer has its own functionality.
- Show understanding of the TCP/IP protocol suite.
  *Notes:* four layers (Application, Transport, Internet, Link); purpose and function of each layer; application when a message is sent from one host to another on the internet.
- Show understanding of protocols (HTTP, FTP, POP3, IMAP, SMTP, BitTorrent) and their purposes.
  *Notes:* BitTorrent protocol provides peer-to-peer file sharing.

---

## switching
**Syllabus ref:** 14.2 — Circuit switching, packet switching · A Level · Paper 3

- Show understanding of circuit switching.
  *Notes:* benefits, drawbacks and where it is applicable.
- Show understanding of packet switching.
  *Notes:* benefits, drawbacks and where it is applicable; show understanding of the function of a router in packet switching; explain how packet switching is used to pass messages across a network, including the internet.

---

## processors-vm
**Syllabus ref:** 15.1 — Processors, Parallel Processing and Virtual Machines · A Level · Paper 3

- Show understanding of Reduced Instruction Set Computers (RISC) and Complex Instruction Set Computers (CISC) processors.
  *Notes:* differences between RISC and CISC; interrupt handling on CISC and RISC processors.
- Show understanding of the importance/use of pipelining and registers in RISC processors.
- Show understanding of the four basic computer architectures: SISD, SIMD, MISD, MIMD.
- Show understanding of the characteristics of massively parallel computers.
- Show understanding of the concept of a virtual machine.
  *Notes:* examples of the role of virtual machines; benefits and limitations of virtual machines.

---

## boolean-algebra
**Syllabus ref:** 15.2 — Boolean Algebra and Logic Circuits · A Level · Paper 3

- Produce truth tables for logic circuits including half adders and full adders.
  *Notes:* may include logic gates with more than two inputs.
- Show understanding of a flip-flop (SR, JK).
  *Notes:* draw a logic circuit and derive a truth table for a flip-flop; understand the role of flip-flops as data storage elements.
- Show understanding of Boolean algebra.
  *Notes:* understand De Morgan's laws; perform Boolean algebra using De Morgan's laws; simplify a logic circuit/expression using Boolean algebra.
- Show understanding of Karnaugh maps (K-map).
  *Notes:* benefits of using Karnaugh maps; solve logic problems using Karnaugh maps.

---

## os-purposes
**Syllabus ref:** 16.1 — Purposes of an Operating System (OS) · A Level · Paper 3

- Show understanding of how an OS can maximise the use of resources.
- Describe the ways in which the user interface hides the complexities of the hardware from the user.
- Show understanding of process management.
  *Notes:* multi-tasking and a process; process states — running, ready and blocked; need for scheduling and function/benefits of different scheduling routines (round robin, shortest job first, first come first served, shortest remaining time); how the kernel acts as an interrupt handler; how interrupt handling manages low-level scheduling.
- Show understanding of virtual memory, paging and segmentation for memory management.
  *Notes:* concepts of paging, virtual memory and segmentation; difference between paging and segmentation; how pages can be replaced; how disk thrashing can occur.

---

## translation-software
**Syllabus ref:** 16.2 — Translation Software · A Level · Paper 3

- Show understanding of how an interpreter can execute programs without producing a translated version.
- Show understanding of the various stages in the compilation of a program.
  *Notes:* lexical analysis, syntax analysis, code generation and optimisation.
- Show understanding of how the grammar of a language can be expressed using syntax diagrams or Backus-Naur Form (BNF) notation.
- Show understanding of how Reverse Polish Notation (RPN) can be used to carry out the evaluation of expressions.

---

## encryption-certificates
**Syllabus ref:** 17.1 — Encryption, Encryption Protocols and Digital Certificates · A Level · Paper 3

- Show understanding of how encryption works.
  *Notes:* public key, private key, plain text, cipher text, encryption, symmetric key cryptography and asymmetric key cryptography; how the keys can be used to send a private message from the public to an individual/organisation; how the keys can be used to send a verified message to the public; how data is encrypted and decrypted using symmetric and asymmetric cryptography; purpose, benefits and drawbacks of quantum cryptography.
- Show awareness of the Secure Socket Layer (SSL) / Transport Layer Security (TLS).
  *Notes:* purpose of SSL/TLS; use of SSL/TLS in client-server communication; situations where the use of SSL/TLS would be appropriate.
- Show understanding of digital certification.
  *Notes:* how a digital certificate is acquired; how a digital certificate is used to produce digital signatures.

---

## artificial-intelligence
**Syllabus ref:** 18.1 — Artificial Intelligence (AI) · A Level · Paper 3

- Show understanding of how graphs can be used to aid AI.
  *Notes:* purpose and structure of a graph; use A* and Dijkstra's algorithms to perform searches on a graph. Candidates will not be required to write algorithms to set up, access, or perform searches on graphs.
- Show understanding of how artificial neural networks have helped with machine learning.
- Show understanding of Deep Learning, Machine Learning and Reinforcement Learning and the reasons for using these methods.
  *Notes:* understand machine learning categories — supervised learning, unsupervised learning.
- Show understanding of back propagation of errors and regression methods in machine learning.

---

## algorithms-alevel
**Syllabus ref:** 19.1 — Algorithms (A Level) · A Level · Paper 4

- Show understanding of linear and binary searching methods.
  *Notes:* write an algorithm to implement a linear search; write an algorithm to implement a binary search; conditions necessary for the use of a binary search; how the performance of a binary search varies according to the number of data items.
- Show understanding of insertion sort and bubble sort methods.
  *Notes:* write an algorithm to implement an insertion sort; write an algorithm to implement a bubble sort; performance of a sorting routine may depend on the initial order of the data and the number of data items.
- Show understanding of and use Abstract Data Types (ADT).
  *Notes:* write algorithms to find an item in: linked list, binary tree; write algorithms to insert an item into: stack, queue, linked list, binary tree; write algorithms to delete an item from: stack, queue, linked list; understand that a graph is an example of an ADT; describe the key features of a graph and justify its use for a given situation. Candidates will not be required to write code for a graph structure.
- Show how it is possible for ADTs to be implemented from another ADT.
  *Notes:* describe the following ADTs and demonstrate how they can be implemented from appropriate built-in types or other ADTs: stack, queue, linked list, dictionary, binary tree.
- Show understanding that different algorithms which perform the same task can be compared by using criteria (e.g. time taken to complete the task and memory used).
  *Notes:* including use of Big O notation to specify time and space complexity.

---

## recursion
**Syllabus ref:** 19.2 — Recursion · A Level · Paper 4

- Show understanding of recursion.
  *Notes:* essential features of recursion; how recursion is expressed in a programming language; write and trace recursive algorithms; when the use of recursion is beneficial.
- Show awareness of what a compiler has to do to translate recursive programming code.
  *Notes:* use of stacks and unwinding.

---

## programming-paradigms
**Syllabus ref:** 20.1 — Programming Paradigms · A Level · Paper 4 (OOP/Imperative) · Paper 3 (Low-level/Declarative theory only)

- Understand what is meant by a programming paradigm.
- Show understanding of the characteristics of a number of programming paradigms:
  - **Low-level:** understanding of and ability to write low-level code that uses various addressing modes — immediate, direct, indirect, indexed and relative.
  - **Imperative (Procedural):** assumed knowledge and understanding of Structured Programming (see AS 11.3); understanding of and ability to write imperative (procedural) programming code that uses variables, constructs, procedures and functions (see AS 11.x).
  - **Object Oriented (OOP):** terminology (objects, properties/attributes, methods, classes, inheritance, polymorphism, containment/aggregation, encapsulation, getters, setters, instances); solve a problem by designing appropriate classes; write code that demonstrates the use of OOP.
  - **Declarative:** solve a problem by writing appropriate facts and rules based on supplied information; write code that can satisfy a goal using facts and rules.

*Note:* Paper 4 Practical does NOT assess low-level or declarative programming.

---

## file-processing-exceptions
**Syllabus ref:** 20.2 — File Processing and Exception Handling · A Level · Paper 4

- Write code to perform file-processing operations.
  *Notes:* open (read, write, append mode) and close a file; read a record from a file and write a record to a file; perform file-processing operations on serial, sequential, random files.
- Show understanding of an exception and the importance of exception handling.
  *Notes:* know when it is appropriate to use exception handling; write program code to use exception handling.

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
