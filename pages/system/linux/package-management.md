---
layout: page
title:  "Package management cheatsheet"
permalink: "package-management.html"
summary: "Some useful commands when dealing with packages"
tags: [linux]
---


## Pacman
* Get info about a remote package/List optional dependencies: `pacman -Si package_name`
* Get info about a locally installed package: `pacman -Qi package_name`
* Search package by name: `pacman -Ss package_name`
* List installed packages: `pacman -Q`
* List explicitly installed packages: `pacman -Qe`
* Find the package associated with a file: `pacman -Qo /path/to/file`
* Find the files associated with a package: `paman -Ql package_name`



## APT
```
apt-get source package_name
apt-get build-dep package_name # Download the dependencies' source
apt-cache search package_name
add-apt-repository --remove ppa:PPA_Name/ppa  # Remove a PPA
```

## Other
```
dpkg --reconfigure
./configure -prefix=/usr/bin; make; sudo make install
```
