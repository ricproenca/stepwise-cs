# Unit 5 - Processor Fundamentals Presentation

### Pre-1945

- Pre-1945, programs would be run in a variety of ways:
- Either the hardware (i.e. circuits) was wired for an individual task
- Or programs could be fed in with external media – like punch cards

### Punch cards

- Programs stored as holes in a piece of paper – on some machines, each row could only have 1 or 2 holes (otherwise the paper would become too weak and fall apart)

- The presence of a hole in the punch card corresponds to a 0 or 1

### Punch cards

- How many bits of information (instructions/data) do you think this punch card could represent?

- 80 columns * 9 rows = 720 bits
- How many ASCII characters could this represent?
- Standard ASCII = 7 bits per character – so about 102 characters
- Imagine storing data about a person – name, age, address...you could possibly fit that on 1 punch card...now imagine needing 1.4 billion punch cards to represent every person in China

### Punch cards

- So scenes like this would be common...sorting them to find the right card was a nightmare
- ...and even worse would be accidentally dropping them/knocking them over on the floor, then having to sort them back in the right order

### Von Neumann Architecture

- In 1945, Hungarian John von Neumann was first person to describe basic principles of what would become modern computers. He theorized there should be:
- A processor (CPU)
- Main memory, which processor had direct access to
- Programs are stored in memory and can be edited/replaced
- Stored programs consist of individual instructions
- Processor executed instructions sequentially

### von Neumann Architecture

- There is actually a picture of John von Neumann somewhere in Happy Valley – see if anyone can find it and post it in the QQ group

### Stored Program Concept

- Was the idea that programs should be stored in memory and loaded when needed
- Hence programs could be accessed when needed
- This was in contrast to previous methods – like punch cards – where a user would have to manually move the punch cards into the device

### Stored Program Concept

- Allowed multiple programs to be stored WITHIN the main memory
- Why was this important?
- For convenience, versatility, performance, improved automation etc (i.e. people didn’t have to sit there 24/7, the computer could load different programs depending on the output of the previous etc)

### CPU Architecture

- MAR = Memory Address Register
- MDR = Memory Data Register
- CIR = Current Instruction Register
- PC = Program Counter
- Note: dashed line shows boundary of processor. Arrows show direction of communication

### Buses – what is a computer bus?

- A bus is a subsystem that is used to connect computer components and transfer data between them. For example, an internal bus connects computer internals to the motherboard.
- A bus may be parallel or serial. Parallel buses transmit data across multiple wires. Serial buses transmit data one bit at a time

### CPU Operation

- The two components that have an active role in a CPU’s operation are:
- Arithmetic logic unit (ALU)
- Control unit (CU)

### CPU Registers

- PC: program counter
- CIR: current instruction register
- MAR: memory address register
- MDR: memory data register
- SR: status register
- IX: index register

### ALU – Arithmetic Logic Unit

- The arithmetic logic unit is – as the name suggests – responsible for the arithmetic and logic processing requirements of a running program. It can execute assembly commands like:
- ADD, SUB, MUL, DIV, INC, DEC, AND, OR, NOT, XOR etc

### CU – Control Unit

- Decodes instructions
- Send instructions to be executed by ALU, I/O, main memory etc
- Controls flow of data through CPU
- Handles interrupts and errors
- Contains internal clock, which is used to execute instructions on each tick

### Registers

- If there is only 1 general purpose register, we will call it the accumulator
- Since registers are very close to the ALU & accumulator, they provide fast data access times
- In reality, modern CPUs usually contain 8-16 general purpose registers (this is so multiple values can be stored in registers, without having to save them to/load them from cache/main memory)

### Registers

- Registers store the results of previous instructions
- “They are few in number (there are rarely more than 64 registers) and also small in size, typically a register is than 64 bits or less in size.”
- Registers can be general or special purpose – we will look at the latter

### Accumulator

