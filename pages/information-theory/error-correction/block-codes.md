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
* Parity check matrix: dimension, uniqueness

  Interpretation: dual space

  Characterization: for any codeword $$c$$ we have $$c H^t = G H^t = 0$$

  Form of the matrix for systematic codes: $$H = \begin{pmatrix}
    -P^t& I_{n-k}
  \end{pmatrix}$$.
* Syndrome of a received word $$r$$: $$s = r H^t$$. Length: $$n-k$$.

  Syndrome with error pattern: $$s = (c+e)H^t = e H^t$$

  Limitation: if error pattern is a valid codeword, then the received codeword
  is also a valid codeword
* The lower the coderate the better the error correction capabilities

### Specific codes
* Dual codes: $$n-k$$ dimensional subspace

  Generator matrix: parity matrix. Parity matrix: generator matrix. Can be made
  systematic using regular techniques.
* Number of possible syndromes:

  Number of possible patterns with $$t$$ errors:
* Hamming bound: $$(n,k)$$ with $$t$$ error case, binary case

  $$q-1$$ error patterns because $$0$$ is not an error
* Perfect code: code with equality in the Hamming Bound

  Example of perfect binary codes
* Singleton bound. Example of codes meeting the Singleton Bound.
* Probability of $$r$$ errors in $$n$$ bits in a BSC

  Probability of codeword failure: $$\P(r >t)$$. Limit for small $$p$$.
* $$p_\text{dec} = \text{BER} = \frac{3}{n} \P_\text{blk error}$$

## Resources and references
