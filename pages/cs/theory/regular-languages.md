---
layout: page
title:  "Regular languages"
permalink: "regular-languages.html"
summary: ""
---
$$
\newcommand{\set}[1]{\{ #1 \}}
$$

## Introduction and notations
* Alphabet: ensemble de lettre [2]
* Mot: suite finie et ordonée de lettres [2]
* Mot vide: $$\epsilon$$ [2]
* Ensemble des mots sur $$\Sigma$$: $$X^*$$ [2]
* Language: ensemble de mots. Partie de $$\Sigma^*$$ [2]

### Opérations rationelles
* Produit
* Union
* Etoile


## Regular expressions and expressions
* Regular expressions: another way of specifying languages without the use of
  sets [2, p19]

  Also called rational expressions (expressions rationelles)
* Recursive definition [2, p21]:
    - $$\emptyset$$: RE for the empty language
    - $$\epsilon$$: RE for the language $$\set{\epsilon}$$
    - $$a$$ for $$a \in \Sigma$$: RE for the language $$\set{a}$$
    - $$R_1 \vert R_2$$ for $$R_1,R_2$$ RE for languages $$L_A,L_2$$: RE for the language $$L_1 \cup L_2$$
    - $$R_1 R_2$$ for $$R_1,R_2$$ RE for languages $$L_A,L_2$$: RE for the language $$L_1 \dot L_2$$
    - $$R^*$$ for $$R$$ RE for language $$L$$: RE for the language $$L^*$$
* Regular language: formal language that can be expressed by a regular
  expression

  Also called rational language (langage rationnel)
* Regular language $$L$$ on alphabet $$\Sigma$$: defined recursively
  - empty language $$\emptyset$$ is a regular language
  - empty string language $$\set{\epsilon}$$ is a regular language
  - $$\forall a \in \Sigma$$, $$\set{a}$$ is a regular language
  - If $$A, B$$ regular languages on $$\Sigma$$, then $$A \cup B$$, $$AB$$,
    $$A^*$$ are regular languages


## Langages réguliers

## Langages locaux
* Définition.
* Intersection de deux langages locaux.
* Etoile de Kleene d'un langage local.
* Union et concaténation: alphabets disjoints.
* Expression rationnelle linéaire.
* Langage représenté par une expression rationnelle linéaire: local. Réciproque? Faux: $$aa^*$$.


## Resources and references
* [1] *Oliver Carton*, Langages formels, calculabilité et complexité
* [2] *Eric Cousin*, Cours 1 INF424 2017
* [Regular expressions on Wikipedia](https://en.wikipedia.org/wiki/Regular_expression)
* [Regular languages on Wikipedia](https://en.wikipedia.org/wiki/Regular_language)
* [Formal languages on Wikipedia](https://en.wikipedia.org/wiki/Formal_language)
