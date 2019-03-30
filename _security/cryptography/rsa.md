---
title:  "RSA"
topic: "cryptography"
tags: security algorithms cryptography
---
$$
\newcommand{\P}{\mathbb{P}}
$$

# Principle
* Message $$m$$
* Modulus $$n$$
* Public key exponent:$$e$$
* Public key: $$(n, e)$$
* Private key exponent $$d$$
* Private key: $$(n, d)$$
* $$m^{ed} \equiv m \mod n$$

# Key generation
* Choose $$p, q \in \P$$
* Key length $$n = pq$$

# Encryption
* Un-padded plaintext: $$M$$
* Padded plaintext: $$m$$
* Turn the message $$M$$ into an integer $$m$$ using a padding scheme.
* Consequence: $$0 \leqslant m < n$$
* Ciphertext $$c = m^e \equiv \mod n$$

# Implementation
* $$p$$ and $$q$$ chosen at random and similar in magnitude. Should differ in length by a few digits to make factoring harder


# Reversing
* Large integers represented as arrays
* Large integers manipulation, so additions and other basic operations will have their own functions.
* Modular exponentiation -> square exponentiation: to check if an integer is even, check the last digit


# Resources and references
* [Wikipedia article](https://en.wikipedia.org/wiki/RSA_(cryptosystem))
* [LiveOverflow on RSA basics](https://www.youtube.com/watch?v=sYCzu04ftaY)
* [LiveOverflow on reversing RSA](https://www.youtube.com/watch?v=dcR1dkZJ7iU)
* [LiveOverflow on RSA CPA](https://www.youtube.com/watch?v=bFfyROX7V0s)
