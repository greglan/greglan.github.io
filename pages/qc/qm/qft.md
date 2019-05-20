---
layout: page
title:  "Quantum Fourier Transform"
permalink: "qft.html"
tags: [maths, quantum]
summary: "From the classical Fourier transform to the Quantum Fourier transform and its applications"
---
{% include latex-commands.html %}

In this page we consider a vector $$x = [x_0, \dots, x_{N-1}]$$ of length $$N$$,
and the computational basis $$\ket{j}$$.

## Classical discrete Fourier transform (DFT)
* Maps the vector $$x$$ to a vector $$y$$ such that:

  $$y_k = \frac{1}{N} \sum_{j=0}^{N-1} x_k e^{2i \pi \frac{kj}{N}}$$
* Unitary matrix: $$F_N = \left( \frac{1}{\sqrt{N}} \omega_N^{ij} \right)_{0 \leqslant i,j \leqslant N-1}$$ where $$\omega_N = e^{2i \pi / N}$$ is the $$N$$-th root of unity

  Remark: for $$N=2$$, $$F_2 = H$$ the Hadamard matrix
* Fourier coefficients of $$x$$: values $$y_k$$ [2, p153]
* Complexity of the discrete Fourier transform [3]

### Fast Fourier Transform (FFT)
* Efficient implementation of the DFT when $$N = 2^n$$ for some integer $$n$$ [2, p154]
* Decomposition [2, p155]

  $$F^{(k)} = \frac{1}{\sqrt{2}}
  \begin{pmatrix}
  I^{(k-1)} & D^{(k-1)} \\
  I^{(k-1)} & -D^{(k-1)}  
  \end{pmatrix}
  \begin{pmatrix}
  F^{(k-1)} & 0 \\
  0 & F^{(k-1)}  
  \end{pmatrix}
  R^{(k)}$$
* Complexity of the FFT: $$O(nN)$$ [2, p155] [3]

## Quantum Fourier Transform (QFT)
* Action on the basis:

  $$ \ket{j} \mapsto \frac{1}{N} \sum_{k=0}^{N-1} e^{2i \pi \frac{kj}{N}} \ket{k}$$
* Action on a state $$\ket{x}$$:

  $$ \ket{x} = \sum_{j=0}^{N-1} x_j \ket{j} \mapsto \sum_{k=0}^{N-1} y_k \ket{k}$$
* Complexity of the quantum Fourier transform: $$O(n^2)$$ [2, p156] [3]


## Resources and references
* [1] *Nielsen & Chuang*, Quantum computation and quantum information
* [2] *Eleanor Rieffel and Wolfgang Polak*, Quantum computing, a gentle introduction
* [3] Quantum computing : lecture notes, Ronald de Wolf
