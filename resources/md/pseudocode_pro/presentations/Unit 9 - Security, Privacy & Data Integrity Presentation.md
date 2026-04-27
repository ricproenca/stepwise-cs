# Unit 9 - Security, Privacy & Data Integrity Presentation

## Definitions of data integrity, privacy and security

### Integrity, privacy and security

- Do you have any idea what the three terms integrity, privacy and security mean?

### Integrity

- Do you know what the word “integrity” means generally?
- “the condition of being free from damage or defect… total honesty and sincerity…the quality or state of being complete or undivided”

### Integrity

- Data integrity refers to data that is:
- Accurate (i.e. not changed/corrupted)
- The most recent version of that data
- The whole data (i.e. nothing missing)
- Ways to help achieve data integrity will be discussed later in the chapter

### Privacy

- Data privacy refers to keeping data private – accessible by only those who have permission to access it

### Privacy

- How much data do you think is stored about each person?
- When you consider the videos, images as well as these days e.g. audio data recorded by ‘smart’ home devices etc, many people could have terabytes of personal data associated with them – naturally, they will likely want to keep lots of it private

### Privacy

- Organisations may also have private information – plans, minutes to a meeting, schedule, employer information etc – this chapter, however, will focus on personal privacy
- (though the exam seems to ask about both situations…though they are the same anyway)

### Privacy Laws

- For an individual, if there weren’t laws in place to protect against privacy violations and punish those who broke them, personal privacy would probably cease to exist
- It’s this data protection law that helps individuals maintain some personal privacy

### Data Protection Law

- Focus relates to personal – therefore private – data an individual supplies to an organization
- Data is supplied to allow the organization to use it, only for purposes understood and agreed to by the individual (i.e. in the terms and conditions)
- Forces organisations to ensure privacy and integrity of this data
- Doesn’t guarantee complete adherence to law, but does act as a deterrent and framework to take legal action

### Fines due to data breaches/violations

- Companies can be fined for either:
- Openly violating data privacy laws
- Data breaches as a result of a hack (i.e. hackers stealing and possibly publishing user data)
- Fines regarding hacks will be more severe if the company was aware of the vulnerability, but chose to ignore it (e.g. not updating software)

### Fines due to data breaches/violations

- Do you know of any examples of companies that were fined for violating data privacy or after user data was stolen?

### Fines due to data breaches/violations

- Didi Global: $1.19 billion
- Amazon: $877 million
- Equifax: >$575 Million
- Instagram: $403 million
- T-Mobile: $350 million
- Meta (Facebook): $277 million

- WhatsApp: $255 million
- Home Depot: ~$200 million
- Capital One: $190 million
- Uber: $148 million
- Morgan Stanley: $120 million
- Google Ireland: $102 million

### Data Security

- Data is secure if it’s available to those who need it, but unable to be accessed by people without the required authorisation
- Security has been breached if data has been lost, corrupted or stolen

### Data Security

- Can you have data integrity or privacy, without data security?
- No – since if the data can be accessed by an unauthorized individual, by definition, it’s not private. Likewise, if security is poor, data could potentially be tampered with (edited, deleted, moved etc)

### Data Security

- Hence, data security must be achieved before either data integrity or data privacy can be attained.
- Does ensuring good data security guarantee data integrity or data privacy, though?

### Data Security

- No – data could never be updated (hence lose its integrity) or be shared/accessed/used in a manner not agreed to by someone from within the company

### Data Security

- There are two primary aims of system security:
- Ensure the systems continues to perform the tasks users need
- Ensure only authorised users have access to the system

## Threats to the security of a computer system and of the data stored in it

### Threats

- Individual mistake/carelessness
- Internal mismanagement
- Natural disasters
- Unauthorized intrusion into system by individual
- Malicious software (malware) entering system
- Social engineering
- etc

### Individual user mistake

- What could be an example of an employee acting in ways that could be a vulnerability to the system?
- opening suspicious email attachments
- downloading malicious file
- using weak passwords
- leaving computer unattended
- revealing details (social eng.)
- “shoulder surfing”
- etc

### Malicious Emails

- What could be some traits of malicious emails?
- Spelling mistakes
- ‘Scammy’ content – e.g. “you’ve won $1 billion”
- Asking for personal details, to enter credentials etc
- Certain attachments – executables, documents with macros
- Domain spoofing – e.g. google.com vs googIe.com
- Invalid headers
- Phishing & pharming (we’ll look at these later)

### Natural Disasters

- Obviously humans can’t yet prevent natural disasters, but can you think of a way how damage could be mitigated against?
- Automatic sprinkler systems (to prevent fires)
- Don’t build data centers in areas prone to natural disasters
- Have data stored across different locations/countries

### Social Engineering

- Is about tricking people into giving you access into a restricted location or to confidential data
- “95% of hacks are a result of human error…not vulnerabilities found in software”
- Social engineering attacks can be both in the physical and digital world…let’s see some physical examples first

### Social Engineering

- Going to a company, wearing a fake telecom uniform, saying you need to inspect the network (70% success) – others have posed as fireman/food workers to do safety inspections etc
- Simply walking behind someone into a restricted area – e.g. holding a coffee in one hand/briefcase in the other, to make it look like you can’t scan yourself in – many people will hold door open for you
- Impersonation: e.g. phoning an office in another location and being like “Hey, I’m Bill from the Beijing office – our emails aren’t working today – can you give us a summary of what you discussed in the meeting today”

