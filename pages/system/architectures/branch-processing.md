---
layout: page
title:  "Branch processing"
permalink: "branch-processing.html"
tags: [architectures]
summary: "Architectural view of branch processing"
---

## Introduction
* Several instructions can be executed at once in superscalar CPUs
* Execution: instructions issued from the start of a basic block up to the next
  branch, then issued instructions completed, then branch taken

  Exception: if a superscalar CPU can start execution at a branch destination
  before the branch is taken
* Consequence: performance reduction, because the EU will empty before the
  branch is taken and refill just afterwards

## Type of branches
* Unconditional branches: simple branches, subroutine calls, subroutine returns
* Conditional branches: loop-closing branches and all other branches
* Identification of loop-closing branches: pattern decrement/test/branch. Often
  assumed to be taken
* Usually, special state bits (condition codes) record the result of the last
  instruction executed. Can be tested by conditional branches instructions.
* Problem for pipelined CPUs: not possible to reschedule instructions by
  inserting instructions between condition setting and condition testing
  instructions

  Fix: leave the result of tests in registers (truth values) which can be used
  by subsequent conditional branch instructions. Allows instruction scheduling
  to treat conditional evaluation and testing in the same way as
  arithmetic/logical expression evaluation.

## Branch prediction
* General strategy: unconditional branches should not disrupt pipelined
  execution so the branch destination is fetched, decoded ans issued in time to
  keep the EU busy.

  Loop-closing branches can be assumed to be always taken, so strategy similar
  to unconditional branches, except for the tidy up after the last iteration
* Other branches: cannot be easily predicted, and can have a serious impact on
  performances
* Grohoski's estimate of branch statistics: $$5/6$$ taken, $$1/6$$ not taken

  Unconditional branches: $$1/3$$ of branches

  Loop-closing branches: $$1/3$$ of branches

  Other conditional branches: $$1/3$$ of branches, with $$1/6$$ taken and
  $$1/6$$ not taken

## Branch handling
* First method used in pipelined CPUs: *delayed branching*. Allows to fill unused
  pipeline slots immediately following branch instructions

  For CPUs with a single branch delay slot, place an unconditional instruction
  immediately after the branch instruction: it will be issued and executed while
  the branch instruction is being acted upon
* Problems of delayed branching:
  - not easy for the compiler to find suitable unconditional instructions in the
    basic block preceding the branch. If the branch is a conditional branch,
    the instruction in the delay slot must be one which doesn't affect the
    outcome of the branch
  - for more pipeline stages (and hence more branch delay), necessary for the
    compiler to find more than one instruction to fill the branch delay slots.
    Not possible for most programs
* Recent CPUs introduced methods for detecting branches earlier (fetch and
  decode unit) and predicting the outcome of conditional branches.

  Other method: eliminate the branches altogether using *guarded execution*

## Branch processing
* Try to detect branches in the instruction stream beyond the issue window
* Allows time to process the branch and minimize the number of instructions that
  need to be aborted in the even of the branch being taken.
* Modern CPUs must detect branches as soon as possible and also try to predict
  the outcome of conditional branches

## Branch prediction
### Fixed prediction
* Two fixed prediction schemes: assume all conditional branches are taken, or
  assume all conditional branches are not taken

### Static prediction
* *Opcode based*: some branches opcode are assumed to be taken
* *Displacement based*: backward branches are assumed to be taken, while forward
  branches are not. Usefulness: loop-closing branches are all taken except for
  the last iteration
* *Compiler based*: compiler makes prediction according to the control structure
  of the program. Information encoded in a special *predict bit* in each branche
  instruction

### Dynamic prediction
* Prediction made on the basis of the *branch history*
* Branch history composed of a variable number of bits which can be stored
  alongside the entries in the instruction cache or in a *branch address cache*
  if one is present
* 2-bit prediction scheme: Smith algorithm
* 3-bit prediction scheme: record the last 3 branches. TO predict the next
  branch, simply use a majority rule

## Speculative execution
* Deals with technique to recover as efficiently as possible from a misprediction.
* To recover from a mispredicted taken path, CPU must remember the address of
  the sequential continuation. Even better if the sequential instructions have
  already been fetched
* Same desired features in case of a mispredicted sequential path: remember the
  address of the target branch, and even have the target branch instructions
  prefetched.
* Solution: provide several instruction buffers for each path

## Guarded execution
