# Chapter 08: Databases

Sources:
- https://moshikur.com/as-level/as-ch08-database/8-1-database-concepts/
- https://moshikur.com/as-level/as-ch08-database/8-2-database-management-systems-dbms/
- https://moshikur.com/as-level/as-ch08-database/8-3-data-definition-language-ddl-and-data-manipulation-language-dml/

---

## 8.1 Database Concepts

### 8.1.1 File-Based Systems vs Relational Databases

**Limitations of file-based systems:**

1. Data redundancy and inconsistency — duplicate data across files causes inconsistencies
2. Lack of data integrity — no mechanisms to enforce valid data
3. Difficulty sharing data — hard to share between users/applications
4. Poor scalability — retrieval becomes inefficient as data grows
5. Limited security — no role-based access or encryption

**Features of relational databases:**

1. Reduced redundancy — data stored once and linked via relationships
2. Data integrity — constraints (primary/foreign keys, validation) enforce accuracy
3. Data security — role-based access control and encryption
4. Scalability — efficiently handles growing data needs
5. Multi-user access — multiple simultaneous users with consistent data

---

### 8.1.2 Relational Database Terminology

| Term | Definition | Example |
|---|---|---|
| **Entity** | Real-world object or concept stored in the database | Student, Course |
| **Table** | Collection of rows and columns representing an entity | Students table |
| **Record** | Single row — one instance of an entity | A specific student's details |
| **Field / Attribute** | Single column — one property of an entity | Name, Age, StudentID |
| **Primary key** | Uniquely identifies each record; must be unique and non-null | StudentID |
| **Foreign key** | Field linking to the primary key of another table; establishes relationships | ClassID in Student table |
| **Candidate key** | Any field that could serve as primary key | StudentID or Email |
| **Secondary key** | Used for searching/indexing; not necessarily unique | Name |

### Relationship Types

| Type | Description | Example |
|---|---|---|
| One-to-one (1:1) | One record relates to exactly one record in another table | Student → ID Card |
| One-to-many (1:M) | One record relates to multiple records in another table | Teacher → Students |
| Many-to-many (M:N) | Many records relate to many records in another table | Students ↔ Courses |

**Referential integrity** — if a Student record references a ClassID, that ClassID must exist in the Class table.

**Indexing** — special lookup table improving data retrieval speed (e.g. index on Name column).

---

### 8.1.3 Entity-Relationship (ER) Diagrams

Visual representation of entities, attributes, and relationships.

| Component | Representation | Purpose |
|---|---|---|
| Entity | Rectangle | Objects or concepts storing data |
| Attribute | Oval | Properties of entities |
| Relationship | Diamond | Shows how entities connect |
| Primary key | Underlined attribute | Unique identifier |
| Foreign key | Attribute referencing another PK | Links two entities |

---

### 8.1.4 Database Normalisation

Organises data to reduce redundancy and ensure efficient, consistent storage.

#### First Normal Form (1NF)
- Each cell contains a single (atomic) value — no lists or arrays
- Each row is unique with a primary key

**Problem (unnormalised):**
```
OrderID | CustomerName | Items
1       | Alice        | Apple, Banana
```

**After 1NF:**
```
OrderID | CustomerName | Item
1       | Alice        | Apple
1       | Alice        | Banana
```

#### Second Normal Form (2NF)
- Must be in 1NF
- Every non-key attribute depends on the **whole** primary key (no partial dependencies)

Split composite-key tables so each non-key attribute depends on the entire key.

#### Third Normal Form (3NF)
- Must be in 2NF
- No transitive dependencies — non-key attributes must **not** depend on other non-key attributes; they must depend only on the primary key

**Quick reference:**

| Normal Form | Focus | Action |
|---|---|---|
| 1NF | Atomic values | Eliminate repeating groups |
| 2NF | Partial dependencies | Non-keys must depend on entire PK |
| 3NF | Transitive dependencies | Non-keys must not depend on other non-keys |

#### 3NF Verification Example

**Not in 3NF:**
```
StudentID | StudentName | CourseID | CourseName
```
Problem: `CourseName` depends on `CourseID` (not the primary key StudentID) → transitive dependency.

**Fixed (3NF):**
```
Student-Course: StudentID | CourseID
Course:         CourseID  | CourseName
```

**In 3NF:**
```
EmployeeID | EmployeeName | DepartmentID
```
All non-key attributes (`EmployeeName`, `DepartmentID`) depend only on `EmployeeID` → no transitive dependency.

---

## 8.2 Database Management Systems (DBMS)

A DBMS is software that organises, stores, and retrieves data efficiently while solving the problems of file-based systems.

