# 15 Hardware and Virtual Machines

**Course:** Cambridge International AS & A Level Computer Science (9618)
**Source:** Thinka

---

Study Notes: Hardware and Virtual Machines (A Level Content 9618)
15.1 Processors, Parallel Processing and Virtual Machines
15.2 Boolean Algebra and Logic Circuits
Study Notes: Hardware and Virtual Machines (A Level Content 9618)

Hello future Computer Scientist! This chapter dives deep into the engine room of computing: advanced hardware architecture and the clever software tricks that let one physical machine act like many—
the **Virtual Machine**.

Understanding these concepts is vital because it explains *why* some computers are faster at certain tasks than others, and how modern data centres manage massive workloads. Don't worry if terms like CISC or JK flip-flop sound intimidating; we'll break them down step-by-step!

15.1 Processors, Parallel Processing and Virtual Machines
15.1.1 Comparing Processor Architectures: RISC vs CISC

The instructions a CPU can understand form its **Instruction Set**. There are two main philosophies for designing instruction sets:

Reduced Instruction Set Computers (RISC)
Instruction Set: Small and highly optimised set of instructions.
Instruction Complexity: Instructions are simple and fixed in length (often 1 clock cycle).
Memory Access: Only special LOAD and STORE instructions access memory. All other operations (like ADD) happen within the CPU registers.
Goal: Maximise execution speed by using techniques like **pipelining**.
Analogy: A RISC processor is like a toolbox with only the most essential, high-quality tools, allowing work to flow quickly and efficiently.
Complex Instruction Set Computers (CISC)
Instruction Set: Large and varied set of instructions.
Instruction Complexity: Instructions can be very complex (e.g., one instruction might handle memory fetching, arithmetic, and storage). They take multiple clock cycles.
Memory Access: Many instructions can directly manipulate data in memory.
Goal: Minimise the number of instructions needed for a task (making the code smaller).
Analogy: A CISC processor is like a multi-function Swiss Army Knife—it can do many complex things in a single step, but each step takes longer.

Interrupt Handling Differences:

Handling interrupts is tricky for processors, especially when instructions take multiple cycles.

CISC: Since instructions are complex, interrupt handling is relatively simple. The processor usually waits until the current long instruction is completed before responding to the interrupt.
RISC: Instructions are simple and fast (often completed in a pipeline). If an interrupt occurs, the CPU must precisely identify which instruction in the pipeline failed or needs attention, potentially requiring the pipeline to be flushed and restarted, which makes the interrupt mechanism itself more complex to manage than in CISC.
15.1.2 RISC Efficiency: Pipelining and Registers

RISC architecture is designed to make the best use of two critical concepts: **Pipelining** and high usage of **Registers**.

Pipelining:

Imagine a car assembly line. Instead of building one car completely before starting the next, different stations work on different cars simultaneously (e.g., Car A is being painted while Car B is having its engine installed).

In a CPU, the instruction cycle (Fetch, Decode, Execute, Store) is broken into stages.
Pipelining allows the processor to perform different stages of multiple instructions concurrently.
Since RISC instructions are all the same length (fixed format) and take only one cycle, they are perfectly suited for smooth pipelining. This boosts throughput (the number of instructions completed per unit of time).

Registers in RISC:

RISC processors typically have a larger number of general-purpose registers than CISC processors.
Because most operations must happen within registers (not memory), having many available registers reduces the need to frequently access slower main memory (RAM). This is crucial for keeping the pipeline constantly supplied with data.
Quick Review: RISC vs CISC

Think "R" for Rapid and Register-focused. Think "C" for Complex and Comprehensive instructions.

