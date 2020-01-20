---
layout: page
title:  "Quantum key distribution"
permalink: "qkd.html"
tags: [security, quantum]
summary: "An introduction to quantum key distribution protocols"
---
{% include latex-commands.html %}

## Introduction
* Permits to create a secret classical key that is secret with high probability
* Allow to detect whether there is an interception of the communication
* Intuition/foundations:
  - impossible to make a measurement without disturbing the system, hence detection of interception
  - impossible to reliably distinguish between two non-orthogonal states
  - cannot copy a quantum state (no-cloning)
* Simplistic protocol: encode a binary 0 into $$\ket{0}$$ and a binary 1 into $$\ket{1}$$

  Problem: intercept the qubit, measure $$Z$$, and resend the same qubit. 

  Eve can learn the key without Alice and Bob realizing.
  Not a problem because the measure does not affect the qubit.

## BB84
### Introduction
* BB84: comes from the inventors (Bennet and Brassard) and the year it was invented (1984)
* Does not guarantee that the establishment of the key succeeds
* Setup: bidirectional classical channel and one unidirectional quantum channel
* Physical medium: polarized photons. Tool: polarizer
* Principle: two basis out of phase
* Standard basis $$\oplus$$ mapping:
    - 0 $$\to \ket{\uparrow}$$
    - 1 $$\to \ket{\rightarrow}$$
* Hadamard basis $$\otimes$$ mapping:
    - 0 $$\to \ket{\nearrow} = \frac{1}{\sqrt{2}} \left( \ket{\uparrow} + \ket{\rightarrow}\right)$$
    - 1 $$\to \ket{\searrow} = \frac{1}{\sqrt{2}} \left( \ket{\uparrow} - \ket{\rightarrow}\right)$$

### Protocol
* Alice generates a secret key by classical means
* Alice encodes each bit by randomly choosing one of two basis and remembers the choice
* Alice sends the sequence over the quantum channel
* Bob measures each photon by randomly choosing one of two basis and remembers the choice
* If all photons have been received and measured by Bob (checked over the classical channel), 
  exchange of the list of basis used over the classical channel
* Discard every photon for which Alice's emitting basis is different from Bob's measuring basis
* Repeat the operation for the remaining bits

### Analysis
* Probability that the two basis used by Alice and Bob differ: $$\frac{1}{2}$$
* Average percentage of bits transfered at the first try: 50%
* Check the presence of a spy : compare a list of randomly chosen bits, they must be equal
* Probability for a spy to modify a bit : $$\frac{1}{4}$$
* Probability for a spy to intercept $$n$$ bits without modifying them: $$\left( \frac{3}{4} \right)^n$$

  Limit: 0 for $$n$$ big enough

## Bennett 92 (B92) [2]
### Introduction
* Alice sends a qubit either in state $$\ket{0}$$ or $$\ket{+}$$
* If Bob measures $$Z$$ and gets $$\lambda=1$$, he can't discern the state Alice sent

  If Bob measures $$Z$$ and gets $$\lambda=-1$$, he is sure the state was $$\ket{+}$$
* If Bob measures $$X$$ and gets $$\lambda=1$$, he can't discern the state Alice sent

  If Bob measures $$X$$ and gets $$\lambda=-1$$, he is sure the state was $$\ket{0}$$

### Protocol
* Alice chooses a random bitstring and encodes $$0$$ to $$\ket{0}$$ and 1 to $$\ket{+}$$
* Bob chooses a random bitstring and measures $$X$$ for $$0$$ to $$Z$$ for 1
* Bob looks when he gets $$\lambda = -1$$. 
  If he measured $$X$$ the bit sent was $$0$$, and if he measured $$Z$$ the bit was 1
* Bob publicly announces when he measures $$\lambda = -1$$ so that Alice can know which bits to keep
* Bob and Alice publicly choose a random subset of the shared bitstring and publicly announce the value

  Both value should agree if no interference occured

### Security
* If Eve intercepts a qubit and measure $$\lambda = -1$$, she can successfully resend the qubit to Bob
* If Eve gets $$\lambda = 1$$, she has to guess which qubit to send to Bob, and sometimes it will not be correct

  Hence Bob will sometime get incorrect bit values
* When Bob and Alice publicly announce the values of their bitstring, Eve is detected

## Resources and references
* [1] *Eleanor Rieffel and Wolfgang Polak*, Quantum computing, a gentle introduction
* [2] *Noah Linden*, Quantum Information 2019, Handout O
* [3] Introduction à l'information quantique, Y.Leroyer and G.Sénizergues
