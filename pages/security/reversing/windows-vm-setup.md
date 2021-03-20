---
layout: page
title:  "Windows VM setup under QEMU/KVM/libvirt"
permalink: "windows-reversing-vm.html"
tags: [security, reversing, windows]
summary: "A guide to setup a Windows VM where QEMU/KVM is hidden from the guest OS"
---

## Introduction
On this page, it is assumed that:
- the guest system is Windows 10
- the guest system is being run through QEMU/KVM and managed through libvirt

As a consequence, the techniques showed here may not work on other hypervisors. In the next section we deal with Windows specific tricks, and in the other with QEMU/KVM/Libvirt specifics.

## Windows specifics
### The task manager detection
According to [[1]](https://stackoverflow.com/questions/51364707/how-does-windows-10-task-manager-detect-a-virtual-machine), it is sufficient to add `-hypervisor` to QEMU's CPU parameter. This can be done by adding the following code between the `<domain>...</domain>` tags in the XML:
```XML
<qemu:commandline>
  <qemu:arg value="-cpu"/>
  <qemu:arg value="host,hv_time,kvm=off,hv_vendor_id=null,-hypervisor"/>
</qemu:commandline>
```
Note that for the XML to be valid, you need to ensure that the declaration of your domain includes QEMU's XML namespace has explained [here](https://unix.stackexchange.com/questions/235414/libvirt-how-to-pass-qemu-command-line-args/317988#317988). Basically, the first line of you domain should be like this:

`<domain type='kvm' xmlns:qemu='http://libvirt.org/schemas/domain/qemu/1.0'>`


## QEMU/KVM and libvirt setup
* [Hide hypervisor](https://superuser.com/questions/1387935/hiding-virtual-machine-status-from-guest-operating-system/1389159#1389159)
* [Hide KVM](https://wiki.archlinux.org/index.php/PCI_passthrough_via_OVMF#Video_card_driver_virtualisation_detection)
* [Another KVM hidding procedure](https://forums.unraid.net/topic/94498-solved-i-need-hide-vm-status-in-application/)


## Resources and references
* [[1] How Windows 10 detect VMs](https://stackoverflow.com/questions/51364707/how-does-windows-10-task-manager-detect-a-virtual-machine)
* [[2] General VM detection theory](https://handlers.sans.org/tliston/ThwartingVMDetection_Liston_Skoudis.pdf)
* [VMDetector](https://github.com/robsonfelix/VMDetector)
* [ScoopyNG tool to detect VMware hypervisors](https://www.trapkit.de/tools/scoopyng/index.html)
* [How the CPUID test works](https://kb.vmware.com/s/article/1009458)
* [CPUID instruction on Wikipedia](https://en.wikipedia.org/wiki/CPUID)
* [The Red Pill technique to check the presence of a VM](https://web.archive.org/web/20100725003848/http://www.redlightsecurity.com/2008/04/virtualization-red-pill-or-blue.html)
* [Original Red Pill article](https://web.archive.org/web/20110929075510/http://invisiblethings.org/papers/redpill.html)