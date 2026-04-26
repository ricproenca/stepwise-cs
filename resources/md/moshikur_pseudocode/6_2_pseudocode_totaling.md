# 6.2 Pseudocode Totaling

> Source: https://moshikur.com/pseudocode/6-pseudocode-basic-operations/6-2-pseudocode-totaling/

# 6.2 Pseudocode Totaling

# UNDERSTANDING THE TOTALING CONCEPT IN PSEUDOCODE

---

Learn how to calculate the total (or sum) of a series of numbers using a pseudocode program.

**What is Totaling?**

**Totaling** is the process of adding multiple values together to calculate their sum. For example:  
If you have the numbers 5, 10, and 15, their total is 5 + 10 + 15 = 30.

In pseudocode, this concept is applied by:

1. Initializing a variable to store the total (usually starting at 0).
2. Adding numbers to the total one by one.

[![Flowchart showing a process for summing input numbers, starting from a total of 0, followed by inputs of 7, 5, and 8, resulting in a final total of 20.](images/pseudocode/6_2_pseudocode_totaling/img_001.png)](https://i0.wp.com/moshikur.com/wp-content/uploads/2026/02/image-25.png?ssl=1)

---

**Key Steps to Implement Totaling in Pseudocode**

**Declare a variable to store the total.**  
Start with Total ← 0 because we begin with no sum.

**Use a loop to process numbers.**  
If there are multiple numbers, we use a loop to go through them.

**Add each number to the total.**  
Use an assignment statement like Total ← Total + Number.

**Display the final total.**

---

## **Example Program**

Let’s write a pseudocode program to calculate the total of 5 numbers entered by the user.

```
DECLARE Total: INTEGER

DECLARE Number: INTEGER

// Initialize Total to 0

Total ← 0

// Loop to input 5 numbers

FOR i ← 1 TO 5

OUTPUT "Enter a number:"

INPUT Number

Total ← Total + Number

NEXT i

// Output the total

OUTPUT "The total is:", Total
```

1. **Initialization:**
   - DECLARE Total : INTEGER initializes a variable to hold the sum of numbers.
   - Total ← 0 starts the total at zero since nothing has been added yet.
2. **Input and Loop:**
   - The FOR loop runs 5 times because we want the user to input 5 numbers.
   - INPUT Number takes a number from the user.
3. **Update the Total:**
   - Total ← Total + Number adds the current Number to Total.
4. **Output the Result:**
   - After the loop ends, OUTPUT displays the total of the 5 numbers.

## **Trace Table Example**

Here’s how the pseudocode works assuming the user inputs the numbers: 2, 4, 6, 8, 10.

| Iteration (i) | Number | Total Before | Total After | Explanation |
| --- | --- | --- | --- | --- |
| 1 | 2 | 0 | 2 | Add 2 to Total (0 + 2). |
| 2 | 4 | 2 | 6 | Add 4 to Total (2 + 4). |
| 3 | 6 | 6 | 12 | Add 6 to Total (6 + 6). |
| 4 | 8 | 12 | 20 | Add 8 to Total (12 + 8). |
| 5 | 10 | 20 | 30 | Add 10 to Total (20 + 10). |

**Final Output:**  
The total is: 30

---

# **TASKS**

**Example Task 1:** Input 5 numbers and calculate their total.

```
DECLARE Total: INTEGER

DECLARE Number: INTEGER

Total ← 0

FOR i ← 1 TO 5

INPUT Number

Total ← Total + Number

NEXT i

OUTPUT "The total is: ", Total
```

**Task 1:** Input the scores of 5 basketball players and calculate the team’s total score.

---

**Example Task 2:** Input 7 numbers and calculate the total of only the positive numbers.

```
DECLARE Total: INTEGER

DECLARE Number: INTEGER

Total ← 0

FOR i ← 1 TO 7

INPUT Number

IF Number > 0 THEN

Total ← Total + Number

ENDIF

NEXT i

OUTPUT "The total of positive numbers is: ", Total
```

**Task 2:** Input the temperatures recorded over 7 days and calculate the total of days with above-freezing temperatures (greater than 0°C).

---

**Example Task 3:** Input 5 numbers and calculate the total of numbers greater than 50.

```
DECLARE Total: INTEGER

DECLARE Number: INTEGER

Total ← 0

FOR i ← 1 TO 5

INPUT Number

IF Number > 50 THEN

Total ← Total + Number

ENDIF

NEXT i

OUTPUT "The total of numbers greater than 50 is: ", Total
```

**Task 3:** Input the prices of 5 products in a store and calculate the total of prices greater than $20.

---

**Example Task 4:** Input numbers until the total exceeds 100, then output the total.

```
DECLARE Total: INTEGER

DECLARE Number: INTEGER

Total ← 0

WHILE Total <= 100

INPUT Number

Total ← Total + Number

ENDWHILE

OUTPUT "The total is: ", Total
```

**Task 4:** Input donations to a fundraiser until the total reaches $500. Output the total amount collected.

---

**Example Task 5:** Input 10 numbers and calculate the total of even numbers.

```
DECLARE Total: INTEGER

DECLARE Number: INTEGER

Total ← 0

FOR i ← 1 TO 10

INPUT Number

IF Number MOD 2 = 0 THEN

Total ← Total + Number

ENDIF

NEXT i

OUTPUT "The total of even numbers is: ", Total
```

**Task 5:** Input the ages of 10 people and calculate the total age of those who are teenagers (13 to 19 years old).

---

**Example Task 6:** Input 5 numbers and calculate their total, then output the average.

```
DECLARE Total: INTEGER

DECLARE Number: INTEGER

DECLARE Average: REAL

Total ← 0

FOR i ← 1 TO 5

INPUT Number

Total ← Total + Number

NEXT i

Average ← Total / 5

OUTPUT "The total is: ", Total

OUTPUT "The average is: ", Average
```

**Task 6:** Input the scores of 6 exams and calculate the total and the average score. Then output whether the average score is a pass or fail (pass mark is 50).

---