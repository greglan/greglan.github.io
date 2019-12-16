---
layout: page
title:  "Photodetectors"
permalink: "photodetectors.html"
tags: [physics, hardware]
summary: ""
toc: false
---

* Principle:
  - when light wavelength shorter that $$\lambda_\text{th} = \frac{hc}{E_g} = \frac{1.24}{E_g}$$
  - each photon absorbed implies an electron/hole pair excited across the bandgap in the depletion region
  - from there they diffuse to become minority carriers and induce a photocurrent
  - photodetectors can operate at both zero bias and reverse bias
* Diagram 
* IV curve of a photodiode
* Photogeneration of electrons when optical signal excites electron from the valence band to the conduction band
* Reverse biased field accross the absorbing region, the electrons removed at high speed
* Signal current dependence on the incident power: $$\frac{I_\text{ph}}{e} = \eta \times \frac{P}{hc/\lambda}$$

  Interpretation: Number of electrons / s = Quantum efficiency $$\times$$ number of photons / s

  Alternative formulation: $$I_\text{ph} = gP$$ with $$g = \frac{e \eta \lambda}{hc}$$ the responsivity in Amps/Watts
* Materials for photodetectors: diagram
  
  $$\alpha$$ (absorption coefficient) decreases when $$\lambda$$ increases: not enough energy to pass the bandgap
  
  Indirect bandgap: rise slower due to need for accompanying phonons
* Quantum efficiency of a photodiode: $$\eta = (1-R) e^{- \alpha_1 L_1}(1 - e^{-\alpha_2 L_2})$$ with $$\alpha_1$$ absorption coefficient in the P section and $$\alpha_2$$ the absorption coefficient in the depletion region
  
  Maximization of the effiency: use a double heterostructure
  - minimise $$L_1$$
  - maximise $$L_2$$ i.e need $$L_2 \gg \frac{1}{\alpha_2}$$
  - minimise $$R$$ (anti reflection coating)


## References
* [1] *Dr Edmund Harbord*, Optoelectronics Lecture 10