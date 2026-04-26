# 19 Computational thinking and problem solving

**Course:** Cambridge International AS & A Level Computer Science (9618)
**Source:** 19 Computational thinking and problem solving.pdf

---

19 Computational thinking and problem
solving
In this chapter, you will learn about
• how to write algorithms to implement linear and binary searches
• the conditions necessary for the use of a binary search
• how the performance of a binary search varies according to the number of data items
• how to write algorithms to implement insertion and bubble sorts
• the use of abstract data types (ADTs) including finding, inserting and deleting items from
  linked lists, binary trees, stacks and queues
• the key features of a graph and why graphs are used
• how to implement ADTs from other ADTs
• the comparison of algorithms including the use of Big O notation
• how recursion is expressed in a programming language
• when to use recursion
• writing recursive algorithms
• how a compiler implements recursion in a programming language.

    19.1 Algorithms
WHAT YOU SHOULD ALREADY KNOW
In Chapter 10 you learnt about Abstract Data Types (ADTs) and searching and sorting arrays.
You should also have been writing programs in your chosen programming language (Python,
VB or Java). Try the following five questions to refresh your memory before you start to read
this chapter.
1 Explain what is meant by the terms
   a) stack
   b) queue
   c) linked list.
2 a) Describe how it is possible to implement a stack using an array.

  b) Describe how it is possible to implement a queue using an array.
  c) Describe how it is possible to implement a linked list using an array.
3 Write pseudocode to search an array of twenty numbers using a linear search.
4 Write pseudocode to sort an array that contains twenty numbers using a bubble sort.
5 Make sure that you can write, compile and run a short program in your chosen programming
  language. The programs below show the code you need to write the same program in each
  of three languages.

Key terms

Binary search – a method of searching an ordered list by testing the value of the middle item
in the list and rejecting the half of the list that does not contain the required value.
Insertion sort – a method of sorting data in an array into alphabetical or numerical order by
placing each item in turn in the correct position in the sorted list.
Binary tree – a hierarchical data structure in which each parent node can have a maximum of
two child nodes.
Graph – a non-linear data structure consisting of nodes and edges.
Dictionary – an abstract data type that consists of pairs, a key and a value, in which the key is
used to find the value.
Big O notation – a mathematical notation used to describe the performance or complexity of
an algorithm.

19.1.1 Understanding linear and binary searching
methods
Linear search
In Chapter 10, we looked at the linear search method of searching a list. In this method, each
element of an array is checked in order, from the lower bound to the upper bound, until the item
is found, or the upper bound is reached.
The pseudocode linear search algorithm and identifier table to find if an item is in the populated
1D array myList from Chapter 10 is repeated here.

Identifier   Description
myList       Array to be searched
upperBound   Upper bound of the array
lowerBound   Lower bound of the array
index        Pointer to current array element
item         Item to be found

 found                    Flag to show when item has been found
Table 19.1

This method works for a list in which the items can be stored in any order, but as the size of the
list increases, the average time taken to retrieve an item increases correspondingly.
The Cambridge International AS & A Level Computer Science syllabus requires you to be able
to write code in one of the following programming languages: Python, VB and Java. It is very
important to practice writing different routines in the programming language of your choice; the
more routines you write, the easier it is to write programming code that works.
Here is a simple linear search program written in Python, VB and Java using a FOR loop.
Python

VB

Java

ACTIVITY 19A
Write the linear search in the programming language you are using, then change the code to
use a similar type of loop that you used in the pseudocode at the beginning of Section 19.1.1,
Linear search.

Binary search

A binary search is more efficient if a list is already sorted. The value of the middle item in the
list is first tested to see if it matches the required item, and the half of the list that does not
contain the required item is discarded. Then, the next item of the list to be tested is the middle
item of the half of the list that was kept. This is repeated until the required item is found or there
is nothing left to test.
For example, consider a list of the letters of the alphabet.

To find the letter W using a linear search there would be 23 comparisons.

Figure 19.1 Linear search showing all the comparisons

