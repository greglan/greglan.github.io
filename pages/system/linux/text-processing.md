---
layout: page
title:  "Text processing cheatsheet"
permalink: "text-processing.html"
tags: [linux]
summary: "A cheatsheet for processing text in Linux systems"
---


## Grep
* Usage: `grep -A n -B m -i expr file` with
    * -A: number of lines after match
    * -B: number of lines before match
    * -i: ignore case
* Special chars:
    * replace one char: `?`
    * Chars 'A', '1' or 'x': `[A1x]`
    * Chars from 'a' to 'z': `[a-z]`
    * Strings "ab" or "ac": `{ab,ac}`
* Examples:
    * Remove all blank lines: `grep -v -e "^$"`

## SED
In each command, we skip precising the input file for clarity.

### Basics
* Replace: sed 's/pattern1/pattern2/'
* Insert a '#' character at the beginning of each line: `sed 's/^/#/'`
* Insert a character at the beginning of a the second line: `sed '2s/./#&/'`
* -i flag: edit files in place

### File spacing
* Insert a blank line between existing lines: `sed G`
* Remove blank lines (opposite of preceding): `sed 'n;d'`
* Insert a blank line above every line which matches "regex": `sed '/regex/{x;p;x;}'`
* Insert a blank line below every line which matches "regex": `sed '/regex/G'`
* Insert a blank line above and below every line which matches "regex": `sed '/regex/{x;p;x;G;}'`
* Add test at the end of each line: `sed -n 's/$/text_to_add/'`

## Other
* Replace 'a' char by 'b' and output the result on stdout: `tr 'a' 'b' < input.txt`
* Remove all characters ';': `tr -d ';' < input.txt`
* Remove everything after a character: `echo "Hello: world" | cut -f1 -d":"`, taken from [this](https://stackoverflow.com/questions/4168371/how-can-i-remove-all-text-after-a-character-in-bash)
* [Remove leading and trailing whitespaces and tabs](https://unix.stackexchange.com/questions/102008/how-do-i-trim-leading-and-trailing-whitespace-from-each-line-of-some-output): `awk '{$1=$1;print}'`
* [cut examples](https://www.thegeekstuff.com/2013/06/cut-command-examples/)
* [Sed examples](http://www.theunixschool.com/2014/08/sed-examples-remove-delete-chars-from-line-file.html)

