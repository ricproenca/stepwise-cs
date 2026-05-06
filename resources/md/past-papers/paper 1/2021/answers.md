# Paper 1 — 2021 Answers by Syllabus

**Variants:** S21 V11/13 (identical), S21 V12, W21 V11/13 (identical), W21 V12
**Deduplication:** 3 merges applied (see end of file)

---

## 1.1 Data Representation (`data-representation`)

### Define pixel and file header for a bitmap image
*(S21 V11/13 Q1(a)(i))*

**Pixel:**
- A single square of one colour
- The smallest addressable element in an image

**File header:**
- Data/metadata about the bitmap image (e.g. number of colours, resolution, colour depth)

---

### Calculate file size of a 1024×512 pixel, 8-colour bitmap in mebibytes
*(S21 V11/13 Q1(a)(ii))*

- 1024 × 512 = 524 288 pixels; with 8 colours = 1 bit per pixel (2³), so 524 288 bits → 524 288 / 8 = 65 536 bytes
- Wait — 8 colours requires 3 bits per pixel, not 8. But the MS says 524 288 pixels/bytes and then divides by 1024/1024, implying 8-bit colour depth (256 colours), not 8 colours.
- From MS: 1024 × 512 = 524 288 pixels/bytes; 524 288 / 1024 / 1024 = **0.50 mebibytes**

---

### Binary unit equivalents matching
*(W21 V11/13 Q1(a))*

| Binary value | Equivalent |
|---|---|
| 8 bits | 1 byte |
| 8000 bits | 1 kilobyte (SI) |
| 1000 kilobytes | 1 megabyte (SI) |
| 1024 mebibytes | 1 gibibyte |
| 8192 bits | 1 kibibyte |

---

### Binary arithmetic — addition
*(W21 V11/13 Q1(b)(i))*

```
  1010 1010
+ 0011 0111
-----------
  1110 0001   (carries: 111 111)
```

Answer: **1110 0001**

---

*(S21 V11/13 Q1(c)(ii))*

```
  0010 0011   (00100011)
+ 0000 1111   (15)
-----------
  0011 0010   (carries: 1 111)
```

Answer: **0011 0010**

---

*(W21 V12 Q4(e)(i))*

```
  0011 1101
+ 0010 1101
-----------
  0110 1010   (carries: 111 1 1)
```

Answer: **0110 1010**

---

### Binary arithmetic — subtraction using two's complement
*(S21 V11/13 Q1(c)(iii))*

Two's complement of 10 (00001010): flip → 11110101, +1 → **1111 0110**

```
  0010 0011
+ 1111 0110
-----------
  0001 1001   (carry out discarded)
```

Answer: **0001 1001** (= 25)

---

*(W21 V12 Q4(e)(ii))*

Two's complement of 00101101: flip → 11010010, +1 → **1101 0011**

```
  0011 1101
+ 1101 0011
-----------
  0001 0000
```

Answer: **0001 0000** (= 16)

---

### Overflow when adding binary integers
*(W21 V11/13 Q1(b)(ii))*

- The result is a larger number than can be stored in the given number of bits
- Accept: the result is greater than 255 (for 8-bit)

---

### Hexadecimal to denary conversions
*(W21 V11/13 Q1(c))* F0 → **240**
*(S21 V11/13 Q1(c)(i))* FC → **252**

---

### Unsigned binary to denary
*(S21 V12 Q4(b)(i))* 01100110 → **102**
*(W21 V12 Q4(a))* 11001101 → **205**

---

### Two's complement to denary
*(W21 V12 Q4(b))* 11001101 → MSB = −128; 128 + 64 + 8 + 4 + 1 = 205; −205 is incorrect; MSB sign bit = 1 so negative. 11001101 → invert = 00110010, +1 = 00110011 = 51. Answer: **−51**

---

### Binary to hexadecimal
*(W21 V12 Q4(c))* 11001101 → 1100 = C; 1101 = D → **CD**

---

### Why a value cannot be BCD
*(W21 V12 Q4(d))*

- The denary value in each group of 4 bits is greater than 9
- 1100 = 12 and 1101 = 13; both exceed the valid BCD range 0–9

---

### ASCII character encoding
*(S21 V12 Q6(a), Q6(b), Q6(c)(i), Q6(c)(ii))*