To find the letter W using a binary search there could be just three comparisons.

Figure 19.2 Binary search showing all the comparisons

ACTIVITY 19B
Check how many comparisons for each type of search it takes to find the letter D. Find any
letters where the linear search would take less comparisons than the binary search.

A binary search usually takes far fewer comparisons than a linear search to find an item in a list.
For example, if a list had 1024 elements, the maximum number of comparisons for a binary
search would be 16, whereas a linear search could take up to 1024 comparisons.
Here is the pseudocode for the binary search algorithm to find if an item is in the populated 1D
array myList. The identifier table is the same as the one used for the linear search.

Identifier   Description
myList       Array to be searched
upperBound   Upper bound of the array
lowerBound   Lower bound of the array

 index                    Pointer to current array element
 item                     Item to be found
 found                    Flag to show when item has been found
Table 19.2

The code structure for a binary search is very similar to the linear search program shown for each
of the programming languages. You will need to populate myList before searching for an item,
as well as the variables found, lowerBound and upperBound.
You will need to use a conditional loop like those shown in the table below.

 Loop                                                             Language
                                                                  Python uses a condition to
                                                                  repeat the loop at the start of
                                                                  the loop
                                                                  VB uses a condition to stop the
                                                                  loop at the end of the loop

                                                                  Java uses a condition to repeat
                                                                  the loop at the end of the loop

Table 19.3

You will need to use If statements like those shown in the table below to test if the item is found,
or to decide which part of myList to use next, and to update the upperBound or lowerBound
accordingly.

 If                                                          Language
                                                             Python using integer division

                                                             VB using integer division

                                                        Java automatic integer division

Table 19.4

ACTIVITY 19C
In your chosen programming language, write a short program to complete the binary search.
Use this sample data:
16, 19, 21, 27, 36, 42, 55, 67, 76, 89
Search for the values 19 and 77 to test your program.

19.1.2 Understanding insertion and bubble sorting
methods
Bubble sort
In Chapter 10, we looked at the bubble sort method of sorting a list. This is a method of sorting
data in an array into alphabetical or numerical order by comparing adjacent items and swapping
them if they are in the wrong order.
The bubble sort algorithm and identifier table to sort the populated 1D array myList from
Chapter 10 is repeated here.

 Identifier             Description
 myList                 Array to be searched
 upperBound             Upper bound of the array
 lowerBound             Lower bound of the array
 index                  Pointer to current array element
 swap                   Flag to show when swaps have been made
 top                    Index of last element to compare
 temp                   Temporary storage location during swap
Table 19.5

Here is a simple bubble sort program written in Python, VB and Java, using a pre-condition loop
and a FOR loop in Python and post-condition loops and FOR loops in VB and Java.
Python

VB

Java

Insertion sort
The bubble sort works well for short lists and partially sorted lists. An insertion sort will also
work well for these types of list. An insertion sort sorts data in a list into alphabetical or
numerical order by placing each item in turn in the correct position in a sorted list. An insertion
sort works well for incremental sorting, where elements are added to a list one at a time over an
extended period while keeping the list sorted.
Here is the pseudocode and the identifier table for the insertion sort algorithm sorting the
populated 1D array myList.

 Identifier              Description
 myList                  Array to be searched
 upperBound              Upper bound of the array
 lowerBound              Lower bound of the array
 index                   Pointer to current array element
 key                     Element being placed
 place                   Position in array of element being moved
Table 19.6

Figure 19.3 shows the changes to the 1D array myList as the insertion sort is completed.

Figure 19.3

The element shaded blue is being checked and placed in the correct position. The elements
shaded yellow are the other elements that also need to be moved if the element being checked is
out of position. When sorting the same array, myList, the insert sort made 21 swaps and the
bubble sort shown in Chapter 10 made 38 swaps. The insertion sort performs better on partially
sorted lists because, when each element is found to be in the wrong order in the list, it is moved
to approximately the right place in the list. The bubble sort will only swap the element in the
wrong order with its neighbour.
As the number of elements in a list increases, the time taken to sort the list increases. It has been
shown that, as the number of elements increases, the performance of the bubble sort deteriorates
faster than the insertion sort.

