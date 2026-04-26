# Chapter 13: Data Representation

Sources:
- https://moshikur.com/a2-level/a2-ch13-data-representation/13-1-user-defined-data-types/
- https://moshikur.com/a2-level/a2-ch13-data-representation/13-2-file-organisation-and-file-access/
- https://moshikur.com/a2-level/a2-ch13-data-representation/13-3-floating-point-numbers-representation-and-manipulation/

---

## 13.1 User-Defined Data Types

### Why User-Defined Types Are Necessary

1. **Handling Complex Data** — combine different data types into one structure
2. **Making Code Easy to Understand** — give meaningful names to complex structures
3. **Keeping Data and Functions Together** — bundle data with functions (encapsulation)
4. **Ensuring Data is Correct** — enforce rules about data format
5. **Reusing Code** — define once, use across programs

**Book type example:**
```
TYPE Book
    DECLARE Title           : STRING
    DECLARE Author          : STRING
    DECLARE PublicationYear : INTEGER
    DECLARE ISBN            : STRING
ENDTYPE

DECLARE MyBook : Book
MyBook.Title           ← "Introduction to Computer Science"
MyBook.Author          ← "Jane Doe"
MyBook.PublicationYear ← 2021
MyBook.ISBN            ← "123-4567890123"
```

---

### Non-Composite Data Types

#### Enumerated Types

A set of named constant values that make code more readable and manageable.

```
TYPE Day = (Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday)

DECLARE Today : Day
Today ← Wednesday

IF Today = Saturday OR Today = Sunday THEN
    OUTPUT "It's the weekend!"
ELSE
    OUTPUT "It's a weekday."
ENDIF
```

```
TYPE Season = (Spring, Summer, Autumn, Winter)
```

#### Pointer Types

A pointer stores the **memory address** of another variable.

- `^INTEGER` — pointer to INTEGER
- `^var` — address of variable `var`
- `ptr^` — value at the pointer's address (dereferencing)

**Core example:**
```
TYPE AgePointer = ^INTEGER
DECLARE studentAge : INTEGER
DECLARE ageRef : AgePointer

ageRef ← ^studentAge
OUTPUT ageRef^          // 0

studentAge ← 18
OUTPUT ageRef^          // 18

studentAge ← studentAge + ageRef^
OUTPUT ageRef^          // 36
```

**Task 1 — Basic declaration and access:**
```
TYPE ScorePointer = ^INTEGER
DECLARE studentScore : INTEGER
DECLARE scoreRef : ScorePointer

studentScore ← 100
scoreRef ← ^studentScore
OUTPUT scoreRef^        // 100
```

**Task 2 — Modify value using pointer:**
```
TYPE TemperaturePointer = ^INTEGER
DECLARE roomTemperature : INTEGER
DECLARE tempRef : TemperaturePointer

roomTemperature ← 25
tempRef ← ^roomTemperature
roomTemperature ← tempRef^ + 3
OUTPUT tempRef^         // 28
```

**Task 3 — Two pointers to one variable:**
```
TYPE AgePointer = ^INTEGER
DECLARE age : INTEGER
DECLARE ptrA : AgePointer
DECLARE ptrB : AgePointer

age ← 40
ptrA ← ^age
ptrB ← ^age
age ← ptrA^ + 5
OUTPUT ptrB^            // 45
```

**Task 4 — Dynamic redirection:**
```
TYPE IntPointer = ^INTEGER
DECLARE x : INTEGER
DECLARE y : INTEGER
DECLARE ref : IntPointer

x ← 10
y ← 20

ref ← ^x
OUTPUT ref^             // 10

ref ← ^y
OUTPUT ref^             // 20

y ← y + 5
OUTPUT ref^             // 25
```

