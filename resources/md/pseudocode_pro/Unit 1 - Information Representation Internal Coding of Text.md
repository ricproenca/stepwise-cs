# Unit 1 - Information Representation Presentation

## Internal Coding of Text

### Class Overview

- Character sets: ASCII & Unicode
- Standard vs Extended ASCII
- UTF-8, UTF-16 & UTF-32
- ASCII codes of some common characters
- Why some languages use more storage space

### Internal Coding of Text

- As mentioned – numbers, images, videos, sound, text, programs etc all have to be stored as binary
- Therefore we need a representation of characters in binary – these are ASCII and, later, Unicode character sets
- Character set: a collection of characters whereby each character is represented with a unique binary code

### ASCII

- Stands for American Standard Code for Information Interchange
- Standardised by ANSI (American National Standards Institute) in 1963
- There are 2 versions – 7-bit (standard) ASCII and 8-bit (extended) ASCII
- Every bit pattern is used to represent a character – how many characters would be able to be represented by both versions?
- Standard (7-bit) ASCII = 128 characters (27)
- Extended (8-bit) ASCII = 256 characters (28)

### ASCII Art

- Unrelated – but most people have probably seen ASCII art in online comments etc
- If you zoom in, you can see this image is made just from 2 characters – ‘0’ and ‘1’

### There are 32 non-printable ASCII characters (0-31) – 13 are shown here
These include things like tabs, new lines (\n = line feed), backspace, null characters etc

| DEC | OCT | HEX | BIN | Symbol | HTML Number | HTML Name | Description |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0 | 000 | 00 | 00000000 | NUL | &#000; |  | Null char |
| 1 | 001 | 01 | 00000001 | SOH | &#001; |  | Start of Heading |
| 2 | 002 | 02 | 00000010 | STX | &#002; |  | Start of Text |
| 3 | 003 | 03 | 00000011 | ETX | &#003; |  | End of Text |
| 4 | 004 | 04 | 00000100 | EOT | &#004; |  | End of Transmission |
| 5 | 005 | 05 | 00000101 | ENQ | &#005; |  | Enquiry |
| 6 | 006 | 06 | 00000110 | ACK | &#006; |  | Acknowledgment |
| 7 | 007 | 07 | 00000111 | BEL | &#007; |  | Bell |
| 8 | 010 | 08 | 00001000 | BS | &#008; |  | Back Space |
| 9 | 011 | 09 | 00001001 | HT | &#009; |  | Horizontal Tab |
| 10 | 012 | 0A | 00001010 | LF | &#010; |  | Line Feed |
| 11 | 013 | 0B | 00001011 | VT | &#011; |  | Vertical Tab |
| 12 | 014 | 0C | 00001100 | FF | &#012; |  | Form Feed |
| 13 | 015 | 0D | 00001101 | CR | &#013; |  | Carriage Return |

## So note how you wouldn’t actually see these characters when you read the email – but they are included in the email transmission for the email client to parse/display the email

### Then there are some of the common punctuation/symbols

| DEC | OCT | HEX | BIN | Symbol | HTML Number | HTML Name | Description |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 32 | 040 | 20 | 00100000 |  | &#32; |  | Space |
| 33 | 041 | 21 | 00100001 | ! | &#33; |  | Exclamation mark |
| 34 | 042 | 22 | 00100010 | " | &#34; | &quot; | Double quotes (or speech marks) |
| 35 | 043 | 23 | 00100011 | # | &#35; |  | Number |
| 36 | 044 | 24 | 00100100 | $ | &#36; |  | Dollar |
| 37 | 045 | 25 | 00100101 | % | &#37; |  | Per cent sign |
| 38 | 046 | 26 | 00100110 | & | &#38; | &amp; | Ampersand |
| 39 | 047 | 27 | 00100111 | ' | &#39; |  | Single quote |
| 40 | 050 | 28 | 00101000 | ( | &#40; |  | Open parenthesis (or open bracket) |
| 41 | 051 | 29 | 00101001 | ) | &#41; |  | Close parenthesis (or close bracket) |
| 42 | 052 | 2A | 00101010 | * | &#42; |  | Asterisk |
| 43 | 053 | 2B | 00101011 | + | &#43; |  | Plus |
| 44 | 054 | 2C | 00101100 | , | &#44; |  | Comma |
| 45 | 055 | 2D | 00101101 | - | &#45; |  | Hyphen |
| 46 | 056 | 2E | 00101110 | . | &#46; |  | Period, dot or full stop |
| 47 | 057 | 2F | 00101111 | / | &#47; |  | Slash or divide |

