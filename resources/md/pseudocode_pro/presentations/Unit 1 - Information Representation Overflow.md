# Unit 1 - Information Representation Presentation
## & Overflow

### Class Overview

- Binary addition
- Binary subtraction
- Overflow
- Calculating PI to 1 billion digits

### Denary Addition

- Before looking at binary addition, let’s first look at how we can add denary numbers
- We can place each number in a row and add a carry row above

### Denary Addition

- Let’s try a few examples

- ?

- ?

- ?

- ?

| Carry | 1 | 1 |  |
| --- | --- | --- | --- |
| 75 |  | 7 | 5 |
| 47 |  | 4 | 7 |
| = | 1 | 2 | 2 |

| Carry | 2 | 2 |  |
| --- | --- | --- | --- |
| 18 |  | 1 | 8 |
| 95 |  | 9 | 5 |
| 83 |  | 8 | 3 |
| 27 |  | 2 | 7 |
| = | 2 | 2 | 3 |

### Binary Addition

- Luckily, we can use the same method with binary – the rules are:
- 0 + 0 = 0
- 0 + 1 = 1
- 1 + 1 = 0 & carry 1
- 1 + 1 + 1 = 1 & carry 1
- Note: the properties are commutative – i.e. 1 + 0 = 0 + 1
- Likewise, 1 + 1 + 0 = 0 + 1 + 1
- 1 + 1 would be like 3 + 7 in denary (i.e. that equals 10, so we would put a 0 in this digit’s column, then carry a 1 to the left)
- 1 + 1 + 1 would be like 4 + 7 (i.e. there’s a sum & carry)

| Inputs |  |  | Sum | Carry |
| --- | --- | --- | --- | --- |
| 0 | 0 |  | 0 | 0 |
| 0 | 1 |  | 1 | 0 |
| 1 | 1 |  | 0 | 1 |
| 1 | 1 | 1 | 1 | 1 |

### Binary Addition

- Assume these are 4-bit unsigned binary integers

- ?

- ?

- ?

- ?

- Since we said these are 4 bit binary integers and the answer requires 5 bits, this is called ‘overflow’ – i.e. we can’t correctly represent the real answer with the number of bits available
- What would be the correct answer of this addition and what is the real answer represented?
- Correct = 8 + 12 = 20            Yet, with 4 bits, we store 0100 = 4

| Carry |  | 1 |  |  |
| --- | --- | --- | --- | --- |
|  | 1 | 0 | 1 | 0 |
|  | 0 | 0 | 1 | 1 |
| = | 1 | 1 | 0 | 1 |

| Carry | 1 |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
|  |  | 1 | 0 | 0 | 0 |
|  |  | 1 | 1 | 0 | 0 |
| = | 1 | 0 | 1 | 0 | 0 |

### Overflow

- “If 2 Two's Complement numbers are added, and they both have the same sign (both positive or both negative), then overflow occurs if and only if the result has the opposite sign. Overflow never occurs when adding operands with different signs.”
- Can you think of examples to demonstrate this? Try using 4 bits

### Overflow

- What will happen if we perform the calculation 7 (0111) + 1 (0001)?
- It will overflow to become -8 (1000)

### “…they both have the same sign, then overflow occurs if and only if the result has the opposite sign…”

- -8 + -8 = -16
- out answer of 0000 is incorrect
- i.e. operands have same sign (1), answer (0000) has different sign (0)

- -4 + -4 = -8
- our answer of 1000 is correct
- i.e. operands & answer have same sign

| Carry | 1 |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
|  |  | 1 | 0 | 0 | 0 |
|  |  | 1 | 0 | 0 | 0 |
| = | 1 | 0 | 0 | 0 | 0 |

| Carry | 1 | 1 |  |  |  |
| --- | --- | --- | --- | --- | --- |
|  |  | 1 | 1 | 0 | 0 |
|  |  | 1 | 1 | 0 | 0 |
| = | 1 | 1 | 0 | 0 | 0 |

