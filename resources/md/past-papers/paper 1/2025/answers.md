# Paper 1 — 2025 Answers by Syllabus Topic

**Series:** S25 (May/June) · W25 (Oct/Nov) — all variants merged and deduplicated
**Format:** Topic → Sub-topic → answer points verbatim from mark schemes

---

## 1. Data Representation (`data-representation`)

### Binary, Hexadecimal and BCD Conversions

**Convert binary to hexadecimal** *(W25 V11 Q1a-i; W25 V13 Q2d)*
- 101100111010 (12-bit) → **B3A**
- 1110001100111011 (16-bit) → **E33B**

**Convert denary to BCD** *(W25 V11 Q1a-ii)*
- Denary 108 → **0001 0000 1000**

**Convert denary to binary and hexadecimal** *(S25 V12 Q2a)*
- Answer: 0010 0010 1110 (binary); 22E (hex)

**Binary Coded Decimal (BCD) for ASCII characters** *(W25 V12 Q7c-i)*
- ASCII 'h' = denary 104 → BCD: **0001 0000 0100**

**Hexadecimal for ASCII characters** *(W25 V12 Q7c-ii)*
- ASCII 'h' = denary 104 → Hex: **68**

**Minimum bits for given data** *(W25 V13 Q2a)*

| Example of data | Minimum bits |
|---|---|
| Hexadecimal value F139 | 16 |
| 16 000 000 unique amplitude values | 24 |
| IPv4 address | 32 |
| 256 unique colours | 8 |
| IPv6 address | 128 |
| Denary value 65 000 | 16 |

**BCD application and justification** *(S25 V12 Q2c)*
- Financial/banking calculations — accurate decimal representation, no rounding errors, decimal values cannot be represented exactly in normal binary
- Electronic displays — only need to show individual digits, conversion is straightforward
- Date/time in BIOS — conversion between denary and BCD is more straightforward
- Barcode systems — conversion can be accurately completed

---

### Two's Complement

**Converting two's complement to denary** *(S25 V12 Q2b-i; W25 V11 Q1a-iii)*
- 8-bit → denary: −30 (S25 V12)
- 111110111100 (12-bit) → denary: **−68**
  - Working: flip bits → 0000 0100 0011; add 1 → 0000 0100 0100; or: −2048 + 1024 + 512 + 256 + 128 + 32 + 16 + 8 + 4

**Range of 8-bit two's complement** *(S25 V12 Q2b-ii)*
- Smallest: **1000 0000**
- Largest: **0111 1111**

**Converting denary to 12-bit two's complement** *(W25 V13 Q2b)*
- −108 → **1111 1001 0100**

---

### Binary Arithmetic

**Binary addition (8-bit registers)** *(S25 V13 Q7b; W25 V11 Q1b-i; W25 V12 Q7a)*
- 10110011 + 01111000 → **(1) 00101011** (W25 V11)
- 10000111 + 00111001 → **1100 0000** (W25 V12)
- S25 V13: answer (1) 1010 0110

**Binary subtraction** *(S25 V13 Q7c)*
- Two methods accepted:
  - Direct subtraction
  - Adding two's complement: result **0100 0110**

**Overflow error** *(W25 V11 Q1b-ii)*
- An **overflow error** occurs
- The answer cannot be represented in the number of bits available // the answer is larger than the maximum positive number that can be stored in the register // the answer is smaller than the most negative number

---

### Character Sets — ASCII and Unicode

**ASCII character set explanation** *(W25 V13 Q1b)*
- Each character has a unique code
- Each character in the text is replaced sequentially by its code

**ASCII vs Unicode differences** *(W25 V13 Q1c)*
- ASCII uses 7/8 bits; Unicode can use many more / up to 32 bits
- Unicode can represent a wider range of characters including different languages

**Advantages of Unicode over ASCII** *(S25 V11 Q3b-i)*
- A wider range of characters can be represented
- So characters from more languages can be represented
- And symbols such as emojis can be used

**Unicode storage sizes** *(S25 V13 Q1c-i)*
- 8/16/32 bits per character
- Represents 2⁸/2¹⁶ etc. characters
- Represents every language and other characters such as emojis

**Number of bits per Unicode character** *(W25 V12 Q7b)*
- **8 // 16 // 32 // 64** (any valid)

---

## 2. Multimedia (`multimedia`)

### Bitmap Images

**Bitmap file size calculation** *(S25 V13 Q1a-i; W25 V11 Q7d-i; W25 V12 Q6d; W25 V13 Q7b)*

Formula: `(width × height × colour_depth_bits) / (8 × conversion_factor)`

| Paper | Image | Colour depth | Answer |
|---|---|---|---|
| S25 V13 | 2,000,000 pixels | 16-bit | 4 MB |
| W25 V11 | 512 × 2048 pixels | 256 colours (8-bit) | 1024 KiB |
| W25 V12 | 1000 × 2000 pixels | 16-bit | 4 MB |
| W25 V13 | 4000 × 3000 × 30 fps (1 second video) | 16-bit | 0.72 GB |

Working example (W25 V11): `(512 × 2048 × 8) / (8 × 1024)` = 1024 kibibytes

**Why actual file size may exceed the estimate** *(W25 V11 Q7d-ii)*
- The file will contain metadata
- The file will have a header

**Effect of reducing colour depth** *(S25 V13 Q1a-ii)*
- Image: there will be fewer shades of colour available; so the image does not match the original as detail is lost
- File: fewer bits are used to store each pixel; so less data is stored, therefore file size is reduced

