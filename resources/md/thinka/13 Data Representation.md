# 13 Data Representation

**Course:** Cambridge International AS & A Level Computer Science (9618)
**Source:** Thinka

---

A Level Data Representation (9618 Section 13) Study Notes
13.1 User-defined Data Types (UDTs)
13.2 File Organisation and Access
13.3 Floating-Point Numbers: Representation and Manipulation
Summary of Advanced Data Representation
A Level Data Representation (9618 Section 13) Study Notes

Welcome to Section 13: Data Representation! If you found the number systems in AS tricky, don't worry. This A Level content takes those foundations and applies them to how computers handle complex, real-world data like large numbers and structured information. Understanding this is key to writing efficient programs and truly grasping how data is stored and retrieved.

Ready to dive into the deeper workings of data? Let's go!

13.1 User-defined Data Types (UDTs)

In programming, we often use standard data types like INTEGER or STRING. However, sometimes we need a type that better reflects the real-world context of our data or groups different data items together. That’s where User-defined Data Types (UDTs) come in.

Why are UDTs necessary?
Clarity and Readability: They make code self-documenting. If you define a type called Colour which can only be Red, Green, or Blue, the code is much clearer than just using the integers 0, 1, or 2.
Restricting Values: They help enforce data integrity by limiting the values a variable can hold (especially in enumerated types).
Grouping Related Data: They allow you to bundle together data of different types that belong to a single entity (like a Record or Class).
Non-Composite UDTs (Building Blocks)
1. Enumerated Type

An enumerated type defines a set of named integer constants. The programmer assigns descriptive names to a sequence of numbers (usually starting from 0).

Example: If you define a type called DaysOfTheWeek, it might contain Monday, Tuesday, Wednesday, etc. The computer stores these as 0, 1, 2, but the code uses the names.

Purpose: Improves code readability and restricts the variable to only those defined values.

2. Pointer Type

A pointer is a variable that stores a memory address of another piece of data.

Key Concept: Instead of storing the data itself, a pointer points to where the data lives. This is essential for building complex data structures like linked lists, stacks, and queues.

Analogy: A pointer is like a house number (address), not the content inside the house.

Composite UDTs (Structured Data)

Composite types are built by combining existing types.

1. Record/Structure

A Record (or Structure in some languages) is a collection of fields (attributes) that can be of different data types, grouped under one identifier.

Example: A record named Student could contain StudentID (INTEGER), Name (STRING), and Enrolled (BOOLEAN).

2. Set

A Set is a collection of distinct (unique) items. The order of elements does not matter.

Example: Set A = {Apple, Banana, Pear}. If you try to add another Apple, the set remains the same.

3. Class/Object (Introduction to OOP)

A Class is the blueprint for creating Objects. It is a highly powerful composite type used in Object-Oriented Programming (OOP).

Attributes (Properties): The data variables describing the object (like fields in a record).
Methods: The procedures and functions (subroutines) that define the actions the object can perform.
Instance (Object): The actual item created from the class blueprint.

Example: The Class Car defines that all cars have a colour (attribute) and can accelerate() (method). A specific car you create, myCar, is an instance or object of the Class Car, and it might have the colour "Red".

Key Takeaway 13.1: UDTs allow programmers to create data structures that mirror real-world entities, improving code clarity and managing complex data efficiently. Pointers and Enumerated types are non-composite, while Records and Classes are used to bundle different data types together.

13.2 File Organisation and Access

How data is stored on disk (File Organisation) dictates how fast we can retrieve it (File Access).

Methods of File Organisation

The choice of organisation depends on the required frequency and nature of data use.

