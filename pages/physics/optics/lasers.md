---
layout: page
title:  "Lasers"
permalink: "lasers.html"
tags: [physics, hardware]
summary: ""
---

{% include latex-commands.html %}

## Introduction
* LASER: Light Amplification by Stimulated Emission of Radiation
* First laser invented approximately in 1959
* Applications [4]: telecommunications, metrology/sensing, laser printers, laser wielding/cutting, laser writing/reading on disks, surgery/ophthalmology/dermatology
* Spectral characteristics [4]: high spectral density, low wavelength spread. Comparison with commmon wavelength spread:
  - [black body](https://commons.wikimedia.org/wiki/File:Black_body.svg#/media/File:Black_body.svg): $$\Delta \lambda = 10 000$$ nm
  - [white LED](https://www.digikey.com/en/articles/techzone/2013/apr/~/media/Images/Article%20Library/TechZone%20Articles/2013/April/Defining%20the%20Color%20Characteristics%20of%20White%20LEDs/article-2013april-defining-the-color-char-fig3.jpg): $$\Delta \lambda = 300$$ nm
  - [colored LED](https://commons.wikimedia.org/wiki/File:RGB_LED_Spectrum.svg#/media/File:RGB_LED_Spectrum.svg): $$\Delta \lambda = 50$$ nm
  - [Fabry-Pérot LASER](https://www.apex-t.com/wp-content/uploads/2013/06/fabry-perot-laser-measurement.jpg): $$\Delta \lambda = 1-10$$ nm
  - [DFB LASER](https://www.eblanaphotonics.com/images/speciality-lasers/new_opt_sensing_lasers/1654nm-dfb-dm-laser-spectrum.png): $$\Delta \lambda = 10^{-5}-10^{-7}$$ nm
* Laser technologies[4]:
  - gas based: argon, He-Ne, CO2
  - liquid based (colorants)
  - solid based: ruby, [YAG](https://en.wikipedia.org/wiki/Nd:YAG_laser), semiconductors
* Principle [4]: ampliying medium + resonant cavity

{% include centered-image.html alt="laser" file="physics/laser.png" %}


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
* Expression of carrier density of the laser at threshold when neglecting the spontaneous coupling:
  $$\devd{P}{t} = 0 = g(n-n_0)P - \frac{P}{\tau_p} \Rightarrow n = n_0 + \frac{1}{g \tau_p}$$ providing $$P>0$$ (lasing). However, all terms are constants. Hence carrier threshold density $$n_\text{th} = n_0 + \frac{1}{g \tau_p}, \quad \forall P>0$$
* Expression of the output power with current in the steady state: $$\devd{n}{t} = 0 = -\frac{n}{\tau_s} + \frac{I}{eV} - g(n-n_0)P$$ hence with $$n = n_\text{th}$$ (lasing $$\forall P>0$$) we have: $$P = \left(\frac{I}{eV} - \frac{n_\text{th}}{\tau_s} \right) \frac{1}{g(n_\text{th}-n_0)} = \frac{I - I_\text{th}}{eVg(n_\text{th}-n_0)} = \frac{\Delta P}{\Delta I} (I - I_\text{th})$$ with $$I_\text{th} = \frac{e V n_\text{th}}{\tau_s}$$ and $$\frac{\Delta P}{\Delta I}$$ the *slope efficiency* [3]
  
  Expression below threshold: $$P=0$$ hence $$n_{n < n_\text{th}} = \frac{I \tau_s}{eV}$$
* Turn-on delay [3]:
  - expression of the filling rate below the lasing threshold: $$\devd{n}{t} = \frac{I}{eV} - \frac{n}{\tau_s}  = \frac{1}{\tau_s}(n_\text{final}-n)$$ with $$n_\text{final} = \frac{I\tau_s}{eV}$$
  - expression of the density: $$n(t) = n_\text{final}(1 - e^{-t/\tau_s})$$
  - expression of time in terms of density: $$t(n) = - \tau_s \ln \left( \frac{n_\text{final}-n}{n_\text{final}} \right)$$
  - turn-on time $$t_d$$: time to reach the threshold carrier density $$n_\text{th}$$

    $$t_d = t(n_\text{th}) -t(n_\text{bias}) = \tau_s \ln \left( \frac{n_\text{final}-n_\text{bias}}{n_\text{final} - n_\text{th}} \right) = \tau_s \ln \left( \frac{I-I_\text{bias}}{I - I_\text{th}} \right)$$
* Unbiased laser [3]: $$I_\text{bias}$$
* Temperature dependence: $$I(T) = I_0 e^{-T/T_0}$$. Usually $$I_0$$ not known: use another known value of $$I(T)$$ to replace $$I_0$$
  
### Gain
* Gain in semiconductors [1p6]
* Gain spectrum in semiconductors [1p7]
* Gain as a function of carrier density
  $$n_0$$ [1p8]: point at which population inversion is achieved and absorption/emission are equally probable
  Temperature decreases the threshold
* Gain/Loss per unit length [1p9]: $$G$$ with units of $$\text{cm}^{-1}$$
  
  $$P(x+dx) = P(x) + dP$$ and $$dP = G dx$$, hence $$\devd{P}{x} = GP$$ which brings $$P(x) = P_0 e^{Gx}$$

  - If $$G=0$$: transparency (no gain)
  - If $$G > 0$$: $$P>P_0$$ so gain
  - If $$G < 0$$: $$P<P_0$$ so loss

* Roundtrip condition for feedback: let $$G$$ be the gain per unit length, $$\alpha$$ the loss per unit length and $$R = \left( \frac{n_1-n_2}{n_1+n_2}\right)^2$$ reflection coefficient
    
  Total roundtrip: $$P_1 R_1 e^{(G-\alpha)L} R_2 e^{(G-\alpha)L}$$

  Total round trip loss: $$R_1 R_2 e^{2\alpha L}$$

  Total round trip gain: $$e^{2GL}$$

  Gain condition: $$P = P_1 \Rightarrow R_1 R_2 e^{2(G-\alpha)L} > 1$$ hence $$G > \alpha + \frac{1}{2L} \ln\left( \frac{1}{R_1 R_2} \right)$$

{% include centered-image.html alt="roundtrip-condition" file="physics/laser-roundtrip-condition.png" %}

* Phase condition and cavity modes: $$n L = m \frac{\lambda}{2}$$ with $$n$$ refractive index (constant for a given mode) hence
  
  $$\Delta \nu_m = \frac{c}{\lambda_m} - \frac{c}{\lambda_{m+1}} = \frac{c}{2 n L}$$

  $$\Delta \lambda = \frac{\lambda^2}{2 n L}$$

  The longer the cavity, the closer the modes. Hence shorter cavity have less modes than longer ones
* Fabry-Perot laser [1p13]: simplest feedback mechanism using 2 cleaved facets. Typical GaAs/AlGaAs. Gain guided laser spectrum. Individual mode widths: ~ few GHz
  
  Graph

* Output light-current characteritics of a laser [1p14]:
  - lasing occurs at threshold when the gain equal the losses and stimulated emmision becomes more likely than spontaneous absorption.
  - light output rises quickly: inefficient spontaneous emission, some stimulated emission, efficient stimulated emission (lasing)
  - In the region above the threshold current, one photon is generated though the recombnation of one hole and electron
* Spectral characteristcs

## Implementations
* 2 potential geometries: edge-emitting lasers and vertically emitting lasers
* Relaxation oscillations (optical "ringing") [3]. Usually undesirable phenomena. Exception: to get an ultra fast pulse
* Quantum wells, wires and dots [3]: 
  - purpose: improve $$T_0$$ and lower the threshold. Can also be used to build single photon emitters
  - confinement on the nanometer sclaes leads to formation of quantized energy states, which reduces the effect of thermal spread over the states, increasing $$T_0$$

  Quantum well: 2 dimensions

  Quantum wire: 1 dimension

  Quantum dot: 0 dimensions. Also called *artificial atoms*

## References
* [1] *Dr Edmund Harbord*, Optoelectronics Lecture 6
* [2] *Dr Edmund Harbord*, Optoelectronics Lecture 7
* [3] *Dr Edmund Harbord*, Optoelectronics Lecture 8
* [4] *Laurent Dupont*, ELP201