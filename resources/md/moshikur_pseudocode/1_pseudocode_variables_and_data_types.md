# 1 PSEUDOCODE Variables and Data Types

> Source: https://moshikur.com/pseudocode/1-pseudocode-variables-and-data-types/

# 1 PSEUDOCODE – Variables and Data Types

---

## **What is a Variable?**

A **variable** is like a labeled box where you store information. The label (variable name) helps you identify what is in the box, and the value inside can change during the program.

[![An illustration representing variables and data types, featuring a labeled box with an 'A' and various shapes and symbols, alongside text for different data types like INTEGER, REAL, STRING, CHAR, and BOOLEAN.](images/pseudocode/1_pseudocode_variables_and_data_types/img_001.png)](https://i0.wp.com/moshikur.com/wp-content/uploads/2025/12/image-19.png?ssl=1)

## [GO TO TASKS](#tasks)

## In pseudocode, you declare a variable like this:

```
DECLARE <variable name> : <data type>
```

- **`DECLARE`** means you’re creating the variable.
- **`<variable name>`** is the name of the variable (e.g., `Age`, `Name`).
- **`<data type>`** tells the computer what kind of value the variable can hold, like numbers or text.

---

Have a look at these three lines of pseudocode

This tutorial explains what each line does, step by step, and shows how the program behaves when it runs.

### **Pseudocode**

```
DECLARE x : INTEGER

INPUT x

OUTPUT "You entered ", x
```

---

### **Step-by-step Explanation**

```
INPUT x
```

At this point, the user is expected to **type a number** using the keyboard. The value entered is then **stored in the variable `x`**.

#### Outputting the result

Immediately after the user inputs a value, the third line is executed:

```
OUTPUT "You entered ", x
```

This line uses **comma `,` for concatenation** (as per the IGCSE pseudocode guide) to combine a message and a variable:

- It displays the message: `"You entered "` directly
- Then it shows the actual value stored in `x` (whatever the user entered)

For example, if the user entered `25`, the output will be:

```
You entered 25
```

#### Understanding the first line

Now let’s go back and understand the first line:

```
DECLARE x : INTEGER
```

This line **creates a space in the computer’s memory** named `x`. It tells the computer that `x` will be used to store an **INTEGER** (a whole number). The data type for this variable is integer. We will learn more about data types in the next segment.

Variables are like **boxes** used to store values in a program. Just like in mathematics where you might write:

```
x = 5 or y = 10
```

In programming, variables such as `x` and `y` are used the same way to **store and manipulate values**.

---

## **What are Data Types?**

Data types define the kind of information that can be stored in a variable. Here are the most common data types:

## **INTEGER**

Whole numbers like 10, -5, 0.

## **REAL**

Numbers with decimals like 3.14, -7.5.

## **STRING**

A sequence of characters or text like “Hello” or “John123”.

## **CHAR**

A single character like ‘A’, ‘7’, or ‘$’.

## ****BOOLEAN****

Logical values, either `TRUE` or `FALSE`.

---

**Examples of Variables with Different Data Types**

1. **Storing a whole number (INTEGER):**

```
DECLARE Score: INTEGER

Score ← 85
```

2. **Storing a decimal number (REAL):**

```
DECLARE Height: REAL

Height ← 5.9
```

3. **Storing text (STRING):**

```
DECLARE FullName : STRING

FullName ← "Jane Doe"
```

4. **Storing a single character (CHAR):**

```
DECLARE Initial: CHAR

Initial ← 'J'
```

5. **Storing a True/False value (BOOLEAN):**

```
DECLARE HasLicense : BOOLEAN

HasLicense ← FALSE
```

---

## **What is a Constant?**

A **constant** is a special type of variable. Once you give it a value, it **never changes** while your program is running. Think of it like a label for something that stays the same.

For example:

- The number of hours in a day is always 24.
- The value of Pi (π) is always 3.14159.

These values don’t change, so they are perfect for constants!

---

### **Why Use Constants?**

**Easy to Update**:

If you need to change a value, you only have to update the constant in one place.

**Avoid Mistakes**:

You can’t accidentally change a constant’s value, which keeps your program accurate.

**Improves Readability**:

Using descriptive names for constants makes your pseudocode easier to understand.

---

### **How to Write Constants in Pseudocode**

To declare a constant in pseudocode, follow this format:

```
CONSTANT <Identifier> <- <Value>
```

- **`CONSTANT`**: This tells the reader it’s a constant.
- **`<Identifier>`**: The name of the constant (use Pascal Case).
- **`←`**: The assignment symbol (means “is set to”).
- **`<Value>`**: The value of the constant.

---

### **Examples**

Here are some examples of constants:

A constant for the number of hours in a day:

```
CONSTANT HoursInDay <- 24
```

A constant for the maximum score in a game:

```
CONSTANT MaxScore <- 100
```

A constant for the price of a bus ticket:

```
CONSTANT TicketPrice <- 5.50
```

---

**Constants** are values that don’t change while the program runs.

- Use **CONSTANT** to declare them in pseudocode.
- They make your code clear, accurate, and easy to update.

With constants, your pseudocode becomes more reliable and professional! 🎉

# TASKS

Using the example tasks as a guide, complete all tasks listed on the right side.

---

### **Example Task 4: Declaring and Assigning an Integer Variable**

**Task:** Write a pseudocode to declare an integer variable and assign it the value 15. Output the stored value.

```
DECLARE Age: INTEGER

Age ← 15

OUTPUT "The age is ", Age
```

**Task 4:**  
Write a pseudocode to declare an integer variable to store the number of students in a class. Assign it the value 30 and output the value.

---

### **Example Task 5: Declaring and Assigning a Real Variable**

**Task:** Write a pseudocode to declare a real variable and assign it the value 4.5. Output the stored value.

```
DECLARE Temperature: REAL

Temperature ← 4.5

OUTPUT "The temperature is ", Temperature
```

**Task 5:**  
Write a pseudocode to declare a real variable to store the weight of an object. Assign it the value 7.25 and output the value.

---

### **Example Task 6: Declaring and Assigning a String Variable**

**Task:** Write a pseudocode to declare a string variable and assign it the value “John”. Output the stored value.

```
DECLARE Name: STRING

Name ← "John"

OUTPUT "The name is ", Name
```

**Task 6:**  
Write a pseudocode to declare a string variable to store a country’s name. Assign it the value “Canada” and output the value.

---

### **Example Task 7: Declaring and Assigning a Boolean Variable**

**Task:** Write a pseudocode to declare a boolean variable and assign it the value FALSE. Output the stored value.

```
DECLARE IsSunny : BOOLEAN

IsSunny ← FALSE

OUTPUT "Is it sunny? ", IsSunny
```

**Task 7:**  
Write a pseudocode to declare a boolean variable to store whether a person is an adult. Assign it the value TRUE and output the value.

---

### **Example Task 8: Declaring and Assigning a Character Variable**

**Task:** Write a pseudocode to declare a character variable and assign it the value ‘X’. Output the stored value.

```
DECLARE Symbol: CHAR

Symbol ← 'X'

OUTPUT "The symbol is ", Symbol
```

**Task 8:**  
Write a pseudocode to declare a character variable to store the first letter of a student’s name. Assign it the value ‘M’ and output the value.

---

### **Example Task 9: Multiple Variables and Arithmetic Operations**

**Task:** Write a pseudocode to declare two integer variables, assign them values, and calculate their sum. Output the result.

```
DECLARE Number1, Number2, Sum: INTEGER

Number1 ← 8

Number2 ← 12

Sum ← Number1 + Number2

OUTPUT "The sum is ", Sum
```

**Task 9:**  
Write a pseudocode to declare two real variables for storing the length and width of a rectangle, calculate the area, and output the result.

---

### **Example Task 10: Concatenating String Variables**

**Task:** Write a pseudocode to declare two string variables, assign them values, and concatenate them. Output the concatenated string.

```
DECLARE FirstName, LastName, FullName : STRING

FirstName ← "Alice"

LastName ← "Johnson"

FullName ← FirstName & " " & LastName

OUTPUT "The full name is ", FullName
```

**Similar Task 10:**  
Write a pseudocode to declare two string variables to store a city and a country, concatenate them with an &, and output the result.

---

**Task 11: Identify the Constants** Which of these should be constants? Explain why.

1. The value of Pi (π).
2. The name of a student.
3. The total number of days in a year.

**Answers**:

- **Yes** – Pi never changes, so it’s a constant.
- **No** – A student’s name can change depending on who is using the program.
- **Yes** – The total days in a year (365) is fixed.

---

**Task 12: Declare Constants** Write the constants for these values:

1. Maximum number of players in a game: 4.
2. Gravitational constant: 9.8.
3. Default password: `1234`.

**Answers**:

`CONSTANT MaxPlayers ← 4  
CONSTANT Gravity ← 9.8  
CONSTANT DefaultPassword ← "1234"`

---

### Task 13: **(a) Sample Code with Poor Variable Names**

```
A = 10

B = 20

C = A + B

D = C * 2

print(D)
```

The variable names **A, B, C, and D** in part (a) **are not** good programming practice.  
**(i)** State why these variable names **are not** suitable.  
  
**(ii)** Identify **one** problem that these variable names might cause.  
  
**(iii)** The choice of suitable variable names is one example of good programming practice. Give **one other** example.

---

## MORE TASKS:

---

1. Declare a variable to store a person’s height as a decimal number. What data type should you use? Write the pseudocode.
2. Write pseudocode to:
   - Declare a variable to store a student’s grade as a single letter.
   - Assign it the value ‘B’.
3. Create a pseudocode program to:
   - Store your age.
   - Calculate your age in 10 years.
   - Output the result.
4. Write pseudocode to:
   - Declare a variable to store a string containing a person’s name.
   - Display the message: “Welcome, <name>!”.
5. Declare a variable to check if a car is available (`TRUE` or `FALSE`). Assign it the value `TRUE`. What data type should you use? Write the pseudocode.

---

### Leave a Reply[Cancel reply](/pseudocode/1-pseudocode-variables-and-data-types/#respond)