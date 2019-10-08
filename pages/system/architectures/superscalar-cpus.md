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
* Solution: move part of the decoding to a *predecode unit* which partly decodes
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

![instruction-issue](/images/system/architectures/instruction-issue-basic.png)

* Instruction issue may be blocked to be passed to *reservation stations*
* Instructions issued to reservation buffers without checking for dependencies
* Reservation station: also called *shelving buffers*. Hold instructions awaiting
  execution.

  Instructions in reservation stations may be ready to execute or be temporarily
  blocked (dependency of one of the operand for instance).
* When reservation stations are used, issue can still be blocked if all
  reservation stations are full

  Scheduling of instructions when reservation stations are used: *dispatching*

![reservation-stations](/images/system/architectures/reservation-stations.png)

## Register renaming
* Allows the elimination of false dependencies
* Uses extra physical registers than architecturally available (to the
  programmer/compiler)
* Mapping between architectural and physical registers performed by a table
