---
layout: page
title:  "Various steganography techniques"
permalink: "steganography.html"
tags: [security, forensics]
summary: "Presentation of several steganography techniques"
---

## LSB encoding
* Can be used with PNG files: change the LSB of the RGB values. No practical impact for the human eye

```python
file = open(filename, 'rb')
file.seek(start_offset)  # Skip headers and cie
raw_data = file.read()
LSBs = []  # List of least significant bits

# Build the list of LSBs
for byte in raw_data:
    LSBs.append(bin(byte)[-1])  # Add the last bit which is the LSB

# Get the result as a string
result = ""
for i in range(0, len(LSBs), 8):  # Print byte-per-byte, so 8 bits steps
    binary = ''.join(LSBs[i:i+8])  # Binary representation
    result += chr(int(binary, 2))  # Convert to char
```

## Plane extraction
Taken from [John Hammond](https://www.youtube.com/watch?v=fkCZxOI_w-c):
```python
from PIL import Image

img = Image.open('file.png')
data = img.load()

def get_plane(img, ,channel, index = 0):
  if channel in img.mode:
    new_img = Image.new('1', img.size)
    new_data = new_img.load()
    img_data = img.load()
    channel_index = img.mode.index(channel)

    for x in range(img.size[0]):
      for y in range(img.size[1]):
        color = img_data[x,y]
        channel = color[channel_index]

        plane = bin(channel)[2:].zfill(8) # Pad to 8 bits

        try:
          new_img_data[x,y] = 255 * int(plane[abs(index)-7])
        except IndexError:
          pass

    return new_img

new_img = get_plane(img, 'R', 0) # Get red color
new_img.show()

for channel in img.mode:
  for plane in range(8):
    test = get_plane(img, channel, plane)
    test.save(f'{channel}-{plane}.png')
```

## EXIF data
* EXIF = Exchangeable Image Fileformat
* Metadata embedded in many image file
* Tools:
    * [perl-image-exiftool](https://www.archlinux.org/packages/?name=perl-image-exiftool) on Arch Linux
    * EnCase
    * FTK
    * Oxygen
    * [ExifReader](https://exif-reader.en.softonic.com/)


## Audio files
* Software choices:
  - [DeepSound](http://jpinsoft.net/DeepSound/) (Windows only)
  - [QuickStego](http://quickcrypto.com/free-steganography-software.html) (Windows only)
  - [BitCrypt](http://bitcrypt.moshe-szweizer.com) (Windows only)
  - [MP3Stego](https://www.petitcolas.net/steganography/mp3stego/) (Windows only)
  - [Steghide](http://steghide.sourceforge.net/) (multi-platform)
  - [AudioStego](https://github.com/danielcardeenas/AudioStego) (seemingly multi-plqtform)

## Resources and references
* [LSB encodings](http://www.eiron.net/thesis/)
* [LSB encoding tool](https://github.com/RobinDavid/LSB-Steganography)
* [Null cipher](https://www.geeksforgeeks.org/null-cipher/)
* [OCR in Python](https://stackabuse.com/pytesseract-simple-python-optical-character-recognition/)
* [Binwalk, PNG files and Zlib](https://security.stackexchange.com/questions/144530/what-to-do-with-output-files-from-binwalk)
* [Comprehensive guide to image steganography](https://pequalsnp-team.github.io/cheatsheet/steganography-101)
* [Some stega writeups](https://0day.work/sunshine-ctf-2016-writeups/)
* [A writeup about a PNG stega chall](https://blog.rootshell.be/2015/04/29/hack-in-paris-challenge-wrap-up/)
* [Collection of techniques](https://www.reddit.com/r/crypto/comments/5l2i40/detecting_png_steganography/)
* [Writeup on image manipulation](https://www.youtube.com/watch?v=iQxLsURS1Mo)
* [A GIF steganography writeup](https://www.youtube.com/watch?v=ueE0nsSHRK0)
* [Hiding data in Audio files on hackers-rise.com](https://www.hackers-arise.com/mr-robot-hacks-hiding-data-in-audio)