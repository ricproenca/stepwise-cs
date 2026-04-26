# 11 Programming

**Course:** Cambridge International AS & A Level Computer Science (9618)
**Source:** Thinka

---

AS Level Computer Science (9618) Study Notes: Programming (Sections 11 & 12)
11. Programming
12. Software Development
AS Level Computer Science (9618) Study Notes: Programming (Sections 11 & 12)

Hello future programmer! Welcome to the heart of Computer Science: **Programming**. This chapter moves us from the theoretical world of algorithms (Section 9) and data structures (Section 10) into the practical skills of turning those ideas into working solutions.
We will learn the fundamental building blocks of writing code, how to organise our programs efficiently, and the crucial steps needed to plan, test, and maintain robust software.
Don't worry if writing code seems intimidating—we break everything down step-by-step. Mastering these skills is essential for Paper 2, where you will use pseudocode to solve problems!

11. Programming
11.1 Programming Basics

This section covers the core rules and tools we use to communicate instructions to the computer.

Variables, Constants, and Data Types

Think of computer memory as a giant storage locker.

Variable: A named storage location whose value can change during program execution.
Constant: A named storage location whose value is fixed and cannot be changed during execution. Using constants makes code clearer and safer (you can’t accidentally change a key value).

When you declare a variable or constant, you must specify its Data Type. This tells the computer what kind of information to expect and how much space to allocate.

Common AS Level Data Types (and their Pseudocode representations):

INTEGER: Whole numbers (e.g., 5, -100). Useful for counters or scores.
REAL: Numbers with fractional parts (e.g., 3.14, 0.5).
CHAR: A single letter, digit, or symbol (e.g., 'A', '7', '$').
STRING: A sequence of characters (e.g., "Hello World").
BOOLEAN: Only holds two values: TRUE or FALSE. Excellent for flags or conditions.

Declaration and Assignment:

We declare constants and variables at the start of the program or module.

Declaration (Variables): DECLARE StudentName : STRING
Declaration (Constants): CONSTANT PI = 3.14
Assignment (giving a value): StudentName ← "Alex"

Common Mistake to Avoid: Confusing assignment (`←`) with comparison (`=`). In pseudocode, `←` *puts* a value into a variable.

Input, Output, and Expressions

Programs must interact with the user (Input) and display results (Output).

Input: INPUT Age (Reads data from the keyboard and stores it in the variable Age).
Output: OUTPUT "Your age is ", Age (Displays text and the value of Age on the console).

An Expression combines values, variables, and operators (arithmetic or logical) to produce a single result.

Arithmetic Operators: +, -, *, /, DIV (integer division), MOD (remainder).
Logical Operators: AND, OR, NOT.

Did you know? Using built-in functions (like calculating the square root, SQRT(X)) and library routines (pre-written code chunks) saves programmers huge amounts of time and makes code more reliable, as these functions are already tested and proven correct.

Key Takeaway 11.1: Always declare variables and constants before use, choose appropriate data types, and understand the difference between input, process (expressions), and output.

11.2 Constructs (Control Structures)

The three basic building blocks of any algorithm are Sequence, Selection, and Iteration. We use control structures to implement Selection and Iteration.

Selection (Decision Making)

Selection allows the program to choose a path based on a condition (a Boolean expression).

1. IF...THEN...ELSE (and Nested IF)

Used when you have a simple choice between two or more outcomes.
Pseudocode Example:
IF Score > 75 THEN
OUTPUT "Distinction"
ELSE
OUTPUT "Pass"
ENDIF

2. CASE Structure

Used when you have many mutually exclusive outcomes based on the value of a single variable. This is cleaner than using many nested IF statements.
Pseudocode Example:
CASE DayOfWeek OF
1: OUTPUT "Monday"
5: OUTPUT "Friday"
OTHERWISE OUTPUT "Weekend or other day"
ENDCASE
Iteration (Looping/Repetition)

Iteration allows a block of code to be executed repeatedly. Choosing the right loop structure is important for efficient coding.

1. Count-Controlled Loop (FOR Loop)

Used when you know exactly how many times the loop needs to run.
Pseudocode Example: FOR Counter ← 1 TO 10

2. Pre-Condition Loop (WHILE Loop)

The condition is checked before the loop body executes. The loop may run zero or more times.
Used when the termination condition depends on external factors (like user input or file status).
Pseudocode Example:
WHILE InputValue <> -1 DO
// Loop body runs
ENDWHILE

3. Post-Condition Loop (REPEAT UNTIL Loop)

