# Cambridge 9618 Pseudocode Reference

Authoritative reference for all pseudocode used in content generation.
Source: Cambridge 9618 Pseudocode Guide for Teachers (April 2023).
All algorithm and code examples in notes.md and questions.md must follow these conventions exactly.
Never use Python, JavaScript, or any other language syntax.

---

## 1 Formatting Conventions

- **Keywords** — upper-case: `IF`, `WHILE`, `PROCEDURE`, `FUNCTION`, etc.
- **Identifiers** — mixed case (camelCase / PascalCase): `NumberOfPlayers`, `TotalToPay`
- **Indentation** — 3 spaces per level
- **Comments** — preceded by `//`; continue to end of line

```
// this procedure swaps values of X and Y
PROCEDURE Swap(BYREF X : INTEGER, Y : INTEGER)
   Temp ← X    // temporarily store X
   X ← Y
   Y ← Temp
ENDPROCEDURE
```

---

## 2 Variables, Constants and Data Types

### Data types

| Keyword | Description | Literal examples |
|---------|-------------|-----------------|
| `INTEGER` | Whole number | `5`, `-3` |
| `REAL` | Number with fractional part | `4.7`, `0.3`, `-4.0` |
| `CHAR` | Single character | `'x'`, `'C'`, `'@'` |
| `STRING` | Sequence of zero or more characters | `"Hello"`, `""` |
| `BOOLEAN` | Logical value | `TRUE`, `FALSE` |
| `DATE` | Valid calendar date | `dd/mm/yyyy` |

### Variable declarations

```
DECLARE Counter : INTEGER
DECLARE TotalToPay : REAL
DECLARE GameOver : BOOLEAN
```

Format: `DECLARE <identifier> : <data type>`

### Constants

```
CONSTANT HourlyRate = 6.50
CONSTANT DefaultText = "N/A"
```

Format: `CONSTANT <identifier> = <value>`
Use `=` for constants, never `←`. Only literals may be used as the value.

### Assignment

```
Counter ← 0
Counter ← Counter + 1
TotalToPay ← NumberOfHours * HourlyRate
```

Use `←` for assignment. Never use `=` for assignment.

---

## 3 Input / Output

```
INPUT Answer
OUTPUT Score
OUTPUT "You have ", Lives, " lives left"
```

Multiple values separated by commas may appear in a single `OUTPUT` statement.

---

## 4 Operators

### Arithmetic

| Operator | Meaning | Note |
|----------|---------|------|
| `+` | Addition | |
| `-` | Subtraction | |
| `*` | Multiplication | |
| `/` | Division | Result is always `REAL` |
| `DIV` | Integer division (quotient) | `7 DIV 2` → `3` |
| `MOD` | Remainder | `7 MOD 2` → `1` |

### Comparison (result is always `BOOLEAN`)

| Operator | Meaning |
|----------|---------|
| `=` | Equal to |
| `<>` | Not equal to |
| `<` | Less than |
| `>` | Greater than |
| `<=` | Less than or equal to |
| `>=` | Greater than or equal to |

### Logic (operands and results are always `BOOLEAN`)

```
IF x > 0 AND y > 0 THEN ...
IF x = 0 OR y = 0 THEN ...
IF NOT Flag THEN ...
```

Use parentheses in complex expressions to make order of operations explicit.

---

## 5 String Functions and Operations

Concatenation uses `&`:
```
FullName ← FirstName & " " & LastName
```

| Function | Signature | Returns | Example |
|----------|-----------|---------|---------|
| `RIGHT` | `RIGHT(ThisString : STRING, x : INTEGER) RETURNS STRING` | Rightmost x characters | `RIGHT("ABCDEFGH", 3)` → `"FGH"` |
| `LENGTH` | `LENGTH(ThisString : STRING) RETURNS INTEGER` | Length of string | `LENGTH("Happy Days")` → `10` |
| `MID` | `MID(ThisString : STRING, x : INTEGER, y : INTEGER) RETURNS STRING` | y chars from position x | `MID("ABCDEFGH", 2, 3)` → `"BCD"` |
| `LCASE` | `LCASE(ThisChar : CHAR) RETURNS CHAR` | Lower-case equivalent | `LCASE('W')` → `'w'` |
| `UCASE` | `UCASE(ThisChar : CHAR) RETURNS CHAR` | Upper-case equivalent | `UCASE('h')` → `'H'` |

Note: `LCASE` and `UCASE` operate on `CHAR`, not `STRING`. If the argument is not an alphabetic character, it is returned unchanged.

---

## 6 Numeric Functions

