# 01 Information representation

**Course:** Cambridge International AS & A Level Computer Science (9618)
**Source:** Thinka

---

Study Notes: Information Representation (AS Level 9618)
1.1 Data Representation
1.2 Multimedia Representation
1.3 Compression
Study Notes: Information Representation (AS Level 9618)

Hello future Computer Scientists! Welcome to the foundation of how computers actually work. This chapter, Information Representation, is crucial because everything you see—text, images, sound, programs—must first be converted into binary data (sequences of 0s and 1s) for the computer to understand it.

Don't worry if numbers aren't your favourite thing. We will break down complex conversions and concepts into simple, manageable steps, using plenty of real-world examples! Let's get started on understanding the language of computers.

1.1 Data Representation
Binary Magnitudes: Kibi vs. Kilo

In Computer Science, we deal with massive amounts of data, so we use prefixes like Kilobyte, Megabyte, and Gigabyte. However, there are two distinct standards for these prefixes: Decimal (SI) and Binary (IEC).

Decimal Prefixes (Kilo, Mega, Giga, Tera)
These are based on powers of 10.
Kilo (k):
1
0
3
=
1000
10
3
=1000
Mega (M):
1
0
6
=
1
,
000
,
000
10
6
=1,000,000
Giga (G):
1
0
9
=
1
,
000
,
000
,
000
10
9
=1,000,000,000
Tera (T):
1
0
12
=
1
,
000
,
000
,
000
,
000
10
12
=1,000,000,000,000
Example: A Kilometre is 1000 metres.
Binary Prefixes (Kibi, Mebi, Gibi, Tebi)
Computers prefer powers of 2 (since they use binary). These prefixes are used when talking about computer memory and storage capacity, although the SI prefixes are often mistakenly used.
Kibi (Ki):
2
10
=
1024
2
10
=1024 (Kibibyte)
Mebi (Mi):
2
20
=
1
,
048
,
576
2
20
=1,048,576 (Mebibyte)
Gibi (Gi):
2
30
2
30
 (Gibibyte)
Tebi (Ti):
2
40
2
40
 (Tebibyte)

Key Difference: When you see 'kilo' or 'mega' used in marketing (like hard drive capacity), it usually means the decimal system (powers of 10). But when calculating memory addresses or actual file sizes in programming, the binary system (powers of 2, i.e., 1024) is the correct standard.

Quick Review:

Always remember the difference: kilo is 1000, kibi is 1024. The 'i' stands for 'binary'.

Number Systems and Conversions

Computers rely on different number bases. You must be able to convert integers between them.

Denary (Base 10)

The number system we use every day. It uses 10 digits (0–9).

Binary (Base 2)

The native language of the computer. It uses only two digits (0 and 1). Each digit is called a bit.

Hexadecimal (Base 16)

Uses 16 characters (0–9 and A–F). This is used as shorthand for binary because 4 bits convert exactly into 1 hex digit, making long binary strings easier for humans to read and debug.

Step-by-Step Conversion: Denary to Binary (and Hexadecimal)

Let's convert the denary number 156 to 8-bit binary and then to hexadecimal.

Step 1: Set up the weights (powers of 2):

128
64
32
16
8
4
2
1
1286432168421

Step 2: Find the largest weight that fits 156:

156
−
128
=
28
156−128=28. So, bit 128 is ON (1).

Step 3: Continue with the remainder (28):
64 (too big, 0). 32 (too big, 0). 16 (fits:
28
−
16
=
12
28−16=12). So, bit 16 is ON (1).

Step 4: Continue with remainder (12):
8 (fits:
12
−
8
=
4
12−8=4). So, bit 8 is ON (1).
4 (fits:
4
−
4
=
0
4−4=0). So, bit 4 is ON (1).
2 (0). 1 (0).

Result (Binary):
1
0
0
1
1
1
0
0
10011100

Step 5: Convert Binary to Hexadecimal:
Group the 8 bits into two nibbles (4 bits each):
Group 1: 1001 (Weights: 8+1 = 9)
Group 2: 1100 (Weights: 8+4 = 12, which is C in hex)

Result (Hexadecimal): 9C