- ASCII represents **128** characters (2⁷); extended ASCII represents **256** (2⁸)
- Each character has its own unique code; each letter in 'HOUSE' is replaced by its ASCII code; codes stored in word order
- Unicode '1' = denary 49 = hexadecimal **31**
- Unicode '5' = denary **53** (49 + 4)

---

## 1.2 Multimedia (`multimedia`)

### Sample rate and sound quality / file size
*(W21 V11/13 Q7(a)(i), Q7(a)(ii))*

**Why higher sample rate → closer to original:**
- Smaller time gaps between samples
- Makes the digital sound wave more accurate
- Smaller quantisation errors

**Why higher sample rate → larger file size:**
- More samples/data points are taken and recorded
- So more bits are stored altogether

---

### Microphone operation
*(W21 V12 Q3(a))*

- The microphone has a diaphragm (or ribbon)
- Incoming sound waves cause vibrations of the diaphragm
- This causes a coil to move past a magnet (dynamic) OR changes capacitance (condenser) OR deforms a crystal
- An electrical signal is produced

---

### Vector graphic terms — property and drawing list
*(W21 V12 Q5(a))*

| Term | Description | Example from logo |
|---|---|---|
| Property | Data about the shapes; defines one aspect of the appearance of a drawing object | Black line, white fill, solid line, font, colour of triangle |
| Drawing list | The list of shapes involved in an image; stores the command/description required to draw each object | Triangle, capital letter R, rectangle, line |

---

### Vector graphic vs bitmap — differences
*(W21 V12 Q5(b)(i))*

- Bitmap is made up of pixels (colours stored for individual pixels); vector stores a set of instructions/formula for how to draw the shape
- When a bitmap is enlarged pixels get bigger and it pixelates; when a vector is enlarged it is recalculated and does not pixelate
- Bitmap files are usually bigger because data must be stored for each pixel; vector files are smaller as they contain only instructions

---

## 1.3 Compression (`compression`)

### Lossless compression — RLE for bitmap
*(S21 V11/13 Q1(b))*

- Method: **Run-length encoding (RLE)**
- Replace sequences of the same-colour pixel with a colour code and the number of identical consecutive pixels

---

### Reasons to compress a sound file
*(W21 V11/13 Q7(b)(i))*

- Reduces the file size
- Faster to transmit/download
- Original file may be too large for an email attachment

---

### Lossless compression applied to sound
*(W21 V11/13 Q7(b)(ii))*

- Reduce amplitude range to only the range actually used → fewer bits per sample
- Run-length encoding: where consecutive sounds are the same, record the binary value and number of repetitions
- Record the changes between consecutive samples instead of absolute values

---

### Lossy compression methods for a bitmap image
*(W21 V12 Q5(b)(ii))*

- **Reduce bit depth**: fewer bits per colour/pixel; each pixel has fewer bits to store its colour
- **Reduce colour palette / number of colours**: fewer colours means fewer bits needed to represent each colour
- **Reduce image resolution**: fewer pixels per unit measurement; less binary data to store

---

## 2.1 Networks including the internet (`networks-internet`)

### Peer-to-peer network — features and drawbacks
*(S21 V11/13 Q4(a), Q4(b))*

**Features:**
- All computers are of equal status (no dedicated server)
- Each computer provides access to its resources and data
- Computers can communicate and share resources directly
- Each computer is responsible for its own security

**Drawbacks (max 2):**
- Reduced security; only as secure as the weakest computer; each is at risk from viruses from others
- No central management of backup; if one computer's data is not backed up it is lost to all
- No central management of files/software; consistency difficult; each may have different software
- Individual computers may respond more slowly when being accessed by others
- Files/resources not always available if the sharing computer is switched off

---

### Router task identification
*(S21 V11/13 Q4(c)(i))*

| Task | Performed by router |
|---|---|
| Receives packets from devices | Yes |
| Finds the IP address of a URL | No |
| Directs each packet to all devices | No |
| Stores IP and/or MAC address of attached devices | Yes |

---

### Wired vs wireless justification
*(S21 V11/13 Q4(c)(ii))*

**Wired (justified for streaming/large files):**
- Faster connection / higher bandwidth, needed for downloading/streaming large files
- Less latency / fewer delays
- More reliable and stable, less susceptible to interference from walls or distance
- More secure