---

### Sound

**Sound terms** *(S25 V13 Q1b)*
- **Sampling rate**: the number of times the amplitude is measured per time interval
- **Sampling resolution**: the number of bits used to store each amplitude measurement
- **Analogue**: the type of sound wave before it is recorded by a computer

**Sound file changes and their impacts** *(W25 V13 Q1a)*
- Increase the duration of the recording → file size gets bigger
- Increase the sampling rate → file size gets bigger · accuracy of sound file improves
- Decrease the sampling resolution → file size gets smaller · accuracy of sound file worsens

---

## 3. Compression (`compression`)

### Run-Length Encoding

**How RLE compresses a bitmap image** *(W25 V11 Q7d-iii)*
- Sequences of consecutive identical colours/pixels
- … are stored as the colour value and the number of times it occurs consecutively

---

### Lossy vs Lossless

**Lossy compression for sound (reducing sampling rate)** *(W25 V12 Q6a)*
- Type: **lossy**
- Justification: there will be fewer samples per second, so data will be permanently lost // the original sound cannot be re-created

**Justifying lossy compression for video streaming** *(S25 V11 Q2b-ii)*
- Reduces file size more than lossless
- So significantly less bandwidth/data is needed
- So buffering is reduced even more
- Data can be removed which cannot be seen
- Reducing quality without impacting experience
- For example, resolution of video can be reduced // sample rate of audio can be reduced

**Why video needs compression for streaming** *(S25 V11 Q2b-i)*
- Video is data-intensive
- The file size needs reducing in order to reduce the amount of bandwidth used
- And reduce buffering
- This means people are not behind in the conversation
- People with lower bandwidth can still take part

---

## 4. Networks (`networks-internet`)

### LAN and WAN

**LAN characteristics** *(W25 V12 Q5a)*
- Covers a small geographical area
- Normally privately owned/dedicated infrastructure
- Can use wired or wireless communication

**LAN vs WAN differences** *(S25 V12 Q6a)*
- In a WAN devices can connect over a larger geographical area; in a LAN devices connect over a smaller geographical area
- A WAN may use non-dedicated hardware; the hardware in a LAN is usually dedicated
- A WAN uses external/not company-owned transmission media; the transmission media for a LAN is usually company owned

---

### Network Topologies

**Star topology diagram** *(S25 V12 Q6d; W25 V12 Q5b)*
- Server directly connected to the switch
- All computers directly connected to the switch (no other connections between computers)
- Router/modem directly connected to the switch/server for internet access

**Packet transmission in star topology** *(W25 V12 Q5c)*
- The sending device sends the packets to the switch
- The switch checks the destination address on each packet
- … and sends them only to the intended receiver

---

### Ethernet and Bus Networks

**CSMA/CD collision detection** *(W25 V12 Q5d)*
- The use of CSMA/CD (Carrier Sense Multiple Access with Collision Detection)
- The workstations listen to the communication channel
- … and send data only when there is no data being transmitted / the line is idle
- If a collision is detected, transmission is aborted
- … and a jamming signal is sent
- The workstation calculates a random wait time before trying to re-transmit
- The random time is increased if there are multiple collisions

---

### Functions of a Network Switch

*(S25 V12 Q6e)*
- To store the MAC addresses of devices connected to it
- To receive packets from devices
- To forward packets directly to the intended recipient
- To provide a central point of connection for the network

---

### IP Addressing

**Static and public IP address types** *(W25 V11 Q7a)*
- **Static**: IP address that does not change each time a device connects to the network
- **Public**: IP address assigned to a device on a network to allow the device to be visible on the internet

**IPv4 vs IPv6 vs invalid identification** *(W25 V11 Q7b)*
- **256.0.0.A → Invalid**
- Not IPv4 because the maximum denary value should be 255, this uses 256
- Not IPv6 because it uses a full stop to separate sections and not a colon // not enough groups

**IPv4 and IPv6 characteristics** *(S25 V12 Q6c)*
- IPv4: four groups of 8-bit numbers separated by **full stops**; each IPv4 address is 32 bits
- IPv6: eight groups of 4 **hexadecimal** numbers separated by colons
- Multiple consecutive groups of **zeros** can be replaced with a double colon
- Each IPv6 address is **128** bits
- A **dynamic** IP address can change each time the computer connects to a network
- A **private** IP address can only be accessed by other devices in the same LAN, assigned by the router

---

### DNS and URL to Web Page Process

*(W25 V11 Q7c)*
- The browser checks its cache for the URL
- The browser parses the URL and splits it into its component parts
- The browser finds the IP address for the domain name by querying a DNS server
- The browser receives the matching IP address from the DNS server
- The browser creates a connection with the web server with the matching IP address
- A request for the resource is sent to the web server with that IP address
- The browser renders and displays the result
- The IP address is stored in the browser cache for future use

---

### Video Streaming

**How video is transmitted in a streaming service** *(S25 V11 Q2a)*
- Video is transmitted continuously as a series of bits
- The video is uploaded to a media server
- Users download from the media server
- On download, the media server sends data to a buffer on the user's device
- Buffer is used when there is a difference in speed between transmission and receipt
- Buffer stores data from server until recipient can receive it
- Recipient views bit stream from the buffer

