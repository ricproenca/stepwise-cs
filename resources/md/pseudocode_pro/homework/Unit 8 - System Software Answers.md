# CAIE Computer Science IGCSE — Chapter ?: Unknown Chapter

---

## 1) List 5 operating systems 

Windows, Mac, Linux (Ubuntu etc), iOS, Android 

## 2) Complete the table, giving a definition and/or examples for each feature of an operating system 

|Feature|Definition|
|---|---|
|User-system<br>interface|Allows the user to interact with the hardware via the operating system - e.g. creating files,<br>connecting to networks, writing & running programs etc. Provides way for user to input<br>data/commands and be presented with output (could be visual, audio etc)<br>Examples:<br>Command-line interface (CLI)<br>Graphical user interface(GUI)|
|Resource<br>management|Ensures processes get a fair allocation of system resources (CPU, network card, GPU,<br>memory) according to some scheduling algorithm - handles disputes when two processes are<br>tryingto access the same resource|
|Memory<br>management|Allocates memory to requesting processes<br>Ensures two processes don’t access the same memory address<br>Managespaging/segmentation/virtual memoryto allow efficient operation of the device|
|Device<br>management|Responsible for ensuring peripheral devices can communicate with CPU/OS<br>Establishes initial connection, implements communication protocols, stores device<br>information,installs device drivers,handlespermissions,interrupts etc|
|File<br>management|Creates & manages file allocation table, directory structure, drive format (FAT32, NTFS etc),<br>allows performing file operations - creating, copying, moving, renaming, deleting files etc<br>Establishes file namingconventions|
|Security<br>management|Provisions for data recovery (e.g. backups, previous versions etc)<br>Prevention of unauthorized access/intrusion - usernames/passwords/biometric login etc<br>Ensuring data privacy<br>Perhaps a basic anti-virus – e.g. Windows Defender<br>Perhaps e.g. ransomwareprotection/locked folders|
|Error<br>detection<br>&<br>recovery|Should interrupt a running process and provide error diagnostics/memory dumps where<br>appropriate. In critical cases, the OS should be able to shut down the system in a safe<br>manner,without loss of data|



3) There are two main types of user-interface - a command-line interface, abbreviated CLI, in which the user is presented with a terminal/console and has to type commands to the operating system directly. These commands could be things such as ls (list files & directories), cp (copy), mv (move), mkdir (make directory), ipconfig etc. These interfaces are powerful, since they might provide more options than in another type of interface, although they are complex for regular users, since they have to remember many commands in their head. CLIs are well-suited for processes that will run in the ‘background’ - e.g. web servers, since these interfaces use a small amount of memory. 

In the 1970s, graphical user interfaces - or GUIs - were introduced. This is what most regular users use today GUIs feature buttons, input fields, dropdown menus etc. These are easy for the user to use, in comparison to CLIs, although they may have limited options available and use more memory. 

4) Operating systems will include an API - application programming interface - for example the Windows API (https://learn.microsoft.com/en-us/windows/win32/apiindex/windows-api-list). This includes procedures to create a new form in the Windows style (with the minimise, maximise & close button), connect to WiFi, access the user clipboard (what the user copied), search the filesystem etc. Why do you think operating systems provide these APIs to programmers? 

Since implementing these features is hard/error-prone/takes a long time/requires specific knowledge of the underlying hardware etc. As a result, OS manufacturers create a simple way for programmers to access this functionality not only to make it easier for them, but also to increase their market share - more programmers would hence use and develop programs for it, therefore attracting more end users 

## 5) In the context of processes, what does scheduling mean? 

If many processes are trying to access system resources (e.g. the CPU), then the OS should ensure all processes are allocated fair usage - e.g. a round-robin scheduling algorithm could be used with a 100ms timeslice. This means all processes will be put in a circular queue - the first process will execute for 100ms, then the second process will execute for 100ms and so on - once the “end” of the queue is reached, the first process will execute again. Once processes complete, they will be removed from the queue 

## 6) What is a time-slice for a running process? 

The time allocated for each process to have access to the CPU, before its swapped out for the next process 

7) Memory management includes memory protection, organisation and optimisation. Memory protection makes sure each running process has unique memory addresses - i.e. no two processes should ever share the same memory address. This could lead to data being corrupted, security vulnerabilities or malicious programs being able to access another process’ data - potentially passwords, credit card details etc. 

