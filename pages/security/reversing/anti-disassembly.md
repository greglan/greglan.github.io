---
layout: page
title:  "Anti disassembly techniques"
permalink: "anti-disassembly.html"
tags: [security, reversing]
summary: "This article presents some techniques used to prevent a disassembler from showing 'relevant' code to the reverser"
---

## Linear vs flow-oriented disassembly
* Linear disassembly: iterate over a block of code by disassembling one instruction at a time. Next instruction determined by the size of the last disassembled instruction
* Flow oriented disassembly: the disassembler tries to follow the program's execution flow to only disassemble the relevant part of the program

## Jump instructions with the same target
![jmp-same-target](/images/jmp-same-target.svg)

## Unconditional conditional jump
![jmp-unconditional-conditional](/images/jmp-unconditional-conditional.svg)

## Impossible disassemblies
![impossible-disassembly-1](/images/impossible-disassembly-1.svg)

![impossible-disassembly-2](/images/impossible-disassembly-2.svg)


## Return pointer
```nasm
0xc0: call $+5
0xC5: add [esp], 5
0xC9: retn
; End of IDA analysis
0xCA: push ebp
0xCB: mov ebp, esp
0xCD: mov eax, [ebp+8]
0xD0: imul eax, 0x2a
0xD3: mov esp, ebp
0xD5: pop ebp
0xD6: retn
```

## SEH
* See the [SEH page](/seh.html) for more information
* Principle: setup a custom handler and raise an exception to return to it
* Add a record at the top of the chain
```nasm
push ExceptionHandler
push fs:[0]
mov fs:[0], esp
```
* Remove custom handler: need to remove two handler because one is automatically added by the OS
```nasm
mov esp, [esp+8]
mov eax, fs:[0]
mov eax, [eax]
mov eax, [eax]
mov fs:[0], eax
add esp, 8
```

## Stack-frame analysis
```nasm
  cmp esp, 0x1000 ; Always greater-than: lowest memory page in Windows is not used as the stack
  jl branch_one ; Jump not taken, but analyzed first
  add esp, 4 ; Real stack offset
  jmp short normal_code
branch_one:
  add esp, 0x100 ; Thwart stack-frame analysis algorithm using a large offset
normal_code:
  ...
  retn
```

## Tricks
* Patch bytes into NOPs using `PatchByte(0x11223344, 0x90)` in IDA

## Resources and references
* Practical Malware Analysis, Chapter 15