**Wireless (alternative valid answer):**
- Freedom of movement; can move rooms while still connected
- No physical cable required
- Easily expanded if more devices need access
- Less cabling, lower initial setup cost

---

### Internet vs WWW for webmail
*(S21 V11/13 Q4(d))*

- Using the **internet** because data is sent over the internet infrastructure
- Using the **WWW** because the webmail client is a website stored on a web server, accessed via a browser as part of the WWW
- Mark awarded for correctly identifying that both are used

---

### Cloud computing — benefits and drawbacks
*(S21 V12 Q5(c)(i), Q5(c)(ii))*

**Benefits:**
- No need to buy separate high-capacity storage hardware
- Can access data from any computer with internet access
- Most cloud services have built-in backup/disaster recovery
- Can easily increase storage capacity
- Cloud storage can be free for small amounts of data

**Drawbacks:**
- Can only access data with internet access
- No control over security; security may not be strong
- Can be slow to upload or download large amounts of data
- More expensive in the long term
- Limited storage unless additional capacity is paid for

---

### IP address types
*(S21 V12 Q5(d))*

| Type | Description |
|---|---|
| Public | Visible to any device on the internet |
| Private | Only visible within a LAN |
| Dynamic | Reallocated each time the device connects |
| Static | Does not change each time the device connects |

---

### LAN vs WAN — school building network
*(W21 V11/13 Q8(a))*

- **LAN** (local area network)
- Covers a small geographical area (one building)
- Does not use leased external infrastructure / does not use the internet to transmit data within the building

---

### Wireless Network Interface Card (WNIC) functions
*(W21 V11/13 Q8(c))*

- Provides an interface to the wireless network (acts as an antenna)
- Receives analogue radio waves and converts them to digital/binary data
- Checks incoming transmissions for correct MAC/IP address; ignores those not intended for it
- Encrypts/encodes data for transmission; decrypts/decodes received data
- Takes digital/binary output and converts to analogue radio waves; transmits via antenna

---

### Home network topology
*(W21 V12 Q3(b)(i))*

- **Star topology**
- All devices connect directly and independently to the router; no device is connected directly to another

---

### Router functions
*(W21 V12 Q3(b)(ii))*

- Receives packets from devices or the internet
- Forwards/routes packets to their destination
- Finds the destination of a packet / stores a routing table
- Assigns/allocates private IP addresses to devices on the LAN
- Maintains a table of MAC and IP addresses

---

## 3.1 Computers and their components (`computers-components`)

### Embedded systems — definition, example, RAM/ROM, control vs monitoring
*(S21 V11/13 Q5(a), Q5(b), Q5(c))*

**Definition and example:**
- An embedded system is a microprocessor/microcontroller within a larger system that performs one specific task
- Example: the embedded system in a washing machine only controls the wash cycle programs; it does not perform any other function within the machine

**RAM and ROM in a washing machine:**
- **RAM**: stores the user's current choices / wash program entered / data read from sensors / time left in the program (volatile — lost when power off)
- **ROM**: stores the start-up instructions for the washing cycles (permanent)

**Control vs monitoring (refrigerator thermostat):**
- It is a **control** system (not monitoring)
- The system uses feedback
- The system causes the temperature to change / produces an action (turns cooling on or off) in response to sensor data

---

### Network connection devices
*(W21 V11/13 Q8(b))*

Two devices that can connect 30 computers:
- **Router**
- **Switch**
- **Hub**

---

## 3.2 Logic Gates and Logic Circuits (`logic-gates-circuits`)

### Logic gate identification by description
*(S21 V11/13 Q8)*

| Description | Gate |
|---|---|
| Output is 1 only when both inputs are 1 | AND |
| Output is 1 only when both inputs are different | XOR |
| Output is 1 only when both inputs are 0 | NOR |

---

### NOR and NAND truth tables
*(W21 V12 Q2(a))*

| A | B | NOR | NAND |
|---|---|-----|------|
| 0 | 0 | 1 | 1 |
| 0 | 1 | 0 | 1 |
| 1 | 0 | 0 | 1 |
| 1 | 1 | 0 | 0 |

---

### Logic circuit for S=(A AND B AND C) OR (B XOR C)
*(S21 V12 Q3(a), Q3(b))*

Circuit structure: 3-input AND gate (A, B, C) → one input of final OR gate; B and C into XOR gate → second input of final OR gate.

