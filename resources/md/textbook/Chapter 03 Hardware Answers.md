# Chapter 03 SB Answers

**Course:** Cambridge International AS & A Level Computer Science (9618)
**Source:** A Level Textbook/Chapter 03 SB Answers.pdf

---

Cambridge International AS & A Level Computer Science

Chapter 3 Student Book Answers
What you should already know
1   Memory – an immediate access store is RAM and ROM which are directly accessed by the CPU.
    Storage – an external devices such as HDD, SSD which are not directly accessed by the CPU.
              Internal memory is RAM and ROM.
              RAM stores instructions, data and the part of the OS currently in use.
              Data in RAM is lost if the power is turned off.
              RAM is a very fast memory but relatively small and expensive per byte.
              ROM stores data which can’t be lost or deleted but cannot be changed.
            External storage is much larger than RAM/ROM but is not volatile and less expensive per
             byte than RAM/ROM.
3   i) DVD/CD player
    ii) RAM/ROM
    iii) SSD
    iv) HDD
4   Online – storage connected to and under the control of a computer.
    Offline – storage not connected to and under the control of the computer.
5   Data access time – the time taken to locate and read data on a storage or memory device.
    Data transfer rate – the time taken to transfer data from storage or memory to CPU or other
    device.

Activity 3A
1   a) i)         RAM
                     temporary memory (contents can be changed)
                     can be written to/read from
                     used to store data, files, instructions, part of OS currently in use
                   volatile memory (contents lost when power turned off).
                  ROM
                     non-volatile memory (memory contents retained even when power is lost)
                     permanent memory (contents cannot be changed)
                     contents can only be read
                   used to store start up data (e.g. BIOS).
        (ii)      DRAM
                     needs to be constantly refreshed
                     less expensive to manufacture than SRAM
                     consumes less power than SRAM
                     higher storage capacity than SRAM
                     main memory is constructed from DRAM.

Cambridge International AS & A Level Computer Science                                              1
© Helen Williams and David Watson 2020

                                 Cambridge International AS & A Level Computer Science Answers

        SRAM
                    no need to constantly refresh since it uses flip-flop circuits
                    has a faster data access time than DRAM
                    processor memory cache uses SRAM.
    b) Magnetic
         uses magnetic properties to store data
         uses disk surfaces (coated in magnetic material)
         disks rotate and data is read/written using a read/write head which floats above the disk
          surface.
        Optical
             uses disks which are coated in light-sensitive material
             data is read/written by red or blue laser light as disk rotates
             no contact made with disk surface during read/write operation
         DVD uses dual layering to increase data storage capacity.
        Solid state
             no moving parts
             uses NAND/NOR chips to store data
             relies on flow of electrons to control read/write operations
             can’t overwrite data; data needs to be deleted first and new data is written in the same
              location
         uses a matrix with two transistors at each intersection
         one transistor is floating gate
         one transistor is control gate.
2   a) Inkjet printer
         uses ink droplets which are ejected onto paper by piezoelectric or heat
         paper advances line by line during printing as head moves across the page
         ink is in liquid form and contained in cartridges.
        Laser printer
         uses static electricity to print characters/images
         ink is in the form of a dry powder (known as toner)
         uses an electrostatically charged drum where paper is charged and areas for printing have
              opposite charge
         ink is charged and only sticks to areas of paper with opposite charge
         print is fixed to paper by passing paper over a heated drum.
    b) i)          Laser – colour leaflets which need to be produced quickly in their 100s.
                   Inkjet – one-off high-quality photographs.
        ii)        Laser – large capacity paper trays and high speed, high quality printing; ink cartridges
                   last much longer than inkjet before needing to be changed.
                   Inkjet – for one-off job, printing is just as quick as laser; better quality printing when
                   printing images.

