# 12 PSEUDOCODE 2D Array

> Source: https://moshikur.com/pseudocode/9-pseudocode-2d-array/

# 10 PSEUDOCODE – 2D Array

---

# 2D Arrays

## Understanding Two dimensional arrays

---

### [Chapter 1](#chapter1)

Declaring, assigning values and traversing through 2D array

---

### [Chapter 2](https://moshikur.com/pseudocode/9-pseudocode-2d-array/2d-arrays-chapter-2/)

Questions with example answers

---

### [Chapter 3](https://moshikur.com/pseudocode/9-pseudocode-2d-array/chapter-3-exam-style-questions-level-1/)

Exam Style Question Level 1

---

### [Chapter 4](https://moshikur.com/pseudocode/9-pseudocode-2d-array/2d-arrays-chapter-3/)

More Worked Examples

---

### [Chapter](https://moshikur.com/pseudocode/igcse-o-level-practice-questions/) 5

Exam Questions Level 2

---

### [Chapter 6](https://moshikur.com/pseudocode/9-pseudocode-2d-array/2d-array-chapter-6-random-number-distribution-using-a-2d-array/)

Analyzing Random Number Distribution Using a 2D Array

---

# Chapter 1

A two-dimensional (2D) array is a data structure that stores elements in rows and columns, forming a grid-like structure. Each element in a 2D array is uniquely identified by its row and column indices.

