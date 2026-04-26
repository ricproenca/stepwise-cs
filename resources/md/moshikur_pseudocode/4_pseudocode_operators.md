# 4 Pseudocode Operators

> Source: https://moshikur.com/pseudocode/3-pseudocode-operators/

# 4 Pseudocode – Operators

# [4.1](#3.1)

---

## [Arithmetic Operators](#3.1)

---

– \* / ^ MOD DIV

# [4.2](#3.2)

---

## [Relational Operators](#3.2)

---

= > < >= <= <>

# [4.3](#3.3)

---

## [Logical operators](#3.3)

---

AND OR NOT

# 4.1 Arithmetic Operators

According to the syllabus, arithmetic operators are limited to:

```
+   -   *   /   ^   MOD   DIV
```

After **each example**, you will find a **similar task for you to practise**.

---

# Addition `+`

Adds two values together.

### Example

```
DECLARE Total : INTEGER

Total ← 8 + 5

OUTPUT Total
```

Output:

```
13
```

> ### ✏ Student Task 3.1.1
>
> Write pseudocode to:
>
> - Add 14 and 9
> - Store the result in a variable called Answer
> - Output the result

---

# Subtraction `-`

Subtracts one value from another.

### Example

```
DECLARE Result : INTEGER

Result ← 20 - 6

OUTPUT Result
```

Output:

```
14
```

> ### ✏ Student Task 3.1.2
>
> Write pseudocode to:
>
> - Subtract 15 from 40
> - Store the answer in Difference
> - Output the result

---

# Multiplication `*`

Multiplies two numbers.

### Example

```
DECLARE Product : INTEGER

Product ← 7 * 4

OUTPUT Product
```

Output:

```
28
```

> ### ✏ Student Task 3.1.3
>
> Write pseudocode to:
>
> - Multiply 9 by 6
> - Store the result in Total
> - Output the result

---

# Division

Performs normal division.

⚠ `/` may give a REAL (decimal) result.

### Example

```
DECLARE Answer : REAL

Answer ← 9 / 4

OUTPUT Answer
```

Output:

```
2.25
```

> ### ✏ Student Task 3.1.4
>
> Write pseudocode to:
>
> - Divide 15 by 2
> - Store the result in Result
> - Output the answer
>
> (Hint: What data type should you use?)

---

# Power `^`

Raises a number to a power.

### Example

```
DECLARE Result : INTEGER

Result ← 3 ^ 2

OUTPUT Result
```

Output:

```
9
```

> ### ✏ Student Task 3.1.5
>
> Write pseudocode to:
>
> - Calculate 4 ^ 3
> - Store the result in PowerValue
> - Output the answer

---

# `DIV` (Integer Division)

## What is `DIV`?

`DIV(a, b)` returns the **whole number part only** when dividing.

It **removes the decimal part**.

---

## Format (Must Be Written Exactly Like This)

## IGCSE / O Level

```
DIV(a, b)
```

## AS Level

```
a DIV b
```

---

## Example 1

```
DIV(17, 5)
```

Step-by-step:

17 ÷ 5 = 3 remainder 2

`DIV(17, 5)` = **3**

> ### ✏ Student Task 3.1.6
>
> Find the value of:
>
> ```
> DIV(22, 4)
> ```

---

## Example 2 in Pseudocode

```
DECLARE Result : INTEGER

Result ← DIV(29, 6)

OUTPUT Result
```

29 ÷ 6 = 4 remainder 5

Output:

```
4
```

> ### ✏ Student Task 3.1.7
>
> Write pseudocode to:
>
> - Calculate how many full groups of 8 can be made from 50 items
> - Store the result in Groups
> - Output the result

---

### Example 3

```
DECLARE Result : INTEGER

Result ← DIV(19, 4)

OUTPUT Result
```

Output:

```
4
```

(19 ÷ 4 = 4 remainder 3 — fraction removed)

> ### ✏ Student Task 3.1.8
>
> Write pseudocode to:
>
> - Find how many full groups of 5 can be made from 23 items
> - Store the answer in Groups
> - Output the result

---

## Real Exam Use of `DIV`

Example:  
You have 45 students.  
Each class can hold 10 students.

```
Classes ← DIV(45, 10)
```

> Answer:
>
> ```
> 4 full classes
> ```
>
> (The remaining students are ignored.)

---

# `MOD` (Remainder)

## What is `MOD`?

`MOD(a, b)` returns the **remainder** after division.

---

## Format (Must Be Written Exactly Like This)

### IGCSE / O Level

```
MOD(a, b)
```

### AS Level

```
a MOD b
```

---

## Example 1

```
MOD(17, 5)
```

17 ÷ 5 = 3 remainder 2

`MOD(17, 5)` = **2**

> ### ✏ Student Task 3.1.9
>
> Find the value of:
>
> ```
> MOD(22, 4)
> ```

