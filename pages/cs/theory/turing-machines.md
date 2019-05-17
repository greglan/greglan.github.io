---
layout: page
title:  "Turing machines"
permalink: "turing-machines.html"
summary: ""
---
$$
\newcommand{\mcal}{\mathcal{M}}
$$

## Definitions [1]
### Definition of a Turing machine
A Turing machine is a tuple $$\mcal = (Q, \Sigma, \Gamma, E, q_0, F, b)$$ where:
* $$Q$$: finite non-empty set of states (états de contrôle)
* $$\Sigma \subset \Gamma \backslash \{ b \}$$: input symbols (alphabet d'entrée). Finite
* $$\Gamma$$: tape alphabet symbols (alphabet de bande). $$\Sigma \subset \Gamma$$
* $$E$$: transitions $$(p, a, q, b, x) \equiv p,a \to q,b,x$$ with $$(p,q) \in
Q^2, (a,b) \in \Gamma^2$$ and $$x \in \{ \triangleleft,\triangleright \}$$
* $$q_0 \in Q$$: initial state
* $$F$$: set of final states/accepting states.
* $$b \in \Gamma$$: blank symbol

Additionally, we can define a transition function $$\delta: Q\backslash F \times
\Sigma \to Q \times \Sigma \times \{ \triangleleft,\triangleright \}$$ instead
of $$E$$.

### Configuration graph [1, p145]
* Set of vertices is the set of configurations of the Turing Machine
* Calculus: path in this graph
* Infinite graph. Interested in a subset

### Deterministic Turing machine


## Properties
### Normalization
### Equivalence with multi tape machines
### Equivalence with deterministic Turing machines
### Church-Turing thesis
* *A function on the natural numbers can be calculated by an effective method, if
 and only if it is computable by a Turing machine*
* Relation to $$\lambda$$-calculus and general recursive functions


## Universal Turing Machines (UTM)
* There exists a Turing Machine that can simulate any other Turing Machine
* Close to modern computer architecture: store a program in memory (Turing
  machine to simulate) later executed by a CPU (the UTM)

## Resources and references
* [1] *Oliver Carton*, Langages formels, calculabilité et complexité
* [2] *Nielsen & Chuang*, Quantum computation and quantum information
* [Turing machine article on Wikipedia](https://en.wikipedia.org/wiki/Turing_machine)
* [Church-Turing thesis](https://en.wikipedia.org/wiki/Church%E2%80%93Turing_thesis)
* [UTM on Wikipedia](https://en.wikipedia.org/wiki/Universal_Turing_machine)
