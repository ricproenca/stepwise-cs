# Unit 1 - Information Representation Presentation

## Binary-Coded Decimal (BCD)

### Class Overview

- Accuracy issues with storing decimals in binary
- How binary-coded decimal (BCD) addresses this
- BCD addition
- Advantages, disadvantages & use cases of BCD

### Fixed/Floating-Point Problem

- How to calculate floating/fixed-point binary is not required for A-Level, however we do need to know one issue with it
- That is that we can’t represent some non-integer numbers accurately

### Fixed/Floating-Point Problem

- What would you expect this code to output?
- 0.3
- However the real output is 0.30000000000000004
- The same happens in other programming languages too – Java, Python, VB, C, C++, Pascal etc

### Fixed/Floating-Point Problem

- Let’s see how to represent 9.75 in fixed-point binary

- A modern computer uses a slightly different method – floating-point – where the binary point can actually move – but still, there is a limited number of bits we can have to represent the decimal
- e.g. something like 0.4289 might actually be represented as 0.428899999999998, for example

|  | 24 | 23 | 22 | 21 | 20 | 2-1 | 2-2 | 2-3 |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| x2 | 16 | 8 | 4 | 2 | 1 | 0.5 | 0.25 | 0.125 | /2 |
|  | 0 | 1 | 0 | 0 | 1 | 1 | 1 | 0 |  |

### Fixed/Floating-Point Problem

- So is binary just bad? Or do you think this problem also occurs in base 10 (denary)?
- Yes – can you think of an example?
- e.g. 1/3 can’t be represented accurately in base 10 (i.e. it’s 0.33333333…), √2, π etc
- How many numbers do you think can’t be represented correctly in denary?
- An infinite number – so binary isn’t really the problem

### Solution: Binary-Coded Decimal (BCD)

- There is, however, a way to represent base-10 numbers completely accurately in binary: binary-coded decimal (BCD)
- This works be simply representing each digit independently using 4 bits – i.e. 729 would be represented as follows (note: the first digit isn’t negative like in two’s complement – we always use unsigned for BCD)

- So you can see, we just represent each denary digit independently with 4 bits

| 7 |  |  |  | 2 |  |  |  | 9 |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0 | 1 | 1 | 1 | 0 | 0 | 1 | 0 | 1 | 0 | 0 | 1 |

### Binary-Coded Decimal: Unpacked vs Packed

- Unpacked binary-coded decimal: used 8 bits (1 byte) to represent 1 denary digit
- Packed binary-coded decimal: uses 4 bits (1 nibble) to represent 1 denary digit

- Unpacked BCD
- Packed BCD

| 5 |  |  |  |  |  |  |  | 8 |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0 | 0 | 0 | 0 | 0 | 1 | 0 | 1 | 0 | 0 | 0 | 0 | 1 | 0 | 1 | 0 |

| 5 |  |  |  | 8 |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0 | 1 | 0 | 1 | 1 | 0 | 1 | 0 |

### Binary-Coded Decimal: Unpacked vs Packed

- What therefore are the advantages of packed BCD?
- More space-efficient (only uses half the bits)
- Faster (possibly)

- Unpacked BCD
- Packed BCD

| 5 |  |  |  |  |  |  |  | 8 |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0 | 0 | 0 | 0 | 0 | 1 | 0 | 1 | 0 | 0 | 0 | 0 | 1 | 0 | 1 | 0 |

| 5 |  |  |  | 8 |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0 | 1 | 0 | 1 | 1 | 0 | 1 | 0 |

### BCD: Valid or Invalid

- Do you think 1100 would be a valid BCD number?
- No – since that is the number 12 in denary
- How would we actually represent 12 in packed BCD?
- With a 1, then a 2: 0001 0010
- Using packed BCD, how many bit patterns are wasted?
- 6: from 10 to 15 – i.e. 1010 to 1111

### Decimals in BCD

- We can also represent decimals in BCD in the same way
- [note: there would have to be a method of saying where the decimal point would be – since 1.23 is obviously a different value to 12.3 – how the decimal’s position is stored isn’t required for A-Level & would depend on the hardware/software developer – since BCD isn’t standardised across hardware/software developers, like fixed/floating point is]

