---
layout: page
title:  "Low level reversing techniques"
permalink: "low-level-re.html"
tags: [reversing, arm]
---

# Memory
* memcpy, memmove, memset
* Linker script
* File format
* Headers
* Base address: strings references

## Mappings
* Search references to `TTBR0`
* Look for addresses out of the current address space
* Coprocessor addresses translation instructions
* Steps: load unmapped address, call mapping function, use new address

## Exceptions handlers
* Vector tables using script, or VBAR references
* ERET instructions
* ELR registers
* ESR registers
* DFAR and cie registers

# Privilege identification
* Registers used
* SVC, HVC, SMC instructions
* Privileged memory accesses
