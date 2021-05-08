---
layout: page
title:  "Windows API"
summary: ""
tags: [system, windows, reversing]
permalink: "windows-api.html"
---

## DLLS
* *Kernel32*: very common, contains coe functionality such as access and
manipulation of memory, files and hardware
* *Kerne132*: looks like kernel32.dll, but is not !
* *Advapi32*:advanced core Windows components (Service manager, Registry...)
* *User32*: GUI components (buttons, scroll bars...) and management of user
actions
* *Gdi32*: diplaying and manippulating graphics
* *Ntdll*: interface to the Windows kernel. Usually imported indirectly by
*Kernel32.dll*. Weird when imported directly
* *msvcrt*: imported in most programs by the compilers
* *WSock32/Ws2_32*: networking functions
* *Wininet*: high level networking functions (HTTP, FTP, NTP...)


## Common functions
* CreateProcess, Sleep: commonly used in backdoors

## Resources and references
* [Windows data types](https://docs.microsoft.com/en-us/windows/win32/winprog/windows-data-types)
* [PEB structure](https://www.geoffchappell.com/studies/windows/win32/ntdll/structs/peb/index.htm)
* [TEB, PEB and API loading](https://rvsec0n.wordpress.com/2019/09/13/routines-utilizing-tebs-and-pebs/)