---
layout: page
title:  "Batch and Powershell memo"
summary: ""
tags: [system, windows]
permalink: "batch-powershell.html"
---

* Execute a cmd command in Powershell: `cmd /c where command`
* Equivalent of `whereis` in CMD: `where command`
* Display PATH: `$Env:Path`, `$Env:Path -split ";"` or `Get-ChildItem Env:Path`
* Grepping: `command | Select-String "pattern"`