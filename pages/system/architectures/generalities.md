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
* CPU power kept doubling. 100W is the limit beyond wihch we need watercooling or other techniques
* Clock speeds can't keep going up, same for parallel computing (not enough instructions to execute in parallel)
* Transistor count is increasing faster than memory. bandwidth and latency us also not increasing as much
* Voltage is almost as low as it can go. Power proportionnal to $$V^2$$
* The only thing we can work on is adding more cores
* GPU got more programmable
* Reason for the move from CISC to RISC: easier to spot dependencies in pipelines
* NPU: Neural Processing Unit

### Machine learning architectures
Reference: openai website, Jeff Dean (arxiv)

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