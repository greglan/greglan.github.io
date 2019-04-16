---
layout: page
title:  "Embedded reversing techniques"
permalink: "embedded-re.html"
tags: [security, reversing, arm]
summary: "A couple of things to keep in mind for embedded reversing"
---

## Memory
* memcpy, memmove, memset
* Linker script
* File format
* Headers
* Base address: strings references

### Mappings
* Search references to `TTBR0`
* Look for addresses out of the current address space
* Coprocessor addresses translation instructions
* Steps: load unmapped address, call mapping function, use new address

### Exceptions handlers
* Vector tables using script, or VBAR references
* ERET instructions
* ELR registers
* ESR registers
* DFAR and cie registers

## Privilege identification
* Registers used
* SVC, HVC, SMC instructions
* Privileged memory accesses
