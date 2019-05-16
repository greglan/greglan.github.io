---
layout: page
title:  "The BB84 protocol"
permalink: "bb84-protocol.html"
tags: [security, quantum]
summary: "A simple key distribution protocol"
---
{% include latex-commands.html %}

## Introduction
* BB84: comes from the inventors (Bennet and Brassard) and the year it was invented (1984)
* Permits to create a secret classical key that is secret with high probability
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

## Protocol
* Alice generates a secret key by classical means
* Alice encodes each bit by randomly choosing one of two basis and remembers the choice
* Alice sends the sequence over the quantum channel
* Bob measures each photon by randomly choosing one of two basis and remembers the choice
* If all photons have been received and measured by Bob (checked over the classical channel), exchange of the list of basis used over the classical channel
* Discard every photon for which Alice's emitting basis is different from Bob's measuring basis
* Repeat the operation for the remaining bits

## Analysis
* Probability that the two basis used by Alice and Bob differ: $$\frac{1}{2}$$
* Average percentage of bits transfered at the first try: 50%
* Vérification de la présence d'un espion : comparaison d'une liste de bits choisis aléatoirement
* Probabilité pour un espion de modifier un bit : $$\frac{1}{4}$$
* Probabilité pour un espion d'avoir écouté $$n$$ bits et n'en avoir modifié aucun : $$\left( \frac{3}{4} \right)^n$$

  Tend vers 0 pour $$n$$ grand.


# Resources and references
* [1] *Eleanor Rieffel and Wolfgang Polak*, Quantum computing, a gentle introduction
* [3] Introduction à l'information quantique, Y.Leroyer and G.Sénizergues
