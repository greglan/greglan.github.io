---
layout: page
title:  "Block and stream ciphers"
permalink: "block-stream-ciphers.html"
tags: [security, cryptography]
summary: ""
---

## Block ciphers
* Operate on a block of data at a time
* Examples: DES, RC5, AES, Blowfish
* Mode of operation: how to "repeatedly apply a cipher's single-block operation
to securely transform amounts of data larger than a block"
* Initialization Vector (IV)/starting variable: required by most mode of
operations. Allows to randomize the ciphertext should the same plaintext be
encrypted several times

  Should be non-repeating

  Depending on the mode, should also be random
* Padding

### Electronic Codebook (ECB) mode
* Each block of data is encrypted separately
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

## Stream ciphers
* Encrypt one bit or byte at a time
* Faster than block ciphers
* Easier/cheaper to implement in hardware than block ciphers
* Harder to implement "securely" than block ciphers
* Often used when plaintext comes in quantities of unknowable length (such as secure wireless connection)
* Less susceptible to noise than block ciphers
* No integrity or authentication
* Examples: Trivium, ChaCha/Salsa20, RC4


## Resources and references
* [Stack overflow question](https://security.stackexchange.com/questions/334/advantages-and-disadvantages-of-stream-versus-block-ciphers)
* [Wikipedia on block ciphers modes of operation](https://en.wikipedia.org/wiki/Block_cipher_mode_of_operation)
* [Trivium](https://en.wikipedia.org/wiki/Trivium_(cipher))
* [ChaCha](https://en.wikipedia.org/wiki/Salsa20)
* [RC4](https://en.wikipedia.org/wiki/RC4)
* [Blowfish](https://en.wikipedia.org/wiki/Blowfish_(cipher))
* [Symmetric Block Cipher Versus Stream Cipher](https://blogs.getcertifiedgetahead.com/symmetric-block-cipher-versus-stream-cipher/)
* [GCM vs CBC mode of operation](https://www.privateinternetaccess.com/helpdesk/kb/articles/what-s-the-difference-between-aes-cbc-and-aes-gcm)
