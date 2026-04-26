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

## Hexadecimal

### Class Overview

- Hexadecimal number system & uses
- Converting denary <-> hex
- Converting binary <-> hex

### Hexadecimal

- Can you remember what base we said hexadecimal is?
- Base-16
- The first 10 hex digits are easy – simply the number 0-9
- The next six are the letters A-F
- So an example hex value could be ABC

| 0 | 0 |
| --- | --- |
| 1 | 1 |
| 2 | 2 |
| 3 | 3 |
| 4 | 4 |
| 5 | 5 |
| 6 | 6 |
| 7 | 7 |
| 8 | 8 |
| 9 | 9 |
| A | 10 |
| B | 11 |
| C | 12 |
| D | 13 |
| E | 14 |
| F | 15 |

### Hexadecimal

- Would 99 be a valid hex value?
- Yes – since it’s in the range 0-F
- This is why it’s important to specify what base is used – since 99 would be a valid denary, hexadecimal, base-64 (or actually an infinite number of different base) value – yet the actual value it represents would be different
- We can specify with subscripts: 9916

### Hexadecimal

- Would 4G6 be a valid hex value?
- No – since G isn’t in the range 0-F

### Hexadecimal

- Do you know any uses of hex numbers – e.g. do you recognize #FF0000?
- This would be the RGB hex colour value for red (#FF0000). Other uses include IPv6, MAC & memory addresses

### Hexadecimal

- Question: do you think a computer actually stores hexadecimal numbers internally?
- No – it only stores binary – hexadecimal is just something humans can use, since it’s easier for us to understand
- e.g. 5F9A is shorter & easier to understand than 0101111110011010

### Hexadecimal

- Using the same approach as we have used with binary and denary, do you know how we could calculate the denary value of the hexadecimal digits 99?
- (9 * 161) + (9 * 160) = 153

### Hexadecimal

- Do you recognise any of these numbers?
- They also appeared in the binary  denary table
- Do you know why base-2 and base-16 are related?
- Because 2 can be multiplied by itself to make 16 – i.e. 24 = 16
- Likewise, base-3 and base-9 would share place values too

| 165 | 164 | 163 | 162 | 161 | 160 |
| --- | --- | --- | --- | --- | --- |
| 1,048,576 | 65,536 | 4,096 | 256 | 16 | 1 |

### Hexadecimal

- What is the relationship between the hexadecimal powers vs the binary powers for the same denary value?
- The binary value is multiplied by 4 – this is because 24 = 16

| 165 | 164 | 163 | 162 | 161 | 160 |
| --- | --- | --- | --- | --- | --- |
| 1,048,576 | 65,536 | 4,096 | 256 | 16 | 1 |
| 220 | 216 | 212 | 28 | 24 | 20 |

### Hexadecimal

- Do you know a power rule in maths that proves this relationship?
- (am)n = amn
- i.e. 16 = 24, hence 164 = (24)4 = 216

| 165 | 164 | 163 | 162 | 161 | 160 |
| --- | --- | --- | --- | --- | --- |
| 1,048,576 | 65,536 | 4,096 | 256 | 16 | 1 |
| 220 | 216 | 212 | 28 | 24 | 20 |

### Hexadecimal

- As a result of this relationship between base-2, we will see that converting from binary to hexadecimal and vice-versa is relatively easy
- First though, let’s practice using the same method as before to convert some hexadecimal numbers to denary

### Hexadecimal to Denary: Practice

- 32

- FF

- ABCD

- 50

- 255

- 43981

- ?

- ?

- ?

| 163 | 162 | 161 | 160 |
| --- | --- | --- | --- |
| 4096 | 256 | 16 | 1 |
| 0 | 0 | 3 | 2 |
|  |  | 48 | 2 |

| 163 | 162 | 161 | 160 |
| --- | --- | --- | --- |
| 4096 | 256 | 16 | 1 |
| 0 | 0 | F | F |
|  |  | 240 | 15 |

| 163 | 162 | 161 | 160 |
| --- | --- | --- | --- |
| 4096 | 256 | 16 | 1 |
| A | B | C | D |
| 40960 | 2816 | 192 | 13 |

### Denary to Hexadecimal

- Again, we can use the same approach as we used converting denary to binary, but just in base-16…

### Denary to Hexadecimal

- Let’s convert the denary number 28 into hexadecimal:
- We need 2 hex digits to represent this:
- 28 / 161 = 1 remainder 12
- 12 / 160 = 12 = C
- Answer = 1C

### Denary to Hexadecimal: Practice

- 45

- 247

- 12345

- 2D

- F7

- 3039

- ?

- ?

- ?

| 163 | 162 | 161 | 160 |
| --- | --- | --- | --- |
| 4096 | 256 | 16 | 1 |
| 0 | 0 | 2 | D |

| 163 | 162 | 161 | 160 |
| --- | --- | --- | --- |
| 4096 | 256 | 16 | 1 |
| 0 | 0 | F | 7 |

| 163 | 162 | 161 | 160 |
| --- | --- | --- | --- |
| 4096 | 256 | 16 | 1 |
| 3 | 0 | 3 | 9 |

### Hexadecimal to Binary & Vice-Versa

- Converting between hexadecimal and binary is simpler than converting between hex and denary – this is because of the relationship between 2 and 16 (i.e. 24 = 16)
- What this means is that 1 hex digit = 4 bits

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
| A | 1010 |
| B | 1011 |
| C | 1100 |
| D | 1101 |
| E | 1110 |
| F | 1111 |

### Hexadecimal to Binary & Vice-Versa

- For example, if we have the hex value A47E, that would simply be:
- 1010 0100 0111 1110
- Likewise, we can easily reverse the process when going from binary to hex

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
| A | 1010 |
| B | 1011 |
| C | 1100 |
| D | 1101 |
| E | 1110 |
| F | 1111 |

### Hexadecimal to Binary: Practice

- 74B

- DEAD

- 8391C

- 0111 0100 1011

- 1101 1110 1010 1101

- 1000 0011 1001 0001 1100

### Binary to Hexadecimal: Practice

- 1111 0000 0000 1101

- 1100 1010 1111 1110

- 1010 0001

- F00D

- CAFE

- A1

### Task

- Write some random numbers:
- 2 1 byte binary numbers
- 2 2 digit hex number
- 2 denary numbers between 0 and 255
- Give these numbers to a classmate...

### Task

- Convert 1 binary number to denary & the other to hex
- Convert 1 hex number to denary & the other to binary
- Convert 1 denary number to binary and the other to hex
- Use a website like https://www.mathsisfun.com/binary-decimal-hexadecimal-converter.html to verify your answers are correct

## Numbers and Quantities

### Class Overview

- Numbers: integers and reals/floats
- Signed & unsigned
- Prefixes: Kilo, Mega, Giga, Tera
- Prefixes: Kibi, Mebi, Gibi, Tebi
- Converting between them

### Types of Numbers in a Computer

- There are various types of number that can be stored in a computer
- The reason for these different data types of due to efficiency – i.e. wanting to store as much relevant information in as few bits as possible
- For example, if we want to store a variable called NumberOfStudents, there is no point wasting some bits in memory to store a decimal point – it will be an integer (whole number) and relatively small

### Integers

- Have you heard the word “integer” used in maths? Do you know what it means?
- A whole number – e.g. 3 is an integer, but 3.1 isn’t
- Integers come in two forms – unsigned and signed.
- Sign refers to the plus or minus sign – i.e. +/-
- So an unsigned integer could be 3 (i.e. positive)
- While a signed integer could be +3 or -3

### Integers

- So:
- unsigned integers = positive only
- signed integers = positive or negative
- Note: the plus or minus value isn’t actually stored in the computer – the most significant bit in a signed integer is negative
- We’ll see how signed integers work later

### Fractions

- Although fractions like ½ are common in maths, they are not used (commonly) in computers
- Instead, computers simply use reals/floats (decimals) – i.e. 0.5
- It would, however, be possible to create a representation of fractions in a programming language, if you had a need to do so (e.g. for higher precision or creating educational software that demonstrated fractions)

### Decimals – Reals/Floats

- In computer science, decimals are called reals or floats (short for “floating point”)
- Examples: 3.14, 1.60, -4.75
- For AS, you aren’t required to know how they are represented in binary – however you do need to know the name of the data type – i.e. REAL in pseudocode

### Scientific/Standard Notation - Floats

- As you know from maths/physics, we can represent a number like 300,000,000 as 3x108
- This is called a floating-point number – since the decimal point (or with binary, binary point) can ‘float’ left or right, depending on the magnitude of the number
- As mentioned, floats also support non-integer numbers – that’s because 16 x 10-20 can be written as 1.6 x 10-19

### Quantities

- In maths/science, rather than saying 10,000 meters, we could simply say 10km
- What does the “k” mean?
- Kilo = 1000
- Let’s recall some of the others

### Quantities

- For computer science, these are the ones to remember:

- Note that “K” is sometimes written in lowercase – e.g. km

| Name | Prefix | Power of 10 | Value |
| --- | --- | --- | --- |
| Tera | T | x1012 | 1,000,000,000,000 |
| Giga | G | x109 | 1,000,000,000 |
| Mega | M | x106 | 1,000,000 |
| Kilo | K | x103 | 1,000 |

### Quantities

- So, how many bytes are in 1 kilobyte, megabyte, gigabyte and terabyte?
- 1,000     1,000,000   1,000,000,000   1,000,000,000,000
- How many bits are in 1 megabyte?
- 8,000,000
- How many bytes are in 1 gigabit?
- 125,000,000

### Quantities

- Note: a lower case b = bits; upper case B = bytes
- So MB = megabytes, while Mb = megabits
- When you bought your monthly phone package, what unit was likely used and why?
- Most likely Mb – since the number will be bigger…e.g…

### Quantities

- Imagine phone company A offers 20Gb of data at a speed of 2Mb per second. Now imagine company B offers 3GB at 0.5MB/s.
- Which company would the average person choose?
- Probably A – since the numbers seem bigger
- Which company actually offers a better deal?
- B – in bits, they offer 24Gb of data at a transfer speed of 4Mb/s
- Since 1 byte = 8 bits, to convert between one or the other, we either multiply or divide by 8

### Questions

- An .mp3 file is 18MB – how many bits is that?
- (18 * 1,000,000) * 8 = 144,000,000b
- An HD .mp4 movie averages 4Mb/s – how many gigabytes would a 2 hour movie use?
- (4 * 60 * 60 * 2 * 1,000,000) / (1,000,000,000 * 8) = 3.6GB
- Note: we could simplify the 1,000,000 / 1,000,000,000 to just be / 1000

### Questions

- Note: the exam is non-calculator, so would use simpler numbers that you can easily simplify – we will look at these questions in another video

### Problem

- For maths & science, they operate in base-10 – however for computers, they operate in base 2 – as such, some people would use alternate definitions – i.e.
- 1Ki = 1024 bytes (210)
- 1Mi = 1,048,576 bytes (220)
- 1Gi = 1,073,741,824 bytes (230)
- 1Ti = 1,099,511,627,776 bytes (240)
- Note how the powers increment by 10

### Solution

- Because of this 1024 vs 1000 confusion, a new set of units were introduced:

| Name | Prefix | Power of 2 | Value |
| --- | --- | --- | --- |
| kibi | Ki | x210 | 1,024 |
| mebi | Mi | x220 | 1,048,576 |
| gibi | Gi | x230 | 1,073,741,824 |
| tebi | Ti | x240 | 1,099,511,627,776 |

### Problem

- Rather than previously saying 1 gibibytes = 1,073,741,824 bytes (which is confusing/difficult to understand/remember), we could instead consider things in terms of the previous group – i.e.
- 1 kibibyte = 1024 bytes
- 1 mebibyte = 1024 kibibytes (10242)
- 1 gibibyte = 1024 mebibytes (10243)
- 1 tebibyte = 1024 gibibytes (10244) etc

### Questions

- You see a computer with a 16GiB of RAM and another with 16GB – how many bits does of RAM does each have?
- 16 * 230 * 8 = 137,438,953,472
- 16 * 109 * 8 = 128,000,000,000

### Questions

- You want to download an 800MB file – the server can send at 10GB/s and you can receive at 5MiB/s – how long will the download take?
- Convert 800MB to MiB = (800 * 1,000,000) / 220 = 762.939…
- Prev answer / 5 = 153 seconds = 2 minutes 33 seconds
- Note how the server speed here is irrelevant – we only care about the slower speed

### Task

- Find the storage size of your SSD/HDD, cache, remaining/used storage etc
- Perform various conversion – e.g. if you have 752GiB worth of storage remaining on your HDD/SSD, how many TiB/b/MB etc is that
- Use to check: https://ss64.com/convert.html

## Internal Coding of Numbers

### Class Overview

- Representing negative binary numbers
- Signed magnitude, one’s complement, two’s complement
- Advantages/disadvantages of each

### Internal Coding of Numbers

- This chapter will focus on integers – chapter 16 in A2 will focus on floating/fixed point numbers

### Signed vs Unsigned

- We mentioned the terms “signed” and “unsigned” numbers (could be integers, reals/floats etc) – do you remember the difference?
- Unsigned = no sign (+ or -), hence positive by default
- Signed = positive or negative

### Two’s Complement vs One’s Complement vs Signed Magnitude

- Traditionally, there have been 3 different approaches to represent the sign of a number:
- Signed magnitude
- One’s complement
- Two’s complement
- The book mentions all 3 – these days, 99.99999% of devices use two’s complement

### Signed magnitude

- The simplest method for humans to understand – the most significant bit is simply the sign bit – 0 = positive; 1 = negative
- For example, using 4 bits:

- Again:
- 0 is +
- 1 is -

| 6 | 0 | 1 | 1 | 0 |
| --- | --- | --- | --- | --- |
| -6 | 1 | 1 | 1 | 0 |

### Signed magnitude

- What do the words “sign” and “magnitude” mean?
- Sign is whether the number is positive or negative
- Magnitude is the ‘size’ of the number – equivalent to the absolute value
- i.e. the magnitude of 5 = |-5|
- This is why it’s called “signed magnitude” – since it words by simply adding a sign in front of the magnitude (this is how we write numbers on paper too…though we omit the plus sign – i.e. we write +5 as simply 5)

### Signed magnitude: questions

- ?

- ?

- ?

| 7 | 0 | 1 | 1 | 1 |
| --- | --- | --- | --- | --- |
| -7 | 1 | 1 | 1 | 1 |

| 79 | 0 | 1 | 0 | 0 | 1 | 1 | 1 | 1 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| -79 | 1 | 1 | 0 | 0 | 1 | 1 | 1 | 1 |

| 104 | 0 | 1 | 1 | 0 | 1 | 0 | 0 | 0 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| -104 | 1 | 1 | 1 | 0 | 1 | 0 | 0 | 0 |

### Signed magnitude

- Do you remember the biggest number we could represent with 8 bits using an unsigned representation?
- 28 – 1 = 255
- When dealing with 8-bit unsigned numbers, how many bits contributed to the magnitude? How many bits contribute for the magnitude in signed magnitude?
- Unsigned = all 8 bits used for magnitude
- Signed-magnitude: 7 bits used for magnitude (since 1 bit used for sign)

### Signed magnitude

- Hence, what would be the biggest and smallest (i.e. most negative) number with could represent with 8 bit signed magnitude
- Biggest = 127 = 01111111
- Smallest = -127 = 11111111
- What would be a formula to represent the biggest/smallest numbers using n-bits for signed magnitude?
- ±2n-1 - 1

### Signed magnitude

- While it may seem like signed magnitude solves the problem of representing negative numbers, signed magnitude doesn’t work well for arithmetic – let’s try the calculation 5 + (-5) – what would we expect the answer to be in binary?

- Expected answer: 0 = 0000
- Hence, arithmetic doesn’t work with signed magnitude…so we need a different approach…

| Carry | 1 |  | 1 |  |
| --- | --- | --- | --- | --- |
| 5 | 0 | 1 | 0 | 1 |
| -5 | 1 | 1 | 0 | 1 |
| = | 0 | 0 | 1 | 0 |

### Signed magnitude

- Question: what do the numbers 0000 and 1000 represent?
- +0 and -0 – it’s both wasteful and strange that there are 2 representations of zero
- This is also one reason that causes arithmetic not to work correctly with signed magnitude
- It is possible to design circuitry to correctly perform signed magnitude arithmetic – but it is complex, inefficient and more expensive than the best alternative (two’s complement)

### One’s complement

- We saw signed magnitude had 2 issues – another approach was developed to try to solve this
- One’s complement simply means flipping/inverting/negating the bits to convert from positive to negative and vice-versa – for example:
- 5 = 0101
- -5 = 1010
- Note: there is no sign bit – all bits contribute to the magnitude

### One’s complement: questions

- ?

- ?

- ?

| 3 | 0 | 0 | 1 | 1 |
| --- | --- | --- | --- | --- |
| -3 | 1 | 1 | 0 | 0 |

| 26 | 0 | 0 | 0 | 1 | 1 | 0 | 1 | 0 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| -26 | 1 | 1 | 1 | 0 | 0 | 1 | 0 | 1 |

| 107 | 0 | 1 | 1 | 0 | 1 | 0 | 1 | 1 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| -107 | 1 | 0 | 0 | 1 | 0 | 1 | 0 | 0 |

### One’s Complement Arithmetic

- While it may seem like one’s complement solves the problem of representing negative numbers, one’s complement also doesn’t work well for arithmetic – let’s try the calculation 5 + (-5) – what would we expect the answer to be in binary?

- Expected answer: 0 = 0000
- 1111 is a strange answer…but technically not wrong in one’s complement

| Carry |  |  |  |  |
| --- | --- | --- | --- | --- |
| 5 | 0 | 1 | 0 | 1 |
| -5 | 1 | 0 | 1 | 0 |
| = | 1 | 1 | 1 | 1 |

### One’s Complement – Zero?

- How would you represent 0 in one’s complement?
- There are actually 2 ways – 0000 and 1111
- i.e. a +0 and a -0 – again, this is redundant and is why the arithmetic doesn’t work
- If you try some more additions in one’s complement, you’ll notice the answer is always 1 less than what it should be – i.e. something like 9 + -3 would equal 5, not 6
- 9           = 1001
- -3          = 1100
- answer = 0101

### One’s complement

- We said 1’s complement will result in an error by -1 for arithmetic
- If you looks at 2’s compliment, the negative values are +1 compared to 1’s compliment – there is also only 1 zero and -8

| Decimal | Signed magnitude | 1’s compliment | 2’s compliment |
| --- | --- | --- | --- |
| 7 | 0111 | 0111 | 0111 |
| 6 | 0110 | 0110 | 0110 |
| 5 | 0101 | 0101 | 0101 |
| 4 | 0100 | 0100 | 0100 |
| 3 | 0011 | 0011 | 0011 |
| 2 | 0010 | 0010 | 0010 |
| 1 | 0001 | 0001 | 0001 |
| 0 | 0000 | 0000 | 0000 |
| -0 | 1000 | 1111 |  |
| -1 | 1001 | 1110 | 1111 |
| -2 | 1010 | 1101 | 1110 |
| -3 | 1011 | 1100 | 1101 |
| -4 | 1100 | 1011 | 1100 |
| -5 | 1101 | 1010 | 1011 |
| -6 | 1110 | 1001 | 1010 |
| -7 | 1111 | 1000 | 1001 |
| -8 |  |  | 1000 |

### Two’s Complement

- Now we’ll look at two’s complement – this is what is actually used in 99.99999% of modern computers
- This approach works by making the most significant bit negative – for example, with 4 bits, 5 and -5 would be represented as:

- 4 + 1 = 5

- -8 + 2 + 1 = -5

|  | -8 | 4 | 2 | 1 |
| --- | --- | --- | --- | --- |
| 5 | 0 | 1 | 0 | 1 |
| -5 | 1 | 0 | 1 | 1 |

### Two’s Complement Arithmetic

- Let’s again try 5 + -5 (i.e. 5 – 5), this time using the two’s complement representation

- As we can see, arithmetic with two’s complement works
- Hence, this is what computers actually use

| Carry | 1 | 1 | 1 |  |
| --- | --- | --- | --- | --- |
| 5 | 0 | 1 | 0 | 1 |
| -5 | 1 | 0 | 1 | 1 |
| = | 0 | 0 | 0 | 0 |

### Two’s Complement

- Suppose we want to represent -102 in two’s complement – what would the value of the most significant bit be/how many bits would we need?
- -128 – so we need 8 bits
- Our logic can be -128 + n = -102
- n would be 26 – so we need the other 7 bits to add up to 26

|  | -128 | 64 | 32 | 16 | 8 | 4 | 2 | 1 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| -102 | 1 | 0 | 0 | 1 | 1 | 0 | 1 | 0 |

### Two’s Complement

- ?

- ?

- ?

|  | -8 | 4 | 2 | 1 |
| --- | --- | --- | --- | --- |
| -7 | 1 | 0 | 0 | 1 |

|  | -128 | 64 | 32 | 16 | 8 | 4 | 2 | 1 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| -35 | 1 | 1 | 0 | 1 | 1 | 1 | 0 | 1 |

|  | -128 | 64 | 32 | 16 | 8 | 4 | 2 | 1 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| -76 | 1 | 0 | 1 | 1 | 0 | 1 | 0 | 0 |

### Two’s Complement – Converting from Positive to Negative

- To convert from a positive number – say 12 – to it’s negative equivalent – i.e. -12, we simply “flip the bits & add 1” – so remember this rule
- When thinking about one’s compliment, do you know why we need to add 1 for two’s complement?
- Since arithmetic answers in one’s compliment were always off by -1 – so if we add 1, the answer will be correct

### Two’s Complement – Converting from Positive to Negative

- Let’s try converting from 12 to -12 – how many bits do we need?

- Now we need to add 1

- -16 + 4 = -12
- so it’s correct

|  | -16 | 8 | 4 | 2 | 1 |
| --- | --- | --- | --- | --- | --- |
| 12 | 0 | 1 | 1 | 0 | 0 |
| Flip bits | 1 | 0 | 0 | 1 | 1 |

| Carry |  |  | 1 | 1 |  |
| --- | --- | --- | --- | --- | --- |
| Flipped | 1 | 0 | 0 | 1 | 1 |
| Add 1 | 0 | 0 | 0 | 0 | 1 |
| = | 1 | 0 | 1 | 0 | 0 |

### Two’s Complement – Converting from Positive to Negative

- We have seen that 12 and -12 are 01010 and 10100 respectively when using 5 bits – what would they be if we used 8 bits?
- 0000 1010 and 1111 0100
- Note how leading 0s for a positive number are redundant – but let’s check leading 1s for the negative value too
- 1111 0100 = -128 + 64 + 32 + 16 + 4 = -128 + 116 = -12

### Two’s Complement – Converting from Positive to Negative

- Hence, we can say:
- Positive numbers: leading zeros have no effect:
- 0112 = 0000000112 = 310
- Negative numbers: leading ones have no effect:
- 1012 = 111111012 = -310

### Two’s Complement – Converting from Positive to Negative

- Using the “flip the bits & add 1” method, convert the following positive numbers to negative – answers should use 1 byte
- 17  -17
- 48  -48
- 90  -90
- -17 = 1110 1111
- -48 = 1101 0000
- -90 = 1010 0110

### Two’s Complement – Converting from Positive to Negative

- Do you think this ‘flip the bits & add 1’ method would work going from negative  positive?
- Try it – convert 6 to -6 and back to 6
- It does – so this method can be used to convert a two’s complement number from positive to negative and vice-versa

### Two’s Complement – Converting from Positive to Negative

- So far, there have been two methods to calculate the binary representation of a negative denary number in two’s complement
- Do it directly – the most-significant bit is negative, the rest are positive
- Take the positive binary two’s complement value, then ‘flip the bits & add 1’
- There is also 1 other method you can use – sometimes this has been given as a programming task in the exam

### Two’s Complement – Converting from Positive to Negative

- Start from right & go left
- Keep all bits the same, until & including the first ‘1’ you see
- After the first ‘1’, then flip all remaining bits
- This is actually just doing the same as the ‘flip the bits & add 1’ method, but it does it more directly
- 0110 = 6
- 1010 = -6
- flip bits | first 1 | keep same

### Two’s Complement – Converting from Positive to Negative

- If we know the binary value, this method is very quick – again, it works from positive to negative and negative to positive

- 0111
- 10000001
- 11100000
- 00110000

- 1001
- 01111111
- 00100000
- 11010000

## If they say unsigned binary, however, it means the most significant bit will be positive

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

## Internal Coding of Text

### Class Overview

- Character sets: ASCII & Unicode
- Standard vs Extended ASCII
- UTF-8, UTF-16 & UTF-32
- ASCII codes of some common characters
- Why some languages use more storage space

### Internal Coding of Text

- As mentioned – numbers, images, videos, sound, text, programs etc all have to be stored as binary
- Therefore we need a representation of characters in binary – these are ASCII and, later, Unicode character sets
- Character set: a collection of characters whereby each character is represented with a unique binary code

### ASCII

- Stands for American Standard Code for Information Interchange
- Standardised by ANSI (American National Standards Institute) in 1963
- There are 2 versions – 7-bit (standard) ASCII and 8-bit (extended) ASCII
- Every bit pattern is used to represent a character – how many characters would be able to be represented by both versions?
- Standard (7-bit) ASCII = 128 characters (27)
- Extended (8-bit) ASCII = 256 characters (28)

### ASCII Art

- Unrelated – but most people have probably seen ASCII art in online comments etc
- If you zoom in, you can see this image is made just from 2 characters – ‘0’ and ‘1’

### There are 32 non-printable ASCII characters (0-31) – 13 are shown here
These include things like tabs, new lines (\n = line feed), backspace, null characters etc

| DEC | OCT | HEX | BIN | Symbol | HTML Number | HTML Name | Description |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0 | 000 | 00 | 00000000 | NUL | &#000; |  | Null char |
| 1 | 001 | 01 | 00000001 | SOH | &#001; |  | Start of Heading |
| 2 | 002 | 02 | 00000010 | STX | &#002; |  | Start of Text |
| 3 | 003 | 03 | 00000011 | ETX | &#003; |  | End of Text |
| 4 | 004 | 04 | 00000100 | EOT | &#004; |  | End of Transmission |
| 5 | 005 | 05 | 00000101 | ENQ | &#005; |  | Enquiry |
| 6 | 006 | 06 | 00000110 | ACK | &#006; |  | Acknowledgment |
| 7 | 007 | 07 | 00000111 | BEL | &#007; |  | Bell |
| 8 | 010 | 08 | 00001000 | BS | &#008; |  | Back Space |
| 9 | 011 | 09 | 00001001 | HT | &#009; |  | Horizontal Tab |
| 10 | 012 | 0A | 00001010 | LF | &#010; |  | Line Feed |
| 11 | 013 | 0B | 00001011 | VT | &#011; |  | Vertical Tab |
| 12 | 014 | 0C | 00001100 | FF | &#012; |  | Form Feed |
| 13 | 015 | 0D | 00001101 | CR | &#013; |  | Carriage Return |

## So note how you wouldn’t actually see these characters when you read the email – but they are included in the email transmission for the email client to parse/display the email

### Then there are some of the common punctuation/symbols

| DEC | OCT | HEX | BIN | Symbol | HTML Number | HTML Name | Description |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 32 | 040 | 20 | 00100000 |  | &#32; |  | Space |
| 33 | 041 | 21 | 00100001 | ! | &#33; |  | Exclamation mark |
| 34 | 042 | 22 | 00100010 | " | &#34; | &quot; | Double quotes (or speech marks) |
| 35 | 043 | 23 | 00100011 | # | &#35; |  | Number |
| 36 | 044 | 24 | 00100100 | $ | &#36; |  | Dollar |
| 37 | 045 | 25 | 00100101 | % | &#37; |  | Per cent sign |
| 38 | 046 | 26 | 00100110 | & | &#38; | &amp; | Ampersand |
| 39 | 047 | 27 | 00100111 | ' | &#39; |  | Single quote |
| 40 | 050 | 28 | 00101000 | ( | &#40; |  | Open parenthesis (or open bracket) |
| 41 | 051 | 29 | 00101001 | ) | &#41; |  | Close parenthesis (or close bracket) |
| 42 | 052 | 2A | 00101010 | * | &#42; |  | Asterisk |
| 43 | 053 | 2B | 00101011 | + | &#43; |  | Plus |
| 44 | 054 | 2C | 00101100 | , | &#44; |  | Comma |
| 45 | 055 | 2D | 00101101 | - | &#45; |  | Hyphen |
| 46 | 056 | 2E | 00101110 | . | &#46; |  | Period, dot or full stop |
| 47 | 057 | 2F | 00101111 | / | &#47; |  | Slash or divide |

### Sometimes the exam includes questions that require you to know that 0 has a denary value of 48 in ASCII – if you remember that, figuring out another number is easy – they just increment – 0 = 48, 1 = 49, 2 = 50 etc
Note: these values are just used for when numbers are stored as text – when a number is stored as an integer for arithmetic, its two’s complement value would be used

| DEC | OCT | HEX | BIN | Symbol | HTML Number | HTML Name | Description |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 48 | 060 | 30 | 00110000 | 0 | &#48; |  | Zero |
| 49 | 061 | 31 | 00110001 | 1 | &#49; |  | One |
| 50 | 062 | 32 | 00110010 | 2 | &#50; |  | Two |
| 51 | 063 | 33 | 00110011 | 3 | &#51; |  | Three |
| 52 | 064 | 34 | 00110100 | 4 | &#52; |  | Four |
| 53 | 065 | 35 | 00110101 | 5 | &#53; |  | Five |
| 54 | 066 | 36 | 00110110 | 6 | &#54; |  | Six |
| 55 | 067 | 37 | 00110111 | 7 | &#55; |  | Seven |
| 56 | 070 | 38 | 00111000 | 8 | &#56; |  | Eight |
| 57 | 071 | 39 | 00111001 | 9 | &#57; |  | Nine |

### With this logic, what would the denary value of 8 be in ASCII?

| DEC | OCT | HEX | BIN | Symbol | HTML Number | HTML Name | Description |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 48 | 060 | 30 | 00110000 | 0 | &#48; |  | Zero |
| 49 | 061 | 31 | 00110001 | 1 | &#49; |  | One |
| 50 | 062 | 32 | 00110010 | 2 | &#50; |  | Two |
| 51 | 063 | 33 | 00110011 | 3 | &#51; |  | Three |
| 52 | 064 | 34 | 00110100 | 4 | &#52; |  | Four |
| 53 | 065 | 35 | 00110101 | 5 | &#53; |  | Five |
| 54 | 066 | 36 | 00110110 | 6 | &#54; |  | Six |
| 55 | 067 | 37 | 00110111 | 7 | &#55; |  | Seven |
| 56 | 070 | 38 | 00111000 | 8 | &#56; |  | Eight |
| 57 | 071 | 39 | 00111001 | 9 | &#57; |  | Nine |

### Likewise, the upper case letters follow the same pattern – starting with ‘A’ at denary value 65, with ‘Z’ at 90 – again, you need to remember ‘A’ = 65

| DEC | OCT | HEX | BIN | Symbol | HTML Number | HTML Name | Description |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 65 | 101 | 41 | 01000001 | A | &#65; |  | Uppercase A |
| 66 | 102 | 42 | 01000010 | B | &#66; |  | Uppercase B |
| 67 | 103 | 43 | 01000011 | C | &#67; |  | Uppercase C |
| … | … | … | … | … | … |  | … |
| 88 | 130 | 58 | 01011000 | X | &#88; |  | Uppercase X |
| 89 | 131 | 59 | 01011001 | Y | &#89; |  | Uppercase Y |
| 90 | 132 | 5A | 01011010 | Z | &#90; |  | Uppercase Z |

### Again, for lower case, remember that ‘a’ is 97 in denary – hence ‘z’ will be +25 = 122

| DEC | OCT | HEX | BIN | Symbol | HTML Number | HTML Name | Description |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 97 | 141 | 61 | 01100001 | a | &#97; |  | Lowercase a |
| 98 | 142 | 62 | 01100010 | b | &#98; |  | Lowercase b |
| 99 | 143 | 63 | 01100011 | c | &#99; |  | Lowercase c |
| … | … | … | … | … | … |  | … |
| 120 | 170 | 78 | 01111000 | x | &#120; |  | Lowercase x |
| 121 | 171 | 79 | 01111001 | y | &#121; |  | Lowercase y |
| 122 | 172 | 7A | 01111010 | z | &#122; |  | Lowercase z |

### Do you notice a relationship of the binary values between the corresponding lowercase  uppercase letter

- [Bits are always counted from right-to-left]
- The 6th bit is a 0 in the uppercase version…but a 1 in the lowercase version
- This is because bit 6 = 32 (and 97 – 65 = 32)
- This also means the 2nd hex digit is 2 greater in the lowercase version than the uppercase version – i.e. 41  61

| DEC | OCT | HEX | BIN | Symbol |
| --- | --- | --- | --- | --- |
| 97 | 141 | 61 | 01100001 | a |
| 98 | 142 | 62 | 01100010 | b |
| 99 | 143 | 63 | 01100011 | c |
| … | … | … | … | … |
| 120 | 170 | 78 | 01111000 | x |
| 121 | 171 | 79 | 01111001 | y |
| 122 | 172 | 7A | 01111010 | z |

| DEC | OCT | HEX | BIN | Symbol |
| --- | --- | --- | --- | --- |
| 65 | 101 | 41 | 01000001 | A |
| 66 | 102 | 42 | 01000010 | B |
| 67 | 103 | 43 | 01000011 | C |
| … | … | … | … | … |
| 88 | 130 | 58 | 01011000 | X |
| 89 | 131 | 59 | 01011001 | Y |
| 90 | 132 | 5A | 01011010 | Z |

### Example

- We can use an online tool like https://www.toptal.com/developers/keycode to see details about the keys we pressed
- Note: this gives 65 as the keycode for both ‘A’ and ‘a’ – but ‘a’ should be 97. So be careful about that

### Example

- Let’s look at a real file – I saved some text using Notepad and setting the encoding option to extended ASCII
- [Notepad calls this ANSI, but for the exam, this is just extended (8-bit) ASCII]

### Example

- We can then use a hex editor to see the binary contents (displayed in hex) of any file – I will use a program called HxD, though there are many online hex editors too
- We see there are two bytes in the file – 48 & 69 – note these are HEX values, not denary
- We said that extended ASCII uses 1 byte (8 bits) per character, so what would the text content of this file be?

### Example

- 4816 = 7210= ‘H’
- 6916 = 10510 = “i”
- So the message was “Hi” – and it used just 2 bytes

### Example

- Now let’s try saving “你好” using ASCII – what do you think will happen?

- We get an error – remember, extended ASCII only supports 256 characters
- So characters from most languages, scientific/mathematical symbols, even emojis like 🎂 can’t be represented with ASCII

### Example

- Challenge: what are the contents of this file?
- 0
- A
- a
- 0D and 0A represent the carriage return and line-feed (new line) respectively

### Unicode

- To offer more than 256 characters, Unicode was introduced
- Unicode can represent all characters in every language, all mathematical/scientific symbols, all emojis etc
- In fact, there are even many symbols in Unicode which no one in the world knows what they are – but because they were written once in a textbook from 1800, they’re included
- Currently, there are 144,697 characters in Unicode – with room for over 1.1 million

### Unicode

- Unicode offers variable-length schemes – characters will be represented by between 1 to 4 bytes

- UTF = Unicode Transformation Format
- You don’t need to remember the full name – only that UTF = Unicode

### Unicode

- Note: all schemes can represent ALL Unicode characters
- UTF-16 & UTF-32: fast to get specific character(s) at an index/in a range due to fixed-size; in contrast UTF-8 requires searching through entire string

- UTF-8: uses less space, especially when working with e.g. Latin alphabetic characters, numbers etc, since they are also ASCII characters are only require 1 byte

### Unicode

- For UTF-8, characters can be between 1-4 bytes - bytes start with the fixed pattern shown below, so that decoders can determine the which bytes are for what character/when a new character starts/ends

- While this is in the book, it’s never been asked on the exam

### Example

- Let’s  try saving “你好” using UTF-8 this time

- You can see each character takes 3 bytes – for reference, 🎂 uses 4 bytes

### Text Encoding Summary

- Character set: collection of characters where each character has a unique binary code – ‘0’ = 48, ‘A’ = 65, ‘a’ = 97
- ASCII:
- Older
- Two versions: standard (7-bit) and extended (8-bit) can represent 128 & 256 characters accordingly
- Unicode:
- Can represent all characters
- Uses between 1-4 bytes per character

## Images

### Class Overview

- Categories of image: bitmap & vector
- Vector & bitmap uses
- Key terms: resolution, colour depth, pixel, element, drawing list etc
- Calculating image file size
- Image header

### Images

- There are 2 categories of images we will look at:
- Bitmap
- Vector
- Bitmaps you are probably familiar with – common file formats include: jpg, png, gif, tiff, bmp, webp, avif etc
- Vectors possibly not – svg

### Bitmaps

- Consist of individual picture elements – pixels
- Pixel: the smallest unit of an image or graphic that can be displayed on a digital device
- Each pixel has a colour value – could be RGB, black & white etc
- For example, an RGB value of FF0000 = 255 red, 0 green & 0 blue
- Resolution = number of pixels in image (i.e. higher resolution = higher quality)
- Bitmaps can be considered a 2D array (matrix) of pixels
- Bit depth/colour depth = number of bits to represent colour for each pixel

## Note how since this is white, we have all sub pixels on – i.e. FFFFFF

### Bitmap Example

- Here is a zoomed-in picture – each grid cell represents 1 pixel
- What is the resolution of this image?
- 10x10
- How many bits do you think would be needed to represent black & white image?
- Only 1  - e.g. 0 = black; 1 = white

### Bitmap Example

- What would the colour/bit depth of this image be?
- 1
- Can you then figure out the file size of an image? And can you figure out the formula?
- Intuitively: num pixels * size of each pixel
- Specifically = resolution * bit depth
- = (10 * 10) * 1 = 100bits

### Colour Bitmaps

- As mentioned, coloured bitmap images often use 6 hex digits like FFFF00 – how many bits are being used? And do you know what colour this would be?
- 1 hex digit = 4 bits. So 6 hex digits = 24 bits
- 255 red, 255 green & 0 blue – so the pixel would be yellow

- What colour would FFFF00 be?

### Colour Bitmaps

- As well as 24-bit RGB, 32-bit RGBA is also common
- The ‘A’ stands for “alpha” which is the opacity – i.e. 00 = completely transparent, while FF = completely opaque

### Colour Bitmaps

- We can actually use any number of bits for each pixel
- Here are 3 images with a different number of available colours and bit/colour depth – the file sizes are also listed

- 4 colours
- 4 bits per pixel
- (2 bits not supported)
- 337KB

- 50 colours
- 8 bits per pixel
- 817KB

- 16,777,216 colours
- 24 bits per pixel
- 2,676KB (2.676MB)

### Colour Bitmaps

- We can see the differences more if we view them in full screen
- All images have a resolution of 1170x780px

## 337KB

## 817KB

## 2,676KB (2.676MB)

### Colour Bitmaps

- Just by experimenting, using 256 colours was quite good – using 256 colours also used a similar file size to using 50 colours – do you have any ideas why?
- The .bmp image format supports bit depths of 1, 4, 8, 16, 24 & 32 – 50 colours is too many for 4 bits (only supports 24 = 16 different colours), so both would be stored using 8 bits (max 256 different colours)
- The 256 colour version was slightly bigger (894KB vs 817KB), but that’s because it couldn’t be compressed as much with run-length encoding

### Colour Bitmaps

- We have seen a picture of grass using only 4 different colour values – how do you think a more colourful image would appear, if using only 4 different colours?

- 4 colours
- 4 bits per pixel
- 337KB

- 4 colours
- 4 bits per pixel
- 289KB

- 16,777,216 colours
- 24 bits per pixel
- 2676KB (2.676MB)

- As you can see, reducing the colour depth on an image with many similar colours is ok – reducing it too much on an image with many different colours isn’t

### Image Headers

- Many file types – both images and others - .jpg, .png, .mp3, .mp4, .exe, .doc, .pdf, .gif etc contain headers
- A header is additional information at the start of the file that often defines metadata (some files also include trailers/footers too – additional metadata at the end of the file)
- Let’s see the kinds of things stored in an image header

| Header | Image Data |
| --- | --- |

### Image Headers

- What additional data do you think might be contained within the image header?
- File type
- Resolution
- Bit depth
- Title
- Description
- Camera used
- Geolocation
- Time taken
- Program used
- etc

### Image Headers

- For example, here is a 1x1 white pixel – you would assume the file size would be small - yet it is over 8KB (equivalent to 8,000 extended ASCII characters)
- In this small section, can you notice anything in the decoded text?
- It says the image was saved with Photoshop 21.1 (Windows) and includes the date/time

- Resolution, bit depth, colour profile etc are also included
- All .jpg files start FF D8 FF – change these bytes & programs won’t know it’s a .jpg, hence won’t be able to display it – these are called “Magic Bytes”

### Calculating Image Size

- Do you remember the formula/method to calculate the filesize of an image?
- Image filesize = resolution * bit depth
- What unit will this answer be in?
- Bits – so you’d then need to convert to an appropriate unit/the unit the question specifies

### Colour Bitmaps

- We said this picture of grass was 337KB, with a bit depth of 4 and resolution of  1170x780px – ignoring the size of image headers, by how many KB has this image been compressed due to run-length encoding?

- Expected number of bits (b):
- 1170 * 780 * 4 = 3,650,400
- In KB:
- 3,650,400 / (8 * 1000) = 456.3KB
- 456.3 – 337 = 119.3KB have been reduced due to run-length encoding

### Calculating Image Size

- A photographer takes a 5000x4000px image, with a bit depth of 32 – what would the expected size of the image be (ignoring compression/file headers) – give your answer in an appropriate unit
- 80MB or 76.3 MiB

### Calculating Image Size

- No calculator
- An RGBA image is 4096x512px – it’s saved using a bit depth of 32 bits. Calculate the file size of this image in Mebibytes
- (4096 * 512 * 32) / (1024 * 1024 * 8)
- Simplify by dividing each term: 4 * 0.5 * 4
- Final answer = 8MiB

### Questions

- A company has 50,000 photos at an average of 3MiB – they see a 200GB HDD for €60 and some 32GB USB memory sticks for €10 each – would they be better off buying the 1HDD or multiple USBs?
- Total file size in GB = ((50,000 * 3) * 220) / 109 = 157.3 GB
- 5 USBs required = €50, so the USBs would be slightly cheaper

### Vector Images

- Along with bitmaps, the other type of images are vectors
- Rather than being defined in terms of pixels, they are defined in terms of shapes, co-ordinates, properties etc
- For example, you can create ellipses (circles/ovals), rectangles/squares, polygons, lines, text etc
- The main advantages of vectors are a smaller file size for certain types of images (logos etc that can be comprised of shapes) and the fact you can scale to any size, without reducing image quality

### Vector Images

- Here is a smiley face and the code required to create it

- Note the elements like ellipse & path, their attributes like stroke-width, ry/rx (radius y/x), cy/cx (center y/x), stroke, fill etc and values

### Vector Terminology

- Element/drawing object: an individual component of a vector image
- Drawing list: the collection of all elements
- Attributes/properties: additional information about an element
- Value: value of an attribute/property
- <rect x="120" width="100" height="100" fill=“#f00” />
- <line x1="0" y1="80" x2="100" y2="20" stroke=“blue" />

### Bitmap vs Vector

- Can you tell which version is the bitmap version vs which is the vector?
- Probably not…but let’s zoom in

### Bitmap vs Vector

- The right is the vector image – no matter how much you zoom in/resize, image quality never decreases!
- This is because elements & properties are defined mathematically – we can just multiply by x & y scale factors

### Bitmap vs Vector

- What about the file size – both are 340x340px, but which do you think has a smaller file size?
- Bitmap = 16.3KB          Vector = 672 Bytes
- So how much smaller is the vector?
- About 24.3x!

- Note: this file size reduction would be even more extreme if they images were larger (e.g. 1920x1920px)

### Vector Example

- Vectors aren’t just for simple images – you can use software like Adobe Illustrator to create complex graphics too
- This car is only 91KB and again, could be scaled to the size of an advertising display on a sports stadium, without losing any image quality

### Vector Drawbacks?

- Can you think of any drawbacks with vectors? What if we wanted to store a complex image like a photo?
- Photos can’t be represented well with shapes – technically we could make every pixel a 1x1 square, but then you would go from something like this:
- Bitmap: 0000FF
- Vector: <rect x=“300“ y=“400” width=“1" height=“1" fill=“#00f”></rect>
- What would be size of each, for 1 pixel?
- Bitmap: 3 bytes ; Vector = 62 ASCII characters = 62 bytes
- …so representing photos as vectors would take up more space

### Vector Drawbacks?

- Something else to note is that many devices – screens, inkjet/laser printers etc can’t render vectors directly – they need to convert to a bitmap when displaying
- A graphics plotter/cutter is required to draw/cut-out a vector

## Assuming the file is saved optimally, what is the bit depth of a purely black & white image?

## When would it be better to use bitmaps and when would it be better to use vectors?

## Sound

### Class Overview

- Key terms: sample, sampling rate/frequency, sampling resolution/bit depth, channels, amplitude
- Quantisation
- Sampling rate & resolution’s effect on file size and quality
- Calculating file size of an audio clip
- Extra: Nyquist’s Theorem and Fourier Transforms

### Sound

- Sound is transferred as pressure waves & detected by our ear drums
- Each wave has a frequency & varying amplitude

### Sound

- Sound is analogue – i.e. a varying, continuous signal
- Computers can only understand digital (binary) data – so sound has to be quantized (rounded to a discrete level)

- Analogue signal
- Digital signal

### Quantisation

- Each discrete ‘step’ in the digital signal is called a quantisation level
- An analogue to digital converter (ADC) is required to convert the analogue signal to a digital signal

### Bit depth/sampling resolution & sampling rate/frequency

- Sample: a measurement of the amplitude of the sound at a given instance
- Sampling resolution/bit depth: number of bits per sample
- Sampling rate/sampling frequency: number of samples per unit time (e.g. per second)

### Bit depth/sampling resolution & sampling rate/frequency

- Assume this graph represents 1 second – what would the sampling rate & number of quantisation levels be?
- Sampling rate: 18Hz
- Quantisation levels: 13
- How many bits would be required to represent 13 quantisation levels?
- 4 (4 bits supports 24 = 16 quantisation levels) – i.e. the bit depth/sampling resolution is 4

### Bit depth/sampling resolution & sampling rate/frequency

- Assume this snapshot represents 0.002 seconds – there are 18 samples as mentioned. What would the sampling rate/frequency (i.e. number of samples per second?) and correct units be?
- 18 / 0.002 = 9000Hz
- i.e. in 1 second, the amplitude of the sound is recorded 9,000 times & each sample uses 4 bits to represent it

### Bit depth/sampling resolution & sampling rate/frequency

- Sampling rate = 9000Hz
- Bit rate = 4 bits
- Hence, what would the file size of a 3 minute audio recording be (give your answer in an appropriate unit)?
- 9000 * 4 * 3 * 60 = 6,480,000 bits total
- To MB: / (8 * 106) = 0.81MB
- Or in MiB, use 1024 = 0.77MiB

- Full conversion to MiB:
- (9000 * 4 * 3 * 60) / (8 * 1024 * 1024)

### Audio Quality & File Size

- What do you think happens to the audio quality & file size as the sampling resolution/bit depth is increased?
- Both increase
- How about if the sampling rate/sampling frequency increases?
- Again, both quality and filesize increase
- This is because the quantisation error is smaller – i.e. the sample values can more accurately match the real analogue signal

### Audio Channels

- Note: 2 audio channels means there will be a separate recording for each (left/right) speaker/headphone – hence you’d need to multiply your answer by 2, if an exam questions mentions there are 2 channels (exam assumes 1 channel by default)
- In the 2nd picture, even visually, we can see the left & right waveforms are different

### Audio Channels

- A single audio channel is called mono
- Sound with 2 channels is called stereo
- Multichannel/surround sound is also possible – e.g. surround sound 7.1 has 8 speakers, arranged as shown

### Bit depth/sampling resolution & sampling rate/frequency

- Using these settings when exporting audio – and assuming no compression – what would be the file size for a 4 ½ minute song? Use a sensible unit
- (44100 * 32 * 60 * 4.5 * 2) / (8 * 1000 * 1000)
- 95.3MB or 90.8MiB

### Sampling Rate

- What would be the problem if we sampled at too low a frequency?
- We wouldn’t accurately capture the waveform
- How about if we sampled at too high a frequency?
- The waveform would be accurate – but the file size would be unnecessarily large

## Aliasing: when the sound wave can’t be reconstructed accurately, due to sampling at too low a frequency

### Nyquist’s Thereom

- States that for a digital signal to be constructed accurately, the sampling rate must be at least 2x the maximum frequency
- So for audio designed for humans to hear, we can choose a sampling rate based on the frequency range that humans can hear – do you know what it is?
- About 20-20,000Hz
- Hence, what would a good sampling rate be, according to Nyquist?
- About double 20,000Hz (note: 44,000Hz is usually used…this is because a small number of people may be able to hear up to 22,000Hz, because audio filters have a bit of a run-off area & because if sampling at exactly 2x, you could take all your samples at 0 amplitude)

### Nyquist’s Thereom

- The animation shows the effect of increasing the number of samples taken – as you’d expect, the wave is more accurately represented

### Fourier Transforms

- This isn’t required for the exams, but maybe it’s interesting
- All wave types can be constructed from sine waves

- You can draw a random wave and this site (jezzamon.com/fourier/) will calculate the sine waves required to make it

### Aliasing

- We mentioned that taking too few audio samples results in aliasing – we also have the same effect with images – pixels aren’t small enough to represent the image accurately
- This is where images/games/videos etc use anti-aliasing – effectively blurring some of the edges, so it looks smoother, when the viewer views it at normal zoom

## Quantisation level: a distinct amplitude value that can be represented (increasing sampling resolution = more quantisation levels)

## Digital sample will more accurately represent original analogue wave – due to having more quantisation levels and a shorter duration between samples, the quantisation error will be reduced. However, more taking more samples and using more bits to store each sample will mean the file size will increase

## Videos

### Video

- According to the syllabus, videos are no longer on the syllabus (however, the book still recommends learning about it quickly…so let’s look at a few slides)
- [in old exam papers, video questions will occasionally be mentioned…but these questions shouldn’t come up in this new syllabus]

### Video

- Videos are effectively just many pictures just playing one after another – e.g. if a video is recorded at 30fps (frames per second), that simply means 30 images will be shown per second (i.e. for 1/30th of a second each)
- There are two types of video:
- Interlaced
- Progressive

### Video

- Progressive: shows whole video frame at once
- Interlaced: shows odd lines, then even lines, switching between them – old technology did this – why do you think that was?
- Due to low bandwidth availability

- Old TV stations had a choice: 15fps progressive would use as much data as 30fps interlaced. The fact it was interlaced was barely noticeable – but the higher fps was much more important for quality

### Video

- Video formats are advertised as followed:
- [vertical resolution][progressive/interlaced][frame rate]
- Often the frame rate is omitted – some valid examples:
- 1080p
- 720i
- 2160p60
- Note how modern formats are all progressive

### Video

- Assume the following:
- Video format: 1920x1080p60
- Image colour depth: 32
- No compression
- How many MiB would each second of video consume?
- = (1920 * 1080 * 60 * 32) / (8 * 1024 * 1024) = 474.6MiB/s
- Clearly, this is an unreasonable file size for 1s of video – which is why compression is so important – sometimes, videos can be compressed by 200x or more!

### Questions

- Now that same video (1920x1080p60 with a bit depth of 32 bits) can be compressed to 1/200th of its original size
- Calculate the size of a 2 hour video, writing your answer in a sensible base-2 based (e.g. kibi, mebi, gibi etc) unit
- 1 frame = (1920 * 1080 * 32) / 200 = 331,776 bits
- 2 hours = 331,776 * 60 * 60 * 60 * 2 = 143,327,232,000 bits
- 143,327,232,000 / (8 * 230) = 16.7GiB

## Compression

### Class Overview

- Advantages & disadvantages of compression
- Lossy & lossless compression
- Image, audio, video & text compression
- Run-length encoding
- Huffman coding

### Compression

- Compression: reducing the size of data
- We have mentioned text, images, sound & video – ideally, we want to be able to compress all of these formats
- For videos, it’s obvious why we want to compress
- Even for text (e.g. web pages – which are HTML/JavaScript/CSS – i.e. text), if we can halve the file size, that means the website will load twice as fast, the website owner will pay half as much for bandwidth, the Internet will be less clogged up etc

### Benefits of compression

- Can you think of some benefits of compression?
- Faster transmission (uploads/downloads/copying)
- Saves space on secondary storage (hard drive/SSD)
- Can send as an email/file attachment if otherwise too big
- Uses less bandwidth – e.g. on a monthly phone contract with 20GB per month
- Why don’t we compress everything – e.g. entire hard drive?
- Takes time to decompress – e.g. searching files requires entire HDD to be decompressed

### Lossy & Lossless Compression

- There are 2 categories a compression algorithm/approach can fall into:
- Lossy: data is lost – i.e. quality is reduced and can’t be recovered
- Lossless: data isn’t lost – i.e. quality stays the same/original can be reconstructed perfectly (but can’t be compressed as much)

### Run-Length Encoding

- If you look at this image, could you think of any way we could reduce its file size, without reducing its quality?
- There are a lot of repeated colours – rather than storing the colour of each pixel, we can store the number of repeated pixels of that colour, then the colour itself

### Run-Length Encoding

- The format is:
- [number of consecutive cells with same colour] [colour value]
- For example, this image may start something like
- 1000 blue
- 2 black
- 10 white
- 2 black
- 20 blue etc
- Note: colour values would be in binary

### Black & White vs Colour Images

- Do you remember how many bits we need per pixel to store a black & white image?
- Only 1 – e.g. black = 0; white = 1
- For colour, usually 8, 16, 24 or 32 bits would be used per pixel

### When does run-length encoding work well?

- Here are 4 images – how do you think they would be ordered in terms of file size, from smallest to biggest & why?

- 1st (32KB)
- Horizontal repeats & b&w = good for RLE

- 2nd (41KB)
- B&W = good
- RLE doesn’t work for vertical repeats = bad

- 3rd (68KB)
- Horizontal repeats = good
- Colour = bad

- 4th (593KB)
- Colour & low opportunity for RLE

### Run-length encoding & photos

- Likewise, do you think run-length encoding will work well for photos?

- No – since very few consecutive pixels will be identical
- e.g. #FFFFFF vs #FFFFFE, while they look the same to us, run-length encoding can’t be used

### Run-length encoding & photos

- So, with this said, do you think RLE is a lossy or lossless compression technique? (i.e. is some of the original data lost or not?)
- It’s lossless – e.g. if we have the RLE sequence 5 red, 10 orange, 3 blue, we can reconstruct the original perfectly

### Lossy Image Compression

- What was the formula for calculating an image’s filesize?
- resolution * colour depth
- Hence, how could we reduce the filesize of an image?
- By reducing either the resolution or colour (bit) depth of the image

### Lossless Audio Compression

- Huffman coding – we will look at this later
- It was originally developed for text compression – but can also be used for other formats too (since ultimately, all files are just 0’s & 1’s)

### Lossy Audio Compression

- Removing frequencies & low amplitudes inaudible to human ear – i.e. quiet sounds and very high/low frequencies
- Starting with an average amplitude, then storing the differences, rather than the actual value
- For example, assume we start at 50db – 50.1 and 49.9 could be represented and +0.1 and -0.1 respectively – this would use fewer bits

### Lossy Audio Compression

- Again, what is the formula for calculating the file size of an audio file?
- sampling rate * sampling resolution * channels * duration
- [note: in exam questions, the number of channels will usually be 1]
- So we could reduce any, to get a smaller output file
- i.e. halving sampling rate = half file size

### Lossless Video Compression

- Videos are combination of images & audio – so lossless image & audio compression can be used (e.g. RLE & Huffman coding)
- Sometimes frame doesn’t change (e.g. white text on black background playing for 10 seconds) – so we can store a frame, then the number of frames it should repeat for
- Parts of frame may only change slightly from frame 1  frame 2 – we can simply store the changes, rather than the whole frame

### Lossless Video Compression

- “A two hour long 4k UHD movie like you might find on Netflix would be 3400 GB” – yet using lossless compression, it can be shrunk to “about 50GB”
- We can compress this even further using lossy video compression, but of course we will lose video quality

### Video Lossy Compression

- Again, can you remember the formula for calculating a video’s file size?
- resolution * bit depth * frame rate * duration
- So, again, if we reduce any of the first 3, the file size will decrease
- We could also make the video twice as fast to halve the file size, but in most cases, we don’t want to change the video’s duration…

### Text Compression

- For images, videos & sound, we can use either a lossy or lossless compression approach – do you think this is also true for text?
- No – for example, you wouldn’t want to compress “Hello” and the decompressed version comes out as “Hell”
- For text, in 99.999% of cases, we want to be able to reconstruct the original exactly – hence we can only use lossless compression methods

### Huffman Coding

- Huffman coding takes advantage of the fact that some characters are more common than others
- Hence, rather than transmitting data as ASCII/Unicode, we can use shorter codes for the most common characters…and longer codes for the less common ones
- All known languages follow this 1/x pattern

### Huffman Coding

- We will encode/decode our text using Huffman Coding with the following site – you can try your own text too:
- https://www.dcode.fr/huffman-tree-compression

### Huffman Coding: Encoding

- Assume input text “Hello World”
- Create frequency table of number of occurrences of each character (case-sensitive)
- Assign Huffman codes to letters, with most common letters having shortest Huffman codes
- Replace letter with corresponding code
- i.e. 11101111101011000000111001010011
- Note: the generated Huffman codes are chosen so that there is only 1 possible decoding

| char | code |
| --- | --- |
| l | 10 |
| o | 110 |
| [space] | 000 |
| W | 001 |
| r | 010 |
| d | 011 |
| H | 1110 |
| e | 1111 |

### Huffman Coding: Encoding

- Suppose instead the following codes were chosen
- What would 0101 decode to?
- It could be “abab”, “abc”, “cc” or “cab”
- This is why the generated Huffman codes are clever – since even in a stream of millions of bits, there is only 1 possible decoding

| char | code |
| --- | --- |
| a | 0 |
| b | 1 |
| c | 01 |

### Huffman Coding: Decoding

- Assume input stream of
- 01100010100111101010001111110010111
- Start on the left and find the character each sequence corresponds to
- Go to the next bit in the sequence and repeat these two steps, until at the end of the sequence
- What was the original string?
- lossless text

| s | 10 |
| --- | --- |
| l | 011 |
| o | 000 |
| e | 110 |
| [space] | 001 |
| t | 111 |
| x | 010 |

### Huffman Coding: Uses

- Do you think Huffman coding is useful for short strings (e.g. someone’s first name)?
- No – since the table also has to be sent & would be bigger than the actual data
- For larger, typical text (documents, emails, webpages etc), Huffman encoding can often half the number of bytes

### Huffman Coding Example

- Generated 100 paragraphs of random words
- File size was 80KB
- Was compressed to 40KB with Huffman coding
- So in this case, we got a 50% compression ratio
- Can test with tools like https://craftyspace.net/huffman/ or https://www.dcode.fr/huffman-tree-compression

### Huffman Coding Example

- Which of these inputs do you think could be compressed the most? (all are 26 characters)

- abcdefghijklmnopqrstuvwxyz
- aaaaaaaaaaaaaaaaaaaaaaaaa
- 🦇🐺🐗🐴🦄🐝🪱🐛🦋🐌🐞🐜🪰🪲🪳🦟🦗🕷🕸🦂🐢🐍🦎🦖🦕🐙

- 26bytes to 48 ~2x increase
- 26 bytes to 6 bytes ~4x decrease
- 156 to 107 bytes ~1.5x decrease

### Questions

- Why did the emojis take up more bytes initially?
- Since they can’t be stored in ASCII (7 or 8 bits) – Unicode (UTF-8; 8-32 bits) is required
- Why was “aaa…aaa” able to be compressed the most?
- As every character was the same, they could be stored using a short Huffman code – there would be no characters with longer Huffman codes

### Questions

- What would happen to the compression ratio if we had longer text – e.g. we used the same set of 26 emojis, but had a text with 1000s of characters?
- It would improve – i.e. longer text = more repeats = better compression
- The initial overhead of storing the Huffman table is overtaken by the amount of compression we get

### Questions

- Suppose you had 2 strings:
- “aaabbb”
- “ababab”
- How would their compression ratio compare?
- It’d be the same – run-length encoding isn’t used for text, since in regular text you’d rarely have long sequences of identical characters (and overhead of storing counts would make file size increase)

### Huffman Coding for Audio

- Note: Huffman coding can also be used for audio – this is because some amplitudes will appear repeatedly

### Extension Task

- Use a hex editor like HxD to find the username/password for crackme.exe – change the username to “ABCDE” and the password to “1234”
- Tip: run the crackme.exe, type in a random password – the string in the error message is near to the username & password in the code – you can use CTRL + F to search for it in HxD

## Audio: reduce sampling rate/frequency/resolution/channels, remove inaudible amplitudes/frequencies, Huffman Coding

## A table mapping data to Huffman codes of the input data (e.g. text) is created and sent with the data – the most common values are given the shortest Huffman codes. The codes are generated using Huffman trees, so that there is only one possible decoding
