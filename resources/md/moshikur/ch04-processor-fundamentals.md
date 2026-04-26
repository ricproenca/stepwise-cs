# Chapter 04: Processor Fundamentals

Sources:
- https://moshikur.com/as-level/as-ch04/4-1-central-processing-unit-cpu-architecture/
- https://moshikur.com/as-level/as-ch04/4-2-assembly-language/
- https://moshikur.com/as-level/as-ch04/4-3-bit-manipulation/

---

## 4.1 Central Processing Unit (CPU) Architecture

### 4.1.1 Von Neumann Architecture and Stored Program Concept

Proposed in 1945 — instructions (programs) and data are stored together in memory, eliminating the need to physically rewire the computer between tasks.

**Five main components:**
1. Central Processing Unit (CPU) — processes instructions via ALU and Control Unit
2. Memory (RAM) — stores both instructions and data in addressable locations
3. Input devices — transmit user data to the computer
4. Output devices — display processed results
5. System buses — transfer data, addresses, and control signals

**Benefits of the stored program concept:**
- Enables multiple programs on identical hardware
- No physical reconfiguration required
- Supports modern operating systems
- Improves execution efficiency

---

### 4.1.2 CPU Registers

Small, high-speed storage locations inside the CPU that temporarily hold data during processing — far faster than RAM.

| Register | Function |
|---|---|
| **Program Counter (PC)** | Tracks the memory address of the next instruction |
| **Memory Address Register (MAR)** | Stores the memory location currently being accessed |
| **Memory Data Register (MDR)** | Temporarily holds data fetched from or to be written to memory |
| **Current Instruction Register (CIR)** | Holds the instruction currently being decoded/executed |
| **Accumulator (ACC)** | Stores intermediate results of calculations |
| **Index Register (IX)** | Facilitates indexed memory addressing |
| **Status Register** | Indicates CPU state (zero flag, carry flag, negative flag) |

---

### 4.1.3 Major CPU Components

**Arithmetic and Logic Unit (ALU)** — performs all mathematical calculations (add, subtract, multiply, divide) and logical comparisons.

**Control Unit (CU)** — directs the flow of data inside the CPU; fetches, decodes, and coordinates execution across system components.

**System Clock** — generates synchronised electronic pulses measured in Hz. A 3 GHz clock = 3 billion cycles per second.

**Immediate Access Store (IAS)** — fast temporary memory preventing constant CPU-to-RAM delays.

---

### 4.1.4 System Buses

| Bus | Direction | Purpose |
|---|---|---|
| **Address bus** | Unidirectional (CPU → memory) | Carries memory addresses; width determines addressable memory (32-bit = 4 GB, 64-bit = 16 exabytes) |
| **Data bus** | Bidirectional | Transfers actual data; wider bus = more bits moved simultaneously |
| **Control bus** | Bidirectional | Carries control signals (Read, Write, Interrupt, Clock); coordinates data flow |

**Combined operation:** Address bus specifies location → Control bus signals operation type → Data bus transfers the information.

---

### 4.1.5 CPU Performance Factors

| Factor | Effect |
|---|---|
| **Clock speed** (GHz) | Higher speed = more instructions per second |
| **Number of cores** | More cores = more parallel tasks; dual/quad/octa-core |
| **Cache memory** | L1 (fastest/smallest) → L2 → L3 (largest/slowest); reduces RAM access |
| **Bus width** | Wider bus = more data moved per cycle (64-bit vs 32-bit) |

---

### 4.1.6 Peripheral Ports

| Port | Use |
|---|---|
| USB | Keyboards, mice, flash drives, external storage |
| HDMI | Video and audio to monitors/TVs; supports HD and 4K |
| VGA | Legacy video-only for older monitors |
| Ethernet (RJ45) | Wired network connectivity |

---

### 4.1.7 The Fetch-Execute Cycle

**1. Fetch**
- PC → MAR (address of next instruction sent to MAR)
- Memory[MAR] → MDR (instruction loaded into MDR)
- MDR → CIR (instruction placed in CIR for decoding)
- PC incremented (PC ← PC + 1)