**Role of modem and dedicated line** *(S25 V11 Q2c)*
- **Modem**: converts digital data into analogue for transmission down phone lines // converts analogue data into digital after transmission
- **Dedicated line**: used to provide a direct/private connection which provides faster transmission

---

### Mobile Phone Networks

*(S25 V12 Q6b)*
- Land is split into cells designed for maximum line of sight
- Each cell has a tower with an antenna which receives and transmits data
- Data is transmitted between the tower and the phone
- Data transmission is wireless using low power radio signals/frequencies
- Multiple devices can communicate simultaneously with the same tower

---

### Client-Server Model

**Client-server for online gaming** *(S25 V13 Q3c)*
- A webserver stores all the data for each player
- Each player is on a client computer // the player's web browser is the client
- That sends requests over the internet to the web server
- The server performs the required action in the game
- The server updates the data in the game
- The server sends the results to the player

---

### Wireless Networks

**Advantages of wireless over wired** *(W25 V13 Q4a)*
- Devices can be more mobile as no physical connection is required
- No cabling is needed so easier to set up
- Easier to add additional devices
- Multiple different device types can be connected

**Drawback of wireless** *(W25 V13 Q4b)*
- Can be less secure
- Transmission speed can be slow
- Interference is possible
- The signal degrades quickly without repeaters/boosters

---

### Cloud Computing

**Benefits of cloud storage** *(W25 V12 Q8a-i)*
- Cloud storage can be free of charge for a limited amount
- There is no need for personal storage devices
- The data can be accessed from any computer with an internet connection
- Cloud data services usually include data backup and recovery services
- It is easier to share data/collaborate with colleagues
- Cloud storage capacity can be quickly and easily increased if needed

**Drawbacks of cloud computing** *(W25 V12 Q8a-ii)*
- The storage can only be accessed with an internet connection
- There may be no backups // possibly no control over backups
- Uploading/downloading data could take a long time
- Potential issues with the cloud storage company impacting access (downtime, technical problems)
- Potential compatibility issues if wanting to move the data
- Limited storage availability without paying extra; possibly more expensive long term
- Possibly security issues

---

## 5. Hardware (`computers-components`)

### Memory

**DRAM vs SRAM differences** *(W25 V11 Q6c)*
- DRAM requires to be refreshed/charged; SRAM does not require a refresh
- DRAM stores each bit as charge; SRAM uses flip-flop to store each bit
- DRAM is less expensive to manufacture; SRAM is more expensive
- DRAM has slower access speeds; SRAM has faster access times
- DRAM has higher storage/bit/data density; SRAM has lower density
- DRAM is used in main memory; SRAM is used in cache

**ROM memory types** *(W25 V13 Q4c)*
- **EEPROM**: contents can be erased using a voltage pulse; can be changed multiple times without physically removing the memory
- **EPROM**: contents are erased using ultraviolet (UV) light; memory must be physically removed to be reprogrammed
- **PROM**: contents can be written only once after manufacture

---

### Hard Disk and Secondary Storage

**Magnetic hard disk components** *(S25 V11 Q6a-i)*
- One or more **platters** that can be magnetised
- Mounted on a **spindle** and rotate at high speed
- A **read/write head** is moved across the surface on an arm
- When data is read, changes in the **magnetic field** produce a change in electric current

**Effect of RAM on performance** *(S25 V11 Q6a-ii)*
- More RAM means more currently running data and instructions can be stored
- Without needing to use virtual memory
- Without having to fetch the data from secondary storage first, which has a slower access time
- Less latency/delay waiting for instructions/data

**Effect of bus width on performance** *(S25 V11 Q6a-iii)*
- Wider data bus means more data can be transferred between components at a time; less delay when fetching data
- Wider address bus means larger memory addresses can be used; allowing more memory locations to be accessed directly

**HDD vs SSD for a high-volume video server** *(W25 V13 Q7d)*
- Lower cost per unit of storage → the high capacity for large number of video files will be less costly
- A large number of read/write operations are performed continuously → magnetic storage is likely to have a longer lifespan compared with solid state

---

### Input/Output Devices and Sensors

**Sensors in automated checkout** *(S25 V11 Q4b)*
- Pressure sensor → detects when pressure of an item is removed from / put back on a shelf
- Infrared sensor → detects when the beam is broken for an item removed/added

**Touchscreen operation** *(W25 V12 Q8b-i)*
- Methods to determine point of touch: resistive (two layers make contact and complete a circuit); capacitive (contact creates a change in charge); infrared (beams broken); optical imaging (shadow created); acoustic pulse (wave absorbed)
- The point of touch is used to determine the x and y coordinates
- The menu item corresponding to the coordinate position is recognised and selected

**AI facial recognition at self-checkout** *(S25 V11 Q4a)*
- Uses image recognition/facial recognition
- Measures the distance between facial features of the customer
- Stores the values in a database of user information
- An image is captured using the digital camera
- The AI identifies that the image is a face by analysing the pixels to find patterns
- The distance between features is calculated and compared to those in the database

**AI OCR translation system** *(S25 V12 Q3a)*
- Uses image recognition/OCR to analyse a photograph and identify the location of characters
- Converts the pattern of pixels into individual characters
- Uses natural language to combine characters into words and compare to a language database
- Uses text-to-speech to generate audio waveforms corresponding to the words

---

### 3D Printers and Buffers

