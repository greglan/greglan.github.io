---
layout: page
title:  "Data compression theory"
permalink: "compression-theory.html"
tags: []
summary: ""
---

## Theory
* Binary source code: mapping from symbols to binary strings (codewords).
  Notation: $$c(x_i)$$ for the codeword of symbol $$x_i$$

  Requirements for useful symbol codes:
  - Any codeword should have a unique decoding
  - Decoding should be easy
  - Code should achieve the best compression rate
* Prefix code: no codeword is a prefix of another codeword.
  Also called instantaneous/self-punctuating code

  Usefulness: prefix codes are uniquely decodable.
* Expected length of a code $$C$$ of a source $$X$$:
  $$L(C,X) = \sum_i p_i l(x_i)$$ with $$l(x_i)$$ the length of $$c(x_i)$$
* Balance between how short codewords are and how costly they are: starting
  from a uniquely decodable code, we can shorten one of the codewords only if we
  lengthen another codewords: constrained budget that we can spend on codewords,
  with shorter codewords being more expensive.
* Kraft inequality: $$\sum_i 2^{-l_i} \leqslant 1$$. Interpretation: total
  budget of 1, and cost of a codeword of length $$l_i = 2^{-l_i}$$.

  Relation with uniquely decodable codes: a necessary and sufficient condition
  for the existence of a binary codewords having lengths
  $$l_1 \leqslant l_2 \leqslant \dots \leqslant l_n$$ which satisfy the prefix
  condition is that the Kraft inequality is verified
* Compression limit: For a uniquely decodable code, the expected length cannot
  be smaller than the entropy

  $$L(C,X) \geqslant H(X)$$

  with equality iff $$l_i = - \log p_i$$.

  Interpretation: optimal source code lengths are equal to the Shannon
  information content, and conversely, any choice of code lengths defines
  “implicit” probabilities $$q_i = \frac{2^{-l_i}}{z}$$ with
  $$z = \sum_i 2^{-l_i}$$

  The relative entropy
  $$D(p(x) \vert \vert q(x)) = \sum_i p_i \log \frac{p_i}{q_i}$$ measures how
  many bits per symbol are wasted by using a code $$C^*$$ whose implicit
  probabilities are $$q (x)$$, when the source true probability distribution is
  $$p(x)$$, i.e. $$L(C^*, X) = H(X) + \sum_i p_i \log \frac{p_i}{q_i}$$

  Proof: according to the positivity of the information inequality
  $$D(p \vert \vert q) = \sum_i p_i \log \frac{p_i}{q_i} \geqslant 0$$, we have
  $$-\sum_i p_i \log q_i \geqslant -\sum_i p_i \log p_i$$

  If we define $$q_i = \frac{2^{-l_i}}{z}$$ with $$z = \sum_i 2^{-l_i}$$ then
  we have $$l_i = -\log q_i - \log z$$. Hence:

  $$L(C, X) = \sum_i p_i l_i = -\sum_i p_i \log q_i - \log z \geqslant -\sum_i p_i \log p_i - \log z = H(X) - \log z \geqslant H(X)$$

  The choice $$l_i = - \log p_i$$ turn both inequalities into equalities

* Compression loss
* Source coding theorem: for a source $$X$$ there exists a prefix code $$C$$ with
  expected length satisfying $$H(X) \leqslant L(C,X) \leqslant H(X) + 1$$


## Examples
### Huffman compression

### Lempel-Ziv 1978 (LZ78)