Cambridge International AS & A Level Computer Science                                                       2
© Helen Williams and David Watson 2020

                               Cambridge International AS & A Level Computer Science Answers

     preserves the valuable art works
     allows many people to see the paintings since 3D replica can be produced as required
     allows full investigation of a painting without any risk of damaging the original (e.g. close
         view of brush strokes, amount of paint used on each part of canvass; allows the possibility of
         authenticating a new painting).
        the light sensor sends data to the ADC interface
        this changes the data into digital and sends it to the microprocessor
        the microprocessor samples the data every minute (or at some other frequency rate)
        if the data from the sensor < value stored in memory …
        … a signal is sent from the microprocessor to the street lamp
        … and the lamp is switched on
        the lamp stays switched for 30 minutes before the sensor readings are sampled again (this
         prevents the lamp flickering off and on during brief heavy cloud cover for example)
        if the data from the sensor >= value stored in memory …
        … a signal is sent from the microprocessor to the street lamp
        … and the lamp is switched off
        the lamp stays switched off for 30 minutes before sensor readings are sampled again (this
         prevents the lamp flickering off and on during heavy cloud cover for example).

Activity 3B
1   a)
             A         B         X
             0         0         1
             0         1         0
             1         0         0
             1         1         1
    b)
            A          B        C         X
            0          0        0         1
            0          0        1         1
            0          1        0         0
            0          1        1         1
            1          0        0         0
            1          0        1         1
            1          1        0         0
            1          1        1         1
    c)
            A          B        X
            0          0        0
            0          1        0
            1          0        0
            1          1        0

Cambridge International AS & A Level Computer Science                                                     3
© Helen Williams and David Watson 2020

                              Cambridge International AS & A Level Computer Science Answers

     d)
           A          B         C        X
           0          0         0        1
           0          0         1        0
           0          1         0        1
           0          1         1        1
           1          0         0        0
           1          0         1        1
           1          1         0        1
           1          1         1        0

     e)
            A          B        C         X
            0          0        0         0
            0          0        1         0
            0          1        0         0
            0          1        1         1
            1          0        0         1
            1          0        1         1
            1          1        0         0
            1          1        1         1

Activity 3C
a)

             A         B         X
             0         0         0
             0         1         1
             1         0         1
             1         1         1

Cambridge International AS & A Level Computer Science                                     4
© Helen Williams and David Watson 2020

                              Cambridge International AS & A Level Computer Science Answers

b)

            A          B        C         X
            0          0        0         1
            0          0        1         1
            0          1        0         0
            0          1        1         0
            1          0        0         0
            1          0        1         0
            1          1        0         0
            1          1        1         0

c) (K = 1 OR L = 1) OR (K = 1 AND M = NOT 1) OR (M = 1)

             K         L        M         T
             0         0        0         0
             0         0        1         1
             0         1        0         1
             0         1        1         1
             1         0        0         1
             1         0        1         1
             1         1        0         1
             1         1        1         1
Cambridge International AS & A Level Computer Science                                     5
© Helen Williams and David Watson 2020

                              Cambridge International AS & A Level Computer Science Answers

d) X = (A = 1 AND B = 1) OR (B = 1 AND C = 1)

            A         B         C         X
            0         0         0         0
            0         0         1         0
            0         0         1         0
            0         1         1         1
            1         0         0         0
            1         0         1         0
            1         1         0         1
            1         1         1         1

e) (A = 1 AND B = 1) AND (B = 1 OR C = NOT 1)

             A         B         C         R
             0         0         0         0
             0         0         1         0
             0         1         0         0
             0         1         1         0
             1         0         0         0
             1         0         1         0
             1         1         0         1
             1         1         1         1

Cambridge International AS & A Level Computer Science                                     6
© Helen Williams and David Watson 2020

                              Cambridge International AS & A Level Computer Science Answers

Activity 3D
a) X = 1 if (R = NOT 1) OR (C = 1 AND T = NOT 1) OR (R =1 AND T = NOT 1)

          R          T          C           X
          0          0          0           1
          0          0          1           1
          0          1          0           1
          0          1          1           1
          1          0          0           1
          1          0          1           1
          1          1          0           0
          1          1          1           0