### Social Engineering

- And sometimes it’s much simpler than that…
- https://www.youtube.com/watch?v=Pd7x2bHVSAs
- Or using audio of a crying baby, claiming you are short of money to guilt the customer support worker into thinking the situation is urgent…so they give them the person’s account details they’re trying to get:
- https://www.youtube.com/watch?v=lc7scxvKQOo

### Social Engineering

- Digital social engineering attacks could be:
- Phishing (apparently 1 in 5 employees fool for this)
- Domain/telephone/email spoofing
- “Open-source intelligence” – finding details about people on social media, LinkedIn etc – then pretending to be them when emailing/phoning other employees

### Threats to networks connected to Internet

- While there have been ‘supply chain’ attacks on hardware (e.g. Stuxnet), a network attached to the Internet is far more vulnerable than one which isn’t
- In reality, however, for most networks, it will be a requirement that they are connected to the Internet, so there would have to be approaches in place for them to protect themselves

### Protecting against outside network threats

- Firewall – scan packets, block based on contents, IP address, port number, protocol, quantity etc
- Anti-virus software – should be strong & up to date
- Access-based roles – e.g. regular users have minimal rights – if a regular user is hacked, a hacker may not be able to do the same as if they hacked an administrator account
- Employee training – help prevent employees opening malicious emails/being victims of social engineering

### Firewall

- Firewalls can be placed anywhere on a network – e.g.
- ISP
- Router
- Client device (e.g. PC)

### Firewall

- What might you want to allow/block packets based on:
- Contents/file types (may require deep-packet inspection)
- IP address (sender & receiver – e.g. block certain sites, known VPN/proxy IP addresses)
- Port number (remote & local – block e.g. SMTP or FTP port)
- Protocol (e.g. block/slow all BitTorrent packets)
- Patterns (e.g. quantity of packets, patterns that indicate data is being sent by automated process)

### Access-Based Roles

- Imagine a technology company – assume 4 main departments: administrators, developers, human resources, marketing
- We would want to ensure staff only have permission to read/write relevant data – for example, a developer doesn’t need to see employee details, nor does someone in HR need to access the code

### Access-Based Roles

- For example, drive D: could be for development, while drive S: could be for staff details – a developer’s credentials (username, password etc) would give them ability to access drive D:, but not drive S:
- What benefits do you think this has?

### Access-Based Roles

- User themselves can’t accidentally/maliciously modify unauthorised files
- Ensures data privacy within company
- If e.g. marketer is hacked/downloads malware/disgruntled employee sells access to hacker, they/that won’t be able to access whole system

### Access-Based Roles

- This might not sound that important, but imagine:
- a company has 10,000 employees
- many won’t be confident with technology
- There have been many cases where 1 employee is compromised/sells their account to a hacker…and all the company’s data is stolen/deleted/encrypted/held to ransom

### Malware

- Malware is the catch-all name for malicious software. We will look at some subcategories of malware

### Malware Categories

- Virus: tries to replicate itself inside other executable code
- Worm: runs independently and transfers itself to other networks hosts
- Logic bomb: stays inactive until a condition is met
- Trojan horse: attaches itself as part of a useful program
- Spyware: collects information and transmits it to another system
- Bot: takes control of computer and uses it to launch attacks

### Virus

- Tries to replicate itself on the system – e.g. copying itself or appending itself to interpreted programs
- Will probably contain malicious features – e.g. deleting/encrypting files, stealing data (spyware), containing adware etc
- Advanced viruses might mutate (“polymorphic virus”)

### Virus

- Why would a virus developer want to make a virus that mutates?
- So it’d be harder for anti-virus companies to detect – one version might be in their anti-virus database, but the new version wouldn’t
- Like how one variant of a biological virus might be neutralised by a vaccine…but another variant wont’

### Virus

- Elk Cloner was one of the first viruses
- It wasn’t malicious, but it spread via floppy disks and simply output this message as a prank

### Worm

- Similar to viruses – though worm explicitly tries to infect other machines
- In contrast, a virus might just replicate itself on the same machine [worms are hence more sophisticated/difficult to create than viruses]

### Worm

- Why do you think this type of malware is called a worm?
- Since it can enter on one host, then arrive unexpectedly on another

### Worm: MyDoom

- $52 billion damage
- once sent 25% of all worldwide emails
- even today, still exists sending 1%
- if executable opened, will then send email to all of your contacts too

### Worm: ILoveYou

- precursor to MyDoom
- worked similarly
- seemed legitimate, as email would be sent by someone in your contacts – e.g. Bob  Michael
- 50 million infections – 10% of worldwide computers

### Worm: WannaCry

- spread via vulnerability in Windows
- would then encrypt files and demand payment (ransomware)
- attributed to North Korea…though used vulnerability discovered by NSA

- caused regular users, schools, hospitals, companies, governments to be locked out of their computers

### Logic Bomb

- A type of malware that stays inactive until a condition has been met – e.g.
- A certain duration has passed
- A victim has a specific piece of vulnerable/valuable software/data
- A command is issued by an operator (e.g. to DDoS a particular IP)
- Even ensuring valid geographical/language details

### Logic Bomb

