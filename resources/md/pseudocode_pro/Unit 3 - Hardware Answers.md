# Unit 3 - Hardware Answers

**Course:** Cambridge International AS & A Level Computer Science (9618)
**Source:** Unit 3 - Hardware Answers.pdf

---

1) Most programs go through the 3 stages - these can be remembered with the acronym IPO. A computer system should provide all
of these features:

input --> process --> output

2) What is the difference between storage and memory?

Memory = can be directly accessed by CPU, RAM is volatile, ROM is non-volatile
Storage = permanent/non-volatile, usually high-capacity & slower-access than memory

3) Name 3 primary storage (memory) devices and 3 secondary storage devices
Primary Memory: RAM, ROM, registers, cache
Secondardy Storage: HDD, SSD, optical (CD, DVD, Blu-Ray), USB flash drive, magnetic tape etc

4) State a suitable storage device for each scenario:

      A government wanting reliable, long-term storage of its important documents for 100s of years
       Magnetic tape

     A teacher wanting to collect students work on a physical device
      USB flash drive

     Fast 1TB storage for your computer
      SSD

     Slower, but cheaper 2TB storage for your computer
      HDD

     A movie studio distributing a HD movie, which they don’t want users to modify
      Read-only Blu-Ray

     Someone wanting a storage medium to store songs - this storage medium should allow the content to be modified - e.g. if they
      stop liking the song and want to replace it with another
      Could be any internal/external HDD/SSD, writeable optical storage (CD/DVD/Blu-Ray) etc

5) Order the following components (main memory, hard disk, registers, auxiliary storage, cache) from their distance from the
processor and complete the table. Type could be one of the following: processor, primary storage or secondary storage. The other
columns should be complete like the distance column is - with appropriate adjectives e.g. “cheapest”, “slowest” etc

    Distance       Component              Type            Access time           Capacity           Physical Size       Price (per bit)
    Closest         Registers            Primary           Very fast           Very Small           Very small        Very Expensive

                      Cache              Primary              Fast                Small                Small            Expensive

                  Main Memory            Primary            Medium              Medium               Medium              Medium

                    Hard Disk          Secondary              Slow                Large                Large              Cheap

    Furthest    Auxiliary Storage      Secondary           Very Slow         Depends - e.g.         Depends              Depends
                                                                               micro SD =
                                                                             small…external
                                                                              HDD = large

6) volatile storage devices are those where the data is lost when the device is turned off - examples are RAM, cache & registers. In
contrast, non-volatile storage devices are those that retain the data stored on them, even after the device is turned off - examples
include HDDs, SSDs, optical storage, magnetic tape, USB flash drives etc

7) Complete the table about input devices:
Device                 Description
      Keypad           Allows entry of digits - e.g. for an ATM machine

    Microphone         Captures sound in the surrounding environment

      Scanner          Used to create digital copies of documents

      Mouse            A device that allows the user to move a cursor around a GUI

 Games Controller      A hand-held device used for console games

     Keyboard          Allows input of typical ASCII characters

  Infra-red Sensor     Uses light below red on the EM spectrum - often used to measure heat/motion/presence

   Camera/light        Captures light of the surrounding environment and converts it to a digital format
    sensor/CCD

   Touchscreen         Enables user to touch portion of screen they wish to interact with

  Remote Control       Often used to control household appliances - TVs, air conditioners etc

  Graphics Tablet      Allows input via a stylus - useful for architects, engineers, digital artists, digitising a physical signature etc

8) Complete the table about output devices:
Device                 Description
     CRT Screen        Electron beams are fired and deflected with electromagnets - electrons will hit phosphurs, which will light
                       up either red, green or blue
    Inkjet Printer     Good for outputting rich colours - uses ink, nozzles and a stepper motor

  LED/LCD Screen        Uses a backlight, ______ _______ which can be polarised upon an electric current being passed through
                        them and rgb filters
       Plotter          A special machine able to output vector graphics onto a variety of materials - paper, cloth, metal/plastic cut-
                        outs etc
     3D Printer         Builds objects layer-by-layer - often uses plastics, but can also use metal or other materials

    Laser Printer       Good for outputting text - uses a electrostatically charged drum, _____, toner, mirrors and rollers

Speaker/headphones      Outputs a digital sound signal via an eletromagnetic, AC current and vibrating diaphragm

    VR Headset          A wearable device for users to immerse themselves in 3D environments - e.g. games or large
                        engineering/construction projects
      Actuator          A device that converts an electrical signal into a physical movement - linear, rotation etc - e.g. to open a
                        door, control a robot arm etc

9) The physical place you plug a peripheral device into is called a port. In order for these peripheral devices to communicate with the
operating system, device drivers have to be installed when you first connect the device to the PC. . Sometimes this process requires
the user to perform a manual download & install, but usually it’s automatic thanks to plug and play capabilities