**Task 5 — Pointer with procedure:**
```
TYPE NumPointer = ^INTEGER
DECLARE number : INTEGER
DECLARE ref : NumPointer

PROCEDURE DoubleValue(p : NumPointer)
    p^ ← p^ * 2
ENDPROCEDURE

number ← 7
ref ← ^number
CALL DoubleValue(ref)
OUTPUT number           // 14
```

**Task 6 — Multiple pointer redirections:**
```
TYPE RefInt = ^INTEGER
DECLARE a : INTEGER
DECLARE b : INTEGER
DECLARE c : INTEGER
DECLARE p : RefInt

a ← 5
b ← 10
c ← 15

p ← ^a
p^ ← p^ + 1

p ← ^b
p^ ← p^ + 2

p ← ^c
p^ ← p^ * 2

OUTPUT a    // 6
OUTPUT b    // 12
OUTPUT c    // 30
```

---

### Composite Data Types

#### Records

Groups related data items of different types under one identifier. Each item is a **field**.

```
TYPE StudentRecord
    DECLARE LastName    : STRING
    DECLARE FirstName   : STRING
    DECLARE DateOfBirth : DATE
    DECLARE YearGroup   : INTEGER
    DECLARE FormGroup   : CHAR
ENDTYPE

DECLARE Pupil1 : StudentRecord
Pupil1.LastName    ← "Johnson"
Pupil1.FirstName   ← "Leroy"
Pupil1.DateOfBirth ← 02/01/2005
Pupil1.YearGroup   ← 6
Pupil1.FormGroup   ← 'A'
```

**Nested records:**
```
TYPE TAddress
    DECLARE HouseNumber : INTEGER
    DECLARE Street      : STRING
ENDTYPE

TYPE TPerson
    DECLARE Name    : STRING
    DECLARE Age     : INTEGER
    DECLARE Address : TAddress
ENDTYPE

DECLARE Person : TPerson
Person.Name                ← "John Doe"
Person.Age                 ← 30
Person.Address.HouseNumber ← 123
Person.Address.Street      ← "Main Street"
```

**Record with array field:**
```
TYPE TClass
    DECLARE ClassName    : STRING
    DECLARE StudentNames : ARRAY [1:5] OF STRING
ENDTYPE

DECLARE MyClass : TClass
MyClass.ClassName       ← "Math"
MyClass.StudentNames[1] ← "Alice"
MyClass.StudentNames[2] ← "Bob"
```

**Practice tasks:**
- Task 7: `TBook` — Title (STRING), Author (STRING), Price (REAL)
- Task 8: `TLaptop` — Brand (STRING), Processor (STRING), RAM (INTEGER); assign "Dell", "i7", 16
- Task 9: `TDimensions` (Height, Width : REAL) nested inside `TPackage` (PackageID : INTEGER, Weight : REAL, Dimensions : TDimensions)
- Task 10: `TSportsTeam` — TeamName (STRING), PlayerNames (ARRAY [1:4] OF STRING)

#### Sets

Holds multiple items of the **same type** where each item must be unique.

```
TYPE VowelSet = SET OF CHAR
DEFINE Vowels('A', 'E', 'I', 'O', 'U') : VowelSet

DECLARE MyVowels : VowelSet
MyVowels ← Vowels

IF 'A' IN MyVowels THEN
    OUTPUT "A is a vowel"
ENDIF
```

```
TYPE TColors = SET OF STRING
DEFINE AvailableColors("Red", "Green", "Blue") : TColors
```

- Task 13: `TSubjects` — SET OF STRING; initialize with "Math", "Science", "History"

#### Classes / Objects

Blueprints for creating objects — group data (attributes) and methods together.

```
CLASS Pet
    PRIVATE Name : STRING

    PUBLIC PROCEDURE NEW(GivenName : STRING)
        Name ← GivenName
    ENDPROCEDURE
ENDCLASS

DECLARE MyPet : Pet
MyPet ← NEW Pet("Buddy")
```

