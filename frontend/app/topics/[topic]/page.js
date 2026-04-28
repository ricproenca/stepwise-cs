import SidebarNav from '../../../components/SidebarNav';
import GlossarySidebar from '../../../components/GlossarySidebar';
import styles from './page.module.css';

const SECTIONS = [
  { id: 's1-1-1', label: '1.1.1 Binary Magnitudes' },
  { id: 's1-1-2', label: '1.1.2 Number Systems' },
  { id: 's1-1-3', label: '1.1.3 Base Conversion' },
  { id: 's1-1-4', label: '1.1.4 Binary Arithmetic' },
  { id: 's1-1-5', label: '1.1.5 Applications' },
  { id: 's1-1-6', label: '1.1.6 Character Sets' },
  { id: 'syllabus-coverage', label: 'Syllabus Coverage' },
];

export default async function NotesPage({ params }) {
  const { topic } = await params;
  const g = `/topics/${topic}/glossary`;

  return (
    <div className={styles.pageLayout}>
        <aside className={styles.leftSidebar} aria-label="Section navigation">
          <SidebarNav sections={SECTIONS} />
        </aside>

        <main className={styles.notes} id="main-content">

          <div className={styles.crossTopicNote} role="note">
            <strong>Cross-topic note:</strong> The binary number system and two&apos;s complement are defined in full in this section. Sections 4.1 (CPU Architecture) and 4.3 (Bit Manipulation) reference these definitions without redefining them. Character encoding (ASCII, Unicode) is defined in full here; Section 1.2 (Multimedia) references these definitions.
          </div>

          {/* ── 1.1.1 ─────────────────────────────────────── */}
          <h2 id="s1-1-1">1.1.1 Binary Magnitudes and Prefixes</h2>

          <p>Storage capacity appears in product specifications and exam questions using two prefix systems that assign different byte counts to the same prefix word. Selecting the correct system — and converting between the two — is a routine 1-mark task in Paper 1.</p>

          <div className={styles.callout}>
            A <strong><a href={`${g}#bit`}>bit</a></strong> is a single binary digit (0 or 1). An <strong>8-bit</strong> group is called a <strong><a href={`${g}#byte`}>byte</a></strong>; a <strong>4-bit</strong> group is called a <strong><a href={`${g}#nibble`}>nibble</a></strong>.
          </div>

          <p>Computer memory is measured in multiples of bytes. Two incompatible prefix systems exist, producing different values for the same prefix word.</p>

          <figure>
            <figcaption className={styles.figCaption}>Table 1 — Decimal (SI) vs Binary (IEC) prefix comparison. The same prefix word yields a different byte count in each system.</figcaption>
            <table className={styles.table} aria-label="Decimal SI and Binary IEC prefix comparison">
              <thead>
                <tr>
                  <th>Prefix word</th><th>SI symbol</th><th>SI bytes</th><th>SI power</th>
                  <th>IEC symbol</th><th>IEC bytes</th><th>IEC power</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>kilo / kibi</td><td><code>KB</code></td><td>1,000</td><td>10³</td><td><code>KiB</code></td><td>1,024</td><td>2¹⁰</td></tr>
                <tr><td>mega / mebi</td><td><code>MB</code></td><td>1,000,000</td><td>10⁶</td><td><code>MiB</code></td><td>1,048,576</td><td>2²⁰</td></tr>
                <tr><td>giga / gibi</td><td><code>GB</code></td><td>1,000,000,000</td><td>10⁹</td><td><code>GiB</code></td><td>1,073,741,824</td><td>2³⁰</td></tr>
                <tr><td>tera / tebi</td><td><code>TB</code></td><td>1,000,000,000,000</td><td>10¹²</td><td><code>TiB</code></td><td>1,099,511,627,776</td><td>2⁴⁰</td></tr>
                <tr><td>peta / pebi</td><td><code>PB</code></td><td>1,000,000,000,000,000</td><td>10¹⁵</td><td><code>PiB</code></td><td>1,125,899,906,842,624</td><td>2⁵⁰</td></tr>
              </tbody>
            </table>
          </figure>

          <h3>Decimal (SI) Prefixes</h3>
          <p>Used by storage device manufacturers. Based on powers of 10.</p>
          <table className={styles.table} aria-label="Decimal SI prefix units">
            <thead><tr><th>Unit</th><th>Symbol</th><th>Value (bytes)</th><th>Power</th></tr></thead>
            <tbody>
              <tr><td>Kilobyte</td><td><code>KB</code></td><td>1,000</td><td>10³</td></tr>
              <tr><td>Megabyte</td><td><code>MB</code></td><td>1,000,000</td><td>10⁶</td></tr>
              <tr><td>Gigabyte</td><td><code>GB</code></td><td>1,000,000,000</td><td>10⁹</td></tr>
              <tr><td>Terabyte</td><td><code>TB</code></td><td>1,000,000,000,000</td><td>10¹²</td></tr>
              <tr><td>Petabyte</td><td><code>PB</code></td><td>1,000,000,000,000,000</td><td>10¹⁵</td></tr>
            </tbody>
          </table>
          <p>Storage manufacturers use decimal prefixes to report larger figures on product labels. Computer engineers need binary prefixes for precise memory calculations — the two systems diverge by a growing margin at higher scales.</p>

          <h3>Binary (IEC) Prefixes</h3>
          <p>Used for internal memory (RAM, cache). Based on powers of 2. The suffix <strong>-bi</strong> indicates a binary prefix.</p>
          <table className={styles.table} aria-label="Binary IEC prefix units">
            <thead><tr><th>Unit</th><th>Symbol</th><th>Value (bytes)</th><th>Power</th></tr></thead>
            <tbody>
              <tr><td><a href={`${g}#kibibyte`}>Kibibyte</a></td><td><code>KiB</code></td><td>1,024</td><td>2¹⁰</td></tr>
              <tr><td>Mebibyte</td><td><code>MiB</code></td><td>1,048,576</td><td>2²⁰</td></tr>
              <tr><td><a href={`${g}#gibibyte`}>Gibibyte</a></td><td><code>GiB</code></td><td>1,073,741,824</td><td>2³⁰</td></tr>
              <tr><td>Tebibyte</td><td><code>TiB</code></td><td>1,099,511,627,776</td><td>2⁴⁰</td></tr>
              <tr><td>Pebibyte</td><td><code>PiB</code></td><td>1,125,899,906,842,624</td><td>2⁵⁰</td></tr>
            </tbody>
          </table>

          <p><strong>When to use each system:</strong></p>
          <ul>
            <li>Binary prefixes (KiB, MiB, GiB) — required when precision matters, such as identifying RAM size or calculating file sizes in programs. Example: 64 GiB RAM = 64 × 2³⁰ bytes = 68,719,476,736 bytes.</li>
            <li>Decimal prefixes (KB, MB, GB) — used for approximate storage capacity, such as hard drive labelling. Example: a 500 GB hard drive stores 500 × 10⁹ bytes.</li>
          </ul>

          <p><strong>Key relationships for exam questions:</strong></p>
          <ul>
            <li>1024 mebibytes = 1 gibibyte</li>
            <li>1000 kilobytes = 1 megabyte</li>
            <li>8 bits = 1 byte</li>
            <li>8192 bits = 1 kibibyte (8 × 1024)</li>
          </ul>

          <div className={styles.keyTakeaway} role="note">
            <strong>Key Takeaway — 1.1.1</strong>
            <ul>
              <li>Decimal (SI) prefixes are based on powers of 10; binary (IEC) prefixes are based on powers of 2 — the same prefix word yields different byte counts.</li>
              <li>RAM and cache sizes use binary prefixes (KiB, MiB, GiB); storage device capacities are typically quoted using decimal prefixes (KB, MB, GB).</li>
              <li>For exam calculations: 1 KiB = 1,024 bytes; 1 MiB = 1,048,576 bytes; 1 GiB = 1,073,741,824 bytes.</li>
            </ul>
          </div>

          {/* ── 1.1.2 ─────────────────────────────────────── */}
          <h2 id="s1-1-2">1.1.2 Number Systems</h2>

          <p>All integer data stored by a computer is encoded in binary. Exam questions for this section require confident conversion between binary, denary, hexadecimal, and BCD — and a precise understanding of how the same bit pattern produces a different denary value depending on the encoding system applied.</p>

          <p>A <strong>number base</strong> defines how many distinct digits a system uses. Each digit position represents the base raised to a power, increasing from right to left.</p>

          <h3>Binary (Base 2)</h3>
          <p>Uses only digits 0 and 1. Each position is a power of 2.</p>

          <figure className={styles.svgFigure}>
            <svg viewBox="0 0 480 120" role="img" xmlns="http://www.w3.org/2000/svg"
              style={{ fontFamily: "'Courier New',monospace", width: '100%', maxWidth: '600px', display: 'block' }}>
              <title>8-bit unsigned binary column weighting: 01101001 = 105</title>
              <desc>Eight cells show bit values 0,1,1,0,1,0,0,1 with column weights 128,64,32,16,8,4,2,1. Highlighted cells (value 1) at positions 64, 32, 8 and 1. Result: 64+32+8+1 = 105.</desc>
              <text x="30"  y="16" textAnchor="middle" fontSize="12" style={{ fill: 'var(--color-text-secondary)' }} fontFamily="'Open Sans',sans-serif">2⁷</text>
              <text x="90"  y="16" textAnchor="middle" fontSize="12" style={{ fill: 'var(--color-text-secondary)' }} fontFamily="'Open Sans',sans-serif">2⁶</text>
              <text x="150" y="16" textAnchor="middle" fontSize="12" style={{ fill: 'var(--color-text-secondary)' }} fontFamily="'Open Sans',sans-serif">2⁵</text>
              <text x="210" y="16" textAnchor="middle" fontSize="12" style={{ fill: 'var(--color-text-secondary)' }} fontFamily="'Open Sans',sans-serif">2⁴</text>
              <text x="270" y="16" textAnchor="middle" fontSize="12" style={{ fill: 'var(--color-text-secondary)' }} fontFamily="'Open Sans',sans-serif">2³</text>
              <text x="330" y="16" textAnchor="middle" fontSize="12" style={{ fill: 'var(--color-text-secondary)' }} fontFamily="'Open Sans',sans-serif">2²</text>
              <text x="390" y="16" textAnchor="middle" fontSize="12" style={{ fill: 'var(--color-text-secondary)' }} fontFamily="'Open Sans',sans-serif">2¹</text>
              <text x="450" y="16" textAnchor="middle" fontSize="12" style={{ fill: 'var(--color-text-secondary)' }} fontFamily="'Open Sans',sans-serif">2⁰</text>
              <rect x="6"   y="22" width="48" height="48" rx="4" style={{ fill: 'var(--color-bg-subtle)', stroke: 'var(--color-border-medium)', strokeWidth: 1.5 }} />
              <text x="30"  y="52" textAnchor="middle" fontSize="22" style={{ fill: 'var(--color-cambridge-dark-blue)' }} fontWeight="700">0</text>
              <rect x="66"  y="22" width="48" height="48" rx="4" style={{ fill: 'var(--color-bg-tint)', stroke: 'var(--color-cambridge-dark-blue)', strokeWidth: 2 }} />
              <text x="90"  y="52" textAnchor="middle" fontSize="22" style={{ fill: 'var(--color-cambridge-dark-blue)' }} fontWeight="700">1</text>
              <rect x="126" y="22" width="48" height="48" rx="4" style={{ fill: 'var(--color-bg-tint)', stroke: 'var(--color-cambridge-dark-blue)', strokeWidth: 2 }} />
              <text x="150" y="52" textAnchor="middle" fontSize="22" style={{ fill: 'var(--color-cambridge-dark-blue)' }} fontWeight="700">1</text>
              <rect x="186" y="22" width="48" height="48" rx="4" style={{ fill: 'var(--color-bg-subtle)', stroke: 'var(--color-border-medium)', strokeWidth: 1.5 }} />
              <text x="210" y="52" textAnchor="middle" fontSize="22" style={{ fill: 'var(--color-cambridge-dark-blue)' }} fontWeight="700">0</text>
              <rect x="246" y="22" width="48" height="48" rx="4" style={{ fill: 'var(--color-bg-tint)', stroke: 'var(--color-cambridge-dark-blue)', strokeWidth: 2 }} />
              <text x="270" y="52" textAnchor="middle" fontSize="22" style={{ fill: 'var(--color-cambridge-dark-blue)' }} fontWeight="700">1</text>
              <rect x="306" y="22" width="48" height="48" rx="4" style={{ fill: 'var(--color-bg-subtle)', stroke: 'var(--color-border-medium)', strokeWidth: 1.5 }} />
              <text x="330" y="52" textAnchor="middle" fontSize="22" style={{ fill: 'var(--color-cambridge-dark-blue)' }} fontWeight="700">0</text>
              <rect x="366" y="22" width="48" height="48" rx="4" style={{ fill: 'var(--color-bg-subtle)', stroke: 'var(--color-border-medium)', strokeWidth: 1.5 }} />
              <text x="390" y="52" textAnchor="middle" fontSize="22" style={{ fill: 'var(--color-cambridge-dark-blue)' }} fontWeight="700">0</text>
              <rect x="426" y="22" width="48" height="48" rx="4" style={{ fill: 'var(--color-bg-tint)', stroke: 'var(--color-cambridge-dark-blue)', strokeWidth: 2 }} />
              <text x="450" y="52" textAnchor="middle" fontSize="22" style={{ fill: 'var(--color-cambridge-dark-blue)' }} fontWeight="700">1</text>
              <text x="30"  y="86" textAnchor="middle" fontSize="11" style={{ fill: 'var(--color-cambridge-dark-blue)' }} fontFamily="'Open Sans',sans-serif" fontWeight="600">128</text>
              <text x="90"  y="86" textAnchor="middle" fontSize="11" style={{ fill: 'var(--color-cambridge-dark-blue)' }} fontFamily="'Open Sans',sans-serif" fontWeight="600">64</text>
              <text x="150" y="86" textAnchor="middle" fontSize="11" style={{ fill: 'var(--color-cambridge-dark-blue)' }} fontFamily="'Open Sans',sans-serif" fontWeight="600">32</text>
              <text x="210" y="86" textAnchor="middle" fontSize="11" style={{ fill: 'var(--color-cambridge-dark-blue)' }} fontFamily="'Open Sans',sans-serif" fontWeight="600">16</text>
              <text x="270" y="86" textAnchor="middle" fontSize="11" style={{ fill: 'var(--color-cambridge-dark-blue)' }} fontFamily="'Open Sans',sans-serif" fontWeight="600">8</text>
              <text x="330" y="86" textAnchor="middle" fontSize="11" style={{ fill: 'var(--color-cambridge-dark-blue)' }} fontFamily="'Open Sans',sans-serif" fontWeight="600">4</text>
              <text x="390" y="86" textAnchor="middle" fontSize="11" style={{ fill: 'var(--color-cambridge-dark-blue)' }} fontFamily="'Open Sans',sans-serif" fontWeight="600">2</text>
              <text x="450" y="86" textAnchor="middle" fontSize="11" style={{ fill: 'var(--color-cambridge-dark-blue)' }} fontFamily="'Open Sans',sans-serif" fontWeight="600">1</text>
              <text x="240" y="110" textAnchor="middle" fontSize="12" style={{ fill: 'var(--color-text-secondary)' }} fontFamily="'Open Sans',sans-serif">64 + 32 + 8 + 1 = 105</text>
            </svg>
            <figcaption className={styles.figCaptionBottom}>Figure 1 — 8-bit unsigned binary column weighting. Teal cells indicate bit = 1; grey cells indicate bit = 0. The example value 01101001 sums to 105.</figcaption>
          </figure>

          <table className={styles.table} aria-label="Maximum unsigned binary values by bit width">
            <thead><tr><th>Bits</th><th>Max unsigned value</th><th>Unique values</th></tr></thead>
            <tbody>
              <tr><td>4 (nibble)</td><td>15</td><td>16</td></tr>
              <tr><td>8 (byte)</td><td>255</td><td>256</td></tr>
              <tr><td>16</td><td>65,535</td><td>65,536</td></tr>
            </tbody>
          </table>

          <p><strong>Maximum value with n bits (unsigned):</strong> 2ⁿ − 1 &nbsp;|&nbsp; <strong>Number of unique values:</strong> 2ⁿ</p>
          <p><strong>Binary to denary:</strong> Sum the column values where a 1 appears.</p>
          <p><em>Example:</em> 01101001 = 64 + 32 + 8 + 1 = <strong>105</strong></p>
          <p><strong>Denary to binary (repeated subtraction method):</strong> Starting from the highest column value, place a 1 if the value fits (subtract it from the remainder); otherwise place a 0.</p>
          <p><em>Example:</em> Convert 107 to 8-bit binary</p>
          <table className={styles.table} aria-label="Denary 107 to binary conversion">
            <thead><tr><th>128</th><th>64</th><th>32</th><th>16</th><th>8</th><th>4</th><th>2</th><th>1</th></tr></thead>
            <tbody><tr><td>0</td><td>1</td><td>1</td><td>0</td><td>1</td><td>0</td><td>1</td><td>1</td></tr></tbody>
          </table>
          <p>107 − 64 = 43 → 43 − 32 = 11 → 11 − 8 = 3 → 3 − 2 = 1 → 1 − 1 = 0 &nbsp; Result: <strong>01101011</strong></p>
          <p><strong>Denary to binary (repeated division method):</strong> Divide repeatedly by 2; remainders read bottom-to-top give the binary value.</p>
          <p>Binary is unambiguous for hardware but impractical for human reading: a 16-bit address contains 16 digits. Hexadecimal reduces this by grouping every four binary digits into a single character.</p>

          <h3>Hexadecimal (Base 16)</h3>
          <p>Uses digits 0–9 and letters A–F. A = 10, B = 11, C = 12, D = 13, E = 14, F = 15.</p>
          <table className={styles.table} aria-label="Hexadecimal, binary and denary equivalents 0–15">
            <thead><tr><th>Denary</th><th>Binary</th><th>Hex</th><th>Denary</th><th>Binary</th><th>Hex</th></tr></thead>
            <tbody>
              <tr><td>0</td><td><code>0000</code></td><td>0</td><td>8</td><td><code>1000</code></td><td>8</td></tr>
              <tr><td>1</td><td><code>0001</code></td><td>1</td><td>9</td><td><code>1001</code></td><td>9</td></tr>
              <tr><td>2</td><td><code>0010</code></td><td>2</td><td>10</td><td><code>1010</code></td><td>A</td></tr>
              <tr><td>3</td><td><code>0011</code></td><td>3</td><td>11</td><td><code>1011</code></td><td>B</td></tr>
              <tr><td>4</td><td><code>0100</code></td><td>4</td><td>12</td><td><code>1100</code></td><td>C</td></tr>
              <tr><td>5</td><td><code>0101</code></td><td>5</td><td>13</td><td><code>1101</code></td><td>D</td></tr>
              <tr><td>6</td><td><code>0110</code></td><td>6</td><td>14</td><td><code>1110</code></td><td>E</td></tr>
              <tr><td>7</td><td><code>0111</code></td><td>7</td><td>15</td><td><code>1111</code></td><td>F</td></tr>
            </tbody>
          </table>

          <p><strong>Binary to hex:</strong> Group binary digits from the right into sets of 4; convert each nibble to its hex equivalent.</p>
          <p><em>Example:</em> Convert 1011 1110 0001 to hex &nbsp;→&nbsp; 1011 = B · 1110 = E · 0001 = 1 → <strong>BE1</strong></p>
          <p><strong>Hex to binary:</strong> Expand each hex digit to its 4-bit binary equivalent.</p>
          <p><em>Example:</em> Convert 45A to binary &nbsp;→&nbsp; 4 = 0100 · 5 = 0101 · A = 1010 → <strong>010001011010</strong></p>
          <p><strong>Hex to denary:</strong> Multiply each digit by 16 raised to its positional power.</p>
          <p><em>Example:</em> A3 = (10 × 16¹) + (3 × 16⁰) = 160 + 3 = <strong>163</strong></p>
          <p><strong>Denary to hex (repeated division):</strong> Divide by 16; remainders right-to-left give hex digits.</p>
          <p><em>Example:</em> Convert 241 to hex &nbsp;→&nbsp; 241 ÷ 16 = 15 remainder 1 → 15 = F · 1 = 1 → <strong>F1</strong></p>
          <p>Hexadecimal is a compression of binary suited to addresses and colour codes. BCD takes a different approach: rather than encoding an entire number into binary, it preserves each decimal digit as an independent 4-bit group.</p>

          <h3>Binary Coded Decimal (BCD)</h3>
          <div className={styles.callout}>
            <strong><a href={`${g}#bcd`}>Binary Coded Decimal (BCD)</a></strong> represents each <em>individual</em> denary digit as a separate 4-bit binary code. Only codes 0000 to 1001 (0–9) are valid; codes 1010–1111 are unused.
          </div>

          <table className={styles.table} aria-label="BCD digit codes 0–9">
            <thead><tr><th>Denary digit</th><th>BCD</th><th>Denary digit</th><th>BCD</th></tr></thead>
            <tbody>
              <tr><td>0</td><td><code>0000</code></td><td>5</td><td><code>0101</code></td></tr>
              <tr><td>1</td><td><code>0001</code></td><td>6</td><td><code>0110</code></td></tr>
              <tr><td>2</td><td><code>0010</code></td><td>7</td><td><code>0111</code></td></tr>
              <tr><td>3</td><td><code>0011</code></td><td>8</td><td><code>1000</code></td></tr>
              <tr><td>4</td><td><code>0100</code></td><td>9</td><td><code>1001</code></td></tr>
            </tbody>
          </table>

          <p><strong>BCD is not the same as binary.</strong> The pattern <code>00100111</code> represents:</p>
          <ul>
            <li>Unsigned binary: 32 + 4 + 2 + 1 = <strong>39</strong></li>
            <li>BCD: 0010 = 2 · 0111 = 7 → <strong>27</strong></li>
          </ul>

          <p><strong>Denary to BCD:</strong> Convert each decimal digit independently to its 4-bit code.</p>
          <p><em>Example:</em> 964 → 9 = 1001 · 6 = 0110 · 4 = 0100 → <strong>1001 0110 0100</strong></p>
          <p><strong>BCD storage — packed vs unpacked:</strong></p>
          <ul>
            <li><strong>Packed BCD:</strong> two 4-bit codes stored in one byte</li>
            <li><strong>Unpacked BCD:</strong> one 4-bit code per byte (with leading zeros in the high nibble)</li>
          </ul>

          <figure className={styles.diagramPlaceholder} aria-label="Diagram: Packed BCD versus Unpacked BCD storage layout for denary 52">
            <figcaption>
              <strong>Binary diagram:</strong> Packed BCD vs unpacked BCD storage layout for denary 52.
              Packed BCD stores both digits in one byte: <code>0101 0010</code> (high nibble 0101 = 5; low nibble 0010 = 2).
              Unpacked BCD stores each digit in a separate byte: <code>0000 0101</code> (byte 1, digit 5) and <code>0000 0010</code> (byte 2, digit 2).
              Illustrates the storage efficiency trade-off: packed BCD uses half the memory but requires nibble-level masking to extract individual digits.
            </figcaption>
          </figure>

          <p>Both binary and BCD represent only non-negative integers. Two&apos;s complement extends binary to cover signed integers by assigning the most significant bit a negative weight, allowing the same addition hardware to handle both positive and negative values.</p>

          <h3>Two&apos;s Complement</h3>
          <div className={styles.callout}>
            <strong><a href={`${g}#twos-complement`}>Two&apos;s complement</a></strong> is the standard method for representing both positive and negative integers in binary. It uses the <strong>most significant bit (MSB)</strong> as a sign bit with negative weight.
          </div>

          <p><strong>8-bit two&apos;s complement column weightings:</strong></p>
          <table className={styles.table} aria-label="8-bit two's complement column weights">
            <thead><tr><th>−2⁷</th><th>2⁶</th><th>2⁵</th><th>2⁴</th><th>2³</th><th>2²</th><th>2¹</th><th>2⁰</th></tr></thead>
            <tbody><tr><td><strong>−128</strong></td><td>64</td><td>32</td><td>16</td><td>8</td><td>4</td><td>2</td><td>1</td></tr></tbody>
          </table>

          <ul>
            <li>MSB = 0 → number is positive (or zero)</li>
            <li>MSB = 1 → number is negative</li>
          </ul>

          <p><strong>Range for 8-bit two&apos;s complement:</strong> −128 to +127 &nbsp;|&nbsp; <strong>General range for n-bit:</strong> −2ⁿ⁻¹ to 2ⁿ⁻¹ − 1</p>

          <table className={styles.table} aria-label="Two's complement range by bit width">
            <thead><tr><th>Bits</th><th>Minimum (most negative)</th><th>Maximum (most positive)</th></tr></thead>
            <tbody>
              <tr><td>4</td><td>−8</td><td>+7</td></tr>
              <tr><td>8</td><td>−128</td><td>+127</td></tr>
              <tr><td>16</td><td>−32,768</td><td>+32,767</td></tr>
            </tbody>
          </table>

          <p><strong>Converting a positive denary to negative two&apos;s complement (negation):</strong></p>
          <ol>
            <li>Write the positive value in binary.</li>
            <li>Invert all bits (one&apos;s complement).</li>
            <li>Add 1 to the least significant bit.</li>
          </ol>

          <p><em>Example:</em> Represent −45 in 8-bit two&apos;s complement</p>
          <pre><code>{`+45 = 0010 1101\nInvert: 1101 0010\nAdd 1:  1101 0011`}</code></pre>

          <p><strong>Shortcut method:</strong> From the rightmost bit, copy all bits up to and including the first 1; flip all remaining bits to the left.</p>
          <p><em>Example:</em> <code>0101 1000</code> → copy <code>1000</code> → flip remaining → <strong>1010 1000</strong></p>

          <p><strong>Converting two&apos;s complement to denary:</strong></p>
          <ul>
            <li>If MSB = 0: sum the column values as normal (positive number).</li>
            <li>If MSB = 1: the MSB contributes −128 (for 8-bit). Sum all column values, applying −128 to bit 7.</li>
          </ul>
          <p><em>Example:</em> <code>1110 0111</code> = (−128) + 64 + 32 + 4 + 2 + 1 = <strong>−25</strong></p>

          <p><strong>Key advantage over one&apos;s complement and sign-magnitude:</strong> Two&apos;s complement has only one representation of zero, and the same addition algorithm works for both positive and negative operands, requiring no special-case logic in hardware.</p>

          <h3>One&apos;s Complement</h3>
          <p>One&apos;s complement represents a negative number by inverting all bits of its positive equivalent.</p>
          <p><em>Example:</em> +72 = <code>0100 1000</code> → one&apos;s complement of −72 = <code>1011 0111</code></p>
          <p><strong>Limitation:</strong> Produces two representations of zero (<code>0000 0000</code> and <code>1111 1111</code>), and arithmetic does not work cleanly without correction. Two&apos;s complement replaced it in all modern hardware.</p>

          <div className={styles.keyTakeaway} role="note">
            <strong>Key Takeaway — 1.1.2</strong>
            <ul>
              <li>Four encoding systems are tested: unsigned binary, hexadecimal, BCD, and two&apos;s complement — the same 8-bit pattern produces a different denary value in each.</li>
              <li>Two&apos;s complement: the MSB carries weight −2ⁿ⁻¹; the 8-bit range is −128 to +127; any number with MSB = 1 is negative.</li>
              <li>BCD converts each decimal digit independently into 4 bits — denary 27 becomes 0010 0111, not the binary value 00011011.</li>
              <li>One nibble (4 bits) encodes exactly one hexadecimal digit or one BCD digit.</li>
            </ul>
          </div>

          {/* ── 1.1.3 ─────────────────────────────────────── */}
          <h2 id="s1-1-3">1.1.3 Number Base Conversion</h2>

          <p>Converting integer values between binary, denary, hexadecimal, and BCD is a core Paper 1 skill. The conversion methods are demonstrated within §1.1.2; this section provides a consolidated quick-reference.</p>

          <table className={styles.table} aria-label="Number base conversion methods summary">
            <thead><tr><th>From</th><th>To</th><th>Method</th><th>Example</th></tr></thead>
            <tbody>
              <tr><td>Binary</td><td>Denary</td><td>Sum column weights where bit = 1</td><td><code>01101001</code> = 64+32+8+1 = <strong>105</strong></td></tr>
              <tr><td>Denary</td><td>Binary</td><td>Repeated subtraction from highest power, or repeated division by 2</td><td>107 → <code>01101011</code></td></tr>
              <tr><td>Binary</td><td>Hex</td><td>Group into nibbles from the right; convert each 4-bit group to one hex digit</td><td><code>1011 1110</code> → <strong>BE</strong></td></tr>
              <tr><td>Hex</td><td>Binary</td><td>Expand each hex digit to 4 bits</td><td><code>45A</code> → <code>0100 0101 1010</code></td></tr>
              <tr><td>Hex</td><td>Denary</td><td>Multiply each digit by 16 to its positional power, sum</td><td>A3 = 160+3 = <strong>163</strong></td></tr>
              <tr><td>Denary</td><td>Hex</td><td>Repeated division by 16; remainders right-to-left</td><td>241 → <strong>F1</strong></td></tr>
              <tr><td>Denary</td><td>BCD</td><td>Convert each decimal digit independently to 4-bit code</td><td>964 → <code>1001 0110 0100</code></td></tr>
              <tr><td>BCD</td><td>Denary</td><td>Read each 4-bit group as a separate decimal digit</td><td><code>0010 0111</code> → <strong>27</strong></td></tr>
              <tr><td>Denary (negative)</td><td>Two&apos;s complement</td><td>Write positive in binary; invert all bits; add 1</td><td>−45 → <code>1101 0011</code></td></tr>
              <tr><td>Two&apos;s complement</td><td>Denary</td><td>MSB contributes −2ⁿ⁻¹; sum remaining column weights</td><td><code>1110 0111</code> → <strong>−25</strong></td></tr>
            </tbody>
          </table>

          <div className={styles.keyTakeaway} role="note">
            <strong>Key Takeaway — 1.1.3</strong>
            <ul>
              <li>The same 8-bit pattern produces different denary values depending on the encoding: <code>00100111</code> is 39 in unsigned binary, 27 in BCD, and +39 in two&apos;s complement (positive because MSB = 0).</li>
              <li>Binary ↔ hex conversion is always a nibble-by-nibble transcription — no arithmetic required.</li>
              <li>BCD ↔ denary conversion treats each decimal digit independently — the whole number is never converted as a single binary value.</li>
              <li>Two&apos;s complement negation: invert all bits, add 1. Reversal: apply −2ⁿ⁻¹ weight to MSB and sum the rest.</li>
            </ul>
          </div>

          {/* ── 1.1.4 ─────────────────────────────────────── */}
          <h2 id="s1-1-4">1.1.4 Binary Addition and Subtraction</h2>

          <p>Binary arithmetic is tested in Paper 1 through worked addition and subtraction examples where marks are awarded for showing carries. Overflow — the error produced when a result exceeds the representable range — is a separate examinable concept and must be explained in terms of the bit width, not described only as &ldquo;the number is too large.&rdquo;</p>

          <h3>Binary Addition Rules</h3>
          <table className={styles.table} aria-label="Binary addition truth table">
            <thead><tr><th>Bit A</th><th>Bit B</th><th>Carry in</th><th>Sum</th><th>Carry out</th></tr></thead>
            <tbody>
              <tr><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
              <tr><td>0</td><td>1</td><td>0</td><td>1</td><td>0</td></tr>
              <tr><td>1</td><td>0</td><td>0</td><td>1</td><td>0</td></tr>
              <tr><td>1</td><td>1</td><td>0</td><td>0</td><td>1</td></tr>
              <tr><td>1</td><td>1</td><td>1</td><td>1</td><td>1</td></tr>
            </tbody>
          </table>

          <p>Work column by column from right to left, propagating carries.</p>
          <p><em>Example:</em> Add 10110000 and 00011011</p>
          <pre><code>{`  carry:  1 1 1 1\n          1 0 1 1 0 0 0 0\n        + 0 0 0 1 1 0 1 1\n        = 1 1 0 0 1 0 1 1`}</code></pre>
          <p>Result: <strong>11001011</strong></p>

          <p>Correct binary addition produces no error when the result stays within the representable range. When two numbers of the same sign produce a result whose MSB is inconsistent with that sign, the addition circuit has generated an incorrect result — this is overflow.</p>

          <h3>Overflow</h3>
          <div className={styles.callout}>
            <strong><a href={`${g}#overflow`}>Overflow</a></strong> occurs when the result of a binary addition or subtraction cannot be represented in the number of bits available.
          </div>

          <p>In 8-bit two&apos;s complement arithmetic:</p>
          <ul>
            <li>Adding two <strong>positive</strong> numbers that produce a result greater than +127 → the MSB becomes 1, producing a negative result (incorrect).</li>
            <li>Adding two <strong>negative</strong> numbers that produce a result less than −128 → the MSB becomes 0, producing a positive result (incorrect).</li>
            <li>Adding a positive and a negative number <strong>never</strong> causes overflow.</li>
          </ul>

          <p><strong>Detection:</strong> If the carry into the MSB differs from the carry out of the MSB, overflow has occurred.</p>

          <p><em>Example of overflow:</em> Add 82 (<code>01010010</code>) + 69 (<code>01000101</code>)</p>
          <pre><code>{`  carry: 1 1\n         0 1 0 1 0 0 1 0   (82)\n       + 0 1 0 0 0 1 0 1   (69)\n       = 1 0 0 1 0 1 1 1`}</code></pre>
          <p>Result is <code>1001 0111</code>, which in two&apos;s complement = −105. The correct denary answer is 151, which exceeds the 8-bit maximum of +127. This is an overflow error.</p>

          <table className={styles.table} aria-label="Overflow conditions for 8-bit two's complement addition">
            <thead><tr><th>Addition type</th><th>Overflow possible?</th></tr></thead>
            <tbody>
              <tr><td>Positive + Positive → Negative result</td><td><strong>Yes — overflow</strong></td></tr>
              <tr><td>Negative + Negative → Positive result</td><td><strong>Yes — overflow</strong></td></tr>
              <tr><td>Positive + Negative (any result)</td><td>No</td></tr>
            </tbody>
          </table>

          <h3>Binary Subtraction</h3>
          <p>Computers perform subtraction using two&apos;s complement: to calculate A − B, compute A + (−B), where −B is the two&apos;s complement of B.</p>
          <p><strong>Method:</strong></p>
          <ol>
            <li>Convert the subtrahend (B) to two&apos;s complement (its negative form).</li>
            <li>Add A and the two&apos;s complement of B.</li>
            <li>Discard any carry beyond the allocated bit width.</li>
          </ol>

          <p><em>Example:</em> Calculate 95 − 68 using 8-bit binary</p>
          <pre><code>{`95 = 0101 1111\n68 = 0100 0100 → two's complement: invert → 1011 1011 → add 1 → 1011 1100\n\n  0101 1111   (95)\n+ 1011 1100   (−68)\n= 1 0001 1011`}</code></pre>
          <p>Discard carry → <strong>0001 1011</strong> = 16 + 8 + 2 + 1 = 27 ✓</p>

          <p><em>Example (negative result):</em> Calculate 49 − 80</p>
          <pre><code>{`49 = 0011 0001\n80 = 0101 0000 → two's complement: 1011 0000\n\n  0011 0001   (49)\n+ 1011 0000   (−80)\n= 1110 0001`}</code></pre>
          <p><code>1110 0001</code> = −128 + 64 + 32 + 1 = <strong>−31</strong> ✓</p>

          <div className={styles.keyTakeaway} role="note">
            <strong>Key Takeaway — 1.1.4</strong>
            <ul>
              <li>Binary addition: carry is propagated left; 1 + 1 = 10 in binary (sum 0, carry 1); 1 + 1 + carry 1 = 11 (sum 1, carry 1).</li>
              <li>Overflow in 8-bit two&apos;s complement: positive + positive → negative result, or negative + negative → positive result — both indicate a result outside −128 to +127.</li>
              <li>Subtraction is performed by adding the two&apos;s complement of the subtrahend; any carry beyond the MSB is discarded.</li>
              <li>Detection rule: if carry into MSB ≠ carry out of MSB, overflow has occurred.</li>
            </ul>
          </div>

          {/* ── 1.1.5 ─────────────────────────────────────── */}
          <h2 id="s1-1-5">1.1.5 Practical Applications of BCD and Hexadecimal</h2>

          <p>Binary is the native encoding for all processor arithmetic, but two situations call for a different representation: displaying or storing individual decimal digits without conversion errors (BCD), and presenting binary data to humans in a shorter, readable form (hexadecimal). Paper 1 questions ask for specific applications with justifications — generic answers do not earn marks.</p>

          <h3>Applications of BCD</h3>
          <p>BCD is used when a system must process or display individual decimal digits accurately.</p>

          <figure>
            <figcaption className={styles.figCaption}>Table 2 — Practical applications of BCD with justifications required by Cambridge mark schemes.</figcaption>
            <table className={styles.table} aria-label="Practical applications of BCD">
              <thead><tr><th>Application</th><th>Why BCD is preferred</th><th>Example</th></tr></thead>
              <tbody>
                <tr>
                  <td>Electronic calculators and digital displays</td>
                  <td>Decimal digits map directly to display segments; conversion between denary and BCD is simpler than converting from pure binary</td>
                  <td>7-segment LED display showing digit 3</td>
                </tr>
                <tr>
                  <td>Digital clocks and watches</td>
                  <td>Time values are inherently decimal (hours 0–23, minutes 0–59); BCD avoids binary-to-decimal conversion for each display update</td>
                  <td>Real-time clock IC storing 14:35</td>
                </tr>
                <tr>
                  <td>Banking and financial systems</td>
                  <td>Binary floating-point arithmetic cannot represent all decimal fractions exactly (e.g. 0.1 has no exact binary representation); BCD ensures monetary values are stored without accumulated rounding errors</td>
                  <td>£0.37 stored without precision loss</td>
                </tr>
                <tr>
                  <td>BIOS — date and time storage</td>
                  <td>Conversion to and from denary for display is straightforward; no arithmetic operations are needed on the raw values</td>
                  <td>BIOS storing date 2026-04-26</td>
                </tr>
              </tbody>
            </table>
          </figure>

          <p><strong>Why BCD is not used universally:</strong> Each BCD digit uses 4 bits to represent only 10 values (0–9); the remaining 6 codes (1010–1111) are wasted. Pure binary is more storage-efficient for arithmetic computation.</p>

          <h3>Applications of Hexadecimal</h3>
          <p>Hexadecimal is preferred when humans need to read, write, or verify binary data. One hex digit represents exactly 4 binary bits, so any binary value converts to a shorter hex representation. An 8-bit value such as <code>10110101</code> is error-prone to copy; <code>B5</code> is not.</p>

          <table className={styles.table} aria-label="Practical applications of hexadecimal">
            <thead><tr><th>Application</th><th>Example</th></tr></thead>
            <tbody>
              <tr><td>Memory dumps — displaying raw memory contents for debugging</td><td>Address 00A4: <code>B5 A4 1A FC</code></td></tr>
              <tr><td>HTML/CSS colour codes</td><td><code>#FF0000</code> (red), <code>#00FF00</code> (green)</td></tr>
              <tr><td>MAC addresses</td><td><code>AA:BB:CC:DD:EE:FF</code> (48 binary digits = 12 hex)</td></tr>
              <tr><td>URL encoding — non-standard characters in web addresses</td><td>Space = <code>%20</code>; copyright sign = <code>%C2%A9</code></td></tr>
              <tr><td>Assembly language — opcodes and memory addresses</td><td><code>LDA #$B5</code></td></tr>
            </tbody>
          </table>

          <p><strong>Memory dump example:</strong></p>
          <table className={styles.table} aria-label="Memory dump example showing hex and binary contents">
            <thead><tr><th>Address</th><th>Hex contents</th><th>Binary equivalent</th></tr></thead>
            <tbody>
              <tr><td><code>00A4</code></td><td><code>B5</code></td><td><code>1011 0101</code></td></tr>
              <tr><td><code>00A5</code></td><td><code>A4</code></td><td><code>1010 0100</code></td></tr>
              <tr><td><code>00A6</code></td><td><code>1A</code></td><td><code>0001 1010</code></td></tr>
              <tr><td><code>00A7</code></td><td><code>FC</code></td><td><code>1111 1100</code></td></tr>
            </tbody>
          </table>

          <div className={styles.keyTakeaway} role="note">
            <strong>Key Takeaway — 1.1.5</strong>
            <ul>
              <li>BCD is preferred where decimal precision is required: financial systems, digital displays, and real-time clocks — accepted exam answers require a specific application, not a generic claim of accuracy.</li>
              <li>Hexadecimal is preferred where humans must read, write, or verify binary data: memory dumps, HTML/CSS colour codes, MAC addresses, and URL encoding.</li>
              <li>One hex digit represents exactly 4 bits; this makes hex-to-binary conversion an error-free transcription rather than an arithmetic calculation.</li>
              <li>BCD uses 4 bits per decimal digit and wastes 6 codes (1010–1111); pure binary requires fewer bits to represent the same numeric range.</li>
            </ul>
          </div>

          {/* ── 1.1.6 ─────────────────────────────────────── */}
          <h2 id="s1-1-6">1.1.6 Character Sets and Encoding</h2>

          <p>Every character stored by a computer is represented as a binary number. A character set is the agreed mapping between characters and their binary codes — without a shared standard, the same binary pattern would be interpreted as a different character on different systems. Paper 1 regularly tests the differences between ASCII, extended ASCII, and Unicode in terms of bit width, capacity, and language coverage.</p>

          <div className={styles.callout}>
            A <strong><a href={`${g}#character-set`}>character set</a></strong> is a defined mapping between binary codes and human-readable characters. Each character is assigned a unique binary code. A standard character set is necessary so that different hardware and software systems interpret the same binary code as the same character.
          </div>

          <h3>ASCII (American Standard Code for Information Interchange)</h3>
          <ul>
            <li><strong>Bit width:</strong> 7 bits</li>
            <li><strong>Capacity:</strong> 2⁷ = 128 unique codes (0–127)</li>
            <li><strong>Coverage:</strong> English letters (uppercase and lowercase), digits 0–9, punctuation, and 32 control codes (codes 0–31)</li>
          </ul>

          <p><strong>Key patterns in the ASCII table:</strong></p>
          <table className={styles.table} aria-label="Key ASCII codes for letters, digits and space">
            <thead><tr><th>Character</th><th>Denary code</th><th>Binary</th></tr></thead>
            <tbody>
              <tr><td><code>&apos;A&apos;</code></td><td>65</td><td><code>0100 0001</code></td></tr>
              <tr><td><code>&apos;Z&apos;</code></td><td>90</td><td><code>0101 1010</code></td></tr>
              <tr><td><code>&apos;a&apos;</code></td><td>97</td><td><code>0110 0001</code></td></tr>
              <tr><td><code>&apos;z&apos;</code></td><td>122</td><td><code>0111 1010</code></td></tr>
              <tr><td><code>&apos;0&apos;</code></td><td>48</td><td><code>0011 0000</code></td></tr>
              <tr><td><code>&apos;9&apos;</code></td><td>57</td><td><code>0011 1001</code></td></tr>
              <tr><td>Space</td><td>32</td><td><code>0010 0000</code></td></tr>
            </tbody>
          </table>

          <p><strong>Uppercase/lowercase relationship:</strong> Bit 5 (the sixth bit from the right) changes from 0 (uppercase) to 1 (lowercase). Example: &apos;A&apos; = <code>0100 0001</code>; &apos;a&apos; = <code>0110 0001</code>. This makes case conversion a single bit flip.</p>
          <p><strong>Character groups are sequential:</strong> digit codes 48–57, uppercase codes 65–90, and lowercase codes 97–122 are contiguous, which enables efficient range checks.</p>
          <p><strong>Limitation:</strong> ASCII covers only English characters and cannot represent accented letters, non-Latin scripts, or symbols from other languages.</p>

          <h3>Extended ASCII</h3>
          <ul>
            <li><strong>Bit width:</strong> 8 bits</li>
            <li><strong>Capacity:</strong> 2⁸ = 256 unique codes (0–255)</li>
            <li><strong>Coverage:</strong> All 128 standard ASCII codes plus accented letters (é, ü), currency symbols (£, ¥), mathematical operators, and drawing characters</li>
          </ul>
          <p><strong>Limitation:</strong> The 128 extra codes (128–255) are not standardised across implementations, causing incompatibility between systems. Unicode replaces both with a single mapping that covers every written language.</p>

          <h3>Unicode</h3>
          <div className={styles.callout}>
            <strong><a href={`${g}#unicode`}>Unicode</a></strong> was created to provide a universal character encoding standard covering all world languages and symbol systems.
            <ul>
              <li><strong>Minimum bit width:</strong> 16 bits</li>
              <li><strong>Capacity:</strong> 65,536 (2¹⁶) to over 1,100,000 characters depending on encoding</li>
              <li><strong>Coverage:</strong> All major writing systems, mathematical symbols, emoji, and private-use characters</li>
            </ul>
          </div>

          <table className={styles.table} aria-label="Unicode encoding formats UTF-8, UTF-16, UTF-32">
            <thead><tr><th>Unicode encoding</th><th>Byte width</th><th>Typical use</th></tr></thead>
            <tbody>
              <tr><td>UTF-8</td><td>1–4 bytes (variable)</td><td>Web standard; ASCII-compatible for English text</td></tr>
              <tr><td>UTF-16</td><td>2 or 4 bytes</td><td>Windows operating system internals</td></tr>
              <tr><td>UTF-32</td><td>4 bytes (fixed)</td><td>Internal processing; high memory overhead</td></tr>
            </tbody>
          </table>

          <p><strong>The first 128 Unicode code points are identical to ASCII.</strong> A plain ASCII file is therefore valid UTF-8.</p>

          <h3>ASCII vs Unicode Comparison</h3>

          <figure>
            <figcaption className={styles.figCaption}>Table 3 — ASCII, Extended ASCII and Unicode feature comparison. Past paper questions W22/11 Q1(c) and S24/13 Q1(d) have used this table directly.</figcaption>
            <table className={styles.table} aria-label="Comparison of ASCII, extended ASCII and Unicode character sets">
              <thead><tr><th>Feature</th><th>ASCII</th><th>Extended ASCII</th><th>Unicode</th></tr></thead>
              <tbody>
                <tr><td>Bits per character</td><td>7</td><td>8</td><td>16–32 (variable)</td></tr>
                <tr><td>Number of characters</td><td>128</td><td>256</td><td>143,000+</td></tr>
                <tr><td>Language support</td><td>English only</td><td>Western European (partial)</td><td>All world languages</td></tr>
                <tr><td>Emoji support</td><td>No</td><td>No</td><td>Yes</td></tr>
                <tr><td>Modern usage</td><td>Legacy systems</td><td>Legacy systems</td><td>Universal web standard</td></tr>
              </tbody>
            </table>
          </figure>

          <p><strong>Similarity:</strong> Both ASCII and Unicode assign each character a unique binary code; the first 128 Unicode characters are the same as ASCII.</p>
          <p><strong>Differences (exam-ready):</strong></p>
          <ul>
            <li>Unicode allocates up to 32 bits per character; ASCII uses 7 bits — Unicode can represent a wider range of characters.</li>
            <li>Unicode supports characters from all languages; ASCII is limited to English.</li>
            <li>A Unicode file for the same English text requires more storage than an equivalent ASCII file (when using UTF-16/UTF-32).</li>
          </ul>

          <div className={styles.keyTakeaway} role="note">
            <strong>Key Takeaway — 1.1.6</strong>
            <ul>
              <li>ASCII: 7 bits, 128 characters, English only. Extended ASCII: 8 bits, 256 characters, adds Western European characters, but no universal standard for the extra 128 codes.</li>
              <li>Unicode: minimum 16 bits, 143,000+ characters, covers all world writing systems; the first 128 Unicode code points are identical to ASCII.</li>
              <li>Exam similarity mark: both ASCII and Unicode assign each character a unique binary code.</li>
              <li>Exam difference marks: Unicode uses more bits per character than ASCII; Unicode supports all languages while ASCII supports only English; a Unicode-encoded English file uses more storage than the equivalent ASCII file (UTF-16/UTF-32).</li>
            </ul>
          </div>

          {/* ── SYLLABUS COVERAGE ──────────────────────────── */}
          <section id="syllabus-coverage" aria-labelledby="syllabus-heading" className={styles.syllabusSection}>
            <h2 id="syllabus-heading">Syllabus Coverage</h2>
            <ul>
              <li>✅ 1.1.1 Binary magnitudes and prefixes (kibi/kilo, mebi/mega, gibi/giga, tebi/tera) — <strong>Covered</strong></li>
              <li>✅ 1.1.2 Number systems (binary, denary, hexadecimal, BCD, one&apos;s complement, two&apos;s complement) — <strong>Covered</strong></li>
              <li>✅ 1.1.3 Number base conversion (integer values between bases/representations) — <strong>Covered</strong></li>
              <li>✅ 1.1.4 Binary addition and subtraction (positive and negative integers, overflow) — <strong>Covered</strong></li>
              <li>✅ 1.1.5 Practical applications of BCD and hexadecimal — <strong>Covered</strong></li>
              <li>✅ 1.1.6 Character sets and encoding (ASCII, extended ASCII, Unicode) — <strong>Covered</strong></li>
            </ul>
          </section>

        </main>

        <aside className={styles.rightSidebar} aria-label="Key glossary terms">
          <GlossarySidebar topic={topic} />
        </aside>
      </div>
  );
}
