# Unit 6 - Assembly Language Programming Answers

**Course:** Cambridge International AS & A Level Computer Science (9618)
**Source:** Unit 6 - Assembly Language Programming Answers.pdf

---

1) Define the term “assembly language” - is it a single language or are there many assembly languages?
Assembly languages are low-level languages that will be assembled into machine code that allow direct access
of hardware. The language uses mnemonic instructions that consist of an opcode (the action) and operand(s) -
the data/address/register that opcode is to be performed on. These instructions usually map to 1 machine
code instruction. Assembly languages are specific for each CPU architecture - x64, x86, Z80 etc

2) Define the following terms:

Opcode: represents the action to be performed - e.g. ADD, LDD, STO, XOR etc

Operand: the data the opcode (action) is to be performed on - e.g. #5, B0101, &5, 5, ACC, IX

3) What is the difference between a low-level and high-level language? Give 2 examples of low-level
languages and at least 3 examples of high-level languages

High-level languages are often more human-readable (e.g. closer to English/natural language), with one
function/procedure/method often doing a lot of functionality - e.g. a built-in sort method that takes an array
then might choose an optimal algorithm to sort it based on its size, data types etc. In contrast, low-level
languages use small, simple instructions like ADD, OR, NOT, LSL etc. As such, it might be possible to write a
high level program from scratch in 20 lines, but that same assembly program might be 100+ lines. High level
languages can be either compiled or interpretted, while low-level languages are either machine code which
can already be directly executed by the CPU, or they are assembly, which will be assembled into a machine
code executable

High-level languages: Java, Python, Visual Basic, SQL, Prolog (A2) etc
Low-level languages: assembly & machine code

4) Assembly language usually has one statement per machine instruction. It is false that assembly language is
executed by the CPU. The process of translating assembly code into machine code is called assembling. Each
assembly instruction can be made up of two parts - for example, in the instruction ADD 5, then ADD would be
the opcode and 5 would be the operand - this part could be a number, address or register

5) Why do most people program in high-level languages? What would be 3 reasons someone would program
in assembly?

High-level languages are easier for humans because they are more similar to natural language, often include
large amounts of built-in functionality without having to worry about underlying implementation details
(system calls, interrupts etc) - e.g. input/output, file handling, networking etc. High-level languages often have
a wide-range of well-tested libraries available too.

If someone needs to access hardware/registers directly, they will have to use an assembly language - likewise,
it may also be possible to create a program that is faster and uses less memory in an assembly language,
rather than in a high-level language

6) Suppose we have a word length/bus width of 32. If we want to create an instruction set with 1000
instructions, how many bits should be used for the opcode and how many bits should be used for the operand
- in this form, what would be the biggest signed & unsigned numbers that could be represented when using
immediate addressing? How about if using direct addressing?

10 bits for the opcode gives us 1024 different opcodes (210)

This hence leaves 22 bits for the operand, allowing the following ranges:
Unsigned: 0 to 4,194,303 (222 - 1)
Signed: -2,097,152 -(221) to 2097151 (221 - 1)

If using direct addressing, we could have 22 bits to represent the memory address, but since the word
length/but width are 32 bits, we could store 32 bits numbers, hence giving a range of:

Unsigned: 0 to 4,294,967,295 (232 - 1)
Signed: -2,147,483,648 -(231) to 2147483647 (231 - 1)

7) “A program written in assembly will be faster than a program written in a high-level language” - give one
argument supporting this argument and one argument contradicting it

For: a programmer has direct control over exactly what instructions are executed and the amount of memory
allocated, hence if they are an expert, they might be able to create an incredibly optimised program

Against: modern compilers provide a lot of optimisations - often, the compiled machine code may not have
much resemblance to the original high-level program. If the compiler can produce more optimised code than
the assembly programmer, than the high-level code will be compiled to a faster and/or more memory
efficient program

8) What is a register - list 6 registers in the CPU

A small, fast-access, volatile memory location inside and accessed by each core.

Example registers:
PC - program counter
 MAR - memory address register
 MDR - memory data register
 CIR - current instruction register
 SR - status regsiter
 IX - index register

9) What are the 4 main flags in the status register that are required for AS - give a scenario (e.g. accumulator
value & subsequent instruction) that would set the flag to true and another that would set the flag to false

