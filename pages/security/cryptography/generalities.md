---
layout: page
title:  "Introduction and generalities"
permalink: "generalities.html"
tags: [security, cryptography]
summary: "Presentation of some basic concepts of cryptography"
---
{% include latex-commands.html %}
$$
\newcommand{\A}{\mathbb{A}}
\newcommand{\adv}{\text{Adv}}
\newcommand{\exp}{\text{Edv}}
$$
{% comment %}
Move Adv and Exp to latex macros
{% endcomment %}


## Introduction
### Definitions
* Cryptology = cryptography + cryptanalysis
* 2 levels of confidentiality: the content of the messages or no information at all
  
  Privacy: hide that messages are being exchanged
* Metadata: everythnig apart from the contents of the message
* Authenticity: ~ integrity of identity, an adversary cannot cause 
  a non original message to be accepted. 
  Hence the recipient can be certain of where the message came from
* Some questions: parties involved, their resources (computing, people, cash...),
  have the parties met before, how/what/why do they communicate
* Cryptogram: ciphertext

### Cryptographic properties
* Confusion: each binary digit/bit of the ciphertext should depend on
several parts of the key, obscuring the connections between the two.
* Diffusion: if we change a single bit of the plaintext, then
(statistically) half of the bits in the ciphertext should change, and similarly,
 if we change one bit of the ciphertext, then approximately one half of the
 plaintext bits should change. Since a bit can have only two states, when they
 are all re-evaluated and changed from one seemingly random position to another,
 half of the bits will have changed state.
* Malleability: given a cipher text, the attacker can build another valid cipher
text that is related to the original plain text. Undesirable property

