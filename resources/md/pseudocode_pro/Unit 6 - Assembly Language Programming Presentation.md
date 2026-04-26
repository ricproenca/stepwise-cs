# Unit 6 - Assembly Language Programming Presentation

### What is assembly language?

- “In computer programming, assembly language (or assembler language), sometimes abbreviated asm, is any low-level programming language in which there is a very strong correspondence between the instructions in the language and the architecture's machine code instructions...

### What is assembly language?

- “...Assembly language usually has one statement per machine instruction (1:1), but constants, comments, assembler directives, symbolic labels of, e.g., memory locations, registers, and macros are generally also supported.”

### Is there 1 assembly language?

- No – unlike languages like Java, C, C++, Python etc – where there is only 1 of each, there is a different assembly language for each CPU family – e.g.
- x86
- x86-64
- ARM
- 6502
- z80
- MIPS

- Note: Windows & older Apple computers use x86 (32 bit) or, more commonly x86-64 (64 bit)
- Newer Mac (M1) & tablets/phones usually use ARM

### What is an assembly language?

- In simple terms, they’re languages that allows programmers to call CPU instructions directly
- Therefore, assembly languages are low-level languages

### True or false?

- “Assembly instructions are executed by the CPU”
- False – the ONLY thing a CPU executes is machine code (binary) – assembly is just an intermediate language that converts binary instructions to easier to understand mnemonics
- Assembly code  [assembling process]  machine code

### Assembly: key points

- CPUs ONLY execute machine code (binary)
- Machine code consists of a sequence of instructions
- Instructions contain an opcode and 0 to 3 operands
- Opcode is the actual operation (ADD, LDD, SUB, STO...)
- Operands are the registers, data or addresses to be operated on
- Different processor families have different instruction sets, though the functionality will generally be the same – just different opcodes/syntax

### Assembly: uses

- These days, compilers for high(er) level languages like C, C++, Rust etc will go direct from the instruction to the machine code – e.g.
- x = x + 1          000100000001
- For languages like Java, Python, JavaScript, PHP etc, it’s a bit more complicated – as these are interpreted and/or converted to an intermediate bytecode

### Higher or Lower

- Coming up, there will be some popular programming languages – try and list them as either high or low-level
- High-level: interpreted or compiled – 1 instruction does many things, lots of complex data types, easier for humans to understand
- Low-level: simple(r) instructions, allows direct access to hardware/processor instructions, requires many instructions to do the same thing

### Higher or Lower

- For example, assume the array of integers [4, 7, 2, 3, 9]
- To sort, in Java, we can simply do:
- Arrays.sort([4, 7, 2, 3, 9]);
- While in assembly, a simple (slow) bubble sort will require about 30 lines...while a more sophisticated (faster) sorting algorithm might require 100s or 1000s of lines
- So high-level languages usually contain lots of built-in functionality

### Java
JavaScript
Python
Assembly
PHP
C
C++
C#
Pascal
VB.net
Rust
Machine Code
SQL
Prolog

- Java

- Higher

- Lower

- JavaScript

- Python

- Assembly

- PHP

- C

- C#

- C++

- Pascal

- VB.net

- Rust

- Machine Code

- Prolog

- SQL

- Compulsory A-Level languages
- Previous A-Level languages
- Optional A-Level languages

### Assembly: uses

- So, if you are writing in a high-level language, assembly code will never be used
- Assembly will be used in specific cases – e.g.
- Developing for low-memory/CPU devices – e.g. embedded systems
- Accessing registers/hardware directly
- Controlling exactly what instructions are executed
- Optimising code manually

### Assembly: uses

- Old games were usually written in an assembly language for the CPU that that device contained
- The Nintendo Entertainment System (NES), for example, only had 2KB of RAM – so programs had to be highly optimised in terms of space & performance

### z80 Assembly - Pokemon & Final Fantasy

- “it was a fight against capacity, a fight against what we could fit onto the [1MB] cartridge...there were over 200 Pokemon designed for the original games — many were dropped for space and time reasons. [The] map data, pokemon graphics, and even the story”
- Pokemon Red = 375KB
- Final Fantasy III = 192KB

- For reference, this 1 image is 104KB – so over half the size of FF3

### x86 Assembly – Rollercoaster Tycoon 1 & 2

- Created by 1 person in 99% assembly & 1% C

### Instructions

- As stated, an instruction (opcode & operand(s)) could be something like:
- ADD #5
- LDD 10
- SUB #7
- AND 0
- NOT
- XOR #255
- etc

### Instructions

- For each instruction, the following must be defined:
- Number of bits for whole instruction
- Number of bits for opcode
- Number of operands defined in remaining bits
- Whether the opcode occupies most or least significant bits

### An example

