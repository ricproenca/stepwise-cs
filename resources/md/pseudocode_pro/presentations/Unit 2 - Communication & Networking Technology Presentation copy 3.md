# Unit 2 - Communication & Networking Technology Presentation

## Evolution, purpose & benefits of networking

### Class Overview

- Network definition & features
- Client-server model vs peer-to-peer
- Types of network: PAN, LAN, MAN, WAN
- Thin & thick clients

### What is a network?

- The definition is simple it’s simply “2 or more devices connected together”
- This connection could be either wired or wireless

### What are clients & servers?

- First, we need to understand these 2 terms
- Client: a device requesting (asking for) something
- Server: a device responding to/fulfilling that request
- e.g. a client computer could send a request for a website, then the website would respond with the web page to them

### Network features

- For regular users, they often associate a network as being the Internet, allowing them to browse the web etc
- For businesses, schools, governments, hospitals etc, there are also be other useful features that could be included within their network…

### Network features

- Communicate (e.g. send files/messages) with other local devices and/or Internet
- File server: anyone with permission can access
- Application server: software installed in 1 location, but can be used by everyone in the company
- Email server: send/receive/store emails internally
- Database server: host databases internally
- Print server: allow many computers to use 1 printer
- etc

### File Server

- You can create a file server and map it to an empty drive on your PC – say F://
- Permissions can be granted to users/groups allowing them to read and/or write those files
- This means you only need 1 copy (rather than a copy on every individual computer) – saves space, ensures don’t have conflicting versions/copies etc
- Makes collaboration/organisation easier

### Types of network (smallest  biggest)

- PAN: personal-area network (Bluetooth)
- LAN: local-area network (e.g. router in one-building)
- MAN: metropolitan area network (one city)
- WAN: wide-area network (multiple cities/countries)
- The exam will generally only ask about LANs & WANs…though once or twice I have seen them ask about PANs & MANs

### Local Area Network (LAN)

- this is a network within the same building
- nodes don’t necessarily have to be connected to the Internet – could just be connected to each other (intranet)
- WiFi & Ethernet (twisted pair) are the most common connection methods
- application/file/print/email servers can be used to share files/applications, allowing all computers to print via a single/small group of printers, allowing the site to have an internal email system etc

## File/email/database (etc) servers would be more common in businesses, schools, hospitals etc

### Wide Area Network (WAN)

- computers could be on other side of the world
- allows sharing of files/software between all on the network
- a ‘job’ could be run on remote computer that had required software – e.g. processing some data
- traditionally slower than LANs, though less of an issue today (with 100Gb+/s connections)

### Wide Area Network (WAN)…Continued

- traditionally locations would have been connected together with ‘leased lines’ (rented from PSTN/cable company/government)
- these days, fibre optic cables are often used – and different companies can buy different wavelengths to send their data along a shared line
- a software approach (SD-WAN) is sometimes used due to its cheaper price
- switches will connect WAN locations together

## WANs are usually used for businesses, governments and even some universities who have sites in different cities/countries

## For example, someone in the headquarters or factory would be able to access the same shared files, email server, intranet etc

### Client-server model

- Can you remember the definitions we gave for clients & servers?
- Client: a device that sends a request
- Server: a device that fulfills that request
- So this is the client-server model – simply that a client requests something and a server fulfills that request

### Client-server model

- In real life, there could be millions of clients (e.g. users currently watching YouTube)
- In these situations, there would also be multiple servers too – but the concept of clients requesting & servers fulfilling is the same

### Requests

- What kind of requests do you think a client might make?
- Visiting webpages - HTTP(s)
- Sending/receiving emails (SMTP, POP3, IMAP)
- Transferring files (FTP)
- Requesting information from database
- Sending files to print server
- etc

### Clients

- Note: the client can also be considered the software making the requests on the client’s device too – e.g:
- The web browser would be the client in a web request
- The email program would be the client when sending/receiving emails
- The Whatsapp desktop app would be another example
- etc

### Thin-clients vs thick-clients

- Client architecture can be grouped into two categories:
- Thin-clients: little processing performed on client – it’s mostly done on server & client just displays it (either GUI or CLI)
- Thick-clients: most processing done on client, not server
- Note: “thick clients” used to be called “fat clients”…both terms are often used, but the latter was possibly considered offensive

## Thick client: high processing capabilities

### Thin client advantages

- Companies could host applications on a single server – cheaper than needing a license to install the software on every computer
- User doesn’t have to download huge files (think Photoshop (1+GB) vs online equivalent (<5MB))
- Saves data storage space – only need 1 copy of program/files etc
- Can reduce administration/operation/purchasing costs by 70%
- Can reduce energy usage by 97%
- Updates/management is easier – only needs to be performed on the central server
- Less downtime - IT staff don’t have to waste time fixing problems on user PCs (that users themselves may have caused)

### Thin client advantages…continued

- Protected from unauthorized software or viruses
- Data can’t be copied to a disk or saved to any location other than server
- Centralised server makes it easy to manage & monitor
- Setup is quicker
- Users can access apps and data from virtually anywhere

### Thick client advantages

- Reduces load (hence financial cost) on the server, since it’s offloaded to client
- For web servers, if your clients aren’t within same company, it makes sense that you want the client (in many cases, their browser) to do as much of the processing as possible
- Can provide quicker response times, since they don’t require data to be sent/received along the network
- Often allow for greater customizability for individual users
- Easier to create complex programs & GUIs that run locally, than on a central server

### File-Sharing

- There are two models for file-sharing:
- Client-server model – as we’ve seen, a client can request a file from a server and the server can send it
- Peer-to-peer (p2p) model – each peer (node/seeder) can store either the whole or parts of the file – when user is downloading, they could be downloading different parts of the file from different users (seeders) simultaneously

## Client-server model

### Peer-to-peer model

- Note:
- Multiple seeders (sources) sending different parts of the file(s)
- Peers (nodes) can download (leech) & upload (seed/send)

### Client-server model for file-sharing: advantages

- Guaranteed to be able to get the whole file
- Easy to setup/manage (add, delete, rename, copy etc) files, since they’re all stored in one place
- Less viruses - i.e. if downloading from a reputable company, you can be fairly sure the download will be safe
- User doesn’t require additional software to download files (like they do with p2p)
- These days, you can also get fast downloads too (at university, we could download 1GB in 20 seconds), so the whole “client-server model is slow” isn’t such an issue now

### Peer-to-peer model for file-sharing: advantages

- Can be faster than client-server downloading, since you can download different parts of the file simultaneously, rather than having to download from 1 stream, in sequential order
- Can be multiple copies of same file, so resistant to server malfunctions, original file not becoming available (e.g. if company goes bankrupt), police takedowns etc
- More anonymized (private) for downloaders (leechers)

### Peer-to-peer model for file-sharing: disadvantages

- If no one is actively-seeding the file, you won’t be able to download it
- If users only have part of the file, you may be unable to download the complete file – e.g. downloads getting stuck at 99.9% etc
- Due to higher anonymity, potentially more likely to contain malicious files/viruses

### Recap

- Do you know the definition for a “network” in computing?
- A network is 2 or more devices connected together
- What 2 categories do we break devices down into (hint: “c” and “s”)
- Clients & servers
- What devices might be considered clients & servers respectively?
- Clients: user computers/”dumb terminals”, even a web server requesting data from another web server etc
- Servers: web servers, file servers, printers etc

### Recap

- What is a LAN and WAN? When are each used and what communication mediums do they use?
- LAN = local-area network. Used for homes/small offices etc and use WiFi/twisted pair cables.
- WAN = wide-area network. Used for businesses/governments/universities etc with buildings in many different locations – can use fibre optic, twisted pair, satellite etc to connect those in different locations

## Thin clients: do no/little processing; server does all/most processing. Advantages: single copy of programs/data, less storage requirements, remote access, cheaper, easier to install/manage/update/protect, less energy, less downtime, data harder to copy (e.g. by disgruntled employee)

## Peer-to-peer is a network of many nodes – each can upload/send (seed) or download/receive (leech) full/partial files – can be faster due to simultaneous seeders, resilient to nodes going down due to (hopefully) multiple copies being available on network, more anonymous

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

## Transmission Media

### Class Overview

