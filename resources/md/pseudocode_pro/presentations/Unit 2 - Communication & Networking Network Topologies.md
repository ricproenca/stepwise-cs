# Unit 2 - Communication & Networking Technology Presentation

## Network Topologies

### Class Overview

- Network Topologies: point-to-point, bus, full/partial mesh, star, hybrid – advantages & disadvantages
- Communication system requirements
- Communication/transmission modes
- --- Briefly ---
- Transmission mediums
- Network hardware
- Collisions & terminators

### Network topologies

- A network topology refers to the physical and/or logical layout of a network – the 4 we need to know are the:
- Point-to-point
- Bus
- Star
- Mesh (full & partial)
- Hybrid

### Key Concepts

- Before we talk about these, the book will introduce some other concepts first…

### Communication System Requirements

- There are 5 requirements for digital communication systems:
- sender
- receiver
- transmission medium (WiFi, twisted pair, co-axial, fibre-optic, satellite)
- message
- protocol (HTTP(s), FTP, SMTP, POP3, IMAP, ethernet etc)

### Transmission Mediums

- WiFI

- Twisted pair cables

- Co-axial cable

- Satellites

- Fibre optic

### Transmission Modes

- Data can be sent via the medium in 3 different ways:
- Simplex: data flow in one-way only
- Half-duplex: data flow is bi-directional, but not simultaneously
- Full-duplex: data flow can be bi-directional and simultaneous

### Simplex

- Half-duplex

- Full-duplex

- Imagine roads & cars representing each transmission type – how do you think they would look?

### Simplex vs Half-Duplex vs Full-Dulpex

- Full-duplex offers the most features – half-duplex is rarely used these days and the main advantage is price
- There are specific cases where half-duplex and simplex could be ok/even advantageous
- e.g. maybe for security, we want data to go from one device to another, but not the other way

### Messages

- A ‘message’ is simply data – it could be text, an image, video, audio, json etc
- Messages will sent during the communication

### Message Transmission

- Messages can be transmitted in 3 different modes:
- Unicast – one-to-one communication
- Multicast – a targeted signal, from one source to multiple destinations
- Broadcast – signal is sent indiscriminately – anyone who ‘tunes in’ can listen (e.g. tv/radio)

### Network Devices

- Hubs – receive messages & broadcast them to every device on the network
- Switches – receive messages and support sending via unicast, multicast & broadcast
- Routers – forward packets onto the next device (based on routing table) so they can arrive at their destination
- Bridges – join 2 separate networks of same protocol
- Gateway – entry & exit point to network - converts data from one protocol to another

### Point-to-point topology

- Point-to-point topologies are direct connections between 2 devices and could be connected via twisted-pair, WiFi, fibre-optic etc
- Transmission could be simplex or half/full-duplex, but, since there is a direct connection, the message can only be sent unicast

### Point-to-point topology advantages

- Secure – eavesdropping is hard/impossible, hence can connect critical/specialist servers together – e.g. database and file server generating financial reports in a bank
- Fast & reliable – dedicated connection, hence no collisions/lower congestion etc

### Point-to-point topology disadvantages

- Not general purpose – can only connect two devices
- No redundancy – single point of failure
- Expensive – need dedicated connection between device

### Bus topology

- A linear topology in which the ends do not rejoin & are terminated with a terminator (represented with black circle)
- Messages have to be broadcast along the line
- Hence anyone can intercept them, even if they weren’t intended for them
- Encryption can be used so they can’t be decrypted by unintended users, but they will still be able to see some details – like when, how much data and between who communication has taken place

### Bus topology

- Why do you think it’s called a bus topology?
- messages travel along the line like a bus travels along the route
- devices are like stations
- terminators are the start/stopping point of a route

### Terminators

- A terminator is just a device with high resistance – think about physics – why would a bus topology require terminators?
- Terminators absorb the electrical signal – otherwise it’d reflect back down the line and create interference

### Bus topology: advantages

- Semi-resilient - a fault in a node or a link connecting a node to a bus won’t prevent communication between other nodes
- Relatively easy to implement
- Efficient for small networks
- Less network cable/cheaper e.g. star/mesh networks
- Easy to expand – simply add device to existing line

### Bus topology: disadvantages

