# Extracts — Data Representation (1.1)

---

## [Source: resources/md/textbook/Chapter 01 Information representation and multimedia.md]

### Key Terms (1.1)

- **Binary** – base two number system based on the values 0 and 1 only.
- **Bit** – abbreviation for binary digit.
- **One's complement** – each binary digit in a number is reversed to allow both negative and positive numbers to be represented.
- **Two's complement** – each binary digit is reversed and 1 is added in right-most position to produce another method of representing positive and negative numbers.
- **Sign and magnitude** – binary number system where left-most bit is used to represent the sign (0 = + and 1 = –); the remaining bits represent the binary value.
- **Hexadecimal** – a number system based on the value 16 (uses the denary digits 0 to 9 and the letters A to F).
- **Memory dump** – contents of a computer memory output to screen or printer.
- **Binary-coded decimal (BCD)** – number system that uses 4 bits to represent each denary digit.
- **ASCII code** – coding system for all the characters on a keyboard and control codes.
- **Character set** – a list of characters that have been defined by computer hardware and software. It is necessary to have a method of coding, so that the computer can understand human characters.
- **Unicode** – coding system which represents all the languages of the world (first 128 characters are the same as ASCII code).

### 1.1.1 Number Systems

Computers adopted the binary (base 2) number system since this allows only two values, 0 and 1. A switch in the ON position can be represented by 1; a switch in the OFF position can be represented by 0. Each of the binary digits are known as bits.

### 1.1.2 Binary Number System

The binary system uses 1s and 0s only. Column weightings: 128 | 64 | 32 | 16 | 8 | 4 | 2 | 1

**Converting denary to binary — Method 1:** Place 1s in appropriate columns so they total the target denary number.

**Converting denary to binary — Method 2:** Successive division by 2; remainders written from bottom to top give the binary value.

### Two's Complement Representation

In two's complement, each digit in the binary number is inverted and a '1' is added to the right-most bit.

Example: 0101 1010 (denary 90) → invert → 1010 0101 → add 1 → 1010 0110 (denary −90).

The two's complement column weightings for an 8-bit number:

| −128 | 64 | 32 | 16 | 8 | 4 | 2 | 1 |

**Range of 8-bit two's complement:** −128 to +127.

The easiest way to convert a positive number into its negative equivalent is to invert all bits and add 1.

Example: 104 = 0110 1000 → invert → 1001 0111 → add 1 → 1001 1000 (= −104).

### Binary Addition

Rules:
- 0 + 0 = 0
- 0 + 1 = 1
- 1 + 1 = 0, carry 1
- 1 + 1 + 1 = 1, carry 1

Example 1.1: 00100101 (37) + 00111010 (58) = 01011111 (95) ✓

Example 1.2 (overflow): 01010010 (82) + 01000101 (69) = 10010111 → negative result. Adding two positive numbers produced a negative: **overflow**. The maximum representable value (127) was exceeded (151 > 127).

### Binary Subtraction

To carry out subtraction in binary, convert the number being subtracted into its negative equivalent using two's complement, then add the two numbers.

Example 1.3: 95 − 68  
→ 95 = 0101 1111; two's complement of 68 = 1011 1100  
→ 0101 1111 + 1011 1100 = 1 0001 1011  
→ Discard the ninth bit → 0001 1011 = 27 ✓

Example 1.4: 49 − 80  
→ 49 = 0011 0001; two's complement of 80 = 1011 0000  
→ 0011 0001 + 1011 0000 = 1110 0001 = −31 ✓

### Binary Magnitudes

| SI (denary) unit | Bytes |
|---|---|
| 1 kilobyte (1 KB) | 1,000 |
| 1 megabyte (1 MB) | 1,000,000 |
| 1 gigabyte (1 GB) | 1,000,000,000 |
| 1 terabyte (1 TB) | 1,000,000,000,000 |

