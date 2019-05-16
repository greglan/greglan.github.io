---
layout: page
title: "Introduction to quantum complexity"
permalink: "quantum-complexity.html"
summary: "Theory of quantum complexity analysis"
---

## Classical world
* P: decision problems that can be solved in polynomial time by a deterministic Turing machine
* PSPACE: decision problems that can be solved by a Turing machine (doesn't matter if whether deterministic or not, see Savitch's theorem) using polynomial space
* Savitch's theorem: deterministic Turing machines require only quadratically more space to solve the same problems as non deterministic Turing machines
* NP: problems that require a non deterministic machine to be solved efficiently. Exponential time on a deterministic Turing machine.
* NP complete (NPC): hardest problems of NP. Every problem in NP can be reduced to a problem in NPC
* BPP: Bounded error Probabilistic Polynomial time problems (1970s). Problems that can be solved in polynomial time by probabilistic Turing machines. Bound: probability that the answer is correct is greater that 2/3. Formally:
  - if the answer to a problem is "yes", then at least 2/3 of the possible computational paths must accept
  - if the solution is "no", then at most 2/3 can accept
* There are problems solvable in BPP that are not in P, but the number of these problems is decreasing over time. Not proven if $$P \subset BPP$$ but conjectured that $$P=BPP$$


## Quantum world
* BQP: Bounded error Quantum Polynomial time (extension of BPP). Problems solvable in polynomial time by a probabilistic quantum Turing machine with the same error bound defined by BPP
* Suspected that $$P \subset BQP$$. Would mean that quantum computers can solve some problems in polynomial time that cannot be solved efficiently on classical computers.


## Resources and references
* [1] *Nielsen & Chuang*, Quantum computation and quantum information
* [2] *Eleanor Rieffel and Wolfgang Polak*, Quantum computing, a gentle introduction
