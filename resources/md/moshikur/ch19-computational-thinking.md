# Chapter 19: Computational Thinking and Problem-Solving

Source: https://moshikur.com/a2-level/a2-ch19-computational-thinking-and-thinking/19-2-recursion/

---

## 19.2 Recursion

"Recursion is when a function calls itself within its own definition." Works like nested Russian dolls — each call breaks a problem into smaller, similar subproblems until reaching a base case.

### Essential Components

**Base Case** — the stopping condition; the simplest case the function can solve without calling itself.

**Recursive Step** — the function calls itself with modified parameters, reducing problem size progressively.

### Code Examples

**Countdown:**
```python
def countdown(number):
    if number <= 0:             # base case
        print("Blast off!")
    else:
        print(number)
        countdown(number - 1)   # recursive call

countdown(5)
```

**Factorial:**
```python
def factorial(n):
    if n == 0:
        return 1                # base case
    else:
        return n * factorial(n - 1)

result = factorial(5)           # 120
```

**String reversal:**
```python
def reverse_string(s):
    if s == "":
        return ""
    else:
        return reverse_string(s[1:]) + s[0]
```

**Fibonacci sequence:**
```python
def fibonacci(n):
    if n == 1 or n == 2:
        return 1
    else:
        return fibonacci(n - 1) + fibonacci(n - 2)
```

**Denary to binary:**
```python
def denary_to_binary(n):
    if n == 0:
        return "0"
    else:
        return denary_to_binary(n // 2) + str(n % 2)

print(denary_to_binary(13))     # 1101
```

**Recursive binary search:**
```python
def binary_search(arr, left, right, target):
    if left > right:            # base case
        return -1
    mid = (left + right) // 2
    if arr[mid] == target:
        return mid
    elif arr[mid] > target:
        return binary_search(arr, left, mid - 1, target)
    else:
        return binary_search(arr, mid + 1, right, target)
```

### Call Stack Behaviour

**Calling phase** — function calls stack up until the base case is reached.

**Unwinding phase** — return values propagate back up the chain. Code written **before** the recursive call executes during descent; code **after** executes during unwinding.

Compilers manage recursion through the **call stack** — each call gets a new frame containing local variables, return address, and parameters. Deep recursion risks **stack overflow**.

### When to Use Recursion

**Use recursion when:**
- Problem has naturally recursive structure (factorial, Fibonacci)
- Working with recursive data structures (binary trees, graphs)
- Implementing divide-and-conquer algorithms (merge sort, quicksort, binary search)
- Recursive code is cleaner than iterative alternatives

**Avoid recursion when:**
- Recursion depth is excessive
- Iterative solution is more efficient
- Memory is constrained
