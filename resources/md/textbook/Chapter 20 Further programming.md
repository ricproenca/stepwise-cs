# 20 Further programming

**Course:** Cambridge International AS & A Level Computer Science (9618)
**Source:** 20 Further programming.pdf

---

20 Further programming
In this chapter, you will learn about
• the characteristics of a number of programming paradigms, including low-level
  programming, imperative (procedural) programming, object-oriented programming and
  declarative programming
• how to write code to perform file-processing operations on serial, sequential and random
  files
• exceptions and the importance of exception handling.

    20.1 Programming paradigms
WHAT YOU SHOULD ALREADY KNOW
In Chapter 4, Section 4.2, you learnt about assembly language, and in Chapter 11, Section
11.3, you learnt about structured programming. Review these sections then try these three
questions before you read the first part of this chapter.
1 Describe four modes of addressing in assembly language.
2 Write an assembly language program to add the numbers 7 and 5 together and store the
   result in the accumulator.
3 a) Explain the difference between a procedure and a function.
   b) Describe how to pass parameters.
   c) Describe the difference between a procedure definition and a procedure call.
4 Write a short program that uses a procedure.
   Throughout this section, you will be prompted to refer to previous chapters to review related
   content.

Key terms
Programming paradigm – a set of programming concepts.
Low-level programming – programming instructions that use the computer’s basic instruction
set.
Imperative programming – programming paradigm in which the steps required to execute a
program are set out in the order they need to be carried out.
Object-oriented programming (OOP) – a programming methodology that uses self-
contained objects, which contain programming statements (methods) and data, and which
communicate with each other.
Class – a template defining the methods and data of a certain type of object.
Attributes (class) – the data items in a class.
Method – a programmed procedure that is defined as part of a class.
Encapsulation – process of putting data and methods together as a single unit, a class.
Object – an instance of a class that is self-contained and includes data and methods.
Property – data and methods within an object that perform a named action.
Instance – An occurrence of an object during the execution of a program.
Data hiding – technique which protects the integrity of an object by restricting access to the
data and methods within that object.
Inheritance – process in which the methods and data from one class, a superclass or base

class, are copied to another class, a derived class.
Polymorphism – feature of object-oriented programming that allows methods to be redefined
for derived classes.
Overloading – feature of object-oriented programming that allows a method to be defined
more than once in a class, so it can be used in different situations.
Containment (aggregation) – process by which one class can contain other classes.
Getter – a method that gets the value of a property.
Setter – a method used to control changes to a variable.
Constructor – a method used to initialise a new object.
Destructor – a method that is automatically invoked when an object is destroyed.
Declarative programming – statements of facts and rules together with a mechanism for
setting goals in the form of a query.
Fact – a ‘thing’ that is known.
Rules – relationships between facts.

A programming paradigm is a set of programming concepts. We have already considered two
different programming paradigms: low-level and imperative (procedural) programming.
The style and capability of any programming language is defined by its paradigm. Some
programming languages, for example JavaScript, only follow one paradigm; others, for example
Python, support multiple paradigms. Most programming languages are multi-paradigm. In this
section of the chapter, we will consider four programming paradigms: low-level, imperative,
object-oriented and declarative.

20.1.1 Low-level programming
Low-level programming uses instructions from the computer’s basic instruction set. Assembly
language and machine code both use low-level instructions. This type of programming is used
when the program needs to make use of specific addresses and registers in a computer, for
example when writing a printer driver.
In Chapter 4, Section 4.2.4, we looked at addressing modes. These are also covered by the
Cambridge International A Level syllabus. Review Section 4.2.4 before completing Activity
20A.

ACTIVITY 20A
A section of memory in a computer contains these denary values:

 Address                              Denary value
 230                                  231
 231                                  5
 232                                  7
 233                                  9
 234                                  11
 235                                  0

Give the value stored in the accumulator (ACC) and the index register (IX) after each of these
instructions have been executed and state the mode of addressing used.

 Address                        Opcode                         Operand
 500                            LDM                            #230
 501                            LDD                            230
 502                            LDI                            230
 503                            LDR                            #1
 504                            LDX                            230
 505                            CMP                            #0
 506                            JPE                            509
 507                            INC                            IX
 508                            JMP                            504

509                             JMP                             509
// this stops the program, it executes the same instruction until the computer is turned off!