Did you know? Hexadecimal is often denoted by prefixing the number with a hash (#) or an ampersand (&), like #9C or &9C, or sometimes 0x9C in programming.

Binary Coded Decimal (BCD)

BCD is another way to represent denary numbers using binary, primarily for displays and simple arithmetic circuits. In BCD, each denary digit is represented by its own 4-bit binary code.

Example: Denary 156 in BCD:
1 becomes 0001
5 becomes 0101
6 becomes 0110

Result (BCD): 0001 0101 0110 (12 bits total).

BCD is inefficient in space (156 only needs 8 bits in pure binary) but is useful in applications like digital clocks or calculators where hardware directly displays the digits.

Representing Negative Integers: Two's Complement

How does a computer store a minus sign? It uses the Two's Complement system. This system allows us to represent both positive and negative integers consistently and makes binary subtraction much easier (it just becomes addition!).

The leftmost bit (the Most Significant Bit, MSB) is used as the Sign Bit:

If the MSB is 0, the number is positive.
If the MSB is 1, the number is negative.
Step-by-Step Conversion: Positive Denary to Negative Two's Complement

Let's convert -45 to 8-bit Two's Complement.

Find the Binary of the Positive Number:
+45 in 8-bit binary is 0010 1101.
Perform One's Complement (Invert the bits):
Flip all the 0s to 1s and 1s to 0s.
0010 1101 becomes 1101 0010.
Perform Two's Complement (Add 1):

1101

0010
+
1
=
1101

0011
1101 0010+1=1101 0011

Result: -45 in 8-bit Two's Complement is 1101 0011. Notice the MSB is 1, indicating a negative number.

Binary Addition and Subtraction

Binary addition follows simple rules:

0
+
0
=
0
0+0=0 (Carry 0)
0
+
1
=
1
0+1=1 (Carry 0)
1
+
1
=
0
1+1=0 (Carry 1)
1
+
1
+
1
=
1
1+1+1=1 (Carry 1)

Binary Subtraction: Computers perform subtraction by using Two's Complement. To calculate A - B, the computer simply calculates A + (-B), where -B is represented in Two's Complement.

Understanding Overflow

Overflow occurs when the result of an arithmetic calculation is too large (or too small) to be stored in the allocated number of bits (e.g., 8 bits).

Example: If we use 8 bits for Two's Complement, the maximum positive value is +127 (0111 1111). If we add 1 to 127, the result (128) requires the MSB to be 1 (1000 0000). Since the MSB is now 1, the computer interprets the number as negative (-128 in Two's Complement), causing an overflow error.

Character Sets (ASCII and Unicode)

Text characters (A, b, !, 5) must also be stored as binary. A character set is a standardised mapping system that assigns a unique binary code to every character.

ASCII (American Standard Code for Information Interchange): The original standard. Uses 7 bits, allowing for 128 different characters (0 to 127). This covered English uppercase, lowercase, numbers, and basic symbols.
Extended ASCII: Uses 8 bits, allowing 256 characters (0 to 255). This included more regional characters and graphical symbols.
Unicode: The modern standard. It uses 16, 24, or 32 bits, allowing for millions of unique characters. This is essential for representing text globally, covering all languages, emojis, and mathematical symbols.

Key Takeaway (1.1): Data is raw binary. We use systems like Hexadecimal for human efficiency, Two's Complement for signed integers, and specific character sets (like Unicode) to map those raw bits into meaningful symbols.

1.2 Multimedia Representation

Multimedia data—pictures and sound—is complex and must be converted from its analogue (continuous) real-world form into digital (discrete binary) data.

Graphics: Bitmapped Images

A bitmap image (like a JPEG or PNG) is a grid of individual coloured dots called pixels.

Encoding Bitmaps
Pixel Data: Each pixel is assigned a binary code representing its colour.
Colour Depth (Bit Depth): This is the number of bits used to represent the colour of a single pixel. A higher colour depth allows for more possible colours.
Number of Colours =
2
Colour Depth
2
Colour Depth

(e.g., 8 bits = 256 colours; 24 bits = 16.7 million colours.)
Image Resolution: This is the number of pixels in the image (Width x Height).
File Header: Contains essential information about the image structure (e.g., file type, image resolution, colour depth).
Calculating Bitmap File Size

The file size depends on the total number of pixels and the colour depth used for each pixel.

Formula (in bits):

\n
File Size
=
Image Width (pixels)
×
Image Height (pixels)
×
Colour Depth (bits)
\n
\nFile Size=Image Width (pixels)×Image Height (pixels)×Colour Depth (bits)\n

To get the size in bytes, divide the result by 8.

Impact of Changing Elements
Increasing Image Resolution: More pixels are stored, leading to a higher quality image but a proportionally larger file size.
Increasing Colour Depth: More bits are used per pixel, leading to a wider range of colours (higher quality) but also a proportionally larger file size.
Graphics: Vector Graphics

Unlike bitmaps, vector graphics (e.g., SVGs) do not store pixel data. Instead, they store mathematical instructions (a drawing list) on how to draw the image.

