---
layout: page
title:  "Message Authentication Codes (MAC)"
permalink: "mac.html"
tags: [security, algorithms, cryptography]
---
# Introduction
* Purpose: ensure authentication using a shared private key *K*
* Principle: send a pair *(s,m)*, with m the message and *s=MAC(m, K)*


# MAC construction using block ciphers
TODO

# HMAC (Hash-based MAC)
* Uses: IPSec, TLS
* Notations:
  * *+*: bitwise XOR
  * *\|\|*: concatenation
  * *h*: cryptographic hash function
  * *m*: message to be authenticated
  * *K*: secret key
  * *K'*: block-sized key. Derived from K
  * *ipad*: inner padding. Consisting of bytes valued 0x36 repeated up to the block size
  * *opad*: outer padding. Consisting of bytes valued 0x5c repeated up to the block size
* Block-sized key generation:
  * 1st case: *K' = h(K)* if size(*K*)>block size
  * 2nd case: *K'=K* padded with 0s until block size
* Construction: *hmac(m, K') = h( (K' + opad) \|\| h( (K' + ipad) \|\| m ) )*

![HMAC construction for SHA-1](https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/SHAhmac.svg/1280px-SHAhmac.svg.png)



# Resources and references
* [Wikipedia page](https://en.wikipedia.org/wiki/HMAC)
