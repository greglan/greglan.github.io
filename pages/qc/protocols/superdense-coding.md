---
layout: page
title:  "Super dense coding"
permalink: "superdense-coding.html"
tags: [quantum]
summary: "A protocol for sending two classical bit using one qubit and a previously shared EPR pair"
---
{% include latex-commands.html %}


## Protocol
* Setup: $$\ket{\psi_0} = \frac{1}{\sqrt{2}} \left( \ket{00} + \ket{11} \right) = \frac{1}{\sqrt{2}} \left( \ket{0}_A \ket{0}_B + \ket{1}_A \ket{1}_B \right)$$ shared between $$A$$ and $$B$$
* Encoding procedure:

| Classical bit value | Transformation | New state |
|:-:|:-:|:-:|
|$$0 = 0b00$$| $$I \otimes I$$ | $$\frac{1}{\sqrt{2}} \left( \ket{00} + \ket{11} \right)$$ |
|$$1 = 0b01$$| $$X \otimes I$$ | $$\frac{1}{\sqrt{2}} \left( \ket{01} + \ket{10} \right)$$ |
|$$2 = 0b10$$| $$Z \otimes I$$ | $$\frac{1}{\sqrt{2}} \left( \ket{00} - \ket{11} \right)$$ |
|$$3 = 0b11$$| $$Y \otimes I$$ | $$\frac{1}{\sqrt{2}} \left( \ket{01} - \ket{10} \right)$$ |

* Decoding procedure: apply $$(H \otimes I) Cnot$$ and measurement in the standard basis

## Resources and references
* *Eleanor Rieffel and Wolfgang Polak*, Quantum computing, a gentle introduction p81
* *Nielsen & Chuang*, Quantum computation and quantum information p97
* [Wikipedia article](https://en.wikipedia.org/wiki/Superdense_coding)
