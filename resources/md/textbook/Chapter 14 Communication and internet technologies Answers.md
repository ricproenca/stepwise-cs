# Chapter 14 SB Answers

**Course:** Cambridge International AS & A Level Computer Science (9618)
**Source:** A Level Textbook/Chapter 14 SB Answers.pdf

---

Cambridge International AS & A Level Computer Science

Chapter 14 Student Book Answers
14.1 What you should already know
1   a) IP = internet protocol
        TCP = transport control protocol
    b) Protocols are sets of rules agreed by sender and receiver when sending data or communicating
        over a network.
2 a) Peer-to-peer – each node in a peer-to-peer network is connected to each other node; each node
        provides services to all the users on the network.
    b) Benefits:
          Each workstation can provide a service or request a service.
          Each peer has its own data.
          The network doesn’t suffer from ‘bottlenecks’.
        Drawbacks:
          It offers little security since there is no central security system.
          It works well with only a few devices (for example, 12) otherwise suffers performance and
           management issues.
          It suffers instability since each workstation needs to manage (for example, update) its own
           data.
3 a) Stack – last in first out (LIFO) structure; used to store collection of objects.
    b) Queue – first in first out (FIFO) structure; new items added at end of queue and removed from
                  front of queue.
    c) Uses of stack
          used in binary searches
          used in the “UNDO” mechanism in text editors
          used in syntax checks when compiling source code.
        Uses of queue
          used in buffers
          used in parsing during compilation (infix to postfix).
4 a) Ethernet is the main LAN protocol
          it transmits data in frames; it is the protocol used when connecting a number of computers
           to form a LAN
          it controls the passing of information and avoids simultaneous transmission by two or more
           computers.
    b) IP conflicts
          occur when two receiving devices on a network have the same IP addresses
          can be resolved by restarting the computer so that a dynamic IP address would be reassigned
          the administrator can change IP addresses on devices which don’t have static IP addresses.
(5) (a) DNS – domain name system gives domain names for internet hosts and is a system for finding
        IP addresses of domain names.
    (b) Http – (hypertext transfer protocol) the protocol responsible for the correct transfer of files that
        make up web pages from the world wide web.
    (c) Status flags – the special registers in a computer that contain data/information about the state
        of the processor. The individual values are read or written to by machine code instructions
        during execution.
Cambridge International AS & A Level Computer Science                                                     1
© Helen Williams and David Watson 2020

                              Cambridge International AS & A Level Computer Science Answers

14.2 What you should already know

1   a)  PSTN – public switched telephone network
         used as means to connect computer and LANs via telephone network
         lines are always ‘open’ and always remain active
         makes use of circuit switching.
    b) VoIP – Voice over internet Protocol
         communication method (audio and visual) across internet
         uses packet switching
         uses encryption and data compression
         connection only made during actual transmission

Activity 14A
1   a) Application Layer
       Transport Layer
       Internet/Network Layer
       Network/Datalink Layer
    b) Application Layer – HTTP, SMTP, POP, IMAP, DNS, FTP, SNMP
       Transport Layer – TCP, SSL, TLS, UDP
       Internet Layer – IPv4/6, Ethernet, ARP
       Network – IEEE 802.11 etc.
    c) i) SMTP
             text-based protocol when sending emails
             this is a push protocol.
           MIME
             improved version of SMTP which can handle binary files.
           POP3/4
             protocol used when receiving emails
             this is a pull protocol.
           IMAP
             protocol used when receiving emails
             improved version of POP3/4.
       ii) MIME can handle binary file attachments when sending emails

Cambridge International AS & A Level Computer Science                                     2
© Helen Williams and David Watson 2020

                              Cambridge International AS & A Level Computer Science Answers

2   a) Ethernet is the main LAN protocol.
         It transmits data in frames.
         It is the protocol used when connecting a number of computers to form a LAN.
         It controls the passing of information and avoids simultaneous transmission by two or more
          computers.
    b) frame:

    c) They require IP to go outside local networks. The IP protocol sits on top of the Ethernet protocol.
3   a) i) Peer – this is a client in a peer-to-peer network.
        ii) Swarm – connected peers that share a (data) torrent.
        iii) Tracker – central server that stores details of all other computers in the swarm.
        iv) Leech – peer with negative feedback from the swarm.
        v) Seed – when a peer starts to upload downloaded material to other peers in the swarm.
    b) The peer randomly selects other peers in the swarm, but only continue to upload to peers that
        provide regular downloads. If a peer isn’t downloading then they will be isolated by other peers.
