# CAIE Computer Science IGCSE — Chapter ?: Unknown Chapter

---

1) What is the difference between a monitoring and control system - what might each do in the case that the conditions they are monitoring become abnormal 

A monitoring system continuously records environmental characteristics, but is unable to modify the environment to bring the system back under stable conditions - e.g. a hurricane monitoring system can detect high winds, but it has no way of reducing those winds. In contrast, a control system can bring the environment back into stable conditions - e.g. if a greenhouse gets too hot, the fan can be turned on/windows opened, while if it’s too cold, heaters can be turned on 

2) For each of the following situations, explain whether a monitoring or control system would be more appropriate 

a) Measuring seismic activity that could indicate an impending earthquake or tsunami 

Monitoring - currently humans have no way of preventing earthquakes/tsunamis when intense seismic activity is detected 

b) A car factory that wants to ensure a 1mm layer of paint is applied evenly to the car’s body 

Control - could use e.g. flow sensors to detect amount of paint being sprayed from nozzle and would react accordingly to ensure an even coating of paint was applied on the entire car 

3) List at least 3 benefits of using an automatic monitoring system, rather than having a human monitor an environment/process 

- Can run 24/7, 365 - high availability & cheaper in long term, since no need to pay employee salary 

- Measurements can be taken more frequently - e.g. nanosecond/millisecond/second interval measurements might be possible, hence issues could be rectified almost immediately - in contrast, humans won’t be able to take measurements anywhere near as frequently 

- Measurements can be more precise - e.g. a sensor can read to significantly more decimal places than a human 

4) Complete the sentence about the physical components required in a monitoring system: to accurately measure the conditions, sensors will be required - the initial input data will be analogue, so has to be converted to digital using an ADC. Once converted, this data can be fed into a microprocessor - if the data seems normal, then nothing will happen, however, if the data is abnormal, then various things could happen - for example, an alarm could sound, a warning could be displayed to an operator, an email/notification could be sent to a manager etc 

5) The first part of the control system is the same as the monitoring system - if the input data is abnormal, however, then the system would take action - this could be by using an actuator to close/open a door/valve, to raise/lower a platform, to turn on/off a fan/heater, to pour more chemicals/substances into a mixture etc. Feedback will be used by measuring the input values of the system to ensure the changes have been successful. 

6) List (an) appropriate sensor(s) to measure: 

Heat: infra-red 

Water content in the air: humidity 

Weight: pressure 

Noise: acoustic 

Movement: infra-red 

Rotation: gyroscopic 

Acceleration: accelerometer 


![](images/unit_7_-_monitoring_&_control_systems_answers/img_001.png)


Luminosity: light 

Product imperfections/cracks/pipes in walls: ultra-sound 

Gas - e.g. CO2: chemical/CO2 

Vibration: accelerometer 

Infra-red: infra-red 

Ultra-violet: ultra-violet 

Contact: proximity/pressure 

Wind: anemometer 

7) What is the difference between a passive and active sensor? 

Passive: simply measures incoming signals from environment - e.g. measuring light levels 

Active: emits a signal, then e.g. measures how much bounces back - proximity sensors, radar, active infra-red sensors etc 

8) Give (a) sensor(s) that could be used for these specific situations - state whether each is passive or active: 

a) monitor the seismic activity of a rock bed - seismometer/accelerometer (passive) 

b) a smoke detector in a home/office - infra-red (active) 

c) monitor the conditions in a greenhouse - temperature/infra-red, humidity, gas, moisture etc (passive) 

d) when playing a driving game on a smartphone - accelerometer/gyroscopic (passive) 

e) looking for cracks/defects/objects embedded within walls - ultra-sound (active) 

f) viewing a baby in a mother’s womb - ultra-sound (active) 

g) detecting fires - infra-red (active) 

h) detecting flooding - level/flow/moisture (passive) 

i) mapping others objects in the vicinity - e.g. a ship detecting ships/submarines/icebergs or a plane detecting other planes - proximity (active) 

- 9) Why is it important that conditions be controlled - using a nuclear reactor and food factory as examples, state what could happen if the control system failed 

Conditions have to be controlled to ensure the system operates efficiently, safely and produces the expected output (e.g. high quality products). If the conditions in a nuclear reactor weren’t controlled, you could get a nuclear chain reaction and explosion - while if the conditions in a food factory weren’t controlled, you could get poor products (e.g. wrong ratios of ingredients, not right consistency etc) or mass food poisoning among all those who bought this food 


![](images/unit_7_-_monitoring_&_control_systems_answers/img_002.png)


## 10) Complete the labels in the following diagram: 

A: sensor 

B: ADC 

C: microprocessor 

D: DAC 

- E: actuator & controlling device 


![](images/unit_7_-_monitoring_&_control_systems_answers/img_003.png)


## 11) What is feedback in a control system and why is it important? 

Feedback refers to measuring the effect the control output had on the next input - for example, suppose we have a greenhouse that’s too cold - the microprocessor would use the sensor values to e.g. send a signal to turn on the heater. Subsequent sensor readings would then be used to adjust the output - e.g. if the temperature was continuing to fall or increasing too slowly, the heater’s temperature might be increased even more, while if the heat was rising quickly, the heater’s temperature might be turned down or off entirely. 

12) A closed-loop feedback system is one in which the output is feedback in as input - this is so the actual output can be compared to the expected output and, if abnormal, the system can be automatically modified accordingly 

13) Explain how a computer’s fan can be considered as closed-loop feedback system 

A sensor continuously records the computer/CPUs temperature and sends this analogue signal to a DAC so it can be understood by the microprocessor - the microprocessor compares the temperature reading with the desired value - if too high, then the microprocessor sends a signal to an actuator to turn on/increase the fan speed. On the next sensor reading, the microprocessor once again compares the temperature with the expected value - if still too high, the fan will remain on/its speed will increase. Once the temperature has decreased back to or below the normal level, then the microprocessor will send a signal to the actuator to turn off the fan 

14) Assume a greenhouse uses 4-bits to monitor conditions in the following format: 

|14) Assume a greenhouse uses 4-bits to monitor conditions in the following format:|14) Assume a greenhouse uses 4-bits to monitor conditions in the following format:|14) Assume a greenhouse uses 4-bits to monitor conditions in the following format:|14) Assume a greenhouse uses 4-bits to monitor conditions in the following format:|
|---|---|---|---|
|||||
|Temperature<br>too<br>high|Temperature<br>too<br>low|Fan on|Heater on|
|Suppose the initial conditions are normal - i.e. 0000||||



What assembly instruction could be used to: 

a) Set the temperature too high bit to true - OR B1000 

b) Reset back to normal conditions - AND B0000 

c) Turn the fan off (assume it’s on) and heater on (assume its off) - XOR B0011 

d) Turn both the fan and heater off - AND B1100 

e) Set the temperature too low bit to true and turn the heater on - OR B0101 




