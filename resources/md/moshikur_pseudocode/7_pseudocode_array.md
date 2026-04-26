# 7 PSEUDOCODE ARRAY

> Source: https://moshikur.com/pseudocode/6-pseudocode-array/

# 6 PSEUDOCODE – ARRAY

---

An array is a collection of elements, each identified by an array index. Each element in an array is of the same data type, and the size of the array determines how many elements it can hold.

# Practice Tasks

## [Basic](https://moshikur.com/pseudocode/6-pseudocode-array/6-1-pseudocode-tasks/)

---

## [Intermediate](https://moshikur.com/pseudocode/6-pseudocode-array/6-1-2-array-tasks-1-2/)

---

## [Advanced](https://moshikur.com/pseudocode/6-pseudocode-array/6-1-pseudocode-array-tasks-2/)

---

# [Linear Search](https://moshikur.com/pseudocode/6-pseudocode-array/6-2-pseudocode-linear-search/)

a simple searching algorithm that checks each element in a list one by one

# [2D Array](https://moshikur.com/pseudocode/9-pseudocode-2d-array/)

Understand 2D Arrays, a way to store data in rows and columns like a table or grid.

## Why Use Arrays?

In a variable, typically only one value can be stored at a time. Storing a new value replaces the old one. However, arrays allow us to store multiple values in a single variable. Each value in an array is assigned a unique index number, which we use to access or modify the value at that position.

| DECLARE score : INTEGER score <- 95 |
| --- |

In this example, the variable **score** is like a container that holds the integer value 95. If you change the score, the new value overwrites the old one:

| score <- 100  // Now the score is 100, not 95 score <- 56   // Now the score is 56, not 100 |
| --- |

What if we need to store values—95, 100, and 56—all in one variable named **score**? To do this, we must use the following approach:

| DECLARE scores : ARRAY[1:3] OF INTEGER scores[1] <- 95 scores[2] <- 100 scores[3] <- 56 |
| --- |

Now, all scores are part of one array variable named **scores**. Each score can be accessed using its index, like **scores[1]** for the first grade.

This is how the array “**scores”** values are stored in the computer’s memory:

| VALUE | 95 | 100 | 56 |
| --- | --- | --- | --- |
| INDEX | 1 | 2 | 3 |

Here, each box is an array element, and the numbers below are their respective index numbers.

## Declaring and Accessing Arrays

To declare an array, we specify the data type of its elements and the size of the array. For example, to declare an array named “numbers” capable of storing five integers, we would use the following syntax:

| DECLARE numbers: ARRAY [1:5] OF INTEGER |
| --- |

In computer memory the numbers array looks like this:

| | | | | |
| --- | --- | --- | --- | --- |
| numbers[1] | numbers[2] | numbers[3] | numbers[4] | numbers[5] |

Once declared, we can access individual elements of the array using their indices. Array indices start from 1 and go up to the size of the array. For example, to access the third element of the “numbers” array, we would use:

| OUTPUT numbers[3] |
| --- |

Initializing Arrays

Arrays can be initialized during declaration or later in the program. During initialization, we assign values to each element of the array. For example:

| DECLARE numbers: ARRAY [1:5] OF INTEGER numbers[1] <- 11 numbers[2] <- 120 numbers[3] <- 130 numbers[4] <- 404 numbers[5] <- 500 |
| --- |

In computer memory, with current values, the numbers array looks like this:

| 11 | 120 | 130 | 404 | 500 |
| --- | --- | --- | --- | --- |
| numbers[1] | numbers[2] | numbers[3] | numbers[4] | numbers[5] |

Outputting Values from an Array

Once we have inputted values into an array, we may want to output those values for display or further processing. We can use a loop to iterate through each element of the array and output its value. Here’s how we can achieve this:

| FOR i <- 1 TO 5 OUTPUT numbers[i] NEXT I |
| --- |

