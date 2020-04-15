---
layout: page
title:  "Gaussian integrals"
permalink: "gaussian-integrals.html"
summary: "A cheatsheet on Gaussian integrals"
---
{% include latex-commands.html %}

## Simple forms

$$ \int_\R e^{-x^2} dx = \sqrt{\pi}$$

$$ \int_\R e^{-a(x+b)^2} dx = \sqrt{\frac \pi a}$$

## Probability forms

$$f(x) = \frac{1}{\sigma \sqrt{2\pi}} e^{-\frac{(x-\mu)^2}{2 \sigma^2}}$$

$$\int_\R f(x) dx = 1$$

$$\int_\R x f(x) dx = \mu$$

$$\int_\R x^2 f(x) dx = \mu^2 + \sigma^2$$

$$\int_\R (x-\mu)^2 f(x) dx = \sigma^2$$



## Resources and references
* [Variance on Wikipedia](https://en.wikipedia.org/wiki/Variance)