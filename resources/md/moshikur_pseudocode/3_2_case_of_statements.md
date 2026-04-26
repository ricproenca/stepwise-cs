# 3.2 CASE OF STATEMENTS

> Source: https://moshikur.com/pseudocode/3-conditional-statements/3-2-case-of-statements/

# 3.2 CASE OF STATEMENTS

---

# **Understanding CASE…OF Statement**

The **CASE…OF** statement is used in programming when you have multiple conditions to check. It’s like a menu – you choose one option based on the value of a variable.

[![Flowchart demonstrating a case statement based on the day of the week with options for 'Monday', 'Tuesday', 'Wednesday', and 'otherwise'.](images/pseudocode/3_2_case_of_statements/img_001.png)](https://i0.wp.com/moshikur.com/wp-content/uploads/2026/02/image-22.png?ssl=1)

---

### **How Does It Work?**

1. **CASE**: Start by checking the value of a variable.
2. **OF**: List the possible values and what to do for each one.
3. **OTHERWISE**: (Optional) Specify what to do if none of the values match.

---

### **Structure**

```
CASE OF <variable>

<value1>: <instructions>

<value2>: <instructions>

...

OTHERWISE:

<instructions>

ENDCASE
```

---

### **Example: Display a Day of the Week**

```
DECLARE Day: INTEGER

INPUT Day

CASE OF Day

1: OUTPUT "Monday"

2: OUTPUT "Tuesday"

3: OUTPUT "Wednesday"

4: OUTPUT "Thursday"

5: OUTPUT "Friday"

6: OUTPUT "Saturday"

7: OUTPUT "Sunday"

OTHERWISE: OUTPUT "Invalid day"

ENDCASE
```

**Explanation**:

- The program checks the value of `Day`.
- If `Day = 1`, it outputs “Monday.” If `Day = 2`, it outputs “Tuesday,” and so on.
- If the value doesn’t match any case (like 8 or 0), it goes to the **OTHERWISE** block and outputs “Invalid day.”

---

### **Why Use CASE…OF?**

- It’s simpler than writing multiple **IF…THEN…ELSE IF** statements.
- Best for situations where you check one variable against many possible values.

---

### **Key Points**

1. Use **CASE…OF** when you have one variable and many possible values.
2. The **OTHERWISE** block handles unexpected values.
3. Always close with **ENDCASE**.

---

### **Quick Comparison: CASE…OF vs IF…THEN**

- **CASE…OF**: Best for one variable with many specific options.
- **IF…THEN**: Best for more complex conditions or when checking multiple variables.

---

## TASKS

Using the example tasks as a guide, complete all tasks listed on the right side.

---

**Example Task:** Write pseudocode to input a fruit name (‘Apple’, ‘Banana’, ‘Orange’) and output its color:

- Apple = Red
- Banana = Yellow
- Orange = Orange

```
DECLARE Fruit: STRING

INPUT Fruit

CASE OF Fruit

"Apple": OUTPUT "Red"

"Banana": OUTPUT "Yellow"

"Orange": OUTPUT "Orange"

OTHERWISE: OUTPUT "Unknown fruit"

ENDCASE
```

**Task 1:** Input a vegetable name (‘Carrot’, ‘Spinach’, ‘Potato’) and output its type:  
  
Carrot = Root  
Spinach = Leaf  
Potato = Root.

---

**Example Task:** Write pseudocode to input a number (1 to 5) and output the corresponding movie rating: 1 = Terrible, 2 = Bad, 3 = Average, 4 = Good, 5 = Excellent.

```
DECLARE Rating: INTEGER

INPUT Rating

CASE OF Rating

1: OUTPUT "Terrible"

2: OUTPUT "Bad"

3: OUTPUT "Average"

4: OUTPUT "Good"

5: OUTPUT "Excellent"

OTHERWISE: OUTPUT "Invalid rating"

ENDCASE
```

**Task 2:** Input a number (1 to 3) and output the corresponding level: 1 = Beginner, 2 = Intermediate, 3 = Advanced.

---

**Example Task 5:** Write pseudocode to input a traffic light color (‘Red’, ‘Yellow’, ‘Green’) and output the corresponding action:

- Red = Stop
- Yellow = Slow Down
- Green = Go.

```
DECLARE Light: STRING

INPUT Light

CASE OF Light

"Red": OUTPUT "Stop"

"Yellow": OUTPUT "Slow Down"

"Green": OUTPUT "Go"

OTHERWISE: OUTPUT "Invalid color"

ENDCASE
```

**Task 3:** Input a weather condition (‘Rainy’, ‘Sunny’, ‘Cloudy’) and output the corresponding recommendation:  
  
Cloudy = Take a jacket.  
Rainy = Take an umbrella.  
Sunny = Wear sunglasses.

---