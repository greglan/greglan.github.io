---
layout: page
title:  Executable and Linking Format (ELF)
permalink: "elf.html"
tags: [security, reversing]
summary: "Structure of ELF files and useful commands"
---

## Structure
* Static variables: allocated at load time on the data segment
* Dynamic variables: allocated at run time on the stack
* The .bss segment does not occupy any space in the binary

![memory-map](/images/binary-memory-map.svg)


## Lazy linking [2]
* Process of connecting symbolic references with symbolic definitions
* Call to a function points to the PLT
* Display the .plt section with `objdump -d hello-world -j .plt -M intel --no-show-raw-insn`
* PLT: resolve the function's real address at runtime

![lazy-linkg](/images/lazy-linking.png)

* Linking routine overwrite the .got.plt section with the correct function
address for later uses
* Both .got and .got.plt are set to writable in the ELF file
* Performed by `dl_linux_resolve()` on Linux and `_dl_bind_start()` on OpenBSD
  and FreeBSD
* Can be prevented by setting the `LD_BIND_NOW` variable

## Position Independent Executables (PIE)
* Randomizes text and PLT/GOT sections. Consequence: no static locations
* Libraries are PIC. Always randomized, even without PIE
* Disable PIE in gcc: `-no-pie`
* [Article about x86 PIC](https://ewontfix.com/18/)
* [What is *get_pc_thunk_bx*](https://stackoverflow.com/questions/6679846/what-is-i686-get-pc-thunk-bx-why-do-we-need-this-call)
* [PIC utility function in x86](https://reverseengineering.stackexchange.com/questions/20826/how-does-the-x86-instruction-call-135b-x86-get-pc-thunk-ax-work)


## Tools
* Addresses of symbols: `nm`
* Show program header table: `readelf -l filename`
* Show section header table `readelf -S filename`
* Display relocations:` readelf -r filename`
* Display dynamic relocation entries: `objdump -R filename`
* Check the stack flags: `readelf -l prog_name | grep GNU_STACK`
* Debugging information: `objdump -g`
* Headers: `objdump -x`
* Remove any debugging information: `strip`
* Extract debugging information: `objcopy --only-keep-debug`
* Add debugging information: `objcopy --add-gnu-debuglink`
* Source code line of given address: `addr2line -e binary address`
* Size of sections: `size`


## Misc
* Standard for programs, object files, shared library and core dumps in Linux
* DWARF: debugging information format
* Little-endian: 0x11223344 is written in memory as 44332211
* Storage of a string: terminated by a null byte: 0x00 != '0' (ASCII)
* Assembly for a C function call

![stack-layout](/images/C-func-stack-layout-x86.svg)


## Resources and references
* [ELF format](https://greek0.net/elf.html)
* [[2] ELF relocation](https://em386.blogspot.com/2006/10/resolving-elf-relocation-name-symbols.html)
* [[3] ELF relocation in x64](http://www.mindfruit.co.uk/2012/06/relocations-relocations.html)
* [Program layout in memory](https://manybutfinite.com/post/anatomy-of-a-program-in-memory/)
* [Global Offset tables](http://bottomupcs.sourceforge.net/csbu/x3824.htm)
* [Program startup in Linux](http://dbp-consulting.com/tutorials/debugging/linuxProgramStartup.html)
* [ELF analysis](https://linux-audit.com/elf-binaries-on-linux-understanding-and-analysis/)
* [Another article on ELFs](http://fluxius.handgrep.se/2011/10/20/the-art-of-elf-analysises-and-exploitations/)