- Is a general-purpose register used to store ONE value at any one time
- Value is used by ALU for execution of instruction(s):

- LDD 5
- ADD #3
- STO 5

- Load value at address 5 into accumulator
- Add 3 to contents of accumulator
- Store accumulator result in memory address 5

### Accumulator

- Note – in real processors, there isn’t just 1 general-purpose register (since then you’d have to keep storing/reading things from memory – cache or RAM)
- Here, we can see my computer has 8 general-purpose registers (R8-R15)
- In theory, some of the others can also be used as general-purpose registers too (though you have to be careful, since there might be side-effects)

### CPU Registers

- So we briefly mentioned general purpose registers – now we will look at special-purpose registers
- PC: program counter
- MAR: memory address register
- MDR: memory data register
- CIR: current instruction register
- SR: status register
- IX: index register

### Program Counter (PC)

- Stores the address from where the next instruction is to be read from
- Is incremented simultaneously with the next step – copying of PC contents into MAR

### Memory Address Register (MAR)

- Stores the address of the current instruction or I/O component about to be read from/written to
- The address stored in the PC (program counter) is copied to the MAR, ready for the next step...
- Also used during execution of instruction – e.g.
- LDD 4 (load from address 4 – i.e. MAR contents = 4)
- STO 5 (store in address 5 – MAR contents = 5)

### Memory Address Register (MAR)

- Contents of program counter (PC) copied into MAR
- MAR  [PC]

### Program Counter (PC)

- Why is the PC incremented immediately after its contents/address have been copied to the MAR, rather than after the instruction has been executed successfully?
- To save time – the next instruction can be loaded immediately once the previous instruction has been executed, so it makes sense to have already incremented the PC (this is one element of pipelining – an exception will be if there’s a jump statement, where the PC’s content might have to be overriden)

### Memory Data/Buffer Register (MDR/MBR)

- Stores the data that has been read from the address in the MAR or will be written to the memory address specified in the instruction
- During the fetch stage, the MDR will hold the actual instruction to be executed

### Memory Data/Buffer Register (MDR/MBR)

- Contents of address stored in MAR copied to MDR (i.e. instruction)
- MDR  [[MAR]]
- PC also incremented:
- PC  [PC] + 1

- MDR  [[MAR]]    ;

- These steps will often be written with a semi-colon, to indicate they occur simultaneously
- MDR  [[MAR]] ; PC  [PC] + 1

### Current Instruction Register (CIR)

- Stores the current instruction, as it will be decoded by the control unit and hence executed (e.g. by the ALU, as a read/write request to I/O, some other component etc)

### Current Instruction Register (CIR)

- Contents of MDR (i.e. instruction) copied into CIR
- CIR  [MDR]

### Instruction Execution

- Cambridge doesn’t require you know much about this...but the instruction will be executed and the result will be stored in the accumulator
- This is unit 6 content anyway, since you need to understand basic assembly

### Instruction Execution

- Still...can anyone figure out what this program will do next?
- It will add #205 to the contents of the accumulator (i.e. 1)
- This result #206 will then be stored in address 205

### What is a flag?

- Before we look at the status register, does anyone know what a flag is in a program?
- Usually just a Boolean/simple parameter – command line programs also have flags. For example, imagine a video downloader command-line program like:
- youtube-dl id=jFDMZpkUWCw  --1080p
- id is a parameter since it takes a value, while  --1080p is a flag, since it’s a simple toggle (i.e. Boolean) option

### Status Register (SR)

- Usually a single, 16-bit register that stores flags representing the status of the most recently executed instruction. Example flags include:
- zero, carry, negative, overflow, parity, interrupt etc
- For example, in this order, if an answer was negative and overflowed, the SR contents would be:
- 001100...etc

### Status Register (SR)

- Can anyone think of situations that would cause the following flags to be true (assume a simple, 4-bit, two’s complement accumulator)?

- ?

- ?

- ?

- ?

- ?