### “…they both have the same sign, then overflow occurs if and only if the result has the opposite sign…”

- Do you know why this example works, even with the carry out?
- Since for negative two’s complement, any leading 1s are redundant – i.e. 1000 = 11111000 = -8
- Equivalently, leading 0s for positive numbers are redundant

| Carry | 1 | 1 |  |  |  |
| --- | --- | --- | --- | --- | --- |
|  |  | 1 | 1 | 0 | 0 |
|  |  | 1 | 1 | 0 | 0 |
| = | 1 | 1 | 0 | 0 | 0 |

### “Overflow never occurs when adding operands with different signs”

- This makes sense, since if we add numbers with opposite signs, the result will always get closer to 0, compared to the more extreme value
- e.g.
- 7 + -1 = 6 (6 is closer to 0 than 7)
- -8 + 1 = -7 (-7 is closer to 0 than -8)

### Overflow

- Does overflow also occur in denary?
- Yes – if you said you are only allowed to use n digits
- For example, you couldn’t represent the denary number 1000 using only 3 digits – the sum 999 + 1 wouldn’t yield the correct answer with only 3 digits

### Overflow

- Why can’t we just use an infinite number of bits to prevent overflow?
- The registers and arithmetic circuits (e.g. in ALU, GPU) are designed to work for a specific number of bits (word size) – e.g. 64 on modern devices. A computer could be developed with a greater word size, but then executing (and possibly loading) instructions would be slower, since there’s more data to process
- [we will see later, we can actually represent numbers greater than 264 – 1 with a custom implementation in code, rather than only using the processor’s native arithmetic instructions]

### Overflow – Signed Numbers

- Some programming languages (C, C++), even database implementations like MySQL allow you to choose whether numbers will be signed or unsigned
- Others like Java, Python, JavaScript etc only use signed
- Again, what should be the correct answer here and what is really output?
- Correct = 7 + 1 = 8             Actual result = -8
- Again, clearly this is wrong

| Carry | 1 | 1 | 1 | 0 |
| --- | --- | --- | --- | --- |
|  | 0 | 1 | 1 | 1 |
|  | 0 | 0 | 0 | 1 |
| = | 1 | 0 | 0 | 0 |

### Overflow – Signed Numbers

- In Java, the following integer sizes are available – why do you think there are different sizes of integers?
- To save memory usage – for example, if we want to store data like a person’s age, we could use a smaller integer…if we wanted to store the world’s population, we’d need a larger one
- Do you remember the rule for calculating the size of the maximum value of a signed number – what would be the most appropriate integer type to store a person’s age?

- A ‘short’ – maximum of 32,767
- A (signed) byte has a maximum of value of 127 – currently, the world’s oldest person is 122…but in the future, it’s likely someone will live for 128 years or more

| Data Type | Size |
| --- | --- |
| byte | 1 byte |
| short | 2 bytes |
| int | 4 bytes |
| long | 8 bytes |

### Overflow – Signed Numbers

- What do you think would happen if we declared a variable of type byte in Java, assigned it the value of 127, then added 1 to it?
- The code is a bit ugly
- Note how the answer is -128 – this is because of overflow

- byte n = 127;
- n = (byte) (n + 1);
- System.out.println(n);

- How could we fix this problem, in this case?
- Simply use a larger integer type

| Data Type | Size |
| --- | --- |
| byte | 1 byte |
| short | 2 bytes |
| int | 4 bytes |
| long | 8 bytes |

### Overflow – Signed Numbers

- What would hence be the largest number we could represent in Java using native integer data types?
- 8 bytes = 64 bits
- Signed so range is –(263) <= n <= 263 - 1

- long n = 9223372036854775807L;
- n = n + 1;
- System.out.println(n);

| Data Type | Size |
| --- | --- |
| byte | 1 byte |
| short | 2 bytes |
| int | 4 bytes |
| long | 8 bytes |

### Overflow

