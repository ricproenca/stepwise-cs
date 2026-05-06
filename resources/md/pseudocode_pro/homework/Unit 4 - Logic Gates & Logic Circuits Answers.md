# Unit 4 - Logic Gates & Logic Circuits Answers

**Course:** Cambridge International AS & A Level Computer Science (9618)
**Source:** Unit 4 - Logic Gates & Logic Circuits Answers.pdf

---

1) What is the difference between a logic gate and logic circuit?
A logic gate is an electronic component that takes inputs and outputs a consistent
result according to Boolean logic. A logic circuit is a combination of logic gates to
perform more complex functions

2) Name the 4 ‘standard’ logic gates and list their 3 compliments - why is there not a
compliment for the NOT gate? Also draw the symbol and complete the truth table
for each logic gate

AND

             A                             B                          A AND B
             0                             0                             0
             0                             1                             0
             1                             0                             0
             1                             1                             1

OR

             A                             B                          A OR B
             0                             0                            0
             0                             1                            1
             1                             0                            1
             1                             1                            1

XOR

             A                             B                          A OR B
             0                             0                            0
             0                             1                            1
             1                             0                            1
             1                             1                            0

NOT

             A                          NOT A
             0                            1
             0                            0

NAND

           A                           B                      A NAND B
           0                           0                          1
           0                           1                          1
           1                           0                          1
           1                           1                          0

NOR

           A                           B                       A NOR B
           0                           0                          1
           0                           1                          0
           1                           0                          0
           1                           1                          0

XNOR

           A                           B                       A OR B
           0                           0                         1
           0                           1                         0
           1                           0                         0
           1                           1                         1

The NOT gate doesn’t have a complement since NOTing something twice is
redundant - we arrive back to the original - i.e. NOT NOT a = a

3) For each of the logic gates, write either some pseudocode or program code that
can simulate this logic

OR: a OR b
AND: a AND b
NOT: NOT a
XOR: (a AND NOT b) OR (NOT a AND b)
NOR: NOT a AND NOT b
NAND: NOT a OR NOT b
XNOR: (a AND b) OR (NOT a AND NOT b)

4) What gate is also called an inverter and why?
NOT - since it changes (inverts) the input value - i.e. 0 becomes 1 and and 1 becomes

5) If we want to create a logic circuit that converts a positive number to its negative
equivalent (e.g. 6 to -6) and vice-versa, what would be one of the logic gates we’d
need (hint: think of the 2 stages we need to do to change the sign of a number)
We’d need a NOT gate - to perform the “flip the bits” part of the process. We’d then
need another circuit to add 1 (could use a full adder (A2 topic))

6) Which are the two universal logic gates - why are they called this?
NAND and NOR - since any other gate can be made using combinations of these
gates

7) Create a Boolean expression, logic circuit diagram and truth table for the following
scenarios:

a) A bank will allow clients to create an account if they meet the following conditions:
     18 years or older - A
     No criminal record - B
     No debts (C) or an income (D) that will allow them to pay off the debt within
       12 months

   X = A AND B AND (C OR D)

A   B       C       D        A AND B           C OR D           (A AND B) AND (C OR D)
0   0       0       0           0                 0                        0
0   0       0       1           0                 1                        0
0   0       1       0           0                 1                        0
0   0       1       1           0                 1                        0
0   1       0       0           0                 0                        0
0   1       0       1           0                 1                        0
0   1       1       0           0                 1                        0
0   1       1       1           0                 1                        0
1   0       0       0           0                 0                        0
1   0       0       1           0                 1                        0
1   0       1       0           0                 1                        0
1   0       1       1           0                 1                        0
1   1       0       0           1                 0                        0
1   1       0       1           1                 1                        1
1   1       1       0           1                 1                        1
1   1       1       1           1                 1                        1

    b) A robot will function if:
         If it is plugged in (A) or has sufficient battery power (B)
         It is not under maintenance - C
         It hasn’t already completed its tasks (D)

    X = (A OR B) AND NOT C AND NOT D

A   B   C     D   A OR B      NOT C    NOT D             NOT C AND NOT D        (A OR B) AND NOT C AND NOT D
0   0   0     0      0          1        1                      1                             0
0   0   0     1      0          1        0                      0                             0
0   0   1     0      0          0        1                      0                             0
0   0   1     1      0          0        0                      0                             0
0   1   0     0      1          1        1                      1                             1
0   1   0     1      1          1        0                      0                             0
0   1   1     0      1          0        1                      0                             0
0   1   1     1      1          0        0                      0                             0
1   0   0     0      1          1        1                      1                             1
1   0   0     1      1          1        0                      0                             0
1   0   1     0      1          0        1                      0                             0
1   0   1     1      1          0        0                      0                             0
1   1   0     0      1          1        1                      1                             1
1   1   0     1      1          1        0                      0                             0
1   1   1     0      1          0        1                      0                             0
1   1   1     1      1          0        0                      0                             0

            8) Draw a logic circuit and create a truth table for the following Boolean expressions:

            X = (A OR B) AND (B XOR C) NAND A

