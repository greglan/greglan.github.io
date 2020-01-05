---
layout: page
title:  "RSA cryptosystem and derivatives"
permalink: "rsa.html"
tags: [security, algorithms, cryptography, maths]
summary: "Presentation of RSA and its derivatives such as the Diffie-Hellman and ElGamal schemes"
---
{% include latex-commands.html %}

## RSA
### Introduction
* RSA: Rivest Shamir Adleman. Designed in 1977
* First public-key encryption scheme
  
  Can also be used for digital signing
* Base on a *trap-door* function: transforms an input $$x$$ into an $$y$$ in the
same range such that computing $$y$$ from $$x$$ is easy using the public key,
but computing $$x$$ from $$y$$ is practically impossible unless the private key
is known [1]
* Euler's $$\varphi$$ function [2]: $$\varphi(n) = \# \{0 < k < n, \; gcd(k,n)=1 \}$$
  
  Examples: $$\varphi(7) = \# \{1, 2, 3, 4, 5, 6\} = 6$$, $$\varphi(8) = \# \{1, 3, 5, 7 \} = 4$$
* [Euler's theorem](https://en.wikipedia.org/wiki/Euler%27s_theorem): $$\forall a,n \in \Z, \; \gcd(a,n)=1, \quad a^{\varphi(n)} = 1 \mod n$$
* [Fermat's little theorem](https://en.wikipedia.org/wiki/Fermat%27s_little_theorem): $$\forall a \in \Z, \; \forall p \in \P, \quad a^p = a \mod p$$
  
  If $$a$$ not divisible by $$p$$, then $$a^{p-1} = 1 \mod p$$



### Key generation
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

### Encryption
* Un-padded plaintext: $$M$$
* Padded plaintext: $$m$$
* Turn the message $$M$$ into an integer $$m$$ using a padding scheme.
* Consequence: $$0 \leqslant m < n$$
* Ciphertext $$c = m^e \mod n$$

### Decryption
* For $$m$$ invertible with modulo $$n$$, we have $$m^{\varphi(n)} = 1 \mod n$$ (Fermat's little theorem).
  
  Decryption: $$c^d \mod n = m^{ed} \mod n = m^{1+k \varphi(n)} \mod n = m \mod n$$
* Inverse calculation in Python (from *pycrypto* package):
```python
from Crypto.Util.number import inverse
d = inverse(e, phi)
```
* Decryption using openssl: `openssl rsautl -inkey private.key -decrypt -in message.enc`


### Signature
* Given a public message $$m$$ (contract to be signed), compute $$m^d \mod n$$ and send $$(m^d, (e, n))$$
* Given a signature $$sig$$, compute $$sig^e = m^{ed} = m \mod n$$


### Security
* First risk: ability to factor $$n$$ in $$p,q$$. Then the cryptosystem would
  be broken.

  Hence $$n$$ should be big enough (2048 bits ok, but 4096 bits preferred)
  to make factoring harder.

  $$p$$ and $$q$$ should be random and unrelated primes of similar sizes.
* Second risk: ability to compute $$x$$ from $$x^e \mod n$$


### Notes on the implementation
#### Efficient multiplication with double-and-add [2]
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

#### Efficient exponentiation with square-and-multiply [2]
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

#### Reversing tips
* Large integers represented as arrays
* Large integers manipulation, so additions and other basic operations will have their own functions.
* Modular exponentiation -> square exponentiation: to check if an integer is even, check the last digit



## Diffie-Hellman key exchange
* Allows to compute a shared secret key [3]
  
  Uses a large prime $$p$$ and non zero $$g \mod p$$ as a public setup
* Principle: Alice sends her public key to Bob, and Bob sends his public key to Alice, and they can deduce a shared secret.
* Protocol:
  - choose a large prime $$p$$
  - chose a generator $$g$$ of $$\Z/p\Z^*$$
  - Alice generates a key pair $$(sk_A, pk_A) = (d \in \Z, g^d \mod p)$$ and sends $$g^d$$ to Bob
  - Bob generates a key pair $$(sk_B, pk_B) = (h \in \Z, g^h \mod p)$$ and sends $$g^h$$ to Alice
  - Alice computes the shared secret $$ss = (g^h)^d = g^{dh} \mod p$$ 
  - Bob computes the shared secret $$ss = (g^d)^h = g^{dh} \mod p$$


## ElGamal
### Encryption
* Setup:
  - Alice chooses a prime $$p$$ and a generator $$g$$ of $$\Z/p\Z^*$$
  - Alice chooses a random secret $$d \in \set{1, \dots, p-1}$$ and computes $$pk_A = g^d \mod p$$
  - Alice sends his public key $$(p, g, pk_A)$$ to Bob
* Encryption:
  - Bob chooses a random secret $$h \in \set{1, \dots, p-1}$$ and computes $$pk_B = g^h \mod p$$
  - Bob computes the shared secret $$ss = pk_A^h \mod p$$
  - Bob computes the encrypted message $$enc_m = m \cdot ss$$
  - Bob sends the ciphertext $$(pk_B, enc_m)$$ to Alice
* Decryption:
  - Alice computes the shared secret $$ss = pk_B^d \mod p$$
  - Bob computes the ciphertext $$m = enc_m \cdot ss^{-1} = enc_m \cdot pk_B^{p-1-d} \mod p$$
* Inverse of the shared secret: $$ss \cdot pk_B^{p-1-d} = g^{dh} \cdot g^{h(p-1-d)} = (g^{p-1})^h = 1 \mod p $$ hence $$ss = pk_B^{p-1-d}$$
* Secret reuse: if $$m$$ is known, the shared secret $$ss$$ can be recovered from the ciphertext, so use a new secret $$h$$ for each message

### ElGamal signatures
* The message $$m$$ is assumed to be public. Similar to a contract to be signed
* Setup:
  - Choose a prime $$p$$ and a generator $$g$$ of $$\Z/p\Z^*$$
  - The signer Alice generates a key pair $$(sk, pk) = (a, g^a \mod p)$$ where $$a \in \set{0, \dots, p-1}$$ is an integer and publishes $$pk$$ as her identity
  - The verifier generates a message $$m \mod (p-1)$$ to be signed
* Signing:
  - Pick a random integer $$k \in \set{0, \dots, p-1}$$
  - Compute $$r = g^k \mod p$$
  - Compute $$s = k^{-1}(m-ar) \mod (p-1)$$
  - Publish a signed message $$(r, s)$$
* Verify: the verifier checks that $$g^m = g^{ar} \cdot g^{k k^{-1}(m-ar)} = pk^r \cdot r^s \mod p$$
* Secrecy of the nonce $$k$$: if an attacker knows $$k$$ he can recover $$a$$
* Nonce reuse: if $$k$$ is used more than once an attacker can recover $$k$$ and hence $$a$$
  
  Proof: assume we sign two messages with the same nonce $$k$$. We get rwo signatures $$(r, s_1)$$ and $$(r, s_2)$$ such that $$s_1 = k^{-1}(m_1-ar) \mod (p-1)$$ and $$s_2 = k^{-1}(m_2-ar) \mod (p-1)$$. Then $$k = (m_1-m_2)(s_1-s_2)^{-1} \mod (p-1)$$
 * Remark on the message: the message is taken modulo $$p-1$$ since it appears in the exponent of $$g$$


## Attacks on the discrete logarithm problem
### Pohlig-Hellman
* Elements of order $$d$$ in $$\Z/p\Z$$ with $$p \in \P$$: if $$g$$ is a generator of $$\Z/p\Z$$, then $$g^\frac{p-1}{d}$$ is of order $$d$$
* Problem statement: given $$p \in \P$$, $$g \in \Z/p\Z^*$$ of order $$p-1$$ and $$g^a$$, find $$a$$
* Algorithm:
  - factorize $$p-1$$ into primes powers: $$p-1 = q_1^{e_1} \dots q_r^{e_r}$$
  - for each $$i \in \set{1, \dots, r}$$:
    * write $$a = \sum_k a_k q_i^k$$ with $$a_k \in \set{0, \dots, q_i-1}$$
    * compute $$a_0$$ which amounts to computing $$a \mod q_i$$ using $$(g^a)^{\frac{p-1}{q_i}} = \left( g^{\frac{p-1}{q_i}} \right)^{a_0} \mod p$$
      
      Indeed: $$(g^a)^{\frac{p-1}{q_i}} = \left( g^{\frac{p-1}{q_i}} \right)^a = $$ 
      $$\left( g^{\frac{p-1}{q_i}} \right)^{a_0} \cdot \left( g^{\frac{p-1}{q_i}} \right)^{q_i(a_1 + a_2 q_i + \dots)} = $$
      $$\left( g^{\frac{p-1}{q_i}} \right)^{a_0} \cdot \left( g^{p-1} \right)^{a_1 + a_2 q_i + \dots} = $$
      $$\left( g^{\frac{p-1}{q_i}} \right)^{a_0}\mod p$$
    * for each $$k \in \set{1, \dots, e_i -1}$$: given $$a_0, \dots, a_{k-1}$$, compute $$a_k$$ i.e compute $$a \mod q_i^{k+1}$$ using $$(g^a)^{\frac{p-1}{q_i^{k+1}}} = \left( g^{\frac{p-1}{q_i^{k+1}}} \right)^{a_0 + a_1 q_1 + \dots + a_{k-1} q_i^{k-1}} \cdot \left( g^{\frac{p-1}{q_i}} \right)^{a_k} \mod p$$

      Indeed: $$(g^a)^{\frac{p-1}{q_i^{k+1}}} = $$ 
      $$(g^{\frac{p-1}{q_i^{k+1}}})^a = $$ 
      $$\left( g^{\frac{p-1}{q_i^{k+1}}} \right)^{a_0 + a_1 q_1 + \dots + a_{k-1} q_i^{k-1}} \cdot \left( g^{\frac{p-1}{q_i^k}} \right)^{a_k q_i^k} \cdot \left( g^{\frac{p-1}{q_i}} \right)^{q_i(a_{k+1} + a_{k+2} q_i\dots} \mod p$$
  - using Euclid's algorithm, compute $$a \mod p-1$$ from the values of $$a \mod q_i^{e_i}$$
* Example: solve $$2^a = 17 \mod 37$$
  - factorize $$p-1 = 36 = 4 \times 9 = 2^2 \times 3^2$$
  - for $$i=0$$:
    * write $$a = a_0 + 2 a_1 + 4 a_2 + \dots$$
* Complexity: polynomial in $$l$$ with $$l$$ the largest prime dividing $$p-1$$
* Attack thwarted by choosing $$p \in \P$$ such that there is at least one large prime dividing $$p-1$$

### Baby-step-giant-step
* Problem statement: given $$g \in \F_q^*$$ of order $$l$$, $$g$$ and $$g^a$$, find $$a$$

  Enough to compute $$a \mod l$$
* Algorithm:
  - for $$i \in \set{0, \dots, \lfloor \sqrt l \rfloor}$$, compute and save $$b_i = g^i \mod q$$
  - for $$j \in \set{0, \dots, \lfloor \sqrt l + 1\rfloor}$$, compute $$c_j = g^a g^{-j \lfloor \sqrt l \rfloor} \mod q$$ and stop if there is an $$i$$ such that $$c_j = b_i$$
  - return $$a = i + j \lfloor \sqrt l \rfloor$$
* Maximum number of multiplications: $$2 \sqrt l$$ multiplications
  
  Time complexity: $$\mathcal O (\sqrt l)$$

  Storage complexity: $$\mathcal O (\sqrt l)$$

### Pollard's $$\rho$$ method
* Algorithm:
  - initialization: $$(G_0, b_0, c_0) = (g, 1, 0)$$
  - compute iteratively $$(G_0, b_0, c_0) = \begin{cases}(g G_i, b_i+1, c_i) \text{ if } G_i=0 \mod 3\\ (g^a G_i, b_i, c_i+1) \text{ if } G_i=1 \mod 3\\ (G_i^2, 2b_i, 2c_i) \text{ if } G_i=2 \mod 3 \end{cases}$$
  - stop when we there is $$i\neq j$$ such that $$G_i = G_j$$
* Number of steps: $$\sqrt{\frac{\pi}{2}l}$$
  
  Average time complexity: $$\mathcal O (\sqrt l)$$

  Storage complexity: $$\mathcal O (1)$$

### Index calculus

## Resources and references
* [1] *Jean-Philippe Aumasson*, Serious Cryptography
* [2] *Chloe Martindale*, Cryptography A lecture 7
* [3] *Chloe Martindale*, Cryptography A lecture 9
* [Wikipedia article](https://en.wikipedia.org/wiki/RSA_(cryptosystem))
* [LiveOverflow on RSA basics](https://www.youtube.com/watch?v=sYCzu04ftaY)

### Tools
* [Openssl commands](https://raymii.org/s/tutorials/Encrypt_and_decrypt_files_to_public_keys_via_the_OpenSSL_Command_Line.html)
* [FactorDB](http://factordb.com/)
* [Python pycrypto lib](https://pypi.org/project/pycrypto/)
* [RSA CTF tool](https://github.com/Ganapati/RsaCtfTool/blob/master/README.md)
* [RSA tool example use](https://m0x39.blogspot.com/2012/12/0x00-introduction-this-post-is-going-to.html)

### CTF tasks
* [Crypto CTF writeups](https://www.youtube.com/watch?v=bAlF22mIYNk)
* [Another example of solving a RSA CTF](https://www.youtube.com/watch?v=Ovi33rfaLLk)
* [Solving multiexponent RSA](https://www.youtube.com/watch?v=EiW0YQDp2Yc&list=WL&index=90)
* [LiveOverflow on RSA CPA](https://www.youtube.com/watch?v=bFfyROX7V0s)
* [Another CPA attack](https://wiki.newae.com/Tutorial_B11_Breaking_RSA)
* [LiveOverflow on reversing RSA](https://www.youtube.com/watch?v=dcR1dkZJ7iU)
* [RSA reversing](https://resources.infosecinstitute.com/breaking-software-protection-rsa/)