**3D printer operation** *(W25 V11 Q10a)*
- Additive manufacturing using a digital file created from 3D modelling / CAD software
- The printer builds up the model one layer at a time; the process is repeated for each layer
- Some materials may need time to cool and set or UV curing
- Examples: FDM (heated material through nozzle); SLA (UV laser on photosensitive resin); SLS (laser on powdered material)

**Why a 3D printer needs a buffer** *(W25 V11 Q10b)*
- To free up the processor to carry out other tasks as the rate data is received by the printer is different from the rate at which it can be processed
- To manage the mismatch in speed between the processor and the peripheral

---

### Monitoring vs Control Systems

*(W25 V11 Q9; W25 V12 Q11 — merged)*
- Monitoring systems do not take any action; control systems act autonomously to change the environment if values are out of a prescribed range
- Control systems use actuators; monitoring systems do not have any actuators
- Control systems make use of feedback; monitoring systems do not
- The output from a monitoring system does not affect the subsequent input; output from a control system affects the next input

**Identifying a control system** *(W25 V12 Q11)*
- Automated door system that opens/closes based on proximity → **Control system**
- Justification: the system uses an actuator to open or close the doors; the output/opening the doors changes the input to the sensor; the system acts autonomously on the feedback from a sensor

---

### HDMI

*(S25 V13 Q2c)*
- HDMI transfers both audio and video using a single cable
- HDMI has a high bandwidth
- Data is transmitted in a stream of uncompressed digital signals

---

## 6. Processor Architecture (`cpu-architecture`)

### Registers

**Roles of ACC and CIR** *(W25 V11 Q6a)*
- **ACC (Accumulator)**: stores the intermediate results of arithmetic and logical operations // holds the result of a calculation
- **CIR (Current Instruction Register)**: holds the instruction currently being decoded and/or executed

**Correcting false statements about registers** *(S25 V12 Q1a)*
- Statement 1 corrected: The **Program Counter (PC)** stores the address of the next instruction to be fetched from memory
- Statement 3 corrected: The **Control Unit (CU)** sends signals to other components on the **control bus**
- Statement 4 corrected: The **Memory Data Register (MDR)** holds data to be stored in / read from the memory address in the MAR

**Special-purpose registers** *(S25 V12 Q1b; W25 V12 Q3a-ii)*
- **CIR (Current Instruction Register)**: to store the instruction to be decoded/executed next
- **Status Register (SR)**: to contain bits that can be referenced individually to indicate a state or event
- **Interrupt Register**: to store details of any interrupts that have occurred
- **PC (Program Counter)**: stores the address of the next instruction
- **MDR (Memory Data Register)**: holds data read from/written to memory
- **MAR (Memory Address Register)**: stores the address of the next instruction/data to be accessed

**MAR and MDR roles in FE cycle** *(W25 V13 Q6b)*
- MAR stores the address of the next instruction/data to be read from or written to memory
- The address is received from the Program Counter (PC)
- The MDR stores the data/instruction in the address stored in the MAR which has been read/written
- The instruction passes to the CIR for decoding and executing

---

### Fetch-Execute Cycle

**Register operations during fetch stage** *(S25 V13 Q2a-ii)*
1. MAR ← [PC]
2. PC ← [PC] + 1
3. MDR ← [[MAR]]
4. CIR ← [MDR]

**Control unit role** *(S25 V13 Q2a-i)*
- The control unit synchronises the actions of the processor
- By sending a command/signal on each timing signal produced by the system clock
- Using/along the control bus

**How the OS handles an interrupt** *(S25 V12 Q1c)*
- At the start/end of the FE cycle, the interrupt register is checked
- The priority of any interrupts waiting is checked
- If the priority of the interrupt is higher than the current process
- The contents of the registers are stored on the stack
- The relevant Interrupt Service Routine (ISR)/interrupt handler is called
- When the ISR has finished, a further check is made for higher priority interrupts
- If no more interrupts of higher priority, register contents are restored and the next FE cycle continues

---

### Performance

**Clock speed and cache memory effect** *(W25 V12 Q3c)*
- **Clock speed**: processor can perform more FE cycles per second → more instructions/data processed each second
- **Cache memory**: can store more of the most frequently used instructions → reduces the need to access slower RAM

**Cache memory performance** *(S25 V13 Q2b)*
- Using cache memory improves system performance
- Because cache is fast access memory close to the CPU
- Which stores frequently used instructions/data
- So they can be accessed faster than from RAM

---

### Multi-core Processors

**Drawbacks of increasing core count** *(W25 V11 Q6b)*
- Latency may be increased … because the cores must communicate with one another
- There is potential for deadlock situations … where one core may wait for information from other cores which in turn are waiting for the first one
- Not all software is designed to use multi-cores … so some of the additional cores would be idle
- Increased heat generation … which could cause damage to other components

---

## 7. Assembly Language (`assembly-language`)

### Addressing Modes

**Relative addressing** *(W25 V12 Q3a-i)*
- The value of the operand is an offset value which is added to another base value to give the address from which the contents are loaded to the accumulator

**Addressing modes — name and description** *(S25 V12 Q7a-iii; S25 V13 Q5a-ii)*
- **Indirect**: the operand points to the memory location that contains the address of the data
- **Indexed**: the address of the data is formed by adding the contents of the Index Register (IX) to the operand
- **Relative**: the address is calculated using its distance from a base address
- **Direct**: the operand is the address of the data

**Effect of using LDD instead of LDI** *(S25 V12 Q7a-ii)*
- The number 10 will be loaded into the ACC instead of 12 (contents of address 10)
- The addition will give 20 not 22 so the comparison will fail and result in an infinite loop

