---
layout: page
title:  "Cellular automata"
permalink: "cellular-automata.html"
summary: "Introduction to the cellular automta formalism"
---
$$
\newcommand{\Z}{\mathbb{Z}}
$$

## Introduction
### Definition
* Dimension of the automata: $$d$$
* Cells organized on a space of dimension $$d$$.
  - $$d=1$$: cells on a line
  - $$d=2$$: cells on a grid

  The cells are numbered using an integer $$i \in \Z$$
* States of cells in finite set $$\Sigma$$
* Configuration: function $$c: \Z^d \to \Sigma$$, that returns for each cell its
state
* Global evolution: $$F: \Sigma^{\Z^d} \to \Sigma^{\Z^d}$$. In other words, a
  global evolution is a mapping from one configuration function to another.
  Describes the evolution in time of the cellular automaton
* Neighborhood of a cell $$i$$: finite $$V_i \subset \Z^d$$
* Local evolution: function $$f: V \to \Sigma$$ that returns the state of a cell
  as function of the neighboring cells.

### Elementary cellular automata
* Simplest non trivial cellular automata.
* Definition:
  - One-dimensional: $$d=1$$
  - Two possible states for cells: $$\Sigma = \{ 0, 1 \}$$. Often also defined as
    *black* and *white*
  - Neighborhood of cell $$i$$: cells $$i-1$$, $$i$$ and $$i+1$$
* Rule: integer uniquely identifying a global evolution. For each configurations
  of the input cells (3 cells with two states each, so 8 possibilities), sum the
  resulting single cell state with coefficient $$2^i$$ for the $$i$$-th possible
  configuration

### Useful properties
* Symmetry
* There is a decomposition of $$F$$ in subcircuits.
* A cellular automaton is Turing-complete
* In an elementary cellular automaton, some rules are Turing complete, others
are not
* Rule 110 is Turing-complete


## Resources and references
* [Cellular automaton on Wikipedia](https://en.wikipedia.org/wiki/Cellular_autom
    aton)
* [Elementary cellular automaton on Wikipedia](https://en.wikipedia.org/wiki/Ele
    mentary_cellular_automaton)
* [*Pablo Arrighi, Giuseppe Di Molfetta, Nathanaël Eon*, A gauge-invariant
reversible cellular automaton](https://arxiv.org/abs/1802.07644)
* [Computation, Dynamics and the Phase-Transition by Jeremy Avnet](https://
theory.org/complexity/cdpt/html/cdpt.html)
