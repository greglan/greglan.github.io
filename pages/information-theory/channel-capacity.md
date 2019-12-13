---
layout: page
title:  "Channel capacity"
permalink: "channel-capacity.html"
tags: []
summary: ""
---
{% include latex-commands.html %}

$$
\newcommand{\snr}{\text{SNR}}
$$

## Introduction
* Channel definition: conditional probability distribution that describes the channel output $$Y$$ given the channel $$X$$
* Discrete time channel: defined by $$\P(y_1, \dots y_n \vert x_1, \dots x_n)$$

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
### Discret Memoryless Channels (DMC)
* Noise for each transmitted symbol is independent of previous (or
  next) symbols

  $$\P(y_{1} \dots y_n, x_{1} \dots x_n) = \prod_{i=1}^n
  \P(y_i \vert x_i)$$ [1, 4p4]

  Interpretation [1, 4p4]: past outputs do not affect future outputs 
* Consequence: the order of symbol transmission doesn't impact
  performance.
* Validity of the model: a often a valid assumption
* Definition of the information capacity of a DMC [1, 4p8] [2, p24]: $$C = \max_{p(x)} I(X;Y) = \max_{p(x)} \sum_{x,y} p(x,y) \log \frac{p(x,y)}{p(x)p(y)}$$
  
  Interpretation: maximum number of bits per use of the channel that can reliably be transmitted
* Capacity calculations strategy: find the conditional entropy that is the easiest to calculate
  
  - Method 1: $$\max_{p(x)} I(X;Y) = \max_{p(x)} H(X) - H(X \vert Y)$$
  - Method 2: $$\max_{p(x)} I(X;Y) = \max_{p(x)} H(Y) - H(Y \vert X)$$
  - Method 3: $$\max_{p(x)} I(X;Y) = \max_{p(x)} H(X) + H(Y) - H(X, Y)$$
* Sign of capcity: $$C \geqslant 0$$ because $$I(XY) \geqslant 0$$
* Null capacity: called a *useless* channel because the output "says nothing" about the input
* Upper bound: $$C \leqslant \min \set{\log \vert \mathcal{X} \vert, \log \vert \mathcal{Y} \vert}$$
  
  Proof: $$I(X;Y) \leqslant H(X) \leqslant \log \vert \mathcal{X} \vert$$ and $$I(X;Y) \leqslant H(Y) \leqslant \log \vert \mathcal{Y} \vert$$

### Noiseless binary channels
* Definition
* Conditional entropy
* Information capacity: $$C = 1$$

