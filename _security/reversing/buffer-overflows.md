---
title:  "Buffer overflows"
topic: "reversing"
---
# Binaries structure
*	Static variables: allocated at load time on the data segment
* Dynamic variables: allocated at run time on the stack
*	Little-endian: 0x11223344 is written in memory as 44332211
*	Storage of a string: terminated by a null byte: 0x00 != '0' (ASCII)
* Assembly for a C function call

![memory-map](/assets/binary-memory-map.svg)

![stack-layout](/assets/C-func-stack-layout-x86.svg)


# Stack based overflow
## Basic exploitation
* EIP overwrite
* NOP sled usage
* [Exploit wrapper in C](https://github.com/greglan/sec-tools/blob/master/shellcode_wrapper.c)
* [Bash script](https://github.com/greglan/sec-tools/blob/master/try_exploit.sh)

# Techniques
* ret2libc: used to defeat DEP protections. Use the code available in the libc to perfom desired actions
* ret2reg: use an address contained in a register and search for call instructions with that register
* ROP

![techniques](/assets/binary-exploitation-techniques.svg)

# Heap based overflow

# Resources and references
* [Azeria Labs heap exploitation tutorial](https://azeria-labs.com/heap-exploitation-part-1-understanding-the-glibc-heap-implementation/)
