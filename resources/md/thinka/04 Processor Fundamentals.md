# 04 Processor Fundamentals

**Course:** Cambridge International AS & A Level Computer Science (9618)
**Source:** Thinka

---

4. Processor Fundamentals: The Brain of the Computer
4.1 Central Processing Unit (CPU) Architecture
4.2 Assembly Language
4.3 Bit Manipulation
4. Processor Fundamentals: The Brain of the Computer

Hello future computer scientists! This chapter is incredibly important because we are finally diving into the "brain" of the computer: the Central Processing Unit (CPU). Understanding how the CPU works is fundamental to Computer Science. We'll explore its internal architecture, how it executes instructions, and how we can talk to it using the simplest programming language: Assembly Language.

Don't worry if terms like 'registers' or 'buses' sound like complex machinery—we will break them down using simple, real-world analogies. By the end of this chapter, you’ll know exactly how your computer processes every command you give it!

4.1 Central Processing Unit (CPU) Architecture
The Von Neumann Architecture and Stored Program Concept

Almost all modern computers are based on the Von Neumann Architecture. This concept, developed by John von Neumann, defines the structure of a computer system.

The core idea is the Stored Program Concept:

Both the program instructions and the data that the program uses are stored together in the same memory unit (Primary Memory or RAM).
This allows the CPU to fetch both instructions and data from memory using the same pathways (buses).

Analogy: Imagine a chef (the CPU) who stores both the recipe (instructions) and the ingredients (data) in the same pantry (memory). They use the same trip to the pantry whether they are fetching the next step or the next item.

Key Components of the CPU and System

The CPU and its immediate environment are composed of several key interactive components:

