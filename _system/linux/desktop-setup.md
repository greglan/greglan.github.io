# Disk setup
RAID at the lowest level, then LUKS, then LVM

# Install
Configure fstab:
	Mount data partition
	Set correct permissions: allow file to be put to trash.
Chown data partition.
Install progs.
Enable trim on luks ssd.
Wipe ram at shutdown
Brightness
laptop_mode config/powertop:
  Set processor frequencies
  Configure fail2ban
  Vnc server / client.
  SSH server:
  	openssh-server
  	Change default port.
  	Restrict user logins
  	Change LogLevel
  	Change LoginGraceTime
  	Change PermitRootLogin to no
  	Change Banner
  	Setup ssh-agent

## Grub:
* Set correct colors in /etc/grub.d/05_debian_theme
* Remember last choice: DEFAULT=saved, GRUB_SAVEDEFAULT=true in /etc/default/grub
* Remove quiet option

## Samba
* alan: RW
* guest: RO, for videos and musics only, RW for vm-tmp
* vm_user: dependent on use case

## VMs
* [Change Docker image locations](https://wiki.archlinux.org/index.php/docker#Images_location)
* User isolation


# Resources and references
* [Replacing a drive in RAID1](https://www.howtoforge.com/replacing_hard_disks_in_a_raid1_array)