10) Define the term “embedded system” and give 3 examples of embedded systems
A device developed for one specific task - it will contain a microprocessor, memory and some I/O capibilities. Modifying the device’s
behaviour is very difficult/impossible. Examples: smart fridge, self-driving car, smart watch etc

11) What 3 hardware components must a device have for it to be considered an embedded system?

Microprocessor, memory, I/O

12) Suppose someone wanted to create a remote-control plane - what would be the advantages of creating an embedded system,
rather than fitting it with a general-purpose computer?
Would be cheap, small, lightweight, use low-power - might not require too high processing capabilties/lots of features, so a simple
embedded system with simple hardware developed and programmed for this exact task would be sufficient/optimised for this task.
A relatively simple embedded system might also be more reliable than a much more complex general purpose device, where
naturally, there is a lot more that can go wrong

13) Complete the sentence: the “Internet of Things”, or IoT devices, is the name given to…embedded devices that share data with
other devices over the Internet - examples could be home-security systems that can notify a homeowner of threats remotely, a
smartwatch that uploads running data so you can e.g. see your progress over time etc

14) List two potential issues if someone has many IoT devices in their house (hint “s” and “p”)?
Security - can be hacked since they are connected to the Internet
Privacy - lots of personal/private data is often transmitted

15) Why is RAM called “random-access” memory? Name 2 other random-access memory/storage devices and 1 serial access
storage device
RAM is random-access since bytes can be read in the same time regardless of their physical location on the device. Other random-
access devices include SSDs and cache. In contrast, for serial devices, all preceding data has to be read in order to find the position
of the data we are trying to read - examples include magnetic tape and some old optical media that uses spiral rather than
concentric tracks

16) Complete the following statements, using the terms dynamic RAM (DRAM) or static RAM (SRAM) where appropriate (I.e. there
are other answers too…not only these 2)

A computer is listed as having 16GB of RAM - this will be DRAM

DRAM is constructed from capacitors which leak electricity, hence they need recharging every few milliseconds in order to retain
their data. In contrast, SRAM is constructed from transistors, hence doesn’t need recharging and therefore uses less power when
idle and generates less heat

SRAM is faster than DRAM, hence it is used for speed-critical components in/close to the processor, such as registers and cache

Although it is faster and uses less electricity when idle, unfortunately SRAM is more expensive than DRAM. It also has a lower
memory density, too

17) What is cache, where is it used, what does it store and why do we need it?
Cache is small, temporary, fast-access memory located in/close to the CPU cores - it’s used to store frequently used instructions &
data, as well as instructions/data that is about to be used (cache pre-fetching)

18) Currently-running/loaded programs and data are stored in RAM, while things such as the BIOS is stored in ROM

19) The main functions of the BIOS are to check the hardware for errors and start the bootstrap program which loads the operating
system from secondary storage into RAM

20) Complete the following table about different types of ROM: ROM, PROM, EPROM, EEPROM

Type            Stands for        Programmable by/times       Distinguishing        Advantages           Disadvantages
                                                              features
ROM             Read-only         Only once - in factory                            Security/integrity   Not flexible for same reason -

                 memory                                                           -   can’t     be     no way to update if
                                                                                  modified by user     bug/vulnerability       detected
                                                                                                       after production. Recall of
                                                                                                       devices might be required if
                                                                                                       bug is critical
PROM             Programmable     Only once - by user                             Security/integrity   Not flexible for same reason -
                 read-only                                                        - only modified      no way to update if
                 memory                                                           once                 bug/vulnerability       detected
                                                                                                       after production. Recall of
                                                                                                       devices might be required if
                                                                                                       bug is critical
EPROM            Erasable         Can be programmed          Window to let UV     Flexible - can       Requires removing chip from
                 programmable     repeatedly using UV        light through        update hence fix     device. Most people don’t
                 read-only        light                                           bugs,    upgrade     have UV writing machine.
                 memory                                                           etc.                 Writing is slow and requires
                                                                                                       erasing whole chip first
EEPROM           Electrically-    Programmed repeatedly                           Flexible - can       Possibly        shorter    data-
                 erasable         using electricity from                          update hence fix     retention duration - frequent
                 programmable     host device                                     bugs,    upgrade     writes can damage chip.
                 read-only                                                        etc.      Doesn’t    Limited number of write
                 memory                                                           need     to    be    cycles. More expensive
                                                                                  removed     from
                                                                                  host device

21) Often, data might be incoming faster than it can be processed - in these cases, we require a buffer to temporarily store the data
as it’s waiting to be processed