---

### Instruction Trace Examples

**Trace: LDM, LDI, LDX** *(W25 V12 Q3b; S25 V12 Q7a-i)*

Memory: 98→8, 99→16, 100→3, 101→98, 102→32; IX=2

| Instruction | Value in ACC |
|---|---|
| LDM #98 | 98 |
| LDI 101 | 8 (contents of address 98) |
| LDX 100 | 32 (address 100+2=102, contents=32) |

**Trace: AND, LDM, XOR, CMP** *(W25 V13 Q6a)*

Memory: 100→0000 0011, 101→1010 1110, 102→1100 1100 …

| ACC | Instruction | Result |
|---|---|---|
| 0000 1111 | AND 101 | 0000 1110 |
| 0000 0000 | LDM #100 | 0110 0100 (=100 denary) |
| 0000 0001 | XOR &F1 | 1111 0000 |
| 0001 0001 | CMP 101 | 0001 0001 (unchanged; CMP does not alter ACC) |

---

### Instruction Groups

*(W25 V13 Q6c)*
- Loading data into the accumulator → **Data movement** group
- Incrementing the index register → **Arithmetic operations** group
- Branching to another address → **Conditional and unconditional (jump) instructions** group

---

## 8. Bit Manipulation (`bit-manipulation`)

### Shifts

**Logical shift left** *(W25 V11 Q4a)*
- To shift 00011110 → 01111000: **LSL #2**

**Arithmetic shift right on two's complement** *(W25 V13 Q2c)*
- 10010011 with 3-place arithmetic right shift → **1111 0010**

---

### Bitwise Operations

**Worked examples** *(W25 V11 Q4b–d; S25 V13 Q7a-i, ii; S25 V11 Q8b)*

| ACC before | Instruction | ACC after |
|---|---|---|
| 1110 0011 | XOR &12 | 1111 0001 |
| 1110 0011 | AND #63 | 0010 0011 |
| 1110 0011 | OR 100 (addr 100 = 0011 0011) | 1111 0011 |
| 0010 1000 | LSL #1 | 0101 0000 |
| 0010 1000 | XOR &F1 | — |

**Write OR instruction to set a bit** *(S25 V11 Q8b-i)*
- OR B0000 0001 // OR #1 // OR &1

**Clearing MSB and setting a bit (two instructions)** *(S25 V13 Q5b)*
- AND B0000 0000 / #0 / &0
- OR B1000 0000 / #128 / &80

---

## 9. Operating Systems (`operating-systems`)

### OS Functions

**Five OS functions** *(S25 V11 Q6b)*
- **User interface**: to provide a user interface so that the user can communicate with the hardware
- **Memory management**: to manage memory so that data can be stored and accessed; and multitasking is possible
- **File management**: allowing the user to create, edit, update and delete files and folders
- **Input/output management**: to manage inputs and outputs from hardware/peripherals
- **Process management**: to handle processes to make sure each process has fair access

**OS key management tasks** *(W25 V13 Q8d)*
- File management
- Security management
- Hardware/peripheral management // input/output management
- Process management

---

### Hardware and Security Management

**Hardware management tasks** *(W25 V11 Q5a-i)*
- Installs driver software for devices connected to external ports
- Manages communication between devices
- Manages hardware interrupts

**Security management tasks** *(W25 V11 Q5a-ii)*
- Prevents unauthorised access … by providing authentication // by validating users and processes
- Implements access rights and permissions
- Makes provision for recovery of lost data
- Carries out OS security updates as available
- Carries out auditing and keeps logs of activity

---

### Utility Software

**Utility software for file recovery** *(W25 V12 Q8b-ii)*
- Disk repair/disk contents analysis
- Back-up software

---

## 10. Language Translators (`language-translators`)

### Compiler and Interpreter

**Compiler vs interpreter behaviour** *(S25 V13 Q3a — fill in blanks)*
- A compiler checks all of the code before attempting to translate; if errors found, all reported at once and program does not run; if no errors, produces an **executable file** which can run without access to the **source/program code**
- An interpreter translates one line and runs it before moving to the next; if an error is found, it **stops** and displays it; the programmer can correct the error **immediately/in real-time** and the interpreter continues

**Programmer uses interpreter then compiler** *(W25 V12 Q10a)*
- **Interpreter**: use while writing/coding the program to test/debug the partially completed program; because errors can be corrected and processing continue from where execution stopped // errors are identified one at a time
- **Compiler**: use after the program is complete to create an executable file so source code is not seen; use to repeatedly test the same completed section without re-interpreting every time

**Compiler disadvantages vs interpreter** *(W25 V13 Q8a)*
- Large amounts of source code take time to compile
- The code must be recompiled when it is changed
- The program cannot run if there are errors
- It is not possible to correct errors in real-time
- Sections of code/unfinished code cannot easily be tested

---

### Library Routines

**Benefit of library routines** *(W25 V11 Q5b-i)*
- Less code needs to be developed as code is pre-written … thereby reducing the time to write a program
- The library routine will be pre-tested and documented … reducing testing time // giving confidence the routine works
- The user's source code is more readable … as the routine is simply called rather than written in full
- The library could contain code for complex routines … allowing the programmer to include modules they might not be able to code

