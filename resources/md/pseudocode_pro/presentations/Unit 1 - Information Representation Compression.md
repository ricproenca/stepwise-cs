# Unit 1 - Information Representation Presentation

## Compression

### Class Overview

- Advantages & disadvantages of compression
- Lossy & lossless compression
- Image, audio, video & text compression
- Run-length encoding
- Huffman coding

### Compression

- Compression: reducing the size of data
- We have mentioned text, images, sound & video – ideally, we want to be able to compress all of these formats
- For videos, it’s obvious why we want to compress
- Even for text (e.g. web pages – which are HTML/JavaScript/CSS – i.e. text), if we can halve the file size, that means the website will load twice as fast, the website owner will pay half as much for bandwidth, the Internet will be less clogged up etc

### Benefits of compression

- Can you think of some benefits of compression?
- Faster transmission (uploads/downloads/copying)
- Saves space on secondary storage (hard drive/SSD)
- Can send as an email/file attachment if otherwise too big
- Uses less bandwidth – e.g. on a monthly phone contract with 20GB per month
- Why don’t we compress everything – e.g. entire hard drive?
- Takes time to decompress – e.g. searching files requires entire HDD to be decompressed

### Lossy & Lossless Compression

- There are 2 categories a compression algorithm/approach can fall into:
- Lossy: data is lost – i.e. quality is reduced and can’t be recovered
- Lossless: data isn’t lost – i.e. quality stays the same/original can be reconstructed perfectly (but can’t be compressed as much)

### Run-Length Encoding

- If you look at this image, could you think of any way we could reduce its file size, without reducing its quality?
- There are a lot of repeated colours – rather than storing the colour of each pixel, we can store the number of repeated pixels of that colour, then the colour itself

### Run-Length Encoding

- The format is:
- [number of consecutive cells with same colour] [colour value]
- For example, this image may start something like
- 1000 blue
- 2 black
- 10 white
- 2 black
- 20 blue etc
- Note: colour values would be in binary

### Black & White vs Colour Images

- Do you remember how many bits we need per pixel to store a black & white image?
- Only 1 – e.g. black = 0; white = 1
- For colour, usually 8, 16, 24 or 32 bits would be used per pixel

### When does run-length encoding work well?

- Here are 4 images – how do you think they would be ordered in terms of file size, from smallest to biggest & why?

- 1st (32KB)
- Horizontal repeats & b&w = good for RLE

- 2nd (41KB)
- B&W = good
- RLE doesn’t work for vertical repeats = bad

- 3rd (68KB)
- Horizontal repeats = good
- Colour = bad

- 4th (593KB)
- Colour & low opportunity for RLE

### Run-length encoding & photos

- Likewise, do you think run-length encoding will work well for photos?

- No – since very few consecutive pixels will be identical
- e.g. #FFFFFF vs #FFFFFE, while they look the same to us, run-length encoding can’t be used

### Run-length encoding & photos

- So, with this said, do you think RLE is a lossy or lossless compression technique? (i.e. is some of the original data lost or not?)
- It’s lossless – e.g. if we have the RLE sequence 5 red, 10 orange, 3 blue, we can reconstruct the original perfectly

### Lossy Image Compression

- What was the formula for calculating an image’s filesize?
- resolution * colour depth
- Hence, how could we reduce the filesize of an image?
- By reducing either the resolution or colour (bit) depth of the image

### Lossless Audio Compression

- Huffman coding – we will look at this later
- It was originally developed for text compression – but can also be used for other formats too (since ultimately, all files are just 0’s & 1’s)

### Lossy Audio Compression

- Removing frequencies & low amplitudes inaudible to human ear – i.e. quiet sounds and very high/low frequencies
- Starting with an average amplitude, then storing the differences, rather than the actual value
- For example, assume we start at 50db – 50.1 and 49.9 could be represented and +0.1 and -0.1 respectively – this would use fewer bits

### Lossy Audio Compression

- Again, what is the formula for calculating the file size of an audio file?
- sampling rate * sampling resolution * channels * duration
- [note: in exam questions, the number of channels will usually be 1]
- So we could reduce any, to get a smaller output file
- i.e. halving sampling rate = half file size

### Lossless Video Compression

- Videos are combination of images & audio – so lossless image & audio compression can be used (e.g. RLE & Huffman coding)
- Sometimes frame doesn’t change (e.g. white text on black background playing for 10 seconds) – so we can store a frame, then the number of frames it should repeat for
- Parts of frame may only change slightly from frame 1  frame 2 – we can simply store the changes, rather than the whole frame

### Lossless Video Compression

- “A two hour long 4k UHD movie like you might find on Netflix would be 3400 GB” – yet using lossless compression, it can be shrunk to “about 50GB”
- We can compress this even further using lossy video compression, but of course we will lose video quality

### Video Lossy Compression

- Again, can you remember the formula for calculating a video’s file size?
- resolution * bit depth * frame rate * duration
- So, again, if we reduce any of the first 3, the file size will decrease
- We could also make the video twice as fast to halve the file size, but in most cases, we don’t want to change the video’s duration…