- This information is not required for the exam, but it IS possible to represent numbers outside of this range (i.e. either larger or smaller)
- Some mathematical/scientific/encryption programs may need to do this
- Numbers can effectively be converted to a string (object) – algorithms to perform calculations in software instead of hardware can then be used
- In Python, numbers that can’t be stored in 64 bits will automatically be converted to objects – in Java, we can create an instance of a class like BigInteger

### Overflow - Workaround

- In Java, we can represent arbitrarily large integers as follows:

- BigInteger i = new BigInteger("9223372036854775807");
- i = i.pow(100);
- System.out.println(i);

- This results in an answer with 1898 digits – in contrast, the number of atoms in the universe ‘only’ has 80 digits, according to scientists’ estimates
- While theoretically, BigInteger can store an infinite number of integers, in practice, there is a limit. Do you know what this is?
- The amount of RAM/virtual memory your computer has – so for a machine with 16GiB of RAM, that would be a number with billions of digits

### Arbitrarily Sized Numbers

- Remember though, in the exam, you only have to consider standard binary numbers
- This extra BigInteger information is just if you are curious/have the need to use it for a project
- For example, you can find code online to calculate PI to 1 billion digits…or code to try and find huge prime numbers (biggest currently is 2136,279,841-1) – these wouldn’t be able to use the numeric types the processor supports directly (i.e. a max of 264 – 1 for unsigned)

### Binary Addition Questions

- ?

- ?

- You can check your answers in denary – i.e.
- Q1 = 0011 + 1011 = 3 + 11 = 1110 = 14
- Q2 = 1001 + 0011 = -7 + 3 = 1100 = -8+4 = -4

- ?

- ?

- 4-bit signed

- 4-bit unsigned

| Carry |  | 1 | 1 |  |
| --- | --- | --- | --- | --- |
|  | 0 | 0 | 1 | 1 |
|  | 1 | 0 | 1 | 1 |
| = | 1 | 1 | 1 | 0 |

| Carry |  | 1 | 1 |  |
| --- | --- | --- | --- | --- |
|  | 1 | 0 | 0 | 1 |
|  | 0 | 0 | 1 | 1 |
| = | 1 | 1 | 0 | 0 |

### Binary Addition Questions

- ?

- ?

- Q1 = 57 + 119 = 176

- 8-bit unsigned

- ?

- ?

- 8-bit signed

- Q2 = -90 + 46 = -44

| Carry | 1 | 1 | 1 | 1 | 1 | 1 | 1 |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  | 0 | 0 | 1 | 1 | 1 | 0 | 0 | 1 |
|  | 0 | 1 | 1 | 1 | 0 | 1 | 1 | 1 |
| = | 1 | 0 | 1 | 1 | 0 | 0 | 0 | 0 |

| Carry |  | 1 |  | 1 | 1 | 1 |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  | 1 | 0 | 1 | 0 | 0 | 1 | 1 | 0 |
|  | 0 | 0 | 1 | 0 | 1 | 1 | 1 | 0 |
| = | 1 | 1 | 0 | 1 | 0 | 1 | 0 | 0 |

### Binary Addition Questions – 8 Bit Signed

- ?

- ?

- Q1 = -1 + -16 = -17
- Carry from MSB occurred, but answer correct

- ?

- ?

- Q2 = -128 + -1
- Overflow occurred – 8 bit answer = 127 = incorrect

- A common misconception is that a carry out from the MSB = overflow. Remember: overflow only occurs if the adding two numbers of the same sign, but the answer has the opposite sign

| Carry | 1 | 1 | 1 | 1 |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  |  | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 |
|  |  | 1 | 1 | 1 | 1 | 0 | 0 | 0 | 0 |
| = |  | 1 | 1 | 1 | 0 | 1 | 1 | 1 | 1 |

| Carry | 1 |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  |  | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
|  |  | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 |
| = |  | 0 | 1 | 1 | 1 | 1 | 1 | 1 | 1 |

### Overflow Recap

