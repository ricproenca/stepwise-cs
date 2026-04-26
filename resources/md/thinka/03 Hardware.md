# 03 Hardware

**Course:** Cambridge International AS & A Level Computer Science (9618)
**Source:** Thinka

---

Computer Science 9618 AS Level Study Notes: Chapter 3 - Hardware
3.1 Computers and their components
3.2 Logic Gates and Logic Circuits
Computer Science 9618 AS Level Study Notes: Chapter 3 - Hardware

Welcome to the exciting world of hardware! Understanding hardware is like learning the anatomy of a computer—it’s what allows everything else (software, data, and communication) to function. In this chapter, we will break down the essential components that make up any computer system, from mighty servers to tiny embedded chips, and then dive into the fundamental building blocks of electronics: Logic Gates.

Don't worry if some terms seem complicated; we will use simple analogies to make sure every concept sticks! Let's get started.

3.1 Computers and their components
The Essential Roles of Computer Components

Every general-purpose computer needs four main functions to operate. Think of these as the basic survival needs of the system:

Input: Getting data into the system (e.g., keyboard, microphone).
Processing: Manipulating the data (done by the CPU—covered in detail in Chapter 4!).
Primary Memory (Immediate Access Store - IAS): Temporary storage needed right now for the CPU to access data and instructions quickly (e.g., RAM).
Output: Presenting results to the user (e.g., screen, speakers).
Secondary Storage: Permanent storage for saving data and programs when the power is off (e.g., Hard Disk).
A Closer Look at Memory
Primary Memory: RAM vs ROM

Primary memory is essential for the CPU to work efficiently. There are two main types:

1. Random Access Memory (RAM)

Purpose: Stores data and instructions that are currently being used by programs.
Volatility: It is volatile. Analogy: RAM is like your desk workspace. If the power goes out, everything on the desk is lost.
Writeable: Data can be constantly read from and written to RAM.

2. Read Only Memory (ROM)

Purpose: Stores the essential instructions needed to start the computer (the Bootstrap program or firmware).
Volatility: It is non-volatile. Analogy: ROM is like a textbook—its information is fixed and remains even when the power is off.
Writeable: Typically only read-from, but modern types can be altered (see below).
Advanced ROM Types

Although ROM is usually "read-only," technology allows some ROM chips to be written to under specific conditions:

PROM (Programmable ROM): Can only be written to once, usually by the manufacturer or developer, using a special device.
EPROM (Erasable Programmable ROM): Can be erased by exposing it to strong UV light, and then rewritten. This is slow and cumbersome.
EEPROM (Electrically Erasable Programmable ROM): Can be erased and rewritten electrically, without removing it from the circuit board. This is common in modern devices (like storing BIOS settings).
SRAM vs DRAM

Both Static RAM (SRAM) and Dynamic RAM (DRAM) are volatile, but they have major differences in speed, size, and cost:

DRAM: Stores data using tiny capacitors that leak charge, so it needs to be constantly refreshed (hence 'Dynamic'). It is cheaper, denser (stores more data in less space), and is typically used for the main system memory.
SRAM: Stores data using six transistors (it's 'Static' because it doesn't need refreshing). It is much faster, more expensive, and less dense. SRAM is almost exclusively used for Cache Memory within the CPU or between the CPU and main memory, where speed is paramount.

Quick Review:
If speed is critical (like cache), use SRAM.
If large capacity and low cost are critical (like main memory), use DRAM.

Secondary Storage Devices

Secondary storage is non-volatile and keeps data long-term.

Magnetic Hard Disk Drives (HDD): Uses spinning magnetic platters to store data. Known for high capacity and relatively low cost.
Solid State Drives (SSD/Flash Memory): Uses non-volatile flash memory chips (often based on EEPROM technology). Faster access speeds, no moving parts, lower power consumption, but typically more expensive than HDDs.
Optical Disc Reader/Writer: Uses lasers to read/write data (CDs, DVDs, Blu-ray). Good for portable, archival storage.
Input, Output, and Buffers
Input and Output Devices

The syllabus requires you to know the principal operations of common I/O devices:

Printers (Laser/3D): Laser printers use static charge and toner to transfer images to paper. 3D printers use additive manufacturing, laying down layers of material (like plastic) based on a digital model.
Microphone: Converts analogue sound waves into digital signals.
Speakers: Converts digital audio signals back into analogue sound waves.
Touchscreen: Combines input and output functionality. Users provide input directly via touch coordinates.
Virtual Reality Headset: Provides immersive visual and auditory output, often incorporating input via motion tracking.
The Importance of Buffers

A Buffer is a small area of primary memory (RAM) used to temporarily hold data when transferring it between two components or processes that operate at different speeds.

Analogy: Imagine a printer (slow) receiving data from the computer (fast). If the computer sends too much data at once, the printer would crash. The buffer acts as a waiting room for the data, ensuring the slow device receives it at a manageable rate.

Embedded Systems

An Embedded System is a computer system with a dedicated function within a larger mechanical or electrical device.

Example: The tiny computer chip inside a smart washing machine, controlling spin speed, temperature, and cycle duration.

Benefits: Small size, low power consumption, cost-effective, and highly reliable (performs only one job).
Drawbacks: Hard to upgrade, limited resources (memory/processing power), and complex to program initially.
Monitoring and Control Systems

These systems are often based on embedded hardware and rely on sensors and actuators.