Figure 19.4 Time performance of sorting algorithms

The code structure for an insertion sort in each of the programming languages is very similar to
the bubble sort program. You will need to assign values to lowerBound and upperBound and use
a nested loop like those shown in the table below.

Nested loop   Language
              Python

              VB
              cannot use
              key as a
              variable

              Java

Table 19.7

ACTIVITY 19D
In your chosen programming language write a short program to complete the insertion sort.

EXTENSION ACTIVITY 19A
There are many other more efficient sorting algorithms. In small groups, investigate different
sorting algorithms, finding out how the method works and the efficiency of that method. Share
your results.

19.1.3 Understanding and using abstract data types
(ADTs)
Abstract data types (ADTs) were introduced in Chapter 10. Remember that an ADT is a
collection of data and a set of operations on that data. There are several operations that are
essential when using an ADT
• finding an item already stored
• adding a new item
• deleting an item.
We started considering the ADTs stacks, queues and linked lists in Chapter 10. If you have not
already done so, read Section 10.4 to ensure that you are ready to work with these data
structures. Ensure that you can write algorithms to set up then add and remove items from stacks
and queues.

Stacks
In Chapter 10, we looked at the data and the operations for a stack using pseudocode. You will
need to be able to write a program to implement a stack. The data structures and operations
required to implement a similar stack using a fixed length integer array and separate sub routines
for the push and pop operations are set out below in each of the three prescribed programming
languages. If you are unsure how the operations work, look back at Chapter 10.

 Stack data structure                                                                       Language

                                                                                            Python
                                                                                            empty
                                                                                            stack with
                                                                                            no
                                                                                            elements

                                                                                            VB
                                                                                            empty
                                                                                            stack with
                                                                                            no
                                                                                            elements
                                                                                            and
                                                                                            variables
                                                                                            set to
                                                                                            public for
                                                                                            subroutine
                                                                                            access

                                                                                            Java

                          empty
                          stack with
                          no
                          elements
                          and
                          variables
                          set to
                          public for
                          subroutine
                          access

Table 19.8

 Stack pop operation   Language

                       Python
                       global
                       used
                       within
                       subroutine
                       to access
                       variables
                       topPointer
                       points to
                       the top of
                       the stack

                       VB
                       topPointer
                       points to
                       the top of
                       the stack

                       Java
                       topPointer
                       points to
                       the top of
                       the stack

Table 19.9

 Stack push operation   Language
                        Python

                        VB

                        Java

Table 19.10

ACTIVITY 19E

In your chosen programming language, write a program using subroutines to implement a
stack with 10 elements. Test your program by pushing two integers 7 and 32 onto the stack,
popping these integers off the stack, then trying to remove a third integer, and by pushing the
integers 1, 2, 3, 4, 5, 6, 7, 8, 9 and 10 onto the stack, then trying to push 11 on to the stack.

Queues
In Chapter 10, we looked at the data and the operations for a circular queue using pseudocode.
You will need to be able to write a program to implement a queue. The data structures and
operations required to implement a similar queue using a fixed length integer array and separate
sub routines for the enqueue and dequeue operations are set out below in each of the three
programing languages. If you are unsure how the operations work, look back at Chapter 10.

 Queue data structure                                                                     Language

                                                                                          Python
                                                                                          empty
                                                                                          queue
                                                                                          with no
                                                                                          items

                                                                                          VB
                                                                                          empty
                                                                                          queue
                                                                                          with no
                                                                                          items and
                                                                                          variables,
                                                                                          set to
                                                                                          public for
                                                                                          subroutine
                                                                                          access

                                                                                          Java
                                                                                          empty
                                                                                          queue
                                                                                          with no
                                                                                          elements
                                                                                          and
                                                                                          variables,
                                                                                          set to
                                                                                          public for
                                                                                          subroutine
                                                                                          access
