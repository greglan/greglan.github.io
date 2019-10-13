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
* Base on a *trap-door* function: transforms an input $$x$$ into an $$y$$ in the
same range such that computing $$y$$ from $$x$$ is easy using the public key,
but computing $$x$$ from $$y$$ is practically impossible unless the private key
is known [1]

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
* Choose $$p, q \in \P$$ at random and similar in magnitude.
  Should differ in length by a few digits to make factoring harder
* Key length $$n = pq$$
* Compute $$\varphi(n) = (p-1) (q-1)$$
* Choose a random public exponent $$e$$ prime in $$\mathbb{Z}_n^*$$ (hence $$e$$
  has an inverse modulo $$\varphi(n)$$).

  Note that this means that $$e \leq \varphi(n)$$
* Compute the private exponent $$d$$ as the inverse of $$e$$ in
  $$\mathbb{Z}_n^*$$

  This can be done using the Euclidean algorithm to find to integers $$d,a$$ such
  that $$ed + a \varphi(n) = 1$$
* Read public key information: `openssl rsa -pubin -inform PEM -text -noout -in key.pub`

## Encryption
* Un-padded plaintext: $$M$$
* Padded plaintext: $$m$$
* Turn the message $$M$$ into an integer $$m$$ using a padding scheme.
* Consequence: $$0 \leqslant m < n$$
* Ciphertext $$c = m^e \equiv \mod n$$
* Decryption using openssl: `openssl rsautl -inkey private.key -decrypt -in message.enc`


## Security
* First risk: ability to factor $$n$$ in $$p,q$$. Then the cryptosystem would
  be broken.

  Hence $$n$$ should be big enough (2048 bits ok, but 4096 bits preferred)
  to make factoring harder.

  $$p$$ and $$q$$ should be random and unrelated primes of similar sizes.
* Second risk: ability to compute $$x$$ from $$x^e \mod n$$


## Reversing
* Large integers represented as arrays
* Large integers manipulation, so additions and other basic operations will have their own functions.
* Modular exponentiation -> square exponentiation: to check if an integer is even, check the last digit


## Resources and references
* [1] *Jean-Philippe Aumasson*, Serious Cryptography
* [Wikipedia article](https://en.wikipedia.org/wiki/RSA_(cryptosystem))
* [LiveOverflow on RSA basics](https://www.youtube.com/watch?v=sYCzu04ftaY)
* [LiveOverflow on reversing RSA](https://www.youtube.com/watch?v=dcR1dkZJ7iU)
* [LiveOverflow on RSA CPA](https://www.youtube.com/watch?v=bFfyROX7V0s)
* [Another CPA attack](https://wiki.newae.com/Tutorial_B11_Breaking_RSA)
* [RSA reversing](https://resources.infosecinstitute.com/breaking-software-protection-rsa/)
* [RSA CTF tool](https://github.com/Ganapati/RsaCtfTool/blob/master/README.md)
* [FactorDB](http://factordb.com/)
* [RSA tool example use](https://m0x39.blogspot.com/2012/12/0x00-introduction-this-post-is-going-to.html)
* [Crypto CTF writeups](https://www.youtube.com/watch?v=bAlF22mIYNk)
