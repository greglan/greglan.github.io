---
title:  "ARMV8-A architecture"
topic: "architectures"
tags: arm architectures
---

# AArch32 mode
Basically equivalent to ARMV7-A architecture. 32 bits execution mode

# AArch64 mode
## Core registers

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


# Exception levels

# Secure and non secure states
* Controlled by bit 0 of the *SCR* register


# Resources and references
* [Introduction to AArch64](https://quequero.org/2014/04/introduction-to-arm-architecture/)
