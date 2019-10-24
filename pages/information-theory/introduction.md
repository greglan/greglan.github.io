---
layout: page
title:  "Introduction to information theory"
permalink: "information-theory-intro.html"
tags: []
summary: "Introduction to information theory"
---
$$
\newcommand{\P}{\mathbb{P}}
$$

## Introduction
* 3 circle code: encoding and decoding procedure [1, lecture 1 slide 7]
* Error control strategies:
  * channel coding: error correction codes. Also called FEC: Forward Error
    correction (forward: need to do work before transmitting)
  * Automatic Repeat reQuest (ARQ): only detect an error, and resend the data.
    Can be used in IOT applications. Usually light/fast implementation
  * resilient source coding/concealment: systems resilient to uncorrected errors

![communication-chain](/images/information-theory/channel-coding.png)

* Code rate: $$R_C = \frac{k \log_2 N_m}{n \log_2 N_t}$$. For $$N_m = N_t$$,
  $$R_C = \frac{k}{n}$$

  The smaller the code rate, the more redundancy there is
* Code: subset of all possible sequences symbols
* Channel capacity: maximum data rate without errors

## Shannon's theorem
* Shannon's theorem: for any transmission rate less or equal to the channel
  capacity, there exists a coding scheme that achieves an arbitrary small
  probability of error.

  Any transmission with higher rates than the channel capacity will always incur
  errors
* Proof of Shannon's theorem based on the performance of random codes of length
  $$n$$ bits.

  $$\P(E) \leqslant 2^{-n f(R_C, C)}$$ with $$\P(E)$$ probability of error and
  $$f$$ function of $$R_C$$ and $$C$$ only (not $$n$$).

  The greater $$n$$ is, the lower the probability of error. But also means
  increasing complexity, so impractical
* 1993: Turbo codes. Before, conjectured that codes could only reach a 3 dB gap
  to the capacity

  First turbo code: 0.5 dB gap

  2001: LDPC codes can approach the Shannon limit to 0.0045 dB

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

## Resources and references
* [1] Coding Theory lecture