---

## Example 2 in Pseudocode

```
DECLARE Remainder : INTEGER

Remainder ← MOD(29, 6)

OUTPUT Remainder
```

29 ÷ 6 = 4 remainder 5

Output:

```
5
```

> ### ✏ Student Task 3.1.10
>
> Write pseudocode to:
>
> - Find the remainder when 53 is divided by 7
> - Store the result in LeftOver
> - Output the answer

---

### Example 3

```
DECLARE Result : INTEGER

Result ← MOD(19, 4)

OUTPUT Result
```

Output:

```
3
```

> ### ✏ Student Task 3.1.11
>
> Write pseudocode to:
>
> - Find the remainder when 45 is divided by 8
> - Store the answer in Remainder
> - Output the result

---

# Comparing `/`, `DIV`, and `MOD`

Let’s use 22 ÷ 4:

| Expression | Result |
| --- | --- |
| 22 / 4 | 5.5 |
| DIV(22, 4) | 5 |
| MOD(22, 4) | 2 |

# Checking Even Numbers

A number is even if:

```
MOD(Number, 2) = 0
```

## Example

```
DECLARE Number : INTEGER

Number ← 18

IF MOD(Number, 2) = 0

THEN

OUTPUT "Even"

ENDIF
```

> ### ✏ Student Task 3.1.12
>
> Write pseudocode to:
>
> - Input a number
> - Output “Odd” if the number is odd  
>   (Hint: Use MOD)

---

# Quick Summary

| Operator | What It Returns |
| --- | --- |
| / | Decimal answer |
| DIV | Whole number only |
| MOD | Remainder |

# Challenge Question

Write pseudocode to:

- Input a number
- Output the square of the number
- Output the remainder when the number is divided by 3

---

# 4.2 Relational Operators

---

Relational operators are used to **compare two values**.

They are commonly used inside:

- `IF` statements
- `WHILE` loops

They always return a **Boolean value**:

```
TRUE

FALSE
```

---

# List of Relational Operators

| Operator | Meaning |
| --- | --- |
| = | Equal to |
| < | Less than |
| <= | Less than or equal to |
| > | Greater than |
| >= | Greater than or equal to |
| <> | Not equal to |

---

# Equal To `=`

Checks if two values are equal.

### Example

```
DECLARE Number : INTEGER

Number ← 10

IF Number = 10

THEN

OUTPUT "Correct"

ENDIF
```

The condition `Number = 10` is TRUE.

> ### ✏ Student Task 3.2.1
>
> Write pseudocode to:
>
> - Declare a variable called Score
> - Set Score to 50
> - Output “Pass” if Score equals 50

---

# Less Than `<`

Checks if one value is smaller than another.

### Example

```
DECLARE Age : INTEGER

Age ← 15

IF Age < 18

THEN

OUTPUT "Minor"

ENDIF
```

15 is less than 18 → TRUE.

> ### ✏ Student Task 3.2.2
>
> Write pseudocode to:
>
> - Declare Temperature
> - Set Temperature to 5
> - Output “Cold” if Temperature is less than 10

---

# Less Than or Equal To `<=`

Checks if a value is smaller than OR equal to another value.

### Example

```
DECLARE Marks : INTEGER

Marks ← 40

IF Marks <= 40

THEN

OUTPUT "Borderline"

ENDIF
```

> ### ✏ Student Task 3.2.3
>
> Write pseudocode to:
>
> - Declare Speed
> - Set Speed to 60
> - Output “Within limit” if Speed is less than or equal to 60

---

# Greater Than `>`

Checks if one value is larger than another.

### Example

```
DECLARE Score : INTEGER

Score ← 85

IF Score > 80

THEN

OUTPUT "Excellent"

ENDIF
```

> ### ✏ Student Task 3.2.4
>
> Write pseudocode to:
>
> - Declare Height
> - Set Height to 180
> - Output “Tall” if Height is greater than 170

---

# Greater Than or Equal To `>=`

Checks if a value is larger than OR equal to another value.

### Example

```
DECLARE Age : INTEGER

Age ← 18

IF Age >= 18

THEN

OUTPUT "Adult"

ENDIF
```

> ### ✏ Student Task 3.2.5
>
> Write pseudocode to:
>
> - Declare Level
> - Set Level to 5
> - Output “Unlocked” if Level is greater than or equal to 5

---

# Not Equal To `<>`

Checks if two values are NOT equal.

### Example

```
DECLARE Attempts : INTEGER

Attempts ← 3

IF Attempts <> 5

THEN

OUTPUT "Try again"

ENDIF
```

Since 3 is not equal to 5 → TRUE.

> ### ✏ Student Task 3.2.6
>
> Write pseudocode to:
>
> - Declare PIN
> - Set PIN to 1234
> - Output “Incorrect PIN” if PIN is not equal to 4321

---

