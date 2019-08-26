---
layout: page
title:  "Anti debugging techniques"
permalink: "anti-debugging.html"
tags: [security, reversing]
summary: "A review of common anti-debugging techniques"
---

## Windows API functions
* *IsDebuggerPresent*: searches the *PEB* for the *IsDebugged* field. Non-zero
  value returned if a debugger is present
* *CheckRemoteDebuggerPresent*: similar to *IsDebuggerPresent* in its operation,
  but can be used to test any local process.
  Takes a process handle as parameter.
* *NtQueryInformationProcess*: function from *NTDLL.dll*. First parameter:
  process handle. Second parameter indicates the type of information to
  retrieve. For the value *ProcessDebugPort=0x7*, a non-zero value is
  returned if a debugger present.
* *OutputDebugString*: used to send a string to a debugger. Sample code:

```C
DWORD errorValue = 12345;
SetLastError(errorValue); // Manually set the error value

OutputDebugString("Test for Debugger"); // If no debugger present, new error

if(GetLastError() == errorValue) // Value did not change, so a debugger was present
  ExitProcess();
else // Value changed because no debugger was present
  RunMaliciousPayload();
```

## Checking the PEB
* One *PEB* per running process
* Contains the process' environment data (envar..., loaded modules, debugger
  status...)

  In particular, the third byte *BeingDebugged* indicates the presence of a
  debugger
* Sample codes:

```asm
mov eax, dword ptr fs:[30h]
mov ebx, byte ptr [eax+2]
test ebx, ebx
jz NoDebuggerPresent
```

```asm
push dword ptr fs:[30h]
pop edx
cmp byte ptr [edx+2], 1
je DebuggerPresent
```

* Can be accessed by `fs:[0x30]`
* *BeingDebugged* field can be automatically hidden with *Hide Debugger,
  Hidedebug and PhantOm* plugins for OllyDbg

## Resources and references
* *Practical Malware Analysis*, Chapter 16
* [Anti-debugging with ptrace](https://www.aldeid.com/wiki/Ptrace-anti-debugging)
* [Two solutions to ptrace anti-debug](https://aaronyoo.github.io/ptrace-anti-debug.html)
