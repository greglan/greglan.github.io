---
title:  "Complexity analysis"
topic: "algorithms"
tags: programming complexity
---

# Big O notations

# Master Theorem
Given $$ T(n)=aT\left({\frac {n}{b}}\right)+O(n^{k})$$ for $$a \geq 1$$ , $$b > 1$$ and $$k \geq 0$$:
* If $$ a<b^{k}$$, then $$T(n)=O \left( n^k \right)$$ (top heavy)
* If $$ a=b^{k}$$, then $$T(n)=O(n^{k}\cdot \log n)$ (steady state)
* If $$ a>b^{k}$$, then $$T(n)=O(n^{\log_{b}a} )$$ (bottom heavy)

# Binary search
* Master theorem (approximative): $$T(n) = \Theta(\log n )$$
* Real complexity: $$1 + \lfloor \log_2(n) \rfloor$$

# Gauss reduction

# GCD
