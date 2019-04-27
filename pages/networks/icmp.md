---
layout: page
title:  "The ICMP protocol"
permalink: "icmp-protocol.html"
tags: [networks]
summary: "Description of the ICMP protocol and its usage"
---

## Generalities
* ICMP layer : considered as a layer 3 protocol since it addresses error conditions related to packet forwarding
* Motivations behind ICMP:
  - allow IP nodes to report certain error conditions
  - allow routers to inform hosts that a shorter (more direct) route is available to a certain destination going through a different router

## ICMP messages type

|Type | Code | Description |
|:-:|:-:|:-:|
|0 | 0 | Echo reply (ping) |
|3 | 0 | Destination network unreachable |
|3 | 1 | Destination host unreachable |
|3 | 2 | Destination protocol unreachable |
|3 | 3 | Destination portunreachable |
|3 | 6 | Destination network unknown |
|3 | 7 | Destination host unknown |
|8 | 0 | Echo request (ping) |
|11 | 0 | TTL expired |

## Utilities
### Ping
* Use: test IP connectivity
* Values computed
  - minimum, maximum and average Round Trip Time (RTT)
  - standard Deviation Time

### Traceroute
* Use: determine the IP addresses of the routers handling the packets between two IP nodes
* Principle: send packets by increasing the TTL little by little.
* 3 outcomes for the reply:
  - no answer: unidentified router
  - TTL expired: router
  - ICMP Port Unreachable: IP node reached
* Unidentified routers
  - if no answer, wait 5 seconds before sending a packet with the same TTL value
  - do that 3 times in total if we keep not receiving replies
  - at the end of the 3rd time, mark the router as unidentified


## Resources and references
