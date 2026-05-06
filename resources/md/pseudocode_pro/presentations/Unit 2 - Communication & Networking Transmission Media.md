# Unit 2 - Communication & Networking Technology Presentation

## Transmission Media

### Class Overview

- Transmission media: twisted pair, coaxial, fibre optic, WiFi, satellites
- Wired vs wireless
- Local vs global communication
- Key terms: attenuation, bandwidth, repeaters, guided, unguided, shielding, channels, interference

### Transmission Media

- As stated, there are 2 methods in which data can be transmitted between devices
- Wired (twisted pair, coaxial, fibre optic)
- Wireless (WiFi, satellite, bluetooth)

### Key Terms

- Bandwidth: a measure of the amount of data that can be transmitted per second (usually in Mb/s or Gb/s)
- Attenuation: the rate at which the strength/intensity of the signal decreases

### What factors do you think affect bandwidth?

- How would these factors relate to the cars on a road analogy?
- Physical speed of data transmission/speed of each car
- Frequency of transmission/distance of one car to next
- Number of active channels/lanes
- In most cases, points 2 are 3 are the deciding factors (since both electrical & electro-magnetic waves propagate extremely fast)

### What factors do you think affect attenuation?

- Substance data is transmitted through – copper, air, buildings/walls, rain, vacuum etc
- Frequency – low frequency waves (e.g. radio) attenuate less than high frequency waves (e.g. gamma)

### Twisted Pair

- Insulation & shielding block electromagnetic interference from both outside and between the pairs
- Twists also reduce EM interference

### Twisted Pair

- Different cables twisted different amounts – keeps wires out of phase to reduce crosstalk
- More twists = less interference & higher frequency (hence bandwidth) supported, but more attenuation (due to higher capacitance & greater length of wire)

### Twisted Pair – Extra Info

- A signal sent on red wire; inverted signal on blue – difference between them is the final signal
- If not twisted, outside EM signals hit wires hence induce current at different times
- Twists ensure interference occurs at same time – hence difference stays same

### Twisted Pair: Shielded vs Unshielded

- Shielded twisted pair also contains metal insulation to prevent interference
- It is more expensive & usually not neccessary, so rarely used (mostly in data centers with high frequency wires or e.g. factories/environments with lots of powerful electronic/magnetic machinery)

### Twisted Pair – Advantages & Disadvantages

- Cheap

- Lower bandwidth
- High attenuation
- Strongly affected by interference
- Requires many repeaters

- Remember, this is relative – for home/office use, twisted pair is fine – for undersea cables spanning 10,000km used by millions, not so much – 40Gbps is more than enough for home usage for example

### Coaxial

- Again, contains insulation to reduce interference
- Mainly used for broadband connections, (old) tv & radio, CCTV etc

### Coaxial – Advantages & Disadvantages

- Moderate cost
- Moderate bandwidth
- Moderately affected by interference

- Moderate attenuation
- Requires moderate number of repeaters

- Note: the books say coaxial has the highest attenuation, though sources online from e.g. cable manufacturers say that twisted pair has higher attenuation than coaxial

### Fibre Optic

- Light is transmitted at high frequencies through glass tubes

### Fibre Optic Bandwidth

- Current world record speed in a lab is 1Pb/s (1015)
- Current commercial solutions tend to be about 100Gb/s
- These bandwidths are per glass fibre (tube) – fibre is less affected by interference than copper cable methods (twisted pair or coaxial), so if you want 1Tb/s, we can simply use 10 100Gb/s fibres

### Fibre Optic Bandwidth

- It’s stated that fibre-optic cables could support a bandwidth of 100,000 twisted pair or coaxial cables – why do you think that is?
- The speed propagation of voltage along a wire can be between 50-90% the speed of light – so this isn’t really the issue
- The main reason is the frequency of light in a fibre optic cable (1015Hz) is >>> frequency of electrical signals in copper wire (106Hz) – why do you think increasing the frequency increases the amount of data we can transmit per second?

### Fibre Optic Bandwidth

- Here are the graphs for y = sin(x) and y = sin(10x)
- Assume a peak = 1 and a trough = 0
- Hence, higher frequency = more peaks & troughs per second = higher bandwidth

- Between 4G & 5G Internet, which has a higher frequency?
- 5G – which is why the bandwidth is higher

### Fibre-Optic Advantages & Disadvantages

- Extremely high bandwidth
- Lowest attenuation
- Lowest need for repeaters
- Least affected by interference

- Expensive
- Requires specialist equipment

- Ignoring price, why doesn’t everyone use fibre optic?
- Since for home/small office use, twisted pair supports up to 40Gb/s which is good enough – so it’s really only huge companies/ISPs that would need it. Some companies also have km of twisted pair – so switching to fibre optic would be very costly/time consuming.

### Transmission Media: Comparison

- As stated, online sources state twisted pair suffers more attenuation coaxial
- Then, it’s easy to remember: twisted pair is worst in everything, but cheapest; coaxial is in the middle for everything; fibre optic is best for everything, but most expensive

### WiFi

- Works by transmitting data over radio waves
- Different channels (frequencies) used to reduce interference

