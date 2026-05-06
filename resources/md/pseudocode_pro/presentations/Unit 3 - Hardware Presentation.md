# Unit 3 - Hardware Presentation

### Overview

- A computer system has to support three main areas of operational capability:
- input/output (I/O) of data
- processing of data
- storage of data
- The second capability – processing – is carried out within the CPU, which we will talk about in chapter 5; this chapter will focus primarily I/O & storage

### Data Storage

- The terminology surrounding “storage”/”memory” is not always correct – to be more specific, we can say that:
- memory/primary storage = components the processor can access directly (RAM, ROM, registers, cache)
- secondary storage = external units, which the processor can’t access directly (HDDs, SSDs, USB drives, CDs, floppy disks etc)

### Storage Devices

- Can you name any storage devices (i.e. devices that will store programs/data permanently?)
- Let’s see

### Hard Disk 
Drive (HDD)

- Solid-State Drive (SSD)

- SD (Secure Digital) Card

- Magnetic Tape

- USB (Universal Serial Bus)/Flash Drive

- Floppy Disc

- Game Cartridge

- Compact Disc (CD)/Digital Versatile Disc (DVD)/Blu-Ray

### Storage Devices

- We will look at how these devices function as well as their advantages/disadvantages in a later lesson

### Note: “size” here is talking about the physical size of each component, while the capacity is talking about the amount of data it can store

- Data Storage & Memory

### An auxiliary storage unit is an offline and external storage medium that can be used to store data for a long time – e.g. magnetic tape

- Data Storage & Memory

### Data Storage

- In reality, of course, it would be ideal to have primary storage (e.g. RAM) with huge capacity – unfortunately, at least currently, this is both not technically or financially feasible, though this could well change
- This is why we need secondary storage such as hard drives & solid-state drives – these have large capacities, are cheaper then primary storage per bit and are non-volatile (i.e. data is retained, even when the power is turned off)

### Secondary Storage Advantages?

- High capacity
- Non-volatile (data retained after power off)
- Portable – for internal hard drives, it’s harder, but for external hard drives, USBs, CDs etc, they are literally designed to be able to be easily portable, enabling data share between multiple devices
- Cheaper
- Enable easy & affordable mass-backup
- Allows separation of files by priority – e.g. for a web server, frequently-accessed files could be stored on an internal SSD, while rarely accessed files could be stored on a cheaper external HDD

### Data Input

- The 3 common stages of a computer program are: input, process & output
- For inputting data to a computer system, the following are among some of the potential options (can you think of any more?):
- Keyboard/keypad
- User interactions with a screen – either by touch (touchscreens) or by detecting movement (pointing etc) with cameras or sensors
- Sensors (motion/infrared/chemical/accelerometers/sound/radiation (Geiger counters) etc)
- Game controller
- Scanner
- Microphone & voice-recognition software
- Graphics tablet and/or handwriting recognition software
- Reading from a storage medium (e.g. reading a file from a hard drive)
- Transmission on a network link

### Data Output

- The 3 common stages of a computer program are: input, process & output
- For outputting data from a computer system, the following are among some of the potential options (can you think of any more?):
- Screen (monitor)
- Hardcopy using a printer or plotter
- Virtual-reality (VR)
- Speaker/headphones
- Writing to any storage device mentioned earlier (e.g. writing a file to a hard disk)
- Transmission on a network link
- AI bots/helpers/robots – e.g. Siri, Alexa, Cortana etc
- Any novelty output devices – controllers that vibrate, keyboards that suggest spellings by lighting up, even an ‘escape room’ where there will be different results depending on the choices you make

### I/O Sub-Systems

- Note that input and output to/from a computer is managed by I/O controllers – for example, your computer has USB hardware/drivers, wireless receivers (for wireless mice, keyboards), HDMI/VGA/Ethernet ports/drivers etc
- What is a port?
- This is the physical place you plug the input device into
- What is a driver?
- This is the software that handles communication between the external device and the computer – e.g. by implementing the protocols, establishing the software link, allowing the device’s address to be read from/written to etc

### Which ports can you name?

- Which ports can you name?

### Embedded Systems

- Previously, we were talking about devices that can be used with general-purpose computers – PCs, for example.
- Embedded systems, on the other hand, are (often micro) computers built into a piece of hardware that completes a specialist purpose – for example, an embedded system to monitor the conditions in your fridge, an ES to control the media player in your car, an ES to control an elevator etc
- There are MANY more embedded systems than general purpose PCs – any item that contain either electrical or mechanical parts will almost certainly contain one or more embedded systems

### Embedded Systems: Requirements

- For something to be considered an embedded system, it MUST still contain:
- a processor
- memory
- I/O capabilities (remember, this can be as simple as reading & writing data – it doesn’t need to be anything big, like a USB port, for example)
- If all of these are constructed on a single chip, we call this a microcontroller. The I/O can be focused purely on supporting the workings of the system – or it can be designed for the user, like a mobile phone’s I/O capabilities

### Embedded Systems: Advantages

- Special purpose, hence more efficient for that particular purpose
- Often simpler, so can be mass-produced cheaply
- Don’t contain unnecessary parts/contain exact hardware resources required – hence cheaper/more efficient

### Embedded Systems: Disadvantages

