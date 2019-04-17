---
layout: page
title:  "Density operators"
permalink: "density-operators.html"
tags: [maths, quantum]
summary: "Definition, usage and properties of density operators"
---
{% include latex-commands.html %}


## Prerequisites
* Expression of the trace: $$\tr(M) = \sum_i \bke{v_i}{M}{v_i}$$ where $$\ket{v_i}$$ is the basis with respect to which the matrix $$M$$ is written [2, p209]
* $$ \bke{\psi_1}{M}{\psi_2} = \tr(\ket{\psi_2} \bra{\psi_1}M)$$ [2, p209]

## Definition
* Density operator of a pure state: $$\rho_x^X = \bra{x} \ket{x}$$
* Characterization: an operator is a density operator iff:
    - it is positive
    - its trace is 1
* If $$X = A \otimes B$$, the density operator for $$\ket{x}$$ on $$A$$ is $$\rho_x^A = \tr_B( \ket{x} \bra{x})$$ [2, p208]

## Geometric interpretation
* Any density operator can be written as $$\frac{1}{2}(I + x \sigma_x + y \sigma_y + z \sigma_z)$$ with $$(x,y,z) \in \R^3$$ [2, p215]
* Determinant: $$\det(\rho) = \frac{1}{4}(1 - r^2) \geqslant 0$$ where $$r^2 = x^2 + y^2 + z^2$$
* Density operators are in the Bloch sphere
* Boundary of the sphere: $$r = 0$$, so one eigenvalue is 1 and the others are 0, so the operator is a projector,

  Consequence: the boundary of the sphere are pure states

## Resources and references
* [1] Quantum computation and quantum information
* [2] Quantum computing, a gentle introduction
