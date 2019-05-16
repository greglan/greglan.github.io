---
layout: page
title:  "Density operators"
permalink: "density-operators.html"
tags: [maths, quantum]
summary: "Definition, usage and properties of density operators"
---
{% include latex-commands.html %}

In this page we consider a composite quantum system $$X = A \otimes B$$.


## Introduction
* Alternative formulation of quantum mechanics
* Indifferently called *density operator* and *density matrix*
* Equivalent to the state vector approach
* Adapted to the description of individual subsystems of a larger composite system [1, p99]


## Trace and partial trace
* Expression of the trace: $$\tr(M) = \sum_i \bke{v_i}{M}{v_i}$$ where $$\ket{v_i}$$ is the basis with respect to which the matrix $$M$$ is written [2, p209]
* $$ \bke{\psi_1}{M}{\psi_2} = \tr(\ket{\psi_2} \bra{\psi_1}M)$$ [2, p209]
* Partial trace over system $$B$$ [1, p105]:

  $$\forall(\ket{a_1},\ket{a_2},\ket{b_1},\ket{b_2}) \in A^2 \times B^2, \quad
\tr_B(\ket{a_1} \bra{a_2} \otimes \ket{b_1} \bra{b_2}) \equiv
\ket{a_1} \bra{a_2} \tr_B(\ket{b_1} \bra{b_2}) = \ket{a_1} \bra{a_2} \bk{b_2}{b_1}$$


## Definition
* Ensemble of pure states of a quantum system with possible states $$\ket{\psi_i}$$ and probability $$p_i$$: $$\{p_i, \ket{\psi_i} \}$$ [1, p99]
* Density operator/matrix of the system of an ensemble of pure states: $$\rho = \sum_i p_i \ket{\psi_i} \bra{\psi_i}$$ [1, p99]
* Definition independent of the ensemble state.

  An operator is a density operator iff:
    - it is positive
    - its trace is 1
* Density operator and unitary evolution: $$\rho \xrightarrow[]{U} U \rho U^\dagger = \sum_i p_i U\ket{\psi_i} \bra{\psi_i} U^\dagger$$ [1, p99]
* Joint state of a composite system: $$ \rho = \rho_1 \otimes \dots \otimes \rho_n$$ [1, p102]
* Criterion for differentiating between pure and mixed states:

  If $$\rho$$ density operator, $$\tr(\rho^2) \leqslant 1$$. Equality if $$\rho$$ pure state. [1, p103]


## Density operators and measurements
In this section we consider a measurement operator $$M_m$$ associated to the result $$m$$ and an ensemble of pure states $$\{p_i, \ket{\psi_i} \}$$
* Probability of getting result $$m$$ if the initial state was $$\ket{\psi_i}$$: $$p(m \vert i) = \bke{\psi_i}{M_m^\dagger M_m}{\psi_i} = \tr \left(M_m^\dagger M_m \ket{\psi_i} \bra{\psi_i} \right)$$ [1, p99]
* Probability of getting result $$m$$: $$p(m) = \sum_i p(m \vert i)p_i = \tr (M_m^\dagger M_m \rho )$$ [1, p99]
* State after getting result $$m$$: $$\ket{\psi_i^m} = \frac{M_m \ket{\psi_i}}{\sqrt{\left\vert \bke{\psi_i}{M_m^\dagger M_m}{\psi_i} \right\vert^2}}$$ [1, p99]
* Density operator of the ensemble of state after getting result $$m$$: $$\rho_m = \frac{M_m \rho M_m^\dagger}{\tr ( M_m^\dagger M_m \rho )}$$ [1, p100]
* Density operator of the system prepared in the state $$\rho_i$$ with probability $$p_i:$$ $$\rho = \sum_i p_i \rho_i$$ [1, p100]
* Density operator of the complete system using measurements: $$\rho = \sum_m p(m) \rho_m = \sum_m M_m \rho M_m^\dagger$$ [1, p101]


## Reduced density operator
In this section we define $$\rho^S$$ the density operator on a system $$S$$.
* Density operator for $$\ket{x}$$ on $$A$$: $$\rho_x^A = \tr_B( \ket{x} \bra{x})$$ [2, p208]
* Density operator for system $$A$$: $$\rho^A = \tr_B(\rho^X)$$ [1, p105]
* Density operator of a pure state: $$\rho_x^X = \ket{x} \bra{x}$$


## Geometric interpretation
* Any density operator can be written as $$\frac{1}{2}(I + x \sigma_x + y \sigma_y + z \sigma_z), \quad (x,y,z) \in \R^3$$ [1, p105] [2, p215]
* Determinant: $$\det(\rho) = \frac{1}{4}(1 - r^2) \geqslant 0$$ where $$r^2 = x^2 + y^2 + z^2$$
* Density operators are in the Bloch sphere
* Boundary of the sphere: $$r = 0$$, so one eigenvalue is 1 and the others are 0, so the operator is a projector

  Consequence: the boundary of the sphere are pure states [2]

## Resources and references
* [1] *Nielsen & Chuang*, Quantum computation and quantum information
* [2] *Eleanor Rieffel and Wolfgang Polak*, Quantum computing, a gentle introduction
* [Density matrices on Wikipedia](https://en.wikipedia.org/wiki/Density_matrix)
