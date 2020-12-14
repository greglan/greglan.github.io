---
layout: page
title:  "Batch and Powershell memo"
summary: ""
tags: [system, windows]
permalink: "batch-powershell.html"
---


## CMD/BATCH
* Display envar in CMD: `echo %VAR_NAME%`. List all envar: `set`


## Powershell
### Example commands
* List all PNG files in subdirectories: `Get-ChildItem -Recurse -File -Include "*png"`
* Remove all images in subdirectories: `Get-ChildItem -Recurse -File -Include "*png" | foreach {rm $_.FullName}`
* Grepping: `command | Select-String "pattern"`
* Display PATH in Powershell: `$Env:Path`, `$Env:Path -split ";"` or `Get-ChildItem Env:Path`
* Equivalent of `whereis` in CMD: `where command`
* Get help on a command: `Get-Help command`
* Execute a cmd command in Powershell: `cmd /c where command`

### Configurations
* Allow local scripts to run: `Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser`
* [Filesytem information](https://www.windows-commandline.com/file-system-command-fsutil-fsinfo/)
* [Aliases with arguments](https://seankilleen.com/2020/04/how-to-create-a-powershell-alias-with-parameters/)
* [Configuration profiles](https://stackoverflow.com/questions/24914589/how-to-create-permanent-powershell-aliases/24914795#24914795)


## References
* [Execution policy](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_execution_policies?view=powershell-7.1)