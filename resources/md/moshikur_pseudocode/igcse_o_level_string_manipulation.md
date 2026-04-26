# IGCSE/O Level String Manipulation

> Source: https://moshikur.com/pseudocode/7-pseudocode-string-manipulation/7-1-igcse-o-level-string-manipulation/

# 7.1 IGCSE/O Level String Manipulation

---

[![Infographic illustrating string manipulation concepts including length, substring, uppercase, and lowercase text transformations.](images/pseudocode/igcse_o_level_string_manipulation/img_001.png)](https://i0.wp.com/moshikur.com/wp-content/uploads/2025/10/image-10.png?ssl=1)

Strings are simply a sequence of characters like words, phrases, or sentences. In programming, string manipulation means working with these sequences to perform tasks like counting characters, changing case, or extracting portions of the string.

Here are the **basic string operations** you need to know for IGCSE/O Level:

---

## **1. Length of a String**

This operation counts the number of characters in a string. Use the `LENGTH` function.

### **Example:**

```
LengthOfWord ← LENGTH("Hello")
```

In this case, `LengthOfWord` will store the value `5` because “Hello” has 5 characters.

### **Why is this useful?**

- To check how many characters a username or password has.
- To ensure text input isn’t too short or too long.

---

## **2. Substring Extraction**

This operation takes out a small part of a string using the `SUBSTRING` function.

### **Syntax:**

```
SUBSTRING(String, StartPosition, Length)
```

- **String**: The text you’re working with.
- **StartPosition**: The position of the first character you want.
- **Length**: How many characters to extract.

### **Example:**

```
PartOfWord ← SUBSTRING("Programming", 1, 4)
```

Here, `PartOfWord` will store `"Prog"` because it extracts the first 4 characters starting at position 1.

### **Why is this useful?**

- To get specific parts of text, like “101” from “Room 101”.

---

## **3. Convert to Lowercase**

This operation turns all letters in a string to lowercase using `LCASE`.

### **Example:**

```
LowerWord ← LCASE("HELLO")
```

Now, `LowerWord` will store `"hello"`.

### **Why is this useful?**

- To compare text without worrying about capital letters.
- To make text consistent when displaying data.

---

## **4. Convert to Uppercase**

This operation turns all letters in a string to uppercase using `UCASE`.

### **Example:**

```
UpperWord ← UCASE("hello")
```

Here, `UpperWord` will store `"HELLO"`.

### **Why is this useful?**

- To highlight text (like showing warnings in uppercase).
- To ensure proper formatting when saving data (e.g., names in uppercase).

---

You can combine string operations for more complex tasks. For example:

### **Task:** Extract the first letter of a string and make it uppercase.

```
Word ← "hello"

FirstLetter ← SUBSTRING(Word, 1, 1) // Extract first character

CapitalFirstLetter ← UCASE(FirstLetter) // Convert to uppercase
```

Now, `CapitalFirstLetter` will store `"H"`.

---

## Example Task

## similar task

---

## **Task 1: Calculate the Length of a String**

Find the number of characters in the string `"Programming is fun!"`.

```
StringLength ← LENGTH("Programming is fun!")
```

`StringLength` will store `20`.

## **Task:**

- Output the length of an empty string `""`.
- Find the length of `"Hello, World!"`.
- Calculate the number of characters in `"IGCSE Computer Science"`.

---

## **Task 2: Extract a Substring**

Extract the word `"ramm"` from `"Programming"`.

```
ExtractedWord ← SUBSTRING("Programming", 5, 4)
```

`ExtractedWord` will store `"ramm"`.

## **Task:**

- Extract `"IGCSE"` from `"IGCSE Programming"`.
- Extract `"World"` from `"Hello, World!"`.
- Extract `"Science"` from `"Computer Science"`.

---

## **Task 3: Convert a String to Lowercase**

Convert the string `"HELLO"` to all lowercase.

```
LowerWord ← LCASE("HELLO")
```

`LowerWord` will store `"hello"`.

## **Task:**

- Convert `"IGCSE"` to lowercase.
- Turn `"LEARNING is FUN!"` into lowercase.
- Convert `"123ABC"` into lowercase. What happens to the numbers?

---

## **Task 4: Convert a String to Uppercase**

Turn the string `"good morning"` into uppercase.

```
UpperWord ← UCASE("good morning")
```

`UpperWord` will store `"GOOD MORNING"`.

## **Task:**

- Convert `"study hard"` into uppercase.
- Turn `"practice makes perfect"` into uppercase.
- Convert `"Welcome 123"` into uppercase.

---

## **Task 5: Combine String Operations**

Extract the first letter of the string `"hello"` and convert it to uppercase.

```
FirstLetter ← SUBSTRING("hello", 1, 1)

CapitalFirstLetter ← UCASE(FirstLetter)
```

`CapitalFirstLetter` will store `"H"`.

## **Task:**

- Extract the first letter of `"world"` and make it uppercase.
- Take the first two letters of `"python"` and make them uppercase.
- Extract the last letter of `"apple"` and convert it to uppercase.

---

## **Task 6: Create a New String from Substrings**

Form the string `"HiWorld!"` by combining `"Hi"` from `"Himself"` and `"World!"` from `"Worldly!"`.

```
FirstPart ← SUBSTRING("Himself", 1, 2)

SecondPart ← SUBSTRING("Worldly!", 1, 6)

CombinedString ← FirstPart, SecondPart
```

`CombinedString` will store `"HiWorld!"`.

## **Task:**

- Combine `"Good"` from `"Goodbye"` and `"Day"` from `"Holiday"` to form `"GoodDay"`.
- Build `"IGCSE FUN"` from `"IGCSE"` and `"FUN TIME"`.

---

## **Task 7: Use Length and Substring Together**

Extract the last three characters from `"Learning"`.

```
WordLength ← LENGTH("Learning")

LastThree ← SUBSTRING("Learning", WordLength - 2, 3)
```

`LastThree` will store `"ing"`.

## **Task:**

- Extract the last two letters of `"Science"`.
- Find the last four characters of `"Programming"`.
- Extract the last letter of `"IGCSE"`.

---

# Individually Output All Characters in a Line

**Objective**: This section will demonstrate how to output each character from a string individually, line by line. We’ll use a loop and the `SUBSTRING` function to achieve this.

## **Example of What We Want**

**Input:**  
`Line ← "HELLO"`

**Output:**  
`H  
E  
L  
L  
O`

---

## **Understanding the Code**

Here’s the code we will use:

```
DECLARE Line : STRING

INPUT Line

FOR i ← 1 TO LENGTH(Line)

OUTPUT SUBSTRING(Line, i, 1)

NEXT i
```

Let’s break it down:

---

## **1. Using the `SUBSTRING`Function**

The `SUBSTRING`function extracts specific characters from a string.

- **Syntax**: `SUBSTRING(String, StartPosition, LengthOfSubstring)`
- **Parameters**:
  - `String`: The string from which we extract characters (`Line` in this example).
  - `StartPosition`: The position of the character to extract.
  - `LengthOfSubstring`: The number of characters to extract, which is `1` in this case.

### **Example of `SUBSTRING`in Action**:

- `SUBSTRING(Line, 1, 1)` extracts the **first** character (`H`).
- `SUBSTRING(Line, 2, 1)` extracts the **second** character (`E`).
- `SUBSTRING(Line, 3, 1)` extracts the **third** character (`L`).

This pattern continues until we have extracted all the characters.

---

## **2. The `FOR` Loop**

- The `FOR` loop runs from `1` to `LENGTH(Line)`.
- **How it works**:
  - `i` starts at `1` (the first character’s position).
  - For each iteration, `i` increases by `1`.
  - `SUBSTRING(Line, i, 1)` dynamically extracts the character at position `i` during each iteration.

### **Key Details**:

- The loop automatically stops after processing all characters (i.e., when `i = LENGTH(Line)`).
- No need for a `DO` statement; the loop structure already includes the instructions to execute.

---

### **Example Walkthrough**

**Input:**  
`Line ← "WORLD"`

**Execution**:

| Iteration | Value of i | MID(Line, i, 1) | Output |
| --- | --- | --- | --- |
| 1 | 1 | W | W |
| 2 | 2 | O | O |
| 3 | 3 | R | R |
| 4 | 4 | L | L |
| 5 | 5 | D | D |

**Output:**  
W  
O  
R  
L  
D

---

## **Code Explanation**

1. **Start the Loop**:
   - `FOR i ← 1 TO LENGTH(Line)`
   - `i` starts at `1` (first character).
2. **Extract and Output the Character**:
   - Inside the loop, `SUBSTRING(Line, i, 1)` gets the `i`-th character.
   - The `OUTPUT` statement prints that character.
3. **Move to the Next Character**:
   - After each iteration, `i` increments by `1`.
   - This continues until `i` equals `LENGTH(Line)`.
4. **End the Loop**:
   - The loop stops automatically after all characters are processed.

### **Practice**

1. Try running the code with:
   - `Line ← "HELLO WORLD"`
   - Observe how it processes spaces.
2. Modify the loop to only output characters in uppercase.
3. Extend the code to handle multiple lines of input.

---

## Bonus tasks

1. Write a pseudocode to check if the first letter of `any given string` is uppercase.
2. Extract the first three letters of `"Mathematics"` and convert them to lowercase.
3. Output the last character of a string.
4. Individually output all the characters in a string.

## **Bonus Challenge Tasks**

Kindly note that these bonus challenge tasks are highly challenging and go beyond the IGCSE syllabus requirements. Feel free to attempt them at your own discretion.

1. Write pseudocode to count how many vowels (`a`, `e`, `i`, `o`, `u`) are in the string `"Education is key"`.
2. Write pseudocode to check if a string is a valid email address. A valid email must:
   - Contain an `"@"` and a “.”
3. Write pseudocode to replace all occurrences of `"a"` in `"banana"` with `"@"`.
4. Write pseudocode to mask all but the last 4 characters of a phone number, e.g., `"1234567890"` becomes `"******7890"`.
5. Write pseudocode to find the character that appears most frequently in the string `"success"`.
6. Create a pseudocode that reverses the string `"IGCSE"` by combining `SUBSTRING` operations.

---

Practice these examples to become confident in string manipulation. Happy coding! 😊

### Leave a Reply[Cancel reply](/pseudocode/7-pseudocode-string-manipulation/7-1-igcse-o-level-string-manipulation/#respond)