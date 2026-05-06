# Paper 1 — 2023 Answers by Syllabus Topic

**Source:** S23 V11, S23 V12, S23 V13, W23 V11, W23 V12, W23 V13  
**Deduplication applied:** 10 clusters merged across variants

---

## 1. data-representation

### Analogue data (W23 V13 Q1a) [1]
- Data values that are continuously changing / variable / can take any value

### Sampling terminology (W23 V13 Q1b) [2]
| Term | Description |
|---|---|
| Sampling | Taking measurements at regular intervals and storing the values |
| Sampling rate | The number of samples taken per second |
| Sampling resolution | The number of bits used to store each sample |

### Units of measurement — kibibyte vs kilobyte/megabyte (S23 V11 Q3di, W23 V12 Q3a) [1 each]
*Merged — S23 V11 and W23 V12*
- Kibibyte = 1024 bytes (binary prefix); kilobyte = 1000 bytes (denary prefix)
- Kibibyte = 2¹⁰ bytes; megabyte = 10⁶ bytes / 1 000 000 bytes
- "Kibi" is a binary prefix; "mega" is a denary prefix

### Unique values in 16 bits (S23 V12 Q4a) [1]
- 2¹⁶ = 65 536

### Two's complement range — 8 bits (S23 V11 Q3div) [2]
- Smallest: **10000000** (−128)
- Largest: **01111111** (+127)

### Two's complement range — matching (S23 V13 Q7a) [3]
| Description | Denary value |
|---|---|
| Smallest 8-bit two's complement | −128 |
| Largest 8-bit two's complement | +127 |
| Largest unsigned 8-bit integer | 255 |

### One's complement of −120 (S23 V12 Q4b) [2]
- Working: +120 = 0111 1000
- One's complement: **1000 0111**

### Denary 964 to BCD (S23 V11 Q3dii) [1]
- **1001 0110 0100**

### BCD 100001100101 to denary (W23 V12 Q3bii) [1]
- Groups: 1000 = 8, 0110 = 6, 0101 = 5 → **865**

### Unsigned binary 000111010110 to denary (W23 V12 Q3biii) [1]
- 256+128+64+16+4+2 = **470**

### Binary to hexadecimal — 11110010 (S23 V11 Q3diii) [1]
- 1111 = F, 0010 = 2 → **F2**

### Hexadecimal A04 to denary (S23 V12 Q4c) [2]
- Working: A04 = (10 × 256) + 0 + 4 = 2560 + 4
- Answer: **2564**

### Denary −196 to 12-bit two's complement (W23 V12 Q3bi) [1]
- Answer: **1111 0011 1100**

### Binary addition (S23 V11 Q3dv) [2]
```
  10110000
+ 00011011
----------
  11001011
```

### Practical application of BCD (W23 V12 Q3c) [2]
- **Financial/banking calculations** — difficult to represent decimal values exactly in normal binary; financial transactions use only two decimal places and must be accurate without accumulating errors
- **Electronic displays** (calculators, digital clocks) — visual displays only need to show individual digits; conversion between denary and BCD is easier
- **Storage of date/time in BIOS** — easier conversion with denary

---

## 2. multimedia

### Vector graphics terminology (W23 V11 Q1a) [2]
*Also: S23 V11 Q1a (drawing list/pixel/colour depth)*

| Term | Description |
|---|---|
| Drawing list | Data required to create all components in the graphic |
| Drawing object | A component created using a formula |
| Property | Defines one characteristic of a component |

### Bitmap image terminology (S23 V11 Q1a) [3]
| Term | Definition |
|---|---|
| Drawing list | All the drawing objects in an image / a list storing commands to draw each object |
| Pixel | The smallest part of the image / one square dot of one colour |
| Colour depth | The number of bits per pixel / determines the number of colours representable |

### Bitmap file header contents (S23 V11 Q1bi) [2]
- Confirmation it is a bitmap / file type
- Compression type
- Location/offset of data within the file
- Dimensions (e.g. 100×100 pixels)

*(Colour depth and image resolution are always included — identify two **other** items)*

### Bit depth — definition and effect (W23 V11 Q1b) [3]
- **Definition:** The number of bits used to represent each colour
- **Effect of increasing:** The image has a greater range of colours; closer to the original / more realistic
- **Effect of decreasing:** The image has a smaller range of colours; less like the original / less realistic

### File size calculations — bitmap (S23 V11 Q1bii, W23 V12 Q6c, W23 V13 Q2b) [2 each]
*Three variants merged*

**S23 V11 — 1500×3000, 8-byte bit depth → MB:**
- Working: (1500 × 3000 × 8) / 1 000 000
- Answer: **36 MB**

**W23 V12 — 2048×1024, 10-bit → mebibytes:**
- Working: (2048 × 1024 × 10) / (8 × 1024 × 1024)
- Answer: **2.5 mebibytes**

**W23 V13 — 2048×1024, 16-bit → kibibytes:**
- Working: (2048 × 1024 × 16) / (8 × 1024)
- Answer: **4096 kibibytes**

### Effect of increasing image resolution (W23 V13 Q2a) [2]
- More pixels can be stored / are available
- The image is sharper / less pixelated

### How sound is represented in a computer (S23 V13 Q3ci) [3]
- The amplitude is recorded a set number of times a second
- Each amplitude is given a corresponding binary number
- The binary numbers (of each amplitude) are saved in sequence

### Why increasing sampling rate and resolution improves precision (S23 V13 Q3cii, W23 V12 Q6b) [4 / 3]
*Merged — both test the same concept*

**Sampling rate:**
- There are smaller gaps in the sound wave / sound is recorded more often
- Digital waveform is closer to the analogue waveform
- Quantisation errors are smaller

