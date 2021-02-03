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
### General outline
* Prepare partition setup and align them on GiB
* Wipe previous install and reinstall it: removes preinstalled bloatwares.
* Verify partition alignment
* Windows and drivers updates. Performing drivers updates first will prevent
Windows from trying to install potentially better but still obsolete drivers
than the ones natively installed
* Follow the "Hardening" subsection below. Can be done while waiting for the previous point to finish.
* Follow the "System customization" below. Can be done while waiting for the previous points to finish.
* Start installing softwares available in "Software list" and continue on the [software setup](/software-setup.html) page. Can be done while waiting for the previous points to finish.
* [Setup Windows to use UTC instead of localtime](https://wiki.archlinux.org/index.php/System_time#UTC_in_Windows): `reg add "HKEY_LOCAL_MACHINE\System\CurrentControlSet\Control\TimeZoneInformation" /v RealTimeIsUniversal /d 1 /t REG_QWORD /f` in an administrator command prompt.

### Hardening
* No Microsoft account
* Set UAC to full.
* Use random hardware mac address
* Account setup: admin/user
* Autolock screen with short delay.
* Change local host files


### System customization
* Update BIOS
* Disable indexing on ssd
* Disable Pre-and Superfetch
* Setup explorer to open on "Computer"
* Disable automatic pinning of frequently used items in "quick access" and
unzip the items already pinned
* Display extensions
* Depending on use case:
    * (Disable Pagefile)
    * (Disable Hibernation)
    * (Disable System Restore)
* Customize contextual menu. TODO: Make subsection on that.
* Disable Onedrive at startup
* Goto settings, privacy, background apps, and disable all the crap


### SSH
* [Installing OpenSSH client and server](https://docs.microsoft.com/en-us/windows-server/administration/openssh/openssh_install_firstuse)
* Setup SSH service in Powershell: `Set-Service ssh-agent -StartupType Automatic` and then `Start-Service ssh-agent`.
* Generate keys for server/client
* Set environement variable `GIT_SSH=C:\Windows\System32\OpenSSH\ssh.exe` to allow GIT to SSH and cie. Location of `ssh.exe` may change and can be found using `where` in CMD.




## Software list
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
