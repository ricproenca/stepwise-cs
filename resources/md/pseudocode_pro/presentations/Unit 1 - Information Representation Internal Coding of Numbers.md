# Unit 1 - Information Representation Presentation

## Internal Coding of Numbers

### Class Overview

- Representing negative binary numbers
- Signed magnitude, one’s complement, two’s complement
- Advantages/disadvantages of each

### Internal Coding of Numbers

- This chapter will focus on integers – chapter 16 in A2 will focus on floating/fixed point numbers

### Signed vs Unsigned

- We mentioned the terms “signed” and “unsigned” numbers (could be integers, reals/floats etc) – do you remember the difference?
- Unsigned = no sign (+ or -), hence positive by default
- Signed = positive or negative

### Two’s Complement vs One’s Complement vs Signed Magnitude

- Traditionally, there have been 3 different approaches to represent the sign of a number:
- Signed magnitude
- One’s complement
- Two’s complement
- The book mentions all 3 – these days, 99.99999% of devices use two’s complement

### Signed magnitude

- The simplest method for humans to understand – the most significant bit is simply the sign bit – 0 = positive; 1 = negative
- For example, using 4 bits:

- Again:
- 0 is +
- 1 is -

| 6 | 0 | 1 | 1 | 0 |
| --- | --- | --- | --- | --- |
| -6 | 1 | 1 | 1 | 0 |

### Signed magnitude

- What do the words “sign” and “magnitude” mean?
- Sign is whether the number is positive or negative
- Magnitude is the ‘size’ of the number – equivalent to the absolute value
- i.e. the magnitude of 5 = |-5|
- This is why it’s called “signed magnitude” – since it words by simply adding a sign in front of the magnitude (this is how we write numbers on paper too…though we omit the plus sign – i.e. we write +5 as simply 5)

### Signed magnitude: questions

- ?

- ?

- ?

| 7 | 0 | 1 | 1 | 1 |
| --- | --- | --- | --- | --- |
| -7 | 1 | 1 | 1 | 1 |

| 79 | 0 | 1 | 0 | 0 | 1 | 1 | 1 | 1 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| -79 | 1 | 1 | 0 | 0 | 1 | 1 | 1 | 1 |

| 104 | 0 | 1 | 1 | 0 | 1 | 0 | 0 | 0 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| -104 | 1 | 1 | 1 | 0 | 1 | 0 | 0 | 0 |

### Signed magnitude

- Do you remember the biggest number we could represent with 8 bits using an unsigned representation?
- 28 – 1 = 255
- When dealing with 8-bit unsigned numbers, how many bits contributed to the magnitude? How many bits contribute for the magnitude in signed magnitude?
- Unsigned = all 8 bits used for magnitude
- Signed-magnitude: 7 bits used for magnitude (since 1 bit used for sign)

### Signed magnitude

- Hence, what would be the biggest and smallest (i.e. most negative) number with could represent with 8 bit signed magnitude
- Biggest = 127 = 01111111
- Smallest = -127 = 11111111
- What would be a formula to represent the biggest/smallest numbers using n-bits for signed magnitude?
- ±2n-1 - 1

### Signed magnitude

- While it may seem like signed magnitude solves the problem of representing negative numbers, signed magnitude doesn’t work well for arithmetic – let’s try the calculation 5 + (-5) – what would we expect the answer to be in binary?

- Expected answer: 0 = 0000
- Hence, arithmetic doesn’t work with signed magnitude…so we need a different approach…

| Carry | 1 |  | 1 |  |
| --- | --- | --- | --- | --- |
| 5 | 0 | 1 | 0 | 1 |
| -5 | 1 | 1 | 0 | 1 |
| = | 0 | 0 | 1 | 0 |

### Signed magnitude

- Question: what do the numbers 0000 and 1000 represent?
- +0 and -0 – it’s both wasteful and strange that there are 2 representations of zero
- This is also one reason that causes arithmetic not to work correctly with signed magnitude
- It is possible to design circuitry to correctly perform signed magnitude arithmetic – but it is complex, inefficient and more expensive than the best alternative (two’s complement)

### One’s complement