**Drawback of library routines** *(W25 V11 Q5b-ii)*
- Compatibility issues … the library routine may not work with current program
- Not guaranteed to be thoroughly tested … there could be unexpected problems (bugs/virus)
- The library routine may not match needs exactly … so it will need to be edited and tested
- If the library routine is later changed … there could be unexpected errors or results

**Benefits of program libraries** *(W25 V13 Q8b)*
- Programming time is saved as code does not have to be written from scratch
- Testing time is saved as code is already tested/documented
- A library routine is more likely to work as code is already tested
- Library routines automatically update if they are changed/improved
- The programmer can use library routines to perform complex functions they may not be able to write themselves

---

### IDE Features

**IDE presentation features** *(W25 V11 Q5c)*
- Prettyprint
- Expanding and collapsing code blocks
- Automatic/smart indentation/formatting

---

## 11. Data Security (`data-security`)

### Encryption

**Encryption to protect data during communication** *(S25 V11 Q7a)*
- Data is encoded/scrambled using a key to create cipher text
- If intercepted it cannot be understood
- Without being decrypted using a key

**Digital signature creation and verification** *(S25 V11 Q7b)*
1. The sender hashes the document/message to produce a digest
2. The sender encrypts the digest to create the digital signature
3. The message and the signature are sent to the banker/receiver
4. The receiver decrypts the signature to reproduce the digest
5. The receiver uses the same hashing algorithm on the document received to produce a second digest
6. The receiver compares the two digests
7. If both digests are the same, the document has not been changed

**Digital signature for program authenticity** *(W25 V12 Q10c)*
- A **digital signature** should be included with the download

---

### Malware

**Virus and pharming definitions** *(W25 V11 Q8a)*
- **Virus**: malicious program/software that replicates/copies itself and deletes/alters files/data stored on a computer
- **Pharming**: malicious code/software installed on a computer which redirects the user to a fake website to obtain personal data

---

### Network Security Threats

**Network threat, description and prevention** *(W25 V12 Q5e)*

| Threat | Description | Prevention |
|---|---|---|
| Malware/Virus | Malicious code that can alter/delete files | Anti-virus // Anti-malware // Firewall |
| Spyware | Records keystrokes which are sent to a third party | Anti-spyware // Firewall |
| Hacking | Gaining unauthorised access to a computer network/device | Authentication // Firewall |
| Phishing | Emails from fake reputable companies trick people into revealing personal information | Spam filter // Do not open unknown emails |
| Pharming | Users directed to a bogus website to obtain personal information | VPN // Anti-malware // Do not open links |

**Security methods on computer and during transmission** *(S25 V13 Q3b)*
- **Encryption/VPN** (during transmission): jumble/encode data so it cannot be decrypted without the key
- **Firewall/proxy**: filter incoming transmissions and stop any attempting unauthorised access
- **Anti-malware**: find and delete or quarantine malware that could delete files
- **Encryption** (on computer): encode data so it cannot be understood by anyone who gains access
- **Physical method**: the computer cannot be accessed without a physical key

---

## 12. Data Integrity (`data-integrity`)

### Verification Methods

**Classifying verification methods** *(W25 V12 Q1)*
- **Data transfer**: parity byte check, checksum, parity block check
- **Data entry**: visual check

**Checksum verification** *(S25 V11 Q7c)*
- The data is put through an algorithm to create a checksum value
- The data and checksum are sent to the receiver
- The receiver performs the same algorithm on the data
- If both checksums match, the data is verified

**Parity bit (even parity)** *(W25 V12 Q6c-i)*
- For byte 0 1 0 1 1 1 0 [parity]: parity bit = **0** (already 4 ones, even)

**Parity block check error detection** *(W25 V12 Q6c-ii)*
- The bit in error can be identified by finding where the row parity and the parity byte column both fail
- In the given example, the error is in the byte with the incorrect row parity and mismatching column

**Data verification during transmission** *(W25 V13 Q7c)*
- **Parity Byte Check**: a parity bit is added to each byte to make the number of 1s match the parity (odd or even); each byte can be checked on receipt and requested to be resent if the byte does not match parity
- **Parity Block Check**: a bit is added to each byte, plus a parity byte for each block; the location of an error can be found using vertical and horizontal parity
- **Checksum**: a calculation is made from the data and transmitted with it; the receiver performs the same calculation and compares with the received checksum

---

### Validation

**Data validation methods from pseudocode** *(W25 V13 Q7e)*
- Algorithm checking `IF x < 1 OR x > 26` → **Range Check**
- Algorithm checking `IF x <> 'R' AND x <> 'G' AND x <> 'B'` → **Existence Check**
- Algorithm checking for "@" character in string → **Format Check**

**DBMS data integrity methods** *(S25 V12 Q5c-ii)*
- Validation
- Enforce referential integrity
- Cascade update/delete
- Ensuring the database is normalised

---

## 13. Ethics and Ownership (`ethics-ownership`)

### Software Ownership

**Copyright, Open Source, Shareware, Software Licence definitions** *(W25 V12 Q2a)*
- **Copyright**: gives the holder the legal right of ownership of intellectual property
- **Open Source (Initiative)**: software can be freely copied, distributed or adapted
- **Shareware**: gives the user a trial period/limited functionality before a payment/sign up may be required
- **Software Licence**: a (legal) agreement that defines the rights and terms of usage for the software

