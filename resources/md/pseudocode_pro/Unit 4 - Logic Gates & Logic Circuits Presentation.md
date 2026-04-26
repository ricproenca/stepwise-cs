# Unit 4 - Logic Gates & Logic Circuits Presentation

### So…a recap?

- What are logic gates and logic circuits? Is there a difference?

- Logic gates are small logic devices that can perform logical operations on inputs such as:

- AND

- OR

- NOT

- NAND

- NOR

- XOR

- XNOR

- Standard

- Compliment

- Why isn’t there a compliment for the NOT gate?

- It’s redundant – NOT(NOT(A)) = A
- Like 5 * -1 * -1 = 5

- So those are logic gates…while logic circuits would be a collection of logic gates together, to provide a more complex function – arithmetic, memory/storage, data correction, encryption, vector functions for graphics processing etc

### A question

- Look at the following logic circuit functionalities, what part of a computer’s hardware may they be included in?

- arithmetic

- ALU (Arithmetic Logic Unit), registers, graphics cards etc

- memory/
- storage

- data correction

- encryption

- vector/matrix calculations

- RAM, registers, cache etc

- RAM, SSDs, controllers for HDDs, CDs, USBs etc

- Most commonly included as an assembly command for the processor directly

- Graphics card

### Using ‘X’ as the output and ‘a’ and ‘b’ as inputs, can you rewrite these statements as Boolean equations?

- x = a OR b
- x = a AND b

### Let’s learn the logic gates

- AND
- OR
- NOT
- XOR
- NAND
- NOR
- XNOR

- AS will focus mostly on the first 4…and the last 3 can all be created by having the original logic gate, then putting a NOT in front
- e.g. NAND is an AND gate, followed by a NOT gate

### AND

- Symbol / Diagram

- Truth Table

- Java Code

- Operator

- A . B

- AB

- A ∧ B

- a && b

- ?

| A | B | A . B |
| --- | --- | --- |
| 0 | 0 | 0 |
| 0 | 1 | 0 |
| 1 | 0 | 0 |
| 1 | 1 | 1 |

### OR

- Symbol / Diagram

- Truth Table

- Java Code

- Operator

- A + B

- A ∨ B

- a || b

- ?

| A | B | A + B |
| --- | --- | --- |
| 0 | 0 | 0 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 1 |

### NOT

- Symbol / Diagram

- Truth Table

- Java Code

- Operator

- A’

- !a

- ?

- ¬A

- _

- Note: NOT gates are also called inverters, because they flip the bits

| A | A |
| --- | --- |
| 0 | 1 |
| 1 | 0 |

### XOR

- Symbol / Diagram

- Truth Table

- Java Code

- Operator

- A ⊕ B

- ?

- (a && !b) || (!a && b)

| A | B | A ⊕ B |
| --- | --- | --- |
| 0 | 0 | 0 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 0 |

### NAND

- Symbol / Diagram

- Truth Table

- Java Code

- Operator

- A . B

- !(a && b)

- ?

- !a || !b

- These equivalencies are one of De Morgan’s laws (A2)

| A | B | A . B | A . B |
| --- | --- | --- | --- |
| 0 | 0 | 0 | 1 |
| 0 | 1 | 0 | 1 |
| 1 | 0 | 0 | 1 |
| 1 | 1 | 1 | 0 |

### NOR

- Symbol / Diagram

- Truth Table

- Java Code

- Operator

- A + B

- !(a || b)

- ?

- !a && !b

- These equivalencies are one of De Morgan’s laws (A2)

| A | B | A + B | A + B |
| --- | --- | --- | --- |
| 0 | 0 | 0 | 1 |
| 0 | 1 | 1 | 0 |
| 1 | 0 | 1 | 0 |
| 1 | 1 | 1 | 0 |

### XNOR

- Symbol / Diagram

- Truth Table

- Java Code

- Operator

- A ⊕ B

- A ⊻ B

- ?

- !((a && !b) || (!a && b))

- (!a && !b) || (a && b)

- These are equivalent (in A2, we’ll prove it), but 1st is the compliment of XOR, while 2nd is intuitive from the truth table

| A | B | A ⊕ B | A ⊕ B |
| --- | --- | --- | --- |
| 0 | 0 | 0 | 1 |
| 0 | 1 | 1 | 0 |
| 1 | 0 | 1 | 0 |
| 1 | 1 | 0 | 1 |

### Match the symbols

- AND

- OR

- NOT

- XOR

- NAND

- NOR

- XNOR

### How can you remember the symbols?

