# Paper 1 — 2022 Answers by Syllabus Topic

**Variants:** S22 V11 · S22 V12 · S22 V13 · W22 V11 · W22 V12 · W22 V13
**Deduplication:** 15 answer clusters merged across variants

---

## 1.1 Data Representation (`data-representation`)

### State the difference between a tebibyte and a terabyte
*(S22 V11 Q1a — 1 mark)*
- One tebibyte is 1024 gibibytes; one terabyte is 1000 gigabytes

### Convert signed denary −100 to 8-bit two's complement
*(S22 V11 Q1b — 1 mark)*
- `1001 1100`

### Convert denary 251 to hexadecimal
*(S22 V11 Q1c — 2 marks)*
- Working: divide by 16 (or convert to binary 11111011)
- Answer: `FB`

### Add 01010000 + 00111110 as unsigned binary
*(S22 V11 Q1d — 1 mark)*
- `1000 1110`

### Convert positive binary 01111110 to hexadecimal
*(S22 V12 Q3c — 1 mark)*
- `7E`

### Perform binary subtraction 12 − 127 in binary
*(S22 V12 Q3e — 3 marks)*
- 127 in binary: `0111 1111`
- 12 in binary: `0000 1100`
- Two's complement of 127: `1000 0001`
- 12 − 127 = `1000 1101`

### Describe what is meant by a character set
*(S22 V13 Q1a(i) — 2 marks)*
- All the characters/symbols that the computer can use/represent
- Each character has a unique number/binary/hexadecimal value

### Identify two character sets and state one difference
*(S22 V13 Q1a(ii) — 3 marks; also W22 V11 Q1c — 3 marks)*
- Character sets: ASCII · Extended ASCII · Unicode
- Differences:
  - ASCII uses 7 bits; Unicode uses 16 bits or more
  - Extended ASCII uses 8 bits; Unicode uses 16 bits or more
  - Unicode can represent more characters (supports all languages); ASCII is for one language
  - Both sets represent each character with a unique code (similarity)

### Complete table of number representations
*(S22 V13 Q1b — 5 marks)*
| Statement | Answer |
|-----------|--------|
| Hexadecimal value 11 in denary | 17 |
| Smallest denary representable by unsigned 8-bit binary | 0 |
| Denary 87 in Binary Coded Decimal (BCD) | `1000 0111` |
| Denary 240 in hexadecimal | F0 |
| Denary −20 in 8-bit two's complement | `1110 1100` |

### Convert three-digit binary / BCD / denary representations
*(W22 V11 Q1a — 3 marks)*
- `00100111` as unsigned binary → denary **39**
- `00100111` as BCD → denary **27**
- `11100111` as 8-bit two's complement → denary **−25**

