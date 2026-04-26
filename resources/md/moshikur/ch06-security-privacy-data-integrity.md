# Chapter 06: Security, Privacy and Data Integrity

Sources:
- https://moshikur.com/as-level/as-ch06-security-privacy-and-data-integrity/6-1-data-security/
- https://moshikur.com/as-level/as-ch06-security-privacy-and-data-integrity/6-2-data-integrity/

---

## 6.1 Data Security

### 6.1.1 Key Definitions

| Term | Definition | Focus |
|---|---|---|
| **Security** | Protecting data from unauthorised access, damage, or loss | Keeps data safe from threats |
| **Privacy** | Ensuring only authorised users can view personal data | Controls who sees information |
| **Integrity** | Ensuring data remains accurate and unaltered | Keeps data correct and consistent |

**Key distinction:** A system can be secure but still violate privacy (too many authorised users), or protect privacy but lack integrity (data altered without detection).

---

### 6.1.2 Threats to Data and Systems

#### Malware (Malicious Software)

Software designed to harm systems, steal data, or enable unauthorised access.

**Viruses**
- Attaches to files/programs and activates when opened
- Can delete/corrupt files, crash systems, spread across networks

**Spyware**
- Secretly gathers user information (browsing history, keystrokes, passwords, card data)
- Runs silently in the background; causes identity theft risk and system slowdown

#### Hackers

Individuals attempting unauthorised access to systems, networks, or data.

**Methods:** brute-force attacks, password cracking, software vulnerability exploitation, packet sniffing.

**Consequences:** data theft/loss, privacy violations, financial loss, legal liability, reputation damage.

#### Phishing

Tricks users into revealing sensitive information through fake emails or websites that appear to come from trusted sources. Uses urgency tactics ("account locked in 24 hours"). A form of **social engineering**.

#### Pharming

Redirects users from legitimate websites to fake ones even when the correct URL is typed, by manipulating DNS records or modifying host files. Unlike phishing, **no fake email is required** — the URL appears correct.

#### Data Interception During Transmission

Data travels as packets that can be captured using packet sniffing tools, especially on public or unsecured Wi-Fi.

**Mitigation:** HTTPS, VPN, avoid sensitive transmissions on unknown networks.

#### Social Engineering

Manipulates **people** (rather than systems) into revealing information or granting access — no technical hacking tools required.

**Tactics:** impersonating IT support/authority figures, artificial urgency, tailgating into secure areas, pretexting (inventing fake scenarios).

---

### 6.1.3 Security Measures

#### User Authentication

Verifying identity before granting access.

**Usernames and passwords**
- Must be strong (mixed case, numbers, symbols), kept secret, changed regularly
- Account lockout after repeated failures

**Biometric methods**
- Fingerprint, retina, iris, face, or voice recognition
- Advantages: unique, hard to replicate; Disadvantages: expensive, environmentally sensitive

**Two-Factor Authentication (2FA)**
- Requires: something you **know** (password) + something you **have** (phone/token)
- One-time SMS codes, authenticator apps, or hardware security keys
- Protects even if password is compromised

#### Access Rights (Permissions)

| Permission | Access Level |
|---|---|
| Read-only | View files; cannot modify or delete |
| Read/Write | Open, modify, save, and delete |
| Execute | Run programs |

Role-based examples: admin (full access), editor (content changes), viewer (read-only).

#### Firewalls

Controls data flow between a computer/network and the internet.

**Packet filtering:** inspects packets against rules (source/destination IP, protocol, port) and blocks non-conforming traffic.

Prevents: unauthorised remote connections, malware exfiltration, unapproved application access.

#### Anti-virus and Anti-spyware Software

Detects, prevents, and removes malicious software.

**Detection methods:**
- **Signature-based** — compares against database of known malware signatures
- **Heuristic analysis** — detects suspicious behaviour patterns (catches new/unknown threats)

