# Unit 8 - System Software Presentation

### How were computers previously used?

- Let’s see the typical use for a computer in the 1960s

## Leave room with deck of cards, paper tape and line-printer output

### Question

- What was (one of the things) missing from a computer back then?
- The Operating System (OS)

### Operating System

- The operating system is a type of software called system software
- OS manages/controls hardware and interacts with application software

### Common Operating Systems

- How many operating systems can you name? Do you know 5?

### Operating System – Usage/Popularity

- What operating system do you think is the most popular? Do you think it will vary for different device types?

### ?

- ?

- ?

- ?

- ?

- ?

| Category | Linux | macOS/iOS | Windows | In‑house | Other |
| --- | --- | --- | --- | --- | --- |
| Desktop, laptop | 2.9% | 9.8% (macOS) | 86.9% |  | 0.1% |
| Embedded[e] | 38.4% (embedded Linux, Ubuntu, Android, other) |  | 10.7% | 10.7% | 37.3% |
| Mainframe | 28% |  |  | 72% |  |
| Server (web) | 78% |  | 22% |  |  |
| Smartphone, tablet | 70.80% (Android, KaiOS) | 28.8% (iOS) | 0.07% |  | 0.34% |
| Supercomputer | 100% (Custom) |  |  |  |  |

### Operating System: Features

- Operating systems are extremely complex, often containing many millions of lines of code (50 million lines for Windows 10)
- OS provides environment for user to run applications
- We will look at some of their key features (note: some overlap)

### Operating System: Features

- User-system interface
- Program-hardware interface
- Resource management
- Memory management
- Device management
- File management
- Security management
- Error detection and recovery

### User-system interface

- A user interface allows the user to allow the user to input data to the system and see the output. There are 2 main types:
- Command-line interface (CLI)
- Graphical user interface (GUI)

## Command-line interface (CLI)

## Graphic user interface (GUI)

### Command-line vs graphical user interface

- What would be the advantage of each type of interface?

### Command-Line Interface (CLI):

Complex for user
Allows fine-grain control – to implement 1000s of options in a GUI might be impractical/impossible
Low-memory usage
Fast
Good for server/background tasks where GUI not required

- Graphical User Interface (GUI):
- Simple for user
- Might be impractical/ impossible to implement 1000s of different options
- High-memory usage
- Slower
- Good for applications designed for regular users

### Program-hardware interface

- Programmers write software
- Software uses this hardware
- OS ensures hardware does what the software wants it to do
- OS APIs allow programming languages to e.g. get input, print to output, get system details, write to/read from disk, use Bluetooth etc easily, without worrying about the complex implementation details

### Resource management

- When a program is actually running, it is called a process
- In most OS’s, a process will run for a time-slice – say, 100ms – before another process is allowed to run – this prevents e.g. a 5-day video render blocking all other processes from getting CPU time
- Processes need to access resources: CPU, network, RAM, storage etc
- Allocation of resources to processes called scheduling
- Resolve conflicts when multiple processes require same resource

### Memory management

- protection: each program has distinct memory addresses – prevents accidental overwrite, malicious attacks etc
- organisation to achieve best use of limited memory size: e.g. paging or segmentation
- optimisation decides what processes should be in main memory (RAM) at any one time and where they are stored in this memory

### Virtual Memory, Segmentation & Paging

- For AS, you just need a brief overview of these concepts:
- Virtual memory: using secondary storage to store active programs/data when main memory (RAM) is full
- Segmentation: splitting main memory into dynamically-sized segments – programs must be stored contiguously
- Paging: splitting main memory into fixed-sized pages – processes can be stored across partial or non-contiguous pages

## OS always resides in memory

## Note how segments are of dynamic size

## If memory is full & we want to load another program, idle segments can be moved to the swap file on the hard drive

## Now there is enough free space, so the Word Processor can be loaded into memory

## Let’s imagine we want to now load back the spreadsheet program (red) from the swap file to main memory

## Segmentation is atomic (process segments have to be contiguous), therefore the two files in the swap file can’t be loaded back to main memory until compaction occurs

