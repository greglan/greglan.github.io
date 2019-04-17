---
layout: page
title:  "Matrices"
permalink: "matrices.html"
tags: [maths, quantum]
summary: "Definitions and properties of some particular matrices used in quantum mechanics"
---

{% include latex-commands.html %}


## Adjoints and Hermitians operators [1]
* If $$A$$ linear operator on Hilbert space $$V$$, there exists a unique linear operator $$A^\dagger$$ such that $$\forall \ket{v}, \ket{w} \in V, \; (\ket{v}, A \ket{w}) = (A^\dagger \ket{v}, \ket{w})$$ [2, p69]
* Adjoint/Hermitian conjugate of $$A$$: $$A^\dagger$$
* By definition: $$\ket{v}^\dagger = \bra{v}$$
* Anti-linearity
* Hermitian/self-adjoint matrix: $$A = A^\dagger$$
* Projectors are Hermitian
* Normal matrix: $$AA^\dagger = A^\dagger A$$
* Spectral decomposition: an operator $$M$$ is normal iff it is diagonalizable. Then, $$M = \sum_i \lambda_i \ket{i} \bra{i}$$ with $$\lambda_i$$ eigenvalues of $$M$$
* A normal matrix $$A$$ is Hermitian iff $$Sp(A) \subset \mathbb{R}$$
* Measurement operators are hermitian matrices. The observable values are the eigenvalues of the matrix
* Average value of an operator $$A$$ over the state $$\ket{\psi}$$: $$\bke{\psi}{A}{\psi}$$


## Unitary matrices [1]
* $$U$$ unitary: $$U^\dagger U = U U^\dagger = I$$
* A unitary matrix is normal
* Inner product preservation
* All eigenvalues of a unitary matrix have modulus 1


## Positive operators [1]
* Positive operator: $$\forall \ket{v}, \bke{v}{A}{v} \geqslant 0$$
* Positive definite operator: $$\forall \ket{v}, \bke{v}{A}{v} > 0$$
* Positive operators are Hermitian
* Positive operators have positive eigenvalues
* For all operators $$A$$, $$A^\dagger A$$ positive


## Resources and references
* [1] Quantum computation and quantum information
* [2] Quantum computing, a gentle introduction
* [Properties of hermitian conjugate](https://en.wikipedia.org/wiki/Conjugate_transpose)