- Slow for large networks, since each additional device slows network down
- Potential for eavesdropping, since data intended for a particular client is broadcast along public bus
- Identification of problem difficult if there’s a fault in the line (as opposed to e.g. star topologies, where the specific problem link can be identified)
- Chance of collisions – hence packet loss is high

### Collisions

- We will talk about collisions and how they can be avoided later (they aren’t an issue for star/mesh networks)
- Basically, it’s when two devices transmit at the same time and cause interference, corrupting the signal

- Constructive & destructive interference

### (Full) Mesh Topology

- Each node has a point-to-point connection with all others
- Transmission is usually full duplex & messages can be sent as unicast, multicast or broadcast
- If a connection unavailable, the message can be sent along another path

### (Full) Mesh Topology

- Why do you think this topology usually isn’t used to connect end devices?
- Since too much wire would be required (and it’s usually not required to have a direct connection between e.g. 2 staff members)

### (Full) Mesh Topology

- If we have n devices, do you know the formula for the number of connections?
- n(n – 1) / 2
- So, for 100 devices, that would be 4,950 connections…which is not realistic

### (Full) Mesh Topology

- Hence, this topology is usually used to connect more ‘important’ devices – like servers, routers, switches, bridges etc

### Partial Mesh Topology

- We don’t need to connect every device – for example, a web server would probably need to be connected to the database server & email server, but not the print server

### Mesh Topology: Advantages

- Offers full-duplex communication
- Offers all 3 transmission types: unicast, multicast & broadcast
- Supports high traffic load, since multiple devices can transmit data simultaneously across different wires
- Resilient: failure of one line only causes that particular line to go down – other routes can then be used

### Mesh Topology: Advantages (continued)

- High privacy & security due to dedicated connections
- Adding additional devices doesn’t disrupt data transmission between current devices
- Fault identification is easy (since you know exactly what line is down)
- No centralized authority

### Mesh Topology: Disadvantages

- Expensive, due to large amount of wiring
- Building & maintaining is extremely difficult even with a relatively small number of devices
- High power consumption
- Could have redundant connections, even if a partial mesh is used

### Star Topology

- Central switch all devices go through to communicate with others
- Switches support unicast, multicast or broadcast
- Hubs only support broadcast (so are rarely used these days)

### Star Topology

- Switch will store list of IP & MAC addresses, so packets can be sent to correct device(s)
- Note: the star topology is the most used in practice – it’s more common than point-to-point, bus or mesh
- Your home network will almost certainly be a wireless star network – devices connecting to a central switch/router

### Star Topology

- If one line goes down, only that 1 end device will be cut-off
- If the central switch/hub fails, the whole network stops working

### Star Topology: Advantages

- Offers full-duplex communication
- Offers all 3 transmission types: unicast, multicast & broadcast
- Due to hub-nodes having point-to-point communications, there are no collisions
- Each device only needs one I/O port to connect to switch
- Relatively easy to implement
- Easy to identify fault, due to point-to-point links
- Resilient due to point to point links (unless central hub goes down)

### Star Topology: Disadvantages

- If central switch/hub fails, the whole network fails
- More expensive/more cable than bus…but less than full/partial mesh
- Switch can be under high load in large network
- Extra hardware (switch/hub) required compared to bus topology
- Performance depends on the switch (specs, throughput, load etc)

### Hybrid Networks

- It’s also possible to create a network with multiple topologies – this would be called a hybrid network
- What 2 network topologies can we see here?
- A central bus line with star networks connecting to it

### Hybrid Networks

- Suppose we have some important devices (file, web, email & print servers) as well as some regular user PCs – suggest a possible hybrid network structure?
- The important devices could be connected as a mesh (full or partial), while the PCs could be connected to switches via a star topology

## Unicast, multicast, broadcast

## Star: no collisions, fast, cheap/low wire, setup/fault identification easy, full-duplex, 3 transmission types, resilient if end device/connection drops, all packets go through central switch – high load = slow, single point of failure, less private/secure

### Which communication mode (simplex, half-duplex or full-duplex) and transmission mode (unicast, multicast or broadcast) does each topology support?

- ?

| Topology | Communication Mode | Transmission Modes |
| --- | --- | --- |
| Point to Point | All | Unicast |
| Bus | Simplex & half-duplex | All |
| Mesh | All | All |
| Star | All | All |