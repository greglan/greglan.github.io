---
layout: page
title:  "FPGA devices"
permalink: "fpga.html"
summary: "A introduction to FPGAs"
---

## Introduction
* FPGA: Field Programmable Gate Array
* VHDL: Very High Speed Description Language
* Two big companies: Xilinx vs Altera
* Modelsim: allows to simulate a design (see waveforms)

  Xilinx ISE, Vivado: allow to implement a design on a specific FPGA
* Core license vs architectural license
* ASIC vs FPGA: FPGA advantage/disadvantage

## Components
* DSP cores: can provide multipliers and multiplier accumulate (implements
  *ab+c*).
* Slices, CLBs, IOBs
* CLB: Configurable Logic Blocks. Implement the logic
* LUT: Look Up Table. Also called *Function Generators* (FGs)

  Capacity limited by the number of inputs, not by the complexity
* *Fast Carry Logic*: provides simple and fast arithmetic logic
* *MULT_AND Gate*: provides efficient multiply and add implementation
* FF: Flip-Flop. Can also be used as latches
* DCM blocks: Digital Clock Management


## Resources and references
* [An introductory course in VHDL](https://seis.bristol.ac.uk/~eeidbp/courses/ECAD/index.htm)
* [Tutorialspoint page](https://www.tutorialspoint.com/vlsi_design/index.htm)
* [A lot of examples of VHDL codes](http://esd.cs.ucr.edu/labs/tutorial/)
* [A guide to testbenches in VHDL](https://vhdlguide.readthedocs.io/en/latest/vhdl/testbench.html)
* [Generics in VHDL](https://www.nandland.com/vhdl/examples/example-generic.html)