- We saw signed magnitude had 2 issues – another approach was developed to try to solve this
- One’s complement simply means flipping/inverting/negating the bits to convert from positive to negative and vice-versa – for example:
- 5 = 0101
- -5 = 1010
- Note: there is no sign bit – all bits contribute to the magnitude

### One’s complement: questions

- ?

- ?

- ?

| 3 | 0 | 0 | 1 | 1 |
| --- | --- | --- | --- | --- |
| -3 | 1 | 1 | 0 | 0 |

| 26 | 0 | 0 | 0 | 1 | 1 | 0 | 1 | 0 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| -26 | 1 | 1 | 1 | 0 | 0 | 1 | 0 | 1 |

| 107 | 0 | 1 | 1 | 0 | 1 | 0 | 1 | 1 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| -107 | 1 | 0 | 0 | 1 | 0 | 1 | 0 | 0 |

### One’s Complement Arithmetic

- While it may seem like one’s complement solves the problem of representing negative numbers, one’s complement also doesn’t work well for arithmetic – let’s try the calculation 5 + (-5) – what would we expect the answer to be in binary?

- Expected answer: 0 = 0000
- 1111 is a strange answer…but technically not wrong in one’s complement

| Carry |  |  |  |  |
| --- | --- | --- | --- | --- |
| 5 | 0 | 1 | 0 | 1 |
| -5 | 1 | 0 | 1 | 0 |
| = | 1 | 1 | 1 | 1 |

### One’s Complement – Zero?

- How would you represent 0 in one’s complement?
- There are actually 2 ways – 0000 and 1111
- i.e. a +0 and a -0 – again, this is redundant and is why the arithmetic doesn’t work
- If you try some more additions in one’s complement, you’ll notice the answer is always 1 less than what it should be – i.e. something like 9 + -3 would equal 5, not 6
- 9           = 1001
- -3          = 1100
- answer = 0101

### One’s complement

- We said 1’s complement will result in an error by -1 for arithmetic
- If you looks at 2’s compliment, the negative values are +1 compared to 1’s compliment – there is also only 1 zero and -8

| Decimal | Signed magnitude | 1’s compliment | 2’s compliment |
| --- | --- | --- | --- |
| 7 | 0111 | 0111 | 0111 |
| 6 | 0110 | 0110 | 0110 |
| 5 | 0101 | 0101 | 0101 |
| 4 | 0100 | 0100 | 0100 |
| 3 | 0011 | 0011 | 0011 |
| 2 | 0010 | 0010 | 0010 |
| 1 | 0001 | 0001 | 0001 |
| 0 | 0000 | 0000 | 0000 |
| -0 | 1000 | 1111 |  |
| -1 | 1001 | 1110 | 1111 |
| -2 | 1010 | 1101 | 1110 |
| -3 | 1011 | 1100 | 1101 |
| -4 | 1100 | 1011 | 1100 |
| -5 | 1101 | 1010 | 1011 |
| -6 | 1110 | 1001 | 1010 |
| -7 | 1111 | 1000 | 1001 |
| -8 |  |  | 1000 |

### Two’s Complement

- Now we’ll look at two’s complement – this is what is actually used in 99.99999% of modern computers
- This approach works by making the most significant bit negative – for example, with 4 bits, 5 and -5 would be represented as:

- 4 + 1 = 5

- -8 + 2 + 1 = -5

|  | -8 | 4 | 2 | 1 |
| --- | --- | --- | --- | --- |
| 5 | 0 | 1 | 0 | 1 |
| -5 | 1 | 0 | 1 | 1 |

### Two’s Complement Arithmetic

- Let’s again try 5 + -5 (i.e. 5 – 5), this time using the two’s complement representation

- As we can see, arithmetic with two’s complement works
- Hence, this is what computers actually use

| Carry | 1 | 1 | 1 |  |
| --- | --- | --- | --- | --- |
| 5 | 0 | 1 | 0 | 1 |
| -5 | 1 | 0 | 1 | 1 |
| = | 0 | 0 | 0 | 0 |

### Two’s Complement

- Suppose we want to represent -102 in two’s complement – what would the value of the most significant bit be/how many bits would we need?
- -128 – so we need 8 bits
- Our logic can be -128 + n = -102
- n would be 26 – so we need the other 7 bits to add up to 26

