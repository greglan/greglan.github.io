---
layout: page
title: PC Build guide
summary: "A memo about the list of things to consider when building or buying a new system. This is mainly oriented towards desktop builds but there are some thoughts about ultrabooks laptops along the way."
tags: [system]
permalink: "hw-pc.html"
---


## CPU
* Socket type: must agree with the motherboard choice
* Number of cores. This will impact the processing power of the build. This shouldn't have any influence for gaming though
* Max frequency
* Base frequency
* Hyper threading
* Single core performance: what does this measure ? Examples
* Multi core performance:  what does this measure ? Examples
* Dissipated power (TDP): describes how much power the CPU dissipates. The higher the value, the more cooling will be required.
* Virtualization features: all modern CPUs should have this, but it's a good idea to check

### Laptop specifics
* Intel i5 significantly cheaper than Intel i7. Saves battery power compared to i7, but not that much
* Intel i7: better performances than i5, but not that much. On the other hand, might consume more power, hence shorter battery life
* Dual core vs quad core: dual core better for battery life, but insufficient for local Windows VM. Quad core might be better to do that, but not sure


## Graphic card
* Frequency: how important is it ?
* RAM: how important is it ?
* Deep learning applications ?


## Motherboard
* Format: ATX/EATX. Other format exists but not important for me. In particular, there are some smaller format, but they are limiting in the functionalities offered. They usually also fit in smaller cases in which it is harder to obtain a good airflow for cooling. And cable management is also generally harder.
* Good brands: AsRock, Gigabyte, Asus
* Overclocking support
* Audio chipset
* RAM frequency and type support: this should agree with the choice of RAM.
* SLI/CROSSFIRE capability
* Number of fan headers
* Number of SATA output
* Socket type: depends on CPU choice
* Chipset
* TPM support


## RAM
* Pins: what is this ?
* Memory technology: why does it matter ? Compatibility with the motherboard ? CPU ? DDR = Double Data Rate. [1]

### Performance
* Frequency: the higher the better. But how important is this ? This should be compatible with both the motherboard and the CPU. The frequency defines the RAM's clock cycle $$T$$. The frequency used should be the *real frequency* $$f$$. For instance, for DDR memories, the actual frequency $$f$$ is the advertised frequency divided by two. [1]
* CAS: the lower the better. But how important is this ? This is the latency expressed in the number of the RAM's clock cycles between the request by the CPU and the service of that request by the RAM. The CAS latency depends in the frequency of the RAM, so naturally, the higher the frequency, the lower the CAS timing. [1]
* It seems that what matters is the latency, which takes into account both the real frequency and the CAS. The latency will then be $$\frac{CAS}{f} = CAS \times T$$ [1]. Another limit is the fact that some CPUs don't take advantages of higher RAM clocks. The sweet spot seems to be between 2133 and 2600 MHz with the lowest CAS possible.

### Capacity
* This depends on how the usage of the PC. Relevant questions include how many VMs will be used simultaneously, and how many applications will be opened as the same time.
* For laptops, better to go for 16 GB for VMs and multitasking. 8GB has proven to be borderline (easily up to 6/7 GB). On the other hand, maybe a swap file would be solve some of the slowdowns observed. Adding a 8 GB swap does not require much disk space (which in case of laptops is probably an SSD), but how good is it ?


## Storage
* This is limiting the VMs usability when several VMs are used simultaneously. The solution is to used RAID to increase throughput as well as enabling data redundancy.
* HDD brands: WD, Seagate. Format: 3.5”

### Sequential, random and 4K reads and writes
* Sequential access:
* Random access:
* OSs benefit from high random accesses

### SSD
* For laptops, a 256 GB SSD works, but not the best option. Need to be careful about what programs to install in both Linux and Windows. Very limiting for VMs. An external storage might be a good solution instead of a larger SSD, but the speed must be taken into account, as well as the problem of carrying that external storage and occupying an USB port.
* For all SSD storages, there is little need for RAID1 arrays. The best approach is to regularly backup the SSDs contents to a HDD. The downside is that the redundancy is not immediate (time to copy and even whether this procedure is always available), and possibly requires an action from the user. Still, could be automated by watching filesystem changes.


## Power supply
* Size format
* Watt capability: the wattage must comply with the build power requirement. It is highly recommended to get a power supply which exceeds the requirements of the build (question: by how much ?).
* Max amp on the +12v output
* Warranty
* Pins provided: MB, GPU
* Efficiency rating


## Water Cooling
* Size
* Noise
* Efficiency
* Good option: Corsair Hydro Series H60


## Case
* Dimensions
* Weight
* Motherboard size
* Number and type of bays: 2.5" bay (SSD), 3.5" bay (HDD). It's important to keep in mind future upgrades where we could add SSDs or HDDs to the build.
* Watercooling support.
* Number of fans
* Max GPU length


# Resources and references
* [1] [RAM frequency vs timing](https://www.youtube.com/watch?v=_WsfeuWI7mU)
* [2] [GPU and deep learning](https://blog.slavv.com/picking-a-gpu-for-deep-learning-3d4795c273b9)
* RGB lightning guides on [pcgamer.com](https://www.pcgamer.com/a-beginners-guide-to-rgb-lighting-your-pc/), [ArsTechnica](https://arstechnica.com/gadgets/2017/09/how-to-build-rgb-pc/) and [Linus Tech Tips](https://linustechtips.com/main/topic/927212-ultimate-guide-to-fan-rpm-rgb-ecosystems/)
* [Add new hard drive to mirror existing LVM drive with RAID1](https://askubuntu.com/questions/55968/add-new-hard-drive-to-mirror-existing-lvm-drive-with-raid1)
