# 5.2 Pseudocode Repeat Until Loop

> Source: https://moshikur.com/pseudocode/pseudocode-loops/pseudocode-repeat-until-loop/

# 5.2 Pseudocode – Repeat Until Loop

---

[![Diagram illustrating a 'REPEAT UNTIL' loop structure in programming, showing steps to print a message, input a value, and continue until a condition is met, resulting in an output of 'Done'.](images/pseudocode/5_2_pseudocode_repeat_until_loop/img_001.png)](https://i0.wp.com/moshikur.com/wp-content/uploads/2026/01/image-4.png?ssl=1)

The **REPEAT…UNTIL** loop is a way to repeat a set of instructions until a specific condition is **true**. Unlike the WHILE loop, it always runs at least once because the condition is checked **after** the instructions are executed.

[TASKS](#tasks)

---

### **Structure of a REPEAT…UNTIL Loop**

```
REPEAT

<instructions>

UNTIL <condition>
```

### **Example 1: Keep Asking for a Number Until It’s 0**

```
DECLARE Number: INTEGER

REPEAT

INPUT Number

UNTIL Number = 0
```

The loop keeps asking for a number. It stops when the number entered is 0.

---

### **Key Points**

- **Always runs at least once**: Because the condition is checked after the instructions.
- **Stops when condition is true**: Think of “until” as meaning “stop when this happens.”

---

# tasks

Using the example tasks as a guide, complete all tasks listed on the right side.

---

**Example Task 1:** Write pseudocode using a REPEAT…UNTIL loop to keep on inputting numbers until the number is 0.

```
DECLARE Number: INTEGER

REPEAT

INPUT Number

UNTIL Number = 0
```

**Task 1:** Keep on inputting numbers until the number is 999.

---

**Example Task 2:** Write pseudocode using a REPEAT…UNTIL loop to keep on inputting numbers until the number is within the range 0 and 100.

```
DECLARE Number: INTEGER

REPEAT

INPUT Number

UNTIL Number >= 0 AND Number <= 100
```

**Task 2:** Keep on inputting numbers until the number is within the range 50 and 150.

---

**Example Task 3:** Write pseudocode using a REPEAT…UNTIL loop to keep on inputting a string until the string is empty.

```
DECLARE UserInput : STRING

REPEAT

INPUT UserInput

UNTIL UserInput = ""
```

**Task 3:** Keep on inputting a string until the string is “STOP”.

---

**Example Task 4:** Write pseudocode using a REPEAT…UNTIL loop to keep on inputting a password until the password is “Abcd1234”. Output when the password is accepted or rejected.

```
DECLARE Password: STRING

REPEAT

INPUT Password

IF Password = "Abcd1234" THEN

OUTPUT "Password Accepted"

ELSE

OUTPUT "Password Rejected"

ENDIF

UNTIL Password = "Abcd1234"
```

**Task 4:** Keep on inputting a password until the password is “Secure123”. Output when the password is valid or invalid.

---

### Example Task: Double Entry Verification

Double entry verification is used to reduce errors by asking the user to enter the same value twice.

Write an algorithm (in pseudocode) to:

- input a password twice
- repeat the input until **both entries are the same**
- output `"Password accepted"` once the entries match

#### Example Answer (Pseudocode)

```
DECLARE Password1 : STRING

DECLARE Password2 : STRING

REPEAT

OUTPUT "Enter password"

INPUT Password1

OUTPUT "Re-enter password"

INPUT Password2

UNTIL Password1 = Password2

OUTPUT "Password accepted"
```

> ### Task: Double Entry Verification for Email Address
>
> Write an algorithm (in pseudocode) to:
>
> - input an email address twice
> - repeat the input until **both entries are the same**
> - output `"Email address confirmed"` once the entries match **[6]**

---

### Example Task: Double Entry Verification with Three Attempts

Double entry verification is used to reduce errors by asking the user to enter the same value twice.

Write an algorithm (in pseudocode) to:

- allow the user to enter a password twice
- repeat the input until **both entries are the same**
- stop after **three attempts** if the entries do not match
- output `"Password accepted"` if the entries match
- otherwise output `"Too many attempts"`

#### Example Answer (Pseudocode)

```
DECLARE Password1 : STRING

DECLARE Password2 : STRING

DECLARE Attempts : INTEGER

Attempts ← 0

REPEAT

OUTPUT "Enter password"

INPUT Password1

OUTPUT "Re-enter password"

INPUT Password2

Attempts ← Attempts + 1

UNTIL Password1 = Password2 OR Attempts = 3

IF Password1 = Password2 THEN

OUTPUT "Password accepted"

ELSE

OUTPUT "Too many attempts"

ENDIF
```

> ### Task: Email Double Entry Verification with two Attempts
>
> Write an algorithm (in pseudocode) to:
>
> - allow the user to enter an email address twice
> - repeat the input until **both entries are the same**
> - stop after **two attempts** if the entries do not match
> - output `"Email address confirmed"` if the entries match
> - otherwise output `"Verification failed` **[8]**

---

**Example Task 5:** Write pseudocode using a REPEAT…UNTIL loop to input 5 numbers and find their sum.

```
DECLARE Sum: INTEGER

DECLARE Counter: INTEGER

DECLARE Number: INTEGER

Sum ← 0

Counter ← 0

REPEAT

INPUT Number

Sum ← Sum + Number

Counter ← Counter + 1

UNTIL Counter = 5

OUTPUT "Sum is:", Sum
```

> **Task 4:** Input 6 numbers and find their sum.

Note: Please visit [Counting](https://moshikur.com/pseudocode/5-pseudocode-basic-operations/5-1-pseudocode-counting/) and [Totaling](https://moshikur.com/pseudocode/5-pseudocode-basic-operations/5-2-pseudocode-totaling/) section if you need help with these.

---

**Example Task 5:** Write pseudocode using a REPEAT…UNTIL loop to input 5 numbers and find their average.

```
DECLARE Sum: INTEGER

DECLARE Counter: INTEGER

DECLARE Number: INTEGER

DECLARE Average: REAL

Sum ← 0

Counter ← 0

REPEAT

INPUT Number

Sum ← Sum + Number

Counter ← Counter + 1

UNTIL Counter = 5

Average ← Sum / 5

OUTPUT "Average is:", Average
```

**Task 5:** Input 4 numbers and find their average.

Note: Please visit [Counting](https://moshikur.com/pseudocode/5-pseudocode-basic-operations/5-1-pseudocode-counting/) and [Totaling](https://moshikur.com/pseudocode/5-pseudocode-basic-operations/5-2-pseudocode-totaling/) section if you need help with these.

---

**Example Task 6:** Write pseudocode using a REPEAT…UNTIL loop to input 5 numbers and find how many are positive and how many are negative.

```
DECLARE Counter: INTEGER

DECLARE Number: INTEGER

DECLARE PositiveCount : INTEGER

DECLARE NegativeCount : INTEGER

Counter ← 0

PositiveCount ← 0

NegativeCount ← 0

REPEAT

INPUT Number

IF Number > 0 THEN

PositiveCount ← PositiveCount + 1

ELSE

NegativeCount ← NegativeCount + 1

ENDIF

Counter ← Counter + 1

UNTIL Counter = 5

OUTPUT "Positive numbers:", PositiveCount

OUTPUT "Negative numbers:", NegativeCount
```

**Task 6:** Input 6 numbers and find how many are even and how many are odd.

Note: Please visit [Counting](https://moshikur.com/pseudocode/5-pseudocode-basic-operations/5-1-pseudocode-counting/) and [Totaling](https://moshikur.com/pseudocode/5-pseudocode-basic-operations/5-2-pseudocode-totaling/) section if you need help with these.

---