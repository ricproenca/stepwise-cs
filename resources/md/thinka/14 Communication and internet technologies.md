# 14 Communication and internet technologies

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
Communication and internet technologies

Computer Science (9618) · Cambridge International A Level · 7 min read

Communication and internet technologies
A-Level Computer Science 9618: Communication and Internet Technologies

Welcome to Section 14! This is one of the most practical and relevant chapters in your A-Level studies, as it explains the backbone of modern computing: how devices talk to each other across the globe. We're going to dive into the essential rules (protocols) that govern communication and look at the two primary methods used to send data efficiently across massive networks like the internet.

Don't worry if concepts like "protocol stacks" or "packet switching" sound complicated. We'll break them down using simple analogies to make sure they stick! Let's get started on understanding the hidden rules that make the World Wide Web work.

14.1 Protocols: The Rules of Communication

Imagine trying to talk to someone who speaks a different language, or trying to send a parcel without writing an address. It wouldn’t work! In computer networks, protocols are exactly that: a set of standardised rules and procedures for communicating data between devices.

Why Protocols Are Essential
Standardisation: They ensure that all devices (regardless of manufacturer or operating system) can understand the data being sent and received.
Reliability: Protocols define error checking and correction methods to ensure data arrives accurately.
Addressing: They define how devices are identified on the network (e.g., using IP addresses).
The TCP/IP Protocol Suite and the Four-Layer Model

The most important set of protocols that forms the basis of the internet is the TCP/IP suite (Transmission Control Protocol/Internet Protocol). This suite is often visualised as a stack of four layers, where each layer performs a specific function for the data as it travels.

Analogy: Think of sending a physical package internationally.

Application Layer

Function: Provides services to the user and handles the specific application data (like a web page, email, or file). This is where the actual message is created.
Analogy: Writing the actual letter and putting it inside the envelope.
Examples: HTTP, FTP, SMTP, POP3, IMAP.

Transport Layer (TCP/UDP)

Function: Splits the data from the Application Layer into smaller, manageable chunks called segments (or datagrams, if using UDP). It manages connection reliability, ensuring all segments arrive and are reassembled correctly (using TCP).
Analogy: Deciding whether to send the letter via reliable tracked delivery (TCP) or standard post (UDP).

Internet Layer (IP)

Function: Adds the logical addressing (the IP address) to the segment, turning it into a packet. It determines the best path (routing) for the packet across the internet.
Analogy: Putting the destination and return address on the envelope.

Link Layer (Network Access/Physical Layer)

Function: Deals with the physical transmission of the data over the network medium (cable, Wi-Fi, fibre optic). It adds the physical address (the MAC address) needed to move the data across the local network segment, creating a frame.
Analogy: The courier picking up the package and placing it onto the delivery truck or aircraft.

Quick Review: Data Units

As data moves down the stack, its name changes:

Application Data -> Segments (Transport) -> Packets (Internet) -> Frames (Link/Physical)

Common Protocols and Their Purposes
HTTP (HyperText Transfer Protocol): Used by web browsers to request and receive web pages and files from web servers.
FTP (File Transfer Protocol): Used specifically for transferring large files reliably between hosts.
POP3 (Post Office Protocol 3): Used to retrieve email from a server. Typically downloads the email and then deletes it from the server (though modern implementations often allow keeping a copy).
IMAP (Internet Message Access Protocol): Used to retrieve and manage email on the server. Allows users to view, manage, and synchronise emails across multiple devices without downloading them permanently.
SMTP (Simple Mail Transfer Protocol): Used to send emails between email servers and from the user's email client to the server.
BitTorrent: A peer-to-peer (P2P) protocol used for decentralised file sharing. Instead of downloading a file from one central server, a user downloads different parts of the file simultaneously from many other users (peers) who already have it.

Key Takeaway (Protocols): Protocols are the fundamental rule sets governing digital communication. The internet relies on the TCP/IP 4-layer stack, which segments, addresses, routes, and transmits data reliably.

14.2 Data Transmission Methods: Switching

When you send data across a large network, how does the network physically handle that traffic? There are two main methods: Circuit Switching and Packet Switching.

Circuit Switching

