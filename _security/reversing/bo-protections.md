---
title:  "Buffer overflow protections"
topic: "reversing"
---

## ASLR
* Controlled system-wide by `/proc/sys/kernel/randomize_va_space`
* Solution:
  * bruteforce
  * information leak

## Data Execution Prevention (DEP)
* NX bit on stack segment: prevent execution of shellcode.
  * NX bit: generic name
  * Intel name: XD (eXecute Disable) bit
  * AMD name: Enhanced Virus Protection (EVP)
  * ARM name: XN (eXecute Never) bit
* Solution: use existing code (ret2libc/ROP)
* DEP on Windows since Windows XP SP2 and Windows 2003


## Stack smashing protection
* Also called stack cookie/canary
* GCC flag: `-fstack-protector`
* Solution: non stack-based vulnerabilities
* Used on Windows since Windows XP SP2 and Windows 2003

## Heap protector

## Read Only Relocations
Hardens ELF programs against loader memory area overwrites by having the loader mark any areas of the relocation table as read-only for any symbols resolved at load-time. Reduces the area of possible GOT-overwrite-style memory corruption attacks.

## Position Independent Executables (PIE)
* Randomizes text and plt/got sections. Consequence: no static locations
* Libraries are PIC. Always randomized, even without PIE
* Solution: information leak

## SMEP/SMAP
* SMEP: Supervisor Mode Execution Protection. Used to prevent supervisor mode from unintentionally executing user-space code
* SMAP: Supervisor Mode Access Prevention. Feature of some CPU that allows supervisor mode programs to set user-space memory mappings so that access to those mappings from supervisor mode will cause a trap. Makes it harder for programs to "trick" the kernel into using instructions or data from a user-space program
* SMAP activation: CR4 control register
* Drawback of SMAP: larger kernel size and slower userspace memory accesses

## Pointer obfuscation
Some pointers stored in glibc are obfuscated via PTR_MANGLE/PTR_UNMANGLE macros internally in glibc, preventing libc function pointers from being overwritten during runtime.

## Fortify source

## SafeSEH
* Implemented since Windows XP SP2 and Windows Server 2003

## Control Flow Graph (CFG)

## Resources and references
* [Hexcellent](http://security.cs.pub.ro/hexcellents/wiki/kb/exploiting/home)
* [SMAP Wikipedia article](https://en.wikipedia.org/wiki/Supervisor_Mode_Access_Prevention)
