# Chapter 16: System Software

Sources:
- https://moshikur.com/a2-level/a2-ch16-system-software/16-1-purposes-of-an-operating-system-os/
- https://moshikur.com/a2-level/a2-ch16-system-software/16-3-translation-software/

---

## 16.1 Purposes of an Operating System

### OS Functions

1. **Resource Maximisation** — ensures CPU, memory, and storage are used efficiently
2. **User Interface and Hardware Abstraction** — provides user-friendly interaction; hides hardware complexity from software
3. **Process Management** — handles multitasking through scheduling and state management
4. **Memory Management** — organises and allocates RAM and storage

### Process Management

#### Process States

| State | Description |
|---|---|
| **Running** | Actively being executed by the CPU |
| **Ready** | Prepared to run, waiting for CPU to be free |
| **Blocked** | Cannot continue until some other event happens |

#### Scheduling Algorithms

| Algorithm | Method | Benefit | Drawback |
|---|---|---|---|
| **Round-Robin** | Fixed time slice per process | Fair allocation | High context-switching overhead |
| **SJF** | Shortest execution time first | Minimises average wait time | Risk of starvation for longer jobs |
| **FCFS** | First arrival executes first | Simple implementation | Convoy effect delays shorter tasks |
| **SRT** | Shortest remaining time priority | Lower turnaround time | Complex; starvation risk |

#### Interrupt Handling

Interrupts signal the OS that something needs immediate attention:
1. Kernel saves current CPU state
2. Executes the interrupt handler
3. Resumes previous execution

### Memory Management

#### Paging

Divides programs into fixed-size **pages** loaded into **page frames** in RAM.
- Advantage: efficient memory use, no external fragmentation
- Disadvantage: page table overhead

#### Virtual Memory

Uses hard drive space as an extension of RAM, allowing programs larger than physical RAM to run.
- Advantage: programs larger than RAM can run
- Disadvantage: hard drive access is much slower than RAM

#### Segmentation

Divides programs into **segments** based on logical structure (code, data, stack).
- Advantage: logical organisation matching program structure
- Disadvantage: external fragmentation

#### Page Replacement Algorithms

| Algorithm | Method | Note |
|---|---|---|
| **FIFO** | Removes oldest page | Simple but inefficient |
| **LRU** | Removes least recently used page | More efficient but complex |
| **Optimal** | Removes page needed furthest in future | Theoretical only |

#### Disk Thrashing

Occurs when a computer spends more time swapping data between RAM and the hard drive than doing actual work.

**Prevention:** close programs, upgrade RAM, optimise software.

---

## 16.3 Translation Software

### Interpreters vs Compilers

**Interpreter** — translates and executes code line-by-line; no separate executable created.
- Slower execution
- Immediate error detection; ideal for development and scripting
- Languages: Python, JavaScript

**Compiler** — translates entire program into machine code before execution.
- Produces faster-running object files
- Full compilation required before any execution
- Preferred for production software

### Compilation Stages

#### 1. Lexical Analysis
- Breaks source code into **tokens** (keywords, identifiers, operators, punctuation)
- Removes whitespace and comments
- Creates a **symbol table** tracking variable declarations
- Detects basic errors (illegal characters)

#### 2. Syntax Analysis
- Verifies tokens form valid structures according to grammar rules
- Builds a **parse tree** representing grammatical structure
- Reports syntax errors (missing semicolons, unmatched brackets)

#### 3. Code Generation
- Traverses the parse tree and converts it into machine/assembly code
- Handles register allocation and memory management
- Produces object code

#### 4. Code Optimisation
- Improves execution speed and reduces memory usage without changing functionality
- Techniques: constant folding, dead code elimination, register allocation

### Grammar Representation

**Backus-Naur Form (BNF)** — formal text-based notation:
- Non-terminals in angle brackets: `<identifier>`
- Uses `::=` operator
- Example: `<assignment> ::= <identifier> "=" <expression>`

**Syntax diagrams** (railroad diagrams) — visual grammar:
- Ovals: terminals
- Rectangles: non-terminals
- Branching paths show alternatives

### Reverse Polish Notation (RPN)

Places operators **after** operands: `A B +` instead of `A + B`.

Benefits: eliminates need for brackets; no operator precedence needed.

**Stack-based evaluation:**
1. Push operands onto the stack
2. When an operator is encountered, pop operands, compute, push result
3. Final stack value is the result

**Example:** `5 1 2 + 4 * + 3 -` evaluates to `14`
