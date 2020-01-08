---
layout: page
title:  "Generalities"
permalink: "architecture-generalities.html"
tags: [architectures]
summary: "Various information about computer architectures"
---


## Memory
* Level 1 cache: instruction cache + data cache
* Direct map: tag bit (higher address bits), dirty and valid bits
  
  Problem: if the data keps growing, cache becomes inneffective
* Associative caches: any line of memory can go anywhere in the cache. Still has the same bits, but bigger because we need the entire address
* LRU: Least Recently Used. Not a good technique, random choice is preferred
* Hybrid scheme: Set Associative
* Cache coherency: if data cached in L2, another CPU may not see that change unless it is reflected to L3.
  
  Potential fix: write-through, i.e update the value in all the caches. However, increases the cache trafic
* SCU: Snoop Control unit: chech data bus for its own address space in caches. used in multicore systems to ensure cache coherency

## Trends
* Moore's law evolution: twice as much transistors every 3 years
  
  20-30 billion transistors today
* Main limits preventing the original Moore's Law:
  - clock speed plateau (since 2003)
  - power ceiling (since 2003)
  - instruction level parallelism (since 2000)
* Current evolution of memory:
  - capacity: ~49% per annum and potentially slowing down
  - bandwidth: ~30% per annum and potentially slowing down
  - latency: very small compared to memory bandwidth increase
* Clock speeds can't keep going up, same for parallel computing (not enough instructions to execute in parallel)
* Transistor count is increasing faster than memory. Bandwidth and latency us also not increasing as much
* Power consumption dependence parameters [1, p10]:
  - clock frequency
  - number of transitors (chip area) and as a consequence the number of cores
  - $$V^2$$ with $$V$$ voltage
  
  Power limit before advanced cooling techniques (e.g watercooling): 100W
  
  Voltage is almost as low as it can go already: 0.7 V threshold
  
  CPU power kept doubling, but now there is an upper bound: power can't increase anymore
* The only thing we can work on is adding more cores
* Transistor counts will continue to rise, creating challenges for architects and programmers [1, p20]
* Expecting to see continued growth in on-chip parallelism, and in the depths of memory hierarchies [1, p20]
  
  Reason for the move from CISC to RISC: easier to spot dependencies in pipelines
* Expecting increasing heterogeneity: a few heavyweight (CPU) cores and many lightweight (GPU) cores [1, p20]

  But core designs will roughly stay the same or get simpler

  Examples: mobile phones
* CPU architectures predictions:
  - clock speeds will tend to decrease
  - memory bandwidth per core will tend to decrease
  - memory per core will tend to decrease
* GPU evolution [1, p18]
  - mid 90's: fast and cheap but fixed function
  - 2003: first programmable GPUs (vertex and pixel shaders)
  - 2006: dropped almost all fixed-functionality and became programmable in dialects of C (Cg, CUDA, Brook, ...)
  - 2009: first GPUS with significant non-graphics design goals (*Fermi* from Nvidia)
* Comparison with specialized designs [1, p19]:
  - FPGA: ~x10 gains in both power efficiency and performances over CPUs/GPUs
  - ASIC: x10-x$$\text{10}^3$$ additional gains over FPGAs

 
### Machine learning architectures
Reference: openai website, Jeff Dean (arxiv)
* NPU: Neural Processing Unit

#### ML worload characteristics
* Sparsity: high dimensionnal graphs encoded in sparse matrices
* Low precision needed: only 8-bits integers, hal-precision floats
* Use of randomness, transcendentals mathematical functions
* Escalating memory and compute requirements
* Many types of parallelism required

#### Common ML oriented CPUs
* Nvidia Volta: 815 mm^2. Very big, almost the biggest thing we can make
* Google TPU v1: first custom chip for ML. Inference only (make predictions only, doesn't perform trainin)
* Google TPU v2/v3: can do inference and training 



## Branches ?
* Branch predictors are being worked on a lot in modern CPUs. See caching branches (move that to branch page ?)
* Question to answer when choosing branc hprediction shcemes: where does an optimization work well, and where it does not ?

## References
* [1] *Simon McIntosh-Smith*, Chip trends lecture