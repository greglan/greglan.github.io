---
layout: page
title:  "Frequency Modulation"
permalink: "frequency-modulation.html"
tags: [electronics]
summary: "Introduction to frequency modulation"
---
$$
\newcommand{\snr}{\text{SNR}}
\newcommand{\o}{\omega}
$$

## Introduction
* Angle modulation: angle constant $$\neq$$ Amplitude modulation
  
  Expression of an angle modulated signal: $$s(t) = A \cos(\omega_c t + m(t))$$

  Two types of angle modulation: phase modulation and frequency modulation
* FM: cheap technology, efficient RF power amplifier.
* Expression of an FM modulated signal: $$s(t) = A \cos (\omega_c t + \theta(t))$$ with $$\theta(t) = \beta \sin(\omega_m t)$$ 
  which depends only on the message and $$\beta$$ the modulation index
* Maximum frequency deviation: $$\Delta f = f_\text{dev} = \beta f_m$$ with $$f_m = B$$ the maximum frequency of a message (and hence bandwidth $$B$$).
  
  Interpretation: how far is the carrier allowed to deviate
* Rate of change: $$\frac{d\theta}{dt}$$ ~ frequency of the signal (hence the term frequency modulation)
  
  Relation between the rate of change and the message signal $$m(t)$$: $$\frac{d\theta}{dt} = K_f m(t)$$

## Case of a sinusoidal message
* Expression of the message: $$m(t) = A_m \cos (\omega_m t)$$ hence $$\theta(t) = K_f \frac{A_m}{\omega_m} \cos(\omega_m t)$$

* Expression of the modulated signal: $$s(t) = A \cos(\omega_c t + \frac{K_f A_m}{\omega_m} \sin(\omega_m t)) = A \cos(\omega_c t + \beta \sin\omega_m t))$$

  Expression of the modulation index: $$\beta = \frac{K_f A_m}{\omega_m}$$
* Expression of the instantaneous frequency: 
  $$\frac{d\theta}{dt} = \omega_c + \beta \omega_m \cos(\omega_m t) \sim f_c + \beta f_m \cos(\omega_m t)$$

  Maximum frequency: $$f_{max} = f_c + \beta f_m$$

  Maximum frequency deviation: $$f_\text{dev} = \beta f_m$$

  Expression of the modulated signal using $$f_\text{dev}$$: $$s(t) = A \cos(\omega_c t + \frac{f_\text{dev}}{f_m} \sin(\omega_m t))$$
* Receiver chain components:
	- IF filter: carrier frequency with bandwidth $$B$$
	- Limiter: removes any amplitude variation
	- Discriminator: FM demodulation. Gives amplitude varying signal depending on the frequency
	- Low pass filter: bandwidth of the message

	The bandwidth $$B_\text{IF}$$ of the IF filter is small compared to the mid-band frequency. Narrowband representation of filtered white noise applies.

## Spectrum of an FM signal
* Expansion of the modulated signal: $$s(t) = A \cos(\omega_c t) \cos(\beta \sin(\o_m t)) - A \sin(\o_c t) \sin(\beta \sin(\o_m t))$$
* Notation for the Bessel Function of the first kind order $$n$$: $$J_n(\beta)$$
* Fourier transform of $$x(t) = \cos(\beta \sin(\o_m t))$$: 
  $$X(f) = J_0(\beta) + 2 \sum_{k=1}^n J_{2k} (\beta) \cos(2 k \o_m t)$$
* Fourier transform of $$y(t) = \sin(\beta \sin(\o_m t))$$: 
  $$Y(f) = 2 \sum_{k=1}^n J_{2k-1} (\beta) \cos( (2 k -1) \o_m t)$$
* Fourier transform of the modulated signal: $$J_0(\beta) \cos(\o_m t) + \sum_{k=1} J_k(\beta) ((-1)^k \cos((\o_c-k \o_m)t) + \cos((\o_c + k \o_m)t))$$
* Carson's rule: $$B_\text{RF} = 2 f_m (1 + \beta) = B(1 + \beta)$$
  
  ~ Approximative RF bandwidth depends on the modulation index $$\beta$$

## Noise in FM
* FM signal power: $$\frac{A^2}{2}$$. 
  
  Dependence: doesn't depend on $$\beta$$ because the modulation process doesn't affect the amplitude, and hence doesn't influence the power
* Signal expression: $$s(t) = A_c \cos (\omega_c t + \theta(t))$$
* Discriminator (slope detector) output: $$\frac{1}{2 \pi} \frac{d \theta}{dt}$$ Hz

  Discriminator function: converts the phase shift $$\theta(t)$$ back to the message signal
* Output voltage from the discriminator: $$ v_\text{out}(t) = K \frac{1}{2\pi} \frac{d \theta}{dt} = K \frac{\beta \omega_m}{2 \pi} \cos \omega_m t = K \Delta f \cos \omega_m t$$ with $$K$$ the sensitivity of discriminator

  Average output power: $$S_0 = \frac{K^2 \Delta f ^2}{2}$$
* Expression $$\snr_c$$: $$\snr_c = \frac{A^2}{2 B N_0}$$

## Comparison with AM



## References
* [Analysis of FM signals](https://www.johndcook.com/blog/2016/02/17/analyzing-an-fm-signal/)
* [Energy in FM signals](https://www.johndcook.com/blog/2016/02/25/energy-in-frequency-modulated-signals/)