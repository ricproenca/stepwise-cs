# CAIE Computer Science IGCSE — Chapter ?: Unknown Chapter

---

1) Match the following terms with the definitions (a-c): 

|Data integrity|b|
|---|---|
|Dataprivacy|c|
|Data security|a|



a - ensures data is available to those who need it, but unable to be accessed by those without the required authorisation/credentials/permission 

- b - data that is accurate, complete, consistent and up-to-date 

c - ensures that the data is not shared with unauthorised third parties or used in unauthorised ways 


![](images/unit_9_-_security,_privacy_&_data_integrity_answers/img_001.png)


- 2) What might be stipulated by a data protection law - what could happen if a company/individual broke these laws? 

- Data collection - what data can be collected 

- Data use - for what purposes the data is used for 

- Data access - users can access/modify/request company’s remove their data 

Failing to adhere to these requirements could result in fines, users suing the company, criminal charges against those responsible, reputation damange to the company etc 

## 3) Can you have data integrity and data privacy without data security? Why or why not? 

No - since if the data can be accessed by those without permission, by definition, the data is not private. Likewise, if others can access the data, they can modify it, hence data integrity would be broken. 

- 4) List 6 different types of threat to a computer system (i.e. broad categories, not individual types of malware)? 


![](images/unit_9_-_security,_privacy_&_data_integrity_answers/img_002.png)


Malware 

Personal mistakes 

Social engineering Natural disasters 

Malicious insider - e.g. spurned employee or a paid insider Software/hardware bugs 

5) Why is it important for companies to backup their systems in different geographical locations? 

Since if data in one location is lost/unavaible - due to natural disasters, war, political decisions/regulations etc - then at least the company should be able to access their data in the other location 

- 6) Explain how each of the following can help protect a company’s computer systems: 

Firewall: can inspect and block both incoming and outgoing packets to/from the network based on: 

- Contents/file types (may require deep-packet inspection) 

- IP address (sender & receiver – e.g. block certain sites, known VPN/proxy IP addresses) 

- Port number (remote & local – block e.g. SMTP or FTP port) 

- Protocol (e.g. block/slow all BitTorrent packets) 

- Patterns (e.g. quantity of packets, patterns that indicate data is being sent by automated process - e.g. regular time intervals) 

Anti-virus software: will scan files when downloaded/requested by user/at regular intervals against its database of known malware - if a match is found, the file can be quarentined and then manually removed by the user. Additionally, heuristic analysis is also common - e.g. opening and modifying lots of files, sending huge amounts of network traffic, using various keyboard input/clipboard APIs etc can all be possible signs of malware - a good anti-virus software should be able to detect these signs via static analysis of the source code and in real-time too 

Access-based roles: create user groups and give different groups different permissions in terms of what folders/files they can view/edit/delete, what software/programs they can use, what database relations/views they can see/edit etc. For example, someone in the accounting department should probably have access to a completely different set of files/programs/database relations than someone in the research department, for example 

Employee training: teach employees about the signs/risks of malware/phishing/pharming/social engineering etc and how they can prevent themselves becoming a victim of such an attack 

## 7) What 2 words is “malware” derived from? Malicious software 

## 8) Define the following types of malware and give a brief example/explanation of their operation 

Virus: tries to replicate itself inside other executable code - might also contain unwanted behaviour like deleting files etc Worm: runs independently and transfers itself to other networks hosts - this makes it harder for companies to recover, if all their devices are infected - hence why they should have a good, remote backup policy on a different network Logic bomb: stays inactive until a condition is met - e.g. all activating on a certain date, if a specific piece of software is installed, if accessing the Internet from a specific IP range, if having/not having a certain langauge pack installed etc 

Trojan horse: attaches itself as part of a useful program - e.g. an popular, open-source project can be cloned, the malicious code added and can be distributed to people, with them thinking it was the original, safe program 

Spyware: collects information and transmits it to another system - keyloggers, clipboard stealers/hijackers, recording webcam/audio feeds etc 

Bot: takes control of computer and uses it to launch attacks - DDoS or using to sell as a VPN/proxy 

## 9) Why is it important for a user to make sure their anti-virus software is up-to-date? 

Since anti-virus programs use a database of known malware which they can try to detect and remove - if the database isn’t udpated, then some new/previously unknown malware won’t be able to be detected by it. A newer version is also likely to have more advanced features, bug fixes etc 

## 10) Consider the following malware - which categories would each belong to: 

A: a hacktivist group has a grudge against a particular company - they create a malware that once infected one computer on the network, will attempt to spread to all others on the network. On the 1[st] June, all infected computers should simultaneously start sending mass amounts of traffic to the target company’s servers 

Worm & logic bomb 

B: a government forces a company in their country to include malicious code as part of a worldwide update. Once the update is installed, the malicious code will check its IP and - if in the range of the foreign military/government - will attempt to steal confidential information such as plans for military equipment, internal communication, future missions etc 

