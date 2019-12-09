---
layout: page
title:  "Superscalar processors"
permalink: "superscalar-cpus.html"
tags: [architectures]
summary: "Introduction to superscalar architectures"
---

## Parallel decoding
* Desirable to decode and issue several instructions at once to keep execution
  units busy
* Problem: fairly complex;, pipeline may need an additional "issue" stage after decoding.
  Solution: move part of the decoding to a *predecode unit* which partly decodes
  the instructions before writing them to the instruction cache when they are
  loaded from memory (or second-level cache)
* Principle: add information to each instruction so that it is easy to identify
  the type of instruction (register to register, load/store, branch...) and the
  resources needed
* Additional information appended to the instructions: around 4 to 7 bits

## Instruction issue
* False data dependencies can be eliminated by register renaming
* Unresolved dependencies handled by waiting or using speculative branch
  prediction
* Instructions are usually issued by *windows*, which is a fixed number of
  instructions at a time

![instruction-issue](/images/system/architectures/instruction-issue-basic.png)

* Instruction issue may be blocked to be passed to *reservation stations*
  without any dependency check

### Issue blockages
* Instruction can be issued *in-order* or *out-of-order*
* Instructions usually issued *in-order* when using reservation stations because
  they allow out-of-order execution and manage dependencies.

  Most superscalar CPUs use *in-order* issues
* Instruction issue can be *aligned* or *unaligned*
* Aligned windows are usually 4 instructions. The window is advanced by a fixed
  number of instructions after all instructions in the window have been issued.
* Unaligned windows: gliding window moving at each cycle by the number of
  instructions that have been issued

### Reservation stations
* Reservation station: also called *shelving buffers*. Hold instructions awaiting
  execution.
* Instructions issued to reservation stations without checking for dependencies
* Instructions in reservation stations may be ready to execute or be temporarily
  blocked (dependency on one of the operand for instance).
* When reservation stations are used, issue can still be blocked if all
  reservation stations are full
* Scheduling of instructions when reservation stations are used: *dispatching*
* Usually one reservation station for each execution unit. Possible to have:
  - reservation station serving several execution units
  - single central reservation station serving all execution units
* Individual reservation unit have between 2-4 entries

![reservation-stations](/images/system/architectures/reservation-stations.png)

## Register renaming
* Allows the elimination of false dependencies
* Uses extra physical registers than architecturally available (to the
  programmer/compiler)
* Mapping between architectural and physical registers performed by a table
