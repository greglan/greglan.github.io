---
title:  "ip command cheatsheet"
topic: "linux"
tags: linux
---

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
