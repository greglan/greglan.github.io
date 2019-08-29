---
layout: page
title:  Portable Executable (PE) format
permalink: "pe.html"
tags: [security, reversing]
summary: "Structure of PE files"
---

## Structure
### Sections
The sections encountered are usually the following:
* *.text*: contains the executable code. Should be the only executable section
* *.data*: contains import/export information and other read only data globally
accessible within the program
* *.data*: contains the program's (code) global data
* *.rsrc*: contains resources used by the program that are not considered part
of the executable (icons, images, menus, strings...)
* *.idata* (optional): contains import information. If not present, import
information in *.rdata*
* *.edata* (optional): contains export information. If not present, import
information in *.rdata*
* *.pdata* (optional): only in 64 bits executables, contains exception handling
information
* *.reloc* (optional): contains relocation information for library files

Usually, the names are consistent across compilers, but they can be changed:
what matters is the PE header information. We could label the *.data* section as
*.text*.

### Header
* MS-DOS header magic: *MZ = 0x4D 0x5A*

## Tools

## Misc


## Resources and references
* [Peering Inside the PE](https://docs.microsoft.com/en-us/previous-versions/ms809762(v=msdn.10))
* [An In-Depth Look into the Win32 Portable Executable File Format](https://bytepointer.com/resources/pietrek_in_depth_look_into_pe_format_pt1.htm)
* [A PE examination](https://en.wikibooks.org/wiki/X86_Disassembly/Windows_Executable_Files)
* [Windows' doc on the PE format](https://docs.microsoft.com/en-us/windows/win32/debug/pe-format)