## Logic bomb & spyware 

C: malware is developed that will be sent as a phishing email as part of a malicious .xlsx file - a pharming link to harvest user credentials will also be included. Once the .xlsx file is opened, it will begin encrypting user files and deleting backups - once the files are encrypted, it will ask for payment via cryptocurrency in order to give the user the decryption key to decrypt their files 

Ransomware - spread via phishing (social engineering) 

## 11) What is a DoS? How does a DDoS expand on this? 

Denial of service attack - sending mass traffic/requests to a server/series of servers in the goal of overwhelming them, hence making them unable to serve legitimate requests, since they’re too busy handling this bogus requests. 

A DDoS is the same, but rather than the attack coming from one device, it will come from many devices simultaneously that the hacker controls as part of a botnet - when the hacker sends the command to attack, all devices will start simultaneously sending requests to the target server(s) 

12) Suppose you have a clean copy of program.exe and a version which you think might be infected - explain how you could confirm whether the 2[nd] version was identical to the first (i.e. clean) using hashing 

Run the file through a hashing algorithm like md5 or sha256 - if the programs are identical, the hash digest will be the same - if the programs are different, the hash digest will be different 

13) Define the following more specific types of malware, which the book also lists: 

Boot-sector virus: infects the part of the drive (HDD, SSD etc) that contains code used when the drive starts up (partition tables, file format data etc) - this type of malware can be difficult to detect and remove, without completely wiping the drive 

Macro virus: some software like office programs allow the user to embed code within them to perform legitimate extra functionality - for example, VB code can be added Excel files. Naturally, since this code can read the file system, download files, execute commands via the terminal, detect user input etc, then it is possible for malicious functionality to be included - often, these files might be sent as part of a phishing campaign via malicious email attachments 

Ransomware: a program that encrypts files on your drive, then demands ransom money often in the form of crypto currency payments for the user to access the decryption key and hence regain their original files 

Keylogger: will listen for user key presses, then either saves a file (if the hacker has physical access to the machine) or transmits this data over the network - the hacker can then search through the logs looking for sequences of strings potentially in the format of email addresses, credit card numbers, passwords, phone numbers etc 

14) Explain the terms “phishing” and “pharming”, giving an example of how they could be used with communication such as email/SMS/social media/messaging apps etc 

Phishing - sending users emails/text messages (etc) often pretending to be from another company/person - will usually be combined with a pharming attack to steal their personal information/have the user reveal sensitive company information etc Pharming - misleading/redirecting users to fake websites with the intention of e.g. collecting user credentials, credit card information etc - can be achieved via DNS cache poisoining, domain spoofing etc 


![](images/unit_9_-_security,_privacy_&_data_integrity_answers/img_003.png)


## 15) Write 5 characteristics of a strong password: 

8 or more characters 

Upper & lower case Contains numbers Contains special characters Is random - doesn’t contain common words/personal information etc 

16) What is a dictionary brute-force attack against a password? Why would it then be a bad idea to use personal information in your password - name, hometown, date of birth etc? 

Brute-force attack: trying every possible password combination - e.g. “a” to “ZZZZZZZZZZ…” 

Dictionary brute-force attack: since most users don’t have passwords of completely random characters (since that’s hard to remember), they often use real words, including words that a personal to them like names, places, dates, things they like etc - for example, an attacker could try combinations like “apple”, “Apple”, “apple1”, “@pple” and so on - these attacks will still have a success rate and are much faster than trying every possible string combination of the set of characters the hacker has defined 

As a result, it’s therefore bad to use this personal information in your password - this is particularly true for high-profile individuals (who might be victims of spear phishing) where a lot of this personal information is available online, or even for normal people if they e.g. have this personal information on their social media etc 

17) Why is it a bad idea to use the same password for every website/app, even if said password might be extremely strong? 

Since if one account is comprimised, the hacker can hence try the same email/username and password combination on all your other sites - this can be especially bad if they get access to your email account, since they can then probably reset/change your passwords for all your other sites/apps - hence why two-factor authentication is recommended 

18) Why should companies ensure that sensitive user data such as passwords or credit card details are encrypted (or more specifically, salted & hashed) in their database? 

Since if a hacker (or even employee acting maliciously) wanted to see the passwords, they wouldn’t be able too - hashing is a oneway function that means that from the output, there should be no obvious/easy way of going back to the original input. Salting is used to prevent against “rainbow table” attacks 

19) Briefly explain how a buffer overflow is caused and what this vulnerability can lead to 

In some programming languages, memory is managed by the programmer - if the program defines e.g. 10 bytes of memory for a string, but the user types in 20 bytes, the length of the string(/array etc) is not checked, this data can then overwrite other parts of the processes memory - which could be modifying data or even overwriting instructions to execute their own malicious instructions instead 

