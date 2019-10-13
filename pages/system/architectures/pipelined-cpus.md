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
* In the first pipelines: when dependency was detected, pipeline was stalled
* Most CPUs use bypass techniques to minimise the effects of data dependency
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