15.1.3 Computer Architectures: Parallel Processing (Flynn's Taxonomy)

Computer architectures can be classified based on how many Instruction Streams (I) and Data Streams (D) they handle simultaneously. This is known as Flynn's Taxonomy.

I = Instruction Stream | D = Data Stream

SISD (Single Instruction, Single Data)

The classic Von Neumann architecture. One CPU executes one instruction on one data item at a time.
Example: A typical older desktop computer running a single program sequentially.

SIMD (Single Instruction, Multiple Data)

One instruction is executed simultaneously on multiple data items by many processing units.
Example: Used in vector processors, graphics processing units (GPUs) for tasks like video rendering or image processing where the same operation (e.g., changing the colour of a pixel) needs to be applied to vast amounts of data at once.

MISD (Multiple Instruction, Single Data)

Multiple different instructions operate on the same stream of data. This architecture is rarely implemented in practice but is theoretically possible, often used in fault-tolerant systems where different processors check the same data flow.

MIMD (Multiple Instruction, Multiple Data)

Multiple processors execute different instructions on different data sets simultaneously.
Example: Modern multi-core CPUs, massively parallel computers, and server farms. This is the foundation of massively parallel computers, which handle distinct, independent tasks simultaneously (like running multiple different applications at once).

Key Takeaway for Parallelism: MIMD is the most powerful and flexible model, used for general-purpose parallel processing, while SIMD is highly efficient for specific, repetitive calculation tasks (like graphics).

15.1.4 The Concept of a Virtual Machine (VM)

A **Virtual Machine (VM)** is an emulation of a computer system. It operates based on the computer architecture and functions of a real or hypothetical computer.
In simple terms, it's a software computer running inside a real computer.

The VM is managed by software called a **Hypervisor** (or Virtual Machine Manager).

Roles and Examples of Virtual Machines
Testing and Development: Developers can test software on different operating systems (OSs) without needing physical hardware for each OS.
Legacy Software: Running old applications that are incompatible with modern OSs (e.g., an old banking system requiring Windows 98).
OS Consolidation: A large server might run several different virtual servers (VMs) simultaneously, each handling a different task (web server, database server, email server). This is very common in data centres.
Security: VMs provide excellent isolation. If malware infects one VM, the host system and other VMs remain protected.
Benefits and Limitations of Virtual Machines

Benefits:

Isolation: Each VM operates independently; a crash in one doesn't affect others.
Portability: A VM image can be easily moved from one physical machine to another.
Resource Efficiency: Maximises the use of powerful underlying hardware by sharing resources among multiple virtual operating systems.
Snapshots: Allows the user to save the state of the system and revert to it instantly.

Limitations:

Performance Overhead: The hypervisor layer requires processing power, leading to reduced performance compared to running an OS directly on the hardware.
Resource Contention: If too many VMs try to access the same physical resource (like a disk drive) simultaneously, bottlenecks occur.
Storage: VMs require significant disk space for their operating systems and data.
15.2 Boolean Algebra and Logic Circuits

While AS Level introduced you to basic gates (AND, OR, NOT), A Level requires you to understand how these gates are assembled to perform arithmetic and store data.

15.2.1 Adders: Half and Full

Digital computers must be able to add binary numbers. This is done using logic circuits called adders.

Half Adder

A Half Adder is the simplest adder circuit. It takes two single binary inputs (A and B) and produces two outputs: a **Sum (S)** and a **Carry (C)**.

It cannot accept a carry-in from a previous addition.
The Sum output is the result of an XOR gate.
The Carry output is the result of an AND gate.

Truth Table:

A	B	Sum (S)	Carry (C)
0	0	0	0
0	1	1	0
1	0	1	0
1	1	0	1

Logic Expressions:
Sum:
𝑆
=
𝐴
⊕
𝐵
S=A⊕B
Carry:
𝐶
=
𝐴
⋅
𝐵
C=A⋅B

Full Adder

A Full Adder is essential for adding multi-bit numbers. It takes three inputs: two data bits (A and B) and a **Carry-In (
𝐶
𝑖
𝑛
C
in
	​

)** from the previous column's addition. It produces a **Sum (S)** and a **Carry-Out (
𝐶
𝑜
𝑢
𝑡
C
out
	​

)**.

Two Half Adders and one OR gate are typically used to construct a Full Adder.
These full adders are chained together to create the **Arithmetic Logic Unit (ALU)** that performs addition in the CPU.

Logic Expressions (Conceptual):
Sum:
𝑆
=
𝐴
⊕
𝐵
⊕
𝐶
𝑖
𝑛
S=A⊕B⊕C
in
	​

Carry Out:
𝐶
𝑜
𝑢
𝑡
=
(
𝐴
⋅
𝐵
)
+
(
𝐶
𝑖
𝑛
⋅
(
𝐴
⊕
𝐵
)
)
C
out
	​

=(A⋅B)+(C
in
	​

⋅(A⊕B))

15.2.2 Data Storage: The Flip-Flop

A **Flip-Flop** is the most basic sequential logic circuit. Unlike combinational circuits (like adders) whose outputs depend only on the current inputs, sequential circuits have memory. A flip-flop can store a single binary digit (1 bit) and is the building block of registers and cache memory.

SR (Set-Reset) Flip-Flop

The SR flip-flop has two inputs, Set (S) and Reset (R), and two outputs, Q and
𝑄
‾
Q
	​

 (Q-bar, the inverse of Q).

