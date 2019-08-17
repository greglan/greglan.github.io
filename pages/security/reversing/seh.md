---
layout: page
title:  "Structured Exception Handlers (SEH)"
permalink: "seh.html"
tags: [security, reversing]
summary: ""
---

* Default SEH: prints *"The application has encountered a problem and needs to close"*
* Unhandled errors redirected to the default SEH.
* Exception handling stack layout:

![stack-layout](/images/seh.svg)


* Every frame has its own exception handler on the stack
* SEH record:
  - pointer to the next SEH record ~ SEH record in previous stack frame
  - pointer to the exception handler
* Last record:
  - 0xffffffff
  - Pointer to the default exception handler (`MSVCRT!exhandler`)
* TEB/TIB in `main()`'s function data: `mov dword ptr fs:[0], esp`
* Since Windows XP SP1: registers XORed before call to exception handler
* SafeSEH: implemented since Windows XP SP2 and Windows Server 2003


## Resources and references
* [SafeSEH flag](https://docs.microsoft.com/en-us/cpp/build/reference/safeseh-image-has-safe-exception-handlers?view=vs-2017)
* [SafeSEH inner workings](https://reverseengineering.stackexchange.com/questions/11297/how-does-windows-safeseh-mechanism-work)
* [SafeSEH](https://scx010c075.blogspot.com/2012/02/more-about-seh-and-safeseh.html)
* [Wikipedia article](https://en.wikipedia.org/wiki/Microsoft-specific_exception_handling_mechanisms)
