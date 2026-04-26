# 6.5 Using Trace Tables

> Source: https://moshikur.com/pseudocode/6-pseudocode-basic-operations/5-6-using-trace-tables/

# 5.6 Using Trace Tables

---

# How to Use a Trace Table

[![Trace table illustrating steps, input values, variable changes, and conditions in a pseudocode algorithm for educational purposes.](images/pseudocode/6_5_using_trace_tables/img_001.png)](https://i0.wp.com/moshikur.com/wp-content/uploads/2025/10/image-70.png?ssl=1)

### What is a Trace Table?

A **trace table** is a tool used to simulate the execution of an algorithm. It shows how variables change step-by-step. It helps you:

- Understand how a program works
- Track the flow of control
- Identify logic errors

---

### When to Use a Trace Table

You will be asked to trace through:

- Loops (FOR, WHILE, REPEAT…UNTIL)
- Conditional statements (IF…THEN…ELSE)
- Variable updates (e.g., counting, summing)
- Array indexing and assignments

---

### Steps to Use a Trace Table

1. **Start from the first instruction** and record values step-by-step.

2. **Update the variables** after each relevant line of pseudocode.

3. **Write outputs** in the row when they occur.

---

### Example

**Pseudocode:**

```
DECLARE Total : INTEGER
DECLARE Num : INTEGER
Total ← 0
FOR i ← 1 TO 3
    INPUT Num
    IF Num > 10 THEN
        Total ← Total + Num
    ENDIF
NEXT i
OUTPUT Total
```

**Input Values:**  
5, 12, 15

**Trace Table Format:**

| i | Num | Total | Output |
| --- | --- | --- | --- |
| 1 | 5 | 0 | |
| 2 | 12 | 12 | |
| 3 | 15 | 27 | |
| – | – | – | 27 |

This trace table shows how the variables change as the program runs **step-by-step**.

We are tracing:

- The loop counter `i`
- The current value input as `Num`
- The accumulated value of `Total`
- The final **output** after the loop ends

### Line-by-Line Execution:

---

#### Line 1–3:

```
DECLARE Total : INTEGER
DECLARE Num : INTEGER
Total ← 0
```

- Two variables are declared.
- `Total` is initialized to `0`.

---

#### Line 4:

```
FOR i ← 1 TO 3
```

- This loop will repeat **3 times**: i = 1, 2, 3.

---

#### First Iteration (i = 1):

- `INPUT Num` → value from input is `5`
- `Num > 10` → `5 > 10` is **False**
- So, `Total` stays the same (`0`)
- Output is not generated inside the loop.

**Trace Table Row:**

| i | Num | Total | Output |
| --- | --- | --- | --- |
| 1 | 5 | 0 | |

---

#### Second Iteration (i = 2):

- `INPUT Num` → value is `12`
- `Num > 10` → `12 > 10` is **True**
- `Total ← Total + Num` → `Total ← 0 + 12` → `Total = 12`

**Trace Table Row:**

| i | Num | Total | Output |
| --- | --- | --- | --- |
| 2 | 12 | 12 | |

---

#### Third Iteration (i = 3):

- `INPUT Num` → value is `15`
- `Num > 10` → `15 > 10` is **True**
- `Total ← Total + Num` → `Total ← 12 + 15` → `Total = 27`

**Trace Table Row:**

| i | Num | Total | Output |
| --- | --- | --- | --- |
| 3 | 15 | 27 | |

---

#### After the Loop:

```
OUTPUT Total
```

- The final value of `Total` is `27`
- This is displayed as output.

| i | Num | Total | Output |
| --- | --- | --- | --- |
| – | – | – | 27 |

---

# Practice Questions

**Pseudocode:**

```
DECLARE Sum : INTEGER
Sum ← 0
FOR i ← 1 TO 4
    IF i MOD 2 = 0 THEN
        Sum ← Sum + i
    ENDIF
NEXT i
OUTPUT Sum
```

## TASK 1

Complete the trace table with columns: `i`, `Sum`, `Output`.

---

## Task 2: REPEAT Loop with Boolean Control

**Pseudocode:**

```
DECLARE Num : INTEGER
DECLARE Sum : INTEGER
Sum ← 0

REPEAT
    INPUT Num
    IF Num >= 0 THEN
        Sum ← Sum + Num
    ENDIF
UNTIL Num = -1

OUTPUT Sum
```

**Input Values:** `3`, `7`, `-4`, `8`, `-1`

### Complete the trace table:

| Num | Sum | Output |
| --- | --- | --- |
| | | |
| | | |
| | | |
| | | |
| | | |
| – | – | Sum: \_\_\_ |

---

## Task 3: Nested IF with MOD and DIV

```
DECLARE Num : INTEGER
DECLARE Result : INTEGER

FOR i ← 1 TO 5
    INPUT Num
    IF Num MOD 2 = 0 THEN
        IF Num DIV 3 = 2 THEN
            Result ← Num * 2
        ELSE
            Result ← Num + 5
        ENDIF
    ELSE
        Result ← Num
    ENDIF
    OUTPUT Result
NEXT i
```

**Input Values:** `6`, `5`, `8`, `3`, `12`

### Complete the trace table:

| i | Num | Result | Output |
| --- | --- | --- | --- |
| | | | |
| | | | |
| | | | |
| | | | |
| | | | |

---

## Task 4: Array and Conditional Logic

```
DECLARE Scores : ARRAY[1:5] OF INTEGER
DECLARE Count : INTEGER
DECLARE Total : INTEGER

Scores[1] ← 45
Scores[2] ← 68
Scores[3] ← 55
Scores[4] ← 72
Scores[5] ← 49

Count ← 0
Total ← 0

FOR i ← 1 TO 5
    IF Scores[i] > 50 THEN
        Count ← Count + 1
        Total ← Total + Scores[i]
    ENDIF
NEXT i

OUTPUT Count
OUTPUT Total
```

### Complete the trace table below:

| i | Scores[i] | Count | Total | Output |
| --- | --- | --- | --- | --- |
| | | | | |
| | | | | |
| | | | | |
| | | | | |
| | | | | |
| – | – | – | – | Count: \_\_\_ |
| – | – | – | – | Total: \_\_\_ |

---