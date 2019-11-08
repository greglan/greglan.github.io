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
* Traduction polynomiale du décalage à droite:
  $$\s(m)(X) = Xm(X) - m_{n-1}(X^n - 1) = X m(X) \mod X^n - 1$$

  Généralisation: $$\s^k(m)(X) = X^k m(X) \mod X^n - 1$$
* Code cyclique: code linéaire $$C$$ tel que $$m \in C \Rightarrow \s(m) \in C$$

  Conséquence sur les décalés: tous les décalés d'un mot $$m \in C$$ sont encore
  dans $$C$$

## Polynôme générateur
* Mot minimal d'un code linéaire: mot $$m \neq à$$ possédant un nombre maximal
  de zéro à droite.

  Expression: $$m = a_0 \dots a_{r-1} 1 0 \dots 0$$ with $$n-r-1$$ zeros

  Unicité: $$m-m'$$ possède un zero de plus à droite que $$m$$ et appartient
  encore au code. Contradiction.
* Le mot minimal d'un code cyclique est tel que $$a_0 \neq 0$$. Preuve simple.

## Resources and references
* [1] *Pierre Wassef*, Arithmétique pour l'informatique