### Sometimes the exam includes questions that require you to know that 0 has a denary value of 48 in ASCII – if you remember that, figuring out another number is easy – they just increment – 0 = 48, 1 = 49, 2 = 50 etc
Note: these values are just used for when numbers are stored as text – when a number is stored as an integer for arithmetic, its two’s complement value would be used

| DEC | OCT | HEX | BIN | Symbol | HTML Number | HTML Name | Description |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 48 | 060 | 30 | 00110000 | 0 | &#48; |  | Zero |
| 49 | 061 | 31 | 00110001 | 1 | &#49; |  | One |
| 50 | 062 | 32 | 00110010 | 2 | &#50; |  | Two |
| 51 | 063 | 33 | 00110011 | 3 | &#51; |  | Three |
| 52 | 064 | 34 | 00110100 | 4 | &#52; |  | Four |
| 53 | 065 | 35 | 00110101 | 5 | &#53; |  | Five |
| 54 | 066 | 36 | 00110110 | 6 | &#54; |  | Six |
| 55 | 067 | 37 | 00110111 | 7 | &#55; |  | Seven |
| 56 | 070 | 38 | 00111000 | 8 | &#56; |  | Eight |
| 57 | 071 | 39 | 00111001 | 9 | &#57; |  | Nine |

### With this logic, what would the denary value of 8 be in ASCII?

| DEC | OCT | HEX | BIN | Symbol | HTML Number | HTML Name | Description |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 48 | 060 | 30 | 00110000 | 0 | &#48; |  | Zero |
| 49 | 061 | 31 | 00110001 | 1 | &#49; |  | One |
| 50 | 062 | 32 | 00110010 | 2 | &#50; |  | Two |
| 51 | 063 | 33 | 00110011 | 3 | &#51; |  | Three |
| 52 | 064 | 34 | 00110100 | 4 | &#52; |  | Four |
| 53 | 065 | 35 | 00110101 | 5 | &#53; |  | Five |
| 54 | 066 | 36 | 00110110 | 6 | &#54; |  | Six |
| 55 | 067 | 37 | 00110111 | 7 | &#55; |  | Seven |
| 56 | 070 | 38 | 00111000 | 8 | &#56; |  | Eight |
| 57 | 071 | 39 | 00111001 | 9 | &#57; |  | Nine |

### Likewise, the upper case letters follow the same pattern – starting with ‘A’ at denary value 65, with ‘Z’ at 90 – again, you need to remember ‘A’ = 65

| DEC | OCT | HEX | BIN | Symbol | HTML Number | HTML Name | Description |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 65 | 101 | 41 | 01000001 | A | &#65; |  | Uppercase A |
| 66 | 102 | 42 | 01000010 | B | &#66; |  | Uppercase B |
| 67 | 103 | 43 | 01000011 | C | &#67; |  | Uppercase C |
| … | … | … | … | … | … |  | … |
| 88 | 130 | 58 | 01011000 | X | &#88; |  | Uppercase X |
| 89 | 131 | 59 | 01011001 | Y | &#89; |  | Uppercase Y |
| 90 | 132 | 5A | 01011010 | Z | &#90; |  | Uppercase Z |

### Again, for lower case, remember that ‘a’ is 97 in denary – hence ‘z’ will be +25 = 122

| DEC | OCT | HEX | BIN | Symbol | HTML Number | HTML Name | Description |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 97 | 141 | 61 | 01100001 | a | &#97; |  | Lowercase a |
| 98 | 142 | 62 | 01100010 | b | &#98; |  | Lowercase b |
| 99 | 143 | 63 | 01100011 | c | &#99; |  | Lowercase c |
| … | … | … | … | … | … |  | … |
| 120 | 170 | 78 | 01111000 | x | &#120; |  | Lowercase x |
| 121 | 171 | 79 | 01111001 | y | &#121; |  | Lowercase y |
| 122 | 172 | 7A | 01111010 | z | &#122; |  | Lowercase z |

