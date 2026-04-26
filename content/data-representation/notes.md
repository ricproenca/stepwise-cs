# Data Representation

**Syllabus Ref:** 1.1 · AS Level · Paper 1

---

> **Cross-topic note:** The binary number system and two's complement are defined in full in this section. Sections 4.1 (CPU Architecture) and 4.3 (Bit Manipulation) reference these definitions without redefining them. Character encoding (ASCII, Unicode) is defined in full here; Section 1.2 (Multimedia) references these definitions.

---

## 1.1.1 Binary Magnitudes and Prefixes

Storage capacity appears in product specifications and exam questions using two prefix systems that assign different byte counts to the same prefix word. Selecting the correct system — and converting between the two — is a routine 1-mark task in Paper 1.

A **bit** is a single binary digit (0 or 1). An **8-bit** group is called a **byte**; a **4-bit** group is called a **nibble**.

Computer memory is measured in multiples of bytes. Two incompatible prefix systems exist, producing different values for the same prefix word.

<!-- DIAGRAM: comparison-table — Decimal (SI) prefixes vs Binary (IEC) prefixes — shows byte values for kilo/kibi, mega/mebi, giga/gibi, tera/tebi — clarifies why "1 GB hard drive" ≠ "1 GiB RAM" -->

### Decimal (SI) Prefixes

Used by storage device manufacturers. Based on powers of 10.

| Unit | Symbol | Value (bytes) | Power |
|---|---|---|---|
| Kilobyte | KB | 1,000 | 10³ |
| Megabyte | MB | 1,000,000 | 10⁶ |
| Gigabyte | GB | 1,000,000,000 | 10⁹ |
| Terabyte | TB | 1,000,000,000,000 | 10¹² |
| Petabyte | PB | 1,000,000,000,000,000 | 10¹⁵ |

Storage manufacturers use decimal prefixes to report larger figures on product labels. Computer engineers need binary prefixes for precise memory calculations — the two systems diverge by a growing margin at higher scales.

### Binary (IEC) Prefixes

Used for internal memory (RAM, cache). Based on powers of 2. The suffix **-bi** indicates a binary prefix.

| Unit | Symbol | Value (bytes) | Power |
|---|---|---|---|
| Kibibyte | KiB | 1,024 | 2¹⁰ |
| Mebibyte | MiB | 1,048,576 | 2²⁰ |
| Gibibyte | GiB | 1,073,741,824 | 2³⁰ |
| Tebibyte | TiB | 1,099,511,627,776 | 2⁴⁰ |
| Pebibyte | PiB | 1,125,899,906,842,624 | 2⁵⁰ |

**When to use each system:**
- Binary prefixes (KiB, MiB, GiB) — required when precision matters, such as identifying RAM size or calculating file sizes in programs. Example: 64 GiB RAM = 64 × 2³⁰ bytes = 68,719,476,736 bytes.
- Decimal prefixes (KB, MB, GB) — used for approximate storage capacity, such as hard drive labelling. Example: a 500 GB hard drive stores 500 × 10⁹ bytes.

**Key relationships for exam questions:**
- 1024 mebibytes = 1 gibibyte
- 1000 kilobytes = 1 megabyte
- 8 bits = 1 byte
- 8192 bits = 1 kibibyte (8 × 1024)

> **Key Takeaway:**
> - Decimal (SI) prefixes are based on powers of 10; binary (IEC) prefixes are based on powers of 2 — the same prefix word yields different byte counts.
> - RAM and cache sizes use binary prefixes (KiB, MiB, GiB); storage device capacities are typically quoted using decimal prefixes (KB, MB, GB).
> - For exam calculations: 1 KiB = 1,024 bytes; 1 MiB = 1,048,576 bytes; 1 GiB = 1,073,741,824 bytes.

---

## 1.1.2 Number Systems and Conversions

All integer data stored by a computer is encoded in binary. Exam questions for this section require confident conversion between binary, denary, hexadecimal, and BCD — and a precise understanding of how the same bit pattern produces a different denary value depending on the encoding system applied.

A **number base** defines how many distinct digits a system uses. Each digit position represents the base raised to a power, increasing from right to left.

### Binary (Base 2)

Uses only digits 0 and 1. Each position is a power of 2.

