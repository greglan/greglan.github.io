---
layout: page
title:  PE files
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

## Tools

## Misc


## Resources and references
