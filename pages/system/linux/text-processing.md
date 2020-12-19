---
layout: page
title:  "Text processing cheatsheet"
permalink: "text-processing.html"
tags: [linux]
summary: "A cheatsheet for processing text in Linux systems"
---

## VIM
* `w`: goto beginning of next word

  `$`: goto end of line

  `A`: goto end of line and switch to insert mode

  `^`: goto beginning of line

  `Shift+i`: goto beginning of line and switch to insert mode

  `gg/1G`: move to beginning of file

  `G`: move to end of file
* `v`: select chars (character mode)
  
  `V`: select lines (line mode)
  
  `Crtl+v`: select blocks (block mode)
* `yy`: copy line
* `d`: cut/delete
  
  `dw`: delete/cut word
  
  `d$`: delete/cut from cursor until end of line
  
  `D`: delete/cut from cursor until end of line
  
  `dd`: delete/cut line

  `40,45d`: delete lines 40 to 45

  `40,45d | 1,15d`: delete lines 40 to 45 and lines 1 to 15 
* `p`: past line
* Insert 16 caracters 'f' while in INSERT mode: `Crtl+o, :norm 16if, Esc`
  
  Insert 8 caracters 'f' while in NORMAL mode: `8if, Esc`
* [Insert something on several lines at a time](https://stackoverflow.com/questions/9549729/vim-insert-the-same-characters-across-multiple-lines/9549765#9549765)
* [Searching](https://vim.fandom.com/wiki/Searching)
* [Replacing words](https://vim.fandom.com/wiki/Search_and_replace):
  - Replacing a single occurence: `:s/foo/bar/g`
  - Replacing all occurences: `:%s/foo/bar/g`
  - Replacing the lines containing "- name: " with a '#' while getting rid of spaces/tabs: `:%s/^ \+-name:/#/g`
* [Deleting lines containing a pattern](https://vim.fandom.com/wiki/Delete_all_lines_containing_a_pattern): `:g/pattern/d`
* Undo/redo:
  - `u`: undo last change
  - `Crtl+r`: redo last undo
  - `:undolist` list changes
* Indentation: `>>` or `<<` when block of lines selected
* [Tab configuration](https://stackoverflow.com/questions/2054627/how-do-i-change-tab-size-in-vim) settings example:
```
set tabstop=4
set shiftwidth=4
set expandtab
```
* Display line numbers: `set number`
* VIM on windows: [fix the conflict between VIM visual block mode and clipboard paste](https://stackoverflow.com/questions/61824177/visual-block-mode-not-working-in-vim-with-c-v-on-wslwindows-10/62956033#62956033)
* [NERD commenter script](https://www.vim.org/scripts/script.php?script_id=1218)



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

