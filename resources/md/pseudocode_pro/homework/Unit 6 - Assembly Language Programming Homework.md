# Unit 6 - Assembly Language Programming Homework

**Course:** Cambridge International AS & A Level Computer Science (9618)
**Source:** Unit 6 - Assembly Language Programming Homework.pdf

---

1) Define the term “assembly language” - is it a single language or are there many assembly languages?

2) Define the following terms:

Opcode:

Operand:

3) What is the difference between a low-level and high-level language? Give 2 examples of low-level
languages and at least 3 examples of high-level languages

4) Assembly language usually has ___ statement per machine instruction. It is (true/false) that assembly
language is executed by the CPU. The process of translating assembly code into machine code is called
___________. Each assembly instruction can be made up of two parts - for example, in the instruction ADD 5,
then ADD would be the _______ and 5 would be the _______ - this part could be a number, __________ or
__________

5) Why do most people program in high-level languages? What would be 3 reasons someone would program
in assembly?

6) Suppose we have a word length/bus width of 32. If we want to create an instruction set with 1000
instructions, how many bits should be used for the opcode and how many bits should be used for the operand
- in this form, what would be the biggest signed & unsigned numbers that could be represented when using
immediate addressing? How about if using direct addressing?

7) “A program written in assembly will be faster than a program written in a high-level language” - give one
argument supporting this argument and one argument contradicting it

8) What is a register - list 6 registers in the CPU

9) What are the 4 main flags in the status register that are required for AS - give a scenario (e.g. accumulator
value & subsequent instruction) that would set the flag to true and another that would set the flag to false

10) Explain how these flags can be used in combination to determine if a number was greater than or equal to
another number - how could this be used to check, for example, if a character - c - comes before or after ‘m’ in
the alphabet?

11) There are 5 additional features most assembly languages include - the first has been done for you - what
are the other 4? Write a definition and/or give an example for each

comments:

….…………..

….…………..

….…………..

….…………..

12) What would be output to the screen in the following programs:

Address         Instruction
1               LDM #50
a               ADD #4
b               ADD #-6
4               OUT
5               END

Output:

Address         Instruction
1               LDM #50
a               ADD #4
3               JMP c
b               ADD #-6
c               OUT
6               END

Output:

13) Note the use of a “symbolic name for (a) constant” in this example - what would be stored in the
accumulator when the program ends (assume that PWR, MUL and DIV raise a number to the specified power,
multiply and divide respectively)? What is this code calculating?

Address         Value
r               10
2               LDD r
3               PWR #3
4               MUL x
5               MUL #4
6               DIV #3
7               END
x               3.14

14) A macro in assembly language is a user-defined _____________ - in a high-level language, it would be
similar to a sub-routine such as a ____________ or ___________

15) Directives are anything in the assembly code that is ___ an instruction - for example, .DATA defines the
start of the ____ section, MACRO defines a macro, #Include will _______ external files as part of the final
executable, my_label: defines a label that can be ______ to, db defines a variable of size 1 byte etc. Directives
will be ________ during the assembling process - they are not included in the final executable, but are used to
help the assembler assemble the program

16) Give an example of the following type of address:

Symbolic:

Relative:

Absolute:

17) These addressing modes can be broken down further - match the following addressing modes to the
description. Where one exists, also list Cambridge’s assembly instruction to load via this addressing mode

Addressing modes: immediate, direct, indirect, relative, indexed

Addressing mode     Description                                                        Cambridge         ‘load’
                                                                                       assembly instruction
                    The operand is the address of the address of the value to be
                    used
                    The operand is the address of the value to be used
                    The operand is the offset from the current address where the
                    value to be used is stored
                    The operand plus the contents of the index register is the
                    address of the value to be used
                    The operand is the value to be used

18) List some advantanges/disadvantages/use cases for each of the following addressing modes:

Addressing Advantages                        Disadvantages                      Use cases
mode
Immediate

Direct

Indirect

Relative

Indexed

19) Write an example of using the 5 addressing modes in register transfer notation - one has been done for
you, as an example:

Immediate: ACC <-- #5

20) What are the 6 categories of assembly language instructions required for the example? List some example
instructions for each - the first has been done for you:

Data movement: LDM, LDD, LDI, STO

21) State the arithmetic operations these instructions would be equivalent to

LSL #3
LSR #4

22) What is the difference between a bitwise instruction and a logical instruction?

23) Write an assembly program equivalent to this Java program

int n = 4;
n = (n * 2) - 3;
n++;
System.out.println(n);

24) When converting from ASCII characters to the numerical value it represents and vice-versa, why do we
ADD #48 or ADD #-48 - what is significant about the number 48?

25) Write an assembly program where the user will enter a number between 1-4 - double this number, then
print the answer back to the user

26) Recall that NAND & NOR gates are universal gates - the top logic circuit is equivalent to NOT A, while the
bottom is equivalent to A AND B - using only the instructions in the Cambridge syllabus (AND, OR, NOT, XOR),
simulate these situations - have the user enter inputs, simulate these circuits and output the result to the user

27) Write an assembly program to output 1 if the user’s input (i.e. an ASCII code) is even, while 0 if it’s odd

28) Assuming inputs are interpreted as two’s complement integers, write an assembly program to output 1 if
the user’s input is negative, while 0 if it’s positive

29) What bit-manipulation instruction could we use to limit (i.e. not allow a value) higher than 15?

30) What bit-manipulation instruction could we use to ensure only the most and least significant bits could be
set?

31) What bit manipulation instruction could we use to round an odd number down to the nearest even
number?

32) What bit-manipulation instruction (other than NOT) could we use to invert all the bits

33) What bit-manipulaiton instruction could we use to convert an upper-case letter into it’s equivalent lower-
case counterpart?

34) List three ways we can use to fix logic errors in our assembly programs