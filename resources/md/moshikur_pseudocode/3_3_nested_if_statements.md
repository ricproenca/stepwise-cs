# 3.3 Nested IF Statements

> Source: https://moshikur.com/pseudocode/3-conditional-statements/4-3-nested-if-statements/

# 3.3 Nested IF Statements

---

According to the syllabus, candidates should understand and use **nested selection**, and will not be required to write more than **three levels of nesting**.

# What is a Nested IF?

A **nested IF** is an IF statement inside another IF statement.

It is used when:

## A second decision depends on the first decision.

[![A flowchart illustrating a nested IF statement with two conditions, showing TRUE and FALSE pathways and an action at the end.](images/pseudocode/3_3_nested_if_statements/img_001.png)](https://i0.wp.com/moshikur.com/wp-content/uploads/2026/02/image-21.png?ssl=1)

---

# Basic Structure

```
IF Condition1

THEN

IF Condition2

THEN

Statements

ENDIF

ENDIF
```

---

## Example 1 – Simple Nested IF

### Problem:

Check if a student passed.  
If passed, check if the grade is A.

### Example

```
DECLARE Marks : INTEGER

Marks ← 85

IF Marks >= 50

THEN

IF Marks >= 80

THEN

OUTPUT "Grade A"

ENDIF

ENDIF
```

### Explanation:

- First check: Marks ≥ 50 → TRUE
- Second check: Marks ≥ 80 → TRUE
- Output: “Grade A”

> ### ✏ Student Task 1
>
> Write pseudocode to:
>
> - Declare Score
> - Take the Score as input from the user
> - If Score ≥ 50
>   - Then check if Score ≥ 70
>     - Output “Distinction”
> - If Score < 50
>   - Output “Failed”

---

## Example 2 – With ELSE

Nested IF can also include ELSE.

### Problem:

Check voting eligibility.

### Example

```
DECLARE Age : INTEGER

Age ← 17

IF Age >= 18

THEN

IF Age >= 60

THEN

OUTPUT "Senior voter"

ELSE

OUTPUT "Adult voter"

ENDIF

ELSE

OUTPUT "Not eligible"

ENDIF
```

> ### ✏ Student Task 2
>
> Write pseudocode to:
>
> - Declare Temperature
> - Set Temperature to 30
> - If Temperature > 0
>   - Then check if Temperature > 25
>     - Output “Hot”
>   - Else output “Warm”
> - Else output “Freezing”

---

## Why Use Nested IF?

Nested IF is useful when:

- One decision depends on another.
- You need multiple levels of checking.

Example situations:

- Grading systems
- Ticket pricing
- User access levels
- Menu selections

---

## Example 3 – Real Exam Style

### Problem:

Check username and password.

### Example

```
DECLARE Username : STRING

DECLARE Password : STRING

Username ← "admin"

Password ← "1234"

IF Username = "admin"

THEN

IF Password = "1234"

THEN

OUTPUT "Login successful"

ELSE

OUTPUT "Wrong password"

ENDIF

ELSE

OUTPUT "Invalid username"

ENDIF
```

> ### ✏ Student Task 3
>
> Write pseudocode to:
>
> - Declare PIN
> - Set PIN to 5678
> - If PIN = 1234
>   - Output “Access granted”
> - Else
>   - Output “Access denied”

---

# Important Rules for Exams

✔ Indent properly  
✔ Use correct IF structure  
✔ Maximum three levels of nesting  
✔ Each IF must have matching ENDIF  
✔ Conditions must use relational operators

---

# Common Mistakes

❌ Forgetting ENDIF  
❌ Incorrect indentation  
❌ Using assignment instead of comparison  
❌ Writing more than three nested levels

---

# Challenge Question

Write pseudocode to:

- Input a number
- If the number is greater than 0
  - If the number is even → Output “Positive Even”
  - Else → Output “Positive Odd”
- Else → Output “Not positive”

---