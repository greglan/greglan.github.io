---
layout: page
title:  "Screen cheatsheet"
permalink: "screen-command.html"
tags: [linux]
summary: "Memo of the screen command"
---

* Create a session named console1: `screen -S console1`
* Create new console: `C-a C-c(reate)`
* Navigate between consoles: `C-a C-n(ext), C-a C-p(revious)`
* Detach session: `C-a C-d`
* List available sessions: `screen -ls, C-a "`
* Return to session: `screen -r pid,name`
* Return to shared session: `screen -x`
