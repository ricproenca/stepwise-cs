# Paper 1 — Master Answers (2021–2025)

**Years covered:** 2021 · 2022 · 2023 · 2024 · 2025  
**Sources deduplicated:** Within-year deduplication applied in per-year files. Cross-year deduplication applied here.  
**Format:** Each entry shows concept heading, consolidated mark-scheme answer points, Sources line, and Frequency note where a concept appeared in 3+ years.

---

## Cross-Year Deduplication Summary

| Concept | Years present | Merged? |
|---------|--------------|---------|
| Binary arithmetic — addition | 2021, 2022, 2023, 2024, 2025 | Yes — all numerical answers preserved verbatim |
| Binary subtraction (two's complement) | 2021, 2022, 2023, 2024 | Yes — all numerical answers preserved |
| Overflow in binary arithmetic | 2021, 2022, 2023, 2024, 2025 | Yes — consolidated definition |
| Two's complement to denary | 2021, 2022, 2023, 2024, 2025 | Yes — all numerical answers preserved |
| Hexadecimal conversions | 2021, 2022, 2023, 2024, 2025 | Yes — all numerical answers preserved |
| BCD conversions | 2022, 2023, 2024, 2025 | Yes — all numerical answers preserved |
| Bitmap file size calculation | 2021, 2022, 2023, 2024, 2025 | Yes — all numerical answers preserved |
| Sampling rate and sound quality | 2021, 2022, 2023, 2024 | Yes |
| RLE lossless compression | 2021, 2022, 2023, 2024, 2025 | Yes |
| CSMA/CD | 2022, 2023, 2024, 2025 | Yes |
| Subnetting benefits | 2022, 2023, 2024 | Yes |
| IP address types | 2021, 2023, 2024, 2025 | Yes |
| Router functions | 2021, 2023, 2024 | Yes |
| Embedded systems definition | 2021, 2022, 2023, 2024 | Yes |
| DRAM vs SRAM | 2022, 2023, 2024, 2025 | Yes |
| Control vs monitoring systems | 2021, 2022, 2023, 2024, 2025 | Yes |
| Logic gate descriptions | 2021, 2022, 2023, 2024 | Yes |
| Register roles in FE cycle | 2021, 2022, 2023, 2024, 2025 | Yes |
| Interrupt handling | 2022, 2023, 2024, 2025 | Yes |
| Compiler vs interpreter | 2021, 2022, 2023, 2024, 2025 | Yes |
| IDE features | 2021, 2022, 2023, 2024, 2025 | Yes |
| Program libraries / DLL | 2021, 2022, 2023, 2024, 2025 | Yes |
| Data security vs integrity | 2021, 2022, 2023 | Yes |
| Firewall protection | 2022, 2023, 2024, 2025 | Yes |
| Digital signature | 2022, 2023, 2025 | Yes |
| Validation check types | 2021, 2022, 2023 | Yes |
| Verification methods | 2021, 2022, 2023, 2024, 2025 | Yes |
| Checksum | 2022, 2025 | Yes |
| Relational DB vs flat-file advantages | 2021, 2022, 2023, 2024 | Yes |
| Normal forms (1NF/2NF/3NF) | 2021, 2022, 2023, 2024 | Yes |
| Data dictionary and DBMS features | 2021, 2022, 2023, 2024, 2025 | Yes |
| OS management tasks | 2021, 2022, 2023, 2024, 2025 | Yes |
| Utility software | 2021, 2022, 2023 | Yes |
| Ethics — professional bodies | 2021, 2023, 2024 | Yes |
| Software licensing comparison | 2021, 2022, 2023, 2024, 2025 | Yes |

---

## 1. Data Representation (`data-representation`)

### Units of measurement

**Binary prefix vs decimal prefix**  
- 1 kibibyte = 1024 bytes (binary / 2¹⁰); 1 kilobyte = 1000 bytes (denary / SI)  
- 1 mebibyte = 1024 kibibytes = 2²⁰ bytes; 1 megabyte = 1 000 000 bytes  
- 1 gibibyte = 1024 mebibytes; 1 terabyte = 1000 gigabytes; 1 tebibyte = 2⁴⁰ bytes  
- "Kibi/mebi/gibi/tebi" are binary prefixes; "kilo/mega/giga/tera" are decimal prefixes

**Sources:** S22V11 Q1a; S23V11 Q3di; W23V12 Q3a; S24V13 Q1a; W24V11 Q1a  
**Frequency:** Appeared every year 2022–2024.

---

### Binary unit equivalents matching

| Binary value | Equivalent |
|---|---|
| 8 bits | 1 byte |
| 8192 bits | 1 kibibyte |
| 1024 mebibytes | 1 gibibyte |
| 8000 bits | 1 kilobyte (SI) |
| 1000 kilobytes | 1 megabyte (SI) |

**Sources:** W21V11/13 Q1a

---

### Binary conversions — unsigned binary to denary

Worked examples (all verbatim from mark schemes):  
- `00100111` → **39** (S21V12 Q4bi; W22V11 Q1ai)  
- `11001101` → **205** (W21V12 Q4a)  
- `10010011` → **147** (W22V13 Q9aii)  

**Sources:** S21V12; W21V12; W22V11; W22V13

---

### Binary conversions — two's complement to denary

Worked examples (all verbatim):  
- `11001101` → **−51** (W21V12 Q4b; MSB=1; invert=00110010; +1=00110011=51; answer −51)  
- `11100111` → **−25** (W22V11 Q1aiii)  
- `10010110` → **−106** (W22V12 Q2ai)  
- `10011111` → **−97** (W24V13 Q8b; flip→01100000; +1→01100001=97; answer −97)  
- `111110111100` (12-bit) → **−68** (W25V11 Q1aiii)  
- 8-bit two's complement → **−30** (S25V12 Q2bi)  
- `100110010111` (12-bit) → **−1641** (W24V11 Q1bii)  

**Sources:** W21V12; W22V11; W22V12; W24V11; W24V13; S25V12; W25V11  
**Frequency:** Appeared in every year 2021–2025.

---

### Binary conversions — hexadecimal to denary

- `FC` → **252** (S21V11/13 Q1ci)  
- `F0` → **240** (W21V11/13 Q1c; S22V13 Q1b: hex 11 in denary = 17)  
- `A04` → **2564** (S23V12 Q4c; working: 10×256+0+4)  
- `C0F` → **3087** (S24V12 Q7c; working: 12×256+0+15)  
- `1FAB` → **8107** (W24V13 Q8a)  

**Sources:** S21V11; W21V11; S22V13; S23V12; S24V12; W24V13  
**Frequency:** Appeared every year 2021–2024.

---

### Binary conversions — denary to hexadecimal

- Denary 251 → **FB** (S22V11 Q1c)  
- Binary `01111110` → **7E** (S22V12 Q3c)  
- Binary `10010110` unsigned → **96** (W22V12 Q2aii)  
- Binary `10010011` unsigned → **93** (W22V13 Q9ai)  
- Denary 241 → **F1** (S24V13 Q1b)  
- Binary `110001100111` → **C67** (W24V11 Q1bi)  
- Binary `101100111010` → **B3A** (W25V11 Q1ai)  
- Binary `1110001300111011` → **E33B** (W25V13 Q2d)  

**Sources:** S22V11; S22V12; W22V12; W22V13; S24V13; W24V11; W25V11; W25V13

---

### Binary conversions — BCD

- `00100111` as BCD → denary **27** (W22V11 Q1aii)  
- `10010101` → BCD `0001 0100 1001` (W22V12 Q2aiii; denary 149)  
- Denary 87 → BCD `1000 0111` (S22V13 Q1b)  
- Denary 964 → BCD `1001 0110 0100` (S23V11 Q3dii)  
- BCD `100001100101` → denary **865** (W23V12 Q3bii; groups 1000=8, 0110=6, 0101=5)  
- BCD `010101110011` → denary **573** (W24V11 Q1biii; groups 0101=5, 0111=7, 0011=3)  
- Denary 108 → BCD `0001 0000 1000` (W25V11 Q1aii)  
- ASCII 'h' (denary 104) → BCD `0001 0000 0100` (W25V12 Q7ci)  

**Sources:** W22V11; W22V12; S22V13; S23V11; W23V12; W24V11; W25V11; W25V12  
**Frequency:** Appeared in every year 2022–2025.

---

### BCD — why a value is invalid BCD

- Values `1100` (=12) and `1101` (=13) both exceed the valid BCD range 0–9  
- Each group of 4 bits must represent a denary digit 0–9; any group with value >9 is invalid  

**Sources:** W21V12 Q4d

---

### BCD — benefits and applications

**Two benefits:**  
- Straightforward to convert to/from BCD and denary; less complex to encode/decode  
- Easier for digital equipment to display output (e.g. calculators, digital clocks)  
- Can represent monetary values exactly without rounding errors  

**Applications:**  
- Financial/banking calculations — decimal values cannot be represented exactly in normal binary  
- Electronic displays (calculators, digital clocks) — only need to show individual digits  
- BIOS date/time storage — conversion between denary and BCD is more straightforward  
- Barcode systems  

**Sources:** W22V13 Q9b; W23V12 Q3c; S25V12 Q2c

---

### Binary arithmetic — addition

Worked examples (all verbatim):  
- `10101010` + `00110111` = **`1110 0001`** (W21V11/13 Q1bi)  
- `00100011` + `00001111` = **`0011 0010`** (S21V11/13 Q1cii)  
- `00111101` + `00101101` = **`0110 1010`** (W21V12 Q4ei)  
- `01010000` + `00111110` = **`1000 1110`** (S22V11 Q1d)  
- `10001100` + `01000110` = **`1101 0010`** (W22V12 Q2b)  
- `10110000` + `00011011` = **`1100 1011`** (S23V11 Q3dv)  
- `10110011` + `01111000` = **(1) `0010 1011`** (W25V11 Q1bi — overflow)  
- `10000111` + `00111001` = **`1100 0000`** (W25V12 Q7a)  
- `10011110` + `01100001` + `00011001` = **(1) `0001 1000`** — overflow (S24V11 Q7)  

**Sources:** W21V11/13; S21V11/13; W21V12; S22V11; W22V12; S23V11; S24V11; W25V11; W25V12  
**Frequency:** Appeared every year 2021–2025.

---

### Binary arithmetic — subtraction (two's complement method)

- Subtract 10 from `00100011`: TC of 00001010 → 11110101+1=**11110110**; `00100011`+`11110110` = **`0001 1001`** (=25) (S21V11/13)  
- `00111101` − `00101101`: TC of `00101101` → **`1101 0011`**; result = **`0001 0000`** (=16) (W21V12)  
- `10110011` − `01110101` = **`0011 1110`** (W22V11 Q1b)  
- `12 − 127`: TC of 127 = `1000 0001`; `0000 1100` + `1000 0001` = **`1000 1101`** (S22V12)  
- `01001010` − 23: TC of 00010111=`11101001`; result **`0011 0011`** (W24V11)  
- `100` − `10` = **`0101 1010`** (S24V12 Q7b)  
- S25V13: result **`0100 0110`**  

**Sources:** S21V11/13; W21V12; W22V11; S22V12; W24V11; S24V12; S25V13  
**Frequency:** Appeared every year 2021–2025.

---

### Overflow in binary arithmetic

- The result is too large to be stored in the given number of bits  
- The result is larger than the maximum positive number storable in the register  
- The result is smaller than the most negative number storable in the register  
- For 8-bit registers: the result exceeds 255 (unsigned) or +127/−128 (two's complement)  
- Accept: when the result of adding two binary integers produces a carry out that cannot be stored  

**Sources:** W21V11/13 Q1bii; S24V13 Q1c; W24V11 Q1d; W25V11 Q1bii  
**Frequency:** Appeared in 2021, 2024, 2025.

---

### Two's complement — range

- 8-bit: smallest = `10000000` (−128); largest = `01111111` (+127)  
- The range is −2^(n−1) to +(2^(n−1) − 1) for n-bit two's complement  

**Sources:** S23V11 Q3div; S23V13 Q7a; S25V12 Q2bii

---

### One's complement

- One's complement of −120: +120 = `0111 1000`; flip all bits → **`1000 0111`**  

**Sources:** S23V12 Q4b

---

### Character encoding — ASCII and Unicode

**ASCII:**  
- ASCII represents **128** characters (7 bits); extended ASCII represents **256** (8 bits)  
- Each character has a unique code; stored in sequence (e.g. each letter in 'HOUSE' stored by its ASCII code)  

**Unicode:**  
- Uses 8, 16, or 32 bits per character  
- Can represent characters from all languages and symbols (including emojis)  
- Characters from more languages can be represented (advantage over ASCII)  

**Differences:**  
- ASCII uses 7/8 bits; Unicode uses up to 32 bits  
- Unicode has a much wider range of characters  

**Conversions:**  
- Unicode '1' = denary 49 = hex **31** (S21V12)  
- Unicode '5' = denary **53** (S21V12)  
- ASCII 'h' = denary 104 = hex **68** (W25V12)  

**Sources:** S21V12 Q6; S24V13 Q1d; W24V13 Q6a; W25V12 Q7b/c; W25V13 Q1b/c; S25V11 Q3bi; S25V13 Q1ci/ii  
**Frequency:** Appeared every year 2021–2025.

---

### File size units — identifying largest

- 3300 KiB ≈ 3379.2 KB > 3300 KB > 3 MiB ≈ 3145.7 KB > 0.3 MB = 300 KB  
- Answer: **3300 KiB** is the largest  

**Sources:** S24V12 Q7a

---

### Minimum bits for data representation

| Data type | Minimum bits |
|---|---|
| Hexadecimal value F139 | 16 |
| 16 000 000 unique amplitude values | 24 |
| IPv4 address | 32 |
| 256 unique colours | 8 |
| IPv6 address | 128 |
| Denary value 65 000 | 16 |

**Sources:** W25V13 Q2a

---

## 2. Multimedia (`multimedia`)

### Bitmap images — terminology

| Term | Definition |
|---|---|
| Pixel | The smallest addressable element / one square dot of one colour in an image |
| Bit depth / Colour depth | The number of bits used to represent each colour/pixel |
| Image resolution | The number of pixels wide × the number of pixels high |
| File header | Stores metadata about the image (file type, dimensions, colour depth, compression type) |
| Drawing list | All drawing objects in an image; stores command/description to draw each object |

**Largest number of colours with 8-bit depth:** 2⁸ = **256**  
**Drawback of increasing bits per pixel:** increased file size

**Sources:** S22V12 Q1a; S23V11 Q1a; W22V13 Q2e; W24V12 Q7ai; W24V13 Q6bi/bii; S25V11 Q3a  
**Frequency:** Appeared every year 2021–2025.

---

### Bitmap images — file size calculation

Formula: `(width × height × bit_depth_bits) / 8` = bytes; then convert by dividing by 1024 (KiB) or 1 000 000 (MB)

| Paper | Dimensions | Colour depth | Answer |
|---|---|---|---|
| S21V11/13 | 1024 × 512 px | 8 colours (3 bpp or MS implies 8bpp) | **0.50 MiB** |
| S22V12 | 10 × 5 px | 8 bits | **50 bytes** |
| S23V11 | 1500 × 3000 px | 8 bytes (64-bit) | **36 MB** |
| W23V12 | 2048 × 1024 px | 10-bit | **2.5 MiB** |
| W23V13 | 2048 × 1024 px | 16-bit | **4096 KiB** |
| S24V13 | 4000 × 3000 px | 4 bytes (32-bit) | **48 MB** |
| W25V11 | 512 × 2048 px | 256 colours (8-bit) | **1024 KiB** |
| W25V12 | 1000 × 2000 px | 16-bit | **4 MB** |
| W25V13 | 4000 × 3000 × 30 fps (1 sec video) | 16-bit | **0.72 GB** |

**Why actual file may exceed estimate:** The file contains a header/metadata in addition to pixel data.  
**Two properties that reduce file size:** colour/bit depth; image resolution.

**Sources:** S21V11/13; S22V12; S23V11; W23V12; W23V13; S24V13; W25V11; W25V12; W25V13  
**Frequency:** File size calculation appeared every year 2021–2025.

---

### Bitmap images — encoding and effect of changes

**How bitmap data is encoded:**  
- The image is made of pixels; each pixel has one colour  
- Each colour has a unique binary code  
- The code for the colour of each pixel is stored in sequence  

**Effect of increasing image resolution:**  
- More pixels available → image is sharper / less pixelated  
- File size increases (more data stored)  

**Effect of reducing colour depth:**  
- Fewer shades of colour available; image is less realistic  
- Fewer bits per pixel → file size decreases  

**Sources:** S24V12 Q2di; W24V12 Q7aii; S25V13 Q1aii; S23V11 Q1a

---

### Vector graphics — terminology

| Term | Definition |
|---|---|
| Property | An attribute/data about a drawing object; defines one aspect of its appearance |
| Drawing list | All drawing objects in an image; stores commands/descriptions to draw each object |
| Drawing object | A component created using a formula/equation |

**Contents of a drawing list:** list of objects; command/equation to draw each; properties of each object.

**Sources:** W21V12 Q5a; S24V12 Q2dii; W24V12 Q7b; S23V11 Q1a

---

### Vector vs bitmap comparison

| Feature | Bitmap | Vector |
|---|---|---|
| Storage | Colours stored for each individual pixel | Instructions/formulae to draw each shape |
| Scaling | Pixelates when enlarged | Recalculated at any size; no pixelation |
| File size | Usually larger (data per pixel) | Usually smaller (only instructions) |
| Editing | Pixels change colour | Individual components edited separately |

**Two benefits of vector over bitmap:** scalable without quality loss; individual components editable separately.

**Sources:** W21V12 Q5b; W22V12 Q8b

---

### Sound — digitisation and sampling

**How sound is represented:**  
- The amplitude of the sound wave is measured at regular intervals (samples)  
- Each amplitude measurement is given a binary number  
- The binary numbers are stored in sequence  

**Sampling rate:** The number of samples taken per second.  
**Sampling resolution:** The number of bits used to store each sample.  

**Effect of higher sampling rate:**  
- Smaller gaps between samples → digital waveform more closely matches the analogue  
- Quantisation errors are smaller  
- File size increases (more samples stored)  

**Effect of higher sampling resolution:**  
- Wider range of amplitude values representable  
- Digital waveform is closer to the analogue; quantisation errors reduced  
- File size increases (more bits per sample)  

**Microphone operation:**  
- Incoming sound causes vibrations of the diaphragm  
- The diaphragm drives a coil past a magnet (or changes capacitance in condenser type)  
- An electrical signal is produced proportional to the sound wave  

**How analogue is converted to digital:**  
- The magnitude of the analogue wave is measured at set intervals  
- Each measurement is given a binary number and stored in sequence  

**Sources:** W21V11/13 Q7a; W22V11 Q1d; W22V12 Q6b; W22V13 Q1a/b; S23V13 Q3c; W24V13 Q6ci; S25V13 Q1b; W25V13 Q1a  
**Frequency:** Appeared every year 2021–2025.

---

### Sound file size calculation

- 50 kHz, 16-bit, 20 minutes: 50 000 × (20×60) × 16 bits = 960 000 000 bits = **120 MB** (W22V13 Q1b)  

**Sources:** W22V13 Q1b

---

### 3D printer operation

**Principal operations:**  
- Additive manufacturing using a digital/CAD file  
- Builds model one layer at a time from the bottom up  
- Material is fused, cured, or deposited layer by layer  
- FDM: heated material pushed through nozzle; SLA: UV laser on resin; SLS: laser on powder  

**Sources:** W23V11 Q7a; W25V11 Q10a

---

## 3. Compression (`compression`)

### Why compress files

- Reduces file size  
- Faster to transmit/download; takes less bandwidth  
- Reduces storage space on sending/receiving device  
- Email attachments often have a maximum size limit  
- Customers/recipients can store more files  

**Sources:** W21V11/13 Q7bi; S23V11 Q1ci; W23V11 Q1c; W23V13 Q5bi; W24V11 Q4bi  
**Frequency:** Appeared every year 2021–2025.

---

### Lossless compression — RLE

- Identify consecutive pixels/characters of the same colour/value  
- Store the colour/value and the number of times it occurs consecutively  
- Reduces storage needed when long runs of identical data exist  
- RLE adds overhead (colour + count instead of just colour) when runs are short → may not reduce file size  

**Why RLE may not reduce file size:** If an image has few repeated colours, storing each colour with count 1 adds data rather than reducing it.

**RLE for text:** Identify repeated characters; store character + count.  
**Why lossy should NOT be used on text:** Any loss of data would corrupt the file (change meaning or prevent it opening).

**RLE table examples (verbatim):**  
| Uncompressed | Compressed |
|---|---|
| EA F1 F1 F2 F2 F2 EA | 1EA 2F1 3F2 1EA |
| AB AB FF FF 1D 67 | 2AB 2FF 11D 167 |

**Sources:** S21V11/13 Q1b; W22V12 Q8ci; S22V12 Q1d; S22V13 Q1aiii; W24V11 Q4bii; W25V11 Q7diii  
**Frequency:** Appeared every year 2021–2025.

---

### Lossless compression for sound

- Reduce amplitude range to only the range actually used → fewer bits per sample  
- RLE: where consecutive samples are identical, record value + count  
- Record changes between samples instead of absolute values  

**Sources:** W21V11/13 Q7bii

---

### Lossy compression methods

**For bitmap images:**  
- Reduce bit depth: fewer bits per pixel; less storage per colour  
- Reduce colour palette: fewer colours → fewer bits per colour  
- Reduce image resolution: fewer pixels → less data  

**For sound files:**  
- Decrease sample rate → fewer samples per second  
- Decrease sample resolution → fewer bits per sample  
- Remove sound outside human hearing range  

**Why lossy is suitable for photographs/images:**  
- Data removed is usually imperceptible to the human eye  
- Larger reduction in file size compared to lossless  

**Why lossy is suitable for streaming video:**  
- Loss of quality not noticeable in real-time viewing  
- Smaller file size → less bandwidth needed → less buffering  

**Sources:** W21V12 Q5bii; S24V13 Q2bi/bii; W24V13 Q6bii/cii; S25V11 Q2bii  
**Frequency:** Appeared every year 2021–2025.

---

## 4. Networks and the Internet (`networks-internet`)

### LAN — characteristics and benefits

**Characteristics:**  
- Covers a small geographical area  
- Privately owned/dedicated infrastructure  
- High data transfer rate  

**Benefits:**  
- Allows sharing of files, data, and resources (hardware/software)  
- Allows central management (backup, security)  
- Enables communication between devices  

**Sources:** S23V12 Q1a/b; W25V12 Q5a

---

### LAN vs WAN

| Feature | LAN | WAN |
|---|---|---|
| Coverage | Small geographical area | Large geographical area |
| Infrastructure | Private / dedicated | External / public / leased |
| Data transfer rate | High | Lower |
| Security | Easier to secure | More complex |

**Sources:** S23V13 Q2a; S25V12 Q6a; W24V13 Q9a

---

### Network topologies

**Star topology:**  
- All devices connect directly and independently to a central switch  
- If any connection fails, only that device is affected  
- Central switch checks destination address and forwards packets directly  

**Bus topology:**  
- All devices connect to a central cable (backbone)  
- Data transmitted to all; devices accept only packets addressed to them  
- Subject to collisions; failure of bus disables entire network  

**Mesh topology:**  
- All devices connect to at least one other device; multiple routes between devices  
- Computers can act as relays, passing packets toward destination  
- Advantages over bus: resilient (multiple routes), fewer collisions, more secure  

**Sources:** S23V12 Q1c; W23V11 Q2d; S23V13 Q2bi/bii; S24V11 Q8a; W25V12 Q5b/c  
**Frequency:** Appeared in 2021, 2022, 2023, 2024, 2025.

---

### Peer-to-peer networks

**Features:**  
- All computers are of equal status (no dedicated server)  
- Each computer shares its own resources and data  
- Each computer is responsible for its own security  

**Drawbacks:**  
- Reduced security (only as secure as the weakest computer)  
- No central management of backup or files  
- Performance may degrade when a computer is being accessed by others  
- Resources/files unavailable when the sharing computer is switched off  

**Sources:** S21V11/13 Q4a/b  
**Frequency:** Appeared in 2021.

---

### Ethernet (CSMA/CD)

**What Ethernet is:**  
- A protocol suite for data transmission over wired networks  
- Uses CSMA/CD (Carrier Sense Multiple Access / Collision Detection)  
- Data is transmitted in frames; each frame has source/destination address and error-checking data  

**How CSMA/CD works:**  
- A node wishing to transmit listens to the channel  
- Data is sent only when the channel is free/idle  
- If two devices transmit simultaneously → collision  
- Collision detected → transmission aborted → jamming signal sent  
- Each device waits a random time before retransmitting  
- Random wait time increases if multiple collisions occur  

**Sources:** S22V12 Q9c; W22V11 Q8; S23V12 Q1d; S24V13 Q5ci; W25V12 Q5d  
**Frequency:** Appeared in 2022, 2023, 2024, 2025.

---

### Router functions

- Receives packets from devices or the internet  
- Analyses the destination IP address of each packet  
- Forwards packets toward their destination using the routing table  
- Maintains and updates the routing table  
- Assigns private IP addresses to devices on the LAN  
- Acts as gateway between LAN and internet  
- Provides the LAN with a public IP address  

**Router task identification (S21V11/13):**  
- Receives packets from devices: **Yes**  
- Finds IP address of a URL: **No** (that is DNS)  
- Directs packet to all devices: **No**  
- Stores IP/MAC address of attached devices: **Yes**  

**Sources:** S21V11/13 Q4ci; W21V12 Q3bii; W23V11 Q2a; S24V12 Q3ci; W25V12 Q5c  
**Frequency:** Appeared in 2021, 2023, 2024, 2025.

---

### Network hardware — switch, WAP, bridge, repeater

| Device | Purpose |
|---|---|
| Switch | Connects devices; receives transmissions and forwards to destination MAC address |
| Wireless Access Point (WAP) | Provides radio/Wi-Fi communication from a central device to wireless nodes |
| Bridge | Connects two LANs/segments with the same protocol |
| Repeater | Restores signal strength so data can travel greater distances |
| WNIC | Hardware that allows a device to connect to a wireless network; provides MAC address |

**WNIC functions:**  
- Converts digital data to radio waves for transmission; and radio waves to digital on receipt  
- Checks incoming transmissions for correct MAC/IP address  
- Encrypts/decrypts data for transmission  

**Sources:** W21V11/13 Q8c; S22V12 Q9a; W23V11 Q2b  
**Frequency:** Appeared in 2021, 2022, 2023.

---

### IP addressing — types

| Type | Description |
|---|---|
| Public | Visible to any device on the internet; assigned by ISP |
| Private | Only visible within a LAN; assigned by router |
| Static | Does not change each time the device connects |
| Dynamic | May change each time a device reconnects |

**IPv4 format:**  
- 4 groups of 8-bit numbers (0–255) separated by full stops  
- Total: 32 bits  

**IPv6 format:**  
- 8 groups of 4 hexadecimal digits separated by colons  
- Total: 128 bits  
- Consecutive groups of zeros can be replaced with :: (double colon)  

**IPv4 vs IPv6 differences (other than bit length):**  
- IPv4 in denary; IPv6 in hexadecimal  
- IPv4: 4 groups; IPv6: 8 groups  
- IPv4 groups 0–255; IPv6 groups 0–FFFF  

**Why router needs a public IP:** To be visible to and accessible by other devices on the internet.  

**Why 192.168.3.2 is not IPv6:** Only 4 groups (IPv6 needs 8); uses full stops not colons; is 32-bit not 128-bit.  

**Sources:** S21V12 Q5d; S23V11 Q4di; W23V12 Q7a/d; S24V11 Q8bi/bii; S25V12 Q6c; W25V11 Q7a/b  
**Frequency:** Appeared every year 2021–2025.

---

### Subnetting

**Benefits:**  
- Reduces traffic/congestion (local data stays within subnet)  
- Improves network security (compromised device doesn't expose whole network)  
- Easier maintenance (one subnet can be taken down while others continue)  
- Allows greater range of IP addresses; control of network growth  
- Makes network management easier  

**IP address parts in a subnetwork:**  
- An IP address consists of a **network ID** and a **host ID**  
- Devices in the same subnetwork share the same network ID  
- Each device has a unique host ID within its subnet  

**Network ID and host ID examples:**  
- Device 10.10.12.1, mask 255.0.0.0 → network ID: **10**  
- Device 192.168.12.4, mask 255.255.255.0 → host ID: **4**  

**Sources:** W22V13 Q7c; S23V11 Q4dii; W23V12 Q7biii; S23V13 Q2e; W24V13 Q9dii  
**Frequency:** Appeared in 2022, 2023, 2024.

---

### Cloud computing

**Definition:** Accessing services, files, or software on remote servers over the internet.  

**Public cloud:** Computing services offered by a third party over the public internet; accessible to anyone.  
**Private cloud:** Computing services only accessible to specific users/an organisation; dedicated/bespoke.  

**Benefits:**  
- Can be accessed from anywhere with internet access  
- No need to buy specific hardware or install software locally  
- Cloud services usually include backup and recovery  
- Storage capacity easily increased  
- Easier to share documents; multiple users can collaborate  
- Can be free for small amounts of data  

**Drawbacks:**  
- Cannot access without an internet connection  
- Limited control over security; reliance on third party  
- Uploading/downloading large amounts may be slow  
- Limited free storage; additional capacity costs money  
- Downtime or provider issues impact access  

**Sources:** S21V12 Q5ci/cii; S22V13 Q8; W22V13 Q7a; W23V11 Q2c; W23V13 Q3ai/aii; S24V13 Q5ai/aii; W25V12 Q8a  
**Frequency:** Appeared every year 2021–2025.

---

### Wireless and wired connection comparison

**Wired (justified for large file streaming):**  
- Higher bandwidth; faster connection; more reliable; more secure  
- Less latency  

**Wireless:**  
- Freedom of movement; no physical cable; easier to add devices  

**Advantages of wireless over wired:**  
- Devices are more mobile  
- No cabling needed; easier to set up  
- Multiple device types can connect  

**Drawback of wireless:**  
- Less secure; signal degrades quickly; interference possible; slower  

**Sources:** S21V11/13 Q4cii; W25V13 Q4a/b

---

### Internet vs WWW

- Using the **internet** because data travels over the internet infrastructure  
- Using the **WWW** because webmail is a website on a web server accessed via a browser  

**Sources:** S21V11/13 Q4d

---

### DNS and URL to web page access

1. Browser checks its cache for the URL  
2. Parses the URL into component parts  
3. Queries a DNS server to find the IP address of the domain  
4. Receives the matching IP address  
5. Creates a connection with the web server at that IP address  
6. Sends a request for the resource  
7. Browser renders and displays the result  
8. IP address stored in browser cache for future use  

**Sources:** W25V11 Q7c

---

### Bit streaming

**Definition:** Continuous ordered flow of bits over a communication path.  

**Real-time vs on-demand:**  
- Real-time: direct from source; cannot be re-watched; plays continually  
- On-demand: pre-recorded; can be paused and re-watched; downloads sections/blocks  

**How video is continuously transmitted:**  
- Video is uploaded to a media server  
- On download, media server sends data to a buffer on the user's device  
- Buffer stores data from server until receiving device can process it  
- User views bit stream from the buffer  

**Sources:** S24V11 Q2ei/eii; W24V13 Q9c; S25V11 Q2a

---

### Mobile phone networks

- Land is split into cells, each with a tower and antenna  
- Data is transmitted wirelessly between tower and phone using low-power radio signals  
- Multiple devices can communicate simultaneously with the same tower  

**Sources:** S25V12 Q6b

---

### Transmission media — fibre optic vs copper

| Feature | Fibre Optic | Copper Cable |
|---|---|---|
| Signal type | Pulses of light | Electrical signals |
| Bandwidth | Higher | Lower |
| Interference | Very low | Subject to noise |
| Distance | Longer before repeater needed | Shorter |
| Security | Harder to intercept | Easier to tap |

**Sources:** S22V12 Q9b

---

### Client-server models

**Thick-client:** Server performs minimal processing; clients do most of their own processing.  
**Thin-client:**  
- Server performs all processing and data storage  
- Clients only send requests and display results  
- No local storage needed; requires reliable network connection  

**Roles in web application:**  
- Server: receives requests; processes them; sends responses  
- Client: sends requests; waits for response; displays output  

**Sources:** S23V12 Q1e; S23V13 Q2c; S24V11 Q5a; S24V12 Q3b; S25V13 Q3c

---

### PSTN role

- The PSTN uses many types of communication lines; digital data may need to be converted  
- Communication passes through different switching centres/ISPs  
- Data is transmitted in both directions simultaneously (duplex)  

**Sources:** S24V12 Q3cii

---

### Satellite transmission

- **Advantage:** Not fixed to a location; allows access in remote/rural areas  
- **Disadvantages:** High latency; signal affected by weather; more expensive; direct line of sight needed  

**Sources:** W22V13 Q7b

---

## 5. Computers and Components (`computers-components`)

### Embedded systems — definition and characteristics

**Definition:** A microprocessor/microcontroller built into a larger system that performs one specific task.  

**Characteristics:**  
- Dedicated to a single/limited task; purpose-built  
- Built into and integrated with a larger system  
- Contains a processor, memory, and I/O capability  
- Firmware often cannot be easily changed by the user  
- Dedicated hardware; specialised software  

**Drawbacks:**  
- Difficult to change/update firmware  
- Cannot easily be adapted for another task  
- Troubleshooting is specialist; often discarded rather than repaired (e-waste)  
- Errors cannot be fixed easily  

**RAM and ROM in embedded system:**  
- RAM: stores current data, user input, sensor readings (volatile)  
- ROM: stores firmware, boot-up/start-up instructions (permanent)  

**Sources:** S21V11/13 Q5a/b; S22V12 Q2a; S22V13 Q10bii; S23V12 Q1ci/cii; W23V11 Q9b; W24V12 Q2a; S24V11 Q2a  
**Frequency:** Appeared every year 2021–2025.

---

### Monitoring vs control systems

**Control system:**  
- Uses feedback: output affects subsequent input  
- Contains actuators that cause changes in the environment  
- Operates autonomously to keep values within set criteria  

**Monitoring system:**  
- Does not act on the environment; only records/reports  
- Has no actuators; output does not affect input  

**Refrigerator thermostat:** Control system — turns cooling on/off in response to temperature; uses feedback.  
**Floodlight/alarm:** Monitoring — output (light/alarm) does not affect the sensor input.  
**Automatic braking:** Control — feedback from sensors causes actuator (brakes) to act; changes environment.  
**Automated door:** Control — proximity sensor triggers actuator (motor) to open/close door.

**Sources:** S21V11/13 Q5c; W22V13 Q10a; W23V11 Q9a; S24V11 Q2b; S24V13 Q7c; W24V11 Q5c; W25V11 Q9; W25V12 Q11  
**Frequency:** Appeared every year 2021–2025.

---

### Memory types — RAM and ROM

**RAM types:**  
| Feature | SRAM | DRAM |
|---|---|---|
| Refresh | Not required | Requires constant refresh |
| Speed | Faster | Slower |
| Cost | More expensive | Less expensive |
| Density | Lower | Higher |
| Typical use | CPU cache | Main memory |

**ROM types:**  
| Type | Erase method | Notes |
|---|---|---|
| PROM | Cannot be erased | Programmed once |
| EPROM | UV light; chip must be removed | Must be fully erased |
| EEPROM | Electrical signal; in situ | Can be partially erased; multiple times |

**EEPROM benefits over other ROM types:**  
- Allows frequent read/write/erase operations  
- Can be changed without removing from device  
- Can be partially erased (does not require full erasure first)  

**Sources:** S22V11 Q2a; S22V11 Q2aii; S23V11 Q4aii; W23V11 Q7c; W23V13 Q7a; W24V12 Q2b/c; W24V11 Q3c; S24V12 Q2c; W25V13 Q4c  
**Frequency:** Appeared in 2022, 2023, 2024, 2025.

---

### Secondary storage — magnetic hard disk

**Principal operations:**  
- One or more platters/plates that can be magnetised  
- Platters mounted on a central spindle; rotate at high speed  
- Each surface has a read/write head on an arm just above the surface  
- Surface divided into concentric tracks and sectors  
- Writing: variation in current produces variation in magnetic field on disk  
- Reading: variation in magnetic field produces variation in current through the head  

**When to use HDD over SSD:**  
- Large storage capacity at lower cost per GB  
- Continuous heavy read/write operations → magnetic storage has longer lifespan  

**Sources:** S22V11 Q2b; S25V11 Q6ai; W25V13 Q7d  
**Frequency:** Appeared in 2022, 2025.

---

### Secondary storage — optical disc

**Principal operation:**  
- Disc spun at high speed  
- Laser shone onto disc via optical head  
- Follows spiral track from centre outward  
- Writing: laser burns pits; lands remain  
- Reading: difference in reflection between pits and lands interpreted as 0 or 1  

**Sources:** W24V11 Q3di

---

### Flash memory

- Two types of logic gate: **NAND** and **NOR**  
- Number of transistors per cell: **2** (floating gate + control gate)  
- Floating gate retains electrons without power  
- Control gate allows or stops current  

**Sources:** S24V11 Q2cii

---

### Buffers

**Purpose:**  
- Temporary storage for data transferred between devices operating at different speeds  
- The faster device transfers to the buffer; the slower device reads from the buffer  
- Frees the processor/fast device to continue other tasks without waiting  

**Example uses:**  
- Printer buffer: computer sends at CPU speed; printer reads at printer speed  
- Video streaming buffer: stores data from server until device can process it  
- Sound playback: stores audio data ahead of playback  
- Writing to optical disc: computer fills buffer at high speed; drive reads at disc speed  
- 3D printer: receives print data from computer; processes at printer speed  

**Why buffer is needed in 3D printer:** Rate data is received differs from rate it is processed; frees processor for other tasks.

**Sources:** W22V13 Q1c; W23V13 Q7c; S24V11 Q2ciii; S24V12 Q2b; W24V11 Q3dii; W24V13 Q2b; W25V11 Q10b  
**Frequency:** Appeared in 2022, 2023, 2024, 2025.

---

### Touchscreen operation

**Resistive:**  
- Two conductive layers; pressing screen causes layers to touch and complete a circuit  
- Works with any object  

**Capacitive:**  
- Electrical charge changes at point of contact  
- Requires a conductor (fingertip)  

**Common to both:**  
- Microprocessor/software calculates x and y coordinates of contact point  
- Corresponding menu item/action is identified and selected  

**Sources:** S23V13 Q3a; S24V13 Q7d; W25V12 Q8bi  
**Frequency:** Appeared in 2023, 2024, 2025.

---

### Ports and connectivity

| Port type | Use / Characteristic |
|---|---|
| USB | Serial (1 bit at a time); plug-and-play; auto-detection via device code and driver |
| HDMI | Digital; video and audio on one cable; no conversion loss; high bandwidth |
| VGA | Analogue; video only |
| DisplayPort | Digital; high resolution displays |

**USB plug-and-play:**  
- Voltage change detected when device plugged in  
- OS finds device code in device list and loads appropriate driver  

**HDMI over VGA benefits:**  
- Faster transfer rate (needed for high resolution)  
- Supports both video and audio → no separate sound cable  
- Digital → no conversion loss  
- Less prone to interference  

**Sources:** S23V12 Q5ci/cii; W23V13 Q7d; W24V11 Q3bii; W24V12 Q3b; S25V13 Q2c

---

### Sensors

| Sensor | Use |
|---|---|
| Pressure sensor | Detects weight, seat contact, door pressure |
| Infrared (IR) sensor | Detects heat/body presence, obstacles, broken beam |
| Light sensor | Detects ambient light level |
| Sound sensor | Detects sound/noise |
| Temperature sensor | Detects temperature; prevents overheating |

**Sources:** W22V13 Q10b; W23V12 Q1a; S24V13 Q7a; W24V11 Q5a; W24V12 Q9a; S25V11 Q4b

---

### Artificial intelligence applications

**Facial recognition:**  
- Captures an image using a digital camera  
- Uses image recognition: analyses pixels to identify facial features  
- Measures distances between features; stores/compares to database  
- Uses probability of match to authenticate  

**AI in CCTV:**  
- Monitors images to identify shapes matching a person  
- Tracks direction of movement; decides how to move camera  
- Identifies other cameras to start recording  

**OCR and translation:**  
- Uses image recognition to identify character locations  
- Converts pixel patterns into individual characters  
- Natural language processing combines characters into words and matches language database  

**Speech recognition:**  
- Records audio; analyses waveforms  
- Compares to database of words to identify the most likely match  
- Natural language processing combines words into commands  

**AI in car park (OCR for registration number):**  
- Image recognition: identifies size/shape/colour of registration area  
- OCR: pixels within registration area compared to expected characters  

**Sources:** S22V12 Q8; W22V12 Q9; S23V11 Q4c; S23V12 Q7d; S23V13 Q3b; S24V11 Q5cii; S24V13 Q7b; W24V11 Q6; S25V11 Q4a; S25V12 Q3a  
**Frequency:** Appeared every year 2022–2025.

---

### HDMI data transmission

- Transfers both audio and video using a single cable  
- High bandwidth  
- Data transmitted as uncompressed digital signals  

**Sources:** S25V13 Q2c

---

## 6. Logic Gates and Circuits (`logic-gates-circuits`)

### Gate descriptions

| Gate | Behaviour |
|---|---|
| AND | Output is 1 only when both inputs are 1 |
| OR | Output is 0 only when both inputs are 0 |
| NOT | Output is the inverse of the input |
| NAND | Output is 0 only when both inputs are 1 (inverse of AND) |
| NOR | Output is 1 only when both inputs are 0 (inverse of OR) |
| XOR | Output is 1 only when inputs are different |

**Input values giving output 1:**  
- AND: both inputs = 1  
- NAND: any pair except (1,1)  
- XOR: one input 1 and one input 0  
- NOR: both inputs = 0  

**NOR and NAND truth tables:**  
| A | B | NAND | NOR |
|---|---|------|-----|
| 0 | 0 | 1 | 1 |
| 0 | 1 | 1 | 0 |
| 1 | 0 | 1 | 0 |
| 1 | 1 | 0 | 0 |

**Sources:** S21V11/13 Q8; W21V12 Q2a; S22V11 Q2ci; S23V11 Q5b; S24V12 Q1a; W24V13 Q1a  
**Frequency:** Appeared every year 2021–2025.

---

### Truth tables — selected worked examples

**W21V11/13 — X = ((A AND B) XOR C) OR NOT B:**  
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

**S22V12 — X = (A XOR B) AND NOT C:**  
| A | B | C | X |
|---|---|---|---|
| 0 | 0 | 0 | 0 |
| 0 | 1 | 0 | 1 |
| 1 | 0 | 0 | 1 |
| 1 | 1 | 0 | 0 |
| 0 | 0 | 1 | 0 |
| 0 | 1 | 1 | 0 |
| 1 | 0 | 1 | 0 |
| 1 | 1 | 1 | 0 |

**W24V12 — X = (A XOR B) NAND (A AND (B XOR C)):**  
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

**Sources:** Various (see per-year files for all truth tables)  
**Frequency:** Truth table completion appeared every year 2021–2025.

---

## 7. CPU Architecture (`cpu-architecture`)

### Register roles in the Fetch-Execute cycle

| Register | Role |
|---|---|
| Program Counter (PC) | Stores address of next instruction to be fetched; incremented after each fetch |
| Memory Address Register (MAR) | Stores address currently being accessed; receives address from PC |
| Memory Data Register (MDR) | Stores data fetched from the address in MAR; passes to CIR |
| Current Instruction Register (CIR) | Stores instruction being decoded and executed |
| Accumulator (ACC) | Stores intermediate results of arithmetic and logical operations |
| Index Register (IX) | Stores offset added to operand to form effective address |
| Status Register (SR) | Stores flags set by arithmetic/logic operations and interrupts |

**Register transfer notation (F-E cycle):**  
1. `MAR ← [PC]`  
2. `PC ← [PC] + 1`  
3. `MDR ← [[MAR]]`  
4. `CIR ← [MDR]`  

**Sources:** S21V11/13 Q3a; S21V12 Q5a; W21V12 Q8ai; S22V11 Q6ai; S22V13 Q2a; W22V12 Q7c; S25V12 Q1a; S25V13 Q2aii; W25V13 Q6b  
**Frequency:** Appeared every year 2021–2025.

---

### System clock and Control Unit

**System clock:**  
- Generates timing pulses that synchronise all operations  
- Connected via control bus  

**Control Unit:**  
- Sends/receives control signals on the control bus  
- Coordinates/synchronises the activity of other CPU components  
- Manages execution of instructions in sequence  

**Stored program concept:** Instructions and data are stored in the same memory space.  

**Sources:** S21V12 Q5a; W22V11 Q5a/b/c; W24V11 Q3a; S25V13 Q2ai; W25V12 Q3c

---

### Special purpose registers — additional

**Status Register (SR):** Stores flags set/cleared by arithmetic/logic operations and interrupt flags.  
**Interrupt Register:** Stores details of any interrupts that have occurred.  
**GPR vs SPR differences:**  
- SPR have a specific purpose in machine operation; GPR can be used for any programmer-defined purpose  
- SPR hold state of program execution; GPR hold data during operations  

**Sources:** W21V12 Q8aii; W22V11 Q5bi; W24V11 Q8a/b; S25V12 Q1b; W25V12 Q3aii; W25V11 Q6a

---

### CPU performance factors

| Factor | Effect |
|---|---|
| Clock speed | More F-E cycles per second → more instructions processed |
| Number of cores | Instructions executed in parallel; each core processes independently |
| Bus width | More data transferred per operation; more memory locations accessible |
| Cache size | More frequently used instructions stored near CPU; less RAM access needed |
| RAM quantity | More applications in memory simultaneously; less disk access |

**Why more cores does not always double speed:**  
- Cores must communicate → additional overhead  
- Software may not be designed for multiple cores  
- Memory access speed may be the limiting factor  

**Cache memory:**  
- Fast access memory close to the CPU  
- Stores frequently used instructions/data  
- More cache → less swapping between RAM and cache; prevents CPU idling  

**Sources:** S21V12 Q5b; W23V11 Q5c; S23V12 Q5b; W24V11 Q3bi; W25V12 Q3c; S25V13 Q2b  
**Frequency:** Appeared every year 2021–2025.

---

### Interrupt handling

**Detection:** At the start/end of each F-E cycle (after execute, before next cycle).  
**Process:**  
1. Check interrupt register/flag  
2. Check priority of interrupt  
3. If lower priority than current process → continue F-E cycle  
4. If higher priority:  
   a. Store contents of registers on the stack  
   b. Identify source/location of interrupt  
   c. Load appropriate Interrupt Service Routine (ISR) into PC  
   d. Execute ISR  
   e. On completion: check for further high-priority interrupts  
   f. If none: restore registers from stack; continue previous process  

**Causes of software interrupts:**  
- Division by zero  
- Runtime error / array index out of bounds  
- Attempt to access invalid memory location  
- Stack overflow  
- Buffer overflow  
- Program requesting external device/input  

**Hardware vs software interrupt classification examples:**  
| Event | Type |
|---|---|
| Buffer full | Software |
| Printer out of paper | Hardware |
| User pressed a key | Hardware |
| Division by zero | Software |
| Power failure | Hardware |
| Stack overflow | Software |

**Sources:** S22V11 Q6aii; S22V13 Q2b; W22V11 Q5c/d; W21V12 Q7a; S23V11 Q6; W23V13 Q9c/d; S25V12 Q1c  
**Frequency:** Appeared in 2022, 2023, 2024, 2025.

---

### Buses

| Bus | Role |
|---|---|
| Data bus | Carries data between components |
| Address bus | Carries memory addresses (unidirectional: CPU → memory) |
| Control bus | Carries control signals (read/write, interrupt, timing, clock) |

**Control bus signal types:** Interrupt, timing, read, write, clock.  
**System clock → control bus; MAR → address bus.**

**Sources:** S23V12 Q5a; W22V11 Q5bii; S25V11 Q6aiii

---

## 8. Assembly Language (`assembly-language`)

### Addressing modes

| Mode | Description |
|---|---|
| Immediate | The operand is the data itself (e.g. LDM #50) |
| Direct | The operand is the memory address of the data (e.g. LDD 100) |
| Indirect | The operand is an address whose contents give the actual data address (e.g. LDI) |
| Indexed | Effective address = operand + contents of IX (e.g. LDX) |
| Relative | Address = base address + offset; allows re-locatable code |

**Similarity (direct vs indexed):** Both load the contents of an address into the Accumulator.  
**Difference:** Direct uses operand address directly; indexed adds [IX] to the operand first.

**Sources:** W21V12 Q8biii; S22V13 Q3a; S23V12 Q3b; W23V11 Q8bii/iii; S25V12 Q7aiii; S25V13 Q5aii; W25V12 Q3ai  
**Frequency:** Appeared in 2021, 2022, 2023, 2025.

---

### Instruction groups

| Group | Description | Example opcodes |
|---|---|---|
| Data movement | Load/store data between memory and registers | LDM, LDD, LDI, LDX, STO |
| Arithmetic operations | Add, subtract, increment, decrement | ADD, SUB, INC, DEC |
| Logical operations | Bitwise AND, OR, XOR, NOT | AND, OR, XOR |
| Shift operations | Logical/arithmetic shifts | LSL, LSR |
| Comparison | Compare values | CMP, CMI |
| Jump (conditional/unconditional) | Branch to address | JPE, JPN, JMP |
| Input and output | Read from keyboard; write to output | IN, OUT |

**Sources:** W21V12 Q8bii; S22V13 Q3b; W22V13 Q6c; W23V12 Q9a; W25V13 Q6c  
**Frequency:** Appeared in 2021, 2022, 2023, 2025.

---

### Two-pass assembler

**First pass:**  
- Reads source code line by line  
- Builds symbol table (maps labels to addresses)  
- Removes comments/white space  
- Checks opcodes are in the instruction set  

**Second pass:**  
- Generates object/machine code  
- Reads source code line by line  
- Uses symbol table to resolve label references  

**Purpose of first pass:** To create a symbol table.

**Sources:** W22V11 Q6c; S23V12 Q3a; W23V11 Q8a

---

### Assembly program traces — selected examples

**W23V12 Q9b — ASCII trace (input = '1' = ASCII 49):**  
Output: **A** (ASCII 65)  
*(Full trace table in per-year 2023 file)*

**S22V13 Q3a — Addressing mode trace:**  
Memory: 100→101, 101→67, 102→104, 103→100, 104→68  
- LDM #103 → ACC = **103**  
- LDD 102 → ACC = **104**  
- LDI 103 → ACC = **101** (contents of address 100)  

**Relative addressing purpose:**  
- Allows re-locatable code  
- All target addresses can be specified by base address + offset  

**Sources:** W21V11/13 Q3b; S21V12 Q4a; W22V11 Q6a; W22V12 Q7a; W22V13 Q6a; W23V12 Q9b; W22V13 Q6aii; S24V11 Q4a; S24V12 Q5a; S24V13 Q3a; W24V12 Q8a; W24V13 Q7a; S25V11 Q8a; S25V12 Q7ai; S25V13 Q5ai; W25V12 Q3b; W25V13 Q6a  
**Frequency:** Appeared every year 2021–2025.

---

## 9. Bit Manipulation (`bit-manipulation`)

### Shift operations

| Shift | Effect |
|---|---|
| LSL #n | Shifts bits left n places; fills right with zeros; multiplies by 2ⁿ |
| LSR #n | Shifts bits right n places; fills left with zeros; divides by 2ⁿ (integer) |
| Arithmetic right shift | Shifts right n places; copies sign bit into MSB (preserves sign) |

**LSR #3 performs:** Division by 8 (whole number part only).

**Difference between right logical and right arithmetic shift:**  
- Logical: inserts 0s into the leftmost bits  
- Arithmetic: copies sign bit into the Most Significant Bit (MSB)  

**Worked shift examples (verbatim):**  
- LSL #2 on `00110101` → **`1101 0100`** (S21V11/13)  
- LSR #3 on `11001100` → **`0001 1001`** (S23V11)  
- LSL #2 on `01001111` → **`0011 1100`** (S23V12)  
- `10011010` with arithmetic right shift 3 → **`1111 0010`** (W25V13)  

**Sources:** S21V11/13 Q3ci/cii; S22V11 Q6ciii; S23V11 Q3dvi; S23V12 Q4d; W24V13 Q8c; W25V13 Q2c  
**Frequency:** Appeared every year 2021–2025.

---

### Bitwise operations — worked examples (verbatim)

**AND operations:**  
| Input ACC | Instruction | Result |
|---|---|---|
| 0110 1101 | AND #2 | 0000 0000 |
| 1001 0011 | AND B11110000 | 1001 0000 |
| 0101 0011 | AND 50 (= 01001101) | 0100 0001 |
| 0011 0110 | AND B01001100 | 0000 0100 |
| 1110 0011 | AND #63 | 0010 0011 |

**OR operations:**  
| Input ACC | Instruction | Result |
|---|---|---|
| 0110 1101 | OR #8 | 0110 1101 |
| 0110 0101 | OR #255 | 1111 1111 |
| 1001 0011 | OR B11001100 | 1101 1111 |
| 1001 0101 | OR B01001111 | 1101 1111 |
| 1110 0011 | OR 100 (=0011 0011) | 1111 0011 |

**XOR operations:**  
| Input ACC | Instruction | Result |
|---|---|---|
| 0110 0101 | XOR #255 | 1001 1010 |
| 1001 0011 | XOR B00011111 | 1000 1100 |
| 0101 0011 | XOR B00011111 | 0100 1100 |
| 1110 0011 | XOR &12 | 1111 0001 |

**Instruction to set all bits to 1:** `OR #255` (or `OR &FF`)  
**Instruction to invert all bits:** `XOR #255` (or `XOR &FF`)  
**Instruction to set bit 0 (LSB):** `OR B00000001` or `OR #1`  
**Instruction to clear all bits in 8-bit register:** `AND B00000000` or `AND #0`  
**Instruction to test for odd number:** `AND B00000001` or `AND #1`; result non-zero if odd  
**Instruction to clear bits 4–7 (keep bits 0–3):** `AND #15` (binary `00001111`)  
**Instruction to test bit 2:** `AND #4` (binary `00000100`)  

**Sources:** S21V12 Q4bii/iii; S22V11 Q6c; S22V12 Q3a/b; W22V11 Q6b; W22V12 Q7b; W22V13 Q6b; W23V11 Q8c; S24V11 Q4b; S24V12 Q5b; S24V13 Q3b; W24V12 Q8bi/bii; W24V13 Q7b; S25V11 Q8b; S25V13 Q5b; W25V11 Q4b/c/d; W25V13 Q2c  
**Frequency:** Appeared every year 2021–2025.

---

## 10. Operating Systems (`operating-systems`)

### OS management tasks

| Task | Description |
|---|---|
| Memory management | Dynamically allocates memory; controls movement between RAM/virtual; reclaims unused blocks |
| File management | Creates/renames/deletes files; maintains directory structure; controls access rights; naming conventions |
| Security management | Creates accounts/passwords; provides firewall/anti-malware; validates users and processes |
| Hardware/device management | Receives/sends data from/to peripherals; installs device drivers; manages interrupts |
| Process management | Schedules processes; allocates resources; enables multitasking; handles interrupts |
| Input/output management | Manages I/O from hardware/peripherals |
| Provision of user interface | Provides GUI or CLI for user interaction |
| Error checking and recovery | Detects and responds to errors |

**Sources:** S21V11/13 Q2b; S22V13 Q4a; W22V13 Q3; S23V11 Q3b; S24V12 Q6; W24V12 Q3c; S25V11 Q6b; W25V13 Q8d  
**Frequency:** Appeared every year 2021–2025.

---

### Utility software

| Utility | Purpose |
|---|---|
| Defragmentation | Moves file fragments so each file is stored contiguously; reduces head movement; faster access |
| Backup software | Creates copies of data at regular intervals; restores if original lost or corrupted |
| Disk formatter | Initialises a disk; sets up file system; removes all data |
| Disk repair | Scans for errors/bad sectors; repairs or marks them |
| Virus checker / anti-malware | Scans files for malicious code; removes or quarantines |
| Disk/system clean-up | Removes temporary/unwanted files; frees storage |
| Compression software | Reduces file sizes |

**Sources:** S21V11/13 Q2a; W21V12 Q7c; S22V13 Q4b; W22V12 Q1a; S23V11 Q3c; W23V12 Q8b; W23V13 Q5bii; W25V12 Q8bii  
**Frequency:** Appeared every year 2021–2025.

---

### Memory and process management for multitasking

**Memory management:**  
- Stores data from all running programs concurrently in RAM  
- Prevents data from overwriting each other  
- Decides which processes should remain in main memory  

**Process management:**  
- Allows one process to be paused while another runs  
- Decides which process runs next (scheduling)  
- Switches between processes to share the processor fairly  
- Manages/allocates resources required by each process  
- Facilitates data sharing between processes  
- Handles interrupts; resolves conflicts  

**Sources:** S24V12 Q6; W24V12 Q3c; S25V11 Q6b

---

### Hardware management tasks

- Installs driver software for devices connected to external ports  
- Manages communication between devices  
- Manages hardware interrupts  
- Sends/receives data to/from peripherals  

**Sources:** S23V11 Q3a; W25V11 Q5ai

---

### Security management tasks

- Prevents unauthorised access by providing authentication  
- Implements access rights and permissions  
- Makes provision for recovery of lost data  
- Carries out OS security updates  
- Auditing and keeping logs of activity  

**Sources:** W25V11 Q5aii

---

### DLL (Dynamic Link Library) files

- Memory requirements reduced: DLL loaded only once / when required (shared across programs)  
- Executable file size smaller (does not contain all library routines)  
- Maintenance done separately from main program  
- No need to recompile main program when DLL changes  
- A single DLL file can be used by multiple programs  
- Updated DLL benefits all programs automatically  

**Sources:** W22V11 Q7a; S22V11 Q5c; S23V12 Q7aii; S24V13 Q7eii; W24V12 Q4b  
**Frequency:** Appeared in 2022, 2023, 2024.

---

## 11. Language Translators (`language-translators`)

### Compiler, interpreter, assembler — operation and use

**Compiler:**  
- Translates all source code at once before running  
- Reports all errors at the end; program does not run if errors present  
- Produces an executable file — runs without source code or translator  
- Used when program is complete for distribution; for repeated testing without recompilation  
- Drawbacks during development: time to compile; must recompile after changes; dependent errors accumulate  

**Interpreter:**  
- Translates and executes one line at a time  
- Reports errors immediately in real time; stops at error  
- Programmer can correct and continue from that point  
- Preferred during development: can test incomplete code; see effect of changes immediately  

**Assembler:**  
- Translates assembly language (low-level) into binary/machine code  

**Why partially compile and interpret:**  
- Partially compiled programs can run on different platforms (interpreted at run time)  
- Machine code generated at run time optimises for the specific CPU  

**Sources:** W21V11/13 Q4d; S21V12 Q7bi; S22V12 Q6a/b; W22V12 Q1b; S23V12 Q7b; S23V13 Q5a; W23V11 Q6a/b; S24V11 Q3a/b; S24V12 Q8a; W25V12 Q10a; W25V13 Q8a; S25V13 Q3a  
**Frequency:** Appeared every year 2021–2025.

---

### Program libraries

**Definition:** Pre-written, pre-compiled, pre-tested functions/routines that can be imported and called in other programs.  

**Benefits of using program libraries:**  
- Saves development time (no need to write code from scratch)  
- Pre-tested → less testing required; more likely to work correctly  
- Results in more robust programs  
- Enables programmers to use routines they could not write themselves  
- Library routines may automatically update when improved  

**Drawback of library routines:**  
- Compatibility issues with current program  
- May not match needs exactly; may need editing  
- Could contain bugs or security vulnerabilities if not from trusted source  
- If library changes unexpectedly, errors may result  

**Sources:** S21V12 Q7a; W22V11 Q7a; S22V11 Q5c; S23V12 Q7ai; S24V12 Q8c; W24V11 Q4c; W24V12 Q4b; W25V11 Q5bi/bii; W25V13 Q8b  
**Frequency:** Appeared every year 2021–2025.

---

### IDE features

| Feature | Description |
|---|---|
| Context-sensitive prompts | Suggests/completes code as the user types |
| Dynamic syntax check | Highlights/underlines syntax errors in real time |
| Breakpoints | Stops program execution at a specified line |
| Single stepping | Executes one line at a time; shows effect of each line |
| Report / variable watch window | Displays variable values and how they change |
| Prettyprint / syntax highlighting | Colour-codes keywords for visual clarity |
| Auto-indentation / formatting | Automatically indents code correctly |
| Expand/collapse code blocks | Shows/hides sections of code |
| Auto-complete / auto-correct | Completes or corrects code entries |

**IDE features for writing:** Context-sensitive prompts; prettyprint; auto-indentation; expand/collapse; auto-complete.  
**IDE features for debugging:** Breakpoints; single stepping; report window; variable watch.  

**Sources:** S21V12 Q7bii; W21V11/13 Q4bii; S22V11 Q5a; S22V12 Q6c; S23V12 Q7c; W23V11 Q6ci/cii; W23V13 Q5a; S24V12 Q8b; W24V11 Q4di/dii; W24V12 Q4a; W25V11 Q5c  
**Frequency:** Appeared every year 2021–2025.

---

## 12. Data Security (`data-security`)

### Data security vs data privacy

- **Data security:** Protecting data from loss, corruption, or unauthorised access  
- **Data privacy:** Ensuring data can only be accessed by/disclosed to authorised persons  

**Sources:** S21V12 Q8a; W21V11/13 Q2a; S22V11 Q3a; W23V12 Q5a

---

### Data security measures

| Measure | Category | Description |
|---|---|---|
| Firewall | Security | Monitors/filters packets; blocks those not meeting rules |
| Password / strong password | Security | Prevents unauthorised login |
| Access rights | Security | Different users have different permissions |
| Encryption | Security | Converts data to cipher text; unreadable without key |
| Anti-malware / anti-virus | Security | Scans and removes malicious software |
| Digital signature | Security / Integrity | Verifies authenticity of sender and integrity of document |
| Two-factor authentication | Security | Requires two forms of verification |
| Biometric | Security | Physical characteristic used for authentication |

**Sources:** S21V12 Q8b/c; W21V11/13 Q2c; W22V11 Q2; S22V12 Q4b/c; S23V13 Q6b; W23V13 Q3aiii; S25V11 Q7a; S25V13 Q3b; W25V12 Q5e

---

### Malware — spyware, virus, pharming, phishing

**Spyware:**  
- Downloaded/installed without user's knowledge  
- Records keystrokes/actions; sends logs to third party  

**Virus:**  
- Malicious software that replicates itself  
- Can damage/delete files and data  

**Phishing:**  
- Email pretending to be from official body  
- Persuades user to disclose personal information via fake website  

**Pharming:**  
- Malicious code installed on computer  
- Automatically redirects user to a fake website  
- Automatic (vs phishing which requires user action)  

**Spyware vs virus:**  
- Similarity: both are malware; both run without user knowledge; both try to avoid firewalls  
- Difference: virus replicates and can damage data; spyware only records and sends data  

**Sources:** W21V11/13 Q2c; W23V12 Q5c; W23V13 Q8b; W25V11 Q8a; W25V12 Q5e  
**Frequency:** Appeared every year 2021–2025.

---

### Firewall protection

- Monitors all incoming and outgoing packets/traffic  
- Checks against allow/deny list of IP addresses or set of rules  
- Blocks transmissions that do not meet criteria  
- Can block specific ports  
- Can block unauthorised internal software from transmitting data  

**Sources:** W22V12 Q6aii; S23V13 Q6b; W23V13 Q3aiii; S24V11 Q5ci; S24V12 Q3ai  
**Frequency:** Appeared in 2022, 2023, 2024.

---

### Encryption

- Data is encoded/scrambled using a key to create cipher text  
- Intercepted data cannot be understood without the decryption key  
- Algorithm and key required to decode  

**Sources:** S22V12 Q4c; S23V13 Q6a (as part of digital signature); S24V13 Q7fii; W24V12 Q4c; S25V11 Q7a  
**Frequency:** Appeared in 2022, 2024, 2025.

---

### Digital signature

1. Sender hashes the document to produce a digest  
2. Sender encrypts the digest with private key → digital signature  
3. Message and signature sent to receiver  
4. Receiver decrypts signature using sender's public key → reproduces digest  
5. Receiver hashes the received document → produces second digest  
6. Receiver compares both digests  
7. If equal → document is authentic/unaltered  

**Sources:** W22V12 Q6ai; S23V13 Q6a; S25V11 Q7b; W25V12 Q10c  
**Frequency:** Appeared in 2022, 2023, 2025.

---

### Access rights for database security

- Access rights give users access to different elements of the database  
- Implemented via different accounts/logins with different permissions  
- Permissions: read-only, no access, read/write  
- Specific views can be assigned to users  

**Sources:** W21V11/13 Q5b

---

## 13. Data Integrity (`data-integrity`)

### Validation check types

| Check | Description | Example |
|---|---|---|
| Range check | Data falls within acceptable limits | Age between 0–120; mark between 0–100 |
| Presence check | Data has been entered (field not empty) | Required field must not be blank |
| Type check | Data is the correct type | Must be an integer |
| Length check | Data has correct number of characters | Postcode = 7 characters |
| Format check | Data matches required format | Date as DD/MM/YYYY |
| Existence / lookup check | Data matches a value from allowed list | RiderLevel = Beginner/Intermediate/Advanced |

**Why validation cannot guarantee correctness:**  
- Validation checks data is reasonable — not that it is accurate  
- Verified data may match source document but source document may be wrong  

**Sources:** S21V11/13 Q6; W21V11/13 Q2bi; S22V11 Q4d; S22V13 Q5b; W22V12 Q4; S23V12 Q2ci; S23V13 Q4di; W25V13 Q7e  
**Frequency:** Appeared every year 2021–2025.

---

### Verification methods

| Method | Description | When used |
|---|---|---|
| Double entry | Data entered twice; computer compares entries | Data entry |
| Visual check | Manually compare data entered against source document | Data entry |
| Parity byte / parity bit | Parity bit added to byte to maintain odd/even count | Data transfer |
| Parity block check | Parity applied horizontally and vertically; error location pinpointable | Data transfer |
| Checksum | Calculation from data transmitted with it; receiver recalculates and compares | Data transfer |

**Checksum:**  
- Data put through algorithm → checksum value  
- Checksum transmitted with data  
- Receiver runs same algorithm on received data  
- If checksums match → no error; if different → error detected  

**Parity block check:**  
- A bit added to each byte; parity byte created from column parity checks  
- On receipt, position of incorrect bit can be determined from horizontal + vertical parity  

**Sources:** W21V11/13 Q2bii; S22V11 Q4d; W22V12 Q4b/c; S24V11 Q5b; S24V13 Q7fi; W25V12 Q1; W25V12 Q6ci/cii; S25V11 Q7c; W25V13 Q7c  
**Frequency:** Appeared every year 2021–2025.

---

### Data integrity — meaning

- Ensuring the data is consistent, accurate, and complete  
- Methods that ensure data is up-to-date during and after processing  

**Sources:** S23V11 Q2aii; W23V12 Q5b

---

## 14. Database Concepts (`database-concepts`)

### Database terminology

| Term | Definition |
|---|---|
| Field | A single item of data; a column/attribute in a table |
| Entity | A person, place, or thing about which data can be stored; represented as a table |
| Tuple | A single row/record in a table; one instance of an entity |
| Attribute | An item of data about an entity |
| Primary key | Unique attribute (or combination) that identifies each tuple |
| Foreign key | A field in one table linked to the primary key in another table |
| Secondary key | An additional key used for searching; a candidate key not chosen as primary |
| Candidate key | An attribute (or smallest set) that could serve as a primary key |
| Referential integrity | Ensures every foreign key has a corresponding primary key; prevents inconsistent data |
| Degree | The number of different relationships an entity has |
| Composite key | A primary key made of two or more attributes |

**Sources:** S21V12 Q1a; W22V11 Q4ci; W22V12 Q5c; S23V13 Q4b; W23V12 Q2a; W24V11 Q2c; W24V13 Q4d; W25V11 Q2d  
**Frequency:** Appeared every year 2021–2025.

---

### Relational database vs flat-file advantages

- Reduced data redundancy: each item stored only once in linked tables  
- Reduced data inconsistency: update in one place reflects everywhere (data integrity)  
- Program-data independence: changes to data structure don't require programs to be rewritten  
- Complex queries are easier to run  
- Different views can be provided: users see only data they are authorised to view  
- Reduced program-data dependence  

**Sources:** S21V11/13 Q7a; S22V11 Q4a; S23V13 Q4a; W23V11 Q3b; W24V11 Q2a; W24V12 Q6a  
**Frequency:** Appeared in every year 2021–2024.

---

### Normal forms (1NF, 2NF, 3NF)

| Normal Form | Description |
|---|---|
| 1NF | No repeating groups; all data atomic |
| 2NF | All attributes fully dependent on the (composite) primary key; no partial dependencies |
| 3NF | All attributes fully dependent on primary key only; no non-key / transitive dependencies |

**Normalising a table to 3NF:**  
- Identify and remove repeating groups → 1NF  
- Remove partial key dependencies → 2NF  
- Remove transitive (non-key) dependencies → 3NF  
- Many-to-many relationships resolved via linking/junction tables  

**3NF verification example:**  
- Database is in 3NF if all fields are fully dependent on the primary key only  
- No non-key field depends on another non-key field  

**Sources:** S21V12 Q1b; S21V11/13 Q7bi/bii; W21V12 Q6ai; S22V11 Q4b; W22V11 Q4b; S22V13 Q6c; W22V12 Q5a; S23V11 Q2bii; W24V13 Q4cii  
**Frequency:** Appeared every year 2021–2024.

---

### Entity-relationship diagrams

**Relationship types:**  
- **1:1** (one-to-one): e.g. employee to login data  
- **1:M** (one-to-many): e.g. customer to orders; one table's PK is FK in other  
- **M:M** (many-to-many): cannot be directly implemented; requires a linking/junction table  

**M:M cannot be directly implemented** — must be resolved with a linking table containing both primary keys as a composite primary key.

**Sources:** S21V11/13 Q7bi/bii; W21V12 Q6aii; S22V12 Q5a; W22V11 Q4a; W23V11 Q3a; W23V13 Q3bi; S24V12 Q4a; S24V11 Q6a; S25V11 Q5a; S25V13 Q6a; W25V11 Q2a; W25V13 Q5a  
**Frequency:** Appeared every year 2021–2025.

---

### Referential integrity

- Ensures every foreign key has a corresponding primary key  
- Prevents records being added, deleted, or modified in ways that create orphaned records  
- Provides for cascading update/delete: if a primary key is modified, all related foreign key records are updated  
- Ensures queries return accurate and complete results  

**Sources:** S23V12 Q2b; W25V11 Q2d

---

### Composite primary key — why needed

- Neither attribute alone uniquely identifies each tuple  
- Together they create a unique identifier for each record  
- Example (FILM_ACTOR): ActorID alone not unique; FilmID alone not unique; together uniquely identify each actor-in-film record  

**Sources:** S22V12 Q5b

---

### 3NF database design examples

**Quiz website (S24V11):**  
```
USER(Username, Email, DateOfBirth, Rating) — PK: Username
QUIZ(QuizID, Date, Filename) — PK: QuizID  
USER_QUIZ(Username, QuizID, Score) — composite PK; FKs to USER and QUIZ
```

**Car rental (S23V13):**  
```
BOOKING(BookingID, CarRegistration, CustomerID, StartDate, EndDate)
CAR(CarRegistration, CarModel, CarColour)
CUSTOMER(CustomerID, CustomerFirstName, CustomerLastName, Email, TelephoneNumber)
```

**Ice cream BATCH (W24V13):**  
```
BATCH(BatchID, IceCreamID, EndDate) — FK: IceCreamID → ICE_CREAM
ICE_CREAM(IceCreamID, Type, Flavour, Size, SellingPrice)
```

**Sources:** S21V12 Q1ci; S23V13 Q4c; S24V11 Q6a; W24V13 Q4cii

---

## 15. Database Management Systems (`dbms`)

### Data dictionary

**Purpose:** Stores metadata about the database structure (not the data itself).  

**Contents:**  
- Table names  
- Field/attribute names  
- Data types  
- Validation rules  
- Primary keys  
- Foreign keys  
- Relationships between tables  

**Sources:** S21V11/13 Q7c; W21V12 Q6b; S23V11 Q2ai; S23V12 Q2a; S24V11 Q6b; W24V11 Q2c  
**Frequency:** Appeared every year 2021–2025.

---

### DBMS features

| Feature | Description |
|---|---|
| Data dictionary | Stores metadata about the database structure |
| Logical schema | Conceptual/platform-independent design; E-R diagram; overview of database structure |
| Query processor | Processes and executes SQL queries; searches for data meeting criteria; organises results |
| Developer interface | Allows creation/modification of tables, forms, reports, relationships, menus |

**Sources:** S22V12 Q5e; W22V13 Q2b/f; S23V12 Q2a; S24V11 Q6b; S25V13 Q6di/dii; W25V12 Q4d  
**Frequency:** Appeared in every year 2022–2025.

---

### DBMS security methods

- **Access rights:** Different permissions (read/write, read-only, none) for different tables  
- **Password / authentication:** Prevents unauthorised access  
- **Views:** Users see only the data they need; sensitive fields hidden  
- **Encryption:** Data stored as cipher text; cannot be understood without decryption key  
- **Backup / recovery procedures:** Regular automatic copies; data recoverable if lost  
- **Record and table locking:** Prevents simultaneous access; prevents data overwriting  
- **Biometrics / 2-factor authentication:** Additional authentication layer  

**Sources:** W23V12 Q2b; S25V12 Q5ci; W25V13 Q5d  
**Frequency:** Appeared in 2023, 2025.

---

### How DBMS supports data integrity

- Enforces referential integrity (cascade update/delete)  
- Changes in one place automatically updated in related records  
- Ensures each foreign key has a corresponding primary key  
- Validation rules applied at data entry  

**Sources:** W24V13 Q4e; S25V12 Q5cii

---

## 16. DDL and DML (`ddl-dml`)

### CREATE DATABASE

```sql
CREATE DATABASE SHOPORDERS;
```
*(S21V11/13 Q7biii)*

```sql
CREATE DATABASE SHOP;
```
*(W23V11 Q3ci)*

**Sources:** S21V11/13; W23V11

---

### CREATE TABLE — selected examples

**RENTAL table (S21V12):**
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

**STUDENT_TEST table (S22V11):**
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

**BIRD_TYPE table (S23V11):**
```sql
CREATE TABLE BIRD_TYPE (
    BirdID CHAR(4) NOT NULL,
    Name VARCHAR(9),
    Size VARCHAR(6),
    PRIMARY KEY (BirdID)
);
```

**EXAM table (S24V12):**
```sql
CREATE TABLE EXAM (
    ExamID VARCHAR NOT NULL,
    Subject VARCHAR,
    Level INT,
    TotalMarks INT,
    PRIMARY KEY(ExamID)
);
```

**PERFORMANCE table (S24V13):**
```sql
CREATE TABLE PERFORMANCE (
    PerformanceID VARCHAR NOT NULL,
    ShowID VARCHAR,
    ShowDate DATE,
    StartTime TIME,
    PRIMARY KEY(PerformanceID),
    FOREIGN KEY(ShowID) REFERENCES SHOW(ShowID)
);
```

**REPAIR_PART table — dual composite PK (W24V11):**
```sql
CREATE TABLE REPAIR_PART (
    PartID VARCHAR(20) NOT NULL,
    RepairNumber VARCHAR(4) NOT NULL,
    Quantity INT NOT NULL,
    PRIMARY KEY(PartID, RepairNumber)
);
```

**STAFF table (W25V13):**
```sql
CREATE TABLE STAFF (
    StaffID INTEGER NOT NULL PRIMARY KEY,
    StaffFirstName VARCHAR,
    StaffLastName VARCHAR,
    Department CHAR,
    RemoteWorker BOOLEAN
);
```

**Sources:** S21V12; S22V11; S23V11; S24V12; S24V13; W24V11; W25V13  
**Frequency:** Appeared every year 2021–2025.

---

### ALTER TABLE — selected examples

```sql
-- Add date of order field (W21V12)
ALTER TABLE PURCHASE ADD OrderDate DATE;

-- Add two fields to CAMERA_DATA (W22V11)
ALTER TABLE CAMERA_DATA ADD NumberStored INTEGER, LastUsed DATE;

-- Add Boolean field to DEVICE (S22V13)
ALTER TABLE DEVICE ADD Returned BOOLEAN;

-- Add Resolution field to PHOTOGRAPH (W22V13)
ALTER TABLE PHOTOGRAPH ADD Resolution TEXT;

-- Add foreign key to EXAM_QUESTION referencing EXAM (S24V12)
ALTER TABLE EXAM_QUESTION ADD FOREIGN KEY(ExamID) REFERENCES EXAM(ExamID);

-- Add foreign key to EVENT referencing PLAYER (S24V11)
ALTER TABLE EVENT ADD FOREIGN KEY(PlayerID) REFERENCES PLAYER(PlayerID);

-- Add InspectionDate to CONTAINER (W25V12)
ALTER TABLE CONTAINER ADD InspectionDate DATE;
```

**Sources:** W21V12; W22V11; S22V13; W22V13; S24V11; S24V12; W25V12  
**Frequency:** Appeared every year 2021–2025.

---

### SELECT — aggregate functions

```sql
-- Average mark for test A7 (S22V11)
SELECT AVG(Mark)
FROM STUDENT_TEST
WHERE TestID = 'A7';

-- Count birds seen by person J_123, grouped by size (S23V11)
SELECT BIRD_TYPE.Size, COUNT(BIRD_TYPE.BirdID) AS NumberOfBirds
FROM BIRD_TYPE, BIRD_SEEN
WHERE BIRD_SEEN.PersonID = "J_123"
AND BIRD_TYPE.BirdID = BIRD_SEEN.BirdID
GROUP BY BIRD_TYPE.Size;

-- Count events per player (S24V11)
SELECT PlayerID, COUNT(EventID)
FROM EVENT
GROUP BY PlayerID;

-- Count performances per show title (S24V13)
SELECT SHOW.Title, COUNT(PERFORMANCE.PerformanceID) AS NumberOfShowings
FROM PERFORMANCE INNER JOIN SHOW
ON PERFORMANCE.ShowID = SHOW.ShowID
GROUP BY SHOW.Title;

-- Sum unpaid invoices for supplier JK675 (W24V11)
SELECT SUM(AmountDue)
FROM INVOICE
WHERE SupplierID = "JK675" AND Paid = FALSE;

-- Count items per customer username (S25V12)
SELECT COUNT(ItemName)
FROM CHARACTER_ITEM INNER JOIN CHARACTER
ON CHARACTER.CharacterID = CHARACTER_ITEM.CharacterID
WHERE CHARACTER.Username = "KAT123";
```

**Sources:** S22V11; S23V11; S24V11; S24V13; W24V11; S25V12  
**Frequency:** SELECT with aggregates appeared every year 2021–2025.

---

### SELECT — JOIN with WHERE

```sql
-- Customers who have not paid deposit (S21V12)
SELECT FirstName, LastName
FROM CUSTOMER, RENTAL
WHERE DepositPaid = No
AND RENTAL.CustomerID = CUSTOMER.CustomerID;

-- Actor IDs for film 'Cinderella' (S22V12)
SELECT FILM_ACTOR.ActorID
FROM FILM_ACTOR INNER JOIN FILM_FACT
ON FILM_FACT.FilmID = FILM_ACTOR.FilmID
WHERE FILM_FACT.FilmTitle = 'Cinderella';

-- Total quantity ordered by customer HJ231 (W23V11)
SELECT SUM(Quantity)
FROM ORDER_ITEM INNER JOIN SHOP_ORDER
ON ORDER_ITEM.OrderNo = SHOP_ORDER.OrderNo
WHERE SHOP_ORDER.CustomerID = 'HJ231';

-- Count containers for ship Caledonia (W25V12)
SELECT COUNT(ContainerID)
FROM CONTAINER INNER JOIN SHIP
ON CONTAINER.ShipID = SHIP.ShipID
WHERE ShipName = "Caledonia";

-- Products with complaints, low rating, ordered DESC (W25V13)
SELECT PRODUCT.ProductID, ProductName, ComplaintDetails
FROM PRODUCT INNER JOIN COMPLAINT
ON PRODUCT.ProductID = COMPLAINT.ProductID
WHERE Rating <= 5
ORDER BY Rating DESC;
```

**Sources:** S21V12; S22V12; W23V11; W25V12; W25V13  
**Frequency:** JOIN queries appeared every year 2021–2025.

---

### SELECT — date range conditions

```sql
-- Films released January 2022 (S22V12)
SELECT COUNT(FilmID)
FROM FILM_FACT
WHERE ReleaseDate >= #01/01/2022# AND ReleaseDate <= #31/01/2022#;

-- Courses started after 9 September 2023 (W23V13)
SELECT Count(CourseID)
FROM COURSE_SCHEDULE
WHERE DateStarted > "09/09/23";

-- Total paid invoices sent in 2023 (W24V12)
SELECT SUM(Amount)
FROM INVOICE
WHERE Paid = "Y"
AND DateSent >= #01/01/2023# AND DateSent <= #31/12/2023#;

-- Total quantity sold to customer in 2023 (W24V13)
SELECT SUM(Quantity)
FROM SALE
WHERE CustomerID = "0034E"
AND Date >= #01/01/2023# AND Date <= #31/12/2023#;

-- Count completed placements for a student at a company (W25V11)
SELECT COUNT(CompanyID) AS TotalPlacements
FROM PLACEMENT
WHERE CompanyID = "NEAM"
AND StudentID = "LDEA01"
AND Complete = TRUE;
```

**Sources:** S22V12; W23V13; W24V12; W24V13; W25V11

---

### INSERT, UPDATE, DELETE — examples

```sql
-- Insert new car record (W21V11/13)
INSERT INTO CAR VALUES ("123AA","Tiger","Lioness",10500,"12BSTREET");

-- Insert new tree record (W22V12)
INSERT INTO TREE VALUES ('LOW_1276', 'Salix_Alba', 30.00, TRUE);

-- Insert new product record (S25V13)
INSERT INTO PRODUCT VALUES ("002323", "Blue ball point 2 mm", 50, 5.00, "SFX223");

-- Update character level and money (S25V12)
UPDATE CHARACTER SET Level = 3, Money = 10000.00 WHERE CharacterID = "0002";

-- Delete completed placements (W25V11)
DELETE FROM PLACEMENT WHERE Complete = TRUE;
```

**Sources:** W21V11/13; W22V12; S25V13; S25V12; W25V11  
**Frequency:** DML appeared every year 2021–2025.

---

### SQL error correction — STUDENT/LESSON query (S23V12)

| Error | Correction |
|---|---|
| `SUM` → should be `COUNT` | `SELECT COUNT(STUDENT.RiderLevel)` |
| `WHERE StudentID = StudentID` → missing table prefixes | `WHERE STUDENT.StudentID = LESSON.StudentID` |
| `OR` → should be `AND` | `AND Date = #09/09/2023#` |
| `= Beginner` → missing quotes | `= "Beginner"` |

**Sources:** S23V12 Q2ciii

---

## 17. Ethics and Ownership (`ethics-ownership`)

### Copyright

- The formal and legal rights to ownership of creative work / intellectual property  
- Protects against unauthorised reproduction  
- Provides legal right of redress if work is copied without permission  
- Identifies the holder as the owner/author; allows legal consequences for copying  
- Restricts competition  

**Sources:** S21V11/13 Q1d; W24V12 Q5bii

---

### Software licensing comparison

| Licence type | Can edit? | Can redistribute? | Payment? | Notes |
|---|---|---|---|---|
| Commercial / Proprietary | No | No | Yes | Source code inaccessible; support usually provided |
| Shareware | No | Yes (trial) | Optional | Trial period with limited features; may buy full version |
| Open Source (OSI) | Yes | Yes | No | Source code accessible; collaborative |
| Free Software (FSF/GPL) | Yes | Yes | No | All freedoms: run, study, modify, distribute |

**Benefits of shareware:**  
- User can trial before buying; no initial cost  
- Developer gets feedback; bugs found across many systems  
- Users may purchase if useful; word of mouth  

**Benefits of commercial licence:**  
- Developer earns a fee; source code protected  
- Provides copyright protection; legal action possible for infringement  
- Usually well-tested; comprehensive support  

**Benefits of open source:**  
- Users can customise/modify the code  
- Errors can be reported and fixed by users  
- Enables collaboration; additional features can be added  

**Proprietary software characteristics:**  
- Usually sold for a fee; users have no access to source code  
- Users cannot legally alter or share it  
- Limitations on use (e.g. number of installations)  
- Support and maintenance usually provided  

**Licences permitting editing and redistribution:** Open Source Initiative; Free Software Foundation.  

**Sources:** S21V12 Q2c; S22V11 Q5b; W22V13 Q8a; S23V13 Q5b; W23V13 Q6a; W24V11 Q7a/b; W24V12 Q5bi; W24V13 Q5a; S25V12 Q3ci; W25V12 Q2a; W25V12 Q10b; W25V13 Q8c  
**Frequency:** Appeared every year 2021–2025.

---

### Professional ethics — ethical bodies

**Benefits of joining a professional ethical body:**  
- Provides ethical guidelines to follow; removes ambiguity about what is ethical  
- Clients and employers know the practitioner is reputable (entry requirements demonstrate skill)  
- Provides help and support (e.g. legal advice)  
- Runs training courses to keep skills up to date  

**Acting ethically when unfamiliar with a tool:**  
- Honestly tell the manager of the lack of experience  
- Research/practise independently; request training or a mentor  

**Why not reporting a known error is unethical:**  
- Does not act in best interest of product, client, profession, or company  

**Code of conduct purpose:**  
- Creates a safe, respectable, professional working environment  
- Ensures employees understand expectations and consequences  
- Protects the organisation's reputation and public trust  

**Sources:** W21V11/13 Q4a/bi/c; W23V13 Q6b; W24V12 Q5a; W24V13 Q5b; W25V12 Q2b  
**Frequency:** Appeared in 2021, 2023, 2024.

---

### Social and ethical impacts of AI

**Social benefits of AI:**  
- Can assist people with visual impairment, reading difficulties, or language barriers  
- Early intervention / personalised learning support  
- Can improve efficiency and reduce costs  

**Social impacts of AI for student homework:**  
- Negative: students may miss developing reasoning skills; digital divide; misinformation risk  
- Positive: additional support for struggling students; improved self-esteem  

**Ethical impact of AI in classroom:**  
- Positive: personalised learning; early identification of students needing support  
- Concern: privacy; constant surveillance; data passed to third parties; mental health  

**Economic impact of AI on a garage:**  
- Reduces diagnosis time → more time for repairs → higher profit  
- May reduce costs to customers; program expensive to maintain  

**Sources:** S22V12 Q8; W22V12 Q9; W22V13 Q8b; S25V12 Q3b; W25V11 Q8c; W25V13 Q7a  
**Frequency:** Appeared in 2022, 2025.

---

### Ethical responsibilities — general

**Ethical considerations for students using school network:**  
- Respect privacy; avoid cyberbullying  
- Do not copy work or hack others  
- Abide by school guidelines; use network only for legitimate purposes  

**Ethical issues for freelance programmers:**  
- Limited access to legal advice, training, and networking  
- No clear ethical guidelines and no colleagues to discuss dilemmas with  
- Potentially isolated decisions may lead to unethical actions  

**Ethical behaviour toward colleagues:**  
- Treat colleagues fairly; avoid discrimination  
- Give/accept critique to improve work; credit contributions  

**Ethical behaviour toward the public:**  
- Maintain public health, safety and welfare  
- Be honest about software capabilities  
- Maintain security of public data  

**Sources:** W21V11/13 Q4a/bi/c; W24V12 Q5a; S25V13 Q3d; W25V11 Q8b  
**Frequency:** Appeared in 2021, 2024, 2025.

---

*End of master_answers.md*
