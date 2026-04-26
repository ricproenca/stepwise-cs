# 19 Computational thinking and Problem-solving

**Course:** Cambridge International AS & A Level Computer Science (9618)
**Source:** Thinka

---

A Level Computer Science (9618) Study Notes
19.1 Algorithms and Efficiency
19.2 Recursion
A Level Computer Science (9618) Study Notes
Chapter 19: Computational Thinking and Problem-solving (A Level Content)

Welcome to one of the most exciting and practical chapters in A Level Computer Science!
Computational thinking is all about how we analyze complex problems and design effective solutions that a computer can execute. It’s not just about writing code; it’s about thinking like a computer scientist.

In this chapter, we will deepen our understanding of advanced algorithms (like searching and sorting), explore powerful data structures known as Abstract Data Types (ADTs), and master the elegant technique of recursion. These skills are fundamental to building efficient and scalable software solutions.

19.1 Algorithms and Efficiency
19.1.1 Advanced Searching Methods

We already know how to search for data, but now we compare two core methods:

The Linear Search

This is the simplest search method.

How it works: It checks every item in the list sequentially, starting from the first element, until the target item is found or the end of the list is reached.
Use Case: Excellent for small lists or lists that are unsorted.
Analogy: Imagine looking for a specific receipt in a shoebox full of unsorted papers. You have to check them one by one.
The Binary Search

The Binary Search is vastly more efficient, but it has a crucial prerequisite.

Condition for use: The data structure (e.g., an array or list) must be sorted.

Step-by-step Process:

Find the middle item of the list.
Compare the middle item with the target value.
If they match, the search is complete.
If the target is smaller, ignore the right half of the list (and the middle item).
If the target is larger, ignore the left half of the list (and the middle item).
Repeat the process on the remaining half until the item is found or the subset is empty.

Analogy: The guessing game "20 Questions." Every comparison halves the search space.

Performance: Because the list is halved in each step, the Binary Search performs much better than the Linear Search as the number of data items (N) increases.

Quick Review: Searching

Linear: Simple, works on unsorted data. Slow for large N.

Binary: Must be sorted. Very fast for large N.

19.1.2 Sorting Algorithms

Sorting is the process of arranging data into a specific order. You must be able to write and trace pseudocode for two fundamental sorting algorithms:

Bubble Sort

This is often the easiest to understand, but one of the least efficient.

How it works: It repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order.
Efficiency: In the worst case, if the list is sorted in reverse, Bubble Sort takes a long time because many swaps are needed.
Mnemonic: Think of lighter (smaller) bubbles rising to the top (or heavier items sinking to the bottom) over many passes.
Insertion Sort

Insertion Sort is typically more efficient than Bubble Sort, especially for small or partially sorted lists.

How it works: It builds the final sorted array one item at a time. It iterates through the input elements and inserts each element into its correct position among the elements already sorted.
Analogy: Sorting a hand of playing cards. You keep the cards in your hand sorted, and for every new card you pick up, you find the right place to insert it.

Did you know? The initial order of the data significantly impacts the time taken by a sorting routine. Insertion Sort is much faster than Bubble Sort if the data is already mostly sorted.

19.1.3 Abstract Data Types (ADTs)

An Abstract Data Type (ADT) is a mathematical model for data structures. Crucially, it defines the data storage mechanism and the set of operations that can be performed on that data.

The key benefit of using an ADT is abstraction: we only care about *what* the data structure does (its operations), not *how* it is implemented (e.g., using an array or a linked list).

Stack
Principle: LIFO (Last-In, First-Out). The last item added is the first item removed.
Key Operations:
PUSH: Adds an item to the top of the stack.
POP: Removes and returns the item from the top of the stack.
Implementation: Often implemented using an Array, along with a pointer (or index) to track the 'Top of Stack' position.
Justification: Used in recursion (call stack), undo mechanisms in software, and expression evaluation.
Queue
Principle: FIFO (First-In, First-Out). The first item added is the first item removed.
Key Operations:
ENQUEUE: Adds an item to the rear of the queue.
DEQUEUE: Removes and returns the item from the front of the queue.
Implementation: Often implemented using an Array, requiring pointers for both the 'Front' and the 'Rear'.
Justification: Used in operating systems (task scheduling), print spooling, and simulation.
Linked List
Concept: A dynamic structure consisting of nodes. Each Node holds the data item and a Pointer (or reference) to the next node in the sequence.
Benefit: Insertion and deletion are very efficient because you only need to update the pointers, not shift the entire dataset (as you would with an array).
Implementation: Can be implemented using two parallel arrays (one for data, one for pointers/indices).
Key Operations: Algorithms should be written to find, insert, and delete items by traversing the list via the pointers.
Binary Tree (BT)
Concept: A hierarchical structure where each node has at most two children (a left child and a right child).
Organisation: Data in the left subtree of a node is always less than the node’s data; data in the right subtree is always greater. This is called a Binary Search Tree (BST).
Key Operations: Algorithms should be written to find, insert, and delete items, relying on the hierarchical structure to speed up searches (similar performance to binary search).
Graph

