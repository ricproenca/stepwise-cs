# Chapter 12: Software Development

Sources:
- https://moshikur.com/as-level/as-ch12-12-software-development/12-1-program-development-life-cycle/
- https://moshikur.com/as-level/as-ch12-12-software-development/12-2-program-design/
- https://moshikur.com/as-level/as-ch12-12-software-development/12-3-program-testing-and-maintenance/

---

## 12.1 Program Development Life Cycle (PDLC)

A structured process that guides developers through all phases of creating a program.

**Why use PDLC:**
1. Clear structure and planning — breaks development into stages with defined goals
2. Better communication — teams understand project status
3. Improved quality — built-in checks find errors early
4. Time and cost efficiency — proper planning prevents wasted resources
5. Easier maintenance — well-organised code simplifies future updates
6. Meeting user requirements — user-focused analysis ensures relevant solutions

### Five Main Stages

#### 1. Analysis

Understand the problem and user needs before design begins.

- Identify the specific problem to solve
- Gather requirements (interviews, observation)
- Define project scope (what is and is not included)
- Produce a requirements specification document

#### 2. Design

Plan program structure before coding begins.

- User interface layout and navigation
- Data structure organisation (arrays, records, lists)
- Algorithm development (pseudocode, flowcharts)
- System architecture — module relationships

Tools: structure charts, state-transition diagrams, pseudocode, flowcharts.

#### 3. Coding (Implementation)

Translate the design into working program code.

- Write code in chosen programming language
- Use meaningful identifier names, comments, and consistent formatting
- Develop modular components and test them individually

#### 4. Testing

Verify the program meets requirements and functions correctly.

| Test Data Type | Description | Example |
|---|---|---|
| **Normal data** | Valid input within expected range | Mark = 65 (range 0–100) |
| **Boundary data** | Values at the edge of the valid range | Mark = 0, Mark = 100 |
| **Extreme data** | Values far beyond valid limits | Mark = -999, Mark = 5000 |
| **Invalid/Abnormal data** | Wrong type or format | Mark = "hello" |

#### 5. Maintenance

Support software after delivery.

| Type | Description | Example |
|---|---|---|
| **Corrective** | Fixes bugs discovered after release | Patching a crash on large file upload |
| **Perfective** | Enhances features based on user feedback | Adding dark mode |
| **Adaptive** | Updates for OS changes, new hardware, or legal requirements | Updating for new tax rules |

---

### Three Lifecycle Models

#### Waterfall Model

Linear progression — each stage completes fully before the next begins.

| Advantages | Disadvantages |
|---|---|
| Simple and easy to follow | Inflexible once a stage is complete |
| Well-documented at each stage | No early user visibility of working software |
| Suits small, well-defined projects | Difficult when requirements change |
| Easy progress tracking | Late-stage error discovery increases cost |

**Best for:** Small, simple projects with fixed, unchanging requirements.

#### Iterative Model

Repeated cycles — builds small sections, reviews, then improves.

| Advantages | Disadvantages |
|---|---|
| Accommodates changes between cycles | Overkill for simple projects |
| Incorporates user feedback throughout | Requires detailed change planning |
| Early problem detection | Risk of scope creep |
| Working versions appear quickly | Needs experienced developers |

**Best for:** Large, complex systems expecting frequent changes or requiring ongoing user involvement.

#### Rapid Application Development (RAD)

Multiple teams work simultaneously on different modules using prototypes and quick feedback loops.

| Advantages | Disadvantages |
|---|---|
| Faster overall development | Requires highly skilled teams |
| Early user feedback on prototypes | Demands strong modular design capability |
| Quick adaptation to feedback | Complex multi-team coordination |
| Simplified maintenance per module | Unnecessarily complex for simple projects |

**Best for:** Large projects requiring speed, early results, and independently buildable modules.

---

## 12.2 Program Design

### Structure Charts

Hierarchical visual diagrams showing how a program is divided into modules and how they call each other. Shows the overall structure without implementation detail.

### State-Transition Diagrams

Diagrams showing how a program moves between different **states** in response to events or inputs.
- **States** — distinct conditions the program can be in
- **Transitions** — changes between states triggered by events
- **Events** — inputs or conditions that cause a transition

---

## 12.3 Program Testing and Maintenance

### 12.3.1 Types of Errors

| Error Type | Description | Example |
|---|---|---|
| **Syntax error** | Violates language rules; detected by compiler/interpreter | `print("Hello"` — missing closing parenthesis |
| **Logic error** | Code runs but produces wrong results due to flawed algorithm | Using `*` instead of `+` in a calculation |
| **Run-time error** | Occurs during execution; program crashes | Division by zero when user enters 0 |

---

### 12.3.2 Types of Testing

| Type | Performer | Focus |
|---|---|---|
| **Dry run** | Developer alone | Manual logic tracing without executing code |
| **Walkthrough** | Team | Group code review and discussion |
| **White-box** | Developer | Tests internal logic and all possible branches |
| **Black-box** | Tester | Tests input/output only; ignores internal code |
| **Integration** | Developer/Tester | Verifies modules work correctly together |
| **Alpha** | Developers | In-house testing before any external release |
| **Beta** | Real users | External testing before official launch |
| **Acceptance** | Client | Final approval that software meets requirements |
| **Stub** | Developer | Tests modules early using temporary placeholder modules |

---

### 12.3.3 Test Plan

A detailed checklist used to organise and record testing:

| Column | Description |
|---|---|
| Test case | Component or function being tested |
| Test data | Input values used |
| Expected output | The correct result |
| Actual output | What the program produced |
| Pass/Fail | Whether the test succeeded |

**Benefits:** ensures complete coverage, provides proof of functionality, supports debugging, and allows tests to be repeated.

---

### 12.3.4 Types of Test Data

| Type | Description | Example (age input, valid 1–100) |
|---|---|---|
| **Normal** | Typical valid input | 25 |
| **Boundary** | Values at edges of valid/invalid range | 1, 100, 0, 101 |
| **Extreme** | Far outside valid range | -999, 5000 |
| **Abnormal/Invalid** | Wrong type or format | "hello", -5 |

> "Most errors happen at the edges" — boundary testing is critical.

---

### 12.3.5 System Maintenance

| Type | Description |
|---|---|
| **Corrective** | Fixes bugs discovered after deployment |
| **Perfective** | Improves or adds features based on user feedback |
| **Adaptive** | Updates software for new OS, hardware, or legal requirements |
