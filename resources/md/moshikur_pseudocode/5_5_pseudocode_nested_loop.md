# 5.5 Pseudocode Nested Loop

> Source: https://moshikur.com/pseudocode/pseudocode-loops/4-4-pseudocode-nested-loop/

# 5.5 Pseudocode – Nested Loop

---

[![An infographic illustrating nested loops in programming, featuring arrows and boxes representing iterative processes, with a web link at the bottom.](images/pseudocode/5_5_pseudocode_nested_loop/img_001.png)](https://i0.wp.com/moshikur.com/wp-content/uploads/2025/09/image-69.png?ssl=1)

**Nested loops** are fundamental structures in programming where one loop operates inside another, enabling the execution of multi-level iteration processes. This arrangement is particularly useful for applications that require a layered approach to processing tasks. In this chapter, we explore nested loops without using arrays, focusing on simpler examples that demonstrate their utility and effectiveness in various scenarios.

[Go To Tasks](#tasks)

---

## **Regular loop:**

```
FOR i <- 1 TO 5

OUTPUT i

NEXT i
```

This will output values from 1 to 5

---

## **Nested loop:**

```
FOR j <- 1 TO 3

FOR i <- 1 TO 5

OUTPUT i

NEXT i

NEXT j
```

This will output the values from 1 to 5 for three times

---

## Understanding Nested Loops

A nested loop consists of two parts: an outer loop and one or more inner loops. Each time the outer loop completes one iteration; the inner loop runs through all its iterations. This structure allows programs to perform tasks that require repetitive action within another repetitive action.

```
FOR i ← 1 TO 3

FOR j ← 1 TO 3

OUTPUT "Position (", i, ", ", j, ")"

NEXT j

NEXT i
```

**Output:**

Position (1, 1)  
Position (1, 2)  
Position (1, 3)  
Position (2, 1)  
Position (2, 2)  
Position (2, 3)  
Position (3, 1)  
Position (3, 2)  
Position (3, 3)

The outer loop (i) iterates from 1 to 3.

For each value of i, the inner loop (j) also iterates from 1 to 3.

This example could represent the positions in a 3×3 grid, such as a tic-tac-toe board.

## Example: Multiplication Table

A simple use of nested loops is to generate a multiplication table, which iterates over two sets of numbers.

```
FOR i ← 1 TO 10

FOR j ← 1 TO 10

OUTPUT i, " x ", j, " = ", i * j

NEXT j

NEXT i
```

**Output:** This code generates a multiplication table for numbers 1 through 10, displaying the product of every possible pair in this range.

## Example: Managing Student Data and Calculating Averages Using Nested Loops

### **Step 1: Input Names and two Marks for Three Students**

**Objective**: To create a program that inputs the names of three students and two marks for each student, and then displays the student’s name along with their marks.

**Pseudocode**:

```
// Step 1: Input Student Names and Marks

DECLARE StudentName: STRING

DECLARE Mark: INTEGER

FOR i ← 1 TO 3

OUTPUT "Enter the name of student ", i, ":"

INPUT StudentName

FOR j ← 1 TO 2

OUTPUT "Enter mark ", j, " for ", StudentName, ":"

INPUT Mark

OUTPUT "Mark ", j, ": ", Mark

NEXT j

NEXT i
```

**Pseudocode Explanation**:

Variable Declarations:

- StudentName: A string variable to store the name of the student.
- Mark: An integer variable to store each mark entered.
- NumberOfStudents: An integer representing the total number of students (set to 3).
- NumberOfMarks: An integer representing the total number of marks per student (set to 2).

Outer Loop (FOR loop):

- Iterates through each student from 1 to 3.
- For each iteration, it prompts the user to enter the student’s name.

Inner Loop (FOR loop):

- Iterates for each mark (from 1 to 2) for the current student.
- During each iteration, it prompts the user to enter a mark for the student and outputs the entered mark.

The program captures the name of each student and two marks. It iterates through students and marks, displaying each entry as it is made.

**Task:** Create a program that records the names of three astronauts and the number of tasks they completed each day during a 7-day mission, then displays the astronaut’s name along with their daily task count.

---

### **Step 2: Calculate and Output Each Student’s Average Marks**

**Objective**: To extend the program from Problem 1 by calculating the average of the two marks for each student and outputting the student’s name along with their average marks.

**Pseudocode**:

```
// Step 2: Calculate and Output Each Student's Average Marks

DECLARE StudentName: STRING

DECLARE Mark, TotalStudentMarks, StudentAverage: REAL

FOR StudentIndex ← 1 TO 3

OUTPUT "Enter the name of student ", StudentIndex, ":"

INPUT StudentName

TotalStudentMarks ← 0

FOR MarkIndex ← 1 TO 2

OUTPUT "Enter mark ", MarkIndex, " for ", StudentName, ":"

INPUT Mark

TotalStudentMarks ← TotalStudentMarks + Mark

NEXT MarkIndex

// Calculate the average of the marks for the student

StudentAverage ← TotalStudentMarks / 2

// Output the student's name and average marks

OUTPUT StudentName, " has an average mark of ", StudentAverage

NEXT StudentIndex
```

**Pseudocode Explanation**:

1. **Additional Variable**:
   - TotalStudentMarks: A real number to accumulate the total of the two marks for calculating the average.
2. **Outer Loop** (FOR loop):
   - Continues to handle the input of the student’s name and initializes TotalStudentMarks to 0 for each student.
3. **Inner Loop** (FOR loop):
   - Inputs two marks for the student and accumulates them in TotalStudentMarks.
4. **Average Calculation**:
   - The average for the student is calculated by dividing TotalStudentMarks by NumberOfMarks.
   - The student’s name and average marks are then output.

This program calculates and displays each student’s average marks. It uses nested loops for data input and ensures each student’s average is computed and displayed.

**Task:** Extend the program to calculate and display the total tasks completed by each astronaut over the mission week.

>> Solution:

```
// Step 2: Calculate and Output Total Weekly Tasks
DECLARE AstronautName: STRING
DECLARE TasksCompleted, TotalTasks: INTEGER
DECLARE NumberOfAstronauts, DaysInWeek: INTEGER
NumberOfAstronauts ← 3
DaysInWeek ← 7
FOR AstronautIndex ← 1 TO NumberOfAstronauts
    OUTPUT "Enter the name of astronaut ", AstronautIndex, ":"
    INPUT AstronautName
    TotalTasks ← 0 
    FOR DayIndex ← 1 TO DaysInWeek 
        OUTPUT "Enter number of tasks completed on Day ", DayIndex, " by ", AstronautName, ":" 
        INPUT TasksCompleted 
        TotalTasks ← TotalTasks + TasksCompleted 
    NEXT DayIndex 
OUTPUT AstronautName, " completed a total of ", TotalTasks, " tasks this week."
NEXT AstronautIndex
```

---

### **Step 3: Calculate and Output the Overall Average Marks for All Students**

**Objective**: To further extend the program by calculating the overall average marks for all three students and outputting the result.

**Pseudocode**:

```
// Step 3: Calculate and Output the Overall Average Marks for All Students

DECLARE StudentName: STRING

DECLARE Mark, TotalStudentMarks, StudentAverage, TotalAverage, TotalMarks: REAL

DECLARE NumberOfStudents, NumberOfMarks: INTEGER

NumberOfStudents ← 3

NumberOfMarks ← 2

FOR StudentIndex ← 1 TO NumberOfStudents

OUTPUT "Enter the name of student ", StudentIndex, ":"

INPUT StudentName

TotalStudentMarks ← 0

FOR MarkIndex ← 1 TO NumberOfMarks

OUTPUT "Enter mark ", MarkIndex, " for ", StudentName, ":"

INPUT Mark

TotalStudentMarks ← TotalStudentMarks + Mark

NEXT MarkIndex

// Calculate the average of the marks for the student

StudentAverage ← TotalStudentMarks / NumberOfMarks

// Output the student's name and average marks

OUTPUT StudentName, " has an average mark of ", StudentAverage

// Accumulate the total average marks of all students

TotalMarks ← TotalMarks + StudentAverage

NEXT StudentIndex

// Calculate the average marks of all students

TotalAverage ← TotalMarks / NumberOfStudents

// Output the overall average marks

OUTPUT "The average mark of all students is ", TotalAverage
```

**Pseudocode Explanation**:

1. **Additional Variables**:
   - TotalMarks: A real number to accumulate the sum of all students’ average marks.
   - TotalAverage: A real number to store the overall average marks for all students.
2. **Outer Loop** (FOR loop):
   - Performs the same functions as in Problem 2, with the addition of accumulating each student’s average in TotalMarks.
3. **Calculation of Overall Average**:
   - After the loop, TotalAverage is calculated by dividing TotalMarks by NumberOfStudents.
   - The overall average mark is then output.

The final version of the program calculates and outputs each student’s average mark, as well as the overall average mark for all students. This demonstrates the use of nested loops to handle multiple data layers and compute aggregates.

**Task:** Add functionality to determine whether the mission was successful (based on total tasks completed by all astronauts, which is 50) and identify the astronaut with the highest task count.

>> Solution:

```
// Declare variables
DECLARE AstronautNames : ARRAY[1:3] OF STRING
DECLARE TasksCompleted : ARRAY[1:3,1:7] OF INTEGER
DECLARE TotalTasks : ARRAY[1:3] OF INTEGER
DECLARE i, j, HighestTaskCount, HighestAstronautIndex, TotalMissionTasks : INTEGER

// Initialize variables
TotalMissionTasks ← 0
HighestTaskCount ← 0
HighestAstronautIndex ← 1

// Input astronaut names
FOR i ← 1 TO 3
    OUTPUT "Enter the name of astronaut ", i
    INPUT AstronautNames[i]
    TotalTasks[i] ← 0  // Initialize total tasks for each astronaut
NEXT i

// Input tasks completed each day
FOR i ← 1 TO 3
    OUTPUT "Enter tasks completed for ", AstronautNames[i]
    FOR j ← 1 TO 7
        OUTPUT "Enter tasks completed on day ", j
        INPUT TasksCompleted[i, j]
        TotalTasks[i] ← TotalTasks[i] + TasksCompleted[i, j]  // Calculate individual total
        TotalMissionTasks ← TotalMissionTasks + TasksCompleted[i, j]  // Calculate total mission tasks
    NEXT j
NEXT i

// Identify the astronaut with the highest task count
FOR i ← 1 TO 3
    IF TotalTasks[i] > HighestTaskCount THEN
        HighestTaskCount ← TotalTasks[i]
        HighestAstronautIndex ← i
    ENDIF
NEXT i

// Display astronaut names along with their daily task count
FOR i ← 1 TO 3
    OUTPUT "Tasks completed by ", AstronautNames[i], ":"
    FOR j ← 1 TO 7
        OUTPUT "Day ", j, ": ", TasksCompleted[i, j]
    NEXT j
    OUTPUT "Total tasks completed by ", AstronautNames[i], ": ", TotalTasks[i]
NEXT i

// Determine mission success
OUTPUT "Total tasks completed during the mission: ", TotalMissionTasks
IF TotalMissionTasks >= 50 THEN
    OUTPUT "Mission was SUCCESSFUL!"
ELSE
    OUTPUT "Mission FAILED! Not enough tasks completed."
ENDIF

// Display the astronaut who completed the most tasks
OUTPUT "Astronaut with the highest task count: ", AstronautNames[HighestAstronautIndex], " with ", HighestTaskCount, " tasks."
```

---

Tips for Using Nested Loops

- Clarity: Keep the logic within nested loops as simple as possible to maintain clarity.
- Testing: Test nested loops carefully to ensure that they behave as expected and do not contain infinite loops.
- Debugging: Introduce temporary OUTPUT statements within the loops to help understand the flow and behavior during debugging.

---

## tasks

---

**Example Task 1:** Use nested loops to output a multiplication table for numbers 1 to 5.

```
FOR i ← 1 TO 5

FOR j ← 1 TO 10

OUTPUT i, " x ", j, " = ", i * j

NEXT j

NEXT i
```

**Task 1:** Use nested loops to output a multiplication table for numbers 1 to 10.

---

**Example Task 2:** Use nested loops to output the following pattern:

```
*

**

***

****

*****
```

```
DECLARE stars:STRING

FOR i ← 1 TO 5

FOR j ← 1 TO i

stars<-stars&"*"

NEXT j

OUTPUT stars

stars ← ""

NEXT i
```

**Task 2:** Use nested loops to output the following pattern:  
[Difficulty Level: Challenging]  
`1  
12  
123  
1234  
12345`

---

**Example Task 3:** Use nested loops to create a grid of numbers where rows and columns are numbered from 1 to 3:

```
1 1

1 2

1 3

2 1

2 2

2 3

3 1

3 2

3 3
```

```
FOR i ← 1 TO 3

FOR j ← 1 TO 3

OUTPUT i, " ", j

NEXT j

NEXT i
```

**Task 3:** Use nested loops to create a grid of numbers where rows and columns are numbered from 1 to 4.

---

**Example Task 4:** Use nested loops to output all combinations of two dice rolls.

**Answer:**

```
FOR die1 ← 1 TO 6

FOR die2 ← 1 TO 6

OUTPUT "Dice 1: ", die1, ", Dice 2: ", die2

NEXT die2

NEXT die1
```

**Task 4:** Use nested loops to output all combinations of two dice rolls, but highlight pairs where the sum is 7.

---

**Example Task 5:** Print a 3×3 square of stars

**Answer:**

```
DECLARE Line:STRING

FOR i ← 1 TO 3

Line ← ""

FOR j ← 1 TO 3

Line ← Line & "* "

NEXT j

OUTPUT Line

NEXT i
```

**Task 5:** Print a 4×4 square of `#`

**Hint**: Use two loops; change the limit to 4 and replace `*` with `#`.

---

**Example Task 6:** Create a rectangle using dots `.`

**Answer:**

```
DECLARE Line:STRING

FOR i ← 1 TO 2

Line ← ""

FOR j ← 1 TO 10

Line ← Line & "."

NEXT j

OUTPUT Line

NEXT i
```

**Task 6:** Create 3 lines of 15 dots

**Hint**: Change outer loop to 3, inner to 15.

---

**Example Task 7:** Descending triangle of numbers

**Answer:**

```
DECLARE Line:STRING

FOR i ← 5 TO 1 STEP -1

Line ← ""

FOR j ← 1 TO i

Line ← Line & j & " "

NEXT j

OUTPUT Line

NEXT i
```

**Task 7:** **Task**: Use `"*"` instead of numbers

💡 **Hint**: Replace `j` with `"* "`.

---

**Example Task 8:** Hollow square of stars

**Answer:**

```
DECLARE Line:STRING

FOR i ← 1 TO 5

Line ← ""

FOR j ← 1 TO 5

IF i = 1 OR i = 5 OR j = 1 OR j = 5 THEN

Line ← Line & "*"

ELSE

Line ← Line & " "

ENDIF

NEXT j

OUTPUT Line

NEXT i
```

**Task** 8: Create a hollow square of size 7

💡 **Hint**: Replace all `5`s with `7`s.

---

**Example Task 9:** Diagonal product

**Answer:**

```
DECLARE Line:STRING

DECLARE Product:INTEGER

FOR i ← 1 TO 5

Line ← ""

FOR j ← 1 TO 5

IF i = j THEN

Product ← i * j

Line ← Line & Product & " "

ELSE

Line ← Line & "- "

ENDIF

NEXT j

OUTPUT Line

NEXT i
```

```
OUTPUT:

1 - - - -

- 4 - - -

- - 9 - -

- - - 16 -

- - - - 25
```

**Task** 9: Replace product with `"*"`

💡 **Hint**: Just remove multiplication and write `"* "`.

---

**Example Task 10:** Checkerboard of X and O

**Answer:**

```
DECLARE Line:STRING

FOR i ← 1 TO 4

Line ← ""

FOR j ← 1 TO 4

IF MOD(i + j,2) = 0 THEN

Line ← Line & "X"

ELSE

Line ← Line & "O"

ENDIF

NEXT j

OUTPUT Line

NEXT i
```

```
OUTPUT:

XOXO

OXOX

XOXO

OXOX
```

**Task** 10: Use `1` and `0` instead

💡 **Hint**: Replace `"X"` and `"O"`.

---

### Leave a Reply[Cancel reply](/pseudocode/pseudocode-loops/4-4-pseudocode-nested-loop/#respond)