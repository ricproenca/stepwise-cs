# 7.4 LINEAR SEARCH

> Source: https://moshikur.com/pseudocode/6-pseudocode-array/6-2-pseudocode-linear-search/

# 7.4 PSEUDOCODE – LINEAR SEARCH

---

**What is a Linear Search?**  
Linear search, also known as sequential search, is a method for finding a specific value within an array. It checks each entry of the array in sequence until the desired value is found, or the array ends. This search method is straightforward and doesn’t require the list to be sorted.

[TASKS](#tasks)

[Final Challenge](#final)

### Example: Searching for a Book

Suppose you have a shelf of books and you’re looking for a book titled “The Hidden Treasure.” You’ll start at one end of the shelf and go through each book until you find it.

### **Step-by-Step Process of Linear Search**

**Start from the First Element**: Begin with the first element of the array.  
**Compare the Target Value**: Check if it is the same as the target value.  
**Move to the Next Element**: If it’s not a match, move to the next element.  
**Repeat Until Found or End**: Continue this process until you find the target or reach the end of the array.  
**Result**: If you find the target, return the position where it was found. If not, indicate that the target is not in the array.

[![An illustration of a linear search algorithm showing an array of fruits including apple, banana, cherry, date, fig, and grape, with the target search item highlighted.](images/pseudocode/7_4_linear_search/img_001.png)](https://i0.wp.com/moshikur.com/wp-content/uploads/2025/09/image-55.png?ssl=1)

### Example in Pseudocode:

Let’s say we have an array of numbers and we want to find the number 7:

```
// Declare the array and the variable for the target value

DECLARE numbers: ARRAY[1:5] OF INTEGER

DECLARE target: INTEGER

// Initialize the array with some numbers

numbers[1] <-- 5

numbers[2] <-- 3

numbers[3] <-- 7

numbers[4] <-- 1

numbers[5] <-- 8

// Set the target value we are searching for

target <-- 7

// Perform the linear search

FOR i <-- 1 TO 5

IF numbers[i] = target THEN

OUTPUT "Target found at position: ", i

ENDIF

NEXT i
```

## Detailed Breakdown of the Pseudocode

### **Variable Declarations**

```
DECLARE numbers: ARRAY[1:5] OF INTEGER

DECLARE target: INTEGER
```

**numbers**: An array declared to hold five integer values. Arrays are used for storing multiple values in a structured manner, allowing each to be accessed by an index.

**target**: An integer variable declared to hold the value that the algorithm is searching for within the array.

### **Array Initialization**

```
numbers[1] <-- 5

numbers[2] <-- 3

numbers[3] <-- 7

numbers[4] <-- 1

numbers[5] <-- 8
```

These lines initialize the array **numbers** with specific integers. This setup is essential for providing the data that the linear search will process.

```
Array values can be assigned this way too:

numbers <- [5,3,7,1,8]
```

### Setting the Target Value

```
target <-- 7
```

The **target** variable is assigned the value **7**. This is the value the algorithm will attempt to locate within the array.

### Linear Search Process

```
FOR i <-- 1 TO 5

IF numbers[i] = target THEN

OUTPUT "Target found at position: ", i

ENDIF

NEXT i
```

A **FOR** loop iterates through each element in the array from index 1 to 5. The loop checks each element to determine if it matches the **target**.

The **IF** statement within the loop compares the current element (**numbers[i]**) to the **target**. If they match, it triggers the action:

**Output**: The position of the target within the array is displayed using the **OUTPUT** statement. This informs the user where the target was found.

If the loop completes without finding the target, there is no output or action specified in the pseudocode for this scenario, meaning the search simply ends with no message.

---

# Linear Search with a Boolean Flag

### 🧠 What is a Boolean Flag?

When searching through an array, it’s important to know whether the item was **actually found** or not. For this, we use something called a **Boolean flag** — a variable that can either be `TRUE` or `FALSE`.

In linear search, the Boolean flag is usually called `Found`.

- At the start, we **assume** the value is not found:  
  `Found ← FALSE`
- If we find the value during the search, we set the flag to `TRUE`:  
  `Found ← TRUE`
- After the loop, we check if `Found` is still `FALSE`.  
  If yes, it means the value wasn’t found in the array.

---

### 📚 Why Use a Boolean Flag?

Without the Boolean flag:

- We may not know if the value was missing from the list.
- The user won’t be told if the value wasn’t found.

With the Boolean flag:

- The program **keeps track** of whether the value was found.
- We can display the correct message to the user.

---

### 🧾 Pseudocode: Linear Search with Boolean Flag

Let’s write pseudocode that:

- Stores 10 numbers in an array
- Asks the user to enter a value
- Searches through the array
- Tells the user whether the value **was found** or **not found**

```
DECLARE Values : ARRAY[1:8] OF INTEGER

DECLARE SearchValue : INTEGER

DECLARE Found : BOOLEAN

DECLARE i : INTEGER

// Fill the array with some sample values

Values ← [109, 111, 115, 104, 105, 107, 117, 114]

OUTPUT "Enter a value to search for"

INPUT SearchValue

Found ← FALSE  // Start by assuming the value is not found

FOR i ← 1 TO 8

IF Values[i] = SearchValue THEN

Found ← TRUE

OUTPUT "Value found at position ", i

ENDIF

NEXT i

IF Found = FALSE THEN

OUTPUT "Value not found"

ENDIF
```

---

### ✅ How It Works

| Step | What Happens |
| --- | --- |
| 1 | The array Values is filled with 10 numbers |
| 2 | The user is asked to enter a number to search for |
| 3 | Found ← FALSE — We assume the value is not in the list |
| 4 | We loop from 1 to 10 and check each value |
| 5 | If we find a match, we set Found ← TRUE and show the position |
| 6 | After the loop, we check IF Found = FALSE — if true, show “not found” |

---

### 👨‍🎓 Try It Yourself

You can test this logic by changing the values in the array or entering different search values.

For example:

- If you search for `50`, it will say:  
  `Value found at position 5`
- If you search for `25`, it will say:  
  `Value not found`

---

A Boolean flag is a **simple but powerful** way to improve your linear search. It helps the program **track whether the value was found or not** and give the correct message to the user.

---

### When to Use Linear Search

**Small Data Sets**: Linear search is great when the list is small.

**Unsorted Data**: It’s particularly useful if the data is not sorted and organization is unknown.

---

### Advantages and Disadvantages

**Advantages**:

Simple to understand and implement.  
Works on unsorted data.

**Disadvantages**:

Inefficient for large data sets as it might have to check every element.  
More time-consuming as the size of the data increases.

---

### Practical Examples of Linear Search

### **Finding a Lost Item**

You’re looking for your keys in your house. You search through each room in a sequence until you find your keys or confirm they are not in those rooms.

### **Checking Inventory**

In a storage room, you’re searching for a specific tool. You examine each shelf and box one by one until you locate the tool or exhaust all options.

### **Library Search**

You’re looking for a specific book in a small library where books aren’t alphabetized. You scan each shelf from left to right until you find the book or finish checking the last shelf.

---

Linear search is a fundamental algorithm that’s essential for all beginner programmers to learn. It lays the foundation for understanding more complex searching algorithms. Happy searching, and remember, like all skills, practice makes perfect!

# TASKS

---

**1 a.** Given the array “ages” containing [18, 20, 22, 25, 30], find if the value 22 exists in the array. Below is the code for the program:

```
DECLARE found: BOOLEAN

found ← FALSE

FOR i <- 1 TO 5

IF age[i] = 22 THEN

found ← TRUE

ENDIF

NEXT i

OUTPUT "Exists:", found
```

**b.** Given the array “scores” containing [85, 90, 75, 80], find the index of the value 75.  
**Your Task**: Write the pseudocode to find the index.

---

**2** **a.** Given the array “numbers” containing [1, 2, 3, 2, 5, 2], count how many times the value 2 appears.

```
DECLARE count: INTEGER

count ← 0

FOR i <- 1 TO 6

IF number[i] = 2 THEN

count ← count + 1

ENDIF

NEXT i

OUTPUT count
```

**b.** Given the array “grades” containing [“A”, “B”, “C”, “A”, “B”, “A”], count how many times the value “A” appears.  
**Your Task**: Write the pseudocode to count the occurrences.

---

**3**. A temperature monitoring system records hourly temperatures in an array named temperatures. Perform a linear search to find the index of the first occurrence where the temperature exceeds 30°C.  
  
temperatures <- [25, 28, 32, 29, 30, 31]

Solution

```
DECLARE temp:ARRAY[1:5] OF INTEGER
temp←[10,37,35,34,3]
DECLARE index:INTEGER
index ← 1
WHILE temp[index]<30
    index ← index +1
ENDWHILE
OUTPUT "Found at index ",index
```

---

**4**. A sales report stores daily sales amounts in an array named “salesAmounts”. Perform a linear search to find the total sales amount for the month.  
  
salesAmounts <- [1500, 2000, 1800, 2200, 2500]

Solution:

```
DECLARE salesAmounts : ARRAY [1:5] OF INTEGER // Example array for sales amounts
DECLARE Index : INTEGER
DECLARE TotalSales : INTEGER
// Initialize total sales to 0
TotalSales ← 0
FOR Index ← 1 TO 5
    TotalSales ← TotalSales + salesAmounts[Index]
NEXT Index
OUTPUT "Total sales for the month: ", TotalSales
```

---

**5**. An inventory management system tracks product quantities in an array named productQuantities. Perform a linear search to find the index of the product with the lowest quantity.  
  
productQuantities <- [50, 30, 20, 40, 10]

Solution:

```
DECLARE productQuantities : ARRAY [1:5] OF INTEGER 
DECLARE Index : INTEGER
DECLARE MinQuantity : INTEGER
DECLARE MinIndex : INTEGER
// Initialize MinQuantity to a very large value and MinIndex to -1
MinQuantity ← 9999
MinIndex ← -1
FOR Index ← 1 TO 5
    IF productQuantities[Index] < MinQuantity THEN
        MinQuantity ← productQuantities[Index]
        MinIndex ← Index
    ENDIF
NEXT Index
OUTPUT "The lowest quantity is: ", MinQuantity
OUTPUT "The index of the product with the lowest quantity is: ", MinIndex
```

---

**6**. A survey collects responses in an array named responses. Perform a linear search to count the number of times the response “Agree” appears.  
  
responses <- [“Disagree”, “Agree”, “Neutral”, “Agree”, “Strongly Agree”]

Solution:

```
DECLARE responses : ARRAY [1:5] OF STRING
DECLARE Index : INTEGER
DECLARE CountAgree : INTEGER
// Initialize CountAgree to 0
CountAgree ← 0
FOR Index ← 1 TO 5
    IF responses[Index] = "Agree" THEN
        CountAgree ← CountAgree + 1
    ENDIF
NEXT Index
OUTPUT "The response 'Agree' appears: ", CountAgree, " times."
```

---

**7**. A grades database stores student scores in an array named scores. Perform a linear search to find the index of the highest score.  
  
scores <- [85, 92, 78, 95, 88]

Solution:

```
DECLARE scores : ARRAY [1:5] OF INTEGER
DECLARE Index : INTEGER
DECLARE MaxScore : INTEGER
DECLARE MaxIndex : INTEGER
// Initialize MaxScore to a very small value and MaxIndex to -1
MaxScore ← -1
MaxIndex ← -1
FOR Index ← 1 TO 5
    IF scores[Index] > MaxScore THEN
        MaxScore ← scores[Index]
        MaxIndex ← Index
    ENDIF
NEXT Index
OUTPUT "The highest score is: ", MaxScore
OUTPUT "The index of the highest score is: ", MaxIndex
```

---

**8**. A search engine logs user queries in an array named queries. Perform a linear search to count the number of times the query “weather” appears.  
  
queries <- [“news”, “weather”, “sports”, “weather”, “finance”]

Solution:

```
DECLARE queries : ARRAY [1:5] OF STRING
DECLARE Index : INTEGER
DECLARE CountWeather : INTEGER
// Initialize CountWeather to 0
CountWeather ← 0
FOR Index ← 1 TO 5
    IF queries[Index] = "weather" THEN
        CountWeather ← CountWeather + 1
    ENDIF
NEXT Index
OUTPUT "The query 'weather' appears: ", CountWeather, " times."
```

---

**9**. A shopping cart stores item prices in an array named prices. Perform a linear search to find the total cost of all items.  
  
prices <- [20.5, 15.75, 10.25, 5.99, 12.0]

Solution:

```
DECLARE prices : ARRAY [1:5] OF REAL // Example array for item prices
DECLARE Index : INTEGER
DECLARE TotalCost : REAL
// Initialize TotalCost to 0
TotalCost ← 0
FOR Index ← 1 TO 5
    TotalCost ← TotalCost + prices[Index]
NEXT Index
OUTPUT "The total cost of all items is: ", TotalCost
```

---

# Final Task

---

## *The Empty Vault*

[![An illustration of a closed and open safe with a key beside it, featuring a circular locking mechanism. The design is simple and colorful, emphasizing the security theme.](images/pseudocode/7_4_linear_search/img_002.png)](https://i0.wp.com/moshikur.com/wp-content/uploads/2025/09/image-54.png?ssl=1)

### 🕵️‍♂️ Mission Brief

You are a digital security analyst for a top-secret intelligence agency.

There is a secure vault that holds up to 8 encrypted codes. These codes are stored in an array called `Vault`. If the vault is empty, every position in `Vault` contains the value `0`.

Your task is to write a program that checks whether the entire vault is empty or not.

---

### ✅ What Your Program Should Do

- The vault is an array with 8 elements.
- If **all values** in the array are `0`, then display:  
  **“The vault is empty. No codes stored.”**
- If **at least one** value is not `0`, then display:  
  **“Vault contains encrypted codes.”**

You **must**:

- Use a **Boolean flag** to keep track of the result.
- Use a loop to check each element of the array.
- Display the correct message after checking all values.

---

### 🧠 Example

If this is the content of the vault:

```
Vault[1] ← 0

Vault[2] ← 0

Vault[3] ← 0

Vault[4] ← 0

Vault[5] ← 2745

Vault[6] ← 0

Vault[7] ← 0

Vault[8] ← 0
```

Your program should output:

```
Vault contains encrypted codes.
```

If all values are `0`, your program should output:

```
The vault is empty. No codes stored.
```

---

### ✍️ Tip Before You Start

You’ll want to:

- Start by **assuming** the vault is empty.
- Loop through each value.
- If you find a non-zero number, **change your assumption**.
- After the loop, show the correct message.

---

## Extension – Replacing the Boolean Flag with a Counter

In the previous task, you used a **Boolean flag** to check whether the vault contains any encrypted codes.

Now, let’s make the logic **smarter and cleaner**.

Instead of using a flag to track if something is found, you can simply **count how many codes are stored**. If the count is `0`, the vault is empty. If the count is greater than `0`, you know exactly how many encrypted codes were found.

### 🎯 Updated Mission

Modify your previous program as follows:

- **Remove** the Boolean flag.
- **Add** a counter variable (e.g., `CodeCount ← 0`)
- Loop through the array:
  - For each non-zero value, increase the counter.
- After the loop ends:
  - If the counter is `0`, display:  
    `"The vault is empty. No codes stored."`
  - If the counter is greater than `0`, display:  
    `"Vault contains X encrypted code(s)."`  
    (Replace `X` with the actual count.)

---

### ✍️ Hint

Start with:

```
DECLARE CodeCount : INTEGER

CodeCount ← 0
```

Inside the loop:

```
IF Vault[i] ≠ 0 THEN

CodeCount ← CodeCount + 1

ENDIF
```

After the loop:

```
IF CodeCount = 0 THEN

OUTPUT "The vault is empty. No codes stored."

ELSE

OUTPUT "Vault contains ", CodeCount, " encrypted code(s)."

ENDIF
```

---

### Leave a Reply[Cancel reply](/pseudocode/6-pseudocode-array/6-2-pseudocode-linear-search/#respond)