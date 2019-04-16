---
layout: page
title:  "ARMv8-A architecture"
permalink: "armv8a.html"
tags: [architectures, arm]
summary: "Various information about the ARMv7-A architecture"
---

## AArch32 mode
* Basically equivalent to ARMv7-A architecture. 32 bits execution mode.
* Can only be changed at reset, or when changing exception levels

## AArch64 mode
### Core registers

| 64 bits name | Low 32 bits name | ARMv7 name |
|:------------:|:----------------:|:----------:|
| X0 | W0 | R0 |
| .. | .. | .. |
| X12 | W12 | R12 |
| X13 | W13 | None |
| .. | .. | .. |
| X29 | W29 | FP |
| X30 | W30 | LR |
| SP | WSP | SP |
| XZR | WZR | None |

* *XZR* and *WZR* are registers that always read to 0
* *PC* is accessible and modifiable inly using specific instructions.
* Stack accesses are always 16-byte aligned


## Exception levels (privileges)
* Monitor: EL3. Always secure.
* Hypervisor: EL2. May be only non-secure or both.
* OS/privileged: EL1. Can be both secure (S-EL1) and non secure (NS-EL1)
* User: EL0. Can be both secure (S-EL0) and non secure (NS-EL0)
* Secure and non secure states controlled by bit 0 of the *SCR* register

## Exceptions
* Synchronous exceptions:
    - generated as a result of direct execution of attempted execution of an instruction
    - return address guaranteed to indicate the instruction that caused the exception
* Asynchronous exception:
    - not generated as a result of direct execution or attempted execution of the instruction stream
    - return address not guaranteed to indicate the instruction that caused the exception

### Vector table

| Exception origin | Synchronous | IRQ/vIRQ | FIQ/vFIQ | SError/vSError |
|:----------------:|:-----------:|:--------:|:--------:|:--------------:|
| Current EL with SP_EL0 | 0x000 | 0x080 | 0x100 | 0x180 |
| Current EL with SP_ELx | 0x200 | 0x280 | 0x300 | 0x380 |
| Inferior AArch64 EL | 0x400 | 0x480 | 0x500 | 0x580 |
| Inferior AArch32 EL | 0x600 | 0x680 | 0x700 | 0x780 |


## Resources and references
* [Introduction to AArch64](https://quequero.org/2014/04/introduction-to-arm-architecture/)
* ARM architecture reference manual ARMv8
