# 7.5 PSEUDOCODE Bubble Sort

> Source: https://moshikur.com/pseudocode/6-pseudocode-array/7-pseudocode-bubble-sort/

# 7.5 PSEUDOCODE – Bubble Sort

---

Syllabus:

Bubble Sort – Cambridge IGCSE/O Level Syllabus (0478/2210)

Students should be able to:

- **Understand how the bubble sort algorithm works**:
  - Bubble sort compares adjacent elements in an array and swaps them if they are in the wrong order.
  - After each full pass, the largest unsorted element moves (or “bubbles”) to its correct position.
- **Trace a bubble sort algorithm through a list**:
  - Identify the steps taken in each pass.
  - Show the effect of each comparison and swap.
  - Use trace tables to follow the algorithm’s execution.
- **Identify and correct errors in a bubble sort algorithm**:
  - Understand the logic and structure of nested loops used in bubble sort.
  - Detect mistakes such as incorrect loop ranges or missing swap conditions.
- **Write a bubble sort algorithm using pseudocode**:
  - Use standard loop structures (`FOR`, `IF`, etc.).
  - Follow the Cambridge pseudocode style (e.g. `NEXT i`, use of `←` for assignment).

Bubble sort is introduced as part of **algorithm design and problem-solving (Topic 7)** and is assessed in **Paper 2: Algorithms, Programming and Logic**.

