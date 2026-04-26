# 09 Algorithm Design and Problem-solving

**Course:** Cambridge International AS & A Level Computer Science (9618)
**Source:** Thinka

---

AS Level Computer Science (9618) Study Notes
9.1 Computational Thinking Skills
9.2 Algorithms
9.2 Algorithm Constructs: The Building Blocks
9.2 Algorithm Techniques
Standard Algorithms (Linear Search and Bubble Sort)
AS Level Computer Science (9618) Study Notes
Chapter 9: Algorithm Design and Problem-solving

Hello! Welcome to the heart of Computer Science. This chapter is about learning how computers think—or rather, how we teach them to think. Algorithm design is the essential skill for turning a real-world problem into a step-by-step solution that a machine can execute.

If you can master the logical techniques here, programming will become much easier. Don't worry if the concepts seem abstract at first; we’ll break everything down using everyday examples!

9.1 Computational Thinking Skills

Computational Thinking is the set of mental tools we use to solve problems efficiently using computer-based approaches. The two most important skills here are Abstraction and Decomposition.

A. Abstraction

Abstraction means focusing on the essential features of a problem while ignoring or hiding the irrelevant details.

When you create an abstract model of a system, you are only including the details necessary to solve the problem at hand.

Analogy: Using a Map

Imagine you are using a GPS app to drive home.

The map shows essential details: roads, junctions, and your current location.
It ignores irrelevant details: the colour of every car, the number of leaves on the trees, or the names of every shop.

This filtered view is an abstract model. If the map included everything, it would be too complex to use for navigation.

Why use Abstraction?

It simplifies complex systems, making them easier to manage and understand.
It allows developers to focus on the core functionality without getting bogged down in implementation details.
It helps define the necessary data and processes clearly.

Quick Review: Abstraction is all about filtering out the noise (non-essential details) to see the signal (essential details).

B. Decomposition

Decomposition is the process of breaking down a large, complex problem into smaller, more manageable sub-problems (or tasks). These sub-problems can then be solved individually.

Analogy: Baking a Cake

Baking a complicated birthday cake is a huge task, but you can decompose it:

Make the sponge (Sub-problem 1).
Prepare the frosting (Sub-problem 2).
Decorate the cake (Sub-problem 3).

Each sub-problem is easier to solve and can be delegated or completed separately. In programming, these sub-problems often become program modules, such as procedures or functions.

Benefits of Decomposition:

Makes problems easier to solve and debug.
Allows different parts of the program to be developed simultaneously by different teams (or by writing separate modules).
The modules can often be reused in other projects.

Key Takeaway: Computational Thinking gives us the framework: Decomposition breaks the task down, and Abstraction simplifies the resulting pieces.

9.2 Algorithms
A. Defining an Algorithm

An Algorithm is simply a set of well-defined, ordered steps or instructions that, when followed, guarantees a solution to a problem.

Think of an algorithm as a cooking recipe: it tells you exactly what steps to take, in what order, using specific ingredients (data) to get a predictable result (the solved problem).

B. Representing Algorithms

We need ways to write down an algorithm before we write the actual code. The syllabus requires you to be familiar with three main forms of representation:

1. Structured English (or Narrative Description)

This uses plain English combined with reserved keywords (like IF, THEN, ELSE, WHILE) to describe the logic clearly. It’s useful for high-level descriptions.

Example: IF score is greater than 90 THEN output "Distinction".

2. Flowcharts

Flowcharts use graphical symbols to show the sequence of steps, the flow of control, and the logic of the algorithm.

You must know the standard symbols:

Oval: Start/End (Terminator)
Parallelogram: Input/Output
Rectangle: Process/Calculation
Diamond: Decision/Selection (Usually asks a Yes/No question)
Arrows: Flow lines (Show the direction of control)
3. Pseudocode

Pseudocode is an artificial, informal language that helps programmers develop algorithms. It is not tied to any specific programming language but uses common structural conventions (like IF, WHILE, FOR).

Importance: Pseudocode is the primary way you will write algorithms in your exams. It is detailed enough to translate easily into real code, but readable enough for a human to understand the logic. (Always refer to the official Cambridge Pseudocode Guide for specific keywords!)

C. Using Identifiers

When solving a problem, we need to name the data we are using (variables, constants, arrays). These names are called identifiers.

Rule: Always use suitable identifier names. They should be meaningful and accurately reflect what the data represents.

Instead of: x = y * 5
Write: TotalCost = ItemPrice * Quantity

In the exam, you may be asked to document the data used by a problem using an identifier table:

Identifier	Data Type	Description
NumItems	INTEGER	Stores the number of items purchased (must be positive).
ItemPrice	REAL	Stores the price of a single item.

Did You Know? Using good identifiers is crucial for maintenance. If someone else has to fix your code five years later, they’ll thank you for choosing descriptive names!

9.2 Algorithm Constructs: The Building Blocks

All algorithms, regardless of complexity, are built using three fundamental constructs: Sequence, Selection, and Iteration.

A. Sequence

Sequence means executing instructions one after the other, in the order they appear.

Example (Pseudocode):
INPUT Name
OUTPUT "Welcome"

B. Selection (Decision Making)

Selection allows the algorithm to choose which path to follow based on a condition (usually Boolean: TRUE or FALSE).

1. IF...THEN...ELSE

This is used for choosing between two or more paths.

Example (Pseudocode):
IF Temperature > 30 THEN
    OUTPUT "It's a hot day"
ELSE
    OUTPUT "It's comfortable"
