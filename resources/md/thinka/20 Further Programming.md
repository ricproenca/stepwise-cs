# 20 Further Programming

**Course:** Cambridge International AS & A Level Computer Science (9618)
**Source:** Thinka

---

Chapter 20: Further Programming
20.1 Programming Paradigms
20.2 File Processing and Exception Handling
Chapter 20: Further Programming

Hello and welcome to the "Further Programming" section! This is where we dive into the advanced philosophies and techniques that make modern software robust and scalable. Don't worry if some of these ideas seem abstract at first—we’ll break down these powerful concepts, like looking at programming from entirely different angles (paradigms) and handling unexpected problems (exceptions). Mastering this chapter will transform you from a competent programmer into an advanced software designer!

20.1 Programming Paradigms

A Programming Paradigm is essentially a fundamental style or approach to writing computer programs. It’s the philosophy that dictates how a programmer structures their code and views the problem they are trying to solve.

The syllabus requires understanding four main types of paradigms: Low-level, Imperative (Procedural), Object-Oriented, and Declarative.

1. Low-Level Programming Paradigm

This paradigm involves writing instructions that are very close to the computer's native language (machine code) or a slightly human-readable version (Assembly Language).

Characteristic: Low-level code focuses on direct hardware control, memory addresses, and registers. It tells the CPU exactly what microscopic step to take next.
Application: Used where execution speed, small memory footprint, or direct hardware manipulation (like controlling embedded systems or device drivers) is essential.
Key Concept: Addressing Modes (Review from 4.2)

When writing low-level code, you must specify how the CPU finds the data it needs. These are the ways we address memory:

Immediate Addressing: The operand is the data.
Example: LDM #10 (Load the actual value 10 into the Accumulator).
Direct Addressing: The operand is the memory address where the data is stored.
Example: LDD 500 (Load the content found at address 500).
Indirect Addressing: The operand is an address, which holds the address of the data (a pointer).
Example: LDI 600 (Go to address 600. Read the value there, say 800. Then go to address 800 and load that content).
Indexed Addressing: The address is calculated using the operand address plus the content of the Index Register (IX). Excellent for iterating through arrays.
Example: LDX 400 (Effective address = 400 + content of IX).
Relative Addressing: The address is calculated by adding the operand to the content of the Program Counter (PC). Used for jumps, keeping the code position-independent.
Key Takeaway (Low-Level): It's about efficiency and direct control. When asked to write code using this paradigm, you must correctly apply the syntax for the specific addressing modes (e.g., using # for Immediate).
2. Imperative (Procedural) Programming Paradigm

This is the "classic" structured approach you focused on in AS Level. It defines a computation as a sequence of statements that change the program's state (variables).

Characteristic: Focuses on how the program operates. It uses structured programming concepts: Sequence, Selection (IF/CASE), and Iteration (Loops). Problems are solved using modules: Procedures (which perform actions) and Functions (which return values).
Required Skills: You must be able to write code using variables, constants, all control constructs, procedures, and functions (including passing parameters by value and by reference).
Did you know? The term "imperative" comes from the word "imperative sentence," meaning a command. You are commanding the computer step-by-step.
3. Object-Oriented Programming (OOP) Paradigm

OOP views a program as a collection of interacting objects. It aims to model real-world entities inside the program, making code reusable and easier to maintain.

Core OOP Terminology
Class: A blueprint or template for creating objects. It defines the structure (attributes) and behaviour (methods) that all objects of that type will share.
Analogy: The blueprint for a Car factory.
Object (Instance): A specific, tangible entity created from a class.
Analogy: Your specific red Honda, built from the Car blueprint.
Property / Attribute: The data or characteristics that define the state of an object (variables inside the class).
Example: Car's Colour, Speed, EngineSize.
Method: The actions or functions that an object can perform.
Example: Car's StartEngine(), Accelerate(), Brake().
Encapsulation: The principle of bundling data (attributes) and the methods that operate on that data into a single unit (the object), and hiding the internal details.
Getters and Setters: Special methods used to control access to attributes, upholding encapsulation. Getters retrieve (read) the property value; Setters modify (write) the property value, often including validation checks.
Inheritance: A mechanism where a new class (subclass/child) is created based on an existing class (superclass/parent). The subclass automatically inherits all attributes and methods of the parent, promoting code reuse.
Example: A Truck class inherits from the Vehicle class.
Polymorphism: Meaning "many forms." It allows objects of different classes to respond to the same method call in a way that is specific to their class.
Example: Both a Dog object and a Cat object might have a MakeSound() method, but the Dog barks while the Cat meows.
Containment (Aggregation): When an attribute of one class is an object of another class. It represents a "has-a" relationship.
Example: A Car class has-a Engine object.
Memory Aid (OOP Pillars): Think of A PIE (Abstraction, Polymorphism, Inheritance, Encapsulation) when recalling the main benefits of OOP, but remember to include classes, objects, and containment in your definitions!
4. Declarative Programming Paradigm