| IEC (binary) unit | Bytes (base 2) | Denary value |
|---|---|---|
| 1 kibibyte (1 KiB) | 2¹⁰ | 1,024 |
| 1 mebibyte (1 MiB) | 2²⁰ | 1,048,576 |
| 1 gibibyte (1 GiB) | 2³⁰ | 1,073,741,824 |
| 1 tebibyte (1 TiB) | 2⁴⁰ | 1,099,511,627,776 |

Internal memories (such as RAM) should be measured using the IEC system. Storage device marketing typically uses SI prefixes.

### 1.1.3 Hexadecimal Number System

Hexadecimal is a base 16 system. Digits 0–9 and letters A–F are used. A = 10, B = 11, C = 12, D = 13, E = 14, F = 15.

Since 16 = 2⁴, four binary digits are equivalent to each hexadecimal digit.

**Binary → Hex:** Split binary from right into groups of 4 bits; convert each group to hex digit.  
Example: 1011 1110 0001 → B, E, 1 → BE1

**Hex → Binary:** Expand each hex digit to its 4-bit equivalent.  
Example: 45A → 0100 0101 1010

**Use of hexadecimal — Memory dumps:**  
B5A41AFC is much easier to read than 10110101101001000001101011111100.  
Used when developing software or tracing errors in programs.

### 1.1.4 Binary-Coded Decimal (BCD)

BCD uses a 4-bit code to represent each denary digit independently.

| Denary digit | BCD |
|---|---|
| 0 | 0000 |
| 1 | 0001 |
| … | … |
| 9 | 1001 |

Example: denary 3165 = **0011 0001 0110 0101** in BCD.

BCD can be stored as half a byte (4 bits / nibble) or two 4-bit codes per byte.

**Uses of BCD:**
- Digital displays on calculators and clocks — each denary digit maps directly to a display segment.
- Accounting and monetary values — BCD avoids binary rounding errors when representing exact decimal values. When adding monetary values like $0.37 + $0.94, pure binary produces errors. BCD resolves this by adding 0110 (6) when a 4-bit group exceeds 1001 (9).

### 1.1.5 ASCII and Unicode

**ASCII (American Standard Code for Information Interchange):**
- 7-bit standard code (0–127 denary; 0–7F hex).
- 128 characters: letters, digits, keyboard symbols, 32 control codes (codes 0–31).
- Notable pattern: the sixth bit changes from 1 to 0 when comparing lowercase to uppercase (e.g. 'a' = 1100 0001, 'A' = 0100 0001), making conversion easy.

**Extended ASCII:**
- 8-bit (128–255 denary; 80–FF hex).
- Adds non-English characters and drawing characters.

**Unicode:**
- Covers all languages of the world; supports several thousand different characters.
- First 128 characters are identical to ASCII.
- Published by the Unicode Consortium (1991). Goals included: universal standard, uniform 16-bit or 32-bit encoding, unambiguous encoding.
- Supports characters from Russian, Greek, Romanian, Croatian, Japanese, Chinese, and emoji sets.
- Supports up to four bytes per character (compared to one byte for ASCII).

---

## [Source: resources/md/textbook/Chapter 01 Information representation and multimedia Answers.md]

### End of Chapter Question Answers (1.1 relevant)

Q1(a): Two's complement values:
- i) 0100 1111 = 79
- ii) 1001 1010 = −102
- iii) −53 = 1100 1011
- iv) range: 1000 0000 (−128) to 0111 1111 (+127)

Q1(b): BCD:
- i) 798 = **0111 1001 1000** in BCD
- ii) (BCD value given) = 9776
- c) Storage of digital displays on calculators (one use of BCD)

Q4(a): Binary two's complement representations:
- 60 = 0011 1100
- 27 = 0001 1011
- −27 = 1110 0101

Q4(b): 60 + 27 in binary:
```
  0011 1100
+ 0001 1011
= 0101 0111  (87)
```

Q4(c): 60 − 27 in binary:
```
  0011 1100
+ 1110 0101
= (1) 0010 0001  (33, discard carry)
```