### 8.2.1 Five Core Features

| Feature | Description |
|---|---|
| **Data management** | Organises data into structured tables; reduces redundancy; maintains data dictionary (tracks table names, column names, data types, constraints) |
| **Data modelling** | Creates ER diagrams to plan and visualise database structure before implementation |
| **Logical schema** | Blueprint defining tables, columns, and relationships without physical storage details |
| **Data integrity** | Enforces primary/foreign keys and validation rules to prevent errors |
| **Data security** | Role-based access control, encryption, and backup procedures |

### File-Based vs DBMS

| Problem | DBMS Solution |
|---|---|
| Data redundancy | Centralised storage with automatic updates |
| No relationships | Data modelling with ER diagrams |
| Poor integrity | Primary/foreign keys and validation |
| Inconsistent security | Role-based access control, encryption |
| Data loss risk | Automated backups and recovery tools |

### 8.2.2 Data Security in DBMS

#### Backup Types

| Type | Description |
|---|---|
| **Full backup** | Saves entire database; useful for complete restoration |
| **Incremental backup** | Saves only changes since last backup; fastest; requires previous backups |
| **Differential backup** | Saves changes since last full backup; balance of speed and completeness |

#### Access Rights

| Level | Capabilities | Example |
|---|---|---|
| Read-only | View data only | Customer support viewing orders |
| Read/Write | View and modify | Sales manager updating customer info |
| Administrator | Full access including structure management | DBA managing user accounts |

### 8.2.3 DBMS Software Tools

**Developer Interface** — helps developers design, create, and modify database structure.
- Types: CLI (command-line SQL) or GUI (e.g. SQL Server Management Studio)

**Query Processor** — interprets and executes SQL queries via three components:
1. **Parser** — validates SQL syntax
2. **Query optimiser** — finds the most efficient execution path
3. **Execution engine** — runs the query and returns results

---

## 8.3 Data Definition Language (DDL) and Data Manipulation Language (DML)

### DDL (Data Definition Language)

Creates, modifies, and removes database structure.

#### CREATE TABLE
```sql
CREATE TABLE Books (
    book_id INT PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    author VARCHAR(50)
);
```

#### ALTER TABLE
```sql
-- Add a column
ALTER TABLE Books ADD published_year INT;

-- Drop a column
ALTER TABLE Books DROP COLUMN author;
```

#### DROP TABLE
```sql
DROP TABLE Books;
```

#### Foreign Key Constraint
```sql
CREATE TABLE Students (
    student_id INT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    course_id INT,
    FOREIGN KEY (course_id) REFERENCES Courses(course_id)
);
```

---

### DML (Data Manipulation Language)

Retrieves, inserts, updates, and deletes data.

#### SELECT and WHERE
```sql
SELECT name, age FROM Students WHERE age > 20;
```

#### ORDER BY
```sql
SELECT name, age FROM Students ORDER BY age DESC;
```

#### INSERT
```sql
INSERT INTO Students(student_id, name, age, department_id)
VALUES (1, 'Alice', 20, 101);
```

#### UPDATE
```sql
UPDATE Students SET age = 21 WHERE name = 'Alice';
```

#### DELETE
```sql
DELETE FROM Students WHERE student_id = 3;
```

#### INNER JOIN
Returns only rows with matching values in both tables.
```sql
SELECT Students.name, Departments.department_name
FROM Students
INNER JOIN Departments
ON Students.department_id = Departments.department_id;
```

#### GROUP BY with Aggregate Functions
```sql
SELECT department_id, COUNT(student_id) AS student_count
FROM Students
GROUP BY department_id;
```

#### Aggregate Functions

| Function | Purpose | Example |
|---|---|---|
| `COUNT()` | Count rows | `COUNT(student_id)` |
| `SUM()` | Calculate total | `SUM(credit_hours)` |
| `AVG()` | Calculate average | `AVG(age)` |
| `MAX()` | Find maximum | `MAX(mark)` |
| `MIN()` | Find minimum | `MIN(mark)` |

### SQL Data Types

| Type | Description |
|---|---|
| `CHARACTER` | Fixed-length string |
| `VARCHAR(n)` | Variable-length string up to n characters |
| `BOOLEAN` | True or False |
| `INTEGER` | Whole number |
| `REAL` | Floating-point number |
| `DATE` | Calendar date |
| `TIME` | Time value |

### Critical Rules

- **GROUP BY:** When using aggregate functions, all selected non-aggregate fields must appear in `GROUP BY`
- **INNER JOIN:** Only returns rows that have matches in both tables; unmatched rows excluded
- **AS:** Use to rename columns in output for clarity
