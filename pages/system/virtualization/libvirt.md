---
layout: page
title:  "Libvirt"
permalink: "libvirt.html"
tags: [virtualization, linux]
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


## VM setup
* Use default NAT network
* Install RDP server instead of crappy spice
* Enable SSH access:
  - Copy vm ssh key
  - Enable pubkey auth
  - Add entries in host's ssh_config
* Add entries in `/etc/hosts` for bost host and VMs


## Setting up a Windows 10 VM
* Download the Virtio drivers from [here](https://docs.fedoraproject.org/en-US/quick-docs/creating-windows-virtual-machines-using-virtio-drivers/index.html#virtio-win-direct-downloads)
* Setup Virtio disk and Virtio ethernet adapter
* Add two CDROMs, one for the Windows ISO, the other for the Virtio drivers ISO
* Start install. Choose Windows Pro (more features such as RDP)
* Choose custom install. Choose *Load Drivers*. For each of the driver below,
select *Browser* and goto *disk:/driver_name/w10/amd64*:
  - *viostor* to detect the disk
  - *qxldod* for display
  - *NetKVM* for network
  - *vioser/qemupciserial* for QEMU/guest communication
  - Optionally *guest-agent*
 * Process to install.
 * Once rebooted, choose the correct region.
 * Update


## Resources and references
* [Snapshot backing with qcow2 format](https://dustymabe.com/2015/01/11/qemu-img-backing-files-a-poor-mans-snapshotrollback/)
* [Guide to snapshot with qcow2](http://azertech.net/content/kvm-qemu-qcow2-qemu-img-and-snapshots)
* [Reclaiming qcow2 space](https://www.jamescoyle.net/how-to/323-reclaim-disk-space-from-a-sparse-image-file-qcow2-vmdk)
* [Short descriptions of the Virtio drivers](https://docs.fedoraproject.org/en-US/quick-docs/creating-windows-virtual-machines-using-virtio-drivers/index.html#virtio-win-iso-contents)
* [Virtio Balloon driver](https://rwmj.wordpress.com/2010/07/17/virtio-balloon/)
* [Networking options](https://wiki.libvirt.org/page/Networking)
* [Networking handbook](https://jamielinux.com/docs/libvirt-networking-handbook/)
