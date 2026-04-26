# 08 Databases

**Course:** Cambridge International AS & A Level Computer Science (9618)
**Source:** Thinka

---

Computer Science 9618: Study Notes - Databases (AS Level)
8.1 Database Concepts
8.2 Database Management Systems (DBMS)
8.3 Data Definition Language (DDL) and Data Manipulation Language (DML)
Computer Science 9618: Study Notes - Databases (AS Level)

Hello future database guru! Welcome to the Databases chapter. Whether you are ordering a pizza, checking your bank balance, or streaming a movie, you are interacting with a database. This chapter is all about understanding how massive amounts of data are organized, protected, and retrieved efficiently. It’s the backbone of almost every modern digital application! Don't worry if the terminology seems new; we will break everything down into manageable chunks.

8.1 Database Concepts
The Problem with File-Based Systems

Before databases became common, businesses often stored data using a file-based approach—essentially, lots of separate files (like individual spreadsheets) managed by different departments.
This method has serious limitations:

Data Redundancy: The same data is stored multiple times in different files. (Example: A customer's address stored in the Sales file and the Accounting file.)
Data Inconsistency: Because data is repeated, updates might not be applied everywhere, leading to contradictory information. (Example: The sales file shows the old address, but the accounts file has the new one.)
Difficult to Share: Data is scattered and hard for different programs or departments to access simultaneously.
Lack of Security: It is hard to apply consistent security rules across many separate files.
Introduction to Relational Databases

A Relational Database (the type we study) solves the limitations of the file-based approach by storing data in structured tables that are logically linked together.

Key Database Terminology (The Language of Data)

It is crucial to know these terms, as they are used interchangeably in exam questions:

Entity: A person, place, object, event, or concept about which data is recorded. (Example: CUSTOMER, PRODUCT, ORDER.)
Table (Relation): Stores data about a single entity. It consists of rows and columns.
Record (Tuple): A single row in a table, containing all the data related to one instance of the entity. (Example: One specific customer.)
Field (Attribute): A single column in a table, representing a characteristic or property of the entity. (Example: CustomerName, ProductPrice.)

Memory Tip: Think of an Excel spreadsheet:
Table = The whole sheet
Record = A row
Field = A column

Understanding Database Keys

Keys are fundamental for identifying and linking data efficiently.

Primary Key (PK): A field (or group of fields) that uniquely identifies every record in a table.
(Example: CustomerID in the CUSTOMER table.)
Candidate Key: Any field (or set of fields) that could potentially be used as the Primary Key because it uniquely identifies records. Only one is chosen as the PK. (Example: CustomerID or NationalInsuranceNumber could be candidate keys.)
Secondary Key (Index Key): A field used primarily for searching or sorting records quickly. It does not have to be unique. (Example: Searching the CUSTOMER table by LastName.)
Foreign Key (FK): A field in one table that refers to the Primary Key in *another* table. This is how relationships are formed! (Example: The Order table includes CustomerID as an FK to link back to the Customer table.)
Relationships and Referential Integrity

Relationships define how entities interact:

One-to-Many (1:M): The most common type. One record in Table A relates to many records in Table B. (Example: One CUSTOMER can place many ORDERS.)
One-to-One (1:1): One record in Table A relates to exactly one record in Table B. (Less common, often used for security or partitioning large tables.)
Many-to-Many (M:M): Many records in Table A relate to many records in Table B. This cannot be implemented directly in a relational database; it must be resolved into two 1:M relationships using a new intermediate (linking) table. (Example: Many STUDENTS can take many COURSES.)

Referential Integrity: This rule ensures that relationships between tables are consistent. It prevents you from creating a record that links to a non-existent record in another table (e.g., you cannot create an ORDER for a CustomerID that doesn't exist in the CUSTOMER table).

Entity-Relationship (E-R) Diagrams

An E-R diagram is a visual tool used by designers to document the structure of a database, showing the entities involved and the relationships between them.

Entities are usually represented by rectangles.
Relationships are shown by lines connecting the entities, often using special notation (like Crow’s Foot or Chen notation) to indicate the cardinality (1:M, 1:1).
Normalisation (1NF, 2NF, 3NF)

Normalisation is a process of efficiently organizing data in a database to reduce redundancy and improve data integrity. It involves a series of steps called Normal Forms (NF). We focus on the first three.

First Normal Form (1NF)

A table is in 1NF if:

1. It contains no repeating groups (i.e., multiple values in a single cell).
2. All attributes (fields) contain atomic values (cannot be broken down further).

Step-by-step: If a student enrolls in three courses, you cannot list all three course codes in one column. You must create a new row for each course, or split the data into multiple tables.

Second Normal Form (2NF)

A table is in 2NF if:

1. It is already in 1NF.
2. All non-key attributes are fully dependent on the *entire* Primary Key. This only matters when the PK is a composite key (made up of two or more fields).

Step-by-step: If your PK is (OrderID, ItemNumber), and the ItemName only depends on ItemNumber (part of the key), you must move ItemName to a separate ITEM table.

Third Normal Form (3NF)

A table is in 3NF if:

1. It is already in 2NF.
2. There are no transitive dependencies. This means non-key attributes must not depend on other non-key attributes.

Step-by-step: In a table, if CityName determines PostCode, and PostCode is not a key, then this is a transitive dependency. You must move CityName and PostCode into a separate POSTCODE table.

Normalization Mnemonic:
1NF: No Repeating groups.
2NF: Depend on the Whole key (W - sounds like 2).
3NF: Nothing but the key (No non-key depends on another non-key).

Key Takeaway (8.1)

Databases fix redundancy and inconsistency found in file systems. We use entities, records, fields, and keys (PK, FK) to structure data efficiently. Normalisation (1NF, 2NF, 3NF) is the process of breaking tables down to avoid data duplication and dependency issues.

8.2 Database Management Systems (DBMS)

A Database Management System (DBMS) is the software that acts as an interface between the user/application and the database data. It handles all the complex organization, security, and storage tasks.

Features of a DBMS

The DBMS addresses the file-based limitations by providing several core features:

Data Management: The overall ability to store, retrieve, update, and manage data efficiently.
Data Dictionary (Metadata): Stores definitions of the data structure (metadata). It holds information like table names, field names, data types, primary keys, and relationships. It is the blueprint of the database.
Data Modelling & Logical Schema: Provides tools to create the structure (schema) of the database, separating the way data is logically organized from how it is physically stored.
Data Integrity: Ensures the data is accurate, consistent, and reliable (e.g., using referential integrity rules).
Data Security: Protects the data through:
Access Rights: Assigning specific permissions (read, write, delete) to individuals or groups of users.
Backup Procedures: Providing mechanisms to save copies of the database to allow recovery after a disaster.

Did you know? Data integrity is crucial. If your database allows a price field to contain text or a negative number, your system will fail or produce unreliable results!

DBMS Software Tools

A DBMS provides various tools for users and developers:

Developer Interface: A set of tools (often graphical) allowing developers to define tables, set relationships, manage security, and run queries.
Query Processor: The heart of the DBMS. It translates user queries (like SQL statements) into physical operations the computer can perform to retrieve or modify data.
Key Takeaway (8.2)

The DBMS software is essential; it manages the data structure via the Data Dictionary, enforces consistency via Data Integrity, and controls permissions via Data Security. The Query Processor is what executes the requests you send to the database.

8.3 Data Definition Language (DDL) and Data Manipulation Language (DML)

Database tasks are divided into two categories, carried out using the industry standard language: Structured Query Language (SQL).

DDL (Data Definition Language): Used for creating, modifying, and deleting the *structure* of the database (the empty boxes and rules).

DML (Data Manipulation Language): Used for inserting, retrieving, modifying, and deleting the *actual data* within the defined structure.

Data Definition Language (DDL) using SQL

DDL commands build the blueprint of the database.

1. Creating a Database

CREATE DATABASE SchoolRecords;

2. Creating a Table (Defining the Structure)

We must specify the field name and an appropriate data type for each attribute:

CHARACTER: Fixed-length string (e.g., storing a two-letter country code).
VARCHAR(n): Variable-length string up to 'n' characters (most common for names, addresses).
BOOLEAN: Stores TRUE or FALSE (Yes/No).
INTEGER: Whole numbers (used for IDs, counters).
REAL: Numbers with decimal points (for prices, measurements).
DATE: Stores calendar dates.
TIME: Stores time values.

Example DDL:

CREATE TABLE Student (
StudentID INTEGER PRIMARY KEY,
StudentName VARCHAR(50) NOT NULL,
IsEnrolled BOOLEAN
);

3. Modifying a Table Structure (ALTER TABLE)

We use ALTER TABLE to change the structure, such as adding constraints (like Primary and Foreign Keys) or new columns.

Adding a Foreign Key:

ALTER TABLE Enrollment
ADD FOREIGN KEY (CourseID) REFERENCES Course (CourseID);

Quick DDL Review

DDL is about structure: CREATE database or table, ALTER table structure, adding PRIMARY KEY or FOREIGN KEY constraints.

Data Manipulation Language (DML) using SQL

DML commands manage the records stored in the tables.

Data Maintenance (Adding, Changing, Deleting Records)

1. Inserting Data (Adding a Record)

INSERT INTO Student (StudentID, StudentName, IsEnrolled)
VALUES (101, 'Alice Smith', TRUE);

2. Updating Data (Modifying a Record)

The WHERE clause is essential here to target specific records. Without it, you update the entire table! (Common mistake to avoid!)

UPDATE Student
SET IsEnrolled = FALSE
WHERE StudentID = 101;

3. Deleting Data (Removing a Record)

DELETE FROM Student
WHERE StudentID = 101;

Querying Data (SELECT Statements)

This is the most common DML task: retrieving information. AS Level only requires queries involving at most two tables.

Basic Retrieval (SELECT, FROM, WHERE)

SELECT StudentName, StudentID
FROM Student
WHERE IsEnrolled = TRUE;

Sorting Results (ORDER BY)

SELECT StudentName
FROM Student
ORDER BY StudentName DESC; -- DESC means descending order

Joining Two Tables (INNER JOIN)

To retrieve fields from two linked tables, we use INNER JOIN. We must specify the linking condition (where the Primary Key equals the Foreign Key).

Example: Get the name of the student who placed a specific order (Order ID 50):

SELECT S.StudentName
FROM Student S INNER JOIN Order O
ON S.StudentID = O.StudentID
WHERE O.OrderID = 50;

Grouping and Aggregation (GROUP BY, SUM, COUNT, AVG)

These functions are used to perform calculations on sets of records:

COUNT: Counts the number of rows or non-null values.
SUM: Calculates the total of a numeric field.
AVG: Calculates the average of a numeric field.
GROUP BY: Used when applying aggregate functions to create summaries based on common field values.

Example: Count how many students are enrolled (grouped by status):

SELECT IsEnrolled, COUNT(StudentID)
FROM Student
GROUP BY IsEnrolled;

Key Takeaway (8.3)

SQL is the language used to manage databases. DDL defines the structure (CREATE, ALTER). DML manages the data (INSERT, UPDATE, DELETE, SELECT). When querying, always remember the WHERE clause to filter, and use INNER JOIN to link related tables.

Ready to test yourself?

Turn these notes into exam-style practice. Get unlimited AI questions on this topic with instant marking and explanations.

Practice This Topic
More Computer Science (9618) chapters
Information representation
Communication
Hardware
Processor Fundamentals
System Software
Security, privacy and data integrity

* The content provided by thinka is generated by AI and may not always be accurate or up-to-date. Please use it as a supplementary resource and verify with official materials.

Put These Notes into Practice

Reading the notes is a great start. Now practise with unlimited AI-generated questions and get instant feedback. 100,000+ students are already improving their grades.

Start Practising Now
View Pricing