---
title:  "Advanced Encryption Standard (AES)"
topic: "cryptography"
---
* AES = Advanced Encryption Standard
* Design: substitution-permutation network. Consequence: efficient both in
software and hardware
* Block size: 128 bits.
* Key sizes: 128 bits, 192 bits or 256 bits
* State: 4x4 column-major matrix (state[0] is a column, not a row)
* Number of rounds: 10 for 128 bits keys, 12 for 192 bits keys,
14 for 256 bits keys,


## Steps
### High level description
* AddRoundKey: xor each byte of the state with the key

### SubBytes