Table 19.11

Queue enqueue (add item to queue) operation   Language

                                              Python
                                              global used
                                              within
                                              subroutine to
                                              access
                                              variables
                                              If the
                                              rearPointer is
                                              pointing to the
                                              last element of
                                              the array and
                                              the queue is
                                              not full, the
                                              item is stored
                                              in the first
                                              element of the
                                              array

                                              VB
                                              If the
                                              rearPointer is
                                              pointing to the
                                              last element of
                                              the array and
                                              the queue is
                                              not full, the
                                              item is stored
                                              in the first
                                              element of the
                                              array

                                              Java
                                              If the
                                              rearPointer is
                                              pointing to the
                                              last element of
                                              the array and
                                              the queue is
                                              not full, the
                                              item is stored
                                              in the first

                                                    element of the
                                                    array

Table 19.12

 Queue dequeue (remove item from queue) operation    Language

                                                     Python
                                                     If the
                                                     frontPointer
                                                     points to the
                                                     last element
                                                     in the array
                                                     and the
                                                     queue is not
                                                     empty, the
                                                     pointer is
                                                     updated to
                                                     point at the
                                                     first item in
                                                     the array
                                                     rather than
                                                     the next item
                                                     in the array

                                                     VB
                                                     If the
                                                     frontPointer
                                                     points to the
                                                     last element
                                                     in the array
                                                     and the
                                                     queue is not

                                                                                   empty, the
                                                                                   pointer is
                                                                                   updated to
                                                                                   point at the
                                                                                   first item in
                                                                                   the array
                                                                                   rather than
                                                                                   the next item
                                                                                   in the array

                                                                                   Java
                                                                                   If the
                                                                                   frontPointer
                                                                                   points to the
                                                                                   last element
                                                                                   in the array
                                                                                   and the
                                                                                   queue is not
                                                                                   empty, the
                                                                                   pointer is
                                                                                   updated to
                                                                                   point at the
                                                                                   first item in
                                                                                   the array
                                                                                   rather than
                                                                                   the next item
                                                                                   in the array
Table 19.13

ACTIVITY 19F
In your chosen programming language, write a program using subroutines to implement a
queue with 10 elements. Test your program by adding two integers 7 and 32 to the queue,
removing these integers from the queue, then trying to remove a third integer, and by adding
the integers 1, 2, 3, 4, 5, 6, 7, 8, 9 and 10 to the queue then trying to add 11 to the queue.

Linked lists
Finding an item in a linked list
In Chapter 10, we looked at defining a linked list as an ADT; now we need to consider writing

algorithms using a linked list. Here is the declaration algorithm and the identifier table from
Chapter 10.

The above code sets up a linked list ready for use. The identifier table is below.

 Identifier                         Description
 myLinkedList                       Linked list to be searched
 myLinkedListPointers               Pointers for linked list
 startPointer                       Start of the linked list
 heapStartPointer                   Start of the heap
 index                              Pointer to current element in the linked list
Table 19.14

Figure 19.5 below shows an empty linked list and its corresponding pointers.

Figure 19.5

Figure 19.6 below shows a populated linked list and its corresponding pointers.

Figure 19.6

The algorithm to find if an item is in the linked list myLinkedList and return the pointer to the
item if found or a null pointer if not found, could be written as a function in pseudocode as
shown below.

The following programs use a function to search for an item in a populated linked list.
Python

VB

Java

The trace table below shows the algorithm being used to search for 42 in myLinkedList.

                 startPointer                   itemPointer                   searchItem
              Already set to 4                        4                           42
Table 19.15 Trace table

ACTIVITY 19G
In the programming language of your choice, use the code given to write a program to set up
the populated linked list and find an item stored in it.

Inserting items into a linked list
The algorithm to insert an item in the linked list myLinkedList could be written as a procedure in
pseudocode as shown below.

