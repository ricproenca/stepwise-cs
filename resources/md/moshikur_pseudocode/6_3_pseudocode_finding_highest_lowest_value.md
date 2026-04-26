# 6.3 Pseudocode Finding Highest/Lowest Value

> Source: https://moshikur.com/pseudocode/6-pseudocode-basic-operations/5-3-pseudocode-finding-highest-lowest-value/

# 5.3 Pseudocode – Finding Highest/Lowest Value

---

## Finding the Highest Value from Inputs in Pseudocode

Let’s learn how to find the highest value from a series of numbers entered by the user. This involves comparing each new number to the current highest value and updating the highest value if the new number is greater.

---

### Step-by-Step Explanation:

1. **Initialize Variables**:
   - Create a variable to store the highest value, e.g., `Highest`.
   - Set it to a very low value initially so any number entered will be greater (e.g., -9999).
2. **Input Numbers**:
   - Use a loop to get numbers from the user.
   - Exit the loop when a specific value (e.g., 0) is entered to signal the end.
3. **Compare Each Input**:
   - Check if the input number is greater than the current value of `Highest`.
   - If true, update `Highest` with the new number.
4. **Output the Result**:
   - Once all inputs are processed, display the value of `Highest`.

---

### Example in Pseudocode:

Using for loop input ten numbers and find the highest among those numbers.

```
DECLARE Highest: INTEGER

DECLARE Number: INTEGER

Highest ← -9999

FOR i <- 1 TO 10

OUTPUT "Enter a number:"

INPUT Number

IF Number > Highest THEN

Highest ← Number

ENDIF

NEXT i

OUTPUT "The highest number entered is:", Highest
```

Using Repeat Until Loop input numbers until the user inputs zero, then out the highest number entered.

```
DECLARE Highest: INTEGER

DECLARE Number: INTEGER

Highest ← -9999

REPEAT

OUTPUT "Enter a number (0 to stop):"

INPUT Number

IF Number > Highest THEN

Highest ← Number

ENDIF

UNTIL Number = 0

OUTPUT "The highest number entered is:", Highest
```

---

Here is the trace table for the pseudocode provided. The trace table shows how the variables change at each step of the program.

---

### Input Sequence: `12, 45, 32, 67, 0`

| Step | Number | Highest | Condition (Number > Highest) | Action |
| --- | --- | --- | --- | --- |
| 1 | – | -9999 | – | Initialize Highest |
| 2 | 12 | 12 | TRUE | Update Highest |
| 3 | 45 | 45 | TRUE | Update Highest |
| 4 | 32 | 45 | FALSE | No change |
| 5 | 67 | 67 | TRUE | Update Highest |
| 6 | 0 | 67 | Stop | End loop |

---

### Explanation of the Columns:

1. **Step**: Indicates the step of execution in the program.
2. **Number**: The input number entered by the user at this step.
3. **Highest**: The current highest value stored in the variable.
4. **Condition**: Shows whether the condition (`Number > Highest`) is TRUE or FALSE.
5. **Action**: Indicates what action is taken (e.g., updating `Highest` or no change).

The trace table helps visualize how the values of variables change as the program runs and ensures the logic is correct.

---

### How It Works:

- The program starts with `Highest` set to a very low value.
- In the loop, the user enters a number.
- Each number is compared to `Highest`. If it’s greater, `Highest` is updated.
- The loop stops when the user enters 0.
- Finally, the highest number is displayed.

---

This simple algorithm is efficient and works for any set of inputs. Practice writing this pseudocode to strengthen your problem-solving skills!

---

## Finding the Lowest Value from Inputs in Pseudocode

Finding the lowest value from user inputs involves comparing each new input with the current lowest value. Here’s a simple explanation followed by a trace table.

---

### Step-by-Step Explanation:

1. **Initialize Variables**:
   - Use a variable to store the lowest value, e.g., `Lowest`.
   - Set it to a very high value initially (e.g., 9999), ensuring any number entered will be smaller.
2. **Input Numbers**:
   - Use a loop to get numbers from the user.
   - Exit the loop when a specific value (e.g., 0) is entered to signal the end.
3. **Compare Each Input**:
   - Check if the input number is smaller than the current `Lowest`.
   - If true, update `Lowest` with the new number.
4. **Output the Result**:
   - After processing all inputs, display the lowest value.

---

### Example in Pseudocode:

```
DECLARE Lowest: INTEGER

DECLARE Number: INTEGER

// Initialize the lowest value

Lowest ← 9999

REPEAT

OUTPUT "Enter a number (0 to stop):"

INPUT Number

IF Number < Lowest AND Number <> 0 THEN

Lowest ← Number

ENDIF

UNTIL Number = 0

OUTPUT "The lowest number entered is:", Lowest
```

---

### Input Example: `45, 23, 67, 12, 0`

---

### Trace Table

| Step | Number | Lowest | Condition (Number < Lowest) | Action |
| --- | --- | --- | --- | --- |
| 1 | – | 9999 | – | Initialize Lowest |
| 2 | 45 | 45 | TRUE | Update Lowest |
| 3 | 23 | 23 | TRUE | Update Lowest |
| 4 | 67 | 23 | FALSE | No change |
| 5 | 12 | 12 | TRUE | Update Lowest |
| 6 | 0 | 12 | Stop | End loop |

---

### How It Works:

1. **Initialization**: The `Lowest` variable starts with a high value (9999) to ensure any entered number will be smaller.
2. **Input Numbers**:
   - At Step 2, the user enters `45`, which updates `Lowest` because it’s less than `9999`.
   - At Step 3, the user enters `23`, which updates `Lowest` because it’s less than `45`.
   - At Step 4, the user enters `67`, which does not update `Lowest` because `67` is greater than `23`.
   - At Step 5, the user enters `12`, which updates `Lowest` because it’s less than `23`.
3. **Exit**: At Step 6, the user enters `0`, signaling the end of inputs.

---

### Final Output:

After the loop ends, the program outputs:  
`"The lowest number entered is: 12"`