[![A grid with labeled coordinates, featuring the text 'moshikur.com' in the center.](images/pseudocode/12_pseudocode_2d_array/img_001.png)](https://i0.wp.com/moshikur.com/wp-content/uploads/2026/02/image-23.png?ssl=1)

---

## Declaration and Initialization:

To declare a 2D array in pseudocode, we specify its dimensions (number of rows and columns) and the data type of its elements. Here’s how to declare a 2D array named matrix with 3 rows and 5 columns storing integers:

| DECLARE matrix: ARRAY [1:3, 1:5] OF INTEGER |
| --- |

> ### Task 1
>
> Write the pseudocode to declare a 2D array called StudentScores that holds the scores of 3 students across 4 subjects.

---

The 2D array “**matrix”** now looks like this:

| | | | | |
| --- | --- | --- | --- | --- |
| | | | | |
| | | | | |

---

## To set the value **1985** in the second row and fourth column, the code would be written as follows:

| matrix[2,4] ← 1985 |
| --- |

Now the 2D array would look like this:

| | | | | |
| --- | --- | --- | --- | --- |
| | | | 1985 | |
| | | | | |

> ### Task 2
>
> Given a 2D array Grades that stores grades for 5 students in 4 subjects, write the pseudocode to output the grade of the third student in the second subject.
>
> ### Task 3
>
> Suppose a 2D array Marks has dimensions [2][3] and stores the marks of 2 students in 3 subjects. Write pseudocode to update the mark of the first student in the third subject to 85.

---

## To populate values to a 2D array

we can use nested loops to iterate over each element and assign values. For example:

```
FOR row <-- 1 TO 3

FOR column <-- 1 TO 5

matrix[row,column] <-- row * column

NEXT column

NEXT row
```

The 2D array would now look like this:

| 1 | 2 | 3 | 4 | 5 |
| --- | --- | --- | --- | --- |
| 2 | 4 | 6 | 8 | 10 |
| 3 | 6 | 9 | 12 | 15 |

> ### Task 4
>
> 2D array Marks has dimensions [2][3] and stores the marks of 2 students in 3 subjects. Assign all marks to 0.
>
> ### Task 5
>
> Randomly generate a numbers between 0 to 100 and assign them to each element of the 2D array Marks.
>
> ```
> #Random number genearation for
>
>
>
> #IGCSE/O Level
>
>
>
> Marks[x,y] <- RANDOM()*100
>
>
>
> #AS LEVEL
>
>
>
> Marks[x,y] <- RAND(101)
> ```

---

### Explanation:

- The program fills a **2D array** called `matrix`
- The array has:
  - **3 rows** (1 to 3)
  - **5 columns** (1 to 5)
- Each value stored in the array is calculated using:

```
row * column
```

So: The value depends on **the loop**

---

## Trace Table

This trace table shows **each step of execution**.

| row | column | row \* column | Value stored in matrix[row, column] |
| --- | --- | --- | --- |
| 1 | 1 | 1 × 1 | 1 |
| 1 | 2 | 1 × 2 | 2 |
| 1 | 3 | 1 × 3 | 3 |
| 1 | 4 | 1 × 4 | 4 |
| 1 | 5 | 1 × 5 | 5 |
| 2 | 1 | 2 × 1 | 2 |
| 2 | 2 | 2 × 2 | 4 |
| 2 | 3 | 2 × 3 | 6 |
| 2 | 4 | 2 × 4 | 8 |
| 2 | 5 | 2 × 5 | 10 |
| 3 | 1 | 3 × 1 | 3 |
| 3 | 2 | 3 × 2 | 6 |
| 3 | 3 | 3 × 3 | 9 |
| 3 | 4 | 3 × 4 | 12 |
| 3 | 5 | 3 × 5 | 15 |

---

#### 2D array “matrix” value assignment

```
matrix[row,colum] <- row * column
```

| 1×1 = 1 | 1×2 = 2 | 1×3 = 3 | 1×4 = 4 | 1×5 = 5 |
| --- | --- | --- | --- | --- |
| 2×1 = 2 | 2×2 = 4 | 2×3 = 6 | 2×4 = 8 | 2×5 = 10 |
| 3×1 = 3 | 3×2 = 6 | 3×3 = 9 | 3×4 = 12 | 3×5 = 1 |

---

## How the nested loops work

### Row 1 starts

- Column goes: **1 → 2 → 3 → 4 → 5**
- Row 1 is now **fully complete**

### Row 2 starts

- Column again goes: **1 → 2 → 3 → 4 → 5**
- Row 2 is now **fully complete**

### Row 3 starts

- Column again goes: **1 → 2 → 3 → 4 → 5**
- Row 3 is now **fully complete**

Only when **Row 3 finishes**, the program stops.

```
Row 1 → Column 1

Row 1 → Column 2

Row 1 → Column 3

Row 1 → Column 4

Row 1 → Column 5

(move to next row)

Row 2 → Column 1

Row 2 → Column 2

Row 2 → Column 3

Row 2 → Column 4

Row 2 → Column 5

(move to next row)

Row 3 → Column 1

Row 3 → Column 2

Row 3 → Column 3

Row 3 → Column 4

Row 3 → Column 5
```

---

**Question:** How many times does the assignment statement run?

Answer:

```
3 × 5 = 15 times
```

---

## Accessing Elements:

We can access individual elements of a 2D array using their row and column indices. For instance, to access the element at the 2nd row and 3rd column of the matrix, we use:

```
DECLARE value: INTEGER

value <-- matrix[2,3]  // Accessing element at 2nd row, 3rd column
```

---

# Common Operations:

# Traversal

Traversal is a common operation performed on arrays to access and process each element individually. In a 2D array, traversal involves iterating over each row and column to access and operate on each element.

Using Nested Loops for Traversal:

Nested loops are used to traverse a 2D array because we need to iterate over both rows and columns. We use an outer loop to iterate over the rows and an inner loop to iterate over the columns within each row.

Pseudocode Example:

Let’s consider the previously used 2D array matrix. Here’s how we can traverse and output each element:

```
DECLARE matrix: ARRAY [1:3, 1:4] OF INTEGER

// Nested loops for traversal

FOR row <-- 1 TO 3

FOR column <-- 1 TO 4

OUTPUT matrix[row,column]  // Output current element

NEXT column

NEXT row
```

> ### Task 5
>
> 2D array Marks has dimensions [2][3] and stores the marks of 2 students in 3 subjects. Assume there are values already stored in the array. Output all the values stored.

In this example, the outer loop iterates over each row, and the inner loop iterates over each column within that row. Inside the inner loop, we output the current element of the array.

## Understanding the Execution:

- The outer loop iterates over each row from 1 to 3.
- For each row, the inner loop iterates over each column from 1 to 4.
- At each iteration of the inner loop, we access and output the element at the current row and column indices.
- Traversing all elements of a 2D array using nested loops is a fundamental operation in array processing. By employing nested loops in pseudocode, we can efficiently access and operate on each element of the array, enabling various computations and transformations.

---

# Searching

Searching for a specific value in an array involves iterating over each element of the array and comparing it with the target value. We’ll use nested loops to traverse through the rows and columns of the array and conditional statements to check if the current element matches the target value.

Let’s consider a pseudocode example where we have a 2D array named array and we want to search for a specific value targetValue within the array. Here’s how we can implement the search algorithm:

```
DECLARE array: ARRAY [1:5, 1:5] OF INTEGER

DECLARE targetValue: INTEGER

DECLARE found: BOOLEAN

targetValue <-- 10

found <-- FALSE

// Nested loops to search for target value

FOR row <-- 1 TO 5

FOR column <-- 1 TO 5

IF array[row,column] = targetValue THEN

found <-- TRUE

OUTPUT "Found at ROW ", row, " COLUMN: ", column

END IF

NEXT column

NEXT row

IF NOT found THEN

OUTPUT "Target value not found in the array"

END IF
```

### In this example:

- We first declare the 2D array array and the target value targetValue.
- We initialize a boolean flag found to indicate whether the target value is found.
- Using nested loops, we traverse through each element of the array.
- Within the inner loop, we check if the current element equals the target value.
- If the target value is found, we set the found flag to true, output the position of the target value, and exit the loop.
- If the target value is not found after traversing the entire array, we output a message indicating that the target value was not found.

### Understanding the Execution:

- The nested loops iterate over each element of the array, row by row and column by column.
- Within the inner loop, each element of the array is compared with the target value using a conditional statement.
- If the target value is found, the flag is set to true, and the loop is exited.
- After completing the search, we check the flag to determine if the target value was found or not.
- Searching for a specific value in an array is a fundamental operation in programming. By using nested loops and conditional statements, we can efficiently search through the elements of an array and determine the presence of a target value.

# ACTIVITY 1

You are given a 2D array “**matrix”** with three rows and five columns, filled with various words. The word “Start” is hidden in one of the positions within this array.

| | | | | |
| --- | --- | --- | --- | --- |
| | Start | | | |
| | | | | |

**Task 1:** Write a program or algorithm that navigates through the array to locate and output the position of the word “Start”. The output should specify the exact row and column where “Start” is found.

**Requirements:**

- “Start” could be in any position.
- Your solution should include a nested loop: the outer loop iterating over each row, and the inner loop iterating over each column.
- Use a conditional statement within the inner loop to check if the current cell contains the word “Start”.
- Once found, output the position in the format “Row x, Column y”, with x and y representing the row and column numbers starting from 1.
- Consider edge cases where “Start” may appear in the first or last cell of the array.

**Example Output:**

If “Start” is located in the second row and second column of the array, your program should output:

| Start found at Row 2, Column 2 |
| --- |

**Task 2: Treasure Hunt**  
A 8 x 8 two dimensional array named `map` represents a grid of locations in a treasure hunt game. Some cells in the grid contain the word “Treasure,” while others contain “Empty.” Write a program to search the grid for the treasure and output the first location where it is found in the format: `Treasure found at Row X, Column Y` If no treasure is found, output: `No treasure found on the map.`

### Leave a Reply[Cancel reply](/pseudocode/9-pseudocode-2d-array/#respond)