### Paging

- Let’s now look at how paging works as a memory management strategy

## Paging is flexible – a process can be split across multiple pages or even share a page with other processes

## Processes don’t have to be stored contiguously in memory

## The page table maps the process’ view of logical memory, to the actual physical location it is stored

## Note how the process’ have no concept of the other running processes – they believe the entire memory is available for themselves

## Unused pages can be “paged out” (swapped to disk) when memory is getting full and then “paged in” when required again

## If memory is nearly full, then the constant paging in/out can cause a computer to become unusably slow – this is called “disk thrashing”

### Virtual Memory, Segmentation & Paging

- For reference, modern operating systems like Windows, Linux etc apparently use a combination of segmentation and paging:
- RAM could be segmented into segments like OS (kernel) and programs/data (user space)
- These segments could then be managed using paging

### Device management

- Devices include: monitor, keyboard, mouse, printer, webcam, USB ports etc. OS needs to handle:
- Installation of device drivers so device can interact with the hardware
- Controlling usage by processes (e.g. data transmission, permissions, error-handling/interrupts etc)

### File management

- File operations – creating, deleting, moving, renaming etc
- File system/drive format – FAT32, NTFS, ReFS etc
- File naming conventions (e.g. disallowing certain characters, perhaps some characters having special meanings – e.g. “.htacess”)
- Maintaining directory/folder structure/representation
- Access control (permissions)

### File management

- What information/metadata do you think might need to be stored about each file on a system?

## File Allocation Table

### File management

- Have you noticed that moving a large file from e.g. C:/…/Downloads to C:/…/Documents will be effectively instant…while moving it to another drive will be slow. Why do you think that is?
- Since if the file is on the same drive, the physical location of the file itself isn’t moved – only some metadata in the file system (e.g. the file allocation table) is modified

### File management

- This it the same as when you delete a file – the actual data isn’t erased on disk, the entry is simply removed from the file allocation table
- This is why it’s possible to recover files even after you have deleted them

### Security management

- Provisions for data recovery (e.g. backups, previous versions etc)
- Prevention of unauthorized access/intrusion
- Ensuring data privacy
- Perhaps a basic anti-virus – e.g. Windows Defender
- Perhaps e.g. ransomware protection/locked folders

### Error detection and recovery

- Runtime errors can occur due to logic errors/insufficient validation/exceptions not handled correctly etc
- Other errors could be due to a hardware/driver fault of a device
- Whatever the cause, the OS should have a capability to interrupt a running process and provide error diagnostics where appropriate
- In critical cases, the OS should be able to shut down the system in a safe manner, without loss of data

### Blue Screen of Death

- Occurs on Windows if a fatal error in either hardware or the OS code itself occurred that can’t be recovered from

- Why do you think the newer version is simpler/includes the logo/progress bar/face?
- Probably to avoid scaring users – if people see the first, they might think their computer is completely destroyed…while the newer one looks less serious

### A question

- Why do you think an error in the OS code (kernel) or critical hardware is more severe than an error in a user program? For example, note when you write e.g. a Java program with an error, it doesn’t terminate the entire system – why?
- Since the OS can simply close a process in user space that has an error – while if some critical OS code in the kernel has an error, it’s not safe to continue – the system could behave unexpectedly, data could become corrupted etc

### Can you remember the operating system management tasks?

- Resource management
- Memory management
- Device management
- File management
- Security management
- Error detection and recovery

## Utility Software

### Utility Software

- Utility software are ‘helper’ programs that can be run by the user when needed to fix/optimize the system – they will not run by default
- They can be pre-installed with the OS, or can be installed separately (e.g. 3rd party/official, but optional utility programs)

### Utility Software

- Main types of utility programs:
- Disk formatter and checker
- Disk defragmenter
- Backup software
- File compression
- Virus checker/anti-virus

### Disk formatter and checker

- Will typically carry out the following tasks:
- Ability to completely clear a disk
- Set up filesystem (FAT32, NTFS) on disk – add file allocation table to map files to specific memory locations
- Ability to partition disk into logical drives (e.g. C:/, D:/) – could also use to run multiple OS
- Detect corrupted disk and attempt repair
- Can also be used on e.g. USBs, not only hard drives/SSDs