Memory is organised according to either paging or segmentation - the first is where memory is split into fixed size - e.g. 4KB pages, while the second uses dynamic sized segments to store processes. If memory becomes too full, then the hard drive/SSD can be used as temporary memory for pages/segments to be swapped in/out - using secondary storage as temporary memory is called virtual memory 

Finally, memory use should be optimised - this can include compaction of memory (analogous to defragmentation) or making decisions about which processes should be swapped in/out of memory. 

8) The operating system can be split into two parts - the low-level part which includes crucial tasks such as reading/writing from/to a device, networking, scheduling, resource management etc is called the kernel. The higher-level part of the OS - for example, built-in user programs like an anti-virus, pre-installed office software, a web browser etc is called ‘user space’ 

9) Device management mainly concerns itself with the installation of new device drivers - this usually happens when the device is first connected to the computer. The OS will then manage the connection and communication between itself and the peripheral device, interrupts etc 

10) File management includes support for the basic file operations - creating, deleting, moving, renaming, copying etc files. To do this, a file format such as FAT32, NTFS must be chosen - this will also store metadata about the file - for example, the path, date created, permissions, size etc. These permissions dictate which users are allowed to read/modify/create/delete files/folders respectively 

11) Suppose we have a 10GB file - moving it from C:/folderA to C:/folderB is effectively instantaneous - while moving from C:/folderA to D:/folderB takes around 1 minute - why is this? 

Since moving a file on the same physical drive simply requires updating the file pointer in the file allocation table - while moving the file to another physical disk requires physically copying each bit of the data. This will be even slower if using e.g. a HDD, magnetic tape, optical storage etc 

12) Why is it possible for you - or someone else - to sometimes recover a file even after you have ‘deleted’ it? 

Since the data isn’t actually deleted on the drive - just the record in the file allocation table is deleted/those blocks are marked as available. Hence it will still be possible to access those file blocks, until another file is written to and overwrites this data 

13) Security management is concerned with data availability - for example backups, storing previous versions of files etc. Prevention of unauthorised access is also supported, as are user accounts and permissions - for example, requiring a password or biometric scan to allow the user to login. Files/folders can also be given different permissions for different users, as mentioned previously. Privacy is also an aspect of security management and these days, many operating systems come with a basic anti-virus such as Windows Defender 

14) Sometimes, errors might occur - this could be in both the user space or low-level kernel of the operating system itself. These high-level user errors often aren’t critical and the OS can usually simply kill the process and continue operating as normal. The OS might provide information about the exception - for example, a memory dump or even error code. In contrast, an exception occurring in the operating system itself is more serious and it’s often not possible for the OS to continue operating safely (for example, data corruption could occur) - in this situation, the OS needs a way of safely terminating processes and turning off the computer with loss or corruption of data. 

15) Define the phrase “utility software” and give a definition/explanation of how the following utility software work: 

