---
layout: page
title:  Executable and Linking Format (ELF)
permalink: "elf.html"
tags: [security, reversing]
summary: "Structure of ELF files and useful commands"
---

## Misc
* Standard for programs, object files, shared library and core dumps in Linux
* DWARF: debugging information format
* Little-endian: 0x11223344 is written in memory as 44332211
* Storage of a string: terminated by a null byte: 0x00 != '0' (ASCII)
* Assembly for a C function call

![stack-layout](/images/C-func-stack-layout-x86.svg)


## Structure
* Static variables: allocated at load time on the data segment
* Dynamic variables: allocated at run time on the stack
* The .bss segment does not occupy any space in the binary

![memory-map](/images/binary-memory-map.svg)


## Tools
* Addresses of symbols: `nm`
* Debugging information: `objdump -g`
* Headers: `objdump -x`
* Remove any debugging information: `strip`
* Extract debugging information: `objcopy --only-keep-debug`
* Add debugging information: `objcopy --add-gnu-debuglink`
* Source code line of given address: `addr2line -e binary address`
* Size of sections: `size`



## Resources and references
* [ELF format](https://greek0.net/elf.html)
* [ELF relocation](https://em386.blogspot.com/2006/10/resolving-elf-relocation-name-symbols.html)
* [ELF analysis](https://linux-audit.com/elf-binaries-on-linux-understanding-and-analysis/)
* [Another article on ELFs](http://fluxius.handgrep.se/2011/10/20/the-art-of-elf-analysises-and-exploitations/)
* [Program startup in Linux](http://dbp-consulting.com/tutorials/debugging/linuxProgramStartup.html)
* [Global Offset tables](http://bottomupcs.sourceforge.net/csbu/x3824.htm)
