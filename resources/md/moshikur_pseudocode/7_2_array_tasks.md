# 7.2 Array Tasks

> Source: https://moshikur.com/pseudocode/6-pseudocode-array/6-1-2-array-tasks-1-2/

# 7.2 Array Tasks 2

---

This section provides **six levels of array tasks**, starting from the basics and moving to more challenging problems. Each task is designed to build important problem-solving skills step by step.

---

## **Level 1 – Easy**

Skills required:

- Input/output
- Array declaration
- FOR loop
- Basic traversal

Write pseudocode to:

1. Declare an array of size 5 to store integers.
2. Input 5 numbers from the user into the array.
3. Output all the numbers entered.  
   **[4 marks]**

Click For Hints

- Declare the array with: `DECLARE Numbers : ARRAY [1:5] OF INTEGER`
- Use a **FOR loop** to `INPUT` 5 values into the array.
- Use another **FOR loop** to `OUTPUT` the values from the array.

---

## **Level 2 – Medium**

Skills required:

- Array processing
- Running total & average calculation
- Tracking maximum value

A teacher records the marks of 10 students in a test.

1. Declare an array of size 10 to store the marks.
2. Input all marks into the array.
3. Calculate and output the average mark of the class.
4. Output the highest mark.  
   **[6 marks]**

Click For Hints:

- Declare the array: `DECLARE Marks : ARRAY [1:10] OF INTEGER`
- Use a **FOR loop** to input the 10 marks.
- Use a running **Total** variable to calculate the average.
- Track the **Highest** mark while looping.
- At the end, output the **Average** and the **Highest**.

---

## **Level 3 – Hard**

Skills required:

- Array of strings
- User input search
- Linear search with flag

A small library system stores the titles of 6 books in an array.

1. Declare an array of size 6 to store book titles (strings).
2. Input all 6 book titles.
3. Ask the user to enter a book title to search for.
4. If the book is in the array, output `"Book Found"`. Otherwise, output `"Book Not Found"`. **[8 marks]**

Click For Hints

Declare the array: `DECLARE Books : ARRAY [1:6] OF STRING`

Use a **FOR loop** to input the 6 titles.

Ask the user for a **SearchTitle**.

Use another **FOR loop** with an **IF** check:

- If `Books[i] = SearchTitle`, set a **Found** flag.

After the loop, output `"Book Found"` if true, otherwise `"Book Not Found"`.

---

## **Level 4 – Harder (Validation + Verification)**

Skills required:

- Input validation (range check)
- Re-prompting with loops
- Double-entry verification

A class teacher wants to store **8** test marks (integers from 0 to 100 inclusive) in an array. You must write pseudocode that:

1. Declares an array of size 8 to store INTEGER marks.
2. Inputs each mark with **validation**:
   - Accept only between **0** and **100** inclusive.
   - If invalid, re-prompt until a valid value is entered.
3. Applies **verification (double-entry)** for each mark:
   - Ask the learner to enter the same mark a second time.
   - If the two entries match, store the mark in the array.
   - If they do not match, display a message and repeat the entry process for that position.
4. After all 8 marks are stored, output: **“All marks recorded successfully.”** **[10 marks]**

Click For Hints

Declare array: `DECLARE Marks : ARRAY [1:8] OF INTEGER`

Use a **FOR loop** for 8 entries.

Inside the loop:

- Validate mark is **0–100** (use a loop to re-prompt if invalid).
- Ask for the mark again (**verification**).
- If both entries match → store it, else → repeat.

At the end, output: `"All marks recorded successfully."`

---

## **Level 5 – Advanced (Counting Concept)**

Skills required:

- Counting occurrences in array
- Conditional counting
- Finding most frequent element

A sports competition records the finishing positions of **20 runners** in an array. Each element in the array stores the country code of the runner (e.g. `"USA"`, `"GBR"`, `"KEN"`, `"ETH"`).

Write pseudocode to:

1. Declare an array of size 20 to store the **country codes**.
2. Input the 20 country codes into the array.
3. Ask the user to enter a country code.
4. Count how many runners in the array are from that country.
5. Output the message:
   - If the count is **0**, output `"No runners from <country>"`.
   - If the count is **greater than 0**, output `"<count> runners from <country>"`.
6. Extend the task:
   - Output the country code that appears **most frequently** in the array (the country with the highest number of runners). **[12 marks]**

Click For Hints

Declare: `DECLARE Runners : ARRAY [1:20] OF STRING`

Input the 20 country codes.

Ask for a **SearchCountry**.

Use a **FOR loop** with a **Counter** to count matches.

Output count or `"No runners"` if 0.

To find most frequent:

- Use nested loops OR track counts in a second array.
- Keep updating a **MaxCount** and **MostFrequentCountry**.

