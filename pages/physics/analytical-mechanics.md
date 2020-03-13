---
layout: page
title:  "Analytical mechanics"
permalink: "analytical-mechanics.html"
tags: [physics]
summary: ""
---

{% include latex-commands.html %}


## Lagrangian mechanics
## Hamiltonian mechanics
* 	Hamiltonian: $$H = p_i \dot{q_i} - \L$$ with $$p_i$$ the canonical momentum and $$q_i$$ the coordinates.
* Conservation of $$H$$ and identification with the energy:

	$$\begin{align*}
    \devd{\L}{t} \quad =& 
    \quad \devp{\L}{q_i} \dot{q_i} + \devp{\L}{\dot{q_i}} \ddot{q_i }\\ =&
    \quad \devd{}{t} \left(  \devp{\L}{q_i} \right) \dot{q_i} + \devp{\L}{\dot{q_i}} \ddot{q_i}\\ =&
    \quad \devd{}{t}\left( \devp{\L}{\dot{q_i}} \dot{q_i} \right) =  \devd{}{t}\left( p_i \dot{q_i} \right) \\
    0 \quad =& \quad  \devd{}{t}\left( p_i \dot{q_i} - \L \right) = \devd{H}{t}
	\end{align*}$$
* Derivation of Hamilton's equations:

  $$\begin{align*}
  \delta H \quad =& \quad \delta( p_i \dot{q_i} - \L)\\
  \delta H(p_i, q_i) \quad =& \quad p_i \delta \dot{q_i} + \delta p_i \dot{q_i} - \devp{\L}{q_i} \delta q_i - \devp{\L}{\dot{q_i}} \delta \dot{q_i} \\
  \delta H \quad = & \quad p_i \delta \dot{q_i} + \delta p_i \dot{q_i} - \dot{p_i}\delta q_i - p_i \delta \dot{q_i} \\
  \delta H(p_i, q_i) \quad = & \quad\delta p_i \dot{q_i} - \dot{p_i}\delta q_i \\			 
  \devp{H}{q_i} \delta q_i + \devp{H}{p_i} \delta p_i \quad = & \quad\delta p_i \dot{q_i} - \dot{p_i}\delta q_i \\	
  \devp{H}{q_i} = -\dot{p_i},& \qquad  \devp{H}{p_i} = \dot{q_i}
  \end{align*}$$
* Poisson brackets: $$\{A, B\} = \devp{A}{q_i} \devp{B}{p_i} + \devp{A}{p_i}  \devp{B}{q_i}$$
* Constant of the motion for a time independent quantity $$F(q_i, p_i)$$: if $$\{F, H\}=0$$, then $$F$$ is a constant of the motion. 

  Geometric interpretation

  $$\begin{align*}
  \devd{F}{t} \quad =& \quad \devp{F}{t} + \devp{F}{q_i} \dot{q_i} + \devp{F}{p_i} \dot{p_i}\\
  \quad =& \quad \devp{F}{t} + \{F, H\} =  \{F, H\}
  \end{align*}$$


## References
* [2] *Leonard Susskind & Art Friedman*, Special Relativity and Classical Field Theory, The Theoretical Minimum
* [4] *Lancaster & Blundell*, Quantum Field Theory for the Gifted Amateur
* [5] *Barton Zwiebach*, A First Course in String Theory, 2nd edition