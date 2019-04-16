---
layout: page
title:  "Proxies"
permalink: "proxies.html"
tags: [security, networks]
summary: "Various informations about proxies"
---

## SOCKS protocol
* Difference with regular HTTP proxies: SOCKS works at a lower level (session layer between the presentation and transport layers)
* HTTP proxy may interpret and rewrite headers
* SOCKS server accept incoming TCP connections on port 1080


### SOCKS5
* Extension of the SOCKS4 protocol to support IPv6 and UDP (useful for DNS queries)
* Provides authentication
* Packets description available on the [Wikipedia article](https://en.wikipedia.org/wiki/SOCKS#SOCKS5)


## Proxychains
* Example: `proxychain firefox`  
* This will run the firefox app through proxychains.
* Proxychain config file: `/etc/proxychains.conf`  
* Possible proxies:
    - Hide My Ass!
    - SamAir Security
    - Proxy4Free
    - Hide.me
* Careful about transparent proxies, don't hide the IP address.
* Preferably Russian proxies: "EU and U.S. law enforcement do not have jurisdiction in Russia, hence little or no chance of tracing the identity" (www.hackers-arise.com)
* By default, proxychains setup to use Tor


## Privoxy
* Filtering proxy for the HTTP protocol
* Frequently used in combination with Tor
* Provides advanced filtering capabilities: page content, cookies, access control, ads/banners/pop-ups removal
* Blocking advertisements can reduce anonymity because it creates a unique browser signature


## Resources and references
* [Wikipedia page for SOCKS protocol](https://en.wikipedia.org/wiki/SOCKS)
* [Archiwiki page for Privoxy](https://wiki.archlinux.org/index.php/Privoxy)