Here is the identifier table.

 Identifier                                 Description
 startPointer                               Start of the linked list

 heapStartPointer                          Start of the heap
 nullPointer                               Null pointer set to -1
 itemAdd                                   Item to add to the list
 tempPointer                               Temporary pointer
Table 19.16

Figure 19.7 below shows the populated linked list and its corresponding pointers again.

Figure 19.7

The trace table below shows the algorithm being used to add 18 to myLinkedList.

Table 19.17 Trace table

The linked list, myLinkedList, will now be as shown below.

Figure 19.8

The following procedure adds an item to a linked list.
Python

VB

Java

ACTIVITY 19H
Use the algorithm to add 25 to myLinkedList. Show this in a trace table and show
myLinkedList once 25 has been added. Add the insert procedure to your program, add code to
input an item, add this item to the linked list then print out the list and the pointers before and
after the item was added.

Deleting items from a linked list
The algorithm to delete an item from the linked list myLinkedList could be written as a
procedure in pseudocode as shown below.

Here is the identifier table.

 Identifier                     Description
 startPointer                   Start of the linked list

 heapStartPointer                   Start of the heap
 nullPointer                        Null pointer set to −1
 index                              Pointer to current list element
 oldIndex                           Pointer to previous list element
 itemDelete                         Item to delete from the list
 tempPointer                        Temporary pointer
Figure 19.18

The trace table below shows the algorithm being used to delete 36 from myLinkedList.

Table 19.19 Trace table

The linked list, myLinkedList, will now be as follows.

Figure 19.9

The following procedure deletes an item from a linked list.
Python

VB

Java

ACTIVITY 19I
Use the algorithm to remove 16 from myLinkedList. Show this in a trace table and show
myLinkedList once 16 has been removed. Add the delete procedure to your program, add code
to input an item, delete this item to the linked list, then print out the list and the pointers before
and after the item was deleted.

Binary trees
A binary tree is another frequently used ADT. It is a hierarchical data structure in which each
parent node can have a maximum of two child nodes. There are many uses for binary trees; for
example, they are used in syntax analysis, compression algorithms and 3D video games.
Figure 19.10 shows the binary tree for the data stored in myList sorted in ascending order. Each
item is stored at a node and each node can have up to two branches with the rule if the value to
be added is less than the current node branch left, if the value to be added is greater than or equal

to the current node branch right.

Figure 19.10 Example of an ordered binary tree

A binary tree can also be used to represent an arithmetic expression. Consider (a + b) * (c – a)

Figure 19.11 Example of an expression as a binary tree

ACTIVITY 19J
Draw the binary tree for the expression (x – y) / ( x * y + z).

EXTENSION ACTIVITY 19B
Find out about different tree traversals and how they are used to convert an expression into
reverse Polish.

The data structure for an ordered binary tree can be created in pseudocode as follows:

ACTIVITY 19K
Create the data structure in pseudocode for a binary tree to store a list of names. Your list must
be able to store at least 50 names.

The populated contents of the data structure myTree is shown below.

Figure 19.12

The root pointer points to the first node in a binary tree. A null pointer is a value stored in the left
or right pointer in a binary tree to indicate that there are no nodes below this node on the left or
right.
Finding an item in a binary tree
The algorithm to find if an item is in the binary tree myTree and return the pointer to its node if
found or a null pointer if not found, could be written as a function in pseudocode, as shown.

Here is the identifier table for the binary tree search algorithm shown above.

 Identifier                    Description
 myTree                        Tree to be searched
 node                          ADT for tree
 rootPointer                   Pointer to the start of the tree
 leftPointer                   Pointer to the left branch
 rightPointer                  Pointer to the right branch
 nullPointer                   Null pointer set to −1
 itemPointer                   Pointer to current item
 itemSearch                    Item being searched for
Table 19.20

The trace table below shows the algorithm being used to search for 42 in myTree.

              rootPointer                  itemPointer                       itemSearch

                   0                             0                               42
Table 19.21 Trace table