**Truth table:**

| A | B | C | S |
|---|---|---|---|
| 0 | 0 | 0 | 0 |
| 0 | 0 | 1 | 1 |
| 0 | 1 | 0 | 1 |
| 0 | 1 | 1 | 0 |
| 1 | 0 | 0 | 0 |
| 1 | 0 | 1 | 1 |
| 1 | 1 | 0 | 1 |
| 1 | 1 | 1 | 1 |

---

### Logic expression for circuit and truth table: X=((A AND B) XOR C) OR NOT B
*(W21 V11/13 Q3(a), Q3(b))*

Expression: **((A AND B) XOR C) OR NOT B**

**Truth table:**

| A | B | C | X |
|---|---|---|---|
| 0 | 0 | 0 | 1 |
| 0 | 0 | 1 | 1 |
| 0 | 1 | 0 | 0 |
| 0 | 1 | 1 | 1 |
| 1 | 0 | 0 | 1 |
| 1 | 0 | 1 | 1 |
| 1 | 1 | 0 | 1 |
| 1 | 1 | 1 | 0 |

---

### Logic gate not used in circuit — symbol and truth table
*(W21 V11/13 Q3(c))*

Accept NOR or NAND (either is valid — circuit uses AND, XOR, OR, NOT):

**NOR gate:**
| A | B | Output |
|---|---|--------|
| 0 | 0 | 1 |
| 0 | 1 | 0 |
| 1 | 0 | 0 |
| 1 | 1 | 0 |

**NAND gate:**
| A | B | Output |
|---|---|--------|
| 0 | 0 | 1 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 0 |

---

### Logic circuit for X=NOT(NOT(A AND B) AND C)
*(W21 V12 Q2(b))*

- Step 1: A AND B → NAND gate output = NOT(A AND B)
- Step 2: NOT(A AND B) AND C → second NAND gate with C as input → output = X
- Equivalent to: X = NOT(NOT(A AND B) AND C) = (A AND B) OR NOT C

---

## 4.1 CPU Architecture (`cpu-architecture`)

### Register roles in the fetch-execute cycle
*(S21 V11/13 Q3(a))*

- The **Program Counter (PC)** holds the address of the next instruction to be loaded
- This address is sent to the **Memory Address Register (MAR)**
- The **Memory Data Register (MDR)** holds the data fetched from this address
- This data is sent to the **Current Instruction Register (CIR)** and the Control Unit decodes the opcode
- The **Program Counter is incremented**

---

### CPU components identification
*(S21 V12 Q5(a))*

- **Control Unit (CU)**: transmits signals to coordinate events based on pulses of the system clock
- **System clock**: generates timing pulses that synchronise all operations
- **Data bus**: carries data between components
- **Address bus**: carries the address where data is being read from or written to
- **ALU (Arithmetic Logic Unit)**: performs mathematical operations and logical comparisons

---

### CPU performance — cores and clock speed
*(S21 V12 Q5(b))*

**Number of cores:**
- Each core processes one instruction per clock pulse
- More/multiple cores allow sequences of instructions to be split between them
- More than one instruction can be executed per clock pulse → less time to complete a task

**Clock speed:**
- Each instruction is executed on one clock pulse (one F-E cycle per pulse)
- Clock speed dictates the number of instructions that can be executed per second
- Faster clock speed → more instructions per second

---

### Fetch-execute cycle RTN error correction
*(W21 V11/13 Q6(a))*

| Line | Description of error | Correct statement |
|---|---|---|
| 2 | Program Counter should be incremented, not decremented | PC ← [PC] + 1 |
| 3 | It should be the contents of the address stored in the MAR (indirect), not the address itself | MDR ← [[MAR]] |

---

### MAR and MDR roles in F-E cycle
*(W21 V12 Q8(a)(i))*

**MAR (Memory Address Register):**
- Stores the next memory address to be accessed (held in the PC)
- The data at this address is then fetched from memory

**MDR (Memory Data Register):**
- Stores the data fetched from the address pointed to by the MAR
- The data in it is copied to the Current Instruction Register (CIR) during the decode stage

---

### Other special purpose registers
*(W21 V12 Q8(a)(ii))*

Accept any of: Program Counter (PC), Current Instruction Register (CIR), Status register, Interrupt register

---

## 4.2 Assembly Language (`assembly-language`)

