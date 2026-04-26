# Unit 1 - Information Representation Presentation

## Numbers and Quantities

### Class Overview

- Numbers: integers and reals/floats
- Signed & unsigned
- Prefixes: Kilo, Mega, Giga, Tera
- Prefixes: Kibi, Mebi, Gibi, Tebi
- Converting between them

### Types of Numbers in a Computer

- There are various types of number that can be stored in a computer
- The reason for these different data types of due to efficiency – i.e. wanting to store as much relevant information in as few bits as possible
- For example, if we want to store a variable called NumberOfStudents, there is no point wasting some bits in memory to store a decimal point – it will be an integer (whole number) and relatively small

### Integers

- Have you heard the word “integer” used in maths? Do you know what it means?
- A whole number – e.g. 3 is an integer, but 3.1 isn’t
- Integers come in two forms – unsigned and signed.
- Sign refers to the plus or minus sign – i.e. +/-
- So an unsigned integer could be 3 (i.e. positive)
- While a signed integer could be +3 or -3

### Integers

- So:
- unsigned integers = positive only
- signed integers = positive or negative
- Note: the plus or minus value isn’t actually stored in the computer – the most significant bit in a signed integer is negative
- We’ll see how signed integers work later

### Fractions

- Although fractions like ½ are common in maths, they are not used (commonly) in computers
- Instead, computers simply use reals/floats (decimals) – i.e. 0.5
- It would, however, be possible to create a representation of fractions in a programming language, if you had a need to do so (e.g. for higher precision or creating educational software that demonstrated fractions)

### Decimals – Reals/Floats

- In computer science, decimals are called reals or floats (short for “floating point”)
- Examples: 3.14, 1.60, -4.75
- For AS, you aren’t required to know how they are represented in binary – however you do need to know the name of the data type – i.e. REAL in pseudocode

### Scientific/Standard Notation - Floats

- As you know from maths/physics, we can represent a number like 300,000,000 as 3x108
- This is called a floating-point number – since the decimal point (or with binary, binary point) can ‘float’ left or right, depending on the magnitude of the number
- As mentioned, floats also support non-integer numbers – that’s because 16 x 10-20 can be written as 1.6 x 10-19

### Quantities

- In maths/science, rather than saying 10,000 meters, we could simply say 10km
- What does the “k” mean?
- Kilo = 1000
- Let’s recall some of the others

### Quantities

- For computer science, these are the ones to remember:

- Note that “K” is sometimes written in lowercase – e.g. km

| Name | Prefix | Power of 10 | Value |
| --- | --- | --- | --- |
| Tera | T | x1012 | 1,000,000,000,000 |
| Giga | G | x109 | 1,000,000,000 |
| Mega | M | x106 | 1,000,000 |
| Kilo | K | x103 | 1,000 |

### Quantities

- So, how many bytes are in 1 kilobyte, megabyte, gigabyte and terabyte?
- 1,000     1,000,000   1,000,000,000   1,000,000,000,000
- How many bits are in 1 megabyte?
- 8,000,000
- How many bytes are in 1 gigabit?
- 125,000,000

### Quantities

- Note: a lower case b = bits; upper case B = bytes
- So MB = megabytes, while Mb = megabits
- When you bought your monthly phone package, what unit was likely used and why?
- Most likely Mb – since the number will be bigger…e.g…

### Quantities

- Imagine phone company A offers 20Gb of data at a speed of 2Mb per second. Now imagine company B offers 3GB at 0.5MB/s.
- Which company would the average person choose?
- Probably A – since the numbers seem bigger
- Which company actually offers a better deal?
- B – in bits, they offer 24Gb of data at a transfer speed of 4Mb/s
- Since 1 byte = 8 bits, to convert between one or the other, we either multiply or divide by 8

### Questions

- An .mp3 file is 18MB – how many bits is that?
- (18 * 1,000,000) * 8 = 144,000,000b
- An HD .mp4 movie averages 4Mb/s – how many gigabytes would a 2 hour movie use?
- (4 * 60 * 60 * 2 * 1,000,000) / (1,000,000,000 * 8) = 3.6GB
- Note: we could simplify the 1,000,000 / 1,000,000,000 to just be / 1000

### Questions

- Note: the exam is non-calculator, so would use simpler numbers that you can easily simplify – we will look at these questions in another video

### Problem

- For maths & science, they operate in base-10 – however for computers, they operate in base 2 – as such, some people would use alternate definitions – i.e.
- 1Ki = 1024 bytes (210)
- 1Mi = 1,048,576 bytes (220)
- 1Gi = 1,073,741,824 bytes (230)
- 1Ti = 1,099,511,627,776 bytes (240)
- Note how the powers increment by 10

### Solution

- Because of this 1024 vs 1000 confusion, a new set of units were introduced:

| Name | Prefix | Power of 2 | Value |
| --- | --- | --- | --- |
| kibi | Ki | x210 | 1,024 |
| mebi | Mi | x220 | 1,048,576 |
| gibi | Gi | x230 | 1,073,741,824 |
| tebi | Ti | x240 | 1,099,511,627,776 |

### Problem

- Rather than previously saying 1 gibibytes = 1,073,741,824 bytes (which is confusing/difficult to understand/remember), we could instead consider things in terms of the previous group – i.e.
- 1 kibibyte = 1024 bytes
- 1 mebibyte = 1024 kibibytes (10242)
- 1 gibibyte = 1024 mebibytes (10243)
- 1 tebibyte = 1024 gibibytes (10244) etc

### Questions

- You see a computer with a 16GiB of RAM and another with 16GB – how many bits does of RAM does each have?
- 16 * 230 * 8 = 137,438,953,472
- 16 * 109 * 8 = 128,000,000,000

### Questions

- You want to download an 800MB file – the server can send at 10GB/s and you can receive at 5MiB/s – how long will the download take?
- Convert 800MB to MiB = (800 * 1,000,000) / 220 = 762.939…
- Prev answer / 5 = 153 seconds = 2 minutes 33 seconds
- Note how the server speed here is irrelevant – we only care about the slower speed

### Task

- Find the storage size of your SSD/HDD, cache, remaining/used storage etc
- Perform various conversion – e.g. if you have 752GiB worth of storage remaining on your HDD/SSD, how many TiB/b/MB etc is that
- Use to check: https://ss64.com/convert.html