---
layout: page
title:  "Radare2 cheatsheet"
permalink: "radare2.html"
tags: [security, reversing]
summary: ""
---
## Information collection
* Binary type: `rabin2 -I filename`
* Entrypoint: `ie`
* List functions: `afl`

## Flags
### Strings
* List string in data section: `iz`
* List strings from the whole binary: `izz`
* Search references to strings, assuming the string flag space is selected:
  `axt @@ str.*`

### Other
* Show flag spaces: `fs`
* Select flag space: `fs flag_space_name`
* List flag in current flagspace: `f`


## Debugging
* Commands start with `d`
* Open a file with debugging enabled: `r2 -d file.bin`
* Reopen file in debug mode with args: `ood`
* Special visual debugging mode: `V!`, `Vpp`
* Step into: `F7`
* Start/continue: `F9`

## Variables
* Show function variables: `afvd`
* Rename function variable: `afvn new_name old_name`

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


## Others
* Save project: `Ps name`
* Open project: `Po name`
