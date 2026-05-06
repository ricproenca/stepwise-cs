# Unit 1 - Information Representation Presentation

## Number Systems

### Class Overview

- Binary & denary number systems
- Converting between them
- Use cases of binary, denary, hexadecimal etc
- Bits, bytes, nibbles
- Formula for max/range of number we can represent in an unsigned (positive) number system
- Most & least significant bits
- Number of bits required to represent a number

### Number Systems

- Do you know what the “base” of a number system is? Do you know what base number system we use?
- The base of a number system is the number of different digits available
- Hence we use base-10 (0-9) – also known as the denary/decimal system

### Number Systems

- Do you know what number system a computer/most digital devices use?
- Binary – i.e. base-2

### Number Systems

- What do you think is stored in binary in a computer?
- Answer: everything
- Numbers, text (strings), video, audio, programs etc – it’s all encoded as 1’s and 0’s – actually a computer has no concept of the number 2 or letter ‘A’ at all

### Number Systems

- A 1 value can be considered on/true
- Hence a 0 can be considered off/false

### Denary/Decimal/Base-10

- So, what do you think the number 936 actually means in base-10?
- (9 x 100) + (3 x 10) + (6 x 1)

- ?

- ?

- ?

- ?

- ?

- ?

- ?

|  | 104 | 103 | 102 | 101 | 100 | 10-1 | 10-2 | 10-3 |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  | 10,000 | 1,000 | 100 | 10 | 1 | 0.1 | 0.01 | 0.001 |  |

### Binary/Base-2

- What do you think the position values for binary will be?

- ?

- ?

- ?

- ?

- ?

- ?

- ?

- Note: fractional (fixed-point or floating-point) binary is not required for AS – that will be for A2
- Note how going left = multiplying by 2 (doubling), while going right = dividing by 2 (halving)

|  | 24 | 23 | 22 | 21 | 20 | 2-1 | 2-2 | 2-3 |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| x2 | 16 | 8 | 4 | 2 | 1 | 0.5 | 0.25 | 0.125 | /2 |

### Digits and Bits

- Do you know what a “bit” is in binary?
- It stands for binary digit
- So digits are individual numbers in a denary number – i.e. 9, 3 and 6 in the denary number 936
- …while bits are the individual numbers in a binary number – e.g. 1, 0, 0, 1 in the binary number 1001

### Binary/Base-2

- What are the first 14 positive binary positional values?

- ?

- ?

- ?

- ?

- ?

- ?

- ?

- ?

- ?

- ?

- ?

- ?

- ?

- Sometimes exams will feature numbers comprised of 14 bits – though usually they will use up to 8
- Do you know the significance of 8 bits?
- 8 bits = 1 byte

| 213 | 212 | 211 | 210 | 29 | 28 | 27 | 26 | 25 | 24 | 23 | 22 | 21 | 20 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 8192 | 4096 | 2048 | 1024 | 512 | 256 | 128 | 64 | 32 | 16 | 8 | 4 | 2 | 1 |

### Bits, Nibbles and Bytes

- Bit = 1 binary digit – e.g. 1
- Nibble = 4 bits – e.g. 0110
- Byte = 10110001
- Do you know what the word “nibble” means in daily use?
- A small bite – e.g. you could say “a mouse nibbles on cheese” – so you can remember it as nibble = small bite (byte)

### Calculating Denary Numbers

- If you have the denary number 8492, it can be thought of as each digit multiplied by the denary positional value – i.e.
- (8 * 103) + (4 * 102) + (9 * 101) + (2 * 100)

### Calculating Binary Numbers

- Likewise, we use the same approach to calculate the bits in a binary number – let’s see…

### Calculating Binary Numbers

- Can you see how this is the same as in denary?
- i.e. (1 * 8) + (0 * 4) + (0 * 2) + (1 * 1)
- How could you simplify this?
- Anything multiplied by 0 is 0 and anything multiplied by 1 is itself – so we can simplify to: 8 + 1

| 23 | 22 | 21 | 20 |
| --- | --- | --- | --- |
| 8 | 4 | 2 | 1 |
| 1 | 0 | 0 | 1 |

### Binary vs Other Bases

- We have said binary is base-2, while denary is base-10 – from the words, can you guess what base octal and hexadecimal would be?
- Octal = base-8 (rarely used)
- Hexadecimal = base-16 (very common – colours, IPv6, MAC and memory addresses etc)
- Base-64 is also commonly used in computing – in converting raw binary to (ASCII) text and vice-versa
- You can also easily create your own base, if you have a purpose (e.g. generating random IDs, encoding/encryption etc)

### Binary vs Other Bases

- Spreadsheet programs like WPS spreadsheet or Microsoft Excel actually use base-26 – do you know where?
- The columns – note how the order is A, B, C…X, Y, Z, AA, AB, AC etc

### Binary vs Other Bases