- If errors are found after installation, there is often no way to fix them (unless such devices support firmware updates) – new chips would have to be developed and devices may even have to be recalled, if, for example, the fault was severe enough (e.g. resulting in dangerous situations)
- During the early years, memory space was limited, particularly when trying to fit a system into often mm of space – these days, this is not as much of a concern, unless talking about extremely specific situations

### Internet of Things (IoT)

- Many devices – including those around the home – now provide some sort of network capability. Think of a typical ‘smart’ home – in which the fridge, lights, air conditioner, radiators, humidifier, even your toaster, may be connected to a network
- When devices that wouldn’t traditionally have been connected to the Internet now are, it’s called the Internet of Things
- These devices are referred to as IoT Devices

### Internet of Things (IoT): Problems?

- Often developed by small teams on tight budget who want to develop product quickly - hence security vulnerabilities can occur.
- There have already been multiple stories about devices being hacked to listen in to all your conversations or ‘smart locks’ being hacked to allow burglars access to the house etc
- Security cameras have also
- been hacked

### Recap

- We will talk about these devices more in future lessons, but for the following situations, see if you can recommend a good storage device and give a reason why…

### Scenarios

- Which device might be used in each scenario/is being talked about?
- A company maintains its original backups (from 20-50 years ago) on these devices
- Magnetic tape, floppy disks, optical disk, hard disk drives (HDD) etc
- A user wants to have a high capacity, relatively cheap internal storage device
- Hard disk drive (HDD)

### Scenarios

- A mid/high capacity portable device the user can carry around with them for attaching to different systems, possibly used for personal backup
- USB, external HDD/SSD
- A device that can provide extra storage for smaller devices – phones, tablets etc
- SD card

### Scenarios

- A company wants their workers to access their files from a remote location and all workers to have access to the same files
- Cloud storage (RAID – Redundant Array of Independent Disks, SAN – Storage Area Network)
- A low-latency, fast read/write internal storage device
- Solid-state drive (SSD)

### Scenarios

- A government wanting to archive vast amounts of data for the next 100+ years that they will rarely access
- Magnetic tape

### Questions

- Can you order the following by access time, capacity, physical size and cost: registers, auxiliary storage, cache, hard disk and main memory.
- What are the 3 functions hardware could support/perform?
- What is an embedded system? Can you give 3 examples?
- What must a device contain for it to be considered an embedded system?
- What are some advantages of secondary storage? Why can’t we use primary storage for everything?

## Hardware

### Storage vs Memory

- Do you know the difference between storage and memory?
- Storage = non-volatile/permanent program/data storage
- Memory = used for volatile/temporary storage, while the computer is running – data/instructions can be fetched/modified/executed by processor directly
- For example, if you have a game, it will be stored on a storage device (likely an HDD or SSD) – it will then be loaded into memory (RAM) where it will then be executed by the processor

### Storage Devices

- Can you name any storage devices (i.e. devices that will store programs/data permanently?)
- Let’s see

### Hard Disk 
Drive (HDD)

- Solid-State Drive (SSD)

- SD (Secure Digital) Card

- Magnetic Tape

- USB (Universal Serial Bus)/Flash Drive

- Floppy Disc

- Game Cartridge

- Compact Disc (CD)/Digital Versatile Disc (DVD)/Blu-Ray

### Memory Devices

- Can you name any memory devices (i.e. devices from which programs can be directly executed)
- Let’s see

### RAM (random access memory)

- ROM (read-only memory)

### Reading/Writing Data/Programs

- Reading | Writing

- Secondary Storage
- e.g. hard drives, SSDs, USBs, CDs etc
- [ROM would also be here…though many consider it primary]

- Primary Storage
- e.g. RAM, cache, registers

- Processor/
- Central Processing Unit (CPU)

### Memory Components

- For a general purpose computer, memory is comprised of random-access memory (RAM).
- Why is RAM called “random-access memory”?
- Since memory locations can be access in a random order – this also allows direct access to data locations – i.e. anywhere on the device can be accessed directly
- This is in contrast to sequential memory like magnetic tape – in this case, you have to start at the beginning of the tape and read until you find the desired position

### Random Access Memory

- Some random-access memory devices (RAM, SSDs, USBs) allows data to be read or written in the same amount of time irrespective of the physical location of data inside the memory.

### Random Access Memory

- In contrast, other devices which allow random (direct) memory access such as hard disks, CD-RWs, DVD-RWs the time required to read and write data items varies significantly depending on their physical locations on the recording medium,
- This is due to mechanical limitations such as media rotation speeds and arm movement.

## (Random Access Memory)

### RAM Features

- Allows random (direct) access of memory addresses – i.e. fast/efficient
- no moving parts – less susceptible to damage/doesn’t have to wait for components to physically move (e.g. a read/write hard drive head)
- Volatile (data is lost, when machine is turned off/experiences power cut etc)
- Fast, but relatively expensive

### RAM: Dynamic & Static

- RAM can be broken down into 2 categories:
- Dynamic RAM: the big 8GB, 16GB RAM sticks in your computer
- Static RAM: used for smaller memory components – e.g. registers in the processor or caches in/near the processor, GPU etc

### Dynamic RAM (DRAM)

