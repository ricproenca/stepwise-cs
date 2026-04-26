# 7.3 ARRAY TASKS

> Source: https://moshikur.com/pseudocode/6-pseudocode-array/6-1-pseudocode-array-tasks-2/

# 7.3 PSEUDOCODE ARRAY TASKS 3

---

### **Example Task 1: Find Maximum**

**Task:** Find the highest score in the `Scores[]` array with 4 elements and output it once.

```
DECLARE Scores : ARRAY [1:4] OF INTEGER

DECLARE max : INTEGER

// Assigning some values to the Scores array

Scores ← [45,76,89,67]

max ← Scores[1]

FOR i ← 2 TO 4

IF Scores[i] > max THEN

max ← Scores[i]

ENDIF

NEXT i

OUTPUT "Highest score is ", max
```

**Task 1:**  
Find the lowest score in the `Scores[]` array and output it.

---

### **Example Task 2: Calculate Total Sales**

**Task:** Calculate the total sales from the `Sales[]` array with 5 elements and output it.

```
DECLARE Sales : ARRAY [1:5] OF INTEGER

DECLARE total : INTEGER

// Assigning 5 values to the Sales array

Sales ← [100,200,150,175,225]

FOR i ← 1 TO 5

total ← total + Sales[i]

NEXT i

OUTPUT "Total sales: ", total
```

**Task 2:**  
Find and output the average sales from the `Sales[]` array.

---

### **Example Task 3: Count Heights Above Threshold**

**Task:** Count elements in `Heights[]` array with 5 elements that are greater than 150 cm and output the count.

```
DECLARE Heights : ARRAY [1:5] OF INTEGER

DECLARE count : INTEGER

// Assigning 5 values to the Heights array

Heights ← [160,145,152,149,155]

FOR i ← 1 TO 5

IF Heights[i] > 150 THEN

count ← count + 1

ENDIF

NEXT i

OUTPUT "Count of heights above 150 cm: ", count
```

**Task 3:**  
Find and output the percentage of heights in `Heights[]` array that are less than or equal to 150 cm.

---

### **Example Task 4: Find First Occurrence of Maximum**

**Task:** Find and output the index of the first occurrence of the highest price in `Prices[]` array with 5 elements.

```
DECLARE Prices : ARRAY [1:5] OF INTEGER

DECLARE max : INTEGER

DECLARE index : INTEGER

// Assigning sample values to the Prices array

Prices ← [100,250,180,300,150]

max ← Prices[1]

FOR i ← 2 TO 5

IF Prices[i] > max THEN

max ← Prices[i]

index ← i

ENDIF

NEXT i

OUTPUT "Index of maximum price: ", index
```

**Task 4:**  
Find and output the index of the Minimum price in `Prices[]` array.

---

### **EExample Task 5: Search for Specific Age**

**Task:** Search the `Ages[]` array with 5 elements for the value 25. Output “Found” or “Not Found”.

```
DECLARE Ages : ARRAY [1:5] OF INTEGER

DECLARE found : BOOLEAN

// Assigning sample values to the Ages array

Ages ← [22,18,30,18,29]

found ← FALSE

FOR i ← 1 TO 5

IF Ages[i] = 25 THEN

found ← TRUE

ENDIF

NEXT i

IF found THEN

OUTPUT "Found"

ELSE

OUTPUT "Not Found"

ENDIF
```

**Task 5:**  
Find and output all the indices where the age `18` appears in `Ages[]` array.

---

### **Example Task 6: Count Below Zero**

**Task:** Count how many elements in `Temperatures[]` array with 5 elements are below 0 and output the count.

```
DECLARE Temperatures : ARRAY [1:5] OF INTEGER

DECLARE count : INTEGER

// Assigning sample values to the Temperatures array

Temperatures ← [-5,3,-10,2,-7]

FOR i ← 1 TO 5

IF Temperatures[i] < 0 THEN

count ← count + 1

ENDIF

NEXT i

OUTPUT "Count of temperatures below 0: ", count
```

**Task 6:**  
Find the average of all temperatures below 0 in `Temperatures[]` array.

---

### **Example Task 7: Count Exact Matches**

**Task:** Count the number of elements in `Grades[]` array with 6 elements that have the grade 50 and output the count.

```
DECLARE Grades : ARRAY [1:6] OF INTEGER

DECLARE count : INTEGER

// Assigning sample values to the Grades array

Grades ← [50,45,50,60,50,70]

FOR i ← 1 TO 6

IF Grades[i] = 50 THEN

count ← count + 1

ENDIF

NEXT i

OUTPUT "Count of grades 50: ", count
```

**Task 7:**  
Count the number of grades greater than or equal to 90 in `Grades[]` array.

---

1. ![school student Avatar](images/pseudocode/7_3_array_tasks/img_001.jpg)

   school student

   [September 3, 2025 at 9:32 pm](https://moshikur.com/pseudocode/6-pseudocode-array/6-1-pseudocode-array-tasks-2/comment-page-1/#comment-64)

   this is fantastic

   Loading…

   [Reply](https://moshikur.com/pseudocode/6-pseudocode-array/6-1-pseudocode-array-tasks-2/comment-page-1/?replytocom=64#respond)

### Leave a Reply[Cancel reply](/pseudocode/6-pseudocode-array/6-1-pseudocode-array-tasks-2/#respond)