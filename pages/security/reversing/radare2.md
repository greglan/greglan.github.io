---
layout: page
title:  "Radare2 cheatsheet"
permalink: "radare2.html"
tags: [security, reversing]
summary: ""
---


## Normal mode
* Comment: `CC`
* Find references to address: `axt [addr]`

  Alternative: print disassembly at the address, and r2 may automatically add XREFs labels
* Print 10 lines of disassembly from current location: `pd 10$$`
  
  Print 10 lines of disassembly from this address: `pdf 10@0xdeadbeef`
* Disassemble function: `pdf, pdf @sym.function, pdf @0xdeadbeef`
* Show function variables: `afvd`
  
  Rename function variable: `afvn new_name old_name`
* Show function call graph: `agc`

### Utils
* Grep output of command: `command~pattern`
* Show different representation of a number: `? 0xdeadbeef`
* Perform simple arithmetics: `? 0x10 + 6`

### Configuration and management
* Save project: `Ps name`
* Open project: `Po name`
* Configure variables in visual mode: `Ve`
* List the possible values for the variable `var`: `e var =?`
* Display arguments value in functions: `e dbg.funcarg = true`


## Information collection
* Binary type: `rabin2 -I filename`
* Entrypoint: `ie`
* Imports: `ii`
* List functions: `afl`
* Print value as binary: `?b 0xff`

### Flags
* Show flag spaces: `fs`
* Select flag space: `fs flag_space_name`
* List flag in current flagspace: `f`
* List string in data section: `iz`
* List strings from the whole binary: `izz`
* Search references to strings, assuming the string flag space is selected:
  `axt @@ str.*`


## Debugging
* Commands start with `d`
* Open a file with debugging enabled: `r2 -d file.bin`
* Reopen file in debug mode with args: `ood`
* Special visual debugging mode: `V!`, `Vpp`
* Step into: `F7`
* Start/continue: `F9`


## Visual mode
### Simple mode
* Enter visual mode: `V`
* Navigate between visual modes: `p/P`
* References to current line: `x`
* References from current line: `X`
* Follow jump/call: `Enter`
* Comment: `;[-]comment`
* Make mark (shortcut to address): `m<key>`
* Goto mark: `'<key>`
* Update variables name: select var, then 'd' and then 'n'

### Graph mode
* Change theme: `R`
* Jump to function: `g`


## Resources and references
* [Official radare2 book](https://book.rada.re/index.html)