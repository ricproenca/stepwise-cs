# Chapter 05: System Software

Sources:
- https://moshikur.com/as-level/as-ch05/5-1-operating-systems/
- https://moshikur.com/as-level/as-ch05/5-2-language-translators/

---

## 5.1 Operating Systems

### Definition

An Operating System is system software that manages the computer's hardware, software resources, and provides services for running programs.

### 5.1.1 Why a Computer Needs an OS

1. **Hardware management** — controls CPU, RAM, storage, peripherals without interference
2. **Software execution** — loads applications into memory and manages execution
3. **User Interface (UI)** — GUI (icons/windows) or CLI (typed commands)
4. **File and storage management** — saving, loading, organising files, controlling permissions
5. **Multitasking** — runs multiple applications simultaneously through rapid switching
6. **System security** — login systems, file permissions, firewalls, malware protection
7. **Error detection and handling** — detects hardware failures, memory overflow, file system errors

---

### 5.1.2 Key Management Tasks

#### Memory Management

| Function | Description |
|---|---|
| Allocation | Assigns RAM to running programs |
| Deallocation | Frees memory after programs close |
| Protection | Prevents programs accessing each other's memory |
| Sharing | Allows controlled memory sharing between processes |
| Virtual memory | Extends RAM using hard drive space when needed |

#### File Management

- Creating, editing, saving, moving, deleting files
- Organising into hierarchical folder structures
- Managing access permissions
- Supporting backup and recovery
- File systems: NTFS (Windows), FAT32, ext4 (Linux)

#### Security Management

| Layer | Description |
|---|---|
| User authentication | Usernames/passwords confirm identity before access |
| Access control | Read / Write / Execute permissions per user |
| User accounts | Separate profiles, settings, and access rights |
| Malware protection | Antivirus defends against viruses, worms, trojans, spyware |
| System updates | Patches fix known vulnerabilities |

#### Hardware Management (I/O)

- **Device drivers** — small programs acting as translators between the OS and hardware
- **Input management** — receives input from devices and routes to appropriate applications
- **Output management** — sends data to output devices via drivers; manages print queues
- **Interrupt handling** — devices send interrupts; OS pauses current processes to respond

#### Process Management

A **process** is a program that is currently running on a computer.

**Process states:**

| State | Meaning |
|---|---|
| Ready | Waiting for CPU time |
| Running | Currently using the CPU |
| Blocked | Waiting for I/O to complete |
| Terminated | Finished and removed from memory |

**Scheduling algorithms:**
- **Round-robin** — each process gets a fixed time slot
- **Priority-based** — higher priority processes run first

**Context switching** — OS saves the current process state and loads the next process many times per second, enabling multitasking.

---

### 5.1.3 Utility Software

#### Disk Formatter

Prepares storage devices with a file system for data storage.
- Erases existing data, creates new file system, organises sectors/tracks
- **Quick format** — removes pointers only (faster); **Full format** — erases all and checks for errors

#### Virus Checker

Detects, prevents, quarantines, and removes malware.

**Detection methods:**
- **Signature-based** — compares files to a database of known virus signatures
- **Heuristic analysis** — identifies suspicious behaviour patterns (catches new threats)

Features: real-time monitoring, quarantine, automatic database updates, scheduled scans.

#### Defragmentation Software

Reorganises scattered file fragments on a hard disk to improve performance.
- **HDDs** — beneficial; reduces read/write head movement
- **SSDs** — harmful; no performance gain and reduces lifespan

#### Disk Repair Software

Examines storage, checks for errors, fixes file system problems, identifies bad sectors.
- Windows: `CHKDSK` | macOS: Disk Utility | Linux: `fsck`

#### File Compression Software

Reduces file size through algorithms removing redundancy.
- **Lossless** (ZIP, RAR, 7z) — full restoration; **Lossy** — some data removed (images, audio)

#### Backup Software

Creates copies of data for recovery during loss or damage.

| Type | Details |
|---|---|
| Full | Copies all selected files each time |
| Incremental | Copies only files changed since the last backup |
| Differential | Copies all changes since the last full backup |

**3-2-1 Rule:** 3 copies, on 2 types of media, with 1 copy off-site.

---

### 5.1.4 Program Libraries

A **library** is a collection of pre-written, tested code usable by other programs for common tasks (sorting, searching, file handling, maths, graphics).

**Benefits:** saves time, reduces errors, easier maintenance, faster development, modular design.

#### Dynamic Link Libraries (DLLs)

Stored separately from the main program; loaded at runtime only when needed.

| Aspect | Static Library | DLL |
|---|---|---|
| Loading | At compile time | At runtime |
| File size | Larger executable | Smaller executable |
| Updates | Requires recompilation | Updated independently |
| Sharing | Included per program | Shared by multiple programs |

---

## 5.2 Language Translators

### 5.2.1 Types of Translators

#### Assembler

Converts assembly language mnemonics (e.g. `MOV`, `ADD`, `SUB`) into binary machine code.
- Each assembly instruction maps directly to a CPU operation
- Provides error checking and automation

#### Compiler

Translates an entire high-level program into machine code before execution, producing a standalone executable file.

| Benefits | Drawbacks |
|---|---|
| Fast execution after compilation | Lengthy initial compilation time |
| Creates distributable executable | All errors reported at once |
| Protects source code | Larger output file |
| No recompilation needed to run | |

#### Interpreter

Reads and executes programs line-by-line, translating each instruction immediately.

| Advantages | Disadvantages |
|---|---|
| Immediate error reporting | Slower execution (retranslates each run) |
| Rapid debugging | No standalone executable created |
| No separate compile step | Requires interpreter to be present |
| Good for education/testing | Source code exposed during distribution |

---

### 5.2.2 Compiler vs. Interpreter

| Scenario | Best Choice | Reason |
|---|---|---|
| Development / testing | Interpreter | Immediate feedback; easier debugging |
| Final release | Compiler | Protected code; efficient execution |
| Educational use | Interpreter | Instant results; easy experimentation |
| Commercial software | Compiler | Performance and secure distribution |

---

### 5.2.3 Hybrid Translation

Programs are partially compiled then interpreted through a virtual machine.

**Java example:** source code → **bytecode** (intermediate) → **JVM** (Java Virtual Machine) interprets bytecode.

| Benefits | Drawbacks |
|---|---|
| Platform-independent execution | Slower than full compilation |
| Better debugging | Requires virtual machine installed |
| Balanced performance | Additional runtime dependency |

---

### 5.2.4 Integrated Development Environment (IDE) Features

| Feature | Description | Benefit |
|---|---|---|
| **Auto-completion** | Finishes commands and keywords automatically | Faster typing, fewer syntax errors |
| **Syntax highlighting** | Keywords/variables shown in distinct colours | Improved readability and error spotting |
| **Error detection** | Real-time underline/highlighting of mistakes | Immediate identification before running |
| **Auto-indentation** | Aligns code automatically | Enforces readable structure |
| **Single stepping** | Executes one line at a time | Traces program flow for debugging |
| **Breakpoints** | Pauses execution at a set line | Inspects state at specific points |
| **Variable watch** | Displays variable values at runtime | Identifies logic errors in values |
| **Report windows** | Shows execution messages and results | Monitors intermediate output |