- Transmission media: twisted pair, coaxial, fibre optic, WiFi, satellites
- Wired vs wireless
- Local vs global communication
- Key terms: attenuation, bandwidth, repeaters, guided, unguided, shielding, channels, interference

### Transmission Media

- As stated, there are 2 methods in which data can be transmitted between devices
- Wired (twisted pair, coaxial, fibre optic)
- Wireless (WiFi, satellite, bluetooth)

### Key Terms

- Bandwidth: a measure of the amount of data that can be transmitted per second (usually in Mb/s or Gb/s)
- Attenuation: the rate at which the strength/intensity of the signal decreases

### What factors do you think affect bandwidth?

- How would these factors relate to the cars on a road analogy?
- Physical speed of data transmission/speed of each car
- Frequency of transmission/distance of one car to next
- Number of active channels/lanes
- In most cases, points 2 are 3 are the deciding factors (since both electrical & electro-magnetic waves propagate extremely fast)

### What factors do you think affect attenuation?

- Substance data is transmitted through – copper, air, buildings/walls, rain, vacuum etc
- Frequency – low frequency waves (e.g. radio) attenuate less than high frequency waves (e.g. gamma)

### Twisted Pair

- Insulation & shielding block electromagnetic interference from both outside and between the pairs
- Twists also reduce EM interference

### Twisted Pair

- Different cables twisted different amounts – keeps wires out of phase to reduce crosstalk
- More twists = less interference & higher frequency (hence bandwidth) supported, but more attenuation (due to higher capacitance & greater length of wire)

### Twisted Pair – Extra Info

- A signal sent on red wire; inverted signal on blue – difference between them is the final signal
- If not twisted, outside EM signals hit wires hence induce current at different times
- Twists ensure interference occurs at same time – hence difference stays same

### Twisted Pair: Shielded vs Unshielded

- Shielded twisted pair also contains metal insulation to prevent interference
- It is more expensive & usually not neccessary, so rarely used (mostly in data centers with high frequency wires or e.g. factories/environments with lots of powerful electronic/magnetic machinery)

### Twisted Pair – Advantages & Disadvantages

- Cheap

- Lower bandwidth
- High attenuation
- Strongly affected by interference
- Requires many repeaters

- Remember, this is relative – for home/office use, twisted pair is fine – for undersea cables spanning 10,000km used by millions, not so much – 40Gbps is more than enough for home usage for example

### Coaxial

- Again, contains insulation to reduce interference
- Mainly used for broadband connections, (old) tv & radio, CCTV etc

### Coaxial – Advantages & Disadvantages

- Moderate cost
- Moderate bandwidth
- Moderately affected by interference

- Moderate attenuation
- Requires moderate number of repeaters

- Note: the books say coaxial has the highest attenuation, though sources online from e.g. cable manufacturers say that twisted pair has higher attenuation than coaxial

### Fibre Optic

- Light is transmitted at high frequencies through glass tubes

### Fibre Optic Bandwidth

- Current world record speed in a lab is 1Pb/s (1015)
- Current commercial solutions tend to be about 100Gb/s
- These bandwidths are per glass fibre (tube) – fibre is less affected by interference than copper cable methods (twisted pair or coaxial), so if you want 1Tb/s, we can simply use 10 100Gb/s fibres

### Fibre Optic Bandwidth

- It’s stated that fibre-optic cables could support a bandwidth of 100,000 twisted pair or coaxial cables – why do you think that is?
- The speed propagation of voltage along a wire can be between 50-90% the speed of light – so this isn’t really the issue
- The main reason is the frequency of light in a fibre optic cable (1015Hz) is >>> frequency of electrical signals in copper wire (106Hz) – why do you think increasing the frequency increases the amount of data we can transmit per second?

### Fibre Optic Bandwidth

- Here are the graphs for y = sin(x) and y = sin(10x)
- Assume a peak = 1 and a trough = 0
- Hence, higher frequency = more peaks & troughs per second = higher bandwidth

- Between 4G & 5G Internet, which has a higher frequency?
- 5G – which is why the bandwidth is higher

### Fibre-Optic Advantages & Disadvantages

- Extremely high bandwidth
- Lowest attenuation
- Lowest need for repeaters
- Least affected by interference

- Expensive
- Requires specialist equipment

- Ignoring price, why doesn’t everyone use fibre optic?
- Since for home/small office use, twisted pair supports up to 40Gb/s which is good enough – so it’s really only huge companies/ISPs that would need it. Some companies also have km of twisted pair – so switching to fibre optic would be very costly/time consuming.

### Transmission Media: Comparison

- As stated, online sources state twisted pair suffers more attenuation coaxial
- Then, it’s easy to remember: twisted pair is worst in everything, but cheapest; coaxial is in the middle for everything; fibre optic is best for everything, but most expensive

### WiFi

- Works by transmitting data over radio waves
- Different channels (frequencies) used to reduce interference

### WiFi: Channels

- Imagine you have 10 different WiFi networks, each with 10 devices all communicating on the same frequency – what do you think might happen?
- You can get interference

### WiFi: Channels

- To solve this, frequencies can be broken down into separate channels
- To reduce interference, different networks & devices should communicate on different channels

- Bandwidth utilization is also increased – data can be sent on quiet rather than congested channels

### Guided vs Unguided Media

- Guided means we can ‘aim’ the signal – by definition, cables provide a 1-to-1 connection, hence are guided
- Unguided means the signal is sent in all directions – e.g. a wireless access point (WAP), radio tower or tv station sends the signal spherically (i.e. all directions)

### Guided vs Unguided Media

- Do you know what type of electromagnetic wave a remote control (e.g. for a TV, AC etc) uses?
- Infrared – what happens if you don’t aim the remote control directly at the receiver?
- The signal won’t be received – hence EM waves with higher frequencies are more guided than those with lower frequencies

### Wireless Frequencies

- 5G has a higher frequency than 4G – this is why it has a higher bandwidth, but has a shorter range, is more likely to get blocked by walls etc. There are also arguments about higher frequencies causing health issues

### WiFi Advantages & Disadvantages

- Accessible with portable devices (laptops, tablets, phones etc)
- No cables required
- Setup is easy/fast
- Suitable for public locations – cafes, hotels, transport etc

- Lower bandwidth
- Less secure than cables – anyone can listen in (though data should ideally be encrypted)
- High absorption rate (e.g. blocked by walls)
- Short range (20 to 150m)

### Transmission Media: Legal Issues

- Do you think you can set up an antenna and start transmitting data?
- On unused frequencies, yes – but if the frequency is used by the military, government, tv/radio station etc, you can get into legal trouble (fines or even prison) if the offense is severe enough

### Transmission Media: Legal Issues

- Do you also think cabling also comes with legal issues?
- It possibly depends on the country – if it’s a private company installing cables, they will have to get permission to dig and lay the cables underground from the land owners (e.g. farmers)
- If the telecoms company is owned/partially-owned by the government, the company shouldn’t really have any legal issues

### Satellites

- Geostationary: stays above fixed position on Earth. 3 required for whole-Earth coverage
- Medium-Earth orbit: provides GPs etc – 10 required for whole-Earth coverage
- Low-Earth orbit: provide mobile phone network – 50 required for full-Earth coverage – Starlink operates at only 340km above the Earth’s surface
- Note: Van Allen belts contains high levels of electrically-charged particles, hence satellites aren’t placed there

### Satellites

- Can act as component in a network or directly communicate with ground-based components
- Ground-based components can be further apart than a network without satellites, since relay satellites have large view of Earth’s surface
- Due to larger distances involved, high latency (time to receive first byte)

### Satellites

- In reality, due to high cost, latency, low bandwidth, satellites are only used for specialised applications where alternatives (e.g. fibre optics) aren’t available:
- Internet access for mobile phones
- GPS/military/tracking
- Internet access in remote locations/after (natural) disasters
- Internet access on planes

### Satellite Advantages & Disadvantages

- Accessible from virtually anywhere (even if local infrastructure has been destroyed) – i.e. remote locations/after (natural) disasters)
- Specific use cases – e.g. GPS, mobile phone network, taking photos of Earth etc

- Expensive
- Lower bandwidth
- Higher latency
- Extremely complex
- Repairs are difficult/impossible

### Local vs Global Communication

