# Unit 5 - Processor Fundamentals Homework

**Course:** Cambridge International AS & A Level Computer Science (9618)
**Source:** Unit 5 - Processor Fundamentals Homework.pdf

---

1) Before magnetic media was invented, do you remember how programs and data were loaded into the
computer? What were some disadvantages with this approach?

2) The ___ _________ architecture was developed in 1945 and consists of 3 basic components: _____, a
___________ and _________. This meant that programs and data could automatically be loaded - for example,
program 2 could start once program 1 had finished - without requiring human intervention. The idea that
programs and data should both be loaded into main memory was termed the ________ __________ concept

3) List 1 general-purpose register and 7 special-purpose registers in the CPU and describe their role (hint:
remember the registers used in the fetch-decode-execute cycle)

4) Fill in the missing registers 1-4:

5) What is the purpose of each of the 3 buses - what is sent along each and which are bi-directional and which
is uni-directional

                              Errors or suggestions - contact me https://pseudocode.pro/contact

6) State the difference between a serial and parallel bus

7) State the main functions of the following:

Arithmetic Logic Unit (ALU):

Control Unit (CU)

8) What is a flag and what might the flags in the status & interrupt registers represent respectively?

9) Why does the program counter increment at the same time as the contents of the address stored in the
MAR are copied into the MDR - why not wait until after the instruction has been executed?

10) The table below shows some flags in the status/interrupt registers and the contents of the accumulator -
write an instruction that would cause the status of this flag to be true

Flag                           ACC                             Instruction
zero                           0010

carry                          1001

negative                       0111

overflow                       1111

interrupt                      0000

                           Errors or suggestions - contact me https://pseudocode.pro/contact

11) Using register transfer notation, write the stages of the fetch-(decode)-execute cycle

12) Fill in the labels 1-6 with appropriate values

13) Explain how each of the following can affect system performance:

Clock speed/frequency/rate:

Number of cores:

Size, location & type of cache:

Word length:

Address bus width:

Data bus width:

                            Errors or suggestions - contact me https://pseudocode.pro/contact

14) Can multiple programs (processes) (e.g. GUI windows) be ‘open’ at the same time on a single-core system?
Can these processes actually be executed at the same time? How about on a multi-core system?

15) What is the difference between a 64-bit machine and 32-bit machine - what are the advantages of a 64
bit-machine?

16) An I/O device such as a mouse can be plugged into a ____. When it is first plugged in, the I/O device’s
_________ will be installed onto the operating system. This allows the processor and I/O device to establish a
connection, allow data transmission/communication and handle interrupts

17) What are some advantages of USB port compared to other port types?

18) Why might another port type be chosen instead of USB? Can you think of any examples?

19) Complete the steps of the fetch part of the fetch-decode-execute cycle

Address in ____ transferred to ____
During next clock cycle, instruction pointed to by address in ____ is loaded into ____, while the ____ is
simultaneously ___________
Instruction stored in ___ transferred to ____

20) Trace the execution of the following instructions - the memory:

LDD plaintext
XOR key
STO ciphertext

plaintext                                     65
key                                           30
3                                             LDD plaintext
4                                             XOR key
5                                             STO ciphertext

  instruction    PC     MAR      MDR          CIR            plaintext             key         ciphertext
LDD plaintext

                           Errors or suggestions - contact me https://pseudocode.pro/contact

21) Suppose the user has a long-running video rendering process. The user then clicks the mouse, causing an
interrupt. Explain in detail how the processor would handle this interrupt

                          Errors or suggestions - contact me https://pseudocode.pro/contact