- Assume we only want to have 100 instructions and we have 32-bit wide data buses. We want to use the minimum number of bits for the opcodes, so to have as many bits available for the operands. Each instruction should be able to be sent in full in a single transmission. How many bits should be made available for the opcode and operand respectively?
- 7 bits for opcodes = 128 instructions
- 25 remaining bits for operands

### Opcodes

- A possible structure for opcodes in a simple processor is shown below
- Assume a 16-bit address bus width in this simple system – what do you think the operand size should be?
- 216 valid addresses: 0 to 65,535

- ?

### Opcodes

- If we said the address bus in this simple computer would be 16 bits wide, what would be a minimum/suitable size for the operand?

- ?

### Opcodes

- In this example, what would be the:
- Number of different operations, address modes and registers we could have?
- 16 different operations, with 4 address modes & 4 registers

### Opcodes

- What would be the range of signed integers operands we could use? How about the range of unsigned?
- Signed = -(215) to 215-1 = -32,768 to 32,767
- Unsigned = 0 to 216-1 = 0 to 65,535

### Assembly

- With this structure – of opcodes and operands – we could now start creating an assembly language
- Assembly allows a programmer to explicitly define what instructions a processor will execute, while a high level language doesn’t (the compiler does)

### Assembly: Efficiency

- Many people argue that writing assembly will provide the most optimal (fastest, most resourceful) code – why do you think they say that?

### Assembly: Efficiency

- If you write in a high-level language, it is compiled to machine code.
- Effectively, what is more efficient depends on what can create better machine code – a compiler or human.
- For an expert, perhaps they could beat a compiler, though something like the gcc compiler for C/C++ etc has 15 million lines of code/extensive optimisations, so would most likely create more optimized code than most humans

### Assembly: Drawbacks

- While – as stated – assembly can possibly allow you to create more efficient programs, it is also tedious and error-prone
- Assembly would mainly be used for when direct access of registers is required – e.g. if writing drivers (for sound/network/graphics cards, mice, keyboards etc)
- Some e.g. game engines, crypto miners etc will use small portions of assembly, for the most performance-critical parts

### Assembly to machine code

- As stated, for each machine code instruction, there will be an equivalent assembly mnemonic.
- Likewise, you could equivalently say that each assembly instruction should map to 1 machine code instruction

### Assembly to machine code

- The process of converting from assembly to machine code is called assembling and performed by an assembler

### Assembly to machine code

- An assembler is simply software you can download – if you download the Microsoft Visual Studio IDE, then MASM (Microsoft Assembler) will be automatically included

### Assembly to machine code

- Remember – assembly mnemonics are not only never executed by the CPU, they are not even understood by it
- This is why the assembly code has to be translated from assembly to machine code, so it can be executed by the processor

### Registers & Flag

- Remember, the book simply pretends there is only 1 general purpose register for simplicity – let’s see how things actually work, however
- Understanding at a deeper level will make the book seem easier – and you can see the other registers/flags

### Registers & Flags

- On the next slide will be the contents of the registers after registers containing #255 and #0 were added
- These registers are also mentioned in chapter 5 and are sometimes asked about in the exam

### Registers & Flags

- RAX-R15 are general purpose registers
- RSI & RDI = source index & destination index – stores the memory address of strings
- RPC = (program counter) (technically called RIP (instruction pointer) – I just changed it to “RPC” for the images)

- RPC

- 0

### Registers & Flags

- RSP = stack pointer – points to top of stack (function addresses, local values etc)
- RBP = base pointer – points to bottom of stack
- Note how their values are close and the stack grows ‘downwards’ (i.e. RBP > RSP)

- RPC

- 0

### Registers & Flags

- EFL = flags register

- RPC

- 0

### Flags

- Next, let’s look at some common flags

- RPC

- 0

### Flags

- OV = overflow
- Set to 1 when an overflow occurs
- (in x64, this seems more specific – only occurring when a negative signed overflow occurs – but for the exam, just saying “the overflow flag is 1 when an overflow occurs” will be acceptable, even if perhaps not always correct?)

- RPC

### Flags

- UP = true when incrementing
- EI = interrupts enabled
- PL = sign flag (1 if negative, 0 if positive)
- ZR = zero flag (1 if answer is 0)
- AC = auxiliary carry (used for BCD)
- PE = parity flag (legacy, for 8-bit processors)

- RPC

- 0

### Flags

- CY = carry (true if the previous operation resulted in a carry)

- RPC

- 0

### Flags

- So, the important ones to remember:
- overflow
- sign (negative)
- carry
- zero

- RPC

- 0

### Assembly features

- Many assembly languages will include the following features:
- Comments
- Labels for addresses
- Symbolic names for constants
- Macros
- Directives

### Assembly features: comments

