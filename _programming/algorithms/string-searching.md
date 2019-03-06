---
title:  "String searching algorithms"
topic: "algorithms"
tags: programming algorithms
---

# Notations
* Length of the word *w* being searched: *m*
* Length of the text *t*: *n*
* Size of the alphabet: *k*


# Naive search
## Principle
* For each position between 0 and *n-m*, search for *w*
* If not found, increase the search window by 1

## Analysis
* Time complexity: $$\mathcal{O}(mn)$$
* Soace coplexity: $$\mathcal{O}(1)$$


# Karp-Rabin algorithm
## Principle
* Make use of a hashing function
* Computation of *hash(x)*
* Comparison of *hash(x)* with *hash(t[j ... j+m-1])* for $$0<j<n-m$$
* If equality, check result with letter-by-letter comparison
* Else, increment *j*

## Hashing function
If the hashing function is not computed in constant time, complexity of the algorithm = complexity of the naive algorithm. Solution: use a hash already computed to compute the next one in constant time

$$hash(w) = \left( \sum_{k=0}^{m-1} w_k 2^{m-1-k} \right) \; mod \, q$$

$$hash(y[j+1 \, ... \, j+m]) = rehash(y[j], y[j+m], y[j \, ... \, j+m-1])$$

$$rehash(a,b,h) = \left( (h - a 2^{m-1}) \times 2 + b \right) \; mod \, q$$


## Anaysis
* Pre-computing complexity: $$\mathcal{O}(m)$$
* Time complexity (worst-case): $$\mathcal{O}(mn)$$
* Time complexity (average case): $$\mathcal{O}(m+n)$$
* Space complexity: $$\mathcal{O}(m)$$

## Use
* Great to search for different patterns in one run
* Cheating by copy detection
* Not used to search for a unique pattern because of the worst-case complexity. Better algorithms for that


# Knuth-Morris-Pratt (KMP) algorithm
## Principle
TODO

## Analysis
* Pre computing complexity: $$\mathcal{O}(m)$$
* Search complexity (worst-case): $$\mathcal{O}(2n)$$
* Search complexity (average case): $$\mathcal{O}(m+n)$$

# Boyer-Moore algorithm
## Principle
TODO

## Analysis
* Pre computing complexity: $$\mathcal{O}(m + k)$$
* Search complexity (worst-case): $$\mathcal{O}(mn)$$
* Search complexity (average case): $$\mathcal{O}(n/m)$$

# Automata research
TODO