This paradigm focuses on defining what the result should be, rather than listing the step-by-step instructions (the "how"). It often relies on facts and rules.

Characteristic: The program is a set of logical statements (facts) and relationships (rules). The system attempts to satisfy a given goal using these definitions.
Contrast with Imperative:
Imperative: "To get from A to B, first turn left, then go straight, then turn right..." (Step-by-step procedure).
Declarative: "A is the destination, B is the start point, find a valid path." (Defining the result and letting the language engine figure out the steps).
Required Skills: You need to understand how to solve a problem by writing appropriate facts and rules and demonstrate the ability to write code that can satisfy a goal using this structure (often seen in languages like Prolog or advanced SQL queries).
Key Takeaway (Paradigms): The core difference is the focus: Low-Level (Hardware steps), Imperative (Step-by-step instructions), OOP (Interacting real-world objects), Declarative (Logical facts and goals).
20.2 File Processing and Exception Handling

Working with files is essential for permanent data storage. Once you move beyond simple input/output, you need robust methods to manage how data is stored, retrieved, and what happens when things go wrong.

1. File Processing Operations

You must be able to write code to perform standard file handling operations:

A. Opening and Closing Files

Before you can read or write, the file must be opened in a specific mode:

Read Mode: Allows data to be retrieved from the file. If the file doesn't exist, an error often occurs.
Write Mode: Allows data to be written to the file. If the file exists, its contents are usually overwritten (deleted).
Append Mode: Allows new data to be added to the end of an existing file. Existing content is preserved.

After all operations are complete, the file must be closed to ensure data integrity and free up system resources.

B. File Organisation and Access Methods

The way a file is stored affects how fast you can find specific data.

Serial File: Records are stored one after the other, in the order they were created. They are accessed sequentially. To find the 100th record, you must read the first 99 records first.
Sequential File (using a key field): Records are stored in a specific order based on a key field (e.g., alphabetically by surname). Access is typically sequential, starting at the beginning and reading until the key is matched.
Random File: Records can be accessed directly without reading preceding records. A formula (or a key lookup) is used to calculate the exact physical location (address) of the record on the disk. This allows for very fast retrieval.

When writing code for file processing, remember you must be able to read and write entire records (which often map to a record structure or class object defined in your code) to the file.

2. The Importance of Exception Handling

In real-world programming, unexpected events happen: the internet drops, a user enters text where a number is expected, or a disk runs out of space. A program that crashes when something goes wrong is unprofessional and unreliable.

Definition and Importance
An Exception is an event that occurs during the execution of a program that disrupts the normal flow of instructions. It is usually a runtime error.
Importance of Exception Handling:
It prevents the program from abruptly crashing (terminating).
It allows the program to fail gracefully, providing useful feedback to the user.
It gives the developer a chance to recover from the error (e.g., retry a network connection or close files properly).
When to use Exception Handling

You should use exception handling whenever a piece of code is dependent on an external resource or user action that cannot be strictly controlled. Common situations include:

Attempting to open a file that doesn't exist (File Not Found).
Trying to connect to a database or network that is unavailable.
When a calculation results in an undefined mathematical state (e.g., Division by Zero).
Attempting to cast data into an inappropriate type (e.g., converting "hello" to an INTEGER).
Writing Code for Exception Handling

The basic structure usually involves a protected block of code (TRY) and a separate block of code to execute if an error occurs (CATCH or EXCEPT).

Example Structure (Pseudocode concept):
TRY
    OPENFILE("data.txt", READ)
    // Normal processing code here
CATCH (FileNotFoundError)
    OUTPUT "Error: Data file not found. Please check disk."
END TRY

Quick Review (Exceptions): If an error occurs inside the TRY block, the program immediately stops the TRY block execution and jumps to the CATCH block, ensuring a controlled response instead of a system crash.
Ready to test yourself?

Turn these notes into exam-style practice. Get unlimited AI questions on this topic with instant marking and explanations.

Practice This Topic
More Computer Science (9618) chapters
Data Representation
Communication and internet technologies
Hardware and Virtual Machines
System Software
Security
Artificial Intelligence (AI)

* The content provided by thinka is generated by AI and may not always be accurate or up-to-date. Please use it as a supplementary resource and verify with official materials.

Put These Notes into Practice

Reading the notes is a great start. Now practise with unlimited AI-generated questions and get instant feedback. 100,000+ students are already improving their grades.

Start Practising Now
View Pricing