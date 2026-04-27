# Unit 7 - Monitoring & Control Systems Presentation

## Unit 7 – Monitoring & Control Systems

### Monitoring Systems

- Used to record the condition of the system over a period of time
- Often used to detect/alert people if conditions leave desired range (e.g. machine too hot, humidity too high, chemical balance incorrect etc)

### Monitoring Systems

- Why use devices (digital/analogue) to record data, rather than having a human record it?
- Higher accuracy
- Higher frequency (e.g. can reliably take measurements at fixed micro/milli/second precision)
- Availability - can monitor 24/7, 365

### Monitoring Systems

- To measure the data, a sensor will be required, with a computer/microprocessor required to process and/or store the data

### Sensors

- Challenge: how many different types of sensors can you name?

### Sensors

- Thermistor
- Humidity
- Pressure
- Infra-red
- Ultra-violet
- Sound (microphone)
- Ultra-sonic
- pH

- Motion
- Light
- Chemical/gas/CO2/CO
- Accelerometer
- Gyroscope
- Touch
- Barometer
- Radar

### Sensors

- Note: a sensor does not have any built-in intelligence, so it can’t take action if there is a problem
- This is where the computer/microprocessor comes in. In a system, it could e.g. sound an alarm, shutdown the system, send a notification to the operator, try to adjust the system to bring it back within normal range –e.g. by turning on cooling fans etc

### Infra-red Sensors

- For infra-red sensors – and various others too – they can be either passive or active.
- Passive: simply measures the level of infra-red received
- Active: sends out infra-red beam and measures amount reflected

### Infra-red Sensors

- Do you know an example of passive and active infra-red sensor uses?
- Passive: motion/heat sensors – e.g. to detect intruders/burglars
- Active: smoke detectors, quality control (e.g. measuring thickness of paper) etc

### Ultra-sonic Sensors

- Can you also think of an active and passive(?) example of a ultrasound/ultra-sonic sensor?
- Passive: marine-biologists listening to animal sounds
- Active: ultra-sound baby scans, detecting pipes/cracks in walls, anti-collision for self-parking cars,

### Generic Sensors

- Some sensors can be created using multiple different approaches – e.g. a “motion sensor” could use infra-red, visible light, ultra-sound, radio waves etc
- For all of these different types, you can simply refer to it as a “motion sensor”

## Control Systems

### Control systems

- As mentioned, a sensor on its own can simply detect conditions in the system
- A control system takes that a step further – both being able to detect and change (control) the conditions of a system, trying to ensure they stay within the ideal range

### Control systems

- What might happen if conditions leave the desired range?
- Risk of danger to people/damage to machines
- Lower efficiency
- Lower quality/failed products
- Inaccurate conclusions
- etc

### Actuator

- The control element of a control system may need an actuator – an electric motor connected to a controlling device that could e.g. switch on/off a machine or adjusting a setting

### Control systems

- For example, imagine a greenhouse – if the humidity got too low, what could the control system do?
- Turn on the sprinkler (watering) system

### Control systems

- We’ll now see an example diagram of a control system – note, in reality, the ADC would most likely be part of the sensor, just as the DAC would be part of the controlling device

### Control systems

- Diagram represents continuing process
- Measurements at fixed intervals
- If measurement outside range, computer initiates control action
- Next measurement(s) will provide feedback on effect of control action

### Control systems

- On a digital sensor, the ADC would be included within it
- A situation could be a temperature sensor (thermistor) and heater/fans as the controlling devices

### Feedback

- Why is feedback required in a control system?
- To ensure the action had the desired result – e.g. imagine a greenhouse where the temperature was too low. The heaters could be turned on, but the temperature may not be increasing/even continuing to decrease – what could possibly cause this?
- Another issue – like an open door/window/broken roof etc…or simply the heater wasn’t working

### Closed-Loop Feedback Control System

- This is a special type of monitoring and control system, where the feedback directly controls the operation. What components would be required?
- Monitoring: sensors
- Processing/analysis: computer/microprocessor
- Control: actuators/controlling device

### Closed-Loop Feedback Control System

- Values of sensors compared with desired values
- Computer will then send value/issue command to actuator/controlling device to modify environment’s conditions

### Closed-Loop Feedback Control System

- The “controller” is the thing controlling the conditions – e.g. heaters, fans etc

### Closed-Loop Feedback Control System

- Where might you find closed-loop feedback control systems?
- Factories
- Power stations
- Self-driving cars
- Fans within a computer
- Greenhouses
- Airplanes
- Nuclear reactors

### Bit manipulation to control devices

- Monitoring systems are often required to have real-time capabilities – perhaps taking readings every millisecond or less
- For extreme situations – e.g. systems analyzing particle collisions – they would have to take as many readings as they were able to

### Bit manipulation to control devices

- To represent the state of the process, Boolean values could be used. For example, if 2 properties were being monitored, 4 Boolean values could be use:

### Bit manipulation to control devices

- With the previous example, another part of the monitoring and control program would be checking whether any of the 4 flags were set
- Let’s see how this could be implemented in assembly

### Bit manipulation

- Let’s see how we can do the following tasks using bit manipulation (note: some will also require a subsequent CMP operation)

## OR #255

## JPE bit_is_set

## OR #B11000000

## JPE negative
