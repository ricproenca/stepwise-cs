# 06 Security, privacy and data integrity

**Course:** Cambridge International AS & A Level Computer Science (9618)
**Source:** Thinka

---

Welcome to Chapter 6: Security, Privacy, and Data Integrity!
6.1 Data Security
6.2 Data Integrity
Welcome to Chapter 6: Security, Privacy, and Data Integrity!

Hello future computer scientists! This chapter is incredibly important because it moves beyond how computers *work* and focuses on how we keep our data *safe* and *correct*. In a world where everything is online, understanding security, privacy, and integrity is not just academic—it's essential life knowledge.

Don't worry if some of the terms sound technical. We will break them down using clear explanations and examples that you encounter every day. Let's make sure you ace this topic!

6.1 Data Security
Understanding the Core Concepts: SPI

Before we dive into the technical measures, we need to clearly define three terms that students often mix up:

1. Data Security

Data Security refers to the protection of data and the systems that store it from unauthorised access, modification, or destruction. It's about keeping the bad guys out.
Example: Locking a sensitive customer database using passwords and firewalls.

2. Data Privacy

Data Privacy refers to the right of individuals to control how their personal information is collected, used, and shared. It ensures that only necessary data is collected and used ethically.
Example: Ensuring that a company cannot sell your email address to advertisers without your explicit permission.

3. Data Integrity

Data Integrity ensures that data is accurate, complete, consistent, and reliable throughout its lifecycle. It means the data hasn't been accidentally or maliciously altered.
Example: If a student's grade is recorded as 'A', it must remain 'A' unless a specific, authorised change is made. If a transmission error changes it to 'G', integrity is lost.

Security Threats from Networks and the Internet

Computer systems, especially those connected to networks and the internet, face constant dangers. These threats usually fall into two categories: intentional (malicious attacks) and unintentional (errors).

Malware (Malicious Software)

Malware is software designed specifically to disrupt, damage, or gain unauthorised access to a computer system.

Virus: Attaches itself to legitimate programs and replicates itself, causing damage or corruption.
Spyware: Secretly monitors user activity (like keystrokes or websites visited) and reports this data back to a third party.
Unauthorised Access and Social Engineering
Hackers: Individuals who gain unauthorised access to computer systems, often exploiting weaknesses in software or security measures.
Phishing: A type of social engineering where an attacker disguises themselves as a trustworthy entity (like a bank or a well-known company) in an electronic communication to trick the user into revealing sensitive information (like passwords or credit card numbers).
Analogy: Phishing is like fishing with bait (a fake email) to catch a password.
Pharming: Redirects a user from a legitimate website to a fake one without their knowledge, even if they type the correct URL. This is often done by poisoning the DNS server cache.
Did you know? Pharming is more sophisticated than phishing because the user doesn't even need to click a suspicious link; their computer or network automatically sends them to the fraudulent site.

Quick Review: Restricting Risks
The core method to restrict risks posed by these threats is a combination of technical measures (like firewalls) and user education (to spot phishing emails).

Security Measures to Protect Systems and Data

We use a layered approach to protect both the computer system itself (e.g., the firewall) and the specific data stored within it (e.g., encryption).

1. Authentication and Access Control

These measures verify the identity of the user and control what that user is allowed to do.

User Accounts and Passwords: The most common method. Strong passwords use a mix of uppercase, lowercase, numbers, and symbols.
Authentication Techniques:
Biometrics: Using unique physical characteristics (fingerprints, iris scans) to verify identity.
Digital Signatures: Mathematical schemes used to verify the authenticity and integrity of a message or document. They prove the sender is who they claim to be and that the data hasn't been tampered with.
Access Rights: Determining which users or groups can read, write, modify, or delete specific files or resources.
2. System Protection Software
Firewall: A security barrier (hardware or software) that monitors and controls incoming and outgoing network traffic based on predefined security rules. It acts like a digital bouncer checking IDs at the door.
Anti-virus Software: Scans, detects, and removes or isolates known viruses and other malware.
Anti-spyware: Specifically designed to detect and remove programs that track user activity without consent.
3. Encryption

Encryption is the process of converting plaintext (readable data) into ciphertext (unreadable, scrambled data) using an algorithm and a key, making it unusable to unauthorised parties.

If a hacker steals encrypted data, they only get the unreadable ciphertext.
The data can only be converted back to plaintext (decrypted) by someone holding the correct key.

