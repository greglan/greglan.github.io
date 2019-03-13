---
title:  "ARMV7-A architecture"
topic: "architectures"
tags: arm architectures
---
# Registers
* General purpose registers: *R0*-*R1*
* Frame pointer: *R11 =  FP*
* Stack pointer: *R13 = SP*
* Link register: *R14 = LR*
* Program counter: *R15 = PC*

# Conditional code
TODO

# Stack types
## Reminder
* Full stack: the stack points to the last element of the stack
* Empty stack: the stack points to the next free element of the stack
* Descending stack: grows from high addresses to low addresses
* Ascending stack: grows from low addresses to high addresses

TODO: stack instructions suffixes

## Full descending
Default stack type on ARM.

![full-descending-stack](/assets/arm-full-descending-stack.svg)

## Empty descending

![emtpy-descending-stack](/assets/arm-empty-descending-stack.svg)

## Full ascending

![full-ascending-stack](/assets/arm-full-ascending-stack.svg)

## Empty ascending

![empty-ascending-stack](/assets/arm-empty-ascending-stack.svg)


# ARM execution modes
* User: unprivileged mode used to run user application. Basically userland
* Supervisor: protected mode used by the OS
* System: privileged mode used by the OS
* Abort: privileged mode used to handle an exception
* Undefined: privileged mode used when an unknown instruction is encountered
* IRQ: privileged mode used when handling an IRQ
* FIQ: privileged mode used when handling an FIQ (high priority IRQ)

## Register banking
* R0 to R7, PC and CPSR shared by all modes
* R8 to R12 shared by all modes except FIQ, which has its own registers
* Each mode has its own SP, except User and System mode which have the same
* User, System and Hypervisor modes have the same LR. All other modes have their own LR
* All modes except User and System have their own SPSR


# Vector table

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


# Resources and references
* [Stack instructions](http://www.keil.com/support/man/docs/armasm/armasm_dom1359731152499.htm)
