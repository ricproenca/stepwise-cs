# Practice Tasks

> Source: https://moshikur.com/pseudocode/6-pseudocode-basic-operations/practice-tasks/

# Practice Tasks

---

Practice Task 1

### **A company wants to calculate the cost of delivering parcels.**

**(a)** Write a pseudocode statement to accept only a parcel weight between 1.0 and 20.0 kilograms. [2]

**(b)** The company offers three delivery types. Write a pseudocode statement that only accepts a valid menu choice of 1, 2, or 3. The delivery types are:

- 1 → Same day delivery
- 2 → Next day delivery
- 3 → Standard delivery (3–5 days)  
  [2]

**(c)** Write a complete pseudocode algorithm that:

- accepts a parcel weight between 1.0 and 20.0 kilograms
- displays a menu of the three delivery types
- calculates and outputs the cost based on the menu selection using the rules below:

| Option | Delivery Type | Cost Rule |
| --- | --- | --- |
| 1 | Same day delivery | weight × 12 + 5 |
| 2 | Next day delivery | weight × 10 |
| 3 | Standard delivery (3–5 days) | $8 flat rate |

[6]

>> Click for hints

---

**(a) Hint:**  
Use an `IF` statement to check if the **weight** is between 1.0 and 20.0.  
Make sure you use **AND** to check both conditions together.  
📌 **Remember:** Use `INPUT` to get the weight before checking.

---

**(b) Hint:**  
Create a **menu** showing the delivery options (1, 2, or 3) using `OUTPUT`.  
Then use an `IF` statement (or `REPEAT UNTIL`) to accept the choice only if it is 1, 2, or 3.  
📌 You may use a `REPEAT` loop like this:

```
REPEAT
  INPUT DeliveryType
UNTIL DeliveryType = 1 OR DeliveryType = 2 OR DeliveryType = 3
```

---

**(c) Hint:**  
Start by:

1. Asking the user to enter the parcel weight (use `INPUT`)
2. Showing the menu (use `OUTPUT`)
3. Getting the user’s choice
4. Using `IF...THEN` or `CASE...OF` to calculate the cost based on the selected option.

📌 **Important:**

- Use a `REAL` type for the weight
- Use `INTEGER` for the menu option
- Output the cost clearly at the end.

---

---

Practice Task 2