- What does this code do?

- Many assembly languages use a semi-colon to denote a comment – this makes it easier for both the programmer and others to understand the code, both now and when they look at it, a year in the future

### Same program in Cambridge assembly

| Address | Value |
| --- | --- |
| 1 | LDD num1 |
| 2 | XOR num1 |
| 3 | END |
|  |  |
| num1 | 123456789 |

### Labels

- Labels can be used as markers to represent points that can be jumped to in the program

### Labels

- labels are denoted with a colon (:) – what are the labels here?
- label1 and label2

| Address | Value |
| --- | --- |
| 1 | LDM #5 |
| label1: | ADD #7 |
| Label2: | ADD #3 |

### Labels

- What do you think the output of this procedure will be?
- You may think it will be 5, since the labels haven’t been explicitly jumped to, but – unlike functions in higher level languages – the code will simply be executed top to bottom, including what is inside the label – so the answer would be 15

| Address | Value |
| --- | --- |
| 1 | LDM #5 |
| label1: | ADD #7 |
| Label2: | ADD #3 |

### Labels

- What would happen in this program?
- This would cause an infinite loop – label1 and 2 would execute, then there’d be a jump to label1 – i.e. label1  label2  jmp label1 would execute infinitely

### Assembly features: symbolic names for constants

- Next, we will look at the next feature that assembly provides use, which machine code doesn’t:
- Symbolic names for constants

### Symbolic names for constants

- Effectively, this means we can give names to constant values and use these throughout the program – note, these will simply be swapped for the actual value by the assembler

| Address | Value |
| --- | --- |
| yVelocity | 0 |
| yPos | 100 |
| gravity | -10 |
| friction | 5 |
| map_size | 1000 |
| players | 5 |

### Symbolic names for constants

- Looking at the variable, constant and instructions, can you guess what this code will do?
- Moves the score and winScoreBoost into registers and multiplies them, returning the answer (20)

### Symbolic names for constants

- Why might we want to use names for constants, rather than simply hard-coding the value everywhere?
- Makes code easier to read/understand

- What is this program doing?

- Calculating physics equation v = u + at

| Address | Value |
| --- | --- |
| u | 5 |
| gravity | 10 |
| t | 15 |
| v |  |
| 5 | LDD gravity |
| 6 | MUL t |
| 7 | ADD u |
| 8 | STO v |

### Symbolic names for constants

- Can you convert this program into Cambridge assembly?

| Address | Value |
| --- | --- |
| 1 | LDD score |
| 2 | MUL winScoreBoost |
| 3 | END |
| score | 10 |
| winScoreBoost | 2 |
|  |  |
|  |  |

### Assembly features: macros

- Next, let’s look at macros – you may have also heard this term in programs like Excel – i.e. “Excel/VBA macros”

### Macros

- Programming in assembly is often laborious (lots of instructions, even to achieve simple things). Macros:
- Are analogous to functions/procedures in higher level languages
- A grouping of instructions that can be called
- Can accept parameters
- Can return values

### Macros

- From the previous slide, note the macro with the comment:
- “macro to branch (jump) if a specific bit is set”
- Cambridge often has questions like – the output of 4 sensors (e.g. temperature, oxygen, humidity & pH) for a greenhouse are stored in a nibble – i.e. 1000 means the temperature sensor has been activated
- How could this macro be useful in this situation?
- Since you’d be able to jump to the code that corresponds to the specific sensor being activated – in this case, code to e.g. turn down the temperature in the greenhouse

### Assembly features: macros

- So, effectively, a macro is what would be called a function/procedure in higher level languages
- Here would be a macro called Encrypt which takes in a parameter (plaintext) and returns the encrypted result (ciphertext)

| Address | Value |
| --- | --- |
| 1 | LDD plaintext |
| 2 | XOR key |
| 3 | STO result |
| 4 | END |
| plaintext | B01100001 |
| key | B01010101 |
| ciphertext |  |

### Assembly features: macros

- What is the ASCII code for the plaintext and what would be the value stored in the ‘ciphertext’ address, after the program has executed?
- Plaintext = 97 = ‘a’
- Ciphertext = 52 = ‘4’

- ?

| Address | Value |
| --- | --- |
| 1 | LDD plaintext |
| 2 | XOR key |
| 3 | STO result |
| 4 | END |
| plaintext | B01100001 |
| key | B01010101 |
| ciphertext | B00110100 |

### Assembly features: macros

- Let’s now decrypt, using the reverse process
- Ciphertext = 52 = ‘4’
- Plaintext = 97 = ‘a’

- ?

| Address | Value |
| --- | --- |
| 1 | LDD ciphertext |
| 2 | XOR key |
| 3 | STO plaintext |
| 4 | END |
| plaintext | B01100001 |
| key | B01010101 |
| ciphertext | B00110100 |