Q4(d): Overflow example:
```
  0101 1001 (89)
+ 0110 0001 (97)
= 1011 1010 (negative in two's complement)
```
Overflow: adding two positive numbers gives a negative result, which is not possible.

Q5(b): Hexadecimal uses: memory dumps, HTML (colour codes), assembly code instructions.
Q5(b)(iii): Convert binary 0111 1110 1111 0010 → 7EF2.

Q6(a): 95 in BCD = **1001 0101**
Q6(b): 00100011 − 01000100 = 00100011 + 10111100 = 1101 1111 = −33
Q6(c): 506 in hexadecimal = **1FA**

---

## [Source: resources/md/moshikur/ch01-information-representation.md]

### Binary Prefixes

| Binary unit | Symbol | Bytes |
|---|---|---|
| Kibibyte | KiB | 1,024 (2¹⁰) |
| Mebibyte | MiB | 1,048,576 (2²⁰) |
| Gibibyte | GiB | 1,073,741,824 (2³⁰) |
| Tebibyte | TiB | 1,099,511,627,776 (2⁴⁰) |

| Decimal unit | Symbol | Bytes |
|---|---|---|
| Kilobyte | kB | 1,000 (10³) |
| Megabyte | MB | 1,000,000 (10⁶) |
| Gigabyte | GB | 1,000,000,000 (10⁹) |
| Terabyte | TB | 1,000,000,000,000 (10¹²) |

### Hexadecimal Real-World Uses

- Memory addresses: `D3AF`
- HTML/CSS colours: `#FF0000` (red), `#00FF00` (green), `#0000FF` (blue)
- Error codes: `STOP: 0x0000007E`
- MAC addresses: `00:1A:2B:3C:4D:5E`

### Binary Coded Decimal (BCD)

BCD represents each decimal digit (0–9) individually as a 4-bit binary code.

**Key distinction:** BCD of 47: 4 → 0100, 7 → 0111 = **0100 0111** (8 bits). Pure binary of 47 = **101111** (6 bits).

**Applications:** digital displays (clocks, calculators), financial/ATM systems (avoids rounding errors), embedded systems.

| Advantages | Disadvantages |
|---|---|
| Easy conversion for displays | Wastes storage (values 10–15 unused per nibble) |
| Avoids binary rounding errors | Slower arithmetic than pure binary |
| Compatible with decimal I/O | Inefficient for large computations |

### Two's Complement

**Rule:** MSB = 0 → positive; MSB = 1 → negative.

**Range for N-bit numbers:**
- Minimum: –2ⁿ⁻¹
- Maximum: 2ⁿ⁻¹ – 1

| Bits | Range |
|---|---|
| 4-bit | –8 to +7 |
| 8-bit | –128 to +127 |
| 16-bit | –32,768 to +32,767 |

**Converting positive to negative (negation):**
1. Start with positive binary representation
2. Invert all bits
3. Add 1

Example: +5 → 00000101 → invert: 11111010 → add 1: **11111011** (−5)

### Overflow Detection

| Situation | Overflow? |
|---|---|
| Positive + Positive → Negative result | Yes |
| Negative + Negative → Positive result | Yes |
| Positive + Negative | No |

**Detection rule:** carry INTO MSB ≠ carry OUT OF MSB → overflow.

### Character Sets — Comprehensive Comparison

| Feature | ASCII | Extended ASCII | Unicode |
|---|---|---|---|
| Bit length | 7 bits | 8 bits | Variable (8/16/32 bits) |
| Characters | 128 | 256 | 143,000+ |
| Non-English | No | Partial (Western European) | All scripts |
| Emoji | No | No | Yes |
| Modern use | Legacy | Legacy | Universal standard |

Unicode forms:

| Form | Length | Use |
|---|---|---|
| UTF-8 | 1–4 bytes | Web standard; ASCII-compatible |
| UTF-16 | 2 or 4 bytes | Windows, some languages |
| UTF-32 | 4 bytes fixed | Simple implementation; high memory |