### WiFi: Channels

- Imagine you have 10 different WiFi networks, each with 10 devices all communicating on the same frequency – what do you think might happen?
- You can get interference

### WiFi: Channels

- To solve this, frequencies can be broken down into separate channels
- To reduce interference, different networks & devices should communicate on different channels

- Bandwidth utilization is also increased – data can be sent on quiet rather than congested channels

### Guided vs Unguided Media

- Guided means we can ‘aim’ the signal – by definition, cables provide a 1-to-1 connection, hence are guided
- Unguided means the signal is sent in all directions – e.g. a wireless access point (WAP), radio tower or tv station sends the signal spherically (i.e. all directions)

### Guided vs Unguided Media

- Do you know what type of electromagnetic wave a remote control (e.g. for a TV, AC etc) uses?
- Infrared – what happens if you don’t aim the remote control directly at the receiver?
- The signal won’t be received – hence EM waves with higher frequencies are more guided than those with lower frequencies

### Wireless Frequencies

- 5G has a higher frequency than 4G – this is why it has a higher bandwidth, but has a shorter range, is more likely to get blocked by walls etc. There are also arguments about higher frequencies causing health issues

### WiFi Advantages & Disadvantages

- Accessible with portable devices (laptops, tablets, phones etc)
- No cables required
- Setup is easy/fast
- Suitable for public locations – cafes, hotels, transport etc

- Lower bandwidth
- Less secure than cables – anyone can listen in (though data should ideally be encrypted)
- High absorption rate (e.g. blocked by walls)
- Short range (20 to 150m)

### Transmission Media: Legal Issues

- Do you think you can set up an antenna and start transmitting data?
- On unused frequencies, yes – but if the frequency is used by the military, government, tv/radio station etc, you can get into legal trouble (fines or even prison) if the offense is severe enough

### Transmission Media: Legal Issues

- Do you also think cabling also comes with legal issues?
- It possibly depends on the country – if it’s a private company installing cables, they will have to get permission to dig and lay the cables underground from the land owners (e.g. farmers)
- If the telecoms company is owned/partially-owned by the government, the company shouldn’t really have any legal issues

### Satellites

- Geostationary: stays above fixed position on Earth. 3 required for whole-Earth coverage
- Medium-Earth orbit: provides GPs etc – 10 required for whole-Earth coverage
- Low-Earth orbit: provide mobile phone network – 50 required for full-Earth coverage – Starlink operates at only 340km above the Earth’s surface
- Note: Van Allen belts contains high levels of electrically-charged particles, hence satellites aren’t placed there

### Satellites

- Can act as component in a network or directly communicate with ground-based components
- Ground-based components can be further apart than a network without satellites, since relay satellites have large view of Earth’s surface
- Due to larger distances involved, high latency (time to receive first byte)

### Satellites

- In reality, due to high cost, latency, low bandwidth, satellites are only used for specialised applications where alternatives (e.g. fibre optics) aren’t available:
- Internet access for mobile phones
- GPS/military/tracking
- Internet access in remote locations/after (natural) disasters
- Internet access on planes

### Satellite Advantages & Disadvantages

- Accessible from virtually anywhere (even if local infrastructure has been destroyed) – i.e. remote locations/after (natural) disasters)
- Specific use cases – e.g. GPS, mobile phone network, taking photos of Earth etc

- Expensive
- Lower bandwidth
- Higher latency
- Extremely complex
- Repairs are difficult/impossible

### Local vs Global Communication

- We have looked at the following transmission mediums:
- Twisted pair cable
- Coaxial cable
- Fibre optic cable
- WiFi
- Satellites
- Which do you think would be good for local vs global communication & why?

### Local Communication

- For home/small office use, twisted pair & WiFi would be good options – coaxial is also fine too, but requires hardware that is less common these days
- Afterall, for these situations, we don’t require the bandwidth that fibre optic provides – so these other mediums are sufficient
- WiFi has the convenience of allowing people to move around and use non-computer/portable devices (phones, tablets, smart appliances etc)

### Global Communication

- If possible, for global communication, fibre optics will be used due to extremely high bandwidth and cheaper price, compared to satellites (fibre optic is more expensive than twisted pair/co-axial though of course)
- If requiring GPS/mobile phone network/needing to provide connections to a remote location, then satellites will be used

### How do the transmission mediums rank in terms of cost? How about attenuation, need for repeaters, amount affected by interference?

- Note: satellite signals can travel with low attenuation in vacuum of space – but attenuate when encountering clouds, charged atmospheric particles, solar flares etc

- ?

| Medium | Cost | Bandwidth | Interference | Attenuation | Repeaters |
| --- | --- | --- | --- | --- | --- |
| WiFi | Cheap | Quite Low | Most | Very High | Very High |
| Satellite | V Expensive | Very Low | Very High | High | Low |
| Twisted Pair | Cheap | Low | High | High | High |
| Coaxial | Moderate | Moderate | Moderate | Moderate | Moderate |
| Fibre Optic | Expensive | Very High | Low | Low | Low |

## Large office: coaxial – relatively cheap, higher bandwidth than twisted pair