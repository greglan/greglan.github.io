---
layout: page
title:  "Semiconductors"
permalink: "semiconductors.html"
tags: [physics]
summary: ""
---

## Band theory of solids
* Metals: partially filled upper band allows electrons to flow
* Insulators: completely filled upper band has no room for electrons to move
* *Hole*: gap left in the valence band by an electron. Move in opposite direction under electric field

## PN junction
* Methods to change the number of carriers in a semiconductor:
  - increase the temperature
  - semiconductor doping: change one in $$10^6$$ atoms with an excess electron (n doping) or hole (p doping)
* Si can p-dope with boron B and n-dope with phosphorus P. See this [periodic table](https://eenews.cdnartwhere.eu/sites/default/files/styles/inner_article/public/images/01-picture-libraryde/PeterClarke/Research/periodictable600.jpg?itok=aunyL2OT)
* Forward bias: reduces the depletion region, once large enough to overcome the difference the current flows
  
  Reverse bias: increases the size of the depletion region, so no current flows

![pn-junction](/images/physics/pn-junction.png)

![iv-curve-wikipedia](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Diode-IV-Curve.svg/320px-Diode-IV-Curve.svg.png)

* Expression of current in a PN junction: $$I = I_s\left(e^{\frac{eV}{nk_b T}} - 1 \right)$$ with:
  - $$I_s$$ the saturation current
  - $$n$$ an ideality factor. Usually $$\sim 1$$ in forward bias and up to 2 in reverse bias
  - $$k_B = 8.62 \times 10^{-5} \, \text{eV}\cdot \text{K}^{-1}$$ the Boltzmann constant
* Light generation: use forward bias, which injects electrons and holes in the depletion region so that then recombine and emit light
  
  The energy of the photon is the energy of the bandgap. hence bandgap determines the emission properties
* Light detection: use reverse bias so that the photons are absorbed in the depletion region to produce electrons and holes.
  
  Electrons and holes travel in opposite directions which form a current. 

  Current magnitude dependence: depends on the number of photons absorbed 
* *Direct bandgap semiconductors*: conduction band (electrons) minimum is directly above the valence band (holes) minimum
  
  Photons carry a lot of energy but little momentum: electrons and holes can easily recombine to produce light providing the gap is directly above. So direct bandgap semiconductors are good light emitters
  
  Examples: GaAs, InAs

  ![direct-bandgap](https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Direct.svg/300px-Direct.svg.png)

* *Indirect bandgap semiconductors*: conduction band minimum is displaced in momentum the valence band minimum
  
  Examples: Si, Ge, AlAs. Bandgap of Si: $$1 \mu$$m

  ![indirect-bandgap](https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Indirect_Bandgap.svg/300px-Indirect_Bandgap.svg.png)

## Compound semiconductors
* Used to tune the emission wavelength.
* Create *ternary* (or even *quaternary*) compounds by varying concentration of each element
* $$\text{Ga}_x\text{In}_{x-1}\text{As}$$ compound bandgap interpolation: $$E_g = 0.36 + 0.63 x + 0.43 x^2$$ eV
  
  *Bowing parameter:* $$x^2$$ term. Correction to the linear interpolation
* $$\text{Al}_x\text{Ga}_{1-x}\text{As}$$ bandgap interpolation: $$\begin{cases}E_g = 1.424 + 1.247x \text{ eV when } x < 0.45\\ E_g = 1.9 + 1.125x + 0.143x^2 \text{ eV when } x > 0.45\end{cases}$$
  

  Can work as both a direct band semiconductor ($$x<0.45$$) and an indirect semiconductors ($$x>0.45$$) depending on the concentration. 

  Intuitive explanation: InAs and GaAs are direct band semiconductors but AlAs is an indirect band semiconductor


## References
* [1] *Dr Edmund Harbord*, Optoelectronics Lecture 2
* [2] [Wikipedia article about direct/indirect bandgaps](https://en.wikipedia.org/wiki/Direct_and_indirect_band_gaps)