- Constructed from capacitors – these leak electricity and need recharging every few milliseconds in order not to lose the data
- Hence high power consumption
- Relatively cheap, so can create large memory without being too expensive
- Slower access speeds
- High memory density (i.e. bits per m2 is high)

### Static RAM (SRAM)

- Constructed from transistors (flip flops)
- More complex circuitry
- Hence don’t require recharging = lower power usage
- Faster than DRAM
- Expensive, hence only used for speed-critical applications (registers, cache etc)
- Low memory density (i.e. bits per m2 is low)

### ?

- ?

- ?

- ?

- ?

- ?

- ?

| Feature | Static RAM | Dynamic RAM |
| --- | --- | --- |
| Speed | Faster | Slower |
| Price | More expensive | Cheaper |
| Made From | Transistors | Capacitors |
| Recharging Required? | No | Yes |
| Power Consumption | Low | High |
| Memory Density | Low | High |
| Use Cases | Registers, cache | Main memory |

## One of these pictures represents dynamic RAM and one contains static RAM – which do you think is which?

## Right: 512KB, 4MB & 16MB level 1-3 processor caches – static RAM

### Cache Levels

- Level 1: fastest – each core has its own L1 cache
- Level 2: can be specifically for 1 core or shared between multiple
- Level 3: largest capacity & shared between all cores

### Cache Contents

- What would be stored in the cache?
- Commonly-used data
- Commonly-used instructions (i.e. code)
- The instructions that will be executed next (“cache prefectching”)
- long n = 0;
- for(int i = 0; i < 1_000_000; i++){
- n = n + i;
- }
- System.out.println(n);
- What is this code doing?

- Why would n, i & 1_000_000 be cached…while 0 probably wouldn’t?
- Since both 0’s are only used once – while the others are used every iteration

### Cache Contents

- For example, an assembly instruction could be ADD #5 –why do you think we fetch it from RAM and load it into the L2 and L1 cache before it is executed?
- Since the instructions would be in the fast-access/physically-close L1 cache for when the processor needs it. In the same way, if you walked outside, then called a taxi, you might have to wait 5 minutes…but if you called the taxi 5 minutes before you needed it, by the time you walked outside, it would already be there for you

### Read-Only Memory (ROM)

- As well as RAM, there is also another category of memory – read-only memory or ROM. Below are the features of ROM:
- Non-volatile – data not lost when computer turned off/loses power
- Is also random-access, like RAM
- Can’t be written to when in use (though these days, this is not really true – we’ll see)

### Read-Only Memory (ROM): Uses

- Since ROM was traditionally read-only, it was ideal for storing data & programs that have some permanence, or things we don’t want the user to change. Examples include:
- BIOS/UEFI
- Internal settings/configurations we don’t want the user to change
- Firmware for graphics cards, sound cards, wireless cards etc
- Games/media – cartridges, CD-R, read-only Blu-Ray discs etc
- Embedded systems – industrial robots, home appliances, consumer electronics etc

### BIOS

- In exams, when they ask “what is ROM used for?”, the most common answer is the BIOS (Basic Input-Output System) – does anyone know what the BIOS actually is though?

### BIOS Functions

- The main functions of the BIOS is to:
- Load the operating system
- Verify hardware is working correctly (processor, GPU, secondary storage (HDD, SSD) peripherals (mouse, keyboard), network cards etc)
- The BIOS also gives the user additional features…

### Additional BIOS Features

- Change the operating system Boot Order
- Reset computer to default
- Flash (Update) BIOS
- Add/remove/modify a computer-wide password
- Change the date and time
- Change hardware settings – processor, memory, audio etc
- Change system voltage levels

### Types of ROM

- There are 4 main types:
- Standard ROM: data/programs written to ROM during manufacturing & can’t be changed
- Programmable ROM (PROM) – programmed by user ONCE
- Erasable Programmable ROM (EPROM) – programmed unlimited times using ultra-violet (UV) light
- Electrically-Erasable Programmable ROM (EEPROM) – programmed unlimited times using power from the host device (e.g. computer)

## ROM is hence used to store firmware

### PROM

- Can be programmed by user ONCE

- Advantages:
- Security/integrity – users/malicious threats can’t modify it once initially programmed

- Disadvantages
- Can’t update the firmware – e.g. for security/performance/new features
- If mistake during production, need to print entirely new chip
- If bug found after production, devices may have to be recalled, since it’s not possible to update them

### Erasable Programmable (EPROM)

- Has a window to allow ultra-violet light in to write to the chip

- Advantages:
- Can update data/programs (firmware)

- Disadvantages
- Requires UV light to erase data – which means the chip usually has to be removed from the device and placed in a rewriting machine
- Can’t erase a portion of the data – the whole chip has to be erased and re-written to
- Slow to write to (as opposed to EEPROM, which is almost instantaneous)

### Electrically Erasable Programmable (EEPROM)

- Uses electricity to write to the chip

- Advantages:
- Can update data (firmware)
- Updating is almost instant
- Chip doesn’t have to be removed – it simply uses the voltage from the power supply to update

- Disadvantages
- Different voltages required for erasing, reading & writing
- Data retained for about 10 years
- Expensive

### Why is ROM considered ‘read-only’, if we also write to it?