**Proprietary software characteristics** *(S25 V12 Q3c-i)*
- The program is usually sold for a fee
- Users have no access to source code
- It protects the intellectual rights of the programmer/developer
- Users cannot legally alter or share the program
- There are limitations on use (e.g. number of installations)
- Support and maintenance is usually provided (e.g. updates, bug fixes)

**Risk of open source in critical systems** *(S25 V12 Q3c-ii)*
- The source code would be accessible therefore it could be changed
- Which might lead to the program outputting an incorrect response
- So people could purchase the wrong item, possibly with serious consequences (e.g. allergies)

**Free Software definition** *(W25 V12 Q10b)*
- The software is free of restrictions (not necessarily free of charge)
- The source code comes with the program; a user can edit it to suit their needs
- Users can share the software with others

**Licences permitting editing and redistribution** *(W25 V13 Q8c)*
- Open Source (Initiative)
- Free Software (Foundation)

**Code of conduct purpose** *(W25 V12 Q2b)*
- To create a safe, respectable and professional working environment for all employees
- To ensure that employees understand the expectations and the consequences of their actions
- To provide a clear outline of what is considered good practice
- To protect the reputation of the organisation // maintain public trust

---

### Ethical Responsibilities

**Ethical considerations for students on school network** *(W25 V11 Q8b)*
- Students should consider privacy issues
- Students should not make inappropriate use of social networking // engage in cyberbullying
- Students should not copy work that is not their own
- Students should abide by the school rules/guidelines for accessing the network
- Students should only use the school network for legitimate purposes
- Students should not hack/crack other computers

**Ethical issues for freelance programmers** *(S25 V13 Q3d)*
- There is no/limited access to legal advice in case action is taken against them
- There are fewer networking opportunities so they could miss out on contacts/jobs
- There would be less access to training
- There would be no clear laid out ethical guidelines and people to discuss potential ethical problems with
- Possibly leading to inappropriate/unethical actions which might lead to legal proceedings

---

### Social Impacts

**Social impacts of AI for student homework** *(W25 V11 Q8c)*
- **Negative**: if students use AI to shortcut learning, they may miss out on developing reasoning and problem-solving skills
- **Negative**: heavy reliance on AI may limit opportunities for collaboration, teamwork, and face-to-face communication
- **Negative**: emphasises the digital divide — some students may not have access to the technology
- **Negative**: AI answer might not be correct, leading to misinformation
- **Positive**: students given additional support may do better
- **Positive**: pupils who struggle in traditional settings may gain self-esteem through AI-assisted learning
- **Long-term**: protection of intellectual property / ethical issues; schools may need to redesign curricula

**Social benefits of AI product identification** *(S25 V12 Q3b)*
- It can help people with visual impairment to identify which products to purchase
- It can help people who cannot understand the language
- It can help to overcome learning/reading difficulties

**Ethical impact of AI in classroom** *(W25 V13 Q7a)*
- **Positive**: the learning experience could be improved by identifying students who are struggling and employing personalised learning
- **Positive**: early intervention to determine which students require extra support
- **Concern**: there could be privacy concerns — students/teachers could be uncomfortable with constant surveillance; students might not want their data passed to third parties
- **Concern**: mental health concerns due to constant monitoring and pressure

---

## 14. Database Concepts (`database-concepts`)

### Entity-Relationship Diagrams

**E-R diagrams** *(S25 V11 Q5a; S25 V13 Q6a; W25 V11 Q2a; W25 V13 Q5a)*

General rules for mark scheme:
- One mark per correct relationship drawn
- Each entity linked correctly with correct cardinality (1:1, 1:M, M:N)
- Many-to-many relationships must be resolved with a linking/junction table

Key relationships encountered in 2025 papers:
- ORDER ↔ CUSTOMER (many orders per customer: M:1)
- ORDER_ITEM ↔ ORDER (many items per order)
- CUSTOMER ↔ ORDER_PRODUCT ↔ PRODUCT (resolved M:N)
- STUDENT ↔ PLACEMENT (one student, many placements)
- PLACEMENT ↔ COMPANY (many placements per company)
- CUSTOMER ↔ COMPLAINT ↔ PRODUCT (many complaints per product)
- COMPLAINT ↔ STAFF (staff handles many complaints)

---

### Normalisation

**Why a linking table is needed (1NF)** *(S25 V12 Q5a)*
- To remove the many-to-many relationship between CHARACTER and ITEM tables
- To allow each character to have many items // to allow each item to be purchased for many characters
- By creating a linking table between the characters and the items purchased

**Why the database is in 3NF** *(W25 V11 Q2b)*
- There are no repeating groups of attributes
- There are no many-to-many relationships
- There are no partial key dependencies // no non-key dependencies // no transitive dependencies

---

### Keys

**Primary key identification** *(S25 V11 Q5b)*
- CardNumber

**Primary and composite keys** *(S25 V12 Q5b)*
- USER(Username, Password, DateOfBirth) — PK: Username
- CHARACTER(CharacterName, CharacterID, Username, Level, Money) — PK: CharacterID
- ITEM(ItemName, MinimumLevel, Cost) — PK: ItemName
- CHARACTER_ITEM(CharacterID, ItemName) — composite PK: (CharacterID, ItemName)

**Foreign key identification** *(S25 V11 Q5c)*
- ORDER_ITEM → foreign key: **OrderID**
- ORDER → foreign key: **CustomerID**

---

### Referential Integrity

