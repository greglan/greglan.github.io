---
layout: page
title:  "Common file formats"
permalink: "file-formats.html"
tags: [security, forensics]
summary: "Review of common file formats and their signatures"
---


## PNG
* Supports lossless compression
* Sections called chunk. 2 type: critical (always present) and ancillary (optional)
* Signature: `89 50 4E 47 0D 0A 1A 0A`

### Critical chunks
- IHDR: image dimensions, color type, bit depth... Always the first chunk
- PLTE: list of colours
- IDAT: image data.
- IEND: end of the image.

### Ancillary chunks
* Usually ignored by decoders
* Always start with a lowercase letter
- bKGD: default background colour
- dSIG: digital signature
- pHYS: pixel size and the ratio of dimensions of the image

## Various file signatures
* ZIP: `50 4B 03 04`, `50 4B 05 06`
* ELF: `7F 45 4c 46`
* MS-DOS header: `4D 5A` (MZ)
* PE: `45 50 00 00` (PE)


## Resources and references
* [PNG format](https://teambi0s.gitlab.io/bi0s-wiki/forensics/image-forensics/#portable-network-graphics-png)
* [FAT32 format](http://www.file-recovery.com/recovery-file-system-FAT32-features.htm)
