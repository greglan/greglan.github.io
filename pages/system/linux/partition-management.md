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

The atime vs relatime options are explained [here](https://blog.confirm.ch/mount-options-atime-vs-relatime/)




## Booting with a detached LUKS header on a USB
### Setup
In this section, we show how to boot an Arch Linux system using a detached LUKS header on a USB drive. See also the file `00-install_live.sh` in the configs directory.
* Overwrite the drive with random data:
```
cryptsetup open --type plain -d /dev/urandom /dev/usb usb_to_wipe
dd if=/dev/zero of=/dev/mapper/usb_to_wipe status=progress &
cryptsetup close usb_to_wipe
```
* Partition the USB drive as follows using *fdisk*:
```
Number  Start (sector)    End (sector)  Size       Code  Name
   1            2048         1050623   512.0 MiB   EF00  EFI System
   2         1050624         1460223   200.0 MiB   8300  Linux filesystem
```
* Format the partitions and mount them:
```
mkfs.fat -F32 /dev/usb1
mkfs.ext3 /dev/usb2 -L boot
mount /dev/usb1 /mnt/efi
mount /dev/usb2 /mnt/boot
```
* If this is a clean install, proceed with the regular installation. Else, copy the existing contents of `/boot` and `/efi` on the new partitions.
* Use `sudo blkid` to figure out the proper UUID/PARTUUID and adjust `/etc/fstab` accordingly.
* Adjust the kernel options as follows:
`root=UUID=the_uid_of_the_decrypted_luks_root rw cryptdevice=/dev/disk/by-id/nvme-ref-number:decrypted-root:header root=dev/mapper/decrypted-root`
* Finally, with `/boot` mounted from the proper USB drive, regenerate the GRUB config file: `grub-mkconfig -o /boot/grub/grub.cfg`
* If necessary, adjust the boot order in the BIOS.

### Cloning the USB
As a precaution, it may be a good idea to have a clone of the previous setup on another USB drive. 
Note that it is necessary to have the second USB drive to have the same paritions UUID, else the entries in `/etc/fstab` will not work with the backup drive.
This can be done by just using `dd` to clone the drive, providing the backup is the same size as the first drive: 
`dd if=/dev/main_usb of=/dev/backup_usb bs=1M status=progress`.

However, dd'ing the paritions each time there is an update is inefficient. 
Instead, `rsync` can be used to commit the changes to the backup drive USB drive.
Just mount both `/boot` partitions and run `rsync -Arvn --delete /boot/ /mnt/backup_boot`. 
Make sure you include the ending slash in `/boot/`, else `rsync` will create a `boot` directory in `/mnt/backup_boot`.
The `-A` will preserve the permissions, `-r` will recurse through directories, `-v` will list the changes, and `-n` will perform a dry-run (it won't do anything). Once satisfied, rerun this command omitting the `-n` flag.



## Creating a multiboot USB
In this section, we show how to perform what was done in the previous section, but also add the possibility of booting various ISO files present on the USB drive. A useful reference for this is [this page on the Arch Linux wiki](https://wiki.archlinux.org/title/Multiboot_USB_drive#Using_GRUB_and_loopback_devices). We choose to use a GPT scheme as we will boot ISOs that should be EFI-compliants, and hybrid-MBRs are not worth the hassle.
* Overwrite the drive with random data:
```
cryptsetup open --type plain -d /dev/urandom /dev/usb usb_to_wipe
dd if=/dev/zero of=/dev/mapper/usb_to_wipe status=progress &
cryptsetup close usb_to_wipe
```
* As suggested [here](https://www.rodsbooks.com/efi-bootloaders/principles.html), and also cited on the [Arch Linux wiki EFI partition page](https://wiki.archlinux.org/title/EFI_system_partition#Create_the_partition), it is best to have the EFI partition be at least 512MiB to accomodate for buggy implementations of UEFI. We will add a significant space for the ISO files residing in `/boot` and add a Windows-friendly partition at the end. Hence, create the following layout using `gdisk`:
```
Device        Start      End  Sectors  Size Type
/dev/usb1      2048  1050623  1048576  512M EFI System
/dev/usb2   1050624 51382271 50331648   24G Linux filesystem
/dev/usb3  51382272 84936703 33554432   16G Microsoft basic data
```
* Format and mount the partitions:
```
mkfs.fat -F32 /dev/usb1
mkfs.ext3 /dev/usb2 -L boot
mkdir -p /mnt/usb/efi
mkdir /mnt/usb/boot
mount /dev/usb1 /mnt/usb/efi
mount /dev/usb2 /mnt/usb/boot
```
* Install GRUB in UEFI mode:
`grub-install --target=x86_64-efi --removable --efi-directory=/mnt/usb/efi --boot-directory=/mnt/usb/boot`
* Copy the existing header and kernel files to the new boot directory: 
```
sudo cp /boot/header.img /mnt/usb/boot
sudo cp /boot/initramfs-linux* /mnt/usb/boot
sudo cp /boot/vmlinuz-linux /mnt/usb/boot
```



## LVM
* Extend the lv `logical_vol` in `group` by 10 GiB and resize its file system all at once: : `lvresize -L +10G --resizefs group/logical_vol`
* Set the size of the lv `logical_vol` in `group` to 20 GiB and resize its file system all at once: `lvresize -L 20G --resizefs group/logical_vol`
* Perform a 5G snapshot of a lv: `lvcreate -L 5G -s -n snapshot_name volume_group/logical_volume`
* Restore a snapshot: `lvconvert --merge /dev/volume_group/logical_volume`


## RAID using mdadm
* [Removing a disk from a RAID1 to use it alone](https://superuser.com/questions/971549/how-to-convert-a-software-raid-1-partition-to-non-raid-partition)
* [Removing a disk from a RAID1](https://wiki.archlinux.org/index.php/RAID#Removing_devices_from_an_array)
* [Adding a disk to a RAID1](https://wiki.archlinux.org/index.php/RAID#Adding_a_new_device_to_an_array)
* [Scrubbing, or how to check for sync errors](https://wiki.archlinux.org/index.php/RAID#Scrubbing)
* Creating a RAID1 device from a single disk: `mdadm --create --verbose --level=1 --metadata=1.2 --raid-devices=2 /dev/md10 /dev/disk0 missing`
* Steps for creating a RAID partition using `fdisk`:
  - Create a gpt table
  - Create a new partition
  - Change the partition type to *Linux RAID*



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



## OS on a USB drive
* Speed is important and using USB 3.0 is recommended.
  
  See also the [hardware recommendations from Ubuntu](https://help.ubuntu.com/community/Installation/FromUSBStick/pre#Notes_about_speed)



## Resources and references
* [LVM article on wiki.archlinux.org](https://wiki.archlinux.org/title/LVM)
* [Mount options and security](https://linux-audit.com/securing-mount-points-on-linux/)
* [How to let normal users mount partitions](https://unix.stackexchange.com/a/96643)
* [Identifying partition filesystems on Linux](https://www.tecmint.com/find-linux-filesystem-type/)
* [Recommended size for the EFI partition](https://askubuntu.com/a/1313158)
* [Advice on LUKS on RAID](https://superuser.com/questions/1193290/best-order-of-raid-lvm-and-luks)
* [Encrypted /boot and detached LUKS header on USB on Archlinux from wiki.archlinux.org](https://wiki.archlinux.org/index.php/Dm-crypt/Specialties#Encrypted_/boot_and_a_detached_LUKS_header_on_USB) and [another one from Reddit](https://www.reddit.com/r/archlinux/comments/7np36m/detached_luks_header_full_disk_encryption_with/)
* [Encrypted /boot and detached LUKS header on USB on Kali Linux](https://docs.j7k6.org/kali-linux-fde-luks-plausible-deniability-detached-header-usb/)
* [Background info on LUKS](https://wiki.archlinux.org/index.php/Disk_encryption)
* [A FAQ about LUKS worth reading](https://gitlab.com/cryptsetup/cryptsetup/-/wikis/FrequentlyAskedQuestions)
* [Resizing LUKS partitions](https://help.ubuntu.com/community/ResizeEncryptedPartitions)
* [Closing a LVM-on-LUKS container: error device still in use](https://linux-blog.anracom.com/tag/device-still-in-use/)
* [A short guide on plausible deniability with LUKS](https://blog.linuxbrujo.net/posts/plausible-deniability-with-luks/)
* [Fast methods to write randomness to a drive](https://wiki.archlinux.org/index.php/Dm-crypt/Drive_preparation#dm-crypt_specific_methods)
* [A not-so-reliable guide about securing laptops](https://wiki.alpinelinux.org/wiki/Setting_up_a_laptop)
* [https://infosec-handbook.eu/blog/yubikey-luks/](https://infosec-handbook.eu/blog/yubikey-luks/)