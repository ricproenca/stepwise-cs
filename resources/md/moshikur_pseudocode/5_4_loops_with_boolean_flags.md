# 5.4 Loops with Boolean Flags

> Source: https://moshikur.com/pseudocode/pseudocode-loops/4-4-loops-with-boolean-flags/

# 5.4 Loops with Boolean Flags

# **Loops with Boolean Flags**

---

[![Graphic illustrating Boolean flags with 'TRUE' and 'FALSE' labeled, including a check mark next to 'TRUE' and a cross next to 'FALSE'.](images/pseudocode/5_4_loops_with_boolean_flags/img_001.png)](https://i0.wp.com/moshikur.com/wp-content/uploads/2025/10/image-16.png?ssl=1)

# What is a Boolean Flag?

A **Boolean flag** is a variable that can be either **TRUE** or **FALSE**. It is used to **control loops**, especially when:

- You do **not** know how many times the loop needs to run.
- You want the loop to **stop** when a certain **condition is met**.

---

## Why Use a Boolean Flag in a Loop?

You use a Boolean flag to:

- Keep the loop running **until** something happens.
- **Exit** the loop early when a condition becomes true.
- **Improve readability** by using a clear TRUE/FALSE condition.

---

## Loop Types That Use Boolean Flags

1. **REPEAT…UNTIL**
   - Loop runs **at least once**.
   - Condition is checked **after** each loop.
2. **WHILE…DO**
   - Loop checks the condition **before** each run.
   - Might **not run at all** if the condition is FALSE at the start.

---

## Example 1: Ask for a correct password

The user must enter the correct password `"Secret123"` to gain access.  
The program keeps asking until the correct password is entered.

### Pseudocode:

```
DECLARE Password : STRING

DECLARE Correct : BOOLEAN

Correct ← FALSE

REPEAT

OUTPUT "Enter password:"

INPUT Password

IF Password = "Secret123" THEN

Correct ← TRUE

ELSE

OUTPUT "Wrong password. Try again."

ENDIF

UNTIL Correct = TRUE

OUTPUT "Access granted"
```

### Explanation:

- The flag `Correct` starts as FALSE.
- The user is prompted to input a password.
- If the password is correct, `Correct ← TRUE`, and the loop ends.
- If not, the loop repeats.

> ### Student Task 1:
>
> Write a pseudocode algorithm that keeps asking the user to enter a secret word.  
> The secret word is `"OpenSesame"`.  
> If the user enters the wrong word, the program should display `"Try again"`.  
> The loop should stop only when the correct word is entered.  
> After the loop ends, display `"You may enter"`.

---

## Example 2: Ask for a number between 1 and 10

The program checks if the user enters a number in the correct range (1–10).

### Pseudocode:

```
DECLARE Number : INTEGER

DECLARE Valid : BOOLEAN

Valid ← FALSE

REPEAT

OUTPUT "Enter a number between 1 and 10"

INPUT Number

IF Number >= 1 AND Number <= 10 THEN

Valid ← TRUE

ELSE

OUTPUT "Invalid number. Try again."

ENDIF

UNTIL Valid = TRUE

OUTPUT "You entered: ", Number
```

### Explanation:

- The flag `Valid` controls the loop.
- The user is asked to enter a number.
- If the number is between 1 and 10, the loop ends.
- Otherwise, the loop continues.

> ### Student Task 2:
>
> Write a pseudocode algorithm that asks the user to enter an age.  
> The valid age must be **between 5 and 18** (inclusive).  
> If the user enters an invalid age, display `"Invalid age"` and ask again.  
> When a valid age is entered, display `"Age accepted"`.

---

## Example 3: Roll a dice until you get a 6

This simulates rolling a dice until a 6 appears.

### Pseudocode:

### IGCSE / O Level

```
DECLARE Roll : INTEGER

DECLARE GotSix : BOOLEAN

GotSix ← FALSE

REPEAT

Roll ← ROUND(RANDOM() * 5 + 1, 0)

OUTPUT "You rolled: ", Roll

IF Roll = 6 THEN

GotSix ← TRUE

ENDIF

UNTIL GotSix = TRUE

OUTPUT "You got a 6!"
```

### AS Level

```
DECLARE Roll : INTEGER

DECLARE GotSix : BOOLEAN

GotSix ← FALSE

REPEAT

DiceRoll ← INT(RAND(6)) + 1

OUTPUT "You rolled: ", Roll

IF Roll = 6 THEN

GotSix ← TRUE

ENDIF

UNTIL GotSix = TRUE

OUTPUT "You got a 6!"
```

### Explanation:

- `RANDOM()` generates a decimal number between 0 and 1.
- We multiply and round it to get numbers from 1 to 6.
- The loop keeps running until a 6 is rolled.
- The Boolean flag `GotSix` is used to end the loop.

> ### Student Task 3:
>
> Write a pseudocode algorithm that simulates flipping a coin until it lands on `"Heads"`.  
> Use the following technique:
>
> - Generate a random number between 0 and 1 using `RANDOM()` for igcse/o level or using `RAND(1)` for AS Level.
> - If the value is less than 0.5, it means `"Tails"`.
> - If it is 0.5 or more, it means `"Heads"`.
>
> Keep flipping the coin and showing the result until `"Heads"` appears.  
> Then display `"You got Heads!"`.

---

# Part 2: Using `WHILE...DO` Loops with Boolean Flags

In the first part of the tutorial, we used the `REPEAT...UNTIL` loop with a Boolean flag. Now we will learn how to use a **`WHILE...DO`** loop with Boolean flags.

### What is a `WHILE...DO` Loop?

- A `WHILE` loop checks the condition **before** running the code inside the loop.
- If the condition is **FALSE at the beginning**, the loop may **not run at all**.
- This is different from a `REPEAT` loop, which always runs at least once.

### When do we use a `WHILE` loop?

- When we want to **check the condition first**.
- When we might want to **skip the loop entirely** if the condition is already met.

### Boolean Flag Reminder

A **Boolean flag** is a variable with value `TRUE` or `FALSE` that helps us decide whether to continue or stop a loop.

Syntax for `WHILE` loop in pseudocode:

```
WHILE Condition DO

<statements>

ENDWHILE
```

---

## Example 4: Check for correct PIN using WHILE loop

The program asks the user to enter the correct PIN, `"4321"`.  
It keeps asking until the correct PIN is entered.  
It uses a Boolean flag called `Correct`.

### Pseudocode:

```
DECLARE PIN : STRING

DECLARE Correct : BOOLEAN

Correct ← FALSE

WHILE Correct = FALSE DO

OUTPUT "Enter PIN:"

INPUT PIN

IF PIN = "4321" THEN

Correct ← TRUE

ELSE

OUTPUT "Incorrect PIN. Try again."

ENDIF

ENDWHILE

OUTPUT "PIN accepted"
```

### Explanation:

- The flag `Correct` is used to control the loop.
- The loop continues **as long as** `Correct` is `FALSE`.
- Once the correct PIN is entered, `Correct` becomes `TRUE`, and the loop stops.

---

> ### Student Task 4:
>
> Write a pseudocode algorithm that asks the user to enter a username.  
> The correct username is `"AdminUser"`.  
> If the user enters the wrong username, display `"Invalid username"` and ask again.  
> Use a `WHILE` loop and a Boolean flag.  
> When the correct username is entered, display `"Welcome"`.

---

## Example 5: Enter a number greater than 100

This program uses a `WHILE` loop and a Boolean flag to ensure the user enters a number greater than 100.

### Pseudocode:

```
DECLARE Number : INTEGER

DECLARE Valid : BOOLEAN

Valid ← FALSE

WHILE Valid = FALSE DO

OUTPUT "Enter a number greater than 100"

INPUT Number

IF Number > 100 THEN

Valid ← TRUE

ELSE

OUTPUT "Too small. Try again."

ENDIF

ENDWHILE

OUTPUT "Thank you"
```

### Explanation:

- `Valid` controls whether the number is in the correct range.
- The loop runs as long as `Valid = FALSE`.
- When the number is greater than 100, `Valid` becomes TRUE, and the loop ends.

---

> ### Student Task 5:
>
> Write a pseudocode algorithm that asks the user to enter a test score.  
> The score must be between **0 and 50** (inclusive).  
> If the input is out of range, display `"Invalid score"` and ask again.  
> Use a `WHILE` loop and a Boolean flag.  
> When a valid score is entered, display `"Score accepted"`.

---

## Example 6: Keep generating random numbers until you get 100

This program generates random numbers between 1 and 100 using `RANDOM()`.  
It continues until the number 100 appears.  
A Boolean flag called `Found` is used to end the loop.

### Pseudocode:

### IGCSE / O Level

```
DECLARE Number : INTEGER

DECLARE Found : BOOLEAN

Found ← FALSE

WHILE Found = FALSE DO

Number ← ROUND(RANDOM() * 99 + 1, 0)

OUTPUT "Generated: ", Number

IF Number = 100 THEN

Found ← TRUE

ENDIF

ENDWHILE

OUTPUT "You got 100!"
```

### AS Level

```
DECLARE Number : INTEGER

DECLARE Found : BOOLEAN

Found ← FALSE

WHILE Found = FALSE DO

Number ← INT(RAND(100)) + 1

OUTPUT "Generated: ", Number

IF Number = 100 THEN

Found ← TRUE

ENDIF

ENDWHILE

OUTPUT "You got 100!"
```

### Explanation:

- `RANDOM()`for igcse/olevel or `RAND()` for AS Level generates a value from 0 to 1.
- The formula scales it to 1 to 100.
- The loop continues until 100 is generated.

---

> ### Student Task 6
>
> Write a pseudocode algorithm that keeps generating random numbers between 1 and 20.  
> The program should stop only when the number 7 is generated.  
> Use a Boolean flag and a `WHILE` loop.  
> Each time, display `"You got: "` followed by the number.  
> After the loop ends, display `"Lucky 7!"`.

---

## Summary Table

| Concept | Explanation |
| --- | --- |
| Boolean flag | Variable with TRUE or FALSE |
| REPEAT loop | Runs at least once, checks condition at end |
| WHILE loop | Checks condition before running |
| RANDOM + ROUND | Used to simulate random numbers (e.g., dice) |

---

## 🧠 Common Mistakes to Avoid

- Forgetting to **initialize** the Boolean flag.
- Using `=` instead of `←` for assignment.
- Using `TRUE` without declaring the variable as `BOOLEAN`.

---