## Disk formatter and checker

## Disk formatter and checker

### Disk repair

- Disk repair program:
- Checks for errors on disk
- Some errors result from physical defect (“bad sector”)
- Other errors could be caused by e.g. loss of power during partial file save
- Repair utility will mark “bad sectors”, so file system doesn’t try to access them
- File recovery can sometimes be attempted, if not, file will have to be deleted

## Disk repair

### Hard disk defragmenter

- Over time, as files are created, edited and deleted, they will become fragmented – that is they will be split across the disk, rather than stored contiguously, on one part of a disk
- Fragmentation slows the speed of a hard drive, since the read/write head has to move to different tracks/sectors

## Hard disk defragmenter

## Hard disk defragmenter

## File A is extended, but can’t fit in sector 4, so has to be split – i.e. it become fragmented

### Hard disk defragmenter

- A disk defragmenter would then move file C up, so there was room for file A to be placed contiguously

### SSDs & Defragmentation

- Do SSDs need to be defragmented and why?
- No – data anywhere on the drive has the same access time – whether the file is split makes no difference.
- In fact, defragmentation will actually use up the finite number of read cycles that an SSD has, so it’s recommended NOT to defragment it

## Defragmentation Programs

### Backup Software

- Many people may occasionally backup their files onto e.g. a USB device, though a backup utility program will likely have additional features, such as:
- Setting up automatic backup schedule
- Only creating backup when files have changed
- Setting files to exclude from backup

## Backup Software

### Backup Hardware

- Thinking back to the hardware unit, what hardware do you think would be suitable for backup and why?
- Magnetic tape (reliable, cheap, large storage)
- Hard drive (fairly cheap, reliable and moderately large storage)

### Cloud for Backup?

- Would the cloud be a good option for storing backup data?
- Advantages: separate geographical location, effectively unlimited storage potential (though VERY expensive), can be accessed by others/from anywhere, on a different network (potentially more secure)
- Disadvantages: trusting others with your data, uploading/downloading slower than local backup/restore, very expensive, might be considered overkill for regular home users

### File Compression

- Files can be compressed with a lossless method before storage, to save space on disk
- Note: if files are compressed, they may not be able to be searched correctly in your file browser

## File Compression

### File Compression

- “File Compression utility is the name for a type of utility program that compresses and decompresses files that aren’t commonly used. Most of them can compress infrequently used files to use between 40 and 90% less space on a hard disk”
- Why wouldn’t you want to compress frequently used files?
- Since you’d have to decompress them every time you needed them, which is slow/unnecessarily uses resources

### File Compression

- File compression utilities are useful when sending/emailing files to others/even for backup (e.g. entire directory structures can be compressed into a single .zip/.rar/.tar/.7z etc file)

### File Compression

- Why do most websites/apps compress files the user uploads? e.g. you might send a 3MB image over WeChat, but the default one displayed will be a smaller e.g. 100KB version
- To reduce bandwidth usage/storage requirements

### File Compression: Advantages

- So what are the advantages of file compression?
- Save storage space
- Reduce data transfer
- Get around file-size restrictions – e.g. many email providers have e.g. a 25MB attachment limit – if you could compress the file(s) below this limit, you would be able to upload them
- Sending entire directory (with potentially 1000s of files) as a single compressed file

### Virus Checker

- Should be one of the most important programs on a computer.
- “100,000,000s of hacking attempts per year”
- Should detect and remove viruses, as well as adding them to the company’s database, so that the program will be able to deal with the virus when other users encounter it

## Virus Checker

### Effectiveness of Anti-Virus Programs

- In reality, hackers specifically design their software to evade anti-virus software – using obfuscation, encryption, attaching it within large, otherwise non-malicious programs (trojans) etc
- Naturally, then, it is impossible for an anti-virus solution to be 100% effective

### Effectiveness of Anti-Virus Programs

