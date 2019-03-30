---
title:  "GDB cheatsheet"
topic: "reversing"
---

# Program execution control
* Resume execution: `c`
* Step instruction by entering the functions: `s`
* Step instruction without entering the functions: `n`
* Step out of function: `finish`


# Breakpoints
* Break on function: `b function_name`
* Break on function with source: `b file.c:function_name`
* `rbreak ^vuln[_]func$`
* List breakpoints: `info b`
* Clear breakpoint: `c function_name`


# Data analysis
* Print expression: `p [exp]`, `p $x1`
* Print *num* values of *tab*: `(p)rint [*tab@num]`
* Print as structure: `p (struct name*) $esp`
* Display the value of *exp* at each break: `display [exp]`
* Delete display: `undisplay [num]`
* Change variable: `set $eax = 2`
* Change memory: `set {int}0x83040 = 4`
* Set intel disassembly syntax: `set disassembly-flavor intel`
* Examine memory at $addr: `x /nfu addr`
	* n: Number of memory blocks
	* f: Display format. x for hexa, i for machine instruction, s for null terminated string
	* u: Unit size. b byte, h halfword (2 bytes), w word (4 bytes), g giant word (8 bytes)
* Show registers: `i r`
* Show execution: `where`
* Show last stack frame: `where 1`
* Show failing frame info: `info frame 0`
* Display executable sections: `main info sec`


# Misc
* QEMU gdb flag on localhost port 1234: `-s`
* Connect to target in GDB: `target remote localhost:1234`



# Program execution
* Open program
```
gdb ./vuln
gdb ./vuln ./core
gdb -c ./core
gdb -silent `pidof vuln`
```
* Load file: `file filename`:
* Run program: `r arg1`
* Set arguments: ```set args `python -c ...````
* Set environment variables: ``` set env PATH=`perl -e 'print "A" x 50000'` ```
* Follow process forking: `set follow-fork-mode {parent, child, ask}`
* Show disassembly: `disas`
* Show source listing: `list`
* Show source files read: `info source`
* Show functions: `info functions`
* Show file: `info file`


# TUI
ctrl-x o: Changes the focus
winheight name +count
winheight name -count
	layout src|regs
	Envar n: x/s *((char **)environ+n)

# Resources and references
* Using GDB to develop exploits - A basic run through by c0ntex
