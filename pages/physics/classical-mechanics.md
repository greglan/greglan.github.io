---
layout: page
title:  "Classical mechanics"
permalink: "classical-mechanics.html"
tags: [physics]
summary: ""
---

{% include latex-commands.html %}

## Newtonian mechanics

## Central forces
### Definition and general properties
* Definition of a central force: force directed along the line joining the object and the origin

  Expression: $$\vec F = F(r) \vec e_r$$
* Newtonian field force: force whose potential is proportional to $$\frac{1}{r}$$
* Angular momentum:
* Kinetic momentum theorem
  
  Consequence: [planar motion](https://en.wikipedia.org/wiki/Classical_central-force_problem#Planar_motion)
* [First law of Kepler](https://en.wikipedia.org/wiki/Kepler%27s_laws_of_planetary_motion#First_law_of_Kepler)

#### Binet formulas
* Expression of $$\dot r$$ with $$u = \frac 1 r$$
	
  $$\dot r = {dr\over dt} = {d\over dt} \left({1\over u}\right)
  = -{1 \over u^2} {du \over dt} = -{1\over u^2} {du \over d\theta}{d\theta \over dt }
  = -{1\over u^2} \dot \theta \, {du \over d\theta}$$
* Expression of velocity in circular coordinates: 
	$$\vec v = \dot r \vec e_r +r\dot \theta \vec e_\theta
	= -{1\over u^2} \dot \theta {du \over d\theta} \vec e_r + {1 \over u} \dot \theta \vec e_\theta$$
* Expression de la constante des aires:  $$C = r^2 \dot \theta = {\dot \theta \over u^2}$$
* Expression of velocity avec la constante des aires:

  $$\begin{align*}
  \vec v & = -C{du \over d\theta} \vec e_r + {1 \over u} Cu^2 \vec e_\theta \\
  & = -C {du \over d\theta} \vec e_r + Cu \vec e_\theta
  \end{align*}$$
* Generic expression of acceleration: $$\vec a = (\ddot r - r \dot \theta^2) \vec e_r$$
			 
	La force étant centrale, l'accélération est dirigée selon $\vec e_r$ et donc sa composante selon 
	$$\vec{e_\theta}$$ est nulle
* Expression of $$\ddot r$$:

  $$\begin{align*}
  \ddot r & = {d\dot r \over dt} = {d\over dt} \left(-{1\over u^2} \dot \theta {du \over d\theta} \right) = -C{d\over dt} \left( {du \over d\theta} \right) \\
  & = -C{d\over d\theta} \left( {du \over d\theta} \right)		{d\theta \over dt } = -C\dot\theta {d^2u\over d\theta^2} = -C^2u^2 {d^2u\over d\theta^2}
  \end{align*}$$
* Expression of acceleration: 
	
  $$\vec a = \left(-C^2u^2 {d^2u\over d\theta^2} - {1\over u} (Cu^2)^2 \right)\vec e_r
	= -C^2u^2\left({d^2u\over d\theta^2} +u \right)\vec e_r$$
* Binet's formulas:

	$$\vec v = -C {du \over d\theta} \vec e_r + Cu \vec{e_\theta}, \qquad \vec a = -C^2u^2\left({d^2u\over d\theta^2} +u \right) \vec e_r$$

#### Conservation of mechanical energy
\[
	\delta W( \vec{f} ) = \frac{K}{r^2} \vec{e_r} \, dr \vec{e_r} = -d\left( \frac K r \right)
	\Rightarrow
	E_p = \frac{K}{r} + cste
\]
On choisit $E_p(r \to +\infty)= 0 \Rightarrow cste = 0$:
\[
	\boxed{ E_p = \frac{K}{r} }
\]

\[
	\boxed{ E_m = \frac 1 2 m \dot{r}^2 + \frac 1 2 m \frac{C^2}{r^2} + E_p(r) 
	= \frac 1 2 m \dot{r}^2 + E_{p,eff}(r) }
\]
\[
	\boxed{  E_{p,eff}(r) = \frac 1 2 m \frac{C^2}{r^2} + E_p(r)  }
\]


### Circular motion

## References
* [Central force](https://en.wikipedia.org/wiki/Central_force)
* [Binet's formulas](https://en.wikipedia.org/wiki/Binet_equation)