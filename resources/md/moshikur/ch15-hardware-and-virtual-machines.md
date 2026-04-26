# Chapter 15: Hardware and Virtual Machines

Source: https://moshikur.com/a2-level/a2-ch15-hardware-and-virtual-machines/15-1-processors-and-parallel-processing/

---

## 15.1 Processors and Parallel Processing

### RISC vs CISC

**RISC (Reduced Instruction Set Computer)**
- Small, highly optimised set of instructions
- Each instruction executes in one clock cycle
- Complex tasks handled by software
- Uses more memory but enables efficient pipelining
- Found in: ARM processors (smartphones, tablets)

**CISC (Complex Instruction Set Computer)**
- Large set of instructions including complex ones
- Instructions may require multiple clock cycles
- Complex operations handled by hardware
- Single instructions can perform multiple operations
- Found in: Intel x86 processors (personal computers)

**Key distinction:** RISC prioritises speed through simplicity; CISC prioritises efficiency through complexity.

| Feature | RISC | CISC |
|---|---|---|
| Instruction set | Small, simple | Large, complex |
| Cycles per instruction | 1 | Multiple |
| Complexity location | Software | Hardware |
| Pipelining efficiency | High | Lower |
| Memory usage | More | Less |
| Example | ARM | Intel x86 |

### Interrupt Handling

- **RISC** — simplified handling; faster context switching and interrupt response
- **CISC** — complex handling involving microcode; potential delays when interrupting partially-completed instructions

### Pipelining in RISC

Multiple instructions occupy different stages simultaneously — 6 instructions needing 30 sequential cycles complete in ~10 cycles with pipelining.

**Five-stage pipeline:**

| Stage | Description |
|---|---|
| **IF** — Instruction Fetch | Retrieve instruction from memory |
| **ID** — Instruction Decode | Determine the operation |
| **OF** — Operand Fetch | Access register data |
| **IE** — Instruction Execute | Perform the operation |
| **WB** — Writeback | Store results |

### Key Registers

| Register | Description |
|---|---|
| **PC** — Program Counter | Holds address of the next instruction |
| **CIR** — Current Instruction Register | Holds the instruction being executed |
| **MAR** — Memory Address Register | Holds the memory address to be accessed |
| **MDR** — Memory Data Register | Holds data being transferred to/from memory |
| **ACC** — Accumulator | General-purpose arithmetic register |
| **SR** — Status Register | Contains processor status flags |

Registers provide faster access than RAM, reducing memory bottlenecks.

### Von Neumann Bottleneck

The processor cannot access memory fast enough to keep up with its own processing speed. The shared instruction/data bus creates a traffic jam, causing processor idle time.

Parallel processing and optimised register usage help mitigate this bottleneck.

---

### Parallel Processing Architectures (Flynn's Taxonomy)

| Architecture | Description | Example |
|---|---|---|
| **SISD** | Single instruction, single data — no parallelism | Early personal computers |
| **SIMD** | Single instruction, multiple data — same op on many datasets | GPUs, image processing |
| **MISD** | Multiple instructions, single data — different ops on same data | NASA Space Shuttle flight control |
| **MIMD** | Multiple instructions, multiple data — fully independent | Supercomputers, multicore systems |

### Parallel Computer Systems

**Cluster Computers** — a group of computers networked together, acting as a single system distributing workload.

**Massively Parallel Computers** — thousands of processors linked as a single machine for complex scientific problems.

**Architecture features:**
- Multiple independent processors
- High-speed interconnected data pathways
- Precise synchronisation mechanisms
- Specialised parallel software and programming languages

| Advantages | Challenges |
|---|---|
| Significantly reduces computation time | Design and management complexity |
| Overcomes Von Neumann bottleneck | Expensive hardware and specialised software |
| Scalable by adding processors | Communication overhead between processors |

**Applications:** Climate modelling, weather forecasting, scientific simulations (astrophysics, molecular biology), large-scale data processing and machine learning.

---

### Virtual Machines

A **software-based computer** that runs inside another computer, enabling multiple operating systems on single hardware.

- **Host OS** — the main OS installed on the physical machine; manages hardware resources
- **Guest OS** — the OS running inside the virtual machine; isolated from the host

**Uses:**
- Running multiple operating systems (Windows on Mac, Linux on Windows)
- Software testing across environments
- Cloud computing application hosting
- Cybersecurity virus analysis (malware contained within guest)

| Benefits | Limitations |
|---|---|
| Multiple OSes on one machine | Performance degradation from resource sharing |
| Isolation provides security | High RAM and storage requirements |
| Cost-efficient (no separate hardware) | Complex configuration |
| Snapshots enable quick restoration | Poor performance for GPU-intensive tasks |
| Flexible testing and development | Some malware detects virtual environments |