- Suppose you accidentally download some malicious software from the Internet – why might it be programmed to wait a random amount of time (could be weeks, months etc) before detonating?
- To make it harder for you/malware analysts to determine the cause of the infection, hence ensuring it is more likely to remain stealthy (many malware also delete the initial executable from a user’s system after the infection has complete, for the same reason)

### Logic Bombs – Detecting Location

- How do you think malware could detect the country/region of the victim?
- Sending requests to a server (like ipinfo.io) is one solution…though it’s not perfect:
- Victim could be using VPN in different country
- Victim could be offline
- Site could be blocked by firewall (as ipinfo.io seems to be)

### Logic Bombs – Detecting Location

- Instead, malware/ransomware like REvil/GandCrab use tricks like:
- Checking what language packs are installed on Windows
- Checking timezone user has system set to
- In this case, the malware would check that the user didn’t have a Russian or related (e.g. Bulgarian, Kazakh) language pack or wasn’t from one of those time zones – why do you think it did this?

### Logic Bombs – Detecting Location

- Possibly for either/both of the following reasons:
- “don’t sh*t where you eat” – if they were Russian citizens, they wouldn’t want the malware to target Russians (since they’d then be wanted by the Russian police)
- political reasons – not affecting users/companies/governments in allied countries

### Logic Bombs – Detecting Location

- So, if you want to protect yourself from malware…maybe installing every single language pack might protect you against some…
- For some reason, these groups apparently once only targeted Italians…then trolled them with an image of Mario…

### DOS/DDOS – (Distributed) Denial of Service

- Simply involves sending as much data as possible towards a victim’s server to try and crash it (effective attacks would do this towards long-running processes – e.g. uploading videos which need to be converted or a complex database query that uses multiple joins etc)
- Denial of Service: attack comes from one device
- Distributed Denial of Service: attack from many (often unwilling) devices in a botnet, controlled by a command & control server

### DOS/DDOS – (Distributed) Denial of Service

- Why would you an attacker want infected clients to sit quietly until they were issued with an order to attack?
- Attacking nodes will be noticeable/get banned/have negligible impact – so you don’t want a single device to attack immediately once it gets infected…you’d want to wait until you have a swarm of e.g. 10,000, then you could tell them all to attack simultaneously

### DOS/DDOS – (Distributed) Denial of Service

- Biggest attack was against Google – at 46 million requests per second (2.5Tb/s)

### Trojans

- This is when malicious code is inserted by a hacker into a normal, non-malicious program – effectively, hiding in plain site
- Can be detected by checking against digital signature of program (companies e.g. Google use this method to check Android source files/browser extensions haven’t been modified)

### Trojan Horse

- Possibly approaches for creating trojans could be:
- adding malicious machine code to an existing executable
- adding malicious machine code to a library (e.g. .DLL on Windows – has advantage that any process that uses this DLL will also be loading malicious code)
- adding malicious high-level code to an open-source project, then distributing that

### Open Source – Risk for Trojans?

- An approach could be:
- take open source code – e.g. Firefox
- add some malicious code in main files
- compile the project
- distribute it – e.g. send it directly to people or create a getfirefox.com website to fool people into downloading your malicious version
- The process is very simple – and these kinds of attacks are very common

### Open Source – Risk for Trojans?

- So how could an end user be sure they are using a legitimate version (afterall, the real version might be 100MB…while your version might be 100.1MB – so there won’t be obvious signs to most users)?
- Ensure you are downloading from the official link
- Verify the file’s digital signatures match (later in this chapter…)

### Spyware

- This is malware that will extract data from your system – it could be:
- General: credentials (usernames, emails, passwords), credit card numbers, crypto wallets, chat messages, keyloggers, clipboard stealers/hijackers, accessing webcam/audio etc
- Specific: intellectual property/sensitive information – e.g. a government/company stealing confidential military/scientific/business information from another country’s systems

### Bots

- An attacker gets remote access to and is able to execute commands on the user’s system – this could be used for:
- Distributed denial of service (DDoS) attacks
- Click fraud (e.g. visiting/clicking my own website/videos to get more advertising revenue/views)
- Sending spam emails
- Impersonating others
- Using these computers to sell as VPNs/proxies
- Spread more malware, more anonymously

### Bots

- A command & control server will be able to send data to all bots at the same time, if necessary

### Malware Categories

- Note: the difference between those types of malware is subtle and often a malware might belong to multiple categories

### Malware Categories

- For example, imagine a malware that was attached to a modified version of Microsoft Word – it will wait for a random number of days, trying to infect other machines and files on the network, keylogging/searching the PC for data to send back to the control server – on command, all infected devices can then be used to launch a combined e.g. DDOS attack
- What categories of malware would this belong to?
- Virus, worm, logic bomb, trojan horse, spyware, bot – i.e. all of them

### Malware Questions

- Why might a virus want to replicate itself inside other executable code?
- To maximise its chance of being run/not deleted – though this would also make it more likely to be detected by the user/anti-virus program
- Why might a ‘logic bomb’ stay inactive until some condition is met?
- If you download software and your computer is instantly held hostage to randsomware, it is obvious the culprit – if the malware waits 60 days before activating, it is much harder for a user to pinpoint the initial cause

### Malware Questions

- Why would someone create a trojan horse – i.e. attaching malware to another program?
- Since if it is a popular program, many people will download it (a lot of game torrents may include a setup.exe which could include a trojan horse)

### Malware Questions