**2. Decode** — Control Unit analyses the instruction in CIR

**3. Execute** — ALU performs calculations; data transfers occur; Status Register flags updated

**4. Store (optional)** — results written back to memory or registers

Cycle repeats continuously until program termination.

---

### 4.1.8 Register Transfer Notation (RTN)

Symbolic shorthand to describe register operations:
- `→` data transfer between registers
- `← ` store into a register
- `[ ]` contents of a memory location
- `+` arithmetic operation

**Fetch stage in RTN:**
```
PC → MAR
MDR ← Memory[MAR]
CIR ← MDR
PC ← PC + 1
```

**Execute stage example (ADD):**
```
ACC ← ACC + MDR
```

---

### 4.1.9 Interrupts

An interrupt is a signal sent to the CPU to stop the current task and handle an urgent event.

**Types of interrupts:**

| Type | Examples |
|---|---|
| Hardware | Keyboard input, mouse movement, printer status change |
| Software | Program save request, application crash, antivirus scan |
| Timer | System clock signal, screen refresh, task switching |

**Interrupt handling process:**
1. **Pause** — stop current execution
2. **Save state** — store current registers and memory context
3. **Identify** — determine interrupt source
4. **Process** — execute the interrupt service routine (ISR)
5. **Restore** — return to the previous task from saved state

Interrupts are checked after each instruction completes (end of each fetch-execute cycle). Higher priority interrupts (power failure, system error) are handled before lower priority ones (printer error).

---

## 4.2 Assembly Language

### 4.2.1 Assembly Language and Machine Code

Machine code is binary instructions (0s and 1s) executed directly by the CPU. Assembly language replaces binary sequences with human-readable **mnemonics** (e.g. `MOV`, `ADD`, `SUB`).

| Aspect | Machine Code | Assembly Language |
|---|---|---|
| Format | Binary | Mnemonics |
| Readability | Very low | Higher |
| Execution | Direct | Requires assembler translation |
| Debugging | Very difficult | Easier |

### Instruction Categories

| Category | Mnemonics | Purpose |
|---|---|---|
| Data movement | `LDM`, `LDD`, `STO` | Transfer data between registers and memory |
| I/O operations | `IN`, `OUT` | Interface with external devices |
| Arithmetic | `ADD`, `SUB`, `INC`, `DEC` | Perform calculations |
| Comparison | `CMP`, `CMI` | Evaluate values for conditional logic |
| Jumps | `JMP`, `JPE`, `JPN` | Control program flow |
| Directives | — | Non-executable assembler instructions |

---

### 4.2.2 Two-Pass Assembler

Converts assembly code to machine code in two phases:

**First pass:** creates a symbol table mapping all labels to their memory addresses (no code generated yet).

**Second pass:** translates mnemonics into binary and replaces labels with actual addresses from the symbol table.

This two-pass approach handles forward references (labels used before they are defined).

---

### 4.2.3 Program Tracing

Tracing follows execution step-by-step, monitoring:
- Register value changes (especially the Accumulator)
- Program counter progression
- Memory location updates

Trace tables document each instruction's effect, helping identify logic errors.

---

### 4.2.5 Addressing Modes

| Mode | Mechanism | Speed | Example |
|---|---|---|---|
| **Immediate** | Data embedded directly in the instruction | Fastest | `LDM #5` |
| **Direct** | Instruction contains the memory address | Fast | `LDD 100` |
| **Indirect** | Address in instruction points to another address | Slower | `LDI 200` |
| **Indexed** | Base address + value in Index Register | Variable | `LDX 300` |
| **Relative** | Offset from current Program Counter position | Variable | `JMP 5` |

---

## 4.3 Bit Manipulation

### 4.3.1 Logical Binary Shifts

Fill empty positions with **zeros**.

**Logical Left Shift (LSL):** bits move left; 0s fill from right; leftmost bits lost. Each shift **multiplies by 2**.

```
Original:  0 1 0 1 1 0 1 0  (90)
LSL #1  →  1 0 1 1 0 1 0 0  (180)
```

