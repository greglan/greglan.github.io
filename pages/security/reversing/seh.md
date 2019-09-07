---
layout: page
title:  "Structured Exception Handlers (SEH)"
permalink: "seh.html"
tags: [security, reversing, windows]
summary: "Presentation of the SEH mechanism on Windows"
---

## Introduction
* SEH: designed to handle software and hardware exceptions in Windows
* SEH chain: list of functions designed to handle exceptions within the thread [4]
* Default SEH: prints *"The application has encountered a problem and needs to
  close"*.

  Used if no handler left in the SEH chain


## Internals
* SEH chain: linked list of `_EXCEPTION_REGISTRATION` structures (SEH record)
```C
struct _EXCEPTION_REGISTRATION_RECORD {
    struct _EXCEPTION_REGISTRATION_RECORD* prev;    // DWORD pointer to the next SEH record
    DWORD handler;                                  // Pointer to the exception handler
}
```
* Last record:
  - prev = 0xffffffff
  - Pointer to the default exception handler (`MSVCRT!exhandler`)
* Every frame has its own exception handler on the stack
* *FS* segment register used to access the *Thread Environment Block (TEB)*.

  First structure in the *TEB*: *Thread Information Block (TIB)*.

  First element of the *TIB*: pointer to the SEH chain
* Pointer to the top handler (in a stack-like view) of the SEH chain: `fs:[0]`
  for 32 bits and `gs:[0]` for 64 bits
* *TEB/TIB* setup in `main()`: `mov dword ptr fs:[0], esp`
* Add a record at the top of the chain [1]:
```nasm
push ExceptionHandler
push fs:[0] ; Pointer to the previous handler
mov fs:[0], esp ; Insert the new handler on the top of the chain
```
* Remove custom handler: need to remove two handler because one is automatically
  added by the OS [1]
```nasm
mov esp, [esp+8]
mov eax, fs:[0]
mov eax, [eax]
mov eax, [eax]
mov fs:[0], eax
add esp, 8
```
* `except_handler`: user-defined callback function invoked by the OS

```C
EXCEPTION_DISPOSITION _cdecl _except_handler
(
    struct _EXCEPTION_RECORD*   _ExceptionRecord,   // Information about the exception (exception number, address where it occurred...)
    void*                       _EstablisherFrame,  // Adress of the exception record
    struct _CONTEXT*            _ContextRecord,     // CPU registers when exception occurred
    void*                       _DispatcherContext
);
```

![seh-chain](/images/seh.svg)

## SafeSEH
* Since Windows XP SP1: registers XORed before call to exception handler
* SafeSEH: implemented since Windows XP SP2 and Windows Server 2003 [3]
* Prevents the addition of third-party exception handlers at runtime.
* Adds a table indicating the safe handler functions to the OS. [2]
* Can be disabled by some assemblers, such as Microsoft's C compiler with the
  `/SAFESEH:NO` flag to the linker [2]


## Resources and references
* [1] *Practical Malware Analysis*, Chapter 15: Misusing Structured Exception Handlers
* [[2] SafeSEH flag](https://docs.microsoft.com/en-us/cpp/build/reference/safeseh-image-has-safe-exception-handlers?view=vs-2017)
* [[3] SafeSEH](https://scx010c075.blogspot.com/2012/02/more-about-seh-and-safeseh.html)
* [[4] Wikipedia article](https://en.wikipedia.org/wiki/Microsoft-specific_exception_handling_mechanisms)
* [[5] How SafeSEH works](https://reverseengineering.stackexchange.com/questions/11297/how-does-windows-safeseh-mechanism-work)
* [[6] Article on how SEH works](https://sploitfun.blogspot.com/2012/08/seh-exploit-part1.html)