ENDIF

2. CASE OF / OTHERWISE (SWITCH)

This is useful when you have many possible fixed choices based on the value of a single variable.

Example (Pseudocode):
CASE OF DayNumber
    1: OUTPUT "Monday"
    5: OUTPUT "Friday"
    OTHERWISE: OUTPUT "Weekend"
ENDCASE

C. Iteration (Repetition/Loops)

Iteration allows a set of instructions to be repeated.

1. Count-Controlled Loop (FOR Loop)

Repeats a fixed number of times.

Example (Pseudocode):
FOR Counter = 1 TO 10
    OUTPUT Counter
NEXT Counter

2. Pre-Condition Loop (WHILE Loop)

The condition is checked before the loop body executes. If the condition is initially FALSE, the loop never runs.

Example (Pseudocode):
WHILE Total < 100 DO
    INPUT Number
    Total = Total + Number
ENDWHILE

3. Post-Condition Loop (REPEAT UNTIL Loop)

The condition is checked after the loop body executes. This guarantees the loop will run at least once.

Example (Pseudocode):
REPEAT
    INPUT Password
UNTIL Password = "secret"

Common Mistake Alert: Students often confuse WHILE and REPEAT UNTIL. Remember: WHILE checks first (might run 0 times). REPEAT UNTIL checks last (runs at least 1 time).

Key Takeaway: All software logic is built from just these three constructs: Sequence, Selection, and Iteration.

9.2 Algorithm Techniques
D. Stepwise Refinement (Top-Down Design)

Stepwise refinement is the process of breaking an algorithm down into increasingly detailed levels. You start with a very general description and refine each step until it is detailed enough to be coded easily. This is a core part of Top-Down Design.

Process Example: Managing Stock

Level 1 (High-level):
1. Start Stock System.
2. Process Transactions.
3. Generate Report.
4. End System.

Level 2 (Refining Step 2):
2. Process Transactions:
    2.1 WHILE not end of day DO
    2.2     Get Transaction Type.
    2.3     IF Type = Sale THEN Update Stock.
    2.4     IF Type = Delivery THEN Add Stock.
    2.5     ENDWHILE

By the time you reach Level 3 or 4, the steps are so detailed they can be translated directly into pseudocode (or a programming language).

E. Logic Statements

Logic statements define parts of an algorithm using Boolean operators (AND, OR, NOT). They are essential for complex selection and iteration conditions.

Example: A student passes if they score over 50 AND their attendance is over 80%.
IF Score > 50 AND Attendance > 80 THEN
    Pass = TRUE
ENDIF

Standard Algorithms (Linear Search and Bubble Sort)

You must be able to write and trace pseudocode for two standard algorithms: Linear Search and Bubble Sort. These are essential skills linked to processing arrays (covered in Chapter 10).

A. Linear Search (Sequential Search)

The simplest method of searching an array or list. It checks every item sequentially (one by one) from the start until the target item is found or the end of the list is reached.

Process:

Start at the first element (index 0).
Compare the current element with the target value.
If they match, stop and return the index.
If they don't match, move to the next element.
If the end of the list is reached, the item is not present.

Performance: It is slow for large datasets because, in the worst-case scenario, every single item must be checked.

Example Pseudocode for Linear Search:
FUNCTION LinearSearch(DataArray, Target)
    Found = FALSE
    Index = 0
    WHILE Found = FALSE AND Index < ArrayLength DO
        IF DataArray[Index] = Target THEN
            Found = TRUE
        ENDIF
        Index = Index + 1
    ENDWHILE
    IF Found = TRUE THEN
        RETURN Index - 1
    ELSE
        RETURN -1 // Indicate not found
    ENDIF
ENDFUNCTION

B. Bubble Sort

A simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted.

Analogy: Bubbles Rising

Imagine a glass of fizzy liquid. The largest, heaviest bubbles (largest values) slowly "bubble up" to the top, while the smaller ones stay near the bottom.

Process:

Start at the beginning of the list.
Compare the first element with the second element.
If they are in the wrong order, swap them.
Move to the next pair (second and third elements) and repeat.
Continue until the end of the list is reached (one pass completed). The largest unsorted item is now in its correct final position.
Repeat the entire process, reducing the comparison range by one item each time, until no swaps occur in a full pass.

Performance: Bubble sort is highly inefficient for large datasets, especially if the data is initially shuffled randomly. However, its simplicity makes it easy to understand and implement.

Example Pseudocode for Bubble Sort (Sorting an array A of size N into ascending order):
PROCEDURE BubbleSort(A, N)
    SwapMade = TRUE
    Upper = N - 1
    WHILE SwapMade = TRUE DO
        SwapMade = FALSE
        FOR Index = 0 TO Upper - 1
            IF A[Index] > A[Index + 1] THEN
                Temp = A[Index]
                A[Index] = A[Index + 1]
                A[Index + 1] = Temp
                SwapMade = TRUE
            ENDIF
        NEXT Index
        Upper = Upper - 1
    ENDWHILE
ENDPROCEDURE

Quick Review: Algorithm Design Fundamentals
Computational Thinking: Use Abstraction (simplifying) and Decomposition (breaking down).
Algorithm: A defined sequence of steps to solve a problem.
Representations: Flowchart (diagrams), Structured English (narrative), Pseudocode (structured text).
Constructs: Sequence, Selection (IF/CASE), Iteration (FOR, WHILE, REPEAT UNTIL).
Techniques: Stepwise Refinement (detail added gradually).
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