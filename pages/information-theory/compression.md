---
layout: page
title:  "Data compression theory"
permalink: "compression-theory.html"
tags: []
summary: ""
---
* Binary source code: mapping from symbols to binary strings (codewords)

  Requirements for useful symbol codes:
  - Any codeword should have a unique decoding
  - Decoding should be easy
  - Code should achieve the best compression rate
* Prefix code: no codeword is a prefix of another codeword.
  Also called instantaneous/self-punctuating code

  Usefulness: prefix codes are uniquely decodable.
* Expected length of a code: $$L(C,X) = \sum_i p_i l(x_i)$$ with $$l(x_i)$$ the
  length of $$c(x_i)$$
* Balance between how short codewords are and how costly they are
* Kraft inequality: $$\sum_i 2^{-l_i} \leqslant 1$.

  Interpretation: total budget of 1, and cost of a codeword of length
  $$l_i = 2^{-l_i}$$. Relation with uniquely decodable codes.
* Compression limit: for a uniquely decodable code: $$L(C,X) \geqslant H(X)$$
