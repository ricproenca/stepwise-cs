# 02 Communication

**Course:** Cambridge International AS & A Level Computer Science (9618)
**Source:** Thinka

---

Home
For Teachers
Study Materials
Blogs
Pricing
Contact
English (UK)
Get Started
Resources
Cambridge International A Level
Computer Science (9618)
Communication

Computer Science (9618) · Cambridge International A Level · 11 min read

Communication
Welcome to Communication: Networks and the Internet!

Hey there! This chapter is super relevant to your daily life because we are diving into how computers talk to each other—from connecting devices in your classroom to sharing data across the globe via the internet. Understanding this is essential for building, managing, and securing modern computer systems.

Don't worry if networking terms sound complicated; we will break them down using simple examples and real-world analogies. Let's get connected!

2.1 Networks including the Internet
2.1.1 Network Fundamentals: LAN and WAN

A computer network is simply two or more devices linked together to share resources (like printers) and exchange data.

Local Area Network (LAN)

A LAN covers a small, limited geographical area, like a school building, an office floor, or your home.
Example: All the computers in a single library connected together.

Wide Area Network (WAN)

A WAN covers a large geographical area, often connecting multiple LANs together. WANs often rely on transmission media provided by third parties (like telecom companies).
Example: The internet itself is the largest WAN. Connecting your school’s network (a LAN) to another campus across the city uses a WAN.

Quick Review: The Scale of Networks

LAN = Local (Small area)
WAN = Wide (Large area)

2.1.2 Network Models: Client-Server and Peer-to-Peer

When we design a network, we need a structure that defines how the different computers interact.

Client-Server Model

In this model, special high-performance computers called servers provide services (like file storage, printing, or web hosting) to standard user computers called clients.

Roles: The Server manages resources; Clients request and use those resources.
Analogy: Imagine a restaurant. The waiter (Client) requests food from the chef (Server). The chef does the hard work and serves multiple waiters.

Benefits:

Centralised Security: Data backup and security are managed in one central place (the server).
Scalability: Easily add new clients without significantly impacting performance.

Drawbacks:

Cost: Requires expensive, high-specification server hardware and dedicated IT staff.
Single Point of Failure: If the server crashes, the entire network service stops.
Peer-to-Peer (P2P) Model

In this model, all computers (or 'peers') are equal. They share resources directly with each other without needing a central server.

Roles: Each computer acts as both a client and a server.
Example: Sharing a document directly from your laptop to your friend's laptop over Wi-Fi without uploading it to a cloud service first.

Benefits:

Low Cost: No need for expensive dedicated server hardware.
Robustness: If one computer fails, others can continue operating.

Drawbacks:

Security: Data security and backups must be managed individually by each user.
Disorganisation: Harder to locate files if they are scattered across many machines.
Thin-Client vs. Thick-Client

This difference relates to where the heavy lifting (processing) happens:

Thick-Client (Fat Client): A standard computer with its own operating system, storage, and processing power. It does most of the processing locally.
Difference: Requires minimal constant connection to the server, but needs more expensive hardware.
Thin-Client: A simple terminal that relies heavily on the central server for processing and data storage. It has minimal local processing power.
Difference: Cheaper hardware and easier management, but completely reliant on a strong network connection and the server.

Key Takeaway: Choose Client-Server for large, professional, and secure environments. Choose P2P for small, informal networks where budget is limited.

2.1.3 Network Topologies

A topology describes the physical layout or structure of a network.

Bus Topology
Layout: All devices are connected to a single central cable (the 'bus').
Data Transmission: Data packets travel along the bus and are checked by every device, but only the intended recipient accepts the packet.
Drawback: If the central cable breaks, the entire network fails.
Star Topology
Layout: All devices are connected to a central device (usually a switch or hub).
Data Transmission: Data goes from the sender, through the central device, and then directly to the recipient.
Benefit: If one cable fails, only that device is affected; the rest of the network remains operational.
Mesh Topology
Layout: Every device is connected directly to every other device.
Data Transmission: Provides multiple paths for data. If one path fails, the data automatically reroutes.
Benefit: Extremely reliable (fault-tolerant).
Drawback: Very expensive and complex to install due to the vast amount of cabling needed.
Hybrid Topology
Layout: A combination of two or more standard topologies (e.g., Star topologies connected by a Bus backbone).
Benefit: Flexible, allowing networks to be designed exactly according to specific requirements.
Memory Trick: Topologies

Bus = Single Backbone
Star = Central Switch
Mesh = Many paths (like a fishing net)

2.1.4 LAN Hardware Components