- ?

- ?

- ?

- ?

| 9 |  |  |  | 2 |  |  |  | . | 3 |  |  |  | 6 |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | 0 | 0 | 1 | 0 | 0 | 1 | 0 |  | 0 | 0 | 1 | 1 | 0 | 1 | 1 | 0 |

### Decimals in BCD

- We said only single digits – i.e. 0-9 are valid in BCD – can you then think of a clever way we can represent a decimal point in BCD?
- Use one of the unused bit patterns – e.g. 1111 stands out, so it’s possible we could represent 7.5 as:

- Again, different developers would have different approaches – but this could be a possible approach

| 7 |  |  |  | . |  |  |  | 5 |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 0 | 1 | 0 | 1 |

### BCD Addition

- I have never seen this asked in the exam…though it is in the book, so let’s see how to do it:
- Add two BCD numbers, using regular binary addition
- If 4-bit sum is less than or equal to 9, then it’s valid
- If it’s > 9 or if a carry out is generated from 4-bit sum, then add 6 (to skip the 6 invalid states). If a carry occurs, add the carry to the next 4 bits (nibble)
- Let’s try 7 + 5…

### t

- BCD Addition – Stage 1

- Add two BCD numbers, using regular binary addition

- Since our result  is > 9, then we need to add 6 to circle back around

| Carry | 1 | 1 | 1 |  |
| --- | --- | --- | --- | --- |
| 7 | 0 | 1 | 1 | 1 |
| 5 | 0 | 1 | 0 | 1 |
| = | 1 | 1 | 0 | 0 |

### BCD Addition – Stage 3

- Since our previous answer (Prev) was greater than 9, we need to add 6 to it to bring it back to the valid range (this is also equivalent to subtracting 10 – e.g. 13 going to 3 – i.e. only getting rightmost digit)

- Since we got a carry out of this stage, we have to add it to the next nibble

| Carry | 1 | 1 |  |  |  |
| --- | --- | --- | --- | --- | --- |
| Prev |  | 1 | 1 | 0 | 0 |
| 6 |  | 0 | 1 | 1 | 0 |
| = |  | 0 | 0 | 1 | 0 |

### BCD Addition – Stage 3

- Since we were doing 7 + 5, we have 0s in the 10s column – and just our carry out from the previous digit

- Hence our final answer is 0001 0010 or 12

- Our original 7 + 5 result

| Carry |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| PrevCarry |  |  |  |  | 1 |
| 0 |  | 0 | 0 | 0 | 0 |
| 0 |  | 0 | 0 | 0 | 0 |
| = |  | 0 | 0 | 0 | 1 |

| = |  | 0 | 0 | 1 | 0 |
| --- | --- | --- | --- | --- | --- |

### BCD Addition

- Let’s see all of these stages together…

### ?

- ?

- ?

- Answer

| Carry |  |  |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0.26 |  |  |  |  |  |  |  |  | 0 | 0 | 1 | 0 | 0 | 1 | 1 | 0 |
| 0.85 |  |  |  |  |  |  |  |  | 1 | 0 | 0 | 0 | 0 | 1 | 0 | 1 |
| Nibble 1 Ans |  |  |  |  |  |  |  |  |  |  |  |  | 1 | 0 | 1 | 1 |
| Carry |  |  |  |  |  |  |  |  |  |  |  |  | 1 | 1 |  |  |
| Nibble 1 Ans > 9 |  |  |  |  |  |  |  |  |  |  |  |  | 1 | 0 | 1 | 1 |
| 6 |  |  |  |  |  |  |  |  |  |  |  |  | 0 | 1 | 1 | 0 |
| Nibble 1 Ans |  |  |  |  |  |  |  |  |  |  |  | 1 | 0 | 0 | 0 | 1 |
| Carry |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Nibble 1 Ans Carry Bit |  |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  |  |
| 0.26 |  |  |  |  |  |  |  |  | 0 | 0 | 1 | 0 |  |  |  |  |
| 0.85 |  |  |  |  |  |  |  |  | 1 | 0 | 0 | 0 |  |  |  |  |
| Nibble 2 Ans |  |  |  |  |  |  |  |  | 1 | 0 | 1 | 1 |  |  |  |  |
| Carry |  |  |  |  |  |  |  | 1 | 1 | 1 |  |  |  |  |  |  |
| Nibble 2 Ans > 9 |  |  |  |  |  |  |  |  | 1 | 0 | 1 | 1 |  |  |  |  |
| 6 |  |  |  |  |  |  |  |  | 0 | 1 | 1 | 0 |  |  |  |  |
| Nibble 2 Ans |  |  |  |  |  |  |  |  | 0 | 0 | 0 | 1 |  |  |  |  |
| Final Answer in BCD |  |  |  |  |  |  |  | 1 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 1 |
| Final Answer in Denary |  |  |  |  | 1. |  |  |  | 1 |  |  |  | 1 |  |  |  |