Definition: In circuit switching, a dedicated, continuous communication path (or circuit) is established between the sender and receiver before any data is transferred. This circuit remains reserved exclusively for this connection for the entire duration of the communication.

Analogy: Think of an old telephone system. When you dial a number, a physical wire connection is dedicated entirely to your conversation until you hang up. No one else can use that specific path, even during silence.

Benefits of Circuit Switching:
Guaranteed Quality: Since the path is dedicated, bandwidth is guaranteed, resulting in very low latency (delay).
Reliability: Once established, the connection is constant.
Drawbacks of Circuit Switching:
Inefficient Resource Use: The resources (the circuit) are reserved and wasted when no data is being sent (e.g., during pauses in a phone call).
Single Point of Failure: If the dedicated circuit fails (e.g., a cable is cut), the entire communication fails.
Slow Setup: Time is needed to establish the dedicated circuit before data can flow.
Applicability:

Traditional phone networks (PSTN) historically relied on circuit switching.

Packet Switching

Definition: In packet switching, data is broken down into small units called packets. Each packet includes the destination address and routing information. These packets travel independently across the network, sharing paths with packets from other communications, and are reassembled at the destination.

Analogy: Think of sending a complicated message as many individual postcards. Each postcard (packet) has the full address, they may take different roads, and they might arrive in the wrong order. The recipient must reassemble the postcards to read the full message.

How Packet Switching Works (The Router’s Role)
Segmentation: The data (e.g., a file or web page) is broken down into packets.
Header/Trailer: Each packet is given a header (containing source/destination addresses, sequence number) and a trailer (containing error checking data).
Routing: Packets are sent out onto the network. At every junction (like your home router or a massive ISP router), the router reads the destination address in the packet header.
Function of a Router: The router maintains a routing table and uses complex algorithms to decide the most efficient path for that specific packet at that exact moment, often choosing the path with the least current traffic.
Reassembly: At the destination, the packets are checked for errors and reassembled using the sequence numbers in the headers.

Did you know? This independent routing means if one part of the internet goes down, the packets will simply reroute, making the system incredibly robust and resilient.

Benefits of Packet Switching:
Efficient Resource Use: Paths are shared; network resources are used only when data is actively being sent.
Robustness: If part of the network fails, packets can automatically reroute around the failure.
Flexibility: Many different types of traffic can share the same infrastructure.
Drawbacks of Packet Switching:
Variable Delay (Latency): Because packets might wait in queues at busy routers, the transmission time is not constant, which can affect real-time services like video calls.
Overhead: Every packet requires extra data (the header and trailer), which adds to the overall transmission size.
Complexity: Requires powerful routers and complex protocols to handle routing and reassembly.
Applicability:

The entire modern internet, including the World Wide Web, streaming services, and most data communication, uses packet switching.

Comparing Switching Methods (Crucial Exam Concept)
Feature	Circuit Switching	Packet Switching
Path	Dedicated, fixed path reserved for the whole duration.	Shared paths; packets travel independently.
Resource Efficiency	Low (resources idle during silence).	High (resources shared by many users).
Latency/Delay	Low and constant.	Variable, potentially higher (due to queuing).
Reliability	High if the circuit holds; catastrophic failure if path breaks.	Robust; self-healing through rerouting.
Used By	Traditional telephone networks.	The Internet, LANs, WANs.

Key Takeaway (Switching): The internet uses packet switching because it is far more efficient and robust than circuit switching, allowing millions of users to share the same infrastructure simultaneously. Routers are essential for directing these independent packets.

Ready to test yourself?

Turn these notes into exam-style practice. Get unlimited AI questions on this topic with instant marking and explanations.

Practice This Topic
More Computer Science (9618) chapters
Data Representation
Hardware and Virtual Machines
System Software
Security
Artificial Intelligence (AI)
Computational thinking and Problem-solving

* The content provided by thinka is generated by AI and may not always be accurate or up-to-date. Please use it as a supplementary resource and verify with official materials.

Put These Notes into Practice

Reading the notes is a great start. Now practise with unlimited AI-generated questions and get instant feedback. 100,000+ students are already improving their grades.

Start Practising Now
View Pricing