|15) Define the phrase “utility software” and give a definition/explanation of how the following utility software<br>work:|15) Define the phrase “utility software” and give a definition/explanation of how the following utility software<br>work:|
|---|---|
|||
||Definition & operation|
|Disk formatters &<br>checkers|Ability to completely clear a disk<br>Set up filesystem (FAT32, NTFS) on disk – add file allocation table to map files to specific<br>memory locations<br>Ability to partition disk into logical drives (e.g. C:/, D:/) – could also use to run multiple<br>OS<br>Detect corrupted disk and attempt repair<br>Can also be used on e.g. USBs,not onlyhard drives/SSDs|
|Disk<br>defragmenters|Rearranges file blocks on a disk so they are stored contigously, which allows faster<br>read/write time on HDDs, since the r/w head doesn’t have to constantly move between<br>tracks/sectors to find the correct block of a fragmented file|
|Disk repair|Checks for errors on disk<br>Some errors result from physical defect (“bad sector”)<br>Other errors could be caused by e.g. loss of power during partial file save<br>Repair utility will mark “bad sectors”, so file system doesn’t try to access them<br>File recoverycan sometimes be attempted,if not,file will have to be deleted|
|Backup software|Creates copies of files in case of data loss/corruption - typical features include:<br>Setting up automatic backup schedule<br>Only creating backup when files have changed<br>Settingfiles to exclude from backup|
|Compression<br>software|Used to reduce the size of individual files or even compress entire directory structures<br>into a single file (.zip/.rar/.tar etc) - useful for backup (to reduce space) or when<br>transmitting files to others - e.g. to reduce transfer time/bandwidth & ensure files are<br>within file size limit(e.g. 25MB for email attachment limit)|
|Anti-virus|Repeatedly scans your system for malicious files based on its known database of existing<br>malware as well as suspicious heuristics/behaviour - e.g. if a program has some code<br>that is sending a request to a server in an infinite loop without any significant pause, this<br>could be an example of apotential(D)DoS attack|



## 16) Does flash memory like SSDs, USBs suffer from fragmentation - why or why not? 

No - since these formats are random access, hence blocks can be read from/written to in the same time regardless of the physical location on the drive - they don’t have to be stored contiguously for high performance like HDDs 

17) A company has a large amount of data they want to backup - what storage mediums could they consider using? Justify your answer 

Magnetic tape - can last 100s of years, extremely low data corruption rate, cheap, high capacity HDDs - high capacity, relatively cheap, widely available/doesn’t require specialist hardware to use 

18) An employee suggests using the cloud for backup - give 3 reasons for and 3 reasons against this idea 

## For: 

Remote - data is stored in a different physical location, hence more resilient to natural disaster/fires/theft than data all stored in one location 

Accessibility - employees can access backups from anywhere Scale - cloud company has huge amount of storage capacity available Security - possible reputable cloud company might have better security than our own company 

## Against: 

Expensive - if looking for long term backup, would be cheaper to buy backup hardware and for the company to manage the backups themselves. Transferring data out of cloud company can also be expensive - can get locked into a particular cloud company because of these high fees making it expensive to switch Privacy/trust - have to trust cloud company with potentially sensitive company data Speed - accessing backup over a network will probably be slower than a local backup 

19) Would file compression software use lossy or lossless compression - would it depend on the filetype or user choice? 

For general file compression algorithms/formats like zip/rar/tar etc, they would be lossless because the algorithm has to assume the user will probably want to decompress to get their original file back without data loss. This is true when compressing directories, text files etc - we don’t want some characters to be missing, since might change the meaning of the text 

For specialist compression algorithms - e.g. targeting specific formats like images, videos, executables etc - then it may be possible to use lossy techniques - often these might include a degree of compression, like jpg, which allows a compression level from 0-100% 

20) A student has to submit their project containing data, reports, images, videos etc to their university - they are required to compress (e.g. as a .zip, .tar, .7z, .rar) the file before uploading - give 3 reasons why they are required to do this 

## Reduce file size that needs to be stored on university servers 

Make it convenient for staff - they can transfer a single compressed folder, rather than huge numbers of individual files 

Reduced file size means faster downloads for staff when checking the files 

Many compression algorithms include checksums - hence staff can be sure they have received the student’s project without any data corruption 

21) Some apps like WeChat/Whatsapp will compress images/videos - e.g. sending you a 100KB version, while the original 3MB version will be stored on their servers - why do they do this? 

Use less bandwidth when transmitting from their servers to user’s device Faster for user to download 

Uses less storage space on end user’s device, yet still gives them the option of downloading the full version if they want 

22) Anti-virus programs aim to both detect and remove malware - explain how an anti-virus program is able to determine whether a file is malicious or not, mentioning an anti-virus program’s database, heuristic and behavioral detection methods 

