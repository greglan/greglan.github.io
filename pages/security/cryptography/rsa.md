---
layout: page
title:  "RSA cryptosystem"
permalink: "rsa.html"
tags: [security, algorithms, cryptography, maths]
summary: ""
---
$$
\newcommand{\P}{\mathbb{P}}
$$

## Introduction
* RSA: Rivest Shamir Adleman
* Designed in 1977
* First public-key encryption scheme
* Can also be used for digital signing

## Principle
* Message $$m$$, cipher text $$c$$
* Modulus $$n = pq$$ with $$p,q \in \P$$
* Public key exponent: $$e$$ (inverse of the private key exponent)
* Public key: $$(n, e)$$
* Private key exponent $$d$$ (inverse of the public key exponent)
* Private key: $$(n, d)$$
* Encryption of plaintext: $$c = m^e \mod n$$
* Decryption of cipher text: $$c^d \mod n = m^{ed} \mod n = m \mod n$$


## Key generation
* Choose $$p, q \in \P$$
* Key length $$n = pq$$

## Encryption
* Un-padded plaintext: $$M$$
* Padded plaintext: $$m$$
* Turn the message $$M$$ into an integer $$m$$ using a padding scheme.
* Consequence: $$0 \leqslant m < n$$
* Ciphertext $$c = m^e \equiv \mod n$$

## Implementation
* $$p$$ and $$q$$ chosen at random and similar in magnitude. Should differ in length by a few digits to make factoring harder


## Reversing
* Large integers represented as arrays
* Large integers manipulation, so additions and other basic operations will have their own functions.
* Modular exponentiation -> square exponentiation: to check if an integer is even, check the last digit


## Resources and references
* [Wikipedia article](https://en.wikipedia.org/wiki/RSA_(cryptosystem))
* [LiveOverflow on RSA basics](https://www.youtube.com/watch?v=sYCzu04ftaY)
* [LiveOverflow on reversing RSA](https://www.youtube.com/watch?v=dcR1dkZJ7iU)
* [LiveOverflow on RSA CPA](https://www.youtube.com/watch?v=bFfyROX7V0s)
* [Another CPA attack](https://wiki.newae.com/Tutorial_B11_Breaking_RSA)
* [RSA reversing](https://resources.infosecinstitute.com/breaking-software-protection-rsa/)