<!-- DIAGRAM: binary-diagram — 8-bit unsigned binary column weighting (128|64|32|16|8|4|2|1) with example value 01101001 = 105 — primary visual for binary place values -->

| 2⁷ | 2⁶ | 2⁵ | 2⁴ | 2³ | 2² | 2¹ | 2⁰ |
|---|---|---|---|---|---|---|---|
| 128 | 64 | 32 | 16 | 8 | 4 | 2 | 1 |

**Maximum value with n bits (unsigned):** 2ⁿ − 1  
**Number of unique values with n bits:** 2ⁿ

| Bits | Max unsigned value | Unique values |
|---|---|---|
| 4 (nibble) | 15 | 16 |
| 8 (byte) | 255 | 256 |
| 16 | 65,535 | 65,536 |

**Binary to denary:** Sum the column values where a 1 appears.

*Example:* 01101001  
= 64 + 32 + 8 + 1 = **105**

**Denary to binary (repeated subtraction method):** Starting from the highest column value, place a 1 if the value fits (subtract it from the remainder); otherwise place a 0.

*Example:* Convert 107 to 8-bit binary

| 128 | 64 | 32 | 16 | 8 | 4 | 2 | 1 |
|---|---|---|---|---|---|---|---|
| 0 | 1 | 1 | 0 | 1 | 0 | 1 | 1 |

107 − 64 = 43 → 43 − 32 = 11 → 11 − 8 = 3 → 3 − 2 = 1 → 1 − 1 = 0  
Result: **01101011**

**Denary to binary (repeated division method):** Divide repeatedly by 2; remainders read bottom-to-top give the binary value.

Binary is unambiguous for hardware but impractical for human reading: a 16-bit address contains 16 digits. Hexadecimal reduces this by grouping every four binary digits into a single character.

### Hexadecimal (Base 16)

Uses digits 0–9 and letters A–F. A = 10, B = 11, C = 12, D = 13, E = 14, F = 15.

| Denary | Binary | Hex |
|---|---|---|
| 0 | 0000 | 0 |
| 1 | 0001 | 1 |
| 2 | 0010 | 2 |
| 3 | 0011 | 3 |
| 4 | 0100 | 4 |
| 5 | 0101 | 5 |
| 6 | 0110 | 6 |
| 7 | 0111 | 7 |
| 8 | 1000 | 8 |
| 9 | 1001 | 9 |
| 10 | 1010 | A |
| 11 | 1011 | B |
| 12 | 1100 | C |
| 13 | 1101 | D |
| 14 | 1110 | E |
| 15 | 1111 | F |

**Binary to hex:** Group binary digits from the right into sets of 4; convert each nibble to its hex equivalent.

*Example:* Convert 1011 1110 0001 to hex  
1011 = B · 1110 = E · 0001 = 1 → **BE1**

**Hex to binary:** Expand each hex digit to its 4-bit binary equivalent.

*Example:* Convert 45A to binary  
4 = 0100 · 5 = 0101 · A = 1010 → **010001011010**

**Hex to denary:** Multiply each digit by 16 raised to its positional power.

*Example:* A3 = (10 × 16¹) + (3 × 16⁰) = 160 + 3 = **163**

**Denary to hex (repeated division):** Divide by 16; remainders right-to-left give hex digits.

*Example:* Convert 241 to hex  
241 ÷ 16 = 15 remainder 1 → 15 = F · 1 = 1 → **F1**

Hexadecimal is a compression of binary suited to addresses and colour codes. BCD takes a different approach: rather than encoding an entire number into binary, it preserves each decimal digit as an independent 4-bit group.

### Binary Coded Decimal (BCD)

BCD represents each **individual** denary digit as a separate 4-bit binary code. Only codes 0000 to 1001 (0–9) are valid; codes 1010–1111 are unused.

| Denary digit | BCD |
|---|---|
| 0 | 0000 |
| 1 | 0001 |
| 2 | 0010 |
| 3 | 0011 |
| 4 | 0100 |
| 5 | 0101 |
| 6 | 0110 |
| 7 | 0111 |
| 8 | 1000 |
| 9 | 1001 |

**BCD is not the same as binary.** The pattern 00100111 represents:
- Unsigned binary: 32 + 4 + 2 + 1 = **39**
- BCD: 0010 = 2 · 0111 = 7 → **27**

