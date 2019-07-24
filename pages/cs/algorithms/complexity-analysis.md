---
layout: page
title:  "Complexity analysis"
permalink: "complexity-analysis.html"
summary: "Notations, theorems and complexity of common problems"
---

## Big O notations
* Big O: defines an upper bound

  $$f = O(g)$$ if there is a $$n_0$$ and a constant $$c$$ such that $$\forall n > n_0,  f(n) \leqslant c g(n)$$

* Big Omega: defines a lower bound

  $$f = \Omega(g)$$ if there is a $$n_0$$ and a constant $$c$$ such that $$\forall n > n_0,  f(n) \geqslant c g(n)$$

  $$f = O(g)$$ if and only if $$g = \Omega(f)$$

* Big Theta: $$f = \Theta(g)$$ if $$f = O(g)$$ and $$f = \Omega(g)$$

  $$f = \Theta(g)$$ if and only if $$g = \Theta(f)$$


## Master Theorem
Given $$ T(n)=aT\left({\frac {n}{b}}\right)+O(n^{k})$$ for $$a \geq 1$$ , $$b > 1$$ and $$k \geq 0$$:
* If $$ a<b^{k}$$, then $$T(n)=O \left( n^k \right)$$ (top heavy)
* If $$ a=b^{k}$$, then $$T(n)=O(n^{k}\cdot \log n)$$ (steady state)
* If $$ a>b^{k}$$, then $$T(n)=O(n^{\log_{b}a} )$$ (bottom heavy)


## Examples
* Gauss reduction: $$O(n^3)$$
* GCD of $$a$$ and $$b$$: $$O(\log a + b)$$

### Binary search
* Master theorem (approximative): $$T(n) = \Theta(\log n )$$
* Real complexity: $$1 + \lfloor \log_2(n) \rfloor$$


## Resources and references
* [Complexity of the Gauss reduction](https://en.wikipedia.org/wiki/Gaussian_elimination#Computational_efficiency)
