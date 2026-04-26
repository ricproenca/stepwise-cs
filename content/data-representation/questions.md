# Practice Questions — Data Representation (1.1)

---

## Question 1
**Syllabus Ref:** 1.1.1
**Marks:** 1
**Difficulty:** Easy
**Command Word:** State
**Type:** recall

State the difference between a kibibyte and a kilobyte.

### Model Answer
- A kibibyte is 1,024 bytes (2¹⁰ bytes) and uses a binary prefix; a kilobyte is 1,000 bytes (10³ bytes) and uses a decimal prefix. [1]

### Examiner Tip
One mark for identifying either the numerical difference (1,024 vs 1,000) or the system difference (binary prefix vs decimal prefix) — both in the same sentence earns the mark.

---

## Question 2
**Syllabus Ref:** 1.1.3
**Marks:** 1
**Difficulty:** Easy
**Command Word:** State
**Type:** recall

State what is meant by an overflow in binary addition.

### Model Answer
- The result cannot be represented in the number of bits available. [1]

### Examiner Tip
Answers that say "the number is too big" without qualifying "too big for the available bits" are unlikely to earn the mark. The key phrase is that the result exceeds the representable range for the given bit width.

---

## Question 3
**Syllabus Ref:** 1.1.2
**Marks:** 2
**Difficulty:** Easy
**Command Word:** Describe
**Type:** recall

Describe what is meant by Binary Coded Decimal (BCD) and give one example of a denary number converted to BCD.

### Model Answer
- BCD represents each individual denary digit as a separate 4-bit binary code. [1]
- Example: denary 27 in BCD is 0010 0111 (2 → 0010; 7 → 0111). [1]

### Examiner Tip
The mark for the description requires the phrase "each denary digit" — saying "represents numbers in binary" does not distinguish BCD from pure binary and will not earn the mark.

---

## Question 4
**Syllabus Ref:** 1.1.4
**Marks:** 2
**Difficulty:** Easy
**Command Word:** Identify
**Type:** recall

Identify two practical applications of the hexadecimal number system.

### Model Answer
- Memory dumps — displaying raw memory contents during software debugging (hexadecimal is shorter and less error-prone than binary). [1]
- HTML/CSS colour codes — colours are specified as six-digit hex values, where each pair represents a red, green, or blue channel intensity. [1]

*(Also accepted: MAC addresses; URL encoding; assembly language opcodes and addresses.)*

### Examiner Tip
Each application requires enough detail to distinguish it from a generic use. Stating "computers use hex" or "for memory" without naming a specific application will not earn the mark.

---

## Question 5
**Syllabus Ref:** 1.1.3
**Marks:** 2
**Difficulty:** Medium
**Command Word:** Perform
**Type:** past-paper

Add the following two binary integers using binary addition. Show your working.

```
  10110000
+ 00011011
```

### Model Answer
- Working shown (carries propagated correctly): [1]
```
  carry: 1 1 1 1
         1 0 1 1 0 0 0 0
       + 0 0 0 1 1 0 1 1
```
- Answer: 11001011 [1]

### Examiner Tip
[Past Paper — S23/11 Q3(d)(v)] Working must be visible to earn the first mark; an answer alone with no working scores 0 for the working mark even if correct.

---

## Question 6
**Syllabus Ref:** 1.1.5
**Marks:** 3
**Difficulty:** Medium
**Command Word:** Give
**Type:** application

Give one similarity and two differences between the ASCII and Unicode character sets.

### Model Answer

Similarity (one of):
- Both represent each character using a unique binary code. [1]
- Unicode contains all the characters that ASCII contains; ASCII is a subset of Unicode. [1]

Differences (two of):
- Unicode allocates up to 32 bits per character, whereas ASCII uses 7 bits; Unicode can therefore represent a greater number of characters than ASCII. [1]
- Unicode supports characters from all world languages; ASCII supports only English characters. [1]