- Why might someone want to create a bot network?
- Since they could potentially acquire a large number of ‘zombie’ PCs, which could be used to launch e.g. a DDOS attack – these zombies also provide anonymity for criminals – e.g. by letting them use them as a proxy

### Boot Sector & Macro Viruses

- The book mentions these specific sub-categories of malware:
- Boot-sector virus: infects boot-sector of drive (code run when computer turned on/OS is loaded)
- Macros viruses: “macros” allow users to add code to Microsoft Office documents – usually, this would be for business purposes (e.g. to update a database/send emails based on contents of Excel document)…however, this ability could also be used by hackers to embed malicious code – e.g. spyware, ransomware etc

### Boot Sector Virus

- Viruses that infect the boot record can be hard to detect, remove and can run with administrator privileges

### Macros

- Macros (Visual Basic code) is disabled by default in Office programs
- Note how the hackers create a convincing – but fake – notice to try and get the user to click “enable content” – if they do, the malicious code will start executing

### Malware Classification

- Here are some more types of malware
- Phishing: sending an email or electronic message from an apparently legitimate source requesting confidential information
- Pharming: setting up a bogus website which appears to be a legitimate site
- Keylogger: a type of spyware that records the keys the user presses (lookings for passwords, credit card info etc - can be extended to record clicks & clipboard – i.e. what user copied – e.g. crypto addresses, since users are unlikely to type e.g. 24-character strings)

### Phishing & Pharming

- Phishing and pharming are often used together – have you seen any examples?
- e.g. a phishing email claiming to be from a site/bank saying you need to reset your password/had a failed transaction – then they link to a spoofed website they created, that will simply post your login details to their database
- A common trick is changing the URL slightly – e.g. using an “I” instead of an “l” or “0” instead of a “O” – e.g. googIe.com

## Phishing Example

## Pharming Example

### Phishing & Pharming

- People often get confused between the terms “phishing” and “pharming” (actually, in real life, people usually just use “phishing” to refer to both)
- “phishing” = fishing = hooking the user in with e.g. a fake email/call
- “pharming” = farming = growing food (in this case, the thing being grown is the list of stolen details)

### Vulnerabilities

- There are 2 categories of vulnerabilities:
- Vulnerabilities due to user activity
- Vulnerabilities within the system itself

### Vulnerabilities due to the user

- Can you think of vulnerabilities that might arise in a system due to user activity?

### Vulnerabilities due to the user

- Weak passwords – short, a simple word, connection to user themselves (e.g. hometown, date of birth etc) – subject to brute force and educated guesses
- A user not recognizing a phishing, pharming or social-engineering attack

### Strong passwords

- What should a strong password contain?
- Upper & lower case letters
- Numbers
- Special characters
- At minimum 8 characters (ideally more)
- Even better would be if the password wasn’t a real word – simply a random string like Y38ia!?4kxM – but, of course, this is very hard for the user themselves to remember…

### Same password for every website

- Why is it a bad idea to use the same password for every website?
- Some people may have signed up for 50 or more websites using the same email/password combination – if one of these is hacked, someone would know your login details for every other site you have signed up with – this could be your bank, email, social media accounts etc

### Vulnerabilities due to the user

- There are also cases where an insider introduces malware deliberately into the system
- An example being a case a few years back, where someone was offered $1,000,000 to infect Tesla’s computers with malware to steal their designs, install ransomware etc – in this case, they refused and went to the police
- Other examples could be a disgruntled ex-employee that was fired and wants revenge

### Vulnerabilities due to accidental user action

- Attaching infected portable storage device (e.g. USB, hard drive, CD) (people will deliberately drop infected USBs at company headquarters…to see if an employee picks it up and plugs it in)
- Opening a malicious email attachment
- Running malicious Office macros
- Accessing/downloading something from a website

### Vulnerabilities from within system

- The book mentions 3 examples
- Operating systems with poor security
- Macros in software such as Excel/Word
- Buffer overflows
- Common web-based attacks include SQL injections and cross-site scripting (XSS) attacks, though these aren’t required to be known about

### Operating System security

- Operating systems sometimes lack good security
- As the size of the operating system grows (the Linux kernel has about 28 million lines of code, mostly to support all the different brands of hardware – naturally, with 28 million lines, there will be vulnerabilities)
- Operating systems have regular security updates to fix discovered vulnerabilities – if a user does not enable these, their system will be at risk

### Operating System security

- Some people claim “Mac is more secure/has less viruses than Windows” – do you think this is true?
- It’s not obvious which has better security, but in terms of viruses, most viruses developed by hackers for Windows – why do you think that is?
- Simply targeting the biggest user base – some stats put Windows as having 85%+ of the market share, while Mac only 5-10% - for big enterprise companies, probably even more use Windows – so hackers will largely ignore Mac, since it’s a smaller target

### Macro Viruses

- We have seen this already – hopefully you can remember
- This is where Microsoft Office allows Visual Basic code to be embedded in documents – businesses/individuals use this for legitimate purposes, but hackers often use it maliciously

### Buffer Overflow

- C was the most popular programming language for years – there are MANY programs written in it, especially legacy/low-level programs close to the operating system
- C/C++ doesn’t automatically check array index bounds, so malicious data can be input to exceed these bounds, hence overwriting another part of memory
- A very clever attacker could craft the malicious package in such a way that they could execute arbitrary instructions and hence gain access to the system

## Buffer Overflow

### Buffer Overflow