| Function | Signature | Returns | Example |
|----------|-----------|---------|---------|
| `INT` | `INT(x : REAL) RETURNS INTEGER` | Integer part of x | `INT(27.5415)` → `27` |
| `RAND` | `RAND(x : INTEGER) RETURNS REAL` | Random real in range 0 to x (exclusive) | `RAND(87)` may return `35.43` |

---

## 7 Selection

### IF Statement

```
IF condition THEN
   <statement(s)>
ENDIF

IF condition THEN
   <statement(s)>
ELSE
   <statement(s)>
ENDIF
```

Nested IF example:
```
IF ChallengerScore > ChampionScore THEN
   IF ChallengerScore > HighestScore THEN
      OUTPUT ChallengerName, " is champion and highest scorer"
   ELSE
      OUTPUT ChallengerName, " is the new champion"
   ENDIF
ELSE
   OUTPUT ChampionName, " is still the champion"
ENDIF
```

### CASE Statement

```
CASE OF <identifier>
   <value1> : <statement>
   <value2> : <statement>
   OTHERWISE : <statement>
ENDCASE
```

Values may be a range:
```
CASE OF Mark
   0 TO 49 : Grade ← 'F'
   50 TO 69 : Grade ← 'C'
   70 TO 100 : Grade ← 'A'
   OTHERWISE : OUTPUT "Invalid mark"
ENDCASE
```

Cases are tested in sequence; execution stops at the first match. `OTHERWISE` must be last.

---

## 8 Iteration

### FOR Loop (count-controlled)

```
FOR i ← 1 TO 10
   OUTPUT i
NEXT i

FOR i ← 10 TO 1 STEP -1
   OUTPUT i
NEXT i
```

The identifier must be `INTEGER`. If `value1 > value2` (without a negative STEP), the loop body does not execute. Repeat the identifier after `NEXT`.

### REPEAT…UNTIL Loop (post-condition)

```
REPEAT
   OUTPUT "Enter password"
   INPUT Password
UNTIL Password = "Secret"
```

Body executes at least once. Loop terminates when condition is `TRUE`.

### WHILE Loop (pre-condition)

```
WHILE condition
   <statement(s)>
ENDWHILE
```

Example:
```
WHILE Number > 9
   Number ← Number - 9
ENDWHILE
```

Condition tested before each iteration. Body does not execute if condition is `FALSE` on first test. No `DO` keyword.

---

## 9 Arrays

### 1D Array

```
DECLARE StudentNames : ARRAY[1:30] OF STRING

StudentNames[1] ← "Ali"
StudentNames[n+1] ← StudentNames[n]
```

### 2D Array

```
DECLARE NoughtsAndCrosses : ARRAY[1:3, 1:3] OF CHAR

NoughtsAndCrosses[2, 3] ← 'X'

FOR Row ← 1 TO 3
   FOR Column ← 1 TO 3
      OUTPUT NoughtsAndCrosses[Row, Column]
   NEXT Column
NEXT Row
```

Arrays can be assigned to each other if same size and data type:
```
SavedGame ← NoughtsAndCrosses
```

Do not use range syntax to assign groups: `StudentNames[1 TO 30] ← ""` is not valid — use a loop instead.

---

## 10 User-defined Data Types

### Enumerated type

```
TYPE Season = (Spring, Summer, Autumn, Winter)
```

### Pointer type

```
TYPE TIntPointer = ^INTEGER
DECLARE MyPointer : TIntPointer
```

The `^` indicates the variable is a pointer. Declaration of a pointer variable does not use `^`.

### Record (composite)

```
TYPE StudentRecord
   DECLARE LastName : STRING
   DECLARE FirstName : STRING
   DECLARE DateOfBirth : DATE
   DECLARE YearGroup : INTEGER
   DECLARE FormGroup : CHAR
ENDTYPE
```

### Set (composite)

```
TYPE LetterSet = SET OF CHAR
DEFINE Vowels ('A', 'E', 'I', 'O', 'U') : LetterSet
```

### Using user-defined types

Access individual fields using dot notation:

```
DECLARE Pupil1 : StudentRecord
DECLARE Form : ARRAY[1:30] OF StudentRecord

Pupil1.LastName ← "Johnson"
Pupil1.YearGroup ← 6
Pupil2 ← Pupil1

FOR Index ← 1 TO 30
   Form[Index].YearGroup ← Form[Index].YearGroup + 1
NEXT Index
```

---

## 11 Procedures and Functions

### Procedure (no return value)

```
PROCEDURE DefaultSquare()
   CALL Square(100)
ENDPROCEDURE

PROCEDURE Square(Size : INTEGER)
   FOR Side ← 1 TO 4
      CALL MoveForward(Size)
      CALL Turn(90)
   NEXT Side
ENDPROCEDURE

CALL DefaultSquare()
CALL Square(50)
```

