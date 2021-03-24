---
layout: page
title:  "Optic Fibers"
permalink: "optic-fibers.html"
tags: [hardware]
summary: "An introduction to Optic Fibers"
---

* Order of magnitude of troughput in optic fibers [2, s10]
* Advantages of optic fibers [2, s11]
* propagation speed in optic fibers [2, s11]


## Types of fibres and usage
* The smaller the core diameter, the harder it is to design the appropriate
  connectors.
* In multimode fibers, some modes propagate by bouncing around the in the core,
  and hence travel a longer path which leads to dispersion
* Single mode fibres (SMF) [1-4, p3]:
  - no intermodal dispersion
  - used in long haul aplications
  - difficult/expensive alignment because of the very small core diameter
* Step index multimode fibers (MMF) [1-4, p3]:
  - intermodal dispersion
  - short haul only (typically buildings)
  - easy/cheap alignment
* Graded index multimode fibers [1-4, p3]: reduced intermodal dispersion


## Modes in optical fibers
* Two integers $$l$$ (angular variation) and $$m$$ (radial variation) to
  describe the modes (cylindric cordinates)
* Two kinds of modes:
  - $$EH_{lm}$$ with a dominant $$E$$ field in the transverse plane
  - $$HE_{lm}$$ with a dominant transverse $$H$$ field
* Fibres are weakly guiding ($$n_\text{core} - n_\text{cladding} \ll 1$$) so
  that modes can be approximated by LP (Linearly Polarised) modes
* Interpretation of $$l$$ and $$m$$ in LP modes
* Normalised frequency $$V$$

  Condition to cut off the first higher order mode: $$V < 2.405$$


## References
* [1-$$i$$] *Dr. Cryan*, Optoelectronics Lecture $$i$$
* [2] *Kevin Heggarty*, ELP201 - Cours 1 et 2
* [3-$$i$$] *Dr Edmund Harbord*, Optoelectronics Lecture $$i$$
