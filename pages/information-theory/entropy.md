---
layout: page
title:  "Entropy"
permalink: "entropy.html"
tags: []
summary: ""
---
{% include latex-commands.html %}
$$
\newcommand{\E}{\mathbb{E}}
%\renewcommand{\log}{\log_2}
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

  Expression: $$H(X) = - \sum_x p(x) \log(p(x)) = \E(- \log p(x))$$ with $$X$$ random variable
  representing the information source
* Entropy dependence: depends only on the probability of events, not their
  actual values.

  Consequence: scale and shift invariant.

  Contribution of small probabilities: don't influence much
* Entropy sign: always positive.

* Maximum value of entropy: maximum entropy for a random variable with $$n$$
  values is $$\log n$$, which is achieved only by the uniform distribution. 

  Hence we always have $$H(X) \leqslant \log \vert \mathcal{X} \vert$$ with $$\mathcal X$$ the set in which $$X$$ takes values

  Proof.
* Output distribution is uniform when the input distribution is uniform [3, Q3.8]
  
  Proof: $$p(y) = \sum_x p(y \vert x) p(x) = \sum_x p(y \vert x) \frac{1}{\vert \mathcal X \vert} = \frac{1}{\vert \mathcal X \vert} \sum_x p(y \vert x) = \frac{1}{\vert \mathcal X \vert}$$