ACTIVITY 19L
Use the algorithm to search for 55 and 75 in myTree. Show the results of each search in a trace
table.

Inserting items into a binary tree
The binary tree needs free nodes to add new items. For example, myTree, shown in Figure 19.13
below, now has room for 12 items. The last three nodes have not been filled yet, there is a
pointer to the next free node and the free nodes are set up like a heap in a linked list, using the
left pointer.

Figure 19.13

The algorithm to insert an item at a new node in the binary tree myTree could be written as a
procedure in pseudocode as shown below.

Here is the identifier table.

 Identifier           Description
 myTree               Tree to be searched
 node                 ADT for tree
 rootPointer          Pointer to the start of the tree
 leftPointer          Pointer to the left branch
 rightPointer         Pointer to the right branch
 nullPointer          Null pointer set to -1
 itemPointer          Pointer to current item in tree
 itemAdd              Item to add to tree
 nextFreePointer      Pointer to next free node
 itemAddPointer       Pointer to position in tree to store item to be added
 oldPointer           Pointer to leaf node that is going to point to item added
 leftBranch           Flag to identify whether to go down the left branch or the right branch
Table 19.22

The trace table below shows the algorithm being used to add 18 to myTree.

Table 19.23

The tree, myTree will now be as shown below.

Figure 19.14

ACTIVITY 19M
Use the algorithm to add 25 to myTree. Show this in a trace table and show myTree once 25
has been added.

Implementing binary trees in Python, VB.NET or Java requires the use of objects and recursion.
An example will be given in Chapter 20.

Graphs
A graph is a non-linear data structure consisting of nodes and edges. This is an ADT used to
implement directed and undirected graphs. A graph consists of a set of nodes and edges that join
a pair of nodes. If the edges have a direction from one node to the other it is a directed graph.

Figure 19.15

As we saw in Chapter 18, graphs are used to represent real life networks, such as
• bus routes, where the nodes are bus stops and the edges connect two stops next to each other
• websites, where each web page is a node and the edges show the links between each web page
• social media networks, where each node contains information about a person and the edges
  connect people who are friends.
Each edge may have a weight; for example, in the bus route, the weight could be the distance
between bus stops or the cost of the bus fare.
A path is the list of nodes connected by edges between two given nodes and a cycle is a list of

nodes that return to the same node.
For example, a graph of the bus routes in a town could be as follows. The distance between each
bus stop in kilometres is shown on the graph.

Figure 19.16

ACTIVITY 19N
Find another path from School to Gardens. Find the shortest path from Town centre to Train
station. Find the shortest cycle from the Town centre.

A path from School to Gardens could be Path = (School, Train station, River, Gardens).

19.1.4 Implementing one ADT from another ADT
Every ADT is a collection of data and the methods used on the data. When an ADT is defined,
the definition can refer to other data types. For example, myLinkedList refers to the data type
INTEGER in its data definition.
A linked list type could be defined as follows.

And then used as follows.

ACTIVITY 19O
Write pseudocode to declare a linked list to store names. Use this to write pseudocode to set up
a linked list that will store 30 names. Write a program to store and display names in this linked
list.

The data types for a stack, queue and a binary tree have been defined using existing data types.
Another data type is a dictionary, which is an ADT that consists of pairs consisting of a key and
a value, where the key is used to find the value. Each key can only appear once. Keys in a
dictionary are unordered. A value is retrieved from a dictionary by specifying its corresponding
key. The same value may appear more than once. A dictionary differs from a set because the
values can be duplicated. As a dictionary is not an ordered list, it can be declared using a linked
list as part of the definition.
A dictionary type could be defined in pseudocode as follows.

And then used as follows.

Each of the programming languages used in Cambridge International A Level Computer Science
provide a dictionary data type, as shown in the table below.

 Dictionary data type example                                  Language
                                                               Python

                                                               VB

                                                               Java Dictionary is no
                                                               longer used in Java but can
                                                               be implemented using a
                                                               hash table

Table 19.24