### Off-topic: XOR Encryption

- We just XORed plaintext with a key to generate ciphertext
- We then XORed that ciphertext to get back to the original plaintext
- This encryption method is called the ‘one-time pad’ – do you think it’s secure?

### Off-topic: XOR Encryption

- Yes – surprisingly, this super simple method is the most secure encryption algorithm – it offers “perfect secrecy”
- This is because if a ciphertext bit is a 0, it could have come from a key & plaintext combination of either 00 or 11 – likewise, if a ciphertext bit is 1, it could have come from either a 01 or 10 plaintext/key combination
- - i.e. with any ciphertext, this tells us nothing about the key & plaintext

### Off-topic: XOR Encryption

- Assume sending a message with 100 ASCII characters – the key should also be the same length
- If someone wanted to brute force all key combinations, how many would they have to try?
- 100 ASCII characters = 800 bits
- Hence number of key combinations is 2800 = 6.67x10240

### Off-topic: XOR Encryption

- So why aren’t one-time pads used for e.g. HTTPS?
- Key must be at least as long as message (otherwise repeating key = weaker security) – e.g. transmitting a 1GB file would require at least a 1GB key
- Key needs to be truly random, not pseudo-random
- Has to be a secure way of transmitting key – we can do this efficiently for small (e.g. 256-bit AES keys via RSA)...but not for huge e.g. 1GB keys

### Off-topic: XOR Encryption

- Still, this method was used extensively among militaries/government/spies, even prisoners:
- pad would be small/inconspicuous (KGB’s fit inside a walnut shell), possibly require magnifying glass or UV light to read & were often made of flammable material – why do you think this was?

- Document from NSA – letters on the left are the key

### Directives

- “A directive is an instruction to the assembler as to how it should construct the final executable machine code. This might be to direct how memory should be used or to define files or procedures that will be used”

### Directives

- A simpler explanation is that “assembly consists of two types of statements: executable statements and directives” – i.e. anything that isn’t an instruction is considered a directive

### Examples of Directives

- .DATA (defines start of data (variables/constants) section)
- .CODE (defines start of code section)
- .MODEL (selects memory model to be used)
- .STACK (defines stack size/contents)
- END (defines end)
- PROC (defines procedure)
- DB, DW, DD, DQ (byte, word, double & quad-word variable)
- #Include (including other files)
- my_label: (defines label that can be jumped to)

### Include files

- Although not stated in the book, this is another advantage of assembly and has been hinted at in exams – you can include other files that you want to use
- Imagine, for example, a math.asm or files.asm files that had macros relating to math and file functions – you could simply include them in other files you needed them in

### Include files

- With what statement can you include other files in Java?
- import
- So import (Java) is analogous to #include (assembly)

### Recap: Additional Assembly Features

- Comments:
- Directives:
- Symbolic names for constants

- Like in high-level languages, a note the programmer writes to help them or others understand the code
- Directives are instructions used by the assembler to help automate the assembly process and to improve program readability - directives aren't assembled into machine code
- If we have a constant like ‘gravity’ in a game, for example, we could define it using this name (improves readability), rather than simply the address – i.e.
- gravity=-10

### Recap: Additional Assembly Features

- Labels for addresses
- Macros
- Include files

- If we want to sum numbers, we could define an address with the name “sum”, rather than having the refer to its hex address, which is obviously more confusing
- These are multiple assembly instructions we can combine together, often aiding readability (due to these combined macros having a more obvious purpose than the constituent instructions combined in a section of code), passing parameters as arguments – effectively, these are functions, in assembly language
- These are external files we can include within our own assembly program – similar to importing files in Java etc

### Addressing modes

- Now let’s see how addresses can be referenced

### Addressing modes

- Symbolic: using a name to represent a memory location – e.g. ADD Total
- Relative: running instructions relative to the Base Pointer register (BR) – ADD [BR] + 5
- Absolute: storing the address or value directly - ADD 100 or ADD #100

## This adds numbers input by the user using the keyboard

### Addressing modes

- Let’s see how the same program could be represented using relative and absolute addressing

### Addressing modes

- There 5 following addressing modes are required for AS:
- Immediate
- Direct
- Indirect
- Relative
- Indexed

### Immediate Addressing

- Immediate addressing is when the value itself is used – it is called “immediate” since the value is known “immediately” (i.e. it’s the operand(s) itself) – another lookup in memory isn’t required, like for other addressing modes
- Examples:
- LDM #23
- SUB #48
- OR B00001111

### What would be the contents of the other 3 registers?

- LDM #5

### During execution, LDM #5 will be passed to & decoded by CU

- LDM #5

- LDM #5

- LDM #5