| Flag | Accumulator Contents | Instruction |
| --- | --- | --- |
| zero | 1111 | NOT |
| carry | 1000 | ADD B1000 |
| negative | 0010 | ADD B1100 |
| overflow | 1111 | ADD B1000 |
| interrupt | 0101 | DIV #0 |

### Status Register (SR)

- Here we can see some of these flags:
- ZR: zero
- CY: carry
- PL: sign (positive)
- OV: overflow
- PE: parity even
- EI: enable interrupt

### Index Registers (IX)

- Base pointer: stores the base address for the start of a program in indexed addressing mode
- Stack pointer: stores the address of the top of the stack
- Source index: holds offset address in data segment for string operations
- Destination index: holds offset address in extra segment for string operations

### Extra Clarification

- MDR (MBR) acts a buffer, since instructions/data transfer inside processor is much quicker than transfers outside it
- The index register can be abbreviated IR, but to avoid confusion with the CIR, the book states it uses IX, to indicate the index register
- Likewise, when talking about processors and assembly language, “PC” refers to the program counter, rather than “personal computer”

### Extra Clarification: Program Counter

- The program counter NEVER points to the current instruction as it’s being decoded/executed – it ALWAYS points to the next instruction at that stage. Imagine the simplified logic:
- Copy instruction address from PC to MAR
- INCREMENT PC ; Copy instruction from MAR’s address to MDR
- Copy instruction in MDR to CIR
- Decode & execute instruction

### System Bus

- In our examples, a bus will describe a parallel transmission component, with each wire carrying a single bit
- Effectively, it’s like a lane, on a road, though rather than cars, bits are travelling down it
- There are also buses linking components within the CPU, but those are not considered in the book – only the higher-level, system bus is considered

### System Bus

- The system bus connects the CPU to the memory and I/O system and is comprised of 3 distinct components: the address bus, data bus and control bus
- Within the processor, the address bus is connected to the MAR, the data bus to the MDR and the control bus to the control unit

### System Bus

- Note: control & data bus is identical for all 3 components (bi-directional), while addresses travel from the CPU, to memory & I/O, but not back

### What is “data”?

- In the exam, if a question asks something like “what bus sends data uni-directionally”, the answer is the address bus – “data” in this case could be an instruction, address or value.
- The reason for this, perhaps, is if the exam said “this bus transmits addresses”, “this bus transmits control instructions/signals”, “this bus transmits data”, then it would be too easy, since the bus name is literally in the name of the type of content it is sending – so if you see “data” when talking about buses in an exam, it could also refer to addresses/instructions, too

### “Data”

- See this example, where “receives data from the MAR” should be “receives addresses from the MAR”, but, if the word “addresses” was used, it would make the question too easy...hence the use of the more ambiguous “data”

- ?

- ?

- ?

- ?

### Address bus

- Sole function is to carry an address from the MAR when directed to by the control unit.
- Address specifies location in memory or I/O component which is to be read from/written to
- Is the ONLY uni-directional bus – addresses can be sent from the processor to a memory or I/O controller, though addresses can’t be sent back to the CPU

### Data bus

- Carries data – this could be an instruction, address or value.
- Like the control bus, it is bi-directional – carries data to and from the CPU to main memory / I/O
- Some systems allow direct transfer from I/O to memory and vice-versa, while others require all data to go through the CPU – what are the advantages/disadvantages of both approaches?

### Control bus

- Transmits control signals between (to and from (bi-directional)) the control unit and other system components
- Usually only has 8 wires, since unlike the data bus, not much data needs to be transmitted
- Major use of control bus is sending timing signals to ensure that the timing of one component sending data and another reading it is synchronised

### Factors Affecting System Performance

- What do you think the most important factors affecting a processor’s performance?

### Factors Affecting System Performance

- Clock speed
- Architecture/infrastructure
- Number of cores
- Size, location & type of cache
- Instruction set (e.g. RISC vs CISC – A2, not AS)
- Word length
- Address & data bus width