|  | -128 | 64 | 32 | 16 | 8 | 4 | 2 | 1 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| -102 | 1 | 0 | 0 | 1 | 1 | 0 | 1 | 0 |

### Two’s Complement

- ?

- ?

- ?

|  | -8 | 4 | 2 | 1 |
| --- | --- | --- | --- | --- |
| -7 | 1 | 0 | 0 | 1 |

|  | -128 | 64 | 32 | 16 | 8 | 4 | 2 | 1 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| -35 | 1 | 1 | 0 | 1 | 1 | 1 | 0 | 1 |

|  | -128 | 64 | 32 | 16 | 8 | 4 | 2 | 1 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| -76 | 1 | 0 | 1 | 1 | 0 | 1 | 0 | 0 |

### Two’s Complement – Converting from Positive to Negative

- To convert from a positive number – say 12 – to it’s negative equivalent – i.e. -12, we simply “flip the bits & add 1” – so remember this rule
- When thinking about one’s compliment, do you know why we need to add 1 for two’s complement?
- Since arithmetic answers in one’s compliment were always off by -1 – so if we add 1, the answer will be correct

### Two’s Complement – Converting from Positive to Negative

- Let’s try converting from 12 to -12 – how many bits do we need?

- Now we need to add 1

- -16 + 4 = -12
- so it’s correct

|  | -16 | 8 | 4 | 2 | 1 |
| --- | --- | --- | --- | --- | --- |
| 12 | 0 | 1 | 1 | 0 | 0 |
| Flip bits | 1 | 0 | 0 | 1 | 1 |

| Carry |  |  | 1 | 1 |  |
| --- | --- | --- | --- | --- | --- |
| Flipped | 1 | 0 | 0 | 1 | 1 |
| Add 1 | 0 | 0 | 0 | 0 | 1 |
| = | 1 | 0 | 1 | 0 | 0 |

### Two’s Complement – Converting from Positive to Negative

- We have seen that 12 and -12 are 01010 and 10100 respectively when using 5 bits – what would they be if we used 8 bits?
- 0000 1010 and 1111 0100
- Note how leading 0s for a positive number are redundant – but let’s check leading 1s for the negative value too
- 1111 0100 = -128 + 64 + 32 + 16 + 4 = -128 + 116 = -12

### Two’s Complement – Converting from Positive to Negative

- Hence, we can say:
- Positive numbers: leading zeros have no effect:
- 0112 = 0000000112 = 310
- Negative numbers: leading ones have no effect:
- 1012 = 111111012 = -310

### Two’s Complement – Converting from Positive to Negative

- Using the “flip the bits & add 1” method, convert the following positive numbers to negative – answers should use 1 byte
- 17  -17
- 48  -48
- 90  -90
- -17 = 1110 1111
- -48 = 1101 0000
- -90 = 1010 0110

### Two’s Complement – Converting from Positive to Negative

- Do you think this ‘flip the bits & add 1’ method would work going from negative  positive?
- Try it – convert 6 to -6 and back to 6
- It does – so this method can be used to convert a two’s complement number from positive to negative and vice-versa

### Two’s Complement – Converting from Positive to Negative

- So far, there have been two methods to calculate the binary representation of a negative denary number in two’s complement
- Do it directly – the most-significant bit is negative, the rest are positive
- Take the positive binary two’s complement value, then ‘flip the bits & add 1’
- There is also 1 other method you can use – sometimes this has been given as a programming task in the exam

### Two’s Complement – Converting from Positive to Negative

- Start from right & go left
- Keep all bits the same, until & including the first ‘1’ you see
- After the first ‘1’, then flip all remaining bits
- This is actually just doing the same as the ‘flip the bits & add 1’ method, but it does it more directly
- 0110 = 6
- 1010 = -6
- flip bits | first 1 | keep same

### Two’s Complement – Converting from Positive to Negative

- If we know the binary value, this method is very quick – again, it works from positive to negative and negative to positive

- 0111
- 10000001
- 11100000
- 00110000

- 1001
- 01111111
- 00100000
- 11010000

## If they say unsigned binary, however, it means the most significant bit will be positive