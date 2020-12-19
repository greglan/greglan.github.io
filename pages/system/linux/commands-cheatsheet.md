---
layout: page
title:  "Commands cheatsheet"
permalink: "commands-cheatsheet.html"
tags: [linux]
summary: "A cheatsheet of commands used in bash/zsh terminals"
---


## Compression
### Tar
```
tar cf archive_name.tar file1 file2 dir1 dir2   # Create archive
tar xf archive_name.tar[.xz|gz]               # Extract. Recognizes the format by itself
```

### gzip (fast)
```
gzip file       # Compress
tar czf archive_name.tar file1 file2 dir1 dir2
gunzip file.gz  # Uncompress
tar xzf archive_name.tar
```

### bzip2 (performance)
```bash
bzip2 file          # Compress
tar cjf archive_name.tar file1 file2 dir1 dir2
bunzip2 file.bz2    # Uncompress
tar xjf archive_name.tar
```

### Zip files
```bash
zip myzip file1 file2 file3  # Create file myzip.zip
unzip file.zip
```

### RAR files
```bash
unrar x archive.rar # Decompress
rar a ArchiveName File_1 File_2 Dir_1 Dir_2 # Compress
```

### xz
```bash
xz -k file    # Create file.xz and keep file (without -k flag, file is deleted)
xz -d file.xz # Decompress
```



## IP command
* Enable/disable an interface: `ip link set eth0 up/down`
* Show IP infos: `ip addr/a`
* Show IP infos of an interface: `ip a show/s eth0`
* Show IPv4 infos of an interface: `ip -4 a show/s eth0`
* Show IPv6 infos of an interface: `ip -6 a show/s eth0`
* Assign an IP to an interface: `ip a add 192.168.1.5/24 dev eth0`
* Remove an IP to an interface: `ip a del 192.168.1.5/255.255.255.0 dev eth0`
* Add a broadcast address: `ip addr add broadcast/brd 192.168.1.255 dev eth0`
* Show the routing table: `ip route show`
* Add a static route: `ip route add 10.10.20.0/24 via 192.168.1.254 dev eth0`
* Remove a static route: `ip route del 10.10.20.0/24`
* Add a default gateway: `ip route add default via 192.168.1.254`
* Show neighbour/ARP table: `ip neigh/n show`
* Reset interface:
```bash
ip link set dev $INTERFACE down
sleep 1
ip link set dev $INTERFACE up
```

## Wifi connection
### Manual connection
```bash
ip link set wlan0 up
iw wlan0 scan
sudo wpa_passphrase essid >> /etc/wpa_supplicant.conf
# Type passphrase here
sudo wpa_supplicant -B -D wext -i wlan0 -c /etc/wpa_supplicant.conf
iw wlan0 link # Check connection
sudo dhclient wlan0
```

### nmcli
* List available networks : `nmcli device wifi list`
* Connect to `$ESSID` using `$password`: `nmcli device wifi connect $ESSID password $password`
* Delete saved connection: `nmcli connection delete name`


### Resources and references
* For the problem "Secrets were required but not provided" error, see the second
  answer to this [question]()

## Package management
### Pacman
* Get info about a remote package/List optional dependencies: `pacman -Si package_name`
* Get info about a locally installed package: `pacman -Qi package_name`
* Search package by name: `pacman -Ss package_name`
* List installed packages: `pacman -Q`
* List explicitly installed packages: `pacman -Qe`
* Find the package associated with a file: `pacman -Qo /path/to/file`
* Find the files associated with a package: `paman -Ql package_name`

### APT
```
apt-get source package_name
apt-get build-dep package_name # Download the dependencies' source
apt-cache search package_name
add-apt-repository --remove ppa:PPA_Name/ppa  # Remove a PPA
```

### Other
```
dpkg --reconfigure
./configure -prefix=/usr/bin; make; sudo make install
yum check-update && yum update # CentOS and other Red-Hat derivative
dnf install zsh # CentOS
```



## GPG
### Encryption and decryption
* Encrypt: `gpg --encrypt --sign --armor -r "Receiver User Name" -r "Sender User Name" somefile`
* Decrypt: `gpg -d mydata.tar.gpg`

### Signatures
* Sign a document: `gpg --output signature.sig --sign file_to_sign`
* Check signature: `gpg --output file_to_check --verify file_to_check.sig`
* Check signature and extract: `gpg --output file_to_check --decrypt file_to_check.sig`
* --clearsign: TODO
* --detach-sig: TODO