- During operation, ROM is not written to – it is only written to during updates etc, in the case of EPROM, that often requires removing it from the machine.
- In effect, ‘read-only’ is referring to the time the device is being used/in operation
- Why does EPROM usually have to be removed from the machine to write to it?

## Programmable & how?

### Which type of ROM would be most suited for these situations?

- A ROM chip for a robot in a factory which has lots of specialist equipment
- A BIOS chip for a computer – we want users to be able to easily update it
- A game for an old console – we wouldn’t want players to mofidy its contents

- PROM
- EPROM
- EEPROM

### Buffers

- If we need to move data from one part of a computer to another (memory, hard drives, I/O, drivers, network cards etc), there is a problem that arises – what if the data is sent faster than it can be processed?
- In these situations, we need buffers – a queue, which stores the incoming data, usually in a FIFO (first in, first out) structure

### If a queue is a FIFO (first in, first out) data structure, then what is an example of a LIFO (last in, first out) data structure?

A stack

- Is a buffer a stack or a queue?
- A queue

### Recap - Static RAM vs Dynamic RAM

- For PCs, many will use one type for the main RAM, while the other type will be used for registers/cache – which do you think is which and why?
- SRAM is used for the cache, due to it’s faster access time;
- DRAM is used for main memory, due to it being cheaper, requiring fewer components/taking up less physical space

### Static RAM vs Dynamic RAM: Embedded Systems

- In contrast, embedded systems usually use SRAM, since they often only need a small amount anyway & want to save power

## Storage

### Background: Drivers

- For ANY hardware device – whether an integral (internal) part of the system or a peripheral (external), a corresponding driver must be installed – this is software used to manage/control the operation of/data transfer between the device and the processor
- Drivers are considered firmware (i.e. software that directly interacts with/controls the hardware)

### Terminology

- These days, the following terms are equivalent:
- Hard disk = hard disk drive = hard drive = HDD

### Magnetic Media

- There are two main types of magnetic storage mediums:
- Magnetic tape (old)
- Magnetic hard drives
- Both use a read/write head and the law of physics that magnetisation will result in an electrical current being generated
- The polarity/direction of magnestism (hence current) can be interpreted as a binary 0 or 1

### Magnetic Tape

- Developed in 1928
- Originally developed to store audio & video
- For example, it meant radio shows could be recorded and re-broadcast at different times
- IEEE: “Today, a modern tape cartridge can hold 15 terabytes. And a single robotic tape library can contain up to 278 petabytes of data. Storing that much data on compact discs would require more than 397 million of them, which if stacked would form a tower more than 476 kilometers high.”

## Magnetic Tape

## IEEE: “…the medium’s advantages are many…tape storage is more energy efficient: Once all the data has been recorded, a tape cartridge simply sits quietly in a slot in a robotic library and doesn’t consume any power at all. Tape is also exceedingly reliable, with error rates that are four to five orders of magnitude lower than those of hard drives. And tape is very secure, with built-in, on-the-fly encryption and additional security provided by the nature of the medium itself. After all, if a cartridge isn’t mounted in a drive, the data cannot be accessed or modified. This “air gap” is particularly attractive in light of the growing rate of data theft through cyberattacks.”

## The 2011 Gmail incident was one of the first disclosures that a cloud-service provider was using tape for its operations. More recently, Microsoft let it be known that its Azure Archive Storage uses IBM tape storage equipment.”

### Magnetic Tape: Overview

- High capacity
- Cheap
- Secure
- Lower data corruption rate
- The fact you can disconnect it means low power usage & security from cyberattacks etc
- Long-term storage (hard drives have a shorter shelf-life)

- Serial access: to find a specific piece of data, a reader would have to start reading from the start of the tape, until it finds it = high access time

### Magnetic Tape: Overview

- Serial access makes it fairly slow to find and retrieve data. However, magnetic tape is excellent for archiving data - i.e. data not likely to be needed instantly.
- Large companies such as a television network have robot storage libraries. This consists of shelf upon shelf of magnetic tapes under the control of a robotic arm.
- If an archive tape is needed, the robot fetches it from the store and places it in a tape reader.
- The robot also handles the data recording as well

### Magnetic Hard Drives

- Electro-mechanical devices
- Using rotating, magnetic platters (disks)
- Read/write heads are attached to an actuator
- Specifically developed for computers (by IBM in 1956)
- Connected to computer via PATA (Parallel ATA), SATA (Serial ATA), USB or SAS (Serial Attached SCSI)

## Input/Output (I/O) Devices

### Input devices

- Unless a device is in a continuous loop in which the input conditions do not change, there will need to be a way to input data/control signals to the system. This is consistent with the following model:
- input  process  output

### Input devices - Examples

- How many input devices/methods can you think of?
- Keyboard/keypad
- Touchscreen/interactive whiteboard/graphics tablet
- Microphone
- Scanner/barcode scanner/RFID reader etc
- Camera/webcam
- Game controller/VR system
- Sensors (motion, heat, sound, infra-red, ultra-violet, pressure, chemical, gyroscope etc)

### Keyboard

- When a key is up, the circuit is incomplete – when pushed down, the circuit becomes complete, resulting in an electrical signal
- Electrical signal travels to the keyboard’s microprocessor and is compared to the character map stored in the keyboard’s ROM
- OS can then use these mappings to represent value/perform function (e.g. typing a letter or performing functions as in the case of CTRL + C etc)

