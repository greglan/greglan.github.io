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
* Hardware breakpoint method on the stack: after the `PUSHAD/PUSHA` instruction,
  follow `ESP` in dump. Then right click on the first *DWORD* and select
  *Breakpoint->Hardware->On access->DWORD*.
* Stepping until finding a `POPAD/POPA` instruction
* Searching for `POPAD/POPA` instructions in IDA
* Looking for cross sections jumps: trace condition ins x64dbg:
  `eip < out0 || eip >= out1` according to
  [this](https://forum.exetools.com/showthread.php?t=18603)
* Break on a function of the unpacked program (*GetVersion, GetCommandLineA,
  MessageBox*...) and work your way back to the OEP. Beware of software
  breakpoints on code that will be decrypted.
* Common calls to *GetVersion*, *GetCommandLineA*, *GetModuleHandle* and
  *LoadLibrary/GetProcaddress* loops near OEPs
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
* The tail jump is usually followed by *0x00* bytes to ensure the section is
  aligned
* Breakpoints on *LoadLibrary* and *GetProcAddress* because they are often used
  to import required library and fix the IAT
* Check when a section is not modified anymore: means the unpacking is done
* Monitor sections that are written to, and then executed

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
* [PUSHA/PUSHAD instructions](https://c9x.me/x86/html/file_module_x86_id_270.html)
* [POPA/POPAD instructions](https://c9x.me/x86/html/file_module_x86_id_249.html)
* [Unpacking with Anthracene tutorials](https://tuts4you.com/download/category/85//)
* [An example of a manual unpacking of UPX](http://www.behindthefirewalls.com/2013/12/unpacking-upx-file-manually-with-ollydbg.html)
* [Many unpacking tutorials](https://tuts4you.com/download/category/11/)
* [64 bits unpacking](https://www.virusbulletin.com/virusbulletin/2012/07/unpacking-x64-pe-binaries-introduction-part-1)
* [Various tips](http://vkremez.weebly.com/cyber-security/unpacking-malware-background)