### Assembly program trace — indexed addressing outputting characters
*(S21 V11/13 Q3(b))*

Program addresses 200–207; IX starts at 0; memory at 365=1, 366=3, 367=65(='A'), 368=66(='B').

Trace sequence (two iterations then third start):
- Addr 200: LDM #1 → ACC=1; Addr 203: INC IX → IX=2; Addr 204: STO 366 → mem[366]=2; Addr 205: LDX 368 → IX=2; Addr 206: LDD (via index) → ACC=65; Addr 207: OUT → outputs **'A'**
- Loop back: ACC=2; IX=3; mem[366]=3; LDX 368 → IX=3; LDD → ACC=66; OUT → outputs **'B'**
- Third iteration ACC=3 (loop exit condition met)

---

### Assembly program trace — ASCII comparison and counter update
*(S21 V12 Q4(a))*

Memory: addr 100=68, addr 101=65, addr 102=100 (initial counter).

Input 1 = 65 (ASCII 'A'): CMP 100 (68) → not equal; CMP 101 (65) → equal → JPE branch: LDD 102 → 100, INC ACC → 101, STO 102 → mem[102]=101; loop back.

Input 2 = 68 (ASCII 'D'): CMP 100 (68) → equal → JPE branch: LDD 102 → 101, DEC ACC → 100, STO 102 → mem[102]=100; loop back.

Final state: ACC=68 on third IN wait.

---

### Assembly instruction groups
*(W21 V12 Q8(b)(ii))*

| Instruction Group | Example Instruction |
|---|---|
| Data movement | LDM #2 |
| Input and output of data | IN / OUT |
| Arithmetic operations | INC ACC / INC IX |
| Unconditional and conditional instructions | JPN 100 / JMP 100 |
| Compare instructions | CMP 100 |

---

### Addressing modes — additional modes
*(W21 V12 Q8(b)(iii))*

- **Indirect addressing**: the operand is an address; the data at that address is itself the address of the required data
- **Relative addressing**: the address to be used is an offset (number of locations) relative to the address of the current instruction
- **Indexed addressing**: the effective address is formed by adding the contents of the Index Register (IX) to the operand

---

## 4.3 Bit Manipulation (`bit-manipulation`)

### Shift operations
*(S21 V11/13 Q3(c)(i), Q3(c)(ii))*

- LSL #2 on **00110101** → **1101 0100**
- LSR #3 performs: **division by 8** (only whole number part retained)

---

### Bit operations — test and mask
*(S21 V12 Q4(b)(ii), Q4(b)(iii))*

- To test **bit 2**: `AND #4` (binary 00000100 — only bit 2 set; result is non-zero if bit 2 was 1)
- To clear **bits 4–7** (keep bits 0–3): `AND #15` (binary 00001111)

---

### Bit operation results table — W21 V11/13
*(W21 V11/13 Q6(b))* Memory: 100=00001111, 101=11110000, 102=01010101, 103=11111111, 104=00000000

| Current ACC | Instruction | New ACC |
|---|---|---|
| 11111111 | OR 101 (11110000) | 11111111 |
| 00000000 | XOR #15 (00001111) | 00001111 |
| 10101010 | LSR #2 | 00101010 |
| 01010101 | AND 104 (00000000) | 00000000 |

---

### Bit operation results table — W21 V12
*(W21 V12 Q8(b)(i))* Memory: 100=01010101, 101=11110000, 102=00001111, 103=00000000, 104=11111111

| Current ACC | Instruction | New ACC |
|---|---|---|
| 01010101 | XOR 101 (11110000) | 10100101 |
| 11110000 | AND 104 (11111111) | 11110000 |
| 00001111 | LSL #4 | 11110000 |
| 11111111 | OR 102 (00001111) | 11111111 |

---

## 5.1 Operating Systems (`operating-systems`)

### Utility software — functions (merged: S21 V11/13 Q2(a) + W21 V12 Q7(c))
*(S21 V11/13 Q2(a) — match format; W21 V12 Q7(c) — describe format)*

| Utility program | Function |
|---|---|
| Disk formatter | Sets up a disk for use / prepares the file system |
| Defragmentation | Moves parts of fragmented files so each file is stored contiguously; reduces head movement → faster access |
| Back-up | Creates a copy of files in case the originals are lost or corrupted |
| Disk repair | Scans for errors/bad sectors and corrects or marks them; reduces access time by optimising storage |
| Virus checker | Finds and removes malware; makes more RAM available for programs to run |
| Disk/system clean-up | Releases storage by removing unwanted or temporary files |

