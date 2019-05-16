---
layout: page
title:  "Regular languages"
permalink: "regular-languages.html"
summary: ""
---
$$
\newcommand{\set}[1]{\{ #1 \}}
$$

## Regular expressions
* Also called rational expressions.
* Alphabet: ensemble de lettre [2]
* Mot: suite finie et ordonée de lettres [2]
* Mot vide: $$\epsilon$$ [2]
* Ensemble des mots sur $$\Sigma$$: $$X^*$$ [2]
* Language: ensemble de mots. Partie de $$\Sigma^*$$ [2]
* Regular expressions: another way of specifying languages without the use of
sets [2, p19]
* Recursive definition [2, p21]:
    - $$\emptyset$$: empty language
    - $$\epsilon$$: language $$\set{\epsilon}$$
    - $$a$$ for $$a \in \Sigma$$: language $$\set{a}$$
    - ...


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
* [Wikipedia article](https://en.wikipedia.org/wiki/Regular_language)
* [Regular expressions on Wikipedia](https://en.wikipedia.org/wiki/Regular_expression)
