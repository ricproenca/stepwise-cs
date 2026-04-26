# 6.1 Pseudocode Counting

> Source: https://moshikur.com/pseudocode/6-pseudocode-basic-operations/5-1-pseudocode-counting/

# 6.1 Pseudocode Counting

---

**UNDERSTANDING THE COUNTING** CONCEPT IN PSEUDOCODE  
  
**Objective:**  
Learn how to use the counting concept in pseudocode to solve problems that involve tracking the occurrence of certain values or conditions.

[TASKS](#tasks)

---

### What is Counting?

**Counting** is the process of incrementing a variable (called a counter) to keep track of how many times something happens. For example:

- Count how many numbers are positive.
- Count how many times a specific character appears in a string.
- Count how many students scored above a certain mark.

In pseudocode, the **counting concept** involves:

1. Initializing a counter to zero.
2. Incrementing the counter when a condition is met.
3. Using a loop to repeat the process.

### Key Steps to Implement Counting in Pseudocode

1. **Declare a counter variable.**  
   Start with Counter ← 0 to initialize the count to zero.
2. **Use a loop to process inputs or data.**  
   This allows you to evaluate multiple items, such as a list of numbers.
3. **Check a condition and increment the counter.**  
   Use an IF statement to verify a condition, and increase the counter when the condition is true.
4. **Display the result.**  
   Output the value of the counter after the loop ends.

---

### **Example Program**

**Problem: Count How Many Numbers are Positive**

Write a program to input 5 numbers and count how many of them are positive.

- DECLARE Counter: INTEGER
- DECLARE Number: INTEGER
- // Initialize the counter
- Counter ← 0
- // Loop to input 5 numbers
- FOR i ← 1 TO 5
- OUTPUT “Enter a number:”
- INPUT Number
- IF Number > 0 THEN
- Counter ← Counter + 1 // Increment if the number is positive
- ENDIF
- NEXT i
- // Output the result
- OUTPUT “The number of positive numbers is:”, Counter

**Trace Table Example**

Here’s how the pseudocode works when the user inputs the numbers: 3, -1, 0, 7, -4.

| Iteration (i) | Number | Counter Before | Condition (Number > 0) | Counter After | Explanation |
| --- | --- | --- | --- | --- | --- |
| 1 | 3 | 0 | TRUE | 1 | Increment because 3 > 0. |
| 2 | -1 | 1 | FALSE | 1 | No increment because -1 ≤ 0. |
| 3 | 0 | 1 | FALSE | 1 | No increment because 0 ≤ 0. |
| 4 | 7 | 1 | TRUE | 2 | Increment because 7 > 0. |
| 5 | -4 | 2 | FALSE | 2 | No increment because -4 ≤ 0. |

**Final Output:** The number of positive numbers is: 2

---

### **Advanced Examples**

**1. Count Even Numbers**

Count how many numbers are even in a list of 5 user inputs.

- DECLARE Counter : INTEGER
- DECLARE Number : INTEGER
- // Initialize the counter
- Counter ← 0
- // Loop to input 5 numbers
- FOR i ← 1 TO 5
- OUTPUT “Enter a number:”
- INPUT Number
- IF MOD(Number, 2) = 0 THEN
- Counter ← Counter + 1 // Increment if the number is even
- ENDIF
- NEXT i
- // Output the result
- OUTPUT “The number of even numbers is:”, Counter

**Trace Table**

| Iteration (i) | Number | Counter Before | Condition (MOD(Number, 2) = 0) | Counter After | OUTPUT |
| --- | --- | --- | --- | --- | --- |
| 1 | | | | | |
| 2 | | | | | |
| 3 | | | | | |
| 4 | | | | | |
| 5 | | | | | |

---

### **2. Count Specific Values**

Count how many numbers are equal to a specific value, for example 10.

- DECLARE Counter: INTEGER
- DECLARE Number: INTEGER
- // Initialize the counter
- Counter ← 0
- // Loop to input 5 numbers
- FOR i ← 1 TO 5
- OUTPUT “Enter a number:”
- INPUT Number
- IF Number = 10 THEN
- Counter ← Counter + 1 // Increment if the number equals 10
- ENDIF
- NEXT i
- // Output the result
- OUTPUT “The number of times 10 was entered is:”, Counter

| Iteration (i) | Number | Counter Before | Condition (Number = 10) | Counter After | OUTPUT |
| --- | --- | --- | --- | --- | --- |
| 1 | | | | | |
| 2 | | | | | |
| 3 | | | | | |
| 4 | | | | | |
| 5 | | | | | |

**3. Count Negative Numbers**

Count how many numbers are negative from 5 user inputs.

- DECLARE Counter : INTEGER
- DECLARE Number: INTEGER
- // Initialize the counter
- Counter ← 0
- // Loop to input 5 numbers
- FOR i ← 1 TO 5
- OUTPUT “Enter a number:”
- INPUT Number
- IF Number < 0 THEN
- Counter ← Counter + 1 // Increment if the number is negative
- ENDIF
- NEXT i
- // Output the result
- OUTPUT “The number of negative numbers is:”, Counter

**Trace Table**

| Iteration (i) | Number | Counter Before | Condition (Number < 0) | Counter After | OUTPUT |
| --- | --- | --- | --- | --- | --- |
| 1 | | | | | |
| 2 | | | | | |
| 3 | | | | | |
| 4 | | | | | |
| 5 | | | | | |

---

# **Practice Task**s

---

**Task:** Write a pseudocode algorithm to count how many numbers between 1 and 50 are divisible by 5. Output the count.

**Solution:**

```
DECLARE Count : INTEGER
Count ← 0

FOR Number ← 1 TO 50
    IF MOD(Number,5) = 0 THEN
        Count ← Count + 1
    ENDIF
NEXT Number

OUTPUT "Count of numbers divisible by 5:", Count
```

Note that for A Level syllabus, you are to use Number MOD 5. For example IF Number MOD 5 = 0 THEN

**Similar Task for Students:**

**Task 1:**  
Write a pseudocode algorithm to count how many numbers between 1 and 100 are divisible by both 4 and 6. Output the count.

**Task 2**: Write a program to input 10 numbers and count how many of them are positive.

---

**Task:**  
Write a pseudocode algorithm to calculate the sum of all even numbers between 1 and 20. Output the total sum.

**Solution:**

```
DECLARE Sum : INTEGER
FOR Number ← 1 TO 20
    IF MOD(Number,2) = 0 THEN
        Sum ← Sum + Number
    ENDIF
NEXT Number
OUTPUT "Sum of even numbers:", Sum
```

**Task 3:**  
Write a pseudocode algorithm to calculate the sum of all odd numbers between 1 and 25. Output the total sum.

---

## Intermediate Task

Write a pseudocode algorithm to count how many numbers between 1 and 100 are divisible by both 3 and 5. Output the count.

**Solution:**

```
DECLARE Count : INTEGER
Count ← 0

FOR Number ← 1 TO 100
    IF MOD(Number,3) = 0 AND MOD(Number,5) = 0 THEN
        Count ← Count + 1
    ENDIF
NEXT Number

OUTPUT "Count of numbers divisible by 3 and 5:", Count
```

**Task 4:**  
Write a pseudocode algorithm to count how many days in a year have a date (day of the month) divisible by both 4 and 6. Assume the year has 365 days. Output the count.

---

**Task:** Write a pseudocode algorithm to count how many numbers in an array of 10 integers are greater than 20. Output the count.

**Solution:**

```
DECLARE Numbers : ARRAY [1:10] OF INTEGER
DECLARE Count : INTEGER
Numbers ← [12, 45, 18, 30, 50, 7, 22, 27, 14, 8]

FOR i ← 1 TO 10
    IF Numbers[i] > 20 THEN
        Count ← Count + 1
    ENDIF
NEXT i

OUTPUT "Count of numbers greater than 20:", Count
```

**Task 5:**  
Write a pseudocode algorithm to count how many people in a list of ages are over 18 (adult) and how many are under 18 (minor). Output both counts.

---