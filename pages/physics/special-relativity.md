---
layout: page
title:  "Special relativity"
permalink: "special-relativity.html"
tags: [physics]
summary: ""
---

{% include latex-commands.html %}

## Generalities
### Transformations de Lorentz
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
* Dilatation temporelle [1, Vidéo 2: 35min] 
  \begin{equation}
		\Delta t' = \gamma \Delta t
	\end{equation}
* Contraction spatiale [1, Vidéo 2: 51min30]. Mesure dans $$\mathcal{R}'$$ au même moment: $$\Delta t'=0$$

  D'après tranformation de Lorentz:
  \begin{equation}
  \Delta x' = \frac{1}{\gamma} \Delta x
  \end{equation}
	Pas de longueur unique: dépend de l'observateur
* Temp propre: $$d\tau = \frac{\sqrt{I}}{c}$$ et $$d\tau = \frac{dt}{\gamma}$$


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
* Definition: $$(x^+, x^-, x^2, x^3)$$ with $$x^+ = \frac{1}{\sqrt{2}}(x^0 + x^1)$$ and $$x^- = \frac{1}{\sqrt{2}}(x^0 - x^1)$$ [3, p22]
* Expression of the interval: $$-ds^2 = -2 dx^+ dx^- + (dx^2)^2 + (dx^3)^2 = \hat{\eta}_{\mu \nu} dx^\mu dx^\nu$$ [3, p23]
* Light-cone metric: $$\hat{\eta}_{\mu \nu} = \begin{pmatrix}
	0 & -1 & 0 & 0 \\
	-1 & 0 & 0 & 0\\
	0 & 0 & 1 & 0 \\
	0 & 0 & 0 & 1
	\end{pmatrix}$$ [3, p24]

### Quadri quantité de mouvement [1, 26min40]
* Si $$p = mv$$ avec $$v$$ quadi vecteur alors $$p$$ quadri vecteur
* Si la quantité de mouvement est conservée dans un référentiel $$\R$$, alors elle l'est $$\forall \mathcal{R}'$$
* Expressions:
	- $$p_\mu = (\frac{E}{c}, p_1, p_2, p_3), \quad p^\mu = (\frac{E}{c}, -p_1, -p_2, -p_3)$$ [4, p53]
  - $$\vec{p} = \gamma m \vec{v} = \gamma m \begin{pmatrix}
			c\\
			v_x\\
			v_y\\
			v_z
			\end{pmatrix}$$ [3, p26]

* $$p^2 = \vec{p} \cdot \vec{p} = -m^2 c^2$$ [3, p27] [1, Vidéo 5: 44min40]


### Energy and momentum
* Definition de l'énergie $$E$$: composante temporelle $$p_t$$ de la quantité de mouvement $$p_t = \gamma m c = \frac{E}{c}$$ donc $$E = \gamma m c^2$$. [1, Vidéo 5: 49min20] [3, p26]
* Limite faibles vitesses: $$E \simeq mc^2 + \frac{1}{2} mv^2 = E_0 + E_{c, \textit{classique}}$$ [1, Vidéo 5: 55min15]
* Energie de masse $$E_0 = mc^2$$ [1, Vidéo 5: 1h3min40]
* Energie cinétique relativiste: $$E = \gamma m c^2 = E_0 + (\gamma -1) mc^2 = E_0 + E_{c, \textit{rel}}$$ [1, Vidéo 5: 1h4min25]
* $$\frac{E^2}{c^2} - \vec{p} \cdot \vec{p} = m^2 c^2$$ [3, p26]



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
* Tenseur éléctromagnétique: $$F_{\mu \nu} = \partial_\mu A_\nu - \partial_\nu A_\mu$$

## References
* [1] *Richard Taillet*, [Introduction à la relativité restreinte](http://podcast.grenet.fr/podcast/introduction-a-la-relativite-restreinte/)
* [2] *Leonard Susskind & Art Friedman*, Special Relativity and Classical Field Theory, The Theoretical Minimum
* [3] *Barton Zwiebach*, A First Course in String Theory, 2nd edition
* [4] *Lancaster & Blundell*, Quantum Field Theory for the Gifted Amateur