# Important Notes

✔ `=` means equal to (NOT assignment — assignment uses ←)

✔ `<>` means not equal

✔ Relational operators return TRUE or FALSE

✔ Relational operators are used in conditions

---

# Quick Comparison Example

If:

```
Number ← 10
```

| Condition | Result |
| --- | --- |
| Number = 10 | TRUE |
| Number < 5 | FALSE |
| Number >= 10 | TRUE |
| Number <> 8 | TRUE |

---

# Challenge Question

Write pseudocode to:

- Input a number
- Output “Positive” if the number is greater than 0
- Output “Zero” if the number equals 0
- Output “Negative” otherwise

---

# 4.3 Logical Operators

Logical operators are used to **combine conditions** in algorithms.

They are mainly used inside:

- `IF` statements
- `WHILE` loops

Logical operators work with **Boolean values**:

```
TRUE

FALSE
```

---

# Logical Operators

| Operator | Meaning |
| --- | --- |
| AND | Both conditions must be TRUE |
| OR | At least one condition must be TRUE |
| NOT | Reverses the Boolean value |

# AND Operator

`AND` is TRUE only when **both conditions are TRUE**.

---

## Example 1

```
DECLARE Age : INTEGER

Age ← 25

IF Age >= 18 AND Age <= 60

THEN

OUTPUT "Working age"

ENDIF
```

Explanation:

- Age ≥ 18 → TRUE
- Age ≤ 60 → TRUE
- TRUE AND TRUE → TRUE

So the message is displayed.

> ### ✏ Student Task 3.3.1
>
> Write pseudocode to:
>
> - Declare Marks
> - Set Marks to 75
> - Output “Grade B” if Marks is greater than or equal to 70 AND less than 80

---

## AND Truth Table

| A | B | A AND B |
| --- | --- | --- |
| TRUE | TRUE | TRUE |
| TRUE | FALSE | FALSE |
| FALSE | TRUE | FALSE |
| FALSE | FALSE | FALSE |

---

# OR Operator

`OR` is TRUE if **at least one condition is TRUE**.

---

## Example 2

```
DECLARE Score : INTEGER

Score ← 35

IF Score < 40 OR Score = 0

THEN

OUTPUT "Fail"

ENDIF
```

Explanation:

- Score < 40 → TRUE
- TRUE OR anything → TRUE

> ### ✏ Student Task 3.3.2
>
> Write pseudocode to:
>
> - Declare Temperature
> - Set Temperature to 30
> - Output “Hot” if Temperature is greater than 28 OR equal to 28

---

## OR Truth Table

| A | B | A OR B |
| --- | --- | --- |
| TRUE | TRUE | TRUE |
| TRUE | FALSE | TRUE |
| FALSE | TRUE | TRUE |
| FALSE | FALSE | FALSE |

---

# NOT Operator

`NOT` reverses the Boolean value.

- NOT(TRUE) → FALSE
- NOT(FALSE) → TRUE

---

## Example 3

```
DECLARE LoggedIn : BOOLEAN

LoggedIn ← FALSE

IF NOT(LoggedIn)

THEN

OUTPUT "Access denied"

ENDIF
```

Explanation:

- LoggedIn = FALSE
- NOT(FALSE) = TRUE

So the message is displayed.

> ### ✏ Student Task 3.3.3
>
> Write pseudocode to:
>
> - Declare GameOver as BOOLEAN
> - Set GameOver to TRUE
> - Output “Game continues” if NOT(GameOver)

---

# Combining Logical Operators

Logical operators can be combined in the same condition.

---

## Example 4

```
DECLARE Age : INTEGER

DECLARE HasTicket : BOOLEAN

Age ← 16

HasTicket ← TRUE

IF Age >= 12 AND HasTicket = TRUE

THEN

OUTPUT "Entry allowed"

ENDIF
```

> ### ✏ Student Task 3.3.4
>
> Write pseudocode to:
>
> - Declare Age and IsMember
> - Set Age to 20
> - Set IsMember to TRUE
> - Output “Discount applied” if Age is greater than 18 AND IsMember is TRUE

---

# Example

Write pseudocode to:

- Input a number
- Output “Valid” if the number is between 10 and 50 inclusive

Correct logic structure:

```
IF Number >= 10 AND Number <= 50
```

> ### ✏ Student Task 3.3.5
>
> Write pseudocode to:
>
> - Input a number
> - Output “Outside range” if the number is less than 1 OR greater than 100

---

# ⚠ Common Exam Mistakes

❌ Confusing AND and OR  
❌ Forgetting that AND requires both conditions TRUE  
❌ Writing = instead of ← in assignments  
❌ Not using brackets with NOT

---

# Quick Summary

| Operator | When TRUE |
| --- | --- |
| AND | Both conditions TRUE |
| OR | At least one TRUE |
| NOT | Reverses condition |

---