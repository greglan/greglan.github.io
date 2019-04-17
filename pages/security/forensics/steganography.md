---
layout: page
title:  "Various steganography techniques"
permalink: "steganography.html"
tags: [security, forensics]
summary: "Presentation of several steganography techniques"
---

## LSB encoding
* Can be used with PNG files: change the LSB of the RGB values. No practical impact for the human eye

```
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

## EXIF data
* EXIF = Exchangeable Image Fileformat
* Metadata embedded in many image file
* Tools:
    * [perl-image-exiftool](https://www.archlinux.org/packages/?name=perl-image-exiftool) on Arch Linux
    * EnCase
    * FTK
    * Oxygen
    * [ExifReader](https://exif-reader.en.softonic.com/)



## Resources and references
* [LSB encodings](http://www.eiron.net/thesis/)
* [Null cipher](https://www.geeksforgeeks.org/null-cipher/)
* [OCR in Python](https://stackabuse.com/pytesseract-simple-python-optical-character-recognition/)
