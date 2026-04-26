# Chapter 15 SB Answers

**Course:** Cambridge International AS & A Level Computer Science (9618)
**Source:** A Level Textbook/Chapter 15 SB Answers.pdf

---

Cambridge International AS & A Level Computer Science

Chapter 15 Student Book Answers
15.1 What you should already know
1   i)
                                     00111100              C    0
                                     01000110              V    1
                                     10000010              N    1
    ii)
                                     11000100              C
                                     10111010              V    1
                                    101111110              N    0

(3) (a) (i) Bus width
             word size used by the computer
             size of memory location which can be directly addressed/accessed
Cambridge International AS & A Level Computer Science                            1
© Helen Williams and David Watson 2020

                               Cambridge International AS & A Level Computer Science Answers

       ii) smallest width = control bus
       iii) Address bus upgrade
             larger word size can be used
             more addresses can be accessed directly.
    b) i) Clock
             clock speed defines clock cycle that the computer system uses to synchronise all
              operations
             increasing clock speed can increase processing speed of computer.
       ii) Interrupts
             interrupt is a signal sent to CPU by a device/program,/user which requires CPUs attention
              according to priority level
             interrupts can be caused by
                i/o processing (e.g. disk drive is ready)
                hardware fault (e.g. paper jam in printer)
                program error (e.g. division by zero would produce software error)
                user interaction (e.g. user presses the <BREAK> key on keyboard.

Activity 15A
1   a)
          RISC processor architecture has fewer built-in instructions which can actually lead to higher
           computer performance.
          RISC design strategy is built on simple instructions which is achieved by breaking up
           complex instructions into simpler sub-operations where each instruction requires one clock
           cycle.
    b) CISC features:
            many instruction formats are possible
            there are more addressing modes
            makes use of multi-cycle instructions
            instructions can be of a variable length
            longer execution time for instructions
            decoding of instructions is more complex
            it is more difficult to make pipelining work
            the design emphasis is on the hardware
            uses the memory unit to allow complex instructions to be carried out.
         RISC features:
            uses fewer instruction formats/sets
            uses fewer addressing modes
            makes use of single-cycle instructions
            instructions are of a fixed length
            faster execution time for instructions
            makes use of general multi-purpose registers
            easier to make pipelining function correctly
            the design emphasis is on the software
            processor chips require fewer transistors.
2   a) Von Neumann bottleneck:
          shared bus between program memory and data memory leads to the bottleneck …

Cambridge International AS & A Level Computer Science                                                 2
© Helen Williams and David Watson 2020

                              Cambridge International AS & A Level Computer Science Answers

            … so, throughput limitation due to inadequate data transfer rates between memory and CPU
             …
            … this causes CPU to wait and remain idle for a period of time while low speed memory is
             being accessed.
    b) This slows down the performance of a computer system.
3   a) In a cluster, each machine is independent of the other computers in terms of memory and back-
       up store; the computers are interconnected in some variation of a network.
        In massively parallel processing there is really only one machine with many thousands of
        CPUs/processors interconnected.
    b) There are many applications in scientific and medical research (reader should pick one example
       form a huge list).
4   A = LOAD A
    B = LOAD B
    C = LOAD C
    D = ADD A,B,C
    E = STORE D
    F = OUT D

15.2 What you should already know
       A               B              C                 X

       0               0              0                 1

       0               0              1                 0

       0               1              0                 0

       0               1              1                 0

       1               0              0                 0

       1               0              1                 0

       1               1              0                 1

       1               1              1                 0

Cambridge International AS & A Level Computer Science                                              3
© Helen Williams and David Watson 2020

                                Cambridge International AS & A Level Computer Science Answers

       P                Q              R                X

         0               0                 0            0

         0               0                 1            1

         0               1                 0            0

         0               1                 1            1

         1               0                 0            0

         1               0                 1            1

         1               1                 0            0

         1               1                 1            1

    ((P.Q) + (Q + R)).R becomes “INPUT R” after circuit simplification

3   a)       (S1.S2) + (S2.S3) + (S1.S3)

    b)

    c)
     S1                 S2             S3               W

         0               0                 0            0

         0               0                 1            0

         0               1                 0            0

         0               1                 1            1

         1               0                 0            0

         1               0                 1            1

         1               1                 0            1

         1               1                 1            1

Cambridge International AS & A Level Computer Science                                       4
© Helen Williams and David Watson 2020

                               Cambridge International AS & A Level Computer Science Answers

