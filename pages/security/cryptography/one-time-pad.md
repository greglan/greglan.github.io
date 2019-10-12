---
layout: page
title:  "The One-Time Pad (OTP)"
permalink: "one-time-pad.html"
tags: [security, cryptography]
summary: ""
---


* How to secure a single message ? Three steps: key generation, encryption,
  and decryption algorithms.
* Key generation *K*: key of the same length as the message *M*
* Encryption/decryption $$E_K(M) / D_K(C)$$: $$C = M \oplus K / M = C \oplus K$$
* Course notation: dollar over an arrow means "sampled from a distribution over..."
