---
layout: page
title:  "/etc/fstab cheatsheet"
permalink: "fstab.html"
tags: [linux]
summary: "Description of the options found in the /etc/fstab file"
---

`sync/async`: all I/O to the file system should be done (a)synchronously.

`auto`: the filesystem can be mounted automatically (at bootup, or when mount is passed the -a option). This is really unnecessary as this is the default action of mount -a anyway.

`noauto`: the filesystem will NOT be automatically mounted at startup, or when mount passed -a. You must explicitly mount the filesystem.

`dev/nodev`: interpret/Do not interpret character or block special devices on the file system.

`exec / noexec`: permit/Prevent the execution of binaries from the filesystem.

`suid/nosuid`: permit/Block the operation of suid, and sgid bits.

`ro`: mount read-only.

`rw`: mount read-write.

`user`: permit any user to mount the filesystem. This automatically implies noexec, nosuid,nodev unless overridden.

`nouser`: only permit root to mount the filesystem. This is also a default setting.

`defaults`: use default settings. Equivalent to rw, suid, dev, exec, auto, nouser, async.

`_netdev`: this is a network device, mount it after bringing up the network. Only valid with fstype nfs.
