---
layout: page
title:  "ARM architecture"
permalink: "arm.html"
tags: [architectures, arm]
summary: "Presentation of the ARM architecture"
toc: false
---

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

## Basic history
## ARM families
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

## Other
ù AHB/APB bridge: bridge between the fast bus and the slow one