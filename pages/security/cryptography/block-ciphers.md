---
layout: page
title:  "Block ciphers"
permalink: "block-ciphers.html"
tags: [security, cryptography]
summary: ""
---
{% include latex-commands.html %}

* Block length
* Non adaptive CPA (using vectors): 
  - KR \line_{na} CPA
  - K^* \leftarrow^$ Kg
  - \vec{M}^* \leftarrow^$ \mathbb{A}
  - \vec{C}^* \leftarrow \vec{E_{K^*}(\vec{M})} 
  - \hat{K} \leftarrow^$ \mathbb{A}(\vec{C}^*)
* KR-CPA: $$K^* \leftarrow^$ Kg, hat{K} \leftarrow^$ \mathbb{A}^{\epsilon_\text{cpa}(.)}$$ where $$\epsilon_\text{cpa}(M) : C \leftarrow E_{K^*}(M), return C$$ is the Oracle
* If the key space is too small, vulnerable
* KR-1CPA: $$K^* \leftarrow^$ Kg, M^* \leftarrow^$ \mathbb{A}, C^* \leftarrow E_{K^*}(M^*), \hat{K} \leftarrow^$ \mathbb{A}(C^*)$$
* KR-1CPA: $$K^* \leftarrow^$ Kg, hat{K} \leftarrow^$ \mathbb{A}^{\epsilon_\text{1cpa}}, \epsilon_\text{1cpa}(M) = \epsilon_\text{cpa}$$ but with the restriction that it can only be called once

### Introduction
* Problem addfessed by block ciphers: short reusable key. Consequence: no perfect secrecy, but relaxed form of secrecy achievable and acceptable [2, 2.1]
* Operate on a block of data at a time
* Examples: DES, RC5, AES, Blowfish
* Mode of operation: how to "repeatedly apply a cipher's single-block operation
  to securely transform amounts of data larger than a block"
* Security [2, 2.1.2]: most block ciphers used in practice are not provably secure (AES; Blowfish, Camellia...)
  
  Highly inneficient constructions that are provably secure exist

| Name | Key size | Block size |
|:----:|:--------:|:----------:|
| DES | 56 | 64 |
| 3DES | 112 | 64 |
| AES | 128 | 128 |
| AES-192 | 192 | 128 |
| AES-256 | 256 | 128 |

### Definition
* Blockcipher [2, 2.1.1 ]: block cipher $$E$$ with block length $$n$$ is a symmetric enciphering scheme with $$\mathcal M = \mathcal C = \set{0, 1}^n$$ 
* Correctness requirement [2, 2.1.1]: for any key $$K$$, $$E_K$$ is a permutation
  
  Proof: $$\forall M,M' \in \mathcal M$$ such that $$E_K(M) = E_K(M')$$, because of correctness $$D_K(E_K(M)) = D_K(E_K(M')) \Rightarrow M = M'$$ so $$E_K$$ injective.
  Since $$E_K: \mathcal M \to \mathcal C = \mathcal M$$, and $$\mathcal M$$ finite, $$E_K$$ is also a bijection i.e a permutation.

  Consequence: specifying $$E_K$$ implies a unique $$D_K$$, so specifying $$E_K$$ for all $$K$$ suffices
* Initialization Vector (IV)/starting variable: required by most mode of
  operations. Allows to randomize the ciphertext should the same plaintext be
  encrypted several times

  Should be non-repeating

  Depending on the mode, should also be random
* Padding
* Table 2.1 of [2]: key sizes and block lengths

### Nonce-base encryption [2, 2.2.1]
* Nonce definition: *Number used Once* [2, p10]
  
  Use: ensure uniqueness
* Nonce-base encryption definition [2, p10]: ensures that even when the same message is encrypted twice or more, no pattern should reveal that this is happening.
  
  Requirements: 
    - relies on nonces being unique. The $$N$$-th message will get nonce $$N$$. Cen be done using a counter
    - synchronization
* Secrecy of nonces: all visible to an adversary. Coherent with Kerckhoff's principle that the security should reside in the secrecy of the key
  
  Some schemes do derive their nonces based on the key, and hence the nonces are required to be securely sent

### Electronic Codebook (ECB) mode
* Each block of data is encrypted separately [2, 2.2]
* Drawback: lacks the diffusion property because the same plaintext result in the
 same ciphertext. Hence, data patterns are not well-hidden
* Not reliable for use: compare
[this image](https://en.wikipedia.org/wiki/File:Tux.jpg) encrypted with
[ECB mode](https://en.wikipedia.org/wiki/File:Tux_ecb.jpg) and another
[more secure mode](https://en.wikipedia.org/wiki/File:Tux_secure.jpg)


### Cipher Block Chaining (CBC) mode
* Each block of plaintext is XORed with the previous ciphertext block before being encrypted
* Requires an IV for the first block
* Most used mode of operation
* Drawbacks: encryption can't be serialized, susceptible to padding oracle attacks such as POODLE

### Output Feedback (OFB) mode
* Principle: generate keystream blocks to XOR with the plaintexts. Bascially acts like a stream cipher
* Advantage: allows some error correcting codes to work when applied before encryption
* Drawback: no parallel decryption possible



## Resources and references
* [2] *Francois Dupressoir*, Lecture 2
* [5] *Francois Dupressoir*, Lecture 5
* [Stack overflow question](https://security.stackexchange.com/questions/334/advantages-and-disadvantages-of-stream-versus-block-ciphers)
* [Wikipedia on block ciphers modes of operation](https://en.wikipedia.org/wiki/Block_cipher_mode_of_operation)
* [Blowfish](https://en.wikipedia.org/wiki/Blowfish_(cipher))
* [Symmetric Block Cipher Versus Stream Cipher](https://blogs.getcertifiedgetahead.com/symmetric-block-cipher-versus-stream-cipher/)
* [GCM vs CBC mode of operation](https://www.privateinternetaccess.com/helpdesk/kb/articles/what-s-the-difference-between-aes-cbc-and-aes-gcm)