### Screens

- Considered output devices
- Many are also input devices – i.e. touchscreens (and these days, there’s more mobile phones than laptops/pcs)
- Book also says standard screens can be considered ‘input’ devices – since you can click on icons, drag things etc
- In reality, it seems more accurate to say this is using the mouse to interact with the OS, but the book says this is interacting with the screen
- Can be LED (light-emitting diode), LCD (liquid-crystal display) or CRT (cathode-ray tube)

### Touchscreens: Legacy

- Initially, touchscreens worked with CRTs (Cathode Ray Tubes) – the screens themselves were often made out of thick glass, so the screen itself couldn’t detect a user touching it
- Can you think of how the location the user touched could be accurately detected?
- It was done using a grid (i.e. rows & columns) of either infra-red light or ultrasonic waves – where the signal was blocked would be where the touch was detected.
- With this method, what would happen if you placed a book in front of the screen? Or if a fly landed on it?

### Touchscreens: Modern

- Not only do modern, flat-screen touchscreens provide better graphics, they also are able to more accurately detect a human touch, as opposed to simply anything blocking an infra-red or ultrasonic signal. They have:
- touch-detecting layers on top
- light-emitting layers (i.e. screen) underneath
- For these touch-detecting layers, there are 2 types:
- Resistive touch screens
- Capacitive touch screens

### Resistive Touchscreens

- Outer (red) layer is conductive
- Inner (red) layer is resistive
- Electric current constantly running between electrode
- When layers touch, the circuit is complete
- Resulting co-ordinate is interpreted by software

### Resistive Touchscreens: Uses

- Interactive whiteboards
- ATMs
- Old games consoles (Nintendo DS)
- Touchscreens in factories
- Ticket/information machines
- Tills/self-checkout machines
- Media players on/in planes/trains/cars
- Some credit card machines where you have to write your signature
- Printer/photocopier interface

### Resistive Touchscreens: Characteristics

- Durable
- Cheap
- Work with any material – e.g. for factory workers wearing gloves
- Not affected by water – can work outside in rain, snow etc – good for engineers, architects etc

- Don’t support multi-touch
- Gestures (swipe, pinch etc) difficult/unsupported
- Due to additional layers, screen can be blurry

### Capacitive Touchscreens

- Electrode has a low electrical charge
- When a conductive material (e.g. finger) touches the protective cover, a small amount of that charge is absorbed
- Part of electrode film now has a lower charge, hence this is the location the touch is detected to be

### Capacitive Touchscreens: Uses

- Modern smartphone
- Tablets
- Some touchscreen laptops
- HD, indoor, glass touchscreen displays

### Capacitive Touchscreens: Characteristics

- Supports multi-touch
- Supports gestures (swipe, pinch etc)
- Clearer screen (90-98%) of LCD light let through

- Can’t use outside/in rain/with gloves
- Can damage/scratch more easily
- More expensive

### Touchscreens: Resistive vs Capacitive

- Good for e.g. factories – employees can use them while wearing gloves
- Maybe appropriate when you want a simple stylus to use it
- Good for people working outside (engineers, architects, planners etc)
- Cheap
- Durable

- More accurate
- Only responds to surfaces with correct conductive properties – skin, specialized stylus etc
- Allows multitouch
- Easier to swipe, pinch and perform other gestures, since you don’t have to apply force

### Differentiating Touchscreens?

- If you have a touchscreen, how can you tell if it is resistive or capacitive?
- A resistive touchscreen will feel soft and using any material to touch it should work. Due the extra layers, the screen will often appear dimmer/having less contrast.
- On the other hand, a capacitive touchscreen will be hard and will only work if it comes into contact with a conductive material (your skin (i.e. finger), electrically-conducting gloves, specialized electrically-conducting styli etc.)

### Inputting Visual Data/Graphics

- There are several common methods to input visual data/graphics/images into a computer:
- Webcam
- Camera/phone camera, with the files transferred (e.g. via USB cable)
- Scanner

### Charge-Coupled Device (CCD)

- Before talking about cameras and scanners, we will first talk about a charge-coupled device (CCD), since both cameras and scanners use this same method to capture the light signals
- Note: the book says you don’t need to know how these work in too much detail – just a basic understanding should suffice

### Charge-Coupled Device (CCD)

- Utilises photoelectric effect
- When light hits silicon sensor, electrons will be emitted
- Positively-charged capacitor placed beneath, which captures the electrons
- Number of electrons caught by capacitor represents the intensity of light
- Note, the above is used for black/white – for colour, we can simply have 3 sensors/capacitors, each with either a red, green or blue filter in front of them, to only let that colour of light through
- CCD uses analogue-to-digital converter (ADC) to convert light intensity signals into binary (e.g. perhaps a 24-bit RGB colour)

- A charge-coupled device is inside both a digital camera and scanner

### Cameras

- The book doesn’t mention the inner-workings of cameras, so it shouldn’t come up in an exam, but here is a brief overview, in case it does…

- Light refracted through lens
- Diaphram controls how much light is let through
- Shutter opens/closes for long/short exposure times
- Light signals recorded by CCD at back – converted to colour profile/RGB/CMYK etc