The anti-virus program will scan files when downloaded, opened, when the user chooses to perform an antivirus scan or perhaps on a regular interval in the background - the anti-virus program will compare the program against its database of known viruses and if the program matches, it will be flagged as suspicious. Likewise, heuristic/behavioral anomalies can be detected and flag a program as suspicious - example behaviour could be opening, modifying and closing huge examples of files (possible ransomware), opening huge numbers and files and sending lots of outgoing Internet traffic (could be spyware) etc. An anti-virus program could try to determine this behaviour before the program runs by performing static analysis of the executable (machine code) instructions or when the program is running (less desirable, since some damage will have already been done at this point) 

## 23) Explain why it is important for software to be regularly updated 

If there are known bugs/security vulnerabilities in the software, these will hopefully be fixed in the next update - if someone is using an older version of software, they are therefore potentially more vulnerable, since hackers can target known vulnerabilities based on the version of the software they are using 

## 24) Explain why it is important for anti-virus programs to be regularly updated 

Since anti-virus programs compare files against a known database of existing malware, then if the database is regularly updated, it will have the most recent list of known malware, hence will be more likely to be able to detect - and hence quarantine/remove - malicious files 

## 25) What is a program library and what are the advantages of using one? 

- A library is pre-existing code/modules (written by others or yourself) designed to perform specific functions - advantages include: 

Libraries might include advanced functionality you don’t know how to program yourself 

- Saves time/money (for a company paying hourly wages), since the developer(s) can use the libraries, rather than coding it themselves 

- Popular libraries are often used by large numbers of people, hence bugs will hopefully get detected and patched 

- Popular libraries (e.g. for graphics) might by hyper-optimised for performance - while it would be difficult to create something as efficient yourself 

## 26) Complete the following table about static & dynamic linking: 

||Static|Dynamic|
|---|---|---|
|How it works|All the library code is compiled into object|The final executable contains references to|



||code and included along with theprogram<br>code in a single executable|required libraries - at runtime, the operating<br>system will try to locate them and load them<br>into RAM for the program to use|
|---|---|---|
|Advantages|<br>Simple to implement<br><br>Could<br>have<br>different<br>versions<br>of<br>libraries for each program, if required<br><br>Library included in .exe means it will<br>definitely be available<br><br>Tested<br>with current version,<br>hence<br>should work|<br>Lower file size<br><br>Less memory required in RAM due to<br>only 1 instance of library required<br><br>Easy to cache 1 library used by multiple<br>processes<br><br>If<br>library<br>updates,<br>program<br>will<br>automatically use new version<br><br>If manual update required, only 1<br>instance has to be updated|
|Disadvantages|<br>Larger file size<br><br>Multiple copies of same library might be<br>included in different running processes -<br>hence memory wastage<br><br>Entire program has to be updated if<br>new libraries are required (for new<br>features,<br>bug<br>fixes,<br>performance<br>improvements etc)|<br>If<br>a<br>library<br>file<br>is<br>comprised,<br>all<br>programs might potentially load this<br>malicious library (if integrity checks<br>weren’t included)<br><br>User might not have library on system<br><br>User might have wrong version of<br>library on system<br><br>Small increase in program startup time<br>due to requirement of OS to search for<br>libraries|



## 27) Complete the sentences below: 

Assemblers convert assembly code into machine code to produce an executable Compilers convert high-level code into machine code to produce an executable Interpreters execute high-level code statement-by-statement, without creating an executable file 

## 28) Explain how an interpreter operates 

- 1 - The interpreter program, the source code file and the data to be used by the source code program are all made available. 

- 2 - The interpreter program begins execution. 

- 3 - The first line of the source code is read. 

- 4 - The line is analysed. 

- 5 - If an error is found, this is reported and the interpreter program halts execution. 

- 6 - If no error is found, the line of source code is converted to an intermediate code. 

- 7 - The interpreter program uses this intermediate code to execute the required action. 

- 8 - The next line of source code is read and Steps 4–8 are repeated. 

## 29) Explain how a compiler operates 

- 1 - The compiler and the source code file are made available but no data is needed. 

