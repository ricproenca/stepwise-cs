# 5.1 For Loop

> Source: https://moshikur.com/pseudocode/pseudocode-loops/4-1-for-loop/

# 5.1 For Loop

---

[![Diagram illustrating a Python count-controlled for loop, showing the process of iterating from 1 to 5 and printing each value.](images/pseudocode/5_1_for_loop/img_001.png)](https://i0.wp.com/moshikur.com/wp-content/uploads/2026/01/image-3.png?ssl=1)

### **Understanding FOR Loop**

A **FOR loop** is a way to repeat a set of instructions a specific number of times. It’s like telling a computer, “Do this task 5 times.”

[GO TO TASKS](#tasks)

---

### **How Does It Work?**

1. **Start**: Set a starting number.
2. **End**: Decide the number where the loop should stop.
3. **Repeat**: Run the instructions for each number from start to end.

---

### **Structure of a FOR Loop**

```
FOR <variable> ← <start> TO <end>

<instructions>

NEXT <variable>
```

- **`FOR`**: Starts the loop.
- **`<variable>`**: A counter that keeps track of the current number.
- **`<start>`**: The number where the loop begins.
- **`<end>`**: The number where the loop stops.
- **`NEXT`**: Ends the current loop and moves to the next number.

---

### **Example: Output Numbers 1 to 5**

```
FOR i ← 1 TO 5

OUTPUT i

NEXT i
```

- Starts at `1`.
- Outputs `1`, `2`, `3`, `4`, and `5`.
- Stops after reaching `5`.

---

### **Example with Instructions**

You can include any instructions inside the loop. For example:

```
FOR i ← 1 TO 3

OUTPUT "Hello"

NEXT i
```

This outputs “Hello” three times.

# **Understanding the Step Method in a FOR Loop**

In programming, a `FOR` loop is used to repeat a set of instructions multiple times. By default, a `FOR` loop increases by **1** each time. However, sometimes we want it to increase by a different number—this is where the **STEP** method comes in!

### **What is the STEP Method?**

The **STEP** method lets us control how much the loop increases (or decreases) in each step. Instead of adding `1` every time, we can **jump by 2, 3, or even count backward**.

---

## **Creating a Basic FOR Loop**

A basic `FOR` loop counts from 1 to 5:

```
FOR i ← 1 TO 5

OUTPUT i

NEXT i
```

### **Task 1: Predict the Output**

What do you think this loop will print?  
Write your answer before running the code.

**Expected Output:**

`1  
2  
3  
4  
5`

---

## **Using the STEP Method**

Now, let’s **change how much the loop increases each time**. Instead of adding `1`, let’s add `2`:

```
FOR i ← 1 TO 10 STEP 2

OUTPUT i

NEXT i
```

### **Task 2: Predict the Output**

What numbers will this loop print? Write your answer.

**Expected Output:**

`1  
3  
5  
7  
9`

📝 **Explanation:**

- The loop starts at **1**.
- It **adds 2** every time instead of 1.
- It stops at **10 or just before**.

---

## **Counting Backwards**

We can also use a **negative STEP** to count **backward**:

```
FOR i ← 10 TO 1 STEP -2

OUTPUT i

NEXT i
```

### **Task 3: Predict the Output**

What will this loop print? Write your answer.

**Expected Output:**

`10  
8  
6  
4  
2`

📝 **Explanation:**

- The loop starts at **10**.
- It **subtracts 2** each time.
- It stops at **1 or just before**.

---

## **Applying the STEP Method in a Practical Task**

💡 **Challenge:**  
Write a `FOR` loop that **prints only the even numbers** from 2 to 12.

📝 **Hint:**  
Use `STEP 2` and start from `2`.

---

## TASKS

Using the example tasks as a guide, complete all tasks listed on the right side.

---

**Example Task 1:** Output “Hello world” 10 times.

```
FOR i ← 1 TO 10

OUTPUT "Hello world"

NEXT i
```

**Task 1:** Output “Good morning” 15 times.

---

**Example Task 2:** Output “Welcome” once, then “Hello world” 10 times, then “Good bye” once.

```
OUTPUT "Welcome"

FOR i ← 1 TO 10

OUTPUT "Hello world"

NEXT i

OUTPUT "Good bye"
```

**Task 2:** Output “Hi there” once, then “How are you?” 5 times, and finally “Take care” once.

---

**Example Task 3:** Input five numbers.

```
DECLARE Number: INTEGER

FOR i ← 1 TO 5

INPUT Number

NEXT i
```

**Task 3:** Input 10 names.

---

**Example Task 4:** Write a pseudocode that takes 5 numbers as input and outputs whether each number is positive or negative.

```
DECLARE Number: INTEGER

FOR i ← 1 TO 5

INPUT Number

IF Number > 0 THEN

OUTPUT "Positive"

ELSE

OUTPUT "Negative"

ENDIF

NEXT i
```

**Task 4:** Write a pseudocode to input 8 numbers and output whether each number is even or odd.

>> Solution [O Level]

```
DECLARE Number: INTEGER  
FOR i ← 1 TO 5  
    INPUT Number  
    IF MOD(Number,2)=0 THEN  
        OUTPUT "Even"  
    ELSE  
        OUTPUT "Odd"  
    ENDIF  
NEXT i
```

>> Solution [AS Level]

```
DECLARE Number: INTEGER
FOR i ← 1 TO 5
    INPUT Number
    IF Number MOD 2 =0  THEN
        OUTPUT "Even"
    ELSE
        OUTPUT "Odd"
    ENDIF
NEXT i
```

---

**Example Task 5:** Output numbers from 1 to 10.

```
FOR i ← 1 TO 10

OUTPUT i

NEXT i
```

**Task 5:** Output numbers from 1 to 20.

---

**Example Task 6:** Output the numbers 1 to 15, each followed by “is a number” using a loop.

```
FOR i ← 1 TO 15

OUTPUT i, " is a number"

NEXT i
```

**Task 6:** Output the numbers 1 to 12, each followed by “is my favorite number.”

---

**Example Task 7:** Input a number and output “Good Morning” that many times.

```
DECLARE Count: INTEGER

INPUT Count

FOR i ← 1 TO Count

OUTPUT "Good Morning"

NEXT i
```

**Task 7:** Input a number and output “Great Job” that many times.

---

**Example Task 8:** Input 5 numbers and add all the positive numbers.

```
DECLARE Number: INTEGER

DECLARE Sum: INTEGER

Sum ← 0

FOR i ← 1 TO 5

INPUT Number

IF Number > 0 THEN

Sum ← Sum + Number

ENDIF

NEXT i

OUTPUT "The sum of positive numbers is: ", Sum
```

**Task 8:** Input 6 numbers and add all the even numbers.

>> Solution [O Level]:

```
DECLARE Number: INTEGER

DECLARE Sum: INTEGER

Sum ← 0

FOR i ← 1 TO 5

INPUT Number

IF MOD(Number,2)=0 THEN

Sum ← Sum + Number

ENDIF

NEXT i

OUTPUT "The sum of even numbers is: ", Sum
```

>> Solution [AS Level]:

```
DECLARE Number: INTEGER

DECLARE Sum: INTEGER

Sum ← 0

FOR i ← 1 TO 5

INPUT Number

IF Number MOD 2 = 0 THEN

Sum ← Sum + Number

ENDIF

NEXT i

OUTPUT "The sum of even numbers is: ", Sum
```

---

# Step Method

---

## TASK: Output all the ODD numbers between 200 to 300

---

## **Task 9: The Countdown Rocket 🚀**

### **Scenario:**

You are launching a **space rocket**! A countdown is needed from **10 to 1**, decreasing by **1 each time**.

**Your Challenge:** Write a `FOR` loop that prints the countdown. When the countdown reaches `1`, print **“Blast off!”**.

**Hint:**  
  
-Start at `10`  
-Use `STEP -1`  
-Stop at `1`

---

**TASK 10:** Do the countdown rocket program without the step method.

Hint:  
Use a separate counter variable which starts from 10.

---

## **Task 11: Secret Agent Code**

### **Scenario:**

A secret agent has received a **hidden message** in even-numbered positions. The agent must extract numbers from **2 to 20**.

**Your Challenge:** Write a `FOR` loop that prints only **even numbers** from `2` to `20`.

**Hint:**  
  
Start at `2`  
Use `STEP 2`  
Stop at `20`

---

Did you complete all tasks? Great job! Try using different **STEP** values to experiment further.

### Leave a Reply[Cancel reply](/pseudocode/pseudocode-loops/4-1-for-loop/#respond)