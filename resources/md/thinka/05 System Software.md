# 05 System Software

**Course:** Cambridge International AS & A Level Computer Science (9618)
**Source:** Thinka

---

Welcome to System Software (A Level 9618)
16.1 Purposes of an Operating System (OS)
16.2 Translation Software
Welcome to System Software (A Level 9618)

Hello future Computer Scientist! This chapter, System Software, is where we peel back the curtain and see what truly makes a computer work behind the scenes.

We often think about apps and programs (which are application software), but none of that would run without the powerful system software managing everything. At A Level, we go deep into the mechanics of the Operating System (OS) and the vital processes used by Language Translators.

Don't worry if concepts like 'paging' or 'lexical analysis' sound complicated—we will break them down using simple analogies, making sure you master this essential knowledge for your exams!

16.1 Purposes of an Operating System (OS)
What is an Operating System?

The Operating System (OS) is the master program that manages all the computer's resources—the CPU, memory, files, and peripheral devices. It acts as the intermediary between the hardware and the user/applications.

OS Function 1: Maximising Resource Use and Hiding Complexity

The primary job of the OS is to maximise the use of resources (like the CPU time and memory space).

User Interface: The OS provides a user interface (like Windows or macOS) which allows you to interact with the computer using simple icons and menus. This interface hides the complexities of the hardware.
Analogy: Imagine driving a car. You use the steering wheel and pedals (the interface). You don't need to know the complex physics of the internal combustion engine or how the gears mesh (the hidden hardware complexity).
OS Function 2: Process Management (Multi-tasking)

When you open multiple programs (e.g., streaming music, writing an essay, and running a calculation), the OS manages these simultaneous tasks through process management.

A process is simply a program currently running. The OS uses multi-tasking to make it look like all processes run at once, but in reality, the CPU rapidly switches between them.

Process States

A process can be in one of three fundamental states:

Running: The process is currently executing instructions on the CPU. (Only one process can be truly running per CPU core at any moment).
Ready: The process is prepared to execute but is waiting for the CPU to become available.
Blocked: The process cannot proceed because it is waiting for an external event to occur (e.g., waiting for user input from the keyboard, or data from the hard disk).

Quick Trick: Remember R-R-B (Running, Ready, Blocked).

The Need for Scheduling

To manage which process gets the CPU next, the OS uses a scheduler and scheduling routines. The goal of scheduling is often to maximise throughput, ensure fairness, and reduce response time.

You need to understand the function and benefits of different scheduling routines:

Round Robin (RR): Each process gets a fixed, short time slice (quantum) on the CPU. If the time slice ends, it moves to the back of the queue.
Benefit: Excellent fairness and response time for interactive users.
Shortest Job First (SJF): The process with the smallest estimated execution time is run next.
Benefit: Maximises throughput (gets the most jobs done quickly).
First Come First Served (FCFS): The process that requests the CPU first gets it first.
Benefit: Simple to implement; highly fair (no starvation).
Shortest Remaining Time (SRT): A pre-emptive version of SJF. If a new job arrives that has a shorter total time than the remaining time of the current running job, the new job takes over.
Benefit: Even better throughput than SJF.
OS Function 3: The Kernel and Interrupts

The Kernel is the core component of the OS. It is loaded first when the computer boots up and handles the most critical low-level tasks, such as managing memory and handling interrupts.

The kernel acts as an interrupt handler. An interrupt is a signal sent to the CPU that temporarily stops the currently running process so the CPU can deal with a high-priority event (like a disk error, I/O completion, or timer signal).

When an interrupt occurs, the kernel saves the current state of the running process (using registers like the PC and ACC).
It identifies the type of interrupt.
It executes the appropriate Interrupt Service Routine (ISR).
Once the ISR is complete, the kernel restores the original process state, and the process continues where it left off.
OS Function 4: Virtual Memory, Paging, and Segmentation

Virtual Memory is a technique where the OS uses secondary storage (the hard disk) to simulate extra RAM, allowing programs larger than the physical RAM to run.

The two main methods the OS uses to manage memory (especially virtual memory) are Paging and Segmentation:

Paging
Concept: Main memory (RAM) is divided into fixed-size blocks called page frames. The program is divided into fixed-size blocks called pages.
When a program needs memory, pages are swapped between the disk and RAM.
Segmentation
Concept: The program is divided into logical, variable-size blocks called segments (e.g., one segment for the main program code, one for data, one for a subroutine).
Segments are swapped between disk and RAM.
Difference: Pages are physical and fixed size; segments are logical and variable size.

Disk Thrashing

This is a critical term! If the OS spends more time moving pages/segments between RAM and the hard disk (swapping) than it spends executing the program instructions, this is called disk thrashing.

Result: The system slows down dramatically because the CPU is constantly waiting for the slower disk access.
How pages can be replaced: If the OS needs space for a new page, it must replace an existing one, often choosing the one that hasn't been used recently (Least Recently Used – LRU) to avoid swapping out a frequently needed page.
Key Takeaway for 16.1