- When a virus is discovered, the anti-virus software’s database will be updated – when another computer has the same virus, the anti-virus software will recognize that this is a virus it has seen before and hence should know how to deal with it
- Interestingly, this is similar to how the human immune system works
- Again, this doesn’t always work, due to self-modifying/self-encrypting viruses etc

### Effectiveness of Anti-Virus Programs

- Still, as a rule, this is why it’s important for anti-virus programs to be regularly updated (most will update in the background automatically, possibly daily, as a result of all the threats)

### Effectiveness of Anti-Virus Programs

- A virus check also needs to scan every file on the disk, every single time – it can’t simply think “when this file was downloaded, it didn’t have a virus, therefore it’s safe” – since, malicious code have been added to the file by a virus or, simply, when the file was originally downloaded, it wasn’t known that it was in fact malicious

## Program Libraries

### Program Libraries

- For a programmer to program every single function they wish to use – particularly those that interact directly with the hardware (getting input, printing output, viewing network status etc), this would be very difficult/tedious/error-prone
- As a result, libraries are created – existing code that a programmer can use that already performs this functionality

### Program Libraries

- Contain subroutines (procedures & functions)
- Tried & tested (vs own code, which likely contains bugs)
- Can be for both common & extremely niche uses
- Can be built-in to program languages or 3rd party

### Program Libraries

- Examples of program libraries include:
- Math & Random modules in Java
- ApacheCommons (common functions)
- Numerical Algorithms Group – 1600 mathematical functions
- etc
- A programmer or company could also create their own libraries, for their own reuse in other files or projects

### Linking Program Libraries

- Program libraries will be written in a particular programming language – if compiled, machine code will be produced
- These libraries can’t be executed directly – they have to be ‘linked’ to program – there are 2 methods: static and dynamic linking

### Static Linking

- This involves simply copying all the libraries into the final executable – i.e. if you have 100 different programs that all use the same library (e.g. the C/C++ libraries), there would be 100 different copies of those libraries
- Can you think of an obvious disadvantage of this method?
- Larger file size, redundancy, having to update 100 different programs if libraries change (due to e.g. bug or security vulnerability)

### Dynamic Linking

- In contrast, another approach is dynamic linking – that is where libraries will be stored as file – e.g. .dll files on Windows, .so on Linux – and any program that needs them will automatically reference these files, by the dynamic linker
- This means 100 different programs could share the same 1 .dll (dynamic linked library) file, without each program needing their own copy

### Static Linking

- Dynamic Linking

- Note: “shared library” means using dynamic linking

### Dynamic Linking Disadvantages

- Required .dll file might be corrupted/not exist on user’s PC  program won’t work
- Even if .dll is on user’s PC, it could be out of date/have a bug compared to the version used by the developer  may not work
- Makes it hard for developer to pinpoint/fix issues – e.g. different users have different versions of the libraries
- If .dll is modified by a hacker, every program that uses it will load that malicious code

### Dynamic Linking

- Can you think of any situation where you have encountered this .dll linking process (e.g. because of an error or during an install)?

### Dynamic Linking

- A typical error if a particular .dll library isn’t found
- They can be manually-installed with a simple online search to resolve this

### Dynamic Linking

- On Windows, when installing a game or sometimes high-performance software, you have likely seen this
- This will install the new versions of the .dll libraries

### Compile vs Runtime

- Which approach do you think will include the required libraries at compile time, while which will link them at runtime?
- Static linking will simply compile the program and its required libraries into a big executable
- Dynamic linking will just store a list of required .dll libraries to be linked to at runtime

### Static vs Dynamic Linking

- Static Linking Advantages:
- Simple to implement
- Could have different versions of libraries for each program, if required
- Library included in .exe means it will definitely be available
- Tested with current version, hence should work

- Dynamic Linking Advantages:
- Lower file size
- Less memory required in RAM due to only 1 instance of library required
- Easy to cache 1 library used by multiple processes
- If library updates, program will automatically use new version
- If manual update required, only 1 instance has to be updated

## Language Translators

### Types of Translators