Drawing Object: A basic geometric shape (e.g., a circle, a line, a rectangle).
Property: Attributes of the object (e.g., line thickness, colour, position, fill pattern).
Justification: Bitmap vs. Vector
Feature	Bitmap (e.g., Photo)	Vector (e.g., Logo)
Scaling	Quality degrades (becomes pixelated).	Perfect scaling (mathematics recalculated).
File Size	Depends on resolution and colour depth. Large for complex photos.	Generally small, dependent on the complexity of objects.
Real-world Use	Photographs, complex images with subtle shading.	Logos, fonts, technical drawings, simple graphics.

Justification Trick: Use a vector graphic if the image needs to be resized frequently without losing quality (like a company logo on a billboard versus a letterhead).

Sound Representation

Sound is naturally an analogue wave. To store it digitally, we must convert it through a process called sampling.

The Sampling Process
Analogue to Digital Converter (ADC): Converts the continuous analogue sound wave into digital form.
Sampling: The sound wave's amplitude (loudness) is measured at regular intervals.
Sampling Rate (Frequency): The number of samples taken per second (measured in Hertz, Hz). A higher rate means more frequent measurements, capturing the sound wave more accurately.
Sampling Resolution (Bit Depth): The number of bits allocated to store the amplitude value of each sample. A higher resolution means a finer range of possible loudness levels, improving accuracy.

Analogy: Imagine sound recording like making a stop-motion movie. The Sampling Rate is how many photos you take per second, and the Sampling Resolution is the detail (colour depth) in each photo.

Impact on File Size and Accuracy

If you increase the Sampling Rate or the Sampling Resolution, the sound quality (accuracy) improves significantly, but the total number of bits required to store the sound also increases, leading to a larger file size.

Key Takeaway (1.2): Bitmaps are grids of pixels; vectors are math instructions. Sound quality relies on the frequency (rate) and detail (resolution) of sampling.
1.3 Compression

Data compression is vital because modern files (especially multimedia) are huge. Compression reduces the file size, saving storage space and decreasing transmission time over networks.

Lossy vs. Lossless Compression

There are two main types of compression, and knowing the difference is essential for justifying their use.

1. Lossless Compression
Definition: The original data can be perfectly reconstructed from the compressed file. No information is permanently lost.
Use: Used for files where every single bit of data is crucial, such as text documents, executable programs, and medical images.
Examples: ZIP, PNG, GIF, Run-Length Encoding (RLE).
Drawback: Compression ratio is typically lower (files are still relatively large).
2. Lossy Compression
Definition: Irreversible data is permanently discarded during compression. This data is usually the information that the human eye or ear is least likely to perceive.
Use: Used for multimedia where a small loss in quality is acceptable for a massive reduction in file size.
Examples: JPEG (images), MP3 (audio), MPEG (video).
Drawback: Permanent quality degradation.

Justification Example: If you are sending a scientific data file, you must use Lossless compression to maintain data integrity. If you are uploading a photo to social media, Lossy compression (JPEG) is acceptable because file size is more important than minute detail.

Compression Methods: Run-Length Encoding (RLE)

RLE is a simple, common form of lossless compression, especially effective for data that contains long sequences of the same value (i.e., data redundancy). It works by storing the value and the count of consecutive identical values (the "run").

How RLE Works (Text Example)

Imagine a line of text or a simple black-and-white bitmap image line:
Original Data: WWWWWWWBBBWWRRRR

RLE Encoding: We encode this as (Count, Value):

(
7
,
𝑊
)
,
(
3
,
𝐵
)
,
(
2
,
𝑊
)
,
(
4
,
𝑅
)
(7,W),(3,B),(2,W),(4,R)

Application to different file types:

Text File: Effective if there are long runs of the same character (e.g., many spaces or tabs).
Bitmap Image: Effective for simple images with large blocks of solid colour.
Vector Graphic: Less relevant, as vectors are already defined by mathematical instructions rather than sequential pixel data.
Sound File: Can be used if there are periods of silence (long runs of zero amplitude samples).
Quick Review (1.3):

Lossless: Perfect quality, bigger file (ZIP). Use for critical data.
Lossy: Reduced quality, much smaller file (JPEG, MP3). Use for non-critical media.
RLE: (Run-Length Encoding) A lossless method that encodes repeated values by counting them.

Ready to test yourself?

Turn these notes into exam-style practice. Get unlimited AI questions on this topic with instant marking and explanations.

Practice This Topic
More Computer Science (9618) chapters
Communication
Hardware
Processor Fundamentals
System Software
Security, privacy and data integrity
Ethics and Ownership

* The content provided by thinka is generated by AI and may not always be accurate or up-to-date. Please use it as a supplementary resource and verify with official materials.

Put These Notes into Practice

Reading the notes is a great start. Now practise with unlimited AI-generated questions and get instant feedback. 100,000+ students are already improving their grades.

Start Practising Now
View Pricing