### Immediate Addressing: Pros & Cons

- Fast – additional lookups in memory aren’t required
- Doesn’t require additional storage address(es)
- Only possible to use with constants

### Direct Addressing

- Direct addressing is when the memory address which stores the value is used – i.e. the contents of that memory location will be used as the data
- Example:
- LDD 23
- (loads contents of address 23 into accumulator)

### Direct addressing uses the address of the value to be loaded

- LDD 501

- LDD 501

- LDD 501

### 6

- What value would be loaded into the MAR & MDR during execution?

- LDD 501

- LDD 501

- ???

- 501

- ???

### Direct Addressing: pros & cons

- Can be used for variables
- Easy for humans to understand
- Requires 2 memory reads
- Requires 2 memory locations

### Direct Addressing: pros & cons

- We said that direct addressing “requires 2 memory locations” – this would be true if we only used this address once
- Suppose the address represent a player’s health in a game and we have 100 instructions accessing this address via direct addressing – how many memory addresses would be required?
- 101: 100 for the instructions & 1 for the memory address
- [so in this case, immediate addressing would require 100 addresses, while direct would need 101 – so the difference is negligible]

### Indirect Addressing

- Indirect addressing uses the address of the address to be loaded from
- Example:
- LDI 23
- (loads contents of memory address stored in address 23 into accumulator)

### Indirect addressing uses the address of the address of the value to be loaded

- LDI 501

- LDI 501

- LDI 501

### What would happen next?

- LDI 501

- LDI 501

- 504

- ???

- 501

- ???

### What would happen next?

- LDI 501

- LDI 501

- 7

- ???

- 504

- ???

### Indirect Addressing: pros & cons

- Can be used for variables
- Easy for humans to understand
- Requires 3 memory reads
- Requires 3 memory locations

### Relative Addressing

- Makes use of a base register & program counter
- Base register would start memory location program is loaded in memory
- Useful for jumps – e.g. if program is loaded at address 2,000,000 and we want to jump to line 100 in our program, we would then add 100 to the BR – i.e. 2,000,100 would be the address to jump to
- In contrast, for direct addressing, a program would either have to always be loaded in same location in memory or addresses would somehow have to be converted by processor when program is loaded

### Relative addressing adds a value to the base register/program counter

- ADD #8

### PC is updated with offset (in this case, +3)

- ADD #8

### Instruction at offset is now in CIR, ready to be decoded/executed

- ADD #8

- ADD #8

- ADD #8

### Relative Addressing: pros & cons

- Program can be loaded anywhere in memory
- Useful for jumps, arrays, records etc
- Fast
- Harder for humans to program in (compared to e.g. direct addressing – immediate addressing is easiest, but only used for constants, so not directly comparable with relative addressing)

### Indexed addressing adds the contents of index register (IX) to address

- LDX 500

- LDX 500

- LDX 500

### Indexed addressing adds the contents of index register (IX) to address

- LDX 500

- LDX 500

- 7

- ???

- 503

- ???

### Indexed addressing is useful for looping through arrays – can you see how?

- LDX 500

- LDX 500

- 7

- 503

## Let’s see the assembly we’d need to loop through this array

## [these instructions are in the book & exam inserts]

### Indexed Addressing: pros & cons

- Program can be loaded anywhere in memory
- Useful for jumps, arrays, records etc
- Fast
- Harder for humans to program in
- Harder to design logic circuits for

### Addressing Modes in Register Transfer Notation

- How can we write the 5 address modes in register transfer notation?
- Immediate
- Direct
- Indirect
- Relative
- Indexed

### Addressing Modes in Register Transfer Notation

- How can we write the 5 address modes in register transfer notation?
- Immediate:      ACC  5
- Direct:             ACC  [5]
- Indirect:          ACC  [[5]]
- Relative:         ACC  [[BR] + 5]
- Indexed:         ACC  [[IX] + 5]

### Assembly Instructions

- Now that you understand the basics of opcodes, operands, addressing modes, assembly features, let’s look at some of the assembly instructions

### Categories of Assembly Instructions

- Data movement
- Input & output
- Comparison and jumps
- Arithmetic operations
- Shift operations
- Bitwise logic operations

### Logical Shifts:

- Bits are shifted in the specified direction –  0’s are passed in from the other side – e.g. LSL #1

- As stated, 0’s will be passed into the empty positions

| Original | 0 | 0 | 1 | 1 | 0 | 1 | 0 | 1 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| LSL #1 | 0 | 1 | 1 | 0 | 1 | 0 | 1 | 0 |

### Logical Shifts: Practice

- Convert the original and shifted bytes to their denary values – do you notice anything about the relationship?
- Shifting left 1 place = multiplying by 2
- Shifting right 1 place = dividing by 2

