---
layout: page
title:  "Anti debugging techniques"
permalink: "anti-debugging.html"
tags: [security, reversing]
summary: "A review of common anti-debugging techniques"
---

## Windows API functions
* `IsDebuggerPresent`: searches the *PEB* for the `IsDebugged` field. Non-zero
  value returned if a debugger is present
* `CheckRemoteDebuggerPresent`: similar to `IsDebuggerPresent` in its operation,
  but can be used to test any local process.
  Takes a process handle as parameter.
* `NtQueryInformationProcess`: function from *NTDLL.dll*. First parameter:
  process handle. Second parameter indicates the type of information to
  retrieve. For the value `ProcessDebugPort=0x7`, a non-zero value is
  returned if a debugger present.
* `OutputDebugString`: used to send a string to a debugger. Sample code:

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

  In particular, the third byte `BeingDebugged` indicates the presence of a
  debugger
* Sample codes:

```nasm
mov eax, dword ptr fs:[30h]
mov ebx, byte ptr [eax+2]
test ebx, ebx
jz NoDebuggerPresent
```

```nasm
push dword ptr fs:[30h]
pop edx
cmp byte ptr [edx+2], 1
je DebuggerPresent
```

* Can be accessed by `fs:[0x30]`
* `BeingDebugged` field can be automatically hidden with *Hide Debugger,
  Hidedebug and PhantOm* plugins for OllyDbg



## ProcessHeap flag
* First heap created in a PE contains a header with the fields `ForceFlags` and
  `Flags`.

  They are used by the kernel to determine if the heap was created within a
  debugger

  `Flags` usually equal to `ForceFlags` but ORed with *0x02*
* Sample code:
```nasm
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
```nasm
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



## INT scans
* `INT 3` (*0xCC*) used by debuggers for software breakpoints.

  Works by replacing the running instruction and call the debug exception
  handler.
* `INT immediate` (*0xCD value/register*) can also be used, but less frequent
* Sample code for scanning the program for *0xCC* bytes at startup:
```nasm
call $+5
pop edi     ; Puts EIP in EDI
sub edi, 5  ; Adjustt EIP to point to the beginning of the code (call instruction)
mov ecx, 400h
mov eax, 0CCh   ; Opcode to look for: INT 3
repne scasb     ; Byte per byte
jz DebuggerDetected
```
* Can be defeated by hardware breakpoints, execution flow modification or patching



## Cheksums
* Usually performed on a section of code
* Less common than INT scans
* Checksums: CRC or MD5. Pattern: loop over the instructions ended by a
  comparison with an expected value
* Can be defeated by hardware breakpoints, execution flow modification or patching



## Timing checks
* Most popular way of detecting a debugger
* Works by recording two timestamps and comparing them
* Possible to raise exceptions between two timestamps
* `rdtsc` (opcode *0x0F31*) returns the number of ticks since the last system
  reboot as 64 bits in `EDX:EAX`

```nasm
rdtsc           ; Get first timestamp
xor ecx, ecx
add ecx, eax    ; Save first timestamp in ecx

rdtsc           ; Get second timestamp
sub eax, ecx    ; Number of ticks elapsed in eax

cmp eax, 0x0fff  ; if (eax < 0x0fff)
jb NoDebugger

rdtsc
push eax        ; Push a random value
ret             ; and return to it
```
* `QueryPerformanceCounter` query the high-resolution performance counters twice
  to get a time difference
* `GetTickCount` returns the number of milliseconds that have elapsed since the
  last reboot
* Can be defeated by not single-stepping/using breakpoints near the timing
  checks. Else, alter execution flow manually or patch



## TLS callbacks
* TLS: *Thread Local Storage*. Windows storage class local to each thread which
  doesn't use the stack.

  Allows callback functions to initialize/dispose of TLS objects
* Can be used to execute code before the main EP defined in the PE header; so can
  be missed by debuggers.
* When TLS used, presence of a `.tls` section. Normal programs do not use this
  section, so strong indicator. As a consequence, less and less used by malware
* Using IDA: CTRL+E to display all the possible entrypoints
* Debuggers can be setup to pause at TLS callbacks (OllyDbg: go to debugging
  events and select *Make first pause at system breakpoint*)


## Resources and references
* *Practical Malware Analysis*, Chapter 16
* [A list of techniques from the Unprotect project](https://search.unprotect.it/category/anti-debugging/)
* [Anti-debugging protection techniques with examples](https://www.apriorit.com/dev-blog/367-anti-reverse-engineering-protection-techniques-to-use-before-releasing-software)
* [Anti-debugging techniques on Windows with ASM source](https://github.com/invictus1306/Anti-debugging-techniques)
* [Anti-debugging with ptrace](https://www.aldeid.com/wiki/Ptrace-anti-debugging)
* [Two solutions to ptrace anti-debug](https://aaronyoo.github.io/ptrace-anti-debug.html)
* [Software vs hardware breakpoints](http://www.nynaeve.net/?p=80)
* [Software vs hardware breakpoints and how to detect HW breakpoints](https://reverseengineering.stackexchange.com/questions/16544/detecting-hardware-breakpoints/16547#16547)