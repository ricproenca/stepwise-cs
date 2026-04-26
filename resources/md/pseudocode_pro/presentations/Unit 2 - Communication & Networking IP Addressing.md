# Unit 2 - Communication & Networking Technology Presentation

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