Arithmetic and Logic Unit (ALU): This is the "calculator" of the CPU. It performs all arithmetic operations (like addition, subtraction, multiplication, division) and logic operations (like AND, OR, NOT, comparisons).
Control Unit (CU): This is the "manager" or "traffic cop." It coordinates all activities of the CPU and directs the flow of data between the CPU and other devices. It decodes instructions and generates control signals.
Immediate Access Store (IAS): This is another name for the computer's Primary Memory (RAM). It holds the instructions and data currently being used by the processor.
System Clock: Generates timing signals (pulses) that synchronise all the operations of the CPU. The clock speed determines how many cycles the CPU can perform per second.
Registers (The CPU's Scratchpad)

Registers are small, ultra-fast memory locations inside the CPU itself. They hold temporary data needed immediately by the CPU.

Registers are split into two types:

General Purpose Registers: Used for temporary storage of data during arithmetic or logical operations (The Accumulator is often the only general-purpose register we consider in this syllabus).
Special Purpose Registers: Each has a specific, defined role in the Fetch-Execute cycle.

Here are the critical Special Purpose Registers you must know:

Program Counter (PC): Holds the memory address of the next instruction to be fetched. (It literally points to the next step.)
Memory Address Register (MAR): Holds the address of the memory location currently being read from or written to.
Memory Data Register (MDR): Holds the data or instruction that has just been fetched from or is about to be written to memory.
Accumulator (ACC): Holds the intermediate results of calculations performed by the ALU.
Current Instruction Register (CIR): Holds the instruction currently being decoded and executed.
Index Register (IX): Used in indexed addressing for modifying addresses, often when dealing with lists or arrays.
Status Register: Holds bits (flags) indicating the current state of the CPU, such as whether an overflow occurred, or if the last calculation result was zero.

Memory Aid: MAR is for Address, MDR is for Data. They work together to access memory.

Quick Review: Register Roles

If you need to know *where* to go in memory, you use the MAR. If you need to hold the actual *thing* you picked up, you use the MDR or ACC.

System Buses (The Data Highways)

Buses are sets of parallel wires connecting the components of the computer system, allowing data transfer. There are three main types:

Address Bus: Carries the address of the memory location or peripheral device being accessed.
Direction: Unidirectional (CPU outputs the address).
Impact: The width (number of lines) determines the maximum memory capacity the system can address.
Data Bus: Carries data or instructions between components.
Direction: Bidirectional (data flows both ways).
Impact: The width determines how many bits can be transferred simultaneously. (A wider bus means faster data transfer).
Control Bus: Carries control signals (like read, write, clock sync) that manage the timing and direction of data flow.
Direction: Unidirectional and Bidirectional (carries signals both ways).

Analogy: Think of a train system. The Address Bus is the train track (one way, dictates location). The Data Bus is the train carriage (carries the goods). The Control Bus is the signal box managing which train goes where.

The Fetch-Execute Cycle (F-E Cycle)

This is the continuous process the CPU performs to execute program instructions. It has three main phases: Fetch, Decode, and Execute.

Step-by-Step Cycle (with Register Transfer Notation - RTN)

1. Fetch Phase: Gets the next instruction from memory.

MAR ← [PC]: The address of the next instruction is copied from the Program Counter (PC) into the Memory Address Register (MAR).
PC ← [PC] + 1: The PC is incremented to point to the instruction that follows (preparing for the next cycle).
MDR ← [MAR]: The instruction stored at the address in MAR is fetched from memory and loaded into the Memory Data Register (MDR).
CIR ← [MDR]: The instruction is copied from the MDR into the Current Instruction Register (CIR).

2. Decode Phase: The Control Unit (CU) interprets the instruction stored in the CIR.

The CU figures out what the instruction means (e.g., ADD, JUMP, LOAD).
It prepares any data needed for execution, perhaps fetching operands from memory.

3. Execute Phase: The instruction is carried out.

If it’s an arithmetic or logic instruction, the ALU performs the operation (e.g., adds values to the ACC).
If it’s a jump/branch, the PC might be updated to a new address.
Control signals are sent to other components.

Key Takeaway: The F-E Cycle is an endless loop. It runs millions of times per second, moving addresses, fetching instructions, and performing calculations.

Factors Affecting CPU Performance

The speed and efficiency of a computer system are influenced by several hardware factors:

Processor Type and Number of Cores: More cores allow the CPU to run multiple F-E cycles simultaneously (parallel processing).
Clock Speed: Measured in Gigahertz (GHz). Higher clock speed means more Fetch-Execute cycles per second.
Bus Width: A wider Data Bus allows more bits to be transferred in parallel (e.g., 64-bit bus transfers data faster than a 32-bit bus).
Cache Memory: Very fast, small memory (SRAM) located on or near the CPU chip. It stores frequently used instructions and data, speeding up access significantly compared to accessing main RAM. More cache generally means better performance.
Peripheral Connections (Ports)

Different ports are used to connect peripheral devices to the computer:

Universal Serial Bus (USB): A versatile standard for connecting a wide range of peripherals (keyboards, mice, flash drives). It uses serial data transmission.
High Definition Multimedia Interface (HDMI): Used primarily for transmitting high-quality digital video and audio signals (e.g., connecting a PC to a monitor or TV).
Video Graphics Array (VGA): An older standard used to connect analogue displays. It only carries video signals, not audio.
Interrupts (Handling Emergencies)

An Interrupt is a signal sent from a device or software to the CPU, causing it to pause its current task and deal with the immediate urgent event.

Purpose: They ensure that time-critical events (like a key press or a disk read completion) are handled quickly, preventing the CPU from wasting time constantly checking (polling) devices.
Possible Causes: Hardware failure (e.g., power loss), I/O completion (printer finished job), timer expiring, or illegal instruction (dividing by zero).
Detection: The CPU checks for interrupts at the end of every Fetch-Execute cycle.
Handling Process:
CPU detects the interrupt signal.
The contents of all registers (especially the PC) are saved onto a special location (the stack) so the CPU can return to its previous task later.
The PC is loaded with the starting address of the corresponding Interrupt Service Routine (ISR).
The ISR is executed (this is the program that deals with the urgent request).
Once the ISR is complete, the original register contents are restored from the stack, and the CPU resumes its original task from where it left off.
KEY TAKEAWAY: 4.1 Summary

The Von Neumann architecture defines the stored program concept. The CPU runs the F-E cycle using special registers (PC, MAR, MDR, CIR, ACC). Buses transfer data and addresses, and interrupts allow the CPU to manage urgent external requests efficiently.

4.2 Assembly Language
Relationship Between Assembly Language and Machine Code

Machine Code is the lowest level of programming—it is the raw binary instructions (1s and 0s) that the CPU executes directly. It is tedious and nearly impossible for humans to read or write.

Assembly Language is a low-level programming language that uses mnemonics (short, easy-to-remember abbreviations like ADD, JMP, LDM) to represent machine code instructions.

Key Relationship: Assembly Language has a one-to-one relationship with machine code. One assembly instruction translates directly into one machine code instruction.
Assembler: A piece of software called an assembler translates the Assembly code into executable machine code.
The Two-Pass Assembler

Since assembly programs often use labels (symbolic names for memory addresses, like LOOP or START), the assembler needs two passes to fully translate the code.

Pass One: Building the Symbol Table

The assembler reads the entire source code line by line.
It identifies all labels used in the program.
It calculates the memory address where each label is defined.
It creates a Symbol Table which maps each label to its corresponding address.
*Crucially, no machine code is generated yet.*

Pass Two: Translation

The assembler reads the source code a second time.
It translates each mnemonic instruction into its binary machine code equivalent.
When it encounters a label used as an operand (e.g., JMP START), it looks up the actual memory address in the Symbol Table (created in Pass One) and inserts that address into the machine code instruction.
The final, executable machine code program is generated.

Why Two Passes? If an instruction early in the program (Pass 1) refers to a label defined later in the program (Pass 2), the assembler needs the Symbol Table to know what that later address is.

Groups of Instructions

Assembly language instructions are typically grouped by their function:

Data Movement: Moving data between registers and memory (e.g., LDM, STO, MOV).
Input and Output (I/O): Handling data transfer between the CPU and peripheral devices (e.g., IN, OUT).
Arithmetic Operations: Mathematical calculations (e.g., ADD, SUB, INC, DEC).
Unconditional Instructions: Instructions that always alter the flow of execution (e.g., JMP – Jump).
Conditional Instructions: Instructions that alter flow only if a condition in the Status Register is met, usually following a COMPARE instruction (e.g., JPE - Jump if True, JPN - Jump if False).
Compare Instructions: Used to set flags in the Status Register based on a comparison (e.g., CMP – Compare ACC contents).
Modes of Addressing

The addressing mode defines how the operand part of an instruction refers to the data required. This is essential for writing efficient assembly code.

We use the instruction set table provided in the syllabus as a reference (see page 21 of the syllabus excerpt).

Immediate Addressing (Opcode #n):
The operand itself is the actual data to be used.
Example: LDM #10 (Load the number 10 into the Accumulator).
Benefit: Fastest mode, as no memory access is needed for the data.
Direct Addressing (Opcode
):
The operand is the memory address where the data is stored.
Example: LDD 500 (Load the contents of memory location 500 into the ACC).
Benefit: Simple way to access a fixed memory location.
Indirect Addressing (Opcode I
):
The operand is an address that holds another address. The CPU fetches the address from the first location, then uses that second address to fetch the actual data.
Example: LDI 500 (Go to location 500. Read the address found there, say 800. Then load the contents of location 800 into the ACC).
Benefit: Useful for pointers or when you need to change where the data is pointing dynamically.
Indexed Addressing (Opcode X
):
The effective address is calculated by adding the address in the operand to the contents of the Index Register (IX).
Example: LDX 500 (Effective address = 500 + [IX]).
Benefit: Crucial for accessing elements in an array or list sequentially by simply incrementing the Index Register.
Relative Addressing:
Used primarily for jump/branch instructions. The address jumped to is relative to the current value of the Program Counter (PC).
Benefit: Allows jump instructions to be relocatable (if the program is moved in memory, the jumps still work correctly relative to the instruction).
KEY TAKEAWAY: 4.2 Summary

Assembly language uses mnemonics for machine code. The two-pass assembler handles labels by first building a symbol table and then translating. Addressing modes define how the instruction finds its data, ranging from immediate (data is in the instruction) to indexed (data location is calculated).

4.3 Bit Manipulation

Bit manipulation refers to the process of using logical operations or shifting to change individual bits within a register or memory location. This is fundamental in low-level programming for setting flags, scaling values, and controlling devices.

Binary Shifts

A binary shift moves all the bits in a register (like the ACC) to the left or right by a specified number of places (n).

1. Logical Shifts (LSL and LSR)
Logical Left Shift (LSL #n): Bits are moved 'n' places to the left. Zeros are introduced on the right-hand end.
Effect: Multiplying the value by
2
𝑛
2
n
.
Logical Right Shift (LSR #n): Bits are moved 'n' places to the right. Zeros are introduced on the left-hand end.
Effect: Dividing the value by
2
𝑛
2
n
.
2. Arithmetic Shifts

These shifts are designed for signed (Two’s Complement) numbers.

Arithmetic Left Shift: Same as Logical Left Shift.
Arithmetic Right Shift: Bits are moved right, but the leftmost bit (the Sign Bit) is preserved/copied to maintain the original sign of the number. Zeros are not introduced on the left if the number is negative (sign bit is 1).

Common Mistake: Logical shifts should *only* be used for unsigned numbers, as they do not preserve the sign bit.

3. Cyclic Shifts (Rotational Shifts)

Bits shifted off one end of the register are inserted back onto the opposite end. No bits are lost, and no zeros are introduced.

Example: If 10110010 is cyclically shifted left by 1 place, it becomes 01100101.

Bit Manipulation for Monitoring and Control (Bit Masking)

Bit manipulation, often called Bit Masking, is used to interact directly with hardware control registers. By using a "mask" (a specific binary pattern) with logical operators (AND, OR, XOR), we can isolate, set, or clear specific bits.

1. Setting a Bit (Using OR)

To ensure a specific bit is 1 (SET), we use the Bitwise OR operation with a mask that has a 1 only in the desired position.

OR Rule: X OR 1 = 1 and X OR 0 = X

Example: To set the 3rd bit (from the right, bit position 2) of ACC (01010000):

ACC: 0101 0000
MASK: 0000 0100
OR Result: 0101 0100 (The 3rd bit is now guaranteed to be 1.)

2. Clearing a Bit (Using AND)

To ensure a specific bit is 0 (CLEAR), we use the Bitwise AND operation with a mask that has a 0 only in the desired position (and 1s everywhere else).

AND Rule: X AND 0 = 0 and X AND 1 = X

Example: To clear the 8th bit (from the right, bit position 7) of ACC (11011100):

ACC: 1101 1100
MASK: 0111 1111 (We use the inverse of the bit we want to clear)
AND Result: 0101 1100 (The 8th bit is now guaranteed to be 0.)

3. Testing/Checking a Bit (Using AND)

To see if a bit is currently set (1), we use the Bitwise AND operation with a mask that has a 1 only in the position being tested.

If the result is zero, the bit was 0. If the result is non-zero, the bit was 1.

Example: Test the 5th bit (position 4) of ACC (10100000):

ACC: 1010 0000
MASK: 0001 0000
AND Result: 0000 0000 (The 5th bit was 0.)

KEY TAKEAWAY: 4.3 Summary

Binary shifts perform quick multiplication/division. Bit masking uses AND to clear bits, OR to set bits, and often AND to test the status of a specific bit in a hardware register.

Congratulations! You've now mastered the core principles of how a processor fundamentally operates. This knowledge forms the bedrock of understanding how all software interacts with hardware. Keep practicing the F-E cycle steps and the addressing modes—they are crucial exam topics!

Ready to test yourself?

Turn these notes into exam-style practice. Get unlimited AI questions on this topic with instant marking and explanations.

Practice This Topic
More Computer Science (9618) chapters
Information representation
Communication
Hardware
System Software
Security, privacy and data integrity
Ethics and Ownership

* The content provided by thinka is generated by AI and may not always be accurate or up-to-date. Please use it as a supplementary resource and verify with official materials.

Put These Notes into Practice

Reading the notes is a great start. Now practise with unlimited AI-generated questions and get instant feedback. 100,000+ students are already improving their grades.

Start Practising Now
View Pricing