20.1.2 Imperative programming
In imperative programming, the steps required to execute a program are set out in the order
they need to be carried out. This programming paradigm is often used in the early stages of
teaching programming. Imperative programming is often developed into structured
programming, which has a more logical structure and makes use of procedures and functions,
together with local and global variables. Imperative programming is also known as procedural
programming.
Programs written using the imperative paradigm may be smaller and take less time to execute
than programs written using the object-oriented or declarative paradigms. This is because there
are fewer instructions and less data storage is required for the compiled object code. Imperative
programming works well for small, simple programs. Programs written using this methodology
can be easier for others to read and understand.
In Chapter 11, Section 11.3, we looked at structured programming. This is also covered by the
Cambridge International A Level syllabus. Review Section 11.3 then complete Activity 20B.

ACTIVITY 20B
Write a pseudocode algorithm to calculate the areas of five different shapes (square, rectangle,
triangle, parallelogram and circle) using the basic imperative programming paradigm (no
procedures or functions, and using only global variables).
Rewrite the pseudocode algorithm in a more structured way using the procedural programming
paradigm (make sure you use procedures, functions, and local and global variables).
Write and test both algorithms using the programming language of your choice.

20.1.3 Object-oriented programming (OOP)
Object-oriented programming (OOP) is a programming methodology that uses self-contained
objects, which contain programming statements (methods) and data, and which communicate
with each other. This programming paradigm is often used to solve more complex problems as it
enables programmers to work with real life things. Many procedural programming languages
have been developed to support OOP. For example, Java, Python and Visual Basic all allow
programmers to use either procedural programming or OOP.
Object-oriented programming uses its own terminology, which we will explore here.

Class
A class is a template defining the methods and data of a certain type of object. The attributes are
the data items in a class. A method is a programmed procedure that is defined as part of a class.
Putting the data and methods together as a single unit, a class, is called encapsulation. To ensure
that only the methods declared can be used to access the data within a class, attributes need to be
declared as private and the methods need to be declared as public.
For example, a shape can have name, area and perimeter as attributes and the methods set
shape, calculate area, calculate perimeter. This information can be shown in a class
diagram (Figure 20.1).

Figure 20.1 Shape class diagram

Object
When writing a program, an object needs to be declared using a class type that has already been
defined. An object is an instance of a class that is self-contained and includes data and methods.
Properties of an object are the data and methods within an object that perform named actions.
An occurrence of an object during the execution of a program is called an instance.
For example, a class employee is defined and the object myStaff is instanced in these programs
using Python, VB and Java.
Python

VB

Java

Data hiding protects the integrity of an object by restricting access to the data and methods
within that object. One way of achieving data hiding in OOP is to use encapsulation. Data hiding
reduces the complexity of programming and increases data protection and the security of data.
Here is an example of a definition of a class with private attributes in Python, VB and Java.
Python

VB

Java

ACTIVITY 20C

Write a short program to declare a class, student, with the private attributes name,
dateOfBirth and examMark, and the public method displayExamMark. Declare an object
myStudent, with a name and exam mark of your choice, and use your method to display the
exam mark.

Inheritance
Inheritance is the process by which the methods and data from one class, a superclass or base
class, are copied to another class, a derived class.
Figure 20.2 shows single inheritance, in which a derived class inherits from a single superclass.

Figure 20.2 Inheritance diagram – single inheritance

Multiple inheritance is where a derived class inherits from more than one superclass (Figure
20.3).

Figure 20.3 Inheritance diagram – multiple inheritance

EXTENSION ACTIVITY 20A
Not all programming languages support multiple inheritance. Check if the language you are
using does.

Here is an example that shows the use of inheritance.
A base class employee and the derived classes partTime and fullTime are defined. The objects
permanentStaff and temporaryStaff are instanced in these examples and use the method
showDetails.

Python

VB

Java

Figure 20.4 shows the inheritance diagram for the base class employee and the derived classes
partTime and fullTime.

Figure 20.4 Inheritance diagram for employee, partTime and fullTime

ACTIVITY 20D
Write a short program to declare a class, student, with the private attributes name,
dateOfBirth and examMark, and the public method displayExamMark.

Declare the derived classes fullTimeStudent and partTimeStudent.
Declare objects for each derived class, with a name and exam mark of your choice, and use
your method to display the exam marks for these students.