### Key managment
* Export
    * `gpg --output mykey.asc --export -a $GPGKEY`
    * `gpg --export --armor jqdoe@example.com > jqdoe-pubkey.asc`
    * `gpg --export -a "User Name" > public.key`
    * `gpg --export-secret-key -a "User Name" > private.key`
* Export to server: `gpg2 [--keyserver hkp://pgp.mit.edu] --send-key KEYNAME`
* Import
    * `gpg --import public.key`
    * `gpg --allow-secret-key-import --import private.key
`* Delete key:
    * `gpg --delete-key "User Name"`
    * `gpg --delete-secret-key "User Name"`
* List keys:
    * `gpg --list-keys`
    * `gpg --list-secret-keys

* Keygen: `gpg --full-gen-key`
* Edit key: `gpg --edit-key`
* Set the default key: in ~/.bash_profile, `export GPGKEY=D8FC66D2`


## Misc
### Envar
* List all envar: `env`
* List envar of a process: `cat /proc/1234/environ`
* Make a bash variable an env: `export VARNAME`
* Direct env definition: `export VARNAME=VAL`
* `$PATH` separator: `:`. Different on Windows
* Current shell: echo $SHELL; echo $0
    $HOME, $PWD, $TERM, $USER, $UID, $LOGNAME, $DISPLAY
* `PATH` modification: `export PATH=$PATH:/home/user/bin`

### Process
* List all processes: `ps -ax`
* Detailed version: `ps -axl`
* Tree representation: `ps -axf`
* List processes belonging to user's euid: `ps -u user`
* List jobs: `jobs`
* Pause process: `^Z`
* Kill process: `^C`
* Zombie process: processus fils dont le père n'a pas géré la terminaison. Seul moyen pour s'en débarrasser: tuer le père.
* List all running services
```
R=$(runlevel  | awk '{ print $2}')
for s in /etc/rc${R}.d/*; do  basename $s | grep '^S' | sed 's/S[0-9].//g' ;done
```
* TODO: `top`

### Search
* Todo: `locate, updatedb`
* Find commands in common directories: `whereis`
* Find commands in `$PATH`: `which`
* Find files everywhere: `find -name test /`

### Streams
* stdin -> 0
* stdout -> 1
* stderr -> 2
* *stdout* redirection: `command > file`
* *stderr* redirection: `command 2> file`
* *stdout* and *stderr* redirection: `command > file 2>&1`
* Redirect and overwrite: `>`
* Append to file: `>>`

### Screen
* Create a session named console1: `screen -S console1`
* Create new console: `C-a C-c(reate)`
* Navigate between consoles: `C-a C-n(ext), C-a C-p(revious)`
* Detach session: `C-a C-d`
* List available sessions: `screen -ls, C-a "`
* Return to session: `screen -r pid,name`
* Return to shared session: `screen -x`

### X system
* Display format: `address_or_name:ServNum.ScreenNum`
* `export DISPLAY=name:0.0`
* Allow connections form host machine: `xhost +machine`


### Unsorted
* Terminal info: `stty -a`
* Output date: `date +%H:%M`
* Clear the copy and cache buffers: `sysctl --write vm.drop_caches=3`
* List enabled unit files: `systemctl list-unit-files | grep enabled`
* View logs of a specific unit: `journalctl -u nginx.service -u php-fpm.service --since today`
* Change default shell on CentOS: `chsh -s /bin/zsh root`
* Search command history in terminal: Crtl+r


### TODO
* Commands to research: `cat, grep, sort, uniq, sed, tee, cut, tr, split, paste, printf, comm, cmp, diff, patch, w, ps, finger, mail`
* [Hard links](https://bertvv.github.io/notes-to-self/2015/10/18/the-number-of-hard-links-in-ls--l/)


## References
* [Man pages navigation](https://www.cyberciti.biz/faq/howto-use-linux-unix-man-pages/)
* [GPG Signatures](https://www.gnupg.org/gph/en/manual/x135.html)
* [A guide about GPG and Yubikeys](https://github.com/drduh/YubiKey-Guide)
* [A Debian conf video about GPG keys and Yubikeys](https://www.youtube.com/watch?v=xGsixSh6sC4)
