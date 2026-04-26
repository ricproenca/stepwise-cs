# Unit 1 - Information Representation Presentation

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