b) (G = 1 AND W = NOT 1) OR (G = NOT 1 AND R = 1) OR (W = 1 AND R = 1)

Cambridge International AS & A Level Computer Science                                     7
© Helen Williams and David Watson 2020

                              Cambridge International AS & A Level Computer Science Answers

             G        R        W          S
             0        0        0          0
             0        0        1          0
             0        1        0          1
             0        1        1          1
             1        0        0          1
             1        0        1          0
             1        1        0          1
             1        1        1          1

Activity 3E
         A       B   C             A     B        C     A   B
         0       0   0             0     0        0     0   1
         0       1   0             0     1        1     1   0
         1       0   0             1     0        1
         1       1   1             1     1        1
2   a)

             A       B          C             X
             0       0          0             1
             0       0          1             0
             0       1          0             1
             0       1          1             0
             1       0          0             1
             1       0          1             0
             1       1          0             1
             1       1          1             1

Cambridge International AS & A Level Computer Science                                     8
© Helen Williams and David Watson 2020

                              Cambridge International AS & A Level Computer Science Answers

    b)

          A             B          X
           0            0          0
           0            1          1
           1            0          1
           1            1          0

           A        B          X
           0        0          1
           0        1          0
           1        0          0
           1        1          0

    Same as a NOR gate

Activity 3F
1   a)
    b) the truth table will only generate a 0 when all inputs are 1

Cambridge International AS & A Level Computer Science                                     9
© Helen Williams and David Watson 2020

                                Cambridge International AS & A Level Computer Science Answers

2   a)

    b)
               A            B         C         X
               0            0         0         1
               0            0         1         0
               0            1         0         0
               0            1         1         0
               1            0         0         0
               1            0         1         0
               1            1         0         0
               1            1         1         0
    c)
              A         B         C       D         X
              0         0         0       0         1
              0         0         0       1         0
              0         0         1       0         0
              0         0         1       1         0
              0         1         0       0         0
              0         1         0       1         0
              0         1         1       0         0
              0         1         1       1         0
              1         0         0       0         0
              1         0         0       1         0
              1         0         1       0         0
              1         0         1       1         0
              1         1         0       0         0
              1         1         0       1         0
              1         1         1       0         0
              1         1         1       1         0

Cambridge International AS & A Level Computer Science                                       10
© Helen Williams and David Watson 2020

                                Cambridge International AS & A Level Computer Science Answers

             A              B           C            X
             0              0           0            1
             0              1           1            1
             0              0           0            1
             0              1           1            1
             1              0           0            1
             1              1           1            1
             1              0           0            1
             1              1           1            0

Extension Activity 3A
a) RAM – store user settings, for example, time
   ROM – store factory settings, for example, microwave frequencies
b) RAM – stores user settings, for example, temperature
   ROM – store cooling logic, sensor readings, and so on
c) RAM – store directions sent from remote or programmed flight pattern
   ROM – store factory setting such as radio frequencies

Extension Activity 3E
1   a) completes circuit between top and bottom conductive layer
    b) use of keyboard buffers and interrupts
2   a) i) movement of wheels allows mouse to know its x-y position
       ii) red light used to allow x-y direction/position to be monitored
    b) USB is direct serial wired data connection with computer
       wireless uses Bluetooth to communicate with computer

Extension Activity 3G
    A         B        A.𝐁         𝐀.B       A.𝐁 + 𝐀.B     A+B        𝐀. 𝐁      (A + B).𝐀. 𝐁
    0         0         0           0            0           0          1            0
    0         1         0           1            1           1          1            1
    1         0         1           0            1           1          1            1
    1         1         0           0            0           1          0            0

Extension Activity 3H
NOR gate

End of chapter questions
1   a) OLED technology
           OLED screens are thinner and lighter and therefore more flexible.
           They have a brighter output than equivalent LED/LCD screens.
           OLED requires no backlighting.
           They use less power than equivalent LED/LCD screens (very important on portable
            devices).
         Screens can be moulded into any shape required.
         The colours are more vivid/better contrast.

