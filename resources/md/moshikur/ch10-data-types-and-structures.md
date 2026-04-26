# Chapter 10: Data Types and Structures

Source: https://moshikur.com/as-level/as-ch10-data-types-and-structures/

---

## 10.1 Data Types and Records

### Primitive Data Types

| Type | Description | Example |
|---|---|---|
| Integer | Whole numbers (positive, negative, zero) | -5, 0, 42 |
| Real / Float | Numbers with a fractional part | 3.14, -2.7 |
| Boolean | Logical true or false | TRUE, FALSE |
| Character | A single character | 'A', '5', '!' |
| String | A sequence of characters | "Hello" |

### Record Type Data

A **record** (composite data type) groups fields of different data types under one identifier to represent a real-world entity.

**Pseudocode definition:**
```
TYPE StudentRecord
    DECLARE Name     : STRING
    DECLARE Age      : INTEGER
    DECLARE Grade    : CHAR
ENDTYPE
```

**Declaring and using a record:**
```
DECLARE Student : StudentRecord
Student.Name  ← "Alice"
Student.Age   ← 17
Student.Grade ← 'A'
OUTPUT Student.Name
```

---

## 10.2 Arrays

### Basics

A fixed-size, ordered collection of elements of the **same data type**, accessed using an index.

**Declaring a 1D array (pseudocode):**
```
DECLARE Scores : ARRAY[1:5] OF INTEGER
Scores[1] ← 85
Scores[2] ← 72
```

**Iterating through an array:**
```
FOR i ← 1 TO 5
    OUTPUT Scores[i]
NEXT i
```

### 2D Arrays

Two-dimensional arrays organised in rows and columns, accessed using two indices (row, column).

**Declaring a 2D array:**
```
DECLARE Grid : ARRAY[1:3, 1:3] OF INTEGER
Grid[1, 1] ← 10
Grid[2, 3] ← 45
```

### Linear Search

Sequentially checks each element until the target is found or the end is reached.

- Works on sorted **and** unsorted data
- Time complexity: O(n)

```
DECLARE Found : BOOLEAN
DECLARE Position : INTEGER
Found ← FALSE
FOR i ← 1 TO 10
    IF List[i] = Target THEN
        Found ← TRUE
        Position ← i
    ENDIF
NEXT i
IF Found THEN
    OUTPUT "Found at position ", Position
ELSE
    OUTPUT "Not found"
ENDIF
```

### Bubble Sort

Repeatedly compares and swaps adjacent elements until the array is fully sorted.

- Simple but inefficient for large datasets
- Time complexity: O(n²)

```
DECLARE Temp : INTEGER
FOR i ← 1 TO n - 1
    FOR j ← 1 TO n - i
        IF List[j] > List[j + 1] THEN
            Temp ← List[j]
            List[j] ← List[j + 1]
            List[j + 1] ← Temp
        ENDIF
    NEXT j
NEXT i
```

---

## 10.3 Files

### Text File Handling

Reading from and writing to text files in pseudocode.

**Write to file:**
```
OPENFILE "data.txt" FOR WRITE
WRITEFILE "data.txt", "Hello World"
CLOSEFILE "data.txt"
```

**Read from file:**
```
DECLARE Line : STRING
OPENFILE "data.txt" FOR READ
WHILE NOT EOF("data.txt")
    READFILE "data.txt", Line
    OUTPUT Line
ENDWHILE
CLOSEFILE "data.txt"
```

**Append to file:**
```
OPENFILE "data.txt" FOR APPEND
WRITEFILE "data.txt", "New line"
CLOSEFILE "data.txt"
```

---

## 10.4 Abstract Data Types (ADT)

### Stack (LIFO — Last In, First Out)

Elements added and removed from the **top** only.

**Operations:**

| Operation | Description |
|---|---|
| PUSH | Add an element to the top |
| POP | Remove and return the top element |
| Peek / Top | View top element without removing |
| isEmpty | Check if stack is empty |
| isFull | Check if stack is full |

**Array-based implementation:**
```
DECLARE Stack : ARRAY[1:10] OF INTEGER
DECLARE Top : INTEGER
Top ← 0

// PUSH
Top ← Top + 1
Stack[Top] ← Value

// POP
Value ← Stack[Top]
Top ← Top - 1
```

**Uses:** undo operations, function call stack, expression evaluation, backtracking.

---

### Queue (FIFO — First In, First Out)

Elements added at the **rear** and removed from the **front**.

**Operations:**

| Operation | Description |
|---|---|
| Enqueue | Add element to the rear |
| Dequeue | Remove element from the front |
| isEmpty | Check if queue is empty |
| isFull | Check if queue is full |

**Array-based implementation:**
```
DECLARE Queue : ARRAY[1:10] OF INTEGER
DECLARE Front, Rear : INTEGER
Front ← 1
Rear  ← 0

// Enqueue
Rear ← Rear + 1
Queue[Rear] ← Value

// Dequeue
Value ← Queue[Front]
Front ← Front + 1
```

**Uses:** print queues, scheduling, keyboard input buffers.

---

### Linked List

A dynamic structure of **nodes**, each containing data and a pointer to the next node.

**Node structure:**
```
TYPE Node
    DECLARE Data    : INTEGER
    DECLARE Pointer : INTEGER   // index of next node, or -1 if last
ENDTYPE
```

**Operations:** insert at head, insert at tail, delete by value, traverse, search.

**Advantages over arrays:** dynamic size (no fixed capacity); insertion/deletion without shifting.

**Disadvantages:** no direct index access; requires following pointers sequentially.