- Assembler: converts assembly to machine code executable
- Compiler: converts high-level language to a machine code executable
- Interpreter: executes a high-level language, instruction-by-instruction, without creating a saved machine code executable

### Interpreter Steps

- First, let’s see how an interpreter works

## The next line of source code is read and Steps 4–8 are repeated.

### Interpreting

- Note how the program executes line by line – an executable file isn’t created

### Intermediate Code

- Some interpreted languages convert to an intermediate code first – for example, Java & Python (we will look at Java in more detail later…so let’s see Python now)
- The steps would be:
- Python source code  intermediate code (bytecode)  execute machine code that corresponds to bytecode

### Python (Interpreted) vs C (Compiled)

- Note how Python is converted to its own specific intermediate language, while C converts to the processor specific machine code (shown here as assembly, so it’s easier for humans to understand)

### Compiler Steps

- Next, let’s see how a compiler works

## If any errors are found a list of these is output and no object code is produced

### Compilation

- Note how the entire program code is converted to a machine code-executable

### Compilation

- Let’s use Lazarus to compile a simple Pascal program…

### Interpreting vs Compiling: Execution

- Assume there is a syntax error on line 10:
- What would be executed in an interpreted vs compiled language?
- In a purely interpreted language, lines 1 to 9 would execute, with the program throwing an exception on line 10
- In an compiled language, nothing would execute – execution can only occur if there are no syntax errors within the program

### Interpreting: Syntax Errors

- What is the syntax error in the second file?
- Note how in a purely interpreted language, the program will run, even if there is a syntax error on a later line

### Interpreting: Syntax Errors

- Here, we see Python actually checks the entire file for syntax errors first, before running – hence it’s not a purely interpreted language (it has features of both interpreted and compiled languages, as many other languages do – Java, JavaScript, PHP etc)

### Interpreting: Syntax Errors

- For the exam though, you should say:
- “an interpreted language will execute line-by-line, until it reaches a syntax error…while a compiled language will check the entire source code first to ensure there are no syntax errors before compiling”

### Interpreted Features

- Debugging errors can be faster, since the whole source code doesn’t have to be recompiled between each change
- Imagine code within an else statement contains a syntax error – if this else statement is only true 0.01% of the time, with informal testing, this syntax error may never be discovered, since that particular line of code may never be attempted to be executed as you are developing it

### Interpreted Features

- Interpreted languages have to be converted to machine code at runtime, while for compiled languages, this is already done – hence interpreted languages will be slower, all else equal
- Since the source code of interpreted programs has to be sent to users, there are copyright/trade secret/security issues (with hackers being able to examine the source code easily)

### Compiled Features

- As previously stated, faster than interpreted languages, all else equal
- Final executable can be distributed to users as a single file – there’s no need for user to have required interpreter (e.g. Python interpreter) on system for program to run
- Since entire code is statically analysed, there is a guarantee of no syntax errors

### Compiled Features

- The compilation process can be slow (e.g. compiling the entire Linux source code), though, as stated, execution will be fast, once the executable has been created
- Only machine code/object code will be distributed – hence makes it harder to reverse engineer (i.e. protects author’s copyright), though, equally, for those with malicious intent, they could hide a virus within a compiled program, while, for an interpreted program, if the source code is available, a virus will be easier to spot

### Processor Requirements

- Regardless of whether a compiler or interpreter is used, a program can only be run on a particular computer if the interpreter or compiler supports that processor

### When to use each?

- The book lists several arguments for when/why it might be appropriate to use each

### Interpreter use cases

- One error will often cause subsequent ones – since the process of re-compiling is slow, during testing, speed of development may be quicker with an interpreter
- “an interpreter can detect and correct an early error, so limiting subsequent ones” – doesn’t seem a valid reason
- More debugging options may be available with interpreter – e.g. the ability to change the values of variables during debugging

### Compiler use cases

- Can be used when the program is ready/close to ready for release, since:
- A single executable file can be created
- Executable can be distributed to users
- Executable file would be faster than if interpreter was used