ACTIVITY 19P
In the programming language of your choice, write a program to use a dictionary to store the
names of students as their keys and their examination scores as their values. Then find a
student’s examination score, add a student and score and delete a student and score.

19.1.5 Comparing algorithms
Big O notation is a mathematical notation used to describe the performance or complexity of an
algorithm in relation to the time taken or the memory used for the task. It is used to describe the
worst-case scenario; for example, how the maximum number of comparisons required to find a
value in a list using a particular search algorithm increases with the number of values in the list.

Big O order of time complexity
            Description                                                    Example
 O(1)       describes an algorithm that always takes the same time to      deciding if a number is
            perform the task                                               even or odd
 O(N)       describes an algorithm where the time to perform the task      a linear search
            will grow linearly in direct proportion to N, the number of
            items of data the algorithm is using
 O(N2)      describes an algorithm where the time to perform the task      bubble sort, insertion
            will grow linearly in direct proportion to the square of N,    sort
            the number of items of data the algorithm is using
 O(2N)      describes an algorithm where the time to perform the task      calculation of
            doubles every time the algorithm uses an extra item of data    Fibonacci numbers
                                                                           using recursion (see
                                                                           Section 19.2)
 O(Log describes an algorithm where the time to perform the task           binary search
 N)    goes up linearly as the number of items goes up
       exponentially
Table 19.25 Big O order of time complexity

Big O order of space complexity
          Description                                         Example
 O(1)     describes an algorithm that always uses the         any algorithm that just uses
          same space to perform the task                      variables, for example d = a + b + c
 O(N) describes an algorithm where the space to               any algorithm that uses arrays, for
      perform the task will grow linearly in direct           example a loop to calculate a
      proportion to N, the number of items of data the        running total of values input to an
      algorithm is using                                      array of N elements
Table 19.26 Big O order of space complexity

ACTIVITY 19Q

1 Using diagrams, describe the structure of
  a) a binary tree
  b) a linked list.
2 a) Explain what is meant by a dictionary data type.
  b) Show how a dictionary data type can be constructed from a linked list.
3 Compare the performance of a linear search and a binary search using Big O notation.

19.2 Recursion
WHAT YOU SHOULD ALREADY KNOW
Remind yourself of the definitions of the following mathematical functions, which many of
you will be familiar with, and see how they are constructed.
• Factorials
• Arithmetic sequences
• Fibonacci numbers
• Compound interest

Key terms
Recursion – a process using a function or procedure that is defined in terms of itself and calls
itself.
Base case – a terminating solution to a process that is not recursive.
General case – a solution to a process that is recursively defined.
Winding – process which occurs when a recursive function or procedure is called until the
base case is found.
Unwinding – process which occurs when a recursive function finds the base case and the
function returns the values.

19.2.1 Understanding recursion
Recursion is a process using a function or procedure that is defined in terms of itself and calls
itself. The process is defined using a base case, a terminating solution to a process that is not
recursive, and a general case, a solution to a process that is recursively defined.
For example, a function to calculate a factorial for any positive whole number n! is recursive.
The definition for the function uses:

This can be written in pseudocode as a recursive function.

With recursive functions, the statements after the recursive function call are not executed until
the base case is reached; this is called winding. After the base case is reached and can be used in
the recursive process, the function is unwinding.
In order to understand how the winding and unwinding processes in recursion work, we can use
a trace table for a specific example: 3!

Table 19.27

Here is a simple recursive factorial program written in Python, VB and Java using a function.
Python

VB

Java

ACTIVITY 19R
Write the recursive factorial function in the programming language of your choice. Test your
program with 0! and 5!
Complete trace tables for 0! and 5! using the recursive factorial function written in pseudocode
and compare the results from your program with the trace tables.

Compound interest can be calculated using a recursive function. Where the principal is the
amount of money invested, rate is the rate of interest and years is the number of years the money
has been invested.

 The base case is                    total0 = principal where years = 0
 The general case is                 totaln = totaln-1 * rate
Table 19.28