The condition is checked after the loop body executes. The loop is guaranteed to run at least once.
Used often for ensuring valid input (prompting the user until acceptable data is entered).
Pseudocode Example:
REPEAT
INPUT Password
UNTIL Password = "secret"

Justifying Loop Choice:

If a problem requires a specific number of repetitions (e.g., inputting 5 scores), use a FOR loop. If you must guarantee execution at least once (e.g., input validation), use REPEAT UNTIL. If the loop might not need to run at all (e.g., processing records in an empty file), use WHILE.

Key Takeaway 11.2: Selection controls the flow based on decisions (IF/CASE). Iteration controls repetition (FOR, WHILE, REPEAT). Know when to use each loop type!

11.3 Structured Programming (Procedures and Functions)

Structured Programming involves breaking down a large program into smaller, self-contained modules. This makes the code easier to write, debug, and maintain. These modules are called **subroutines**: Procedures and Functions.

Procedures (Subroutines that DO something)

A procedure is a named block of code that performs a specific task but does not necessarily return a value to the main program flow.

Appropriate Use: Tasks involving input/output, or modifying variables directly (like saving data to a file, or printing a menu).
Syntax: Defined using PROCEDURE and called simply by their name.

Example: A procedure to output a welcome message.

Functions (Subroutines that CALCULATE and RETURN)

A function is a named block of code that computes a value and returns that value back to the expression where it was called.

Appropriate Use: Mathematical calculations, string manipulation, or checking a condition (like calculating tax, or finding the length of a name).
Syntax: Defined using FUNCTION and used within an expression, where the return value replaces the call.

Example: Area ← CalculateArea(5, 10)

Parameters and Arguments

To make procedures and functions flexible, we pass them data via parameters.

Parameter: The identifier used within the procedure/function header to receive the data.
Argument: The actual value or variable passed when the procedure/function is called.

Parameters can be passed in two ways:

1. Pass By Value

A copy of the argument is passed.
Any changes made to the parameter inside the subroutine do not affect the original variable (argument) in the main program.
Analogy: Giving someone a photocopy of your notes. They can scribble all over the copy, but your original notes remain untouched.

2. Pass By Reference

The memory address (reference) of the argument is passed.
Any changes made to the parameter inside the subroutine will affect the original variable (argument) in the main program.
Analogy: Giving someone the actual key to your storage locker. They can change the contents permanently.
Terminology Check:
Procedure Header: The first line that defines the module (e.g., PROCEDURE PrintName(ByValue N))
Function Interface: Defines the name, parameters, and return type of the function.
Argument: The actual data passed when calling the function/procedure.
Key Takeaway 11.3: Procedures perform tasks; Functions calculate and return values. Passing by value protects the original data; passing by reference allows the subroutine to modify the original data.

12. Software Development

Writing the code (Section 11) is only one part of the job. Section 12 looks at the structure and discipline required to build large, reliable software systems.

12.1 Program Development Life Cycle (PLC)

The Program Development Life Cycle (PLC) is a structured framework that describes the steps required to develop, maintain, and eventually retire a software system. Its purpose is to ensure quality, manage complexity, and meet user requirements.

Stages of the PLC
Analysis: Defining the problem and identifying user requirements. (What does the system need to do?)
Design: Planning the solution structure, algorithms, and interface. (How will the system do it?)
Coding (Implementation): Writing the program code.
Testing: Checking the program for errors and ensuring it meets the requirements.
Maintenance: Fixing bugs and making updates after deployment.
Development Life Cycle Models

Different types of programs require different approaches.

1. Waterfall Model

Principle: Each stage must be completed before the next begins, flowing strictly downwards.
Benefit: Simple, highly structured, and easy to manage for small, well-understood projects.
Drawback: Very inflexible; if requirements change late, it is costly and difficult to go back up the waterfall.

2. Iterative Model

Principle: The project is developed in small, repeated cycles (iterations). A working prototype is created early and refined over time.
Benefit: Allows for early user feedback and adapts easily to changing requirements.
Drawback: Can lead to scope creep (the project grows endlessly) if not managed properly.

3. Rapid Application Development (RAD)

Principle: Focuses on creating prototypes rapidly through continuous user involvement, reducing planning time.
Benefit: Very fast development for projects where the user interface is critical and requirements are somewhat flexible.
Drawback: Not suitable for very complex, large-scale systems or situations requiring strict security/safety (e.g., aircraft control software).
Key Takeaway 12.1: The PLC guides software creation. Waterfall is rigid; Iterative and RAD are flexible and involve repeated cycles of design, code, and test.