---

## [Source: resources/md/savemyexams/1.1 DataRepresentation.md]

### Binary Prefixes (Save My Exams)

A binary prefix is a unit prefix used to indicate multiples of bytes in binary. The denary system is technically inaccurate when describing computer storage. Binary prefixes use powers of 2.

When precision is required (e.g. identifying RAM), binary prefixes should be used. E.g. 16 GiB RAM = 16 × 2³⁰ bytes. When a rough estimate is acceptable (e.g. storage device capacity), denary prefixes are used.

### Number System Conversions

**Hexadecimal to denary:** A3 = (10 × 16) + 3 = 163  
**Denary to hex (repeated division by 16):** 163 ÷ 16 = 10 r 3 → A3  
**Binary to hex (4-bit groups):** 1011 0111 → B7  
**Hex to binary:** 5F → 0101 1111

**Worked example:** Convert binary 1010 0010 to hexadecimal → **A2**

### BCD — Packed and Unpacked

**Packed BCD:** Two denary digits stored per byte. Example: 592 = 0101 1001 0010  
**Unpacked BCD:** One denary digit per byte with leading zeros. Example: 592 = 00000101 00001001 00000010

**Worked example:** 649 in BCD = **0110 0100 1001**

### One's Complement and Two's Complement

**One's complement:** Invert all bits. Problem: two representations of 0 (+0000 0000 and −0000 0000).

**Two's complement:** Invert all bits and add 1 to rightmost bit. Solves the dual-zero problem. Only one representation of 0.

**Key reasons to use two's complement:**
- **Consistency:** Same addition rules for positive and negative numbers.
- **Hardware simplicity:** The same adder circuit handles all signed arithmetic.
- 8-bit range: 0111 1111 (+127) to 1000 0000 (−128).

**Alternative method:** Starting from the right, keep all bits the same up to and including the first 1; flip all bits to the left.  
Example: 0101 1000 → two's complement → 1010 1000

### Overflow

Overflow occurs when the sum of two binary numbers exceeds the given number of bits. In signed representations, the leftmost bit often serves as the sign bit; overflow can flip this bit, incorrectly changing the sign of the result.

### Character Sets (Save My Exams)

**ASCII:**
- 7 bits → 2⁷ = 128 unique codes.
- Represents letters, digits, keyboard symbols, and control characters.
- The sixth bit changes from 1 (lowercase) to 0 (uppercase): 'a' = 0110 0001; 'A' = 0100 0001.
- Limited to English characters.

**Extended ASCII:**
- 8th bit added → 2⁸ = 256 unique codes.
- Adds mathematical operators, non-English characters, © etc.

**Unicode:**
- Minimum 16 bits → 2¹⁶ = 65,536+ characters.
- Represents characters from all major languages worldwide.
- First 128 characters are identical to ASCII.
- Created as a solution to ASCII's limitations.

| | ASCII | Unicode |
|---|---|---|
| Number of bits | 7 bits | 16 bits (minimum) |
| Number of characters | 128 | 65,536+ |
| Uses | English characters | All world languages |
| Benefits | Less storage space | More characters, all scripts, emoji support |
| Drawbacks | 128 characters max; no emoji | More storage space than ASCII |

### Applications of Hexadecimal

Hexadecimal is preferred over binary because:
- 1 hex digit = 4 bits (represents 16 unique values)
- Fewer digits than binary for the same value
- Binary numbers with many bits are prone to copying errors

Examples of hexadecimal use:
- MAC addresses: AA:BB:CC:DD:EE:FF (12 hex digits = 48 binary digits)
- Colour codes: #66FF33 (6 hex digits = 24 binary digits)
- URLs: special characters encoded as %XX (hex code)

### Applications of BCD

