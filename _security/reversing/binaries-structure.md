---
title:  "Binaries structure"
topic: "reversing"
---

* Static variables: allocated at load time on the data segment
* Dynamic variables: allocated at run time on the stack
* Little-endian: 0x11223344 is written in memory as 44332211
* Storage of a string: terminated by a null byte: 0x00 != '0' (ASCII)
* Assembly for a C function call

![memory-map](/assets/binary-memory-map.svg)

![stack-layout](/assets/C-func-stack-layout-x86.svg)

## Resources and references