### Clock speed/frequency/rate

- The clock speed is the amount of pulses from the oscillator per second – each pulse is called one clock cycle.
- Previously, CPUs could executed one instruction per clock cycle, though modern CPUs can often do multiple instructions per cycle
- Therefore, a higher clock speed = more cycles per second = more instructions per second (assuming all other factors remain constant)

### Clock speed/frequency/rate

- If a clock has a frequency of 3.5GHz, how many cycles will complete per second?
- 3.5 billion
- What is the clock frequency of your computer?
- [You can find out in your settings – in “System Information” on Windows – mine is 3201MHz or 3.2GHz]

### Cores

- A core is a self-contained CPU – it has its own cache, registers and can execute completely different processes
- For example, you could have a game, web browser, office software and media player open at the same time – each could be running simultaneously on different cores

- This would be a multi-processor AND multicore computer

### Cores: Uses

- There are two instanced multiple cores can be useful – imagine a CPU with 4 cores:
- as mentioned on 1 core, a browser could be running, on another a word processor, on another a game and on another a media player
- the same program could be threaded – that case the operating system may assign the threads to run concurrently, across multiple cores

### Cores - Multithreading

- Imagine a program that sums the numbers 1...1 trillion – if you have 4 cores, would it be possible to run this program faster?
- Yes – simply assign 25% of the numbers to each core, then sum up the answers at the end, once all threads are complete – i.e. core 1 sums 1...250 billion, core 2 sums 250,000,000,001 to 500 billion and so on
- Multicores & multithreading isn’t required for AS, but if they asked about processor performance, it would be an acceptable answer, if you can’t think of the typical answers they like (clock speed & bus width)

### Maths...

- About that previous question, if we want to sum 1 to 1 trillion, do you know how we can calculate the answer?
- n(a + l)/2
- (num of numbers * (first + last)) / 2
- (1,000,000,000,000(1,000,000,000,001))/2 = 500,000,000,000,500,000,000,000
- So a clever method is often >>> brute force

### Cache

- Cache is fast-access memory used to store previously accessed data and previously executed instructions, in case they need to be used again
- Variables in programs you create will be stored in the cache, so they can accessed again quickly
- Having more cache = more data can be accessed quickly, without having to go to RAM (slower/further away)

### Cache

- Do you also remember what type of RAM chips cache was made from? How about the RAM in the main memory?
- Register/cache RAM is usually static RAM
- Main memory RAM is usually dynamic RAM

### What is a “word”?

- Word: the maximum number of bits a CPU can process at a time
- What is the word size for most modern PCs?
- 64 bits – if your computer is 64-bit, the word size is 64, if it’s 32-bit, the word size is 32 and so on

### What is a “word”?

- Here, we can see the value of a register in my CPU – how can you tell what the word size would be?
- 1 hex digit = 4 bits, so...
- 16 hex digits = 64 bits

### What’s the significance of the word size?

- The word size is used for the following:
- to define memory addresses – i.e. a 64-bit machine can have 2^64 different addresses
- It’s also represents the biggest numbers the processor can handle natively, although this is more about functionality, not performance
- It is possible to use numbers bigger than this (of arbitrary size) with custom implementations – e.g. BigInteger in Java

### A question

- How many times more memory addresses does a 64-bit computer have than a 32-bit computer?
- 2^64 is 2^32 times bigger than 2^32
- This makes sense when 2^33 is double 2^32
- So don’t make the mistake of thinking a 64-bit machine can support 2x more addresses than a 32-bit machine...they have about 4.3 billion times more!

### Types of Cache

- L1 = close, each core has its own internal L1 cache
- L2 = slower, shared, but bigger
- L3 = biggest, but furthest (slowest)
- Naturally, we would ideally have as much L1 & L2 cache as possible, but of course we have limited physical space

### Architecture/Infrastructure

