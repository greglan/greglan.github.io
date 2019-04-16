---
layout: page
title:  "Quicksort"
permalink: "quicksort.html"
tags: [programming, algorithms]
summary: ""
---
$$
\newcommand{\sgoth}{\mathfrak{S}}
$$

## Introduction
* French: tri rapide/tri par segmentation
* Recursive comparison sort algorithm
* Principle:
    - choose an element we call the *pivot*. As a simplification, consider the first element, but there are other relevant choices
    - *parition operation*: separate the input array in two sub-arrays, where the first one have all the elements below the pivot, and the second array all the elements greater than the pivot
    - sort each sub-array recursively
    - concatenate the sorted sub-arrays with the pivot element


## Implementation
### Lists
* Division of a list in two sub lists given an elemen *e* such that the first sub list contains elements less than *e* and the second sub lists the elements greater than or equal to *e*
* Recursive sort of the list. Base case: empty list

### Vectors
* Reorganization of vector *v[a+1:b]* (indexes 1+1 to b included) such that the first elements are less than *x=v[a]* and the next ones greater than or equal to *x*, and *x* in the right place.
* Quicksort of a sub-vector *v[a:b]*
* Quicksort of a vector


## Analysis
### Average number of comparisons
* For $$\sigma \in \sgoth_n$$, we define $$T(\sigma)$$ the number of comparisons necessary to sort the array [$$\sigma(1), \dots, \sigma(n)$$] and $$T'(\sigma)$$ the number of comparisons associated to the recursive sorting of the two sub-arrays
* If equiprobability, then the average number of comparisons $$C(n)$$ is $$C(n)= \frac{1}{n!} \sum_{\sigma \in \sgoth_n} T(\sigma)$$


## References and resources
* [Wikipedia page](https://en.wikipedia.org/wiki/Quicksort)
