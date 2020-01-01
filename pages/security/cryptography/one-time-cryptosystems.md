---
layout: page
title:  "The One-Time Cryptosystems"
permalink: "one-time-cryptosystems.html"
tags: [security, cryptography]
summary: ""
---


* How to secure a single message ? Three steps: key generation, encryption,
  and decryption algorithms.
* Key generation *K*: key of the same length as the message *M*
* Encryption/decryption $$E_K(M) / D_K(C)$$: $$C = M \oplus K / M = C \oplus K$$

## Security proof of the One-Time-Pad (OTP)
* Focus on a single bit: it is either encrypted to the same bit, or flipped
  depending on the key (probability 1/2 for each case).
* In other words, the probability that the encrypted bit takes a specific value
  is always half, so that it does not depend on the message. This is the
  definition of perfect secrecy
