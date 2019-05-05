---
layout: page
title:  "Embedded reversing techniques"
permalink: "embedded-re.html"
tags: [security, reversing, arm]
summary: "A couple of things to keep in mind for embedded reversing. Note that this is mostly relevant to the ARM architecture"
---

## Memory identification
* memcpy, memmove, memset
* Linker script: if available, this can give useful information about the file structure
* File format
* Headers
* Base address: strings references

### Mappings
* Search references to `TTBR0`
* Look for addresses out of the current address space
* Coprocessor addresses translation instructions

#### Mapping pattern
Most memory mapping follow the same pattern: an unadressable/invalid memory address is passed to a function. That function is involved in the mapping operation. After this said function returns, the memory address is accessed.

The most useful indicator of a unaddressable address is the fact that this address has never been used before (no access whatsoever). These will tend to appear in red in IDA.

The function involved in the mapping should have some recognizable features

### Exceptions handlers
* Vector tables using script, or VBAR references
* ERET instructions
* ELR registers
* ESR registers
* DFAR and cie registers

## Privilege identification
### Registers used
On ARM, several version of registers exist depending on the current privilege. The usage of some of these registers leaks the privilege (for instance `SCR_EL3` is used for a code running at EL3).

### Instructions
Some instructions are privileged, while others are not. On ARM, the software interrupt instructions (`SVC, HVC, SMC`) is a good example:
* `SVC` is a system call to EL1, so it very likely that the code executing this instruction is running at EL0 (TODO: isn't that the only possibility ?)
* `HVC` is a system call to the hypervisor at EL2, so the OS running at EL1 is most likely the caller (TODO: isn't that the only possibility ?)
* `SMC` is a system call to the secure monitor running at EL3. The caller privilege can be both EL1 and EL2. What is very likely is that the caller privilege is not EL0 (TODO: isn't that impossible ?)

### Privileged memory accesses
If the permissions associated to the memory mappings are accessible, an access to a privileged region gives an indication of the privilege of the code performing that access
