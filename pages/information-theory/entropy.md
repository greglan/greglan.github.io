---
layout: page
title:  "Entropy"
permalink: "entropy.html"
tags: []
summary: ""
---
$$
\newcommand{\E}{\mathbb{E}}
$$

## Introduction
* Uncertainty vs information: uncertainty is the lack of knowledge about an
  outcome, information is what is obtained when the outcome is known.

  Information depends on the probability of events, not just the number of
  outcomes.
* Definition of an information source: probability distribution (or density) on a
  set of outcomes.

  Other formulation: collection of random variables
* Construction of surprise: more surprised when an unlikely outcome occurs than
  when a likely outcome occurs.

  Measure of surprise of an event of probability $$p$$:
  $$\log\frac{1}{p} = - \log p$$

## Entropy
* Entropy of a source: average surprise of the source. Other interpretation:
  information content of a source

  Expression: $$H(X) = - \sum_x p(x) \log(p(x))$$ with $$X$$ random variable
  representing the information source
* Entropy dependence: depends only on the probability of events, not their
  actual values.

  Consequence: scale and shift invariant.

  Contribution of small probabilities: don't influence much
* Entropy sign: always positive.

* Maximum value of entropy: maximum entropy for a random variable with $$n$$
  values is $$\log n$$, which is achieved only by the uniform distribution.

  Proof.
* Binary entropy function: graph
  Expression: $$H(p) = - p \log p - (1-p) \log(1-p)$$.

  Max value: $$H(1/2) = 1$$ bit. Other interesting values for guessing the
  graph: $$H(0) = H(1) = 0$$ bits
* Joint entropy: $$H(X,Y) = -\sum_{x,y} p(x,y) \log p(x,y) = -\E(\log p(x,y))$$
* Entropy of independent variables: $$H(XY) = H(X)+ H(Y)$$.

  Proof without expected value, proof with expected value
* Conditional entropy: $$H(Y\vert X) = - \sum_{x,y} p(x,y) \log p(y \vert x)
  = -\sum_x p(x) \sum_y p(y \vert x) \log p(y \vert x)$$

  Interpretation: On average, $$Y$$ can be represented with $$H(Y \vert X)$$
  bits once $$X$$ is known.

* Influence of conditioning: reduces entropy $$H(Y \vert X) \leqslant H(Y)$$

  Condition for equality of entropy and conditioned entropy: independent events.

  $$H(Y \vert X) = H(Y) \Leftrightarrow$$ $$X$$ and $$Y$$ independent
* Chain rule: $$H(XY) = H(X) + H(Y \vert X)$$. Proof.

## Mutual information
* Mutual information: $$I(X;Y) = H(Y)-H(Y \vert X)$$

  Interpretation: how much information $$X$$ gives about $$Y$$ on average (
  recall that $$H(Y \vert X) \leqslant H(Y)$$)

  Expression: $$I(X;Y) =\sum_{x,y} p(x,y) \log \frac{p(x,y)}{p(x)p(y)}$$

* Symmetry of mutual information: $$I(X;Y) = I(Y;X)$$
* Positivity of mutual information: $$I(X;Y) \geqslant 0$$

  Condition for being null: $$X$$ and $$Y$$ independent.

* Venn diagram interpretation

![venn-diagram-interpretation](/images/information-theory/venn-diagram-interpretation.png)

## Relative entropy
* Relative entropy: also called *cross entropy* or *Kullback-Leibler distance*.

  Definition: $$D(p(x) \vert \vert q(x)) = \sum_x p(x) \log \frac{p(x)}{q(x)} = \E\left( \log \frac{p(x)}{q(x)} \right)$$
* Jensen's inequality: for $$f$$ convex, $$f(\E(X)) \leqslant\E(f(X))$$
* Information inequality: $$D(p \vert \vert q) \geqslant 0$$ with equality if
  $$p=q$$
