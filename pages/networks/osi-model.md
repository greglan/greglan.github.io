---
layout: page
title:  "OSI model"
permalink: "osi-model.html"
tags: [networks]
summary: "Description of the OSI model and other basics of networks"
---

## OSI model
* Standard of a communication model used by a computer, regardless of its implementation (structure, technology...)
* Seven layers, each communicating with their neighbors.
    - Physical Layer: physical transmission medium specifications (voltage level, conversion of bits to RF, modulation schemes)
    - Data link Layer: protocol for two physically connected devices, connection handling (WIFI, Ethernet on switches, MAC/LLC, PPP)
    - Network Layer: routing between physical networks, logical network addressing, packet fragmentation and error detection handling (ICMP...)
    - Transport Layer: control flow handling between hosts, quality of service (IPsec, ~TCP/UDP)
    - Session Layer: session handling (NetBIOS, NWLink, ~TCP)
    - Presentation Layer: transform the data so that it is understandable by the application layer, handles encoding and cryptography (XML, SSL/TLS)
    - Application Layer: provides the details for the end user to access network resources (HTTP, SMTP, FTP, Telnet...)
* Theoretical model, not really respected in practice (see TCP/IP model)


## Addressing and routing
### Intermediate nodes and routing
* Full mesh: growth of the number of links as the square of the number of nodes
* Layer 3 interconnecting nodes: routers, gateways. Messages: packets
* Layer 2 interconnecting nodes: switches. Messages: frames
* Dumbbell topology:often used in simulation because of a potential bottleneck link
* Routing table.
* Flat address space: no hierarchy in the storage of the addresses in the routing table
* Hierarchical addressing: addresses decomposed in a prefix and the rest
* Common number of packets received by seconds: more than a million
* Routing loops:
  - bad router configuration
  - propagation of new routing information. Happens in case of link failure or link recovery.

### Addresses organization
#### Flat address space
* Advantage: simple address assignment
* Precaution: need to make sure the address is not already in use
* Downside: routing table grows linearly with the number of nodes

#### Hierarchical addressing
* Packet switching: no state, no resource reservation
* Circuit switching (commutation de circuit): resource reservation, signalling
* TCP=connection $$\neq$$ circuit switching

  The IP routing doesn't "understand" the TCP connection. The routers don't need to be synced.

  $$\neq$$ mobile networks: each point needs to be synced.





## Resources and references
* [Wikipedia article](https://en.wikipedia.org/wiki/OSI_model)
* [Logical Link Control (LLC)](https://en.wikipedia.org/wiki/Logical_link_control)