| Use Case | Why BCD is used |
|---|---|
| Electronic calculators | Keeps numbers in decimal format for easier display and accuracy |
| Digital clocks and watches | Time is naturally decimal (e.g. 12:45), so BCD makes display logic simpler |
| Banking and financial systems | Avoids rounding errors when doing decimal calculations, especially with money |
| Old digital systems / embedded systems | Simpler to implement with hardware that displays digits individually |

---

## [Source: resources/md/pseudocode_pro/Unit 1 - Information Representation Presentation.md]

### Key Formulas for Binary Number Systems

- **Number of unique values with n bits:** 2ⁿ
- **Maximum value with n bits:** 2ⁿ − 1
- **Range:** 0 to 2ⁿ − 1
- **General formula (any base b):** bⁿ − 1 for maximum; bⁿ for unique values

Units:
- Bit = 1 binary digit
- Nibble = 4 bits
- Byte = 8 bits

### Signed Magnitude vs One's Complement vs Two's Complement

- **Signed magnitude:** MSB = sign (0 = positive, 1 = negative); remaining bits = magnitude. Problem: two representations of 0.
- **One's complement:** Invert all bits for negative. Problem: two representations of 0; arithmetic doesn't work cleanly.
- **Two's complement:** Invert all bits, add 1. One representation of 0; arithmetic works consistently.

Range summary (1 byte):
| Representation | Smallest | Largest |
|---|---|---|
| Signed magnitude | −127 (1111 1111) | +127 (0111 1111) |
| One's complement | −127 (1000 0000) | +127 (0111 1111) |
| Two's complement | −128 (1000 0000) | +127 (0111 1111) |

---

## [Source: resources/md/pseudocode_pro/Unit 1 - Information Representation Answers.md]

### Worked Conversions

Binary to denary:
- 01100110 = 102
- 10010010 = 146
- 11110000 = 240

Denary to binary (8-bit unsigned):
- 37 = 00100101
- 96 = 01100000
- 219 = 11011011

Denary to hex:
- 19 = 13
- 153 = 99
- 999 = 3E7

Hex to denary:
- A7 = 167
- 9F = 159
- D3D = 3389

Binary to hex:
- 1100 0101 = C5
- 0111 1011 0011 = 7B3
- 1111 0000 0000 1101 = F00D

Hex to binary:
- 8E = 1000 1110
- 6B = 0110 1011
- CAB = 1100 1010 1011

Two's complement (8-bit):
- 125 = 0111 1101
- −96 = 1010 0000

One's complement (8-bit):
- 92 = 0101 1100
- −53 = 1100 1010

BCD:
- 592 (packed) = 0101 1001 0010
- 9757531 in BCD: 1001 0111 0101 0011 0001 = 97531

Overflow check (8-bit two's complement):
- 63 + 64 = 127 → No overflow
- 64 + 64 = 128 → **Overflow** (exceeds +127)
- −100 + −30 = −130 → **Overflow** (below −128)
- −64 + −64 = −128 → No overflow (equals exactly −128)

From June 2022 AS exam:
- Hex 11 in denary = 17
- Smallest unsigned 8-bit = 0
- 87 in BCD = 1000 0111
- 240 in hex = F0
- −20 in 8-bit two's complement = 1110 1100

ASCII values:
- 0 = 48
- A = 65
- a = 97
- 5 = 53
- G = 71
- z = 122

---

## [Source: resources/md/thinka/01 Information representation.md]

### Summary: Character Sets

- **ASCII:** Original standard. 7 bits → 128 characters (0–127). Covered English uppercase, lowercase, numbers, basic symbols.
- **Extended ASCII:** 8 bits → 256 characters (0–255). Added regional characters and graphical symbols.
- **Unicode:** Modern standard. 16, 24, or 32 bits → millions of unique characters. Essential for all languages, emojis, mathematical symbols.

### Binary Prefixes — Key Distinction

The 'i' in kibi, mebi, gibi, tebi stands for 'binary'. When marketing uses 'kilo' (e.g. hard drive capacity), it usually means 1000 (decimal). For memory addresses and programming, 1024 (binary) is the correct standard.
