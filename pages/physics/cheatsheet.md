---
layout: page
title:  "Cheatsheet"
permalink: "physics-cheatsheet.html"
tags: [physics]
summary: ""
---

{% include latex-commands.html %}
$$
\newcommand{\oiint}{\unicode{x222F}}
$$

## Generalities
* Sperical coordinates

	![sperical-coordinates](https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/3D_Spherical.svg/260px-3D_Spherical.svg.png)
  
	$$\theta \in [0,\pi]$$: inclination/polar angle/colatitude/angle zénithal. Measured from $$z$$ axis to the point. Latitude: $$\pi-\theta$$

	$$\varphi \in [0,2\pi]$$: azimuth/azimuthal angle/longitude.

	$$z$$ axis: zenith direction

	$$x$$ axis: azimuth direction
* Line element in spherical coordinates: $$\vec{dl} = dr \,\vec{e_r} + rd \theta \,\vec{e_\theta} + r \sin \theta \, d\varphi \,\vec{e_\varphi}$$
* Acceleration in cylindrical coordinates: $$\vec{dl} = \left( \ddot{r}-r \, \dot{\theta}^2 \right) \, \vec{e_r} + \left( r \, \ddot{\theta} + 2 \, \dot{r} \dot{\theta} \right) \,\vec{e_\theta} + \ddot{z} \,\vec{e_z}$$
* [Vector triple product](https://en.wikipedia.org/wiki/Triple_product#Vector_triple_product): $$\vec{a} \wedge (\vec{b} \wedge \vec{c}) = (\vec{a} \cdot \vec{c}) \, \vec{b} - (\vec{a} \cdot \vec{b}) \, \vec{c}$$



## Vector calculus
### Flux
* Elementary flux at point $$M$$: $$\delta \phi = \vec{a}(M) \cdot \vect{dS}$$
* Flux through an oriented surface: $$\phi = \iint_ {M \in S} \delta \phi(M)$$
* Flux outgoing from an infinitesimal cube centered in $$M(x,y,z)$$: $$\delta \phi = \div \vec{a} \, dx \, dy \, dz = \div \vec{a} \, d\tau$$
* Ostrogradski's theorem: $$\phi = \oiint_{M \in S} \vec{a}(M) \cdot \vect{dS} = \iiint_{M \in V} \div \vec{a} \, d\tau$$
* Champ à flux conservatif: $$\oiint_{M \in S} \vec{a}(M) \cdot \vect{dS} = 0 \Leftrightarrow \div \vec{a} = 0 \Leftrightarrow \exists \vec{A}, \quad \vec{a} = \rot \vec{A}$$

### Circulation
* Elemntary circulation: $$\delta C = \vec{a}(M) \cdot \vect{dM} = \rot \vec{a} \cdot \vect{dS}$$
* Circulation around the elemntary rectangular contour following $$\vec{e_x}$$ centered in $$M(x,y,z)$$:

	$$\begin{align*}
	\delta C_x \quad
	=& \quad a(x,y + dy/2,z) \, dz \, \vec{e_z} + a(x,y,z+dz/2) \, dy \, (-\vec{e_y}) + a(x,y - dy/2,z) \, dz \, (-\vec{e_z}) + a(x,y,z-dz/2) \, dy \, \vec{e_y}\\
	=& \quad \devp{a_z}{x} dy \, dz - \devp{a_y}{z} dy \, dz\\
	=& \quad \left( \rot \vec{a} \cdot \vec{e_x} \right) dS_x
	\end{align*}$$
* [Stokes' theorem](https://en.wikipedia.org/wiki/Stokes%27_theorem): $$C_\Gamma = \oint_{M \in \Gamma}  \vec{a}(M) \cdot \vect{dM} = \iint_{M \in S(\Gamma)} \rot \vec{a} \cdot \vect{dS}$$
* [Conservative vector field](https://en.wikipedia.org/wiki/Conservative_vector_field): $$\oint_{M \in \Gamma}  \vec{a}(M) \cdot \vect{dM} = 0 \Leftrightarrow \rot \vec{a} = \vec{0} \Leftrightarrow \exists U, \quad \vec{a} = \vect{\grad} \, U$$


### Expression of operators
#### Gradient
$$\begin{align*}
	\vec{\nabla} U \quad
	=& \quad \frac{\partial U}{\partial x}\vec{e_x} \; + \; \frac{\partial U}{\partial y}\vec{e_y} \; + \; \frac{\partial U}{\partial z} \vec{e_z}\\
	=& \quad \frac{\partial U}{\partial r}\vec{e_r} \; + \; \frac{1}{r}\frac{\partial U}{\partial \theta}\vec{e_\theta} \; + \; \frac{\partial U}{\partial z} \vec{e_z}\\
	=& \quad \frac{\partial U}{\partial r}\vec{e_r} \; + \; \frac{1}{r}\frac{\partial U}{\partial \theta}\vec{e_\theta} \; + \; \frac{1}{r \sin \theta} \frac{\partial U}{\partial \varphi} \vec{e_\varphi}
\end{align*}$$


#### Divergence
$$\begin{align*}
	\vec{\nabla} \cdot \vec{a} \quad
	=& \quad \frac{\partial a_x}{\partial x} \; + \; \frac{\partial a_y}{\partial y} \; + \; \frac{\partial a_z}{\partial z} \\
	=& \quad \frac{1}{r} \frac{\partial (r \, a_r)}{\partial r} \; + \; \frac{1}{r}\frac{\partial a_\theta}{\partial \theta} \; + \; \frac{\partial a_z}{\partial z}\\
	=& \quad \frac{1}{r^2} \frac{\partial (r^2 \, a_r)}{\partial r} \; + \; \frac{1}{r \sin \theta}\frac{\partial (\sin \theta \, a_\theta)}{\partial \theta} \; + \; \frac{1}{r \sin \theta} \frac{\partial a_\varphi}{\partial \varphi} 
\end{align*}$$


#### Scalar and vector Laplacian
$$\begin{align*}
	\Delta  U \quad = \vec{\nabla} \cdot \left( \vec{\nabla} U \right) = \vect{\nabla^2} U
	=& \quad \frac{\partial^2 U}{\partial x^2} \; + \; \frac{\partial^2 U}{\partial y^2} \; + \; \frac{\partial^2 U}{\partial z^2} \\
	=& \quad \frac{1}{r} \frac{\partial (r \frac{\partial U}{\partial r})}{\partial r} \; + \; \frac{1}{r^2}\frac{\partial^2 U}{\partial \theta^2} \; + \; \frac{\partial^2 U}{\partial z^2}\\
	=& \quad \frac{1}{r^2} \frac{\partial (r^2 \frac{\partial U}{\partial r})}{\partial r} \; + \; \frac{1}{r^2 \sin \theta}\frac{\partial (\sin \theta \, \frac{\partial U}{\partial \theta})}{\partial \theta} \; + \; \frac{1}{r^2 \sin^2 \theta} \frac{\partial^2 U}{\partial \varphi^2} 
\end{align*}$$

$$\Delta\vec{a} = \Delta a_x \vec{e_x} \; + \; \Delta a_y \vec{e_y} \; + \; \Delta a_z \vec{e_z} =  \vec{\nabla} (\vec{\nabla} \cdot \vec{a}) - \vec{\nabla} \wedge (\vec{\nabla} \wedge \vec{a})$$


#### Curl
$$\begin{align*}
	\vec{\nabla} \wedge \vec{a} &= \left(\frac{\partial a_z}{\partial y} - \frac{\partial a_y}{\partial z} \right)\vec{e_x} \; + \; \left(\frac{\partial a_x}{\partial z} - \frac{\partial a_z}{\partial x} \right)\vec{e_y} \; + \; \left(\frac{\partial a_y}{\partial x} - \frac{\partial a_x}{\partial y} \right)\vec{e_z}\\
	&= \left(\frac{1}{r} \frac{\partial a_z}{\partial \theta} - \frac{\partial a_\theta}{\partial z} \right)\vec{e_r} \; + \; \left(\frac{\partial a_r}{\partial z} - \frac{\partial a_z}{\partial r} \right)\vec{e_\theta} \; + \; \frac{1}{r} \left(\frac{\partial (r \, a_\theta)}{\partial r} - \frac{\partial a_r}{\partial \theta} \right)\vec{e_z}\\
	&= \frac{1}{r \, \sin \theta} \left(\frac{\partial (\sin \theta \, a_\varphi)}{\partial \theta} - \frac{\partial a_\theta}{\partial \varphi} \right)\vec{e_r} \; + \; \frac{1}{r}\left(\frac{1}{\sin \theta}\frac{\partial a_r}{\partial \varphi} - \frac{\partial (r \, a_\varphi)}{\partial r} \right)\vec{e_\theta} \; + \; \frac{1}{r} \left(\frac{\partial (r \, a_\theta)}{\partial r} - \frac{\partial a_r}{\partial \theta} \right)\vec{e_\varphi}
\end{align*}$$

### Formulas
$$\begin{align*}
	 \vec{\nabla} \cdot (\vec{\nabla} \wedge \vec{a}) = 0 \\
	 \vec{\nabla} \wedge \vec{\nabla} U = \vec{0} \\
\end{align*}$$
	
$$\begin{align*}
	\vec{\nabla}(UV) &= U \vec{\nabla} V \; + \; V \vec{\nabla} U\\
	\vec{\nabla} \cdot (\vec{a} \wedge \vec{b}) &= \vec{b} \cdot(\vec{\nabla} \wedge \vec{a}) - \vec{a} \cdot (\vec{\nabla} \wedge \vec{b}) \\
	\vec{\nabla} \cdot (U \vec{a}) &= U \vec{\nabla} \cdot \vec{a} + \vec{a}\cdot\vec{\nabla}U
\end{align*}$$

$$\forall U, \qquad \oiint_{S} U \, \vec{n} \, dS = \iiint_V \vect{\grad} \,  U \, d\tau$$

## References
* [Intuition about curl and circulation](https://betterexplained.com/articles/vector-calculus-understanding-circulation-and-curl/)