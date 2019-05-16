---
layout: page
title:  "Quantum circuits"
permalink: "quantum-circuits.html"
tags: [quantum]
summary: "This page presents the circuit model for quantum computation as well as the implementation of basic gates"
---
{% include latex-commands.html %}

## Basic gates and notations
### Controlled NOT gate

### Controlled unitary gate

### Swap gate

### Toffoli gate

### Fredkin gate


## Single qubit transformations [1, p84]
### Primitives

$$ K(\delta) = e^{i \delta} I$$ (phase shift of $$\delta$$)

$$ R(\beta) =
\begin{pmatrix}
\cos \beta & \sin \beta\\
-\sin \beta & \cos \beta
\end{pmatrix}
$$ (rotation of $$2\beta$$ about the $$y$$ axis)

$$ T(\alpha) =
\begin{pmatrix}
e^{i \alpha} & 0\\
0 & e^{- i \alpha}
\end{pmatrix}
$$ (rotation of $$2\alpha$$ about the $$z$$ axis)

### Decomposition
Any single qubit transformation $$Q$$ can be written as $$Q=K(\delta)T(\alpha)R(\beta)T(\gamma)$$


## Single-qubit transformations controlled by a single qubit [1, p86]

## Multiply controlled single-qubit transformations [1, p87]

## General unitary transformations [1, p89]

## Universal approximation from a set of gates [1, p91]


## Resources and references
* [1] *Eleanor Rieffel and Wolfgang Polak*, Quantum computing, a gentle introduction
