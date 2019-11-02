---
layout: page
title:  "Pipelined processors"
permalink: "pipelined-cpus.html"
tags: [architectures]
summary: "Introduction to pipeline design in CPU architectures"
---

## Introduction
* Pipelines for register/register instructions: *fetch -> decode -> execute ->
  writeback*
* Each operation performed concurrently by a specific module
* The output latches of one stage are the input latches of the next stage
* Clocked according to the slowest stage, in the 50-500MHz (2-20ns) range

## Dependencies
* When dependency detected, pipeline stalled until the problematic instruction
  completes the writeback stage
* Most CPUs use bypass techniques to minimize the effects of data dependency
* Results of instructions can be written into input latches of the execute phase
  and to registers at the same time.

  Often allows to eliminate:
  * define-use delays: time a define-use instruction is stalled
  * load-use delays: time a load-use dependent instruction is stalled

## Pipeline design
* Import issues: number of stages, definition of subtask of each stage, use of
  bypassing, timing of the pipeline
* Constraints on the number of stages:
  * Cycle time has to be sufficient to allow a useful operation (e.g ALU operation)
  which takes information from the input latches and loads the result into the
  output latches
  * Number of stages must be sufficient to complete all of the sub tasks of an
  instruction
* Recent processors use several dedicated pipelines to achieve the minimum
  number of stages needed to perform a task.
* Typical pipelines:
  - integer/logic pipeline
  - floating point pipeline
  - load/store pipeline
  - branch pipeline

## Bypassing technique
* Cycle time has to be long enough to allow the execute stage to complete and
  bypass its result into its own input latches
* Bypassing can be used for both define-use and load-use dependencies
* Most pipelines consist of a small number of stages performed sequentially, but
  they may also include cycled stages, usually for complex arithmetical
  operations such as multiplication of large numbers or division that requires
  many steps

## Asynchronous pipelines
* Most pipelines are synchronous: all stages take the same time
* Asynchronous pipelines all all stages to operate independently
* Asynchronous pipelines don't need the distribution of a high speed clock (
  which is becoming difficult in modern VLSI technology)
* Asynchronous pipelines allow the time taken by a stage to be variable.

  For an addition in a synchronous pipeline, the worst case is when the carry
  need to be propagated to the wordlength. But on average, this is only the
  $$\log$$ of the wordlength. Hence an asynchronous pipeline can be faster on
  average