**Sampling resolution:**
- More bits per sample → wider range of amplitudes can be stored
- Each binary amplitude in the digital recording is closer to the analogue amplitude
- Digital waveform is closer to the analogue waveform
- Quantisation errors are smaller

*(Increase → closer; Decrease → further from analogue)*

---

## 3. compression

### Why compress before transmission / email / download (S23 V11 Q1ci, W23 V11 Q1c, W23 V13 Q5bi) [3/2/2]
*Three variants merged — all about benefits of compression for sending files*

- Customers can download in less time / reduced download time
- Takes less of the customer's bandwidth / reduced bandwidth usage
- Photographs/files take up less space on the customer's storage medium
- Email accounts often have a maximum size for an attachment
- Customers can store more images / more space for other files
- Reduces storage space used on web server / user's device

### Why RLE may not reduce file size (S23 V11 Q1cii) [3]
- RLE stores a colour and the number of times it occurs consecutively
- An image may not have many sequences of the same colour
- Storing each colour with count 1 adds data (Red 1, Green 1, Blue 1 = more data than Red, Green, Blue)

### Lossy vs lossless for real-time video streaming (W23 V12 Q6a) [3]
- **Lossy** (most appropriate):
  - Loss of quality will not be noticed in real-time viewing
  - Smaller file size = less bandwidth needed = less buffering / smoother playback
  - Viewers may watch on different devices so high resolution not always required
- **Lossless** (also creditworthy):
  - Could be streaming to high-bandwidth devices
  - Viewers do not want any loss of quality

---

## 4. networks-internet

### LAN — benefits and characteristics (S23 V12 Q1a, Q1b) [2 each]
**Benefits:**
- Allows sharing of files/data / communication between devices
- Allows sharing of resources (hardware/software)
- Allows central management (backup, security)

**Characteristics:**
- Covers a small geographical area
- Infrastructure is privately owned / not controlled by external organisations

### Ethernet (S23 V12 Q1d) [3]
- A protocol (suite) for data transmission over standard wired/cabled network connections
- Uses Carrier Sense Multiple Access / Collision Detection (CSMA/CD)
- Data is transmitted in frames
- Each frame has a source and destination (IP/MAC) address and error-checking data (damaged frames can be resent)

### Client-server models (S23 V12 Q1e, S23 V13 Q2c) [2 each]
**Thick-client (S23 V12):**
- The server performs minimal / some processing for the client
- Clients do most of their own processing independently / most resources installed locally

**Thin-client (S23 V13):**
- Server performs all processes required by the task and/or data storage
- Clients only send requests to the server and display returned results

### WAN vs LAN differences (S23 V13 Q2a) [2]
- WAN covers a large geographical area; LAN covers a small geographical area
- LAN has high data transfer rate; WAN has lower data transfer rate
- LAN ownership is private; WAN ownership can be private or public
- LAN is usually more secure than WAN (protection easier to implement)

### Topologies — mesh (S23 V13 Q2bi/bii) [2/2]
**Description:**
- All computers connected to at least one other device
- Multiple routes between devices
- Computers can act as relays, passing packets towards the destination

**Advantages over bus:**
- If one line goes down, more routes available (resilience)
- Improved security (data sent over dedicated connection)
- No/fewer collisions
- New nodes can be added without interruption

### Wired vs wireless benefits for students (S23 V13 Q2d) [4]
- Some students may only have one sort of connection on their device
- Wired provides better performance / faster access to university databases
- Less interference if connected via cable; more secure for private/confidential data
- Wireless allows students to use devices in different rooms/sites / be portable
- Wireless allows multiple devices / bring own device / change devices

### IP addressing — IPv4 and IPv6 format (S23 V11 Q4di) [5]
- IPv4: **4** groups of digits; each represented in **8** bits; separated by full stops
- IPv6: **8** groups of digits; each represented in **16** bits; groups of zeros replaced with **::** (double colon)

### Why 192.168.3.2 is not IPv6 (W23 V12 Q7a) [2]
- Only has four groups of digits (IPv6 has eight)
- Uses dotted notation instead of colons
- Is a 32-bit / 4-byte address (IPv6 is 128 bits / 16 bytes)

### IP address types (W23 V12 Q7d) [4]
| Type | Description |
|---|---|
| Public IP address | Assigned to a device to allow direct access on the internet |
| Static IP address | Fixed / does not change each time a device re-joins a network |
| Private IP address | Used for internal LAN communication only |
| Dynamic IP address | May be refreshed / changed each time a device re-joins a network |

### IP address parts in a subnetwork (S23 V13 Q2e) [3]
- An IP address consists of a **network ID** and a **host ID**
- Each device in a subnetwork has the same network ID; each subnetwork has a different network ID
- Every device in a subnetwork has a different host ID (uniquely identifies device within subnet)