This function can be traced for a principal of 100 over three years at 1.05 (5% interest).

Table 19.29

ACTIVITY 19S
The Fibonacci series is defined as a sequence of numbers in which the first two numbers are 0
and 1, depending on the selected beginning point of the sequence, and each subsequent number
is the sum of the previous two.
Identify the base case and the general case for this series. Write a pseudocode algorithm to find
and output the nth term. Test your algorithm by drawing a trace table for the fourth term.

EXTENSION ACTIVITY 19C
Write your function from Activity 19S in the high-level programming language of your choice.
Test this with the 5th and 27th terms.

Benefits of recursion
Recursive solutions can contain fewer programming statements than an iterative solution. The
solutions can solve complex problems in a simpler way than an iterative solution. However, if
recursive calls to procedures and functions are very repetitive, there is a very heavy use of the
stack, which can lead to stack overflow. For example, factorial(100) would require 100 function
calls to be placed on the stack before the function unwinds.

19.2.2 How a compiler implements recursion
Recursive code needs to make use of the stack; therefore, in order to implement recursive
procedures and functions in a high-level programming language, a compiler must produce object
code that pushes return addresses and values of local variables onto the stack with each recursive
call, winding. The object code then pops the return addresses and values of local variables off the
stack, unwinding.

ACTIVITY 19T
1 Explain what is meant by recursion and give the benefits of using recursion in
  programming.
2 Explain why a compiler needs to produce object code that uses the stack for a recursive
  procedure.

End of chapter questions
1 Data is stored in the array NameList[1:10]. This data is to be sorted.
  a) i) Copy and complete this pseudocode algorithm for an insertion sort.
                                                                                                 [7]

       ii) A special case is when NameList is already in order. The algorithm in part a) i) is
           applied to this special case.
           Explain how many iterations are carried out for each of the loops.
                                                                                                 [3]
   b) An alternative sort algorithm is a bubble sort:

     i) As in part a) ii), a special case is when NameList is already in order. The algorithm in
         part b) is applied to this special case.
         Explain how many iterations are carried out for each of the loops.
                                                                                             [2]
     ii) Rewrite the algorithm in part b), using pseudocode, to reduce the number of
         unnecessary comparisons.
         Use the same variable names where appropriate.
                                                                                             [5]
                                 Cambridge International AS & A Level Computer Science 9608
                                                                        Paper 41 Q5 June 2015
2 A Queue Abstract Data type (ADT) has these associated operations:
  – create queue
  – add item to queue
  – remove item from queue
  The queue ADT is to be implemented as a linked list of nodes.
  Each node consists of data and a pointer to the next node.
  a) The following operations are carried out:

      Copy the diagram and add appropriate labels to show the final state of the queue. Use the
      space on the left as a workspace.
      Show your final answer in the node shapes on the right.

                                                                                          [3]

b) Using pseudocode, a record type, Node, is declared as follows:

   The statement

   reserves space for 10 nodes in array Queue.
   i) The CreateQueue operation links all nodes and initialises the three pointers that need
       to be used: HeadPointer, TailPointer and FreePointer.
       Copy and complete the diagram to show the value of all pointers after CreateQueue
       has been executed.
                                                                                          [4]

    ii) The algorithm for adding a name to the queue is written, using pseudocode, as a
        procedure with the header:

        where NewName is the new name to be added to the queue.
        The procedure uses the variables as shown in the identifier table.

Identifier          Data type                      Description
Queue               Array[1:10] OF Node            Array to store node data
NewName             STRING                         Name to be added
FreePointer         INTEGER                        Pointer to next free node in array
HeadPointer         INTEGER                        Pointer to first node in queue
TailPointer         INTEGER                        Pointer to last node in queue
CurrentPointer      INTEGER                        Pointer to current node

Copy and complete the pseudocode for the procedure RemoveName. Use the
variables listed in the identifier table.
                                                                         [6]

Cambridge International AS & A Level Computer Science 9608
                                     Paper 41 Q6 June 2015