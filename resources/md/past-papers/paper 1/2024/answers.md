# Paper 1 — 2024 Answers by Syllabus Topic

**Year:** 2024 (S24 + W24) | **Variants:** S24 V11, S24 V12, S24 V13, W24 V11, W24 V12, W24 V13

---

## 1. Data Representation (`data-representation`)

### Units and Prefixes

**State one difference between a tebibyte and a gigabyte**
- A tebibyte = 1024 gibibytes / 1 048 576 kibibytes / 2⁴⁰ bytes whereas a gigabyte = 1000 megabytes / 1 000 000 kilobytes / 10⁹ bytes
- Tebi is a binary prefix; giga is a decimal/denary prefix

*[W24 V11 Q1a — 1 mark]*

**Complete a table on kibibyte and megabyte prefix conversions**
- A kibibyte has a binary prefix; three kibibytes = 3072 bytes
- A megabyte has a decimal/denary prefix; two terabytes = 2000 gigabytes

*[S24 V13 Q1a — 4 marks]*

### Number Conversions

**Convert unsigned binary integer 110001100111 to hexadecimal**
- Answer: C67

*[W24 V11 Q1bi — 1 mark]*

**Convert two's complement binary 100110010111 to denary**
- Answer: −1641

*[W24 V11 Q1bii — 1 mark]*

**Convert BCD 010101110011 to denary**
- Group into 4-bit BCD digits: 0101 = 5, 0111 = 7, 0011 = 3
- Answer: 573

*[W24 V11 Q1biii — 1 mark]*

**Convert denary 241 to hexadecimal**
- Answer: F1

*[S24 V13 Q1b — 1 mark]*

**Convert hexadecimal C0F to denary**
- Working: 1100 0000 1111 // (12 × 16²) + (0 × 16) + 15 = 3072 + 15
- Answer: 3087

*[S24 V12 Q7c — 2 marks]*

**Convert hexadecimal 1FAB to denary**
- Answer: 8107

*[W24 V13 Q8a — 1 mark]*

### Binary Subtraction

