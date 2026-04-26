# Past Papers — Data Representation (1.1)

**Paper:** Paper 1 · Series: W21, S22, W22, S23, W23, S24, W24

---

## Paper 1 | W21/11 | Q1 | 9 marks

**Series/Year:** O/N 2021 · Variant 11

### Q1(a) — Binary magnitudes matching exercise [5 marks]

Draw one line from each binary value to its equivalent value on the right.

| Binary value | Equivalent |
|---|---|
| 8 bits | 1 byte |
| 8000 bits | 1 megabyte |
| 1000 kilobytes | 1 gigabyte |
| 1024 mebibytes | 1 gibibyte |
| 8192 bits | 1 kibibyte |

**Mark scheme answer:**
- 8 bits ↔ 1 byte
- 8000 bits ↔ (no match given — not matched to 1 megabyte in original qp, distractor)
- 1000 kilobytes ↔ 1 megabyte
- 1024 mebibytes ↔ 1 gibibyte
- 8192 bits ↔ 1 kibibyte

[1 mark per correct line, max 5]

**Objective matched:** Binary magnitudes, binary vs denary prefixes

---

### Q1(b)(i) — Binary addition [2 marks]

Perform the following binary addition. Show your working.

```
  10101010
+ 00110111
```

**Mark scheme answer:**
```
  1010 1010
+ 0011 0111
  1110 0001
  carry: 111 111
```
Result: 11100001

[1 mark for working; 1 mark for answer]

**Objective matched:** Perform binary addition

---

### Q1(b)(ii) — Overflow [1 mark]

State how an overflow can occur when adding two binary integers.

**Mark scheme answer:** The result is a larger number than can be stored in the given number of bits. // The result is greater than 255.

**Objective matched:** Show understanding of how overflow can occur

---

### Q1(c) — Hex to denary [1 mark]

Convert the hexadecimal value F0 into denary.

**Mark scheme answer:** 240

**Objective matched:** Convert an integer value from one base/representation to another

---

## Paper 1 | W22/11 | Q1 | 7+ marks

**Series/Year:** O/N 2022 · Variant 11

### Q1(a)(i) — Unsigned binary to denary [1 mark]

Convert the unsigned binary integer 00100111 into denary.

**Mark scheme answer:** 39

**Objective matched:** Convert between bases

---

### Q1(a)(ii) — BCD to denary [1 mark]

Convert the Binary Coded Decimal (BCD) 00100111 into denary.

**Mark scheme answer:** 27

*Note: The same 8-bit pattern 00100111 gives 39 in unsigned binary but 27 in BCD (0010 = 2, 0111 = 7).*

**Objective matched:** Show understanding of different number systems (BCD)

---

### Q1(a)(iii) — Two's complement to denary [1 mark]

Convert the 8-bit two's complement binary integer 11100111 into denary.

**Mark scheme answer:** −25

**Objective matched:** Convert an integer value from one base/representation to another; two's complement

---

### Q1(b) — Binary subtraction [2 marks]

Perform the following binary subtraction. Show your working.

```
  1 0 1 1 0 0 1 1
- 0 1 1 1 0 1 0 1
```

