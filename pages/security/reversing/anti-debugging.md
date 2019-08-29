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


## ProcessHeap flag
* First heap created in a PE contains a header with the fields *ForceFlags* and
  *Flags*.

  They are used by the kernel to determine if the heap was created within a
  debugger

  *Flags* usually equal to *ForceFlags* but ORed with *0x02*
* Sample code:
```asm
mov eax, large fs:30h
mov eax, dword ptr [eax + 18h]
cmp dword ptr ds:[eax + 10h], 0  ; ForceFlags on Windows XP
cmp dword ptr ds:[eax + 44h], 0  ; ForceFlags on Windows 7 for 32 bits apps
cmp dword ptr ds:[eax + 0Ch], 0  ; Flags on Windows XP
cmp dword ptr ds:[eax + 40h], 0  ; Flags on Windows 7
jne Debugger Detected
```
* Can be defeated with plugins, or by disabling debug heaps in WinDbg

## NtGlobalFlag
* Heaps created by a program started by a debugger are different
* Sample code:
```asm
mov eax, large fs:30h               ; Get the PEB
cmp dword ptr ds:[eax+68h], 70h     ; Check offset 0x68 of the PEB
jz debuggerDetected
```
* Debug heaps can be disabled in WinDbg, or with plugins for other debuggers

## System residues
* Registry key `HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\
  AeDebug` specifies the default debugger to open when a crash occurs

  Default value: `Dr. Watson`. A change can indicate the presence of debugging
  tools
* Search for an open window named "OLLYDBG":
```C
if (FindWindow("OLLYDBG", 0) == NULL)
    // No debugger
else
    // Debugger
```
* Files, directoris and paths of common debuggers can be found by browsing the
  filesystem
* A process listing can reveal the presence of a debugger

## Resources and references
* *Practical Malware Analysis*, Chapter 16
* [Anti-debugging with ptrace](https://www.aldeid.com/wiki/Ptrace-anti-debugging)
* [Two solutions to ptrace anti-debug](https://aaronyoo.github.io/ptrace-anti-debug.html)