- We have looked at the following transmission mediums:
- Twisted pair cable
- Coaxial cable
- Fibre optic cable
- WiFi
- Satellites
- Which do you think would be good for local vs global communication & why?

### Local Communication

- For home/small office use, twisted pair & WiFi would be good options – coaxial is also fine too, but requires hardware that is less common these days
- Afterall, for these situations, we don’t require the bandwidth that fibre optic provides – so these other mediums are sufficient
- WiFi has the convenience of allowing people to move around and use non-computer/portable devices (phones, tablets, smart appliances etc)

### Global Communication

- If possible, for global communication, fibre optics will be used due to extremely high bandwidth and cheaper price, compared to satellites (fibre optic is more expensive than twisted pair/co-axial though of course)
- If requiring GPS/mobile phone network/needing to provide connections to a remote location, then satellites will be used

### How do the transmission mediums rank in terms of cost? How about attenuation, need for repeaters, amount affected by interference?

- Note: satellite signals can travel with low attenuation in vacuum of space – but attenuate when encountering clouds, charged atmospheric particles, solar flares etc

- ?

| Medium | Cost | Bandwidth | Interference | Attenuation | Repeaters |
| --- | --- | --- | --- | --- | --- |
| WiFi | Cheap | Quite Low | Most | Very High | Very High |
| Satellite | V Expensive | Very Low | Very High | High | Low |
| Twisted Pair | Cheap | Low | High | High | High |
| Coaxial | Moderate | Moderate | Moderate | Moderate | Moderate |
| Fibre Optic | Expensive | Very High | Low | Low | Low |

## Large office: coaxial – relatively cheap, higher bandwidth than twisted pair

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

## Internet Data Transmission

### Class Overview

- Internet vs world-wide web
- Internet Service Providers (ISPs)
- Packet-switching vs circuit switching – use cases, advantages and disadvantages

### WWW vs Internet

- WWW = World Wide Web – a collection of webpages linked together and accessed via the HTTP(S) protocol
- Internet = inter-network – the worldwide connection of devices and infrastructure (cabling, satellites, routers etc) – communicates over IP and any digital data can be sent – webpages, media, emails, files, programs, text etc
- So the Internet is a superset, containing the World Wide Web…

### Internet vs WWW

- Clients
- Servers
- IP/TCP/UDP
- Infrastructure/
- Cables
- Emails
- Files
- SSH/Telnet/

- Webpages via HTTPS

### Internet Infrastructure

- The Internet can be considered a huge WAN
- It was never designed as a ‘whole’ – it simply grew naturally (with millions of people adding servers & even more acting as clients)

### Internet Service Provider (ISP)

- The Internet wasn’t officially designed, however it developed into a hierarchical model
- Access/Tier 3 ISPs: allow an individual/business to connect to regional ISP
- Regional/Tier 2 ISPs: connect local access ISPs & provide national/regional coverage
- Global/Tier 1 ISPs: provide global backbone (undersea cables, satellites etc)
- Note: many ISPs will fall into multiple categories – e.g. China Mobile, AT&T and BT are all 3

### Internet Service Provider (ISP)

- In China, there are only 3 ISPs (China Mobile/Telecom/Unicom) – these 3 are massive companies, hence provide services from local (tier 3) to global (tier 1)
- In contrast, in the UK, there are “more than 200” different ISPs – so most of these will be tier 3 (local), less will be tier 2 (regional/national) and some will be tier 1 (global) – a few will be all 3 tiers (BT, Vodaphone etc)

### Internet Service Provider (ISP)

- Let’s see how a packet might be routed from someone on one ISP, to someone on a different ISP
- Note: don’t get confused about “stage 1-3” – that isn’t talking about the “tier 1-3” we mentioned earlier

## Packets sent to your ISP’s local router in your city/region

## Packets could be routed via own ISP’s cabling/shared cables to different city if possible…if not, we need stage 3…

## IXPs are locations where multiple ISPs meet – the packets can be swapped from one network to another

## Tier 1 – Global Backbone

### Undersea Cable Maps

- These undersea cable maps come from https://www.submarinecablemap.com/ - you can check it out, if you’re interested

### Undersea Cables

- The 3 gold circles contain the actual fibre optic cables – the rest is all protection – why do you think so much is needed?
- Extremely high pressure at bottom of ocean, to prevent leaks…even some unexpected reasons…

### Access in Remote Locations

- Surprisingly, even many small islands (with populations of a few thousand or less) are connected with fibre – of course, there are still some that aren’t
- For example, Antarctica isn’t connected by fibre
- So how can people living/working in these areas access the Internet?
- Using satellites (though the speed is slow & expensive – it supposedly costs $3 to send an email, on Antarctica)

### Routers

- Do you remember what the function of a router is?
- To look at the destination IP address, then forward the packet to the next hop, based on its routing table

### Routers

- Suppose device 12.0.0.1 wants to send to 14.0.0.1 – can you figure out the path the packet would take?
- R2  R1  R4  14.0.0.1
- How about if 12.0.0.1 wants to send to 12.0.0.2?
- The switch would realise the device was on the network – the packet wouldn’t leave the network

### Routers & Buffers

- Routers – like (W)NICs, sound cards, GPUs etc – have buffers
- A buffer is a temporary storage space to hold data, as other data is being processed/transmitted
- Imagine a backbone router has a maximum bandwidth of 1Gb/s – what happens if it receives 1.1Gb/s in a second? We don’t want to drop those packets – so we’d store that extra 100Mb in a buffer, until the router is able to process is

### Routers & Buffers

- The buffer stores data, until the router is available to process it

### Routers

- Where are routers placed?
- Home/office
- At access/regional/global (tiers 3  1) ISPs
- Anytime a cable splits – e.g. when an undersea cable reaches land and it splits, with different parts going to different regions/countries

### Routers

- Not required for exam, but we can use the tracert (trace route) command to list the routers the data travelled via and websites like https://ipinfo.io to get information about those IPs – some IPs hidden for privacy
- tracert bing.com

### Routers

- Does anyone know what the 192.168.X.X IP addresses are?
- This are private IP addresses – hence will be the IP address of our router in the office, then perhaps another in the school

### Routers

- Where/what do you think the 3rd hop is?
- We can see it’s a router owned by the ISP in our city

### Routers

- Using the baidu.com trace we ran, we can look at the last hop and notice it’s in Beijing, which makes sense

### PSTN (Public Switched Telephone Network)

- Calls would be sent along telephone line to an exchange

### PSTN (Public Switched Telephone Network) - Exchanges

- Assume someone in Manchester wanted to call someone in Melbourne – the switch operator would literally plug the cable into the London port – and an operator there would plug it into another port and so on…until you eventually got to Sydney, who could then route it to Melbourne

### Modern Telephones

- Note: modern landline systems don’t actually work like this – everything is digital and most phone calls travel along fibre optic cables
- Even landline phones themselves are uncommon in most homes these days

### PSTN – Old Internet

- When the Internet was first getting popular in the 90s/2000s, there wasn’t the millions of km of fibre optic wires we have today
- Instead, data was sent over the existing telephone line infrastructure, which had existed for the past 100 years
- There was a problem – telephone lines transmitted analogue signals, while the Internet operated digitally – a modem was required – a device used to convert between analogue to digital and vice-versa

### PSTN – Old Internet

- This would be a typical setup – however it was slow and you could often only use the Internet or phone – not both
- For example, you might literally have to turn off your router, if someone called you
- Modem would convert between analogue phone signals & digital Internet signals

- The modem is the big device – the other thing is the phone/Internet splitter – THIS particular setup allows Internet/phone to operate simultaneously on different frequencies

### Packet Switching & Circuit Switching

- There are two ways we can transmit data from a source to a destination – we have looked at both briefly, but let’s compare them in more detail
- Packet-switching (what routers use)
- Circuit-switching (what old telephone system used)

### Features of Packet Switching

- Data is sent without a connection being established between the sender & receiver – this means establishing the connection is fast, but the receiver may be unreachable – device off, network error etc
- Routers forward packets onto the next hop based on their routing table
- Data – say an image – will be split into many smaller packets (usually not larger than 1460 bytes) – packets may travel different routes or arrive out of order – they will then be re-ordered at the destination (if using TCP)

### Packet Switching: Advantages