**Denary to BCD:** Convert each decimal digit independently to its 4-bit code.

*Example:* 964 → 9 = 1001 · 6 = 0110 · 4 = 0100 → **1001 0110 0100**

**BCD storage:** Two BCD digits (one byte of data) can be stored in a single byte:
- Packed BCD: two 4-bit codes stored in one byte
- Unpacked BCD: one 4-bit code per byte (with leading zeros in the high nibble)

> [VISUAL NEEDED: binary-diagram — packed BCD vs unpacked BCD storage layout for denary 52 — shows 0101 0010 (packed) vs 00000101 00000010 (unpacked) — contrasts storage efficiency]

Both binary and BCD represent only non-negative integers. Two's complement extends binary to cover signed integers by assigning the most significant bit a negative weight, allowing the same addition hardware to handle both positive and negative values.

### Two's Complement

Two's complement is the standard method for representing both positive and negative integers in binary. It uses the **most significant bit (MSB)** as a sign bit with negative weight.

**8-bit two's complement column weightings:**

| −2⁷ | 2⁶ | 2⁵ | 2⁴ | 2³ | 2² | 2¹ | 2⁰ |
|---|---|---|---|---|---|---|---|
| −128 | 64 | 32 | 16 | 8 | 4 | 2 | 1 |

- MSB = 0 → number is positive (or zero)
- MSB = 1 → number is negative

**Range for 8-bit two's complement:** −128 to +127  
**General range for n-bit two's complement:** −2ⁿ⁻¹ to 2ⁿ⁻¹ − 1

| Bits | Minimum (most negative) | Maximum (most positive) |
|---|---|---|
| 4 | −8 | +7 |
| 8 | −128 | +127 |
| 16 | −32,768 | +32,767 |