Sign (1 = negative):
ACC = 0111 then ADD #1 will become negative. ADD #8 will overflow and it will become positive

Zero:
ACC = 1111 then AND #0 will set zero to false. ADD #2 will keep it true

Overflow:
ACC = 0111 then ADD #1 will cause overflow to be true. SUB #1 will cause it become false

Carry
ACC = 1111 then ADD #1 will cause carry out of MSB. OR #0 will cause it to be false

10) Explain how these flags can be used in combination to determine if a number was greater than or equal to
another number - how could this be used to check, for example, if a character - c - comes before or after ‘m’ in
the alphabet?

In a CMP instruction, the contents of the accumulator are subtracted from the operand - if the zero flag is true,
we know they are equal, if the sign flag is false, we know the value we were comparing was bigger, if the sign
flag is true, we know the value we were comparing was smaller. Likewise, greater than or equal can be
achieved by checking zero = true OR sign = false while less than or equal can be checked by checking zero =
true OR sign = true

Hence, to check if some variable containing some character was bigger than another, a CMP instruction could
be used - the relevant conditional jumps like JPE, JPN, JPG (e.g. jump if equal/not equal/greater than) would
then check the values of the flags to see if the condition was true

11) There are 5 additional features most assembly languages include - the first has been done for you - what
are the other 4? Write a definition and/or give an example for each

   comments: a note or explanation the programmer can leave for themselves/others explaining how the
    code works, who wrote it, future to do’s etc

   labels: using a name (analogous to a variable name) to represent a memory address - e.g. rather than
    using LDD 10328, we could simply do LDD playerScore, which is much easier to understand for humans,
    compared to a numerical address value (which might change if the code order changes too)

   symbolic names for constants: as above, using a text string to represent constants - e.g. rather than using
    MUL 3.14, we could simply store a constant value PI and do MUL PI instead

   directives: extra information for the assembler to help it assemble the program - e.g. defining the
    different code sections (DATA, CODE etc), include other libraries, specify data types etc

   macros: create a group of instructions that can be called via the macro name and passed parameters -
    analogous to a module (function or procedure) in a high-level language. Macros can also return values

12) What would be output to the screen in the following programs:

Address         Instruction
1               LDM #50
a               ADD #4
b               ADD #-6
4               OUT
5               END

Output: 0

Address         Instruction
1               LDM #50
a               ADD #4
3               JMP c
b               ADD #-6
c               OUT

6               END

Output: 6

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

Code is: r3 * 3.14 * 4/3 - i.e. calculating the volume of a sphere. The accumulator would store the value
4188.79

14) A macro in assembly language is a user-defined sequence of instructions - in a high-level language, it
would be similar to a sub-routine such as a function or procedure

15) Directives are anything in the assembly code that is not an instruction - for example, .DATA defines the
start of the data section, MACRO defines a macro, #Include will include external files as part of the final
executable, my_label: defines a label that can be jumped to, db defines a variable of size 1 byte etc. Directives
will be removed/processed during the assembling process - they are not included in the final executable, but
are used to help the assembler assemble the program

16) Give an example of the following type of address:

Symbolic: startGame

Relative: 15 (effective address will be calculated [Base Register] + 15)

Absolute: 15

17) These addressing modes can be broken down further - match the following addressing modes to the
description. Where one exists, also list Cambridge’s assembly instruction to load via this addressing mode

Addressing modes: immediate, direct, indirect, relative, indexed

Addressing mode     Description                                                  Cambridge           ‘load’
                                                                                 assembly instruction
Indirect            The operand is the address of the address of the value to be LDI
                    used
Direct              The operand is the address of the value to be used           LDD
Relative            The operand is the offset from the current address where the [not      in     syllabus
                    value to be used is stored                                   instruction set]

Indexed              The operand plus the contents of the index register is the LDX
                     address of the value to be used
Immediate            The operand is the value to be used                        LDM

18) List some advantages/disadvantages/use cases for each of the following addressing modes:

Addressing Advantages                        Disadvantages                      Use cases
mode
Immediate Fast - additional memory           Can only use for constants         Constants
           lookups not required
           Low memory - doesn’t require
           additional storage addresses
Direct     Can be used for variables         Requires 2 memory reads            Variables
           Easy    for     humans      to    Requires 2 memory locations
           understand
