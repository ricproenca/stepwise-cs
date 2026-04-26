# Chapter 20: Further Programming

Source: https://moshikur.com/a2-level/a2-ch20-further-programming/

---

## 20.1 Programming Paradigms

"A programming paradigm is a way of thinking about how to solve a problem using a program."

### Low-Level Programming

Uses assembly or machine language for direct hardware control.

- Addressing modes: Immediate, Direct, Indirect, Indexed, Relative

| Advantages | Disadvantages |
|---|---|
| High performance | Difficult to write |
| Efficient memory use | Time-consuming |

### Imperative (Procedural) Programming

"Focuses on how a problem is solved step by step." Uses variables, control structures, and functions.

| Advantages | Disadvantages |
|---|---|
| Easy to understand | Can become complex with scale |
| Clear step-by-step structure | Code repetition without proper design |

### Object-Oriented Programming (OOP)

Groups data and behaviour into classes and objects.

**Key terms:**

| Term | Description |
|---|---|
| **Class** | Blueprint for creating objects |
| **Object** | Instance of a class |
| **Attribute** | Data stored in an object |
| **Method** | Function belonging to a class |
| **Instance** | A specific object created from a class |

**Advanced concepts:**

| Concept | Description |
|---|---|
| **Encapsulation** | Hiding internal data; access via getters/setters |
| **Inheritance** | A class inherits attributes and methods from a parent class |
| **Polymorphism** | Same method name behaves differently in different classes |
| **Aggregation** | One class contains a reference to another class |

| Advantages | Disadvantages |
|---|---|
| Code reusability through inheritance | Complex design |
| Manages large systems well | Requires careful planning |

### Declarative Programming

"Focuses on what the result should be, rather than how to achieve it." Uses facts and rules.

| Advantages | Disadvantages |
|---|---|
| Simpler for certain problem types | Less control over execution |
| High-level abstraction | Can be less efficient |

---

## 20.2 File Processing and Exception Handling

- Text file processing (read, write, append) — see Python resources
- Random file processing — direct access using seek/record position
- Exception handling — TRY-EXCEPT for graceful error management
