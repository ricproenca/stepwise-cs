# Unit 5 - Processor Fundamentals Answers

**Course:** Cambridge International AS & A Level Computer Science (9618)
**Source:** Unit 5 - Processor Fundamentals Answers.pdf

---

1) Before magnetic media was invented, do you remember how programs and data were loaded into the
computer? What were some disadvantages with this approach?
Punch cards - limited storage capacity, prone to damage, had to be manually ordered/loaded (i.e. not very
autonomous - might need someone ready to load in new cards 24/7, 365 if used for a critical process), error
prone, can’t modify/rewrite bit if that part of card has been punched

2) The von Neumann architecture was developed in 1945 and consists of 3 basic components: memory, a
processor and I/O. This meant that programs and data could automatically be loaded - for example, program 2
could start once program 1 had finished - without requiring human intervention. The idea that programs and
data should both be loaded into main memory was termed the stored program concept

3) List 1 general-purpose register and 7 special-purpose registers in the CPU and describe their role (hint:
remember the registers used in the fetch-decode-execute cycle)

General purpose
Accumulator: stores the result calculated by the ALU of the instruction just executed

Special purpose:
PC: program counter - stores the address of the next instruction to (fetch-decode-)execute
MAR: memory address register - stores the address about to be written to or read from - during the fetch
stage, this hence stores the address of the instruction we are about to fetch
MDR: memory data register - stores the data just read from or about to be written to memory - during the
fetch stage, this hence stores the instruction just fetched from memory
CIR: current instruction register - stores the current instruction just fetched, so it can be decoded by the
control unit (CU) which will then allocate execution to the appropriate component (ALU, memory etc)
IX: index register - stores the value to be added (offset) when using indexed addressing - can be used to e.g.
loop through arrays/characters in a string
BR: base register - holds a value (e.g. the adderss the process is loaded into in RAM) to allow relative
addressing - this allows a process to be loaded in any part of memory, rather than specific absolute addresses
which may be used by another process
SR: status register - stores properties about the recent instruction executed by the ALU - e.g. whether there
was a carry, overflow, the sign of the answer or if it is zero

4) Fill in the missing registers 1-4:
1: MAR
2: PC
3: CIR
4: MDR

5) What is the purpose of each of the 3 buses - what is sent along each and which are bi-directional and which
is uni-directional
Uni-directional
Address bus: carries the address about to be read from or written to from the processor to the
memory/storage components (cache, RAM, ROM, I/O etc)

Bi-directional
Data bus: carries data/instructions between the processor/memory/I/O components - e.g. data read from
memory or data about to be written to memory
Control bus: carries control signals between processor/memory/I/O - examples include timing signals,
interrupts, read/write requests, resets (clearing all register contents) etc

6) State the difference between a serial and parallel bus
Serial: data is transmitted one bit at a time - cheap, simple, reliable, can be used over long distance (doesn’t
skew), but slow

Parallel: data is broken up and transmitted several bits at a time across different wires - e.g. if using 8 parallel
wires, then 8 bits could be sent simultaneously. Suffers from skewing (bits arriving unsynchronised due to
different speeds of wire/sending time). Fast, but more expensive due to more wire and more complex/less
reliable/not suitable for use over long distance because of data skew

7) State the main functions of the following:

Arithmetic Logic Unit (ALU): execute arithmetic (mathematical) instructions like ADD, SUB, MUL, DIV etc as
well as logical instructions like AND, OR, XOR, NOT etc. Bit shifts are also performed too (can be logical or
arithmetic shifts)

Control Unit (CU):
 Decodes instructions
 Send instructions to be executed by ALU, I/O, main memory etc
 Controls flow of data through CPU
 Handles interrupts and errors
 Contains internal clock, which is used to execute instructions on each tick

8) What is a flag and what might the flags in the status & interrupt registers represent respectively?
A flag is a Boolean value - 1/TRUE or 0/FALSE

Status register flags:
 Carry
 Overflow
 Negative (sign)
 Zero
etc

Interrupt register flags:
 Enable/disable interrupts
 User/kernal mode
 Interrupt types
etc

9) Why does the program counter increment at the same time as the contents of the address stored in the
MAR are copied into the MDR - why not wait until after the instruction has been executed?

Since the PC is no longer used in this particular instruction, it makes sense to increment it (for pipelining - A2)
so it is ready and storing the correct address for the next instruction to be loaded

10) The table below shows some flags in the status/interrupt registers and the contents of the accumulator -
write an instruction that would cause the status of this flag to be true

Flag                          ACC                            Instruction
zero                          0010                           AND B0000

carry                         1001                           ADD B1000

negative                      0111                           ADD #1

overflow                      1111                           ADD #1

interrupt                     0000                           DIV #0

11) Using register transfer notation, write the stages of the fetch-(decode)-execute cycle
MAR <- [PC]
MDR <- [[MAR]] ; PC <- [PC] + 1
CIR <- [MDR]

12) Fill in the labels 1-6 with appropriate values

1: processor
2: memory
3: I/O
4: data/control bus
5: address bus
6: data/control bus

13) Explain how each of the following can affect system performance:

Clock speed/frequency/rate: since one instruction is generally executed on each clock tick (assuming single-
cycle executions…some instructions like divide take multiple cycles), then increasing the clock rate means
more instructions will be executed per second - like the drummer in a rowing team. Similarly, if the drummer
starts drumming too fast the rowers might get out of sync/tired, the same can happen in a CPU - an
instruction might not have fully executed as another is trying to start execution which can cause data
corruption. Increasing the CPU clock rate to above recommended levels is called overclocking and will cause
the CPU to heat up/possibly become damaged if regularly overclocked