1. Monitoring Systems: Only observe and record data. They alert humans if a value goes outside a set range.
Example: A temperature monitoring system uses a temperature sensor to measure room temperature and displays it on a screen. If the temperature is too high, it sets off an alarm.

2. Control Systems: Use data to directly affect the environment without human intervention, using actuators.
Example: An air conditioning control system uses a temperature sensor, but if the temperature exceeds 25°C, it activates an actuator (the compressor) to turn on the cooling unit.

The concept of Feedback is crucial in control systems. The system continuously measures the output (the new temperature) and feeds that measurement back to the processor so it can adjust the actuator further.

Key Takeaway 3.1: Hardware ensures the four core functions (I/O, Processing, Storage) are met. Primary memory (RAM/ROM) is fast, while secondary storage is permanent. Control systems actively change the environment using actuators and feedback.

3.2 Logic Gates and Logic Circuits

Logic gates are the fundamental building blocks of digital electronic circuits. They take one or more binary inputs (0 or 1) and produce a single binary output (0 or 1) based on simple logical rules.

Logic Gate Symbols and Functions

We must be able to recognise the symbols and understand the function (and truth table) of six core gates. Remember, unless it's a NOT gate, all gates in this section will have two inputs.

1. The NOT Gate (Inverter)
Function: Inverts the single input. If A is 1, output is 0.
Symbol: (Imagine a triangle pointing right with a small circle (the 'inversion bubble') on the output line.)
2. The AND Gate
Function: Output is 1 only if ALL inputs are 1.
Analogy: I will go to the park AND get ice cream. (Requires both things to happen.)
3. The OR Gate
Function: Output is 1 if ANY input is 1 (or both).
Analogy: I will watch TV OR read a book. (Requires at least one thing to happen.)
4. The XOR Gate (Exclusive OR)
Function: Output is 1 if inputs are DIFFERENT (one is 1, the other is 0), but NOT if both are 1.
Analogy: I will have tea OR coffee, but not both. (Exclusive choice.)
5. The NAND Gate (NOT AND)
Function: The opposite of AND. Output is 0 only if BOTH inputs are 1.
6. The NOR Gate (NOT OR)
Function: The opposite of OR. Output is 1 only if BOTH inputs are 0.

Memory Aid: NAND and NOR gates always have the little circle (the 'inversion bubble') on their output side, showing they are inverted versions of AND and OR.

Truth Tables

A Truth Table shows all possible combinations of inputs and the resulting output for a logic gate or circuit.

Example Truth Table (OR Gate)

| Input A | Input B | Output Q |
|:-------:|:-------:|:--------:|
| 0 | 0 | 0 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 1 |

Constructing Logic Circuits and Expressions

You need to be able to convert between a problem statement, a logic expression, a logic circuit, and a truth table.

Step 1: Logic Expressions (Mathematical Representation)

Logic expressions use specific operators:

AND: Usually represented by a dot (
𝐴
⋅
𝐵
A⋅B) or multiplication sign (
𝐴
𝐵
AB).
OR: Usually represented by a plus sign (
𝐴
+
𝐵
A+B).
NOT: Represented by a bar over the letter (
𝐴
ˉ
A
ˉ
) or sometimes NOT(A).
XOR: Represented by a plus sign inside a circle (
𝐴
⊕
𝐵
A⊕B).

Example Expression: The output Q is true if A is true OR (B is true AND C is false).
Logic Expression:
𝑄
=
𝐴
+
(
𝐵
⋅
𝐶
ˉ
)
Q=A+(B⋅
C
ˉ
)

Step 2: Constructing the Logic Circuit

When drawing a circuit from an expression, follow the order of operations: NOTs first, then ANDs, then ORs.

For the expression
𝑄
=
𝐴
+
(
𝐵
⋅
𝐶
ˉ
)
Q=A+(B⋅
C
ˉ
):

Process
𝐶
ˉ
C
ˉ
 using a NOT gate on input C.
Process the term in the brackets: Take B and
𝐶
ˉ
C
ˉ
 into an AND gate.
Process the final term: Take A and the output of the AND gate into an OR gate. This final output is Q.
Step 3: Creating a Truth Table from a Circuit

To make a truth table for a complex circuit (e.g., one with three inputs A, B, C), list all
2
3
=
8
2
3
=8 possible combinations. Create temporary columns for the outputs of the intermediate gates until you reach the final output Q.

Struggling Students' Tip: When working with 3 inputs (A, B, C), the inputs always follow this binary pattern for the 8 rows: 000, 001, 010, 011, 100, 101, 110, 111. Write this down first!

Key Takeaway 3.2: Logic gates are electronic switches. Remember the six symbols (NOT, AND, OR, NAND, NOR, XOR). A truth table maps all possible binary inputs to the resulting output.

Great job completing the Hardware section! These concepts—from memory hierarchy to the fundamental logic gates—form the essential infrastructure upon which all software relies. Keep practising those logic conversions!

Ready to test yourself?

Turn these notes into exam-style practice. Get unlimited AI questions on this topic with instant marking and explanations.

Practice This Topic
More Computer Science (9618) chapters
Information representation
Communication
Processor Fundamentals
System Software
Security, privacy and data integrity
Ethics and Ownership

* The content provided by thinka is generated by AI and may not always be accurate or up-to-date. Please use it as a supplementary resource and verify with official materials.

Put These Notes into Practice

Reading the notes is a great start. Now practise with unlimited AI-generated questions and get instant feedback. 100,000+ students are already improving their grades.

Start Practising Now
View Pricing