| Category | Compiled | Interpreted |
| --- | --- | --- |
| Execution speed | Fast | Slower |
| Compilation speed | Slow | N/A |
| Ease of debugging | Harder | Easier – can edit variables etc as program is running |
| Ease of reverse-engineering | Harder | Source code openly available |
| Ease of distribution | Easy – could be a single .exe file (though has to be specific for that instruction set & OS) | Harder – requires user to have e.g. Java Virtual Machine (JVM) or Python interpreter installed |
| Transparency | Less – malware/anti-privacy/unwanted features can more easily be hidden | More – source code is easier to inspect its behaviour |
| Use cases | Large, complex applications that you want to distribute to users where speed may be important | Simple scripts – e.g. to convert all jpg images in a folder to png |

### Old Video: Interpreters vs Compilers

- https://www.youtube.com/watch?v=e4ax90XmUBc

### Java

- Java was unique in that it originally took a hybrid approach:
- source code is converted to an intermediate bytecode
- user will have OS-specific Java Virtual Machine (JVM) installed on their system
- the same bytecode can be executed by any JVM – i.e. the same Java bytecode can be executed on Windows/Mac/Linux
- JVM will convert bytecode to target-specific machine code and execute it
- Hence Java has “write once, run anywhere” philosophy

### Java / JVM

- Note how one bytecode output (.class file) is produced
- Anyone that has a JVM for their system installed will be able to run it
- JVM will convert bytecode to machine-specific instructions at runtime and execute it

### Java

- There exist versions of the JVM for:
- Linux: Arm64 & x64 processors
- Mac: Arm64 & x64 processors
- Windows: x64 processors

### Compiler Explorer

- You can use the Compiler Explorer at https://godbolt.org/ to see the output of compiled/interpreted programs
- Let’s see an example for:
- C (compiled)
- Python (compiled & interpreted)
- Java (compiled & interpreted)

## C – like C++ - is compiled to machine code (the output here is assembly for readability sake, but the real output is machine code)

## Note how Python is translated to a bytecode (intermediate language), then this bytecode will be executed by the Python interpreter

## Note how the Java bytecode is completely different from the Python bytecode – since bytecode is defined by the language, not the processor (like machine code is)

## Typical Integrated Development Environment (IDE) Features

### Integrated Development Environments - IDEs

- What is an IDE?
- A program that helps you with writing a specific programming language – rather than a simple text editor, there will be additional features, which we will see on the next slide

### Typical IDE Features

- pretty printing/syntax highlighting
- context-sensitive prompts (e.g. suggestions)
- dynamic syntax checks
- expanding and collapsing code blocks
- debugging

### Pretty-printing/syntax highlighting

- Pretty printing refers to the display of the code in the editor – features could include syntax colouring or auto-formatting

- private static void bubbleSort(int[][] arr){
- for(int outer = 0; outer < arr.length; outer++){
- for(int inner = 0; inner < arr.length - 1; inner++){
- if(arr[inner][1] < arr[inner + 1][1]){
- int[] temp = arr[inner];
- arr[inner] = arr[inner+1];
- arr[inner+1] = temp;
- }
- }
- }
- }

### Context-sensitive prompts

- Context-sensitive prompts are suggestions (prompts) that show based on the position of the keyboard cursor (i.e. context) – in this case, PyCharm will show us all of the available string functions

### Dynamic syntax checks

- Many IDEs will check syntax as you are typing – in the case of PyCharm, code with an invalid syntax will have a red underline, which, if hovered by the mouse, will show a suggested fix

### Collapsing/Expanding Code Blocks

- If we have a lot of code, it may help to ‘collapse’ (hide) some code blocks (functions, if statements, loops etc) – on the next slide, we’ll see how

## Toggle the -/+ buttons to collapse/expand code blocks

### Debugging

- We can set breakpoints (places execution will be halted, until manually-resumed) which will show us the values of the variables/objects in the report window
- We can then single-step, to run the program one line at a time, to see how the variable values are changing, hence find, understand and fix our error(s)

## Debugging

### Debugging: Single-Stepping

- As mentioned, we can also “single-step” the program – that is, execute the program line-by-line and see the contents of the variables after each
