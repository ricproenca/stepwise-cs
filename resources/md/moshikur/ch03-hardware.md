# Chapter 03: Hardware

Source: https://moshikur.com/as-level/as-ch03/3-1-computers-and-their-components/

---

## 3.1 Computers and Their Components

### 3.1.1 Input, Output and Storage

**Why computers need each component:**
- **Input devices** (keyboard, mouse, sensors) — allow users and systems to enter data
- **Output devices** (monitor, printer) — present processed results to the user
- **Primary memory / RAM** — fast temporary storage for active programs and data
- **Secondary storage** (HDD, SSD, USB) — permanent data retention when power is off

### 3.1.2 Embedded Systems

Specialised computer systems designed for a single specific task (e.g. washing machine controller, car ABS).

| Benefits | Drawbacks |
|---|---|
| Efficient and optimised for task | Limited functionality |
| Cost-effective | Difficult to upgrade |
| Low power consumption | Fixed purpose |

### 3.1.3 Hardware Devices

#### Laser Printers (Output)

Use a laser beam and powdered toner to print documents through six steps:
1. **Processing** — data sent from computer
2. **Charging** — drum given a negative charge
3. **Writing** — laser beam neutralises charge in pattern of image
4. **Applying toner** — toner sticks to discharged areas
5. **Transferring** — toner transferred from drum to paper
6. **Fusing** — heat and pressure bond toner permanently to paper

#### 3D Printers (Output)

Build objects layer-by-layer from digital CAD models by depositing material (plastic, resin, metal) incrementally.

#### Microphones (Input)

Convert sound waves into electrical signals via diaphragm vibration. The diaphragm moves with air pressure changes; this movement generates a varying electrical current.

#### Speakers (Output)

Convert electrical signals back into sound through a vibrating speaker cone. Current through a coil creates a magnetic field that moves the cone, producing sound waves.

#### Magnetic Hard Disk Drives (HDD) (Storage)

Store data magnetically on spinning platters. Read/write heads move across the platters to access data. Slower than SSDs but cost-effective for large storage.

#### Solid State Drives (SSD) (Storage)

Use NAND flash memory (floating gate transistors) to store data with no moving parts. Electrons are trapped in the floating gate and retained even without power — making storage non-volatile.

| Feature | HDD | SSD |
|---|---|---|
| Speed | Slower | Faster |
| Moving parts | Yes (platters, heads) | No |
| Durability | Less durable | More durable |
| Cost per GB | Cheaper | More expensive |
| Noise | Yes | Silent |

#### Optical Disc Readers (Storage)

Use laser beams to detect **pits** and **lands** on the disc surface, representing binary 0s and 1s. Used for CDs, DVDs, and Blu-ray discs.

#### Touchscreens (Input)

Four main types:

| Type | How It Works |
|---|---|
| Resistive | Two layers press together; contact point detected by electrical resistance |
| Capacitive | Detects electrical charge from fingertip; used in smartphones |
| Infrared | Grid of IR beams broken by touch |
| Surface Acoustic Wave (SAW) | Ultrasonic waves across surface; disruption detects touch |

#### VR Headsets (Input/Output)

Display immersive 3D environments using dual screens (one per eye). Head tracking and motion sensors update the view in real time.

---

### 3.1.4 Buffers

A **buffer** is a temporary storage area that manages data flow between a fast device and a slow device.

**Purpose:** prevents bottlenecks and data loss — e.g. when a fast CPU sends data to a slow printer.

**Used in:** printing, streaming, keyboard input, file transfers.

---

### 3.1.5 RAM vs ROM

| Aspect | RAM | ROM |
|---|---|---|
| Nature | Volatile (data lost on power off) | Non-volatile (data retained permanently) |
| Speed | Faster | Slower |
| Function | Stores active programs and data | Stores firmware and BIOS/boot instructions |
| Writeable | Yes | No (or limited) |

---

### 3.1.6 SRAM vs DRAM

| Feature | SRAM (Static RAM) | DRAM (Dynamic RAM) |
|---|---|---|
| Speed | Faster | Slower |
| Cost | More expensive | Cheaper |
| Density | Lower | Higher |
| Refresh needed | No | Yes (must be periodically refreshed) |
| Use | CPU cache | Main memory (RAM modules) |

---

### 3.1.7 ROM Variants

| Type | Description |
|---|---|
| PROM | Programmable ROM — written once by user, then permanent |
| EPROM | Erasable PROM — erased by UV light; reprogrammable |
| EEPROM | Electrically Erasable PROM — erased electrically; used in flash drives and SSDs |

---

### 3.1.8 Monitoring and Control Systems

Systems using **sensors** to collect real-world data and **actuators** to carry out physical actions based on processed decisions.

Examples: temperature control (sensor → microprocessor → heater actuator), security systems (motion sensor → alarm actuator).

---

## 3.2 Logic Gates and Logic Circuits

Source: https://moshikur.com/as-level/as-ch03/3-2-logic-gates-and-logic-circuits/

*Note: the subpage returned a 404 at time of scraping — content below is based on syllabus coverage.*

### Basic Logic Gates

| Gate | Symbol | Function |
|---|---|---|
| AND | A · B | Output is 1 only when ALL inputs are 1 |
| OR | A + B | Output is 1 when AT LEAST ONE input is 1 |
| NOT | Ā | Output is the inverse of the input |

### Complex Logic Gates

| Gate | Function |
|---|---|
| NAND | NOT AND — output is 0 only when all inputs are 1 |
| NOR | NOT OR — output is 1 only when all inputs are 0 |
| XOR | Output is 1 when inputs are DIFFERENT |
| XNOR | Output is 1 when inputs are the SAME |

### Truth Tables

**AND gate (2 inputs):**

| A | B | Output |
|---|---|---|
| 0 | 0 | 0 |
| 0 | 1 | 0 |
| 1 | 0 | 0 |
| 1 | 1 | 1 |

**OR gate (2 inputs):**

| A | B | Output |
|---|---|---|
| 0 | 0 | 0 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 1 |

**NOT gate:**

| A | Output |
|---|---|
| 0 | 1 |
| 1 | 0 |

**NAND gate:**

| A | B | Output |
|---|---|---|
| 0 | 0 | 1 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 0 |

**NOR gate:**

| A | B | Output |
|---|---|---|
| 0 | 0 | 1 |
| 0 | 1 | 0 |
| 1 | 0 | 0 |
| 1 | 1 | 0 |

**XOR gate:**

| A | B | Output |
|---|---|---|
| 0 | 0 | 0 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 0 |

### Key Skills

- Construct truth tables for combinational logic circuits
- Design and simplify logic circuits using Boolean algebra
- Apply De Morgan's Laws
- Implement logic circuits in hardware