**Converting a positive denary to negative two's complement (negation):**
1. Write the positive value in binary.
2. Invert all bits (one's complement).
3. Add 1 to the least significant bit.

*Example:* Represent −45 in 8-bit two's complement  
+45 = 0010 1101  
Invert: 1101 0010  
Add 1: **1101 0011**

**Shortcut method:** From the rightmost bit, copy all bits up to and including the first 1; flip all remaining bits to the left.

*Example:* 0101 1000 → copy 1000 → flip remaining → **1010 1000**

**Converting two's complement to denary:**
- If MSB = 0: sum the column values as normal (positive number).
- If MSB = 1: the MSB contributes −128 (for 8-bit). Sum all column values, applying −128 to bit 7.

*Example:* 1110 0111  
= (−128) + 64 + 32 + 4 + 2 + 1 = **−25**

**Key advantage over one's complement and sign-magnitude:** Two's complement has only one representation of zero, and the same addition algorithm works for both positive and negative operands, requiring no special-case logic in hardware.

Two's complement is the method used in all modern hardware. One's complement is an earlier approach retained in the syllabus for comparison purposes — its structural weakness explains why two's complement replaced it.

### One's Complement

One's complement represents a negative number by inverting all bits of its positive equivalent.

*Example:* +72 = 0100 1000 → one's complement of −72 = 1011 0111

**Limitation:** Produces two representations of zero (0000 0000 and 1111 1111), and arithmetic does not work cleanly without correction.

> **Key Takeaway:**
> - Four encoding systems are tested: unsigned binary, hexadecimal, BCD, and two's complement — the same 8-bit pattern produces a different denary value in each.
> - Two's complement: the MSB carries weight −2ⁿ⁻¹; the 8-bit range is −128 to +127; any number with MSB = 1 is negative.
> - BCD converts each decimal digit independently into 4 bits — denary 27 becomes 0010 0111, not the binary value 00011011.
> - One nibble (4 bits) encodes exactly one hexadecimal digit or one BCD digit.

---

## 1.1.3 Binary Addition and Subtraction

Binary arithmetic is tested in Paper 1 through worked addition and subtraction examples where marks are awarded for showing carries. Overflow — the error produced when a result exceeds the representable range — is a separate examinable concept and must be explained in terms of the bit width, not described only as "the number is too large."

### Binary Addition Rules

| Bit A | Bit B | Sum | Carry |
|---|---|---|---|
| 0 | 0 | 0 | 0 |
| 0 | 1 | 1 | 0 |
| 1 | 0 | 1 | 0 |
| 1 | 1 | 0 | 1 |
| 1 | 1 (+ carry 1) | 1 | 1 |

Work column by column from right to left, propagating carries.

*Example:* Add 10110000 and 00011011

```
  carry:  1 1 1 1
          1 0 1 1 0 0 0 0
        + 0 0 0 1 1 0 1 1
        = 1 1 0 0 1 0 1 1
```

Result: **11001011**

Correct binary addition produces no error when the result stays within the representable range. When two numbers of the same sign produce a result whose MSB is inconsistent with that sign, the addition circuit has generated an incorrect result — this is overflow.

### Overflow

**Overflow** occurs when the result of a binary addition or subtraction cannot be represented in the number of bits available.

In 8-bit two's complement arithmetic:
- Adding two **positive** numbers that produce a result greater than +127 → the MSB becomes 1, producing a negative result (incorrect).
- Adding two **negative** numbers that produce a result less than −128 → the MSB becomes 0, producing a positive result (incorrect).
- Adding a positive and a negative number **never** causes overflow.

**Detection:** If the carry into the MSB differs from the carry out of the MSB, overflow has occurred.

*Example of overflow:* Add 82 (01010010) + 69 (01000101)

```
  carry: 1 1
         0 1 0 1 0 0 1 0   (82)
       + 0 1 0 0 0 1 0 1   (69)
       = 1 0 0 1 0 1 1 1
```

Result is 1001 0111, which in two's complement = −105. The correct denary answer is 151, which exceeds the 8-bit maximum of +127. This is an overflow error.

**Overflow conditions summary:**

| Addition type | Overflow possible? |
|---|---|
| Positive + Positive → Negative result | Yes — overflow |
| Negative + Negative → Positive result | Yes — overflow |
| Positive + Negative (any result) | No |

Overflow is a property of the result, not the operation. Subtraction uses the same circuit as addition: the hardware negates the subtrahend using two's complement and adds, making a separate subtraction circuit unnecessary.

### Binary Subtraction

Computers perform subtraction using two's complement: to calculate A − B, compute A + (−B), where −B is the two's complement of B.

**Method:**
1. Convert the subtrahend (B) to two's complement (its negative form).
2. Add A and the two's complement of B.
3. Discard any carry beyond the allocated bit width.

*Example:* Calculate 95 − 68 using 8-bit binary

95 = 0101 1111  
68 = 0100 0100 → two's complement of 68: invert → 1011 1011 → add 1 → **1011 1100**

```
  0101 1111   (95)
+ 1011 1100   (−68)
= 1 0001 1011
```

Discard carry → **0001 1011** = 16 + 8 + 2 + 1 = 27 ✓

*Example (negative result):* Calculate 49 − 80

49 = 0011 0001  
80 = 0101 0000 → two's complement: **1011 0000**

```
  0011 0001   (49)
+ 1011 0000   (−80)
= 1110 0001
```

1110 0001 = −128 + 64 + 32 + 1 = **−31** ✓

> **Key Takeaway:**
> - Binary addition: carry is propagated left; 1 + 1 = 10 in binary (sum 0, carry 1); 1 + 1 + carry 1 = 11 (sum 1, carry 1).
> - Overflow in 8-bit two's complement: positive + positive → negative result, or negative + negative → positive result — both indicate a result outside −128 to +127.
> - Subtraction is performed by adding the two's complement of the subtrahend; any carry beyond the MSB is discarded.
> - Detection rule: if carry into MSB ≠ carry out of MSB, overflow has occurred.

---

## 1.1.4 Practical Applications of BCD and Hexadecimal

Binary is the native encoding for all processor arithmetic, but two situations call for a different representation: displaying or storing individual decimal digits without conversion errors (BCD), and presenting binary data to humans in a shorter, readable form (hexadecimal). Paper 1 questions ask for specific applications with justifications — generic answers do not earn marks.

### Applications of BCD

<!-- DIAGRAM: comparison-table — BCD application table: use-case | why BCD is preferred over binary | example — covers calculator displays, digital clocks, banking systems -->

BCD is used when a system must process or display individual decimal digits accurately.

| Application | Why BCD is used |
|---|---|
| Electronic calculators and digital displays | Decimal digits map directly to display segments; conversion between denary and BCD is simpler than converting from pure binary |
| Digital clocks and watches | Time values are inherently decimal (e.g. hours 0–23, minutes 0–59); BCD avoids the need to convert binary to individual display digits |
| Banking and financial systems | Binary floating-point arithmetic cannot represent all decimal fractions exactly (e.g. 0.1 has no exact binary representation); BCD ensures monetary values such as $0.37 are stored without accumulated rounding errors |
| BIOS — date and time storage | Conversion to and from denary for display is straightforward |

**Why BCD is not used universally:** Each BCD digit uses 4 bits to represent only 10 values (0–9); the remaining 6 codes (1010–1111) are wasted. Pure binary is more storage-efficient for arithmetic computation.

BCD addresses the precision problem in decimal arithmetic at the cost of storage efficiency. Hexadecimal addresses the readability problem in binary representation — the constraint is human error, not arithmetic precision.

### Applications of Hexadecimal

Hexadecimal is preferred when humans need to read, write, or verify binary data:

- One hex digit represents exactly 4 binary bits, so any binary value converts to a shorter hex representation.
- An 8-bit value such as 10110101 is error-prone to copy; B5 is not.

| Application | Example |
|---|---|
| Memory dumps — displaying raw memory contents for debugging | Address 00A4: B5 A4 1A FC |
| HTML/CSS colour codes | #FF0000 (red), #00FF00 (green), #0000FF (blue) |
| MAC addresses | AA:BB:CC:DD:EE:FF (12 hex digits = 48 binary digits) |
| URL encoding — non-standard characters in web addresses | Space = %20; copyright sign = %C2%A9 |
| Assembly language — opcodes and memory addresses | LDA #$B5 |

**Memory dump example:**

| Address | Hex contents | Binary equivalent |
|---|---|---|
| 00A4 | B5 | 1011 0101 |
| 00A5 | A4 | 1010 0100 |
| 00A6 | 1A | 0001 1010 |
| 00A7 | FC | 1111 1100 |

The hexadecimal representation is substantially shorter and less prone to transcription error than the binary equivalent.

> **Key Takeaway:**
> - BCD is preferred where decimal precision is required: financial systems, digital displays, and real-time clocks — accepted exam answers require a specific application, not a generic claim of accuracy.
> - Hexadecimal is preferred where humans must read, write, or verify binary data: memory dumps, HTML/CSS colour codes, MAC addresses, and URL encoding.
> - One hex digit represents exactly 4 bits; this makes hex-to-binary conversion an error-free transcription rather than an arithmetic calculation.
> - BCD uses 4 bits per decimal digit and wastes 6 codes (1010–1111); pure binary requires fewer bits to represent the same numeric range.

---

## 1.1.5 Character Sets

Every character stored by a computer is represented as a binary number. A character set is the agreed mapping between characters and their binary codes — without a shared standard, the same binary pattern would be interpreted as a different character on different systems. Paper 1 regularly tests the differences between ASCII, extended ASCII, and Unicode in terms of bit width, capacity, and language coverage.

A **character set** is a defined mapping between binary codes and human-readable characters. Each character is assigned a unique binary code. A standard character set is necessary so that different hardware and software systems interpret the same binary code as the same character.

### ASCII (American Standard Code for Information Interchange)

- **Bit width:** 7 bits
- **Capacity:** 2⁷ = 128 unique codes (0–127)
- **Coverage:** English letters (uppercase and lowercase), digits 0–9, punctuation, and 32 control codes (codes 0–31)

**Key patterns in the ASCII table:**

| Character | Denary | Binary |
|---|---|---|
| 'A' | 65 | 0100 0001 |
| 'Z' | 90 | 0101 1010 |
| 'a' | 97 | 0110 0001 |
| 'z' | 122 | 0111 1010 |
| '0' | 48 | 0011 0000 |
| '9' | 57 | 0011 1001 |
| Space | 32 | 0010 0000 |

**Uppercase/lowercase relationship:** Bit 5 (the sixth bit from the right) changes from 0 (uppercase) to 1 (lowercase). Example: 'A' = 0100 0001; 'a' = 0110 0001. This makes case conversion a single bit flip.

**Character groups are sequential:** digit codes 48–57, uppercase codes 65–90, and lowercase codes 97–122 are contiguous, which enables efficient range checks.

**Limitation:** ASCII covers only English characters and cannot represent accented letters, non-Latin scripts, or symbols from other languages.

ASCII covers the characters needed for English-language computing, but its 7-bit limit leaves no room for accented letters or non-Latin scripts. Extended ASCII adds one bit to accommodate Western European languages, though the extra 128 codes were never standardised.

### Extended ASCII

- **Bit width:** 8 bits
- **Capacity:** 2⁸ = 256 unique codes (0–255)
- **Coverage:** All 128 standard ASCII codes plus additional characters including accented letters (é, ü), currency symbols (£, ¥), mathematical operators, and drawing characters

**Limitation:** The 128 extra codes (128–255) are not standardised across implementations, causing incompatibility between systems.

Extended ASCII resolved the accented-letter problem for some Western European languages, but each vendor defined the extra codes differently. Unicode replaces both with a single mapping that covers every written language using a minimum of 16 bits.

### Unicode

Unicode was created to provide a universal character encoding standard covering all world languages and symbol systems.

- **Minimum bit width:** 16 bits
- **Capacity:** 65,536 (2¹⁶) to over 1,100,000 characters depending on encoding
- **Coverage:** All major writing systems, mathematical symbols, emoji, and private-use characters

| Unicode encoding | Byte width | Typical use |
|---|---|---|
| UTF-8 | 1–4 bytes (variable) | Web standard; ASCII-compatible for English text |
| UTF-16 | 2 or 4 bytes | Windows operating system internals |
| UTF-32 | 4 bytes (fixed) | Internal processing; high memory overhead |

**The first 128 Unicode code points are identical to ASCII.** A plain ASCII file is therefore valid UTF-8.

### ASCII vs Unicode Comparison

<!-- DIAGRAM: comparison-table — ASCII vs extended ASCII vs Unicode: bits, capacity, language coverage, storage overhead, modern use — used in W22/11 Q1(c) and S24/13 Q1(d) -->

| Feature | ASCII | Extended ASCII | Unicode |
|---|---|---|---|
| Bits per character | 7 | 8 | 16–32 (variable) |
| Number of characters | 128 | 256 | 143,000+ |
| Language support | English only | Western European (partial) | All world languages |
| Emoji support | No | No | Yes |
| Modern usage | Legacy systems | Legacy systems | Universal web standard |

**Similarity:** Both ASCII and Unicode assign each character a unique binary code; the first 128 Unicode characters are the same as ASCII.

**Differences (exam-ready):**
- Unicode allocates up to 32 bits per character; ASCII uses 7 bits — Unicode can represent a wider range of characters.
- Unicode supports characters from all languages; ASCII is limited to English.
- A Unicode file for the same English text requires more storage than an equivalent ASCII file (when using UTF-16/UTF-32).

> **Key Takeaway:**
> - ASCII: 7 bits, 128 characters, English only. Extended ASCII: 8 bits, 256 characters, adds Western European characters, but no universal standard for the extra 128 codes.
> - Unicode: minimum 16 bits, 143,000+ characters, covers all world writing systems; the first 128 Unicode code points are identical to ASCII.
> - Exam similarity mark: both ASCII and Unicode assign each character a unique binary code.
> - Exam difference marks: Unicode uses more bits per character than ASCII; Unicode supports all languages while ASCII supports only English; a Unicode-encoded English file uses more storage than the equivalent ASCII file (UTF-16/UTF-32).

---

## Syllabus Coverage

- **Show understanding of binary magnitudes and the difference between binary prefixes and decimal prefixes (kibi/kilo, mebi/mega, gibi/giga, tebi/tera)** — Covered
- **Show understanding of different number systems (binary, denary, hexadecimal, BCD, one's and two's complement); convert an integer value from one base/representation to another** — Covered
- **Perform binary addition and subtraction (positive and negative binary integers); show understanding of how overflow can occur** — Covered
- **Describe practical applications where BCD is used** — Covered
- **Describe practical applications where hexadecimal is used** — Covered (incorporated within §1.1.4)
- **Show understanding of and represent character data in its internal binary form, depending on the character set used (ASCII, extended ASCII, Unicode)** — Covered