- The AND gate is shaped like the D in AND
- NOT sharply closes, as though it is saying “no”
- OR is neither the roundest or pointiest – it’s in the middle
- XOR is just OR…but with the extra curved line
- And then NAND/NOR/XNOR are the same as their base equivalent…just with a circle after them

### Match the gate to its truth table output

- AND

- OR

- NOT

- XOR

- NAND

- NOR

- XNOR

- 0
- 1
- 1
- 0

- 1
- 0
- 0
- 0

- 0
- 1
- 1
- 1

- 0
- 0
- 0
- 1

- 1
- 1
- 1
- 0

- 1
- 0
- 0
- 1

- 1
- 0

### Note

- NOR and NAND gates are called universal gates. This is because ALL other gates can be made using combinations of NOR & NAND gates – i.e. an entire computer can be constructed using just these 2 gates. In fact, memory is often comprised entirely of NAND gates – hence flash memory also being referred to as “NAND memory”
- We will look at this in more detail in a future lesson

### Try to identify the variables (inputs & outputs/result) in this scenario and construct a Boolean logic expression

- A shopkeeper orders a delivery of goods at the end of each month. However, if the stock of a particular item falls to the re-order level before the end of the month, a delivery is ordered immediately. Also, if a regular customer orders a large amount of goods a delivery is ordered immediately

- X = end of month OR low stock OR (regular customer AND large order)
- X = A + B + C.D
- Can you construct the truth table and draw the logic circuit for this 4-variable expression?

### X = A + B + C.D

- ?

- ?

- ?

- ?

| A | B | C | D | A+B | CD | A+B+CD |
| --- | --- | --- | --- | --- | --- | --- |
| 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 0 | 0 | 0 | 1 | 0 | 0 | 0 |
| 0 | 0 | 1 | 0 | 0 | 0 | 0 |
| 0 | 0 | 1 | 1 | 0 | 1 | 1 |
| 0 | 1 | 0 | 0 | 1 | 0 | 1 |
| 0 | 1 | 0 | 1 | 1 | 0 | 1 |
| 0 | 1 | 1 | 0 | 1 | 0 | 1 |
| 0 | 1 | 1 | 1 | 1 | 1 | 1 |
| 1 | 0 | 0 | 0 | 1 | 0 | 1 |
| 1 | 0 | 0 | 1 | 1 | 0 | 1 |
| 1 | 0 | 1 | 0 | 1 | 0 | 1 |
| 1 | 0 | 1 | 1 | 1 | 1 | 1 |
| 1 | 1 | 0 | 0 | 1 | 0 | 1 |
| 1 | 1 | 0 | 1 | 1 | 0 | 1 |
| 1 | 1 | 1 | 0 | 1 | 0 | 1 |
| 1 | 1 | 1 | 1 | 1 | 1 | 1 |

### Let’s try another

- A document can only be copied if it is not covered by copyright or if there is copyright and permission has been obtained

- X = A + A.B

- ?

| A | B | A | A.B | A+A.B |
| --- | --- | --- | --- | --- |
| 0 | 0 | 1 | 0 | 1 |
| 0 | 1 | 1 | 0 | 1 |
| 1 | 0 | 0 | 0 | 0 |
| 1 | 1 | 0 | 1 | 1 |

### Note

- Boolean logic – as the name suggests – can ONLY be applied to situations that will result in an output with 2 options – for example true/yes or false/no
- Is it possible to use Boolean logic for open-ended questions – for example:
- Where did you travel in the holidays?
- What’s your favourite food?
- What superpower would you like?

### Answer: kind of…indirectly

- Afterall, a computer operates on Boolean logic, yet software is able to perform complex simulations, make predictions about your potential future purchases or decide with variable probabilities with an autonomous car/robot’s next best move would be

## Note: this is also how a lot of neural networks and machine learning algorithms work – by implementing tree-based classifications

### A = been with bank for two years
B = married
C = at least 25 years old
D = parents are customers of same bank

A AND ((B AND C) OR (B AND D) OR (C AND D))
A.(BC + BD + CD)

Construct a truth table and draw the logic circuit for this Boolean expression

- ?

