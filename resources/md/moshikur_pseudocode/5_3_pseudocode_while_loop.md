# 5.3 Pseudocode While Loop

> Source: https://moshikur.com/pseudocode/pseudocode-loops/pseudocode-while-loop/

# 5.3 Pseudocode – While Loop

[![Code snippet illustrating a while loop structure with 'condition' and loop body, set against a soft cloud background.](images/pseudocode/5_3_pseudocode_while_loop/img_001.png)](https://i0.wp.com/moshikur.com/wp-content/uploads/2026/01/image-50.png?ssl=1)

A **WHILE loop** is a way to make a computer repeat a set of instructions as long as a specific condition is true. It’s like saying, “Keep doing this until something changes.”

[TASKS](#tasks)

[GO TO ASSIGNMENT](#assignment)

---

### **Structure of a WHILE Loop in Pseudocode**

```
WHILE <condition is true>

<instructions to repeat>

ENDWHILE
```

---

### **Example : Asking for the Right Input**

This loop keeps asking for a password until the correct one is entered:

```
DECLARE Password: STRING

INPUT Password

WHILE Password <> "Secret123"

OUTPUT "Try again"

INPUT Password

ENDWHILE

OUTPUT "Access Granted"
```

1. The user is asked to enter a password.
2. The loop runs as long as the password is not `"Secret123"`.
3. Once the correct password is entered, the loop stops.

---

# TASKS

---

Write pseudocode using a WHILE loop to keep inputting numbers until the number is 999.

```
DECLARE Number: INTEGER

INPUT Number

WHILE Number <> 999

INPUT Number

ENDWHILE
```

**TASK 1:** Write pseudocode using a WHILE loop to keep inputting a string until the string is “Abcd1234”.

---

Write pseudocode using a WHILE loop to keep inputting numbers until the number is within the range 100 and 200.

```
DECLARE Number: INTEGER

INPUT Number

WHILE Number < 100 OR Number > 200

INPUT Number

ENDWHILE
```

**Task2:** Keep on inputting numbers until the number is within the range 50 and 100.

---

Write pseudocode using a WHILE loop to input numbers until the input is greater than 100.

```
DECLARE Number: INTEGER

INPUT Number

WHILE Number <= 100

INPUT Number

ENDWHILE
```

**Task 3:** Input numbers until the input is less than 50.

---

Write pseudocode using a WHILE loop to output “Hello world” 5 times.

```
DECLARE Counter: INTEGER

Counter ← 0

WHILE Counter < 5

OUTPUT "Hello world"

Counter ← Counter + 1

ENDWHILE
```

**Task 4:** Output “Good morning” 10 times.

---

Write pseudocode using a WHILE loop to output the numbers from 1 to 10.

```
DECLARE Counter: INTEGER

Counter ← 1

WHILE Counter <= 10

OUTPUT Counter

Counter ← Counter + 1

ENDWHILE
```

**Task 5:** Output the numbers from 10 to 1.

---

Write pseudocode using a WHILE loop to input 5 numbers and find their sum.

```
DECLARE Sum: INTEGER

DECLARE Counter: INTEGER

DECLARE Number: INTEGER

Sum ← 0

Counter ← 0

WHILE Counter < 5

INPUT Number

Sum ← Sum + Number

Counter ← Counter + 1

ENDWHILE

OUTPUT "Sum is:", Sum
```

TASK 6: Input 4 numbers and find their product.

---

Write pseudocode using a WHILE loop to input numbers and calculate their total until the total exceeds 500.

```
DECLARE Total: INTEGER

DECLARE Number: INTEGER

Total ← 0

WHILE Total <= 500

INPUT Number

Total ← Total + Number

ENDWHILE
```

**Task 7:** Input numbers and calculate their total until the total is greater than 50.

---

Write pseudocode using a WHILE loop to input a number and count how many times an even number is entered.

```
DECLARE Number: INTEGER

DECLARE EvenCount : INTEGER

EvenCount ← 0

INPUT Number

WHILE Number <> 0

IF Number MOD 2 = 0 THEN

EvenCount ← EvenCount + 1

ENDIF

INPUT Number

ENDWHILE

OUTPUT "Even numbers entered:", EvenCount
```

**Task 8:** Input numbers and count how many odd numbers and how many even numbers are entered.

---

Write pseudocode using a WHILE loop to input ages and stop if an age less than 18 is entered.

```
DECLARE Age: INTEGER

INPUT Age

WHILE Age >= 18

INPUT Age

ENDWHILE
```

**Task 9:** Input test scores and stop if a score greater than 100 is entered.

---

Write pseudocode using a WHILE loop to output the sum of all numbers from 1 to 20.

```
DECLARE Counter: INTEGER

DECLARE Sum: INTEGER

Counter ← 1

Sum ← 0

WHILE Counter <= 20

Sum ← Sum + Counter

Counter ← Counter + 1

ENDWHILE

OUTPUT "Sum is:", Sum
```

**Task 10:** Output the sum of all even numbers from 1 to 30.

---

Write pseudocode using a WHILE loop to input 5 numbers and find how many are positive and how many are negative.

```
DECLARE Counter: INTEGER

DECLARE Number: INTEGER

DECLARE PositiveCount : INTEGER

DECLARE NegativeCount : INTEGER

Counter ← 0

PositiveCount ← 0

NegativeCount ← 0

WHILE Counter < 5

INPUT Number

IF Number > 0 THEN

PositiveCount ← PositiveCount + 1

ELSE

NegativeCount ← NegativeCount + 1

ENDIF

Counter ← Counter + 1

ENDWHILE

OUTPUT "Positive numbers:", PositiveCount

OUTPUT "Negative numbers:", NegativeCount
```

TASK 11: Input 6 numbers and count how many are even and how many are odd.

---

# Final Challenge

A program is needed to keep track of the number of cars in a parking lot.

- The program uses a variable called `Space` to store the current number of cars in the parking lot.
- The user can enter one of three string commands:
  - `"enter"`: increases the value of `Space` by 1
  - `"exit"`: decreases the value of `Space` by 1
  - `"close"`: ends the program

Write a pseudocode algorithm that:

- declares all required variables
- continually takes input from the user using a `WHILE` loop
- updates the value of `Space` depending on the command entered
- stops when the user inputs `"close"`

Your pseudocode must follow the rules given in the IGCSE pseudocode guide.

Click for hints

Use the correct **data type** for both variables:

- `Command` should be a `STRING`
- `Space` should be an `INTEGER`

The loop should continue **as long as the command is not equal to `"close"`**.

Use **IF… THEN… ELSE** statements to check if the command is `"enter"` or `"exit"`.

**Increase** `Space` by 1 for `"enter"`, and **decrease** by 1 for `"exit"`.

Make sure to **input the next command** inside the loop, so the condition can be checked again.

Do **not** use `ENDWHILE` — use the correct IGCSE-style `WHILE ... ENDWHILE` with proper indentation, as per the guide.

---

## **Extension 1**

Make these modifications to the program:  
  
If the user enters `"exit"` when the parking lot is empty (**Space** is 0), the program should display the message `"Parking lot empty"` and not decrease the value of **Space**.  
  
The parking lot can hold a maximum of **10 cars**. If the user enters `"enter"` when the parking lot is full, the program should display the message `"Parking lot full"` and not increase the value of **Space**.

## **Extension 2**

- Use an array called **Plates** to store the number plates of cars in the parking lot.
- When the user enters `"enter"`, they must also input the car’s number plate, which will be stored in the **Plates** array at the next available position.
- When the user enters `"exit"`, they must also input the car’s number plate.
- A **linear search** is performed on the **Plates** array to find the plate.
  - If found, the program replaces that plate with an empty string (`""`) and decreases the value of **Space** by 1.
  - If not found, the program displays `"Number plate not found"`.

Answer:

```
DECLARE Command : STRING
DECLARE Space : INTEGER

Space ← 0
INPUT Command

WHILE Command <> "close"
    IF Command = "enter" THEN
        Space ← Space + 1
        OUTPUT "Car entered. Total cars: ", Space
    ELSE
        IF Command = "exit" THEN
            Space ← Space - 1
            OUTPUT "Car exited. Total cars: ", Space
        ENDIF
    ENDIF
    INPUT Command
ENDWHILE
```