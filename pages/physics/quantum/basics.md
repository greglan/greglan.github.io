---
layout: page
title:  "Mathematics of quantum mechanics"
permalink: "qm-basics.html"
tags: [maths, quantum]
summary: "A quick look at different mathematical tools used in quantum mechanics"
---

{% include latex-commands.html %}


## Generalities
* Relative and global phases
* Complex projective space $$CP^1$$
* Extended complex plane
* Dual vectors: bras
* Inner products: brackets
* Hamiltonian of a system: energy states are eigenvectors. Provides a default computational basis
* Unitary operations rotate the Bloch sphere: rotations
* Two orthogonal states are antiparallel on the Bloch sphere (opposite sides)
* Rotation around the $$z$$ axis can be made using rotations around the $$x$$ and $$y$$ axis (rotation of the Bloch sphere around $$y$$ changes the basis)
* Measuring in another basis: apply an unitary to change the basis

## Outer product
* Completeness relation: $$\sum_i \ket{i} \bra{i} = I$$
* Outer product representation of operator $$A:V \to W$$, with $$\{\ket{v_i}\}$$ and $$\{\ket{w_j}\}$$ basis of $$V$$ and $$W$$:
$$
A = I_W A I_V = \sum_{i,j} \ket{w_j} \bke{w_j}{A}{v_i} \bra{v_i} = \sum_{i,j} \bke{w_j}{A}{v_i} \ket{w_j} \bra{v_i}
$$


## Tensor products [1]
* Tensor product space: if $$\dimension V = n$$ and $$\dimension W = m$$, $$\dimension V \otimes W = nm$$
* Basis of $$V \otimes W$$: $$\{\ket{i} \otimes \ket{j} \}$$ where $$\{\ket{i}\}$$ basis of $$V$$ and $$\{\ket{j}\}$$ basis of $$W$$ [4, p72]
* Notations for vectors: $$\ket{u} \otimes \ket{v} = \ket{uv}$$
* Properties:
$$\forall (z, \ket{v}, \ket{w}) \in \C \times V \times W, \; z(\ket{v} \otimes \ket{w}) = (z \ket{v}) \otimes \ket{w} = \ket{v} \otimes (z \ket{w})$$
$$\forall (\ket{v_1}, \ket{v_2}, \ket{w}) \in V \times V \times W, \; (\ket{v_1}+ \ket{v_2}) \otimes \ket{w} = \ket{v_1} \otimes \ket{w} + \ket{v_2} \otimes \ket{w}$$
$$\forall (\ket{v}, \ket{w_1}, \ket{w_2}) \in V \times W \times W, \; \ket{v} \otimes (\ket{w_1}+ \ket{w_2}) = \ket{v} \otimes \ket{w_1} + \ket{v} \otimes \ket{w_2}$$
* Tensor product of linear operators: linear operator such that $$(A \otimes B) \left( \sum_i a_i \ket{v_i}\ket{w_i} \right) = \sum_i a_i A \ket{v_i} \otimes B \ket{w_i}$$
* Inner product on tensor space: $$\bk{\sum_i \lambda_i \ket{v_i} \ket{w_i}}{\sum_j \mu_j \ket{a_j} \ket{b_j}} = \sum_{i,j} \lambda_i^* \mu_j \bk{v_i}{a_j} \bk{w_i}{b_j}$$
* Kronecker product of matrices $$A$$ ($$m \times n$$) and $$B$$ ($$p \times q$$):
$$A \otimes B =
\begin{pmatrix}
A_{11} B & A_{12} B & \dots & A_{1n} B\\
A_{21} B & A_{22} B & \dots & A_{2n} B\\
\vdots & \vdots & \dots & \vdots\\
A_{m1} B & A_{m2} B & \dots & A_{mn} B
\end{pmatrix}
$$
* Transpose, conjugation and adjoint distribute over the tensor product
* Tensor product of unitary operators: unitary
* Tensor product of Hermitian operators: Hermitian
* Tensor product of positive operators: positive
* Tensor product of projectors operators: projectors


## Resources and references
* [1] *Nielsen & Chuang*, Quantum computation and quantum information
* [2] *Eleanor Rieffel and Wolfgang Polak*, Quantum computing, a gentle introduction
* [3] An Introduction to Quantum Algorithms, Emma Strubell, 2011
* [4] Quantum computing : lecture notes, Ronald de Wolf
