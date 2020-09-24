---
layout: page
title:  "Integrals cheatsheet"
permalink: "integrals.html"
summary: "A cheatsheet about integrals"
---
{% include latex-commands.html %}

## Fractions

|$$f(x)$$| $$\int f(x) \, dx$$  | Condition  |
|---|---|---|
| $$ \frac{1}{x^2+a^2} $$ | $$\frac{1}{a} \arctan \left( \frac{x}{a} \right)$$  |  $$a>0$$ |
| $$ \frac{1}{ \sqrt{a^2-x^2} } $$  | $$ \arcsin \left( \frac{x}{a} \right)$$  | $$a>0$$ and $$I \subset ]-a, a[$$  |
| $$ - \frac{1}{ \sqrt{a^2-x^2} }$$  |  $$ \arccos \left( \frac{x}{a} \right)$$ | $$a>0$$ and $$I \subset ]-a, a[$$  |
|	$$ { \frac{1}{ \sqrt{x^2+a^2} } }$$ | $$ \ln \left( x + \sqrt{x^2+a^2} \right) $$ | $$a > 0$$ |
|	$$ { \frac{1}{ \sqrt{x^2-a^2} } }$$ | $$ \ln \left( x + \sqrt{x^2-a^2} \right) $$ | $$a > 0$$ |
|	$$ \sqrt{a^2-x^2}$$ | $$ \frac{x}{2} \sqrt {a^2-x^2} + \frac{a^2}{2} \arcsin \left( \frac{x}{a} \right)$$ | $$a>0$$ |
|	$$ \sqrt{x^2+a^2}$$ | $$ \frac{x}{2} \sqrt {x^2+a^2} + \frac{a^2}{2} \ln \left( x + \sqrt{x^2+a^2} \right)$$ | $$a>0$$ |
|	$$ \sqrt{x^2-a^2}$$ | $$ \frac{x}{2} \sqrt {x^2-a^2} - \frac{a^2}{2} \ln \left( x + \sqrt{x^2-a^2} \right)$$ | $$a>0$$ |
|	$$ \displaystyle \frac {1}{x} \sqrt {a^2+x^2}$$ | $$ \sqrt {a^2+x^2} -a \ln \left\vert{\frac {1}{x}}\left(a + \sqrt {a^2 + x^2} \right) \right \vert$$ | $$a>0$$ |
|	$$\displaystyle \frac {1}{x} \sqrt {a^2-x^2}$$ | $$ \sqrt {a^2-x^2} -a \ln \left \vert{\frac {1}{x}}\left(a + \sqrt {a^2 - x^2}\right)\right \vert$$ | $$a>0$$ |
|	$$\displaystyle \frac {1}{x} \sqrt {x^2-a^2}$$ | $$ \sqrt {x^2-a^2} -a \arccos \left( \frac {a}{x} \right)$$ | $$a>0$$ |
|	$$ { \frac {x^2} { \sqrt{a^2-x^2} } }$$ | $$ -\frac {x}{2} \sqrt {a^2-x^2} + \frac {a^2}{2} \arcsin \left( \frac {x}{a} \right)$$ | $$a>0$$ |
|	$$ { \frac {x^2} { \sqrt{x^2+a^2} } }$$ | $$ \frac {x}{2} \sqrt {x^2+a^2} - \frac {a^2}{2} \ln \left( x + \sqrt{x^2+a^2} \right)$$ | $$a>0$$ |
|	$$ { \frac {x^2} { \sqrt{x^2-a^2} } }$$ | $$ \frac {x}{2} \sqrt {x^2-a^2} + \frac {a^2}{2} \ln \left( x + \sqrt{x^2-a^2} \right)$$ | $$a>0$$ |



## Trigonometric functions

|$$f(x)$$| $$\int f(x) \, dx$$  | Condition  |
|---|---|---|		
|	$$\sin(x)$$ | $$-\cos(x)$$ | |
|	$$\cos(x)$$ | $$\sin(x)$$ |  |
|	$$ { \frac{1}{ \cos^2 (x)} }$$ | $$\tan (x) $$ | $$I \cap \left( \frac{\pi}{2} + \pi \mathbb{Z} \right) = \varnothing$$ |
|	$$ { \frac{1}{ \sin^2 (x)} }$$ | $$- \cot (x) $$ | $$I \cap \pi \mathbb{Z} = \varnothing$$ |
|	$$ { \frac{1}{ \sin (x)} }$$ | $$ \ln \left\vert \tan \left( \frac{x}{2} \right) \right\vert $$ | $$I \cap \pi \mathbb{Z} = \varnothing$$ |
|	$$ { \frac{1}{ \cos (x)} }$$ | $$ \ln \left\vert \tan \left( \frac{x}{2} + \frac{\pi}{4} \right) \right\vert $$ | $$I \cap \left( \frac{\pi}{2} + \pi \mathbb{Z} \right) = \varnothing$$ |
|	$$ { \frac{1}{\sin (x) \cos (x)} }$$ | $$ \ln \left\vert \tan (x) \right\vert $$ | $$I \cap \pi \mathbb{Z} \cap \left( \frac{\pi}{2} + \pi \mathbb{Z} \right) = \varnothing$$ |
|	$$\arcsin(x)$$ | $$x \, \arcsin(x) + \sqrt{1-x^2}$$ |  |
|	$$\arccos(x)$$ | $$x \, \arccos(x) - \sqrt{1-x^2}$$ |  |
|	$$\arctan(x)$$ | $$x \, \arctan(x) - \frac{1}{2} \ln \left( 1 + x^2 \right)$$ | |


## Hyperbolic functions

|$$f(x)$$| $$\int f(x) \, dx$$  | Condition  |
|---|---|---|
|	$$ \sinh (x) $$ | $$ \cosh (x) $$ | |
|	$$ \cosh (x) $$ | $$ \sinh (x) $$ | |
|	$$ { \frac{1}{ \cosh^2 (x)} }$$ | $$\tanh (x) $$ | |
|	$$ { \frac{1}{ \sinh^2 (x)} }$$ | $$- \coth (x) $$ | $$I \subset \mathbb{R}^* $$ |
|	$$ { \frac{1}{ \sinh (x)} }$$ | $$ \ln \left\vert \tanh \left( \frac{x}{2} \right) \right\vert $$ | $$I \subset \mathbb{R}^* $$ |
|	$$ { \frac{1}{ \cosh (x)} }$$ | $$ 2 \arctan \left( e^x \right) $$ | |
|	$$\ln \left( x + \sqrt{x^2+a^2} \right)$$ | $$x \, \ln \left( x + \sqrt{x^2+a^2} \right) - \sqrt{x^2+1}$$ |  |
|	$$\ln \left( x + \sqrt{x^2-a^2} \right)$$ | $$x \, \ln \left( x + \sqrt{x^2-a^2} \right) - \sqrt{x^2-1}$$ | |
|	$$\ln\left(\frac{1+x}{1-x}\right)$$ | $$x \, \ln\left(\frac{1+x}{1-x}\right) +  \ln \left( 1 - x^2 \right)$$ | |


## References
* [List of integrals on Wikipedia](https://en.wikipedia.org/wiki/Lists_of_integrals)