1. Serial File Organisation
Description: Records are stored one after the other in the order they were created. There is no sorting or key field.
Access: Sequential access only. To read the 50th record, you must read the first 49 records first.
Use Case: Storing logs or transaction data where the order of entry is important and all records are usually processed at once.
2. Sequential File Organisation
Description: Records are stored one after the other, but they are sorted based on a designated key field (e.g., Student ID or Customer Name).
Access: Primarily Sequential access. Faster searching than serial files if you start searching from the beginning, but still requires reading through previous records.
Use Case: Batch processing (like payroll systems) where all or most records are updated sequentially.
3. Random File Organisation
Description: Records are stored at a calculated physical address derived from a record key (e.g., a hash key).
Access: Direct access. You can calculate the address of the record instantly using its key, allowing very fast retrieval without reading other records.
Use Case: Databases, reservation systems, or indexing structures where quick, individual record lookups are essential.
Access Methods

Access refers to how we read the data.

Sequential Access: Data must be read in sequence, starting from the beginning. (Used for serial and sequential files).
Direct Access: Data can be retrieved immediately if the exact address or key is known. (Used for random files and indexed sequential files).
Hashing Algorithms

To use random file organisation, we need a way to turn a logical key (like a product code) into a physical storage address. This is done using hashing.

What is Hashing?

A hashing algorithm (or hash function) takes an input key and mathematically calculates a unique (or nearly unique) memory address where the record should be stored.

Step-by-step Hashing (Simple Modulo Method):
Choose the maximum number of storage locations, N (e.g., 100).
Take the numeric key (K) of the record (e.g., K = 5472).
Apply the modulo operation: Address = K MOD N.
Example: Address = 5472 MOD 100 = 72. The record is stored at address 72.
Collision and Overflow

Since the address space (N) is often much smaller than the range of possible keys, two different keys might calculate the same address. This is called a collision.

Collision Handling: If location 72 is already occupied, the system must use a technique (like chaining or linear probing) to find the next available slot nearby.
Overflow: If the file is too full, storage space may need to be expanded.

Did you know? Hashing is also used extensively in security to create digital fingerprints of files (hash sums) to verify integrity.

Key Takeaway 13.2: File organisation dictates access speed. Random organisation combined with hashing provides the fastest direct access, crucial for real-time applications, despite the challenge of handling collisions.

13.3 Floating-Point Numbers: Representation and Manipulation

The AS syllabus covered integers. Now we look at real numbers (numbers containing a fractional part, like 12.375 or -0.5), which are represented using floating-point format.

A floating-point number is stored in two main parts, just like scientific notation (
𝑎
×
1
0
𝑏
a×10
b
):

Number = Mantissa × Base
Exponent
Exponent

In binary, the base is always 2. So, the representation looks like this:

Binary Number = Mantissa × 2
Exponent
Exponent

The Floating-Point Format

The allocated bits are split into three sections:

Sign Bit: Indicates if the number is positive (0) or negative (1).
Mantissa (M): Stores the significant digits (the precision).
Exponent (E): Stores the power of 2 (the magnitude or range).

Crucial Point: Both the Mantissa and the Exponent are typically stored using Two's Complement for representing negative values (as specified in the syllabus).

Representation of Negative Numbers

Since we are using Two's Complement for the Mantissa and Exponent, you must remember the steps:

To find the Two’s Complement of a negative number:

Invert all bits (0s become 1s, 1s become 0s).
Add 1 to the result.
Normalisation

When storing a number, we must ensure the Mantissa is always written in a specific, standardised format. This process is called normalisation.

Why Normalise? To ensure the maximum possible precision (significant figures) is kept, and every number has a unique representation.

In normalized binary, the Mantissa must always start with:

0.1... for a positive number (0 followed by the binary point, then 1)
1.0... for a negative number (1 followed by the binary point, then 0)

Example: Normalize 0.001101 (Positive):

Original: 0.001101. We want the bit pattern 0.1...
Shift the binary point 3 places right: 0.1101
Since we shifted 3 places RIGHT, the Exponent is
−
3
−3.
Normalized Mantissa: 0.1101. Normalized Exponent: -3.

Example: Normalize 101.01 (Positive):

Original: 101.01.
Shift the binary point 2 places LEFT: 0.10101
Since we shifted 2 places LEFT, the Exponent is
+
2
+2.
Normalized Mantissa: 0.10101. Normalized Exponent: +2.
Converting Floating-Point to Denary (Step-by-Step)

