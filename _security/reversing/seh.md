---
title:  "SEH"
topic: "reversing"
---
* Default SEH: prints *"The application has encountered a problem and need to close"*
* Unhandled errors redirected to the default SEH.
* Exception handling stack layout:

![stack-layout](/assets/seh.svg)


* Every frame has its own exception handler on the stack
* SEH record:
  - pointer to the next SEH record ~ SEH record in previous stack frame
  - pointer to the exception handler
* Last record:
  - 0xffffffff
  - Pointer to the default exception handler (`MSVCRT!exhandler`)
* TEB/TIB in `main()`'s function data: `mov dword ptr fs:[0], esp`
* Since Windows XP SP1: registers XORed before call to exception handler