### Text Compression

- For images, videos & sound, we can use either a lossy or lossless compression approach – do you think this is also true for text?
- No – for example, you wouldn’t want to compress “Hello” and the decompressed version comes out as “Hell”
- For text, in 99.999% of cases, we want to be able to reconstruct the original exactly – hence we can only use lossless compression methods

### Huffman Coding

- Huffman coding takes advantage of the fact that some characters are more common than others
- Hence, rather than transmitting data as ASCII/Unicode, we can use shorter codes for the most common characters…and longer codes for the less common ones
- All known languages follow this 1/x pattern

### Huffman Coding

- We will encode/decode our text using Huffman Coding with the following site – you can try your own text too:
- https://www.dcode.fr/huffman-tree-compression

### Huffman Coding: Encoding

- Assume input text “Hello World”
- Create frequency table of number of occurrences of each character (case-sensitive)
- Assign Huffman codes to letters, with most common letters having shortest Huffman codes
- Replace letter with corresponding code
- i.e. 11101111101011000000111001010011
- Note: the generated Huffman codes are chosen so that there is only 1 possible decoding

| char | code |
| --- | --- |
| l | 10 |
| o | 110 |
| [space] | 000 |
| W | 001 |
| r | 010 |
| d | 011 |
| H | 1110 |
| e | 1111 |

### Huffman Coding: Encoding

- Suppose instead the following codes were chosen
- What would 0101 decode to?
- It could be “abab”, “abc”, “cc” or “cab”
- This is why the generated Huffman codes are clever – since even in a stream of millions of bits, there is only 1 possible decoding

| char | code |
| --- | --- |
| a | 0 |
| b | 1 |
| c | 01 |

### Huffman Coding: Decoding

- Assume input stream of
- 01100010100111101010001111110010111
- Start on the left and find the character each sequence corresponds to
- Go to the next bit in the sequence and repeat these two steps, until at the end of the sequence
- What was the original string?
- lossless text

| s | 10 |
| --- | --- |
| l | 011 |
| o | 000 |
| e | 110 |
| [space] | 001 |
| t | 111 |
| x | 010 |

### Huffman Coding: Uses

- Do you think Huffman coding is useful for short strings (e.g. someone’s first name)?
- No – since the table also has to be sent & would be bigger than the actual data
- For larger, typical text (documents, emails, webpages etc), Huffman encoding can often half the number of bytes

### Huffman Coding Example

- Generated 100 paragraphs of random words
- File size was 80KB
- Was compressed to 40KB with Huffman coding
- So in this case, we got a 50% compression ratio
- Can test with tools like https://craftyspace.net/huffman/ or https://www.dcode.fr/huffman-tree-compression

### Huffman Coding Example

- Which of these inputs do you think could be compressed the most? (all are 26 characters)

- abcdefghijklmnopqrstuvwxyz
- aaaaaaaaaaaaaaaaaaaaaaaaa
- 🦇🐺🐗🐴🦄🐝🪱🐛🦋🐌🐞🐜🪰🪲🪳🦟🦗🕷🕸🦂🐢🐍🦎🦖🦕🐙

- 26bytes to 48 ~2x increase
- 26 bytes to 6 bytes ~4x decrease
- 156 to 107 bytes ~1.5x decrease

### Questions

- Why did the emojis take up more bytes initially?
- Since they can’t be stored in ASCII (7 or 8 bits) – Unicode (UTF-8; 8-32 bits) is required
- Why was “aaa…aaa” able to be compressed the most?
- As every character was the same, they could be stored using a short Huffman code – there would be no characters with longer Huffman codes

### Questions

- What would happen to the compression ratio if we had longer text – e.g. we used the same set of 26 emojis, but had a text with 1000s of characters?
- It would improve – i.e. longer text = more repeats = better compression
- The initial overhead of storing the Huffman table is overtaken by the amount of compression we get

### Questions

- Suppose you had 2 strings:
- “aaabbb”
- “ababab”
- How would their compression ratio compare?
- It’d be the same – run-length encoding isn’t used for text, since in regular text you’d rarely have long sequences of identical characters (and overhead of storing counts would make file size increase)

### Huffman Coding for Audio

- Note: Huffman coding can also be used for audio – this is because some amplitudes will appear repeatedly

### Extension Task

- Use a hex editor like HxD to find the username/password for crackme.exe – change the username to “ABCDE” and the password to “1234”
- Tip: run the crackme.exe, type in a random password – the string in the error message is near to the username & password in the code – you can use CTRL + F to search for it in HxD

## Audio: reduce sampling rate/frequency/resolution/channels, remove inaudible amplitudes/frequencies, Huffman Coding

## A table mapping data to Huffman codes of the input data (e.g. text) is created and sent with the data – the most common values are given the shortest Huffman codes. The codes are generated using Huffman trees, so that there is only one possible decoding
