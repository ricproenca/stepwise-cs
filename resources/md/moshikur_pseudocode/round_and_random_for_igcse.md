# Round & Random for Igcse

> Source: https://moshikur.com/pseudocode/random-number-generation/understanding-random-and-round-in-igcse/

# Understanding RANDOM() and ROUND() in IGCSE

---

[![Graphic featuring elements related to randomness and rounding in programming, including dice, numbers, and a checklist. The text highlights 'RANDOM' and 'ROUND', along with 'IGCSE' and a website URL.](images/pseudocode/round_and_random_for_igcse/img_001.png)](https://i0.wp.com/moshikur.com/wp-content/uploads/2025/09/image-1.png?ssl=1)

# What is `RANDOM()`?

The `RANDOM()` function gives a **real number between 0 and 1** (not including 1).  
That means you could get something like:

```
0.025, 0.503, or 0.999
```

### ✅ Example:

```
Num ← RANDOM()
```

This stores a number like `0.657` into the variable `Num`.

### 🧠 Example Task Store a random number between 0 and 1 into a variable called `RandValue`.

```
RandValue ← RANDOM()
```

📝 Task 1 : Store a random number between 0 and 1 into a variable called `MyRandom`.

---

# What is `ROUND()`?

The `ROUND()` function is used to **round a real number to a whole number**.

```
ROUND(Value, 0)
```

This means round `Value` to 0 decimal places (nearest whole number).

### ✅ Example:

```
Score ← 4.7
Score ← ROUND(Score, 0)
```

After rounding, `Score` becomes `5`.

### 🧠 Example Task 2:

Round the value `3.2` and store it in the variable `RoundedNumber`.

**Answer:**

```
RoundedNumber ← 3.2
RoundedNumber ← ROUND(RoundedNumber, 0)
```

📝 Your Turn: Round the value `6.6` and store it in a variable called `RoundedResult`.

---

## Combining `RANDOM()` and `ROUND()` to Make Whole Random Numbers

Now, let’s say we want a **random whole number from 1 to 100**.

We do this in two steps:

### ✅ Step-by-step Example:

```
Num ← RANDOM() * 99 + 1
Num ← ROUND(Num, 0)
```

- `RANDOM() * 99` gives 0 to 99
- `+1` makes it 1 to 100
- `ROUND(..., 0)` ensures it’s a whole number

### 🧠 Example Task 3:

Write pseudocode to generate a random whole number between 1 and 50 and store it in `RandomScore`.

```
RandomScore ← RANDOM() * 49 + 1
RandomScore ← ROUND(RandomScore, 0)
```

📝 Your Turn: Write pseudocode to generate a random whole number between 1 and 20 and store it in `LuckyNumber`.

---

## 🧠 Challenge Activity

Create pseudocode to generate:

1. A random whole number between 1 and 10, stored in `DieRoll`
2. A random whole number between 1 and 500, stored in `PrizeCode`

---

## Quick Formula

To generate a random **whole number between 1 and N**:

```
Num ← RANDOM() * (N - 1) + 1
Num ← ROUND(Num, 0)
```

Replace `N` with any number you need.

---

## Random Number in a Custom Range (e.g. 50 to 100)

To generate a number between **50 and 100**, the formula changes slightly.

### ✅ Example Task 4:

Generate a random **whole number between 50 and 100** and store it in the variable `Marks`.

```
Marks ← RANDOM() * 51 + 50
Marks ← ROUND(Marks, 0)
```

Explanation:

- `100 − 50 = 50`, so use 51 to include both ends (50 to 100).
- Adding 50 shifts the starting point from 0 to 50.

📝 Task 4: Generate a random whole number between 25 and 75 and store it in the variable `TestScore`.

---

## Random Even Numbers Only (e.g. between 2 and 100)

To generate **even numbers**, we:

1. Generate a random number from 1 to 50
2. Multiply it by 2 to make it even

### ✅ Example Task 5:

Generate a random even number between 2 and 100 and store it in `EvenNum`.

**Answer:**

```
EvenNum ← RANDOM() * 49 + 1
EvenNum ← ROUND(EvenNum, 0)
EvenNum ← EvenNum * 2
```

Explanation:

- `RANDOM() * 49 + 1` → 1 to 50
- Then multiply by 2 → 2 to 100, even only

📝 Task 5: Generate a random even number between 10 and 60 and store it in `EvenResult`.

---

## Random Odd Numbers Only (e.g. between 1 and 99)

To get **odd numbers**, we:

1. Generate from 0 to 49
2. Multiply by 2 → gives even numbers
3. Add 1 → turns them into odd numbers

### ✅ Example Task 6: Generate a random odd number between 1 and 99 and store it in `OddNumber`.

```
OddNumber ← RANDOM() * 49
OddNumber ← ROUND(OddNumber, 0)
OddNumber ← OddNumber * 2 + 1
```

This gives all odd numbers from 1 to 99.

📝 Task 6: Generate a random odd number between 11 and 69 and store it in `OddResult`.

---

## Random Numbers for Array Indexing

In IGCSE pseudocode, arrays usually start at index **1**. Suppose we have an array of 10 names and we want to randomly choose one.

### ✅ Example Task 7: Write pseudocode to randomly pick a number between **1 and 10** and store it in `Index`. This will later be used to access `Name[Index]`.

```
Index ← RANDOM() * 9 + 1
Index ← ROUND(Index, 0)
```

`RANDOM() * 9 + 1` → gives 1 to 10 inclusive.

📝 Task 7: Write pseudocode to select a random index between **1 and 20**, and store it in `StudentIndex`.

---

## Random Selection for a Quiz

Imagine a quiz with **5 questions** stored in an array. We want to randomly pick **1 of the 5 questions** to show.

### ✅ Example Task 8: Generate a random number between 1 and 5 and store it in `QuestionNumber`.

```
QuestionNumber ← RANDOM() * 4 + 1
QuestionNumber ← ROUND(QuestionNumber, 0)
```

- Random number from 1 to 5 → corresponds to Question 1 to 5 in the array `Questions[]`.

📝 Task 8: Generate a random number between **1 and 8** to select a question from the array `QuizQuestions[]`. Store it in `QNum`.

---

## Random Password Component (Digit Part Only)

You want to create a password where the last part is a **random 4-digit number** (e.g. between 1000 and 9999).

### ✅ Example Task 9: Generate a 4-digit random number between 1000 and 9999 and store it in `Code`.

```
Code ← RANDOM() * 8999 + 1000
Code ← ROUND(Code, 0)
```

`9999 − 1000 = 8999`, so multiply by 8999 and add 1000.

📝 Task 9: Generate a 5-digit random number between **10000 and 99999** and store it in `PassPart`.

---

## Random Score Simulation with Bonus

You are simulating a game where a player gets a random base score between 50 and 150. If the number is **greater than 100**, add a 50-point bonus.

### ✅ Example Task 10: Write pseudocode to:

- Generate a random number between 50 and 150.
- If the number is more than 100, add 50 to it.
- Store the final result in `FinalScore`.

```
Score ← RANDOM() * 100 + 50
Score ← ROUND(Score, 0)

IF Score > 100 THEN
    Score ← Score + 50
ENDIF

FinalScore ← Score
```

📝 Task 10: Generate a random score between **30 and 80**. If the number is **less than 40**, double the score. Store the final value in `BoostedScore`.

---

### 📝 Task 11:

A school has a list of 20 students. Write pseudocode to:

- Generate a random number between 1 and 20
- Store it in the variable `StudentIndex`
- Output `Name[StudentIndex]`

---

### 📝 Task 12:

Write pseudocode to generate a 4-digit random number between 1000 and 9999 and store it in a variable named `PinCode`.

**Hint**: The range size is 9000. Multiply `RANDOM()` by 8999, add 1000, then round.

---

### 📝 Task 13:

In a game, the player receives a random base score between 30 and 80.  
If the score is less than 40, double it.  
Store the final score in `BoostedScore`.

**Hint**: Use `IF` statement to check if the number is less than 40, and multiply by 2 if true.

---

### 📝 Task 14:

Write pseudocode to simulate rolling a 6-sided dice. Store the result in a variable `DiceRoll` and output the number.

*Hint: Use a random number between 1 and 6.*

---

### 📝 Task 15: Simulate a dice game where:

- A dice roll is randomly generated (1 to 6)
- The user is asked to guess the value
- If the guess is correct, output `"Correct!"`, otherwise output `"Wrong! The dice showed X"`

*Hint: Use `INPUT`, `RANDOM()`, and `IF...THEN...ELSE`.*

---

### 📝 Task 16: Generate a random number between 1 and 50. Ask the user to guess it.

- If the guess is too high, output `"Too high!"`
- If the guess is too low, output `"Too low!"`
- If it’s correct, output `"Correct!"`

**Hint**: Compare user’s guess with the generated number using multiple `IF` statements.

---

### 📝 Task 17: A shop wants to run a lucky draw.

- Generate a random number between 10000 and 99999
- If the last digit is `0`, output `"You win!"`
- Otherwise, output `"Try again!"`

*Hint: Use `MOD(Number, 10)` to check the last digit.*

---