- Depending on the situations the processor will be used for, we would ideally want to design a processor accordingly
- For example, how might the architecture/infrastructure be different for a processor that handles lots of I/O vs one that performs complex scientific operations, to as high a precision as possible?

### Architecture/Infrastructure

- I/O-Heavy
- Large buffers
- I/O drivers close to CPU
- Parallel data transmission
- Multicored
- High clock speed

- Calculation-Heavy
- ALU close to control unit
- Large, close cache
- 64 or even 128 bit words
- Instructions designed to perform as much of mathematical operations
- Parallel data transmission
- Multicored
- High clock speed

### Are all buses the same width?

- Generally not – the address bus and data bus will most likely be the same – for a modern, 64-bit, CPU which uses parallel data transmission, that will mean the address & data bus will have a width of 64 (i.e. 64 wires)
- In contrast, since there are relatively few control signals needed, the control bus will often be only 8 bits – how many different control signals would that allow there to be?
- 2^8 = 256

### Are all buses the same width?

- On the previous slide, we said that a 64 bit machine will ideally have data & address buses with 64 wires – do you think this is always the case? Could there be another solution?
- Yes – sometimes the bus width may be 32 bits, therefore requiring two consecutive transmissions to transmit the 64 bits – this, however, will reduce the CPU’s performance, hence why it is best avoided

## Question

### I/O Ports

- As stated in the book, this diagram is simplified – in reality, the buses don’t connect to I/O devices directly, they connect to an interface known as a port

### I/O Ports

- Ports connect to an I/O device or a device controller
- The controller handles the interaction (data transfer, addressing, interrupts etc) between the CPU & I/O device

### 1

- 2

- 3

- 4

- 5

### I/O Ports: Internal vs External

- Internal: ports that exist within the computer – e.g. connecting hard drives, SSDs, network cards etc to the CPU
- External: ports that connect peripherals – USB ports, headphone/microphone jacks, HDMI/VGA ports, ethernet ports etc

### Ports vs Interfaces

- Ports: the physical port the I/O plugs into
- Interfaces: the firmware (drivers) that control the device (handling set up, data transfer, interrupts etc)

### Before Universal Serial Bus (USB)

- Previously, ports were not standardised – every different manufacturer may have a different port, which could only connect to their specific hardware etc
- Connecting devices was also difficult/confusing for users, too
- For example, a phone connector/charger might only work for that particular brand

### Universal Serial Bus (USB)

- The USB is – as the name suggests – designed to be universal (used anywhere) – these days, USB is so ubiquitous, that if a manufacturer doesn’t support USB connections, people simply wouldn’t buy their devices
- USBs are also designed to be ‘plug n play’ – i.e. requiring no technical expertise to install (drivers would install automatically) and process would be simple

### Universal Serial Bus (USB)

- There are many different USB specifications, but most devices will support one or multiple

### Universal Serial Bus (USB)

- Hierarchy of connections is supported
- Computer is root OS hierarchy & can support 127 attached devices
- Devices can be attached/removed while computer is running
- Standard has evolved, with USB 4v2.0 being the latest version
- Most recent version can theoretically support a transfer rate of 15GB/s

### Universal Serial Bus (USB)

- Even though the listed transfer rate is stated as 15GB/s, the actual transfer rate you see when copying/moving data usually isn’t that quick
- List the following situations in terms of probable speed (in all cases, the total data size is 1GB)...

### Universal Serial Bus (USB)

- Copying 1 million contiguous 1KB files from a HDD
- Copying a 1GB file from an SSD
- Copying 1 million 1KB files from a fragmented HDD
- Copying a contigous 1GB file from a HDD
- Copying 1 million 1KB files from an SSD
- All situations involve 1GB of data being transferred – what do you think the order of fastest  slowest would be an why?

### Specialised Multimedia Ports

- Despite the ubiquity of USB, some devices require specialized ports – monitors using VGA (Video Graphics Array) or HDMI (High Definition Multimedia Interface) are obvious examples
- Note: VGA = video only; HDMI = video & audio

