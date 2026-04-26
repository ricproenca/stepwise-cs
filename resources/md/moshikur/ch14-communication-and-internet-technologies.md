# Chapter 14: Communication and Internet Technologies

Sources:
- https://moshikur.com/a2-level/a2-ch14-communication-and-internet-technologies/14-1-protocols/
- https://moshikur.com/a2-level/a2-ch14-communication-and-internet-technologies/14-2-circuit-switching-packet-switching/

---

## 14.1 Protocols

**Protocol** — a set of rules that devices use to communicate. Enables: standardisation, error handling, data integrity, flow control, and security.

### TCP/IP Protocol Stack (Four Layers)

| Layer | Purpose | Protocols |
|---|---|---|
| **Application** | Network applications and services | HTTP, HTTPS, FTP, SMTP, DNS |
| **Transport** | Reliable data transfer between devices | TCP (reliable), UDP (faster, less reliable) |
| **Internet** | Routing of data packets across networks | IP, ICMP |
| **Link** | Physical connection handling | Ethernet, Wi-Fi |

### Key Protocols

| Protocol | Purpose |
|---|---|
| HTTP/HTTPS | Web page transmission; HTTPS adds encryption |
| FTP | File transfers between client and server |
| SMTP | Sends emails between mail servers |
| POP3 | Downloads emails; removes them from server |
| IMAP | Retrieves emails while keeping them on server |
| DNS | Translates domain names to IP addresses |
| BitTorrent | Peer-to-peer file sharing via distributed pieces |

### BitTorrent Architecture

A peer-to-peer protocol that breaks files into pieces distributed across multiple users:
- **Seeders** — peers with the complete file
- **Leechers** — peers still downloading
- **Tracker server** — coordinates peer connections

### TCP vs UDP

| Feature | TCP | UDP |
|---|---|---|
| Reliability | Guaranteed delivery, ordered | No guarantee |
| Speed | Slower | Faster |
| Use cases | Web browsing, email, file transfer | Streaming, gaming, VoIP |

---

## 14.2 Circuit Switching and Packet Switching

### Circuit Switching

A **dedicated communication path** is established between two devices for the entire duration of the session.

**Process:**
1. Connection establishment between sender and receiver
2. Continuous data transfer along reserved path
3. Connection termination, freeing resources

| Benefits | Drawbacks |
|---|---|
| Constant, reliable connection | Bandwidth wasted during silent periods |
| Guaranteed bandwidth throughout session | Setup time required before communication |
| Predictable performance, minimal delay | Dedicated path cannot serve other users simultaneously |
| | Scalability challenges in large networks |

**Applications:** Traditional telephone networks (PSTN), private enterprise networks, emergency services requiring guaranteed low latency.

### Packet Switching

Data broken into smaller **packets** transmitted independently over various routes, reassembled at the destination.

**Packet Structure:**

| Component | Contents |
|---|---|
| **Header** | Source/destination IP, hop counter, packet length, sequence number, checksum |
| **Payload** | Actual data (email content, video segments) |
| **Trailer** | Error detection codes, end-of-packet marker |

**Process:**
1. Data divided into packets with control information
2. Packets sent independently through the network
3. Routers read headers and determine optimal paths using routing tables
4. Packets may follow different routes based on network conditions
5. Destination reassembles packets using sequence numbers and checks for errors

**Router functions:** receive packets → read destination address → decide best path → forward to next device → handle transmission errors.

| Benefits | Drawbacks |
|---|---|
| Multiple communications share bandwidth | Complex protocols required for routing/sequencing |
| Fault tolerant — packets rerouted if a line fails | Reassembly delays introduce latency |
| Scales to growing user base | Processing-intensive |
| Cost-effective (charged by data, not duration) | Packets may arrive out of order or be lost |

**Applications:** Internet communication (email, web browsing, file transfers), LANs, P2P file sharing, VoIP.

### Circuit vs Packet Switching Comparison

| Feature | Circuit Switching | Packet Switching |
|---|---|---|
| Connection | Dedicated path | No dedicated path |
| Efficiency | Low (reserved when idle) | High (dynamic sharing) |
| Reliability | Guaranteed delivery order | Packets may arrive out of order |
| Use cases | Voice calls, PSTN | Internet data transmission |
