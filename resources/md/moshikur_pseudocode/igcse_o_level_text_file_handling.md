# IGCSE/O Level Text File Handling

> Source: https://moshikur.com/pseudocode/8-pseudocode-text-file-handling/igcse-o-level-text-file-handling/

# IGCSE/O Level Text File Handling

---

### Text File Handling for IGCSE/O Level Computer Science

[GO TO TASKS](#tasks)

---

## What is Text File Handling?

Text file handling means working with files to:

1. **Read** data from a file.
2. **Write** data to a file.
3. **Open** and **close** files to perform these tasks.

[![Three-step diagram illustrating text file handling: Step 1: Open, Step 2: Read/Write, Step 3: Close.](images/pseudocode/igcse_o_level_text_file_handling/img_001.png)](https://i0.wp.com/moshikur.com/wp-content/uploads/2025/10/image-88.png?ssl=1)

In IGCSE/O Level Computer Science, we deal with **single-line text files** only.

---

## Basic Steps in File Handling

## Step 1: **Declare a Variable for the File Name**

You first need to create a variable to store the file name.

**Example**:

```
DECLARE File : STRING  
File ← "MyFile.txt"
```

–`File` is the variable to store the name of the file.  
–`"MyFile.txt"` is the name of the file.

**Task**: Declare a variable to store the file name `data.txt`. Use this variable for all file operations in the subsequent tasks.

---

## Step 2: **Open the File**

Before you can read or write, you must open the file.

- Use **`OPENFILE`** to open a file.
- Modes for opening:
  - `READ`: Opens the file to read data.
  - `WRITE`: Opens the file to write data.

**Example**:

```
DECLARE File : STRING

File ← "MyFile.txt"OPENFILE File FOR READ
```

Task: Create a program that opens the file `data.txt` for reading. After opening the file, output a message: “File opened successfully.”

---

## Step 3: **Write Data to the File**

To save data into a file, use **`WRITEFILE`**.

**Example**:

```
DECLARE File : STRING

DECLARE Line : STRING

Line <-"Hello world"

File ← "MyFile.txt"

OPENFILE File FOR WRITE

WRITEFILE File, Line

CLOSEFILE File
```

**TASK:**   
Create a program that:  
-Opens the file `data.txt` for writing.  
-Writes the text “Hello, IGCSE!” into the file.  
Closes the file.

---

## Step 4: **Read Data from the File**

To get data from the file, use **`READFILE`**.

**Example**:

```
DECLARE File : STRING

File ← "MyFile.txt"

OPENFILE File FOR READ

DECLARE Line : STRING

READFILE File, Line

CLOSEFILE File

OUTPUT Line
```

`Line` is the variable where the data read from the file will be stored.

TASK:   
Write a program that:  
-Opens the file `data.txt` for reading.  
-Reads a single line of text from the file and stores it in a variable.  
-Outputs the text read from the file.

---

## Step 5: **Close the File**

Always close the file after you are done. Use **`CLOSEFILE`**.

**Example**:

```
CLOSEFILE File
```

---

**Task**:   
Read data from a file named `"MyFile.txt"`.  
Write the same data back to the file.

### Pseudocode:

```
// Step 1: Declare a variable for the file name  
DECLARE File : STRING  
File ← "MyFile.txt"  
  
// Step 2: Open the file for reading  
OPENFILE File FOR READ  
  
// Step 3: Read data from the file  
DECLARE Line : STRING  
READFILE File, Line  
  
// Step 4: Close the file after reading  
CLOSEFILE File  
  
// Step 5: Open the file for writing  
OPENFILE File FOR WRITE  
  
// Step 6: Write the data back to the file  
WRITEFILE File, Line  
  
// Step 7: Close the file after writing  
CLOSEFILE File
```

---

## Key Points to Remember:

1. Always **declare variables** before using them.
2. Use **`OPENFILE`**, **`READFILE`**, **`WRITEFILE`**, and **`CLOSEFILE`** in the correct order.
3. Assume files have **only one line** of data for IGCSE/O Level.

# TASKS

---

**Task 1**: Length of text

- Create a program that:
  1. Opens a file named `value.txt`.
  2. Reads a single line of text from the file.
  3. Counts the length of the line.
  4. Outputs the length.

---

**TASK 2**: Capitalize contents of a File

- Create a program that:
  1. Opens a file named `text.txt` and reads a single line of text.
  2. Converts each word in the line to uppercase.

---

**Problem** 1: Create a program that checks if the user-entered password matches the one stored in a file.

`// Step 1: Declare variables  
DECLARE File : STRING  
DECLARE StoredPassword : STRING  
DECLARE UserInput : STRING  
  
// Step 2: Assign the file name  
File ← "password.txt"  
  
// Step 3: Open the file to read the stored password  
OPENFILE File FOR READ  
READFILE File, StoredPassword  
CLOSEFILE File  
  
// Step 4: Ask the user to input a password  
OUTPUT "Enter your password:"  
INPUT UserInput  
  
// Step 5: Compare the entered password with the stored password  
IF UserInput = StoredPassword THEN  
 OUTPUT "Password matches."  
ELSE  
 OUTPUT "Password does not match."  
ENDIF`

**TASK 3**: Quiz Answer Verification Using Two Text Files  
Output whether the answer is correct or not.  
  
Create a program that uses two files:  
–`question.txt` to store the quiz question.  
–`quizAnswer.txt` to store the correct answer.  
  
The program should:  
-Open `question.txt` and read the question.  
-Display the question to the user.  
-Ask the user to input their answer.  
-Compare the user’s answer with the correct answer stored in `quizAnswer.txt`.

**Problem** 2: Write a program that copies the contents of one file (`myFile.txt`) into another file (`myFile2.txt`).

// Step 1: Declare variables  
DECLARE InputFile : STRING  
DECLARE OutputFile : STRING  
DECLARE Content : STRING

// Step 2: Assign file names  
InputFile ← “myFile.txt”  
OutputFile ← “myFile2.txt”

// Step 3: Open the input file for reading and read its content  
OPENFILE InputFile FOR READ  
READFILE InputFile, Content  
CLOSEFILE InputFile

// Step 4: Open the output file for writing and write the content  
OPENFILE OutputFile FOR WRITE  
WRITEFILE OutputFile, Content  
CLOSEFILE OutputFile

**TASK 4**: Logging User Messages to a File  
  
Write an algorithm that:  
-Opens the file `userMessages.txt` for writing.  
-Asks the user to input a message.  
-Writes the message into `userMessages.txt`.  
-Additionally, creates a backup by copying the content of `userMessages.txt` into a new file called `messageLogBackup.txt`.

# CHALLENGING TASKS

---

## **Task 1: Reading and Displaying Student Grades**

### **Scenario:**

A file **“grades.txt”** contains a **single line** with a student’s name and score, e.g.:

```
John 85
```

The program should:

1. **Read the file** and display the student’s name and score.

---

## **Task 2: Writing a Student’s Details to a File**

### **Scenario:**

The school wants to store **a single student’s name and age** in a file `"student.txt"`.  
The program should:

1. **Ask for input (name and age)**.
2. **Write** the details to the file **as a single line**.

```
DECLARE FileHandle : FILE

DECLARE Name : STRING

DECLARE Age : INTEGER

// Get user input

OUTPUT "Enter student name:"

INPUT Name

OUTPUT "Enter student age:"

INPUT Age

// Open file for writing

OPEN FileHandle "student.txt" FOR WRITE

// Write data to file (overwrites previous content)

WRITE Name, " ", Age TO FileHandle

// Close file

CLOSE FileHandle
```

---

## **Task 3: Searching for a Book in a File**

### **Scenario:**

A **single-line** file `"books.txt"` contains a **book title** and **author**, e.g.:

```
Python John Smith
```

The program should:

1. **Ask the user for a book title**.
2. **Check if the file contains the title**.
3. **Display the book details if found**.

```
DECLARE FileHandle : FILE

DECLARE Line, SearchTitle : STRING

// Open file for reading

OPEN FileHandle "books.txt" FOR READ

// Read single line

INPUT Line FROM FileHandle

// Close file

CLOSE FileHandle

// Get user input

OUTPUT "Enter book title:"

INPUT SearchTitle

// Check if book title exists at the start of the line

IF SUBSTRING(Line, 1, LENGTH(SearchTitle)) = SearchTitle THEN

OUTPUT "Book found:", Line

ELSE

OUTPUT "Book not found."

ENDIF
```

---

## **Task 4: Counting Characters in a File**

### **Scenario:**

A newspaper company stores a **single-line news headline** in `"news.txt"`, e.g.:

```
Breaking news: AI takes over!
```

The program should:

1. **Read the file**.
2. **Count the number of characters in the line (excluding spaces)**.

```
DECLARE FileHandle : FILE

DECLARE Line : STRING

DECLARE CharCount, i : INTEGER

// Open file for reading

OPEN FileHandle "news.txt" FOR READ

// Read single line

INPUT Line FROM FileHandle

// Close file

CLOSE FileHandle

// Count characters (excluding spaces)

CharCount ← 0

FOR i ← 1 TO LENGTH(Line)

IF SUBSTRING(Line, i, 1) <> " " THEN

CharCount ← CharCount + 1

ENDIF

NEXT i

OUTPUT "Total characters (excluding spaces):", CharCount
```

---

## **Task 5: Updating Salaries (Overwriting)**

### **Scenario:**

A file **“salaries.txt”** contains **a single salary value**, e.g.:

```
3000
```

The program should:

1. **Read the salary from the file**.
2. **Increase it by 10%**.
3. **Overwrite the file with the updated salary**.

```
DECLARE FileHandle : FILE

DECLARE Salary, NewSalary : REAL

// Open file for reading

OPEN FileHandle "salaries.txt" FOR READ

// Read single salary value

INPUT Salary FROM FileHandle

// Close file

CLOSE FileHandle

// Increase salary by 10%

NewSalary ← Salary * 1.10

// Open file for writing (overwrite)

OPEN FileHandle "salaries.txt" FOR WRITE

// Write updated salary

WRITE NewSalary TO FileHandle

// Close file

CLOSE FileHandle

OUTPUT "Updated salary saved."
```

---

### Leave a Reply[Cancel reply](/pseudocode/8-pseudocode-text-file-handling/igcse-o-level-text-file-handling/#respond)