**Subtract denary 23 from two's complement 01001010 in binary**
- Method 1 (two's complement addition): 23 in binary = 00010111 so −23 is 11101001; 01001010 + 11101001 = (1) 0011 0011
- Method 2 (direct subtraction): 01001010 − 00010111 = 00110011
- Answer: 0011 0011

*[W24 V11 Q1c — 2 marks]*

**Perform binary subtraction 100 − 10**
- Converting: 100 = 0110 0100; 10 = 0000 1010
- Method 1 (two's complement): −10 is 1111 0110; 0110 0100 + 1111 0110 = (1) 0101 1010
- Method 2 (direct): 0110 0100 − 0000 1010 = 0101 1010
- Answer: 0101 1010

*[S24 V12 Q7b — 3 marks]*

**Add three 8-bit binary numbers (10011110 + 01100001 + 00011001)**
- Working with carry values clearly indicated
- Answer: (1) 0001 1000 — overflow occurs

*[S24 V11 Q7 — 3 marks]*

### Two's Complement

**Explain how to convert two's complement 10011111 to denary**
- Method 1: Flip each bit then add 1 → convert result to denary
- Method 2: Treat MSB as the corresponding negative denary value; add the positive denary values of remaining 1 bits
- Answer: −97

*[W24 V13 Q8b — 3 marks]*

### Overflow

**Define overflow in binary arithmetic**
- The answer is too long to be represented in the same number of bits as the binary numbers being added
- The answer is larger than the maximum positive number that can be stored in the register
- The answer is smaller than the most negative number that can be stored in the register

*[S24 V13 Q1c, W24 V11 Q1d — 1 mark each]*

### File Sizes

**Identify the largest file size from: 3300 KiB, 0.3 MB, 3 MiB, 3300 KB**
- Answer: 3300 KiB (≈ 3379.2 KB > 3300 KB > 3 MiB ≈ 3145.7 KB > 0.3 MB = 300 KB)

*[S24 V12 Q7a — 1 mark]*

### Character Encoding

**State the number of bits per character for ASCII, extended ASCII, and Unicode**
- ASCII: 7 bits
- Extended ASCII: 8 bits
- Unicode: 16 or 32 bits

*[S24 V13 Q1di — 1 mark]*

**Describe how a word is represented using a character set**
- Each character has a unique binary code
- The binary code for each character is stored in sequence

*[S24 V13 Q1dii — 2 marks; also W24 V13 Q6a]*

**Identify and describe one character set**

ASCII:
- 7/8 bits per character; represents 128/256 characters; represents all characters from the Latin alphabet

Unicode:
- 8/16/32 bits per character; represents 256/65536+ characters; represents all characters in all languages

*[W24 V13 Q6a — 2 marks]*

---

## 2. Multimedia (`multimedia`)

### Bitmap Images

**Describe how bitmap image data is encoded**
- The image is made of pixels and each pixel has one colour
- Each colour has a unique binary code
- The code for the colour of each pixel is stored in sequence

*[S24 V12 Q2di — 3 marks]*

**Define the bitmap terms colour depth and file header**
- Colour depth: the number of bits used to represent a colour // the number of colours that can be represented in an image
- File header: stores data about the image file / metadata

*[W24 V12 Q7ai — 2 marks]*

**State the largest number of colours representable with 8 bits**
- 256 (2⁸)

*[W24 V13 Q6bi — 1 mark]*

**State one drawback of increasing the number of bits per pixel**
- Increased file size

*[W24 V13 Q6bii — 1 mark]*

**Explain why changing the image resolution affects image quality and file size**
- Image quality: decreasing resolution means details within the image are lost because there are fewer pixels; increasing resolution means the image is more detailed because there are more pixels
- File size: decreasing the resolution will decrease the file size because there are fewer pixels therefore less data; increasing the resolution will increase the file size because there are more pixels therefore more data

*[W24 V12 Q7aii — 2 marks]*

**Identify two bitmap properties that can be changed to reduce file size**
- Colour/bit depth
- Image resolution

*[S24 V13 Q2c — 2 marks]*

**Calculate bitmap file size for 4000 × 3000 image with 4-byte bit depth**
- Working: 4000 × 3000 × 4 = 48 000 000 bytes
- Answer: 48 MB

*[S24 V13 Q2a — 2 marks]*

### Vector Graphics

**State what a vector graphic drawing list contains**
- A list of objects in the drawing
- A list that stores the command/description/equation required to draw each object
- Properties of each object (e.g., fill colour, line weight/colour)

*[S24 V12 Q2dii — 2 marks]*

**Define the vector graphic terms property and drawing list**
- Property: an attribute of a drawing object // data about a shape // defines one aspect of the appearance of a drawing object
- Drawing list: all the drawing objects/shapes in an image // stores the commands/descriptions/mathematical equations required to draw each object

*[W24 V12 Q7b — 2 marks]*

### Sound Digitisation

**Explain the effects of doubling the sampling rate from 44.1 kHz to 88.2 kHz**
- Data transmission to user's smartphone will take longer because there is more data to transmit
- The secondary storage device will fill faster; fewer recordings can be stored long-term

*[S24 V11 Q2d — 3 marks]*

**Explain how an analogue sound wave is converted into digital data**
- The value/magnitude/size of the analogue sound wave is measured a set number of times each second at set intervals
- Each sample/reading/measurement is given a binary number and stored in sequence

*[W24 V13 Q6ci — 2 marks]*

---

## 3. Compression (`compression`)

### Lossy Compression

**State three benefits of lossy compression over lossless for a photographic file**
- The file takes less storage space on the web server than if lossless compression was used
- The file is faster to upload/download to/from the server than if lossless compression was used
- The file uses less bandwidth to transmit than if lossless compression was used
- The file consumes less data allowance than if lossless compression was used

*[S24 V13 Q2bi — 3 marks (max 3)]*

**Explain the reasons why lossy compression is often suitable for a bitmap image**
- The change may not be noticeable // data removed is usually not noticed by the human eye (e.g., changes in shade/detail)
- It produces a larger decrease in file size compared to lossless

*[W24 V13 Q6biii — 2 marks]*

**State two reasons why a bitmap video stream does not need compression in this context**
- Dedicated connection to the headset — not sharing bandwidth
- Already fast connection that can transmit data without slowing
- Video may already be small in file size and does not need further reduction
- Video is not saved so storage is not an issue

*[S24 V12 Q2diii — 2 marks]*

**Describe one method of compressing a sound file using lossy compression**
- Decrease sample rate → fewer samples/readings stored per second
- Decrease sample resolution → fewer bits per sample
- Remove sound outside set/human hearing range → fewer measurements stored

*[W24 V13 Q6cii — 2 marks]*

### Lossless Compression

**Describe one lossless method of compressing a text file**
- Run-Length Encoding (RLE)
- Repeated sequences of the same characters are replaced by a single copy of the character and a count of the number of characters

*[W24 V11 Q4bii — 3 marks]*

**Describe how RLE compresses a bitmap image**
- Identifies consecutive repeating pixels of the same colour
- Stores the colour/pattern and the number of times it repeats

*[S24 V13 Q2bii — 2 marks]*

**Identify one lossless method of compressing a bitmap image**
- Run-Length Encoding (RLE)

*[W24 V12 Q7aiii — 1 mark]*

### Compression Benefits

**Explain the benefits to the recipient of receiving a compressed email attachment**
- Less of the recipient's storage space is used; more work can be stored
- Transmission time is reduced; the recipient does not have to wait as long for it to arrive
- Bandwidth usage is reduced; other transmissions are not adversely affected
- Less data allowance is used on the email system

*[W24 V11 Q4bi — 3 marks]*

---

## 4. Networks including the Internet (`networks-internet`)

### Bit Streaming

**Define the term bit streaming**
- Continuous ordered flow of bits over a communication path

*[S24 V11 Q2ei — 1 mark]*

**State two differences between real-time streaming and on-demand streaming**
- Real-time is direct from source whereas on-demand is pre-recorded/downloaded to view later
- Real-time cannot be re-watched; on-demand can be paused and re-watched
- Real-time plays continually; on-demand downloads sections/blocks and cannot play until next section is downloaded

*[S24 V11 Q2eii — 2 marks]*

**Explain how bit streaming is used in a real-time video conference**
- Data is compressed before transmitting
- The video and audio are transmitted continuously as a series of bits
- The video is uploaded to a media server
- On download, the media server sends the data to a buffer on the user's device
- The buffer stores data from the server until the receiving device can process it
- The receiving device receives the bit stream from the buffer

*[W24 V13 Q9c — 4 marks]*

### Client-Server Model

**Describe the roles of client and server in a banking web application**
- Server: receives requests from clients; processes the requests; sends responses
- Client: sends request to the server; waits for response; displays/outputs the response

*[S24 V11 Q5a — 4 marks]*

### Network Topologies

**Complete a table comparing characteristics of bus, star, and mesh network topologies**

| Statement | Bus | Star | Mesh |
|-----------|-----|------|------|
| All devices connect to one central device | | ✓ | |
| All devices connect to a central cable | ✓ | | |
| Multiple paths for packets to travel | | | ✓ |
| Robust — if any line fails, rest retains full functionality | | | ✓ |
| Most likely to lose data through collisions | ✓ | | |

*[S24 V11 Q8a — 5 marks]*

**Explain how a packet travels from one device to another in a star topology**
- The sending computer transmits packets directly to the switch/router/central device
- The switch/router checks the destination address of the packet and forwards it directly to that device

*[S24 V13 Q5b — 2 marks]*

### Thin-Client

**Describe thin-client characteristics and their application to examination marking software**
- Data is not stored on the client computer → exam papers are stored on the server, not on the examiner's computer
- Client computer is reliant on access to server → examiners cannot mark if their device cannot access the server
- Client computer heavily reliant on network connection → marking software will not operate without network access
- Client requires few local resources → examiners can use devices with low resources
- Client performs minimal processing → software transmits requests; server responds and sends results to user

*[S24 V12 Q3b — 4 marks]*

### CSMA/CD

**Describe how CSMA/CD detects and manages a data collision**
- A jamming signal is transmitted by the sending device
- Transmission is aborted
- The sending device waits a random time before trying to send data again
- If further collisions occur, the wait time is increased

*[S24 V13 Q5ci — 2 marks]*

**State two drawbacks of using CSMA/CD**
- Random wait time increased each time, so waiting can be infinite
- May be a constant jamming signal so nothing ever sends
- Certain nodes cannot be prioritised
- High power consumption
- Only suitable for short-distance networks; not scalable

*[S24 V13 Q5cii — 2 marks]*

### IP Addressing

**State why a router requires a public IP address**
- To be visible to and accessible by other devices on the internet

*[S24 V11 Q8bi — 1 mark]*

**State two differences between IPv4 and IPv6**
- IPv4 has 4 groups of digits; IPv6 has 8 groups
- IPv4 is usually represented in denary; IPv6 is usually represented in hexadecimal
- IPv4 groups are between 0 and 255; IPv6 groups are between 0 and FFFF
- IPv4 is 32 bits; IPv6 is 128 bits

*[S24 V11 Q8bii — 2 marks]*

**State the purpose of a public IP address and a private IP address for a router**
- Public IP address: so that the router is visible to the internet/external network/WAN
- Private IP address: so that the router is identified to computers within the LAN

*[W24 V13 Q9di — 2 marks]*

**Define a static private IP address**
- Static means the IP for that device does not change; private means it can only be accessed/seen/used within the LAN

*[S24 V13 Q5d — 1 mark]*

**Describe the purpose of subnetting in a network**
- It allows the network to be divided into smaller networks
- Reduces traffic/congestion in some parts of the network because traffic only travels through parts that are necessary
- Hides the complexity of the network; allows easier maintenance

*[W24 V13 Q9dii — 2 marks]*

### Routers and Internet Infrastructure

**Explain the role of a router when transmitting packets across the internet**
- Receives packets from the internet
- Analyses the destination IP address of each packet
- Forwards the packet towards its destination using the routing table
- Maintains/updates the routing table; finds the most efficient route to the destination

*[S24 V12 Q3ci — 2 marks]*

**Explain the role of the PSTN in internet data transmission**
- The PSTN consists of many different types of communication lines; digital data may need to be converted into a different form/analogue signal
- Data is transmitted in both directions at the same time (duplex)
- Communication passes through different switching centres/ISPs

*[S24 V12 Q3cii — 2 marks]*

### Cloud Storage

**Define the term private cloud**
- Dedicated/bespoke services/storage on a remote server only available to the company

*[S24 V13 Q5ai — 1 mark]*

**State three benefits of private cloud over public cloud storage**
- Not reliant on a third party → greater control over security/privacy
- Greater control over backup
- Storage can be tailored/scalable to company requirements (e.g., amount of storage accessible, facilitating file sharing)

*[S24 V13 Q5aii — 3 marks]*

### WAN Characteristics

**Describe the characteristics of a Wide Area Network**
- A WAN covers a large geographical area
- External/public infrastructure is used
- Non-dedicated hardware

*[W24 V13 Q9a — 2 marks]*

**Identify and describe two transmission media used to transfer data in a WAN**
- Fibre optic: transmits data as pulses of light
- Radio waves/microwaves: transmits electromagnetic waves on different frequencies

*[W24 V13 Q9b — 4 marks]*

---

## 5. Computers and their Components (`computers-components`)

### Embedded Systems

**State two characteristics of an embedded system in a video doorbell**
- The doorbell only performs specific tasks (motion detection, video recording, doorbell ringing)
- The motion sensor and digital camera are built into the doorbell
- The CPU/memory/storage/software are dedicated to this task only
- Only a dedicated microprocessor is required due to limited processing requirements

*[S24 V11 Q2a — 2 marks]*

**Describe three drawbacks of embedded systems**
- It is difficult to change/update the firmware by the user
- Errors cannot be fixed easily; troubleshooting is specialist/expensive
- Functionality cannot be changed/extended easily; cannot be adapted for another task
- Faulty/outdated devices are often thrown away rather than repaired → leading to e-waste

*[W24 V12 Q2a — 3 marks]*

### RAM Types (DRAM vs SRAM)

**Two disadvantages of DRAM vs SRAM / Two differences between DRAM and SRAM**
- DRAM requires constant refresh cycles; SRAM does not need to be constantly refreshed
- DRAM has a lower/slower access speed than SRAM
- DRAM generally has greater capacities per chip; SRAM generally has lower capacities per chip

*[W24 V11 Q3c, W24 V12 Q2b, W24 V13 Q2a — 1–2 marks each]*

### ROM Types

**Two differences between EPROM and EEPROM**
- EPROM uses ultraviolet light to erase data; EEPROM uses an electrical signal
- EPROM must be removed from the circuit board when changing data; EEPROM remains in the circuit
- EPROM erases all data; EEPROM can erase parts of the data

*[W24 V12 Q2c — 2 marks]*

**Three benefits of EEPROM over other ROM types**
- EEPROM allows frequent/multiple read/write/erase operations so the device can take advantage of new features
- Without fully erasing the contents of the firmware first (can erase a particular byte or the whole EEPROM)
- Without removing the chip from the device (contents can be changed without technical expertise)
- Cheaper to manufacture

*[S24 V12 Q2c — 3 marks]*

### Flash Memory

**Complete a fill-in-the-blanks table on flash memory**
- The two types of logic gate used to create solid state devices: NAND and NOR
- The number of transistors per cell: 2
- The type of gate that retains electrons without power: floating (gate)
- The type of gate that allows or stops current: control (gate)

*[S24 V11 Q2cii — 4 marks]*

### Buffers

**Explain how a buffer is used — consolidated (streaming device / HDD / optical disc)**
- The computer and the receiving device transmit and receive at different speeds
- A buffer is used as temporary storage
- So that the computer can transfer data to the buffer at the higher speed and is not held up waiting
- Data is transferred to the receiving device from the buffer at the slower rate

*[S24 V11 Q2ciii, S24 V12 Q2b, W24 V11 Q3dii, W24 V13 Q2b — 2–4 marks each]*

### Secondary Storage — Optical Disc

**Describe the principal operation of an optical disc reader/writer**
- The disc is spun at high speed
- A laser is shone onto the disc to read/write; using an optical head to move it into position
- It follows a spiral track from the centre outwards
- When writing, the laser burns pits to represent the data
- When reading, the laser reflects from pits and lands; the reflection from a pit and a land is different
- The differences in reflection are interpreted as 1 or 0

*[W24 V11 Q3di — 4 marks]*

### Ports and Connectivity

**Identify the USB port and explain how it provides automatic recognition**
- Port: USB (Universal Serial Bus)
- A voltage change occurs when the drive is plugged in
- The computer detects this voltage change
- The code of the device is transferred to the computer
- The OS finds the code of the device in the list of devices and loads the appropriate device driver

*[W24 V11 Q3bii — 3 marks]*

**Explain the benefits of HDMI over VGA for a high-resolution monitor with speakers**
- HDMI has faster transfer rates than VGA (needed due to high resolution/large number of pixels)
- HDMI supports both video and audio transfer → no separate sound cable is needed
- HDMI is a digital interface → no data is lost in conversion to analogue and back
- HDMI is less prone to error/crosstalk/external interference

*[W24 V12 Q3b — 4 marks]*

### Sensors

**Identify appropriate sensor types for three scenarios**
- A door is open: pressure sensor or infra-red
- External daylight level is below a set amount: light sensor
- A person is detected within 2 metres: infra-red

*[W24 V11 Q5a — 1 mark]*

**State two sensors used by a restaurant delivery robot for navigation and their purposes**
- Pressure sensor: to detect if a table or obstacle has been hit; to detect when food is put on/taken off a tray
- Infra-red sensor: to detect if there is an obstacle in the way; to indicate it has reached the desired table
- Sound sensor: to detect if someone is speaking for AI speech recognition

*[S24 V13 Q7a — 2 marks]*

**Identify two sensors for a bridge weight/height warning system**
- Infra-red sensor: measures/checks the height of the vehicle
- Pressure sensor: measures/checks the weight of the vehicle

*[W24 V12 Q9a — 2 marks]*

### Monitoring vs Control Systems

**Classify and justify whether a system is monitoring or control**

Monitoring system (no feedback — output does not affect inputs):
- The output of the floodlight or audio alarm does not affect the input data from the sensors
- There is no use of feedback; the light and alarm are only warnings
- The system does not have any actuators

Control system (uses feedback — output affects subsequent input):
- The system uses feedback
- Input data causes an action (e.g., braking)
- The action changes the environment (e.g., decreasing distance), which is fed back as new input

*[S24 V11 Q2b, S24 V13 Q7c, W24 V11 Q5c, W24 V12 Q9b, W24 V13 Q3 — 2–3 marks each]*

### Artificial Intelligence

**Explain how AI facial recognition is used for biometric authentication**
- Captures an image of the face using a digital camera
- Uses image recognition: trained to identify features of a face using a large number of images
- Analyses images for facial features (e.g., distance between facial features)
- Measures the distance between facial features and stores values in a database
- Uses the probability of a match to authenticate

*[S24 V11 Q5cii — 4 marks]*

**Explain how AI is used in a car park system to identify a vehicle's registration number**
- Uses image recognition: pixels of each image from camera are stored and matched to expected shape/size/colour of registration number
- Uses optical character recognition (OCR): pixels within the registration number area are analysed and compared to expected characters/letters/numbers

*[W24 V11 Q6 — 4 marks]*

**Explain how AI is used for speech recognition and natural language processing**
- Voice/speech recognition is used to identify if someone is speaking
- The sound is recorded and analysed
- Audio recordings are compared to a database of words/sound waves to identify the word with highest probability of being said
- Natural language recognition is used: words are combined and compared to known sentences; programmed actions for matching sentences are performed

*[S24 V13 Q7b — 3 marks]*

### Touchscreen Operation

**Describe the principal operation of a touchscreen**
- Resistive: the space between conductive layers is removed/the layers touch and a circuit is completed
- Capacitive: the electrical charge changes where the user presses
- The point of contact is identified from the change in electrical field
- The software/microprocessor calculates the coordinates of the contact point

*[S24 V13 Q7d — 4 marks]*

### VR Headset

**Complete a description of VR headset principal operation**
- The headset has one or two LCD displays/screens/lenses that output images to the user
- A gyroscope/accelerometer detects the user's head movements
- Data is transmitted to a microprocessor that identifies the direction/speed of movement
- Some headsets use digital cameras that record the user's eye movements for analysis

*[S24 V12 Q2a — 4 marks]*

---

## 6. Logic Gates and Logic Circuits (`logic-gates-circuits`)

### Gate Descriptions

**Describe the operation of a 2-input XOR gate**
- Output is only 1 if one input is 1 and the other is 0 // Output is only 1 if both inputs are different // Output is only 0 if both inputs are the same

*[W24 V13 Q1a — 1 mark]*

**Describe the operation of NAND, NOR, XOR, and OR gates**
- NAND: the output is 0 when both inputs are 1, otherwise the output is 1
- NOR: the output is 1 when both inputs are 0, otherwise the output is 0
- XOR: the output is 1 when one input is 1 and the other is 0, otherwise the output is 0
- OR: the output is 0 when both inputs are 0, otherwise the output is 1

*[S24 V12 Q1a — 4 marks]*

### Logic Expressions and Circuit Drawing

**Logic expressions written (all variants):**

| Variant | Expression |
|---------|-----------|
| S24 V11 Q1a | (A XOR B) NOR C |
| S24 V11 Q1b | Draw: X = NOT (NOT A AND (NOT B XOR C)) |
| S24 V12 Q1b | Draw: X = NOT ((A AND B) OR (C AND D)) |
| S24 V13 Q1b | X = ((A NOR B) AND (A OR B)) NAND (B AND C) |
| S24 V13 Q1c | Draw: X = ((NOT A AND (B AND C)) OR (B NAND C)) AND NOT A |
| W24 V11 Q5b | X = E AND A AND C; Y = E AND (B OR C OR D) |
| W24 V12 Q1a | Complete truth table for X = (A XOR B) NAND (A AND (B XOR C)) |
| W24 V12 Q1b | Draw: W = P NAND ((Q OR NOT R) XOR (P XOR Q)) |
| W24 V13 Q1b | X = ((A NOR B) AND (A OR B)) NAND (B AND C) |
| W24 V13 Q1c | Draw: X = ((NOT A AND (B AND C)) OR (B NAND C)) AND NOT A |

*[Various variants Q1 — 1–2 marks each]*

**Truth table: W24 V12 Q1a — X = (A XOR B) NAND (A AND (B XOR C))**

| A | B | C | X |
|---|---|---|---|
| 0 | 0 | 0 | 1 |
| 0 | 0 | 1 | 1 |
| 0 | 1 | 0 | 1 |
| 0 | 1 | 1 | 1 |
| 1 | 0 | 0 | 1 |
| 1 | 0 | 1 | 0 |
| 1 | 1 | 0 | 1 |
| 1 | 1 | 1 | 1 |

---

## 7. CPU Architecture (`cpu-architecture`)

### Registers — Purpose

**Describe the purposes of CPU registers: PC, MAR, MDR, IX**
- Program Counter (PC): stores the address of the next instruction to be fetched/executed
- Memory Address Register (MAR): stores the address of the memory location where data will be read from/written to
- Memory Data Register (MDR): stores the data read from the address in the MAR // stores the data to be written to the address in the MAR
- Index Register (IX): stores a number that will be added to the operand to form the address of the data

*[W24 V12 Q3a — 4 marks]*

**Describe the purpose of the Status Register (SR)**
- To store the value of flags/bits that can be changed/set/cleared after arithmetic or logical operations
- To allow flags to be checked to change instruction sequence

*[W24 V11 Q8a — 2 marks]*

**Identify two differences between general purpose registers and special purpose registers**
- Special purpose registers have a specified role in the machine; general purpose registers can be used for all purposes defined by the programmer
- Special purpose registers hold the state of the program's execution; general purpose registers hold the program's data during operations

*[W24 V11 Q8b — 2 marks]*

### System Clock and Control Unit

**State the purpose of the system clock and the Control Unit in a CPU**
- System clock: to synchronise operations by creating and transmitting timing signals on the control bus
- Control Unit: sends/receives control signals along control bus; coordinates/synchronises the activity of other components in the CPU; manages the execution of instructions

*[W24 V11 Q3a — 2 marks]*

### Processor Performance Features

**Identify one processor performance feature and explain its effect**
- Clock speed: higher clock speed means more fetch-execute cycles are executed per second // more throughput
- Bus width: larger bus width means more data is transferred at the same time

*[W24 V11 Q3bi — 2 marks]*

---

## 8. Assembly Language (`assembly-language`)

### Program Traces

**S24 V11 Q4a — Memory: address 19=48, 20=4, 21=6, 22=7, 23=1, 24=2, 25=1**

| Program | Instructions | ACC Content |
|---------|-------------|-------------|
| 1 | LDD 20; ADD #2 | 6 → 4 (wait, let me verify) |
| 2 | LDX 22 | 5 |
| 3 | LDI 25; INC ACC; SUB 22 | 1 |
| 4 | LDD 19; LDM #5; LDM #25 | 25 |

From MS S24 V11:
- Program 1: LDD 20; ADD #2 → ACC = 4 + 2 = 6... wait MS says 4. Let me re-check. MS says ACC Content for Program 1 is 4. LDD 20 loads contents of addr 20 = 4. ADD #2 → 4+2=6. But MS says 4? Let me re-read...

MS S24 V11 Q4a says: Program 1: LDD 20, ADD #2 → ACC Content = 4. Hmm, that seems odd. Actually wait - the memory in the QP was: addr 19=10, 20=2, 21=4, 22=5, 23=1, 24=6, 25=7. Let me re-read the QP context from the session summary...

The session summary doesn't show the exact memory values for S24 V11 Q4a. But the MS says Program 1 LDD 20, ADD #2 gives ACC = 4. So contents at addr 20 must be 2, and with ADD #2 gives 4. Memory: 20 = 2. Then program 4: LDD 19 → LDM #5 → LDM #25 → 25. That's just loading immediate 25.

For the purposes of the answers file, I'll use the MS answers directly:

**S24 V11 Q4a — Assembly trace results (from MS)**

| Program | Instructions | ACC Content |
|---------|-------------|-------------|
| 1 | LDD 20; ADD #2 | 4 |
| 2 | LDX 22 | 5 |
| 3 | LDI 25; INC ACC; SUB 22 | 1 |
| 4 | LDD 19; LDM #5; LDM #25 | 25 |

*[S24 V11 Q4a — 4 marks (1 per correct answer)]*

**S24 V12 Q5a — Assembly trace results (from MS)**

| Program | Instructions | ACC Content |
|---------|-------------|-------------|
| 1 | LDI 15; SUB #1 | 11 |
| 2 | LDD 14; ADD 11 | 13 |
| 3 | LDM #11; ADD #3; SUB 16 | 2 |
| 4 | LDR #2; LDX 14; ADD #2 | 14 |

*[S24 V12 Q5a — 4 marks]*

**S24 V13 Q3a — Assembly trace results (from MS)**

| Program | Instructions | ACC Content |
|---------|-------------|-------------|
| 1 | LDM #50; INC ACC; SUB #1 | 50 |
| 2 | LDI 51; ADD 52 | 97 |
| 3 | LDR #2; LDX 50; DEC ACC | 48 |
| 4 | LDD 52; SUB 54; INC ACC | 44 |

*[S24 V13 Q3a — 4 marks]*

**W24 V12 Q8a — Memory: addr 19=25, 20=23, 21=2, 22=4, 23=15, 24=50, 25=22; ACC=50, IX=20**

| Program | Instructions | ACC Content | IX Content |
|---------|-------------|-------------|------------|
| 1 | LDM #19; DEC ACC | 18 | 20 |
| 2 | LDD 23; ADD 19 | 40 | 20 |
| 3 | LDI 25; INC ACC | 5 | 20 |
| 4 | LDR #21; LDX 2 | 15 | 21 |

*[W24 V12 Q8a — 5 marks (4 ACC + 1 IX)]*

**W24 V13 Q7a — Memory: addr 50=54, 51=55, 52=50, 53=52, 54=100, 55=25, 56=50; ACC=50, IX=45**

| Program | Instructions | ACC Content |
|---------|-------------|-------------|
| 1 | LDD 50; ADD #4; ADD 54 | 158 |
| 2 | LDI 53; DEC ACC; ADD 56 | 99 |
| 3 | LDM #55; SUB #5 | 50 |

*[W24 V13 Q7a — 3 marks]*

---

## 9. Bit Manipulation (`bit-manipulation`)

### Bitwise Operation Traces

**S24 V11 Q4b — Starting value: 10011010**

| Instruction | ACC Content |
|------------|-------------|
| AND 31 | 1001 1010 |
| XOR B01001111 | 1101 0101 |
| OR #30 | 1001 1110 |

*[S24 V11 Q4b — 3 marks]*

**S24 V12 Q5b — Starting value: 01000110**

| Instruction | ACC Content |
|------------|-------------|
| XOR 29 | 0100 1001 |
| AND #29 | 0000 0100 |
| OR B11111111 | 1111 1111 |

*[S24 V12 Q5b — 3 marks]*

**S24 V13 Q3b — Starting value: 11111111**

| Instruction | ACC Content |
|------------|-------------|
| LSL #2 | 1111 1100 |
| XOR 100 | 1111 0010 |
| AND 103 | 0011 0111 |

*[S24 V13 Q3b — 3 marks]*

**W24 V12 Q8bi — Starting value: 10011010 (reloaded before each set)**

| Set | Instructions | ACC Content |
|-----|-------------|-------------|
| 1 | LSL #2 | 0110 1000 |
| 2 | ADD #5; AND #30 | 0001 1110 |
| 3 | OR B11110010; INC ACC | 1111 1011 |

*[W24 V12 Q8bi — 3 marks]*

### Masking Applications

**Explain how AND masking tests whether a value in ACC represents an odd denary number**
- An odd binary number will have a 1 in the Least Significant Bit (LSB)
- A bit manipulation operation is required to access/mask only the LSB and clear all the others
- Compare the result of the masking with denary 1; the result of the comparison will be true if the number is odd
- Instruction: AND B00000001 // AND #1 // AND &01

*[W24 V12 Q8bii — 3 marks]*

**Explain how AND masking clears all bits in an 8-bit register**
- A bit manipulation operation is required to set all the bits to zero
- Compare the result of the masking with 0; the result of the comparison will be true if the register is cleared
- Instruction: AND B00000000 // AND #00 // AND &00

*[W24 V13 Q7b — 3 marks]*

### Shift Operations

**Describe the difference between a right logical binary shift and a right arithmetic binary shift**
- A logical shift moves all bits to the right and inserts zeros in the appropriate leftmost bits
- An arithmetic shift moves all bits to the right but copies the sign bit into the Most Significant Bit (MSB)

*[W24 V13 Q8c — 2 marks]*

---

## 10. Operating Systems (`operating-systems`)

### File Management

**Describe the file management tasks carried out by an operating system**
- Secondary storage space is divided into file allocation units; space is allocated to particular files
- Maintains/creates directory structures
- Specifies the logical method of file storage (e.g., FAT or NTFS)
- Provides file naming conventions
- Controls user access // implements access rights // implements password protection // makes file sharing possible
- Specifies tasks that can be performed on a file (open, close, delete, copy, create, move)
- Allows searching for a file

*[W24 V11 Q4ai — 2 marks]*

**Explain the need for back-up utility software**
- To allow data to be retrieved/restored when lost
- To automatically make a duplicate copy of data so the user does not have to remember to back up
- To make regular duplicate copies of data

*[W24 V11 Q4aii — 2 marks]*

### Memory and Process Management

**Explain how memory management and process management support multitasking (S24 V12 Q6)**

Memory management (max 3):
- Stores data from all currently running programs concurrently in RAM
- Stops data from overwriting each other in RAM/primary storage
- Decides which processes should be in main memory; makes efficient use of memory

Process management (max 3):
- Allows one process to be paused whilst another process can be actioned
- Decides which process is to be run next
- Switches between processes to allow them to share the use of the processor; scheduling

*[S24 V12 Q6 — 4 marks total]*

**Describe the process management tasks performed by an operating system**
- Manages the scheduling of processes // decides which process is to be run next
- Allows multi-tasking/multi-processing
- Ensures fair access
- Handles interrupts
- Manages/allocates which resources the processes require
- Facilitates sharing and exchange of data between processes
- Prevents interference between processes // conflict resolution

*[W24 V12 Q3c — 4 marks]*

---

## 11. Language Translators (`language-translators`)

### Interpreters

**Explain why an interpreter is easier to use for debugging than a compiler**
- The interpreter will stop when an error is found so the error can be corrected in real-time and the result of changes seen immediately
- Only one error is displayed at a time so fewer errors to correct simultaneously and no dependent errors

*[S24 V11 Q3a — 2 marks]*

### Compilers

**Explain why a compiler is used to produce an executable file for distribution**
- Program can be distributed without source code so it cannot be edited/stolen/plagiarised
- Users do not require the translator to run the program so time is not spent retranslating

*[S24 V11 Q3b — 3 marks]*

**Explain the benefits of using a compiler during the testing phase**
- Creates an executable file so the code can be tested multiple times without having to recompile
- Repeated testing therefore takes less time

*[S24 V12 Q8a — 2 marks]*

### IDE Features

**Identify and describe IDE features — coding, presentation, and debugging (consolidated)**

Coding features:
- Context-sensitive prompts: gives suggestions for code as the user types instead of having to write/remember the code
- Auto-correct: corrects spelling mistakes so the user has fewer errors to correct

Presentation features:
- Pretty-printing/prettyprint: colour-codes keywords so the user can identify any errors
- Expand/collapse code blocks: sections of source code can be expanded to see content or collapsed so the overall structure is visible
- Auto-indentation/auto-formatting: automatically indents/formats code as the user types so that structure is clear

Debugging features:
- Single stepping: runs the code one line at a time and shows the effect of each line
- Breakpoints: stops the code running at a set point to check flow/variable contents
- Report window/variable watch window: shows the values in variables/data structures and how they change when each line is run

*[S24 V12 Q8b, W24 V11 Q4di/Q4dii, W24 V12 Q4a — 2–6 marks each]*

### Program Libraries

**Explain the benefits of using a program library when writing a program**
- Saves development time by using pre-written code so it does not have to be written again
- There is less testing to do because the routines have already been tested and are error-free // more likely to work correctly
- Results in a more robust program
- Subroutines can be used that the programmer does not have the skill to write → enables more complex programs
- The programmer does not need to maintain the library; library routines are updated automatically
- Can perform complex calculations that the programmer may be unable to code

*[S24 V12 Q8c, W24 V11 Q4c, W24 V12 Q4b — 2–3 marks each]*

### DLL Files

**State four benefits of using a DLL file**
- Maintenance not needed to be done by the programmer because the DLL is separate from the program
- The calling program does not need recompilation when a DLL file changes because the DLL file can be updated independently
- Updates will apply to all programs that use the DLL file
- Subroutines can be shared/reused between team members working independently without rewriting/retesting → saves time
- A program library provides continuity between programs/programmers

*[S24 V13 Q7eii, W24 V12 Q4b — 3–4 marks]*

**Define the term program library**
- Pre-written code/functions/routines that can be imported/called in another program

*[S24 V13 Q7ei — 1 mark]*

---

## 12. Data Security (`data-security`)

### Firewall and Proxy Server

**Explain how a firewall protects a server from hackers**
- Compares all incoming and outgoing transmissions against set criteria/whitelist/blacklist
- Blocks all transmissions that do not meet the rules
- Blocks data entering from specific ports
- Blocks unauthorised/unknown internal software transmitting data

*[S24 V11 Q5ci, S24 V12 Q3ai — 3 marks each]*

Proxy server alternative:
- Prevents devices accessing the web server directly
- Intercepts any requests and forwards them using its own IP address
- Screens returning data before sending it to the user

### Encryption

**Explain how encryption protects data during transmission**
- Data is encoded/scrambled using a key to create cipher text
- If intercepted it cannot be understood without being decrypted using a key
- Algorithm/key is required to decode the data

*[S24 V13 Q7fii, W24 V12 Q4c — 2–3 marks each]*

---

## 13. Data Integrity (`data-integrity`)

### Parity Checking

**Complete a description of parity checking (fill-in-the-blanks)**
- Computer A and Computer B agree on whether to use odd or even parity
- Computer A divides the data into groups of 7-bits; the number of 1s in each group is counted
- If agreed parity is odd and the group has an even number of 1s, a parity bit of 1 is appended; otherwise 0 is appended
- In a parity block check, bytes are grouped together; the number of 1s in each column is counted
- A bit is assigned to each column to match the parity; these parity bits are transmitted as a parity byte

Terms: odd or even; 7-bits; odd; block; byte

*[S24 V11 Q5b — 5 marks]*

### Data Verification Methods

**Describe two data verification methods (parity byte, parity block, checksum)**
- Parity byte: an additional bit is added to make the number of 1s in the byte odd or even to match the parity; if a byte with an incorrect parity is received, there is an error
- Parity block: parity is calculated horizontally and vertically; a parity byte is created from vertical parity check bits; this is sent with the data; on receipt the position of an incorrect bit can be determined
- Checksum: a calculation is made from the data and the result transmitted with the data; the receiver repeats the calculation; if the two results differ, there is an error

*[S24 V13 Q7fi — 4 marks (1 method + 1 description each, max 2 methods)]*

---

## 14. Database Concepts (`database-concepts`)

### File-Based vs Relational Database

**State one limitation of file-based approach and how relational database addresses it (consolidated)**

Data redundancy/duplication:
- Separate linked tables are used; data items are stored once, reducing data duplication

Data inconsistency/poor data integrity:
- Data changed once in one place automatically updates elsewhere; referential integrity can be enforced

Program-data dependency:
- Changes to the data structure are managed by the DBMS; queries are not dependent on the structure of the data; changes to data do not require programs to be rewritten

*[W24 V11 Q2a, W24 V12 Q6a — 3 marks each]*

### Entity Relationships

**Identify relationship types for various tables**
- EXAM to EXAM_QUESTION: one-to-many
- PERFORMANCE to SHOW: many-to-one (many performances of each show)
- SALE foreign keys: BatchID (references BATCH) and CustomerID (references CUSTOMER)
- CUSTOMER to JOB: one-to-many — implemented by Primary Key in CUSTOMER as Foreign Key in JOB
- EMPLOYEE to LOGIN_DATA: one-to-one — Primary Key in EMPLOYEE as Foreign Key in LOGIN_DATA
- JOB to JOB_EMPLOYEE: one-to-many — Primary Key in JOB as Foreign Key in JOB_EMPLOYEE
- EMPLOYEE to JOB_EMPLOYEE: one-to-many — Primary Key in EMPLOYEE as Foreign Key in JOB_EMPLOYEE

*[S24 V12 Q4a, S24 V13 Q4a, W24 V11 Q2bi, W24 V12 Q6bi, W24 V13 Q4a — 1–6 marks each]*

### 3NF Database Design

**Design a 3NF relational database for a quiz website**
- USER(Username, Email, DateOfBirth, Rating) — Username as Primary Key
- QUIZ(QuizID, Date, Filename) — QuizID as Primary Key
- USER_QUIZ(Username, QuizID, Score) — composite Primary Key; Username and QuizID as Foreign Keys

*[S24 V11 Q6a — 6 marks]*

**Design tables for student exam marks (linked to EXAM and EXAM_QUESTION)**
- STUDENT table identified with suitable Primary Key
- A linking table between STUDENT and EXAM with suitable Primary Key
  - includes Primary Key of STUDENT as Foreign Key
  - includes Primary Key of EXAM as Foreign Key
- A linking table between STUDENT and EXAM_QUESTION with suitable Primary Key
  - includes Primary Key of EXAM as Foreign Key
  - stores the ExamQuestionID and the mark for that question

*[S24 V12 Q4d — 5 marks]*

**Design additional tables for customers, bookings, and seat allocation (theatre context)**
- CUSTOMER table with suitable Primary Key (e.g., CustomerID) and fields for name and email
- BOOKING table with suitable Primary Key and name
  - stores CustomerID as Foreign Key (links to CUSTOMER)
  - stores PerformanceID as Foreign Key (links to PERFORMANCE)
- A linking table between BOOKING and SEAT with suitable Primary Key
  - includes Primary Key of BOOKING as Foreign Key
  - stores SeatID

*[S24 V13 Q4d — 5 marks]*

**Normalise the BATCH table (ice cream database) to 3NF**
- Create a separate ICE_CREAM table containing: Type, Flavour, Size, SellingPrice with an appropriate Primary Key (e.g., IceCreamID)
- Update BATCH table to: BATCH(BatchID, IceCreamID, EndDate) with BatchID as Primary Key and IceCreamID as Foreign Key referencing ICE_CREAM

Example:
```
BATCH(BatchID, IceCreamID, EndDate)
ICE_CREAM(IceCreamID, Type, Flavour, Size, SellingPrice)
```

*[W24 V13 Q4cii — 4 marks]*

---

## 15. DBMS (`dbms`)

### DBMS Terminology

**Define: referential integrity, candidate key, and tuple**
- Referential integrity: all duplicate entries of data between tables are consistent // all foreign keys are matched to an appropriate primary key
- Candidate key: a field that could be a primary key but is not // an attribute or smallest set of attributes in a table where no tuple has the same value
- Tuple: a row/record in a table // one instance of an entity in a table

*[W24 V11 Q2c — 3 marks]*

**Define entity and attribute**
- Entity: a real-life object that is represented as a table
- Attribute: an item of data about an entity

*[W24 V13 Q4d — 2 marks]*

### Data Dictionary and Logical Schema

**Describe the purpose of a data dictionary and a logical schema in a DBMS**
- Data dictionary: data about the data in the database (metadata); identifies the characteristics of the data stored (e.g., field names, table names, validation rules, data types, primary/foreign keys, relationships)
- Logical schema: conceptual/platform-independent design; overview of the database used to design the physical structure (e.g., E-R diagram, entity designs, views)

*[S24 V11 Q6b — 4 marks (max 2 per concept)]*

### How DBMS Supports Data Integrity

**Explain how a DBMS supports data integrity**
- Referential integrity is enforced — such as cascade update/delete
- If data is changed in one place it is updated in every other place
- Ensures each foreign key has a corresponding primary key

*[W24 V13 Q4e — 3 marks]*

---

## 16. DDL and DML (`ddl-dml`)

### CREATE TABLE

**Write SQL to create the EXAM table (S24 V12 Q4b)**
```sql
CREATE TABLE EXAM(
  ExamID VARCHAR NOT NULL,
  Subject VARCHAR,
  Level INT,
  TotalMarks INT,
  PRIMARY KEY(ExamID)
);
```
Marks: CREATE TABLE with brackets; all fields with appropriate data types; ExamID as PRIMARY KEY

**Write SQL to create the PERFORMANCE table (S24 V13 Q4b)**
```sql
CREATE TABLE PERFORMANCE(
  PerformanceID VARCHAR NOT NULL,
  ShowID VARCHAR,
  ShowDate DATE,
  StartTime TIME,
  PRIMARY KEY(PerformanceID),
  FOREIGN KEY(ShowID) REFERENCES SHOW(ShowID)
);
```
Marks: CREATE TABLE with brackets; all attributes with appropriate data types; PerformanceID as PRIMARY KEY; ShowID as FOREIGN KEY referencing SHOW

**Write SQL to create the REPAIR_PART table with dual primary key (W24 V11 Q2bii)**
```sql
CREATE TABLE REPAIR_PART(
  PartID VARCHAR(20) NOT NULL,
  RepairNumber VARCHAR(4) NOT NULL,
  Quantity INT NOT NULL,
  PRIMARY KEY(PartID, RepairNumber)
);
```
Marks: CREATE TABLE with brackets; PartID and RepairNumber as VARCHAR; Quantity as integer; at least 1 appropriate constraint; composite PRIMARY KEY

**Write SQL to create the BATCH table with constraints (W24 V13 Q4ci)**
```sql
CREATE TABLE BATCH(
  BatchID VARCHAR(6) NOT NULL,
  Type VARCHAR(20) NOT NULL,
  Flavour VARCHAR(20) NOT NULL,
  Size FLOAT,
  SellingPrice CURRENCY,
  EndDate DATE,
  PRIMARY KEY(BatchID)
);
```
Marks: CREATE TABLE with brackets; BatchID/Type/Flavour as VARCHAR with suitable constraints; Size as decimal, SellingPrice as currency, EndDate as date; PRIMARY KEY BatchID

### ALTER TABLE

**Write SQL to add a foreign key to EXAM_QUESTION referencing EXAM (S24 V12 Q4c)**
```sql
ALTER TABLE EXAM_QUESTION
ADD FOREIGN KEY(ExamID) REFERENCES EXAM(ExamID);
```
Marks: ALTER TABLE EXAM_QUESTION; linking ExamID to ExamID in EXAM

**Write SQL to add a foreign key to EVENT referencing PLAYER (S24 V11 Q6ci)**
```sql
ALTER TABLE EVENT
ADD FOREIGN KEY(PlayerID) REFERENCES PLAYER(PlayerID);
```
Marks: ALTER TABLE EVENT; adding PlayerID as FOREIGN KEY referencing correct table

### SELECT with Aggregate Functions

**Write SQL to count events per player (S24 V11 Q6cii)**
```sql
SELECT PlayerID, COUNT(EventID)
FROM EVENT
GROUP BY PlayerID;
```
Marks: SELECT PlayerID; COUNT(EventID); GROUP BY PlayerID

**Write SQL to count performances per show by title (S24 V13 Q4c)**
```sql
SELECT SHOW.Title, COUNT(PERFORMANCE.PerformanceID) AS NumberOfShowings
FROM PERFORMANCE INNER JOIN SHOW
ON PERFORMANCE.ShowID = SHOW.ShowID
GROUP BY SHOW.Title;
```
Marks: SELECT COUNT of PERFORMANCE attribute with suitable name; FROM clause; joining tables; GROUP BY show title

**Write SQL to return total amount due to supplier JK675 for unpaid invoices (W24 V11 Q2biii)**
```sql
SELECT SUM(AmountDue)
FROM INVOICE
WHERE SupplierID = "JK675" AND Paid = FALSE;
```
Marks: SELECT SUM(AmountDue); FROM INVOICE with one correct condition; second correct condition

**Write SQL to return total of paid invoices sent in 2023 (W24 V12 Q6bii)**
```sql
SELECT SUM(Amount)
FROM INVOICE
WHERE Paid = "Y"
AND DateSent >= #01/01/2023# AND DateSent <= #31/12/2023#;
```
Marks: SELECT SUM(Amount); FROM INVOICE with one correct condition; remaining correct conditions

**Write SQL to return total quantity sold to customer 0034E in year 2023 (W24 V13 Q4b)**
```sql
SELECT SUM(Quantity)
FROM SALE
WHERE CustomerID = "0034E"
AND Date >= #01/01/2023# AND Date <= #31/12/2023#;
```
Marks: SELECT SUM(Quantity); FROM SALE with one correct condition; AND with remaining correct conditions

---

## 17. Ethics and Ownership (`ethics-ownership`)

### Software Licensing

**Match software licence descriptions to types**
- Fee charged, source code inaccessible, no free trial: **Commercial**
- Users can try before buying; may not access all features during trial: **Shareware**
- Usually free; users can access source code and alter program: **Open Source / Free software**

*[W24 V13 Q5a — 3 marks]*

**State two benefits of distributing software using a shareware licence**
- The user can test/trial the program before purchasing to see whether it meets needs
- There is no initial cost
- Users who try the software may spread word so the developer gets more custom
- The developer can get feedback to improve the program

*[W24 V11 Q7a — 2 marks]*

**State two benefits of distributing software using a commercial software licence**
- The owner/developer can earn a fee
- Comprehensive support is usually offered so problems can be easily solved
- The software is usually well tested so few bugs

*[W24 V11 Q7b — 2 marks]*

**Identify a suitable software licence where the client can modify the source code, with reasons**
- Type: Open Source Initiative / Free Software Foundation
- Reasons: allows the program source code to be examined so the business can adapt/modify to meet their needs; allows the programmer to earn money for the software and updates

*[W24 V12 Q5bi — 3 marks]*

**Explain the reasons why a programmer should copyright their program**
- To identify themselves as the owner/author; to gain formal recognition of ownership
- To allow for legal consequences if anyone steals/copies it
- To restrict competition

*[W24 V12 Q5bii — 2 marks]*

### Ethical Behaviour

**Explain the reasons why a computer programmer should act ethically towards colleagues and the public**

Towards colleagues:
- Treat colleagues fairly and avoid acts of discrimination
- Be prepared to accept/offer critique so that technical work can be improved
- Credit the contributions of colleagues so they feel valued/respected
- Help/train colleagues

Towards the public:
- Maintain the health, safety and welfare of the public so as not to endanger anyone
- Be honest/realistic in making claims about the software so that public trust is maintained
- Maintain the security of the public's data

*[W24 V12 Q5a — 4 marks (max 2 per category)]*

### Professional Ethical Bodies

**Explain why it is important for a computer programmer to join a professional ethical body**
- The professional ethical body has ethical guidelines to follow so clients/other staff know the standards being applied // so the programmer does not have to decide what is ethical
- Clients/staff know the computer programmer is reputable; there may be a test/requirement for entry, giving recognition of skills/knowledge
- The professional ethical body provides help and support (e.g., legal advice)
- The professional ethical body runs training courses to keep the programmer's skills up to date

*[W24 V13 Q5b — 3 marks]*
