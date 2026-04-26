# Chapter 01: Information Representation

Sources:
- https://moshikur.com/as-level/as-ch03-hardware/1-1-data-representation/
- https://moshikur.com/as-level/as-ch03-hardware/1-2-multimedia/
- https://moshikur.com/as-level/as-ch03-hardware/1-3-compression/

---

## 1.1 Data Representation

### 1.1.1 Binary Magnitudes and Prefixes

A **bit** is the smallest computing unit storing either 0 or 1. Bits group into larger units.

**Binary Prefixes** (used by operating systems):

| Unit | Symbol | Bytes |
|---|---|---|
| Kibibyte | KiB | 1,024 (2¹⁰) |
| Mebibyte | MiB | 1,048,576 (2²⁰) |
| Gibibyte | GiB | 1,073,741,824 (2³⁰) |
| Tebibyte | TiB | 1,099,511,627,776 (2⁴⁰) |

**Decimal Prefixes** (used by manufacturers):

| Unit | Symbol | Bytes |
|---|---|---|
| Kilobyte | kB | 1,000 (10³) |
| Megabyte | MB | 1,000,000 (10⁶) |
| Gigabyte | GB | 1,000,000,000 (10⁹) |
| Terabyte | TB | 1,000,000,000,000 (10¹²) |

---

### 1.1.2 Number Systems

#### Binary (Base 2)

Uses only 0 and 1. Each position represents a power of 2.

Place values: `128 | 64 | 32 | 16 | 8 | 4 | 2 | 1`

- 4 bits: 0–15 (max 1111), 16 values
- 8 bits: 0–255 (max 11111111), 256 values

**Denary to Binary (repeated division by 2):**

Example: Convert 23 to binary
- 23 ÷ 2 = 11 r **1**
- 11 ÷ 2 = 5 r **1**
- 5 ÷ 2 = 2 r **1**
- 2 ÷ 2 = 1 r **0**
- 1 ÷ 2 = 0 r **1**
- Read bottom-to-top: **10111**

**Binary to Denary (place values):**

Example: Convert 100101 to denary → 32 + 0 + 0 + 4 + 0 + 1 = **37**

---

#### Hexadecimal (Base 16)

Uses digits 0–9 and letters A–F (A=10, B=11, C=12, D=13, E=14, F=15).

Each hex digit maps to exactly 4 binary bits.

| Denary | Binary | Hex |
|---|---|---|
| 0–9 | 0000–1001 | 0–9 |
| 10 | 1010 | A |
| 11 | 1011 | B |
| 12 | 1100 | C |
| 13 | 1101 | D |
| 14 | 1110 | E |
| 15 | 1111 | F |

**Conversions:**

- **Hex → Denary:** A3 = (10 × 16) + 3 = **163**
- **Hex → Binary:** 2F → 0010 1111 = **00101111**
- **Denary → Hex (repeated division by 16):** 330 → remainders 10(A), 4, 1 → **14A₁₆**
- **Binary → Hex (group into 4-bit chunks):** 0001 0100 1010 → 1, 4, A → **14A₁₆**

**Real-world uses:**
- Memory addresses: `D3AF`
- HTML/CSS colours: `#FF0000` (red), `#00FF00` (green), `#0000FF` (blue)
- Error codes: `STOP: 0x0000007E`
- MAC addresses: `00:1A:2B:3C:4D:5E`

---

#### Binary Coded Decimal (BCD)

Represents each decimal digit (0–9) individually as a 4-bit binary code.

| Decimal | BCD |
|---|---|
| 0 | 0000 |
| 1 | 0001 |
| 2 | 0010 |
| 3 | 0011 |
| 4 | 0100 |
| 5 | 0101 |
| 6 | 0110 |
| 7 | 0111 |
| 8 | 1000 |
| 9 | 1001 |

**Key distinction:**
- BCD of 47: 4 → 0100, 7 → 0111 = **0100 0111**
- Binary of 47: **101111** (whole number converted at once)

**Applications:** digital displays (clocks, calculators), financial/ATM systems (avoids rounding errors), embedded systems.

| Advantages | Disadvantages |
|---|---|
| Easy conversion for displays | Wastes storage (values 10–15 unused per nibble) |
| Avoids binary rounding errors | Slower arithmetic than pure binary |
| Compatible with decimal I/O | Inefficient for large computations |

---

### Two's Complement