22) List some advantages of a resistive touchscreen compared to a capacitive touchscreen and vice-versa. Also list several use-cases
for each
Resitive:
 Durable
 Cheap
 Work with any material – e.g. for factory workers wearing gloves
 Not affected by water – can work outside in rain, snow etc – good for engineers, architects etc

Uses: Interactive whiteboards, ATMs, old games consoles (Nintendo DS), factory touchscreens, ticket/information machines,
tills/self-checkout machines, media players on/in planes/trains/cars, some credit card machines where you have to write your
signature, printer/photocopier interface

Capacitive:
 Supports multi-touch
 Supports gestures (swipe, pinch etc)
 Clearer screen (90-98%) of LCD light let through

Uses: Modern smartphone, tablets, some touchscreen laptops, HD, indoor, glass touchscreen displays

23) Complete the table about inkjet vs laser printers:

Feature                       Inkjet                                               Laser
Printing substance            (Liquid) ink                                         Toner (powder)

Colour quality                High                                                 Medium

Accuracy (fine details)       Low                                                  High

Print speed                   Low                                                  Fast

Physical size                   Smaller                                           Bigger

Cost of printer                 Cheaper                                           More expensive

Cost of printing substance      More expensive                                    Cheaper

Good for                        Photos, posters - where we need high-quality      Text documents, where we want fine details or
                                colours                                           fast-printing speed

24) The diagram shows a hard disc drive - choose appropriate words for the labels 1-3:

1: block 2: track 3: cylinder

25) Briefly explain how the following work:

Keyboard:
 When a key is up, the circuit is incomplete – when pushed down, the circuit becomes complete, resulting in an electrical signal
 Electrical signal travels to the keyboard’s microprocessor and is compared to the character map stored in the keyboard’s ROM
 OS can then use these mappings to represent value/perform function (e.g. typing a letter or performing functions as in the case
    of CTRL + C etc)

CRT screen:
 A electron beam for each of the colours (RGB) is fired at screen
 Magnets are used to deflect beam to specific pixel/row
 Electron beams pass through shadow mask and a light up specific type of phosphor that glows either red, green or blue

LCD screen:
 White ‘backlight’ that is entire size of screen
 Light is passed through horizontal polariser
 When light passes through liquid crystals, it becomes vertically-polarized
 If electrodes around crystals are turned on, electro-magnetic field created, changing alignment of crystals, hence stopping
     them changing the polarization of light
 RGB filters used
 Vertical polariser – only vertically polarised light will be let through
 Amount of light we want to pass through is controlled by electrodes

LED screen:
 LED screens are identical to LCD screens, except for the first step: LED screens use LED’s as the backlight – while LCD’s use
     another technology (CCFLs – cold cathode fluorescent lamps)

Resistive touchscreen:
 Outer layer is conductive
 Inner layer is resistive
 Electric current constantly running between electrode
 When press causes layers touch, the circuit is complete
 Resulting co-ordinate is interpreted by software

Capacitive touchscreen:
 Electrode has a low electrical charge
 When a conductive material (e.g. finger) touches the protective cover, a small amount of that charge is absorbed
 Part of electrode film now has a lower charge, hence this is the location the touch is detected to be

Camera:
 Light refracted through lens
 Diaphragm controls how much light is let through
 Shutter opens/closes for long/short exposure times
 Light signals recorded by CCD at back – converted to colour profile/RGB/CMYK etc

Scanner:
 Image/text on material (e.g. paper) is placed on the scanner
 The lid is closed
 The scanner’s light starts moving from one end to the other
 Reflected light is directed by mirrors and lenses to a charge-coupled device (CCD)
 CCD contains array of photo-sensitive cells
 Cell produces electrical response correlating to intensity of light in each cell
 CCD needs an analogue-to-digital converter to turn light signals into binary data

Microphone
 Diaphragm (flexible material) which vibrates when hit by incoming sound waves (like an ear drum)
 Diaphragm is connected to an magnet inside a coil - as the diaphragm moves, so does the magnet
 The movement of the magnet inside the coil generates an alternating current
 This current is converted to a binary signal, by an analogue-to-digital converter (ADC)

Speaker:
 Digital audio data converted to analogue using digital-to-analogue converter (DAC)
 Analogue signal represents a varying electrical current
 Current flows through coil suspended within a magnetic field by a permanent magnet in the speaker
 As the size and direction of current keeps changing, the coils move backwards and forwards
 The movement controls the movement of the diaphragm – i.e. these vibrations generate the sound

Inkjet printer:
 Paper fed in to printer
 Liquid ink is stored in cartridges
 Printhead moves across the sheet horizontally
 Nozzles in printhead spray ink (CMYK) at correct positions
 Paper then moved forward, to print the next row
 Previous 3 steps repeat, until whole sheet has been printed