### Scanners

- Image/text on material (e.g. paper) is placed on the scanner
- The lid is closed
- The scanner’s light starts moving from one end to the other
- Reflected light is directed by mirrors and lenses to a charge-coupled device (CCD)
- CCD contains array of photo-sensitive cells
- Cell produces electrical response correlating to intensity of light in each cell
- CCD needs an analogue-to-digital converter to turn light signals into binary data

- Photocopiers use the same technique as scanners…but they also print the document

### Input and output of sound

- IP telephony (Voice Over IP/VoIP) and video calls/conferences via webcam are two situations where we require both the input and output of sound
- Furthermore, voice recognition can also be used as an alternate technique for data input (e.g. to an operating system)
- Likewise, voice/speech synthesis is being increasingly used in a variety of applications
- These two listed examples also aid accessibility
- Input and output of audio is controlled by a sound (audio) card and corresponding drivers

### Microphone

- Diaphragm (flexible material) which vibrates when hit by incoming sound waves (like an ear drum)
- This vibration of the diaphragm is measured and converted to a binary signal, by an analogue-to-digital converter (ADC)
- There are 2 methods to capture the sound energy and convert it to an electronic signal:
- using capacitance
- piezoelectric crystal

### Output devices

- Some common output devices include:
- Screen/monitor (LCD, LED, CRT)
- VR headsets
- Printers (laser, inkjet, 3D, plotter)
- Speakers/headphones
- Game controllers that vibrate

### Speaker

- Process is similar to the reverse of the microphone process:
- Digital audio data converted to analogue using digital-to-analogue converter (DAC)
- Analogue signal represents a varying electrical current
- Current flows through coil suspended within a magnetic field by a permanent magnet in the speaker
- As the size and direction of current keeps changing, the coils move backwards and forwards
- The movement controls the movement of the diaphragm – i.e. these vibrations generate the sound

### Sound processing

- If you want to apply some processing to sound, might it be better to do it in the hardware (where the sound is still analogue) or in the software (where it has been converted to digital?) and why?
- Hardware, because:
- it’s faster
- sound hasn’t been quantised yet (i.e. is original signal = more accurate)

### Screens

- There are 3 main types of screen:
- LCD (liquid crystal display)
- LED (light-emitting diode)
- CRT (cathode-ray tube)
- Let’s start by looking at the oldest technology – the CRT (cathode-ray tube) monitors

### Cathode Ray Tube

- A electron beam for each of the colours (RGB) is fired at screen
- Magnets are used to deflect beam to specific pixel/row
- Electron beams pass through shadow mask and a light up specific type of phosphor that glows either red, green or blue

## https://www.youtube.com/watch?v=Gnl1vuwjHto

## Red (100%), green (50%) and blue (0%)

## due to the persistence of our vision, we see the entire image at once

## Note how the pixels are drawn from the top left, to the bottom right

### Liquid-Crystal Display (LCD)

- Entire image is on screen at all time – it’s not drawn pixel by pixel, like with CRTs:
- White ‘backlight’ that is entire size of screen
- Light is passed through horizontal polariser
- When light passes through liquid crystals, it becomes vertically-polarized
- If electrodes around crystals are turned on, electro-magnetic field created, changing alignment of crystals, hence stopping them changing the polarization of light
- RGB filters used
- Vertical polariser – only vertically polarised light will be let through
- Amount of light we want to pass through is controlled by electrodes

## Not an LCD – just showing how a polariser works

## Polarisation of light is the same (though it’s the light moving towards the polariser) – if you have a horizontal polariser, then only light that is horizontally polarised will be let through

## I suppose the order doesn’t matter, as long as they are rotated 90 degrees from each other

## A pixel is made from 3 sub-pixels

## What colour do you think these pixels are displaying?

## Electrodes for red & blue are on, light not polarised, hence blocked by final polariser

### LED (Light-Emitting Diode) Screens

- LED screens are identical to LCD screens, except for the first step
- LED screens use LED’s as the backlight – while LCD’s use another technology (CCFLs – cold cathode fluorescent lamps)
- LEDs are more energy efficient AND produce a better picture quality…
- …but they are more expensive
- Otherwise, both LED & LCD screens user the same approach – backlight  polariser  electrodes  liquid crystals  perpendicular polariser  colour filter

### Virtual Reality Headsets

- Popular not only for games, but also, allowing exploration – for example allowing engineers & architects to ‘walk’ around a site, even if they aren’t there – now more common with 3D cameras
- Main component is the headset – may also have additional controllers/use motion/body language detection etc
- 3D environment created either by camera, or rendered by 3D graphics software/game engines etc

### Printers

- Two technologies dominate the market: inkjet and laser printers (left & right respectively)

### Inkjet Printers

- Paper fed in to printer
- Liquid ink is stored in cartridges
- Printhead moves across the sheet horizontally
- Nozzles in printhead spray ink (CMYK) at correct positions
- Paper then moved forward, to print the next row
- Previous 3 steps repeat, until whole sheet has been printed

### Laser Printers

