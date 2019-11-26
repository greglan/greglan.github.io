---
layout: page
title:  "RSA cryptosystem"
permalink: "rsa.html"
tags: [security, algorithms, cryptography, maths]
summary: ""
---
$$
\newcommand{\P}{\mathbb{P}}
\newcommand{\Z}{\mathbb{Z}}
\newcommand{\N}{\mathbb{N}}
$$

## Introduction
* RSA: Rivest Shamir Adleman. Designed in 1977
* First public-key encryption scheme
  
  Can also be used for digital signing
* Base on a *trap-door* function: transforms an input $$x$$ into an $$y$$ in the
same range such that computing $$y$$ from $$x$$ is easy using the public key,
but computing $$x$$ from $$y$$ is practically impossible unless the private key
is known [1]
* Euler's $$\varphi$$ function: $$\varphi(n) = \# \{0 < k < n, \; gcd(k,n)=1 \}$$
  
  Examples: $$\varphi(7) = \# \{1, 2, 3, 4, 5, 6\} = 6$$, $$\varphi(8) = \# \{1, 3, 5, 7 \} = 4$$
* Fermat's little theorem: $$\forall a \in \Z, \; \forall n > 1, \; gcd(a,n)=1 \Rightarrow a^{\varphi(n)} = 1 \mod n$$


## Key generation
* Choose $$p, q \in \P$$ at random and similar in magnitude.
  Should differ in length by a few digits to make factoring harder
* Key length $$n = pq$$. Also called *modulus*.
* Compute $$\varphi(n) = (p-1) (q-1)$$
* Choose a random *public key exponent* $$e$$ prime in $$\mathbb{Z}_n^*$$ (hence $$e$$
  has an inverse modulo $$\varphi(n)$$ because coprime with $$\varphi(n)$$).

  Note that this means that $$e \leq \varphi(n)$$

  Public key: $$(e, n)$$
* Compute the *private key exponent* $$d$$ as the inverse of $$e$$ in
  $$\mathbb{Z}_n^*$$ (which exists because $$e$$ coprime with $$\varphi(n)$$)

  This can be done using the Euclidean algorithm to find to integers $$d,a$$ such
  that $$ed + a \varphi(n) = 1$$

  Private key: $$(n, d)$$
* Read public key information: `openssl rsa -pubin -inform PEM -text -noout -in key.pub`

## Encryption
* Un-padded plaintext: $$M$$
* Padded plaintext: $$m$$
* Turn the message $$M$$ into an integer $$m$$ using a padding scheme.
* Consequence: $$0 \leqslant m < n$$
* Ciphertext $$c = m^e \mod n$$

## Decryption
* For $$m$$ invertible with modulo $$n$$, we have $$m^{\varphi(n)} = 1 \mod n$$.
  
  Decryption: $$c^d \mod n = m^{ed} \mod n = m^{1+k \varphi(n)} \mod n = m \mod n$$
* Inverse calculation in Python (from *pycrypto* package):
```python
from Crypto.Util.number import inverse
d = inverse(e, phi)
```
* Decryption using openssl: `openssl rsautl -inkey private.key -decrypt -in message.enc`


## Security
* First risk: ability to factor $$n$$ in $$p,q$$. Then the cryptosystem would
  be broken.

  Hence $$n$$ should be big enough (2048 bits ok, but 4096 bits preferred)
  to make factoring harder.

  $$p$$ and $$q$$ should be random and unrelated primes of similar sizes.
* Second risk: ability to compute $$x$$ from $$x^e \mod n$$


## Notes on the implementation
### Efficient multiplication with double-and-add
* Problem statement and notations: with $$q = \sum_{i=0}^N q_i 2^i$$ compute $$pq = \sum_{i=0}^N q_i (2^i p)$$
* Double step: compute the $$2^ip$$ for $$i \in \{0, \dots, N \}$$

  $$2^0p = p \rightarrow 0$$ additions

  $$2^1p = p + p \rightarrow 1$$ additions

  $$2^2p = 2p + 2p \rightarrow 1$$ additions

  ...

  $$2^Np = 2^{N-1}p + 2^{N-1} p \rightarrow N$$ additions

  Complexity of the doubling step: $$N$$ additions
* Add step: let $$i_k$$ the indices such that $$q_{i_k} \neq 0$$.
  
  Compute $$p q = \sum_{k} 2^{i_k} p$$. Complexity: $$k \leqslant N$$ additions.
* Total complexity: $$2 N$$ additions in the worst case

### Efficient exponentiation with square-and-multiply
* Problem statement: with $$e = \sum_{i=0}^N e_i 2^i$$ compute $$m^e \mod n = m^{\sum_{i=0}^N e_i 2^i} \mod n = \prod_{i=0}^N (m^{2^i})^{e_i} \mod n $$
* Square step: compute the $$m^{2^i} \mod n$$

  $$m^{2^0} = m \mod n \rightarrow 0$$ squarings

  $$m^{2^1} = m^2 \mod n \rightarrow 1$$ squaring

  $$m^{2^2} = (m^2)^2 \mod n \rightarrow 1$$ squaring

  ...

  $$m^{2^N} = (m^{2^{N-1}})^2 \mod n \rightarrow 1$$ squaring

  Complexity: $$N$$ squarings so $$N$$ multiplications so at most $$2N^2$$ additions
* Multiply step: let $$i_k$$ the indices such that $$e_{i_k} \neq 0$$.
  
  Compute $$m^e = \prod_{k} (m^{2^{i_k}})^{e_{i_k}} \mod n $$. Complexity: $$k \leqslant N$$ multiplications so at most $$2N^2$$ additions.
* Total complexity: $$4 N^2$$ additions in the worst case

### Reversing tips
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
* [Python pycrypto lib](https://pypi.org/project/pycrypto/)
* [Openssl commands](https://raymii.org/s/tutorials/Encrypt_and_decrypt_files_to_public_keys_via_the_OpenSSL_Command_Line.html)