### Do you notice a relationship of the binary values between the corresponding lowercase  uppercase letter

- [Bits are always counted from right-to-left]
- The 6th bit is a 0 in the uppercase version…but a 1 in the lowercase version
- This is because bit 6 = 32 (and 97 – 65 = 32)
- This also means the 2nd hex digit is 2 greater in the lowercase version than the uppercase version – i.e. 41  61

| DEC | OCT | HEX | BIN | Symbol |
| --- | --- | --- | --- | --- |
| 97 | 141 | 61 | 01100001 | a |
| 98 | 142 | 62 | 01100010 | b |
| 99 | 143 | 63 | 01100011 | c |
| … | … | … | … | … |
| 120 | 170 | 78 | 01111000 | x |
| 121 | 171 | 79 | 01111001 | y |
| 122 | 172 | 7A | 01111010 | z |

| DEC | OCT | HEX | BIN | Symbol |
| --- | --- | --- | --- | --- |
| 65 | 101 | 41 | 01000001 | A |
| 66 | 102 | 42 | 01000010 | B |
| 67 | 103 | 43 | 01000011 | C |
| … | … | … | … | … |
| 88 | 130 | 58 | 01011000 | X |
| 89 | 131 | 59 | 01011001 | Y |
| 90 | 132 | 5A | 01011010 | Z |

### Example

- We can use an online tool like https://www.toptal.com/developers/keycode to see details about the keys we pressed
- Note: this gives 65 as the keycode for both ‘A’ and ‘a’ – but ‘a’ should be 97. So be careful about that

### Example

- Let’s look at a real file – I saved some text using Notepad and setting the encoding option to extended ASCII
- [Notepad calls this ANSI, but for the exam, this is just extended (8-bit) ASCII]

### Example

- We can then use a hex editor to see the binary contents (displayed in hex) of any file – I will use a program called HxD, though there are many online hex editors too
- We see there are two bytes in the file – 48 & 69 – note these are HEX values, not denary
- We said that extended ASCII uses 1 byte (8 bits) per character, so what would the text content of this file be?

### Example

- 4816 = 7210= ‘H’
- 6916 = 10510 = “i”
- So the message was “Hi” – and it used just 2 bytes

### Example

- Now let’s try saving “你好” using ASCII – what do you think will happen?

- We get an error – remember, extended ASCII only supports 256 characters
- So characters from most languages, scientific/mathematical symbols, even emojis like 🎂 can’t be represented with ASCII

### Example

- Challenge: what are the contents of this file?
- 0
- A
- a
- 0D and 0A represent the carriage return and line-feed (new line) respectively

### Unicode

- To offer more than 256 characters, Unicode was introduced
- Unicode can represent all characters in every language, all mathematical/scientific symbols, all emojis etc
- In fact, there are even many symbols in Unicode which no one in the world knows what they are – but because they were written once in a textbook from 1800, they’re included
- Currently, there are 144,697 characters in Unicode – with room for over 1.1 million

### Unicode

- Unicode offers variable-length schemes – characters will be represented by between 1 to 4 bytes

- UTF = Unicode Transformation Format
- You don’t need to remember the full name – only that UTF = Unicode

### Unicode

- Note: all schemes can represent ALL Unicode characters
- UTF-16 & UTF-32: fast to get specific character(s) at an index/in a range due to fixed-size; in contrast UTF-8 requires searching through entire string

- UTF-8: uses less space, especially when working with e.g. Latin alphabetic characters, numbers etc, since they are also ASCII characters are only require 1 byte

### Unicode

- For UTF-8, characters can be between 1-4 bytes - bytes start with the fixed pattern shown below, so that decoders can determine the which bytes are for what character/when a new character starts/ends

- While this is in the book, it’s never been asked on the exam

### Example

- Let’s  try saving “你好” using UTF-8 this time

- You can see each character takes 3 bytes – for reference, 🎂 uses 4 bytes

### Text Encoding Summary

- Character set: collection of characters where each character has a unique binary code – ‘0’ = 48, ‘A’ = 65, ‘a’ = 97
- ASCII:
- Older
- Two versions: standard (7-bit) and extended (8-bit) can represent 128 & 256 characters accordingly
- Unicode:
- Can represent all characters
- Uses between 1-4 bytes per character