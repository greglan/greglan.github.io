---
layout: page
title:  "Libvirt"
permalink: "libvirt.html"
tags: [virtualization, linux]
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


## Lab setup
### Regular VMs (not security sensitive)
* Use default NAT network
* Install RDP server instead of crappy spice
* Enable SSH access:
  - Copy vm ssh key
  - Enable pubkey auth
  - Add entries in host's ssh_config
* Add entries in `/etc/hosts` for bost host and VMs

### Other VMs
* Separate isolated network