Laser printer:
 Drum is electrically-charged
 Drum starts to revolve
 Laser is reflected by a mirror and shone onto the drum – this will remove charge from drum; turning the laser off ensures the
     charge stays

    Process repeats until full-page electrostatic image on drum has been created
    Drum coated with charged toner that sticks to positions where drum has NO CHARGE
    Drum rolls over sheet on paper, transferring toner to paper
    Paper discharged and passed through heated rollers to fuse toner to paper
    Drum is discharged, ready for next page
    For colour printing separate coloured toners required and steps have to be repeated

3D printer:
 3D design created in 3D modelling/CAD (computer-aided design) software
 Data for bottom layer transmitted to 3D printer
 Nozzle using e.g. plastic/some other material used, spraying it to form the layer
 The layers are built sequentially – the current being built on top of the previous
 Object is ‘cured’ in some way, to ensure material sticks and holds together

Plotter:
 Vector graphic loaded into plotter’s memory
 A stylus is attached to an arm that can move to any x-y co-ordinate
 This movement is hence used to draw the picture, cut out the shape etc

Optical mouse:
 Has a small camera inside which takes between 2,000-30,000 pictures per second
 Two types: red LED simply illuminates surface, so camera doesn’t only capture black, while infra-red versions measure
     pits/lands of surface
 This is why optical mice don’t work well on smooth surfaces – e.g. glass
 Image of current frame is compared to previous, to work out how much & in what direction the mouse has moved
 Movement data is sent to operating system, for it to move the cursor on screen

Trackball mouse:
 Ball touches horizontal and vertical rollers
 Ball movement causes one or both of the rollers rotate as well
 Each roller connects to a shaft which spins a disk with holes
 Infrared beams shine through the holes in the disks
 As the ball moves the roller the beam is broken by the space between the holes, creating pulses of light
 The distance the mouse moves is determined from the rate of the pulses by an on-board processor chip // by driver software in
     the computer

Hard disk drive
 Disks are attached to a spindle (which spins)
 There is more than one platter (disk)
 Each platter has a read-write head for each side
 The platters spin in unison (all together & at same speed)
 The read-write heads are attached to actuator arms which allow them to move over the disk to the correct track
 R/W head waits for correct block to rotate underneath it, then starts reading/writing data
 The motion of each read-write head is synchronized with the other heads
 A cushion (gap) of air less than the width of a human hair ensures that a head does not touch the platter surface
 As data is read, it is sent to a buffer for the OS to process

Solid-state drive
 Based on semiconductors, with no moving parts
 Circuits consist of arrays of transistors, acting as memory cells
 Most frequent flash memory is referred to as ‘NAND’, since operation functions like NAND logic gates
 Writing & reading is handled by NAND flash controller
 Block = several pages of memory (blocks can be from 16kiB to 512kiB)
 Unlike other storage mediums (HDDs etc), entire blocks can be erased at once – in a ‘flash’

    To write data, a block has to be erased, then written to
    When reading, several pages can be read at once
    Floating gate can store electrons since it’s surrounded by insulating layers – presence or not of electrons = 1 or 0
    To add electrons to floating gate, the control gate is positively charged, hence electrons are attracted from substrate layer into
     floating gate where they are trapped
    To remove electrons from floating gate, the control gate is negatively charged, causing the electrons to be repelled from the
     floating gate back to the substrate

Read-only optical media - e.g. a CD-R, DVD-R
 Disc has a singular spiral track, from inside to out (as opposed to magnetic hard drives, which have many circular tracks)
 The disc spins (slowing down as the laser moves outwards, since otherwise the greater circumference of the outer sections
    would mean it was spinning too fast)
 Laser moves from inside to out
 The track on the surface has ‘pits’ and ‘lands’

    Difference in reflection from a pit (minimal reflection) compared to land (maximum reflection) can be detected by detector –
     difference in intensity correlates to a bit value (1 or 0)

Read-write optical media - e.g. CD-RW, DVD-RW, Blu-Ray
 Same as read-only, except rather than physical pits/lands, a chemical coating is used - depending on the intensity of the laser
    used to write, when the substance cools, it will form either a crystalline (shiny) or amorphous (dull) atomic structure
 The amount of light reflected will then correspond to a bit.
 By using the laser at the correct frequency, crystalline parts of the disk can be made amorphous or vice-versa - this allows us to
    write many times

26) Answer the following questions about optical media:

Why would software companies historically distribute their software on CD-ROMs?
Since the are read-only, this would prevent users modifying the contents of their software/game etc. Also cheaper than CD-RW

Why do Blu-Rays have a higher storage capacity than DVDs, which in turn have a higher storage capacity than CDs if they
fundamentally use a very similar technology?
A higher frequency (hence lower wavelength) laser is used to use Blu-Rays, therefore the pits and lands on the disk are able to be
spaced closer together. This higher storage density is why they have a higher capacity.