Assume we have 8 bits for Mantissa (M) and 4 bits for Exponent (E).

Floating Point Representation: 01010000 | 0011

M = 01010000 (8 bits) | E = 0011 (4 bits)

Calculate the Exponent (E):

E = 0011. Since this is positive in Two's Complement, the denary value is 3.

This means we shift the binary point 3 places to the right.

Calculate the Mantissa Value (M):

M = 01010000. It is a positive number (Sign bit is 0). The binary point is after the first bit: 0.1010000

Mantissa value:
0
×
2
0
+
1
×
2
−
1
+
0
×
2
−
2
+
1
×
2
−
3
+
0
×
2
−
4
…
0×2
0
+1×2
−1
+0×2
−2
+1×2
−3
+0×2
−4
…

Mantissa value:
0.5
+
0.125
=
0.625
0.5+0.125=0.625

Apply the Exponent Shift:

Take the binary mantissa (0.1010000) and shift the binary point 3 places right (since E = +3).

0.1010000
→
0101.0000
0.1010000→0101.0000

Convert the Final Binary Number to Denary:

Binary:
101.0
101.0 (or
101
101 since the fractional part is zero).

Denary:
1
×
2
2
+
0
×
2
1
+
1
×
2
0
=
4
+
1
=
5
1×2
2
+0×2
1
+1×2
0
=4+1=5

The Floating-Point number represents the denary value 5.

Struggling Tip: When working with negative Mantissa or Exponent, remember to first convert the Two's Complement representation back to its negative denary value before proceeding with the calculation!

Consequences of Floating-Point Representation
1. Impact of Bit Allocation

The split between Mantissa and Exponent determines the overall nature of the numbers that can be stored:

Increasing Mantissa Size: Increases precision (more significant figures), but decreases the maximum range of numbers that can be stored (less room for the exponent).
Increasing Exponent Size: Increases the range (larger and smaller numbers can be stored), but decreases precision (fewer bits to store significant figures).
2. Approximation and Rounding Errors

A floating-point representation only holds a finite number of bits for the mantissa. This means many real numbers (especially non-terminating fractions like 1/3 in denary, or 0.1 in binary) can only be stored as an approximation.

This approximation can lead to rounding errors during arithmetic operations, meaning calculations might not be perfectly precise.

Example: If you only have 4 bits for the mantissa, 0.1011001 might be rounded to 0.1011, losing the remaining fraction.

3. Overflow and Underflow
Overflow: Occurs when a calculation results in a number that is too large to be represented by the maximum Exponent size. The magnitude exceeds the maximum range.
Underflow: Occurs when a calculation results in a number that is too close to zero (too small) to be represented accurately by the minimum Exponent size. The magnitude is below the minimum range.

Key Takeaway 13.3: Floating-point representation uses a mantissa (precision) and an exponent (range), both often in two's complement. Normalisation is essential for maximum precision. Be aware that this method relies on approximation, leading to potential rounding errors and limits (overflow/underflow) determined by bit allocation.

Summary of Advanced Data Representation

Congratulations on tackling this complex topic! Remember:

UDTs help structure and validate complex data (13.1).
File organization controls access speed; hashing enables fast direct access (13.2).
Floating-point numbers allow the representation of real numbers, but require precise handling of Mantissa, Exponent, and Normalisation to manage limits of range and precision (13.3).

Keep practicing those floating-point conversions and you will master this section!

Ready to test yourself?

Turn these notes into exam-style practice. Get unlimited AI questions on this topic with instant marking and explanations.

Practice This Topic
More Computer Science (9618) chapters
Communication and internet technologies
Hardware and Virtual Machines
System Software
Security
Artificial Intelligence (AI)
Computational thinking and Problem-solving

* The content provided by thinka is generated by AI and may not always be accurate or up-to-date. Please use it as a supplementary resource and verify with official materials.

Put These Notes into Practice

Reading the notes is a great start. Now practise with unlimited AI-generated questions and get instant feedback. 100,000+ students are already improving their grades.

Start Practising Now
View Pricing