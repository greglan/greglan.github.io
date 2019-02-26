---
title:  "Mathematical foundations"
---
$$
\newcommand{\bra}[1]{\left< #1 \right|}
\newcommand{\ket}[1]{\left| #1 \right>}
\newcommand{\bk}[2]{\left< #1 \middle| #2 \right>}
\newcommand{\bke}[3]{\left< #1 \middle| #2 \middle| #3 \right>}
$$

# Generalities
* Ket: $$\left\vert x \right>$$
* Bra: $$\left< x \right\vert$$ (dual vector of ket-u)
* Inner product / dot product on vector space $$V$$: function such that
  - $$\forall v \in V, \; \left< v \middle\vert v \right>$$ non-negative real number
  - $$\left< v \middle\vert v \right> = 0$$ if and only if $$v=0$$
  - Conjugate symmetry: $$\forall v_1, v_2 \in V, \; \left< v_1 \middle\vert v_2 \right> = \overline{\left< v_2 \middle\vert v_1 \right>}$$
  - Linear on the second variable
* Norm of a vector in an Hilbert space
* Conjugate transpose of a vector
* Relative and global phases
* Complex projective space $$CP^1$$
* Extended complex plane
* Unitary operators preserve the inner product

## Outer product

## Block sphere
![bloch-sphere-wiki](https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Bloch_Sphere.svg/423px-Bloch_Sphere.svg.png)

* Bloch sphere coordinates: $$\left\vert \psi \right> = a_0 \left\vert 0 \right> + a_1 \left\vert 1 \right> = \cos \frac{\theta}{2} \left\vert 0 \right> + e^{i \Phi} \sin \frac{\theta}{2} \left\vert 0 \right>$$


# Tensor products
* Notations: $$\left\vert u \right> \otimes \left\vert v \right> = \left\vert uv \right>$$


# Resources and references
* [1] Quantum Computing, A gentle introduction
* [2] Quantum computation and quantum information