### FireWire & Thunderbolt

- FireWire is the Apple alternative to USB, but support is limited usually only to Apple devices
- For consumers, they are extremely limited in terms of what they can buy that supports this connection type, compared with USB

### Fetch-Decode-Execute Cycle

- The phrases fetch-decode-execute cycle and fetch-execute cycle both refer to the same thing
- “Decode” is sometimes omitted to keep the name shorter, but the decoding stage always happens
- EVERY instruction is executed within the fetch-decode-execute cycle/loop

### Fetch-Decode-Execute Cycle

- Let’s see the steps listed in the book...

### Fetch-Decode-Execute Cycle

- Assume program is already running – PC will hold address of next instruction – then:
- Address in PC transferred to MAR
- During next clock cycle, instruction pointed to by address in MAR is loaded into MDR AND the PC is incremented at simultaneously
- Instruction stored in MDR transferred to CIR
- CU decodes/assigns instruction to component for execution

### How about jumps?

- Since the PC is incremented before the instruction is executed (for efficiency), if there is a jump condition, the PC may have to be updated to point to the correct memory address, depending on the result of the condition

### Register Transfer Notation

- To represent the fetch-decode-execute cycle, we can use a shorthand known as register transfer notation (RTN). The syntax is:

| Example | Meaning |
| --- | --- |
| PC  0 | The value 0 is assigned to the PC |
| MAR  [PC] | The contents of the PC are copied to the MAR |
| MDR  [[MAR]] | The contents of the address stored by the MAR are copied to the MDR |

### Fetch-Decode-Execute Cycle in RTN

- [This first step is usually omitted – since it’s assumed the PC starts with the correct value]
- PC  0
- ---------------------------
- MAR  [PC]
- PC  [PC] + 1
- MDR  [[MAR]]
- CIR  [MDR]

## Note how memory addresses store data and instructions – find examples of each

## 100 is first memory address of program – it’s loaded into PC

## Address in PC copied into MAR

## Contents of address stored in MAR ([100]) copied into MDR

## Instruction in MDR copied into CIR

## PC incremented once CIR holds current instruction – even before it’s been decoded/executed

## CU then decodes & executes instruction

### Fetch-Decode-Execute Cycle

- Note: in the next slide, the MAR will be updated because it is a LOAD instruction.
- The A-Level book only seems to cover the fetch part of the cycle, while this is the decode/execute part – so technically it seems it’s not required to know this

## CU puts 10 (memory address of LOAD instruction) into MAR

## LOAD 10 instruction executed – i.e. value of address 10 loaded into MDR

## Contents of MDR then copied into accumulator (LOAD always loads to accumulator)

### Fetch-Decode-Execute Cycle: 2nd Instruction

- The first instruction (LOAD 10) has now been executed – now let’s repeat the process for the 2nd instruction

## PC already incremented – so address in PC copied to MAR

## Instruction at address stored in MAR copied into MDR

### Instruction in MDR copied into CIR

- What should happen next?

## PC incremented

## Instruction copied from CIR to CU, ready to be decoded

## CU assigns ALU to handle ADD instruction

## Contents of accumulator copied into ALU

## Memory address from ADD instruction copied to MAR

## Contents of memory address stored in MAR copied to MDR

## Value in MDR copied into accumulator

## ALU then computes answer

## ALU contents placed back into accumulator

### Fetch-Decode-Execute Cycle

- Can you complete the next stages yourself, for the final instruction?

## ALU then computes answer

### Control Unit

- Accumulator

- ALU

- Program Counter

- Memory Address Register (MAR)

- Memory Data Register (MDR)

- Current Instruction Register (CIR)

- Address

- Value

- 0

- LDM #3

- 1

- XOR 8

- 2

- STO 8

- 3

- STOP

- 4

- 0

- 5

- 0

- 6