- 2 - The compiler program begins execution. 

- 3 - The first line of the source code is read. 

- 4 - The line is analysed. 

- 5 - If an error is found this is recorded. 

- 6 - If no error is found the line of source code is converted to an intermediate code. 

- 7 - The next line of source code is read and Steps 4–7 are repeated. 

- 8 - When the whole of the source code has been dealt with one of the following happens: 

- If no error is found in the whole source code the complete intermediate code is converted into object code. 

- If any errors are found a list of these is output and no object code is produced 

30) Many languages now create an intermediate code (“byte code”) - Java, Python and C# are examples. In the case of Java, it operates by the “write once, run anywhere” philosophy - this is achieved since when you run a program - say my_program.java - it is “compiled” into bytecode (stored in the my_program.class file) - this class file can then be given to anyone that has a Java virtual machine (JVM) installed on their system - i.e. there will be different JVMs for different processor families/operating systems, but these can run by interpreting the same Java bytecode. This is in contrast to compiled/assembled programs, which are processor/OS-specific 

31) Assume you have a program with 3 lines - assume there is a syntax error on line 2. What would happen if you tried to compile this program vs what would happen if you tried to run it with an interpreter? 

A compiled program will fail to compile and the compiler will list the syntax error and its position, to allow the programmer to fix it easily. In contrast, an interpretter will execute line 1, then will crash on line 2, outputting the syntax error at runtime 

32) List 3 advantages of using a compiler and 3 advantages of using an interpreter 

## Compiler: 

- Programs have fast execution speed 

- You can be sure the program has no syntax errors - IDEs/compilers can also do many additional logic checks/static analysis of your code for potential issues too 

- End user only needs executable file - they don’t also need to have an interpreter installed 

- Harder to reverse engineer - i.e. protects intellectual property 

- Programs will use less memory (since a interpreter isn’t required to be running as well) 

## Interpreter: 

- “Easier to debug” - can fix errors/change variables/modules etc as the program is running/when an error occurs 

- Platform independent - the same source code for many interpreted languages can be run on many different operating systems/processor architectures, provided the end user has the correct interpreter for their system 

- Development time might be quicker - don’t need to wait for recompilation of executable after every change you make 

- More transparent to end user - they can inspect the source code, hence can make sure there is no unwanted/malicious behaviour 

33) A specific language has both interpreters and compilers available for it - a colleague suggests using an interpreter during development and a compiler during deployment - why might they suggest this? 

As above - interpreting can allow easier/faster development since errors detected as the program is running can be corrected with the new code (variables/modules etc) and without the time taken to recompile the entire program after each small change. In contrast, for deployment, a compiled approach ensures program execution speed will be faster, that the program doesn’t have any syntax errors, that the program will run, without the user needing to download additional software (i.e. the interpreter). Additionally, programs will use less memory since a running interpreter isn’t required and will also be harder for end users to reverse engineer, hence potentially stealing the company’s intellectual property 34) What is an IDE and what are 5 features it might contain? 

An IDE is an environment (program) that not only includes a code editor to write code, but also many additional features including: 

- Context-sensitive prompts/code suggestions 

- Syntax highlighting & dynamic syntax checks 

- Pretty-printing/auto-formatting 

- Debugging features - breakpoints, report window, single-stepping 

- Collapsable code blocks 

- AI code help 

## 35) Define the following terms: 


![](images/unit_8_-_system_software_answers/img_001.png)


Debugging: the process of trying to find and fix bugs - can be anything from adding output statements to see what the values of variables are, or using the more advanced/powerful methods below 

Breakpoint: specificying a line/position in the program where execution should pause so that the programmer can inspect the current state of the program (values of variables, parameters, which modules have been called etc) 

Single-stepping: running each line of code line-by-line and pausing after each, hence allowing the programmer to look at the variable contents in the report window/call stack and hence identify which line is causing the errors 

Report window: shows the values of variables at the the current point in the program’s execution (i.e. where a breakpoint was set or the line we have single-stepped to) 