| A | B | C | D | BC | BD | CD | A(BC + BD + CD) |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 |
| 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 |
| 0 | 0 | 1 | 1 | 0 | 0 | 1 | 0 |
| 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 |
| 0 | 1 | 0 | 1 | 0 | 1 | 0 | 0 |
| 0 | 1 | 1 | 0 | 1 | 0 | 0 | 0 |
| 0 | 1 | 1 | 1 | 1 | 1 | 1 | 0 |
| 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 1 | 0 | 0 | 1 | 0 | 0 | 0 | 0 |
| 1 | 0 | 1 | 0 | 0 | 0 | 0 | 0 |
| 1 | 0 | 1 | 1 | 0 | 0 | 1 | 1 |
| 1 | 1 | 0 | 0 | 0 | 0 | 0 | 0 |
| 1 | 1 | 0 | 1 | 0 | 1 | 0 | 1 |
| 1 | 1 | 1 | 0 | 1 | 0 | 0 | 1 |
| 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 |

### Crossing & Splitting Wires

- Often, with more complex logic circuits, you will have crossing wires
- You should use a curved line to indicate a ‘jump’ when wires cross
- Wires can also split if the same input is required for multiple gates
- A.B + A.B

### X = A OR NOT B

- Draw logic circuits & construct truth tables for the following equations

- A = (B OR C) AND NOT D

- N = Y AND (Z OR Y)

- A = (B OR (C AND NOT D)) OR C

### X = A OR NOT B

| A | B | NOT B | A OR NOT B |
| --- | --- | --- | --- |
| 0 | 0 | 1 | 1 |
| 0 | 1 | 0 | 0 |
| 1 | 0 | 1 | 1 |
| 1 | 1 | 0 | 1 |

### N = Y AND (Z OR Y)

| Y | Z | Z OR Y | Y AND (Z OR Y) |
| --- | --- | --- | --- |
| 0 | 0 | 0 | 0 |
| 0 | 1 | 1 | 0 |
| 1 | 0 | 1 | 1 |
| 1 | 1 | 1 | 1 |

### A = (B OR C) AND NOT D

| B | C | D | B OR C | NOT D | (B OR C) AND NOT D |
| --- | --- | --- | --- | --- | --- |
| 0 | 0 | 0 | 0 | 1 | 0 |
| 0 | 0 | 1 | 0 | 0 | 0 |
| 0 | 1 | 0 | 1 | 1 | 1 |
| 0 | 1 | 1 | 1 | 0 | 0 |
| 1 | 0 | 0 | 1 | 1 | 1 |
| 1 | 0 | 1 | 1 | 0 | 0 |
| 1 | 1 | 0 | 1 | 1 | 1 |
| 1 | 1 | 1 | 1 | 0 | 0 |

### A = (B OR (C AND NOT D)) OR C

| B | C | D | NOT D | C AND NOT D | B OR (C AND NOT D) | (B OR (C AND NOT D) OR C |
| --- | --- | --- | --- | --- | --- | --- |
| 0 | 0 | 0 | 1 | 0 | 0 | 0 |
| 0 | 0 | 1 | 0 | 0 | 0 | 0 |
| 0 | 1 | 0 | 1 | 1 | 1 | 1 |
| 0 | 1 | 1 | 0 | 0 | 0 | 1 |
| 1 | 0 | 0 | 1 | 0 | 1 | 1 |
| 1 | 0 | 1 | 0 | 0 | 1 | 1 |
| 1 | 1 | 0 | 1 | 1 | 1 | 1 |
| 1 | 1 | 1 | 0 | 0 | 1 | 1 |

### Task

- Are the following expressions equivalent? Let’s draw a logic circuit and construct a truth table for them…
- A.B
- A.B
- What logic gate is the 2nd?

### Task

- Think of your own logic scenario containing 3 or 4 variables – once done, write the sentence on the board and we will try to form an equation and draw the logic circuit for all of them
- If it’s not raining on a weekday evening and I have no homework, or if it’s daytime on the weekend regardless of the weather, I will go to play basketball

### How to check your answer when drawing a logic circuit from a Boolean expression?

- You can write the expression at each gate and check it is correct when you’ve calculated the expression after the final gate
- Let’s see an example…

## Write the Boolean expression for this circuit. When is the output true?

## Write the Boolean expression for this circuit. When is the output true?

### For the following situations, what logic gate(s) do you think should be used?

- An ATM machine that will dispense money if the following conditions are met:
- Correct PIN entered
- ATM has money
- Account has money
- This can be accomplished with 2 AND gates

## OR – i.e. AInMaths OR AInPhysics OR AInComputerScience

## XOR – i.e. the light will be on if the inputs are different and off if they’re the same, since in this case, it’s required that a person can both turn on and off the light from the same switch (so they don’t have to walk up/down the stairs when it’s dark)

## XNOR – i.e. true when both inputs are false (no bets) or when both inputs are true (winning both), but false if only 1 input is true