Polymorphism and overloading
Polymorphism is when methods are redefined for derived classes. Overloading is when a
method is defined more than once in a class so it can be used in different situations.
Example of polymorphism
A base class shape is defined, and the derived classes rectangle and circle are defined. The
method area is redefined for both the rectangle class and the circle class. The objects
myRectangle and myCircle are instanced in these programs.

Python

VB

Java

ACTIVITY 20E
Write a short program to declare the class shape with the public method area.
Declare the derived classes circle, rectangle and square.
Use polymorphism to redefine the method area for these derived classes.
Declare objects for each derived class and instance them with suitable data.
Use your methods to display the areas for these shapes.

Example of overloading
One way of overloading a method is to use the method with a different number of parameters.
For example, a class greeting is defined with the method hello. The object myGreeting is
instanced and uses this method with no parameters or one parameter in this Python program.
This is how Python, VB and Java manage overloading.
Python

VB

Java

ACTIVITY 20F
Write a short program to declare the class greeting, with the public method hello, which can
be used without a name, with one name or with a first name and last name.
Declare an object and use the method to display each type of greeting.

Containment
Containment, or aggregation, is the process by which one class can contain other classes. This
can be presented in a class diagram.
When the class ‘aeroplane’ is defined, and the definition contains references to the classes – seat,
fuselage, wing, cockpit – this is an example of containment.

Figure 20.5

When deciding whether to use inheritance or containment, it is useful to think about how the
classes used would be related in the real world.

For example
• when looking at shapes, a circle is a shape – so inheritance would be used
• when looking at the aeroplane, an aeroplane contains wings – so containment would be used.
Consider the people on board an aeroplane for a flight. The containment diagram could look like
this if there can be up to 10 crew and 350 passengers on board:

Figure 20.6

ACTIVITY 20G
Draw a containment diagram for a course at university where there are up to 50 lectures, three
examinations and the final mark is the average of the marks for the three examinations.

Object methods

In OOP, the basic methods used during the life of an object can be divided into these types:
constructors, setters, getters, and destructors.
A constructor is the method used to initialise a new object. Each object is initialised when a new
instance is declared. When an object is initialised, memory is allocated.
For example, in the first program in Chapter 20, this is the method used to construct a new
employee object.

 Constructor                                                                           Language
                                                                                       Python

                                                                                       VB

Table 20.1

 Constructing an object                                                              Language
                                                                                     Python
                                                                                     VB
                                                                                     Java
Table 20.2

A setter is a method used to control changes to any variable that is declared within an object.
When a variable is declared as private, only the setters declared within the object’s class can be
used to make changes to the variable within the object, thus making the program more robust.
For example, in the employee base class, this code is a setter:

 Setter                                                                         Language
                                                                                Python

                                                                                VB

                                                                                Java

Table 20.3

A getter is a method that gets the value of a property of an object.

For example, in the partTimeStaff derived class, this method is a getter:

 Getter                                                                          Language
                                                                                 Python

                                                                                 VB

                                                                                 Java

Table 20.4

A destructor is a method that is invoked to destroy an object. When an object is destroyed the
memory is released so that it can be reused. Both Java and VB use garbage collection to
automatically destroy objects that are no longer used so that the memory used can be released. In
VB garbage collection can be invoked as a method if required but it is not usually needed.
For example, in any of the Python programs above, this could be used as a destructor:

Here is an example of a destructor being used in a Python program:

Here are examples of destructors in Python and VB.

 Destructor                                       Language
                                                  Python

                                                    VB – only if required, automatically called at
                                                    end of program

                                                    Java – not used
Table 20.5

Writing a program for a binary tree
In Chapter 19, we looked at the data structure and some of the operations for a binary tree using
fixed length arrays in pseudocode. You will need to be able to write a program to implement a
binary tree, search for an item in the binary tree and store an item in a binary tree. Binary trees
are best implemented using objects, constructors, containment, functions, procedures and
recursion.
• Objects – tree and node
• Constructor – adding a new node to the tree
• Containment – the tree contains nodes
• Function – search the binary tree for an item
• Procedure – insert a new item in the binary tree
The data structures and operations to implement a binary tree for integer values in ascending
order are set out in Tables 20.6–9 below. If you are unsure how the binary tree works, review
Chapter 19.

 Binary tree data structure – Class          Language
 node
                                             Python – the values for new nodes are set here.
                                             Python uses None for null pointers

                                             VB with a recursive definition of node to allow for
                                             a tree of any size

                                        Java with a recursive definition of node to allow
                                        for a tree of any size

