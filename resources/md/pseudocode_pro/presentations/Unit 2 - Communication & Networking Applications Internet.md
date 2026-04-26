# Unit 2 - Communication & Networking Technology Presentation

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