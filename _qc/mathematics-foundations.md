---
title:  "Mathematical foundations"
tags: quantum_computing maths
---
$$
\newcommand{\bra}[1]{\left< #1 \right|}
\newcommand{\ket}[1]{\left| #1 \right>}
\newcommand{\bk}[2]{\left< #1 \middle| #2 \right>}
\newcommand{\bke}[3]{\left< #1 \middle| #2 \middle| #3 \right>}
$$

# Generalities
* Ket: $$\ket{x}>$$
* Bra: $$\bra{x}$$ (dual vector of ket-u)
* Inner product / dot product on vector space $$V$$: function such that
  - $$\forall v \in V, \; \bk{v}{v}$$ non-negative real number
  - $$\left< v \middle\vert v \right> = 0$$ if and only if $$v=0$$
  - Conjugate symmetry: $$\forall v_1, v_2 \in V, \; \bk{v_1}{v_2} = \overline{\bk{v_2}{v_1}}$$
  - Linear on the second variable
  * Hadamard basis: $$\{\ket{+}, \ket{-} \}$$
* Norm of a vector in an Hilbert space
* Conjugate transpose of a vector
* Relative and global phases
* Complex projective space $$CP^1$$
* Extended complex plane
* Bloch sphere coordinates: $$\ket{\psi} = a_0 \ket{0} + a_1 \ket{1} = \cos \frac{\theta}{2} \ket{0} + e^{i \Phi} \sin \frac{\theta}{2} \ket{1}$$

![bloch-sphere-wiki](https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Bloch_Sphere.svg/423px-Bloch_Sphere.svg.png)



## Hermitian conjugate
* If $$A$$ linear operator on Hilbert space $$V$$, there exists a unique linear operator $$A^\dagger$$ such that $$\forall \ket{v}, \ket{w} \in V, \; (\ket{v}, A \ket{w}) = (A^\dagger \ket{v}, \ket{w})$$ [2, p69]
* *Adjoint/Hermitian conjugate* of $$A$$: $$A^\dagger$$
* By definition: $$\ket{v}^\dagger = \bra{v}$$
* Anti-linearity
* $$(AB)^\dagger = B^\dagger A^\dagger$$
* $$(A \ket{v})^\dagger = \bra{v} A^\dagger$$
* Hermitian/self-adjoint matrix: $$A = A^\dagger$$
* Normal matrix: $$AA^\dagger = A^\dagger A$$
* A normal matrix $$A$$ is Hermitian iff $$Sp(A) \subset \mathbb{R}$$
* Spectral decomposition: normal iff diagonalizable

## Unitary matrices
* $$U$$ unitary iif $$U^\dagger U = I (= U U^\dagger)$$
* A unitary matrix is normal
* Inner product preservation

## Outer product

TODO

# Tensor products
* Notations: $$\ket{u} \otimes \ket{v} = \ket{uv}$$


# Resources and references
* [1] Quantum Computing, A gentle introduction
* [2] Quantum computation and quantum information
* [Properties of hermitian conjugate](https://en.wikipedia.org/wiki/Conjugate_transpose)