**Class with attributes and method:**
```
CLASS Building
    DECLARE BuildingID : INTEGER
    DECLARE Address    : STRING
    DECLARE Floors     : INTEGER

    PROCEDURE DisplayDetails()
        OUTPUT "Building ID: ", BuildingID
        OUTPUT "Address: ", Address
        OUTPUT "Floors: ", Floors
    ENDPROCEDURE
ENDCLASS
```

- Task 11: `Employee` — EmployeeID (INTEGER), Name (STRING), Salary (REAL); declare object and assign values
- Task 12: Extend `Employee` with `DisplayDetails()` method outputting ID, Name, and Salary

---

## 13.2 File Organisation and File Access

### File Organisation Methods

| Method | Description | Use Cases |
|---|---|---|
| **Serial** | Records stored in order added; no sorting | Logs, transaction records |
| **Sequential** | Records sorted by a key field | Payroll, customer lists, batch processing |
| **Random (Direct)** | Records stored at address calculated by hash function | Databases, banking, real-time lookups |

### File Access Methods

- **Sequential access** — read from start through records in order until target found
- **Direct access** — jump immediately to a record's address using a calculated address

### Hashing Algorithm

Computes a storage address from a key field using a mathematical formula.

**Example formula:** `address = key MOD 2000`

**Writing a record:**
1. Calculate address via hash function
2. Check if location is empty
3. Store record; handle collision if necessary

**Reading a record:**
1. Apply hash function to key
2. Jump directly to calculated address
3. Verify the key matches

### Collision Resolution

**Open Hashing (Chaining)** — records hashing to the same address are linked together in a chain (linked list). Avoids table fullness but requires extra pointer memory.

**Closed Hashing (Linear Probing)** — when a collision occurs, system searches sequentially for the next available slot within the table. Memory-efficient but risks clustering.

| Feature | Open Hashing | Closed Hashing |
|---|---|---|
| Structure | Linked lists | Probing within table |
| Extra memory | Yes (pointers) | No |
| Clustering risk | No | Yes |
| Table fullness | Less likely | Possible |

### Use Case Selection

- **Serial** — append-only systems, logs, temporary storage
- **Sequential** — batch processing, payroll, sorted reports
- **Random** — banking, bookings, real-time systems, frequent searches

---

## 13.3 Floating-Point Numbers: Representation and Manipulation

### Core Format

Binary floating-point uses **M × 2^E** where:
- **M** = mantissa (significant digits)
- **E** = exponent (power of 2)

Mirrors scientific notation but in binary — enables storage of very large, very small, and fractional values that fixed-point binary cannot handle.

### Key Definitions

**Normalisation** — moving the binary point so the mantissa begins with `01` (positive) or `10` (negative), ensuring a unique, standardised representation.

**Two's Complement** — used for both mantissa and exponent to represent negative values.

### Normalisation Rules

| Sign | Normalised mantissa starts with |
|---|---|
| Positive | `01...` |
| Negative | `10...` |

### Denary to Binary Conversion

1. Convert integer part using successive division by 2
2. Convert fractional part by multiplying by 2 repeatedly
3. Normalise so mantissa starts with `01` (positive) or `10` (negative)
4. Encode exponent in two's complement form

**Example: +7.25**
- 7 in binary = `111`, 0.25 in binary = `.01`
- Combined: `111.01`
- Normalised: `0.11101 × 2³`
- Mantissa: `0111010000`, Exponent: `000011` (3 in two's complement)

### Binary to Denary Conversion

1. Examine mantissa sign bit (0 = positive, 1 = negative)
2. If negative, apply two's complement to reverse
3. Convert exponent from two's complement to denary
4. Shift binary point by exponent value
5. Convert resulting binary to denary
6. Apply original sign

### Precision and Range Considerations

- **Approximation** — not all denary numbers convert exactly to binary
- **Rounding errors** — precision limitations create cumulative errors
- **Overflow** — number exceeds maximum representable magnitude
- **Underflow** — number falls below minimum non-zero magnitude