### Perform binary subtraction 10110011 − 01110101
*(W22 V11 Q1b — 2 marks)*
- Working (borrowing or two's complement)
- Answer: `0011 1110`

### Convert two's complement 10010110 to denary; convert 10010110 to hex; convert 10010101 to BCD; binary addition
*(W22 V12 Q2a(i)(ii)(iii), Q2b — 5 marks)*
- `10010110` as two's complement → **−106**
- `10010110` as unsigned hex → **96**
- `10010101` to BCD: denary 149 → `0001 0100 1001`
- `10001100` + `01000110` = **`1101 0010`**

### Convert unsigned 10010011 to hexadecimal and denary
*(W22 V13 Q9a(i)(ii) — 2 marks)*
- Hex: `93`
- Denary: `147`

### State two benefits of using BCD to represent values
*(W22 V13 Q9b — 2 marks)*
- Straightforward to convert to/from BCD and denary, so less complex to encode/decode
- Easier for digital equipment to display output information
- Can represent monetary values exactly

---

## 1.2 Multimedia (`multimedia`)

### Match image representation terms to definitions
*(S22 V12 Q1a — 3 marks)*
| Term | Definition |
|------|-----------|
| Pixel | The smallest identifiable component of an image |
| Bit depth | The number of bits used to represent each colour |
| Image resolution | The number of pixels wide by the number of pixels high |
| File header | Stores data about the image file, e.g. file format, number of bits per pixel, file size |

### Colour depth and file size
*(S22 V12 Q1b(i)(ii), Q1c — 5 marks)*
- Smallest bits to represent 256 colours: **8 bits** (2^8 = 256)
- File size of 10×5 bitmap, 8 bits per colour: 10 × 5 × 8 bits / 8 = **50 bytes**
- Increasing colour depth → more bits per pixel → larger file size; decreasing → smaller file size

### Complete statements about bitmap images (bit depth and file header)
*(W22 V13 Q2e — 2 marks)*
- The **bit depth** of a bitmap image is the number of bits used to store each pixel
- Metadata about the image is stored in the **header** of the file

### Effect of actions on bitmap image file size
*(W22 V12 Q8a — 2 marks)*
| Action | Effect on file size |
|--------|---------------------|
| Change colour depth from 24 to 16 bits per pixel | Decreases |
| Change screen resolution to 1366×768 pixels | No change |
| Change colour of rectangle from black to red | No change |

### Benefits of vector graphic over bitmap
*(W22 V12 Q8b — 2 marks)*
- Can be enlarged without pixelation / loss of quality
- Individual components of the image can be edited separately
- Generally a smaller file size

### Sampling — rate and resolution
*(W22 V11 Q1d(i)(ii), W22 V12 Q6b(i)(ii), W22 V13 Q1a(b) — merged)*

**Sampling rate:** the number of samples taken per unit time / per second

**Effect of increasing sampling rate on accuracy:**
- More samples taken per second → digital waveform more closely resembles the analogue waveform
- Quantisation errors are reduced
- Increases the amount of detail stored in the recording

**Effect of increasing sampling resolution (W22 V11):**
- Increases the number of bits per sample → larger range of amplitude values
- Makes the sound file more accurate (digital waveform closer to analogue)
- Smaller quantisation errors; file size increases

**Effect of decreasing sampling resolution on file size (W22 V12):**
- Decreases the file size
- Because fewer bits are used to store each amplitude sample

**Accuracy of audio actions (W22 V13):**
| Action | Effect on accuracy |
|--------|--------------------|
| Increase sampling rate from 40 kHz to 60 kHz | Increases |
| Change duration from 20 to 40 minutes | No change |
| Decrease sampling resolution from 24 to 16 bits | Decreases |

**Calculate file size of audio recording — 50 kHz, 16-bit, 20 minutes (W22 V13 Q1b):**
- 50 000 × (20 × 60) × 16 bits = 960 000 000 bits = 120 000 000 bytes = **120 megabytes**

---

## 1.3 Compression (`compression`)

### Lossless compression to reduce a text file
*(S22 V13 Q1a(iii), W22 V11 Q7c — merged)*
- Use run-length encoding (RLE)
- Identify groups of repeated characters
- Replace them with a single copy of the character and the count of repetitions

### Why lossy compression should not be used on text files
*(S22 V13 Q1a(iv), W22 V12 Q8c(ii) — merged)*
- None of the original data can be lost / deleted
- Data loss would corrupt the text file; it may not open or the content would be wrong

### Explain how a row of identical pixels is losslessly compressed (RLE)
*(S22 V12 Q1d — 2 marks)*
- Use run-length encoding (RLE)
- Record the colour (Blue) and the number of times it occurs (10)

### Complete RLE compressed/uncompressed table
*(W22 V12 Q8c(i) — 2 marks)*
| Uncompressed | RLE compressed |
|-------------|----------------|
| EA F1 F1 F2 F2 F2 EA | 1EA 2F1 3F2 1EA |
| AB AB FF FF 1D 67 | 2AB 2FF 11D 167 |
| 32 32 80 81 81 | 2 32 1 80 2 81 |

---

## 2.1 Networks Including the Internet (`networks-internet`)

### CSMA/CD — merged S22 V12 Q9c and W22 V11 Q8
*(S22 V12 Q9c — 4 marks; W22 V11 Q8 — 4 marks)*
- A node wishing to transmit listens to the communication channel
- Data is sent only when the channel is free; if busy, the node waits
- Because multiple computers share the same transmission medium, two can start transmitting simultaneously — causing a collision
- If a collision is detected, transmission is aborted and a jamming signal is sent
- Each device waits a different random time before attempting to retransmit

### Network devices table
*(S22 V12 Q9a — 4 marks)*
| Device | Description |
|--------|-------------|
| Router | Receives and sends data between two networks operating on the same protocol |
| Wireless Network Interface Card (WNIC) | Hardware component that allows a device to connect to a wireless network; provides a MAC address |
| Repeater | Restores the digital signal so it can be transmitted over greater distances |
| Wireless Access Point (WAP) | Hardware component that provides radio communication from a central device to nodes (and vice versa) |

### Differences between fibre-optic and copper cables
*(S22 V12 Q9b — 3 marks)*
- Fibre optic transmits data using light; copper cable uses electrical signals
- Fibre optic has higher bandwidth / transmission rate than copper
- Fibre optic has smaller risk of noise/interference than copper
- Fibre optic can be used over longer distances before repeaters are needed
- Fibre optic is more difficult to hack into than copper

### Cloud computing
*(S22 V13 Q8, W22 V13 Q7a — merged)*

**Definition:** Accessing services, files or software on a remote server over the internet

**Public cloud:** Computing services offered by a third-party provider over the public internet; open/available to anyone with appropriate equipment/credentials

**Private cloud:** Computing services offered over the internet or a private internal network; only accessible to select users within the organisation

**Benefits:**
- Can be accessed from anywhere with internet access
- Do not need to install / manage security locally
- Do not need to perform backups locally
- Do not need to buy specific software/hardware
- Easy to share documents; multiple users can work on same document simultaneously

**Drawbacks:**
- Cannot access if no internet connection
- Reliant on third party for backups and security
- Cannot access if server goes down

**Cloud networking (W22 V13 Q7a):**
- Device A allowing laptop to connect to internet: **Router**
- Cloud type X (public): **Public cloud**
- Application B examples: email / word processor / spreadsheet / database / game

### Star topology LAN
*(W22 V12 Q10a — 1 mark)*
- All four computers connected directly to the switch; server also connected to the switch

### Router device attachment and role
*(W22 V12 Q10b(i)(ii) — 5 marks)*
- Device: Server (processes requests, authorises traffic / acts as proxy) or Switch (connected to all computers)
- Router role: receives packets from devices/internet; finds destination using IP address; forwards packets; assigns private IP addresses to LAN devices; maintains/updates routing table; finds most efficient path; provides LAN with a public IP address; acts as a gateway

### Subnetting and subnet masking
*(W22 V13 Q7c — 4 marks)*
**Benefits of subnetting:**
- Improves security within the network
- Reduces congestion
- Allows extension of the network / more devices attached
- Aids day-to-day management; improves performance

**Network ID and host ID (W22 V13 Q7c(ii)):**
- Device 10.10.12.1, mask 255.0.0.0 → network ID: **10**
- Device 192.168.12.4, mask 255.255.255.0 → host ID: **4**

### Satellite transmission advantage and disadvantages
*(W22 V13 Q7b — 3 marks)*
- Advantage: not fixed to a single location; allows access in remote / rural areas
- Disadvantage 1: high latency / lag / slow to connect
- Disadvantage 2: signal affected by bad weather; more expensive than wired methods; slower than fixed-line broadband; direct line of sight needed

---

## 3.1 Computers and Their Components (`computers-components`)

### Memory types — RAM, ROM, SRAM, DRAM
*(S22 V11 Q2a(i) — 5 marks)*
- RAM and ROM are both examples of **primary** memory
- RAM stores: currently running software / data / part of the OS
- ROM stores: start-up / boot-up instructions / BIOS
- SRAM uses transistors arranged as **flip-flops / latches**
- DRAM uses transistors and **capacitors**

### PROM, EPROM and EEPROM differences
*(S22 V11 Q2a(ii) — 3 marks)*
- PROM can be set (written) only once; EPROM and EEPROM can be overwritten multiple times
- EPROM must be removed from the device to be erased; EEPROM can be erased in situ
- EPROM is erased using UV light; EEPROM is erased using electrical voltage / is flash storage
- EPROM must be entirely erased before rewriting; EEPROM can be partially erased

### Principal operations of a magnetic hard disk
*(S22 V11 Q2b — 5 marks)*
- The hard disk has one or more platters/plates
- Each surface of the platter is (ferrous oxide) capable of being magnetised
- Platters are mounted on a central spindle; the mechanism is inside a sealed aluminium box
- Disks are rotated at high speed
- Each surface has a read/write head mounted on an arm just above the surface
- Electronic circuits control the movement of the arm and hence the heads
- Surface is divided into concentric tracks and into sectors; one track in one sector = a block
- Data is encoded as a magnetic pattern for each block
- Writing: variation in current in the head produces variation in the magnetic field on the disk
- Reading: variation in magnetic field produces variation in current through the head

### Embedded systems characteristics
*(S22 V12 Q2a, W22 V11 Q9a, W22 V13 Q10b(ii), W22 V12 Q3c — merged)*
- The embedded system is built into / integrated into the device
- It is a combination of hardware and software designed for a specific function / purpose
- The system performs only one task
- Must have a processor, memory and input/output
- The system is not easily changed or updated by the user
- ROM used in embedded systems: stores data that does not change; data retained without power; stores boot-up instructions / firmware / BIOS

### Primary vs secondary storage in car mileage features
*(S22 V12 Q2b — 2 marks)*
- Primary (RAM): miles travelled in the current journey (before engine is turned off)
- Secondary: total miles travelled since the car was built / miles for most recent journey after engine switched off

### Resistive touchscreen — true/false statements
*(S22 V12 Q2c — 1 mark)*
| Statement | Answer |
|-----------|--------|
| The screen always has five different layers | False |
| A processor determines horizontal and vertical coordinates of the point of contact | True |
| The touchscreen will work if any object touches the screen | True |

### Peripheral device I/O ports
*(W22 V11 Q7e — 2 marks)*
- 3D printer: USB port / COM port
- Monitor: HDMI / VGA / USB / DisplayPort

### Buffers — purpose with example
*(W22 V13 Q1c — 3 marks)*
- Purpose: acts as temporary storage to store downloaded/received data before it is used by the receiving device; allows processes/devices operating at different speeds to work independently
- Examples: printer buffer (when transferring data from computer to printer); video buffer (when streaming videos); keyboard buffer (when performing data entry)

### Control systems — importance of feedback
*(W22 V13 Q10a — 3 marks)*
- Ensures the system operates within given criteria
- Enables system output to affect subsequent system input
- Allows conditions to be automatically adjusted without human intervention

### Sensors for car alarm with justification
*(W22 V13 Q10b(i) — 2 marks)*
- Sound sensor: activated if a sound occurs inside the car
- Infra-red sensor: senses body heat of person / infra-red beams broken
- Pressure sensor: activated if intruder sits in driver's seat

### AI applications
*(S22 V12 Q8 — 3 marks)*
- Police identifying wanted people (uses image recognition to identify features in an image)
- Natural language interfaces (speech recognition, adapts to regional accents)
- Self-driving cars (detects position on road, follows route, collision avoidance)
- Game playing (models characters to react to player movements)

### Social impact of AI facial recognition at airport
*(W22 V12 Q9 — 2 marks)*
- Incorrect recognition may deny legitimate passengers access to facilities
- Privacy concerns / people dislike data being stored
- Individuals may feel safer; potential reduction in crime
- Faster boarding process; assists in catching criminals

---

## 3.2 Logic Gates and Logic Circuits (`logic-gates-circuits`)

### Gate input values giving output 1
*(S22 V11 Q2c(i) — 4 marks)*
| Gate | Input 1 | Input 2 |
|------|---------|---------|
| AND | 1 | 1 |
| NAND | 0 | 0 (or 0,1 or 1,0) |
| XOR | 0 | 1 (or 1,0) |
| NOR | 0 | 0 |

### Logic expression for three-input circuit — S22 V11
*(S22 V11 Q2c(ii) — 3 marks)*
- A NAND B
- B XOR C
- (A NAND B) OR (B XOR C)

### Logic expression — S22 V13
*(S22 V13 Q7a — 3 marks)*
- A AND B
- NOT C AND B (or B AND NOT C)
- X = (A AND B) XOR (NOT C AND B)

### Truth table X = (A XOR B) AND NOT C
*(S22 V12 Q7 — 2 marks)*
| A | B | C | X |
|---|---|---|---|
| 0 | 0 | 0 | 0 |
| 0 | 0 | 1 | 0 |
| 0 | 1 | 0 | 1 |
| 0 | 1 | 1 | 0 |
| 1 | 0 | 0 | 1 |
| 1 | 0 | 1 | 0 |
| 1 | 1 | 0 | 0 |
| 1 | 1 | 1 | 0 |

### Truth table X = (A NAND B) OR (A AND NOT C)
*(S22 V13 Q7b — 2 marks)*
| A | B | C | X |
|---|---|---|---|
| 0 | 0 | 0 | 1 |
| 0 | 0 | 1 | 1 |
| 0 | 1 | 0 | 1 |
| 0 | 1 | 1 | 1 |
| 1 | 0 | 0 | 1 |
| 1 | 0 | 1 | 1 |
| 1 | 1 | 0 | 1 |
| 1 | 1 | 1 | 0 |

### Truth table X = NOT((NOT A AND NOT B) OR (NOT B AND NOT C))
*(W22 V11 Q3b — 2 marks)*
| A | B | C | X |
|---|---|---|---|
| 0 | 0 | 0 | 0 |
| 0 | 0 | 1 | 0 |
| 0 | 1 | 0 | 1 |
| 0 | 1 | 1 | 1 |
| 1 | 0 | 0 | 0 |
| 1 | 0 | 1 | 1 |
| 1 | 1 | 0 | 1 |
| 1 | 1 | 1 | 1 |

### Truth table X = NOT(A OR B OR C) AND (B NOR C)
*(W22 V12 Q3b — 2 marks)*
| A | B | C | X |
|---|---|---|---|
| 0 | 0 | 0 | 1 |
| 0 | 0 | 1 | 0 |
| 0 | 1 | 0 | 0 |
| 0 | 1 | 1 | 0 |
| 1 | 0 | 0 | 0 |
| 1 | 0 | 1 | 0 |
| 1 | 1 | 0 | 0 |
| 1 | 1 | 1 | 0 |

### Truth table Y = (NOT P AND Q) OR (Q AND NOT R)
*(W22 V13 Q5b — 2 marks)*
| P | Q | R | Y |
|---|---|---|---|
| 0 | 0 | 0 | 0 |
| 0 | 0 | 1 | 0 |
| 0 | 1 | 0 | 1 |
| 0 | 1 | 1 | 1 |
| 1 | 0 | 0 | 0 |
| 1 | 0 | 1 | 0 |
| 1 | 1 | 0 | 1 |
| 1 | 1 | 1 | 0 |

### Logic circuit for greenhouse window
*(W22 V12 Q3a — 3 marks)*
- Expression: X = (T AND NOT W) AND (NOT R OR NOT M)
- Marks: T AND NOT W; NOT R OR NOT M; final AND gate

### Logic circuit for X = NOT((NOT(A AND B)) OR (NOT(B AND C)))
*(W22 V13 Q5a — 3 marks)*
- NOT (A AND B)
- NOT (B AND C)
- NOT(NOT(A AND B) OR NOT(B AND C))

---

## 4.1 CPU Architecture (`cpu-architecture`)

### Role of registers in Fetch-Execute cycle
*(S22 V11 Q6a(i) — 5 marks)*
- Program Counter (PC): holds the address of the next instruction; incremented / changed to the next address each cycle
- Memory Address Register (MAR): holds the address to fetch data from (copied from PC)
- Memory Data Register (MDR): holds the data at the address stored in MAR
- Current Instruction Register (CIR): instruction transferred here from MDR for decoding and execution

### F-E cycle register transfer notation — merged S22 V13 Q2a and W22 V12 Q7c
*(S22 V13 Q2a — 3 marks; W22 V12 Q7c — 3 marks)*
| Step | RTN | Description |
|------|-----|-------------|
| Copy next instruction address to MAR | MAR ← [PC] | Contents of PC copied to MAR |
| Increment the Program Counter | PC ← [PC] + 1 | Address in PC is incremented |
| Fetch data from addressed location | MDR ← [[MAR]] | Data in the address held in MAR is copied to MDR |
| Copy MDR to Current Instruction Register | CIR ← [MDR] | Instruction transferred from MDR to CIR |

### Interrupt detection and handling — merged S22 V11 Q6a(ii), S22 V13 Q2b, W22 V13 Q4a(ii)
*(S22 V11 Q6a(ii) — 5 marks; S22 V13 Q2b — 5 marks)*
- **Detection:** at the start / end of each Fetch-Execute cycle (after execute stage, before next cycle begins)
- **Priority** is checked
- If the interrupt is of **lower priority** than the current process: continue with F-E cycle
- If the interrupt is of **higher priority**:
  - State of current process / contents of registers stored on the **stack**
  - Location / type of interrupt identified
  - Appropriate **Interrupt Service Routine (ISR)** is called to handle the interrupt
  - When ISR finishes: check for further high-priority interrupts / return to step 1
  - Otherwise: load data from stack and continue with process

### Roles of special purpose registers
*(W22 V11 Q5b(i), W22 V13 Q4a(i) — merged)*
- **PC (Program Counter):** stores the address / memory location of the next instruction to be fetched
- **IX (Index Register):** stores a value that is added to an address to give another address
- **SR (Status Register):** stores flags set by events / results of arithmetic and logic operations and interrupt flags
- **MAR:** holds the address in memory from which data will be read or to which data will be written
- **MDR:** holds the data/instructions which have been read from or are to be written to the address in the MAR

### System buses for CPU components
*(W22 V11 Q5b(ii) — 1 mark)*
| CPU Component | Bus |
|---------------|-----|
| System clock | Control bus |
| Memory Address Register (MAR) | Address bus |

### Stored program concept
*(W22 V11 Q5a — 1 mark)*
- Instructions and data are stored in the same memory space / in main memory

### Control Unit purpose
*(W22 V11 Q5b(iii) — 2 marks)*
- Coordinates / synchronises the actions of other components in the CPU
- Sends / receives control signals along the control bus
- Manages the execution of instructions in sequence

### Purpose of an interrupt
*(W22 V11 Q5c — 2 marks)*
- To send a signal from a device or process seeking the attention of the processor

### Causes of software interrupts
*(W22 V11 Q5d — 2 marks)*
- Division by zero / runtime error in a program
- Attempt to access an invalid memory location
- Array index out of bounds
- Stack overflow

### System clock purpose
*(W22 V13 Q4b — 2 marks)*
- Synchronises operations by creating timing signals
- Processes operations in the correct order / sequence

### Performance factors
*(S22 V11 Q6b, W22 V11 Q7d, W22 V13 Q4c — merged)*
- **Clock speed:** higher clock speed → more F-E cycles per second
- **Number of cores:** more instructions carried out simultaneously
- **Bus width:** more data transferred each time / more memory locations directly accessible
- **Cache:** higher capacity → more frequently used instructions stored for fast access; prevents CPU idling while waiting for data; more cache → less swapping between RAM and cache
- **RAM quantity (W22 V13):** more applications reside in memory simultaneously, saving disk access times

### Cache memory benefits
*(W22 V11 Q7d — 2 marks)*
- Cache is fast access memory close to the CPU
- Stores frequently used instructions / data
- More cache → more instructions can be transferred faster; less swapping between RAM and cache; prevents CPU idling

---

## 4.2 Assembly Language (`assembly-language`)

### Addressing modes — trace LDM, LDD, LDI
*(S22 V13 Q3a — 3 marks)*

Memory contents: 100→101, 101→67, 102→104, 103→100, 104→68

| Instruction | ACC |
|-------------|-----|
| LDM #103 | 103 |
| LDD 102 | 104 |
| LDI 103 | 101 |

### Instruction groups
*(S22 V13 Q3b, W22 V13 Q6c — merged)*
- **Input and output of data:** takes input from user; outputs character of binary number
- **Arithmetic operations:** perform addition and subtraction
- **Unconditional and conditional instructions (jump):** move to another instruction identified by a label
- **Compare instructions:** compare the result/ACC to another value

### Bit manipulation match — XOR, OR, AND on 00111101
*(S22 V13 Q3c — 3 marks)*
| Instruction | Result |
|-------------|--------|
| XOR B11110000 | 11001101 |
| OR B01010101 | 01111101 |
| AND B11111111 | 00111101 |

### Assembly language program trace — W22 V11
*(W22 V11 Q6a(i) — 4 marks)*

Initial: address 100=0, 101=0, 110=66 (B), 111=65 (A), 112=35 (#)

Program counts characters before '#' (ASCII 35), adding value at address 100 + 1 each iteration, then outputs ASCII 48+count. Output: character '2' (ASCII 50)

Key trace rows (highlighted sets):
- LDR #0 → IX=0; LDX 110 → ACC=66; CMP #35 → not equal; ADD 100 → ACC=66; STO 101 → mem[101]=66; LDM #1; ADD 100 → ACC=1; STO 100 → mem[100]=1; INC IX → IX=1; LDX 110 → ACC=65; CMP #35 → not equal; JPN 81; ADD 100 → ACC=66; STO 101; LDM #1; ADD 100 → ACC=2; STO 100 → mem[100]=2; INC IX → IX=2; LDX 110 → ACC=35; CMP #35 → equal; JPE 92; LDD 100 → ACC=2; ADD #48 → ACC=50; OUT → Output: **2**

### Purpose of swap fragment
*(W22 V11 Q6a(ii) — 1 mark)*
- Swaps the contents of memory address 100 and memory address 101

### Two-pass assembler — pass table
*(W22 V11 Q6c — 2 marks)*
| Task | First pass | Second pass |
|------|-----------|-------------|
| Remove comments | ✓ | |
| Read assembly language program one line at a time | ✓ | ✓ |
| Generate the object code | | ✓ |
| Check the opcode is in the instruction set | ✓ | |

### Assembly language program trace — W22 V12
*(W22 V12 Q7a — 5 marks)*

Initial: address 100=0, 101=0, 102=112, 103=4, 110=1, 111=4, 112=0

Program iterates through array at address 110+IX, comparing with value at address 103 (=4), counting matches and updating max. Stops when line 90 (JMP 76) is executed for the second time.

Key highlighted rows:
- LDR #0 → IX=0; LDX 110 → ACC=1; CMI 102 → compare ACC(1) with mem[mem[102]]=mem[112]=0 → not equal; JPE 91 → skip; CMP 103 → ACC(1) vs mem[103]=4 → ACC<4 → JPN 84; INC ACC → ACC=2; STO 101 → mem[101]=2; JMP 86; LDD 100 → ACC=0; INC ACC → ACC=1; STO 100 → mem[100]=1; INC IX → IX=1; JMP 76; LDX 110 → ACC=4; CMI 102 → compare with mem[112]=0 → not equal; CMP 103 → 4=4 → equal; JPE skipped; ADD 101 → ACC=6; STO 101 → mem[101]=6; LDD 100 → ACC=1; INC ACC → ACC=2; STO 100 → mem[100]=2; INC IX → IX=2; JMP 76 (second time)

### Assembly language program trace — W22 V13
*(W22 V13 Q6a(i) — 4 marks)*

Initial: address 100=1, 101=0, 110=97 (a), 111=98 (b), 112=97 (a)

Program counts uppercase letters. It loads count from 100, compares with 2 (limit), then checks each character: subtracts 32 (converts lowercase ASCII to uppercase range), compares with 65 (A). If ≥65, increments counter at 101. Outputs count+48.

Key trace rows:
- LDR #0 → IX=0; LDD 100 → ACC=1; CMP #2 → 1≠2; LDX 110 → ACC=97; SUB #32 → ACC=65; CMP #65 → equal; JPN 86 → skip; LDM #1; ADD 101 → ACC=1; STO 101 → mem[101]=1; LDM #1; ADD 100 → ACC=2; STO 100 → mem[100]=2; INC IX → IX=1; JMP 76; LDD 100 → ACC=2; CMP #2 → equal; JPE 91; LDD 101 → ACC=1; ADD #48 → ACC=49; OUT → Output: **1**

### Relative addressing purpose
*(W22 V13 Q6a(ii) — 2 marks)*
- To allow for re-locatable code
- Because all target addresses can be specified by the base address + offset

---

## 4.3 Bit Manipulation (`bit-manipulation`)

### AND operations
*(S22 V11 Q6c(i), W22 V11 Q6b(ii), W22 V12 Q7b(ii), W22 V13 Q6b(i))*
| Input ACC | Instruction | Result |
|-----------|-------------|--------|
| 0110 1101 | AND #2 | 0000 0000 |
| 1001 0011 | AND B11110000 | 1001 0000 |
| 0101 0011 | AND 50 (01001101) | 0100 0001 |
| 0011 0110 | AND B01001100 | 0000 0100 |

### OR operations
*(S22 V11 Q6c(ii), S22 V12 Q3a, W22 V11 Q6b(iii), W22 V12 Q7b(iv), W22 V13 Q6b(ii))*
| Input ACC | Instruction | Result |
|-----------|-------------|--------|
| 0110 1101 | OR #8 | 0110 1101 |
| 0110 0101 | OR #255 (or OR #154 / XOR #154) | 1111 1111 |
| 1001 0011 | OR B11001100 | 1101 1111 |
| 0101 0011 | OR 51 (10001111) | 1101 1111 |
| 1001 0101 | OR B01001111 | 1101 1111 |

### XOR operations
*(S22 V12 Q3b, W22 V11 Q6b(i), W22 V12 Q7b(i))*
| Input ACC | Instruction | Result |
|-----------|-------------|--------|
| 0110 0101 | XOR #255 | 1001 1010 |
| 1001 0011 | XOR B00011111 | 1000 1100 |
| 0101 0011 | XOR B00011111 | 0100 1100 |

### Logical shift operations
*(S22 V11 Q6c(iii), S22 V12 Q3d, W22 V11 Q6b(iv), W22 V12 Q7b(iii), W22 V13 Q6b(iii))*
| Input ACC | Instruction | Result |
|-----------|-------------|--------|
| 0110 1101 | LSL #4 | 1101 0000 |
| 0111 1110 | LSL #3 | 1111 0000 |
| 1001 0011 | LSR #2 | 0010 0100 |
| 0101 0011 | LSL #3 | 1001 1000 |
| 1001 1101 | LSR #2 | 0010 0111 |

### Bit manipulation instruction to set all bits to 1
*(S22 V12 Q3a — 2 marks)*
- Opcode: OR · Operand: #255 (or OR #154; XOR #154)

### Bit manipulation instruction to invert all bits
*(S22 V12 Q3b — 2 marks)*
- Opcode: XOR · Operand: #255

---

## 5.1 Operating Systems (`operating-systems`)

### OS management tasks — merged S22 V13 Q4a and W22 V13 Q3
*(S22 V13 Q4a — 4 marks; W22 V13 Q3 — 4 marks)*
| Task | Description |
|------|-------------|
| Memory management | Dynamically allocates memory to processes; controls movement of data between RAM, processor, VM; reclaims unused blocks |
| File management | Creates/renames/deletes files and folders; marks unallocated file storage for availability |
| Security management | Creates accounts/passwords; provides/upgrades firewall / anti-malware; validates user and process authenticity |
| Hardware management | Receives data from input devices / sends data to output devices; installs programs (device drivers) for devices connected to external ports |
| Process management | Decides which process to run next; supports multitasking; allows processes to transfer data to and from each other |

### Utility software — merged S22 V13 Q4b and W22 V12 Q1a
*(S22 V13 Q4b(i)(ii) — 5 marks; W22 V12 Q1a — 5 marks)*
| Utility | Purpose |
|---------|---------|
| Back-up software | Makes a copy of data at regular intervals so that if it is lost/corrupted it can be retrieved |
| Defragmentation | Makes individual files occupy contiguous blocks; moves free space together; improves disk access times |
| Virus checker / anti-virus | Scans files on the hard drive for malicious program code |
| Disk formatter | Initialises a disk |
| Disk repair | Checks for and fixes inconsistencies on a disk |
| Compression software | Decreases the file size |
| Backup | Creates copies of files in case the original is lost |

### Memory management — how OS organises RAM
*(W22 V11 Q7b — 2 marks)*
- RAM is assigned into blocks
- Dynamic allocation of RAM to programs/processes
- Reclaims unused blocks of RAM
- Prevents two processes occupying the same area of RAM simultaneously
- Manages paging, segmentation and virtual memory

### DLL (Dynamic Link Library) file benefits
*(W22 V11 Q7a — 2 marks; S22 V11 Q5c — 3 marks — merged)*
- Memory requirements reduced: DLL loaded only once / when required (shared across programs)
- Executable file size smaller because it does not contain all library routines
- Maintenance done separately — no need to recompile the main program when DLL changes
- Saves programming/testing time — code not written/re-written from scratch
- Code is already tested → more robust/reliable
- If library routine improves, the program benefits automatically

---

## 5.2 Language Translators (`language-translators`)

### Compiler and interpreter operation — merged S22 V12 Q6a+Q6b and W22 V12 Q1b
*(S22 V12 Q6a — 2 marks; S22 V12 Q6b — 2 marks; W22 V12 Q1b(i)(ii) — 4 marks)*

**Compiler:**
- Attempts to translate all the source code
- Creates a separate error report at the end (reports all errors at once)
- If no errors: creates an executable file that runs without access to source code

**Interpreter:**
- Reads each line, translates it and executes it before moving to the next
- Stops when an error is encountered; displays error immediately (real-time)
- Programmer can correct the error and the interpreter continues from that point

**Drawbacks of compiler vs interpreter during development:**
- Larger amounts of code take time to compile
- Code cannot be changed without recompilation
- The program will not run if there are any errors
- Cannot easily test specific sections of unfinished source code

**Why partially compile and partially interpret:**
- Partially compiled programs can be used on different platforms (interpreted at run time)
- Machine code generated at run time optimises for the specific CPU

### IDE features — merged S22 V11 Q5a and S22 V12 Q6c
*(S22 V11 Q5a — 4 marks; S22 V12 Q6c — 4 marks)*

**Feature to description matching:**
| IDE Feature | Description |
|-------------|-------------|
| Context-sensitive prompt | Displays predictions of the code being entered |
| Dynamic syntax check | Underlines or highlights statements that do not meet language rules |
| Breakpoint | Stops the code executing at a set line |
| Single stepping | Executes one line of the program and then stops |
| Report window | Outputs the contents of variables and data structures |

**IDE for writing:**
- Enter code into an editor; pretty printing to identify key terms
- Context-sensitive prompts to help complete statements
- Auto-complete / auto-formatting / dynamic syntax checking
- Expand and collapse code blocks

**IDE for testing:**
- Single stepping to run the code line by line
- Breakpoints to stop the code at set points to check values
- Report window to see how variables change

---

## 6.1 Data Security (`data-security`)

### Security vs privacy
*(S22 V11 Q3a — 1 mark)*
- Security prevents against **loss** (of data); privacy prevents **unauthorised access**

### Data security threats and countermeasures — merged S22 V11 Q3b, S22 V12 Q4b, S22 V13 Q5a
*(S22 V11 Q3b — 6 marks; S22 V12 Q4b — 6 marks)*

| Threat | Description | Prevention |
|--------|-------------|------------|
| Malware / virus | Malicious software that replicates and can delete/damage files | Install and run anti-malware / anti-virus; firewall |
| Hacker / unauthorised access | Illegal access with malicious intent to delete/steal examination papers or data | Firewall; strong/biometric passwords; user permissions |
| Spyware | Software installed without user knowledge; records keystrokes and sends data to third party | Firewall; anti-spyware; virtual onscreen keyboard |

**Why keep data and computer system secure (S22 V12 Q4a):**
- Data needs protecting from someone amending / deleting or taking it
- Computer system needs protecting to stop malware being installed or the system being damaged

**Additional security measures (S22 V13 Q5a(ii)):**
- Install / run a firewall
- Up-to-date anti-virus / anti-malware
- Username and strong password; encryption; access rights

### Security feature match — pharming, anti-virus, encryption, firewall
*(W22 V11 Q2 — 4 marks)*
| Feature | Description |
|---------|-------------|
| Encryption | Converts data to an alternative form |
| Pharming | Redirects a user to a fake/false website |
| Anti-virus software | Scans files on the hard drive for malicious software |
| Firewall | Accepts or rejects incoming and outgoing packets based on criteria |

### Encryption
*(S22 V12 Q4c — 2 marks)*
- Data is turned into cipher text / encoded
- Used so that it cannot be understood if intercepted without the decryption key

### Digital signature ensures email authenticity
*(W22 V12 Q6a(i) — 2 marks)*
- Email message put through a hashing algorithm to produce a digest
- Digest encrypted with sender's private key to create the digital signature
- The digital signature can only be decrypted with the matching sender's public key

### Firewall protects data
*(W22 V12 Q6a(ii) — 3 marks)*
- Monitors incoming and outgoing packets / traffic
- Checks against an allow list / deny list of IP addresses or a set of rules for acceptable data/ports
- Blocks transmissions that do not meet criteria; allows through if criteria satisfied

---

## 6.2 Data Integrity (`data-integrity`)

### Validation and verification — merged S22 V11 Q4d, S22 V13 Q5b, W22 V12 Q4
*(S22 V11 Q4d — 4 marks; S22 V13 Q5b — 7 marks; W22 V12 Q4a+Q4b+Q4c — 6 marks)*

**Difference between verification and validation (W22 V12 Q4a):**
- Data **verification** checks if input data is the same as the original document
- Data **validation** checks that the data is reasonable / sensible / within expected bounds

**Validation rules:**
- **Range check:** ensure mark is between 0 and max marks; date of birth between 1900 and today; month between 1 and 12
- **Presence check:** ensure a mark / date of birth has been entered (field not empty)
- **Type check:** ensure an integer value is entered
- **Length check:** ensure data contains the correct number of characters (e.g. 8 characters for a date)
- **Format check:** ensure data is in the required format / only expected characters allowed

**Verification methods:**
- **Double entry:** enter the data twice; computer compares entries and alerts if different
- **Visual check:** manually compare the data entered with the data on the original document

**Why data may not be correct even after validation and verification:**
- Validation checks data is reasonable — it does not check if accurate data has been entered
- Verification checks if data matches the given document — it does not check if the original data is accurate

**Checksum (W22 V12 Q4b):**
- Checksum value is calculated from the data before transmission
- Calculated value transmitted with the data
- Receiving computer recalculates checksum from received data
- If checksum received and calculated match → no error; if different → error detected

**Two validation methods for non-numeric data (W22 V12 Q4c):**
- Format check: ensure data is in the required format / only expected characters allowed
- Lookup check: ensure data is already present in the system
- Length check: data contains correct number of characters

---

## 7.1 Ethics and Ownership (`ethics-ownership`)

### Software licensing types allowing editing and redistribution
*(S22 V11 Q5b — 2 marks)*
- Open Source Initiative licence
- Free Software Foundation (GPL/copyleft) licence

### Open source vs commercial licensing
*(W22 V13 Q8a — 4 marks)*

**Why programs distributed under open source:**
- To allow users to customise / modify the code
- To allow errors to be reported / identified / fixed by users
- To allow additional features to be added
- To allow for collaboration

**How programmer benefits from commercial licence:**
- Enables the program to be copyrighted
- Prevents illegal changes to / copies of the program
- Protects the source code
- A fee can be charged for the program

### Economic impact of AI module on garage
*(W22 V13 Q8b — 2 marks)*
- Reduces costs to the garage because less time taken for diagnosis
- Increases profits as technicians spend more time repairing / completing more jobs per day
- May decrease costs to customers so garage gains customers
- Program may be expensive to buy / maintain / update, reducing profit margins

---

## 8.1 Database Concepts (`database-concepts`)

### Advantages of relational database over file-based
*(S22 V11 Q4a — 4 marks)*
- Reduced data redundancy / each item of data stored only once
- Maintains data consistency / improves data integrity (changes in one table update automatically)
- Program-data independence (changes to data do not require programs to be re-written)
- Complex queries are easier to run
- Can provide different views so users see only specific aspects

### Third Normal Form — merged S22 V11 Q4b, W22 V11 Q4b, S22 V13 Q6c
*(S22 V11 Q4b — 3 marks; W22 V11 Q4b — 3 marks; S22 V13 Q6c — 3 marks)*

| Normal Form | Description |
|-------------|-------------|
| 1NF | No repeating groups or repeating attributes; data is atomic |
| 2NF | All attributes must be fully dependent on the (composite) primary key; no partial dependencies |
| 3NF | All attributes fully dependent on the primary key and no other attributes; no transitive/non-key dependencies |

**Justification that MARKS database is in 3NF (S22 V11 Q4b):**
- No repeated attributes / already in 2NF
- Each field fully dependent on corresponding primary key / no partial dependencies
- No transitive dependencies

**Normalising GARDEN database to 3NF (W22 V12 Q5a):**
- Remove the many-to-many relationship between OWNER and TREE
- Remove TreeID and TreePosition from OWNER table
- Create a linking table (e.g. OWNER_TREE) containing OwnerID, TreeID and TreePosition
- Composite primary key of linking table: OwnerID and TreeID

### E-R diagrams
*(S22 V12 Q5a — 2 marks; W22 V11 Q4a — 3 marks)*

**FILMS database (S22 V12):**
- ACTOR linked to FILM_FACT through FILM_ACTOR (many-to-many resolved via linking table)

**PHOTOGRAPHS database relationships (W22 V11):**
- 1:M between CUSTOMER and PARTY
- 1:M between PARTY and PHOTO_DATA
- 1:M between CAMERA_DATA and PHOTO_DATA

### Composite primary key — FILM_ACTOR
*(S22 V12 Q5b — 2 marks)*
- Neither ActorID nor FilmID alone uniquely identifies each tuple
- One actor cannot appear in the same film twice, so together they are unique

### Table relationships — STAFF and DEVICE
*(S22 V13 Q6a — 4 marks)*
- Primary key StaffID in STAFF links to foreign key StaffID in DEVICE
- One staff member can have many devices
- Each device belongs to only one member of staff

### Tuple definition and example
*(W22 V11 Q4c(i) — 2 marks)*
- Tuple: a single row in a table
- Example: any complete row from PHOTO_DATA (e.g. ST23-56, BD987, 08:34, NIK-02)

### Key concepts — ASTRONOMY database
*(W22 V13 Q2a — 3 marks)*
| Item | Answer |
|------|--------|
| Suitable primary key for COMPANY | CompanyID |
| Candidate key in TELESCOPE | SerialNumber or TelescopeID |
| Degree of relationship TELESCOPE → PHOTOGRAPH | 1:M (one to many) |

### Candidate key definition
*(W22 V12 Q5c — 1 mark)*
- An attribute or set of attributes that could serve as a primary key

---

## 8.2 DBMS (`dbms`)

### DBMS features — merged S22 V12 Q5e and W22 V13 Q2b+Q2f
*(S22 V12 Q5e — 6 marks; W22 V13 Q2b, Q2f — 3 marks)*

A DBMS provides data management. This includes development of a **data dictionary** that stores information about the data stored, such as **field names** and **primary keys**.

The **logical schema** uses methods such as an E-R diagram to show the structure of the database and its relationships (the logical schema identifies the relationship between data and its structure).

The **query processor** allows a user to perform searches to find specific data; it allows the user to enter criteria, searches for data meeting those criteria, and organises the results for display.

The DBMS also provides a developer **interface** that allows the user to create tables, forms and reports.

### Data dictionary with example
*(W22 V12 Q5d(i) — 2 marks)*
- Stores metadata about the database
- Examples of content: field/attribute names; table name; validation rules; data types; primary/foreign keys; relationships

### Logical schema
*(W22 V12 Q5d(ii) — 2 marks)*
- An overview of the database structure
- Models the problem/situation using methods such as an E-R diagram
- Independent of any particular DBMS

---

## 8.3 DDL and DML (`ddl-dml`)

### CREATE TABLE STUDENT_TEST
*(S22 V11 Q4c(i) — 5 marks)*
```sql
CREATE TABLE STUDENT_TEST (
    StudentID INTEGER,
    TestID VARCHAR,
    Mark INTEGER,
    PRIMARY KEY(StudentID, TestID),
    FOREIGN KEY(TestID) REFERENCES TEST(TestID),
    FOREIGN KEY(StudentID) REFERENCES STUDENT(StudentID)
);
```

### SELECT with AVG — average mark for test A7
*(S22 V11 Q4c(ii) — 3 marks)*
```sql
SELECT AVG(Mark)
FROM STUDENT_TEST
WHERE TestID = 'A7';
```

### SELECT with INNER JOIN — actor IDs for Cinderella
*(S22 V12 Q5c — 4 marks)*
```sql
SELECT FILM_ACTOR.ActorID
FROM FILM_ACTOR
INNER JOIN FILM_FACT
ON FILM_FACT.FilmID = FILM_ACTOR.FilmID
WHERE FILM_FACT.FilmTitle = 'Cinderella';
```

### SELECT with COUNT — films in January 2022
*(S22 V12 Q5d — 3 marks)*
```sql
SELECT COUNT(FilmID)
FROM FILM_FACT
WHERE ReleaseDate >= #01/01/2022# AND ReleaseDate <= #31/01/2022#;
-- OR: WHERE ReleaseDate BETWEEN #01/01/2022# AND #31/01/2022#;
```

### SELECT COUNT with INNER JOIN — devices for Ali Khan
*(S22 V13 Q6b(i) — 4 marks)*
```sql
SELECT COUNT(STAFF.StaffID)
FROM STAFF
INNER JOIN DEVICE
ON STAFF.StaffID = DEVICE.StaffID
WHERE STAFF.FirstName = 'Ali'
AND STAFF.LastName = 'Khan';
```

### ALTER TABLE — add attribute to DEVICE
*(S22 V13 Q6b(ii) — 2 marks)*
```sql
ALTER TABLE DEVICE
ADD Returned BOOLEAN;
```

### SELECT COUNT with LIKE — photographs from CAN cameras
*(W22 V11 Q4c(ii) — 4 marks)*
```sql
SELECT COUNT(PhotoID)
FROM PHOTO_DATA
WHERE CameraID LIKE 'CAN%';
```

### ALTER TABLE — add two fields to CAMERA_DATA
*(W22 V11 Q4d — 3 marks)*
```sql
ALTER TABLE CAMERA_DATA
ADD NumberStored INTEGER, LastUsed DATE;
```

### INSERT INTO TREE — new record
*(W22 V12 Q5b — 3 marks)*
```sql
INSERT INTO TREE
VALUES ('LOW_1276', 'Salix_Alba', 30.00, TRUE);
```

### SELECT COUNT with LIKE — telescopes for company starting HW
*(W22 V13 Q2c — 4 marks)*
```sql
SELECT COUNT(TelescopeID)
FROM TELESCOPE
WHERE CompanyID LIKE 'HW%';
```

### ALTER TABLE — add Resolution field to PHOTOGRAPH
*(W22 V13 Q2d — 2 marks)*
```sql
ALTER TABLE PHOTOGRAPH
ADD Resolution TEXT;
```
