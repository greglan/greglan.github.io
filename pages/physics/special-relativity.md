---
layout: page
title:  "Special relativity"
permalink: "special-relativity.html"
tags: [physics]
summary: ""
---

{% include latex-commands.html %}

## Generalities
### Lorentz's transformations and consequences
\begin{equation}
\gamma = \frac{1}{\sqrt{1-\frac{v^2}{c^2}}} = \frac{1}{\sqrt{1-\beta^2}}
\end{equation}

\begin{equation}
c\Delta t' = \gamma \left( c \Delta t - \frac{V}{c} \Delta x \right)
\end{equation}

\begin{equation}
\Delta x' = \gamma \left( \Delta x - \frac{V}{c} c \Delta t \right)
\end{equation}

* $$v \ll c \Rightarrow \gamma \simeq 1$$
* Pseudo norme $$\neq$$ norme euclidienne
* Composition des vitesses
	\begin{equation}
		v' = \frac{v-V}{1-\frac{vV}{c^2}}
	\end{equation}
* Si $$v'=c$$, alors $$v=c$$ aussi
* Time dilatation [1, Vidéo 2: 35min] 
  \begin{equation}
		\Delta t' = \gamma \Delta t
	\end{equation}
* Spatial contraction [1, Vidéo 2: 51min30]. Measure in $$\mathcal{R}'$$ at the same time: $$\Delta t'=0$$

  According to Lorentz's tranformation:
  \begin{equation}
  \Delta x' = \frac{1}{\gamma} \Delta x
  \end{equation}
  No unique length: depends on the observer
* Proper time: $$d\tau = \frac{\sqrt{I}}{c}$$ et $$d\tau = \frac{dt}{\gamma}$$


### Minkowski space
* $$A \cdot B = A_t B_t - A_x B_x -A_y B_y - A_z B_z = \eta_{ij} A_i B_j$$
* $$A \cdot B = 0 \Leftrightarrow A$$ et $$B$$ orthogonaux
* Spacetime interval/distance: $$s^2 = -t^2 + x^2 + y^2 + z^2 = - \tau^2$$ [2, p57]
* Proper time: $$\tau^2 = t^2 -x^2 - y^2 - z^2$$ [2, p52]
  
  Along a world line ($$x^2=y^2=z^2=0$$), represents the ticking of a clock along that world line: $$\tau^2 = t^2$$. 
  This is the time experienced by the traveler [2, p57]
* Timelike separation/event: $$s^2 < 0$$: event inside the future light-cone
  
  Spacelike separation/event: $$s^2 >0$$: event outside the light-cones

  Lightlike speration/event: $$s^2=0$$ [2, p57]
* For light, time doesn't exist: $$\tau^2 = 0 = t^2- (x^2 + y^2 + z^2) = t^2$$ so that $$t=0$$ always [2, p71]


### Principe de relativité [1, Vidéo: 18min35]
* Il n'y a pas de mouvement absolu à proprement parler
* Dans un référentiel, conservation du vectuer quantité de mouvement, dans un autre non
* Mais marche en utilisant des quadri vecteurs

### Lightcone diagrams
* Stationary referential: two synchronous events are on the same horizontal line
* World line: line that represents the trajectory of an oberver through spacetime [2, p17]


### Quadrivecteur vitesse
* $$v \neq \frac{X^\mu}{dt}$$ car $$\frac{X^\mu}{dt}$$ pas quadrivecteur (ne vérifie pas les transformations de Lorentz car $$dt$$ non invariant)
* Bonne solution: $$v = \frac{X^\mu}{d \tau}$$ avec $$\tau$$ temps propre (invariant relativiste) [2, p75]
* Norme: $$v \cdot v = c^2$$

### Light-cone coordinates
* Definition: $$(x^+, x^-, x^2, x^3)$$ with $$x^+ = \frac{1}{\sqrt{2}}(x^0 + x^1)$$ and $$x^- = \frac{1}{\sqrt{2}}(x^0 - x^1)$$ [5, p22]
* Expression of the interval: $$-ds^2 = -2 dx^+ dx^- + (dx^2)^2 + (dx^3)^2 = \hat{\eta}_{\mu \nu} dx^\mu dx^\nu$$ [5, p23]
* Light-cone metric: $$\hat{\eta}_{\mu \nu} = \begin{pmatrix}
	0 & -1 & 0 & 0 \\
	-1 & 0 & 0 & 0\\
	0 & 0 & 1 & 0 \\
	0 & 0 & 0 & 1
	\end{pmatrix}$$ [5, p24]


### Four-momentum
* If $$p = mv$$ with $$v$$ four-vector, then $$p$$ four-vector [1, 26min40]
* Expressions:
	- $$p_\mu = (\frac{E}{c}, p_1, p_2, p_3), \quad p^\mu = (\frac{E}{c}, -p_1, -p_2, -p_3)$$ [4, p53]
  - $$\vec{p} = \gamma m \vec{v} = \gamma m \begin{pmatrix}
			c\\
			v_x\\
			v_y\\
			v_z
			\end{pmatrix}$$ [5, p26]