- Drum is electrically-charged
- Drum starts to revolve
- Laser is reflected by a mirror and shone onto the drum – this will remove charge from drum; turning the laser off ensures the charge stays
- Process repeats until full-page electrostatic image on drum has been created
- Drum coated with charged toner that sticks to positions where drum has NO CHARGE
- Drum rolls over sheet on paper, transferring toner to paper
- Paper discharged and passed through heated rollers to fuse toner to paper
- Drum is discharged, ready for next page
- For colour printing separate coloured toners required and steps have to be repeated

## For colour printing separate coloured toners required and steps have to be repeated

## Laser has been shone on some areas to remove the charge – then, when negative toner is applied, it will stick to the neutral areas

### Printer Quality

- Image quality of laser printers depends on dots per inch
- Software can be used to control number of dots per pixel

### ?

- ?

- ?

- ?

- ?

- ?

- ?

- ?

| Feature | Inkjet Printer | Laser Printer |
| --- | --- | --- |
| Cost of Printer | Cheap | Slightly more expensive |
| Cost of ink | More expensive | Cheaper |
| Good for | Photos/graphics | Text |
| Physical size | Smaller | Bigger |
| Printing substance | Liquid ink | Toner (powder) |
| Colour quality | Better (liquid colours can be mixed better) | Worse |
| Accuracy (fine details) | Worse (liquid disperses) | Better |
| Print speed | Slower (5-20 pages per minute) | Faster (30-120 pages per minute) |

### Graphics plotter

- Printers can’t print vector images directly (they would have to be converted to a pixel-based (i.e. bitmap) form)
- Graphics plotters, however, CAN create a physical output from vectors directly. For example, a pen is attached to an arm that moves, following the paths specified in the vector
- Some “plotters” can also be used to cut out shape – for stickers, signs, plastic models etc

## But, they are expensive/specialist

### 3D Printer

- 3D design created in 3D modelling/CAD (computer-aided design) software
- Data for bottom layer transmitted to 3D printer
- Nozzle using e.g. plastic/some other material used, spraying it to form the layer
- The layers are built sequentially – the current being built on top of the previous
- Object is ‘cured’ in some way, to ensure material sticks and holds together

### Optical Mice

- An optical mouse may seem simple…but it’s actually very impressive:
- https://www.youtube.com/watch?v=eccSwn9QVxo https://www.youtube.com/watch?v=SAaESb4wTCM

## Movement data is sent to operating system, for it to move the cursor on screen

## Optical Mouse

## It might be the opposite to what you think, but they’ve actually moved and down and left

## There would be no overlap between the images…hence the mouse would have no idea what direction you moved it in

## Trackball Mouse

## The distance the mouse moves is determined from the rate of the pulses by an on-board processor chip // by driver software in the computer

### Correctly categorise each item and briefly explain how it works

- Input

- Output

- LCD, LED & CRT screens
- Resistive & capacitive touchscreens
- Phone
- Keyboard
- Printer
- Headphones
- Scanner
- Microphone
- 3D printer
- Mouse

## What are the 2 different types of mice & how do they work?

### Magnetic Hard Drives: Operation Continued…

- Disks are attached to a spindle (which spins)
- There is more than one platter (disk)
- Each platter has a read-write head for each side
- The platters spin in unison (all together & at same speed)
- The read-write heads are attached to actuator arms which allow them to move over the disk to the correct track
- R/W head waits for correct sector to rotate underneath it, then starts reading/writing data
- The motion of each read-write head is synchronized with the other heads
- A cushion (gap) of air less than the width of a human hair ensures that a head does not touch the platter surface

### Magnetic Hard Drives: Operation

- Seagate: How a Hard Disk Drive Works: https://www.youtube.com/watch?v=NtPc0jI21i0
- TED:
- https://www.youtube.com/watch?v=wteUW2sL7bc
- Taking apart a hard drive:
- https://www.youtube.com/watch?v=07fpE2q1eUI

## Tracks: circular rings around the platter – these days, the outer tracks store more data than the inner tracks. There are 300,000+ tracks on a HDD

### Magnetic Hard Drives: Cylinders

- Cylinders: these are corresponding tracks (at the same radius from the center), that can hence be read at the same time. For this reason, a large file could be split across different corresponding cylinders (so they can be read at the same time, without the read/write head having to move to a different track)

### Magnetic Hard Drives: Sectors

- Sectors: these are the smallest blocks of data that can be read/written to. Ideally, large files will be stored in sequential order, across adjacent sectors, however they could be stored on completely different sections of the disk (we call this fragmentation – SSDs do not suffer from this issue)

### Magnetic Hard Drives: Zones

- Zones: older hard drives had the same amount of data for the inner tracks and outer tracks – modern HDDs, however, are zoned, meaning the outer tracks are split into more sectors due to their greater circumference, hence storing more data

- A hypothetical HDD with 5 zones – in real life, 15 or more is typical

## Note how blue has 4 sectors, but outer (green) sector has 5

### Magnetic Hard Drives: Access

- Magnetic HDDs are considered to be direct-access (random access) read-write devices, since they can directly seek any particular sector (with a delay, of course)
- The data in a sector has to be read sequentially/serially (in order)

### Magnetic Hard Drives: Measuring Performance

