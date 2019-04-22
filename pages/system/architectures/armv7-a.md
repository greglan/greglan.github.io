---
layout: page
title:  "ARMv7-A architecture"
permalink: "armv7a.html"
tags: [architectures, arm]
summary: "Various information about the ARMv7-A architecture"
---
## Registers
* General purpose registers: *R0*-*R1*
* Frame pointer: *R11 =  FP*
* Stack pointer: *R13 = SP*
* Link register: *R14 = LR*
* Program counter: *R15 = PC*

## Conditional code

| Code | Meaning | Flags |
|:----:|:-------:|:-----:|
| eq    |Equal | Z==1 |
| ne	|Not equal | Z==0 |
| pl	|Positive or zero (plus) | N==0 |
| mi	|Negative (minus) | N==1 |
| vs	|Signed overflow (V set) | V==1 |
| vc	|No signed overflow (V clear) | V==0 |
| cs/hs	|Unsigned higher or same (carry set) | C==1 |
| hi	|Unsigned higher | (C==1) && (Z==0) |
| ge	|Signed greater than or equal | N==V |
| gt	|Signed greater than | (Z==0) && (N==V) |
| lt	|Signed less than | N!=V |
| le	|Signed less than or equal | (Z==1) \|\| (N!=V) |
| ls	|Unsigned lower or same | (C==0) \|\| (Z==1) |
| cc/lo	|Unsigned lower (carry clear) | C==0 |
| al/none|Always| None |


## Stack types
### Reminder
* Full stack: the stack points to the last element of the stack
* Empty stack: the stack points to the next free element of the stack
* Descending stack: grows from high addresses to low addresses
* Ascending stack: grows from low addresses to high addresses

TODO: stack instructions suffixes

### Full descending
Default stack type on ARM.

![full-descending-stack](/images/arm-full-descending-stack.svg)

### Empty descending

![emtpy-descending-stack](/images/arm-empty-descending-stack.svg)

### Full ascending

![full-ascending-stack](/images/arm-full-ascending-stack.svg)

### Empty ascending

![empty-ascending-stack](/images/arm-empty-ascending-stack.svg)


## ARM execution modes
* User: unprivileged mode used to run user application. Basically userland
* Supervisor: protected mode used by the OS
* System: privileged mode used by the OS
* Abort: privileged mode used to handle an exception
* Undefined: privileged mode used when an unknown instruction is encountered
* IRQ: privileged mode used when handling an IRQ
* FIQ: privileged mode used when handling an FIQ (high priority IRQ)

### Register banking
* R0 to R7, PC and CPSR shared by all modes
* R8 to R12 shared by all modes except FIQ, which has its own registers
* Each mode has its own SP, except User and System mode which have the same
* User, System and Hypervisor modes have the same LR. All other modes have their own LR
* All modes except User and System have their own SPSR


## Vector table

| Offset | NW exception | SW exception | NW with hypervisor exception | Monitor mode exception |
|:------------:|:----------------:|
| 0x00 | Unused | Reset | Unused | Unused |
| 0x04 | Undefined instruction | Undefined instruction | Undefined instruction | Unused |
| 0x08 | SVC call | SVC call | HVC call | SMC call |
| 0x0C | Prefetch abort | Prefetch abort | Prefetch abort | Prefetch abort |
| 0x10 | Data abort | Data abort | Data abort | Data abort |
| 0x14 | Unused | Unused | HVC/Trap | Unused |
| 0x18 | IRQ | IRQ | IRQ | IRQ |
| 0x1C | FIQ | FIQ | FIQ | FIQ |


## Resources and references
* [Stack instructions](http://www.keil.com/support/man/docs/armasm/armasm_dom1359731152499.htm)
* [Condition codes](https://community.arm.com/developer/ip-products/processors/b/processors-ip-blog/posts/condition-codes-1-condition-flags-and-codes)
