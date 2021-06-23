---
layout: page
title:  "Libvirt"
permalink: "libvirt.html"
tags: [virtualization, linux, windows]
summary: "A libvirt/virsh cheatsheet"
---




## Cheatsheet
* List running domains: `list`
* List networks: `net-list --all`
* Start network: `net-start network_name`
* Stop a network: `net-destroy network_name`
* Edit a network: `net-edit network_name`
* Dump a network config: `net-dumpxml network_name`
* List all blocks of a domain: `domblklist domain_name --details`
* List snapshots: `snapshots-list domain_name`
* Test connection to a remote system: `virsh -c test+ssh://192.168.5.1:22022/default`
* Connection to a remote system: `virsh -c qemu+ssh://192.168.5.1:22022/system`
* Add connection in virt-manager: `virt-manager --connect qemu+ssh://192.168.5.1:22022/system`
* IP address of a domain: `domifaddr domain_name`
* Start a domain: `start --domain domain_name`
* Shutdown a domaine: `shutdown --domain domain_name`
* Delete a domain: `undefine domain_name`
* Image conversion: `qemu-img convert -f vmdk -O qcow2 image.vmdk IE11-Win8.1.qcow2`
* Image run: `qemu-system-x86_64 -m 4G -smp $NB_CORES --enable-kvm IE11-Win8.1.qcow2`


