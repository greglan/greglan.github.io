---
layout: page
title:  "Quantum circuits"
permalink: "quantum-circuits.html"
tags: [quantum]
summary: "Presentation of common gates and the circuit model"
---
{% include latex-commands.html %}
$$
\newcommand{\Cnot}{\text{C}_\text{not}}
$$

## Basic gates and notations
### Controlled NOT gate
![cnot](/images/quantum/cnot.png)

### Controlled unitary gate
![controlled-unitary](/images/quantum/controlled-unitary.png)

### Swap gate
![swap](/images/quantum/swap.png)

### Toffoli gate
![toffoli](/images/quantum/toffoli.png)

### Fredkin gate
![fredkin](/images/quantum/fredkin.png)


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
Let $$Q=K(\delta)T(\alpha)R(\beta)T(\gamma)$$. Then $$ \Lambda Q =
\left( \Lambda K(\delta) \right)
\left( \Lambda T(\alpha)R(\beta)T(\gamma) \right)$$ and

$$
\Lambda K(\delta) = \left( K(\delta / 2) T(- \delta / 2) \right) \otimes I
$$

$$
\Lambda T(\alpha)R(\beta)T(\gamma) =
\left( I \otimes Q_0 \right) \Cnot
\left( I \otimes Q_1 \right) \Cnot
\left( I \otimes Q_2 \right)
$$

with the following expressions:

$$ Q_0 = T(\alpha) R(\beta /2)$$

$$ Q_1 = R(- \beta / 2) T \left(\frac{-\gamma - \alpha}{2} \right)$$

$$ Q_2 = T \left( \frac{\gamma - \alpha}{2} \right)$$

## Multiply controlled single-qubit transformations [1, p87]

## General unitary transformations [1, p89]

## Universal approximation from a set of gates [1, p91]
### Solovay-Kitaev theorem
We can approximate any unitary to a precision of $$2^{-a}$$ efficiently with a
finite set of gates: we need a sequence of no more than $$P(a)$$ gates with $$P$$
a polynomial.

### Standard circuit model
* Gate set composed of the $$\Cnot$$ gate and all single qubit transformations
[2, p191]
* Drawback: no simple method for error-resistant implementation [2, p194]
* Solution: the standard set of universal gates

### Approximation of unitary operators
* Set of unitary operations is continuous, so a discrete set can't implement all
the unitary operations
* Error when $$U$$ is implemented by $$V$$ [2, p194]:

  $$E(U, V) = \underset{\ket{\psi} \in \mathcal{H}}{\max}
  \vert \vert (U-V) \ket{\psi} \vert \vert$$


### Standard set of universal gates for approximation
The CNOT, Hadamard, phase and $$\pi/8$$ gates are universal [2, p195]

### Another discrete set for approximation
The CNOT, Hadamard, phase and Toffoli gates are universal [2, p195]



## Resources and references
* [1] *Eleanor Rieffel and Wolfgang Polak*, Quantum computing, a gentle introduction
* [2] *Nielsen & Chuang*, Quantum computation and quantum information p26