- Doesn’t require dedicated infrastructure for each user – many people can share the same e.g. fibre optic cables – cheaper and more scalable
- As such, there’s a better utilisation of hardware
- Can be faster – packets can be sent along the faster route (hopefully)
- No connection required (connectionless) – lower initial delay (latency)
- ---
- Reliability can be built-on top – e.g. a higher level protocol like TCP which will resend packets that don’t arrive and reorder them upon arrival

### Packet Switching: Disadvantages

- Packet loss – some packets might not arrive at destination (misconfigured network, broken router/cabling, full buffers)
- Packets can arrive in wrong order
- Variable latency – packets travelling different routes will take different time – might have to wait for all to arrive to reassemble
- Header overhead – small amount of extra data needed in every packet header (source & destination IP, packet length, version 4/6, checksum, time-to-live (TTL) etc)
- Some of these issues can be handled though – for example, rerouting & higher-level protocols like TCP helps to ensure all packets should arrive

### Features of Circuit Switching

- A physical link between sender & receiver is required – this could be with someone on the other side of the world
- Connection must be established before communication can begin
- Channel is dedicated for only those 2 users for duration of communication

### Leased Lines

- Because a dedicated connection was required, if no connections were available, someone might not be able to connect
- As a result, a company might want to rent a permanent line – i.e. a leased line

### Circuit Switching: Advatanges & Disadvantages

