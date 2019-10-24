---
layout: page
title:  "Partition management cheatsheet"
permalink: "partition-management.html"
tags: [linux]
summary: "Some scattered information about partition managements in Linux"
---

## Options of /etc/fstab
`sync/async`: all I/O to the file system should be done (a)synchronously.

`auto`: the filesystem can be mounted automatically (at bootup, or when mount is
passed the -a option). This is really unnecessary as this is the default action
of mount -a anyway.

`noauto`: the filesystem will NOT be automatically mounted at startup, or when
mount passed -a. You must explicitly mount the filesystem.

`dev/nodev`: interpret/Do not interpret character or block special devices on
the file system.

`exec / noexec`: permit/Prevent the execution of binaries from the filesystem.

`suid/nosuid`: permit/Block the operation of suid, and sgid bits.

`ro`: mount read-only.

`rw`: mount read-write.

`user`: permit any user to mount the filesystem. This automatically implies
noexec, nosuid,nodev unless overridden.

`nouser`: only permit root to mount the filesystem. This is also a default
setting.

`defaults`: use default settings. Equivalent to rw, suid, dev, exec, auto,
nouser, async.

`_netdev`: this is a network device, mount it after bringing up the network.
Only valid with fstype nfs.

## Resizing a LUKS partition
### KDE partition manager
* Open the LUKS container with `cryptsetup`
* Open KDE Partition Manager. The underlying filesystem on the LUKS container
  should be visible (ext3, ext4...)
* Select the LUKS container and choose resize. Apply changes
* After you should be able to move the LUKS container if needed  

### Decrease
* Open the LUKS container. Assume the name of the mapped device if `luks`
* Reduce the filesystem inside the LUKS container
* Read the total number *sec* of sector on the LUKS container:
  `cryptsetup status luks`
* Compute the new number of sector: *new_sec = sec * new_size_gb/old_size_gb*.
  The old size can be found using `fdisk -l` or mounting the filesystem followed
  by `df -h`.
* Resize the LUKS container: `cryptsetup resize luks -b new_sec`

## Booting from an USB encrypted partition
* Partition the USB drive as follows using *fdisk*:
```
Number  Start (sector)    End (sector)  Size       Code  Name
   1            2048         1050623   512.0 MiB   EF00  EFI System
   2         1050624         1460223   200.0 MiB   8300  Linux filesystem
```

## Corrupt filesystem recovery
* Check this [guide](https://www.slashroot.in/understanding-file-system-superblock-linux)
  to understand what superblocks are
* Corrupted superblocks can be found using
  `sudo dumpe2fs /dev/hdd | grep superblock`
* You can then try to repair the fs using `fsck -b 32768 /dev/hdd` if 32768 was
  the first value returned for the superblock search
* Also possible to try to mount the fs: `mount sb=32768 /dev/hdd /mnt`
* `debugs` can also be useful
* [This](https://searchdatacenter.techtarget.com/tip/Access-and-repair-an-ext3-file-system-with-the-superblock)
  is also a good read

## Resources and references
* [Encrypted /boot and a detached LUKS header on USB](https://wiki.archlinux.org/index.php/Dm-crypt/Specialties#Encrypted_/boot_and_a_detached_LUKS_header_on_USB)
* [Background info on LUKS](https://wiki.archlinux.org/index.php/Disk_encryption)
* [Resizing LUKS partitions](https://help.ubuntu.com/community/ResizeEncryptedPartitions)