Table 20.6

 Binary tree data structure – Class   Language
 tree
                                      Python – the root of the tree is set as an instance of
                                      Node

                                      VB uses Nothing for null pointers

                                      Java uses null for null pointers

Table 20.7

 Add integer to binary tree   Language
                              Python showing a recursive
                              procedure to insert a new node and
                              the pointers to it

                              VB showing a recursive procedure
                              to insert a new node

Java showing a recursive procedure
to insert a new node

Table 20.8

 Search for integer in binary tree   Language
                                     Python – the function
                                     returns the value
                                     searched for if it is
                                     found, otherwise it
                                     returns None

                                     VB – the function
                                     returns the value
                                     searched for if it is
                                     found, otherwise it
                                     returns Nothing

                                                                       Java – the function
                                                                       returns the value
                                                                       searched for if it is
                                                                       found, otherwise it
                                                                       returns null

Table 20.9

ACTIVITY 20H
In your chosen programming language, write a program using objects and recursion to
implement a binary tree. Test your program by setting the root of the tree to 27, then adding the
integers 19, 36, 42 and 16 in that order.

EXTENSION ACTIVITY 20B
Complete a pre-order and post-order traverse of your binary tree and print the results.

20.1.4 Declarative programming
Declarative programming is used to extract knowledge by the use of queries from a situation
with known facts and rules. In Chapter 8, Section 8.3 we looked at the use of SQL scripts to
query relational databases. It can be argued that SQL uses declarative programming. Review
Section 8.3 to remind yourself how SQL performs queries.
Here is an example of an SQL query from Chapter 8:

Declarative programming uses statements of facts and rules together with a mechanism for
setting goals in the form of a query. A fact is a ‘thing’ that is known, and rules are relationships
between facts. Writing declarative programs is very different to writing imperative programs. In
imperative programming, the programmer writes a list of statements in the order that they will be
performed. But in declarative programming, the programmer can state the facts and rules in any
order before writing the query.
Prolog is a declarative programming language that uses predicate logic to write facts and rules.
For example, the fact that France is a country would be written in predicate logic as:

Note that all facts in Prolog use lower-case letters and end with a full stop.
Another fact about France – the language spoken in France is French – could be written as:

A set of facts could look like this:

These facts are used to set up a knowledge base. This knowledge base can be consulted using
queries.
For example, a query about countries that speak a certain language, English, could look like this:

Note that a variable in Prolog – Country, in this example – begins with an uppercase-letter.
This would give the following results:

The results are usually shown in the order the facts are stored in the knowledge base.
A query about the languages spoken in a country, Switzerland, could look like this:

And these are the results:

When a query is written as a statement, this statement is called a goal and the result is found
when the goal is satisfied using the facts and rules available.

ACTIVITY 20I
Use the facts above to write queries to find out which language is spoken in England and
which country speaks Japanese. Take care with the use of capital letters.

EXTENSION ACTIVITY 20C
Download SWI-Prolog and write a short program to provide facts about other countries and
languages and save the file. Then consult the file to find out which languages are spoken in
some of the countries. Note that SWI-prolog is available as a free download.

The results for the country Switzerland query would look like this in SWI-Prolog:

Most knowledge bases also make use of rules, which are also written using predicate logic.
Here is a knowledge base for the interest paid on bank accounts. The facts about each account
include the name of the account holder, the type of account (current or savings), and the amount
of money in the account. The facts about the interest rates are the percentage rate, the type of
account and the amount of money needed in the account for that interest rate to be paid.

Here is an example of a query using the above rule:

And here is the result:

Here are examples of queries to find bank account details:

And here are the results:

ACTIVITY 20J
Carry out the following activities using the information above.
1 Write a query to find out the interest rate for Laila’s bank account.
2 Write a query to find who has savings accounts.
3 a) Set up a savings account for Robert with 300.00.
  b) Set up a new fact about savings accounts allowing for an interest rate of 7% if there is
      2000.00 or more in a savings account.

EXTENSION ACTIVITY 20D
Use SWI-Prolog to check your answers to the previous activity.

ACTIVITY 20K
1 Explain the difference between the four modes of addressing in a low-level programming
  language. Illustrate your answer with assembly language code for each mode of addressing.