- ?

- ?

| Original | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 1 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| LSL #1 | 0 | 0 | 0 | 0 | 0 | 1 | 1 | 0 |

| Original | 0 | 1 | 0 | 1 | 0 | 0 | 0 | 0 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| LSR #1 | 0 | 0 | 1 | 0 | 1 | 0 | 0 | 0 |

### Logical Shifts

- If we wanted to multiply a number by 16, could we simply perform a LSL #4?
- Sometimes...can you think of any situations this wouldn’t work?

### Logical Shifts: Practice

- So, if a 1 is shifted out, then we will get an incorrect answer
- [remember, it is possible to represent numbers of arbitrary length in software – e.g. with BigInteger or BigDecimal in Java, but the hardware doesn’t support it natively]
- Likewise, division has an additional issue – let’s see...

- ?

| Original | 1 | 1 | 1 | 1 | 0 | 0 | 0 | 0 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| LSL #4 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |

### Logical Shifts: Practice

- ?

- If this number represents an integer, the decimal part can’t be stored – if you do 15 / 2 in Java, C++ etc, the answer will return 7 (i.e. integer or floor division)
- This is why you need to specify that these should be stored as decimals (floating points) – e.g. with the float or double data types in Java

| Original | 0 | 0 | 0 | 0 | 1 | 1 | 1 | 1 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| LSR #1 | 0 | 0 | 0 | 0 | 0 | 1 | 1 | 1 |

### Logical Shifts: Practice

- ?

- Assume this byte represents a signed number – what happened?
- Using a logical shift right to divide failed, since the negative number (-64) has now become positive (96)
- An arithmetic shift can hence be used

| Original | 1 | 1 | 0 | 0 | 0 | 0 | 0 | 0 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| LSR #1 | 0 | 1 | 1 | 0 | 0 | 0 | 0 | 0 |

### Arithmetic Shifts: Practice

- In arithmetic shifts, the sign bit is fixed (i.e. won’t change) and the shift is performed on the remaining bits

- In this case, the division was successful – i.e. -64 / 2 = -32
- [note: arithmetic shifts are mentioned in the book, but the assembly instruction isn’t required – so in the exam, don’t actually do an arithmetic shift – the question will always be about logical shifts]

| Original | 1 | 1 | 0 | 0 | 0 | 0 | 0 | 0 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ASR #1 | 1 | 1 | 1 | 0 | 0 | 0 | 0 | 0 |

### Cyclic Shifts

- …

| Original |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ASR #1 |  |  |  |  |  |  |  |  |

### An Example

- Here is some C code and the machine code it has been compiled to (note: the machine code has been displayed as assembly, to make it easier for humans to understand)
- Can you see how it is working?

### Shifts

- SAL = shift arithmetic left by 4 places = multiply by 16

### Shifts

- How about if we try multiplying by a number that isn’t a multiple of 2 – e.g. 17?
- Multiplication is repeated addition – so here, the compiler has converted num * 17 to (num * 16) + num

### Shifts

- Can anyone figure out what number we are multiplying by here?

- Assembly is equivalent to:
- ((4n + n) * 4) + n)
- i.e. 21n

### Shifts

- What kind of numbers do you think we could use to force the compiler to use a multiply instruction?

- Numbers not close to a power of 2 – e.g. 58327

- Decimals (floating points) – e.g. 3.14

### Bitwise vs Logical?

- If someone says “bitwise AND” and “logical AND”, do they mean the same thing?
- No – bitwise means the operation is performed bit-by-bit, while “logical” is referring to operations performed on Booleans
- Let’s see an example

### Bitwise vs Logical?

- 3 AND 5
- 0011 AND 0101 = 0001
- if is_weekday and is_daytime:
- go_to_school()
- Note: assembly questions will always deal with bitwise operations

### Assembly practice

- Let’s look at some arithmetic, bitwise logic and logical shift operations in Visual Studio

### Assembly practice

- Write an assembly program that loads an immediate value and a value from an address and adds them, storing the answer in a symbolic address named ‘result’
- You could also extend this to subtract, multiply or divide another number

- LDM #3
- ADD 10
- STO result

### Assembly practice

- A simple method encryption simple XOR’s some plaintext with a key. For simplicity, we will assume both are integers, not strings
- Plaintext =     11010001
- Key =            01001101
- Ciphertext =  10011100
- Plaintext =    11010001

- Using symbolic addresses, implement both the encryption and decryption in assembly – use labels for the ‘encrypt’ and ‘decrypt’ part of your code

### Assembly practice

- Plaintext =    11010001
- Key =           01001101
- Ciphertext = 10011100
- Plaintext =   11010001

- encrypt:
- LDD plaintext
- XOR key
- STO ciphertext
- decrypt:
- LDD ciphertext
- XOR key
- STO plaintext
- END

