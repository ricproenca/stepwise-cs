# Chapter 02: Communication

Source: https://moshikur.com/as-level/as-ch02/

---

## 2.1 Networking Basics

### Purpose and Benefits of Networking

- Resource sharing (printers, files, internet)
- Faster communication
- Centralised control
- Cost-effectiveness

### 2.1.2 LAN Characteristics

Local Area Networks confine connections to a single building or campus:
- High speed data transfer
- Private ownership
- High reliability
- Minimal interference

### 2.1.3 WAN Characteristics

Wide Area Networks connect devices over large geographic areas (cities, countries):
- Large coverage area
- Slower speeds than LAN
- Public infrastructure
- Higher costs

**LAN vs WAN Comparison:**

| Feature | LAN | WAN |
|---|---|---|
| Area covered | Small (building/campus) | Large (cities/countries) |
| Speed | High | Lower |
| Security | More secure | Less secure |
| Ownership | Single organisation | Multiple organisations |
| Cost | Cheaper | More expensive |

---

## 2.2 Network Models

### 2.2.1 Client-Server Model

One central server provides resources, data, or services to client computers.

**Server functions:** stores data, processes requests, controls access, sends results.

**Client functions:** sends requests, runs applications, displays results, minimal processing.

| Benefits | Drawbacks |
|---|---|
| Centralised management | Server dependency (single point of failure) |
| Better security | High costs |
| Scalability | Requires skilled administrators |

### 2.2.2 Peer-to-Peer (P2P) Model

All computers are equal — no central server. Each peer manages its own security.

| Benefits | Drawbacks |
|---|---|
| Cost-effective | Limited security |
| Simple setup | Performance issues |
| Direct sharing | No centralised backup |
| | Files unavailable when peer is offline |

**P2P vs Client-Server:**

| Aspect | P2P | Client-Server |
|---|---|---|
| No central server | Yes | No |
| All computers equal | Yes | No |
| Cheaper | Yes | No |
| Less secure | Yes | No |

### 2.2.3 Thin-Client vs Thick-Client

**Thin Client:** most processing on the server; minimal local resources; dependent on network.

**Thick Client:** most processing done locally; local data storage; less server dependent.

| Feature | Thin Client | Thick Client |
|---|---|---|
| Processing | Mostly on server | Mostly on client |
| Data storage | On server | On client |
| Hardware needed | Low | High |
| Network dependency | Very high | Lower |
| Can work offline | No | Yes |
| Cost per device | Low | Higher |

---

## 2.3 Network Topologies

### 2.3.1 Bus Topology

All devices connected to a single central cable (backbone). Uses CSMA/CD for collision management.

| Benefits | Drawbacks |
|---|---|
| Cost-effective | Single point of failure |
| Simple implementation | Data collisions |
| Good for small networks | Limited scalability |

### 2.3.2 Star Topology

All devices connected to a central switch or hub.

| Benefits | Drawbacks |
|---|---|
| Fault tolerant | Central hub dependency |
| Scalable | Higher costs |
| No collisions | More cabling required |

### 2.3.3 Mesh Topology

Every device connected to multiple others — multiple data paths.

- **Fully connected** — all devices connected to all others
- **Partially connected** — some connections only

| Benefits | Drawbacks |
|---|---|
| Redundancy and high reliability | Complex setup |
| Multiple transmission paths | Expensive |

### 2.3.4 Hybrid Topology

Combines two or more topologies for a custom network design.

**Topology Comparison:**

| Feature | Bus | Star | Mesh |
|---|---|---|---|
| Central device | No | Yes | No |
| Cable usage | Low | Medium | Very high |
| Reliability | Low | Medium | High |
| Collisions | High | Low | Very low |
| Cost | Low | Medium | High |

---

## 2.4 Cloud Computing

Stores, manages, and processes data over the internet rather than locally.

**General benefits:** access from anywhere, no large hardware purchase, built-in backup, easy collaboration, scalable.

**General drawbacks:** requires reliable internet, security concerns, less control, ongoing costs.

### Cloud Types

| Type | Ownership | Security | Scalability | Cost |
|---|---|---|---|---|
| **Public** | Third-party (Google Drive, AWS) | Moderate | Excellent | Low |
| **Private** | Single organisation (on-premises) | High | Limited | High |
| **Hybrid** | Both | High-Moderate | Excellent | Medium |

---

## 2.5 Wired and Wireless Networks

| Feature | Wired | Wireless |
|---|---|---|
| Medium | Cables | Radio waves |
| Speed | Faster | Slower |
| Security | More secure | Less secure |
| Mobility | No | Yes |
| Interference | Low | High |
| Installation | Difficult | Easy |

### Transmission Media Comparison

| Medium | Speed | Distance | Interference | Cost | Mobility |
|---|---|---|---|---|---|
| Copper | Medium | Short | High | Low | No |
| Fibre-optic | Very high | Very long | None | High | No |
| Radio waves | Low–Medium | Short | High | Low | Yes |
| Microwaves | High | Long | Medium | High | Yes |
| Satellites | Medium | Very long | Medium | Very high | Yes |