Cambridge International AS & A Level Computer Science                                          11
© Helen Williams and David Watson 2020

                                 Cambridge International AS & A Level Computer Science Answers

    b)
              human eye has limited detection of different colour hues
              depends whether or not tv is set up properly
              over time screen output deteriorates
              unnecessary to have such a range of colours
         questionable advantage
       (many other reasons to consider)
2   a) i)
                can’t be changed by users
                software loaded up automatically on powering up
                always available
         ii)
                  because many changes are made during the development stage
                  EPROM can be altered as required
                  ROM chip can’t be changed once written to
                  expensive to replace ROM chip each time a change/update is made
         iii)
                fast access for working memory
                values can be written to RAM, for example, current score
         iv)
                possibility of saving to a memory stick
                possibility of linking to larger screens
                possibility of connecting to devices such as printers
    b)
          less expensive to build prototypes
          other methods require new mould to be made every time design is changed
3   a) Control
          Sensor data is used by the microprocessor or computer to decide if any action needs to be
               taken to keep a process within correct parameters.
          The output from the system affects next set of inputs.
         Monitoring
          Sensor data is used by the microprocessor or computer to check whether it is within
               stored/set parameters.
          If data is outside set parameters, a warning is sent to the user (on screen warning or sound).
          The microprocessor/computer has no effect on what is being monitored/it simply ‘watches’
               the process.

Cambridge International AS & A Level Computer Science                                                   12
© Helen Williams and David Watson 2020

                                Cambridge International AS & A Level Computer Science Answers

    b)

          Sensor 1 measures temperature and sensor 2 measures humidity level.
          Sensor 1 data is continuously sent to the microprocessor via the ADC (if analogue in
             nature); this converts data to digital format.
          If temperature < temperature setting, then a signal is sent out from the microprocessor to
             the air con unit to increase heat output.
          If temperature > temperature setting, then a signal is sent out from the microprocessor to
             the air con unit to increase output of cooling air.
          If the two values are the same, no signals are sent by the microprocessor.
          Sensor 2 data is continuously sent to the microprocessor via ADC (if analogue in nature);
             this converts data to digital format.
          If humidity > set level, a signal is sent out from the microprocessor to the air con unit to
             activate the dehumidifier.
          If humidity < set level, a signal is sent out from the microprocessor to the air con unit to
             increase moisture level in the air being output.
          If the two values are the same, no signals are sent by the microprocessor.
4   order: A – 4, B – 6, C – 1, D – 9, E – 2, F – 7, G – 3, H – 8, I – 5
5   a)

    b) RAM
            loses contents when powered off/volatile
            temporary memory (contents can be erased or changed)
            stores files/part of OS/data/instructions currently in use
            data can be read from/written to
            often have larger capacity than ROM.

Cambridge International AS & A Level Computer Science                                                     13
© Helen Williams and David Watson 2020

                                  Cambridge International AS & A Level Computer Science Answers

         ROM
            doesn’t lose contents on powering off/non-volatile
            contents cannot be altered/permanent memory
            read only memory
          can be used to store, for example, BIOS, bootstrap.
    c    DVD
            laser/optical media
            phase changing recording
            rotating disk and single spiral track (centre to outer rim)
            uses dual layering
           uses red laser (DVD) or blue laser (Blu-Ray DVD).
         Flash memory
            NAND-based solid state memory
            no moving parts
            uses matrix with two transistors at each intersection
            one transistor is a floating gate
            second transistor is a control gate
            uses movement of electrons to control R/W operations
            can’t overwrite data with new data; need to erase existing data and then write new data in
             the same location.
6   a)

    b)
             A         B           C             X
             0         0           0             1
             0         0           1             1
             0         1           0             1
             0         1           1             0
             1         0           0             1
             1         0           1             1
             1         1           0             1
             1         1           1             1
    c) ((NOT A AND B) OR (NOT B OR C)) AND NOT C
       (A . B + (B + C)) . C

Cambridge International AS & A Level Computer Science                                                     14
© Helen Williams and David Watson 2020