- Why do we use the END command?
- To stop the program immediately decrypting the just encrypted ciphertext

### Adapt/extend this program to:
get user’s input (‘e’ or ‘d’ (ASCII codes 101 and 100 respectively) for encrypt/decrypt))
have user input key and appropriate plaintext or ciphertext (depending on if they chose ‘e’ or ‘d’)
Jump to relevant label (encrypt or decrypt) and output appropriate result (i.e. ciphertext or plaintext to user)

- IN                      //key
- STO key
- IN                      //choice
- CMP #101
- JPE encrypt
- CMP #100
- JPE decrypt
- END
- encrypt:
- IN           //plaintext
- XOR key
- OUT       //ciphertext
- END
- decrypt:
- IN           //ciphertext
- XOR key
- OUT        //plaintext

### Assembly practice

- Write an assembly program that takes in the mass (in kg) of an object (e.g. you) and calculates its energy, storing the answer in an address ‘e’, according to e = mc2

- IN
- MUL c
- MUL c
- STO e

### Assembly practice

- Create a program to calculate & output the y-value of a quadratic equation, using direct addressing for a and b, immediate addressing for c and direct addressing for x. Equation:
- y = ax2 + bx + c
- [use value of 8 for c]

- LDD a
- MUL x
- MUL x
- STO term1
- LDD b
- MUL x
- ADD #8
- ADD term1
- OUT

### Assembly practice

- Find some other formula/task – e.g. in physics, maths, economics & implement it in assembly
- Use constants & labels if appropriate, then share your code with others and see if they can figure out what the program is doing

### Assembly: Register Transfer Notation

- Register transfer notation can be used to describe the execution of an instruction. The real RTN set has a large range of symbols (20+), rather than just the simple square brackets [] and arrows  we have seen

### Assembly: Register Transfer Notation

- For example, the LDD instruction can be written as follows:
- ACC  [[CIR(15:0)]]
- This means load the contents of the address represented by the least-significant 16 bits (bits 15 to 0 – i.e. the operand) into the accumulator
- [we will examine the ordering of bits next]

### Most & least significant bits?

- In 16 bits, what would be the most and least significant bit?
- The most significant bit is the one with the highest value, while the least significant bit has the lowest value:
- 10101010 10101010

### Bit ordering

- The following ordering is used
- Note how the rightmost bit is bit 0
- How would we select the 4 rightmost bits using RTN? How about the 4 leftmost?
- [3:0] and [7:4]

| Bit number |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 |
| 1 | 0 | 1 | 1 | 1 | 1 | 0 | 0 |

### Bit ordering

- Hence ACC  [[CIR(7:0)]] would reference the bits from bit 7, to bit 0 (i.e. the rightmost byte)

| Bit number |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 |
| 1 | 0 | 1 | 1 | 1 | 1 | 0 | 0 |

### Bit ordering

- Using a 16-bit operand, can you write the following instructions in register transfer notation:
- Adding immediate addressing
- Subtracting using direct addressing
- ACC  [ACC] + [CIR(15:0)]
- ACC  [ACC] - [[CIR(15:0)]]

### Processor Arithmetic

- Recall 3 flags in the status register:
- Carry flag (C) – set to 1 if there is a carry
- Negative/sign flag (N) – set to 1 if result is negative
- Overflow flag (V) – set to 1 if overflow is detected

### Processor Arithmetic

- Using a two’s complement processor, add 66 + 68. What would be the status of the 3 flags (C, N, V)?
- 01000010
- 01000100
- 10000110
- N = 1; V = 1; C = 0

- The calculated answer is -122, but clearly this is incorrect. This impossibility is detected by the processor as it examines both the N and V flag are true (impossible), hence an appropriate interrupt is generated and interrupt service routine (ISR) is called

### Processor Arithmetic

- Using a two’s complement processor, add -66 and -68. What would be the status of the 3 flags (C, N, V)?
- 10111100
- 10111110
- (1)01111010
- N = 0; V = 1; C = 1

- The calculated answer is 122, but clearly this is incorrect. This impossibility is detected by the processor as it examines both the V and C flag are true (impossible)

### Processor Arithmetic

- Let’s see the result of 66 + 68 in the Visual Studio debugger
- Note what happened: the overflow and negative was detected, but, because we have 64 bit registers and we were only using 8 of those bits, the ISR was able to resolve the issue (presumably by moving the bits into a larger register), hence returning the correct answer

### Processor Arithmetic

- What unsigned number would all 1s represent in a 64-bit register?
- 264 – 1 = 18,446,744,073,709,551,615

### Processor Arithmetic

- What if we do:
- 18,446,744,073,709,551,615 + 0?
- The answer is all F’s and there is no carry or negative

