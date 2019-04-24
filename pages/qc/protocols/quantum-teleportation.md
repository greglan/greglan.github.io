---
layout: page
title:  "Quantum teleportation"
permalink: "quantum-teleportation.html"
tags: [quantum]
summary: "A protocol for sending one qubit and using classical bits and a previously shared EPR pair"
---
{% include latex-commands.html %}


## Protocol
* Qubit to send: $$\ket{\Phi} = a \ket{0} + b \ket{1}$$
* Setup:
    - $$\ket{\psi_0} = \frac{1}{\sqrt{2}} \left( \ket{00} + \ket{11} \right) = \frac{1}{\sqrt{2}} \left( \ket{0}_A \ket{0}_B + \ket{1}_A \ket{1}_B \right)$$ shared between $$A$$ and $$B$$
    - starting state: $$\ket{\Phi} \ket{\psi_0}$$
* Encoding procedure:
    - apply $$(H \otimes I \otimes I)(Cnot \otimes I)$$
    - measurement of the first two qubit in the standard basis and transmission of the result to B
* Decoding procedure:

| Classical bit received | State | Transformation |
|:-:|:-:|:-:|
|$$0 = 0b00$$| $$a \ket{0} + b \ket{1}$$ | $$I$$ |
|$$1 = 0b01$$| $$a \ket{1} + b \ket{0}$$ | $$X$$ |
|$$2 = 0b10$$| $$a \ket{0} - b \ket{1}$$ | $$Z$$ |
|$$3 = 0b11$$| $$a \ket{1} - b \ket{0}$$ | $$Y$$ |


## Resources and references
* Quantum computing: A gentle introduction, p82
* Quantum computation and quantum information, p26
* [Wikipedia article](https://en.wikipedia.org/wiki/Quantum_teleportation)