Activity 15B
1   a)   A. B    A. C   A. D   B. C. D
    b) Let X = original expression; thus X (from a Karnaugh map) gives: A. B. C. D
         Using de Morgan’s Law then gives: A       B    C   D
    c)
         A. B. C A. B. C A. B. C A. B. C
         ⇒ B. C. A A       B. C. A A
         ⇒ B. C. 1 B. C. 1
         ⇒ B. C C ⇒ B. 1
         ⇒B
    d)
         A. A B      B A. A . A B
         ⇒ A. A A. B   B A .A    B A .B
         ⇒ A. B  B A .A      B A .B
         ⇒ A. B B. A A. A B. B A. B
         ⇒ A. B B. A A A. B
         ⇒ A. B A. B A. 1 A. B
         ⇒ A. B A. B 1 B
         ⇒ A. B A ⇒ A A. B ⇒ A A . A B
         ⇒A B
    e)
         A C . A. D A. D      A. C C
         ⇒ A C . A. D D       A. C C
         ⇒ A C . A. A. C C
         ⇒ A. A C      C   C
         ⇒ A. A C     C ⇒ A. A A. C C ⇒ A               A   1 .C
         ⇒A C

Activity 15C

Cambridge International AS & A Level Computer Science                                      5
© Helen Williams and David Watson 2020

                                 Cambridge International AS & A Level Computer Science Answers

         Input                   Output
    A            B           S              Cout
     0           0           0               0
     0           1           1               0
     1           0           1               0
     1           1           0               1

                 Input                                 Output
     A             B             Cin               S            Cout
     0               0            0                0             0
     0               0            1                1             0
     0               1            0                1             0
     0               1            1                0             1
     1               0            0                1             0
     1               0            1                0             1
     1               1            0                0             1
     1               1            1                1             1

Activity 15D
         A               B                  X
         0               0                  1
         0               1                  1
         1               0                  1
         1               1                  0
    Simplified circuit is a NAND gate:

                                        .
                                       A B

Cambridge International AS & A Level Computer Science                                        6
© Helen Williams and David Watson 2020

                              Cambridge International AS & A Level Computer Science Answers

         A            B               X                 Y

         0            0               0                 0

         0            1               1                 0

         1            0               1                 0

         1            1               0                 1

    Simplified circuit:

Activity 15E
1   a)
         A            B               C                 D    X

         0            0               0                 0     0

         0            0               0                 1     0

         0            0               1                 0     0

         0            0               1                 1     1

         0            1               0                 0     0

         0            1               0                 1     1

         0            1               1                 0     0

         0            1               1                 1     1

         1            0               0                 0     0

         1            0               0                 1     0

         1            0               1                 0     0

         1            0               1                 1     1

         1            1               0                 0     0

         1            1               0                 1     1

         1            1               1                 0     0

Cambridge International AS & A Level Computer Science                                     7
© Helen Williams and David Watson 2020

                              Cambridge International AS & A Level Computer Science Answers

         1            1               1                 1                 1

    b) B.D + C.D = D.(C + B)
                                              AB
                                                   00       01   11           10
                                      CD
                                              00   0         0        0            0
                                              01   0         1        1            0
                                              11   1         1        1            1
                                              10   0         0        0            0
    c)

2   a)
       A              B               C                 X
         0            0               0                 0
         0            0               1                 0
         0            1               0                 1
         0            1               1                 1
         1            0               0                 0
         1            0               1                 0
         1            1               0                 1
         1            1               1                 1

    b) B                                      AB
                                                   00       01   11           10
                                          C
                                               0   0         1        1            0
                                               1   0         1        1            0

3   a)
       A              B               C                 D                 X
         0            0               0                 0                 1
         0            0               0                 1                 1
         0            0               1                 0                 1
         0            0               1                 1                 1
         0            1               0                 0                 1
         0            1               0                 1                 1
         0            1               1                 0                 1
Cambridge International AS & A Level Computer Science                                     8
© Helen Williams and David Watson 2020

                              Cambridge International AS & A Level Computer Science Answers

         0             1              1                          1                      1
         1             0              0                          0                      1
         1             0              0                          1                      1
         1             0              1                          0                      0
         1             0              1                          1                      0
         1             1              0                          0                      0
         1             1              0                          1                      0
         1             1              1                          0                      0
         1             1              1                          1                      0

    b) A. B. C     A
                                                    AB
                                              CD
                                                         00               01            11           10
                                               00            1            1             0            1
                                               01            1            1             0            1
                                               11            1            1             0            0
                                               10            1            1             0            0

    c)

