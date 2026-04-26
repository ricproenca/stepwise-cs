# Unit 2 - Communication & Networking Technology Presentation

## Network Hardware

### Class Overview

- Network Hardware: terminators, repeaters, rj-45 connectors, bridge, hub, switch, (wireless) network interface card/controller, wireless access point, gateway, router
- Routing tables
- Legacy vs Modern Ethernet
- Collisions & CSMA/CD (carrier-sense multiple access with collision detection)

### Hardware: Cabling

- Previously co-axial cables was the most common way to connect devices on a LAN
- These days, twisted pair is the most common.
- Fibre optic cables will be used to provide the backbone (between cities, undersea etc) for ISPs)

### Bus Topology: Terminators

- Are resistors that absorb the electrical signal
- This stops it reflecting back down the line and causing interference

### Repeaters

- If a line is long (e.g. bus networks & long-distance fibre optic cables), due to attenuation, repeaters are needed to retransmit the signal at full strength
- Remember, fibre optic has the lowest attenuation – so repeaters are only needed about every 100km

### Repeaters

- Wireless networking (WiFI, phone towers etc) can also use repeaters – this may be because of distance or obstacles such as walls or hills

### RJ-45 Connectors

- Twisted pair cables contain RJ-45 connectors at either end to allow data transfer
- One end will plug into the router/switch/hub, will the other end will plug into the device (computer, server etc)

### Bridges

- A bridge is a device used to connect different LANs together and let them function as if they were a single network
- An RJ45 connector on a twisted pair cable from a switch/hub would connect to the ports

### Hub

- Hubs are almost never used these days – but they might still be mentioned
- When a device on a LAN sends data to a hub, it will broadcast it to all other devices on the network – might be suitable in some cases, like video streaming
- These days, switches are usually used, since they support unicast, multicast and broadcast

### Switch

- Stores the MAC (and sometimes IP) addresses of devices on the network
- A device will send frames (packets) with a destination MAC address to the switch, which will forward it out of correct port to device based on its MAC address table
- Supports unicast, multicast & broadcast

### Network Interface Controller/Card (NIC)

- Ethernet port will be connected to network interface card (i.e. green circuit board in the picture)
- NICs establish initial connection, handle communication (buffering, error correction, interrupts), store the device’s unique MAC address, perform encryption/decryption etc

### Wireless Network Interface Controller/Card (WNIC)

- Provides the same features as a NIC – but just for wireless communication (e.g. over WiFi, Bluetooth, mobile networks etc)
- WNICs contain antenna to transmit/receive wireless signals establish initial connection, handle communication (buffering, error correction, interrupts), store the device’s unique MAC address, perform encryption/decryption etc

### WNICs vs NICs

- Can you think of devices that have both a WNIC & NIC (in typical cases, these would be combined onto the same board)?
- Desktops and some older laptops (though thinner laptops these days often don’t have NICs, since they don’t have an ethernet port)

### WNICs vs NICs

- Likewise, can you think of a device that would only have a WNIC?
- Phones, tablets, home smart devices, thin laptops/notebooks etc
- How about a device that might only have a NIC?
- Some servers, printers, CCTV cameras, network-attached storage (NAS) devices etc may only support wired connections

### Servers

- Thinking back to what we’ve learnt, why would servers use wired connections?
- Since they could be wired in a star/mesh topology and hence have a range of advantages:
- Higher bandwidth
- Wired is a more reliable connection
- No collisions/interference (in star/mesh)
- Higher security
- Longer range

### Wireless Access Point (WAP)

- Central device in wireless LAN is a Wireless Access Point (WAP) – a home router will provide this functionality. Receives & transmits wireless signals via antenna(s)
- If a client has a Wireless Network Interface Controller (WNIC), it should be able to connect to the Wireless Access Point (WAP)

### Gateway

- Acts as a gate to the network – i.e. packets entering or exiting the network will pass through it.
- Can convert incoming/outgoing data between different protocols
- Can act as a firewall to allow/block packets based on certain criteria

### Routers

- Technically, routers only route (i.e. direct/forward) packets (data) to the next location
- What people call a ‘router’ in a home actually provides the functionality of not only a router, but also a switch, bridge, wireless access point, gateway etc

### Routers

- In contrast, a router at the bottom of the ocean where e.g. an undersea cable splits in two wouldn’t need these additional features such as being a wireless access point, bridge, switch, gateway etc

### Routing Tables

- Suppose device 12.0.0.1 wants to send to 14.0.0.1 – can you figure out the path the packet would take?
- R2  R1  R4  14.0.0.1
- How about if 12.0.0.1 wants to send to 12.0.0.2?
- The switch would realise the device was on the network – the packet wouldn’t leave the network

### Routers

- Why do you think a typical home router performs the functions of a router, switch, bridge, wireless access point, gateway etc?
- Since it makes it easier for the home user – regular people don’t want 5 different devices – they want 1 that does everything
- In contrast, a business might have a more complex setup – e.g. many wireless access points, but only 1 router, switch, bridge, gateway etc

### IEEE Names for Ethernet & WiFi

- The Institute of Electrical and Electronics Engineers (IEEE) write the standards for both. Officially, they are:
- Ethernet: 802.3
- This is further categorized into 5 generations: standard, fast, gigabit, 10 gigabit and 100 gigabit
- WiFi: 802.11
- Additional letters come from variations on the spec
- The “802” comes from the fact the first meeting was held in 1980/02 (February)

## You can see the various WiFi standards the router supports & various other information

### Legacy (Old) Internet

- As stated, hubs were used about 30 years ago – they would broadcast data to all devices.
- A receiving device would then have to check the MAC address in the packet and determine if it was intended for them or not
- Bus topologies also work the same way – data is sent along the public bus line, all clients will receive it and have to check if it’s intended for them (based on MAC/IP address)

### Collisions

- Using a shared medium for transmission (e.g. bus lanes) for data transfer means there can be collisions – i.e. two devices transmitting at the same time, which causes interference and the data to become corrupted
- An approach called CSMA-CD (carrier sense, multiple access with collision detection) can be used to solve this

### CSMA-CD (carrier sense, multiple access with collision detection)

- Check voltage level on wire (no voltage = no activity)
- If there is voltage (i.e. message), then wait random time before re-checking
- If no activity detected, start transmission
- Continuously check for collision
- If no collision, continue transmission
- If collision, stop transmission & transmit jamming signal to notify other nodes of collision – wait random time and try again

### CSMA-CD (carrier sense, multiple access with collision detection)

- If two devices send at the same time, why do you think both wait a (different) random amount of time before trying to retransmit?
- Since let’s say if both wait 0.01s, there will be another collision – while if 1 waits 0.01s and the other waits 0.05s before rechecking, the chance of collision will be reduced – of course, if there’s another collision, they will both wait a new random amount of time again

### Modern Ethernet

- Uses switches instead of hubs
- Switches store an MAC/IP address table of devices on the network, so they can send packets to specific devices
- Switches hence support unicast, multicast & broadcast
- Also support full-duplex communication
- Switches will have a buffer which can temporarily store packets when under high load

### Modern Ethernet: Collisions?

- If using full-duplex links, are collisions possible?
- No – since full-duplex provides data transfer in both directions – if A is connected to B, there will be a dedicated wire supporting data transmission from A  B and another dedicated wire supporting transmission from B  A

## Repeater: retransmits signal at full strength to prevent signal loss due to attenuation

## Wireless network interface card: as above, but no Ethernet port & supports wireless connections instead

## If collision, stop transmission & transmit jamming signal to notify other nodes of collision – wait random time and try again