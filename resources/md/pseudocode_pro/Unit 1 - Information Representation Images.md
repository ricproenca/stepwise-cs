# Unit 1 - Information Representation Presentation

## Images

### Class Overview

- Categories of image: bitmap & vector
- Vector & bitmap uses
- Key terms: resolution, colour depth, pixel, element, drawing list etc
- Calculating image file size
- Image header

### Images

- There are 2 categories of images we will look at:
- Bitmap
- Vector
- Bitmaps you are probably familiar with – common file formats include: jpg, png, gif, tiff, bmp, webp, avif etc
- Vectors possibly not – svg

### Bitmaps

- Consist of individual picture elements – pixels
- Pixel: the smallest unit of an image or graphic that can be displayed on a digital device
- Each pixel has a colour value – could be RGB, black & white etc
- For example, an RGB value of FF0000 = 255 red, 0 green & 0 blue
- Resolution = number of pixels in image (i.e. higher resolution = higher quality)
- Bitmaps can be considered a 2D array (matrix) of pixels
- Bit depth/colour depth = number of bits to represent colour for each pixel

## Note how since this is white, we have all sub pixels on – i.e. FFFFFF

### Bitmap Example

- Here is a zoomed-in picture – each grid cell represents 1 pixel
- What is the resolution of this image?
- 10x10
- How many bits do you think would be needed to represent black & white image?
- Only 1  - e.g. 0 = black; 1 = white

### Bitmap Example

- What would the colour/bit depth of this image be?
- 1
- Can you then figure out the file size of an image? And can you figure out the formula?
- Intuitively: num pixels * size of each pixel
- Specifically = resolution * bit depth
- = (10 * 10) * 1 = 100bits

### Colour Bitmaps

- As mentioned, coloured bitmap images often use 6 hex digits like FFFF00 – how many bits are being used? And do you know what colour this would be?
- 1 hex digit = 4 bits. So 6 hex digits = 24 bits
- 255 red, 255 green & 0 blue – so the pixel would be yellow

- What colour would FFFF00 be?

### Colour Bitmaps

- As well as 24-bit RGB, 32-bit RGBA is also common
- The ‘A’ stands for “alpha” which is the opacity – i.e. 00 = completely transparent, while FF = completely opaque

### Colour Bitmaps

- We can actually use any number of bits for each pixel
- Here are 3 images with a different number of available colours and bit/colour depth – the file sizes are also listed

- 4 colours
- 4 bits per pixel
- (2 bits not supported)
- 337KB

- 50 colours
- 8 bits per pixel
- 817KB

- 16,777,216 colours
- 24 bits per pixel
- 2,676KB (2.676MB)

### Colour Bitmaps

- We can see the differences more if we view them in full screen
- All images have a resolution of 1170x780px

## 337KB

## 817KB

## 2,676KB (2.676MB)

### Colour Bitmaps

- Just by experimenting, using 256 colours was quite good – using 256 colours also used a similar file size to using 50 colours – do you have any ideas why?
- The .bmp image format supports bit depths of 1, 4, 8, 16, 24 & 32 – 50 colours is too many for 4 bits (only supports 24 = 16 different colours), so both would be stored using 8 bits (max 256 different colours)
- The 256 colour version was slightly bigger (894KB vs 817KB), but that’s because it couldn’t be compressed as much with run-length encoding

### Colour Bitmaps

- We have seen a picture of grass using only 4 different colour values – how do you think a more colourful image would appear, if using only 4 different colours?

- 4 colours
- 4 bits per pixel
- 337KB

- 4 colours
- 4 bits per pixel
- 289KB

- 16,777,216 colours
- 24 bits per pixel
- 2676KB (2.676MB)

- As you can see, reducing the colour depth on an image with many similar colours is ok – reducing it too much on an image with many different colours isn’t

### Image Headers

- Many file types – both images and others - .jpg, .png, .mp3, .mp4, .exe, .doc, .pdf, .gif etc contain headers
- A header is additional information at the start of the file that often defines metadata (some files also include trailers/footers too – additional metadata at the end of the file)
- Let’s see the kinds of things stored in an image header

| Header | Image Data |
| --- | --- |

### Image Headers

- What additional data do you think might be contained within the image header?
- File type
- Resolution
- Bit depth
- Title
- Description
- Camera used
- Geolocation
- Time taken
- Program used
- etc

### Image Headers

- For example, here is a 1x1 white pixel – you would assume the file size would be small - yet it is over 8KB (equivalent to 8,000 extended ASCII characters)
- In this small section, can you notice anything in the decoded text?
- It says the image was saved with Photoshop 21.1 (Windows) and includes the date/time

