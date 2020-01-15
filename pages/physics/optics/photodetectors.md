---
layout: page
title:  "Photodetectors"
permalink: "photodetectors.html"
tags: [physics, hardware]
summary: ""
toc: false
---
{% include latex-commands.html %}

## Generalities

* Principle:
  - when light wavelength shorter that $$\lambda_\text{th} = \frac{hc}{E_g} = \frac{1.24 \text{ eV} \cdot \mu \text{m}}{E_g}$$
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
  
  Maximization of the efficiency: use a double heterostructure
  - minimise $$L_1$$
  - maximise $$L_2$$ i.e need $$L_2 \gg \frac{1}{\alpha_2}$$
  - minimise $$R$$ (anti reflection coating)
* Design structures:
  - top illuminated structure: high area decreases the capacitance which limite the speed of operation. Very good efficiency
  - back illuminated InGaAs homojunction diode. Responsivity of back illuminated diode [1 p12]

## Noise
* Performance limited by the SNR. Performance quantified in terms of SNR or receiver sensitivity for a given error performance.
* Noise sources in optical communications systems:
  - laser source noise: often termed *relative intensity noise* (RIN) which is the result of spontaneous emission coupling into the lasing mode
  - receiver noise: shot noise at the photodiode and thermal noise at the following amplifier
* Typical BER for optical communication systems: must be $$< 10^{-9}$$
* Shot noise model: equivalent to Poisson distributed electron noise mean square noise current is proportional to photocurrent $$I$$ and bandwidth $$B$$: $$\average{i_s^2} = 2eIB$$. 
  
  Poisson distribution: $$\P(N \vert S) = e^{-\average{S}} \frac{\average{S}^N}{N!}$$ with $$\average{S} = \frac{\eta E \lambda}{hc}$$ the average number of photons
* Example: non-return to zero binary amplitude modulation format, binary one signified by $$S$$ photons during the modulation period and binary zero signified by no photons
* Probability of an error: $$P_E = \frac{1}{2} ( P(0 \vert S) + P(1 \vert 0))$$
  
* First term: photogeneration of zero carriers for $$\average{S}$$ input photons
  
  Second term: photogeneration of a carrier for zero input.
* Noiseless example: $$P_E = \frac{1}{2} e^{-S} \frac{S^0}{0!} + 0 = \frac{1}{2} e^{-S}$$
* For $$\text{BER} = 10^{-9}$$, need $$S>20$$ photons even without the presence of noise.
  
  Quantum limit: sensitivity limit

## References
* [1] *Dr Edmund Harbord*, Optoelectronics Lecture 10
* [3] [Example datasheet](https://www.vishay.com/docs/81503/bpv10nf.pdf)