### Examiner Tip
[Past Paper — W22/11 Q1(c)] The similarity mark is most reliably earned by noting that both assign unique binary codes, or that Unicode contains the ASCII character set. For differences, mark-scheme wording focuses on bit width and language coverage — both are required for the full 2 difference marks.

---

## Question 7
**Syllabus Ref:** 1.1.2
**Marks:** 4
**Difficulty:** Medium
**Command Word:** Convert
**Type:** application

(a) Convert the denary number 964 into Binary Coded Decimal (BCD). [1]

(b) Convert the 8-bit two's complement binary integer 11100111 into denary. [1]

(c) Convert the positive binary integer 11110010 into hexadecimal. [1]

(d) State the smallest and largest values that can be represented using 8-bit two's complement. Give your answers in denary. [2]

### Model Answer
(a) 1001 0110 0100 [1]  
*(9 → 1001; 6 → 0110; 4 → 0100)*

(b) −25 [1]  
*(−128 + 64 + 32 + 4 + 2 + 1 = −25)*

(c) F2 [1]  
*(1111 = F; 0010 = 2)*

(d) Smallest: 10000000 in denary = **−128** [1]; Largest: 01111111 in denary = **+127** [1]

### Examiner Tip
Part (a): convert each digit independently — do not convert 964 as a whole number to binary first. Part (b): the MSB contributes −128 in two's complement, not +128. Part (d): both values are required for both marks; only one value earns 1 mark.

---

## Question 8
**Syllabus Ref:** 1.1.4
**Marks:** 3
**Difficulty:** Medium
**Command Word:** Identify / Justify
**Type:** analysis

Identify one practical application of Binary Coded Decimal (BCD) and justify why BCD is used in that application rather than standard binary. Your justification must include two distinct reasons.

### Model Answer

Application: banking or financial calculation systems. [1]

Justification (two of):
- Binary floating-point arithmetic cannot represent all decimal fractions exactly, causing rounding errors that accumulate over repeated calculations. [1]
- Financial transactions use fixed decimal places (e.g. two decimal places for monetary values), and BCD preserves this precision without approximation. [1]

*(Alternative application: digital clock or calculator display. Justification: decimal digits map directly to individual display segments; conversion between the stored BCD value and the displayed digit requires no arithmetic calculation.)*

### Examiner Tip
One mark for naming a specific application. Two further marks require two distinct technical reasons — restating the same point in different words does not earn both marks. Vague answers such as "BCD is more accurate" without explaining why will not score.

---

## Question 9
**Syllabus Ref:** 1.1.3
**Marks:** 5
**Difficulty:** Hard
**Command Word:** Show / Explain
**Type:** analysis

A student performs the following 8-bit two's complement binary addition:

```
  01100100   (100 in denary)
+ 01001001   (73 in denary)
```

(a) Show the binary result of the addition. [1]

(b) Convert the binary result to denary using two's complement column weightings. [1]

(c) Explain why the result does not equal the expected denary value of 173. [2]

(d) State the correct denary result of 100 + 73. [1]

### Model Answer
(a)
```
  carry:  1
          0 1 1 0 0 1 0 0
        + 0 1 0 0 1 0 0 1
        = 1 0 1 0 1 1 0 1
```
Result: **10101101** [1]

(b) −128 + 32 + 8 + 4 + 1 = **−83** [1]

(c)
- The addition of two positive numbers has produced a result with MSB = 1, which is interpreted as a negative value in two's complement. [1]
- This occurs because 173 exceeds the maximum positive value representable in 8-bit two's complement (+127), so the result overflowed into the sign bit. [1]

(d) **173** [1]

### Examiner Tip
Part (c) requires two distinct points: first, that the result has an incorrect sign (positive + positive = negative), and second, the reason — that 173 > 127 and exceeds the representable range. A single-point answer such as "overflow occurred" earns only 1 mark out of 2.

---

## Question 10
**Syllabus Ref:** 1.1.2
**Marks:** 6
**Difficulty:** Hard
**Command Word:** State / Explain
**Type:** misconception