- Resolution, bit depth, colour profile etc are also included
- All .jpg files start FF D8 FF – change these bytes & programs won’t know it’s a .jpg, hence won’t be able to display it – these are called “Magic Bytes”

### Calculating Image Size

- Do you remember the formula/method to calculate the filesize of an image?
- Image filesize = resolution * bit depth
- What unit will this answer be in?
- Bits – so you’d then need to convert to an appropriate unit/the unit the question specifies

### Colour Bitmaps

- We said this picture of grass was 337KB, with a bit depth of 4 and resolution of  1170x780px – ignoring the size of image headers, by how many KB has this image been compressed due to run-length encoding?

- Expected number of bits (b):
- 1170 * 780 * 4 = 3,650,400
- In KB:
- 3,650,400 / (8 * 1000) = 456.3KB
- 456.3 – 337 = 119.3KB have been reduced due to run-length encoding

### Calculating Image Size

- A photographer takes a 5000x4000px image, with a bit depth of 32 – what would the expected size of the image be (ignoring compression/file headers) – give your answer in an appropriate unit
- 80MB or 76.3 MiB

### Calculating Image Size

- No calculator
- An RGBA image is 4096x512px – it’s saved using a bit depth of 32 bits. Calculate the file size of this image in Mebibytes
- (4096 * 512 * 32) / (1024 * 1024 * 8)
- Simplify by dividing each term: 4 * 0.5 * 4
- Final answer = 8MiB

### Questions

- A company has 50,000 photos at an average of 3MiB – they see a 200GB HDD for €60 and some 32GB USB memory sticks for €10 each – would they be better off buying the 1HDD or multiple USBs?
- Total file size in GB = ((50,000 * 3) * 220) / 109 = 157.3 GB
- 5 USBs required = €50, so the USBs would be slightly cheaper

### Vector Images

- Along with bitmaps, the other type of images are vectors
- Rather than being defined in terms of pixels, they are defined in terms of shapes, co-ordinates, properties etc
- For example, you can create ellipses (circles/ovals), rectangles/squares, polygons, lines, text etc
- The main advantages of vectors are a smaller file size for certain types of images (logos etc that can be comprised of shapes) and the fact you can scale to any size, without reducing image quality

### Vector Images

- Here is a smiley face and the code required to create it

- Note the elements like ellipse & path, their attributes like stroke-width, ry/rx (radius y/x), cy/cx (center y/x), stroke, fill etc and values

### Vector Terminology

- Element/drawing object: an individual component of a vector image
- Drawing list: the collection of all elements
- Attributes/properties: additional information about an element
- Value: value of an attribute/property
- <rect x="120" width="100" height="100" fill=“#f00” />
- <line x1="0" y1="80" x2="100" y2="20" stroke=“blue" />

### Bitmap vs Vector

- Can you tell which version is the bitmap version vs which is the vector?
- Probably not…but let’s zoom in

### Bitmap vs Vector

- The right is the vector image – no matter how much you zoom in/resize, image quality never decreases!
- This is because elements & properties are defined mathematically – we can just multiply by x & y scale factors

### Bitmap vs Vector

- What about the file size – both are 340x340px, but which do you think has a smaller file size?
- Bitmap = 16.3KB          Vector = 672 Bytes
- So how much smaller is the vector?
- About 24.3x!

- Note: this file size reduction would be even more extreme if they images were larger (e.g. 1920x1920px)

### Vector Example

- Vectors aren’t just for simple images – you can use software like Adobe Illustrator to create complex graphics too
- This car is only 91KB and again, could be scaled to the size of an advertising display on a sports stadium, without losing any image quality

### Vector Drawbacks?

- Can you think of any drawbacks with vectors? What if we wanted to store a complex image like a photo?
- Photos can’t be represented well with shapes – technically we could make every pixel a 1x1 square, but then you would go from something like this:
- Bitmap: 0000FF
- Vector: <rect x=“300“ y=“400” width=“1" height=“1" fill=“#00f”></rect>
- What would be size of each, for 1 pixel?
- Bitmap: 3 bytes ; Vector = 62 ASCII characters = 62 bytes
- …so representing photos as vectors would take up more space

### Vector Drawbacks?

- Something else to note is that many devices – screens, inkjet/laser printers etc can’t render vectors directly – they need to convert to a bitmap when displaying
- A graphics plotter/cutter is required to draw/cut-out a vector

## Assuming the file is saved optimally, what is the bit depth of a purely black & white image?

## When would it be better to use bitmaps and when would it be better to use vectors?