- Ensures receiver is reachable before sending
- Dedicated channel required (can be an advantage (reliable, high bandwidth) or disadvantage (wasteful))
- Suitable for long, continuous communication (e.g. phone calls)
- Data will arrive in correct order
- System has many backup generators – you can still make phone calls in an emergency (e.g. calling emergency services in a flood

- If all channels being used, you won’t be able to connect
- Higher cost (due to requirement of dedicated channels)
- Higher initial latency due to ensuring receiver is available

### Question

- A difficult question from June 2015, paper version 12

## In contrast, the world-wide web (WWW) is simply the collection of all interconnected web pages that can be accessed over HTTP(S)

## Circuit switching: physical, dedicated cable link connected between sender and receiver required before communication can begin - data will be sent as a continuous stream. Previously involved humans manually plugging in/unplugging (switching) cables at switching office, but is now automated

## Packet switching: fast, reliable due to rerouting, shared transmission mediums = cheap/better utilisation of hardware, lower initial delay, some packet loss, packets can arrive out of order, variable latency, header overhead

## Applications that make use of the Internet

### Class Overview

- Internet vs World Wide Web
- Cloud computing – advantages & disadvantages
- Private and public clouds
- Bit streaming – realtime & on-demand

### Internet vs world-wide web (WWW)

- Do you remember the difference between the Internet and world-wide web (WWW)?
- Let’s recap…

### WWW vs Internet

- WWW = World Wide Web – a collection of webpages linked together and accessed via the HTTP(S) protocol
- Internet = inter-network – the worldwide connection of devices and infrastructure (cabling, satellites, routers etc) – communicates over IP and any digital data can be sent – webpages, media, emails, files, programs, text etc
- So the Internet is a superset, containing the World Wide Web…

### Internet vs WWW

- Clients
- Servers
- TCP/UDP
- Infrastructure/
- Cables
- Emails
- Files
- SSH/Telnet/

- Webpages via HTTPS

### Cloud Computing

- Cloud computing is the provisioning of computing services via the Internet
- Clouds can be either private within the company or public like (AWS, Baidu, Azure, Alibaba, Tencent, Google etc)

### Private Cloud Computing: Categories

- For the private cloud option, there are 3 choices
- Organisation creates and manages their own on-site cloud
- Organisation outsources to a 3rd party to create & manage on-site cloud
- Organisation outsources to a 3rd party to create & manage off-site cloud
- Which would be the most/least “private” of these options?
- 1 -> 3 is from most to least private

### Private Cloud Computing: Categories

- “Organisation outsources to a 3rd party to create & manage on-site cloud”
- Why would a company do this?
- If the company is small, they won’t have a specialised team that has the skills/time to create & manage the system – so they can outsource this to a 3rd party, but still get benefits of an on-site cloud (possibly more secure, lower latency, more customisable)

### Public Cloud

- In contrast, for public cloud computing, the user/company only has 1 choice – to use the cloud provider’s infrastructure
- In this situation, customisation is more limited/not possible/expensive

### Cloud Services

- Services offered by cloud providers can be overwhelming
- Some common ones are file storage & delivery, databases, processing etc

### Cloud Services

- Cloud services can be provided by a single or large number of servers – we can group the services offered into 3 categories:
- Infrastructure provision – renting hardware directly
- Platform provision – OS, different environments
- Software provision – Google docs, Baidu NetDisk/OneDrive etc
- These are more commonly called IAAS, PAAS, SAAS – e.g. “infrastructure as a service”

### IaaS, PaaS or SaaS?

- A game development company wants to store the latest code with  a version control system like Github, so all developers can access and work on the same code
- SaaS

### IaaS, PaaS or SaaS?

- An app company wants to test their latest app on every Android and iOS version
- PaaS – the company could rent access to different mobile operating systems

### IaaS, PaaS or SaaS?

- An academic department wants to rent hardware to run a computationally-intensive scientific simulation and artificial intelligence project
- IaaS – they could rent the required CPU, GPU, RAM, storage capacity etc they need for a short period, without having to buy it

### Cloud Services

- While SaaS requires the other two, you are often sandboxed in – e.g. with Baidu Netdisk or Google docs, you can’t actually access the operating system/configuration, like you can with IaaS/PaaS

### Cloud Advantages

- Remote access – employees can access files from anywhere
- Collaboration – employees can work on same files simultaneously
- Can be used as a remote backup
- Big cloud company might have better security than a system we could make ourselves
- “Reduces complexity” if a public cloud – someone else handles it

### Cloud Disadvantages

- You are storing your data with another company – you have to trust them & their security/privacy standards
- MUCH more expensive than traditional servers
- Some software can’t be run as effectively when distributed across multiple servers (e.g. databases)
- Less customisable/control compared to having your own servers

### Alternative to Cloud

- An alternative to the cloud is a VPS (virtual private server) – in this situation, you are renting (part of) a specific server
- In contrast, in the cloud, you are paying for usage – you could be using 1 server or 1,000 – the cloud provider will automatically create/remove servers as your demand changes (though this can be 100s of times more expensive than just renting/buying the hardware yourself)

### Cloud              vs                VPS

- Highly-scalable due to being able to spin-up new instances automatically when demand surges
- Variable-pricing can result in huge bills (e.g. a small error causing an infinite loop or (D)DOS attack costing $10,000 in 24 hours)
- Pay-as-you-go – if you only need for 1 hour, that’s all you pay

- You have fixed-resources, so can’t scale up at a moment’s notice
- Fixed-price can be reassuring
- More customizable than cloud
- Shortest contract would usually be 1 month

### Bit Streaming

- Do you know what a stream/streaming is (either in computer science or geography)?
- Accessing a constant flow of data – e.g. a live video, phone call, watching a movie, listening to music etc. Unlike a regular download, a stream is of unknown/possibly indefinite length

### Bit Streaming: On-Demand vs Realtime

- On-demand: streaming from a source that already exists
- Realtime: streaming from a live source
- Can you think of some examples of each?
- On-demand: pre-existing media – YouTube, Soundcloud, Netflix etc
- Realtime: live sports, Twitch, radio etc

## Which are on-demand & which are realtime?

## [in reality, the user’s media player could e.g. keep last 30 minutes of played media on disk to allow for pausing, rewinding etc]

### Bit Streaming

- Media player requests data from media server & stores in it buffer
- Media player plays video as it arrives in the buffer
- If buffer reaches high-watermark level, media player tells server to stop sending – if buffer hits low watermark level, media player tells sever to resume sending

- Diagram is slightly wrong – high & low-watermark should be switched based on data flow direction

## When incoming transmission stops, 36.6KiB will leave the buffer per second – hence will take 21.8s to drop to low watermark

### Bit Streaming Question

- You are designing a media player to play videos with a resolution/frame rate of 1920x1080p30 and a colour depth of 24 – assume with compression, the file size reduces by 50x.
- You want to stop requesting data when you have 2 minutes of video stored in the buffer and start requesting data when there is only 30 seconds remaining in the buffer – what size should you make the high & low watermark level?
- 1 second = (1920 * 1080 * 30 * 24) / (50 * 8 * 10242) = 3.56MiB
- Hence HW = 120 * 3.56 = 427.15MiB ; LW = 30 * 3.56 = 106.79MiB

### Bit Streaming – Advantages & Disadvantages

- Can play immediately without waiting for whole file to download
- Don’t need to store large files on own device
- Harder to pirate (saving streams to files is harder)
- Requires Internet connection
- Can buffer/lag on slow connection/high resolution video
- Uses lots of bandwidth (especially if e.g. streaming same song 100 times…better to download it once)

## Security/privacy concerns/loss of control of data, expensive, some programs can’t be distributed easily/at all, less customisable/control

## private: more private/secure/have more control, cheaper in long-term, more customisable (e.g. specific hardware/configurations)

## Realtime: live playback of event – can’t pause/rewind/fast-forward, dropped/unsent packets = can’t play that part of stream

## IP Addressing

### Class Overview

- IPv4 addresses & format – valid & invalid examples
- IP history
- Network ID & Host ID
- IP Classes
- Classless Interdomain Routing
- Subnetting
- Advantages & disadvantages of each

### IP Addresses

- IP = Internet Protocol
- When first built, a public IP address would uniquely identify every device in the world
- Effectively, it is like a house address, but uniquely identifying a device on a network

### IPv4

- IP version 4 was planned in the 1970s and introduced in 1982 – at this point, the Internet was just used for the military & universities – they didn’t believe it would ever grow to the size it did
- Do you know the format of/how many bits are used for IPv4 addresses? Hence how many different IPv4 addresses are there?
- 32 bits, written as 4 groups of numbers from 0-255 – e.g:
- 192.168.0.1
- 232 = 4,294,967,296 (approx. 4.3 billion) addresses

### IPv4

- Can you see a problem with having about 4 billion IP addresses?
- There are nearly 8 billion people…most people now have Internet access and many people have multiple devices connected to the Internet (laptop, desktop, tablet, phone, tv, car, games console, even fridges etc)
- So IPv4 wouldn’t be able to uniquely identify all devices – so changes had to be made, like subnetting, dynamic & private IP addresses

### IPv4

- Why do you think they choose to use 32 bits to represent IP addresses when IPv4 was created?
- As mentioned, since it was never expected that more than 4 billion would be needed
- Internet speed was slow/data was expensive – both the source & destination IP address are sent with every packet, so you wanted to keep packet size as small as possible
- [the 2nd point isn’t that relevant – since even using just 8 extra bits would give you 240 = 1,099,511,627,776 addresses]

### IPv4 Format

- Comprised of a network ID & device ID
- For example, a company could buy the network ID 200.200.200 – that’s 24 bits
- That gives them 8 bits remaining for the device ID
- Valid IPs for devices would hence be 200.200.200.0 to 200.200.200.255
- Hence, with 8 bits for the device ID, they would have 256 different IP addresses
- [note: the split could be any values that add to 32 – here I just chose 24 bits for the network ID and 8 for the client]

### IPv4 – Valid or Invalid?

- 1234.57.93.4
- 185.92.2.220
- 256.58.39.110
- 174.8.2.92.1

- Invalid: 1234 > 255
- Valid
- Invalid: 256 > 255
- Invalid: uses 5 groups

### Routers

- Device ID 0 on the network is usually used for other purposes, so routers will often (but not always) have device ID 1
- A router will inspect the destination IP address of each incoming packet in its routing table and forward the packet to the next best hop

### IPv4: Separating Network ID from Device ID

- We said that part of an IP address represents the network – while part represents the device. There have been 3 ways used to achieve this:
- IP classes
- Classless Inter-Domain Routing (CIDR)
- Subnetting

### IPv4 Classes

- “IPv4 addresses classes really don't exist anymore, and have been deprecated since 1993”. (though the exam may ask about them…)
- For example: 110 00101110 11011101 10001 10111100
- What class would this be?
- Class C – since the IP address starts with 110

### IPv4 Classes

- Why do we need up to 3 bits for the class identifier? Why not just say class A = 0, B = 1 and C = 01
- To prevent ambiguity – i.e. if a an IP started “01”, that could be either be a class A or class C class
- Recap: What text compression technique do we also need to make sure patterns start with a unique series of bits?
- Huffman Coding

### IPv4 Classes: Number of Net IDs & Device IDs

- Remember each IP has to be unique – how many different netIDs are there in class A?
- Only 27 = 128 – i.e. there were only 128 class A networks for all governments/companies in the world – each class A network could have 16,777,216 devices

### IPv4 Classes: Number of Net IDs & Device IDs

- Can you see any problems with this allocation?
- As noted, only 128 class A networks can exist – a bigger issue, however, is that only 16,384 (214) different class B’s can exist worldwide – most medium businesses, schools, hospitals etc would want this class – but there weren’t enough

| Class | Number of NetIDs | Number of Device IDs |
| --- | --- | --- |
| A | 128 | 16,777,216 |
| B | 16,384 | 65,536 |
| C | 2,097,152 | 256 |

### IPv4 Classes: Number of Net IDs & Device IDs

- Suppose a company has 257 devices – what do you think might happen?
- They could have bought 2 class C’s, but this would make configuration difficult – so often they would simply buy a class B – but then they’d have more than 65,000 addresses that were unused and that no one else could use (and remember there are only 4.3 billion IPv4 addresses)

| Class | Number of NetIDs | Number of Device IDs |
| --- | --- | --- |
| A | 128 | 16,777,216 |
| B | 16,384 | 65,536 |
| C | 2,097,152 | 256 |

### IPv4 Classes: Unused Device IDs

- Suppose a small company has 150 computers, but they will be on 7 different LANs (different buildings, departments etc)
- They will need to buy 7 class C networks, which would mean 1792 addresses – but since they only have 150 computer, 1642 of those addresses are wasted

### IPv4 Classes: Unused Device IDs

- So, to try and solve this problem of wasted IP addresses with a class-based IP system, a new approach was introduced…

### Classless Inter-Domain Routing (CIDR)

- Aimed to solve problem of inflexible split (i.e. only 3 classes) between network ID and host ID (device ID)
- Adds 8 bit suffix to the IP
- Suffix specifies how many bits are for the network ID
- The remaining bits (of the 32 bit IPv4 address) would be for the host ID
- Below we see 21 bits for network ID, hence 11 for host ID

- Note how CIDR also doesn’t waste 1-3 bits for specifying the class

### Classless Inter-Domain Routing (CIDR)

- Note: CIDR IP addresses are compatible with original class-based IP system – by simply setting the suffix to 8, 16 or 24 respectively
- e.g. note how class C uses 3 bits (110) for the class identifier and 21 for the net ID – i.e. 3 + 21 = 24 bits – we could keep the 21 bit net ID the same and set the leading 3 bits to 0

### Subnetting

- Another approach – and the one currently used today is subnetting – you can run ipconfig /all and you will notice the subnet mask for the network
- Let’s see how it works…

### Subnetting

- Again, a 32-bit IPv4 address is split into a network ID and host ID
- A subnet mask is used to determine if a bit corresponds to the network or host ID
- A 1 means the bit corresponds to the network – a 0 means it corresponds to the host
- i.e. 255.255.255.0 = 1111111 11111111 11111111 00000000 = 24 bits for net ID; 8 for host ID
- So an IP of 70.152.34.55 would mean the network 70.152.34 and device 55 on this network

### Subnetting

- Common subnet mask are 255.255.255.0 and 255.255.0.0
- The first is much more common worldwide than the latter – why do you think that is?
- Since the first subnet mask provides 8 bits for the host ID (256 devices), while the latter provides 16 bits for the host ID (65,536)
- Other than big companies/governments etc, most people (e.g. in homes) don’t need networks with 65,536 devices. Using an 8-bit host ID means we can have more networks (since 24 bits are available for the network ID)

### Subnetting

- Subnetting is used to break a big network into multiple, smaller subnets – for example, imagine you are a company and have different switches/departments
- e.g. You may not want the customer service department to be on the same network as the research & development department for various reasons we will see later…

### Subnetting

- For example, suppose we have 8 bits for the host ID – we could use 3 of these bits to represent a subnet and 5 to represent a device ID
- That would give us 8 networks with 32 devices on each, rather than having 1 LAN with 256 devices on it

### Subnetting

- Here you can see how the number of subnets and possible hosts on each change as the subnet mask changes

### Subnetting

- The subnet mask doesn’t always have to be split at position 8, 16 or 24 – suppose we have a network that will have a maximum of 1000 devices – how many bits should we use for the network ID vs host ID, hence what would be the subnet mask?
- 210 = 1024 – hence choosing 10 bits for the host ID would be good
- Our subnet mask would hence be:
- 11111111 11111111 11111100 00000000
- 255.255.252.0

### Subnetting

- Suppose we have the IP address 27.78.103.250 and subnet mask 255.255.252.0 – what would the network id and host ID be

- So really, if representing in denary, this is like saying the device is on network 27.78.100 and the device ID is 1018 (1111111010)
- So things can get a bit complex for humans if the subnet mask doesn’t split on an 8-bit boundary – you won’t need to do this in the exam, but you need to know the split position could be anywhere

| IP | 00011011 | 01001110 | 01100111 | 11111010 |
| --- | --- | --- | --- | --- |
| Subnet mask | 11111111 | 11111111 | 11111100 | 00000000 |

### Subnetting

- Have a go:
- https://www.iptp.net/en_US/iptp-tools/ip-calculator/

### Instead of using CIDR notation, what would the equivalent subnet mask be?
255.255.255.0

- The /[number of bits for network ID]
- is called CIDR notation

## Yes – since only the host ID changes and is in range 0-255

### Subnetting Advantages & Disadvantages

- Let’s see the advantages and disadvantages of breaking a single network down into multiple subnetworks (subnetting)

## Improves efficiency by breaking down big, busy networks – this however does make it slightly more expensive, since additional routers are required (though for a company, this cost is insignificant)

### Questions

- What do the letters “IP” stand for?
- Internet Protocol
- What is an IP address used for?
- To uniquely identify a device on a network – hence allowing it to receive packets (communication) from other devices via a series of routers
- An IP address consists of two parts: a ________ and ________
- Network ID & Host ID

### Questions

- Describe the format of an IPv4 address:
- 32 bits
- 4 groups of 8 bits each
- Each group can represent denary number 0-255
- Groups separated by dot/full stop/period “.”

## Invalid – doesn’t use full stop “.” as group separator

## Subnetting

## The network/host ID split can be at any bit position – hence networks can be allocated only the number of host IDs they need. For example, 100.110.120.130/24 means 24 bits are used for the network ID, while 8 bits would be for the device ID

## The first 16 bits represent the network ID; the last 16, the host ID. Hence the network is 11.22 and the valid range of device IDs would be from 11.22.0.0 to 11.22.255.255

## more expensive due to requirement of routers for each subnet

## IP Addressing – Part 2

### Class Overview

- Public & Private IP addresses
- Ports
- Network address translation (NAT)
- Static & Dynamic IPs
- Dynamic host control protocol (DHCP)

### Combating Shortage of IPv4 Addresses

- As stated, IPv4 uses 32 bits, hence only has about 4.3 billion IPs available – to combat this shortage, a few approaches were used:
- Subnetting
- Private IPs & NAT (network address translation)
- Dynamic IPs (using DHCP)
- We have looked at subnetting, so let’s look at the other two…

### Network Address Translation (NAT)

- Rather than each user having a public IP address that had to be globally unique, we could:
- Give the network router a globally-unique IP address
- Give devices on the network a private IP address that the router that only had to be unique for that network
- This is why if you look in a device’s connection settings (in a GUI or command like ipconfig /all), you will see a private IP address like 192.168.0.1

### What would the default subnet mask for each of these address ranges be? Which can have the most devices?

- 255.0.0.0
- 255.240.0.0
- 255.255.0.0

- These private address ranges are hence listed from having most  least available device IDs

### One screenshot was taken from connecting to the classroom WiFi – one was taken by connecting to the schoolwide WiFi – which do you think was which & why?

- Left is schoolwide network – 10.X.X.X IPs have more host IDs than 192.168.X.X networks
- We’ll look at DNS in more detail later…

### Public IPs – not NAT

- Each end device has globally unique IP = bad

## Devices have private addresses unique to that network only

### Ports

- When a device receives data, do you think it would be able to tell what process (application) that data is for?
- No – this is what ports are used for – they specify the process the data is for
- An analogy would be that an IP address is the building…while the port would be the specific room number/person’s name

### Ports

- Note: ports can refer to hardware ports – LAN/ethernet ports, USB ports etc
- In THIS case, however, the ports we are referring to aren’t actually a physical object – they are effectively just an ID number so data can be sent to the correct process

### Ports

- So:
- hardware ports: used for input to/output from device
- software ports: specifies the process the data should be sent to on a device

### Port Numbers & Protocols

- Certain ports are usually used for specific protocols – e.g.
- If a server has a web server, it will (usually) be running at port 80/443, email at 25/110/143 etc
- When you type “example.com”, your browser actually appends the port itself – e.g. example.com:443

| Port Number | Usage |
| --- | --- |
| 20 | File Transfer Protocol (FTP) Data Transfer |
| 21 | File Transfer Protocol (FTP) Command Control |
| 22 | Secure Shell (SSH) |
| 23 | Telnet - Remote login service, unencrypted text messages |
| 25 | Simple Mail Transfer Protocol (SMTP) E-mail Routing |
| 53 | Domain Name System (DNS) service |
| 80 | Hypertext Transfer Protocol (HTTP) used in World Wide Web |
| 110 | Post Office Protocol (POP3) used by e-mail clients to retrieve e-mail from a server |
| 143 | Internet Message Access Protocol (IMAP) Management of Digital Mail |
| 443 | HTTP Secure (HTTPS) HTTP over TLS/SSL |

## For example, you can see my anti-virus, Chrome, Edge, OneDrive, QQ etc

### Network Address Translation (NAT) - Question

- Suppose my private IP is 192.168.0.1 – if I send a request to a server, how does it know where to respond (since this IP is private and not unique)?
- When packets pass through your router, your router changes the source destination from being your device’s private IP, to being the router’s public IP
- A record mapping the private IP:port to the public IP:port is then added in the router’s NAT forwarding table, so that when the router receives a packet from the server, it knows which private IP & port (process) to send it to

## User wants to send a request to web server

### Router changes packet’s source IP address & adds IP:ports to its NAT forwarding table

- Note: routers performing NAT have both public & private IPs

## Server sends response, using router’s public IP address and specified port

## Router then maps the incoming packet’s public IP:port to the private IP:port and sends it to the correct device on the network

### Static vs Dynamic IP Addresses

- The final method to solve the shortage of IPv4 addresses is by using dynamic IP addresses – just by the words “static” & “dynamic”, can you guess what this might mean?
- Static IP addresses: fixed, don’t change
- Dynamic IP addresses: assigned by ISP/router using DHCP (Dynamic Host Configuration Protocol) – a device’s IP can change

### Static IP Addresses

- What kind of devices might require a fixed-IP address?
- Servers – web, file, email, database, print etc
- What would happen if they did change?
- Suppose an email server has an IP of 12.34.56.78 – if this IP address changed, the packets would no longer arrive at the correct server.
- Note: there are protocols like DNS that allow IP records to be updated, since sometimes we have to
- This would be like sending a letter to someone – you don’t want them to move house every day

### Static IP Addresses

- When talking about servers, static IPs can be considered more secure – why do you think that is?
- Assume if the IP address of a popular website now points to a random user’s machine and millions of people are trying to access it – the person could instead send them a malicious version of the website to steal their account details (pharming) or just send them malware directly
- So if an IP is assigned to a specific company and never changes, users can have more trust that it is legitimate

### Dynamic IP Addresses

- For other situations – e.g. personal devices – we don’t need a permanent IP address (in fact, for privacy/security reasons, it’s better if we don’t)
- Afterall, assume you use your computer for 1 hour per day and the other 23 hours it’s turned off – if every device had a fixed IP, no one else would be able to use that IP, even when it’s not needed

### Dynamic IP Addresses

- There will usually be two situations where dynamic IPs are used
- Your router will ask for a public dynamic IP from your ISP’s DHCP server when it is turned on
- Individual devices will ask for private dynamic IPs from your router

### DHCP (Dynamic Host Configuration Protocol)

- The DHCP server (a home router includes this functionality) is responsible for:
- Assigning unique IP addresses to devices that request one
- It does this by storing the valid IP range and list of currently used IPs

### DHCP Lease

- A device will ask the DHCP server for an IP and the DHCP server will grant them one for a period of time – usually, this will be between 1 hour to 1 week (let’s assume 8 hours, to make the maths easier)
- When half the lease time has passed, if the device is still online, it will ask the DHCP server if it can extend the lease
- If the DHCP server is unavailable, the requesting device will wait half the time and try again – e.g. if the initial lease is 8 hours, the device will wait the following time to try and renew the lease: 4 hours  2 hours  1 hour  30 minutes  15 minutes  7.5 minutes etc…if not renewed in time, the IP will become available for another device

### DHCP Lease

- We can see here, my device was granted a 2 hour lease (11:30 to 13:30)
- After 1 hour, the lease would try to be extended

### DHCP Lease

- Routers are usually assigned longer leases by the ISPs DHCP server than devices are assigned by the router’s DHCP server – why do you think that is?
- People turn off devices much more than routers (which many people leave on 24/7) – most people don’t leave their computer on for 1 week, so there’s no need to give it a lease time that long
- Millions of routers sending the DHCP server requests to extend their lease every hour would add load to the server – so the DHCP server gives them a longer lease, so they have to check less – i.e. it’s like saying “don’t ask again for 1 week”

### Dynamic IPs: Reality

- In theory, dynamic IPs offer more privacy for the user – why do you think that is?
- Since if your IP is constantly changing, it’s hard to pinpoint a specific user and their activity. A static IP, in contrast, would have much less privacy
- The reality is a bit different, however…

### Dynamic IPs: Reality

- “The typical lease time in the United States is roughly 7 days, however, in most instances the router will renegotiate this lease prior to expiration and most households will hold the same IP address for longer periods of time. Our research has discovered many homes, that theoretically have dynamic IP’s, hold the same address for multiple years.”
- Afterall, most people never turn their router off – so ironically, a simple way to improve privacy could be to turn off your router and hope you are assigned a different IP

### Example

- For example, the first picture is my public IP address when using the classroom WiFi, the second is when using the schoolwide WiFi and the last is my private IP
- What do you think these IP addresses represent?
- First 2: router’s public IP address, provided by ISP’s DHCP server
- Last: my computer’s private IP, provided by router’s DHCP server

### Static vs Dynamic IP Addresses

- Here are my connection settings/stats – note how we can choose either a dynamic (DHCP) or static (here they call it “manual”) connection for both IP and DNS
- Note my current IP of 192.168.1.110 assigned by the router’s DHCP server

## Then we can just choose our IP – I’ll choose 200, since this likely isn’t taken

## Left configuration has no lease obtained/expired, hence is static (i.e. a static IP is permanent and won’t expire, unless manually removed by someone)

### Looking at this data, you should recognize most of it – do you know what it is?

- Network interface card & WiFi protocol
- MAC address of NIC
- DHCP, IPv4/IPv6 address
- Subnet mask
- Lease obtained/expired
- Default gateway (i.e. ‘gate’ in/out of network – our router)
- DHCP server (also our router)
- DNS servers (office router & schoolwide router)

## We can run “ipconfig /all” again and see our new IP – expectedly, navigating to a website works as expected

### Question

- What companies do you think own the most IP addresses in China? How about the world?
- You can try for any country by using the appropriate 2-digit ISO-2 code – Australia would be as follows:
- https://db-ip.com/country/AU

### IPs in China

| Rank | Name | IPv4 addresses |
| --- | --- | --- |
| 🥇 | Chinanet | 113,367,552 |
| 🥈 | China Mobile | 74,408,704 |
| 🥉 | CHINA UNICOM China169 Backbone | 59,146,752 |
| 4 | China Education and Research Network Center | 39,556,352 |
| 5 | China TieTong Telecommunications Corporation | 39,272,960 |
| 6 | China Mobile Communications Corporation | 22,625,024 |
| 7 | Hangzhou Alibaba Advertising Co.,Ltd. | 16,328,704 |
| 8 | China Unicom Beijing Province Network | 14,813,184 |
| 9 | Shenzhen Tencent Computer Systems Company Limited | 14,156,548 |
| 10 | China Telecom (Group) | 12,928,768 |
| 11 | China Networks Inter-Exchange | 5,760,256 |
| 12 | Alibaba (US) Technology Co., Ltd. | 4,772,111 |
| 13 | China Unicom IP network China169 Guangdong province | 3,948,288 |
| 14 | Oriental Cable Network Co., Ltd. | 3,214,336 |
| 15 | IDC, China Telecommunications Corporation | 3,214,080 |
| 16 | China Telecom | 2,265,856 |
| 17 | China Unicom Guangzhou network | 1,393,664 |
| 18 | Huashu media&Network Limited | 1,376,256 |
| 19 | China Unicom Shanghai network | 1,285,120 |
| 20 | CERNET2 IX at South China University of Technology | 1,248,000 |

### Question

- In terms of ISP, China Telecom & Unicom have the most worldwide – there is actually a non-ISP organisation that has more…can you guess?
- Actually, the US military – who have 307 million. Naturally, people wonder what they need them for – and there are other countries which don’t have enough IPs

### Questions

- Recap, what were some ways used to alleviate the IPv4 shortage?
- Subnets
- Private IPs
- Dynamic IPs
- IPv6 [next class]

### Questions

- What is network address translation and how does it help alleviate the IPv4 shortage?
- Converting a private IP for a device to the router’s public IP that is globally accessible by other devices. NAT alleviates shortage since now not every device needs a globally-unique public IP - only the router (and other nodes like servers) would, not end user devices

### Questions

- What is a port?
- An ID number assigned to a process that allows the OS to transfer packets to the correct process when they are received
- How does NAT work?
- The router stores a network address translation table mapping the incoming packet’s private IP:port to the router’s public IP:port which it updates the packets with. When receiving a response, the router checks the public IP:port mapping to see what private IP:port these packets are for and forwards them to correct device accordingly

### Questions

- What are static & dynamic IP addresses – list some advantages of each?
- Static IP addresses: fixed, don’t change – trustworthy, easy to access
- Dynamic IP addresses: assigned by ISP/router using DHCP (Dynamic Host Configuration Protocol) – a device’s IP can change, helps alleviate IPv4 shortage since unused IPs are recycled, more private/harder to track user activity over long period of time

### Questions

- What is DHCP and how does it work?
- The dynamic host configuration protocol provides a method of allocating private IP addresses to devices on a network – DHCP servers will store a list of used/unused IP addresses. When you try to connect to a network, the device will request an IP address from DHCP server and be granted one for a given lease time, if available. Once half the lease time has expired, the device will ask the DHCP server if it can renew (extend) its lease – if not, it will wait half the time, try again and so on, until it either successfully manages to renew the IP or the lease time expires

## IPv6 & DNS

### Class Overview

- IPv6 Formats & Motive
- DNS – Domain Name System
- DNS Caching & Hijacking

### IPv6

- Recap, what were 3 ways we mentioned to alleviate the IPv4 shortage?
- Subnetting
- Private IPs
- Dynamic IPs
- Instead of trying to come up with these workarounds for IPv4, we could just create a new IP protocol which supports more addresses – i.e. IPv6

### IPv6 Format

- Uses 128 bits – so 2128 available IP addresses
- Written as 8 groups of 4 hex digits separated by a colon – e.g.
- 2001:0db8:0001:0000:0000:0ab9:C0A8:0102
- Leading zeros and 1 groups of all 0s can be omitted – i.e.
- 2001:0db8:0001:0000:0000:0ab9:C0A8:0102
- 2001:db8:1::ab9:C0A8:102

### IPv6 Dual Format

- The transition from IPv4 to IPv6 has been going on for many years (and even now, most devices still use IPv4)
- To allow interoperability, dual IPv6 and IPv4 addresses can be used – hence, if a receiving device supports IPv6, it can use the IPv6 address, while if it only supports IPv4, it can use that.
- In this dual format, 6 groups (6 * 16 = 96) are allocated for IPv6, while 32 bits are for IPv4 – meaning 128 bits total (i.e. 96 + 32)
- 2001:db8:3333:4444:5555:6666:1.2.3.4
- 2001:db8::1234:5678:5.6.7.8 (middle 2 groups of IPv6 are all 0s here)

### IPv6 Zero Groups

- Why can we only have 1 group of all 0s?
- Assume we have the IPv6 address: AAAA:BBBB::CCCC::DDDD
- Here, we see 4 of 8 groups, hence we know there are 4 groups of all zeros – but how do we know if there’s 3 groups of 0s between the Bs and Cs, then 1 between the Cs and Ds…or 2 and 2…or 1 and 3
- Assume we have 1 group of 0s, then 3 groups of 0s…we’d write that as follows:
- AAAA:BBBB:0000:CCCC::DDDD

### IPv6 Format

- An IPv6 address is comprised of the following:
- Network ID - the first three hex groups (first 48 bits) are the address
- Subnet mask - the fourth hex group (the 49th through 64th bits) in the address
- Device ID - the last four hex groups of numbers (the last 64 bits) in the address
- 2001:0db8:0001:0000:0000:0ab9:C0A8:0102

### DNS (Domain Name System)

- What is a domain name?
- A website address – baidu.com, youtube.com abc.xyz etc
- When you communicate with a server, the computer/network doesn’t actually use the domain name – what does it use?
- IP addresses – hence, there needs to be a way to convert a domain name to its corresponding IP address – this is what DNS (domain name system) does

### DNS (Domain Name System)

- A client will send a DNS request asking to resolve a domain name to an IP

- In this example, what is the domain name and what is the returned IP address?
- Domain = main.google.com       IP address = 1.2.3.4

### DNS Process

- DNS is hierarchical – a DNS record will be looked for in these places – if it’s not found, it will be looked for in the next layer
- Browser & operating system
- Router’s DNS server (cache)
- ISPs DNS server
- Root  top-level domain server  authoritative name server

### DNS Stages

- For example, assume you type yahoo.com into your web browser and hit enter
- Let’s see how this DNS record would be resolved

### Browser & OS

- ISP’s DNS Server

### Note: the .com TLD doesn’t know all the .com IPs…again, it simply knows which server to ask

- Note: the root server doesn’t have a list of all the domains – it just has a list of the top-level domain servers

## Authoritative Name Server

## Note: when authoritative name server sends IP back to the resolver, each of the previous stages (ISP’s resolver, router & browser) will store it in memory (caching), so it doesn’t have to repeat this process again

### DNS Structure

- Is a hierarchical distributed database
- Root servers are replicated, for both backup and to provide local (low-latency) access to users in different parts of the world
- Divided into non-overlapping zones – each zone has a primary server and secondary servers
- More than 250 generic/national top-level domains (TLDs - .com, .edu, .gov, .cn, .uk, .jp etc)

### Remember this image – left was schoolwide WiFi, right was office WiFi

- What do you think will happen if we use ipinfo.io to get information about the 192.168.2.1 DNS server?
- Error – it’s our router, so isn’t publicly available

### How about if we now try it for either the primary or secondary DNS for the schoolwide network – what will happen & why?

- This network is connected to the ISP’s backbone directly – hence it will use the ISP’s DNS servers
- [For privacy, I used Cloudflare’s instead – but you can try with you own]

### DNS Stages

- Let’s see a real life example – we can use a program like Wireshark to capture packets to/from our computer
- Let’s go to a random site I have never been to before – hello.io

### DNS Stages

- Since we have never been to this site, it’s IP isn’t cached (saved) in our browser or operating system
- Hence a DNS query is sent from our PC (192.168.1.110) to our router’s DNS servers (192.168.2.1 and 192.1.68.1.1)

- You can see the IP address 178.57.219.250 was returned

## No – since we can see our PC is sending a DNS request to the router (stage 2), so we know it wasn’t resolved in stage 1

### With Wireshark, we can only see the packets leaving/entering our computer, so we don’t know if stages 3 or 4 had to be tried. We can actually infer what stage was reached from the data though – do you have any idea how?

The timings are in seconds – it took about 0.5s (or 500ms) to resolve the DNS record – if the router knew, it would resolve the result in <5ms, likewise, if the ISP’s DNS server knew, it would probably take 20 to 40ms – the fact it took 500ms suggests the long process of stage 4 was required

- Browser/OS records/cache
- Router’s DNS server
- ISP’s DNS server (resolver)
- Root server  top-level domain (TLD) server  authoritative name server

### DNS Caching

- What do you think the Wireshark output will look like if I go to hello.io again?

- Why is it empty?
- Since the browser stored the DNS record (domain name  IP address mapping) in its cache, the request never needed to leave the computer

### DNS Caching

- Hence, what is the benefit of caching (saving) DNS records?
- Increases speed and reduces load on DNS servers
- Caching occurs at all stages – the browser/OS, router, ISP & authoritative name server

### DNS Caching

- Once the browser knows a DNS record, do you think it stores it forever – why or why not?
- No – by default, it only stores it for a short time like 1 minute. This is because:
- a website’s IP or DNS policy could change (e.g. if they change server)
- for security reasons (e.g. website could be taken down…and a malicious site could now be at that IP) or DNS spoofing
- storing every DNS record for every site indefinitely would take up lots of storage

### DNS Records

- We can’t easily modify the browser’s cache, but we can easily edit the “hosts” file – this is located at the following locations:
- Windows: C:\Windows\System32\drivers\etc
- Linux/Mac: /etc/hosts
- We can then add custom DNS records easily

### DNS Records

- For example, this would mean map the domain name baidu.com to the domain at 58.250.137.36 - qq.com
- Using the ping command, we can see when we type baidu.com, it’s actually going to the QQ servers. Unfortunately, however, it seems modern web browsers ignore non-local IP addresses in the hosts file for security reasons

- This browser restriction also helps prevent again DNS hijacking – a type of pharming

### DNS Records

- You can, however, set the DNS record to point to a local IP address – i.e. anything in the 127.0.0.0/24 address range
- When a user types baidu.com, they will be shown a file I created, instead

- This DNS hijacking could be used more maliciously – e.g. creating a clone of the baidu.com homepage, but then stealing their username/password when they try to login
- For financial websites, this is even more of an issue

### Practice Tasks

- Run ipconfig /all
- Create & connect two LANs in Packet Tracer
- Ping other students’ computers
- Change IP address to static/dynamic

### DNS Name Resolution

- For the following situations, state what stage of the DNS hierarchy the name will most likely be able to be resolved

- ?

- ?

- ?

- ?

| A website you haven’t visited recently, but a colleague on the same network has | 2 - router |
| --- | --- |
| A website you/nor people in your region visit | 4 – authoritative name server |
| Clicking a link on a webpage that you just loaded | 1 – browser |
| A website that you haven’t visited, but many people in your region do | 3 – ISP’s DNS server/resolver |

### Questions

- Why was IPv6 created and how many addresses can it represent?
- Primarily to address issue of being too few IPv4 addresses – but also allows more efficient routing, better security, simpler network configuration (DHCP servers not required). There are 2128 different IPv6 addresses – or 340 undecillion (3.4 x 1038)

### Questions

- What is a dual IPv6 address and why were they created?
- An IPv6 address that also contains an IPv4 address – this is for backwards compatibility. If hardware doesn’t support IPv6, then it can use the IPv4 address instead

### State whether the following IPv6 addresses are valid – give reason if invalid
2001:db8:3333:4444:CCCC:DDDD:EEEE:FFFF

A:A:A:A:A:A:A:A:A

::

2001::DB8::38EA

::11.22.33.44

- Valid
- Invalid – 9 groups
- Valid – all 0s
- Invalid – 2 groups of 0s
- Valid – dual address

### 2001:0db8:0001:00000::0ab9


AB:CD.EF:1.2.3.4

2001:0dg8:0001:00000::0ab9

- Invalid – 5 chars in 4th group
- Invalid – uses “.” in IPv6 portion
- Invalid – “g” isn’t valid hex character

## Root server  top-level domain (TLD) server  authoritative name server

## To reduce load on DNS servers and improve DNS query response time
