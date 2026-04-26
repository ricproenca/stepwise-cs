# 2 PSEUDOCODE Assignment, Input & Output

> Source: https://moshikur.com/pseudocode/pseudocode-assignment-input-output/

# 2 PSEUDOCODE – Assignment, Input/Output, Operators

---

[TASKS](#tasks)

## Understanding how assignment works

In programming, **assignment** is the process of giving a value to a variable.

[![Infographic illustrating assignment, input, and output in pseudocode, including examples of value assignment, user input, and message output.](images/pseudocode/2_pseudocode_assignment_input_and_output/img_001.png)](https://i0.wp.com/moshikur.com/wp-content/uploads/2025/12/image-21.png?ssl=1)

---

# **How Assignment Works**

#### **Declare the variable**

This means telling the program you’ll be using a variable.

#### **Assign a value**

Use the assignment operator `←` to give the variable a value.

[![Data representation showing 'Found' as FALSE, 'Name' as 'John', and 'TotalPrice' as 45.5.](images/pseudocode/2_pseudocode_assignment_input_and_output/img_002.png)](https://i0.wp.com/moshikur.com/wp-content/uploads/2026/01/image-49.png?ssl=1)

### **Syntax of Assignment**

```
<variable> ← <value>
```

> **`←`** the arrow means “gets the value of.”

---

### **Examples**

1. Assigning a fixed value:

```
DECLARE Age: INTEGER  
Age ← 25
```

> Here, the variable `Age` gets the value `25`.

2. Assigning a calculated value:

```
DECLARE Total: INTEGER  
DECLARE Price: INTEGER  
Price ← 50  
Total ← Price + 10
```

> Here, `Total` is assigned the result of adding `Price` (50) and 10.

3. Assigning input from the user:

```
DECLARE Name: STRING  
INPUT Name
```

Here, the user inputs a value for `Name`.

---

## **Understanding Input and Output in Pseudocode**

**Input** and **output** are the ways a program communicates with the user. Input is how the user gives information to the program, and output is how the program shows results or messages to the user.

---

# **Input in Pseudocode**

**Input** allows the program to take information from the user. The keyword `INPUT` is used in pseudocode.

#### **How Input Works**

1. Declare a variable to store the user’s input.
2. Use `INPUT` to prompt the user and store their response in the variable.

[![Input field for user entry with the label 'INPUT' and the website URL www.MOSHIKUR.com displayed below.](images/pseudocode/2_pseudocode_assignment_input_and_output/img_003.png)](https://i0.wp.com/moshikur.com/wp-content/uploads/2026/01/image-47.png?ssl=1)

#### **Example**

```
DECLARE Name: STRING  
INPUT Name
```

> `Name` is a variable that will store the user’s input.
>
> The program waits for the user to type something and stores it in `Name`.

---

# **Output in Pseudocode**

**Output** allows the program to display information to the user. The keyword `OUTPUT` is used in pseudocode.

#### **How Output Works**

1. Use `OUTPUT` followed by the text or variable you want to display.
2. You can combine text and variables to create a meaningful message.

[![A dialog box displaying the message 'Hello world!' with an 'OK' button and the website www.MOSHIKUR.com below.](images/pseudocode/2_pseudocode_assignment_input_and_output/img_004.png)](https://i0.wp.com/moshikur.com/wp-content/uploads/2026/01/image-48.png?ssl=1)

#### **Example**

```
OUTPUT "Hello, welcome to the program!"
```

> This displays the message: `Hello, welcome to the program!`

You can also use variables:

```
DECLARE Name: STRING  
INPUT Name  
OUTPUT "Hello, ", Name
```

> If the user enters “Alice,” the program displays: `Hello, Alice`.

---

## **Combining Input and Output**

You can combine input and output to make the program interactive:

```
DECLARE Age: INTEGER  
INPUT Age  
OUTPUT "In 5 years, you will be ", Age + 5
```

If the user enters `15`, the program will display: `In 5 years, you will be 20`.

---

# tasks

Using the example tasks as a guide, complete all tasks listed on the right side.

---

**Example Task 1:** Write pseudocode to prompt the user to enter their name and then display a greeting message with their name.

```
DECLARE Name: STRING  
INPUT Name  
OUTPUT "Hello, ", Name
```

t**ask 1:** Prompt the user to enter their favorite color and display a message including their color.

---

**Example Task 2:** Ask the user to input a number. Add 100 to that number and output it.

```
DECLARE Number: INTEGER
DECLARE Result: INTEGER
INPUT Number
Result ← Number + 100
OUTPUT "Result is: ", Result
```

**Task 2:** Ask the user to input a number. Subtract 50 from that number and output it.

---

**Example Task 3:** Ask the user to input two numbers. Add them and output the sum.

```
DECLARE Number1: INTEGER
DECLARE Number2: INTEGER
DECLARE Sum: INTEGER
INPUT Number1
INPUT Number2
Sum ← Number1 + Number2
OUTPUT "The sum is: ", Sum
```

**Task 3:** Ask the user to input two numbers. Multiply them and output the result.

---

**Example Task 4:** Write pseudocode to input two strings “FirstName” and “LastName,” then concatenate them.

```
DECLARE FirstName: STRING  
DECLARE LastName: STRING  
DECLARE FullName : STRING  
INPUT FirstName  
INPUT LastName  
FullName ← FirstName & " " & LastName  
OUTPUT "Full Name: ", FullName
```

**Task 4:** Input two strings “City” and “Country,” then concatenate them to form a location.

---

**Example Task 5:** Prompt the user to enter their age and then display a message telling them how old they will be in 5 years.

```
DECLARE Age: INTEGER
DECLARE FutureAge : INTEGER
INPUT Age
FutureAge ← Age + 5
OUTPUT "In 5 years, you will be: ", FutureAge
```

**Task 5:** Prompt the user to enter their current weight and display how much they will weigh if they gain 10 kilograms.

---

**Example Task 6:** Ask the user to input two numbers. Subtract the second number from the first and display the result.

```
DECLARE Number1: INTEGER
DECLARE Number2: INTEGER
DECLARE Difference: INTEGER
INPUT Number1
INPUT Number2
Difference ← Number1 - Number2
OUTPUT "The result is: ", Difference
```

**Similar Task 6:** Ask the user to input two numbers. Divide the first number by the second and display the result.

---

**Example Task 7:** Write pseudocode to input two numbers and output their product.

```
DECLARE Number1: INTEGER
DECLARE Number2: INTEGER
DECLARE Product: INTEGER
INPUT Number1
INPUT Number2
Product ← Number1 * Number2
OUTPUT "The product is: ", Product
```

**Task 7:** Input three numbers and output their product.

---

**Example Task 8:** Write pseudocode to input your hourly wage and the number of hours worked, then calculate your total pay.

```
DECLARE HourlyWage : REAL
DECLARE HoursWorked : REAL
DECLARE TotalPay : REAL
INPUT HourlyWage
INPUT HoursWorked
TotalPay ← HourlyWage * HoursWorked
OUTPUT "Your total pay is: ", TotalPay
```

**Task 8:** Input your hourly wage, the number of hours worked, and a bonus, then calculate your total earnings.

---

# **Using DIV and MOD**

In some programs, we need to work with **whole numbers only**.  
Cambridge pseudocode provides two special operators for this purpose:

- **DIV**
- **MOD**

These operators are used with **integers**.

---

## **DIV (Integer Division)**

`DIV` is used to divide two integers and return the **whole-number result** only.

Any fractional part is **discarded**.

**Syntax:**

```
DIV(number1, number2)
```

**Example:**

```
Quotient ← DIV(10, 3)

OUTPUT Quotient
```

**Output:**

```
3
```

10 divided by 3 is 3.33, but `DIV` keeps only the whole number **3**.

---

### **MOD (Remainder)**

`MOD` is used to find the **remainder** after dividing one integer by another.

**Syntax:**

```
MOD(number1, number2)
```

**Example:**

```
Remainder ← MOD(10, 3)

OUTPUT Remainder
```

**Output:**

```
1
```

10 divided by 3 gives a remainder of **1**.

---

### **Using MOD in a Simple Condition**

`MOD` is often used to check conditions such as **even or odd numbers**.

**Example:**

```
IF MOD(Number, 2) = 0 THEN

OUTPUT "Even number"

ELSE

OUTPUT "Odd number"

ENDIF
```

> If the remainder is 0, the number is even. Otherwise, the number is odd

---

### **Important Exam Rules**

Always use **DIV(a, b)** and **MOD(a, b)**

Do **not** use `/`, `%`, or `//`

DIV returns the **quotient**

MOD returns the **remainder**

---

### **Note for Students**

> DIV and MOD are introduced here at a basic level.  
> They will be used more extensively later with loops and arrays.

# **Practice Questions: DIV and MOD**

---

**1** Write the output of the following pseudocode.

```
OUTPUT DIV(20, 4)
```

>> Answer:

```
5
```

---

**2** Write the output of the following pseudocode.

```
OUTPUT MOD(20, 4)
```

>> Answer:

```
0
```

---

**3** Which operator should be used to find the **remainder**?

A. DIV  
B. MOD

>> Answer:

**B. MOD**

---

**4** Which operator should be used to find the **whole-number quotient**?

A. DIV  
B. MOD

>> Answer:

**A. DIV**

---

### **Exam Reminder**

- Use **DIV(a, b)** and **MOD(a, b)** only
- Do **not** use `/`, `%`, or `//`
- DIV → quotient
- MOD → remainder

---

### Leave a Reply[Cancel reply](/pseudocode/pseudocode-assignment-input-output/#respond)