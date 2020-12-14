---
layout: page
title:  "ARM architecture"
permalink: "arm.html"
tags: [architectures, arm]
summary: "Introduction to the ARM architecture throught ARMv7-A and ARMv8-A"
---

## Introduction
### Basic history and ARM families
* Server CPUs, multicore CPUs
* ARM A, ARM R/M. Examples: server, HDD, motors
* Versions refer to the ISA (Instruction Set Architecture)
* ARM M0/M1/M3/M4 applications ? Ascending compatibility for compilation
* ARM M0 characteristics. Load-store architecture
* CPU benchmark units: MIPS, number of instructions. Thumb instructions.
  
  Thumb2 -> Ability to mix 16 bits and 32 bits instructions
* NVIC: nested Virtual Interrupt Controller
  
  WIC: W? Interrupt Controller
* Sclar design: normal "single-core" CPU. One execution unit
  
  Superscalar: several execution units
* most power consumption doesn't come from executing instructions, but everything around it (pipelines and cie, everything used to oncrease performance)
* Von Neumann vs harvard arch: Harvard architectures have separate instruction and data buses
* Latency for Cortex M0: 3 (because 3 stages pipeline)
  
  Throughput: 1 because 1 instruction / clock cycle
* Low registers: r0-r7 (3 bits necessary), high registers: r8-r12 (4 bits)
  
  Some instructions can only use low registers because few bits left in the instruction encoding
* Benchmarks of Thumb-2

### Features
* Coprocessor interface: allows to easily extend the CPU features
  
  Allow several coprocessors, with some already used by extensions: debug, smid, vfp...

  Other free coprocessor slots can be used by manufacturer to implement specific features
* SIMD: vector extension
  
  DSP: Digital Signal Processing. Not common for most programs

  Saturating arithmetic: used in video processing

  NFP: first version. NEON newer
  
  Unaligned accesses: hard because may lead to cache misses, hence slow

  Interleave capability: load scattered data in a single vector

  Newton-Raphson: computes a good guess of the inverse of a number

  Compiler vectorizes loops when the instructions in the loop have a vector form
* Scalable Vector Extension: recent.
  
  Problems addressed: if a new CPU with wider register width, the code isn't faster because the size is encoded in the instructions

  Peel loop: for size 5 and SIMD size of 4, need 1+1 (remainder loop) loops to process the data
* Conditionnal instructions: optimization technique
* AHB/APB bridge: bridge between the fast bus and the slow one

## ARMv7-A
### Registers
* General purpose registers: *R0*-*R1*
* Frame pointer: *R11 =  FP*
* Stack pointer: *R13 = SP*
* Link register: *R14 = LR*
* Program counter: *R15 = PC*

### Conditional code

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


### Stack types
* Full stack: the stack points to the last element of the stack
* Empty stack: the stack points to the next free element of the stack
* Descending stack: grows from high addresses to low addresses
* Ascending stack: grows from low addresses to high addresses
* Default stack type on ARM: full descending
* Stack instructions suffixes

![arm-stack-types](/images/system/architectures/arm-stack-types.png)



### ARM execution modes
* User: unprivileged mode used to run user application. Basically userland
* Supervisor: protected mode used by the OS
* System: privileged mode used by the OS
* Abort: privileged mode used to handle an exception
* Undefined: privileged mode used when an unknown instruction is encountered
* IRQ: privileged mode used when handling an IRQ
* FIQ: privileged mode used when handling an FIQ (high priority IRQ)

#### Register banking
* R0 to R7, PC and CPSR shared by all modes
* R8 to R12 shared by all modes except FIQ, which has its own registers
* Each mode has its own SP, except User and System mode which have the same
* User, System and Hypervisor modes have the same LR. All other modes have their own LR
* All modes except User and System have their own SPSR


### Vector table

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


## ARMv8-A
### AArch32 mode
* Basically equivalent to ARMv7-A architecture. 32 bits execution mode.
* Can only be changed at reset, or when changing exception levels

### AArch64 mode
#### Core registers

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


### Exception levels (privileges)
* Monitor: EL3. Always secure.
* Hypervisor: EL2. May be only non-secure or both.
* OS/privileged: EL1. Can be both secure (S-EL1) and non secure (NS-EL1)
* User: EL0. Can be both secure (S-EL0) and non secure (NS-EL0)
* Secure and non secure states controlled by bit 0 of the *SCR* register

### Exceptions
* Synchronous exceptions:
    - generated as a result of direct execution of attempted execution of an instruction
    - return address guaranteed to indicate the instruction that caused the exception
* Asynchronous exception:
    - not generated as a result of direct execution or attempted execution of the instruction stream
    - return address not guaranteed to indicate the instruction that caused the exception

#### Vector table

| Exception origin | Synchronous | IRQ/vIRQ | FIQ/vFIQ | SError/vSError |
|:----------------:|:-----------:|:--------:|:--------:|:--------------:|
| Current EL with SP_EL0 | 0x000 | 0x080 | 0x100 | 0x180 |
| Current EL with SP_ELx | 0x200 | 0x280 | 0x300 | 0x380 |
| Inferior AArch64 EL | 0x400 | 0x480 | 0x500 | 0x580 |
| Inferior AArch32 EL | 0x600 | 0x680 | 0x700 | 0x780 |




## Resources and references
* [Stack instructions](http://www.keil.com/support/man/docs/armasm/armasm_dom1359731152499.htm)
* [Condition codes](https://community.arm.com/developer/ip-products/processors/b/processors-ip-blog/posts/condition-codes-1-condition-flags-and-codes)
* [Introduction to AArch64](https://quequero.org/2014/04/introduction-to-arm-architecture/)
* ARM architecture reference manual ARMv8
* [ARM calling conventions on Wikipedia](https://en.wikipedia.org/wiki/Calling_convention#ARM_(A32))
* [ARM calling conventions on stackoverflow.com](https://stackoverflow.com/questions/261419/what-registers-to-save-in-the-arm-c-calling-convention)