### Stream ciphers
* Encrypt one bit or byte at a time
* Faster than block ciphers
* Easier/cheaper to implement in hardware than block ciphers
* Harder to implement "securely" than block ciphers
* Often used when plaintext comes in quantities of unknowable length (such as secure wireless connection)
* Less susceptible to noise than block ciphers
* No integrity or authentication
* Examples: [Trivium](https://en.wikipedia.org/wiki/Trivium_(cipher)), [ChaCha/Salsa20](https://en.wikipedia.org/wiki/Salsa20), [RC4](https://en.wikipedia.org/wiki/RC4)

### Hash functions
* MD5: most widely used. 128-bit and produces a 32-character message digest
* SHA1: developed by the NSA. More secure than MD5, but not as widely used.
 160-bit digest usually rendered in 40-character hexadecimal. Often used for
 certificate exchanges in SSL, but because of recently discovered flaws, is being
 deprecated for that purpose

### Symmetric and asymmetric encryption
#### Symmetric encryption
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

#### Asymmetric encryption
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



## Homomorphic encryption
* Additively homomorphic encryption scheme: $$f(x_1+x_2) = f(x_1)\oplusf(x_2)$$ for $$f \in \{E, D\}$$
* Multiplicatively homomorphic encryption scheme: $$f(x_1\times x_2) = f(x_1)\otimes f(x_2)$$ for $$f \in \{E, D\}$$
* Fully homomorphic encryption scheme: scheme which is both additively and multiplicatively homomorphic
* Examples: RSA/ElGamal are multiplicatively homomorphic

## Security considerations
* Encryption scheme: encryption algorithm $$E$$, decryption algorithm $$D$$ and
  key generation algorithm $$Kg$$ (specify how keys are to be drawn)
* Symmetric enciphering scheme $$E$$: $$E =(Kg, E, D)$$ algorithms where
  - $$Kg$$ generates $$K \in \mathcal K$$ with $$K$$ a key and $$\mathcal K$$ the keyspace
  - $$C \leftarrow E_k(M \in \mathcal M) \in \mathcal C = \mathcal M$$ with $$\mathcal M$$ the message space and $$\mathcal C$$ the ciphertext space
  - $$M' \leftarrow D_k(C)$$ deciphers the message
* Additional parameters: related to the kind of messages the scheme suppports or level of security. usually fed into $$Kg$$ only. Example message length
* Encryption vs enciphering [12, 2.1.1]: enciphering requires that the output space is the same as the message space
* Correct enciphering scheme/correctness: $$\forall K \in \mathcal K, \, \forall M \in \mathcal M, \quad D_k(E_k(M))=M$$

* *Security*: $$\P(M=m \vert C = c) = \P(M=m)$$ (an eavesdropper gain no
  information)

* Kerckhoff's principle: the security of the cipher should rely only on the key,
and not on the secrecy of the cipher.
  
  Consequence: always assume an attacker knows the algorithm used
* If we want a good cryptanalysis to be done on the cipher, we have to publish
  it so that we can perform the most comprehensive cryptanalysis.
* Cryptanalysis: assume $$K_g, E, D$$ are known. Definition of $$\text{Adv}_E^\text{kr-pas}(A)$$
* Guessing attack: $$\mathbb{A}_\text{guess}$$. Value for the one-time pad

* Blackboard: $$\text{Exp}_E^\text{ind-0} = \text{Exp}_E^\text{1lor-1*} \Leftrightarrow \text{Exp}_E^\text{ind-b} = \text{Exp}_E^\text{1lor-b*}$$ for $$b \in \set{0, 1}$$
  
  $$\text{Adv}(\mathbb{A}) = \P(\text{Exp}_E^\text{ind-0}(\mathbb{A}): \hat{b} = 1) - \P(\text{Exp}_E^\text{ind-1}(\mathbb{A}) : \hat{b} = 1)$$

  ind: indistinguishability
* Ind$: indistinguishability from random
* In $$\text{Exp}\text{ind-real/ideal}$$ the key is not used

### Perfect secrecy [2]
* Captures the idea that an attacker doesn't learn anything from the ciphertext

  In other words, prevents the attacker from learning partial information 
* Hypothesis: the message space is the cipher space and the length of the
  message is known to the attacker
* Formal definition: $$\forall C \in \mathcal C, \forall M \in \mathcal M, \quad \P(M^*= M \vert C^* = C) = \P(M^* = M)$$
* Ciphertext-oriented definition: $$\forall C \in \mathcal C, \forall M \in \mathcal M, \quad \P(C^*= C \vert M^* = M) = \P(C^* = C)$$
  
  Proof: we have $$\P(M^* = M \vert C^* =C) = \frac{\P(M^* = M, C^* = C)}{\P(C^* = C)} = \frac{\P(C^* =C \vert M^* = M) \P(M^* = M)}{\P(C^* = C)}$$
  and $$\P(m \vert C^* =C) = \P(M^* = M)$$, so that $$\frac{\P(C^* =C \vert M^* = M) \P(M^* = M)}{\P(C^* =C)} = \P(M^* = M)$$
  which amounts to $$\P(C^* = C \vert M^* = M) = \P(C^* = C)$$
* Another equivalent definition: $$\forall C \in \mathcal C, \forall M_0,M_1 \in \mathcal M, \quad \P(C^*= C \vert M^* = M_0) =  \P(C^*= C \vert M^* = M_1)$$
* Equivalent definition for uniform message distributions: 
  $$\forall C \in \mathcal C, \forall M \in \mathcal M, \quad \P(C^*= C \vert M^* = M) = \frac{1}{\vert \mathcal C \vert}$$


### Key recovery
* Security is always defined relative to the two following questions:
  - What are the opponent's capabilities ?
  - What are the goals of the adversary ? One of them is key recovery, according
  to Kerchoff's principle
* Advantage of an adversary [2, p5]: probability that an adversary outputs a correct key
  
  Interpretation [2, p7]: if advantage is close to zero, the adversary is ineffective, if it is close to 1, the adversary successfully breaks the scheme

  Insecure scheme [2, p7]: scheme such that there exists an adversary that successfully break the scheme. 
  
  Method to prove a scheme is unsecure [2, p7]: suffices to describe an adversary and show that the corresponding advantage is high enough
* kr-pas [2, p5]: *passive key recovery under passive attack*
  
  Expression of the game $$\text{Exp}_E^\text{kr-pas}(\A)$$
  
  Expression of the advantage $$\text{Adv}_E^\text{kr-pas}(\A)$$
* Guessing attack. Advantage. [2, p5]
* 1kca/okca [2, p6]: the adversary intercepts one cipher text, known as *known ciphertext attack* or *one time known ciphertext attack*
  
  kr-1kca/kr-okca [2, p6]: *key recovery against under one time known ciphertext attack*

  Expression of $$\text{Exp}_E^\text{kr-1kca}(\A)$$ [2, p6]
* kr-1kpa [2, p6]: *key recovery under known plaintext attack*

  The adversary has access to the plaintext and the corresponding ciphertext

  Expression of $$\text{Exp}_E^\text{kr-1kpa}(\A)$$ [2, p6]
* kr-cpa [2, p6]: *key recovery against chosen plaintext attack*
  
  The adversary chooses the plaintext and has access to the corresponding ciphertext

  Expression of $$\text{Exp}_E^\text{kr-1cpa}(\A)$$ [2, p6]
* kr-akca is stronger than kr-pas, because if we have the first one, we have the
  other
* The One-Time pad is not kr-akpa secure, because if we have both the message
  and the ciphertext, then we have the key


### One-way security
* One way experiment [2, p8]: also called *plaintext recovery* experiment and *(weak) secrecy* experiment
* ow-pas [2, p8]: *passive one-time one-way security*
  
  Expression of $$\adv_E^\text{ow-pas}(\A)$$ [2, p8]
* Optimal strategy for an attacker [2, p8]: output the MAP (maximum a posteriori) estimate $$\text{argmax}_\hat{M} \P(\hat{M}=M^* \, \vert \, C^*)$$


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
* [1] *Jean-Philippe Aumasson*, Serious Cryptography
* [2] *Francois Dupressoir*, Lecture 1
* [12] *Francois Dupressoir*, Lecture 2
* [Confusion and diffusion properties](https://en.wikipedia.org/wiki/Confusion_and_diffusion)
* [Attack models fro cryptanalysis](https://www.hackers-arise.com/single-post/2019/04/30/Cryptography-Basics-Part-2-Attack-Models-for-Cryptanalysis)
* [Cryptography basics](https://www.hackers-arise.com/cryptography-basics)
* [A crypto cheatsheet](https://pequalsnp-team.github.io/cheatsheet/crypto-101)
* [Stack overflow question](https://security.stackexchange.com/questions/334/advantages-and-disadvantages-of-stream-versus-block-ciphers)
* [Symmetric Block Cipher Versus Stream Cipher](https://blogs.getcertifiedgetahead.com/symmetric-block-cipher-versus-stream-cipher/)
* [An interesting article from NCC](https://www.nccgroup.com/us/about-us/newsroom-and-events/blog/2009/july/if-youre-typing-the-letters-a-e-s-into-your-code-youre-doing-it-wrong/)