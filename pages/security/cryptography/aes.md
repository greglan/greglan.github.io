---
layout: page
title:  "Advanced Encryption Standard (AES)"
permalink: "aes.html"
tags: [security, algorithms, cryptography]
summary: ""
---

## Introduction
* Original name: *Rijndael*
* Design: substitution-permutation network. Consequence: efficient both in
software and hardware
* Block size: 128 bits.
* Key sizes: 128 bits, 192 bits or 256 bits
* Structure: substitution/permutation network
* State: 4x4 column-major matrix (state[0] is a column, not a row)
* Number of rounds:
  * 10 for 128 bits keys
  * 12 for 192 bits keys
  * 14 for 256 bits keys


## Steps
### High level description
* Initialisation: *KeyExpansion, AddRoundKey*
* Rounds 1 to 9, 11 or 13 depending on key size: *SubBytes, ShiftRows, MixColumns, AddRoundKey*
* Final round (rounds 10, 12 or 14 depending on key size): *SubBytes, ShiftRows, AddRoundKey*

### AddRoundKey
* For initialisation, each byte of the key is XORed with each byte of the state
* For each round, a subkey is derived from the main key using Rijndael's key schedule. Then each byte of the subkey is XORed with each byte of the state
![AddRoundKey step](https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/AES-AddRoundKey.svg/1280px-AES-AddRoundKey.svg.png)

### SubBytes
* Each byte in the state array is replaced using an 8-bit substitution box *S*
* See [Rijndael S-box](https://en.wikipedia.org/wiki/Rijndael_S-box)

![SubBytes step](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/AES-SubBytes.svg/1280px-AES-SubBytes.svg.png)


### ShiftRows
Purpose: avoid the columns being encrypted independently. Else, AES degenerates into four independent block ciphers
![ShiftRows step](https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/AES-ShiftRows.svg/1280px-AES-ShiftRows.svg.png)

### MixColumns
Provides diffusion in the cipher. Replaces a columns with another using matrix multiplication:

$$
\begin{bmatrix}b_{0,j}\\b_{1,j}\\b_{2,j}\\b_{3,j}\end{bmatrix} =
\begin{bmatrix}2&3&1&1\\1&2&3&1\\1&1&2&3\\3&1&1&2\end{bmatrix}
\begin{bmatrix}a_{0,j}\\a_{1,j}\\a_{2,j}\\a_{3,j}\end{bmatrix}
\qquad 0\leq j\leq 3
$$

![MixColumns step](https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/AES-MixColumns.svg/1280px-AES-MixColumns.svg.png)

## Resources and references
* [Wikipedia article](https://en.wikipedia.org/wiki/Advanced_Encryption_Standard)
* [Rijndael S-box](https://en.wikipedia.org/wiki/Rijndael_S-box)
* [Rijndael's key schedule](https://en.wikipedia.org/wiki/Rijndael_key_schedule)