The 8-bit binary pattern 00100111 is stored in three separate memory locations. In each location it is interpreted using a different system:

- Location A: unsigned binary integer
- Location B: Binary Coded Decimal (BCD)
- Location C: 8-bit two's complement integer

For each location, state the denary value and explain why the same bit pattern produces a different result.

### Model Answer

**Location A — Unsigned binary:**
- Denary value: 32 + 4 + 2 + 1 = **39** [1]
- The bit pattern is treated as a standard weighted binary number where all column values are positive, so each 1 bit is summed as a positive power of 2. [1]

**Location B — BCD:**
- Denary value: **27** [1]
- The 8 bits are split into two 4-bit groups: 0010 = 2 and 0111 = 7. Each group independently encodes one decimal digit; the values represent 2 and 7, not the positional binary sum 39. [1]

**Location C — 8-bit two's complement:**
- Denary value: **39** [1]
- The MSB is 0, indicating a positive number; the remaining bits are interpreted as standard positive binary, giving the same result as unsigned binary (39). [1] If the MSB were 1, it would contribute −128 and the result would differ.

*(Note: Locations A and C happen to give the same value here because the MSB is 0 — they differ only when the MSB is 1. An answer that explains this distinction earns the mark for Location C.)*

### Examiner Tip
The common mistake is assuming BCD and binary must give different results. When the pattern only contains valid BCD digit codes (0000–1001 in each nibble), the outputs happen to differ numerically — but students must show the working for each system independently to earn full marks. Do not conflate Location A and C — explain why they coincide here.

---

## Question 11
**Syllabus Ref:** 1.1.3
**Marks:** 2
**Difficulty:** Medium
**Command Word:** Perform
**Type:** application

Subtract the denary number 23 from the two's complement binary number 01001010. Show your working.

### Model Answer
- Working: Convert 23 to binary = 00010111; find two's complement of 23: invert → 11101000 → add 1 → **11101001** [1]
```
  0100 1010
+ 1110 1001
= (1) 0011 0011
```
Discard carry.
- Answer: **00110011** [1]  
*(= 32 + 16 + 2 + 1 = 51, which equals 74 − 23 ✓)*

### Examiner Tip
[Past Paper — W24/11 Q1(c)] Both methods are accepted: two's complement addition or direct subtraction. The carry beyond 8 bits is discarded — it does not cause overflow because the result (51) is within the representable range.

---

## Question 12
**Syllabus Ref:** 1.1.2
**Marks:** 4
**Difficulty:** Hard
**Command Word:** Explain / Calculate
**Type:** analysis

A student claims: "BCD wastes memory because it uses more bits than binary to represent the same number."

(a) Calculate the number of bits required to store the denary value 95 in BCD. [1]

(b) Calculate the minimum number of bits required to store the denary value 95 in standard unsigned binary. [1]

(c) Explain whether the student's claim is correct, and state one application where using BCD is preferable despite the storage overhead. [2]

### Model Answer
(a) 95 in BCD: 9 → 1001; 5 → 0101 → two 4-bit groups = **8 bits** [1]

(b) 95 in binary = 01011111 → 7 significant bits; stored as a byte = **8 bits** (or minimum 7 bits). [1]  
*(1 mark for either 7 or 8, provided a valid justification is given.)*

(c)
- The student's claim is correct in general: a three-digit denary number such as 964 requires 12 bits in BCD but only 10 bits in binary, so BCD uses more storage for the same numeric value. [1]
- BCD is preferred in electronic display systems (such as digital clocks or calculators) because each digit maps directly to a display segment without requiring binary-to-decimal conversion, reducing circuit complexity. [1]

### Examiner Tip
Part (b): the question asks for the minimum bits, so 7 bits is technically correct for 95, but in practice 8-bit bytes are used — accept either with justification. Part (c): the application must be specific enough to explain why BCD's properties are advantageous, not simply that BCD "is used in clocks."