* Binary entropy function $$H_2$$:
  
  ![binary-entropy-graph](https://upload.wikimedia.org/wikipedia/commons/2/22/Binary_entropy_plot.svg)

  Expression: $$H_2(p) = - p \log p - (1-p) \log(1-p)$$.

  Max value: $$H_2(1/2) = 1$$ bit. Other interesting values for guessing the
  graph: $$H_2(0) = H_2(1) = 0$$ bits
* Joint entropy: $$H(X,Y) = H(X \cap Y) = -\sum_{x,y} p(x,y) \log p(x,y) = -\E(\log p(x,y))$$
* Entropy of independent variables: $$H(X,Y) = H(X)+ H(Y)$$.

  Proof without expected value: $$H(X,Y) = -\sum_{x,y} p(x,y) \log p(x,y) = -\sum_{x,y} p(x)p(y) \log p(x)p(y) \\ = -\sum_{x,y} p(x)p(y) \log p(x) + -\sum_{x,y} p(x)p(y) \log p(y) \\ = - \sum_y p(y) \sum_x p(x) \log p(x) - \sum_x p(x) \sum_y p(y) \log p(y) \\ = \sum_y p(y) H(X) + \sum_x p(x) H(Y) = H(X) + H(Y)$$

  Proof with expected value: $$H(X,Y) = \E(- \log p(x,y)) = \E(-\log p(x) p(y)) = \E(- \log p(x)) + \E (- \log p(y))$$
* Conditional entropy: $$H(Y\vert X) = - \sum_{x,y} p(x,y) \log p(y \vert x)
  = -\sum_x p(x) \sum_y p(y \vert x) \log p(y \vert x) = - \sum_x p(x) H(Y \vert X=x)$$

  Interpretation: On average, $$Y$$ can be represented with $$H(Y \vert X)$$
  bits once $$X$$ is known.

* Influence of conditioning: reduces entropy $$H(Y \vert X) \leqslant H(Y)$$

  Condition for equality of entropy and conditioned entropy: independent events.

  $$H(Y \vert X) = H(Y) \Leftrightarrow$$ $$X$$ and $$Y$$ independent
* Chain rule: $$H(X,Y) = H(X) + H(Y \vert X)$$. Proof.

## Mutual information
* Mutual information: $$I(X;Y) = H(Y)-H(Y \vert X)$$

  Interpretation: how much information $$X$$ gives about $$Y$$ on average (recall that $$H(Y \vert X) \leqslant H(Y)$$)

  Expression: $$I(X;Y) = \sum_{x,y} p(x,y) \log \frac{p(x,y)}{p(x)p(y)}$$

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

## Continuous formulation
* Differential entropy of a continuous variable $$X$$ with density function $$f$$: [1, 4p27] $$h(X) = - \int_{\inftym}^{\inftyp} f(x) \ln f(x) dx$$
* Differential entropy of a uniform variable over $$[a,b]$$: $$h(X) = \int_{\inftym}^{\inftyp} -f(x) \ln f(x) dx = - \int_a^b  \frac{1}{b-a} \ln \frac{1}{b-a} dx = - \ln \frac{1}{b-a} = \ln (b-a)$$
  
  Dependence: only on the size of the interval, not its location. Consequence: translation invariant.

  If $$[a,b] = [0, 1]$$, then $$h(X) = \ln 1 = 0$$. Similarly, if $$b-a < 1$$, then $$h(X) < 0$$
* Differential entropy of a centered Gaussian variable: $$X$$ follows $$\mathcal{N}(\mu, \sigma) = \mathcal{N}(0, \sigma)$$ so $$f(x) = \frac{1}{\sqrt{2 \pi \sigma^2}} e^{- \frac{(x-\mu)^2}{2 \sigma^2}} = \frac{1}{\sqrt{2 \pi \sigma^2}} e^{- \frac{x^2}{2 \sigma^2}} $$.
  
  Hence $$h(X) = -\int_{\inftym}^{\inftyp} f(x) \ln f(x) dx = - \int_{\inftym}^{\inftyp} f(x) \left(\ln(\frac{1}{\sqrt{2 \pi \sigma^2}}) -\frac{x^2}{2 \sigma^2} \right) dx$$ 
  $$ = \int_{\inftym}^{\inftyp} f(x) \ln \sqrt{2 \pi \sigma^2} dx + \int_{\inftym}^{\inftyp} f(x) \frac{x^2}{2 \sigma^2} dx = \ln (\sqrt{2 \pi \sigma^2}) + \frac{1}{2 \sigma^2} \int_{\inftym}^{\inftyp} x^2 f(x) dx $$
  $$ = \frac{1}{2} \ln (2 \pi \sigma^2) + \frac{1}{2 \sigma^2} \var X = \frac{1}{2}( 1 + \ln 2 \pi \sigma^2) = \frac{1}{2} \ln 2 \pi e \sigma^2$$ nats $$ = \frac{1}{2} \ln 2 \pi e \sigma^2$$ bits
* Natural extension for the differential conditional entropy and differential relative entropy
* Maximum differential entropy: for any random variable with variance bounded by $$\sigma^2$$, the Gaussian density $$\phi(x) =  \frac{1}{\sqrt{2 \pi \sigma^2}} e^{- \frac{x^2}{2 \sigma^2}}$$ has the largest differential entropy.
  
  Proof: assume random variable $$X$$ and associated density function $$f$$ such that $$\var X \leqslant \sigma^2$$. By translation invariance of differential entropy, we can assume that the mean is zero: $$\E(X) = \int_{\inftym}^{\inftyp} x f(x) dx = 0$$

  $$D(f \vert \vert \phi) = \int_{\inftym}^{\inftyp} f(x) \ln \frac{f(x)}{\phi(x)} dx = \int_{\inftym}^{\inftyp} f(x) \ln \left( f(x) \sqrt{2 \pi \sigma^2} e^\frac{x^2}{2 \sigma^2} \right) dx $$
  $$ = \int_{\inftym}^{\inftyp} f(x) \ln f(x) dx + \int_{\inftym}^{\inftyp} f(x) \ln \sqrt{2 \pi \sigma^2} dx + \int_{\inftym}^{\inftyp} f(x) \frac{x^2}{2 \sigma^2} dx =$$
  $$ -h(f(x)) + \frac{1}{2} \ln 2 \pi \sigma^2 + \frac{1}{2 \sigma^2} \var X =$$ 
  $$-h(f(x)) + \frac{1}{2} \ln 2 \pi \sigma^2 + \frac{1}{2} = $$
  $$-h(f(x)) + h(\phi(x)) \geqslant 0$$ because $$D(f \vert \vert \phi) \geqslant 0$$. 
  Hence $$h(f) \leqslant h(\phi)$$.



## References
* [1] *Robert Piechocki*, Communication Systems, Slides
* [2] *Robert Piechocki*, Communication Systems, Lecture notes