Parameters are passed **by value** by default.

### Passing by reference

```
PROCEDURE Swap(BYREF X : INTEGER, Y : INTEGER)
   Temp ← X
   X ← Y
   Y ← Temp
ENDPROCEDURE

CALL Swap(A, B)
```

Use `BYREF` before the parameter. If multiple parameters share the same passing method, `BYREF`/`BYVAL` need not be repeated. Do not pass parameters by reference to a function.

### Function (returns a single value)

```
FUNCTION Max(Number1 : INTEGER, Number2 : INTEGER) RETURNS INTEGER
   IF Number1 > Number2 THEN
      RETURN Number1
   ELSE
      RETURN Number2
   ENDIF
ENDFUNCTION

OUTPUT "Penalty Fine = ", Max(10, Distance * 2)
```

Do not use `CALL` when calling a function. Functions are called as part of an expression.

---

## 12 File Handling

### Text files

```
OPENFILE "data.txt" FOR READ
OPENFILE "output.txt" FOR WRITE
OPENFILE "log.txt" FOR APPEND
```

| Command | Syntax | Purpose |
|---------|--------|---------|
| `READFILE` | `READFILE <file>, <variable>` | Read next line into STRING variable |
| `WRITEFILE` | `WRITEFILE <file>, <data>` | Write data to file |
| `CLOSEFILE` | `CLOSEFILE <file>` | Close file |
| `EOF` | `EOF(<file>)` | Returns `TRUE` if no more lines to read |

Typical read loop:
```
DECLARE LineOfText : STRING
OPENFILE "FileA.txt" FOR READ
OPENFILE "FileB.txt" FOR WRITE
WHILE NOT EOF("FileA.txt")
   READFILE "FileA.txt", LineOfText
   IF LineOfText = "" THEN
      WRITEFILE "FileB.txt", "---"
   ELSE
      WRITEFILE "FileB.txt", LineOfText
   ENDIF
ENDWHILE
CLOSEFILE "FileA.txt"
CLOSEFILE "FileB.txt"
```

### Random files

```
OPENFILE "StudentFile.Dat" FOR RANDOM

SEEK "StudentFile.Dat", Position        // move file pointer
GETRECORD "StudentFile.Dat", Pupil      // read record at pointer
PUTRECORD "StudentFile.Dat", NewPupil   // write record at pointer

CLOSEFILE "StudentFile.Dat"
```

`GETRECORD` variable must match the data type of the record (usually a user-defined type). `PUTRECORD` overwrites any existing data at that location.

---

## 13 Object-oriented Programming

### Class definition

```
CLASS Pet
   PRIVATE Name : STRING
   PUBLIC PROCEDURE NEW(GivenName : STRING)
      Name ← GivenName
   ENDPROCEDURE
ENDCLASS
```

Methods and properties are `PUBLIC` by default. Use `PUBLIC` or `PRIVATE` explicitly when access level matters.

### Inheritance

```
CLASS Cat INHERITS Pet
   PRIVATE Breed : STRING
   PUBLIC PROCEDURE NEW(GivenName : STRING, GivenBreed : STRING)
      SUPER.NEW(GivenName)
      Breed ← GivenBreed
   ENDPROCEDURE
ENDCLASS
```

Use `INHERITS` for inheritance. Call superclass methods with `SUPER`.

### Creating objects

```
MyCat ← NEW Cat("Kitty", "Shorthaired")
```

Format: `<object> ← NEW <ClassName>(<params>)`

### Calling methods and accessing properties

```
Player.SetAttempts(5)
OUTPUT Player.GetAttempts()
```

---

## 14 Quick-reference: What NOT to Use

| Avoid | Use instead |
|-------|-------------|
| `=` for assignment | `←` |
| `←` for constants | `CONSTANT x = value` |
| `==` for comparison | `=` |
| `!=` | `<>` |
| `print(x)` | `OUTPUT x` |
| `input()` | `INPUT x` |
| `def name():` | `PROCEDURE name()` / `FUNCTION name()` |
| `return x` (lower-case) | `RETURN x` |
| `for i in range(n):` | `FOR i ← 1 TO n` |
| `WHILE condition DO` | `WHILE condition` (no `DO` keyword) |
| `arr = []` | `DECLARE arr : ARRAY[1:n] OF TYPE` |
| `LCASE`/`UCASE` on `STRING` | `LCASE`/`UCASE` operate on `CHAR` only |
| `CALL` when calling a function | Functions are called in expressions directly |
| Range syntax `arr[1 TO n]` | Use a FOR loop to assign elements individually |
