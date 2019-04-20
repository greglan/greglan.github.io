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


## Resources and references
* [Wikipedia article](https://en.wikipedia.org/wiki/OSI_model)
* [Logical Link Control (LLC)](https://en.wikipedia.org/wiki/Logical_link_control)
