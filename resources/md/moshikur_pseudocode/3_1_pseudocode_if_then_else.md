# 3.1 Pseudocode If Then Else

> Source: https://moshikur.com/pseudocode/3-conditional-statements/pseudocode-if-then-else/

# 3.1 Pseudocode – If Then Else

---

## **Understanding IF…THEN…ELSE**

The **IF…THEN…ELSE** statement is like asking a question in programming. It helps the program make decisions based on conditions.

[![Flowchart illustrating an 'IF' condition with branches for 'TRUE' leading to a 'THEN' statement and 'FALSE' leading to an 'ELSE' statement.](images/pseudocode/3_1_pseudocode_if_then_else/img_001.png)](https://i0.wp.com/moshikur.com/wp-content/uploads/2026/01/image-46.png?ssl=1)

---

### **How Does It Work?**

1. **IF**: Check if something is true.
2. **THEN**: If it’s true, do this.
3. **ELSE**: If it’s false, do something else.

---

### **Structure**

```
IF <condition> THEN

<instructions if true>

ELSE

<instructions if false>

ENDIF
```

---

### **Example: Check if a Number is Positive**

```
DECLARE Number: INTEGER

INPUT Number

IF Number > 0 THEN

OUTPUT "The number is positive."

ELSE

OUTPUT "The number is not positive."

ENDIF
```

> If the condition (`Number > 0`) is true, it outputs “The number is positive.”
>
> If the condition is false, it outputs “The number is not positive.”

---

### **Using Only IF…THEN**

Sometimes, you don’t need an **ELSE**. You just check the condition and do something if it’s true.

Example:

```
IF Temperature > 30 THEN

OUTPUT "It’s hot!"

ENDIF
```

> If the condition is false, the program simply skips the block and does nothing.

---

### **Chaining Multiple Conditions**

You can check more than one condition using **ELSE IF**:

```
DECLARE Number: INTEGER

INPUT Number

IF Number > 0 THEN

OUTPUT "The number is positive."

ELSE IF Number < 0 THEN

OUTPUT "The number is negative."

ELSE

OUTPUT "The number is zero."

ENDIF

ENDIF
```

This program checks if the number is positive, negative, or zero.

---

**IF…THEN** is used to check a condition.

**ELSE** runs if the condition is false.

**ELSE IF** allows you to check multiple conditions.

Always close with **ENDIF**.

---

## tasks

Using the example tasks as a guide, complete all tasks listed on the right side.

---

**Example Task:** Input a number and check if the number is positive.

```
DECLARE Number: INTEGER

INPUT Number

IF Number > 0 THEN

OUTPUT "The number is positive."

ENDIF
```

**Task 1:** Input a number and check if the number is negative.

---

**Example Task:** Input a number and check if the number is positive or negative.

```
DECLARE Number: INTEGER

INPUT Number

IF Number > 0 THEN

OUTPUT "The number is positive."

ELSE

OUTPUT "The number is negative."

ENDIF
```

**Task 2:** Enter an age and check whether the person is 18 years old or older.

---

**Example Task 11:** Write pseudocode to input a number and check if it is positive, negative, or zero.

```
DECLARE Number: INTEGER

INPUT Number

IF Number > 0 THEN

OUTPUT "The number is positive."

ELSE IF Number < 0 THEN

OUTPUT "The number is negative."

ELSE

OUTPUT "The number is zero."

ENDIF

ENDIF
```

**Task 3:** Input a number and check if it is greater than 50, less than 50, or equal to 50.

---

**Example Task:** Write pseudocode to input a person’s age and check if they are eligible for a senior citizen discount (age 60 and above).

```
DECLARE Age: INTEGER

INPUT Age

IF Age >= 60 THEN

OUTPUT "Eligible for a senior citizen discount."

ELSE

OUTPUT "Not eligible for a senior citizen discount."

ENDIF
```

**Task 4:** Input a person’s age and check if they are eligible for a child discount (age 12 or below).

---

**Example Task :** Write pseudocode to input a person’s height and check if they are tall enough to ride a roller coaster (minimum 150 cm).

```
DECLARE Height: INTEGER

INPUT Height

IF Height >= 150 THEN

OUTPUT "You are tall enough to ride the roller coaster."

ELSE

OUTPUT "You are not tall enough to ride the roller coaster."

ENDIF
```

**Task 5:** Input a person’s weight and check if it is above 50 kg.

---

**Example Task :** Write pseudocode to input the price of an item and apply a 10% discount if the price is over $100.

```
DECLARE Price: REAL

DECLARE DiscountedPrice : REAL

INPUT Price

IF Price > 100 THEN

DiscountedPrice ← Price * 0.9

OUTPUT "The discounted price is: ", DiscountedPrice

ELSE

OUTPUT "The price is: ", Price

ENDIF
```

**Task 6:** Input the price of an item and apply a 15% discount if the price is over $200.

---

**Example Task :** Write pseudocode to input your current bank balance and the cost of an item and determine if you can afford it.

```
DECLARE BankBalance : REAL

DECLARE Cost: REAL

INPUT BankBalance

INPUT Cost

IF BankBalance >= Cost THEN

OUTPUT "You can afford the item."

ELSE

OUTPUT "You cannot afford the item."

ENDIF
```

**Task 7:** Input your bank balance and the cost of multiple items, then check if you can afford them all.

---

**Example Task :** Write pseudocode to input a person’s age and check if they are eligible to vote (18 or older).

```
DECLARE Age: INTEGER

INPUT Age

IF Age >= 18 THEN

OUTPUT "You are eligible to vote."

ELSE

OUTPUT "You are not eligible to vote."

ENDIF
```

**Task 8:** Input a person’s age and check if they are eligible to drive (16 or older).

---

**Example Task:** Write pseudocode to input a student’s grade and determine if they passed or failed (pass mark is 40).

```
DECLARE Grade: INTEGER

INPUT Grade

IF Grade >= 40 THEN

OUTPUT "You passed."

ELSE

OUTPUT "You failed."

ENDIF
```

**Task 9:** Input a student’s grade and determine if they earned distinction (80 or above).

---

**Example Task:** Input two numbers and check if the numbers are equal.

```
DECLARE Number1: INTEGER

DECLARE Number2: INTEGER

INPUT Number1

INPUT Number2

IF Number1 = Number2 THEN

OUTPUT "The numbers are equal."

ELSE

OUTPUT "The numbers are not equal."

ENDIF
```

**Task 10:** Input two numbers and check which one is greater.

---

### Leave a Reply[Cancel reply](/pseudocode/3-conditional-statements/pseudocode-if-then-else/#respond)