[TASKS](#tasks)

Before we get into bubble sort, let’s start by learning this simple problem.

**The problem**: Checking if the elements in an array are in **ascending order** using pseudocode.

**1. The Main Idea**

To check if an array is sorted:

- Start with the first element and compare it with the next element.
- If any element is **greater** than the one that follows, the array is **not sorted**.
- If no such condition is found after checking all the elements, the array is sorted.

**2. Pseudocode to Check if an Array is Sorted**

Here’s a simple pseudocode to check if the array is sorted:

```
DECLARE arr : ARRAY [1:5] OF INTEGER

arr ← [2, 7, 5, 10, 4]

DECLARE sorted:BOOLEAN

sorted ← TRUE  // Assume the array is sorted

FOR i ← 1 TO 4

IF arr[i] > arr[i + 1] THEN

sorted ← FALSE

ENDIF

NEXT i

IF sorted = TRUE THEN

OUTPUT "The array is sorted."

ELSE

OUTPUT "The array is not sorted."

ENDIF
```

**Example 1: Unsorted Array**

Let’s take an **unsorted array**:  
arr ← [2, 7, 5, 10, 4]

**Initial Setup:**

- Array: [2, 7, 5, 10, 4]
- sorted ← TRUE (we start by assuming the array is sorted)

**Trace Table:**

| i | arr[i] | arr[i + 1] | arr[i] > arr[i + 1] | sorted (after check) |
| --- | --- | --- | --- | --- |
| 1 | 2 | 7 | FALSE | TRUE |
| 2 | 7 | 5 | TRUE | FALSE |
| 3 | 5 | 10 | FALSE | FALSE |
| 4 | 10 | 4 | TRUE | FALSE |

**Explanation:**

- **i = 1**: 2 > 7 is **FALSE**, no change to sorted (still **TRUE**).
- **i = 2**: 7 > 5 is **TRUE**, so sorted becomes **FALSE**.
- **i = 3**: 5 > 10 is **FALSE**, no change to sorted (still **FALSE**).
- **i = 4**: 10 > 4 is **TRUE**, but sorted is already **FALSE**.

**Final Check:**

- Since sorted is **FALSE**, the output will be:

“The array is not sorted.”

---

**Example 2: Sorted Array**

Now, let’s take a **sorted array**:  
arr = [3, 6, 9, 12, 15]

**Initial Setup:**

- Array: [3, 6, 9, 12, 15]
- sorted ← TRUE

**Trace Table:**

| i | arr[i] | arr[i + 1] | arr[i] > arr[i + 1] | sorted (after check) |
| --- | --- | --- | --- | --- |
| 1 | 3 | 6 | FALSE | TRUE |
| 2 | 6 | 9 | FALSE | TRUE |
| 3 | 9 | 12 | FALSE | TRUE |
| 4 | 12 | 15 | FALSE | TRUE |

**Explanation:**

- **i = 1**: 3 > 6 is **FALSE**, no change to sorted (still **TRUE**).
- **i = 2**: 6 > 9 is **FALSE**, no change to sorted.
- **i = 3**: 9 > 12 is **FALSE**, no change to sorted.
- **i = 4**: 12 > 15 is **FALSE**, no change to sorted.

**Final Check:**

- Since sorted is still **TRUE**, the output will be:

“The array is sorted.”

**5. Explanation of Key Parts**

- **sorted ← TRUE**: This starts by assuming the array is sorted. If any element is found out of order, we change this to FALSE.
- **For i ← 1 TO LENGTH(arr) – 1**: This loop checks each element and compares it with the next one.
- **IF arr[i] > arr[i + 1] THEN**: This checks if the current element is greater than the next one. If true, we know the array is not sorted.
- **sorted ← FALSE**: If we find an element that is greater than the next one, we set sorted to FALSE.
- **Final Check (IF sorted = TRUE THEN)**: After the loop finishes, we check the value of sorted. If it is still TRUE, the array is sorted. Otherwise, it is not sorted.

By comparing each element with the next in the array, we can determine whether the array is sorted in ascending order or not. If any element is found to be larger than the next, the array is considered unsorted. Otherwise, the array is sorted. This method works for both sorted and unsorted arrays effecHow to swap two values in an array?

## Swapping two values in an array

Let’s say we have an array called “marks” that contains the following values:

| marks ← [200,100,2,5,3] |
| --- |

Now, we want to swap the first two values in the array. Initially, **marks[1]** holds 200 and **marks[2]** holds 100. We want to swap them so the array should look like this after swapping:

| marks ← [100,200,2,5,3] |
| --- |

However, if you try to swap them directly using the following approach:

| marks[1] ← marks[2] marks[2] ← marks[1] //this will not work |
| --- |

The array will incorrectly become:

```
marks ← [200,200,2,5,3]
```

Both marks[1] and marks[2] becomes same. This happens because when we set **marks[1]** to **marks[2]**, we overwrite the original value of **marks[1]** (200), and then when we try to set **marks[2]** to **marks[1]**, we are just copying the new value of **marks[1]** (100) back into **marks[2]**.

### Correct Method to Swap Values

To correctly swap the values without losing any data, we need to use a temporary variable to hold one of the values during the swap. Here’s how you can do it:

We will call this temporary variable “temp”

| temp ← marks[1] marks[1] ← marks[2] marks[2] ← temp |
| --- |

Steps:

1. **Introduce a Temporary Variable:** We’ll use a variable called **temp** to temporarily store the value from one of the array slots.
2. **Store the First Value:** Save the first value (**marks[1]**) in **temp**.

| temp ← marks[1] |
| --- |

- **Swap the First Value with the Second:** Move the second value (**marks[2]**) into the first slot (**marks[1]**).

| marks[1] ← marks[2] |
| --- |

- **Restore the First Value to the Second Slot:** Move the value stored in **temp** into the second slot (**marks[2]**).

| marks[2] ← temp |
| --- |

After these steps, the array **marks** will correctly show:

| marks ← [100, 200, 2, 5, 3] |
| --- |

The first two values have been successfully swapped without losing any data. This method is safe and ensures that no values are accidentally overwritten during the swap.

---

# Full Bubble Sort Code

```
DECLARE marks:ARRAY[1:5] OF INTEGER

DECLARE temp:INTEGER

marks ← [100, 200, 2, 5, 3]

FOR pass ← 1 TO 4

FOR i ← 1 TO 4

IF marks[i] > marks[i+1] THEN

temp ← marks[i]

marks[i] ← marks[i+1]

marks[i+1] ← temp

ENDIF

NEXT i

NEXT pass

FOR i ← 1 TO 5

OUTPUT marks[i]

NEXT i
```

---

# Explanation

### Step 1: Setup

```
marks ← [100, 200, 2, 5, 3]
```

We want to sort in **ascending order**.

---

### Step 2: Outer Loop (Passes)

```
FOR pass ← 1 TO Length(marks)-1
```

- Bubble Sort needs **n-1 passes** for an array of size `n`.
- Each pass moves the **largest unsorted element** to the end.

---

### Step 3: Inner Loop (Comparisons & Swaps)

```
FOR i ← 1 TO 4

IF marks[i] > marks[i+1] THEN

SWAP them
```

- Compare each adjacent pair.
- If the left one is bigger, swap them.
- After the first pass, the largest number is at the end.
- That’s why we reduce the range (`Length(marks)-`1).

---

### Step 4: Swapping

```
temp ← marks[i]

marks[i] ← marks[i+1]

marks[i+1] ← temp
```

- A temporary variable is used to exchange two values.

---

### Step 5: Final Output

```
FOR i ← 1 TO 5

OUTPUT marks[i]
```

✅ After sorting, the array will be:

```
2, 3, 5, 100, 200
```

---

## Improved Bubble Sort Algorithm Using a Boolean Flag

## **Original Algorithm:**

```
DECLARE marks:ARRAY[1:5] OF INTEGER

DECLARE temp:INTEGER

marks <-- [200,100,23,5,3]

FOR j <-- 1 TO LENGTH(marks)

FOR i <-- 1 TO LENGTH(marks) - 1

IF marks[i] > marks[i+1] THEN

temp <-- marks[i]

marks[i] <-- marks[i+1]

marks[i+1] <-- temp

ENDIF

NEXT i

NEXT j
```

## Problems with the Original Bubble Sort Algorithm:

The basic Bubble Sort we often learn first does its job but can be pretty slow and does a lot of extra work. Here are a couple of reasons why:

**It Doesn’t Stop Early:** Even if our list gets sorted early, the basic version doesn’t notice—it keeps going, checking over and over until it has made as many passes through the list as there are items. This means it’s doing a lot of checks it doesn’t need to.

**Always Runs the Same Way:** No matter what the list looks like at the start—whether it’s already sorted, almost sorted, or completely mixed up—the basic Bubble Sort does the same number of checks.

## Steps to Optimize:

**Introduce a Boolean Flag:** Add a boolean variable, say **swapped**, to keep track of whether any swaps have been made in a particular pass through the list.

**Use REPEAT-UNTIL Loop:** Replace the outer **FOR** loop with a **REPEAT-UNTIL** loop that continues until no swaps are made in a pass (i.e., when **swapped** remains **False**).

## Optimized Algorithm:

```
marks <-- [200,100,23,5,3]

REPEAT

swapped <-- FALSE

FOR i <-- 1 TO LENGTH(marks) - 1

IF marks[i] > marks[i+1] THEN

temp <-- marks[i]

marks[i] <-- marks[i+1]

marks[i+1] <-- temp

swapped <-- TRUE

ENDIF

NEXT i

UNTIL swapped = FALSE
```

**Optimized Algorithm:**

At the start of each pass through the list, **swapped** is set to **FALSE**.

Inside the loop, each adjacent pair of items is compared, and if they are in the wrong order, they are swapped, and **swapped** is set to **TRUE**.

After completing a pass, if no swaps have occurred (**swapped** is still **FALSE**), the **REPEAT-UNTIL** loop terminates because the list must be sorted.

## Why Is This More Efficient?

This smarter version can stop early if it finds the list is already sorted. For example, if it goes through the whole list and doesn’t need to swap any items, it knows everything is in order and it can stop working. This saves time!

By stopping as soon as the list is sorted, it doesn’t waste time doing unnecessary checks. This makes it faster, especially when the list is already nearly sorted.

The improved Bubble Sort adapts to how sorted the list already is. If the list is in a big mess, it will do more work, but if it’s almost sorted, it does less work.

This optimized approach using a boolean flag in Bubble Sort is a simple yet effective way to enhance the performance of the sorting algorithm. It’s particularly useful in scenarios where the list may already be partially sorted, making the algorithm adapt to the inherent order in the dataset.

---

## Tracing bubble sort algorithm:

---

### 🔁 Bubble Sort Algorithm

```
DECLARE Marks : ARRAY[1:5] OF INTEGER

DECLARE Temp : INTEGER

DECLARE Pass : INTEGER

Marks[1] ← 200

Marks[2] ← 100

Marks[3] ← 2

Marks[4] ← 5

Marks[5] ← 3

FOR Pass ← 1 TO 4

FOR i ← 1 TO 4

IF Marks[i] > Marks[i + 1] THEN

Temp ← Marks[i]

Marks[i] ← Marks[i + 1]

Marks[i + 1] ← Temp

ENDIF

NEXT i

NEXT Pass
```

---

Here is the complete **Bubble Sort trace table**, showing **each pass separately** with values of `Marks[i]`, `Marks[i+1]`, swap decision, and the array after each step.

Initial array:

```
Marks = [200, 100, 2, 5, 3]
```

---

### 🔁 Pass 1

| Step | i | Marks[i] | Marks[i+1] | Swap? | Array after step |
| --- | --- | --- | --- | --- | --- |
| 1 | 1 | 200 | 100 | Yes | [100, 200, 2, 5, 3] |
| 2 | 2 | 200 | 2 | Yes | [100, 2, 200, 5, 3] |
| 3 | 3 | 200 | 5 | Yes | [100, 2, 5, 200, 3] |
| 4 | 4 | 200 | 3 | Yes | [100, 2, 5, 3, 200] |

---

### 🔁 Pass 2

| Step | i | Marks[i] | Marks[i+1] | Swap? | Array after step |
| --- | --- | --- | --- | --- | --- |
| 1 | 1 | 100 | 2 | Yes | [2, 100, 5, 3, 200] |
| 2 | 2 | 100 | 5 | Yes | [2, 5, 100, 3, 200] |
| 3 | 3 | 100 | 3 | Yes | [2, 5, 3, 100, 200] |
| 4 | 4 | 100 | 200 | No | [2, 5, 3, 100, 200] |

---

### 🔁 Pass 3

| Step | i | Marks[i] | Marks[i+1] | Swap? | Array after step |
| --- | --- | --- | --- | --- | --- |
| 1 | 1 | 2 | 5 | No | [2, 5, 3, 100, 200] |
| 2 | 2 | 5 | 3 | Yes | [2, 3, 5, 100, 200] |
| 3 | 3 | 5 | 100 | No | [2, 3, 5, 100, 200] |
| 4 | 4 | 100 | 200 | No | [2, 3, 5, 100, 200] |

---

### 🔁 Pass 4

| Step | i | Marks[i] | Marks[i+1] | Swap? | Array after step |
| --- | --- | --- | --- | --- | --- |
| 1 | 1 | 2 | 3 | No | [2, 3, 5, 100, 200] |
| 2 | 2 | 3 | 5 | No | [2, 3, 5, 100, 200] |
| 3 | 3 | 5 | 100 | No | [2, 3, 5, 100, 200] |
| 4 | 4 | 100 | 200 | No | [2, 3, 5, 100, 200] |

---

✅ Final sorted array:

```
[2, 3, 5, 100, 200]
```

---

Here is a complete **Bubble Sort trace table task** for students, designed in the IGCSE exam style with dotted lines and marks.

---

### 📝 Bubble Sort Trace Table Task

An array called `Marks` contains the following five values:

```
Marks = [75, 40, 90, 10, 60]
```

The following pseudocode is used to sort the array using Bubble Sort:

```
DECLARE Marks : ARRAY[1:5] OF INTEGER

DECLARE Temp : INTEGER

DECLARE Pass : INTEGER

DECLARE i : INTEGER

Marks[1] ← 75

Marks[2] ← 40

Marks[3] ← 90

Marks[4] ← 10

Marks[5] ← 60

FOR Pass ← 1 TO 4

FOR i ← 1 TO 4

IF Marks[i] > Marks[i + 1] THEN

Temp ← Marks[i]

Marks[i] ← Marks[i + 1]

Marks[i + 1] ← Temp

ENDIF

NEXT i

NEXT Pass
```

---

## Trace table Task

**Complete the trace table below for PASS 1.**  
At each step, show the value of `i`, `Marks[i]`, `Marks[i+1]`, whether a swap occurred, and the array after the step.

| Step | i | Marks[i] | Marks[i+1] | Swap? | Array after step |
| --- | --- | --- | --- | --- | --- |
| 1 | | | | | |
| 2 | | | | | |
| 3 | | | | | |
| 4 | | | | | |

Complete all fields for each step above. Use your knowledge of Bubble Sort to determine whether a swap is needed and update the array accordingly.

Solution:

---

### ✅ **Trace Table Solution – Pass 1**

| Step | i | Marks[i] | Marks[i+1] | Swap? | Array after step |
| --- | --- | --- | --- | --- | --- |
| 1 | 1 | 75 | 40 | Yes | [40, 75, 90, 10, 60] |
| 2 | 2 | 75 | 90 | No | [40, 75, 90, 10, 60] |
| 3 | 3 | 90 | 10 | Yes | [40, 75, 10, 90, 60] |
| 4 | 4 | 90 | 60 | Yes | [40, 75, 10, 60, 90] |

---

### 📝 **Marking Scheme** `[6 marks]`

- **1 mark** for each correctly filled row (i.e. all 5 columns are correct for that step)
- Total of **4 steps × 1.5 mark each** → capped at **6 marks**

✅ Award partial credit (e.g. 0.5) **only in teacher-marked practice**, not in exams.

---

## Tasks with solutions:

### **1. Checking Array Order**

**Question:**  
Write pseudocode that checks whether an array is sorted in ascending order. The pseudocode should:

1. Take an array of integers as input.
2. Determine if the elements are in ascending order without altering the array.
3. Output `TRUE` if the array is sorted in ascending order, otherwise output `FALSE`.

**Solution:**

```
DECLARE Array : ARRAY [1:N] OF INTEGER
DECLARE IsSorted : BOOLEAN
IsSorted ← TRUE
FOR i ← 1 TO N - 1
    IF Array[i] > Array[i + 1] THEN
        IsSorted ← FALSE
    ENDIF
NEXT i
IF IsSorted THEN
    OUTPUT "TRUE"
ELSE
    OUTPUT "FALSE"
ENDIF
```

---

### **2. Implementing Bubble Sort**

**Question:**  
Write pseudocode to implement the bubble sort algorithm to sort an array of integers in ascending order. Include comments in your pseudocode to explain each step of the process.

**Solution:**

```
DECLARE Array : ARRAY [1:N] OF INTEGER

DECLARE i, j, Temp : INTEGER

FOR i ← 1 TO N - 1

// Traverse the array N-1 times

FOR j ← 1 TO N - i

// Swap if the current element is greater than the next

IF Array[j] > Array[j + 1] THEN

Temp ← Array[j]

Array[j] ← Array[j + 1]

Array[j + 1] ← Temp

ENDIF

NEXT j

NEXT i

// Output the sorted array

FOR i ← 1 TO N

OUTPUT Array[i]

NEXT i
```

---

### **3. Interactive Bubble Sort**

**Question:**  
Modify the basic bubble sort algorithm to include user interaction. Your pseudocode should:

1. Prompt the user to input the number of elements they wish to sort.
2. Allow the user to input each element into the array.
3. Use the bubble sort algorithm to sort the array in ascending order.
4. Display the sorted array to the user.

**Solution:**

```
DECLARE N, i, j, Temp : INTEGER

// Prompt user for the number of elements

OUTPUT "Enter the number of elements: "

INPUT N

DECLARE Array: ARRAY [1:N] OF INTEGER

// Input each element

FOR i ← 1 TO N

INPUT Array[i]

NEXT i

// Perform Bubble Sort

FOR i ← 1 TO N - 1

FOR j ← 1 TO N - 1

IF Array[j] > Array[j + 1] THEN

Temp ← Array[j]

Array[j] ← Array[j + 1]

Array[j + 1] ← Temp

ENDIF

NEXT j

NEXT i

// Display sorted array

OUTPUT "Sorted Array: "

FOR i ← 1 TO N

OUTPUT Array[i]

NEXT i
```

---

### **4. Bubble Sort for Descending Order**

**Question:**  
Write pseudocode for a bubble sort algorithm that sorts an array of integers in descending order. Outline the changes required compared to the ascending order sort. Make sure to highlight each modification in your pseudocode.

**Solution:**

```
DECLARE Array : ARRAY [1:N] OF INTEGER

DECLARE i, j, Temp : INTEGER

FOR i ← 1 TO N - 1

FOR j ← 1 TO N - i

// Swap if the current element is less than the next

IF Array[j] < Array[j + 1] THEN

Temp ← Array[j]

Array[j] ← Array[j + 1]

Array[j + 1] ← Temp

ENDIF

NEXT j

NEXT i

// Output the sorted array

FOR i ← 1 TO N

OUTPUT Array[i]

NEXT i
```

---

### **5. Sorting and Counting Swaps**

**Question:**  
Write pseudocode to sort an array using any sorting algorithm (you may use bubble sort for consistency) and count the number of swaps made during the sorting process. The pseudocode should:

1. Take an array of integers as input.
2. Sort the array using the chosen sorting method.
3. Count and output the total number of swaps that occurred during the sorting.

**Solution:**

```
DECLARE Array : ARRAY [1:N] OF INTEGER

DECLARE i, j, Temp, SwapCount : INTEGER

SwapCount ← 0

FOR i ← 1 TO N - 1

FOR j ← 1 TO N - i

IF Array[j] > Array[j + 1] THEN

Temp ← Array[j]

Array[j] ← Array[j + 1]

Array[j + 1] ← Temp

SwapCount ← SwapCount + 1

ENDIF

NEXT j

NEXT i

// Output the total swaps

OUTPUT "Total swaps: ", SwapCount

// Output the sorted array

FOR i ← 1 TO N

OUTPUT Array[i]

NEXT i
```

---

### Leave a Reply[Cancel reply](/pseudocode/6-pseudocode-array/7-pseudocode-bubble-sort/#respond)