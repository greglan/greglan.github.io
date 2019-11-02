---
layout: page
title:  "Introduction Level Parallelism (ILP)"
permalink: "instruction-level-parallelism.html"
tags: [architectures]
summary: "An introduction to ILP"
---

## Introduction
* Instruction Level Parallelism: set of techniques to execute several
  instructions at the same time.
* Pipelined operation allows several instructions to be executed at each stage
  of the pipeline
* Parallel operation: several instructions executed by different execution units

## Pipelined execution
* Typical pipeline: *Fetch -> Decode -> Execute -> Writeback*

  Allows to execute 4 instructions concurrently because each operation is
  performed concurrently by a specific module
* Different pipelines for different instruction types (branches, integers
  instructions, load/store instructions, FP instructions...)
* FP pipelines typically used two execution stages

  Load/store instructions use address generation and cache stages

  Branch instructions use prediction stages

## Dependencies
### Data dependencies
* RAW (read after write) dependency: also called flow-dependencies, arise because
  of the structure of the algorithm

  Example where the second instruction is RAW dependent (*load-use dependency* e.g
  shared operand) on the first:
```nasm
ldr r1, #val
add r2, r1, r1  ; Can't be executed before the previous line
```

  Another example but for a *define-use* RAW dependency:
```nasm
mul r1, r2, r3
add r4, r1, r1
```
* WAR dependency (write after read):
```nasm
mul r1, r2, r3
add r2, r4, r5
```
* WAW dependency (write after write)
```nasm
mul r1, r2, r3
add r1, r4, r5
```
* WAR/WAW dependency: false dependencies, can be eliminated by register renaming

  Renaming can be performed by the compiler of the CPU itself. Some recent CPUs
  have a much larger number of registers than shown to the programmer/compiler.
  Used for renaming
* Loop dependency:
```python
for i in range(n):
  x[i] = a[i] * x[i-1] + b[i] # x[i] can't be computed before x[i-1]
```

### Control dependencies
* When conditional branches are used
* Speculative execution techniques used to predict the outcome of the branch
  * static branch prediction: performed by the compiler
  * dynamic branch prediction: performed by the CPU

### Data-dependency and control-dependency graphs
* TODO: examples better than explanation

### Resource dependencies
* Instructions which require the same physical resource
* Becoming less important because IC technologies reduce the cost of providing
  adequate resources
* Example for a processor with a single divider unit:
```nasm
div r1, r2, r3
div r4, r5, r6
```

### Instruction scheduling
* Compiler-level reorganization of the instruction sequence
* CPU-level selection of instructions from a window

## Sequential consistency
* During parallel execution, the order of execution does not always agree with
  the order in which the instructions are stored in memory
* Problem of instructions throwing exceptions: the exception handler may
  encounter incomplete instructions before or completed instruction after the
  instruction that generated the exception
* Problem of instructions affecting memory: possible to initiate an I/O before
  proper initialization has been done (setting up buffers...)
* Processor consistency: consistency of instruction completion
* Memory consistency: consistency of the sequence of memory accesses
* Consistency of exceptions: order in which exceptions are processed relative to
  the sequence of instructions which caused them
* Technique for ensuring sequential execution: start instructions in any order
  but complete them only in order. Done by reordering buffers

## VLIW and superscalar
* VLIW: Very Long Instruction Word. Type of machine where the compiler produces
  'very long' instructions composed of a group (typically 4 or 8) of standard
  length instructions.
* All the instrutions in a group are issued to the execution units at the same
  time.

  Requires a specific design of the fetch/decode/issue units to allow the
  processing of several instructions at the same time.

## Benchmarking

## Other
* [TLB](https://en.wikipedia.org/wiki/Translation_lookaside_buffer): Translation Lookaside Buffer. Part of the MMU, caches the memory locations
* NPU: Neural Processing Unit
* Reason for the shift from CISC to RISC: easier to spot dependencies

## Resources and references
* [Superscalar architectures on Wikipedia](https://en.wikipedia.org/wiki/Superscalar_processor)