A method for representing positive and negative integers using a fixed number of bits.

**Rule:** MSB = 0 → positive; MSB = 1 → negative.

**Range for N-bit numbers:**
- Minimum: –2ⁿ⁻¹
- Maximum: 2ⁿ⁻¹ – 1

| Bits | Range |
|---|---|
| 4-bit | –8 to +7 |
| 8-bit | –128 to +127 |
| 16-bit | –32,768 to +32,767 |

**Converting positive to negative (negation):**
1. Start with positive binary representation
2. Invert all bits
3. Add 1

Example: +5 → 00000101 → invert: 11111010 → add 1: **11111011** (–5)

---

### 1.1.3 Binary Arithmetic

#### Addition Rules

| Bit A | Bit B | Sum | Carry |
|---|---|---|---|
| 0 | 0 | 0 | 0 |
| 0 | 1 | 1 | 0 |
| 1 | 0 | 1 | 0 |
| 1 | 1 | 0 | 1 |

Example: 9 + 5 → 00001001 + 00000101 = **00001110** (14)

#### Subtraction (using Two's Complement)

A – B = A + (–B)

Example: 5 – 3
1. 5 = 00000101
2. Two's complement of 3: 11111101
3. 00000101 + 11111101 = **00000010** (2)

Example: 3 – 5
1. Two's complement of 5: 11111011
2. 00000011 + 11111011 = **11111110** (–2)

#### Overflow

Occurs when a result exceeds the representable range of the fixed number of bits.

| Situation | Overflow? |
|---|---|
| Positive + Positive → Negative result | Yes |
| Negative + Negative → Positive result | Yes |
| Positive + Negative | No |

**Detection:** carry INTO MSB ≠ carry OUT OF MSB → overflow.

---

### 1.1.5 Character Sets

#### ASCII (7-bit, 128 characters)

Supports English letters, digits, punctuation, and control characters.

| Character | Decimal | Binary |
|---|---|---|
| A | 65 | 1000001 |
| a | 97 | 1100001 |
| 0 (digit) | 48 | 0110000 |
| Space | 32 | 0100000 |

**Limitation:** English only; no accented or non-English characters.

#### Extended ASCII (8-bit, 256 characters)

Adds accented letters, box-drawing symbols, currency signs (e.g. é=130, £=156).

#### Unicode (variable-length, 143,000+ characters)

Universal encoding standard supporting every writing system and language.

| Form | Length | Use |
|---|---|---|
| UTF-8 | 1–4 bytes | Web standard; ASCII-compatible |
| UTF-16 | 2 or 4 bytes | Windows, some languages |
| UTF-32 | 4 bytes fixed | Simple implementation; high memory |

**Comprehensive Comparison:**

| Feature | ASCII | Extended ASCII | Unicode |
|---|---|---|---|
| Bit length | 7 bits | 8 bits | Variable (8/16/32 bits) |
| Characters | 128 | 256 | 143,000+ |
| Non-English | No | Partial (Western European) | All scripts |
| Emoji | No | No | Yes |
| Modern use | Legacy | Legacy | Universal standard |

---

## 1.2 Multimedia

### 1.2.1 Graphics

#### Bitmap Images

Images made of pixels — tiny squares each representing a single colour in binary.

**Colour depth categories:**
- 1-bit: black or white only
- 8-bit: 256 colours
- 24-bit: 16 million+ colours (True Colour)

**File size formula:**
```
File Size (bits) = Width × Height × Colour Depth (bits per pixel)
```

Example: 1920 × 1080 at 24 bits = 49,766,400 bits ≈ 6 MB

**Effects of changing resolution:** higher → more detail, larger file; lower → blurry, smaller file.

**Effects of changing colour depth:** higher → realistic colours, larger file; lower → colour banding, smaller file.

#### Vector Graphics

Images created from mathematical instructions (shapes, lines, curves) rather than pixels.

Each object is stored as properties (position, size, colour, fill). All objects are stored in a **drawing list**.

**Key advantage:** infinitely scalable without quality loss.

**Common formats:** SVG, AI, EPS.

#### Bitmap vs. Vector

| Feature | Bitmap | Vector |
|---|---|---|
| Composition | Pixels | Shapes / mathematical descriptions |
| Scalability | Quality loss when resized | Infinite resizing without quality loss |
| File size | Large for detailed images | Smaller for simple graphics |
| Best for | Photographs, textures | Logos, icons, diagrams, flowcharts |
| Editing | Difficult to modify elements | Easy shape and colour editing |

