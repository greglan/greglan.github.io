---
layout: page
title:  "x86 assembly cheatsheet"
permalink: "x86-assembly.html"
tags: [programming, architectures]
summary: "This page gives examples of some assembly programs. By default, the
syntax used is the NASM syntax. Unless stated otherwise, the target OS is Linux"
---

## Review of some instructions
```nasm
mov eax, 12     ; EAX = 12
mov eax, 110b   ; EAX = 0b110
mov eax, CD4h   ; EAX = 0xCD4

movzx eax, ax   ; Smaller register to bigger register


; movsx instructions: move memory blocks. Used with the rep instruction
; movsb : Move Byte
; movsw : Move Word (16 bits)
; movsd : Move DWord (32 bits)

; Example: move 1000 bytes. Three possibilities: move byte, word or double word at a time
; Move one byte at a time
mov cx, 1000
rep movsb       ; Move one byte. di = di + 1

; Move one word at a time
mov cx, 500
rep movsw       ; Move one word. di = di + 2

; Move one double word at a time
mov cx, 250
rep movsd       ; Move one double word. di = di + 4


; stosx instructions: store memory blocks. Similar to the stosx instructions, but uses the value of al/ax/eax as the source data
; al/ax/eax stored in es:di
; Example: set 10 bytes of es:di to 0
mov cx, 10
mov ax, 0
rep stosb


; Jumps
; Second hexadecimal code used for long jumps
; Syntax: [Hex code] [number of bytes to jump]
```

### Jump instructions

|Instruction| Meaning|
|:---------:|:--------:|
| JA | Jump if above (unsigned) |
| JG | Jump if greater (signed) |
| JG | Jump if less (signed) |
| JB | Jump if below (signed) |


## Hexadecimal encoding of some instructions

|Instruction|Hexdecimal|
|:---------:|:--------:|
| JNE | 0x75 or 0x00F85 |
| JNE | 0x74 or 0x0F84 |
| JMP | 0xEB or 0xE9 |
| TEST | 0x85 |
| XOR | 0x33 |
| NOP | 0x90 |
| PUSH | 0x68 |
| PUSH 0x76543210 | 0x6801325476 |



## Examples
### Makefile
```make
CFLAGS=-f elf32 -g# -F dwarf

all: test strlen

%: %.asm
	nasm $(CFLAGS) $^ -o $@.o
	ld -m elf_i386 -o $@ $@.o

clean:
	rm *.o

```

### NASM directives
```nasm
%include "file.asm" ; Include a file

; Directives for the data segment only
; dX: allocate memory and set initial value of data
; resX: allocate memory for data
; Possible values for X:  b (byte), w (word), d (double word), q (quad word), t (ten bytes)
; dd:   can be used for both integer and SPFP (Single Precision Floating Point, same as C float) constants
; dq:   only for double precision floating point constants
section .data
    B1: db 0        ; Byte labeled B1 with initial value 0
    B2: db 110101b  ; Byte initialized to binary 110101 (53 in decimal)
    B3: db 12h      ; Byte initialized to hex 12 (18 in decimal)
    B4: db 17o      ; Byte initialized to octal 17 (15 in decimal)
    B5: db "A"      ; ASCII code 65
    B6: db 'B'      ; Single quote or double quote

    A1: db 0,1,2,3  ; Array of 4 bytes
    S1: db 'T','e','s','t',0    ; String example
    S2: db 'Hello world!',10,0  ; 'Hello world!' plus a linefeed character
    length:  equ $-S2           ; Length of the previous string

    R1: resb 1          ; One uninitialized byte
    R2: resw 100        ; Reserve 100 words
    R3: times 100 db 0  ; 100 bytes initialized to 0


section .text
global _start

_start:
    ; equ directive syntax: symbol equ value
    test_equ equ 0x1
    ; Symbols cannot be redefined later

    ; %define directive
    ; Similar to C #define. Commonly used for defining constant macros like in C
    ; Can be redefined later
    %define SIZE 100
    mov eax, SIZE
```


### System write
```nasm
section .data
    str:      db 'Test',0xa    ; 'Test' plus a linefeed character
    str_len:  equ $-hello      ; Length of the string

section .text
global _start

_start:
    mov eax, 4          ; The system call for write (sys_write)
    mov ebx, 1          ; File descriptor 1 - standard output
    mov ecx, str        ; Put the offset of str in ecx
    mov edx, str_len    ; str_len is a constant, so we don't need something like
                        ; mov edx,[str_len] to get it's actual value
    int 80h             ; Call the kernel

    mov eax, 1          ; The system call for exit (sys_exit)
    mov ebx, 0          ; Exit with return code of 0 (no error)
    int 80h
```

### Arguments
```nasm
section .text
global _start

_start:
	pop	eax		; Get the number of arguments (argc)
	pop	eax		; Get the program name (argv[0])
	pop	eax		; Get the first actual argument (argv[1])
	pop	eax		; Argument 2 (argv[2])

	mov	eax, 1
	mov	ebx, 0
	int	80h		; Exit
```


## Resources and references
* [Intel x86 architecture](/x86.html)

### Linux syscalls
* [List of syscalls number](https://faculty.nps.edu/cseagle/assembly/sys_call.html)
* [Prototype and explanation of each syscall](https://linuxhint.com/list_of_linux_syscalls)
* [A technical view of syscalls](https://blog.packagecloud.io/eng/2016/04/05/the-definitive-guide-to-linux-system-calls/)

### Instructions cheatsheets
* [A pretty good AT&T syntax cheatsheet](http://tuttlem.github.io/2014/03/25/assembly-syntax-intel-at-t.html)
* [Move string instructions](http://faculty.kfupm.edu.sa/COE/aimane/assembly/pagegen.aspx-ThemeID=1&m185_20.htm)
* [MUL and DIV instructions](https://www.tutorialspoint.com/assembly_programming/assembly_arithmetic_instructions.htm)
* [ROR instruction](https://www.aldeid.com/wiki/X86-assembly/Instructions/ror)
* [Jump instructions](https://faydoc.tripod.com/cpu/jns.htm)
* [`repe scasb` to implememt the memchr function](https://stackoverflow.com/questions/58121065/im-trying-to-understand-the-rep-scasb-byte-edi-instruction)