### BCD Addition

- Let’s try summing 0.93 and 0.58

### ?

- ?

- ?

- Answer

| Carry |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 6.4 |  |  |  |  |  |  |  |  | 0 | 1 | 1 | 0 | 0 | 1 | 0 | 0 |
| 7.8 |  |  |  |  |  |  |  |  | 0 | 1 | 1 | 1 | 1 | 0 | 0 | 0 |
| Nibble 1 Ans |  |  |  |  |  |  |  |  |  |  |  |  | 1 | 1 | 0 | 0 |
| Carry |  |  |  |  |  |  |  |  |  |  |  | 1 | 1 |  |  |  |
| Nibble 1 Ans > 9 |  |  |  |  |  |  |  |  |  |  |  |  | 1 | 1 | 0 | 0 |
| 6 |  |  |  |  |  |  |  |  |  |  |  |  | 0 | 1 | 1 | 0 |
| Nibble 1 Ans |  |  |  |  |  |  |  |  |  |  |  | 1 | 0 | 0 | 1 | 0 |
| Carry |  |  |  |  |  |  |  |  | 1 | 1 | 1 |  |  |  |  |  |
| Nibble 1 Ans Carry Bit |  |  |  |  |  |  |  |  |  |  |  | 1 |  |  |  |  |
| 6.4 |  |  |  |  |  |  |  |  | 0 | 1 | 1 | 0 |  |  |  |  |
| 7.8 |  |  |  |  |  |  |  |  | 0 | 1 | 1 | 1 |  |  |  |  |
| Nibble 2 Ans |  |  |  |  |  |  |  |  | 1 | 1 | 1 | 0 |  |  |  |  |
| Carry |  |  |  |  |  |  |  | 1 | 1 | 1 |  |  |  |  |  |  |
| Nibble 2 Ans > 9 |  |  |  |  |  |  |  |  | 1 | 1 | 1 | 0 |  |  |  |  |
| 6 |  |  |  |  |  |  |  |  | 0 | 1 | 1 | 0 |  |  |  |  |
| Nibble 2 Ans |  |  |  |  |  |  |  |  | 0 | 1 | 0 | 0 |  |  |  |  |
| Final Answer in BCD |  |  |  |  |  |  |  | 1 | 0 | 1 | 0 | 0 | 0 | 0 | 1 | 0 |
| Final Answer in Denary |  |  |  |  | 1 |  |  |  | 4. |  |  |  | 2 |  |  |  |

### BCD Addition

- This is quite a difficult process to remember, which is probably one of the reasons it’s never been on the exam (though it is in the book)
- You can try more for homework for practice though – you can easily check the answer yourself by converting the BCD answer to denary and check it’s the same as performing the original denary calculation on your calculator
- 5.4 + 6.7
- 1.94 + 0.8

### Binary-Coded Decimal Disadvantages

- If BCD allows us to store decimal numbers exactly, why don’t we use it instead of two’s complement?
- Wasteful – 6 of 16 values in 4 bits aren’t used
- Requires more complex circuitry to store & perform arithmetic
- Slower

### BCD Recap: Advantages, Disadvantages & Uses

- Advantage:
- Can store base-10 decimal numbers exactly

- Disadvantages:
- Wastes 6 out of 16 bits
- Complex circuitry for arithmetic required
- Slower

- Used in SOME:
- Digital watches/timers/stopwatches/alarms
- Scientific equipment – voltmeters, oscilloscopes etc
- Programs to represent financial values exactly