**Logical Right Shift (LSR):** bits move right; 0s fill from left; rightmost bits lost. Each shift **divides by 2**.

```
Original:  1 0 0 1 1 0 1 0  (154)
LSR #1  →  0 1 0 0 1 1 0 1  (77)
```

---

### 4.3.2 Arithmetic and Cyclic Shifts

**Arithmetic Right Shift (ARS):** moves bits right but **copies the sign bit** (MSB) to preserve the sign in two's complement.

```
Original:  1 1 0 1 0 1 1 0  (-42)
ARS #1  →  1 1 1 0 1 0 1 1  (-21)
```

**Cyclic Left Shift (CLL):** leftmost bit wraps around to rightmost position.

```
Original:  1 0 0 1 0 1 1 0
CLL #1  →  0 0 1 0 1 1 0 1
```

**Cyclic Right Shift (CLR):** rightmost bit wraps around to leftmost position.

```
Original:  1 0 1 1 0 1 0 1
CLR #1  →  1 1 0 1 0 1 0 1
```

| Shift | Direction | Fill Rule | Effect |
|---|---|---|---|
| LSL | Left | 0s on right | Multiply by 2 |
| LSR | Right | 0s on left | Divide by 2 |
| ARS | Right | Copy sign bit | Divide by 2 (preserves sign) |
| CLL | Left | Leftmost bit → right | Rotate |
| CLR | Right | Rightmost bit → left | Rotate |

---

### 4.3.3 Bitwise Operations

**AND** — result is 1 only when **both** bits are 1. Used to **test or clear** bits.

```
ACC:   1 1 0 1 0 1 1 0
DATA:  1 0 1 1 1 1 0 0
AND:   1 0 0 1 0 1 0 0
```

**OR** — result is 1 when **at least one** bit is 1. Used to **set** bits.

```
ACC:   1 0 0 1 0 0 1 0
DATA:  0 1 1 0 1 1 0 0
OR:    1 1 1 1 1 1 1 0
```

**XOR** — result is 1 when bits are **different**. Used to **toggle** bits.

```
ACC:   1 1 0 1 0 1 1 0
DATA:  1 0 1 1 1 1 0 0
XOR:   0 1 1 0 1 0 1 0
```

---

### 4.3.4 Bit Masks

A **bit mask** is a binary pattern used with bitwise operations to target specific bits.

| Goal | Operator | Mask | Effect |
|---|---|---|---|
| Test a bit | AND | 1 in target position | Non-zero result = bit is ON |
| Set a bit | OR | 1 in target position | Forces bit to 1 |
| Clear a bit | AND | 0 in target position | Forces bit to 0 |
| Toggle a bit | XOR | 1 in target position | Flips the bit |

**Test bit 2:**
```
VALUE:  10101100
MASK:   00000100
AND:    00000100  → not zero, so bit 2 = 1
```

**Set bit 2:**
```
VALUE:  00101010
MASK:   00000100
OR:     00101110  → bit 2 now = 1
```

**Toggle last 4 bits:**
```
VALUE:  10101010
MASK:   00001111
XOR:    10100101
```

---

### 4.3.5 Device Control and Monitoring

In embedded systems, each bit in a **control register** represents a device feature.

Example device register:
```
Bit 7 = Motor ON/OFF
Bit 6 = Heater ON/OFF
Bit 5 = Fan ON/OFF
Bit 4 = Error signal
Bit 3 = Temperature sensor
Bit 2 = Switch A
Bit 1 = Switch B
Bit 0 = Light bulb
```

**Test if heater is ON:**
```
Register:  10100100
Mask:      01000000
AND:       00000000  → result = 0, heater is OFF
```

**Switch ON the fan:**
```
Register:  10000010
Mask:      00100000
OR:        10100010  → fan now ON
```

**Switch OFF the motor:**
```
Register:  11101011
Mask:      01111111
AND:       01101011  → motor bit cleared to 0
```

**Toggle light bulb:**
```
Register:  10101010
Mask:      00000001
XOR:       10101011  → bit 0 flipped
```