---

### OS management tasks
*(S21 V11/13 Q2(b))*

Any four from:
- Memory management
- File management
- Security management
- Hardware / device / peripheral / resources management
- Input/output management
- Process management
- Error checking and recovery
- Provision of a platform for software
- Provision of a user interface

---

### Hardware vs software interrupts
*(W21 V12 Q7(a))*

| Event | Type |
|---|---|
| Buffer full | Software interrupt |
| Printer is out of paper | Hardware interrupt |
| User has pressed a key on the keyboard | Hardware interrupt |
| Division by zero | Software interrupt |
| Power failure | Hardware interrupt |
| Stack overflow | Software interrupt |

---

### OS file management tasks
*(W21 V12 Q7(b))*

- Storage space is divided into file allocation units
- Space is allocated to particular files
- Maintains/creates directory structures
- Specifies the logical method of file storage (e.g. FAT or NTFS)
- Provides file naming conventions
- Controls access / implements access rights / implements password protection / makes file sharing possible
- Specifies tasks that can be performed on a file (open, close, delete, copy, create, move)

---

## 5.2 Language Translators (`language-translators`)

### Compiler, interpreter and assembler — operation and development use
*(Merged: W21 V11/13 Q4(d) fill-in + S21 V12 Q7(b)(i) development use)*

**Compiler:**
- Translates all the code at the same time before running the program
- Used when the high-level language program is complete
- Produces an **executable / .exe / object code** file that can be run without the source code
- Use the compiler to repeatedly test the same completed section without re-interpreting

**Interpreter:**
- Translates one line of code at a time, then runs that line before moving to the next
- Most useful **during development** / while writing the program
- Errors are identified immediately; the programmer can correct and continue from that point
- Errors are reported one at a time in real time

**Assembler:**
- Translates assembly code (low-level) into **binary / machine code**

---

### Program libraries
*(S21 V12 Q7(a))*

- A program library stores pre-written functions and routines
- The library can be referenced / imported into a program
- The programmer can call the stored functions/routines in their own program, saving writing code from scratch

---

### IDE tools — debugging and writing
*(S21 V12 Q7(b)(ii) + W21 V11/13 Q4(b)(ii))*

**Debugging tools:**
- Breakpoints
- Single stepping
- Report/variable watch windows

**Writing/coding tools (not debugging):**
- Colour coding / syntax highlighting / pretty printing
- Auto-complete
- Auto-correct
- Context-sensitive prompts
- Expand and collapse code blocks

---

## 6.1 Data Security (`data-security`)

### Data security vs data integrity — definition and categorisation
*(Merged: W21 V11/13 Q2(a) + W21 V12 Q1 + S21 V12 Q8(a))*

- **Data security**: protecting data from loss, corruption or unauthorised access
- **Data integrity**: ensuring the consistency, accuracy and correctness of data

**Categorisation of measures:**

| Measure | Category |
|---|---|
| Firewall | Data Security |
| Double entry | Data Integrity |
| Presence check | Data Integrity |
| Access rights | Data Security |
| Password | Data Security |

---

### Spyware vs virus — similarities and differences
*(W21 V11/13 Q2(c))*

**Similarities:**
- Both are pieces of malicious software (malware)
- Both are downloaded / installed / run without the user's knowledge
- Both can be embedded in other legitimate software or pretend to be legitimate / both try to avoid firewalls
- Both run in the background

**Difference:**
- A virus can **damage/delete** computer data; spyware only **records/accesses** data and sends it to a third party
- A virus **replicates** itself; spyware does not replicate
- A virus does not send data out of the computer; spyware sends recorded data to a third party

---

### Access rights for database security
*(W21 V11/13 Q5(b))*

- Access rights give users access to different elements of the database
- Implemented by having different accounts/logins for different users
- Each account has different access rights, e.g. read-only, no access, read/write
- Specific views can be assigned to users, e.g. managers can only see data for their own shop(s)

---

### Additional software security measures
*(S21 V12 Q8(b))*

Any one from: two-factor authentication, biometric password, key card access, firewall, encryption

---