Number of cores: since each core can execute instructions independently at the same time (simultaneously),
then increasing the number of cores means more instructions can be executed per cycle. Note 2 cores won’t
usually be 2x faster than 1 core, since there is the additional overhead of communication, one core perhaps
having to wait for the other to finish etc - a 2-core CPU is generally 50% faster than a single core machine
according to online sources

Size, location & type of cache:
Cache is used to store frequently used (and pre-fetched) instructions/data - this is significantly faster (10-100x)
than RAM, hence if we have more cache, we are able to store more instructions/data and are therefore less

likely to have a cache miss (when a core wants instructions/data, but it’s not available in any of the cache
levels, hence has to go to RAM, therefore slowing down the system)

There are also different types of cache - L1 takes between 1-3 clock cycles to read data, while L3 takes
between 10-20 cycles. Part of this is due to different circuitry between L1 and L3 (with L1 being more
expensive)

The physical location of the cache also affects the device’s performance - L1 cache is inside each core, hence is
extremely fast, since the electrical signals don’t have to travel very far (which is significant, when wanting to
execution billions of instructions per second on a GHz processor). In contrast, L3 cache is shared between the
cores, hence more time is taken for data to be sent from it to the request core. This is why processor
manufacturers try to fit as much cache as possible inside/as close to the cores as possible

Word length: this defines the amount of data the processor can operate on at a time - e.g. a 32-bit processor
can add 32 bit numbers, while a 64 bit processor can add 64 bit numbers in a single instruction. The data bus
width is usually the same size as the word length to allow fetching the entire operand in one go. As a result, if
the word length is increased, the processor can operate on more data in a given time

Address bus width: a wider address bus means more addresses can be implemented - for example, a 16-bit
address bus only gives 216 = 65536 different address values our device can support - this would result in lots of
virtual memory being required, hence would slow down the system due to data constantly being swapped in
and out of virtual memory. In contrast, a 64 bit system makes 1.8x1019 different addresses available - which is
currently far more different addresses than even the biggest super computer clusters in the world

Data bus width: if the data bus is wider (has more wires), then more bits can be transferred simultaneously -
e.g. adding a 64 bit number on a 32 bit system could be possible, but would require sending 2 32 bits of data
separately - in contrast, with a 64 bit data bus, the entire 64 bits could be sent in one go, hence speeding up
the device

14) Can multiple programs (processes) (e.g. GUI windows) be ‘open’ at the same time on a single-core system?
Can these processes actually be executed at the same time? How about on a multi-core system?

The programs can be open at the same time (the contents are stored in RAM), but only one process can
actually be executing at once on a single core system - the other processes would be in the waiting state -
when the current process’s time slice (often 100ms or less) is up or it has finished executing, the next process
waiting in the queue will be allocated execution time, often in a round robin format/depending on what
scheduling algorithm is used. On a multicore system, a different process can execute on each core - e.g. a 4
core machine can have 4 processes executing simultaneously

15) What is the difference between a 64-bit machine and 32-bit machine - what are the advantages of a 64
bit-machine?

64 bit advantages:
- can address more memory (up to 264 addresses theoretically)
- can process/transfer more data simultaneously due to increased word size/data bus width

32 bit advantages:

- use (slightly) less memory, due to addresses/data being 32 bits

Note that programs have to be compiled to a specific architecture - hence using a 32 bit program on a 64 bit
system might cause compatibility issues (they can sometimes be run with emulation). 64 bit software can’t be
run on 32 bit system

16) An I/O device such as a mouse can be plugged into a port. When it is first plugged in, the I/O device’s
drivers will be installed onto the operating system. This allows the processor and I/O device to establish a
connection, allow data transmission/communication and handle interrupts

17) What are some advantages of USB port compared to other port types?

   Universal (widespread) support across many device types & manufacturers
   General purpose - data transfer, charging
   Fast speed
   Plug n play - don’t need to download specialist drivers

18) Why might another port type be chosen instead of USB? Can you think of any examples?

If you need a specific purpose - e.g. HDMI for multimedia, twisted pair for networking etc. In some situations
USB might not provide a fast enough data transfer - e.g. if connecting networking devices, in which case
alternatives like fibre optic cables might be preferred which would use a specialist port

19) Complete the steps of the fetch part of the fetch-decode-execute cycle

Address in PC transferred to MAR
During next clock cycle, instruction pointed to by address in MAR is loaded into MDR, while the PC is
simultaneously incremented
Instruction stored in MDR transferred to CIR

20) Trace the execution of the following instructions - the memory:

LDD plaintext
XOR key
STO ciphertext

plaintext                                   65
key                                         30
ciphertext
3                                           LDD plaintext
4                                           XOR key
5                                           STO ciphertext

    instruction         PC   MAR         MDR                 CIR        ACC       plaintex    key     ciphertext
                                                                                      t
LDD plaintext       3        3      LDD plaintext     LDD plaintext
                    4        1
                                    65                                 65
XOR key                      4      XOR key           XOR key          95

STO ciphertext     5       5       STO ciphertext    STO
                                                     ciphertext
                   6       2       95

21) Suppose the user has a long-running video rendering process. The user then clicks the mouse, causing an
interrupt. Explain in detail how the processor would handle this interrupt

The processor would complete its current execute cycle, then check to see if any interrupts had occurred and
whether they had a sufficient priority to interrupt the currently executing process - if they do, the register
contents (PC, MAR, MDR, CIR, SR, IX etc) would be saved to RAM and the start address of the interrupt service
routine (ISR) would be loaded into the PC - the ISR could then fetch-decode-execute like a regular process,
with the processor against checking if interrupts of higher priority were triggered and handling them if
required. Once this and all other interrupts were handled, the register contents from the original video
process could be reloaded back into the core and the process would continue executing from the same state
(PC, MAR, MDR etc) as before it was interrupted