---

## **Level 6 – Advanced (Totaling Concept)**

Skills required:

- Parallel arrays (prices + status)
- Conditional totaling
- Calculating averages
- Tracking maximum with condition

A shop stores the prices of **15 items** in an array. Each item is either marked `"Y"` if it is **on sale** or `"N"` if it is **not on sale**.

Write pseudocode to:

1. Declare two arrays:
   - An array of size 15 to store the **prices** of the items (REAL).
   - An array of size 15 to store the **sale status** of each item (STRING, `"Y"` or `"N"`).
2. Input the price and sale status for each of the 15 items.
3. Calculate and output:
   - The **total value of all items**.
   - The **total value of only the sale items**.
   - The **average price of non-sale items**.
4. Extend the task:
   - Identify and output the **item number** (index) of the **most expensive sale item**. **[14 marks]**

Click For Hints

Declare two arrays:

- `DECLARE Prices : ARRAY [1:15] OF REAL`
- `DECLARE SaleStatus : ARRAY [1:15] OF STRING`

- Input both arrays in a **FOR loop**.
- Use variables:
  - **TotalAll** → sum of all prices
  - **TotalSale** → sum of `"Y"` items
  - **TotalNonSale** and **CountNonSale** → for average
  - **MaxSalePrice** and **MaxIndex** → track most expensive sale item
- Output totals, average, and item number of max sale price.

---

## **Final Challenge – The Treasure Hunt Game 🏴‍☠️**

---

[![Illustration depicting the rules for a Treasure Hunt Game, featuring steps like setting up players, inputting points, searching for players, counting and totaling, identifying the winning player, and game end.](images/pseudocode/7_2_array_tasks/img_001.png)](https://i0.wp.com/moshikur.com/wp-content/uploads/2025/08/image.png?ssl=1)

🎯 Skills Tested:

- Declaring and using **parallel arrays** (names + scores).
- **Validation & verification** of input.
- **Searching** in arrays.
- **Counting** based on conditions.
- **Totaling and averaging** values.
- Finding **maximum with conditions**.

You are designing a **Treasure Hunt Game** that uses arrays to manage players and their treasure points.

### **Game Rules (Your Task in Pseudocode):**

1. **Setup Players**
   - Declare an array `PlayerNames` of size 6 to store the names of the players.
   - Declare an array `TreasurePoints` of size 6 to store the treasure points for each player (INTEGER, 0–100).
2. **Input with Validation & Verification**
   - Input all player names.
   - Input treasure points for each player with **validation** (must be 0–100).
   - Use **double-entry verification**: player’s points must be entered twice and match.
3. **Search Functionality**
   - Ask the user to enter a **player’s name**.
   - Search for the player in the array.
   - If found, display:  
     `"Player <name> has <points> treasure points."`
   - If not found, display `"Player not in the game."`
4. **Counting & Totals**
   - Count how many players have **50 or more points** (rich pirates 🏆).
   - Calculate the **total treasure points** of all players.
   - Calculate the **average treasure points**.
5. **Winning Player**
   - Identify and output the **player with the most treasure points**.
   - If there is a tie, output **all players with the highest score**.
6. **Game End Message**
   - Display: `"Treasure Hunt Complete – All Pirates Ranked!"`

**[20 marks]**

---

Click For Hints

**Hints for the Treasure Hunt Game**

1. **Setup Players**
   - Use **two parallel arrays**:
     - `PlayerNames : ARRAY [1:6] OF STRING`
     - `TreasurePoints : ARRAY [1:6] OF INTEGER`
2. **Input with Validation & Verification**
   - Use a **FOR loop** from 1 to 6.
   - Input player name → store in `PlayerNames[i]`.
   - For points:
     - Validate → must be between **0 and 100**.
     - Double-entry → ask twice, check they match.
3. **Search Functionality**
   - Ask for a **SearchName**.
   - Use a **FOR loop** to compare with `PlayerNames[i]`.
   - If match → display points.
   - Use a **Found flag** to track if the player exists.
4. **Counting & Totals**
   - Create variables:
     - `RichPirates ← 0`
     - `TotalPoints ← 0`
   - While looping:
     - Add to `TotalPoints`.
     - If points ≥ 50, increase `RichPirates`.
   - After loop → calculate average: `TotalPoints / 6`.
5. **Winning Player**
   - Track `MaxPoints` and `WinnerName`.
   - Update whenever a higher score is found.
   - Handle ties by checking for equal values.
6. **End Message**
   - Simple `OUTPUT "Treasure Hunt Complete – All Pirates Ranked!"`

### Leave a Reply[Cancel reply](/pseudocode/6-pseudocode-array/6-1-2-array-tasks-1-2/#respond)