- 0

- 7

- 0

- 8

- 12

- 9

- 0

- 10

- 0

- Assume word size of 4 bits

### Control Unit

- Accumulator

- ALU

- Program Counter

- Memory Address Register (MAR)

- Memory Data Register (MDR)

- Current Instruction Register (CIR)

- Address

- Value

- 0

- LDD 4

- 1

- AND #13

- 2

- STO 5

- 3

- STOP

- 4

- 11

- 5

- 0

- 6

- 0

- 7

- 0

- 8

- 0

- 9

- 0

- 10

- 0

- Assume word size of 4 bits

### Fetch-Decode-Execute Cycle

- What happens in situations when there are/aren’t instructions to execute?
- What happens when there is/isn’t an interrupt?

### Interrupts

- There are many different causes for interrupting a process. Some examples include:
- fatal error in program
- hardware fault
- I/O request (read/write/control signal etc)
- user interaction (mouse click, keyboard press etc)
- timer signal

### Interrupt Handling

- The different types of interrupts are handled differently – for example, if a program encounters a fatal error, it will not be able to continue
- In contrast, for less severe interrupts – such as a mouse click – the state of the registers will be saved and reloaded, after the mouse click has been handled

### Interrupt Priorities

- Note: higher priority interrupts are given the lowest number – e.g.
- 0 or 1 = fatal interrupt
- 5 = minor interrupt

### Interrupt Priorities

- As hinted at, different interrupts have different priorities – an you think which would be considered high vs moderate priority (note, no interrupt is really ‘low’ priority...since they are all considered important enough to stop the current process)
- fatal error in program
- hardware fault
- I/O request (read/write/control signal etc)
- user interaction (mouse click, keyboard press etc)
- timer signal

### Interrupt Priorities: Identifying & Managing

- We need to be able to identify & manage interrupts. One method is to create an interrupt register, much like the status register, where each bit corresponds to a particular interrupt reason – e.g.
- program error | hardware fault | I/O request | user interaction | timer
- In this example, what interrupt would have occurred if the contents of the interrupt register were 00010

### Interrupt: Saving State

- If an interrupt occurs, the CPU will have to save the contents of the registers, so that they can be reloaded again, with the process able to resume execution
- As the flowchart on the next page shows, since interrupts will be detected/handled at the end of the F-E cycle, the instruction will have been able to finish executing, leaving the program in a defined state (as opposed to e.g. the interrupt halting the program during the decode phase – after fetching, but before execution)

### Interrupts Occur AFTER Execution

- Why is it best to detect interrupts after the current instruction has finished executing?

### Interrupt Handling

- Assume current register values are: PC = 101; MAR = 105; MDR = 14; CIR = ADD 105
- If an interrupt has occurred, these values will need to be saved temporarily – this is because the ISR (interrupt service routine) will overwrite these values – e.g. PC = 1000001; MAR = 1000500; MDR = 8; CIR = LDD 10005000

### Interrupt Handling

- Contents of program counter, accumulator & other registers stored in memory
- Appropriate interrupt handled or interrupt service routine (ISR) is initiated by loading it’s start address into program counter
- When ISR completes, CPU checks if more interrupts have occurred – if yes, these are handled, while if not, the contents of the registers when running the original process are loaded back and the execution resumes

### Does every keyboard press cause an interrupt?

- Yes – for fast typists, they may be able to type 10+ characters per second. There is not only a key down interrupt, but also a key up interrupt too. For fast typists, that means the register contents may have to be saved/reloaded 10-20 times per second.
- Certainly, this seems inefficient, but these interrupts usually take around 200 nanoseconds, so this time won’t be noticeable to the end user

### Difference between “program” and “process”

- For AS, both seem to be used interchangeably, but for A2:
- “program”: a sequence of instructions
- process: a running instance of a program (note how, Chrome, for example, spawns a different process for every single tab – so 1 program can be running multiple processes)

## Summary
