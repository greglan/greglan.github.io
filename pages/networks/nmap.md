---
layout: page
title:  "Nmap"
permalink: "nmap.html"
tags: [security, networks]
summary: "Common Nmap commands"
---

## Scan types
* **TCP connect scan**: use 3-way handshake to detect open ports. Easily detected by modern firewalls. Flag: `-sT`
* **SYN scan**: doesn't connect to the target (half-open scanning). Less chances to be detected by firewall, but not impossible. Flag: `-sS`
* **ACK scan**: special scan type that tells which ports are filtered or unfiltered by a firewall. Operates by sending TCP ACK frames to a remote port. If no response, then  considered filtered. If target returns an RST packet (connection reset), port considered unfiltered. Flag: `-sA`
* **UDP scan**: sends a 0-byte packet. If ICMP port unreachable received, then port closed. Open otherwise. Flag: `-sU`
* **ICMP use flag**: `-Pn`. Do not use ICMP (tells nmap not to use ping to determine whether a system is running; instead, it considers all hosts “alive”. If performing Internet based penetration tests, recommended flag, because most networks don’t allow ICMP)

## Examples
```bash
nmap -sP 192.168.1.0/24 -oN # Ping scan the subnet with no port scanning saved to text file
nmap -sP -O 192.168.1.0/24 -oN # Ping scan with OS detection
nmap -PS22,80 192.168.1-2,10.1 # TCP SYN ping port 22 and 80 on 192.168.1.1, 192.168.2.1 and 192.168.10.1
nmap -sS -p 80 test.com --dns-servers=192.168.1.1 -oX # SYN scan saved to XML file
nmap --p http,mysql 192.168.1.0/24 -sV # Port scan related to http and mysql services and identification of the version of the service
```

## Resources and references
TODO
