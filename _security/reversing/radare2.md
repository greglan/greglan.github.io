---
title:  "Radare2 cheatsheet"
topic: "reversing"
---
# Debugging
* Commands start with `d`
* Open a file with debugging enabled: `r2 -d file.bin`
* Reopen file in debug mode with args: `ood`
* Special visual debugging mode: `V!`, `Vpp`
* Step into: `F7`
* Start/continue: `F9`

# Variables
* Show function variables: `afvd`
* Rename function variable: `afvn new_name old_name`

# Project
* Save project: `Ps name`
* Open project: `Po name`


# Others
* Change theme in visual mode: `R`
