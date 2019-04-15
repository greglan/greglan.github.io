---
layout: page
title:  "Merge sort"
permalink: "merge-sort.html"
tags: [programming, algorithms]
---

# Principle
* Divide a list in two sub lists
* Recursive sort of the two sub lists. Base case: empty list or list with a single element
* Merge of the two sorted sub lists

# Analysis
* $$T(n) = 2 T\left( \frac{n}{2} \right) + O(n)$$
* Master Theorem: $$T(n) = O(n \log n)$$
