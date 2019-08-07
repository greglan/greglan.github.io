---
layout: page
title:  "Hashes"
permalink: "hashes.html"
tags: [security, cryptography]
summary: ""
---

## Introduction
* Used in digital signatures, public-key encryption, integrity verification,
message authentication, password protection, key agreement protocols
* Examples: HTTPS, IPSec, SSH, GIT, NIDS, forensics...
* Takes a long input to a short output: *hash value/digest*
* Provides message integrity
* Signatures act on hashes instead of the messages themselves (shorter so
    faster, and most signature algorithm can only work on short inputs)

## Security
* Unpredicatbility: a small variation of the input should lead to a huge
variation of the output. A secure hash function behaves like a random function
* Preimage resistance: given a random hash, it is impossible to find (one of) the
original message
* First preimage resistance: impossible to find a message that hashes to a given
value
* Second preimage resistance: given one message, impossible to find another
message that hashes to the same value
* Preimage bruteforcing: for a hash of bit-length $$n$$, need around $$2^n$$
attempts to find a preimage. Impossible in practice with modern hash because
$$n=256$$ (SHA-256, BLAKE2) [1, p108]
* Collision resistance: impossible to find two distinct messages that hash to the
same digest


## Resources and references
* [1] *Jean-Philippe Aumasson*, Serious Cryptography
