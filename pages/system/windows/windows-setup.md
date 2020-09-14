---
layout: page
title:  "General Windows setup guide"
summary: "A guide for setting up a Windows system. Some sections may be skipped
depending on the kind of usage the installation is for and the hardware it runs
on"
tags: [system, windows]
permalink: "windows-setup.html"
---

## Setup
* Prepare partition setup and align them on GiB
* (Wipe previous install and reinstall it: removes preinstalled bloatwares.)
* No Microsoft account
* Verify partition alignment
* Windows and drivers updates. Performing drivers updates first will prevent
Windows from trying to install potentially better but still obsolete drivers
than the one natively installed
* Follow the "Security measures" section below
* Update drivers
* Update BIOS
* Disable indexing on ssd
* Disable Pre-and Superfetch
* Start installing softwares
* Setup explorer to open on "Computer"
* Disable automatic pinning of frequently used items in "quick access" and
unzip the items already pinned
* Display extensions
* Disable Pagefile
* Disable Hibernation
* Disable System Restore
* Customize contextual menu
* Disable Onedrive at startup
* Goto settings, privacy, background apps, and disable all the crap
* Setup SSH service in Powershell: `Set-Service ssh-agent -StartupType Manual` and then `Start-Service ssh-agent`
* [Installing OpenSSH server](https://docs.microsoft.com/en-us/windows-server/administration/openssh/openssh_install_firstuse)



## Security measures
* Set UAC to full.
* Use random hardware mac address
* Account setup: admin/user
* Autolock screen with short delay.
* Change local host files



## Softwares
### Utils
* Daemon Tools Lite
* 7zip
* Openvpn

### Media
* Microsoft Office
* VLC
* Deluge

### Hacking
* Ollydbg 1.10 & 2.01. Default to execute as admin
* IDA
* x32dbg/x64dbg
* Immunity Debugger
* Wireshark
* StudPE
* LordPE
* PEditor
* UPX packer
* Yara

### Programming
* NASM. Add it to path.
* JDK
* Atmel Studio
* ARM toolchain. Add it to path.
* Python
    * Miniconda python 3
    * Python 2 virtualenv
    * Do the opposite for the versions?

### System
* Spybot
* Malwarebyte
* Glasswire
* ADW cleaner: useful?
* Hijackthis: useful?
* Adware Removal Tool by TSA: useful?
* Bleachbit