S = 1, R = 0 (Set): Forces Q to 1 (Stores a 1).
S = 0, R = 1 (Reset): Forces Q to 0 (Stores a 0).
S = 0, R = 0 (Hold/Memory): Q holds its previous state.
S = 1, R = 1 (Forbidden/Invalid): This state must be avoided because the resulting output Q is unpredictable or leads to oscillation.
JK Flip-Flop (The Improved Version)

The JK flip-flop eliminates the invalid state found in the SR type. It has two control inputs, J and K, and usually a clock input (making it a clocked flip-flop).

J is similar to Set, and K is similar to Reset.
J = 0, K = 0 (Hold): Q holds its previous state.
J = 1, K = 0 (Set): Forces Q to 1.
J = 0, K = 1 (Reset): Forces Q to 0.
J = 1, K = 1 (Toggle): This is the key difference. The output Q flips to the opposite of its current state. (If Q was 1, it becomes 0, and vice versa).

Did you know? Chains of flip-flops form registers (used in the CPU) and counters.

15.2.3 Simplifying Logic: Boolean Algebra and De Morgan's Laws

Boolean Algebra provides rules and theorems for mathematically simplifying logic expressions. Simplifying an expression means you can build the same circuit functionality using fewer, cheaper, or faster gates—this is circuit optimisation.

De Morgan's Laws

These two laws are crucial for simplifying expressions involving NAND and NOR gates (since these are often used in manufacturing).

Law 1: The negation of a conjunction (AND) is the disjunction (OR) of the negations.
Expression:
𝐴
⋅
𝐵
‾
=
𝐴
‾
+
𝐵
‾
A⋅B
=
A
+
B

Memory Trick: Break the line, change the sign. An inverted AND (NAND) is equivalent to two inverted inputs ORed together.

Law 2: The negation of a disjunction (OR) is the conjunction (AND) of the negations.
Expression:
𝐴
+
𝐵
‾
=
𝐴
‾
⋅
𝐵
‾
A+B
	​

=
A
⋅
B

Memory Trick: Break the line, change the sign. An inverted OR (NOR) is equivalent to two inverted inputs ANDed together.

Common Boolean Algebra Rules (for simplification)
Identity:
𝐴
+
0
=
𝐴
A+0=A;
𝐴
⋅
1
=
𝐴
A⋅1=A
Null/Dominance:
𝐴
+
1
=
1
A+1=1;
𝐴
⋅
0
=
0
A⋅0=0
Idempotent:
𝐴
+
𝐴
=
𝐴
A+A=A;
𝐴
⋅
𝐴
=
𝐴
A⋅A=A
Complementary:
𝐴
+
𝐴
‾
=
1
A+
A
=1;
𝐴
⋅
𝐴
‾
=
0
A⋅
A
=0
15.2.4 Visual Simplification: Karnaugh Maps (K-Maps)

When dealing with logic expressions involving three or four variables, using Boolean algebra alone can be time-consuming and prone to errors. **Karnaugh Maps (K-maps)** provide a graphical method to find the simplest possible (minimal) Sum-of-Products (SOP) expression.

How K-Maps Work

The K-map is a grid where each cell corresponds to one line of the truth table (one possible input combination).

Map the Truth Table: Place the output '1' (True) values from the truth table into the corresponding cells of the K-map.
Group the '1's: Group adjacent '1's into rectangles. Groups must be:
Rectangular (squares or lines).
Contain a number of '1's that is a power of 2 (1, 2, 4, 8, 16...).
As large as possible.
Groups can wrap around the edges of the map.
Write the Expression: For each group, identify the variable(s) that do not change state across the group. These form the simplified product term. (Variables that change are dropped).

Benefit of K-Maps:

They guarantee the most simplified circuit possible for up to four input variables, resulting in the use of the minimum number of logic gates, which reduces cost, power consumption, and propagation delay in the physical circuit.

Key Takeaway for Logic: Full adders allow sequential binary addition, flip-flops store data, and K-maps ensure that your final circuit design is as efficient as possible.

Ready to test yourself?

Turn these notes into exam-style practice. Get unlimited AI questions on this topic with instant marking and explanations.

Practice This Topic
More Computer Science (9618) chapters
Data Representation
Communication and internet technologies
System Software
Security
Artificial Intelligence (AI)
Computational thinking and Problem-solving

* The content provided by thinka is generated by AI and may not always be accurate or up-to-date. Please use it as a supplementary resource and verify with official materials.

Put These Notes into Practice

Reading the notes is a great start. Now practise with unlimited AI-generated questions and get instant feedback. 100,000+ students are already improving their grades.

Start Practising Now
View Pricing