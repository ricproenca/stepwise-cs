# CAIE Computer Science IGCSE — Chapter ?: Unknown Chapter

---

1) Match the following terms with the definitions (a-c): 

Data integrity Data privacy Data security 

a - ensures data is available to those who need it, but unable to be accessed by those without the required authorisation/credentials/permission 

b - data that is accurate, complete, consistent and up-to-date 

c - ensures that the data is not shared with unauthorised third parties or used in unauthorised ways 


![](images/unit_9_-_security,_privacy_&_data_integrity_homework/img_001.png)


2) What might be stipulated by a data protection law - what could happen if a company/individual broke these laws? 

- 3) Can you have data integrity and data privacy without data security? Why or why not? 

4) List 6 different types of threat to a computer system (i.e. broad categories, not individual types of malware)? 

5) Why is it important for companies to backup their systems in different geographical locations? 

6) Explain how each of the following can help protect a company’s computer systems: 

Firewall: 

Anti-virus software: 

Access-based roles: 


![](images/unit_9_-_security,_privacy_&_data_integrity_homework/img_002.png)


Employee training: 

- 7) What 2 words is “malware” derived from? 

- 8) Define the following types of malware and give a brief example/explanation of their operation 

Virus: 

Worm: 

Logic bomb: 

Trojan horse: 

Spyware: 

Errors or suggestions - contact me https://pseudocode.pro/contact 

Bot: 

9) Why is it important for a user to make sure their anti-virus software is up-to-date? 

10) Consider the following malware - which categories would each belong to: 

A: a hacktivist group has a grudge against a particular company - they create a malware that once infected one computer on the network, will attempt to spread to all others on the network. On the 1[st] June, all infected computers should simultaneously start sending mass amounts of traffic to the target company’s servers 

B: a government forces a company in their country to include malicious code as part of a worldwide update. Once the update is installed, the malicious code will check its IP and - if in the range of the foreign military/government - will attempt to steal confidential information such as plans for military equipment, internal communication, future missions etc 

C: malware is developed that will be sent as a phishing email as part of a malicious .xls file - a pharming link to harvest user credentials will also be included. Once the .xls file is opened, it will begin encrypting user files and deleting backups - once the files are encrypted, it will ask for payment via cryptocurrency in order to give the user the decryption key to decrypt their files 

11) What is a DoS? How does a DDoS expand on this? 




12) Suppose you have a clean copy of program.exe and a version which you think might be infected - explain how you could confirm whether the 2[nd] version was identical to the first (i.e. clean) using hashing 

13) Define the following more specific types of malware, which the book also lists: 

Boot-sector virus: 

Macro virus: 


![](images/unit_9_-_security,_privacy_&_data_integrity_homework/img_003.png)


Ransomware: 

Keylogger: 

14) Explain the terms “phishing” and “pharming”, giving an example of how they could be used with communication such as email/SMS/social media/messaging apps etc 

15) Write 5 characteristics of a strong password: 

16) What is a dictionary brute-force attack against a password? Why would it then be a bad idea to use personal information in your password - name, hometown, date of birth etc? 

17) Why is it a bad idea to use the same password for every website/app, even if said password might be extremely strong? 

Errors or suggestions - contact me https://pseudocode.pro/contact 

18) Why should companies ensure that sensitive user data such as passwords or credit card details are encrypted (or more specifically, salted & hashed) in their database? 

19) Briefly explain how a buffer overflow is caused and what this vulnerability can lead to 


![](images/unit_9_-_security,_privacy_&_data_integrity_homework/img_004.png)


20) From a security standpoint, why is important to make sure your operating system and software are up-to-date? 

21) Define the following terms: system clone and “hot site” 

22) You previously worked for a small, 9-5 company, where updates were performed in the evening or on weekends - you now work for a large company that requires >99.9% uptime - suggest a way the system could be updated to avoid downtime in the following situations: 

a: the company has its main server and an identical server that is unused 

b: the company runs on 5 servers, with users load-balanced between each (i.e. 20% of requests will be assigned to each server) 