*(W25 V11 Q2d)*
- Referential integrity ensures that related data is consistent
- Referential integrity ensures that every foreign key has a corresponding primary key
- Referential integrity provides for cascading update/delete
- Referential integrity ensures that if a primary key is deleted or modified, all linked records in foreign table will be deleted or modified

Database-specific examples:
- CompanyID is a foreign key in PLACEMENT table and is dependent on the primary key CompanyID in COMPANY table
- If a record is deleted from STUDENT, all records with the same StudentID will be deleted from PLACEMENT
- If a CompanyID is modified in COMPANY, all records with that CompanyID in PLACEMENT will also be modified

---

### Table Relationships

**SHIP-CONTAINER relationship** *(W25 V12 Q4a)*
- The relationship between SHIP and CONTAINER is one-to-many (1:M)
- The primary key ShipID in the SHIP table is linked to the foreign key ShipID in the CONTAINER table

---

## 15. DBMS (`dbms`)

### Developer Interface

*(S25 V13 Q6d-ii; W25 V12 Q4d — merged)*
- To allow the user to create/modify/delete tables // maintain the database
- To allow the user to set up/modify relationships
- To allow the user to create a form for data input
- To add tools to a form (e.g. drop-down boxes/buttons)
- To design a report to show output in an organised manner
- To add a menu to enable users to choose different actions/run different queries
- To allow a user to inspect the database contents and metadata

---

### Database Schema

*(S25 V13 Q6d-i)*
- Relationships
- Views
- Data types
- Validation rules

---

### DBMS Security Methods

*(S25 V12 Q5c-i; W25 V13 Q5d — merged)*
- **Access rights**: appropriate permissions for tables needed to read or edit data
- **Password**: prevents users without the password from accessing data
- **Encryption**: stops users without the decryption key from understanding the data
- **Views**: users can be given a view that does not include sensitive data
- **Authentication methods/biometrics/2-factor authentication**: prevents unauthorised access
- **Regular backups**: a second copy of data available in case of loss/damage

---

## 16. DDL and DML (`ddl-dml`)

### SQL DDL

**ALTER TABLE to add a field** *(W25 V12 Q4b)*
```sql
ALTER TABLE CONTAINER
ADD InspectionDate DATE;
```

**CREATE TABLE** *(W25 V13 Q5b)*
```sql
CREATE TABLE STAFF(
  StaffID INTEGER NOT NULL PRIMARY KEY,
  StaffFirstName VARCHAR,
  StaffLastName VARCHAR,
  Department CHAR,
  RemoteWorker BOOLEAN
);
```

---

### SQL DML — SELECT

**SELECT with JOIN and GROUP BY (unpaid balance)** *(S25 V11 Q5e)*
```sql
SELECT CUSTOMER.CustomerID, CUSTOMER.Name,
       SUM(ORDER.TotalCost) AS TotalOwed
FROM CUSTOMER INNER JOIN ORDER
ON CUSTOMER.CustomerID = ORDER.CustomerID
WHERE ORDER.Paid = FALSE
GROUP BY CUSTOMER.CustomerID;
```

**SELECT COUNT with JOIN (items purchased per user)** *(S25 V12 Q5d-i)*
```sql
SELECT COUNT(ItemName)
FROM CHARACTER_ITEM INNER JOIN CHARACTER
ON CHARACTER.CharacterID = CHARACTER_ITEM.CharacterID
WHERE CHARACTER.Username = "KAT123";
```

**SELECT COUNT with multiple WHERE conditions** *(W25 V11 Q2c-ii)*
```sql
SELECT COUNT(CompanyID) AS TotalPlacements
FROM PLACEMENT
WHERE CompanyID = "NEAM"
AND StudentID = "LDEA01"
AND Complete = TRUE;
```

**SELECT COUNT with JOIN and WHERE** *(W25 V12 Q4c)*
```sql
SELECT COUNT(ContainerID)
FROM CONTAINER INNER JOIN SHIP
ON CONTAINER.ShipID = SHIP.ShipID
WHERE ShipName = "Caledonia";
```

**SELECT with JOIN, WHERE and ORDER BY DESC** *(W25 V13 Q5c)*
```sql
SELECT PRODUCT.ProductID, ProductName, ComplaintDetails
FROM PRODUCT INNER JOIN COMPLAINT
ON PRODUCT.ProductID = COMPLAINT.ProductID
WHERE Rating <= 5
ORDER BY Rating DESC;
```

**SELECT customer name and count of uncollected orders** *(S25 V13 Q6c)*
```sql
SELECT CustomerName, COUNT(OrderID) AS NotCollected
FROM ORDER INNER JOIN CUSTOMER
ON ORDER.CustomerID = CUSTOMER.CustomerID
WHERE Collected = FALSE
GROUP BY CUSTOMER.CustomerID;
```

---

### SQL DML — INSERT, UPDATE, DELETE

**INSERT INTO** *(S25 V13 Q6b)*
```sql
INSERT INTO PRODUCT
VALUES ("002323", "Blue ball point 2 mm", 50, 5.00, "SFX223");
```
Mark points: INSERT INTO PRODUCT; VALUES with brackets; strings with quotation marks in correct fields; numeric values in correct fields

**UPDATE character** *(S25 V12 Q5d-ii)*
```sql
UPDATE CHARACTER
SET Level = 3, Money = 10000.00
WHERE CharacterID = "0002";
```

**DELETE completed records** *(W25 V11 Q2c-i)*
```sql
DELETE FROM PLACEMENT
WHERE Complete = TRUE;
```