The pseudocode describes a loop that outputs values from the array **numbers**. Here’s a step-by-step breakdown focusing on how the index **i** operates:

## Inputting Values into an Array

To input values into an array from user input, we can use a loop to iterate through each element of the array and prompt the user to enter the corresponding value. Here’s how we can achieve this:

| DECLARE numbers: ARRAY [1:5] OF INTEGER FOR i <- 1 TO 5 OUTPUT “Enter number “ INPUT numbers[i] NEXT I |
| --- |

In this example, we declare an array named “numbers” capable of storing five integers. Then, we use a loop to iterate from 1 to 5, prompting the user to enter a number for each iteration. The inputted number is then stored in the corresponding index of the “numbers” array.

Putting It All Together

Now, let’s combine the input and output operations to create a program that inputs five numbers into an array and then outputs those numbers:

| DECLARE numbers: ARRAY [1:5] OF INTEGER FOR i <- 1 TO 5 OUTPUT “Enter number “, i, “: “ INPUT numbers[i] NEXT i OUTPUT “Numbers entered:” FOR i <- 1 TO 5 OUTPUT numbers[i] NEXT I |
| --- |

In this program, we first input five numbers into the “numbers” array using a loop. Then, we output the entered numbers to display them to the user.

## To add all the values in an array using pseudocode, you can follow these steps:

First, declare an array to hold the values.

| DECLARE numbers: ARRAY [1:5] OF INTEGER |
| --- |

Input Values into the Array: Use a loop to input values into the array. You can prompt the user to enter each value.

| FOR i <- 1 TO 5 OUTPUT “Enter value for position “, i INPUT numbers[i] NEXT I |
| --- |

Initialize Sum: Declare a variable to hold the sum of all the values and set it to zero initially.

| DECLARE totalSum: INTEGER totalSum <- 0 |
| --- |

Add Values in the Array: Iterate over the array and add each value to the sum.

| FOR i <- 1 TO 5 totalSum <– totalSum + numbers[i] NEXT I |
| --- |

Finally, output the total sum.

| OUTPUT “The total sum is: “, totalSum |
| --- |

Putting it all together, the complete pseudocode looks like this:

| DECLARE numbers: ARRAY [1:5] OF INTEGER DECLARE totalSum: INTEGER FOR i <– 1 TO 5 OUTPUT “Enter value for position “, i INPUT numbers[i] NEXT i totalSum <– 0 FOR i <– 1 TO 5 totalSum <– totalSum + numbers[i] NEXT i OUTPUT “The total sum is: “, totalSum |
| --- |

This pseudocode allows you to input values into an array, calculate the sum of all the values, and then output the total sum.

## To find and output all the negative values from an array using pseudocode, you can follow these steps:

Declare the Array: First, declare an array to hold the values.

| DECLARE numbers: ARRAY [1:5] OF INTEGER |
| --- |

Input Values into the Array: Use a loop to input values into the array. You can prompt the user to enter each value.

| FOR i <- 1 TO 5 OUTPUT “Enter value for position “, i INPUT numbers[i] NEXT i |
| --- |

Output Negative Values: Iterate over the array and check if each value is negative. If it is negative, output the value.

| OUTPUT “Negative Values:” FOR i <- 1 TO 5 IF numbers[i] < 0 THEN OUTPUT numbers[i] ENDIF NEXT I |
| --- |

Putting it all together, the complete pseudocode looks like this:

| DECLARE numbers: ARRAY [1:5] OF INTEGER FOR i <– 1 TO 5 OUTPUT “Enter value for position “, i INPUT numbers[i] NEXT i OUTPUT “Negative Values:” FOR i <– 1 TO 5 IF numbers[i] < 0 THEN OUTPUT numbers[i] ENDIF NEXT i |
| --- |

This pseudocode allows you to input values into an array, iterate over the array, identify negative values, and output them.

### Leave a Reply[Cancel reply](/pseudocode/6-pseudocode-array/#respond)