### Binary Symmetric Channels (BSC)
* Definition (with probability $$p$$ of corruption)

  ![bsc](https://upload.wikimedia.org/wikipedia/commons/8/8e/Binary_symmetric_channel_%28en%29.svg)
* Conditional entropy
* Information capacity: $$C = 1 - H_2(p)$$


### Binary Erasure Channel (BEC)
* Definition: channel where bits are either received without
  error or lost ($$p_e$$).

  ![bec](https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Binaryerasurechannel.png/262px-Binaryerasurechannel.png)

* Applications: model system behavior at the packet level (wireless communications,
  Internet...)
* Definition for error rate $$\alpha$$ [1, 4p17]: $$p(y \vert x) = \begin{pmatrix} 1-\alpha & 0 & \alpha \\ 0 & 1 - \alpha & \alpha \end{pmatrix}$$
* Capacity: $$C = 1 - \alpha$$.
  
  Proof using $$I(X;Y) = H(X) - H(X \vert Y)$$ [1, 4p18]: $$H(X \vert Y) = p(y=0)H(X \vert Y=0) + p(y=1) H(X \vert Y=1) + p(y=E) H(X \vert Y=E) \\ = p(y=E) H(X \vert Y=E) = \alpha H(X)$$
  $$C = \max_{p(x)} I(X;Y) = \max_{p(x)} H(X) - H(X \vert Y) = \max_{p(x)} H(X) - \alpha H(x) \\ = (1 - \alpha) \max_{p(x)} H(X) = 1 - \alpha$$


  Proof using $$I(X;Y) = H(X) - H(X \vert Y)$$ [1, 4p19]: 
* Interpretation of the capacity [1, 4p20]: if we send $$n$$ data bits, the channel will erase $$\alpha n$$ bits on average. Hence the remaining number of bits available is $$(1- \alpha)n$$

### Z channels
* Definition [1, 4p24] 
* Expression of the mutual information [1, 4p24]
* Capacity [1, 4p25]

### Gaussian channels
* Gaussian constraint: consider two gaussian centered at -1 and +1 respectively. If the $$\sigma$$ associated with the Gaussian is too large, the Gaussian will spread beyond 0. If it is the case, this can efect decision making
  
  If there are no constraints on the input symbols, arbitrarily many (that is, infinitely many) bits could be sent in one use of the channel with any desired small error probability - simply choose input values far enough apart that there will be small probability of uncertainty (tails of the Gaussian density).
* Most common input contraint: power $$\sim$$ energy per channel use or per unit time
  
  Definition of power for discrete-time channels: average input energy per channel use $$P = \frac{1}{n} \sum_{i=1}^n x_i^2$$
* Definition of the information capacity of a Gaussian channel with power constraint $$P$$: $$C = \max_{p(x), \E(X^2) \leqslant P} I(X;Y)$$
  
  In other words: maximisation over all probability densities with the second moment $$\E(X^2) \leqslant P$$
* Information capacity of a Gaussian channel with noise power $$N$$ and power constraint $$P$$:
  
  $$C = \frac{1}{2} \log\left(1 + \frac{P}{\sigma_N^2} \right) = \frac{1}{2} \log(1 + \snr)$$

  Interpretation: for any rate $$R < C$$ and $$\forall \epsilon > 0$$, there exists $$(2^{Rn}, n)$$ codes with vanishing probability of error for large enough $$n$$.
* Proof of the information capacity: 
  - assume the noise $$Z$$ is independent of the input $$X$$
  - conditionnal differential entropy: $$f(Y \vert X) = f_Z(y-x) = f_z(z)$$ hence $$h(Y \vert X) = h(Z)$$
  - Variance: $$\var Y = \var X + Z = \var X + \var Z = \E(X^2) + \E(Z^2) = P + \sigma_N^2$$
  - $$h(Y) \leqslant h(\mathcal{N}(0, P + \sigma_N^2)) = \frac{1}{2} \log 2 \pi e(P + \sigma_N^2)$$ because for a fixed variance, a Guassian density has the largest differential entropy
  - the sum of two independent Gaussian random variables is also Gaussian, so we can obtain a Gaussian output density by using an input with Gassian density $$\mathcal{N}(0, P)$$
  - Consequence: $$I(X;Y) = h(Y) - h(Y \vert X) = \frac{1}{2} \log 2 \pi e(P + \sigma_N^2) - \frac{1}{2} \log 2 \pi e\sigma_N^2 $$ 
  $$= \frac{1}{2} \log \frac{P + \sigma_N^2}{\sigma_N^2} = \frac{1}{2} \log \left( 1 + \frac{P}{\sigma_N^2} \right)$$

### Other channels
* Symmetric: noise independent of symbol values. Consequence: permutation of
  symbol values doesn't affect performance
* Non-overlapping output channels: model, conditional probabilities, information capacity [1, 4p22]
* Deterministic channels: model, information capacity [1, 4p23]


## Sphere packing
* Sphere packing: $$R = \sqrt{\sum_i x_i}$$. If too much noise, a vector in the sphere will overlap with neighboring cells.

## References
* [1] *Robert Piechocki*, Communication Systems, Slides
* [2] *Robert Piechocki*, Communication Systems, Lecture notes