---
layout: page
title:  "Virtual Private Network (VPN)"
permalink: "vpn.html"
tags: [networks]
summary: "Overview of VPNs"
---

## TCP vs UDP
### UDP
* Preferred protocol. But may be disabled on some networks.
* Faster
* Less reliable than TCP. But most traffic in the tunnel is TCP, so it's best to let the error correction act inside the tunnel
* Can't work over TOR

### TCP
* Better reliability, but slower
* Rarely blocked by firewalls (at least ports 80 and 443)

## Resources and references
* [OpenVPN UDP vs TCP](https://www.privateinternetaccess.com/archive/forum/discussion/28774/the-ultimate-question-udp-vs-tcp-what-s-the-difference-which-one-should-you-choose)
