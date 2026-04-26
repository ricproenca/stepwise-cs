# Unit 2 - Communication & Networking Technology Presentation

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