20) From a security standpoint, why is important to make sure your operating system and software are up-to-date? 

To ensure the OS/software has the latest security updates, so that hackers can’t exploit known vulnerabilities of previous versions of given software 

21) Define the following terms: system clone and “hot site” 

System clone: an exact copy of the production system - programs, data, environment variables etc Hot site: a system clone that is running 24/7 on standby, ready to immediately be used if there are problems with the main system 

22) You previously worked for a small, 9-5 company, where updates were performed in the evening or on weekends - you now work for a large company that requires >99.9% uptime - suggest a way the system could be updated to avoid downtime in the following situations: 

a: the company has its main server and an identical server that is unused 

Update the unused server to the main server’s state, test the updates are working, then switch traffic from the main server to this other server 

b: the company runs on 5 servers, with users load-balanced between each (i.e. 20% of requests will be assigned to each server) Remove 1 server from the active pool - i.e. requests are balanced between 4 servers now. Update this one server, ensure these updates are working, then add it back to the active pool of servers. Repeat this process, taking one server offline while the other 4 remain up for the other 4 servers 

23) Define the terms: 

Authentication: a user or device proving its identity - e.g. based on something they know, are or have 

Authorisation: a user or device being given permissions to perform a specific task 

24) Give an example of the use of both authentication and authorisation in operating systems 

An example of authentication is the initial login screen with username/password/biometric methods of authentication often supported. Some software like crypto wallets or expensive/critical commercial software might also require a hardware key in order to use too. 

An example of authorisation could be a user having permission to view/edit a specific file or folder 

25) For each of the following, write whether it is an example of authentication or authorisation: 

a: a website asking for a username and password - authentication 

b: a RFID card used to access a hotel room or restricted area - authorisation 

c: the “do you want to run this program as an administrator” message on Windows - authorisation 

d: an app requiring users to enter a confirmation code sent via email or SMS - authentication 

e: a computer/phone/device that requires some kind of biometric scan to login - authentication 

f: a soldier typing in the launch codes for a (nuclear) missile - authorisation 

Note: many of these you could consider to be both authentication & authorisation 

26) These days, multi-factor authentication is becoming more common - this could comprise of something you know, have or are. 

27) List at least 3 methods of authentication for the following strategies: 

Something you know: password, PIN code, secret question 

Something you are: fingerprint, iris or facial recognition/scan 

Something you have: phone (SMS verification), hardware token/key, smart card 

28) Briefly explain how a digital signature works and explain how it could be used to verifiy the identity of someone - e.g. the sender of a message, uploaded of a file, owner of a website etc 

Hashing: 

- The sender's data (message, file, etc.) is processed through a hash function to generate a unique fingerprint (hash value). 

Signing with Private Key: 

- The sender signs (encrypts) the hash using their private key. This creates the digital signature. 

## Sending the Message/File: 

- The original data and the digital signature are sent together. 

Verification by the Receiver: 

- The receiver verifies the signature using the sender’s public key, recovering the original hash. 

- The receiver also hashes the received data and compares it to the decrypted hash. 


![](images/unit_9_-_security,_privacy_&_data_integrity_answers/img_004.png)


- If both hashes match, the message is authentic and unaltered. 

## 29) How does an intrusion system work to flag suspicious activity? 

The intrusion detection system will first run on the sytem for a period of time (e.g. 2-4 weeks) to view the typical behaviour - access times, data transfer, amount of open files etc - this will set a baseline of expected typical behaviour. If in future, there is behaviour that is anamlous - e.g. someone logging in at 3AM in the morning from a different country, this would be flagged as suspicious activity for a network administrator to investigate 

## 30) List 3 causes of data loss/corruption 

- Hackers/malware 

- Natural disaster 

- Device turning off while performing file operation - e.g. due to powercut 

- User mistake - accidentally deleting or forgetting a file’s location 

- Software bugs 

- Theft 

- 31) Explain the difference between a full backup and incremental backup 

Full backup: entire system copied and backed up, regardless of which files have changed - slow, but reliable (entire system is available in each backup) 

Incremental backup: full backup is first performed, then in subsequent backups, only files that changed are backed up - faster, uses less storage than full backup and should be able to restore any state, providing there was no issue with any of the previous incremental backups 

32) Good backup procedure includes having multiple copies of the same backup across multiple locations. If backing up in the cloud, it is important to backup with several companies to avoid vendor lock-in (e.g. not being able to easily switch if they increase fees) or worse, data loss if the company closes/goes bankrupt/is destroyed etc. Storage mediums such as hard disk drives are usually appropriate, although if long-term archival (potentially hundreds of years) is required, then magnetic tape could be used. Data centers in fireproof buildings with sprinkler systems and built in areas with a low risk of natural disasters should also be chosen. 

