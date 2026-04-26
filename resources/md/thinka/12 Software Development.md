# 12 Software Development

**Course:** Cambridge International AS & A Level Computer Science (9618)
**Source:** Thinka

---

Welcome to Software Development (AS Level 9618)!
12.1 Program Development Life Cycle (PDLC)
12.2 Program Design
12.3 Program Testing and Maintenance
Welcome to Software Development (AS Level 9618)!

Hello! This chapter is incredibly important because it moves beyond just writing code and looks at the entire process of creating software, from the initial idea right up to the finished, working program and beyond. Think of this as learning the professional roadmap for building any successful app or system.

Understanding the **Software Development Life Cycle (SDLC)**, proper design techniques, and thorough testing will make you a much stronger computer scientist. Don't worry if the terminology seems heavy; we will break down each step with clear examples!

12.1 Program Development Life Cycle (PDLC)
What is the Purpose of a Development Life Cycle?

The **Program Development Life Cycle (PDLC)** is simply a structured framework that describes all the stages involved in building and maintaining software.

Why do we need it?
A PDLC ensures that projects are:

Managed efficiently (staying on budget and schedule).
Meeting the user's requirements (solving the right problem).
Tested thoroughly and documented clearly.
Able to be maintained and upgraded in the future.

The Stages of the Program Development Life Cycle

Although different models exist, the PDLC usually involves five core stages. A great way to remember them is the sequence: **A**nalysis, **D**esign, **C**oding, **T**esting, **M**aintenance (ADCTM).

1. Analysis (What should the program do?)
This is where the developer figures out the exact requirements and what the user actually needs. It involves gathering information and defining the scope of the problem.

2. Design (How will the program do it?)
Planning the structure of the solution. This involves creating algorithms, designing data structures, and deciding how different parts of the program will fit together (often using tools like structure charts).

3. Coding (Writing the instructions)
Translating the design (algorithms/pseudocode) into actual computer code using a chosen programming language.

4. Testing (Does the program work correctly?)
Systematically checking the code to find and correct errors (faults). This ensures the program meets the requirements defined in the analysis stage.

5. Maintenance (Keeping the program running)
Activities required after the software has been deployed to ensure it continues to function and meet evolving needs.

Different Development Life Cycles

The choice of life cycle depends entirely on the program's requirements, size, and how flexible the client is.

1. Waterfall Model

This is the classic, sequential approach. Each phase must be fully completed before the next phase can begin.
Analogy: Imagine painting a wall. You must finish prepping (Analysis) before you can paint the first coat (Coding), and you must finish the first coat before you can apply the second (Testing).

Benefits: Simple to manage, clear documentation at each stage, good for small, well-defined projects where requirements won't change.
Drawbacks: Very rigid, no flexibility. Errors found late in the cycle (e.g., in Testing) are very expensive and difficult to fix because you have to go all the way back to the Design or Analysis phase.

2. Iterative Model

The project is broken down into smaller mini-projects or "iterations". Each iteration goes through its own small cycle of analysis, design, coding, and testing, producing a functional piece of the system.
Analogy: Instead of building an entire car at once, you build a bicycle (Iteration 1), then add an engine to make a scooter (Iteration 2), then add wheels and bodywork to make a car (Iteration 3).

Benefits: Early feedback from users is possible, easier to manage risks, and adaptable to changing requirements.
Drawbacks: Requires strong management to prevent "scope creep" (when features are continuously added), and the final system architecture might be unstable if the initial design was poor.

3. Rapid Application Development (RAD)

RAD focuses heavily on creating rapid prototypes and involves intensive user collaboration throughout the process. It is used when time is critical and requirements are constantly evolving.

Benefits: Fast development time, high user satisfaction because users are involved from the start, quicker deployment.
Drawbacks: Less suitable for highly complex systems; documentation and testing can sometimes be rushed or incomplete; relies heavily on skilled developers and committed users.
Quick Review: PDLC Models

If a project has fixed, clear requirements, choose **Waterfall**.
If the project needs frequent feedback and requirements might change, choose **Iterative**.
If speed and user involvement are the highest priorities, choose **RAD**.

12.2 Program Design

The design stage is crucial for ensuring the code is logical, readable, and easy to maintain. We use specific tools to document this structure.

Structure Charts (Module Decomposition)

**Decomposition** is the process of breaking down a large, complex problem into smaller, more manageable sub-problems. In programming, these sub-problems become **modules** (procedures or functions).

A **Structure Chart** is a top-down diagram used to document this decomposition.

It shows the overall structure of the system.
Each box represents a module (procedure/function).
It shows how modules are connected.
Crucially, it shows the **parameters** (data) passed between modules.
Structure Chart Components:

When drawing a structure chart, you must show the parameters:

Data flowing down (from calling module to called module)
Data flowing up (the result or return value back to the calling module)

Example: A module called ProcessOrder might call a submodule called CalculateTax. The structure chart would show the 'Price' being passed down (input parameter) and the 'Tax Amount' being passed up (return parameter).

State-Transition Diagrams