---

## 2.6 LAN Hardware

| Hardware | Role | Purpose |
|---|---|---|
| **Switch** | Multiple device connector | Delivers data to intended device using MAC addresses; reduces collisions |
| **Server** | Resource manager | Centralised storage and resource management |
| **NIC** | Network enabler | Data-to-signal conversion; provides unique MAC address |
| **WNIC** | Wireless network enabler | WiFi connectivity; no physical cable needed |
| **WAP** | Wireless access point | Connects wireless devices to a wired LAN |
| **Cables/Bridges** | Connection/segment linking | Data transmission; reduces traffic between segments |
| **Repeater** | Signal amplifier | Regenerates weak signals to extend coverage distance |

---

## 2.7 Routers and NAT

A router connects different networks and directs data packets between them.

### Router Functions

| Function | Description |
|---|---|
| Packet routing | Determines optimal path for data packets |
| IP assignment | Assigns private IP addresses to LAN devices |
| Firewall | Blocks unauthorised access |
| Protocol conversion | Converts between network protocols (e.g. IPv4 ↔ IPv6) |
| NAT | Translates private IP addresses to public IP for external communication |

### Network Address Translation (NAT)

- Hides private IP addresses from the external internet
- Multiple devices share a single public IP address
- Enhances security; conserves public IPv4 addresses

| Advantages | Disadvantages |
|---|---|
| Conserves public IPs | Adds latency |
| Improved security | Compatibility issues with some protocols |
| Network flexibility | Limits end-to-end connectivity |

---

## 2.8 Ethernet and Collisions

Ethernet is the standard technology for connecting devices within a LAN.

### CSMA/CD Protocol

Detects and resolves data collisions (Carrier Sense Multiple Access / Collision Detection):

1. **Carrier sense** — device checks if channel is free before transmitting
2. **Multiple access** — all devices share the same medium
3. **Collision detection** — if two devices transmit simultaneously, collision is detected
4. **Collision handling** — devices stop and send a jamming signal
5. **Backoff algorithm** — devices wait a random time before retransmitting

| Advantages | Limitations |
|---|---|
| Efficient channel usage | Not suitable for wireless networks |
| Reduces collision impact | Performance degrades with more devices |
| Simple and cost-effective | |

---

## 2.9 Bit Streaming

Continuous transfer of data (usually multimedia) over a network.

### Real-Time Streaming

Data delivered as it is created or captured.
- Applications: live sports, video conferencing (Zoom/Teams), online gaming

### On-Demand Streaming

Pre-recorded content accessed at any time.
- Applications: Netflix, YouTube, Spotify

### Bit Rate and Broadband Speed

- **Bit rate** — amount of data transmitted per second (kbps or Mbps)
- Higher bit rate → better video quality
- Slow broadband → buffering and interruptions

---

## 2.10 Internet and WWW

| Feature | Internet | WWW |
|---|---|---|
| Definition | Global network infrastructure | System of web documents/resources |
| Purpose | Enables device communication (email, file sharing, streaming) | Provides website access via browsers |
| Relation | Backbone hardware layer | Software service running on the internet |

### Hardware Supporting the Internet

- **Modems** — convert digital ↔ analogue signals; bridge devices with telephone networks
- **PSTN** — traditional telephone network; supports dial-up and DSL
- **Dedicated lines** — private always-on connections; reliable high-speed access
- **Cell phone networks** — 4G/5G mobile technology; wireless internet access

---

## 2.11 IP Addresses and Subnetting

### IPv4 (32-bit)

Four octets separated by dots; each octet: 0–255.

Example: `192.168.0.1` → Binary: `11000000.10101000.00000000.00000001`

| Class | Range | Used For |
|---|---|---|
| A | 0.0.0.0 – 127.255.255.255 | Large networks |
| B | 128.0.0.0 – 191.255.255.255 | Medium networks |
| C | 192.0.0.0 – 223.255.255.255 | Small networks |

### IPv6 (128-bit)

Eight hexadecimal groups separated by colons.

Example: `2001:0db8:85a3:0000:0000:8a2e:0370:7334` → Simplified: `2001:db8::1`

### Subnetting

Divides a network into smaller manageable segments (subnets) using a **subnet mask**.

Example: IP `192.168.1.1`, mask `255.255.255.0` → Network: `192.168.1`, Host: `1`

**Benefits:** improves security, reduces congestion, efficient IP usage, simplifies management.

### Public vs Private IP Addresses

| Feature | Public | Private |
|---|---|---|
| Scope | External visibility | Local network only |
| Access | Global communication | Internal devices only |
| Assignment | Assigned by ISP | Assigned by router/manual |

Private IP ranges: `10.0.0.0–10.255.255.255`, `192.168.0.0–192.168.255.255`

### Static vs Dynamic IP Addresses

| Type | Assignment | Used For |
|---|---|---|
| Static | Manual; permanent | Servers, printers |
| Dynamic (DHCP) | Automatic; temporary | Client devices |
