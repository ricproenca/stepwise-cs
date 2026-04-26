# Chapter 11: Programming

Source: https://moshikur.com/as-level/as-ch11-programming/11-2-constructs/

---

## 11.1 Programming Basics

Covers pseudocode fundamentals — variables, data types, assignment, input/output.

---

## 11.2 Constructs

A construct is a basic building block that controls program flow — what happens and when.

### Three Types of Constructs

| Construct | Purpose | Mechanisms |
|---|---|---|
| **Sequence** | Execute steps in written order | Direct statements |
| **Selection** | Choose between different actions based on conditions | IF...ELSE, CASE |
| **Iteration** | Repeat steps until a condition is met | FOR, WHILE, REPEAT...UNTIL |

---

### Sequence

Steps execute in order, one after another, without branching or repetition.

```
OUTPUT "Enter your name"
INPUT Name
OUTPUT "Hello " & Name
```

---

### Selection

Programs choose between different actions based on true/false conditions.

#### IF...ELSE
```
IF Age >= 18 THEN
    OUTPUT "You can vote"
ELSE
    OUTPUT "You cannot vote"
ENDIF
```

#### CASE
```
CASE Grade OF
    "A" : OUTPUT "Excellent"
    "B" : OUTPUT "Good"
    "C" : OUTPUT "Needs Improvement"
    OTHERWISE : OUTPUT "Invalid Grade"
ENDCASE
```

---

### Iteration

Repeats a block of code until a termination condition is met.

#### FOR Loop (count-controlled)
```
FOR i ← 1 TO 5
    OUTPUT "I love coding!"
NEXT i
```

#### WHILE Loop (pre-condition — may not execute if condition is false initially)
```
INPUT Password
WHILE Password <> "OpenSesame"
    OUTPUT "Wrong password. Try again."
    INPUT Password
ENDWHILE
```

#### REPEAT...UNTIL (post-condition — always executes at least once)
```
REPEAT
    INPUT Number
UNTIL Number > 0
```

**Key distinction:**
- `WHILE` evaluates condition **before** the body — loop may be skipped entirely
- `REPEAT...UNTIL` evaluates condition **after** the body — loop always runs at least once

---

## 11.3 Structured Programming

### Functions and Procedures

**Function** — a named block of code that performs a task and **returns a value**.

**Procedure** — a named block of code that performs a task but **does not return a value**.

Both allow code to be written once and called multiple times, reducing duplication.

### Text File Handling (Using Procedures)

#### Create a File
```
PROCEDURE CreateFile(FileName : STRING, DataToWrite : STRING)
    OPENFILE FileName FOR WRITE
    WRITEFILE FileName, DataToWrite
    CLOSEFILE FileName
ENDPROCEDURE
CALL CreateFile("test.txt", "Hello World")
```

#### Read from a File
```
PROCEDURE ReadFile(FileName : STRING)
    DECLARE Line : STRING
    OPENFILE FileName FOR READ
    WHILE NOT EOF(FileName)
        READFILE FileName, Line
        OUTPUT Line
    ENDWHILE
    CLOSEFILE FileName
ENDPROCEDURE
```

#### Append to a File
```
PROCEDURE AppendToFile(FileName : STRING, NewData : STRING)
    OPENFILE FileName FOR APPEND
    WRITEFILE FileName, NewData
    CLOSEFILE FileName
ENDPROCEDURE
```

### Text File Handling (Using Functions)

#### Count Lines
```
FUNCTION CountLines(FileName : STRING) RETURNS INTEGER
    DECLARE LineCount : INTEGER
    DECLARE Line : STRING
    LineCount ← 0
    OPENFILE FileName FOR READ
    WHILE NOT EOF(FileName)
        READFILE FileName, Line
        LineCount ← LineCount + 1
    ENDWHILE
    CLOSEFILE FileName
    RETURN LineCount
ENDFUNCTION
```

#### Check if a Word Exists
```
FUNCTION WordExists(FileName : STRING, WordToSearch : STRING) RETURNS BOOLEAN
    DECLARE Line : STRING
    OPENFILE FileName FOR READ
    WHILE NOT EOF(FileName)
        READFILE FileName, Line
        IF WordToSearch = Line THEN
            CLOSEFILE FileName
            RETURN TRUE
        ENDIF
    ENDWHILE
    CLOSEFILE FileName
    RETURN FALSE
ENDFUNCTION
```

#### Find the Shortest Line
```
FUNCTION ShortestLine(FileName : STRING) RETURNS STRING
    DECLARE Shortest : STRING
    DECLARE Line : STRING
    OPENFILE FileName FOR READ
    READFILE FileName, Shortest
    WHILE NOT EOF(FileName)
        READFILE FileName, Line
        IF LENGTH(Line) < LENGTH(Shortest) THEN
            Shortest ← Line
        ENDIF
    ENDWHILE
    CLOSEFILE FileName
    RETURN Shortest
ENDFUNCTION
```

#### Count Empty Lines
```
FUNCTION CountEmptyLines(FileName : STRING) RETURNS INTEGER
    DECLARE EmptyLineCount : INTEGER
    DECLARE Line : STRING
    EmptyLineCount ← 0
    OPENFILE FileName FOR READ
    WHILE NOT EOF(FileName)
        READFILE FileName, Line
        IF Line = "" THEN
            EmptyLineCount ← EmptyLineCount + 1
        ENDIF
    ENDWHILE
    CLOSEFILE FileName
    RETURN EmptyLineCount
ENDFUNCTION
```

#### Get the Last Line
```
FUNCTION GetLastLine(FileName : STRING) RETURNS STRING
    DECLARE LastLine : STRING
    DECLARE Line : STRING
    LastLine ← ""
    OPENFILE FileName FOR READ
    WHILE NOT EOF(FileName)
        READFILE FileName, Line
        LastLine ← Line
    ENDWHILE
    CLOSEFILE FileName
    RETURN LastLine
ENDFUNCTION
```
