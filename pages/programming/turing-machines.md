---
layout: page
title:  "Turing machines"
permalink: "turing-machines.html"
summary: ""
---
$$
\newcommand{\mcal}{\mathcal{M}}
$$

## Definition [1]
A Turing machine is a tuple $$\mcal = (Q, \Sigma, \Gamma, E, q_0, F, \#)$$ where:
* $$Q$$: finite non-empty set of states (états de contrôle)
* $$\Sigma$$: input alphabet. Finite
* $$\Gamma$$: output alphabet (alphabet de bande). $$\Sigma \subset \Gamma$$
* $$E$$: transitions $$(p, a, q, b, x) \equiv p,a \to q,b,x$$ with $$(p,q) \in Q^2, (a,b) \in \Gamma^2$$ and $$x \in \{ \triangleleft,\triangleright \}$$
* $$q_0 \in Q$$: initial state
* $$F$$: set of final states/accepting states.

We define $$\#$$ to be the blank symbol. We have $$\# \notin \Sigma$$ and $$\# \in \Gamma$$

## Properties
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