* $$p^2 = \vec{p} \cdot \vec{p} = -m^2 c^2$$ [5, p27] [1, Vidéo 5: 44min40]
* Center of momentum frame (CM frame): inertial frame such that the total momentum vanishes [3, p44]

#### Conservation
* If the four-momentum is conserved in a frame $$\R$$, then it is conserved in any frame $$\mathcal{R}'$$ [1, 26min40]
* [3, p43]


### Energy and momentum
* Definition of the energy $$E$$: time component $$p_t$$ of the momentum $$p_t = \gamma m c = \frac{E}{c}$$ donc $$E = \gamma m c^2$$. [1, Vidéo 5: 49min20] [5, p26]
* Limit for low velocities: $$E \simeq mc^2 + \frac{1}{2} mv^2 = E_0 + E_{c, \textit{classic}}$$ [1, Vidéo 5: 55min15]
* Mass energy (énergie de masse) $$E_0 = mc^2$$ [1, Vidéo 5: 1h3min40]
* Relastivistic kinematic energy (énergie cinétique): $$E = \gamma m c^2 = E_0 + (\gamma -1) mc^2 = E_0 + E_{c, \textit{rel}}$$ [1, Vidéo 5: 1h4min25]
* $$\frac{E^2}{c^2} - \vec{p} \cdot \vec{p} = m^2 c^2$$ [5, p26]



## Lagrangian formulation
* The principle of least action should hold for all observer, so the action should be an invariant, so the Lagrangian should be an invariant

  Proper time $$d\tau$$ is an invariant, so the Lagrangian should be of the form $$\delta \L = - a d\tau$$

  Good choice: $$\L = - \frac{mc^2}{\gamma} = -mc^2 \sqrt{1 - \frac{v^2}{c^2}}$$ [2, p96]. The constant choice is made so that the Lagrangian is correct in the low-velocity limit [4, p53]

  For small speeds: $$\L = -mc^2 + \frac{1}{2}m v^2$$ [2, p99]
* Momentum [2, p100]: $$P_i = \devp{\L}{\dot{X^i}} = \gamma m V^i$$
	
	Proof: [4, p53]
	\begin{align}
			P \quad =& \quad \devp{\L}{v}  = -mc^2 \devp{\gamma}{v}  \\
			=& \quad -mc^2 \devp{}{v}\left( (1 - \frac{v^2}{c^2})^{1/2} \right) = \gamma m v 
	\end{align}
* Energy [2, p104]: defined by the Hamiltonian $$H = \sum_i \dot{X^i} P^i - \L = m P^0$$, so that the energy is contained in the 4-momentum
  
  Expression [4, p53]: $$E = pv - \L = \gamma m c^2$$

## Electromagnetism
* Levi-Civita symbol [6, p18]: $$\epsilon^{ijk} = \begin{cases} 
	+1 \text{ if } i,j,k \text{ is an even permutation of } 1,2,3\\
	0 \text{ if two indices repeat}\\
	-1 \text{ else}
 \end{cases}$$ 
* Space-time vector potential: $$A^\mu = (\phi, A_1, A_2, A_3)$$ [6, p20]
* Tenseur éléctromagnétique: $$F_{\mu \nu} = \partial_\mu A_\nu - \partial_\nu A_\mu$$
  
  Symmetry: $$F_{\mu \nu} = - F_{\nu \mu}$$ [6, p19]
  
  Matrix expression [6, p19]: 

  $$F_{\mu \nu} = \begin{pmatrix}
	0 & -E_1 & -E_2 & -E_3 \\
	E_1 & 0 & B_3 & -B_2\\
	E_2 & B_3 & 0 & B_1 \\
	E_3 & B_2 & -B_1 & 0
  \end{pmatrix}$$

  Relation between $$F^{\mu \nu}$$ and $$E$$: $$F^{0i} = E^i$$ [6, p19]

  Relation between $$F^{\mu \nu}$$ and $$B$$: $$F^{i j} = \epsilon^{ikj} B_k$$  [6, p19]
* $$\partial_\mu F^{\mu \nu} = J^\nu$$ [6, p19]
* Relastivistic formulation of Maxwell equations: $$\epsilon^{\sigma \mu \nu \lambda} \partial_\mu F_{\nu \lambda} = 0$$ [6, p19]

## References
* [1] *Richard Taillet*, [Introduction à la relativité restreinte](http://podcast.grenet.fr/podcast/introduction-a-la-relativite-restreinte/)
* [2] *Leonard Susskind & Art Friedman*, Special Relativity and Classical Field Theory, The Theoretical Minimum
* [3] *Bernard Schutz*, A First Course in General Relativity, 2nd edition
* [4] *Lancaster & Blundell*, Quantum Field Theory for the Gifted Amateur
* [5] *Barton Zwiebach*, A First Course in String Theory, 2nd edition
* [6] *Rodolfo Gambini, Jorge Pullin*, A First Course in Loop Quantum Gravity