## Notes on configuration
It is best to use `viostor` over `vioscsi`, because it has better performance in general (at the expense of less features). This has been proved in [benchmarks](https://mpolednik.github.io/2017/01/23/virtio-blk-vs-virtio-scsi/) and echoed by [questions](https://stackoverflow.com/questions/39031456/why-is-virtio-scsi-much-slower-than-virtio-blk-in-my-experiment-over-and-ceph-r) online. See also [this](https://forums.unraid.net/topic/50132-viostor-or-vioscsi-for-windows-disks/) and [that](https://forum.proxmox.com/threads/viostor-or-vioscsi-driver-for-windows-7-64.26769/). 

Concerning the cache to use, provided the VM has snapshots available, it is worth it to use `writeback` to improve performances. See [Proxmox performance tweaks](https://pve.proxmox.com/wiki/Performance_Tweaks).

For disk performance optimizations, see [[1]](https://events19.lfasiallc.com/wp-content/uploads/2017/11/Storage-Performance-Tuning-for-FAST-Virtual-Machines_Fam-Zheng.pdf), [this](https://kvmonz.blogspot.com/p/knowledge-disk-performance-hints-tips.html) and [that](https://www.heiko-sieger.info/tuning-vm-disk-performance/).

## Choosing the right storage
Here are several possibilities for storage:
1. *qcow2* image files. It looks like are slower than other options, but more flexible. See slide 19 of [1](https://events19.lfasiallc.com/wp-content/uploads/2017/11/Storage-Performance-Tuning-for-FAST-Virtual-Machines_Fam-Zheng.pdf)
2. raw image files. Faster than the first option, but less flexible. In particular, we loose the ability to perform snapshots easily ?
3. raw partitions. They are fast but it's harder to manage snapshots
4. raw partitions on special snapshotable filesystems. See slide 21 of [1](https://events19.lfasiallc.com/wp-content/uploads/2017/11/Storage-Performance-Tuning-for-FAST-Virtual-Machines_Fam-Zheng.pdf)

### Using LVM snapshots
First, we need to create a new filesytem. In what follows we assume the target disk is `/dev/ssd`.
1. Create a new LVM PV: `pvcreate /dev/ssd`
2. Create a new LVM VG: `vgcreate /dev/ssd`


### Benchmarking IO performance
Here, we benchmark two installations of Ubuntu 20.04 LTS. For benchmarking, we will compare the following cases using [fio](https://fio.readthedocs.io/en/latest/fio_doc.html):
1. using a *qcow2* image file vs using a raw file vs LVM snapshots
2. for *qcow2* files, the influence of preallocation
3. for *qcow2* and LVM logical volumns, the influence of existing snapshots

We will base our tests mainly on [this post](https://arstechnica.com/gadgets/2020/02/how-fast-are-your-disks-find-out-the-open-source-way-with-fio/), but we will modify a few options.
Namely, we will use `direct=1`, i.e non-buffered I/O and the `libaio` engine.
The logic behind this is that `direct=1` allows to bypass the cache, and hence write directly to the disk, see [this](https://s905060.gitbooks.io/site-reliability-engineer-handbook/content/fio.html) and [that](https://blog.purestorage.com/purely-technical/io-plumbing-tests-with-fio/). 
Using this option is also recommended [here](https://linuxreviews.org/HOWTO_Test_Disk_I/O_Performance#Methods_of_testing_I.2FO_performance_which_gives_useful_information_reflecting_real-world_use). 
As for the engine, all the references except the post we are following use this engine, so we chose to follow the majority.
Here are the benchmarks used:
* simple random 4K write: `fio --name=random-write --ioengine=libaio --rw=randwrite --bs=4k --size=2g --numjobs=1 --iodepth=1 --runtime=60 --time_based --end_fsync=1 --direct=1`

Note that [this](https://linuxconfig.org/how-to-benchmark-your-linux-system#h6-4-i-o) could be a good alternative to perform the benchmarking.


## VM setup
* Use default NAT network
* Install RDP server instead of crappy spice
* Enable SSH access:
  - Copy vm ssh key
  - Enable pubkey auth
  - Add entries in host's ssh_config
* Add entries in `/etc/hosts` for bost host and VMs




## Setting up a Windows 10 VM
### Installation procedure
* Download the Virtio drivers from [here](https://docs.fedoraproject.org/en-US/quick-docs/creating-windows-virtual-machines-using-virtio-drivers/index.html#virtio-win-direct-downloads)
* Setup Virtio disk, Virtio ethernet adapter and select `host-passthrough` as CPU model
* Add two CDROMs, one for the Windows ISO, the other for the Virtio drivers ISO
* Start install. Choose Windows Pro (more features such as RDP)
* Choose custom install. Choose `Load Drivers`. For each of the driver below,
  select `Browse` and goto `disk:/driver_name/w10/amd64`:
  - *viostor* to detect the disk
  - *qxldod* for display. A *qxl* driver is also available but it looks like it doesn't have a `win10` directory, hence the choice of *qxldod* over *qxl*
  - *NetKVM* for network
  - *vioser/qemupciserial* for QEMU/guest communication. To be checked, may not be useful and may be unsafe.
  - Optionally *guest-agent*
 * Process to install.
 * Once rebooted, choose the correct region.
 * Update

A set of [best practices for Windows 10 guests](https://pve.proxmox.com/wiki/Windows_10_guest_best_practices) recommends `vioscsi` instead, but I disagree, see the sections above for justification. This last link justifies installing the ballon and network drivers however.

To pass physical devices to the VM, look into [this](https://wiki.archlinux.org/index.php/PCI_passthrough_via_OVMF#Swap_peripherals_to_and_from_the_Host)




## Resources and references
### Disks
* [[1] Storage Performance Tuning for FAST! Virtual Machines, *Fam Zheng*](https://events19.lfasiallc.com/wp-content/uploads/2017/11/Storage-Performance-Tuning-for-FAST-Virtual-Machines_Fam-Zheng.pdf)
* [Snapshot backing with qcow2 format](https://dustymabe.com/2015/01/11/qemu-img-backing-files-a-poor-mans-snapshotrollback/)
* [Guide to snapshot with qcow2](http://azertech.net/content/kvm-qemu-qcow2-qemu-img-and-snapshots)
* [Reclaiming qcow2 space](https://www.jamescoyle.net/how-to/323-reclaim-disk-space-from-a-sparse-image-file-qcow2-vmdk)

### Virtio
* [Short descriptions of the Virtio drivers](https://docs.fedoraproject.org/en-US/quick-docs/creating-windows-virtual-machines-using-virtio-drivers/index.html#virtio-win-iso-contents)
* [Virtio Balloon driver](https://rwmj.wordpress.com/2010/07/17/virtio-balloon/)

### Libvirt configuration
* [Passing arguments to QEMU through the XML file](https://libvirt.org/kbase/qemu-passthrough-security.html)
* [Networking options](https://wiki.libvirt.org/page/Networking)
* [Networking handbook](https://jamielinux.com/docs/libvirt-networking-handbook/)
* [Reference of the XML options](https://libvirt.org/formatdomain.html)