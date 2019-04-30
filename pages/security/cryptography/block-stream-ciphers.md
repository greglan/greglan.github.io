---
layout: page
title:  "Block and stream ciphers"
permalink: "block-stream-ciphers.html"
tags: [security, cryptography]
summary: ""
---

## Block ciphers
* Operate on a block of data at a time
* Mode of operation: how to "repeatedly apply a cipher's single-block operation to securely transform amounts of data larger than a block"
* Initialization Vector (IV)/starting variable.
* Padding
* Cipher Block Chaining (CBC) mode: each block of plaintext is XORed with the previous ciphertext block before being encrypted. Requires an IV for the first block. Most used mode of operation.
* CBC drawback: encryption can't be serialized
* Examples: DES, RC5, AES, Blowfish

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