- Seek time: time for arm to move heads to correct cylinder (tracks)
- Rotational delay: time for correct sector to rotate to under r/w head
- Access time: seek time + rotational delay (the access time is the time taken to for the correct sector to be underneath the r/w head)
- Read time: time to read the sector (header, data & [trailer])
- So total time is:
- Seek time + rotational delay + read time
- Or, simplifying:
- Access time + read time

### Magnetic Hard Drives: Overview

- Moderately high capacity
- Fairly cheap
- Fairly secure
- Moderate access time (faster than magnetic tape, slower than SSD)

- Often only have a 10 year shelf life
- More prone to physical damage than SSD & magnetic tape

### Optical Media

- Like magnetic tape, optical storage was developed before/not specifically for computers. There are many types of optical storage mediums:
- CD (compact disc)
- CD-DA (CD-Digital Audio)
- CD-ROM/CD-R (CD-Read Only Memory)
- CD-RW (CD-Read/Write)
- DVD (digital versatile disc)
- Blu-ray disc

### CD-ROMs

- Previously, CD-ROMs were widely used to distribute software. Why do you think that was?
- Their ROM characteristic means software could not be either maliciously or unintentionally modified directly on the disc (though it could be copied from the disc and modified once installed on the computer)

### Optical Media vs Floppy Disks

- The increased capacity meant the CD was an obvious successor to floppy disks – a modern CD-RW can hold around 700MB-1GB of data, DVDs 5GB and Blu-Rays 50GB, while floppy disks only hold around 3MB, at max.

### Optical Discs: Operation

- Disc has a singular spiral track, from inside to out (as opposed to magnetic hard drives, which have many circular tracks)
- The disc spins (slowing down as the laser moves outwards, since otherwise the greater circumference of the outer sections would mean it was spinning too fast)
- Laser moves from inside to out

- CD/DVD/Blu-Ray

- Hard Drive

### Optical Discs: Operation Continued

- The track on the surface has ‘pits’ and ‘lands’
- Difference in reflection from a pit (minimal reflection) compared to land (maximum reflection) can be detected by detector – difference in intensity correlates to a bit value (1 or 0)

### CDs vs DVDs vs Blu-Rays

- These are all optical media, so why do CDs only hold about 700MB, while Blu-Rays can hold 50GB of data?
- Blu-Ray uses a higher frequency laser
- hence lands & pits are able to be put closer together
- i.e. more lands & pits are able to be fit onto the disc

### Optical Discs: Read vs Read-Write

- For any read-only disc (CD-R, CD-ROM, DVD-R, Blu-Ray-R), we can use pits & lands
- Because pits are burnt with a laser and some of the material is lost, if we want to change a pit to a land, we can’t
- Hence any optical media using pits & lands is read-only
- For read-write optical media, we need a slightly different approach

### Read-Write Optical Discs

- For CD-RW, DVD-RW, Blu-Ray-RW, the reflective surface is a special alloy material.
- When data is being written (“burnt”), heat generated by laser turns alloy material into a liquid
- Intensity of that laser beam determines when, when cooled, the alloy will be an either crystalline or amorphous form
- Crystalline is shiny – amorphous is dull, hence the strength of the reflection correlate to a 1 or 0

## Crystalline = shiny; amorphous = dull

### Optical Discs: Access

- Since the laser can move forwards and backwards to any radius (and then wait for the corresponding sector to rotate underneath it), then optical discs – like magnetic hard drives – are also considered direct access

### Solid-State Media

- Despite continued improvement in optical and magnetic technology, there is now a solid competitor, that outshines both, particularly when fast-access of data is key
- This is referred to as ‘flash’ memory – that is memory based on semiconductors (NAND or NOR gates), with no moving parts
- SSDs, USBs, SD cards, EEPROM etc – these all use the same principles

### Solid-State Media

- Based on semiconductors, with no moving parts
- Circuits consist of arrays of transistors, acting as memory cells
- Most frequent flash memory is referred to as ‘NAND’, since operation functions like NAND logic gates
- Writing & reading is handled by NAND flash controller
- Block = several pages of memory (blocks can be from 16kiB to 512kiB)
- Unlike other storage mediums (HDDs etc), entire blocks can be erased at once – in a ‘flash’
- To write data, a block has to be erased, then written to
- When reading, several pages can be read at once

### Solid-State Media - Operation

- Floating gate can store electrons since it’s surrounded by insulating layers – presence or not of electrons = 1 or 0
- To add electrons to floating gate, the control gate is positively charged, hence electrons are attracted from substrate layer into floating gate where they are trapped

- To remove electrons from floating gate, the control gate is negatively charged, causing the electrons to be repelled from the floating gate back to the substrate

### Solid-State Media

- SSD Operation: https://www.youtube.com/watch?v=5Mh3o886qpg

### SSDs vs HDDs

- 2-6x faster speed (reading & writing)
- 100x lower latency (access time)
- Supports more I/O per second (IOPS)
- No fragmentation
- No fine arm/disc etc, so less prone to damage
- Silent operation
- Lighter/more portable

- 2-4x cheaper – can get higher capacity for same price

### SSD vs HDD

- For each scenario, justify which device you would choose an why
- A server hosting a database for a popular website
- A personal storage device for music and movies
- A personal storage device for large (20-100GB) games
- A backup, which you only plan on using if your main drive fails
