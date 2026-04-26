# 7.1 ARRAY TASKS

> Source: https://moshikur.com/pseudocode/6-pseudocode-array/6-1-pseudocode-tasks/

# 7.1 PSEUDOCODE ARRAY TASKS 1

---

Go to **>>>[THIS SECTION <ARRAY>](https://moshikur.com/pseudocode/6-pseudocode-array/)** to learn about array.

# lEVEL 1

---

Example Task 1: Integer Array Declaration and Access

**Task:** Declare an array named `marks` to store 5 integers. Assign the values `[10, 20, 30, 40, 50]` to the array and output the third element.

```
DECLARE marks : ARRAY[1:5] OF INTEGER

marks[1] ← 10

marks[2] ← 20

marks[3] ← 30

marks[4] ← 40

marks[5] ← 50

OUTPUT "The third mark is ", marks[3]
```

**Task 1:**  
Declare an array named `temperatures` to store 4 real numbers. Assign the values `[15.5, 20.2, 25.0, 30.1]` to the array and output the second element.

---

Add the first and last elements of the array `numbers` containing `[10, 20, 30]`.

```
DECLARE numbers : ARRAY[1:3] OF INTEGER

DECLARE sum : INTEGER

numbers[1] ← 10

numbers[2] ← 20

numbers[3] ← 30

sum ← numbers[1] + numbers[3]

OUTPUT "The sum of the first and last elements is ", sum
```

**Task2:**  
Add the first and last elements of the array `temperatures` containing `[5, 15, 25, 35]`.

---

Declare an array named `names` to store 3 string values. Assign the names `["Alice", "Bob", "Charlie"]` to the array and output the first name.

```
DECLARE names : ARRAY[1:3] OF STRING

names[1] ← "Alice"

names[2] ← "Bob"

names[3] ← "Charlie"

OUTPUT "The first name is ", names[1]
```

**Task 3:**  
Declare an array named `countries` to store 5 string values. Assign the values `["USA", "UK", "Canada", "Australia", "India"]` to the array and output the last name.

---

**Example Task:**  
Declare an array named `numbers` with 5 integer elements and output the array.

```
DECLARE numbers : ARRAY[1:5] OF INTEGER

numbers[1] ← 10

numbers[2] ← 20

numbers[3] ← 30

numbers[4] ← 40

numbers[5] ← 50

FOR i ← 1 TO 5

OUTPUT numbers[i]

NEXT i
```

**Task 4:**  
Declare an array named `grades` with 4 string elements containing `["A", "B", "C", "D"]` and output the array.

---

**Example Task:**  
Output all the elements except the first in the array `values` containing `[1, 2, 3, 4]`.

```
DECLARE values : ARRAY[1:4] OF INTEGER

values[1] ← 1

values[2] ← 2

values[3] ← 3

values[4] ← 4

FOR i ← 2 TO 4

OUTPUT values[i]

NEXT i
```

**Task 5:**  
Output all elements except the last in the array `scores` containing `[10, 20, 30, 40]`.

---

**Updating Array Elements**

Given the array scores containing [85, 90, 75, 80], update the second element to 95.

```
DECLARE scores : ARRAY[1:4] OF INTEGER

score <- [85, 90, 75, 80]

scores[2] ← 95
```

TASK **6.1.** Given the array grades containing [“A”, “B”, “C”, “D”], update the last element to “F”.

6.2. Output all the values the grades array using for loop.

---

**Example Task:**  
Double each element in the array `numbers` containing `[2, 4, 6]`.

```
DECLARE numbers : ARRAY[1:3] OF INTEGER

numbers[1] ← 2

numbers[2] ← 4

numbers[3] ← 6

FOR i ← 1 TO 3

numbers[i] ← numbers[i] * 2

OUTPUT numbers[i]

NEXT i
```

**Task 7:**  
Triple each element in the array `weights` containing `[5, 10, 15]`.

---

Example Task : Sum of Array Elements

**Task:** Calculate the sum of all elements in the array `values` containing `[5, 10, 15, 20]`.

```
DECLARE values : ARRAY[1:4] OF INTEGER

DECLARE sum : INTEGER

values[1] ← 5

values[2] ← 10

values[3] ← 15

values[4] ← 20

sum ← 0

FOR i ← 1 TO 4

sum ← sum + values[i]

NEXT i

OUTPUT "The sum is ", sum
```

**Task 8:**  
Calculate the sum of all elements in the array `temperatures` containing `[22.5, 25.0, 30.5, 18.0]`.

---

Example Task: Extract and output all even numbers from the array `numbers` containing `[1, 2, 3, 4, 5, 6]`.

```
DECLARE numbers : ARRAY[1:6] OF INTEGER

numbers[1] ← 1

numbers[2] ← 2

numbers[3] ← 3

numbers[4] ← 4

numbers[5] ← 5

numbers[6] ← 6

FOR i ← 1 TO 6

IF MOD(numbers[i], 2) = 0 THEN

OUTPUT numbers[i]

ENDIF

NEXT i
```

**Task 9:**  
Extract and output all odd numbers from the array `ages` containing `[12, 17, 19, 24, 31, 42]`.

---

### **Example Task**

Create a copy of the array `source` containing `[1, 2, 3, 4, 5]` into a new array `target`.

```
DECLARE source : ARRAY[1:5] OF INTEGER

DECLARE target : ARRAY[1:5] OF INTEGER

source[1] ← 1

source[2] ← 2

source[3] ← 3

source[4] ← 4

source[5] ← 5

FOR i ← 1 TO 5

target[i] ← source[i]

NEXT i

FOR i ← 1 TO 5

OUTPUT target[i]

NEXT i
```

**Task 10:**  
Create a copy of the array `names` containing `["Alice", "Bob", "Charlie"]` into a new array `backup`.

---

# lEVEL 2

### **Example Task:** Output Positive Numbers.

An array `Numbers` stores **10 integer values**. Write an algorithm (in pseudocode) to **output all the positive numbers** stored in the array.

```
DECLARE Numbers : ARRAY [1:10] OF INTEGER

DECLARE i : INTEGER

Numbers ← [-23, 4, 563, -34, 0, 5, 45, -94, 5, 43]

FOR i ← 1 TO 10

IF Numbers[i] > 0 THEN

OUTPUT Numbers[i]

ENDIF

NEXT i
```

**Task 11:** An array `Numbers` stores **10 integer values**. Write an algorithm to **output all the negative numbers** stored in the array. **[4]**

Use the following data:

Numbers ← [-23, 4, 563, -34, 0, 5, 45, -94, 5, 43]

---

### **Example Task:** Count Even Numbers.

An array `Values` stores **10 integer values**. Write an algorithm (in pseudocode) to **count how many values are even** and output the count.

#### Example Answer (Pseudocode)

```
DECLARE Values : ARRAY [1:10] OF INTEGER

DECLARE Count : INTEGER

DECLARE i : INTEGER

Values ← [12, 7, 9, 20, 15, 8, 3, 14, 6, 11]

Count ← 0

FOR i ← 1 TO 10

IF MOD(Values[i],2) = 0 THEN

Count ← Count + 1

ENDIF

NEXT i

OUTPUT Count
```

**Task 12:** Write an algorithm (in pseudocode) to **count how many values are odd** and output the count. **[4]**

Use the following data:

Values ← [12, 7, 9, 20, 15, 8, 3, 14, 6, 11]

Note : AS Level students will use Values[i] MOD 2 = 0

---

### **Example Task**: Find the Largest Value.

An array `Data` stores **10 integer values**. Write an algorithm (in pseudocode) to **find and output the largest value** in the array.

#### Example Answer (Pseudocode)

```
DECLARE Data : ARRAY [1:10] OF INTEGER

DECLARE Largest : INTEGER

DECLARE i : INTEGER

Data ← [45, 12, 89, 23, 67, 5, 90, 34, 21, 10]

Largest ← Data[1]

FOR i ← 2 TO 10

IF Data[i] > Largest THEN

Largest ← Data[i]

ENDIF

NEXT i

OUTPUT Largest
```

**Task 14:** Write an algorithm (in pseudocode) to **find and output the smallest value** in the array. **[5]**

Use the following data:

Data ← [45, 12, 89, 23, 67, 5, 90, 34, 21, 10]

---

### **Example Task:** Count Positive Numbers

An array `Numbers` stores **10 integer values**. Write an algorithm (in pseudocode) to **count how many numbers are positive** and output the count.

#### Example Answer (Pseudocode)

```
DECLARE Numbers : ARRAY [1:10] OF INTEGER

DECLARE Count : INTEGER

DECLARE i : INTEGER

Numbers ← [-23, 4, 563, -34, 0, 5, 45, -94, 5, 43]

Count ← 0

FOR i ← 1 TO 10

IF Numbers[i] > 0 THEN

Count ← Count + 1

ENDIF

NEXT i

OUTPUT Count
```

**Task 15:** Write an algorithm (in pseudocode) to **count how many numbers are positive and how many are negative**, then output both counts. **[6]**

Use the following data:

Numbers ← [-23, 4, 563, -34, 0, 5, 45, -94, 5, 43]

---

### Example Task: Find the Average of Positive Numbers

An array `Values` stores **10 integer values**. Write an algorithm (in pseudocode) to **calculate and output the average of the positive numbers only**.

#### Example Answer (Pseudocode)

```
DECLARE Values : ARRAY [1:10] OF INTEGER

DECLARE Total : INTEGER

DECLARE Count : INTEGER

DECLARE Average : REAL

DECLARE i : INTEGER

Values ← [-4, 6, 10, -2, 8, 0, 5, -9, 3, 7]

Total ← 0

Count ← 0

FOR i ← 1 TO 10

IF Values[i] > 0 THEN

Total ← Total + Values[i]

Count ← Count + 1

ENDIF

NEXT i

Average ← Total / Count

OUTPUT Average
```

**Task 16:** Write an algorithm (in pseudocode) to **calculate and output the average of the negative numbers only**. **[6]**

Use the following data:

Values ← [-4, 6, 10, -2, 8, 0, 5, -9, 3, 7]

---

### Example Task: Count Consecutive Positive Numbers

An array `Data` stores **10 integer values**. Write an algorithm (in pseudocode) to **count how many values are positive AND immediately followed by another positive value**.

#### Example Answer (Pseudocode)

```
DECLARE Data : ARRAY [1:10] OF INTEGER

DECLARE Count : INTEGER

DECLARE i : INTEGER

Data ← [5, 7, -3, 4, 6, 8, -2, 1, 2, -1]

Count ← 0

FOR i ← 1 TO 9

IF Data[i] > 0 AND Data[i + 1] > 0 THEN

Count ← Count + 1

ENDIF

NEXT i

OUTPUT Count
```

**Task 17:** Write an algorithm (in pseudocode) to **count how many values are negative AND immediately followed by another negative value**. **[7]**

Use the following data:

Data ← [5, 7, -3, -4, 6, 8, -2, 1, -2, -1]

---

### Example Task: Output Values at Even Index Positions

An array `Scores` stores **10 integer values**.

Write an algorithm (in pseudocode) to **output all values stored at even index positions**.

#### Example Answer (Pseudocode)

```
DECLARE Scores : ARRAY [1:10] OF INTEGER

DECLARE i : INTEGER

Scores ← [12, 5, 9, 20, 7, 14, 3, 8, 6, 11]

FOR i ← 2 TO 10 STEP 2

OUTPUT Scores[i]

NEXT i
```

**Task 18:** Write an algorithm (in pseudocode) to **output all values stored at odd index positions**. **[4]**

Use the following data:

Scores ← [12, 5, 9, 20, 7, 14, 3, 8, 6, 11]

---

### Leave a Reply[Cancel reply](/pseudocode/6-pseudocode-array/6-1-pseudocode-tasks/#respond)