The A-Level focus is on the *mechanisms* of multi-tasking and memory management. Remember the three process states (R-R-B) and the core difference between paging (fixed, physical) and segmentation (variable, logical).

16.2 Translation Software

Source code (written by humans in a high-level language like Python) must be converted into machine code (binary instructions) so the CPU can execute it. This is the job of translation software.

Recap: Assemblers, Compilers, and Interpreters
Assembler: Translates assembly language (low-level, human-readable instructions) into machine code.
Compiler: Translates the entire high-level program into machine code before execution. Produces an executable file. (AS Level content, but critical prerequisite).
Interpreter: Translates and executes the high-level program one line at a time. It does *not* produce a separate translated version.

Did you know? Languages like Java (console mode) use a mix: they are first compiled into an intermediate bytecode, which is then interpreted by the Java Virtual Machine (JVM). This is why some programs are described as partially compiled and partially interpreted.

The Compilation Process: Four Stages (A-Level Depth)

When a program is compiled, it goes through several distinct stages to ensure correctness and efficiency.

Stage 1: Lexical Analysis (The Scanner)
Purpose: Breaks the source code into meaningful units called tokens.
It removes comments and white space.
It identifies keywords (e.g., IF, WHILE), identifiers (variable names), constants, and operators.
Tokens are stored in a symbol table.
Analogy: Reading a sentence and identifying the individual words, separating them by spaces.
Stage 2: Syntax Analysis (The Parser)
Purpose: Checks the program structure (syntax) against the grammar rules of the language.
It uses the tokens created in Stage 1 to build a parse tree (or abstract syntax tree).
If an error is found (e.g., a missing semicolon or bracket), the compiler halts and reports a syntax error.
Analogy: Checking if the sentence structure is grammatically correct (e.g., "The cat sat on the mat" is correct, "Cat the on sat mat" is a syntax error).
Stage 3: Code Generation
Purpose: If the syntax is correct, the compiler translates the parse tree into intermediate code, and finally into the target machine code (or assembly code).
Stage 4: Optimisation
Purpose: Examines the generated machine code to make it run faster or take up less memory (i.e., make it more efficient).
Example: If a variable is assigned a value that is never used later, the optimiser might remove that line of code.
Expressing Language Grammar

To perform syntax analysis, the compiler needs precise rules describing what valid programs look like. These rules are known as the language's grammar, and they are expressed using formal methods:

Backus-Naur Form (BNF) Notation

BNF is a meta-language (a language used to describe another language) used to express the syntax of programming languages.

It uses symbols like ::= (is defined as), | (or), and angle brackets < > for non-terminal symbols (elements that need further definition).
Example: <digit> ::= 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
Syntax Diagrams

Syntax Diagrams are graphical representations of grammar rules. They act like flowcharts, showing the paths that must be followed to construct a valid part of the language (like a valid identifier or valid loop structure).

Benefit: They are often easier for humans to read and follow than BNF.
Reverse Polish Notation (RPN)

When evaluating mathematical expressions, computers prefer to use a method that removes the need for brackets and operator precedence (the rules of BODMAS/BIDMAS). This method is Reverse Polish Notation (RPN), also known as Postfix notation.

In RPN, the operator follows the operands (the numbers).

Standard (Infix):
10
+
5
10+5
RPN (Postfix):
10

5

+
10 5 +

How RPN is Evaluated (Using a Stack):

RPN expressions are evaluated using a stack (a LIFO data structure).

Scan the expression from left to right.
If the item is a number (operand), push it onto the stack.
If the item is an operator, pop the necessary number of operands from the stack (usually two), perform the operation, and push the result back onto the stack.

Example Trace: Evaluate
5

3

+

2
×
5 3 + 2×

Step 1: Push 5. Stack: [5]
Step 2: Push 3. Stack: [5, 3]
Step 3: Operator '+'. Pop 3 and 5. Calculate
5
+
3
=
8
5+3=8. Push 8. Stack: [8]
Step 4: Push 2. Stack: [8, 2]
Step 5: Operator '
×
×'. Pop 2 and 8. Calculate
8
×
2
=
16
8×2=16. Push 16. Stack: [16]
Result: 16

Benefit: The expression is evaluated exactly as read, simplifying the code needed for the compiler's internal calculations.

Key Takeaway for 16.2

Remember the sequence of compilation (Lexical -> Syntax -> Code Gen -> Optimization). Understand that RPN uses a stack to evaluate expressions without needing brackets, which is crucial for efficient computer processing.

Ready to test yourself?

Turn these notes into exam-style practice. Get unlimited AI questions on this topic with instant marking and explanations.

Practice This Topic
More Computer Science (9618) chapters
Data Representation
Communication and internet technologies
Hardware and Virtual Machines
Security
Artificial Intelligence (AI)
Computational thinking and Problem-solving

* The content provided by thinka is generated by AI and may not always be accurate or up-to-date. Please use it as a supplementary resource and verify with official materials.

Put These Notes into Practice

Reading the notes is a great start. Now practise with unlimited AI-generated questions and get instant feedback. 100,000+ students are already improving their grades.

Start Practising Now
View Pricing