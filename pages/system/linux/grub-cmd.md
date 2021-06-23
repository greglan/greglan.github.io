---
layout: page
title:  "GRUB cheatsheet"
permalink: "grub.html"
summary: "Memos about configuration and how to deal with a rescue shell"
tags: [linux]
---

## Introduction
There are two ways of configuring the grub: through `/boot/grub/grub.cfg` and through the combination of `/etc/default/grub` and `/etc/grub.d/*`. 
The latter method generates `/boot/grub/grub.cfg` when running `grub-mkconfig -o /boot/grub/grub.cfg`. 

Custom entries can be added to `/etc/grub.d/40_custom`, for instance the [shutdown/restart entries](https://wiki.archlinux.org/title/GRUB#GRUB_commands).

For renaming the *Windows Boot Manager* entry, it is possible to edit `/etc/grub.d/30_os-prober` and [change the proper lines], however this will be overwritten when grub is updated. It's easier to just edit `/boot/grub/grub.cfg` directly.


## Rescue shell
The following assume GRUB 2 is used. Type `ls` to list the partitions found

### Windows-like OS
```
set root = (hd1,msdos2)
insmod ntfs
chainloader +1
boot
```

### Linux-like OS
Note: the prompt might be just "grub>"
```
(grub rescue> set prefix=(hd0,msdos3)/boot/grub)
grub rescue> set root=(hd0,msdos3)
(grub rescue> ls /boot)
(grub rescue> insmod /boot/grub/linux.mod)
grub rescue> linux /vmlinuz root=/dev/sda3 defaults
grub rescue> initrd /initrd.img
grub rescue> boot
```


## References
* [GRUB article on the Arch wiki](https://wiki.archlinux.org/title/GRUB)
* [An old guid about GRUB customizations](https://ubuntuforums.org/showthread.php?t=1287602)
* [Changing the resolution](https://wiki.archlinux.org/title/GRUB/Tips_and_tricks#Visual_configuration)