Indirect   Used for variables/pointers  Requires 3 memory reads         Pointers
                                        Requires 3 memory locations
Relative      Program can be loaded Quite hard for humans to Jumps, arrays, records
              anywhere in memory        understand
              Useful for jumps, arrays, Relative offsets have to be
              records                   updated if adding more code
              Fast                      at earlier point in program
Indexed       Can     loop  through an Harder for humans to Jumps, arrays, records
              array/string              program in
                                        Harder to design logic circuits
                                        for

19) Write an example of using the 5 addressing modes in register transfer notation - one has been done for
you, as an example:

Immediate: ACC <-- #5
Direct: ACC <-- [5]
Indirect: ACC <-- [[5]]
Relative: ACC <-- [[BR] + 5]
Indexed: ACC <-- [[IX] + 5]

20) What are the 6 categories of assembly language instructions required for the exam? List some example
instructions for each - the first has been done for you:

Data movement: LDM, LDD, LDI, STO
Arithmetic: ADD, SUB
Bitwsie logic: AND, OR, NOT, XOR
Shifts: LSL, LSR
Input/output: IN, OUT
Conditional & unconditional jumps: JMP, JPE, JPN

21) State the arithmetic operations these instructions would be equivalent to

LSL #3: multipling by 8

LSR #4: dividing by 16

Note: the answers would only be correct if no 1s were shifted out

22) What is the difference between a bitwise instruction and a logical instruction?

A bitwise instruction operates on all bits individually: e.g. AND B1100
A logical instruction operates on Boolean values - e.g. true AND false = false

23) Write an assembly program equivalent to this pseudocode program

DECLARE n : INTEGER
n <- 4
n <- (n * 2) - 3
n <- n + 1
OUTPUT n

n:
LDM #4
STO n
MUL #2
SUB #3
STO n
INC n
STO n
ADD #48
OUT

24) When converting from ASCII characters to the numerical value it represents and vice-versa, why do we
ADD #48 or ADD #-48 - what is significant about the number 48?

48 is the ASCII value of the character ‘0’ - we can use this when converting between the integer number and
its ASCII representation. For example, if we want to output the integer 5, we have to add 48 to get its ASCII
value (5 + 48 = 53 = ‘5’) in the accumulator, then we can use the OUT instruction to output the ASCII character
represented by the value in the accumulator to the screen

integer to char: ADD #48
char to integer: SUB #48

25) Write an assembly program where the user will enter a number between 1-4 (validation not required) -
double this number, then print the answer back to the user

tmp:
IN
SUB #48
STO tmp
ADD tmp
ADD #48

OUT
END

26) Recall that NAND & NOR gates are universal gates - the top logic circuit is equivalent to NOT A, while the
bottom is equivalent to A AND B - using only the instructions in the Cambridge syllabus (AND, OR, NOT, XOR),
simulate these situations - have the user enter inputs, simulate these circuits and output the result to the user

NAND:

a:
IN
STO a
AND a
NOT
OUT
END

AND:
a:
nand:
IN
STO a
IN
AND a
NOT
STO nand
AND nand
NOT
OUT
END

27) Write an assembly program to output 1 if the user’s input (i.e. an ASCII code) is even, while 0 if it’s odd

IN
AND #1
CMP #1
JPE odd
even:
    LDM #49

       OUT
       JMP end
odd:
    LDM #48
    OUT
end: END

28) Assuming inputs are interpreted as two’s complement integers, write an assembly program to output 1 if
the user’s input is negative, while 0 if it’s positive

IN
AND B10000000
CMP #-128
JPE neg
pos:
     LDM #48
     OUT
     JMP end
neg:
     LDM #49
     OUT
end: END

29) What bit-manipulation instruction could we use to limit (i.e. not allow a value) higher than 15?

AND #15

30) What bit-manipulation instruction could we use to set the most and least significant bits to 1 and keep all
other bits the same

OR B10000001

31) What bit manipulation instruction could we use to round an odd number down to the nearest even
number?

AND #11111110

32) What bit-manipulation instruction (other than NOT) could we use to invert all the bits

XOR [with itself]

33) What bit-manipulaiton instruction could we use to convert an upper-case letter into it’s equivalent lower-
case counterpart?

OR B00100000

34) List three ways we can use to fix logic errors in our assembly programs

Debugger, single-stepping, breakpoints, output statements