### Processor Arithmetic

- How about if we now do:
- 18,446,744,073,709,551,615 + 1
- The answer is 0 and the zero and carry flags are now true

### Tracing/dry-running

- The following are ways to detect and hence resolve logic errors with an assembly program:
- dry-running the program by hand using a trace-table
- using the debugger and breakpoints to inspect register values

### Tracing/dry-running

- Note: when it comes to completing the trace table, we only need to record changes – if the contents of a register stay the same, we can leave the cell blank, rather than having to complete every single cell, even if there is no change

### Tracing/dry-running

- Let’s try another – note, this example includes a jump instruction, hence we also need to record the value of the program counter

### Assembling

- Recap: what does “assembling” mean?
- The process of translating the assembly code to machine code (binary)

### Two-Pass Assembler

- To assemble a program, two-passes are required – that is, the assembler must loop through all the lines twice
- This is because a label could occur in a later line than it is called – hence the address/existence of the label wouldn’t be known on the line it was first referenced

### Assembler: Pre-processing

- BEFORE either pass of the assembler, some pre-processing must occur:
- Removal of comments
- Replace macro calls used in instruction with the assembly code that represents that macro
- Remove directives

### 2-Pass Assembler: First Pass

- IBM: “On the first pass, the assembler performs the following tasks:
- Checks to see if the instructions are legal in the current assembly mode. (valid opcodes and operands)
- Allocates space for instructions and storage areas you request.
- Fills in the values of constants, where possible.
- Builds a symbol table and makes an entry in this table for every symbol it encounters in the label field of a statement.”

### First Pass: Checking Opcodes & Operands

- As stated on the previous slide, the assembler will check to see if the opcodes & operands are legal/valid – why would these two be invalid?
- AD #7 (invalid opcode “AD”)
- ADD #99999999999999999999 (operand too big)

- ?

- ?

### First Pass: Filling Constant Values

- The assembler will fill in the values of constants where possible too:

- .data
- a = 5
- db b 0
- .code
- LDD a
- ADD #3
- STO b

- .data
- a = 5
- db b 0
- .code
- LDM #5
- ADD #3
- STO b

### First-Pass: Symbol Table

- On the 1st pass of the assembler, a symbol table is also created – that will store the labels/variables/constants and their associated address/value
- The label/variable/constant references will then be replaced with their actual value on the 2nd pass – e.g.
- LDD MAX would become LDD [BR] + 15
- (this example is slightly incorrect, since this syllabus doesn’t have a load instruction for relative addresses)

### A question

- What is different about each program? Do you think both will work and why?
- Yes – both will work with a 2 pass assembler.

### A question

- Why wouldn’t the 2nd example work if the assembler only had 1 pass?
- If there was only 1 pass, the values of num1 and num2 wouldn’t be known on lines 3 and 4, when they are needed

### 2-Pass Assembler: Second Pass

- From IBM: “On the second pass, the assembler:
- Examines the operands for symbolic references to storage locations and resolves these symbolic references using information in the symbol table.
- Ensures that no instructions contain an invalid instruction form.
- Translates source statements into machine code and constants, thus filling the allocated space with object code.
- Produces a file containing error messages, if any have occurred.”

### 2-Pass Assembler: Second Pass

- For the 2nd pass, the assembler uses a lookup table mapping opcodes to their machine-code equivalent – every instruction in a processor’s instruction set would have a unique binary opcode
- The symbol table is also used to map labels to their binary addresses/offsets

### 2-Pass Assembler: Second Pass

- Assume the following mapping of opcode mnemonics to binary
- Imagine using 8 bit opcodes and 16 bit operands.
- What would SUB #48 be in machine code?

### ?

- ?

- ?

- ?

### 2-Pass Assembler: Passes

- Recap: what happens before either pass? What happens on each pass?
- Before: remove comments, replace macro name with instructions in that macro, remove & store directives
- 1st: create symbol table for labels, variables and constants, ensure instructions are valid, allocate memory for instructions and storage areas
- 2nd: uses symbol and lookup table to translate instructions to machine code, ensures instructions are valid/tracks errors

### What language is an assembler written in?

- These days, an assembler could be written in a variety of languages – from a high-level language like C, to assembly or machine code itself
- How about the first assembler – how was that written?
- In machine code – a common approach would be to write the basic functionality in machine code, then, once you have the basics, write the next stage of the assembler in assembly and assemble it…then use this newly-assembled assembler to assemble the next stage of the assembler etc…so it is often iterative – using the currently programmed assembly instructions to write the next instructions and assembling the assembler that will assemble them

### Exam Questions

- Let’s try some previous years’ exam questions
- Good A2 questions:
- 9608_s17_qp_41.pdf
