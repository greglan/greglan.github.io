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
  
  Consequence: performance reduction, because the EU will empty before the
  branch is taken and refill just afterwards
* Type of branches:
  - Unconditional branches: simple branches, subroutine calls, subroutine returns
  - Conditional branches: loop-closing branches and all other branches
  - Identification of loop-closing branches: pattern decrement/test/branch. Often
  assumed to be taken

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
  
### Fixed prediction
* Two fixed prediction schemes: assume all conditional branches are taken, or
  assume all conditional branches are not taken
* Always not taken: continue with the execution of the sequential path, but in preparation for a wrong guess start with the execution of the taken path (e.g calculate the branch target address) in parallel

  If the guess is incorrect, delete the speculative processing along the sequential path and continue with the processing of the taken path

  Taken penalty is higher than the not-taken penalty

  Easier to implement than the *always taken* approach but worse performance
* Always taken approach: in preparation for a wrong guess, save processing status (e.g PC/EIP) and start with the execution of the taken path

  If the guess is incorrect, delete the speculative processing along the taken path and continue executing the sequential path using the saved processing status

  Taken penalty is usually less than the not-taken penalty

  Requires more complex implementation than the *always not taken* approach

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
* Single-bit prediction: if last branch was taken, then assume next branch is also taken, and if last branch was not taken, assume next branch is also not taken
* 2-bit prediction scheme: Smith algorithm

{% include centered-image.html file="system/architectures/smith-algorithm.png" alt="smith-algorithm" %}

* 3-bit prediction scheme: record the last 3 branches. To predict the next
  branch, simply use a majority rule

## Speculative execution
* Deals with technique to recover as efficiently as possible from a misprediction.
* To successfully recover from a mispredicted taken path, CPU must save the address of
  the sequential continuation (the first instruction after the branch) before speculatively fetching the branch target instructions. Recovery can be optimised by also saving the prefetched sequential instructions
* To successfully recover from a mispredicted sequential path, CPU must calculate and save the address of the branch target before speculatively executing the sequential instructions. Recovery can be optimised by also prefetching the branch target instructions
* Requirement: provide two instruction address registers (PC/IP register on ARM/x86)
  
  Requirement for optimizing branch recovery: if prefecthing both paths, need additional instruction buffers. Can be 2 instruction buffers (one for sequential path, the other for target branch) or even three I-buffers (sequential buffer, target 1 buffer and target 2 buffer)


## Multiway branching
Some architectures have tried to support multiway branching, in which both the sequential and the taken paths are both pursued until the branch condition is resolved. It is possible that one or both of these paths will itself contain further branches, so that even more paths can be pursued. These schemes have drawbacks, in that each path requires significant hardware resources, including program counters, instruction buffers, and even execution units. Further, there are increasing complications in cancelling all of the speculative instructions as more paths are pursued

## Guarded execution
* Aim: eliminate some confitional branches by replacing them with conditional instruction execution
  
  Advantage: conditional instructions can be issued and executed in a normal way, but the resutls will be discarded if the guard condition (one of the operands) is false
* Guarded instructions set: either a small number of them (usually `mov` instructions) or all of them
* Relevance: decreases the frequency of branches and increases the basic block size which is good for taking advantage of parallelism