A graph is an ADT used to model relationships between objects.

Key Features:
A graph consists of Vertices (nodes) and Edges (connections or links).
Edges can be directed (one-way) or undirected (two-way), and may have weights (costs).
Justification for Use: Graphs are ideal for mapping, network topology, routing algorithms (like those used in GPS), and modelling relationships in social media.

Note: Although graphs are important in AI (Artificial Intelligence, specifically sections 18.1), you are only required to understand the key features of the Graph ADT and justify its use, not write code for its structure or traversal, beyond the algorithms you may study in 18.1 (A* and Dijkstra's).

19.1.4 Comparing Algorithms using Big O Notation

Different algorithms performing the same task (like searching or sorting) can be compared based on their time complexity (speed) and space complexity (memory use). This is quantified using Big O Notation.

What is Big O?

Big O notation describes the limiting behavior of a function when the argument tends towards a particular value or infinity. In Computer Science, it tells us how the performance (time/memory) of an algorithm scales as the input size (
𝑁
N) grows very large.

Common Complexities:
𝑂
(
1
)
O(1) - Constant Time: The operation takes the same amount of time regardless of the input size.
Example: Accessing an element in an array by its index.
𝑂
(
log
⁡
𝑁
)
O(logN) - Logarithmic Time: The time grows very slowly; the work decreases with each step.
Example: Binary Search. If you double the input size, you only need one more step.
𝑂
(
𝑁
)
O(N) - Linear Time: The time taken increases directly proportional to the size of the input.
Example: Linear Search. If you double the input size, you double the time taken.
𝑂
(
𝑁
2
)
O(N
2
) - Quadratic Time: The time taken increases exponentially (N multiplied by N). This is usually achieved when an algorithm uses nested loops over the data.
Example: Bubble Sort and Insertion Sort (in the worst case).

Key Takeaway: When N is large,
𝑂
(
log
⁡
𝑁
)
O(logN) is much better than
𝑂
(
𝑁
)
O(N), which is much better than
𝑂
(
𝑁
2
)
O(N
2
). Knowing Big O helps us justify the use of a specific algorithm (e.g., using Binary Search over Linear Search for a large, sorted database).

Key Takeaway for 19.1

Efficient algorithms must be chosen based on the data structure (is it sorted?) and the expected size of the input (N). Big O notation is the standard tool for measuring this efficiency.

19.2 Recursion

Recursion is a powerful technique where a problem is solved by breaking it down into smaller instances of the exact same problem, until a simple, easily solvable case is reached.

Essential Features of Recursion

Every successful recursive routine must have two essential components:

Base Case (Termination Condition): This is the condition that stops the recursion. When the base case is met, the function returns a value without making another recursive call. Without a base case, the function would run infinitely, causing a stack overflow error.
Recursive Step: This is where the function calls itself, usually with parameters that move closer to the base case. The problem size is progressively reduced.

Example: Calculating Factorial (N!)

The definition of
𝑁
!
N! is:
𝑁
!
=
𝑁
×
(
𝑁
−
1
)
!
for
𝑁
>
0
N!=N×(N−1)!for N>0
0
!
=
1
(Base Case)
0!=1(Base Case)

In pseudocode (simplified):

FUNCTION Factorial(N: INTEGER) RETURNS INTEGER
    IF N = 0 THEN
        RETURN 1       <-- BASE CASE
    ELSE
        RETURN N * Factorial(N - 1) <-- RECURSIVE STEP
    ENDIF
ENDFUNCTION

Tracing and Unwinding Recursion (Use of Stacks)

When a function is called, the system creates an Activation Record (or stack frame) that stores local variables, parameters, and the return address. These records are placed onto the Call Stack (a type of stack ADT).

When a recursive call is made, a new activation record is pushed onto the stack.
This continues until the Base Case is reached.
Once the base case is hit, the process of Unwinding begins: results are returned from the function call at the top of the stack, and that activation record is popped off. This process continues backwards until the original function call returns its final result.

The compiler’s job: The compiler must translate recursive code by ensuring it correctly manages this Call Stack, handling the pushing and popping of activation records during execution and unwinding.

When is Recursion Beneficial?

While any recursive algorithm can be rewritten iteratively (using loops), recursion is beneficial because it often leads to code that is:

More Elegant: Complex problems, especially those involving tree structures (like binary trees) or mathematical sequences (like factorials), can be expressed much more naturally and concisely.
Easier to Read/Prove: For inherently recursive problems, the code directly reflects the mathematical definition, making it easier to verify its correctness.

Common Mistake to Avoid: Forgetting the Base Case! This guarantees infinite recursion and crashes the program by overflowing the stack memory.

Key Takeaway for 19.2

Recursion is defining a function in terms of itself. It is powerful, but requires a strict Base Case to prevent infinite looping. The Call Stack manages the execution and results via the process of unwinding.

Great job completing this deep dive into algorithms and recursion! These are truly A Level concepts that form the backbone of advanced computer science. Keep practicing tracing recursive functions and calculating Big O complexity—you've got this!

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