---
layout: page
title:  "Binaries structure"
permalink: "binary-structure.html"
tags: [security, reversing]
summary: ""
---

## Misc
* Static variables: allocated at load time on the data segment
* Dynamic variables: allocated at run time on the stack
* Little-endian: 0x11223344 is written in memory as 44332211
* Storage of a string: terminated by a null byte: 0x00 != '0' (ASCII)
* Assembly for a C function call

![memory-map](/images/binary-memory-map.svg)

![stack-layout](/images/C-func-stack-layout-x86.svg)


## Resources and references
* [ELF format](https://greek0.net/elf.html)
* [ELF relocation](https://em386.blogspot.com/2006/10/resolving-elf-relocation-name-symbols.html)
* [Global Offset tables](http://bottomupcs.sourceforge.net/csbu/x3824.htm)
