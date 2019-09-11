---
layout: page
title:  "Process hollowing"
permalink: "process-hollowing.html"
tags: [security, reversing]
summary: "Study of the RunPE injection technique"
---

## Introduction
* Also known as *RunPE* and *process replacement*
* Overwrite the memory space of a running process with a malicious executable
* Disguise malware as a legitimate process
* Provides the same privileges as the process it is replacing
* Can bypass firewall and IPS systems

## Principle
* Create a process in a suspended state with `CREATE_SUSPENDED` in the
  `dwCreationFlags` parameter of `CreateProcess`
* Once the process is created, release all memory with `ZwUnmapViewOfSection`
* Allocate new memory for each section (`VirtualAllocEx`) and write to them
  (`WriteProcessMemory`)

  Usually performed in a loop over all sections
* Restore the process environment and indicate the EP with `SetThreadContext`
* Resume the process with `ResumeThread`

## Detection
* [Process hollowing detection using volatility](https://www.andreafortuna.org/2017/10/09/understanding-process-hollowing/)

## Resources and references
* [1] *Practical Malware Analysis*, Chapter 12, Process replacement
* [Process hallowing and detection](https://resources.infosecinstitute.com/process-hallowing/)
* [Trustwave post on process hollowing](https://www.trustwave.com/en-us/resources/blogs/spiderlabs-blog/analyzing-malware-hollow-processes/)
* [Process hollowing tutorial](https://medium.com/@jain.sm/process-hollowing-930b30452279)
* [Process hollowing POC](https://github.com/m0n0ph1/Process-Hollowing)
* [RunPE technique](https://www.adlice.com/runpe-hide-code-behind-legit-process/)
* [Detection by AV](https://security.stackexchange.com/questions/187049/why-can-runpe-injection-bypass-antivirus-software)
* [RunPE code](https://github.com/Zer0Mem0ry/RunPE/blob/master/RunPE.cpp)
* [Injection techniques](https://www.endgame.com/blog/technical-blog/ten-process-injection-techniques-technical-survey-common-and-trending-process)