Key Takeaway for 6.1
Security is about protection from external threats (Hackers, Malware) using tools like Firewalls and Encryption. Privacy is about controlling personal data use. Integrity is about ensuring data accuracy.

6.2 Data Integrity

As established, Data Integrity means the data is accurate and valid. We achieve this primarily through two distinct processes: Data Validation and Data Verification.

Data Validation vs. Data Verification

This is a crucial distinction!

Data Validation

Validation checks if the data entered is *reasonable* and *adheres to predefined rules*. It checks the input against established constraints. It does not guarantee the data is correct, only that it is acceptable.
Analogy: Checking if an entered phone number has 10 digits (Validation), but not checking if it belongs to the person you intended to call (Verification).

Data Verification

Verification checks if the data entered into the computer *matches* the original source data. It ensures accuracy during transcription or transfer.

Methods of Data Validation

These checks are built into software to flag incorrect input immediately.

Range Check: Checks that a number falls within a specified minimum and maximum value.
Example: A mark entry must be between 0 and 100.
Limit Check: Checks against a single maximum or minimum value.
Example: Age must be greater than or equal to 18 (minimum limit).
Format Check: Checks that the data is in the correct type or pattern.
Example: A date must be entered as DD/MM/YYYY.
Length Check: Checks that the data contains the required number of characters.
Example: A password must be at least 8 characters long.
Presence Check: Ensures that a field is not left blank (i.e., data must be present).
Example: The 'Surname' field cannot be empty.
Existence Check: Checks that entered data already exists in a file or database.
Example: When logging in, the User ID entered must exist in the list of valid users.
Check Digit: A mathematical calculation performed on the original numeric data (like a barcode or ISBN) to generate one or two extra digits. This final digit is then re-calculated when the data is entered, and if the results don't match, the data entry is invalid.
Example: Used widely on credit card numbers and product barcodes to catch input errors.

Struggling Student Tip: Remember the mnemonic: Really Fine Lunch Provides Every Check. (Range, Format, Length, Presence, Existence, Check Digit).

Methods of Data Verification (During Data Entry)

These methods ensure the data was typed correctly from the source document.

Visual Check (or Proofreading): A manual check where a person compares the data entered on screen with the original source document.
Double Entry: Data is typed into the system twice, usually by two different operators or programs. The computer then compares the two entries, and any difference flags an error requiring manual checking.
Methods of Data Verification (During Data Transfer)

Data can be corrupted when transmitted across networks. Verification methods are used to detect these transmission errors.

1. Parity Check

A Parity Check adds a single bit (the parity bit) to a byte of data to ensure that the total number of '1's in the byte is either always even (Even Parity) or always odd (Odd Parity).

How it works (Even Parity example):

If the data byte is 10100010 (3 ones, which is odd), the parity bit is set to 1. The full byte becomes 101000101 (4 ones, now even).

If the data byte is 11000010 (3 ones, which is odd), the parity bit is set to 1. The full byte becomes 110000101 (4 ones, now even).

Byte Parity: Checks parity for each individual byte transmitted.
Block Parity: Checks parity across a large block of bytes (using horizontal and vertical checks) to identify exactly where a single error might have occurred.

Common Mistake: Parity checks can only detect an odd number of errors (1, 3, 5, etc.). If 2 bits are flipped during transmission, the parity remains correct, and the error goes undetected.

2. Checksum

A Checksum involves treating a block of data (multiple bytes) as a large number and summing them up.

Process:
1. The sender calculates the sum of all the bytes in the data block.
2. This sum (the checksum) is sent along with the data block.
3. The receiver calculates the sum of the received data block.
4. If the receiver's calculated sum matches the sender's checksum, the data integrity is verified.
Checksums are more robust than simple parity checks because they can often detect multiple errors within a block of data.

Key Takeaway for 6.2
Validation checks if data is sensible (Range, Format). Verification checks if data is transcribed accurately (Double Entry, Parity Check). Both are essential for maintaining data integrity.

Ready to test yourself?

Turn these notes into exam-style practice. Get unlimited AI questions on this topic with instant marking and explanations.

Practice This Topic
More Computer Science (9618) chapters
Information representation
Communication
Hardware
Processor Fundamentals
System Software
Ethics and Ownership

* The content provided by thinka is generated by AI and may not always be accurate or up-to-date. Please use it as a supplementary resource and verify with official materials.

Put These Notes into Practice

Reading the notes is a great start. Now practise with unlimited AI-generated questions and get instant feedback. 100,000+ students are already improving their grades.

Start Practising Now
View Pricing