- The details of how this work aren’t really required (and even at university, a “buffer overflow” was mentioned, but never explained)
- If you are curious to see how it works:
- https://www.youtube.com/watch?v=cHj4UkzcKwU (4 minute demo)
- https://www.youtube.com/watch?v=fjMrDDj47E8

## Security measures for protecting computer systems

### Disaster Recovery

- What do you think could cause a service to go down?

### Disaster Recovery

- Continuity of operations is vital for large computer systems that are crucial for the operations of a company/government
- Measures may be needed to ensure that there should never be any downtime, or, at least, that if there is downtime, there will be a remedy in as short a time as possible

### Disaster Recovery

- Risk assessment required to calculate the risks and appropriate measures required to mitigate those risks
- If an organization has a full system clone which they can use to replace their current one if problems arise, it’s termed a ‘hot site’
- By definition, these systems must be in a different geographical region to the original, to mitigate against natural disasters, fires, wars, politics, even business closure (e.g. if host goes bankrupt)

### Safe system update

- Traditionally, organizations may have been able to perform major updates on weekends, however, these days, for a lot of companies, it’s not acceptable to have this period of outage
- A typical approach could be have two parallel systems – one could be switched in and out during an upgrade
- An alternate approach for larger companies with multiple servers is to update one server at a time

### User authentication

- Authentication: the process or action of verifying the identity of a user or process.
- Even if a computer is only used by one person, there should be some method of authentication required – this would usually be a password
- For a shared computer system, this is of course more essential

### User authentication

- Why do you think rate-limiting is used – i.e. you have to wait 5 minutes if you incorrectly enter your password 3 times?
- To prevent hackers brute-forcing through billions of combinations

### Authentication Strategies

- Authentication strategies can be broken down into the following categories:
- Something you know
- Something you are
- Something you have
- Do you know an example for each?

### Authentication Strategies

- Something you know: password, secret key, security question etc
- Something you are: biometric methods – fingerprint, face, voice or iris scanners
- Something you have: phone (with app or two-factor authentication), a hardware token (e.g. USB stick with secret key, chip on a credit card, a staff card for an organization etc)

### know

- are

- have

### Authentication Strategies

- Some of these approaches are obviously more secure than others – for as best security as possible, it is good to combine multiple approaches.
- There is also a problem with making authentication too difficult – what happens if a user forgets their password or especially loses their hardware key – would they be able to reset their authentication credentials? And how would this prevent unauthorized attempts at resetting credentials by a 3rd party, without reducing the security of the system? These are questions people implementing such systems have to think about

### Authentication Strategies

- For example, if you buy a hardware key, you can require it to let you log into your account or even entire computer – the problem occurs is the key is lost/stolen/damaged/corrupted/breaks etc
- One solution is associating multiple keys to one account – so if one is no longer usable, you’d be able to use your backup hardware key

### Hotels: Cards vs Keys

- Nowadays, all modern hotels use cards, rather than keys – why do you think that is?
- If key is lost/not returned to reception, then hotel would need to change lock
- In contrast, cards will be programmed to only be valid for duration of stay and will be reprogrammed for each new guest (i.e. old card won’t be able to access room)

### Credit Cards: Magnetic Strip vs Chip

- There are two types of credit cards – the chip (right) is more popular these days and is much more secure
- In contrast, the magnetic strip can be read and the data cloned to a blank card with a reader/writer – can easily buy on AliExpress for 元100

## Credit Cards: Magnetic Strip vs Chip

### Credit Cards: Magnetic Strip vs Chip

- So, technically, a magnetic card is security by ‘something you have’, but if the thing you ‘have’ is easy to copy by anyone, then it’s very weak security
- In contrast, it is extremely hard for someone to duplicate a chip, hence being one of the reasons this is more secure

### Good Practice

- Keep computer in a secure, private location
- Switch off computer when unattended
- Not letting someone else observe you login
- Not writing down passwords on paper for your memory
- Don’t/restrict unnecessary use of portable storage devices you plug into your PC (e.g. USBs, external hard drives etc)

### Firewall

- As mentioned previously, multiple firewalls may be installed – e.g. a firewall on the router and a firewall on the individual PCs
- Can check origin IP address, protocol, contents of packets etc – if anything looks suspicious, it will deny them access to the network

### Digital Signature

- To verify the identity of someone, you could use a digital signature – PGP (PrettyGoodPrivacy) is the most common
- This is often used to verify the identity of the:
- Sender of an email/message
- Owner of a website
- Uploader of a file
- etc
- We will try manually, though email clients will do this in the background, if you have set it up

### Digital Signature