33) What is disk mirroring? Should this ever be used as the sole-solution, or are backups still required? 

Disk mirroring involves creating a disk that is identical to the main disk - every change on disk A also occurs on disk B in real-time. While this allows disk B to be quickly swapped in place of disk A if disk A fails, there is also the issue that any malicious/accidental change/ccoruption on disk A will also occur on disk B - for example, if disk A is infected with malware that modifies a large number of files, this same issue will now occur on disk B - hence why backups at various points in time are recommend, so that a previous point in time when the disks were clean can be restored 

34) Data validation is used to check the data seems reasonable. It alone can’t guarantee the data is actually correct. Complete the table giving the definition and some example code in programming language or pseudocode 

|Check|Definition|Example|
|---|---|---|
|type|Ensure variable or data is of the specified data type|IS_NUM(“123”) - can be used in pseudocode to ensure a<br>variable is safe to convert with NUM_TO_STR|
|range|Ensure value is between a lower and upper bound|IF score >= 0 AND score <= 100 THEN|
|format|Ensure data adheres to a specified rule/pattern|e.g. ensuring a date is in the form DD/MM/YYYY (can be<br>done with LENGTH,MID,IS_NUM|
|length|Ensure data is a minimum or maximum length|IF LENGTH(password)>= 8 THEN|
|presence|Ensure data has been entered|IF Name = “” THEN|



|existance|Ensures data is in a whitelist of allowed values|e.g. imaging a set of classes:<br>CASE OF subject<br>“maths”, “physics”, “computer science”: …<br>OTHERWISE: …<br>ENDCASE|
|---|---|---|
|limit|Ensure data doesn’t exceed a value OR that it’s not<br>smaller than a value - i.e.just one half of a range check|IF age < 0 THEN|
|consistency|Ensure the data is logically consistent|Imagine booking a flight - we would want to ensure<br>OutboundDate <= ReturnDate|
|uniqueness|Ensure this value hasn’t been entered before - e.g. in a<br>database|Could use a search method like linear search or<br>databasequery|



35) As stated, data validation can ensure the data seems reasonable, but it can’t ensure the data is actually correct - to ensure (or at least improve) the odds of the data actually being correct, data verification is required 

36) In each of these data entry (pre-transmission) situations, list a method of data verification: 

a: ensuring the user entered their email correctly - double-entry/email cod verification 

b: ensuring the user entered their phone number correctly - double-entry/SMS verification 

c: checking the user didn’t mistype their password when signing up - double entry/check 

d: a secretary entering personal details for a particular client - double entry/visual check 

e: a librarian entering a book number into their system or user typing in their credit card number - check digit/double entry/visual check 

37) Let’s now consider data verification once the data has been transmitted from A to B - the receiver can use a method such as the following to check the integrity of what they receive - explain how each method works: 

Checksum: the receiver runs their data/file through a checksum algorithm (you can try with MD5, SHA-256 etc online) to generate the checksum value (binary number or string) - the same input data will always result in the same output checksum. The sender then sends both the original data and the checksum to the recipient who will then run the data through the same checksum algorithm - if they get the same checksum value as the sender sent, then they know no data corruption has occurred - if the calculated checksum is different from that which the sender send, then there has been some data corruption 

Parity checks/parity bytes: in a single parity check, data is broken down into e.g. 7-bit groups, with an additional parity bit that will be calculated and added. If even parity is used, then the total number of 1s in both the 7 bits and the parity bit have to be even, while if odd parity is used, they have to be odd. For example, assume even parity is used and we have 3 1s in our 7 data bits - we hence need to make the parity bit 1 as well, to give us an even number (4) of 1s overall. 

A parity block check extends this by grouping the data into e.g. 7x7 grids with the parity bit for each row being calculated as usual and an additional parity byte being calculated by taking the parity of the columns, creating an 8x8 grid overall. The intersections of parity errors can tell us which bit has corrupted, hence this allows automatic error correction - e.g. if using even parity, but both row 2 and column 6 have an odd number of 1s, then we know the bit in row 2, column 6 is the corrupted bit, hence we can change it 

## 38) Odd parity was used for this transmission. Locate the error 

||Paritybit|Bit 2|Bit 3|Bit 4|Bit 5|Bit 6|Bit 7|Bit 8|
|---|---|---|---|---|---|---|---|---|
|Byte 1|0|1|0|0|1|0|0|1|
|Byte 2|0|0|1|1|1|1|1|0|
|Byte 3|1|0|0|0|0|1|1|0|
|Byte 4|1|0|1|1|0|0|0|0|
|Byte 5|1|1|1|0|1|1|1|0|
|Byte 6|0|1|0|0|0|1|0|1|
|Byte 7|1|0|0|0|1|1|1|1|
|Paritybyte|1|0|0|0|1|0|1|0|



