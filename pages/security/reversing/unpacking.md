---
layout: page
title:  "Unpacking tips"
permalink: "unpacking.html"
tags: [security, reversing]
summary: "A guide to manual unpacking"
---


## Unpacking process
* Execution start at the new EP
* Registers saved using `PUSHAD/PUSHA`
* Unpacking stub executed and program decompressed
* Resolve the IAT of the decompressed program
* Registers restored using `POPAD/POPA`
* Jump to unpacked code (OEP)


## Detection
* Very few imports
* Few strings
* Recognized by *PEiD* as packed
* Section have a virtual size much larger than the raw size
* UPX: presence of *UPX0, UPX* and *UPX2* sections


## Manual unpacking
### Finding the OEP
* Hardware breakpoint method on the stack: after the `PUSHAD/PUSHA` instruction, follow `ESP` in dump. Then
  right click on the first *DWORD* and select
  *Breakpoint->Hardware->On access->DWORD*.
* Stepping until finding a `POPAD/POPA` instruction
* Searching for `POPAD/POPA` instructions in IDA
* Looking for cross sections jumps
* Break on a function of the unpacked program (*GetVersion, GetCommandLineA,
MessageBox*...) and work your way back to the OEP. Beware of software
breakpoints on code that will be decrypted.
* Common calls to *GetVersion* and *GetCommandLineA* near OEPs
* Common Visual C entrypoint:
```
push ebp
mov ebp, esp
push -1
push #addr
push #addr_bis
mov eax, dword ptr fs:[0]
push eax
mov dword ptr fs:[0], esp
```


### Dumping the file
* Breakpoint at OEP
* Ollydbg using the OllyDmp plugin: don't forget to set EP as `EIP`
* x32/x64dbg with the built-in Scylla plugin

### Fixing the IAT with *ImportREC/Scylla*
* Leave the debugged process open at the *OEP*
* Attach *ImportREC* to the process or open *Scylla*
* Enter the current `EIP` as the *OEP*
* Click *IAT auto search*
* Click *Get imports*
* Inspect invalid and suspect imports with *Show invalid/suspect*
* Click *Fix Dump* and select the previously dumped binary

## Resources and references
* [Unpacking with Anthracene tutorials](https://tuts4you.com/download/category/85//)
* [Manual unpacking of UPX](https://securityxploded.com/unpackingupx.php)
* [Another manual unpacking of UPX](http://www.behindthefirewalls.com/2013/12/unpacking-upx-file-manually-with-ollydbg.html)
* [An example of unpacking](https://reverseengineering.stackexchange.com/questions/6773/unpacking-a-backdoor-program-for-studying)
* [POPA/POPAD instructions](https://c9x.me/x86/html/file_module_x86_id_249.html)
* [PUSHA/PUSHAD instructions](https://c9x.me/x86/html/file_module_x86_id_270.html)
* [Dumping an EXE using x32dbg](https://www.unknowncheats.me/forum/general-programming-and-reversing/211590-dump-exe-file-using-x32dbg.html)
* [Many unpacking tutorials](https://tuts4you.com/download/category/11/)
