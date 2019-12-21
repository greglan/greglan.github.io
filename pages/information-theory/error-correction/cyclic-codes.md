---
layout: page
title:  "Cyclic codes"
permalink: "cyclic-codes.html"
tags: []
summary: "Introduction to cyclic codes"
---
{% include latex-commands.html %}


## Introduction and notations
* Notation du décalage à droite d'un mot $$m=m_0m_1 \dots m_{n-1}$$:
  $$\s(m) = m_{n-1}m_0m_1 \dots m_{n-2}$$
* Décalés de $$m$$: ensemble $$\{\s^k(m), k \in \N \}$$
* Polynôme associé à un mot $$m$$: $$m(X) = \sum_{i=0}^{n-1} m_i X^i$$
  
  Variation: for a word $$c=(\alpha_{n-1}, \dots, \alpha_0)$$, $$c(x) = \sum_{i=n-1}^0 \alpha_i X^i$$
* Traduction polynomiale du décalage à droite:
  $$\s(m)(X) = Xm(X) - m_{n-1}(X^n - 1) = X m(X) \mod X^n - 1$$

  Généralisation: $$\s^k(m)(X) = X^k m(X) \mod X^n - 1$$
* Code cyclique: code linéaire $$C$$ tel que $$m \in C \Rightarrow \s(m) \in C$$

  Conséquence sur les décalés: tous les décalés d'un mot $$m \in C$$ sont encore
  dans $$C$$
* Intérêt des codes cycliques: more math structure so lower complexity and memory for encoding/decoding
* Usage: not generally used for error correction. Mostly error detection using CRC
* Cyclic codes and linear block codes: all cyclic codes are linear block codes, but not every linear block code is cyclic
* Remark: $$X^n - 1 = X^n + 1$$ in $$\F_n$$

## Polynôme générateur
* Mot minimal d'un code linéaire: mot $$m \neq à$$ possédant un nombre maximal
  de zéro à droite.

  Expression: $$m = a_0 \dots a_{r-1} 1 0 \dots 0$$ with $$n-r-1$$ zeros

  Unicité: $$m-m'$$ possède un zero de plus à droite que $$m$$ et appartient
  encore au code. Contradiction.
* Le mot minimal d'un code cyclique est tel que $$a_0 \neq 0$$. Preuve simple.
* Generator polynomial of a cyclic code: unique monic (fr: unitaire) polynomial of degree $$n-k$$ such that codewords are its multiples
* Condition for generating cyclic codes: any polynomial of degree $$n-k$$ is a generator of a $$(n,k)$$ cylic code iif it is a factor of $$X^n -1$$

## Resources and references
* [1] *Pierre Wassef*, Arithmétique pour l'informatique