2 Compare and contrast the use of imperative (procedural) programming with OOP. Use the
  shape programs you developed in Activities 20B and 20E to illustrate your answer with
  examples to show the difference in the paradigms.
3 Use the knowledge base below to answer the following questions:

a) Write two new facts about Java, showing that it is a high-level language and uses OOP.
b) Show the results from these queries
   i) teaching(X).
   ii) teaching(masm).
c) Write a query to show all programming languages translated by an assembler.

20.2 File processing and exception handling
WHAT YOU SHOULD ALREADY KNOW
In Chapter 10, Section 10.3, you learnt about text files, and in Chapter 13, Section 13.2, you
learnt about file organisation and access. Review these sections, then try these three questions
before you read the second part of this chapter.
1 a) Write a program to set up a text file to store records like this, with one record on every
       line.

  b) Write a procedure to append a record.
  c) Write a procedure to find and delete a record.
  d) Write a procedure to output all the records.
2 Describe three types of file organisation
3 Describe two types of file access and explain which type of files each one is used for.

Key terms
Read – file access mode in which data can be read from a file.
Write – file access mode in which data can be written to a file; any existing data stored in the
file will be overwritten.
Append – file access mode in which data can be added to the end of a file.
Open – file-processing operation; opens a file ready to be used in a program.
Close – file-processing operation; closes a file so it can no longer be used by a program.
Exception – an unexpected event that disrupts the execution of a program.
Exception handling – the process of responding to an exception within the program so that the
program does not halt unexpectedly.

20.2.1 File processing operations
Files are frequently used to store records that include data types other than string. Also, many
programs need to handle random access files so that a record can be found quickly without
reading through all the preceding records.
A typical record to be stored in a file could be declared like this in pseudocode:

Storing records in a serial or sequential file
The algorithm to store records sequentially in a serial (unordered) or sequential (ordered on a key
field) file is very similar to the algorithm for storing lines of text in a text file. The algorithm
written in pseudocode below stores the student records sequentially in a serial file as they are
input.
Note that PUTRECORD is the pseudocode to write a record to a data file and GETRECORD is the
pseudocode to read a record from a data file.

 Identifier name               Description
 studentRecord                 Array of records to be written to the file
 studentFile                   File name
 counter                       Counter for records
Table 20.10

If a sequential file was required, then the student records would need to be input into an array of
records first, then sorted on the key field registerNumber, before the array of records was
written to the file.
Here are programs in Python, VB and Java to write a single record to a file.
Python

VB

Java
(Java programs using files need to include exception handling – see Section 20.2.2 later in this
chapter.)

ACTIVITY 20L
In the programming language of your choice, write a program to
• input a student record and save it to a new serial file
• read a student record from that file
• extend your program to work for more than one record.

EXTENSION ACTIVITY 20E
In the programming language of your choice, extend your program to sort the records on
registerNumber before storing in the file.

Adding a record to a sequential file
Records can be appended to the end of a serial file by opening the file in append mode. If records
need to be added to a sequential file, then the whole file needs to be recreated and the record
stored in the correct place.
The algorithm written in pseudocode below inserts a student record into the correct place in a
sequential file.

Identifier name   Description

 studentRecord                       record from student file
 newStudentRecord                    new record to be written to the file
 studentFile                         student file name
 newStudentFile                      temporary file name
Table 20.11

Note that you can directly append a record to the end of a file in a programming language by
opening the file in append mode, as shown in the table below.

 Opening a file in append mode                                       Language
                                                                     Opens the file with the
                                                                     name fileName in append
                                                                     mode in Python

                                                                     Opens the file with the
                                                                     name fileName in append
                                                                     mode in VB.NET
                                                                     Opens the file with the
                                                                     name fileName in append
                                                                     mode in Java
Table 20.12

ACTIVITY 20M
In the programming language of your choice, write a program to
• put a student record and append it to the end of a sequential file
• find and output a student record from a sequential file using the key field to identify the
  record
• extend your program to check for record not found (if required).

EXTENSION ACTIVITY 20F
Extend your program to input a student record and save it to in the correct place in the
sequential file created in Extension Activity 20E.

Adding a record to a random file
Records can be added to a random file by using a hashing function on the key field of the record
to be added. The hashing function returns a pointer to the address where the record is to be
added.

In pseudocode, the address in the file can be found using the command:

The record can be stored in the file using the command:

Or it can be retrieved using:

The file needs to be opened as random:

