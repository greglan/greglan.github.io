---
layout: page
title:  "Some cryptography concepts"
permalink: "introduction.html"
tags: [security, cryptography]
summary: "Presentation of some basic concepts of cryptography"
---

## Confusion and diffusion properties
* Confusion property: each binary digit/bit of the ciphertext should depend on
several parts of the key, obscuring the connections between the two.
* Diffusion property: if we change a single bit of the plaintext, then
(statistically) half of the bits in the ciphertext should change, and similarly,
 if we change one bit of the ciphertext, then approximately one half of the
 plaintext bits should change. Since a bit can have only two states, when they
 are all re-evaluated and changed from one seemingly random position to another,
 half of the bits will have changed state.


## Symmetric and asymmetric encryption
### Symmetric encryption
* Faster than asymmetric encryption. Problem: exchange of the secret key
* DES: one of the original and oldest encryption schemes developed by IBM.
Flawed and breakable. Was used in the original hashing system of LANMAN hashes
in early (pre-2000) Windows systems
* 3DES: developed in response to the flaws in DES. Applies the DES algorithm
three times making it slightly more secure than DES
* AES: not a encryption algorithm but rather a standard developed by National
Institute for Standards and Technology (NIST). Used in WPA2, SSL/TLS
* RC4: developed by Ronald Rivest. Used in VoIP and WEP
* Blowfish: designed by Bruce Schneier. Uses a variable key length. Very secure.
Not patented (public domain), so can be used without license
* Twofish: stronger version of Blowfish using 128/256-bit key. Used in Cryptcat
and OpenPGP. Public domain

### Asymmetric encryption
* Around 1000 times slower that symmetric encryption. Advantage: good for
sharing keys
* Trapdoor function: function that takes a number $$x$$ to another number
$$y$$ in the same range such that computing $$x \to y$$ is easy but $$y \to x$$
is practically impossible without the private key [1, p182]
* Diffie-Hellman: allows to generate keys without having to exchange the keys
* RSA: by Rivest, Shamir, and Adleman. Uses factorization of very large prime
numbers as the relationship between the two keys
* PKI: Public key infrastructure
* ECC: Elliptical curve cryptography. Efficient: requires less computing power and
 energy consumption for the same level of security. Relies upon the shared
 relationship of two functions being on the same elliptical curve. Becoming
 increasing popular in mobile computing
* PGP: Pretty Good Privacy

## Hash functions
* MD5: most widely used. 128-bit and produces a 32-character message digest
* SHA1: developed by the NSA. More secure than MD5, but not as widely used.
 160-bit digest usually rendered in 40-character hexadecimal. Often used for
 certificate exchanges in SSL, but because of recently discovered flaws, is being
 deprecated for that purpose

## Cryptanalysis
* Kerckhoff's principle: the security of the cipher should rely only on the key,
and not on the secrecy of the cipher.

### Black box models [1, p11]
#### Passive techniques
* Ciphertext only attacks. Very low chances of a successful cryptanalysis
* Known plaintext attacks. Example of vulnerable ciphers: PKZIP, XOR

#### Active attacks
* Chosen plaintext attacks: the attacker can encrypt at will
* Chosen cipher text attacks: the attacker can both encrypt and decrypt at will

### Grey box models [1, p12]
* Assume access to the cipher's implementation
* Side channel: source of information that depends on the implementation of the
ciphers (time, power consumption, noise...)
* Side channel attacks: non-invasive. Don't alter the operation of the cipher
* Invasive attacks: more advanced and powerful. Requires special equipment
(laser fault injections, chip reversing...)

## Resources and references
* [Confusion and diffusion properties](https://en.wikipedia.org/wiki/Confusion_and_diffusion)
* [Attack models fro cryptanalysis](https://www.hackers-arise.com/single-post/2019/04/30/Cryptography-Basics-Part-2-Attack-Models-for-Cryptanalysis)
* [Cryptography basics](https://www.hackers-arise.com/cryptography-basics)
* [1] *Jean-Philippe Aumasson*, Serious Cryptography