### Network threats
*(S21 V12 Q8(c))*

Any two from: malware / virus / spyware, hacking / unauthorised access, phishing, pharming

---

## 6.2 Data Integrity (`data-integrity`)

### Validation check types
*(S21 V11/13 Q6(a), Q6(b), Q6(c))*

- **Range check**: verifies data falls within acceptable limits (e.g. age between 0 and 120)
- **Presence check**: verifies that data has been entered (field is not empty)
- **Existence check**: verifies that data matches a value from a predefined list of allowed values

---

### Validation and verification
*(W21 V11/13 Q2(b)(i), Q2(b)(ii))*

**Validation:**
- Checks that data is reasonable / sensible / within expected parameters
- Example: checking data is the right number or type of characters; range check; format check

**Verification:**
- Checks that data entered is the same as the original source data
- Example: **double entry** (data entered twice and compared); proofreading

---

## 7.1 Ethics and Ownership (`ethics-ownership`)

### Copyright definition
*(S21 V11/13 Q1(d))*

- The formal and legal rights to ownership of creative work / intellectual property rights
- Protects against unauthorised reproduction of work
- Provides for legal right of redress if work is copied without permission

---

### Acting ethically as a manager
*(S21 V12 Q2(a))*

- Make team members feel valued
- Get the best work out of the team
- Enable team members to work well together
- Enable the team to create the best product for the client

---

### AI for board games
*(S21 V12 Q2(b))*

- Rules, past moves and decision-making algorithms are stored
- The AI program is trained by playing many times
- AI looks ahead at possible moves and/or analyses patterns of past choices
- Chooses the move most likely to be successful
- Computer learns from mistakes by storing positive/negative results of choices and changing future choices

---

### Software licence comparison
*(S21 V12 Q2(c))*

| Statement | FSF | OSI | Shareware | Commercial |
|---|---|---|---|---|
| User can edit the source code | ✓ | ✓ | ✗ | ✗ |
| User must always pay before use | ✗ | ✗ | ✗ | ✓ |
| User can redistribute the software | ✓ | ✓ | ✓ | ✗ |
| User always gets a trial period | ✗ | ✗ | ✓ | ✗ |

---

### Benefits of joining a professional ethical body
*(W21 V11/13 Q4(a))*

- Provides ethical guidelines to follow, so the developer does not have to decide alone what is ethical
- Clients and staff know the developer is reputable / there are entry requirements that demonstrate skill
- Provides help and support, e.g. legal advice
- Runs training courses to keep skills up-to-date

---

### Acting ethically when unfamiliar with a tool
*(W21 V11/13 Q4(b)(i))*

- Tell the manager honestly that he has not used the IDE before and how he plans to get up-to-date
- Perform his own research on how to use it
- Explain to the manager that he needs additional training
- Ask the manager to book training; ask for a mentor or to shadow a colleague; practise at home before starting

---

### Why not reporting an error is unethical
*(W21 V11/13 Q4(c))*

- He did not act in the best interest of the **product** — the product might fail because the error was not reported
- He did not act in the best interest of the **client** — the client may receive a faulty product
- He did not act in the best interest of the **profession** — he is letting his profession down
- He did not act in the best interest of the **company** — not correcting the error early could lead to larger problems later

---

## 8.1 Database Concepts (`database-concepts`)

### Database terminology — field, entity, foreign key
*(S21 V12 Q1(a))*

- **Field**: a single item of data / a column or attribute in a table (e.g. CustomerID in CUSTOMER)
- **Entity**: a person, place or thing about which data can be stored (e.g. a customer, a house)
- **Foreign key**: a field in one table that is linked to a primary key in another table (e.g. CustomerID or HouseID in RENTAL)

---

### 3NF verification
*(S21 V12 Q1(b))*

- HOUSE_RENTALS is in 3NF
- All fields in all tables are fully dependent on the primary key and on no other fields
- Example: all fields in the CUSTOMER table are fully dependent on CustomerID

---

### Relational database vs flat-file advantages
*(S21 V11/13 Q7(a))*

Any three with supporting explanation:
- Flat-file has more data redundancy / the same data is stored many times
- There is program-data dependence with flat files / changes to data structure require programs to be rewritten
- Flat-file has more data inconsistency / duplicated data might be stored differently in different places
- It is not easy to perform complex searches / queries with flat files / a new program must be written each time
- Flat files have a lack of privacy / user views cannot easily be implemented