4   a) Packet header
          IP address source
          IP address of receiver
          hop number
          length of packet (in bytes)
          number of packets in the message
          sequence number of each packet to allow reassembly
          IP protocol version.
    b) Routing tables
          contain information necessary to forward a package along shortest/best route to allow it to
             reach its destination
          as soon as a packet reaches a router, the packet heading is read and is examined and compared
             to the routing table
          table supplies router with instructions for sending packet (to hop) to next router.
5   Description:
     This uses either an internet phone or microphone and speakers (video calls also require a
       webcam).
     The internet connection is only ‘live’ while data (sound/video image) is being transmitted.
     Uses of voice over internet protocol (VoIP) which converts sound to digital packages (encoding)
       which can be sent over the internet.
     VoIP uses packet switching; the networks simply send and retrieve data as it is needed – there is
       no dedicated line unlike PSTN. Data is routed through 1000s of possible pathways thus allowing
       the fastest route to be determined.
     The conversation (i.e. data) is split into data packages with each packet containing at least the
       senders address, receivers address and order number of packet. The sending computer sends the
Cambridge International AS & A Level Computer Science                                                   3
© Helen Williams and David Watson 2020

                              Cambridge International AS & A Level Computer Science Answers

      data to its router which sends the packets to another router and so on. At the receiving end the
      packets are reassembled into the original state.
     VoIP also carries out file compression to reduce the amount of data being transmitted.
     Because the link only exists while data is being transmitted, a typical 10 minute phone call may
      only contain about 3 minutes where people are talking, thus only 3MB of data is transmitted
      making it much more efficient that PSTN.
    Problems:
     Picture and sound may not be synchronised (packets arrive at different times).
     Video is not continuous (due to time delay reassembling packets in correct order).
     Sound/video quality may be degraded (caused by competing network traffic).

End of chapter questions
1   a)

    b)
                                     Application layer
                                      Transport layer
                                   Internet (network) layer
                                  Network/Datalink layer

    c) SMTP
         text-based protocol when sending emails
         this is a push protocol.

Cambridge International AS & A Level Computer Science                                               4
© Helen Williams and David Watson 2020

                              Cambridge International AS & A Level Computer Science Answers

         MIME
           improved version of SMTP which can handle binary files.
         POP3/4
           protocol used when receiving emails
           this is a pull protocol.
         IMAP
           protocol used when receiving emails
           improved version of POP3/4.
2   a)
                                                                                      frame check
            destination        source MAC                          payload/data/
                                                 Ethernet type                          sequence/
           MAC address           address                             message
                                                                                       check sum
    b) Metadata summarises basic information about other data
    c) In the BitTorrent Protocol
         file to be shared is split into pieces
         peer creates small files called a torrent …
         … which contains metadata about the files to be shared
         tracker keeps record of all of the peers in the swarm and the parts of the file they have
         tracker coordinates file distribution
         peers connected to a tracker which tells them which other peers are downloading the file
         peers downloading file can get pieces from different peers simultaneously
         once a peer has a piece of file it can become a seed for the parts downloaded.
3   a) Circuit switching
         dedicated circuit/channel/path …
         … which lasts for the duration of the connection
    b) Circuit switching
         gives a dedicated circuit
         whole bandwidth is available
         faster data transfer rate
         packets arrive in same order they were sent
         packets cannot get lost
         better for real time applications.
       Packet switching
         data is split into packets
         data shares bandwidth
         packets may arrive out of order, so there is a delay until packet order is restored
         packets may get lost, so retransmission causes delays.
    c) When a web page is transferred from a web server to a computer
         web page divided into packets
         each packet has a destination address
         router looks up IP address …
         … and decides where to send packet next for most efficient/shortest path
         packets can take different routes
         home computer software reassembles packets to rebuild web page.

Cambridge International AS & A Level Computer Science                                                 5
© Helen Williams and David Watson 2020

                              Cambridge International AS & A Level Computer Science Answers

4   a)
                                                                   circuit            packet
                                 statements
                                                                  switching          switching
              a dedicated circuit/path is needed at all times                           
              the same route/circuit is used for every packet
              in the message
                                                                                        
              bandwidth is shared with other packets of data                            
              none of the bandwidth available is wasted
              during transmission
                                                                                        
              packets arrive at the destination in the correct
              order
                                                                                        
    b) i) Hop number is a number in a header used to stop packets which never reach their destination
           from clogging up routes.
       ii) Checksum is a number generated from a set of data which is transmitted with the data. The
           receiver also calculates the checksum to ensure no transmission errors have occurred.
    c) Routing tables
         contain information necessary to forward a package along shortest/best route to allow it to
           reach its destination
         as soon as a packet reaches a router, the packet header is read and is examined and compared
           to the routing table
         table supplies router with instructions for sending packet (to hop) to next router.

Cambridge International AS & A Level Computer Science                                               6
© Helen Williams and David Watson 2020