# Unit 1 - Information Representation Presentation

## Sound

### Class Overview

- Key terms: sample, sampling rate/frequency, sampling resolution/bit depth, channels, amplitude
- Quantisation
- Sampling rate & resolution’s effect on file size and quality
- Calculating file size of an audio clip
- Extra: Nyquist’s Theorem and Fourier Transforms

### Sound

- Sound is transferred as pressure waves & detected by our ear drums
- Each wave has a frequency & varying amplitude

### Sound

- Sound is analogue – i.e. a varying, continuous signal
- Computers can only understand digital (binary) data – so sound has to be quantized (rounded to a discrete level)

- Analogue signal
- Digital signal

### Quantisation

- Each discrete ‘step’ in the digital signal is called a quantisation level
- An analogue to digital converter (ADC) is required to convert the analogue signal to a digital signal

### Bit depth/sampling resolution & sampling rate/frequency

- Sample: a measurement of the amplitude of the sound at a given instance
- Sampling resolution/bit depth: number of bits per sample
- Sampling rate/sampling frequency: number of samples per unit time (e.g. per second)

### Bit depth/sampling resolution & sampling rate/frequency

- Assume this graph represents 1 second – what would the sampling rate & number of quantisation levels be?
- Sampling rate: 18Hz
- Quantisation levels: 13
- How many bits would be required to represent 13 quantisation levels?
- 4 (4 bits supports 24 = 16 quantisation levels) – i.e. the bit depth/sampling resolution is 4

### Bit depth/sampling resolution & sampling rate/frequency

- Assume this snapshot represents 0.002 seconds – there are 18 samples as mentioned. What would the sampling rate/frequency (i.e. number of samples per second?) and correct units be?
- 18 / 0.002 = 9000Hz
- i.e. in 1 second, the amplitude of the sound is recorded 9,000 times & each sample uses 4 bits to represent it

### Bit depth/sampling resolution & sampling rate/frequency

- Sampling rate = 9000Hz
- Bit rate = 4 bits
- Hence, what would the file size of a 3 minute audio recording be (give your answer in an appropriate unit)?
- 9000 * 4 * 3 * 60 = 6,480,000 bits total
- To MB: / (8 * 106) = 0.81MB
- Or in MiB, use 1024 = 0.77MiB

- Full conversion to MiB:
- (9000 * 4 * 3 * 60) / (8 * 1024 * 1024)

### Audio Quality & File Size

- What do you think happens to the audio quality & file size as the sampling resolution/bit depth is increased?
- Both increase
- How about if the sampling rate/sampling frequency increases?
- Again, both quality and filesize increase
- This is because the quantisation error is smaller – i.e. the sample values can more accurately match the real analogue signal

### Audio Channels

- Note: 2 audio channels means there will be a separate recording for each (left/right) speaker/headphone – hence you’d need to multiply your answer by 2, if an exam questions mentions there are 2 channels (exam assumes 1 channel by default)
- In the 2nd picture, even visually, we can see the left & right waveforms are different

### Audio Channels

- A single audio channel is called mono
- Sound with 2 channels is called stereo
- Multichannel/surround sound is also possible – e.g. surround sound 7.1 has 8 speakers, arranged as shown

### Bit depth/sampling resolution & sampling rate/frequency

- Using these settings when exporting audio – and assuming no compression – what would be the file size for a 4 ½ minute song? Use a sensible unit
- (44100 * 32 * 60 * 4.5 * 2) / (8 * 1000 * 1000)
- 95.3MB or 90.8MiB

### Sampling Rate

- What would be the problem if we sampled at too low a frequency?
- We wouldn’t accurately capture the waveform
- How about if we sampled at too high a frequency?
- The waveform would be accurate – but the file size would be unnecessarily large

## Aliasing: when the sound wave can’t be reconstructed accurately, due to sampling at too low a frequency

### Nyquist’s Thereom

- States that for a digital signal to be constructed accurately, the sampling rate must be at least 2x the maximum frequency
- So for audio designed for humans to hear, we can choose a sampling rate based on the frequency range that humans can hear – do you know what it is?
- About 20-20,000Hz
- Hence, what would a good sampling rate be, according to Nyquist?
- About double 20,000Hz (note: 44,000Hz is usually used…this is because a small number of people may be able to hear up to 22,000Hz, because audio filters have a bit of a run-off area & because if sampling at exactly 2x, you could take all your samples at 0 amplitude)

### Nyquist’s Thereom

- The animation shows the effect of increasing the number of samples taken – as you’d expect, the wave is more accurately represented

### Fourier Transforms

- This isn’t required for the exams, but maybe it’s interesting
- All wave types can be constructed from sine waves

- You can draw a random wave and this site (jezzamon.com/fourier/) will calculate the sine waves required to make it

### Aliasing

- We mentioned that taking too few audio samples results in aliasing – we also have the same effect with images – pixels aren’t small enough to represent the image accurately
- This is where images/games/videos etc use anti-aliasing – effectively blurring some of the edges, so it looks smoother, when the viewer views it at normal zoom

## Quantisation level: a distinct amplitude value that can be represented (increasing sampling resolution = more quantisation levels)

## Digital sample will more accurately represent original analogue wave – due to having more quantisation levels and a shorter duration between samples, the quantisation error will be reduced. However, more taking more samples and using more bits to store each sample will mean the file size will increase

## Videos

### Video

- According to the syllabus, videos are no longer on the syllabus (however, the book still recommends learning about it quickly…so let’s look at a few slides)
- [in old exam papers, video questions will occasionally be mentioned…but these questions shouldn’t come up in this new syllabus]

### Video

- Videos are effectively just many pictures just playing one after another – e.g. if a video is recorded at 30fps (frames per second), that simply means 30 images will be shown per second (i.e. for 1/30th of a second each)
- There are two types of video:
- Interlaced
- Progressive

### Video

- Progressive: shows whole video frame at once
- Interlaced: shows odd lines, then even lines, switching between them – old technology did this – why do you think that was?
- Due to low bandwidth availability

- Old TV stations had a choice: 15fps progressive would use as much data as 30fps interlaced. The fact it was interlaced was barely noticeable – but the higher fps was much more important for quality

### Video

- Video formats are advertised as followed:
- [vertical resolution][progressive/interlaced][frame rate]
- Often the frame rate is omitted – some valid examples:
- 1080p
- 720i
- 2160p60
- Note how modern formats are all progressive

### Video

- Assume the following:
- Video format: 1920x1080p60
- Image colour depth: 32
- No compression
- How many MiB would each second of video consume?
- = (1920 * 1080 * 60 * 32) / (8 * 1024 * 1024) = 474.6MiB/s
- Clearly, this is an unreasonable file size for 1s of video – which is why compression is so important – sometimes, videos can be compressed by 200x or more!

### Questions

- Now that same video (1920x1080p60 with a bit depth of 32 bits) can be compressed to 1/200th of its original size
- Calculate the size of a 2 hour video, writing your answer in a sensible base-2 based (e.g. kibi, mebi, gibi etc) unit
- 1 frame = (1920 * 1080 * 32) / 200 = 331,776 bits
- 2 hours = 331,776 * 60 * 60 * 60 * 2 = 143,327,232,000 bits
- 143,327,232,000 / (8 * 230) = 16.7GiB