- Works by (use https://pgp.najm.uk/ to try yourself):
- Sender generates a public & private key pair – these are related, though determining private key from public key is extremely difficult
- Messages are signed using the sender’s private key
- Receiver knows sender’s public key (sender could manually send it or store it with certificate authority) - can use this public key to verify & extract the original message
- If either key or signed content is incorrect, process will fail – hence we know person with this public key signed message with corresponding private key – i.e. people can’t impersonate them, unless they somehow acquire that person’s private key (which should always be kept safe)

### Homework

- Use https://pgp.najm.uk/ & e.g. WeChat to:
- Generate a public & private key pair
- Send your public key to the other person
- Sign and send message using your private key
- Verify & decrypt the other person’s message using their public key
- Try changing either their public key or message by even a single character – note how it won’t work

### Anti-virus software and intrusion detection

- Security measures restricting access to a system – like firewalls, authentication or role-based permissions - don’t guarantee success in removing all threats to the system
- In addition, an anti-virus program will also be required. According to the book, it is more accurate to call an anti-virus program an “anti-malware” program – why do you think that is?

### Anti-virus software

- Will on-demand/regularly/scan virus threats in realtime
- If malware is detected, it will attempt to remove or at least deactivate it
- Specialist anti-spyware software could also be installed

### Intrusion detection system

- Can be installed by user to monitor typical system usage over say a 1 month period
- When active, will flag any behavior that deviates from expected system activity
- Suspicious activity could be: transferring lots of data, reading/writing lots of files, using strange protocols/port numbers, maxing out CPU usage at 100% etc

### Reality

- In reality, however, there are incredibly sophisticated examples of malware out there: self-encrypting, obfuscating, being included in an image etc – so, defence methods have to be continually improved to counter these threats

## Security measures for protecting data

### Causes of Data Loss

- Disk or tape gets corrupted
- Disk or tape is destroyed
- System crashes
- File is erased or overridden by mistake
- Location of the file is forgotten

### Backup Procedure

- For these reasons, every system should have a backup procedure – even individuals should backup any files they deem important – e.g. on a USB, external hard drive or even possibly in the cloud

### Backup Procedure

- Full backup made at regular intervals, perhaps weekly
- At least two generations of full backup are kept in storage
- Incremental backups are made on a daily basis
- We will look at what these terms mean next…
- Why is it also recommended to have multiple generations of backups?

### Additional Backup Procedure

- Multiple copies of same backup
- Backups in different countries/locations
- If hosting on the cloud, backup with different companies
- Store on long-lasting hardware (e.g. magnetic tape)
- Store in fireproof building
- Choose location at low risk to natural disasters

### Additional Backup Procedure

- Of course, ideally you might want to backup after every major change – what might prevent this, however?
- Cost – more backups = more storage space required = higher cost

### Additional Backup Procedure

- For some companies, incremental backups could be done overnight and their full backups could be done on the weekend

### Additional Backup Procedure

- How about for companies that operate with high traffic, 24/7 – Google, for example?
- One approach could be to have a backup program that freezes the file store during the backup process – any changes during this time are recorded elsewhere and are implemented once the backup has complete

### Data Backup Strategies

- Let’s look at two data additional data loss strategies:
- Incremental backups
- Disk-mirroring

## Incremental backup

### Disk mirroring

- This is the process of a disk mirroring – i.e. being EXACTLY the same – as each other in real-time. Just like how if you look in front of a mirror and moved your hand, the reflected hand in the mirror would also move, too

### Disk mirroring

- Mirroring is useful if a drive completely fails, since you have an identical copy, though, note, if files are deleted/edited (due human error, malware, corruption etc), then they will also be edited/deleted on the mirrored drive, too – so mirroring could be used alongside backups, but not in replace of

### Authentication vs Authorisation

- What do each of these terms mean?
- Authentication – this means proving the identity of the individual – e.g. via username/password, hardware token, biometric measurements etc
- Authorisation – ensuring user has valid permissions to perform requested action - e.g. an administrator could change C:/ProgramFiles, while in a company, you probably wouldn’t want a regular user to be able to

### Restricting Access to Data

- A user will likely first have to authenticate themselves, in order to access a system – how would this authentication usually be achieved?
- e.g. with a username/password combination, biometric details, a hardware token (e.g. card, special USB drive etc)

### Restricting Access to Data

- Even once the user has logged in, however, we may not want them accessing all data on the system
- A typical example might be customer service employees for a bank shouldn’t be able to access the bank’s database
- Another example would be regular user’s on a WAN shouldn’t be able to install programs or modify files in certain protected directories etc

### Authorisation

- A solution to this is authorisation – e.g. an authorisation policy in which different types of user (administrator, developer, others), maybe have different account privileges

### Authorisation

- For example, since this is my own computer, I have full access rights to this file

### School Example

- Using your school card as an example, does it support both authentication and authorisation? If so, what would be an example of each?
- Authentication – a card effectively grants you access to the school system – e.g. when paying for meals, the same way a username/password is used to log into your bank account
- Authorisation – different authorisation levels – e.g. staff can use their card for the lifts, but students can’t

### Protecting Data Content

- Even with these methods in place, people can – and do – manage to access break into the system. How could someone break in?
- Hacking (SQL injection, XSS, buffer overflow, exploiting known vulnerabilities etc)
- Phishing/pharming
- Social engineering
- Physically breaking in
- etc

### Protecting Data Content

- If someone does manage to break into a system, how can the odds of them being able to read the data be greatly decreased?
- If that data was encrypted – this is particularly true of sensitive information in databases – e.g. passwords, credit card details etc

## Data validation & verification

### Data Integrity

- What does “data integrity” refer to?
- The accuracy, completeness and consistency of the data. Hence, if data has been (maliciously) tampered with, it will lose its integrity

### Data Integrity

- Data integrity can never be guaranteed, but the chances can be improved if appropriate measures are taken when data is entered into a system and when it’s transmitted between systems
- We’ll look at a few examples

### Data Validation

- Data validation is the process of ensuring that input data is of the correct type, length, range, set of possible values etc
- Note: data validation doesn’t ensure the data is correct – e.g. if entering a name and you accidentally misspell the name slightly, in most cases, this will still be accepted

### Data Validation

- Data validation will be implemented by the developer themselves – a program/website itself will have no validation, unless it is specifically programmed in by the programmer

### Data Validation

- If user is inputting data into a program, what things do you think should be validated?

### Data Validation

- Presence check: ensure field isn’t blank/empty
- Format check: e.g. date is in expected format like yyyy/mm/dd
- Length check: e.g. mobile number is 11 (?) digits or password at least 8 characters
- Range check: e.g. age should be between 0-150
- Limit check: same as range check
- Type check: e.g. check quantity is an integer
- Existence check: e.g. check file exists with that filename

### Data Verification

- Even if the data is validated – i.e. is the correct type, format, range etc – it could be the incorrect value
- For example, the user could enter an incorrect name/phone number etc – either accidentally or deliberately
- How could this be handled?

### Data Verification

- How could you verify a phone number or email was correct?
- SMS/email verification – e.g. a 6-digit code the user has to type in

### Data Verification

- Would it be possible to verify a name was correct?
- For most programs, no – for e.g. government programs who had access to names based on e.g. a national ID number, they could ensure the names matched

### Data Verification

- How could you try to verify a user entered their password correctly when they signup?
- Have them enter it twice – obviously, this is not fool-proof, but it will significantly remove the risk of them signing up with a mis-typed password
- This is called a double-entry check

### Check Digits

- A check digit will be extra number(s), often placed at the end (or sometimes start/throughout) data
- Check digits are used in many situations – bar codes, ISBN numbers for books, credit card numbers etc

### Check Digits

- First, some kind of calculation is performed on the data
- We then have some condition we want to be true – let’s say that the calculated value + the check digit should be divisible by 10
- If the calculated value was 194, what would the check digit therefore have to be?
- 6

### ISBN Example

- As an example, ISBNs are validated by starting at the rightmost digit (excluding the check digit) – the first digit is multiplied by 3, the next by 1, then by 3, then by 1 and so on in an alternating fashion
- These values are then all summed together
- The check digit is calculating by determining what number must be added to make the calculation a multiple of 10

### ISBN Example

- Let’s practice by validating the ISBN of the digital edition of the course textbook:
- Note: the rightmost digit on its own is the check digit, so we start multiplying with the digit to the left of it

### ISBN Example

- Sum is 101
- Check digit is 10 – (101 % 10) = 9

| 9 | 7 | 8 | - | 1 | - | 1 | 0 | 8 | - | 7 | 0 | 0 | 3 | 9 | - | 9 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| * | * | * |  | * |  | * | * | * |  | * | * | * | * | * |  |  |
| 1 | 3 | 1 |  | 3 |  | 1 | 3 | 1 |  | 3 | 1 | 3 | 1 | 3 |  |  |
| 9 | 21 | 8 |  | 3 |  | 1 | 0 | 8 |  | 21 | 0 | 0 | 3 | 27 |  |  |

### ISBN Example

- A check digit can tell use the data is invalid, but can it tell us what specific part (e.g. what digit) is invalid?
- No – this is where more advanced techniques like parity bits or Hamming codes are required

### Verification during data transfer

- Sometimes, data may be corrupted during transmissions – e.g. a bit could be flipped from a 0 to a 1 or vice-versa.
- Verification techniques need to check a property associated with the bit pattern
- The simplest approach is to use a parity check – let’s see how this works

### Parity Check

- For example, imagine transferring a data in bytes, with 7 bits as the data and 1 bit as the parity bit
- We can use either even or odd parity in these eights bit – assume our protocol is using even parity
- We simply count the number of 1’s in the data – if using even parity, we want all 8 bits to have an even number of 1s. Therefore, if there are 3 1s in the first 7 bits, we should make the 8th bit a 1, to give us 4 1s

### Parity Check

- What would the parity bit be in these situations if using even parity:

- ?

- ?

- ?

| 1 | 1 | 0 | 0 | 0 | 1 | 1 | 0 |
| --- | --- | --- | --- | --- | --- | --- | --- |

| 0 | 0 | 1 | 0 | 1 | 0 | 1 | 1 |
| --- | --- | --- | --- | --- | --- | --- | --- |

| 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 |
| --- | --- | --- | --- | --- | --- | --- | --- |

### Parity Check

- What would the parity bit be in these situations:
- Odd parity
- Even parity
- Odd parity

- ?

- ?

- ?

| 1 | 1 | 0 | 0 | 0 | 1 | 1 | 1 |
| --- | --- | --- | --- | --- | --- | --- | --- |

| 0 | 0 | 1 | 0 | 1 | 0 | 1 | 1 |
| --- | --- | --- | --- | --- | --- | --- | --- |

| 1 | 1 | 1 | 1 | 1 | 1 | 1 | 0 |
| --- | --- | --- | --- | --- | --- | --- | --- |

### Parity Check

- Would the parity check always work? Can you think of situation(s) it may fail?
- If an even number of bits are incorrect – e.g. 2 errors – the parity check will pass, even though the data is incorrect
- Likewise, if the parity bit itself is transferred incorrectly, this would cause the check to fail – it could pass, but that would mean some of the 7 data bits would have to be incorrect

### Parity Check

- So, while not perfect, if the probability of errors are extremely rare – “10-13 is a more appropriate minimum BER (bit error rate) for data transmission”
- According to some estimates, 3 exabytes (1018 bytes) are transmitted via the Internet per day, so, clearly, millions of errors will occur – and a more sophisticated approach than simple parity bits will be required

### Parity Check

- e.g. imagine sending a 64 bit number – it could be a payment amount – 0000…001111 – i.e. the item cost 15 of whatever currency
- Imagine if the first bit was corrupted:
- 1000…001111
- Suddenly, your purchase now costs 9,223,372,036,854,775,823 of whatever currency…this is why we need a more sophisticated method of error-detection

### Parity Check

- One way we can improve the parity check is by adding a parity byte – that is grouping 7 rows of bytes together in a matrix and calculating the vertical parity

### Parity Check

- Note: we calculate the horizontal parity values for each row
- We also calculate the vertical parity values – termed the parity byte
- Also note how the parity byte doesn’t have to maintain correct parity (it is independent from the rest of the data)

| 0 | 1 | 1 | 0 | 0 | 0 | 1 | 1 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0 | 1 | 0 | 0 | 0 | 0 | 0 | 1 |
| 0 | 0 | 0 | 1 | 1 | 0 | 0 | 0 |
| 1 | 0 | 1 | 0 | 0 | 0 | 1 | 1 |
| 1 | 1 | 1 | 0 | 0 | 0 | 0 | 1 |
| 0 | 0 | 1 | 0 | 1 | 1 | 1 | 0 |
| 0 | 1 | 0 | 1 | 1 | 0 | 1 | 0 |
| 1 | 0 | 0 | 0 | 1 | 1 | 0 | 0 |

### Parity Check

- In this transmission, 1 bit has been transferred incorrectly – how would you find it?
- Find the row where the parity bit doesn’t match the value you’d expect
- Do the same for the column
- Where the incorrect row & column intersect is the bit with the error – the receiver could then automatically correct this, without asking for retransmission (which may not even be possible anyway – e.g. an old/offline file)

| 0 | 1 | 1 | 0 | 0 | 0 | 1 | 1 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0 | 1 | 0 | 0 | 0 | 0 | 0 | 1 |
| 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 |
| 1 | 0 | 1 | 0 | 0 | 0 | 1 | 1 |
| 1 | 1 | 1 | 0 | 0 | 0 | 0 | 1 |
| 0 | 0 | 1 | 0 | 1 | 1 | 1 | 0 |
| 0 | 1 | 0 | 1 | 1 | 0 | 1 | 0 |
| 1 | 0 | 0 | 0 | 1 | 1 | 0 | 0 |

### Parity Check

- Try this example
- How many errors could you find?
- If there is only 1 error, what does this tell us?
- That the error is most likely the parity bit, not the data itself

| 0 | 1 | 1 | 0 | 0 | 0 | 1 | 1 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0 | 1 | 0 | 0 | 0 | 0 | 0 | 1 |
| 0 | 0 | 0 | 1 | 1 | 0 | 0 | 0 |
| 1 | 0 | 1 | 0 | 0 | 0 | 1 | 1 |
| 0 | 1 | 1 | 0 | 0 | 0 | 0 | 1 |
| 0 | 0 | 1 | 0 | 1 | 1 | 1 | 0 |
| 0 | 1 | 0 | 1 | 1 | 0 | 1 | 0 |
| 1 | 0 | 0 | 0 | 1 | 1 | 0 | 0 |

### Parity Check

- Since the data is being sent serially, how could we store all 8 bytes together when we want to validate them like this?
- They’d be stored in a buffer – if there is no problem or if a problem can be resolved, the data will accepted
- If the problem can’t be resolved, some action may be taken – e.g. possibly asking for retransmission (TCP) or e.g. dropping the packets if using UDP

| 1 | 1 | 1 | 0 | 0 | 0 | 1 | 1 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0 | 1 | 0 | 0 | 0 | 0 | 0 | 1 |
| 0 | 0 | 0 | 1 | 1 | 0 | 0 | 0 |
| 1 | 0 | 1 | 0 | 0 | 0 | 1 | 1 |
| 1 | 1 | 1 | 0 | 0 | 0 | 0 | 1 |
| 0 | 0 | 1 | 0 | 1 | 1 | 1 | 0 |
| 0 | 1 | 0 | 1 | 1 | 0 | 1 | 0 |
| 1 | 0 | 0 | 0 | 1 | 1 | 0 | 0 |

### Parity Check

- Using odd parity, calculate the parity bits and parity byte values

- ?

- ?

| 1 | 1 | 1 | 0 | 0 | 0 | 0 | 0 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0 | 0 | 0 | 1 | 0 | 1 | 1 | 0 |
| 1 | 1 | 0 | 1 | 1 | 0 | 0 | 1 |
| 0 | 0 | 0 | 0 | 0 | 1 | 1 | 1 |
| 0 | 1 | 1 | 1 | 1 | 0 | 0 | 1 |
| 0 | 0 | 0 | 1 | 1 | 0 | 0 | 1 |
| 1 | 1 | 0 | 0 | 0 | 0 | 0 | 1 |
| 0 | 1 | 1 | 1 | 0 | 1 | 1 | 0 |

### Checksums

- Using odd parity, calculate the parity bits and parity byte values

### Automatic-Repeat Requests (ARQ)

- Using odd parity, calculate the parity bits and parity byte values

## Question
