# CAIE Computer Science IGCSE — Chapter ?: Unknown Chapter

---

## 1) List 5 operating systems 

## 2) Complete the table, giving a definition and/or examples for each feature of an operating system 


![](images/unit_8_-_system_software_homework/img_001.png)




3) There are two main types of user-interface - a __________-___ interface, abbreviated CLI, in which the user is presented with a terminal/console and has to type commands to the operating system directly. These commands could be things such as ls (list files), cp (copy), mv (move), mkdir (make directory), ipconfig etc. 

Errors or suggestions - contact me https://pseudocode.pro/contact 

These interfaces are powerful, since they might provide more options than in another type of interface, although they are __________ for regular users, since they have to remember many commands in their head. CLIs are well-suited for devices that will run in the ‘background’ - e.g. web servers, since these interfaces use a small amount of _________. 

In the 1970s, ___________ ____ interfaces - or GUIs - were introduced. This is what most regular users use today GUIs feature buttons, input fields, dropdown menus etc. These are ____ for the user to use, in comparison to CLIs, although they may have ______ options available and use ____ memory. 

4) Operating systems will include an API - application programming interface - for example the Windows API (https://learn.microsoft.com/en-us/windows/win32/apiindex/windows-api-list). This includes procedures to create a new form in the Windows style (with the minimise, maximise & close button), connect to WiFi, access the user clipboard (what the user copied), search the filesystem etc. Why do you think operating systems provide these APIs to programmers? 

5) In the context of processes, what does scheduling mean? 

6) What is a time-slice for a running process? 

7) Memory management includes memory protection, organisation and optimisation. Memory protection makes sure each running process has _______ memory addresses - i.e. no two processes should ever share the same memory address. This could lead to data being ___________, security vulnerabilities or malicious programs being able to access another process’ data - potentially passwords, credit card details etc. 

Memory is organised according to either _______ or ______________ - the first is where memory is split into fixed size - e.g. 4KB pages, while the second uses dynamic sized segments to store processes. If memory becomes too full, then the hard drive/SSD can be used as temporary memory for pages/segments to be swapped in/out - using secondary storage as temporary memory is called _______ memory Finally, memory use should be optimised - this can include compaction of memory (analogous to defragmentation) or making decisions about which processes should be swapped in/out of memory. 

8) The operating system can be split into two parts - the low-level part which includes crucial tasks such as reading/writing from/to a device, networking, scheduling, resource management etc is called the _______. The higher-level part of the OS - for example, built-in user programs like an anti-virus, pre-installed office software, a web browser etc is called ‘user space’ 

9) Device management mainly concerns itself with the _____________ of new device drivers - this usually happens when the device is first _____________ to the computer. The OS will then management the connection and communication between itself and the peripheral device, interrupts etc 

Errors or suggestions - contact me https://pseudocode.pro/contact 

10) File management includes support for the basic file ___________ - creating, deleting, moving, renaming, copying etc files. To do this, a file _______ such as FAT32, NTFS must be chosen - this will also store metadata about the file - for example, the path, date created, permissions, size etc. These ______________ dictate which users are allowed to read/modify/create/delete files/folders respectively 

11) Suppose we have a 10GB file - moving it from C:/folderA to C:/folderB is effectively instantaneous - while moving from C:/folderA to D:/folderB takes around 1 minute - why is this? 

12) Why is it possible for you - or someone else - to sometimes recover a file even after you have ‘deleted’ it? 

13) Security management is concerned with data ____________ - for example backups, storing previous versions of files etc. Prevention of ____________ access is also supported, as are user accounts and permissions - for example, requiring a __________ or biometric scan to allow the user to login. Files/folders can also be given different _____________ for different users, as mentioned previously. Privacy is also an aspect of security management and these days, many operating systems come with a basic ____-_____ such as Windows Defender 

14) Sometimes, errors might occur - this could be in both the user __________ or low-level ______ of the operating system itself. These high-level user errors often aren’t critical and the OS can usually simply ____ the process and continue operating as normal. The OS might provide information about the exception - for example, a memory dump or even error code. In contrast, an exception occurring in the operating system itself is more serious and it’s often not possible for the OS to continue operating safely (for example, data ___________ could occur) - in this situation, the OS needs a way of safely terminating processes and _________ ____ the computer with loss or corruption of data. 

15) Define the phrase “utility software” and give a definition/explanation of how the following utility software work: 


![](images/unit_8_-_system_software_homework/img_002.png)




Errors or suggestions - contact me https://pseudocode.pro/contact 

Compression software Anti-virus 




16) Does flash memory like SSDs, USBs suffer from fragmentation - why or why not? 

17) A company has a large amount of data they want to backup - what storage mediums could they consider using? Justify your answer 

18) An employee suggests using the cloud for backup - give 3 reasons for and 3 reasons against this idea 

19) Would file compression software use lossy or lossless compression - would it depend on the filetype or user choice? 

20) A student has to submit their project containing data, reports, images, videos etc to their university - they are required to compress (e.g. as a .zip, .tar, .7z, .rar) the file before uploading - give 3 reasons why they are required to do this 

21) Some apps like WeChat/Whatsapp will compress images/videos - e.g. sending you a 100KB version, while the original 3MB version will be stored on their servers - why do they do this? 

22) Anti-virus programs aim to both detect and remove malware - explain how an anti-virus program is able to determine whether a file is malicious or not, mentioning an anti-virus program’s database, heuristic and behavioural detection methods 

- 23) Explain why it is important for software to be regularly updated 

Errors or suggestions - contact me https://pseudocode.pro/contact 

- 24) Explain why it is important for anti-virus programs to be regularly updated 

## 25) What is a program library and what are the advantages of using one? 




## 26) Complete the following table about static & dynamic linking: 


![](images/unit_8_-_system_software_homework/img_003.png)




30) Many languages now create an ___________ code (“byte code”) - Java, Python and C# are examples. In the case of Java, it operates by the “write once, run anywhere” philosophy - this is achieved since when you 

Errors or suggestions - contact me https://pseudocode.pro/contact 

run a program - say my_program.java - it is _________ into bytecode (stored in the my_program.class file) - this class file can then be given to anyone that has a Java _________ machine (JVM) installed on their system - i.e. there will be different JVMs for different processor families/operating systems, but these can run by __________ the same Java bytecode. This is in contrast to compiled/assembled programs, which are processor/OS-specific 

31) Assume you have a program with 3 lines - assume there is a syntax error on line 2. What would happen if you tried to compile this program vs what would happen if you tried to run it with an interpreter? 


![](images/unit_8_-_system_software_homework/img_004.png)


32) List 3 advantages of using a compiler and 3 advantages of using an interpreter 

33) A specific language has both interpreters and compilers available for it - a colleague suggests using an interpreter during development and a compiler during deployment - why might they suggest this? 




34) What is an IDE and what are 5 features it might contain? 

35) Define the following terms: 

Debugging: 

Breakpoint: 

Single-stepping: 

Report window: 

Errors or suggestions - contact me https://pseudocode.pro/contact 

