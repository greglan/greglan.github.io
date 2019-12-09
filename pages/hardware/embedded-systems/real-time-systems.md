---
layout: page
title:  "Real time systems"
permalink: "real-time-systems.html"
tags: [hardware, embedded]
summary: "An intoduction to real time systems such as interrupts vs polling and RTOS usages"
---

* Soft real time: missing deadlines decreases the value of the result, but still acceptable
* Firm real time: missing deadlines is bad but acceptable. Causes only a minor disruption in the system functionality
* Hard real time: missing deadliens is not acceptable and result in the system being useless

## Interrupts and polling

## RTOS
### Examples of RTOS
* Elevator by OTIS: Green Hills Software's MULTI IDE
* ATM machine by NCR: Windows IoT
* Printer HP Inkjet: ThreadX RTOS
* Volkswagen: RTOS by OSEK/VDX (a standard in most of the automotive industry)
* Other devices: smarwatches, smart TVs, microwaves...
* Other RTOS: eCos, embOS, LynxOS, MicroC/OS-II, Nucleus RTOS, QNX, RTLinux...

### RTOS usage
* Concurrency: when we need to execute two tasks simultaneously with a single CPU.
  
  Must be able to switch back and forth between tasks so that each task can be executed in a few cycles before moving to other tasks
* Pre-emption: need for a priority-based execution of tasks. 
* Real-time deadlines: ability to order task execution to achieve a given speed of execution for specific tasks (related to the ability to do pre-emption)

### Scheduling
* Round-robin scheduling
* Priority scheduling