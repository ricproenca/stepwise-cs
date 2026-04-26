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