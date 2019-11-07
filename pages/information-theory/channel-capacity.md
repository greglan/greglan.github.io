---
layout: page
title:  "Channel capacity"
permalink: "channel-capacity.html"
tags: []
summary: ""
---
$$
\newcommand{\P}{\mathbb{P}}
$$

## Channel coding theorem
* Shannon's theorem: for any transmission rate less or equal to the channel
  capacity, there exists a coding scheme that achieves an arbitrary small
  probability of error.

  Any transmission with higher rates than the channel capacity will always incur
  errors
* Proof of Shannon's theorem based on the performance of random codes of length
  $$n$$ bits.

  $$\P_e \leqslant 2^{-n (I(X;Y)-R)}$$ with $$\P(E)$$ probability of error and
  $$f$$ function of $$R_C$$ and $$C$$ only (not $$n$$).

  The greater $$n$$ is, the lower the probability of error. But also means
  increasing complexity, so impractical

## Channel types
* Memoryless: noise for each transmitted symbol is independent of previous (or
  next) symbols. Consequence: the order of symbol transmission doesn't impact
  performance.

  For $$x_i$$ input and $$y_i$$ output: $$\P(y_{1:n}, x_{1:n}) = \prod_{i=1}^n
  \P(y_i \vert x_i)$$

  Validity of hypothesis: a often a valid assumption
* Symmetric: noise independent of symbol values. Consequence: permutation of
  symbol values doesn't affect performance
* Binary symmetric channel (BSC): probability $$p$$ of corruption

  ![bsc](https://upload.wikimedia.org/wikipedia/commons/8/8e/Binary_symmetric_channel_%28en%29.svg)

* Binary Erasure Channel (BEC): channel where bits are either received without
  error or lost ($$p_e$$).

  Can model system behavior at the packet level (wireless communications,
  Internet...)

  ![bec](https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Binaryerasurechannel.png/262px-Binaryerasurechannel.png)
