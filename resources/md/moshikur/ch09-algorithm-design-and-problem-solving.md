# Chapter 09: Algorithm Design and Problem-Solving

Sources:
- https://moshikur.com/as-level/as-ch09-algorithm-design-and-problem-solving/9-1-computational-thinking-skills/
- https://moshikur.com/as-level/as-ch09-algorithm-design-and-problem-solving/9-2-algorithms/
- https://moshikur.com/as-level/as-ch09-algorithm-design-and-problem-solving/9-2-algorithms/9-2-structured-english/
- https://moshikur.com/as-level/as-ch09-algorithm-design-and-problem-solving/9-2-algorithms/9-2-7-stepwise-reginement/

---

## 9.1 Computational Thinking Skills

Computational thinking means "thinking like a computer scientist" — solving problems in a structured, logical way that computers can process.

### 9.1.1 Identify Inputs and Outputs

- **Input** — data provided to the system
- **Output** — results returned by the system

Example: Tea machine → Inputs: water, tea, sugar, milk → Output: cup of tea

### 9.1.2 Determine Steps and Decisions

Plan the algorithm and identify **decision points** (yes/no branches). Each decision point represents a branch in the logical flow.

### 9.1.3 Is It Computable?

| Computable | Non-Computable |
|---|---|
| Determining if a number is even or odd | Assessing if someone is happy (emotions are not objectively definable) |
| Sorting a list of names | "Who is the best person?" |

### 9.1.4 Identify Sub-Procedures and Modules

Break large problems into smaller, named modules/functions. Improves organisation and maintainability.

Example: Pizza-making → sub-procedures: prepare dough, make sauce, add toppings, bake.

### 9.1.5 Abstraction

Focus on **essential** details; hide unnecessary complexity.

Example: Google Maps shows routes without exposing GPS mechanics or satellite connectivity.

### 9.1.6 Identify Reusable Components

Solutions often contain transferable code reusable across multiple programs.

Example: Rectangle area calculation → reused in school projects, games, drawing apps.

---

## Decomposition

Breaks a complex problem into smaller, manageable parts that can be understood, tested, and reused independently.

**Steps:**
1. Understand the goal
2. Break into main tasks
3. Further divide into sub-tasks
4. Solve and test individually

**Examples:**

| Problem | Sub-tasks |
|---|---|
| Calculator app | Input numbers → Choose operation → Perform calculation → Display result → Handle invalid input |
| Snake game | Setup window → Draw snake → Move snake → Detect collisions → Eat food → Display score → End game |

---

## 9.2 Algorithms

An algorithm is "a solution to a problem expressed as a sequence of defined steps."

### Algorithm Representations

| Method | Description |
|---|---|
| Pseudocode | Structured code-like notation without specific language syntax |
| Structured English | Plain English in a clear, logical, structured format |
| Flowcharts | Visual diagrams showing the flow of an algorithm |
| Stepwise refinement | Iterative decomposition into increasingly detailed steps |

### Core Constructs

Every algorithm uses three fundamental constructs:

1. **Sequence** — steps executed in order
2. **Selection** — conditional branching (IF/CASE)
3. **Iteration** — repetition (FOR, WHILE, REPEAT...UNTIL)

### Identifier Tables

Use **meaningful identifier names**. Document variable names and their purpose/type in an identifier table alongside algorithms.

---

## 9.2 Structured English

A way to write algorithm steps using plain English in a clear, structured format — a bridge between a problem description and pseudocode.

**Key characteristics:**

| Feature | Example |
|---|---|
| Simple language | "Ask the user for a number" |
| Control structures | IF, REPEAT, WHILE |
| Sequential steps | Numbered progression |
| Indentation | Shows nested logic |
| No code syntax | No brackets, semicolons, or language-specific keywords |

**Mapping to pseudocode:**

| Structured English | Pseudocode |
|---|---|
| "Set total to 0" | `Total ← 0` |
| "Repeat 5 times" | `FOR i ← 1 TO 5` |
| "If age is 18 or over" | `IF Age >= 18 THEN` |

---

## 9.2 Stepwise Refinement

A structured method that starts with a high-level outline and progressively breaks each step into smaller, more detailed sub-steps until every step is simple enough to write directly as pseudocode.

**Three key stages:**
1. Write the main high-level steps (3–5 broad tasks)
2. Break each step into detailed sub-steps
3. Keep refining until every step is a single, clear, directly codeable action

**When to stop:** when each task is specific enough to write as one pseudocode statement.

### Example: Cinema Ticket Booking System

**Stage 1 — High-level steps:**

| Step | Description |
|---|---|
| 1 | Display available movies |
| 2 | Take user's movie selection |
| 3 | Take number of tickets |
| 4 | Calculate total cost |
| 5 | Display booking summary |

**Stage 2 — Refined step 2:**
- 2.1 Ask user to select a movie
- 2.2 Check if choice is valid (1, 2, or 3)
- 2.3 If invalid, display error and ask again

**Stage 3 — Refined step 3:**
- 3.1 Ask user to input number of tickets
- 3.2 Check if number is between 1 and 10
- 3.3 If invalid, ask for re-entry

**Final pseudocode (step 3):**
```
REPEAT
    OUTPUT "Enter number of tickets (1 to 10):"
    INPUT TicketCount
UNTIL (TicketCount >= 1) AND (TicketCount <= 10)
```

### Example: Password Creation System (Refined)

**Step 1** — Input password: `OUTPUT "Enter password"` → `INPUT password`

**Step 2** — Length check:
```
IF LENGTH(password) < 8 THEN
    OUTPUT "Too short" → go back
```

**Step 3** — Check for letters and numbers:
```
Set LetterFound ← FALSE, NumberFound ← FALSE
FOR each character in password:
    IF character is a letter THEN LetterFound ← TRUE
    IF character is a digit THEN NumberFound ← TRUE
IF NOT (LetterFound AND NumberFound) THEN output error
```

**Step 4** — Confirm: `OUTPUT "Password accepted"`

---

## Algorithm Testing

Comprehensive evaluation ensuring algorithms function correctly across all input scenarios.

| Test Type | Description | Example |
|---|---|---|
| **Normal data** | Valid inputs the algorithm is designed to handle | Age = 25 for age check |
| **Boundary data** | Values at the edge of the valid range | Age = 0 or Age = 120 |
| **Erroneous data** | Invalid inputs that should be rejected | Age = -5 or Age = "hello" |

### Trace Tables

Follow algorithm execution step-by-step to verify correctness. Record each variable's value after each step to identify logic errors.
