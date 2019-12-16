---
layout: page
title:  "Lasers"
permalink: "lasers.html"
tags: [physics, hardware]
summary: ""
---

{% include latex-commands.html %}

## Introduction
* First laser invented approximately in 1959
* LASER: Light Amplification by Stimulated Emission of Radiation

## Theory
* Assume population density $$n_1$$ in energy state $$E_1$$ and population density $$n_2$$ in energy state $$E_2 > E_1$$
* Rate for absorption ($$E_1 \to E_2$$ with one photon in): $$R_\text{abs} = B n_1 P$$ with $$P$$ photon density and $$B$$ Einstein coefficient
  
  Rate for spontaneous emission ($$E_2 \to E_1$$ with one photon out): $$R_\text{spon} = A n_2$$ with $$A$$ Einstein coefficient
  
  Rate for stimulated emmission (1 photon in, two photon out with $$E_2 \to E_1$$): $$R_\text{stim} = B n_2 P$$ with $$P$$ photon density and $$B$$ Einstein coefficient
* Carrier rate equation:
  
  $$\devd{n}{t} = -\frac{n}{\tau_s} + \frac{I}{eV} - g(n-n_0)P$$

  with:
  - $$\frac{n}{\tau_s}$$: spontaneous emission with $$\tau_s$$ the spontaneous emission lifetime
  - $$\frac{I}{eV}$$: current injection with $$V$$ the volume of the active region ($$\text{cm}^{-3}$$)
  - $$g(n-n_0)P$$: stimulated emission with $$g$$ the gain per unit time ($$\text{s}^{-1}$$), $$n_0$$ the material transparency carrier density (carrier density when net gain equals net losses) $$P$$ the photon density ($$\text{cm}^{-3}$$)
  
  Photon rate equation: 

  $$\devd{P}{t} = g(n-n_0)P + \beta \frac{n}{\tau_s} - \frac{P}{\tau_p}$$

  with:
  - $$g(n-n_0)P$$: stimulated emission
  - $$\beta \frac{n}{\tau_s}$$: spontaneous emission with $$\beta$$ the spontaneous emission coupling coefficient (amount of spontaneous emission that couples to the lasing mode since light is emitted in all directions)
  - $$\frac{P}{\tau_p}$$: laser emission with $$\tau_p$$ the photon lifetime
  
### Gain
* Gain in semiconductors
* Gain spectrum in semiconductors
* Gain as a function of carrier density
  $$n_0$$: point at which population inversion is achieved and absorption/emission are equally probable
  Temperature decreases the threshold
* Gain/Loss per unit length: $$G$$ with units of $$\text{cm}^{-1}$$
  
  $$P(x+dx) = P(x) + dP$$ and $$dP = G dx$$, hence $$\devd{P}{x} = GP$$ which brings $$P(x) = P_0 e^{Gx}$$

  - If $$G=0$$: transparency (no gain)
  - If $$G > 0$$: $$P>P_0$$ so gain
  - If $$G < 0$$: $$P<P_0$$ so loss
* Roundtrip condition for feedback: let $$G$$ be the gain per unit length, $$\alpha$$ the loss per unit length and $$R = \left( \frac{n_1-n_2}{n_1+n_2}\right)^2$$ reflection coefficient
  
  ![roundtrip-condition](/images/physics/laser-roundtrip-condition.png)
  
  Total roundtrip: $$P_1 R_1 e^{(G-\alpha)L} R_2 e^{(G-\alpha)L}$$

  Total round trip loss: $$R_1 R_2 e^{2\alpha L}$$

  Total round trip gain: $$e^{2GL}$$

  Gain condition: $$P = P_1 \Rightarrow R_1 R_2 e^{2(G-\alpha)L} > 1$$ hence $$G > \alpha + \frac{1}{2L} \ln\left( \frac{1}{R_1 R_2} \right)$$
* Phase condition and cavity modes: $$n L = m \frac{\lambda}{2}$$ hence
  
  $$\Delta \nu_m = \frac{c}{\lambda_m} - \frac{c}{\lambda_{m+1}} = \frac{c}{2 n L}$$

  $$\Delta \lambda = \frac{\lambda^2}{2 n L}$$

  The longer the cavity, the closer the modes. Hence shorter cavity have less modes than longer ones
* Fabry-Perot laser

* Output light-current characteritics of a laser
* Spectral characteristcs

## Implementations
* 2 potential geometries: edge-emitting lasers and vertically emitting lasers


## References
* [1] *Dr Edmund Harbord*, Optoelectronics Lecture 