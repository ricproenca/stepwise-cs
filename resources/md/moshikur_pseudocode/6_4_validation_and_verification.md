# 6.4 Validation & Verification

> Source: https://moshikur.com/pseudocode/6-pseudocode-basic-operations/5-4-validation-verification/

# 5.5 Validation & Verification

---

# [Validation](#validation)

[method used to **check if data entered into a computer system is reasonable and acceptable**.](#validation)

# [Verification](#verification)

[checking that the data entered into a computer system has been **typed in correctly** and matches the original source.](#verification)

## **Validation in Computer Science**

### What is Validation?

Validation is a method used to **check if data entered into a computer system is reasonable and acceptable** before it is processed.

Validation does **not** check if the data is correct — only that it is sensible and within acceptable limits.

---

### Why is Validation Needed?

When users enter data into a program (e.g., filling out a form or entering a number), mistakes can happen.  
Validation helps to prevent:

Wrong types of data (e.g., letters instead of numbers)

Values outside the allowed range (e.g., age of 500)

Empty inputs

---

### Common Types of Validation Checks

Here are the types of validation you need to know for the syllabus:

## **Range Check**

**Ensures data is between a lower and upper limit.Example: Exam marks must be between 0 and 100.**

`IF Mark < 0 OR Mark > 100 THEN`  
`OUTPUT "Invalid mark"`  
`ENDIF`

## **Length Check**

**Ensures the data entered has the correct number of characters.Example: A PIN number must be 4 digits long.**

`IF LENGTH(PIN) <> 4 THEN`  
`OUTPUT "Invalid PIN length"`  
`ENDIF`

## **Type Check**

Ensures the data is the correct type (INTEGER, REAL, STRING). Example: Age should be an integer, not text.

## **Presence Check**

**Ensures data has actually been entered.Example: A username field cannot be left empty.**

`IF Username = "" THEN`  
`OUTPUT "Username required"`  
`ENDIF`

## **Format Check**

Ensures data follows the correct pattern.

Example: A date must be entered in the format DD/MM/YYYY.

## **Check Digit**

Used in barcodes or account numbers to detect errors when entering numbers.

A special digit is added to the end of the number, calculated using the other digits.

---

### Validation vs Verification

- **Validation** → checks if data is **reasonable**.
- **Verification** → checks if data has been **entered correctly**.

📌 Example: When entering a password:

- Validation checks → password length is between 8 and 12 characters.
- Verification checks → user must re-enter the password to confirm it matches.

---

### Exam Tips

✔ Always explain validation as “**checking if data is reasonable/acceptable**”.  
✔ Use examples in your answers (like marks between 0 and 100).  
✔ Be able to **write pseudocode** for a simple validation check.

---

# **Exam-Style Questions – Validation**

# Level 1

### **Student Registration System**

A school is designing a program to register new students. The program asks for the student’s age, their email address, and a 4-digit PIN number.

**(a)** Write pseudocode to validate that the age entered is between **11 and 18**. [2]

**(b)** Write pseudocode to validate that the PIN number entered is exactly **4 digits long**. [2]

**(c)** Suggest one validation check that could be used for the email address and explain why it is needed. [2]

👉 **Total Marks:** 6

Click For Hints

### **Hints for Level 1 – Question 1**

### **(a) Age validation (between 11 and 18)**

- You need to **check two conditions**:
  1. Age should not be less than 11
  2. Age should not be greater than 18
- Use the **OR** operator to catch invalid cases.  
  📌 Example structure:

```
IF Age < 11 OR Age > 18 THEN

OUTPUT "Invalid age"

ENDIF
```

---

### **(b) PIN number length = 4**

- Use the **LENGTH() function** from the pseudocode guide.
- Compare the length of the input to 4.  
  📌 Hint: If the length is not equal to 4, output an error message.

---

### **(c) Email address validation**

- Think about which validation check makes sense here.
- A common one is **format check** (e.g., must contain “@”).
- Another possibility is **presence check** (to make sure it isn’t blank).  
  📌 Example: A format check ensures the email looks like an email.

---

### **(d) Why validation doesn’t guarantee correctness**

- Validation only checks if data is **reasonable**, not whether it is the **true or correct value**.
- For example: If the system accepts an age of 15, it doesn’t know if the person really is 15 — just that it’s a sensible number.

---

# **Level 2**

### **Online Food Ordering System**

A company is designing a program for customers to order food online. The program asks for:

- The customer’s age
- The number of items ordered
- A discount code (optional)

**(a)** Write pseudocode to validate that the customer’s age is at least **16**.  
If the age is less than 16, the program should output **“You are too young to use this service”**. [3]

**(b)** Each customer can order between **1 and 20 items**.  
Write pseudocode to validate the number of items entered. If the number is outside the valid range, the program should keep asking for a new number until a valid one is entered. [3]

**(c)** Customers may enter a discount code. The code must be exactly **6 characters long**.

- Write pseudocode to check this rule.
- If the code is invalid, output **“Invalid code”**. [3]

**(d)** Explain the difference between a **length check** (used in part c) and a **format check**, giving one example for each in the context of this system. [3]

👉 **Total Marks: 12**

Click For Hints

## **Hints for Level 2 – Task 1**

### **(a) Age validation (at least 16)**

- This is a **range check** with only a lower limit.
- Check if the age is **less than 16**.
- If it is, display an error message and stop the program.  
  📌 Hint: Use `IF Age < 16 THEN …`

---

### **(b) Number of items ordered (1–20)**

- This needs a **range check with looping**.
- If the number is **outside 1 to 20**, ask the user to input again.
- Use a **REPEAT…UNTIL loop** to keep checking until valid.  
  📌 Hint:

```
REPEAT

INPUT NumberOfItems

UNTIL NumberOfItems >= 1 AND NumberOfItems <= 20
```

---

### **(c) Discount code (6 characters)**

- Use a **length check** with the `LENGTH()` function.
- If the length is not 6, output **“Invalid code”**.  
  📌 Hint: Compare `LENGTH(Code)` with `6`.

---

### **(d) Length check vs Format check**

- **Length check** → makes sure the number of characters is correct (e.g., discount code is 6 characters).
- **Format check** → makes sure the characters follow a **pattern** (e.g., three letters followed by three digits).  
  📌 Hint: Think of **how** the program checks the input (size vs structure).

---

# **Level 3**

### **Online Shopping Checkout**

A shopping website needs a checkout program to validate customer details before confirming an order.

**(a)** Customers must enter their age.

- Write pseudocode to validate that the age is **18 or above**.
- If the age is below 18, the program should stop and display **“You must be 18 or older to order.”** [3]

**(b)** Customers then enter the number of items they want to buy.

- The number must be between **1 and 50**.
- Write pseudocode to repeatedly ask for the number until valid input is entered. [3]

**(c)** The customer’s bank card number must be **16 digits long**.

- Write pseudocode to validate this rule. [2]

**(d)** Customers must enter their email address twice.

- Explain what this process is called, and why it is needed. [2]

**(e)** The system requires that the email must contain the symbol **“@”**.

- State the validation check being used here and explain its purpose. [2]

👉 **Total Marks: 12**

Click For Hints

---

# Hints for Level 3 – Task 1

### (a) Age must be 18 or above

- This is a **lower‑bound range check**.
- Check the **invalid** case first: age < 18.
- If invalid, **output the message** and **do not continue** with the rest of the steps.
- You can structure your algorithm so later inputs only happen if age is valid.

---

### (b) Number of items between 1 and 50 (repeat until valid)

- Use a **REPEAT … UNTIL** loop so the prompt appears at least once.
- The **loop condition should represent the valid case**: `NumItems >= 1 AND NumItems <= 50`.
- Inside the loop, only **INPUT** the number; avoid extra logic that complicates the exit condition.

---

### (c) Card number must be 16 digits long

- Treat the card number as a **STRING**.
- Use a **length check** with `LENGTH(CardNumber)`.
- You only need to enforce **exactly 16 characters** here (don’t add extra rules unless asked).

---

### (d) Enter email address twice

- This is **verification by double entry**.
- Store both entries in **two variables** and compare them.
- Explain that this catches **typing errors**; it does **not** prove the email is real.

---

### (e) Email must contain “@”

The purpose is to ensure a **sensible structure**, not to fully validate a real email.

This is a basic **format check** (pattern requirement).

Think of a simple **IF** condition that checks whether “@” appears at least once.

---

# **Verification in Computer Science**

### What is Verification?

**Verification** is the process of checking that the data entered into a computer system has been **typed in correctly** and matches the original source.

Verification does **not** check if the data is reasonable (that is validation). Instead, it checks if the data is entered **accurately**.

---

### Why is Verification Needed?

Even if validation rules are correct, a user can still:

Type the wrong data by mistake (e.g., typing “12345” instead of “12354”).

Miss a letter in an email address (e.g., typing “gmil.com” instead of “gmail.com”).

Enter correct-looking but wrong values.

Verification makes sure the data entered matches what was intended.

---

### Methods of Verification

## **Double Entry**

**The user enters the same data twice.If both entries match, the data is accepted. If not, the system asks again.**Example:** Entering a password and confirming it.**

`INPUT Password1`   
`INPUT Password2`   
`IF Password1 <> Password2 THEN`  
 `OUTPUT "Passwords do not match"`   
`ENDIF`

## **Visual Check**

The user reads through the data they have entered and confirms it is correct.

**Example:** Checking an online form before submitting.

## **Parity Checks, Checksums, or Echo Checks**

(covered under *Data Transmission* in Chapter 2, not here in Chapter 7, but worth noting)

These are system-level methods to verify accuracy in **data transmission**, not user input.

For **Chapter 7**, focus only on **double entry** and **visual check**.

---

### Verification vs Validation

| Verification | Validation |
| --- | --- |
| Checks if data is entered correctly | Checks if data is reasonable/acceptable |
| Example: Enter password twice to confirm | Example: Age must be between 0 and 120 |
| Prevents typing mistakes | Prevents unreasonable values |

---

### Exam Tip

- If the question asks for **verification** → talk about **double entry** or **visual check**.
- If the question asks for **validation** → give one of the six checks (range, length, type, presence, format, check digit).
- Always include an **example in context** (passwords, forms, registration systems).

---

# **Verification Tasks**

---

## **Level 1 – Task (Simple Case)**

A school registration program asks students to enter their password twice.

**Question:**  
Write pseudocode to check that the two passwords match. If they do not match, output the message **“Passwords do not match”**.  
[2]

### 🔹 Hints

- Use two **INPUT** statements for the two password entries.
- Use an **IF** statement to compare them.
- Remember: `<>` means **not equal to** in IGCSE pseudocode.

---

## **Level 2 – Task (Moderate Case)**

An online form asks a user to enter their email address. To reduce errors, the system uses **verification**.

**Question:**  
(a) Explain how **double entry** could be used to verify the email address.  
[2]

(b) Explain how a **visual check** could also be used in this situation.  
[2]

### 🔹 Hints

- (a) Think about asking the user to type the email **twice**.
- Compare both values. If they match → accept. If not → error.
- (b) Visual check = user looks at the entered email and **confirms it is correct** before submitting.

---

## **Level 3 – Task (Challenging Case)**

A company is developing a secure login system. The system already has validation rules for usernames and passwords.

**Question:**  
(a) Describe how **verification** can ensure that a password entered is correct at the time of **account creation**.  
[2]

(b) Explain why **verification alone** is not enough to ensure that the login details entered later are correct.  
[3]

### 🔹 Hints

- (a) Think about the **double entry method** (enter + confirm password).
- (b) Verification only checks if data is typed **the same way** as before — it does not check if the data is the **true/correct account password** stored in the system. That requires matching with the stored value (authentication).

---

### Leave a Reply[Cancel reply](/pseudocode/6-pseudocode-basic-operations/5-4-validation-verification/#respond)