**Actions:** quarantine, delete, repair infected files. Also scans email and blocks phishing websites.

#### Encryption

Converts data into a coded format unreadable without the correct decryption key.

| Type | Description |
|---|---|
| Symmetric | Same key used for both encryption and decryption |
| Asymmetric | Public key encrypts; private key decrypts |

**In transit:** HTTPS encrypts browser-server communication.

**At rest:** encrypted files on a lost/stolen device remain unreadable without the key.

---

### Security Measures Summary

| Measure | Type | Function | Threat Addressed |
|---|---|---|---|
| User authentication | Procedural | Confirms identity | Unauthorised access |
| Access rights | Procedural | Controls user capabilities | Data breach, unauthorised modification |
| Firewalls | Technical | Filters network traffic | Hackers, malware transmission |
| Anti-virus/Anti-spyware | Technical | Detects/removes malware | Viruses, spyware, trojans |
| Encryption | Technical | Encodes data | Interception, unauthorised reading |

---

## 6.2 Data Integrity

### 6.2.1 Purpose of Validation and Verification

**Data integrity** ensures data remains accurate, consistent, and reliable throughout its lifecycle.

**Validation** — checks whether data entered meets specific rules before being accepted (prevents unreasonable entries).

**Verification** — ensures data entered or transferred matches the original source (doesn't confirm correctness, only accuracy of copying).

| Aspect | Validation | Verification |
|---|---|---|
| Purpose | Ensures sensible/acceptable data | Matches data to original source |
| Timing | During entry | During entry or transmission |
| Example | "Age must be 0–120" | Password confirmation (double entry) |

---

### 6.2.2 Data Validation Methods

| Check | Description | Example |
|---|---|---|
| **Range check** | Value falls between min and max | Age 0–120, marks 0–100 |
| **Format check** | Data matches a required pattern | Date as DD/MM/YYYY, email address |
| **Length check** | Correct number of characters | PIN = 4 digits, password ≥ 8 chars |
| **Presence check** | Required field is not empty | Name field must be filled |
| **Existence check** | Value exists in a related table/file | Student ID must exist before marking |
| **Limit check** | Value does not exceed a specific boundary | Order quantity ≤ 50 |
| **Check digit** | Extra digit calculated from other digits to detect entry errors | ISBN, barcode, national IDs |

**Pseudocode example (range check):**
```
IF Mark < 0 OR Mark > 100 THEN
    OUTPUT "Invalid mark. Must be between 0 and 100."
ELSE
    OUTPUT "Mark accepted."
ENDIF
```

---

### 6.2.3 Data Verification Methods

**Visual check** — human manually compares entered data against the original source. Slow and prone to human error.

**Double entry** — data entered twice; both copies compared. If different, rejected.

```
IF FirstEntry = SecondEntry THEN
    OUTPUT "Data verified successfully."
ELSE
    OUTPUT "Entries do not match. Please try again."
ENDIF
```

---

### 6.2.4 Verification During Data Transfer

#### Checksum

A value calculated from the binary content of the data before sending. Receiver performs the same calculation; matching values confirm accurate transfer.

Detects: bit flips, corrupt packets, incorrect lengths.

#### Parity Check (Byte Parity)

An extra **parity bit** is added to each byte to make the total number of 1s either even (even parity) or odd (odd parity).

| Data (7-bit) | 1s Count | Parity Bit (even) | Transmitted (8-bit) |
|---|---|---|---|
| 1010001 | 3 | 1 | 10100011 |
| 1110001 | 4 | 0 | 11100010 |
| 0000000 | 0 | 0 | 00000000 |

Detects single-bit errors; **cannot correct** them.

#### Block Parity (Two-Dimensional Parity)

Adds parity bits to both rows AND columns of a data grid. Can **detect and locate** a single-bit error by identifying the intersecting row and column.

**Benefits:** more robust than byte parity; locates errors.

**Limitations:** cannot detect all multi-bit errors; requires extra overhead bits.
