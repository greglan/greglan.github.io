---
layout: page
title:  "Study of the UPX packer"
permalink: "upx.html"
tags: [security, reversing]
summary: "A guide to UPX and its manual unpacking"
---

## UPX algorithm
### Fingerprint
* `UPX0, UPX1` and `UPX2` sections
* Very few imports
* Recognized by PEiD

### Unpacking process
* Execution start at the new EP
* Registers saved using `PUSHAD/PUSHA`
* Unpacking stub executed and program decompressed
* Resolve the IAT of the decompressed program
* Registers restored using `POPAD/POPA`
* Jump to unpacked code (OEP)

## Manual unpacking
### Finding the OEP
* After `PUSHAD` and `POPAD`, jmp to OEP
* Hardware breakpoint method
* Stepping

### Dumping the file
* Breakpoint at OEP
* Ollydbg using the OllyDmp plugin
* x32/x64dbg with the built-in Scylla plugin

### Fixing the IAT
* Can be done using ImportREC, or automatically with the Scylla plugin for
x32/x64dbg

## Resources and references
* [Manual unpacking of UPX](https://securityxploded.com/unpackingupx.php)
* [An example of unpacking](https://reverseengineering.stackexchange.com/questions/6773/unpacking-a-backdoor-program-for-studying)
* [POPA/POPAD instructions](https://c9x.me/x86/html/file_module_x86_id_249.html)
* [PUSHA/PUSHAD instructions](https://c9x.me/x86/html/file_module_x86_id_270.html)
* [Dumping an EXE using x32dbg](https://www.unknowncheats.me/forum/general-programming-and-reversing/211590-dump-exe-file-using-x32dbg.html)
* [Many unpacking tutorials](https://tuts4you.com/download/category/11//)
