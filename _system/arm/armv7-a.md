---
title:  "ARMV7-A architecture"
topic: "arm"
---
# Registers
* General purpose registers: *R0*-*R1*
* Frame pointer: *R11 =  FP*
* Stack pointer: *R13 = SP*
* Link register: *R14 = LR*
* Program counter: *R15 = PC*

# Stack types
## Ascending
## Full ascending
## Descending
## Full descending

# ARM execution modes
## User
Unprivileged mode used to run user application. Basically userland

## Supervisor
Protected mode used by the OS

## System
Privileged mode used by the OS

## Abort
Privileged mode used to handle an exception

## Undefined
Privileged mode used when an unknown instruction is encountered

## IRQ
Privileged mode used when handling an IRQ

## FIQ
Privileged mode used when handling an FIQ (high priority IRQ)


## Register bank



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
