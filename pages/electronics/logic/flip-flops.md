---
layout: page
title:  "Flip-flops"
permalink: "flip-flops.html"
summary: "Review of the different flip-flops and their characteristics"
---

## Bistable

![bistable](/images/electronics/logic/bistable.png)

* Elementary memory element allowing to store two values
* Stable circuit and robust to perturbations
* Forms the basic structure of static RAMs
* Cannot be modified: SR latches needed

## SR latches

![sr-latch](https://upload.wikimedia.org/wikipedia/commons/7/73/SR_Latch_Symbol.svg)

* *Bascule RS* in French
* Allows to save a single binary 1 or 0
* Asynchronous behavior: a change on one of its input can immediatly lead to a
  change of the state

### Implementation using NOR gates

![sr-latch-nor](/images/electronics/logic/sr-latch-nor.png)

* Transition table

|:-:|:-:|:-:|:-:|
|$$R$$|$$S$$|$$Q^+$$|$$Q^{*+}$$|
|0|0|$$Q$$|$$\bar{Q}$$|
|0|1|1|0|
|1|0|0|1|

* Sequential equations

### Implementation using NAN gates


## Gated D latches

![gated-d-latch](https://upload.wikimedia.org/wikipedia/commons/e/e3/Transparent_Latch_Symbol.svg)

* Also known as transparent latch, data latch, or simply gated latch
* 2 modes of operation:
  - transparent mode or acquiring mode: the input on $$D$$ is copied onto the
    output $$Q$$
  - memory mode: the output keeps its value regardless of the value of $$D$$
* Transition table

|:-:|:-:|:-:|:-:|
|$$E$$|$$D$$|$$Q^+$$|$$Q^{*+}$$|
|0|0|$$Q$$|$$\bar{Q}$$|
|0|1|$$Q$$|$$\bar{Q}$$|
|1|0|0|1|
|1|1|1|0|

### Implementation using SR latches
### Implementation using a multiplexer
### Implementation with inverters and CMOS switches

## D flip-flop

## JK flip-flop


## Resources and references
* [Wikipedia article](https://en.wikipedia.org/wiki/Flip-flop_(electronics))
* [Wikiversity article](https://fr.wikiversity.org/wiki/Bascules_%C3%A9lectroniques)
