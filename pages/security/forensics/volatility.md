---
layout: page
title:  "Volatility"
permalink: "forensics-volatility.html"
tags: [security, forensics]
summary: "Review of Volatility and some plugins"
---

## Plugins
* imageinfo: identify the OS, service pack, architecture

  Returns the profile to specify using `--profile`
* pslist: shows information about processes. Can't show hidden/exited processes: use *psscan* plugin
* pstree: process tree
* cmdscan: searches memory for `conhost.exe` on Windows 7 OS to see the command entered by an eventual attacker

  Finds structures known as COMMAND_HISTORY by looking for a known constant value (`MaxHistory`)

  Default history: 50 commands. Can be increased using `--max_history=NUMBER`
* consoles: same as *cmdscan* but also returns the commands' output
* filescan: shows opened files
* dumpfiles: TODO
* envars: show the processes' envars
* hashdump: returns the hashes of the domain credentials
* Find the Windows hostname: *envars* plugin grepped with `COMPUTERNAME`

## Resources and references
* [Volatility wiki](https://github.com/volatilityfoundation/volatility/wiki)
* [Teambios wiki](https://teambi0s.gitlab.io/bi0s-wiki/forensics/volatility/)
* [Article on hackers-rise.com](https://www.hackers-arise.com/single-post/2016/09/27/Digital-Forensics-Part-2-Live-Memory-Acquisition-and-Analysis)
* [Extracting hostnames](https://www.aldeid.com/wiki/Volatility/Retrieve-hostname)
* [Malware hunting](https://technical.nttsecurity.com/post/102egyy/hunting-malware-with-memory-analysis)