- In other bases, we are required to multiply – e.g. 845 in denary is
- (8 * 100) + (4 * 10) + (5 * 1)
- This would get more complex with e.g. hexadecimal (base-16), base-64 or some arbitrary base – like base 9
- In contrast, in binary, because we are going to multiply by either 0 or 1, we are simply able to add the bit values together (since n * 1 = n and n * 0 = 0)

### Binary to Denary Practice

- 13

- 6

- 15

| 23 | 22 | 21 | 20 |
| --- | --- | --- | --- |
| 8 | 4 | 2 | 1 |
| 1 | 1 | 0 | 1 |

| 23 | 22 | 21 | 20 |
| --- | --- | --- | --- |
| 8 | 4 | 2 | 1 |
| 0 | 1 | 1 | 0 |

| 23 | 22 | 21 | 20 |
| --- | --- | --- | --- |
| 8 | 4 | 2 | 1 |
| 1 | 1 | 1 | 1 |

### Binary to Denary Practice

- 221

| 27 | 26 | 25 | 24 | 23 | 22 | 21 | 20 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 128 | 64 | 32 | 16 | 8 | 4 | 2 | 1 |
| 1 | 1 | 0 | 1 | 1 | 1 | 0 | 1 |

### Binary to Denary Practice

- 255

| 27 | 26 | 25 | 24 | 23 | 22 | 21 | 20 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 128 | 64 | 32 | 16 | 8 | 4 | 2 | 1 |
| 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 |

### Maximum Number with N-Bits in Binary

- Recap: bit = 1 binary digit
- Do you remember how many bits are in a nibble and how many are in a byte?
- Nibble = 4 bits; Byte = 8 bits
- Question: what is the maximum number we can store in a nibble & byte respectively?
- Nibble max = 15 (8 + 4 + 2 + 1)
- Byte max = 255 (128 + 64 + 32 + 16 + 8 + 4 + 2 + 1)

### Maximum Number with N-Bits in Binary

- So we can store up to 15 in denary using 4 bits and up to 255 using 8 bits.
- Can you think of a formula that will calculate the maximum denary number we can represent with n-bits?
- 2n – 1
- Verify this works with n = 4, n = 8
- Hence, what is the maximum number we can store in 2 bytes?
- 216 - 1 = 65535

### Maximum Number with N-Digits in Other Bases

- Do you think a similar equation to 2n – 1 would work for denary?
- Yes: 10n – 1
- This is even more intuitive – i.e. with 1 digit, the maximum is 9, with 2 digits, the maximum is 99, with 3 digits, the maximum is 999 and so on
- So what would the general formula be?
- bn – 1
- Where ‘b’ is the base and n is the number of digits/bits

### Maximum Number Question

- For example, if an exam asked to calculate the highest number that could be represented with 20 hexadecimal digits, what would the answer be?
- 1620 – 1 = 1,208,925,819,614,629,174,706,175

### Binary: Range of Numbers

- Recap: if we have 4 bits, what is the maximum number can represent?
- 15
- So with 4 bits (a nibble), what is the range of numbers we can represent?
- 0-15
- Hence how many different numbers can we represent?
- 16
- Can you think of generalized/binary-specific formula to calculate all of these features?

### Maximum, Range & Number of Unique Values - Formulas

- Number of Unique Values:
- 2n
- Maximum:
- 2n – 1
- Range:
- 0 to 2n – 1
- Again, these formulas work for any base – just change the 2 to the new base

- Question: why do the maximum/range formulae contain the “-1”?
- Since one of the numbers is zero – this is the same in denary – i.e. with 2 digits, the maximum number is 99 (i.e. 102 – 1)

### Denary to Binary

- We have seen how to go from binary to denary, now let’s see how to do the reverse

### Denary to Binary

- Let’s convert the denary number 9 into binary:
- Informally: add up values until we reach our target number
- We start from the left – if our target number is greater than or equal to the denary positional value, set the bit to 1 – if it’s smaller, set it to 0
- If we set the bit to 1, subtract the denary positional value from the target number

- 9 >= 8: set to 1
- t = 9 – 8 = 1
- 1 < 4: set to 0
- 1 < 2: set to 0
- 1 >= 1: set to 1

| 23 | 22 | 21 | 20 |
| --- | --- | --- | --- |
| 8 | 4 | 2 | 1 |
| 1 | 0 | 0 | 1 |

### Denary to Binary: Practice

- 7

- 9

- 13

| 23 | 22 | 21 | 20 |
| --- | --- | --- | --- |
| 8 | 4 | 2 | 1 |
| 0 | 1 | 1 | 1 |

| 23 | 22 | 21 | 20 |
| --- | --- | --- | --- |
| 8 | 4 | 2 | 1 |
| 1 | 0 | 0 | 1 |

| 23 | 22 | 21 | 20 |
| --- | --- | --- | --- |
| 8 | 4 | 2 | 1 |
| 1 | 1 | 0 | 1 |

### Denary to Binary: Counting

- In later units – particularly logic circuits – you will need to list all the different input combinations
- The simplest way to do this is simply to count in binary
- Task: write all the combinations of 4 bits by counting in binary (what number will you need to count to?)