- Rule: “If 2 Two's Complement numbers are added, and they both have the same sign (both positive or both negative), then overflow occurs if and only if the result has the opposite sign. Overflow never occurs when adding operands with different signs.”
- Overflow occurs when the number is too large or too small (negative) to be represented in the number of bits available
- As a result, the sign bit becomes incorrect

### Binary Subtraction

- We have actually already looked at binary subtraction – remember, 4 – 3 is the same as 4 + -3.
- Likewise, 4 - -3 is the same as 4 + 3
- Hence, to perform binary subtraction, we simply change the operation to addition and change the sign of the 2nd operand

### Binary Subtraction Questions

- ?

- ?

- 4 – 3
- 4 = 0100
- 3 = 0011
- -3 (flip bits & add 1): 1101
- 4 + -3:

- ?

- ?

- 4 – -3
- 4 = 0100
- -3 = 1101
- 3 = 0011
- 4 + 3:

| Carry | 1 |  |  |  |
| --- | --- | --- | --- | --- |
| 4 | 0 | 1 | 0 | 0 |
| -3 | 1 | 1 | 0 | 1 |
| = | 0 | 0 | 0 | 1 |

| Carry |  |  |  |  |
| --- | --- | --- | --- | --- |
| 4 | 0 | 1 | 0 | 0 |
| - -3 | 0 | 0 | 1 | 1 |
| = | 0 | 1 | 1 | 1 |

### Binary Subtraction

- There is also another way to perform binary subtraction – it is similar to how you probably perform denary subtraction – let’s see with 1364 - 289

| Borrow |  |  | 10 | 10 |
| --- | --- | --- | --- | --- |
|  | 1 | 32 | 65 | 4 |
|  |  | 2 | 8 | 9 |
| = | 1 | 0 | 7 | 5 |

### Binary Subtraction

- How would you perform 246 – 357?
- If the 2nd number is bigger, you need to switch the order, then add a minus sign – i.e.
- -(357 – 246)

| Borrow |  |  |  |  |
| --- | --- | --- | --- | --- |
|  |  | 3 | 5 | 7 |
|  |  | 2 | 4 | 6 |
| = | - | 1 | 1 | 1 |

### Binary Subtraction

- 0 – 0 = 0
- 1 – 0 = 1
- 1 – 1 = 0
- 0 – 1 (borrow required)

- In denary we borrow 10 of each place value - since the place to the left is 10x more than the place to the right
- Hence, in binary, we borrow 2 (since e.g. taking a 32 and moving it to the 16s column: 32 = 16 * 2)
- Note: in exams, a borrow of 2 will usually be written in binary as 10

| Borrow |  |  |  |  |
| --- | --- | --- | --- | --- |
|  | 1 | 0 | 0 | 1 |
|  | 0 | 1 | 0 | 1 |
| = |  |  |  |  |

| Borrow |  | 2 |  |  |
| --- | --- | --- | --- | --- |
|  | 10 | 0 | 0 | 1 |
|  | 0 | 1 | 0 | 1 |
| = | 0 | 1 | 0 | 0 |

### Binary Subtraction - Practice

- Assume all are unsigned binary numbers

- 10110110 - 01100011

- 10000000 - 00000001

|  |  | 2 |  |  |  |  | 2 | 2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  | 10 | 0 | 1 | 1 | 0 | 10 | 10 | 0 |
|  | 0 | 1 | 1 | 0 | 0 | 0 | 1 | 1 |
| = | 0 | 1 | 0 | 1 | 0 | 0 | 1 | 1 |

|  |  | 21 | 21 | 21 | 21 | 21 | 21 | 2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  | 10 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
|  | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 |
| = | 0 | 1 | 1 | 1 | 1 | 1 | 1 | 1 |

### Binary Subtraction - Practice

- Use either the “add a negative number” method or the method we just saw to perform the following calculations in binary
- 1) 75 – 36
- Assume using unsigned:
- 2) 10101010 - 00001111

- 00100111
- 10011011