---

### 1.2.2 Sound Representation

Analogue sound waves are sampled at regular intervals; each sample captures the amplitude at that moment and is stored as a binary number.

#### Sample Rate

Number of samples taken per second (measured in Hz).

- Standard: 44,100 Hz (44.1 kHz) for CDs
- Higher rate → more wave detail, better quality, larger file
- Lower rate → less detail, reduced quality, smaller file

#### Sample Resolution

Number of bits used to store each sample's amplitude.

- 16-bit → 65,536 possible amplitude values
- 8-bit → 256 possible amplitude values
- Higher resolution → better quality (less distortion), larger file

#### File Size Formula

```
File Size (bits) = Sample Rate × Sample Resolution × Duration (seconds) × Channels
```

*Stereo = 2 channels*

---

## 1.3 Compression

### 1.3.1 Why Compression Matters

Compression reduces file size for efficient storage and faster network transmission.

**Key advantages:**
1. Storage efficiency — files occupy less disk space
2. Faster transfers — quicker uploads and downloads
3. Bandwidth optimisation — streaming services reduce data usage
4. Archiving — large collections compressed into manageable archives
5. Performance — compressed data loads faster in applications

---

### 1.3.2 Lossy vs. Lossless Compression

#### Lossy Compression

Permanently removes less-noticeable data (high-frequency audio, subtle colour variations).

| Data Type | Formats |
|---|---|
| Images | JPEG, GIF |
| Audio | MP3, AAC |
| Video | MP4, AVI, MPEG |

| Advantages | Disadvantages |
|---|---|
| Dramatic file size reduction (up to 90%) | Irreversible data loss |
| Fast transmission | Quality degrades with repeated saves |
| Changes often imperceptible | Unsuitable for detail-critical content |

#### Lossless Compression

Finds patterns and redundancy in data and stores it more efficiently. All original data is perfectly recoverable.

| Data Type | Formats |
|---|---|
| Images | PNG, BMP |
| Audio | FLAC, WAV |
| Text / Data | ZIP, RAR |

| Advantages | Disadvantages |
|---|---|
| Perfect quality restoration | More modest size reduction |
| Ideal for critical documents | Slower compression/decompression |
| Effective for repetitive data | Less suitable for streaming |

**Comparison:**

| Criterion | Lossy | Lossless |
|---|---|---|
| Data preservation | Permanent loss | Complete preservation |
| Size reduction | High (≈90%) | Moderate (10–50%) |
| Reversibility | Irreversible | Fully reversible |
| Best for | Multimedia content | Documents, software |
| Formats | JPEG, MP3, MP4 | PNG, FLAC, ZIP |

---

### 1.3.3 Run-Length Encoding (RLE)

A lossless technique that replaces consecutive repeating values with a single value and count.

**Text example:**
- Original: `AAAAABBBBCCCCDDDDDDDDD`
- Compressed: `5A4B4C9D`

**Image pixel example:**
- Original: `WWWWWWWWWWBBBBBBWWWWWW` (22 bytes)
- Compressed: `10W6B6W` (7 bytes)

**Binary example:**
- Original: `000000001111111100000000`
- Compressed: `8-0 8-1 8-0`

| Strengths | Limitations |
|---|---|
| Lossless — all data preserved | Ineffective for complex/non-repetitive data |
| Simple and fast | May enlarge files with little repetition |
| Great for text, binary files, monochrome graphics | Limited to specific use cases |

---

### 1.3.4 Choosing the Appropriate Compression Method

| Scenario | Method | Reason |
|---|---|---|
| Text document backup | Lossless (ZIP) | Information integrity essential |
| YouTube video upload | Lossy (MP4) | Streaming efficiency |
| Professional photo printing | Lossless (PNG/RAW) | Quality is paramount |
| Mobile music storage | Lossy (MP3) | Device capacity constraints |
| Medical imaging | Lossless | No data loss acceptable |
| Web photography | Lossy (JPEG) | Acceptable quality, fast load |

**Decision factors:**
- **File purpose** — is data loss acceptable?
- **Content type** — text/programs → lossless; photos/audio → lossy
- **Future editing** — multiple edits → lossless to prevent degradation
- **Quality vs. size trade-off** — lossy gives greater reduction; lossless preserves quality
