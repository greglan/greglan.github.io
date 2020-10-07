---
layout: page
title:  "Batch and Powershell memo"
summary: ""
tags: [system, windows]
permalink: "batch-powershell.html"
---

* Execute a cmd command in Powershell: `cmd /c where command`
* Equivalent of `whereis` in CMD: `where command`
* Display envar in CMD: `echo %VAR_NAME%`. List all envar: `set`
* Display PATH in Powershell: `$Env:Path`, `$Env:Path -split ";"` or `Get-ChildItem Env:Path`
* Grepping: `command | Select-String "pattern"`
* [Filesytem information](https://www.windows-commandline.com/file-system-command-fsutil-fsinfo/)