| 0 | 0000 |
| --- | --- |
| 1 | 0001 |
| 2 | 0010 |
| 3 | 0011 |
| 4 | 0100 |
| 5 | 0101 |
| 6 | 0110 |
| 7 | 0111 |
| 8 | 1000 |
| 9 | 1001 |
| 10 | 1010 |
| 11 | 1011 |
| 12 | 1100 |
| 13 | 1101 |
| 14 | 1110 |
| 15 | 1111 |

### Denary to Binary: Counting

- You might be slow at first, but you will get quicker – can you see any patterns?
- e.g. if you set a left bit to a 1, all the bits to the right become 0 – i.e. 7 = 0111  8 = 1000

| 0 | 0000 |
| --- | --- |
| 1 | 0001 |
| 2 | 0010 |
| 3 | 0011 |
| 4 | 0100 |
| 5 | 0101 |
| 6 | 0110 |
| 7 | 0111 |
| 8 | 1000 |
| 9 | 1001 |
| 10 | 1010 |
| 11 | 1011 |
| 12 | 1100 |
| 13 | 1101 |
| 14 | 1110 |
| 15 | 1111 |

### Denary to Binary

- Let’s try some more difficult denary to binary conversions

### Denary to Binary: Practice

- 37

- ?

| 27 | 26 | 25 | 24 | 23 | 22 | 21 | 20 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 128 | 64 | 32 | 16 | 8 | 4 | 2 | 1 |
| 0 | 0 | 1 | 0 | 0 | 1 | 0 | 1 |

### Denary to Binary: Practice

- 148

- ?

| 27 | 26 | 25 | 24 | 23 | 22 | 21 | 20 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 128 | 64 | 32 | 16 | 8 | 4 | 2 | 1 |
| 1 | 0 | 0 | 1 | 0 | 1 | 0 | 0 |

### Denary to Binary: Practice

- 239

- What would be the maximum value we can represent with 8 bits? How could we use this to check our answer?
- 255 – so here we know that 239 is 16 less than 255 – hence we want all bits to be true, except for 16, which should be false

- ?

| 27 | 26 | 25 | 24 | 23 | 22 | 21 | 20 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 128 | 64 | 32 | 16 | 8 | 4 | 2 | 1 |
| 1 | 1 | 1 | 0 | 1 | 1 | 1 | 1 |

### Most & Least Significant Bits

- Two terms that are sometimes mentioned are the most & least significant bits (MSB & LSB)
- The MSB is the bit with the highest value (i.e. the leftmost), while the LSB is the bit with the lowest value (i.e. the rightmost)

| 8 | 7 | 6 | 5 | 4 | 3 | 2 | 1 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 27 | 26 | 25 | 24 | 23 | 22 | 21 | 20 |
| 128 | 64 | 32 | 16 | 8 | 4 | 2 | 1 |

### Most & Least Significant Bits

- Here, bit 8 is the MSB and bit 1 is the LSB
- Note that we usually count from right to left (i.e. in ascending order)

| 8 | 7 | 6 | 5 | 4 | 3 | 2 | 1 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 27 | 26 | 25 | 24 | 23 | 22 | 21 | 20 |
| 128 | 64 | 32 | 16 | 8 | 4 | 2 | 1 |

### Removing Leading Zeros

- Take the denary number 3 in binary – with 1 byte, it would be:
- 0000 0011
- The leading zeros in this case are meaningless – for unsigned (positive) binary values, we can simply write the denary number 3 as 11 – would be 011 if using signed
- If we want to represent the denary number 129, how many bits would we need? Let’s see how to calculate it…

### Calculating Required Number of Bits

- Do you know how we could calculate the required number of bits we need to represent a denary number – ‘n’?
- Number of bits required: ⌈ log2n ⌉
- The ⌈ ⌉ symbols mean the ceiling function – i.e. round up – e.g.
- ⌈ 3.0001 ⌉ = 4

### Calculating Required Number of Bits

- So, how many bits would we need to represent the denary number 129?
- answer = ⌈ log2n ⌉ = ⌈ log2129 ⌉ = ⌈ 7.011 ⌉ = 8

### Calculating Required Number of Bits

- Remembering the formula is good – since you could easily calculate the number of bits required to represent a huge number – like the number of atoms in the universe – in binary
- For small numbers, you can intuitively think of it as “if the target number is greater than the current binary positional value, but less than the next, then we need this number of bits”
- Let’s see an example…

### Calculating Required Number of Bits

- Rule: “if the target number is greater than the current binary positional value, but less than the next, then we need this number of bits”

- How many bits are required to represent 56?
- 6 – since 56 > 32 AND 56 < 64

- How about 127 & 128?
- 127: 7 bits;
- 128 = 8 bits

| 8 | 7 | 6 | 5 | 4 | 3 | 2 | 1 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 27 | 26 | 25 | 24 | 23 | 22 | 21 | 20 |
| 128 | 64 | 32 | 16 | 8 | 4 | 2 | 1 |