23) Define the terms: 

Authentication: 

Authorisation: 




24) Give an example of the use of both authentication and authorisation in operating systems 

25) For each of the following, write whether it is an example of authentication or authorisation: 

a: a website asking for a username and password 

b: a RFID card used to access a hotel room or restricted area 

c: the “do you want to run this program as an administrator” message on Windows 

d: an app requiring users to enter a confirmation code sent via email or SMS 

e: a computer/phone/device that requires some kind of biometric scan to login 

f: a soldier typing in the launch codes for a (nuclear) missile 

26) These days, multi-factor authentication is becoming more common - this could comprise of something you know, _____ or ____. 

27) List at least 3 methods of authentication for the following strategies: 

Something you know: 

Something you are: 

Something you have: 

28) Briefly explain how a digital signature works and explain how it could be used to verifiy the identity of someone - e.g. the sender of a message, uploaded of a file, owner of a website etc 

Errors or suggestions - contact me https://pseudocode.pro/contact 

29) How does an intrusion system work to flag suspicious activity? 

30) List 3 causes of data loss/corruption 

31) Explain the difference between a full backup and incremental backup 

32) Good backup procedure includes having ________ copies of the same backup across multiple ________. If backing up on the cloud, it is important to backup with ___________ companies to avoid vendor lock-in (e.g. not being able to easily switch if they increase fees) or worse, data loss if the company closes/goes bankrupt/is destroyed etc. Storage mediums such as 

_________________ are usually appropriate, although if long-term archival (potentially hundreds of years) is required, then ___________ _____ could be used. Data centers in fireproof buildings with sprinkler systems and built in areas with a ___ risk of natural disasters should also be chosen. 

33) What is disk mirroring? Should this ever be used as the sole-solution, or are backups still required? 

34) Data validation is used to check the data seems reasonable. It alone can’t guarantee the data is actually correct. Complete the table giving the definition and some example code in programming language or pseudocode 

|Check|Definition|Example|
|---|---|---|
|type|||
|range|||
|format|||
|length|||
|presence|||
|existance|||
|limit|||
|consistency|||
|uniqueness|||



35) As stated, data validation can ensure the data seems reasonable, but it can’t ensure the data is actually correct - to ensure (or at least improve) the odds of the data actually being correct, data ___________ is required 

36) In each of these data entry (pre-transmission) situations, list a method of data verification: 

a: ensuring the user entered their email correctly 

b: ensuring the user entered their phone number correctly 

c: checking the user didn’t mistype their password when signing up 

d: a secretary entering personal details for a particular client 

e: a librarian entering a book number into their system or user typing in their credit card number 

37) Let’s now consider data verification once the data has been transmitted from A to B - the receiver can use a method such as the following to check the integrity of what they receive - explain how each method works: 

Checksum: 

Parity checks/parity bytes: 

Automatic repeat request (ARQ): 

38) Odd parity was used for this transmission. Locate the error 

Errors or suggestions - contact me https://pseudocode.pro/contact 

||Paritybit|Bit 2|Bit 3|Bit 4|Bit 5|Bit 6|Bit 7|Bit 8|
|---|---|---|---|---|---|---|---|---|
|Byte 1|0|1|0|0|1|0|0|1|
|Byte 2|0|0|1|1|1|1|1|0|
|Byte 3|1|0|0|0|0|1|1|0|
|Byte 4|1|0|1|1|0|0|0|0|
|Byte 5|1|1|1|0|1|1|1|0|
|Byte 6|0|1|0|0|0|1|0|1|
|Byte 7|1|0|0|1|1|0|1|1|
|Byte 8|1|1|0|1|1|0|0|1|
|Byte 9|0|1|0|1|1|1|1|0|
|Paritybyte|0|0|0|0|1|1|0|1|
||||||||||




![](images/unit_9_-_security,_privacy_&_data_integrity_homework/img_005.png)


Errors or suggestions - contact me https://pseudocode.pro/contact 

