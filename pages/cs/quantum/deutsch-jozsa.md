---
layout: page
title:  "Deutsch's and Deutsch-Jozsa's algorithms"
permalink: "deutsch-jozsa.html"
summary: ""
---
{% include latex-commands.html %}

## Introduction
* Balanced binary function: function that outputs either a 1 or a 0 the same
  number of times
* Deutsch's problem: given a binary function that is either balanced or
  constant, find whether it is balanced or constant
* Deutsch's algorithm: quantum algorithm to solve that problem for functions
  that take one input bit.

  Number of calls to $$f$$ in a classical algorithm: 2
* Deutsch-Jozsa's algorithm: generalization of Deutsch's algorithm for a binary
  function that takes an arbitrary long binary string.

  Number of call to $$f$$ for an $$n$$-bits bitstring in a classical algorithm:
  $$2^{n-1}+1$$

## Deutsch's algorithm
* Consider a function $$f: \F_2 \to \F_2$$.
  Aim: find out whether $$f(0) + f(1) = 0$$ ($$f$$ constant) or
  $$f(0) + f(1) = 1$$ ($$f$$ even)
* Algorithm outline:
  - Put two qubits in the state $$\ket{00}$$
  - Apply $$I \otimes X$$
  - Apply $$H \otimes H$$
  - Apply $$U_f$$
  - Apply $$H \otimes I$$
  - Measure the first qubit in the computational basis: if outcome 0,
    then $$f(0) + f(1) = 0$$ ($$f$$ constant).
    If outcome 1, then $$f(0) + f(1) = 1$$ ($$f$$ even)
* Expression of the state before application of $$U_f$$:
  $$(H \otimes H)(I \otimes X) \ket{00} = \ket{+}\ket{-}$$
* Expression of the state after application of $$U_f$$

## Deutsch-Jozsa's algorithm
