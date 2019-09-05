---
layout: page
title:  "The TCP/IP protocol"
permalink: "tcp-ip-protocol.html"
tags: [networks]
summary: "Description of the TCP/IP protocol"
---


## TCP connection [1, p249]
* Client to server: SYN, SEQ(SEQ-CLIENT)
* Server to client: SYN/ACK(ACK-SERVER=SEQ-CLIENT+1), SEQ(SEQ-SERVER)
* Client to server: ACK(SEQ-SERVER+1), SEQ(SEQ-CLIENT+1)
* Also see this [video](https://www.youtube.com/watch?v=0EHo0HsTKJw&list=PLhixgUqwRTjxglIswKp9mpkfPNfHkzyeN&index=28)
  for a good summary

## IP
### Introduction
* Size of an IPv4 address: 4 bytes = 32 bits
* Size of an IPv6 address: 16 bytes = 18 bits
* IP fragmentation devices: IP routers.
* Fragmentation layer: only at IP layer. Transparent for the transport layer.
* Reliability of IP layer:
  - no congestion control
  - no flow control
  - packets may be lost
  - packets may be duplicated
  - packets may not arrive in order

### Format [3]
* Version: 4 bits. 4 for IPv4
* IHL (IP Header Length): 4 bits. Length of the header in 32 bits words

  Smallest possible value: 5 (5 x 32 bits = 4 x 4 bytes = 20 bytes)

  Padding used to ensure a size multiple of 32 bits.
* Type Of Service: 8 bits. Indicate the QOS class. QOS parameters: delay, throughput, reliability.
* Total Length: 16 bits. Total length of the IP packet. Max value: 65353.
* Identification: 16 bits. Value used to identify a packet or its fragments. Chosen by the sender.
* Flags: 3 bits.
  - Bit 0: reserved. Must be 0.
  - Bit 1 (F): whether the packet can be fragmented or not.
    - 0: fragmentation allowed
    - 1: do not fragment
  - Bit 2 (L): whether this packet is the last fragment.
    - 0: last fragment
    - 1: more fragments to come
* Fragment offset: 13 bits. Indicated the offset from the beginning of the first fragment of the current IP packet

  Measured in blocks of 8 bytes
* TTL (Time To Live): 8 bits. Ensure the destruction of the packet in case of routing loops

  Initialized by the sender with a non-zero value

  Decremented by one by each router forwarding the packet

  Packet discarded if TTL=0

  Recommended value: 64 (IANA). Each OS has a default value
* Protocol: 8 bits. Code indicating the protocol used in the payload. Common values:
  - ICMP: 0x01
  - TCP: 0x06
  - UDP: 0x17
* Header Checksum: 16 bits. Algorithm used: defined in \cite[p16]{rfc791}
* Source Address: 32 bits
* Destination Address: 32 bits
* Options: variable length. Optional field.

### IP fragmentation [2, p38]



## Resources and references
* [1] Securité informatique, 4ème édition
* [2] Principes des Réseaux IP, Automne 2017
* [3] RFC 791