End of chapter questions
1   a) A. B. C   A. B. C   A. B. C
    b) A.B + A.C
                                              AB
                                          C          00              01        11           10
                                               0         0            0             1            0
                                               1         0            0             1            1
    c)

Cambridge International AS & A Level Computer Science                                                     9
© Helen Williams and David Watson 2020

                                 Cambridge International AS & A Level Computer Science Answers

2   a) i) ii) 𝐀     𝐁. 𝐃       𝐁. 𝐂
                                                 AB
                                                       00     01     11       10
                                          CD
                                                 00     0      0          1        1
                                                 01     0      1          1        1
                                                 11     1      1          1        1
                                                 10     1      0          1        1

    b) i)
              A C . A. D A. D   A. C C
              ⇒ A. C . A. D D A. C C
              ⇒ A C . A A. C C
              ⇒ A. A C      C C
              ⇒ A. A C     C
              ⇒ A. A A. C C
              ⇒A     A 1 .C
              ⇒A C
        ii)
              A. A B      B A. A . A B
              ⇒ A. A A. B   B A .A    B A .B
              ⇒ A. B  B A .A      B A .B
              ⇒ A. B B. A A. A B. B A. B
              ⇒ A. B B. A A A. B
              ⇒ A. B A B 1 B
              ⇒ A. B A
              ⇒ A A . A B
              ⇒A B
3   a) i)
     INPUTS             OUTPUTS
    S          R        Q             Q               comment
    1          0           1          0
    0          0           1          0        following S = 1 change
    0          1           0          1
    0          0           0          1        following R = 1 change
    1          1           0          0
        ii) S = 1, R = 1, Q = 0, Q = 0         this is an invalid case since Q should be the compliment
            (opposite) of Q
    b) i) two input values, J and K, and synchronisation (clock pulse) input
        ii) uses a toggle which removes the invalid S, R states when using SR flip-flop
        iii) Uses
               Several JK flip-flops can be used to produce SHIFT REGISTERS in a computer.
Cambridge International AS & A Level Computer Science                                                     10
© Helen Williams and David Watson 2020

                              Cambridge International AS & A Level Computer Science Answers

             A simple binary counter can be made from linking up several JK flip-flop circuits (this
              requires the toggle function).
4   a) SISD (single instruction single data)
          uses a single processor that can handle a single instruction which uses one data source at a
           time
          each task is processed in sequential order.
         SIMD (single instruction multiple data)
          uses several processors which execute the same instruction set but use different data inputs
          all processes do same calculations but on different data sets simultaneously.
         MISD (multiple instruction single data)
          uses several processors
          each processor uses different instructions but uses same shared data.
         MIMD (multiple instruction multiple data)
          uses several processors
          each processor can accept its own instructions independently
          each processor uses data from a separate data stream (e.g. single memory which has been
           partitioned).
    b) Features of parallel processing:
          It is a much faster way to handle large volumes of independent data.
          The data used sometimes relies on the result of a previous operation, therefore such data
           cannot be handled in parallel.
          Data sets require the same processing for it to work.
          It overcomes the von Neumann bottleneck and therefore greatly improves CPU performance.
          Parallel processing requires more expensive hardware.
    c)
          Eight instructions need 12 clock cycles when using pipelining.
          Without pipelining, it would require 8 × 5 = 40 clock cycles to complete (each of the 8
           instructions requires 5 processing stages: IF, ID, OF, IF and WB).
5   a)

Cambridge International AS & A Level Computer Science                                                 11
© Helen Williams and David Watson 2020

                                     Cambridge International AS & A Level Computer Science Answers

    b i) Massive – many processors linked together.
         ii) Parallel – to perform a set of coordinated computations simultaneously.
    c) Hardware – processors need to be able to communicate so that processed data can be transferred
       from one processor to another.
         Software – suitable software which allows data to be processed by multiple processors
         simultaneously.
6   a) S          P       Q       R .R
    b)
         P                    Q            R              S
         0                    0            0              0
         0                    0            1              1
         0                    1            0              0
         0                    1            1              1
         1                    0            0              0
         1                    0            1              0
         1                    1            0              0
         1                    1            1              0

    c i) ii)
                                                PQ
                                            R
                                                     00       01   11       10
                                                0    0         0        0        0
                                                1    1         1        0        0
         iii) S       P. R
    d)
         S        P       Q       R .R
         ⇒S            P. Q . R . R
         ⇒S            P. R     Q . R. R
         ⇒S           P. R Q . 0
         ⇒S           P. R 0
         ⇒S           P. R

Cambridge International AS & A Level Computer Science                                              12
© Helen Williams and David Watson 2020