To support a LAN, several specific pieces of hardware are required:

Switch: A smart device that connects devices in a network. It directs data packets only to the intended recipient using the device’s MAC address. (Much more efficient than a hub.)
Server: The powerful machine dedicated to providing services (file storage, printing, security management, etc.).
Network Interface Card (NIC): A circuit board installed in a device that allows it to connect to a wired network (usually via an Ethernet port).
Wireless Network Interface Card (WNIC): Hardware (often built into a laptop) that allows connection to a network using radio waves (Wi-Fi).
Wireless Access Point (WAP): A device that allows wireless devices to connect to a wired network, creating a wireless LAN segment.
Cables: Physical media for transmission (e.g., twisted pair Ethernet cable).
Bridge: Connects two separate LAN segments that use the same protocol, making them appear as a single LAN.
Repeater: Used to boost or regenerate a signal over long cable distances, preventing signal degradation.
The Role and Function of a Router

The router is essential for communication between networks (WANs/Internet).

Function: Routers read the IP address destination on a data packet and determine the best route for that packet to reach its target network.
Role: They connect different networks together (e.g., your home LAN to the Internet).

Did you know? A router works at the network level (IP addresses), while a switch works at the data link level (MAC addresses).

2.1.5 Wired vs. Wireless Networks

We need to consider the characteristics and implications of using either wired or wireless connections.

Wired Networks (using Copper or Fibre-optic Cables)

Characteristics: Physical connection using electrical signals (copper) or light (fibre-optic).
Implications:
Speed & Reliability: Generally faster and more stable than wireless. Fibre-optic is especially fast over long distances.
Security: Very secure; data cannot be easily intercepted outside the physical cable.
Cost/Installation: Higher initial installation cost and less flexible (must drill holes, run wires).

Wireless Networks (using Radio Waves/WiFi, Microwaves, Satellites)

Characteristics: Uses electromagnetic waves (radio waves/Wi-Fi) to transmit data.
Implications:
Flexibility: Easy to add devices and move around.
Speed & Reliability: Susceptible to interference (walls, other signals) and generally slower than wired connections, especially under heavy load.
Security: Less secure; data signals travel through the air and must be encrypted (like WPA2/3) to prevent interception.

Key Takeaway: Fibre-optic cables are preferred for high-speed, long-distance communication (like connecting continents) because they use light signals that degrade less than electrical signals in copper cable.

2.1.6 Data Collision and Ethernet (CSMA/CD)

On shared network media (like old Bus topologies or legacy Ethernet), if two devices try to send data at exactly the same time, the signals collide, and the data is corrupted.

Ethernet is a common set of standards for wired LANs. It uses a protocol called CSMA/CD to manage data traffic and prevent collisions.

Carrier Sense Multiple Access/Collision Detection (CSMA/CD)
Carrier Sense: The device listens to the cable (the carrier) to check if another device is currently transmitting data.
Multiple Access: All devices have equal access to the medium.
Collision Detection: If the device senses the medium is clear, it transmits. If, however, a collision still occurs (two devices started transmitting simultaneously), both devices immediately stop transmission.
Backoff: Both devices then wait for a random, small amount of time (a "backoff" period) before attempting to retransmit. This random delay prevents them from colliding again immediately.

Note: In modern switched networks (using star topology), collisions are much less common as the switch manages dedicated connections between devices.

2.1.7 Bit Streaming

Bit Streaming is the continuous transmission of digital data (bits) over a network, usually for media consumption (audio or video). Instead of downloading the whole file before watching, streaming processes the data as it arrives.

Methods of Bit Streaming
Real-Time Streaming: Used for live events (e.g., a live sports broadcast). The data cannot be paused or buffered significantly without interrupting the stream.
On-Demand Streaming: Used for pre-recorded content (e.g., Netflix, YouTube videos). Data is temporarily stored (buffered) on the client device, allowing the user to pause, rewind, or fast-forward.

Importance of Bit Rates and Broadband Speed:
The bit rate is the amount of data (in bits) transmitted per second. If the required bit rate of the media (e.g., a 4K video might require 25 Mbps) is higher than the user's broadband speed (download speed), the stream will constantly pause and buffer, leading to a poor user experience. High broadband speed is crucial for high-quality bit streaming.

2.1.8 The Internet vs. The World Wide Web (WWW)

These two terms are often confused, but they are distinct concepts:

The Internet: This is the global physical infrastructure—the vast network of interconnected routers, servers, cables, and satellites. It allows computers anywhere in the world to communicate.
The World Wide Web (WWW): This is the collection of hyperlinked documents (web pages, images, videos) accessed via the Internet. The WWW uses the Internet's infrastructure, but it is just one service running on top of it.
Analogy: The Internet is the road network; the WWW is all the cars and traffic travelling on those roads.
Hardware to Support the Internet (Connecting to the WAN)

To access the Internet, we need hardware to connect the local network (LAN) to the wider infrastructure:

Modem (Modulator/Demodulator): Converts digital signals from the computer into analogue signals for transmission over traditional phone lines (and vice versa).
PSTN (Public Switched Telephone Network): The standard traditional telephone system used to carry voice and, traditionally, internet data (dial-up or basic DSL).
Dedicated Lines: High-speed, guaranteed bandwidth connections (like T1 or leased fibre lines) used by large businesses or ISPs, not shared with other users.
Cell Phone Network: Uses radio waves and cell towers to provide mobile internet access (4G, 5G).
2.1.9 Addressing on the Internet: IP, URL, and DNS
IP Addresses (Internet Protocol)

An IP address is a unique numerical label assigned to every device participating in a computer network that uses the Internet Protocol for communication. Think of it as a device's postal address.

IPv4 Format: Uses 32 bits, usually written as four denary numbers separated by dots (e.g., 192.168.1.1).
IPv6 Format: Uses 128 bits, providing a vastly larger address space (essential because IPv4 addresses are running out).
Subnetting: The process of dividing a large network into smaller, more manageable subnetworks (subnets) to improve performance and security.

Public vs. Private IP Addresses

Private IP Address: Used within a local network (LAN). They are not visible on the wider Internet. (e.g., 192.168.x.x).
Public IP Address: The single address provided by your Internet Service Provider (ISP) that identifies your entire network to the outside world. All devices inside your network share this public IP when accessing the Internet.
Implication for Security: Public IPs are the only way external hackers can initially locate your network.

Static vs. Dynamic IP Addresses

Static IP: An address that is permanently assigned to a device. Used for servers or network printers that must always be found at the same address.
Dynamic IP: An address temporarily assigned to a device by a DHCP server (Dynamic Host Configuration Protocol) when it joins the network. Most home computers and phones use dynamic IPs.
Uniform Resource Locator (URL) and Domain Name Service (DNS)

Humans prefer names (like google.com) over numbers (like 142.250.69.110). The URL and DNS make this translation possible.

URL: This is the address used to locate a resource (like a web page) on the WWW.
Example: https://www.cambridgeinternational.org/alevel
Domain Name Service (DNS): This is a massive, distributed database that translates human-readable domain names (URLs) into the numerical IP addresses required by routers to find the resource.
Role of DNS: When you type a URL, your computer sends a request to a DNS server, which looks up the corresponding IP address and returns it to your browser.
Analogy: The DNS is the phonebook of the Internet. You look up the company name (URL) to find the street address (IP).
2.1.10 Cloud Computing

Cloud computing involves storing, managing, and processing data over a network of remote servers hosted on the Internet, rather than on a local server or personal computer.

Public vs. Private Clouds
Public Cloud: Services are provided by a third-party company (like Amazon AWS or Microsoft Azure) and shared among multiple unrelated customers.
Private Cloud: Cloud infrastructure operated solely for a single organisation, whether managed internally or by a third party. Provides greater control and security.

Benefits of Cloud Computing:

Scalability: Resources (storage, processing) can be quickly and easily scaled up or down according to demand.
Reduced Infrastructure Costs: Companies do not need to buy, maintain, or update their own expensive hardware.

Drawbacks of Cloud Computing:

Security and Privacy: Reliance on external providers for security; sensitive data stored remotely might be a concern.
Connectivity Reliance: Requires a permanent and reliable internet connection to access services.

Key Takeaway for Communication: The entire chapter shows how networks—from the choice of cable to the routing protocol (IP/DNS)—are designed to get data from point A to point B efficiently, reliably, and securely.

Ready to test yourself?

Turn these notes into exam-style practice. Get unlimited AI questions on this topic with instant marking and explanations.

Practice This Topic
More Computer Science (9618) chapters
Information representation
Hardware
Processor Fundamentals
System Software
Security, privacy and data integrity
Ethics and Ownership

* The content provided by thinka is generated by AI and may not always be accurate or up-to-date. Please use it as a supplementary resource and verify with official materials.

Put These Notes into Practice

Reading the notes is a great start. Now practise with unlimited AI-generated questions and get instant feedback. 100,000+ students are already improving their grades.

Start Practising Now
View Pricing