---
layout: page
title:  "GRUB cmd cheatsheet"
permalink: "grub-commands.html"
summary: "A quick memo when the GRUB rescue shell appears"
tags: [linux]
---

The following assume GRUB 2 is used. Type `ls` to list the partitions found

## Windows-like OS
```
set root = (hd1,msdos2)
insmod ntfs
chainloader +1
boot
```

## Linux-like OS
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
