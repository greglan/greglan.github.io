---
title:  "Message Authentication codes (MAC)"
---
# Introduction
* Purpose: ensure authentication using a shared private key K
* Principle: send a pair (s,m), with m the message, s=MAC(m, K)


# MAC construction using block ciphers


# HMAC (Hash-based MAC)
* Uses: IPSec, TLS
* `hmac(m, k) = h(opad+k || h((ipad+k) || m))`
* `ipad = 0x36, opad = 0x5c`
* Key: k = h(K) if size(K)>block size, else padded with 0s until block size
