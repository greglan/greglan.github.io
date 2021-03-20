---
layout: page
title:  "VIM"
summary: "Cheatsheet of VIM as well as how to setup it up for TEX"
tags: [system]
permalink: "vim.html"
---

## Cheatsheet
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
* [Folding](https://vim.fandom.com/wiki/Folding)



## Configuration
* [Tab configuration](https://stackoverflow.com/questions/2054627/how-do-i-change-tab-size-in-vim) settings example:
```
set tabstop=4
set shiftwidth=4
set expandtab
```
* Display line numbers: `set number`
* VIM on windows: [fix the conflict between VIM visual block mode and clipboard paste](https://stackoverflow.com/questions/61824177/visual-block-mode-not-working-in-vim-with-c-v-on-wslwindows-10/62956033#62956033)
* [NERD commenter script](https://www.vim.org/scripts/script.php?script_id=1218)



## Setting up VIM on Windows
* [Installing Vundle and Pathogen](https://medium.com/usevim/vim-101-using-vundle-and-pathogen-in-windows-7cc11a0a9e63)


## Using VIM for Latex


### References
* [vim-latex](https://github.com/vim-latex/vim-latex)
* [Automatically recognizing TEX commands](https://stackoverflow.com/questions/7646080/vim-latex-automatically-recognize-custom-commands)
* [A guide about using VIM for Tex](https://medium.com/rahasak/vim-as-my-latex-editor-f0c5d60c66fa)
* [Another similar guide](https://castel.dev/post/lecture-notes-1/)