**Mark scheme answer (two's complement method):**
```
  1011 0011
+ two's complement of 01110101 = 10001011
= 1011 0011
+ 1000 1011
  (1) 0011 1110
```

Alternatively: direct subtraction gives 00111110 (62).

[1 mark for working; 1 mark for answer]

**Objective matched:** Perform binary subtraction

---

### Q1(c) — ASCII vs Unicode [3 marks]

Give one similarity and two differences between the ASCII and Unicode character sets.

**Mark scheme answer:**

Similarity (max 1):
- Both can use 8 bits
- Both represent each character using a unique code
- Unicode contains all the characters that ASCII contains // ASCII is a subset of Unicode

Differences (max 2):
- Unicode can go up to 32 bits per character whereas ASCII is 7 or 8 bits; Unicode can represent a wider range of characters than ASCII
- Different languages are represented using Unicode; ASCII is only for one language (English)

**Objective matched:** Show understanding of character data and character sets (ASCII, Unicode)

---

## Paper 1 | S22/11 | Q — Two's complement conversion [1 mark]

**Series/Year:** May/June 2022 · Variant 11

### Q(b) — Denary to two's complement [1 mark]

Convert the signed denary value −100 into an 8-bit two's complement binary integer.

**Mark scheme answer:** 10011100

*Working: +100 = 01100100 → invert → 10011011 → add 1 → 10011100*

**Objective matched:** Convert an integer value from one base/representation to another; two's complement

---

## Paper 1 | S23/11 | Q3(d) | 7 marks

**Series/Year:** May/June 2023 · Variant 11

### Q3(d)(i) — Kibibyte vs kilobyte [1 mark]

State the difference between a kibibyte and a kilobyte.

**Mark scheme answer:**
- Kibibyte is 1024 bytes and kilobyte is 1000 bytes
- Kibibyte is binary prefix and kilobyte is denary prefix

**Objective matched:** Show understanding of binary magnitudes and the difference between binary prefixes and decimal prefixes

---

### Q3(d)(ii) — Denary to BCD [1 mark]

Convert the denary number 964 into Binary Coded Decimal (BCD).

**Mark scheme answer:** 1001 0110 0100

**Objective matched:** Show understanding of different number systems (BCD)

---

### Q3(d)(iii) — Binary to hex [1 mark]

Convert the positive binary integer 11110010 into hexadecimal.

**Mark scheme answer:** F2

**Objective matched:** Convert an integer value from one base/representation to another

---

### Q3(d)(iv) — Two's complement range [2 marks]

Give the smallest and largest two's complement binary number that can be represented using 8 bits.

**Mark scheme answer:**
- Smallest: 10000000 (−128)
- Largest: 01111111 (+127)

**Objective matched:** Show understanding of two's complement

---

### Q3(d)(v) — Binary addition [2 marks]

Add the following two binary integers using binary addition. Show your working.

```
  10110000
+ 00011011
```

**Mark scheme answer:**
```
  1011 0000
+ 0001 1011
= 1100 1011
```

[1 mark for working; 1 mark for answer]

**Objective matched:** Perform binary addition

---

## Paper 1 | W23/12 | Q3 | 5 marks

**Series/Year:** O/N 2023 · Variant 12

### Q3(a) — Kibibyte vs megabyte [1 mark]

State one difference between a kibibyte and a megabyte.

**Mark scheme answer:**
- kibibyte = 1,024 bytes (2¹⁰ bytes) and megabyte = 1,000 kilobytes / 1,000,000 bytes / 10³ kilobytes / 10⁶ bytes
- OR: kibi is binary prefix and mega is denary prefix

**Objective matched:** Binary magnitudes, binary vs denary prefixes

---

### Q3(b)(i) — Denary to 12-bit two's complement [1 mark]

Convert the denary value −196 into a 12-bit two's complement binary integer.

**Mark scheme answer:** 1111 0011 1100

*Working: +196 = 0000 1100 0100 → invert → 1111 0011 1011 → add 1 → 1111 0011 1100*

**Objective matched:** Convert an integer value from one base/representation to another; two's complement

---

### Q3(b)(ii) — BCD to denary [1 mark]

Convert the Binary Coded Decimal (BCD) 1000 0110 0101 into denary.

**Mark scheme answer:** 865

*Working: 1000 = 8, 0110 = 6, 0101 = 5 → 865*

**Objective matched:** Show understanding of different number systems (BCD)

---

### Q3(c) — BCD practical application [2 marks]

Identify one practical application of BCD and justify why BCD is used in this application.

**Mark scheme answers:**

Option 1:
- Application: financial / banking calculations
- Justification: difficult to represent decimal values exactly in normal binary; financial transactions use two decimal places and must be accurate with no accumulating errors

Option 2:
- Application: electronic displays (calculators, digital clocks)
- Justification: visual displays only need to show individual digits; conversion between denary and BCD is easier

Option 3:
- Application: storage of date and time in the BIOS of a PC
- Justification: conversion with denary is easier

**Objective matched:** Describe practical applications where BCD is used

---

## Paper 1 | S24/13 | Q1 | 9 marks

**Series/Year:** May/June 2024 · Variant 13

### Q1(a) — Binary/denary prefixes completion [4 marks]

Complete the following description.

A kibibyte has a _______ prefix. Three kibibytes is the same as _______ bytes.
A megabyte has a _______ prefix. Two terabytes is the same as _______ gigabytes.

**Mark scheme answer:**
- binary
- 3072
- denary/decimal
- 2000

**Objective matched:** Show understanding of binary magnitudes and the difference between binary prefixes and decimal prefixes

---

### Q1(b) — Denary to hex [1 mark]

Convert the denary number 241 to hexadecimal.

**Mark scheme answer:** F1

*Working: 241 ÷ 16 = 15 remainder 1 → F1*

**Objective matched:** Convert an integer value from one base/representation to another

---

### Q1(c) — Overflow definition [1 mark]

State what is meant by an overflow in binary addition.

**Mark scheme answer:** The answer is too long to be represented in the same number of bits as the binary numbers being added.

**Objective matched:** Show understanding of how overflow can occur

---

### Q1(d)(i) — Character set bits table [1 mark]

Complete the table by identifying the number of bits each character set allocates to each character.

**Mark scheme answer:**
| Character set | Number of bits |
|---|---|
| ASCII | 7 |
| extended ASCII | 8 |
| Unicode | 16/32 |

**Objective matched:** Show understanding of character data and character sets

---

### Q1(d)(ii) — Representing text in binary [2 marks]

Explain how the word 'Clock' is represented by a character set.

**Mark scheme answer:**
- Each character has a unique binary code
- The binary code for each character is stored in sequence

**Objective matched:** Show understanding of and represent character data in its internal binary form

---

## Paper 1 | W24/11 | Q1 | 7 marks

**Series/Year:** O/N 2024 · Variant 11

### Q1(a) — Tebibyte vs gigabyte [1 mark]

State one difference between a tebibyte and a gigabyte.

**Mark scheme answer:**
- A tebibyte = 1024 gibibytes / 1,048,576 kibibytes / 2⁴⁰ bytes whereas a gigabyte = 1000 megabytes / 1,000,000 kilobytes / 10⁹ bytes
- OR: tebi is binary prefix; giga is denary prefix

**Objective matched:** Binary magnitudes, binary vs denary prefixes

---

### Q1(b)(i) — Binary to hex [1 mark]

Convert the unsigned binary integer 110001100111 into hexadecimal.

**Mark scheme answer:** C67

*Working: 1100 0110 0111 → C, 6, 7*

**Objective matched:** Convert an integer value from one base/representation to another

---

### Q1(b)(ii) — Two's complement to denary [1 mark]

Convert the two's complement binary number 100110010111 into denary.

**Mark scheme answer:** −1641

**Objective matched:** Convert an integer value from one base/representation to another; two's complement

---

### Q1(b)(iii) — BCD to denary [1 mark]

Convert the Binary Coded Decimal (BCD) 010101110011 into denary.

**Mark scheme answer:** 573

*Working: 0101 = 5, 0111 = 7, 0011 = 3 → 573*

**Objective matched:** Show understanding of different number systems (BCD)

---

### Q1(c) — Binary subtraction [2 marks]

Subtract the denary number 23 from the two's complement binary number 01001010. Show your working.

**Mark scheme answer:**

Working (two's complement method):
23 in binary = 00010111 so −23 = 11101001
```
  0100 1010
+ 1110 1001
(1)0011 0011
```
Discard carry → Answer: **0011 0011** (= 51)

Direct subtraction also accepted:
```
  0100 1010
− 0001 0111
  0011 0011
```

[1 mark for working; 1 mark for answer]

**Objective matched:** Perform binary subtraction

---

### Q1(d) — Overflow reason [1 mark]

State one reason why binary addition and subtraction can result in overflow.

**Mark scheme answer (any one of):**
- The answer cannot be represented in the number of bits available
- The answer is larger than the maximum positive number that can be stored in the register
- The answer is smaller than the most negative number that can be stored in the register

**Objective matched:** Show understanding of how overflow can occur
