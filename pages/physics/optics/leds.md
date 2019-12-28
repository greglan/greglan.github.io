---
layout: page
title:  "LEDs"
permalink: "leds.html"
tags: [physics]
summary: ""
---
{% include latex-commands.html %}
$$
\newcommand{\taur}{\tau_\text{r}}
\newcommand{\taunr}{\tau_\text{nr}}
$$

## Generalities
### Mode of operation
* Forward biased PN junction
* Electrons and holes flow into the depletion region and recombine to emit photons
* Direct bandgap semicondutctors allow rapid recombination with efficient optical emission

### Spectrum characteristics
* Emission wavelength given by $$E_g$$
* Peak emission wavelength sloghtly below $$E_g + k_BT$$
* Emission bandwidth: a few $$k_BT$$.
* Emission width: $$\Delta E_\text{ph} \sim 1.5-3.5 k_BT$$. Usually $$2.4 k_BT$$
* Wavelength spread: $$\Delta \lambda = \frac{-hc}{E^2_\text{photon}} \Delta E_\text{photon}$$ since $$\lambda = \frac{hc}{E_\text{photon}}$$
* Wavelength spread at 0.85 $$\mu$$m assuming a $$2.4 \, k_BT$$ energy spread: $$\Delta \lambda \sim 36$$ nm
  
  Wavelength spread at 1.55 $$\mu$$m (C band) assuming a $$2.4 \, k_BT$$ energy spread: $$\Delta \lambda \sim 120$$ nm

### Internal quantum efficiency
* Types of recombination processes: radiative and non-radiative
* Radiative processes: electrons and holes recombining with the emission of a photon (radiative recombination)
  - direct recombination
  - excitonic recombination
  - donor-acceptor recombination

  Lifetime of radiative processes: $$\taur$$

  Rate of radiative recombination: $$1/\taur$$
* Non-radiative processes: electrons and holes recombining without the emission of a photon
  - recombination via donor level
  - Auger recombination: one lectron and one hole recombine but the energy is not emitted but used to raise the energy level of another electron higher in the conduction band

  Lifetime of non-radiative processes: $$\taunr$$

  Rate of non-radiative recombination: $$1/\taunr$$
* Non radiative origins: non-radiative *centres form from* 
  - impurity atoms
  - grain boundaries
  - other defects

  Relation to the number concentration of traps $$N_\text{tr}$$: usually $$\taunr \propto \frac{1}{N_\text{tr}}$$

  Estimation when majority of traps are mid-gap: $$\taunr \simeq \frac{10^{14}}{N_\text{tr}}$$. For trap concentration of $$10^{21}$$ $$\text{m}^{-3}$$, $$\taunr \simeq 100 \, ns$$


* Diagram
* Total recombination rate: $$1/\tau_p = \frac{1}{\taur} + \frac{1}{\taunr}$$
  
  Total recombination lifetime: $$\tau_p$$
* Internal quantum efficiency (IQE): percentage of electrons entering the device that give rise to photons
  
  Expression: $$\text{IQE} = \eta_\text{int} = \frac{1/\taur}{1/\tau_p} = \frac{\tau_p}{\taur}$$

### Frequency response
* Modulation bandwidth: how fast we can swtich the LED on and off
* Cannot modulate the LED faster than the recombination lifetime $$\tau_p$$
* Optical ouput power: $$P(\omega) = \frac{P(0)}{\sqrt{1 + (\omega \tau_p)^2}}$$ 
  with $$P(0)$$ the optical power under DC current
* 3dB roll-off frequency: $$f_m = \frac{1}{2 \pi \tau_p}$$
* Increasing modulation speed: reduce $$\tau_p$$ by reducing $$\taunr$$ because $$\taur$$ is fixed by quantum mechanics.
  
  Problem: diminishes the IQE $$\eta_\text{int}$$ as well

### Efficiency tweaks
### External efficiency
* Losses mechanisms:
  - absorption
  - total internal reflection
  - Fresnel losses
* Absorption losses: proportional to $$e^{- \alpha L}$$, 
  with $$\alpha$$ the absorption per meter of the material between the emission region and the surface, 
  and $$L$$ the depth of the emitter below the surface
* Total internal reflection losses: 
  associated with light hitting the interface at angles greater than the critical angle
* Fresnel losses: losses on reflection at the interface between the surface and the outside world

## Implementation
### Double heterostructure

![pn-junction-vs-double-heterostructure](/images/physics/pn-junction-double-heterostructure.png)

* Main advantages for LEDs:
  - high injection efficiency
  - minority carriers confined strongly to the active layer, high concentration means faster recombination
  - transparency of confining layers
* Other advantages:
  - device manufacture: etch stop layer, ohmic contacts
  - optical guidance as active layer refractive index is higher (see lasers)

### Coupling with optical fibers
### Liquid phase epitaxy
* *Epitaxy*: to grow something layer-by-layer
* Advantages:
  - high growth rates
  - no poisonous precursors
  - wide selection of dopants
  - flow process rather than batch process
* Disadvantages:
  - less control over thickness, alloy compositions and doping than other methods
  - reproducibility worse than other methods

### Metal-organic chemical vapour deposition (MOCVD)
* Advantages:
 - Faster growth possible than e.g.
MBE
 - Flow process rather than batch
process
* Disadvantages:
  - Phosphene and other precursors are nerve gases
  - More difficult to monitor what is going on (pressure too high for electron gun to measure thickness)
  - Harder to get sharp transitions between different regions

### Molecular Beam Epitaxy
* Advantages:
  - Low growth rate ($$<1 \mu$$m/hr) leads to very fine control over layer thickness
  - Low substrate temperatures so little intermixing
  - Ultra-clean surfaces
* Disadvantages:
  - Very expensive
  - Batch process rather than flow process
  - Complicated system prone to errors
  - Requires ultra-high vacuum conditions

  ## References
* [1] *Dr Edmund Harbord*, Optoelectronics Lecture 
* [Example datasheet](https://docs-emea.rs-online.com/webdocs/0e1b/0900766b80e1b0e4.pdf)