---
title:  "Grover's quantum search algorithm"
topic: ""
tags: quantum_computing algorithms
---
$$
\newcommand{\bra}[1]{\left< #1 \right|}
\newcommand{\ket}[1]{\left| #1 \right>}
\newcommand{\bk}[2]{\left< #1 \middle| #2 \right>}
\newcommand{\bke}[3]{\left< #1 \middle| #2 \middle| #3 \right>}
$$

# Introduction
* Devised by Lov Grover in 1996
* Probabilistic algorithm
* Every element can be considered at once in a quantum superposition. Amplitudes can be manipulated from there to produce the correct entry in the database with a probability of "at least" 1/2
* Search in a set of $$N=2^n$$ items (unordered) on $$n$$ qubits
* Best classical algorithm for a search over unordered data: $$O(N)$$. Assumption: uniform probability, then probability of finding the correct element is $$\frac{1}{N}$$. On average: $$\sum_{i=1}^N \frac{i}{N} = \frac{N+1}{2} = O(N)$$
* Grover's algorithm: $$O(\sqrt{N})$$ evaluations, so exponential speedup
* Asymptotically optimal

# Equal superposition of all states
* Put all $$2^n$$ states in a superposition of euqal $$\frac{1}{\sqrt{2^n}}$$ amplitude. Each possible state corresponds to possible entries in Grover's database.
* Apply the Hadamard transform $$H^{\otimes n}$$ to $$\ket{0}^{\otimes n}$$: $$ \frac{1}{\sqrt{2^n}} \sum_{i=0}^{2^n -1} \ket{i}$$
* Requires $$O(\log N) = O(n)$$ steps

# Amplitude amplification
* Selective shifting of the phase of one state that satisfies some condition at each iteration
* Multiplication of the amplitude by -1: probability remains the same. But transformations take advantage of that difference in amplitude to single out that state of differing phase to ultimately increase the probability of the system being in that state
* No analog in classical probabilities

# Quantum Oracle
* Modifies the system depending on whether it is in a configuration we are searching for
* Behaves like a quantum black-box: can observe and modify the system without collapsing it to a classical state. Recognizes if the system is in the correct state, and if so, rotate the phase by $$\pi$$, else does nothing.
* Implementation often use extra scratch qubit, but not necessary here
* Oracle's effect on $$\ket{x}$$: $$\ket{x} \mapsto (-1)^{f(x)} \ket{x}$$ where $$f(x)=1$$ if $$\ket{x}$$ is the correct state and $$f(x)=0$$ otherwise. Implementation of $$f$$ depends on the particular search problem

# Diffusion transform
* Part of Grover's iteration. Performs inversion about the average.
* Transforms the amplitude of each state so that it is as far above the average as it was below the average priori to the transformation and vice versa.
* Consists in applying $$H^{\otimes n}$$, then a conditional phase shift on every states except $$\ket{0}$$ by -1, and finally $$H^{\otimes n}$$ again.
* Unitary operator for the conditional phase shift: $$2 \ket{0} \bra{0} - I$$
* Expression of the diffusion transform/operator: $$H^{\otimes n} (2 \ket{0} \bra{0} - I) H^{\otimes n} = 2 H^{\otimes n} \ket{0} \bra{0} H^{\otimes n} - I = 2 \ket{\psi} \bra{\psi} - I$$ with $$\ket{\psi} = \frac{1}{\sqrt{2^n}} \sum_{i=0}^{2^n -1} \ket{i}$$

# Grover's iteration
* Grover's iteration: call to the quantum oracle followed by diffusion transform. In order to achieve optimal probability that the state we ultimately observe is the correct one, we need an overall rotation of the phase by $$\frac{\pi}{4}$$. On average, occurs after $$\frac{\pi}{4} \sqrt{2^n}$$ times so the Grover's iteration is repeated $$\frac{\pi}{4} \sqrt{2^n}$$ times.
* Expression of Grover's iteration: $$(2 \ket{\psi} \bra{\psi} - I) O$$ with $$O$$ the oracle

# Grover's algorithm
* Initialisation step: from $$\ket{0}^{\otimes n}$$ obtain $$\ket{\psi_0} =  \frac{1}{\sqrt{2^n}} \sum_{i=0}^{2^n -1} \ket{i}$$
* Apply the Grover's iteration $$R = \frac{\pi}{4} \sqrt{2^n}$$ times: $$\left((2 \ket{\psi} \bra{\psi} - I) O\right)^R \ket{\psi_0} \simeq \ket{x_0}$$
* Measure the register and obtain $$x_0$$ with probability $$O(1)$$

# Grover's algorithm runtime
* [Algebraic proof](https://en.wikipedia.org/wiki/Grover%27s_algorithm#Algebraic_proof_of_correctness)
* [Geometric proof](https://en.wikipedia.org/wiki/Grover%27s_algorithm#Geometric_proof_of_correctness)



# Resources and references
* [3] An Introduction to Quantum Algorithms, Emma Strubell, 2011
* [4] [Wikipedia article](https://en.wikipedia.org/wiki/Grover%27s_algorithm)
