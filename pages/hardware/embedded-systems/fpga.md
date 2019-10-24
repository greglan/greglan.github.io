---
layout: page
title:  "FPGA devices"
permalink: "fpga.html"
summary: "A introduction to FPGAs"
---

## Introduction
* FPGA: Field Programmable Gate Array
* VHDL: Very High Speed Description Language


## Components
* DSP cores: can provide multipliers and multiplier accumulate (implements
  *ab+c*). 
* Slices, CLBs, IOBs
* CLB: Configurable Logic Blocks. Implement the logic
* LUT: Look Up Table. Also called *Function Generators* (FGs)

  Capacity limited by the number of inputs, not by the complexity
* *Fast Carry Logic*: provides simple and fast arithmetic logic
* *MULT_AND Gate*: provides efficient multiply and add implmentation
* FF: Flip-Flop. Can also be used as latches
* DCM blocks: Digital Clock Management


## Resources and references
* [[1] A introductory course in VHDL](https://seis.bristol.ac.uk/~eeidbp/courses/ECAD/index.htm)
