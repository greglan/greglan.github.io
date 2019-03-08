---
title:  "Text manipulation cheatsheet"
topic: "linux"
tags: linux
---

# Grep
* Usage: `grep -A n -B m -i expr file` with
    * -A: number of lines after match
    * -B: number of lines before match
    * -i: ignore case
* Special chars:
    * replace one char: `?`
    * Chars 'A', '1' or 'x': `[A1x]`
    * Chars from 'a' to 'z': `[a-z]`
    * Strings "ab" or "ac": `{ab,ac}`

# SED
In each command, we skip precising the input file for clarity.

## Basics
* Replace: sed 's/pattern1/pattern2/'
* -i flag: edit files in place

## File spacing
* Insert a blank line between existing lines: `sed G`
* Remove blank lines (opposite of preceding): `sed 'n;d'`
* Insert a blank line above every line which matches "regex": `sed '/regex/{x;p;x;}'`
* Insert a blank line below every line which matches "regex": `sed '/regex/G'`
* Insert a blank line above and below every line which matches "regex": `sed '/regex/{x;p;x;G;}'`

# Other
* Replace 'a' char by 'b' and output the result on stdout: `tr 'a' 'b' < input.txt`
* [cut examples](https://www.thegeekstuff.com/2013/06/cut-command-examples/)