A   B   C     A OR B       B XOR C    (A OR B) AND (B XOR C)     (A OR B) AND (B XOR C) NAND A
0   0   0        0            0                  0                              1
0   0   1        0            1                  0                              1
0   1   0        1            1                  1                              1
0   1   1        1            0                  0                              1
1   0   0        1            0                  0                              1
1   0   1        1            1                  1                              0
1   1   0        1            1                  1                              0
1   1   1        1            0                  0                              1

            A = (W NOR X) AND (NOT Y AND Z)

W   X   Y   Z   W NOR X   NOT Y   NOT Y AND Z   (W NOR X) AND (NOT Y AND Z)
0   0   0   0      1        1          0                    0
0   0   0   1      1        1          1                    1
0   0   1   0      1        0          0                    0
0   0   1   1      1        0          0                    0
0   1   0   0      0        1          0                    0
0   1   0   1      0        1          1                    0
0   1   1   0      0        0          0                    0
0   1   1   1      0        0          0                    0
1   0   0   0      0        1          0                    0
1   0   0   1      0        1          1                    0
1   0   1   0      0        0          0                    0
1   0   1   1      0        0          0                    0
1   1   0   0      0        1          0                    0
1   1   0   1      0        1          1                    0
1   1   1   0      0        0          0                    0
1   1   1   1      0        0          0                    0

            9) Write the Boolean expression and create a truth table for the following logic
            circuits:

            a)

            NOT(((A AND B) OR NOT C) AND D)

                     A AND           (A AND B) OR   ((A AND B) OR NOT C) AND
A   B   C        D           NOT C                                             NOT(((A AND B) OR NOT C) AND D)
                       B                 NOT C                  D
0   0   0        0     0       1           1                    0                              1
0   0   0        1     0       1           1                    1                              0
0   0   1        0     0       0           0                    0                              1
0   0   1        1     0       0           0                    0                              1
0   1   0        0     0       1           1                    0                              1
0   1   0        1     0       1           1                    1                              0
0   1   1        0     0       0           0                    0                              1
0   1   1        1     0       0           0                    0                              1
1   0   0        0     0       1           1                    0                              1
1   0   0        1     0       1           1                    1                              0
1   0   1        0     0       0           0                    0                              1
1   0   1        1     0       0           0                    0                              1
1   1   0        0     1       1           1                    0                              1
1   1   0        1     1       1           1                    1                              0
1   1   1        0     1       0           1                    0                              1
1   1   1        1     1       0           1                    1                              0

            b)

            For simplicity, I will just call Ci “C” - this is actually a full adder (i.e. should perform
            binary addition where A & B are the inputs, Ci is the previous carry, S is the sum and
            Co is the carry out

            Sum = (A XOR B) XOR C
            Carry out = ((A XOR B) AND C) OR (A AND B)

            Sum

                 A XOR     (A XOR B)
A   B   C
                   B         XOR C
0   0   0          0           0
0   0   1          0           1
0   1   0          1           1
0   1   1          1           0
1   0   0          1           1
1   0   1          1           0
1   1   0          0           0
1   1   1          0           1

            Carry

A   B   C        A XOR B        (A XOR B) AND C      A AND B          ((A XOR B) AND C) OR (A AND B)
0   0   0           0                  0                0                           0
0   0   1           0                  0                0                           0
0   1   0           1                  0                0                           0
0   1   1           1                  1                0                           1
1   0   0           1                  0                0                           0
1   0   1           1                  1                0                           1
1   1   0           0                  0                1                           1
1   1   1           0                  0                1                           1

10) Think of a real-life scenario for each of the 7 logic gates - for example, “I will go
to play tennis if it’s the weekend AND its sunny”

OR: I will eat desert if I have ice-cream OR cake in the kitchen

AND: I will get an A if I do my homework AND revision

NOT: I will go outside if its NOT raining

XOR: At the restaurant, I will choose beef XOR pork - i.e. will only choose one, not
both

NOR: The fan comes on if it’s not broken NOR at a normal temperature - i.e. broken
& normal temperature both have to be false

NAND: Pressure will build if valve 1 NAND valve 2 are open - i.e. pressure decreases
if both valves are open; any other situation and pressure increases

XNOR: I will go to the football if it’s the daytime XNOR the weekend - i.e. daytime &
weekend OR evening and weekday are valid combinations - daytime & weekday or
evening on the weekend would be invalid (due to school, being busy etc)