### Subnetting benefits (S23 V11 Q4dii, W23 V12 Q7biii) [4]
*Two variants merged*
- Reduce amount of traffic / improve network speed (data stays in subnet)
- Improve network security (not all devices access all areas; compromised device doesn't expose whole network)
- Easier maintenance (one subnetwork taken down while rest continues)
- Make network management easier (faults isolated more efficiently)
- Allow greater range of IP addresses / control network growth
- Improve network performance / reduce congestion (local communications stay within subnet)

### CSMA/CD collision handling (W23 V12 Q7c) [3]
- Monitor the communications channel / send data only when the line is idle / quiet
- Detect a collision and stop transmission; transmit a jamming signal
- Calculate a random wait (back-off) time
- Retransmit data after the random wait time
- Increase the random wait time if multiple collisions occur

### Router function (W23 V11 Q2a) [3]
- Receives packets from internet / external network
- Analyses the destination IP address of each packet
- Forwards the packet towards its destination / sends onto local or external network using the routing table
- Implements a firewall; allocates private IP addresses; maintains and updates the routing table

### Network hardware — switch, WAP, bridge (W23 V11 Q2b) [3]
| Device | Purpose |
|---|---|
| Switch | Connects individual devices; receives transmissions and forwards to destination |
| Wireless Access Point (WAP) | Allows wireless devices to connect using radio signals / Wi-Fi |
| Bridge | Connects two LANs / segments with the same protocol |

### Public cloud drawbacks (W23 V11 Q2c, W23 V13 Q3aii) [2/4]
*Two variants merged*
- Cannot access files without a reliable internet connection
- Amount of free space may be limited / additional space requires payment
- No control over backup or security of data / reliance on external agency
- Possible loss of control (data on remote/third-party infrastructure)
- Increased recurring costs (cloud provider charges; LAN costs are one-off)

### Why company uses public cloud (W23 V13 Q3ai) [2]
- Courses must be available to anyone who wishes to follow them on the internet
- Company is willing to share infrastructure with other companies (public cloud)
- More economic for the company (shared infrastructure costs)

### Topology — star vs bus advantage (W23 V11 Q2d) [2]
- Star topology is more resilient to faults (no single cable failure disrupts all)
- Higher performance / fewer collisions (each device connected directly to switch)
- Easier to add new nodes (connect directly to switch)
- Easier fault finding compared to bus topology

### Data transmission between two laptops in LAN (W23 V12 Q7bii) [2]
- Data from sending laptop is transmitted to the router
- Data has the address of the recipient
- Router determines recipient's destination address using a routing table
- Router transmits data directly / only to recipient

---

## 5. computers-components

### ROM contents (S23 V11 Q4ai) [2]
- Stores the bootstrap program / start-up instructions for the central computer / BIOS
- Stores start-up instructions for the CCTV system / firmware
- Stores the kernel of the Operating System

### DRAM vs SRAM (S23 V11 Q4aii, W23 V11 Q7c, W23 V13 Q7a) [2/2/2]
*Three variants merged*

**DRAM advantages over SRAM:**
- Lower cost per unit
- Higher storage density / more data stored per chip
- Simpler design (uses fewer transistors)
- Fast access speed not required for the application (e.g. 3D printer print data)

**SRAM advantages over DRAM (W23 V13):**
- SRAM has faster access time (does not need to be refreshed)
- Used in CPU cache for improved speed
- Lower power consumption

### Magnetic vs SSD storage for CCTV (S23 V11 Q4b) [4]
- CCTV operates all the time → large number of read/write operations → magnetic storage has more longevity
- Videos are large files → very large storage capacity required → magnetic costs less per storage unit

### AI in CCTV / cameras (S23 V11 Q4c, S23 V12 Q7d, S23 V13 Q3b) [3 each]
*Three AI questions merged*

**CCTV — person detection and tracking (S23 V11):**
- Uses image recognition; monitors every image to identify shapes/features matching a person
- Starts recording to secondary storage when a person is identified
- Identifies direction of movement; decides where/how to move the camera
- Identifies other cameras to start recording based on direction of movement

**Face detection — camera focus (S23 V13):**
- Scans the scene in real time
- Identifies if there are faces in the image using facial recognition
- Analyses pixels; stores pattern for a face; looks for patterns that match
- Camera focuses on the pattern identified

**Speech-to-command — AI (S23 V12):**
- Uses speech recognition; identifies key phrases / words spoken
- Matches phrases to a database
- Generates the most likely sentence / command

### Resistive vs capacitive touchscreen (S23 V13 Q3a) [5]
- A **resistive** touchscreen has two layers. When the user touches the screen, the layers touch and a **circuit** is completed.
- A **capacitive** touchscreen has several layers. When the top layer is touched, there is a **change** in the electric current.
- A microprocessor identifies the **coordinates** of the touch.

### USB port — data transmission (S23 V12 Q5ci) [1]
- 1 bit is transferred at a time (serial transmission)
- Can be synchronous or asynchronous
- USB-3 is full duplex; earlier versions are half-duplex

### Ports for monitor (S23 V12 Q5cii, W23 V13 Q7d) [1/3]
- **Monitor:** HDMI, DisplayPort
- **VR headset (W23 V13 — with justification):**
  - USB — fast data transfer; universal standard
  - HDMI — allows video and audio on same cable; no need for two cables

### EEPROM reasons (W23 V13 Q7b) [2]
- EEPROM allows frequent / multiple read/write/erase operations
- Firmware contents can be changed easily
- Does not require full erasure of contents before rewriting

### Buffer use in laser printer (W23 V13 Q7c) [4]
- Print instructions and data are sent by the laptop to a buffer at laptop speed
- Data is transferred from the buffer to the printer at printer speed
- Allows user to continue using the laptop / processor to continue processing
- Instead of waiting for the relatively slower printer
- When buffer is empty, an interrupt is sent to the laptop requesting more data

### Address bus, data bus, and buffers — writing to optical disc (W23 V12 Q8cii) [3]
| Component | Role |
|---|---|
| Buffer | Temporarily holds data until it is ready to be transmitted to the device |
| Address bus | Carries the address of the data to be written to the device (in RAM) |
| Data bus | Carries all data to be written to the device / buffer |

### 3D printer — operations and sensors (W23 V11 Q7a/b) [3/2]
**Principal operations:**
- Additive manufacturing / uses a digital 3D model or CAD file
- Builds up the model one layer at a time from the bottom using x, y, z coordinates
- Material is fused / cured together layer by layer
- FDM: material heated and pushed through nozzle/extruder

**Temperature sensor:**
- To prevent overheating / ensure material is hot enough
- By identifying the temperature of the object being printed or material being used

### Sensors and actuators in automated systems (W23 V12 Q1a/b) [1/2]
- **Sensor type:** Infra-red / proximity sensor (for counting items)
- **Actuator role:** Generates a signal / converts electrical energy into mechanical force; to push an arm / open a trap door / remove bar with incorrect weight

### Embedded systems (W23 V11 Q9b, W23 V12 Q1ci/cii) [3/2/1]
**Features:**
- Dedicated to a single task / limited number of functions
- Built into a larger system / integrated into a larger system
- Contains a processor, memory, and I/O capability / dedicated hardware

**Drawback:**
- Difficult to change / update the firmware by the user
- Cannot be easily adapted for another task
- Troubleshooting is a specialist task; often discarded rather than repaired

**Embedded system example with explanation (W23 V11 Q9b):**
- Any named embedded system (e.g. microwave controller, washing machine controller)
- Dedicated to one task; does not require much processing power; built into a larger system; contains firmware that cannot be easily updated

### Feedback in control systems (W23 V11 Q9a) [2]
- Feedback ensures the system operates within set criteria / constraints
- By enabling system output to affect subsequent system input
- Thus allowing conditions to be automatically adjusted

### Ports for optical disc reader/writer (W23 V12 Q8ci) [1]
- USB / Universal Serial Bus
- HDMI

---

## 6. logic-gates-circuits

### Logic gate functions — NAND and NOR (S23 V11 Q5b) [2]
- **NAND:** Output is 0 only when both inputs are 1; output is 1 when none or one input is 1
- **NOR:** Output is 1 only when both inputs are 0; output is 0 when either one or both inputs are 1

### Boolean expression from truth table (S23 V13 Q1a) [1]
- Expression: **NOT B**

### Truth table results

**S23 V12 Q6b — Z = (NOT P OR Q) XOR (R NOR Q):**

| P | Q | R | Z |
|---|---|---|---|
| 0 | 0 | 0 | 0 |
| 0 | 0 | 1 | 1 |
| 0 | 1 | 0 | 1 |
| 0 | 1 | 1 | 1 |
| 1 | 0 | 0 | 1 |
| 1 | 0 | 1 | 0 |
| 1 | 1 | 0 | 1 |
| 1 | 1 | 1 | 1 |

**S23 V13 Q1b — logic circuit truth table:**

| A | B | C | X |
|---|---|---|---|
| 0 | 0 | 0 | 1 |
| 0 | 0 | 1 | 0 |
| 0 | 1 | 0 | 1 |
| 0 | 1 | 1 | 0 |
| 1 | 0 | 0 | 1 |
| 1 | 0 | 1 | 0 |
| 1 | 1 | 0 | 0 |
| 1 | 1 | 1 | 1 |

**W23 V11 Q4a — X = NOT(A NAND B) XOR (NOT B AND (B NOR C)):**

| A | B | C | X |
|---|---|---|---|
| 0 | 0 | 0 | 1 |
| 0 | 0 | 1 | 0 |
| 0 | 1 | 0 | 0 |
| 0 | 1 | 1 | 0 |
| 1 | 0 | 0 | 1 |
| 1 | 0 | 1 | 0 |
| 1 | 1 | 0 | 1 |
| 1 | 1 | 1 | 1 |

**W23 V12 Q4b — X = A XOR (B AND (A NAND B) AND NOT C):**

| A | B | C | X |
|---|---|---|---|
| 0 | 0 | 0 | 0 |
| 0 | 0 | 1 | 0 |
| 0 | 1 | 0 | 1 |
| 0 | 1 | 1 | 0 |
| 1 | 0 | 0 | 1 |
| 1 | 0 | 1 | 1 |
| 1 | 1 | 0 | 1 |
| 1 | 1 | 1 | 1 |

**W23 V12 Q4a — Boolean expression from circuit:**
- X = A NAND B NAND (NOT(B XOR C))

**W23 V13 Q4a — Y = ((P AND Q) XOR ((NOT Q) OR R)) AND NOT P:**

| P | Q | R | Y |
|---|---|---|---|
| 0 | 0 | 0 | 1 |
| 0 | 0 | 1 | 1 |
| 0 | 1 | 0 | 0 |
| 0 | 1 | 1 | 1 |
| 1 | 0 | 0 | 0 |
| 1 | 0 | 1 | 0 |
| 1 | 1 | 0 | 0 |
| 1 | 1 | 1 | 0 |

---

## 7. cpu-architecture

### Special purpose registers (W23 V11 Q5a) [4]
| Register | Role |
|---|---|
| Program Counter (PC) | Stores the address where the next instruction is to be read from |
| Memory Address Register (MAR) | Stores the address of the memory location currently being read from or written to |
| Current Instruction Register (CIR) | Holds the instruction currently being decoded and/or executed |
| Status Register | Contains bits set or cleared depending on operations (e.g. overflow, underflow) |

*(MDR, IX, and ACC are given in the question — identify two **other** registers)*

### SPR vs GPR differences (W23 V13 Q9aii) [2]
- Special purpose registers hold the status of a program; general purpose registers hold temporary data while performing operations
- Special purpose registers are specialised for a specific use; general purpose registers are used for any purpose
- General purpose registers can be used by most instructions; special purpose can only be used by certain instructions

### Von Neumann model components (W23 V13 Q9ai) [3]
*(Not registers or buses)*
- Control Unit (CU)
- Arithmetic and Logic Unit (ALU)
- Immediate Access Store (IAS)
- System clock

### Immediate Access Store (W23 V11 Q5b) [2]
- Holds all data / instructions / programs currently in use
- Volatile memory (contents lost when power removed)
- Fast access times

### Control bus signal types (S23 V12 Q5a) [2]
- Interrupt
- Timing
- Read
- Write

### How CU, system clock, and control bus transfer data (S23 V13 Q7b) [4]
- The system clock gives out timing signals
- Which are sent on the control bus to synchronise other system components
- The Control Unit initiates data transfer by generating signals
- Which are sent on the control bus to other components

### CPU performance — hardware upgrades (S23 V12 Q5b) [4]
- **Increase number of cores** — each core independently carries out a process at the same time; more instructions performed in parallel
- **Increase RAM capacity** — more applications reside in memory simultaneously; saves disk access times
- **Increase cache memory** — more data stored in fast-access memory; less time accessing from RAM
- **Increase clock speed** — more Fetch-Decode-Execute cycles per second

### Clock speed increase effect (W23 V11 Q5ci) [1]
- CPU can now perform nearly twice as many F-E cycles per second
- E.g. instead of 2.1 billion, the CPU can now perform 4 billion FE cycles per second

### Dual-core performance limitation (W23 V11 Q5cii) [5]
- Multiple cores introduce additional overheads because of the need for communication between cores
- Software may not be designed for multiple cores → one core left idle
- Memory access speed may not match the speed of the cores → causing delay
- The two computers may have more differences than just the cores (more RAM, GPU, etc.)

### Fetch-Execute cycle — register transfer notation (S23 V13 Q7c, W23 V13 Q9b) [2/4]
*Two variants merged — W23 V13 provides the complete table*

| Step | Description |
|---|---|
| PC ← [PC] + 1 | The address in PC is incremented |
| MDR ← [[MAR]] | The data in the location pointed to by the MAR is copied to the MDR |
| MAR ← [PC] | The contents of PC are copied to the MAR |
| CIR ← [MDR] | The contents of MDR are copied into CIR |

### Interrupt handling (S23 V11 Q6, W23 V13 Q9d) [5/3]
*Two variants merged*

**Full sequence (S23 V11):**
1. An interrupt flag is raised in the interrupt register
2. At the end of the current F-E cycle / at the start of the next
3. The system checks the interrupt register — if higher priority interrupt exists:
4. Current contents of registers saved on the stack
5. The appropriate Interrupt Service Routine (ISR) for the device is called
6. The input data from the keyboard is processed
7. Contents of registers restored from the stack
8. Control passed back to previous process

**Missing stages in order (W23 V13 Q9d):** D → A → B
- D: Processor identifies source of interrupt and checks priority
- A: Address of ISR is loaded into the Program Counter
- B: Lower priority interrupts are re-enabled

### Software interrupt causes (W23 V13 Q9c) [1]
- Division by zero
- Runtime error
- Out of memory bounds
- Program requesting an external device / input
- Buffer overflow

---

## 8. assembly-language

### Addressing modes (S23 V12 Q3b, W23 V11 Q8bii/iii) [3/2/1]
*Merged across variants*
- **Direct:** The operand holds the memory address of the data
- **Indirect:** The operand holds a memory address that stores the memory address of the data
- **Immediate:** The operand is the data itself
- **Indexed:** Address formed by adding contents of IX to the operand; accesses data at that calculated address

**Similarity (direct vs indexed):** Both load the contents of an address into the Accumulator
**Difference:** Direct uses the operand address directly; indexed adds [IX] to the operand and accesses data at the calculated address

### Instruction groups (W23 V11 Q8bi, W23 V12 Q9a) [3/4]
*Merged*
| Group | Example opcodes |
|---|---|
| Data movement | LDR #50, STO 201, LDD, LDX, IN |
| Arithmetic operations | ADD 100, INC IX, ADD |
| Conditional instructions | JPE 96, JPE |
| Compare instructions | CMI |
| Input/output | IN, OUT |

**W23 V12 Q9a specific answers:**
- IN → Input and output of data
- ADD → Arithmetic operations
- JPE → Conditional instructions
- CMI → Compare instructions

### Assembly program trace — W23 V12 Q9b (input = '1', ASCII '1'=49) [4]

| Instruction address | ACC | IX | Memory 100 | Memory 101 | Memory 110 | Memory 111 | Output |
|---|---|---|---|---|---|---|---|
| (initial) | — | — | 0 | 0 | 51 | 65 | — |
| 10 LDR #0 | — | 0 | 0 | 0 | 51 | 65 | — |
| 11 IN | 49 | 0 | 0 | 0 | 51 | 65 | — |
| 12 STO 101 | 49 | 0 | 0 | 49 | 51 | 65 | — |
| 13 LDX 110 | 51 | 0 | 0 | 49 | 51 | 65 | — |
| 14 CMP 100 | 51 | 0 | 0 | 49 | 51 | 65 | — |
| 15 JPE 21 | (not equal, no jump) | | | | | | |
| 16 LDD 101 | 49 | 0 | 0 | 49 | 51 | 65 | — |
| 17 ADD #16 | 65 | 0 | 0 | 49 | 51 | 65 | — |
| 18 INC IX | 65 | 1 | 0 | 49 | 51 | 65 | — |
| 19 STO 100 | 65 | 1 | 65 | 49 | 51 | 65 | — |
| 20 JMP 13 | | | | | | | |
| 13 LDX 110 | 65 | 1 | 65 | 49 | 51 | 65 | — |
| 14 CMP 100 | 65=65 equal | | | | | | |
| 15 JPE 21 | (equal, jump) | | | | | | |
| 21 OUT | — | — | — | — | — | — | **A** |

*(ASCII 65 = 'A')*

---

## 9. bit-manipulation

### Logical shift — right (S23 V11 Q3dvi) [1]
- 11001100 shifted 3 places right → **0001 1001**

### Logical shift — left (S23 V12 Q4d) [1]
- 01001111 shifted 2 places left → **0011 1100**

### Bit operations — W23 V11 Q8ci/ii/iii [1 each]
- **AND** 01001111 AND B10100101 → **0000 0101**
- **LSR #3** 00010111 → **0000 0010**
- **XOR** 11110111 XOR B00100101 → **1101 0010**

---

## 10. operating-systems

### OS hardware management (S23 V11 Q3a) [4]
- Installs device drivers to allow communication between peripherals and computer
- Sends data to and receives data from peripherals (output to / input from devices)
- Handles buffers for transfer of data (smooths transfer between devices at different speeds)
- Manages interrupts / signals from devices

### Other OS management tasks (S23 V11 Q3b) [2]
- Memory management
- File management
- Security management
- Process management
- Error checking and recovery

### OS process management (S23 V12 Q5di) [5]
- Manages the scheduling of processes / decides order to run processes
- Manages which resources processes require (e.g. allocates memory)
- Enables processes to share data
- Prevents interference between processes / resolution of conflicts
- Handles the process queue; allows multi-tasking by ensuring fair access and handling priorities

### OS purpose (W23 V12 Q8a) [1]
- Hide complexities of hardware from the user
- Provide a platform for software to run
- Provide a user interface

### Utility software — purpose (S23 V12 Q5dii) [2]
- To help users set up / configure / analyse / optimise / maintain the computer
- For example, making memory allocation more efficient, or checking the system for faults

### Utility software — non-security examples (S23 V11 Q3c, W23 V12 Q8b) [3/3]
*Merged — both include defragmentation*

**Defragmentation (both variants):**
- Rearranges blocks of individual files on the HDD so they are contiguous / moves free space together
- Accessing each file is faster because no need to search for next fragment
- Less head movement required
- *Reason needed:* Over time, saving and deleting small files fragments the disk

**Other utility software (W23 V12):**
- Disk contents analysis / disk repair — identifies and marks bad sectors; restores corrupted files; recovers lost data
- File compression — reduces size of files; saves storage and memory space; reduces transmission time
- Disk formatter — prepares disk for initial use; sets up the file system; deletes all data; partitions the disc

### Hard disk formatter — reasons needed (W23 V13 Q5bii) [3]
- Disk needs to be prepared for initial use
- Disk needs to be checked for errors
- A new file system needs to be generated on the disk
- The file allocation table needs to be set up

---

## 11. language-translators

### Two-pass assembler (S23 V12 Q3a, W23 V11 Q8a) [3/1]
*Merged*

**Pass allocation:**
| Action | Pass |
|---|---|
| Generates object code | Second |
| Reads the source code one line at a time | Both (first AND second) |
| Removes white space | First |
| Adds labels to the symbol table | First |

**Purpose of first pass:** To create a symbol table

### Program library (S23 V12 Q7ai/ii) [2/4]
**Definition:**
- A set of pre-written / pre-compiled / pre-tested subroutines
- Which can be called in other programs by installing/importing the library

**DLL benefits:**
- Main memory requirements reduced — DLL is loaded only once / when required
- Executable file size is smaller — does not contain all library routines
- Maintenance not needed by the programmer — DLL is separate from program
- No need to recompile the main program when changes are made to the DLL
- A single DLL file can be used by several application programs — saves memory

### Interpreter vs compiler — development preference (S23 V12 Q7b, S23 V13 Q5ai/aii, W23 V11 Q6a/b) [various]
*Merged across variants*

**Interpreter (preferred while writing):**
- Allows the developer to make real-time changes; debug at each stage
- The effect of any changes can be seen immediately
- Can test when incomplete — small parts can be tested without the rest
- Error reported when reached; correction possible in real time; program continues from that point
- Avoids dependent errors

**Compiler (preferred when program is complete):**
- Produces an executable file → user cannot access / edit the source code
- Users do not need the translator to run the program
- Program can be compiled for different hardware specifications
- Can be tested multiple times without recompiling
- The developer can debug multiple errors simultaneously

**Partially compiled and interpreted:**
- Partially compiled programs can be used on different platforms as they are interpreted at run time
- Code is optimised for the CPU as machine code is generated at run time

### IDE features (S23 V12 Q7c, W23 V11 Q6ci/cii, W23 V13 Q5a) [4/2/2/4]
*Merged across variants — comprehensive table*

| Feature | Description |
|---|---|
| Breakpoints | Stop the code at a specific line to check current progress / values |
| Dynamic syntax checks | Highlight / underline / colour syntax errors as the code is entered |
| Context-sensitive prompts | Suggest code to add / automatically complete statements as code is written |
| Single stepping | Run the code one line at a time so values can be checked / effects of each statement visible |
| Prettyprint | Formats / indents code for visual clarity |
| Expand/collapse code blocks | Allows sections of code to be hidden/shown |
| Auto indentation / formatting | Automatically indents code correctly |
| Report window | Displays variable values and register contents during debugging |
| Variable expressions | Allows inspection of variable values during execution |

*(Visual presentation features: prettyprint, expand/collapse, auto indentation)*
*(Debugging features: single stepping, breakpoints, report window, variable expressions)*

---

## 12. data-security

### Digital signature authentication (S23 V13 Q6a) [5]
1. The sender hashes the document to produce a digest
2. The sender encrypts the digest to create the digital signature
3. The message and the signature are sent to the receiver
4. The receiver decrypts the signature to reproduce the digest
5. The receiver uses the same hashing algorithm on the received document to produce a second digest
6. The receiver compares the two digests
7. If both digests are the same, the document is authentic

### Software to prevent network threats (S23 V13 Q6b) [2]

| Type of software | Description |
|---|---|
| Antivirus / Antimalware | Scans the computer, checks against a database of known viruses/malware, deletes or quarantines threats |
| Firewall | Monitors incoming and outgoing traffic; compares against set criteria (whitelist/blacklist/IP rules); blocks non-conforming traffic |
| Antispyware | Scans for and removes spyware; prevents unknown software recording keystrokes |

### Security measures — firewall, encryption, passwords (W23 V13 Q3aiii) [3]
- **Firewall:** Monitors incoming and outgoing traffic and rejects any traffic that does not meet the set rules
- **Encryption:** Ensures that if data is intercepted it cannot be understood without the decryption key
- **Passwords:** Ensures only users with the correct password can access resources / prevents unauthorised access

### Privacy of data (W23 V12 Q5a) [1]
- Ensuring data can only be accessed by / disclosed to authorised persons
- Ensuring data cannot be accessed by unauthorised persons

### Threats — phishing and spyware (W23 V12 Q5c) [4]
**Phishing email:**
- Pretends to be from an official body
- Persuades individuals to disclose private information (e.g. bank details)
- Requests authentication by redirecting to an unofficial/unauthorised website / inviting user to click a link

**Spyware:**
- Malware downloaded without the user's knowledge
- Secretly records the user's actions / keystrokes
- Sends logs of actions to a third party

### Pharming vs phishing (W23 V13 Q8b) [2]
- **Difference:** Pharming uses malicious code that automatically redirects to a fake website; phishing uses an email to prompt user action / pharming is automatic, phishing requires user action
- **Similarity:** Both try to obtain financial or personal information; both involve a false representation of an official organisation; both make use of fake websites

### Malware risk restriction (W23 V13 Q8c) [3]
- Download programs only from reputable websites/sources
- Backup / archive computer systems (so they can be restored if data is lost)
- Install and run anti-malware programs; regularly scan; quarantine/remove malware found; keep definitions updated
- Use a firewall to block unused ports
- Deny administrator privileges to everyday users
- Avoid use of / access to removable devices

---

## 13. data-integrity

### Data integrity — meaning (S23 V11 Q2aii, W23 V12 Q5b) [2/1]
*Merged*
- Methods of making sure the data is consistent / accurate / complete
- Ensuring the data is up to date (during/after processing)

### Data integrity protection (W23 V13 Q8a) [2]
- **Validation** — ensures data is reasonable / sensible and within specified bounds

### Verification methods for data entry (S23 V13 Q4dii, W23 V13 Q3c) [2/4]
*Merged — both test verification methods*
- **Visual check:** Manually compare the data entered with the source document
- **Double entry:** Enter the data twice and the computer compares to check they are the same

### Validation methods — car registration (S23 V13 Q4di) [2]
- **Length check:** Registration number must be 6 characters long
- **Format check:** Must be in format letter-digit-digit-digit-letter-letter
- **Type check:** Must be alphanumeric

### Why correct format can still be wrong (S23 V13 Q4diii) [1]
- The registration number on the original document might be in the correct format but be the incorrect registration number for that car

### Validation methods — RiderLevel field (S23 V12 Q2ci) [2]
- Presence check (to make sure the field is entered)
- Lookup / Existence check (ensure value is only Beginner, Intermediate, or Advanced)
- Length check (value is 8 or 12 characters)
- Type check (alphanumeric)

---

## 14. database-concepts

### Foreign keys in Birds database (S23 V11 Q2bi) [2]
| Foreign key | Table |
|---|---|
| BirdID | BIRD_SEEN |
| PersonID | BIRD_SEEN |

### Normal form definitions (S23 V11 Q2bii) [1]
| Normal Form | Definition |
|---|---|
| 1NF | There are no repeating groups of attributes |
| 2NF | All fields are fully dependent on the primary key |
| 3NF | There are no partial dependencies |

### Database terminology (S23 V13 Q4b, W23 V12 Q2a) [4/3]
*Merged*
| Term | Description |
|---|---|
| Entity | An object that data is stored about |
| Tuple | A row of data in a table about one instance of an object |
| Secondary key | An additional/alternative key used alongside the primary key / a candidate key not chosen as primary key |
| Foreign key | A field in one table that is linked to a primary key in another table |
| Primary key | The unique attribute / combination of attributes used to identify the record / tuple |
| Referential integrity | Ensures every foreign key has a corresponding primary key; ensures cascading updates/deletes; prevents records being added/deleted/modified incorrectly |

### Relational DB advantages over file-based (S23 V13 Q4a, W23 V11 Q3b) [4/3]
*Merged — S23 V13 wants 2 ways with expansion; W23 V11 wants 3 advantages*
- Reduces data redundancy — each data item stored only once in linked tables
- Reduces program-data dependency — data separate from software; changes to data don't require programs to be rewritten
- Reduces data inconsistency / improves data integrity — update once, reflects everywhere
- Complex queries can be executed
- Allows different views — so users can only see specific aspects
- Allows for program-data independence

### Referential integrity importance (S23 V12 Q2b) [3]
- Makes sure data is consistent and up to date
- Ensures every foreign key has a corresponding primary key
- Prevents records from being added / deleted / modified incorrectly
- Ensures queries return accurate and complete results
- If data changed in one place, change reflected in all related records

### Normalise car rental database to 3NF (S23 V13 Q4c) [4]
**Unnormalised:** BOOKING(CarRegistration, StartDate, EndDate, CarModel, CarColour, CustomerFirstName)

**Normalised answer:**
```
BOOKING(BookingID, CarRegistration, CustomerID, StartDate, EndDate)
CAR(CarRegistration, CarModel, CarColour)
CUSTOMER(CustomerID, CustomerFirstName, CustomerLastName, EmailAddress, TelephoneNumber)
```
*(3 tables with appropriate PKs; BOOKING contains FK to CAR and FK to CUSTOMER; all original fields in correct tables)*

### Convert table to 1NF (W23 V12 Q2c) [4]
*(StudentName/DateOfBirth/TutorGroup/Subject/SubjectCode table)*
- Identify repeating groups of attributes → Subject and SubjectCode
- Ensure each field is atomic → e.g. StudentName should be split into FirstName and LastName
- Identify the primary key for the table

### E-R diagrams (W23 V11 Q3a, W23 V13 Q3bi) [3/1]

**SHOP database (W23 V11):**
- CUSTOMER 1:M SHOP_ORDER
- SUPPLIER 1:M ITEM
- SHOP_ORDER 1:M ORDER_ITEM, ORDER_ITEM M:1 ITEM

**COURSES database (W23 V13):**
- COURSE_INFORMATION 1:M COURSE_SCHEDULE, COURSE_SCHEDULE M:1 TUTOR

---

## 15. dbms

### Data dictionary (S23 V11 Q2ai, S23 V12 Q2a) [2/4]
- **Definition:** Data about the data in the database / data about the structure / metadata for a database
- **Example items:** Table names, data types, field names

### DBMS features table (S23 V12 Q2a) [4]
| Feature | Description |
|---|---|
| Data dictionary | Data about the data in the database / metadata |
| Query processor | Software that processes and executes queries written in SQL |
| Logical schema | A model of a database not specific to one DBMS |
| Developer interface | Software tool to create tables, forms, and reports |

### DBMS security methods (W23 V12 Q2b) [4]
- **Backup/recovery procedures** — regular automatic copies stored off-site; data can be recovered if lost
- **Access rights** — different users given different permissions to different tables (read/write, read only, full access)
- **Views** — different users can see different parts of the database; only see what they need
- **Record and table locking** — prevents simultaneous access; updates are not lost / data not overwritten
- **Encryption** — data turned into ciphertext; cannot be understood without decryption key

---

## 16. ddl-dml

### CREATE TABLE — BIRD_TYPE (S23 V11 Q2biii) [4]
```sql
CREATE TABLE BIRD_TYPE(
  BirdID CHAR(4) NOT NULL,
  Name VARCHAR(9),
  Size VARCHAR(6),
  PRIMARY KEY (BirdID)
);
```

### SELECT with COUNT and GROUP BY (S23 V11 Q2biv) [5]
```sql
SELECT BIRD_TYPE.Size, COUNT(BIRD_TYPE.BirdID) AS NumberOfBirds
FROM BIRD_TYPE, BIRD_SEEN
WHERE BIRD_SEEN.PersonID = "J_123"
AND BIRD_TYPE.BirdID = BIRD_SEEN.BirdID
GROUP BY BIRD_TYPE.Size;
```

### SELECT horses with non-advanced level (S23 V12 Q2cii) [4]
```sql
SELECT Name
FROM HORSE
WHERE HorseLevel = "Intermediate"
OR HorseLevel = "Beginner";
```

### SQL script error correction (S23 V12 Q2ciii) [4]
*Original script (with errors):*
```sql
SELECT SUM(STUDENT.RiderLevel) AS NumberOfRiders
FROM STUDENT, LESSON
WHERE StudentID = StudentID
OR Date = #09/09/2023#
AND STUDENT.RiderLevel = Beginner;
```

| Error | Correction |
|---|---|
| SUM → should be COUNT | SELECT COUNT(STUDENT.RiderLevel) AS NumberOfRiders |
| WHERE StudentID = StudentID (missing table prefixes) | WHERE STUDENT.StudentID = LESSON.StudentID |
| OR → should be AND | AND Date = #09/09/2023# |
| Beginner missing speech marks | STUDENT.RiderLevel = "Beginner" |

### CREATE DATABASE (W23 V11 Q3ci) [1]
```sql
CREATE DATABASE SHOP;
```

### SELECT SUM total quantity (W23 V11 Q3cii) [4]
```sql
SELECT SUM(Quantity)
FROM ORDER_ITEM, SHOP_ORDER
WHERE ORDER_ITEM.OrderNo = SHOP_ORDER.OrderNo
AND SHOP_ORDER.CustomerID = 'HJ231';
```
*Or using INNER JOIN:*
```sql
SELECT SUM(Quantity)
FROM ORDER_ITEM INNER JOIN SHOP_ORDER
ON ORDER_ITEM.OrderNo = SHOP_ORDER.OrderNo
WHERE SHOP_ORDER.CustomerID = 'HJ231';
```

### SELECT COUNT courses after date (W23 V13 Q3bii) [4]
```sql
SELECT Count(CourseID) AS NumOfCourses
FROM COURSE_SCHEDULE
WHERE DateStarted > "09/09/23";
```

---

## 17. ethics-ownership

### Software licence choice — commercial game (S23 V13 Q5b) [4]
**Commercial licence:**
- User pays for the product → programmer gains income
- Enables the program to be copyrighted → programmer retains control
- User cannot legally edit the program
- Programmer can take legal action against illegal copying/selling

**Shareware licence (also creditworthy):**
- User can try the program for free → more people experience it → more likely to buy → income
- Enables the program to be copyrighted; user cannot legally edit it
- Programme is distributed widely → may attract more purchasers

### Shareware licence benefits for programmer (W23 V13 Q6a) [2]
- Users can trial the program and may offer constructive feedback
- More people might try because the trial is free
- Allows bugs to be found and corrected on a wide range of systems
- Users that find the trial useful will buy → programmer gets income
- Allows the program to be copyrighted → protects intellectual property rights

### Professional ethical body importance (W23 V13 Q6b) [4]
- Programmer has ethical guidelines to follow → does not have to decide what is ethical or not
- Clients know programmer is reputable / skilled
- There may be an entry requirement / exam → clients know programmer is competent
- Professional body provides help and support (e.g. legal advice)
- Enables programmer to attend training courses → keep skills up to date