12.2 Program Design

The Design phase (Stage 2 of the PLC) uses tools to plan the program structure before a single line of code is written.

Structure Charts

A Structure Chart is a hierarchical diagram used during **top-down design** to decompose a problem into smaller, manageable sub-tasks (modules, procedures, or functions).

Purpose: Shows the overall structure of the program and how modules relate to each other.
Key Feature: It explicitly shows the **parameters/data** passed between modules (using arrows with circles for data and arrows with diamonds for control flags).

Benefit: Encourages modularity and helps ensure that modules are independent, making testing much easier.

State-Transition Diagrams

A State-Transition Diagram documents an algorithm that operates in distinct states (conditions).

Purpose: Used to model systems where the current action depends on the history of previous inputs (e.g., traffic lights, vending machines, simple login systems).
Structure: Circles represent the States (conditions), and arrows represent the Transitions (actions or inputs that cause a change from one state to another).

Example: A state machine for a coffee machine might include states like "Waiting for Coin," "Coin Inserted," "Making Coffee."

Key Takeaway 12.2: Structure charts define the hierarchy and data flow between modules. State-transition diagrams model systems that change behavior based on their current status.

12.3 Program Testing and Maintenance

A program is useless if it doesn't work correctly. This section looks at finding, preventing, and fixing errors.

Types of Errors

Errors (or faults/bugs) fall into three main categories:

Syntax Error: Violates the grammar or rules of the programming language. The translator (compiler/interpreter) catches these. Example: Misspelling WHILE as WHIL.
Logic Error: The program runs successfully, but produces the wrong output because the algorithm is incorrect. The translator cannot catch these. Example: Using addition where multiplication was required.
Run-time Error: Occurs while the program is executing, causing it to crash or stop unexpectedly. Example: Division by zero, or trying to access an array index that doesn't exist.
Testing Strategy and Data

A **Test Strategy** defines the overall approach to testing, while a **Test Plan** is a specific document detailing what will be tested, how, and with what data.

You must select appropriate Test Data:

Normal Data: Data expected to be input (well within the acceptable range). E.g., if range is 1 to 100, use 50.
Extreme/Boundary Data: Data at the limits of the acceptable range. This is the most common place for errors to hide! E.g., if range is 1 to 100, use 1 and 100.
Abnormal Data: Invalid data intended to break the program (e.g., incorrect format, outside the range). E.g., if expecting a number 1 to 100, input "Apple" or 101.
Methods of Testing

These methods help expose faults in the code:

Dry Run: Manual step-by-step execution of code using a trace table (usually done on paper by the programmer).
Walkthrough: A team of developers manually examines the code line-by-line, often led by the author.
White-Box Testing: Tests based on knowing the internal structure and code paths of the program. Ensures every line of code is executed at least once. (Usually done by the developer).
Black-Box Testing: Tests based solely on specifications and expected outputs, without knowing the internal code structure. (Usually done by a separate testing team).
Integration Testing: Testing individual modules *together* to ensure they work correctly when communicating.
Alpha Testing: Testing done by in-house testers before release.
Beta Testing: Testing done by real users in a real-world environment before final release.
Acceptance Testing: Formal testing done by the client or end-user to confirm the system meets all contracted requirements.
Stub: A temporary, dummy module used during testing to simulate the functionality of a module that hasn't been written yet.
Program Maintenance

Software must be continually maintained after deployment.

Corrective Maintenance: Fixing faults and bugs found after the system is in use.
Adaptive Maintenance: Modifying the system to cope with changes in the environment (e.g., new operating system, new tax laws).
Perfective Maintenance: Improving the performance, efficiency, or maintainability of the software (e.g., optimising slow code, improving the user interface).
Key Takeaway 12.3: Testing must be rigorous and include Normal, Extreme, and Abnormal data. Logic errors are the hardest to find. Maintenance is essential and falls into three categories: Corrective, Adaptive, and Perfective.
Ready to test yourself?

Turn these notes into exam-style practice. Get unlimited AI questions on this topic with instant marking and explanations.

Practice This Topic
More Computer Science (9618) chapters
Information representation
Communication
Hardware
Processor Fundamentals
System Software
Security, privacy and data integrity

* The content provided by thinka is generated by AI and may not always be accurate or up-to-date. Please use it as a supplementary resource and verify with official materials.

Put These Notes into Practice

Reading the notes is a great start. Now practise with unlimited AI-generated questions and get instant feedback. 100,000+ students are already improving their grades.

Start Practising Now
View Pricing