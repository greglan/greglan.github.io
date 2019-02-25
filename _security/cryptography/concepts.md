---
title:  "A few concepts"
topic: "cryptography"
---

* Confusion property: each binary digit/bit of the ciphertext should depend on several parts of the key, obscuring the connections between the two.
* Diffusion property: if we change a single bit of the plaintext, then (statistically) half of the bits in the ciphertext should change, and similarly, if we change one bit of the ciphertext, then approximately one half of the plaintext bits should change. Since a bit can have only two states, when they are all re-evaluated and changed from one seemingly random position to another, half of the bits will have changed state.


# Resources and references
* [Confusion and diffusion properties](https://en.wikipedia.org/wiki/Confusion_and_diffusion)
