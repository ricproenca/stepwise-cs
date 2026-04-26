# 10 Data Types and Structures

**Course:** Cambridge International AS & A Level Computer Science (9618)
**Source:** Thinka

---

Home
For Teachers
Study Materials
Blogs
Pricing
Contact
English (UK)
Get Started
Resources
Cambridge International A Level
Computer Science (9618)
Data Types and Structures

Computer Science (9618) · Cambridge International A Level · 9 min read

Data Types and Structures
Data Types and Structures (AS Level 9618: Section 10)

Hello future Computer Scientists! This chapter is absolutely fundamental because it teaches you how to organize and manage the data your programs use. Think of data types and structures as the different kinds of containers and filing cabinets you use to store information. Choosing the right container makes your programs efficient and easy to manage.

Don't worry if some of these terms seem abstract. We'll break them down with simple, real-world examples!

10.1 Data Types and Records
The Basic Building Blocks: Built-in Data Types

Every piece of information a computer handles must be categorized. A data type defines the kind of data (like numbers or text) and the set of operations that can be performed on it.

For the AS Level syllabus, you must be familiar with the following fundamental types (using the standard pseudocode names):

- INTEGER

Used for whole numbers (positive, negative, or zero). Example: Counting the number of students (1, 2, 3...).

- REAL

Used for numbers that include a fractional part (decimals). Example: Measuring temperature (25.5°C) or prices ($19.99).\n

\n\n- CHAR
\n

\nUsed for a single character. Example: 'A', '7', '$'.

- STRING

Used for a sequence of characters. Example: "Hello World", "9618 syllabus".

- BOOLEAN

Used for logical values: either True or False. This is essential for decision-making (selection and iteration). Example: IsRaining = TRUE.

- DATE

Used specifically to store dates, often including time. Example: 2024-08-15.

Quick Tip for Understanding Data Types:

If you want to count whole items, use INTEGER. If you need precision or fractions, use REAL. If you are storing yes/no decisions, use BOOLEAN.

Structured Data: The Record

What if you need to store related items of different data types? A simple variable won't work. This is where a Record Structure comes in.

Definition of a Record:

A record is a collection of related data items (fields/attributes) that may be of different data types, all stored under a single identifier (name).

Analogy: Imagine a student ID card. The card itself is the Record. Inside, you have the Name (STRING), the Age (INTEGER), and perhaps a FeePaid status (BOOLEAN).

Purpose of Records: 1. Organization: It keeps related data together, making the code much cleaner.
2. Efficiency: You can pass one record variable to a procedure instead of passing multiple individual variables.

Defining a Record in Pseudocode:
We use the TYPE... END TYPE construct to define the structure, and then declare variables of that type.

TYPE T_Student
    StudentID : INTEGER
    StudentName : STRING
    FeePaid : BOOLEAN
END TYPE

DECLARE NewStudent : T_Student

You can then access the fields using dot notation, e.g., NewStudent.StudentName.

Key Takeaway for 10.1: Data types define the nature of individual data items. Records group several related, potentially different data types together under one name for better organization.

10.2 Arrays

Arrays are arguably the most common data structure you will use in programming.

What is an Array?

An array is a data structure used to hold a collection of data items of the same data type, accessed using an index (or subscript).

Contrast: Remember that Records hold different types; Arrays hold the same type.

Technical Terms Associated with Arrays:

- Index (or Subscript): The numerical position used to access a specific element in the array. Indices usually start at 0 or 1, depending on the programming language/pseudocode.
- Upper Bound: The highest valid index number in the array.
- Lower Bound: The lowest valid index number in the array.

One-Dimensional (1D) and Two-Dimensional (2D) Arrays
1. One-Dimensional Array (1D)

A 1D array is simply a list or vector. It requires one index to locate an element.
Analogy: A single row of mailboxes, labelled 1 through 10.

Example Pseudocode Declaration:
DECLARE Weekdays : ARRAY[1:7] OF STRING

This array stores 7 strings (the days of the week). To access the third day: Weekdays[3].

2. Two-Dimensional Array (2D)

A 2D array is structured like a table or matrix (rows and columns). It requires two indices to locate an element (Row, Column).
Analogy: A spreadsheet or a checkerboard.

Example Pseudocode Declaration:
DECLARE Scores : ARRAY[1:10, 1:5] OF INTEGER

This array could store scores for 10 students (rows) across 5 subjects (columns). To access Student 5's score in Subject 2: Scores[5, 2].

Processing Array Data (Sorting and Searching)

The syllabus requires understanding of two specific algorithms used to process array data:

A. Searching: Linear Search

Purpose: To find a specific item (target) within an array.
Process: It checks every single element in the array, starting from the first, until the target is found or the end of the array is reached.

Did you know? This is also called a Sequential Search. It works on any array, sorted or unsorted, but it is very slow for large arrays.

B. Sorting: Bubble Sort

