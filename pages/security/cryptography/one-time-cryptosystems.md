---
layout: page
title:  "The One-Time Cryptosystems"
permalink: "one-time-cryptosystems.html"
tags: [security, cryptography]
summary: ""
---

## Introduction
* Advantage: provides perfect secrecy
* Problem: requires a key as long as the message to be encrypted
* How to secure a single message ? Three steps: key generation, encryption,
  and decryption algorithms.
* Key generation *K*: key of the same length as the message *M*
* Encryption/decryption $$E_K(M) / D_K(C)$$: $$C = M \oplus K / M = C \oplus K$$
* One time pad operation [1, p5]: $$K_g(l), E_k(M), D_k(M), \text{Exp}_E^\text{kr-pas}(A), A_\text{guess}, \text{Adv}_E^\text{kr-pas}(A) $$


## Perfect security proof of the One-Time-Pad (OTP)
* Focus on a single bit: it is either encrypted to the same bit, or flipped
  depending on the key (probability 1/2 for each case).
* In other words, the probability that the encrypted bit takes a specific value
  is always half, so that it does not depend on the message. This is the
  definition of perfect secrecy
