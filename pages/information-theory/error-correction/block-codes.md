---
layout: page
title:  "Block codes"
permalink: "block-codes.html"
tags: []
summary: "Introduction to block codes"
---
{% include latex-commands.html %}

## Introduction
* Correlation decoding principle: compare the received word with each possible
  codeword and choose the most likely.

  High time complexity when many codewords ($$n$$ big)

  Applications: soft and hard decision decoding, small number of codewords (
  small $$n$$).
* Lookup table decoding. Low time complexity, but high memory complexity

  Applications: short codes (small $$n$$), hard decision decoding
* Disadvantage of non-linear block codes: $$n$$ and $$k$$ need to be large
  according to Shannon's theorem:
  - but $$k$$ must be small to avoid complexity in correlation decoding
  - but $$n$$ must be small to avoid excessive memory in look-up decoding
  - hard to find good codes as $$n,k$$ increase
* Solution: use good mathematical structures

## Linear block
* Definition of a $$(n,k)$$ linear block code: $$\F_q^k \subset \F_q^n$$
* Number of valid codewords: $$q^k$$ among $$q^n$$ possible codewords
* Generator matrix: matrix whose rows are the basis of the linear code.
  Dimension: $$(n,k)$$

  Allow to store only $$k$$ codewords instead of $$q^k$$

  Expression of codewords $$c$$ from data $$d$$: $$c = d G$$. Example:

  $$c = dG =
  \begin{pmatrix}
  1&1
  \end{pmatrix}
  \begin{pmatrix}
  c_1\\
  c_2
  \end{pmatrix} = c_1 + c_2$$
* Alternative generator matrices: any linear combination of the rows of the
  generator matrix is again a valid generator matrix for the same code

  Difference: data to codewords mapping is different
* Equivalent codes: obtained by permutation of columns of a generator matrix.

  Interpretation: amounts to changing the order of transmission, but different
  code because different set of codewords
* Systematic code: code where the first $$k$$ symbols are the data.

  Form of the generator matrix: $$G = \begin{pmatrix}
    I_k&P
    \end{pmatrix}$$ for some matrix $$P$$

  All linear block codes have an equivalent systematic form

  Advantage: decoding is straightforward if not error
* Parity check matrix: dimension, interpretation, uniqueness

  Characterization: for any codeword $$c$$ we have $$c H^t = G H^t = 0$$

  Form of the matrix for systematic codes: $$H = \begin{pmatrix}
    -P^t& I_{n-k}
  \end{pmatrix}$$.
* Syndrome of a creceived word $$r$$: $$s = r H^t$$. Length: $$n-k$$.

  Syndrome with error pattern: $$s = (c+e)H^t = e H^t$$

## Resources and references