---

### Entity relationship types with examples
*(S21 V11/13 Q7(b)(i), Q7(b)(ii))*

- **One-to-one (1:1)**: e.g. customer to payment details / customer to login details
- **One-to-many (1:M)**: e.g. customer to orders
- **Many-to-many (M:M)**: e.g. order to product / customer to product
- **M:M cannot be directly implemented** in a relational database (requires a link/junction table)

---

### Primary and foreign key identification — CARS database
*(W21 V11/13 Q5(a))*

| Table | Field | Type |
|---|---|---|
| MANAGER | ManagerID | Primary Key |
| SHOP | ManagerID | Foreign Key |
| CAR | RegistrationNumber | Primary Key |
| CAR | ShopID | Foreign Key |

---

### Normalisation stages
*(W21 V12 Q6(a)(i))*

| Task | Stage |
|---|---|
| Remove any partial key dependencies | 1NF → 2NF |
| Remove any repeating groups of attributes | 0NF → 1NF |
| Remove any non-key dependencies | 2NF → 3NF |

---

### Entity-relationship diagram — PLANTSALES
*(W21 V12 Q6(a)(ii))*

- PLANT ↔ PURCHASE_ITEM: one-to-many (one plant can appear in many purchase items)
- CUSTOMER ↔ PURCHASE: one-to-many (one customer can have many purchases)
- PURCHASE ↔ PURCHASE_ITEM: one-to-many (one purchase can have many items)

---

## 8.2 DBMS (`dbms`)

### Data dictionary — purpose and contents
*(Merged: S21 V11/13 Q7(c) + W21 V12 Q6(b))*

**Purpose:** Stores metadata about the database structure (not the data itself).

**Contents include:**
- Table names
- Field names / attribute names
- Data types
- Validation rules / type of validation
- Primary keys
- Foreign keys
- Relationships between tables

---

## 8.3 DDL and DML (`ddl-dml`)

### CREATE DATABASE
*(S21 V11/13 Q7(b)(iii))*

```sql
CREATE DATABASE SHOPORDERS;
```

---

### CREATE TABLE — RENTAL
*(S21 V12 Q1(c)(i))*

```sql
CREATE TABLE RENTAL (
    RentalID INTEGER NOT NULL,
    CustomerID INTEGER NOT NULL,
    HouseID VARCHAR(5) NOT NULL,
    MonthlyCost REAL NOT NULL,
    DepositPaid BOOLEAN NOT NULL,
    PRIMARY KEY (RentalID)
);
```

---

### SELECT with JOIN — customers who have not paid deposit
*(S21 V12 Q1(c)(ii))*

```sql
SELECT FirstName, LastName
FROM CUSTOMER, RENTAL
WHERE DepositPaid = No
AND RENTAL.CustomerID = CUSTOMER.CustomerID;
```

---

### SELECT COUNT GROUP BY — cars per shop
*(W21 V11/13 Q5(c)(i))*

```sql
SELECT COUNT(RegistrationNumber)
FROM CAR
GROUP BY ShopID
```

---

### INSERT INTO CAR
*(W21 V11/13 Q5(c)(ii))*

```sql
INSERT INTO CAR
VALUES ("123AA","Tiger","Lioness",10500,"12BSTREET")
```

---

### SELECT SUM with WHERE — total items for one purchase
*(W21 V12 Q6(c)(i))*

```sql
SELECT SUM(Quantity)
FROM PURCHASE_ITEM
WHERE PurchaseID = "3011A";
```

---

### ALTER TABLE — add a date field
*(W21 V12 Q6(c)(ii))*

```sql
ALTER TABLE PURCHASE
ADD OrderDate DATE;
```

---

## Deduplication Summary

| Merge # | Entries merged | Questions involved |
|---|---|---|
| 1 | Data security vs integrity (definition + categorisation) | W21V11/13 Q2(a) + W21V12 Q1 + S21V12 Q8(a) — 3 entries → 1 |
| 2 | Utility software (match format + describe format) | S21V11/13 Q2(a) + W21V12 Q7(c) — 2 entries → 1 |
| 3 | Compiler/interpreter/assembler (fill-in + development use) | W21V11/13 Q4(d) + S21V12 Q7(b)(i) — 2 entries → 1 |