A **State-Transition Diagram** is used to document an algorithm, particularly when dealing with systems that can only be in one specific condition (or "state") at any given time, like a simple machine or a user interface element.

Each node (circle) represents a possible **state** of the system (e.g., ON, OFF, WAITING).
Each arrow represents a **transition** (or event) that causes the system to move from one state to another (e.g., PUSH_BUTTON, TIMER_EXPIRED).

Example: A simple vending machine might have states like 'IDLE', 'COIN_INSERTED', and 'DISPENSING'. The action of inserting a coin causes the transition from 'IDLE' to 'COIN_INSERTED'.

Key Takeaway: Design Tools

Structure Charts show **hierarchy** and **data flow** (parameters).
State-Transition Diagrams show how an algorithm behaves over time in terms of different **states** and the **events** that trigger changes.

12.3 Program Testing and Maintenance
Exposing and Avoiding Faults (Errors)

Testing is essential. If a program has faults, it might crash, give incorrect results, or become vulnerable to security breaches.

The three main types of errors you need to locate and identify are:

1. Syntax Errors

These are errors in the grammar or rules of the programming language (e.g., misspelling a keyword, forgetting a bracket, or using a variable before declaration).
Finding them: They are usually caught by the compiler or interpreter before the program even runs. They are the easiest to correct.

2. Logic Errors

The program runs without crashing, but it produces the incorrect result because the underlying algorithm is wrong (e.g., using addition when subtraction was required, or using a loop that stops one iteration too early).
Finding them: These are the hardest to find, often requiring careful **dry run** or **walkthrough** analysis, and systematic testing with known test data.

3. Run-time Errors

These errors occur only while the program is executing, causing it to crash or freeze (e.g., attempting to divide by zero, accessing an array element outside its bounds, or running out of memory).
Finding them: Debuggers help identify the exact line where the crash occurred.

Testing Strategy and Data

A good development process requires a clear **Test Strategy** (what is the overall approach?) and a detailed **Test Plan** (which exact tests will be run, and what is the expected outcome?).

Choosing Appropriate Test Data

To ensure robustness, test data must cover all possibilities:

Normal Data: Data that is valid, sensible, and within the expected limits. (e.g., if input must be between 1 and 10, use 5).
Extreme / Boundary Data: Data that falls exactly on the limits of what is considered acceptable. (e.g., if input must be between 1 and 10, use 1 and 10).
Abnormal Data: Data that is invalid, nonsensical, or outside the expected limits. This tests how the program handles errors (e.g., if input must be between 1 and 10, use 0, 11, or input a letter).
Testing Methods

1. Desk Checking and Walkthroughs

Dry Run: The programmer manually steps through the code using a set of test data and records the changing values of variables in a trace table. This helps find logic errors early.
Walkthrough: A team of programmers review the code together, line by line, to check for logic errors and adherence to standards.

2. Black-Box and White-Box Testing

Black-Box Testing: Tests the program based purely on its inputs and outputs, without knowing how the internal code works. (Focuses on functionality and requirements).
White-Box Testing: Tests the internal structure, logic, and paths of the code. The tester must know the source code. (Used to ensure every line or path of the code is executed at least once).

3. Integration and Acceptance Testing

Integration Testing: Checks that separate modules or components work together correctly when combined. (Often involves using temporary placeholder modules called **stubs**).
Alpha Testing: Testing carried out by internal staff (e.g., the programmers themselves or internal QA team) before release to the public.
Beta Testing: Testing carried out by a limited number of external, real-world users who report any bugs or issues found.
Acceptance Testing: Formal testing performed by the client or end-user to confirm the system meets all contracted requirements before they formally accept the software.
Program Maintenance

Maintenance is the longest and often most expensive phase of the PDLC. It happens after the software has been released. There are three types:

1. Corrective Maintenance

Fixing bugs or errors that were discovered after the system went live (e.g., fixing a logic error that causes a crash when printing a report).

2. Adaptive Maintenance

Modifying the system to cope with changes in the operating environment or technology (e.g., updating the code to work with a new version of the operating system, or changing tax calculation rules due to new government policy).

3. Perfective Maintenance

Improving the efficiency, performance, or user interface of the program, often adding non-essential features requested by users or streamlining existing code. (This makes a working program better).

Did You Know?

It is estimated that maintenance can account for up to 70% of the total cost of developing and owning a piece of software over its lifetime! This is why robust design and testing are so important from the beginning.

Ready to test yourself?

Turn these notes into exam-style practice. Get unlimited AI questions on this topic with instant marking and explanations.

Practice This Topic
More Computer Science (9618) chapters
Information representation
Communication
Hardware
Processor Fundamentals
System Software
Security, privacy and data integrity

* The content provided by thinka is generated by AI and may not always be accurate or up-to-date. Please use it as a supplementary resource and verify with official materials.

Put These Notes into Practice

Reading the notes is a great start. Now practise with unlimited AI-generated questions and get instant feedback. 100,000+ students are already improving their grades.

Start Practising Now
View Pricing