Purpose: To arrange the elements of an array into ascending or descending order.
Process (Step-by-Step): 1. The algorithm repeatedly steps through the list.
2. It compares adjacent elements.
3. If they are in the wrong order, they are swapped.
4. This process is repeated until a pass is completed without any swaps, meaning the array is sorted.

Analogy: The lightest "bubbles" rise to the top (or one end) of the list over multiple passes.

Key Takeaway for 10.2: Arrays store many items of the same type. You must be able to define 1D and 2D arrays and understand how Linear Search and Bubble Sort work conceptually and in pseudocode.

10.3 Files
The Need for Files

When a program runs, its data (variables, arrays, records) is usually stored in RAM (Primary Memory). RAM is volatile, meaning all data is lost when the power is turned off or the program closes.

A File is needed to store data permanently on Secondary Storage (like an SSD or HDD). Files allow data to persist and be shared or accessed later.

Handling Text Files in Pseudocode

You must be able to write pseudocode to handle text files (files consisting of one or more lines of text). Common operations include:

1. Opening the File: Before you can do anything, you must OPEN the file and specify the mode:
- READ: To look at the existing data.
- WRITE: To create a new file or overwrite an existing one.
- APPEND: To add new data to the end of an existing file.

Example: OPENFILE "results.txt" FOR APPEND

2. Reading/Writing Data:
- Reading: READFILE myFile, RecordVariable (Reads a single record or line).
- Writing: WRITEFILE myFile, DataToWrite (Writes data, usually followed by a new line).

3. Closing the File: Always CLOSEFILE after you finish to save data properly and free up system resources.
Example: CLOSEFILE "results.txt"

Process Example (Adding a name):

OPENFILE "names.txt" FOR APPEND
INPUT NameInput
WRITEFILE "names.txt", NameInput
CLOSEFILE "names.txt"

Key Takeaway for 10.3: Files provide permanent storage. You must know the three file modes (Read, Write, Append) and the pseudocode commands for opening, reading, writing, and closing text files.

10.4 Introduction to Abstract Data Types (ADT)

This section introduces conceptual structures that focus on what the data structure does, rather than how it is implemented.

What is an Abstract Data Type (ADT)?

An ADT is a collection of data and a set of allowed operations that can be performed on that data.

The key word is Abstract: We don't worry about the underlying implementation details (e.g., whether it uses an array or a linked list); we only focus on the available operations and their effects.

Examples of ADTs in AS Level
1. The Stack (LIFO)

A stack is an ordered list where all insertions and deletions happen at one end, called the Top.

- Key Feature: LIFO (Last In, First Out). The last item added is always the first item to be removed.

Analogy: A stack of cafeteria trays. You only add (PUSH) and remove (POP) from the top.

- Operations: 1. PUSH: Adds an item to the top of the stack.
2. POP: Removes and returns the item at the top of the stack.
3. PEEK/TOP: Views the item at the top without removing it.
- Justification/Use: Managing function calls (the last function called is the first one completed), undo mechanisms in software, and evaluating arithmetic expressions.

2. The Queue (FIFO)

A queue is an ordered list where insertions happen at one end (the Rear) and deletions happen at the other end (the Front).

- Key Feature: FIFO (First In, First Out). The first item added is the first item to be removed.

Analogy: A waiting line at a bus stop. The first person to join the queue is the first person served.

- Operations: 1. ENQUEUE (or INSERT): Adds an item to the rear of the queue.
2. DEQUEUE (or REMOVE): Removes and returns the item at the front of the queue.
- Justification/Use: Managing print jobs, handling CPU tasks in an operating system, and network buffering.

3. The Linked List

A linked list is a dynamic structure where data elements (nodes) are stored non-contiguously (not next to each other in memory) and are linked together using pointers.

- Key Feature: Dynamic Size. Unlike arrays, a linked list can grow or shrink easily as data is added or deleted.
- Structure: Each element (Node) typically contains two parts: the data and a pointer to the next node in the list.
- Justification/Use: Managing flexible amounts of data where frequent insertions and deletions are required (e.g., managing memory or polynomial representation).

Implementing ADTs (Conceptual Understanding)

The syllabus requires you to understand how a queue, stack, and linked list can be implemented using arrays. While you don't need to write the pseudocode for implementation, you must grasp the concept:

- Array Implementation: A fixed-size array is used to hold the data. Separate variables are used to keep track of the key positions (e.g., StackTop for a stack, or FrontPointer/RearPointer for a queue).
- Limitation of Array Implementation: The size is fixed. If you try to PUSH onto a full stack, you get an overflow error. If you try to POP from an empty stack, you get an underflow error.

Key Takeaway for 10.4: ADTs focus on functionality (operations), promoting abstraction. Stack is LIFO (plates), Queue is FIFO (waiting line), and Linked Lists are flexible lists connected by pointers. All can be implemented using the fixed structure of an array.

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