The algorithm written in pseudocode below inserts a student record into a random file.

EXTENSION ACTIVITY 20G
In the programming language of your choice, write a program to input a student record and
save it to a random file.

Finding a record in a random file
Records can be found in a random file by using a hashing function on the key field of the record
to be found. The hashing function returns a pointer to the address where the record is to be
found, as shown in the example pseudocode below.

EXTENSION ACTIVITY 20H
In the programming language of your choice, write a program to find and output a student
record from a random file using the key field to identify the record.

20.2.2 Exception handling
An exception is an unexpected event that disrupts the execution of a program. Exception
handling is the process of responding to an exception within the program so that the program
does not halt unexpectedly. Exception handling makes a program more robust as the exception
routine traps the error then outputs an error message, which is followed by either an orderly
shutdown of the program or recovery if possible.
An exception may occur in many different ways, for example
• dividing by zero during a calculation
• reaching the end of a file unexpectedly when trying to read a record from a file
• trying to open a file that has not been created
• losing a connection to another device, such as a printer.
Exceptions can be caused by
• programming errors
• user errors
• hardware failure.
Error handling is one of the most important aspects of writing robust programs that are to be
used every day, as users frequently make errors without realising, and hardware can fail at any
time. Frequently, error handling routines can take a programmer as long, or even longer, to write
and test as the program to perform the task itself.
The structure for error handling can be shown in pseudocode as:

Here are programs in Python, VB and Java to catch an integer division by zero exception.
Python

VB

Java

ACTIVITY 20N
In the programming language of your choice, write a program to check that a value input is an
integer.

ACTIVITY 20O
In the programming language of your choice, extend the file handling programs you wrote in
Section 20.2.1 to use exception handling to ensure that the files used exist and allow for the
condition unexpected end of file.

End of chapter questions
1 A declarative programming language is used to represent the following facts and rules:

These clauses have the following meaning:

 Clause         Explanation
 01             Ahmed is male
 05             Aisha is female
 08             Ahmed is a parent of Raul
 14             A is the mother of B if A is female and A is a parent of B

  a) More facts are to be included.
     Ali and Meena are the parents of Ahmed.
     Write the additional clauses to record this.
                                                                             [2]

  b) Using the variable C, the goal

      returns

     Write the result returned by the goal
                                                                                          [2]

  c) Use the variable M to write the goal to find the mother of Gina.
                                                                                          [1]
  d) Write the rule to show that F is the father of C.
                                                                                          [2]

  e) Write the rule to show that X is a brother of Y.
                                                                                          [4]

                                Cambridge International AS & A Level Computer Science 9608
                                                                  Paper 42 Q2 November 2015
2 A college has two types of student: full-time and part-time.
  All students have their name and date of birth recorded.
  A full-time student has their address and telephone number recorded.
  A part-time student attends one or more courses. A fee is charged for each course. The
  number of courses a part-time student attends is recorded, along with the total fee and
  whether or not the fee has been paid.
  The college needs a program to process data about its students. The program will use an
  object-oriented programming language.
  a) Copy and complete the class diagram showing the appropriate properties and methods.
                                                                                          [7]

  b) Write program code:
     i) for the class definition for the superclass Student.
                                                                                               [2]
      ii) for the class definition for the subclass FullTimeStudent.
                                                                                               [3]
      iii) to create a new instance of FullTimeStudent with:
           – identifier: NewStudent
           – name: A. Nyone
           – date of birth: 12/11/1990
           – telephone number: 099111
                                                                                               [3]
                              Cambridge International AS & A Level Computer Science 9608
                                                                 Paper 42 Q3 November 2015
3 a) When designing and writing program code, explain what is meant by:
     – an exception
     – exception handling.
                                                                                               [3]
  b) A program is to be written to read a list of exam marks from an existing text file into a
     1D array.

   Each line of the file stores the mark for one student.
   State three exceptions that a programmer should anticipate for this program.
                                                                                    [3]
c) The following pseudocode is to read two numbers.

   The programmer writes the corresponding program code.
   A user inputs the number 53 followed by 6. The following output is produced:

   i) State the pseudocode line number which causes the exception to be raised.
                                                                                    [1]
   ii) Explain the purpose of the pseudocode on lines 11 and 12.
                                                                                    [3]
                            Cambridge International AS & A Level Computer Science 9608
                                                          Paper 42 Q5(b)–(d) June 2016