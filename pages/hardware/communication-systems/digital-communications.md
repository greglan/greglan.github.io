---
layout: page
title:  "Digital Communications"
permalink: "digital-communications.html"
tags: [hardware]
summary: ""
---
{% include latex-commands.html %}

$$
\newcommand{\snr}{\text{SNR}}
\DeclareMathOperator\erf{erf}
\DeclareMathOperator\erfc{erfc}
$$

## Introduction
* Broadcasting characteristics:
	- Unidirectional
	- Single transmitter and several inexpensive receivers
	- No retransmission
	- Need low BER
	- Same modulation scheme
* Point to point characteristics:
	- Bidirectional: uplink and downlink
	- Modulation scheme can be adpated

## Baseband communication
* Model: binary 1 -> hold $$+V$$ for time $$T$$, binary 0 -> hold $$-V$$ for time $$T$$
	
	Decision threshold: zero. Everything above is a 1, everything below is a zero
* Usually modulated by a carrier signal later on
* Polar non return to zero signalling
* Rectangular pulse so no bandwidth limitation
* Chances of right decision by the receiver improved by averagin

### Integrate and dump filters
* Passing the signal through an integrator improves the SNR
* Output noise voltage assuming constant signal $$s(t) = V$$ and AWGN: $$\frac{1}{\tau} \int_0^T (s(t) + n(t))dt = \frac{VT}{\tau} + \frac{1}{\tau} \int_0^T n(t)dt = s_0(T) + n_0(T)$$
	
	Equivalent to a Gaussian random variable, the variance of which is equal to the average noise power $$\sigma^2 = \frac{N_0 T}{2\tau^2}$$ (recall that $$N_0/2$$ is the two-sided power density of AWGN)
* Expression of the SNR : $$\frac{s_0(T)^2}{n_0(T)^2} = \frac{V^2 T^2 / \tau^2}{N_0 T / 2 \tau^2} = \frac{2 V^2 T}{N_0} = \frac{2 E_s}{N_0}$$ with $$E_s=V^2 T$$ the symbol energy
* Integrate and dump filter. Reset switch activation. Diagram.
* SNR increases when increasing the symbol duration $$T$$ and the level $$V$$. 
	
	Proportional to the symbol energy $$E_s$$
* Sampled signal level increases linearly with $$T$$
  
  Sampled noise level increases as $$\sqrt{T}$$

  Signal processing advantage of filter is $$\sqrt{T}$$

### Decision error probability for an integrate and dump filter
* Probability density of noise: 
	
	$$f(n_0(T)) = \frac{e^{-n_0^2(T)/2\sigma^2}}{\sqrt{2 \pi \sigma^2}}$$

	with $$\sigma^2$$ the variance after the dump and integrate filter
* Error function: $$\erf(x) = \frac{2}{\sqrt{\pi}} \int_0^x e^{-t^2} dt$$
	
	Complementary error function: $$\erfc(x) = \frac{2}{\sqrt{\pi}} \int_x^{+ \infty} e^{-t^2} dt = 1 - \erf(x)$$
* Condition of error for negative received symbol ($$-V$$): noise sample $$n_0(T) > s_0(T) = \frac{VT}{\tau}$$
	
	Expression of the error probability: 

	$$\begin{align}
	P_e =& 
	\int_{VT/\tau}^{+ \infty} f(n_0(T))dn_0(T) = \frac{1}{\sqrt{\pi}} \int_{V\sqrt{T/N_0}}^{+ \infty} e^{-x^2}dx\\ 
	=& \frac{1}{2} \erfc \left( V \sqrt{\frac{T}{N_0}} \right) = \frac{1}{2} \erfc \left(\sqrt{\frac{V^2 T}{N_0}}\right) \\
	=& \frac{1}{2} \erfc \left(\sqrt{\frac{E_s}{N_0}}\right)\end{align}$$

	using $$x = \frac{n_0(T)}{\sqrt{2}\sigma}$$ and the fact that $$\sigma^2 = \frac{N_0 T}{2\tau^2}$$

	If $$+V$$ is transmitted, by symmetry $$P_e$$ is identical.
* $$P_e$$ rapidly decreases as $$E_s/N_0$$ increases
	
	Maximum probability of error: $$P_e = 1/2$$. Interpretation: even if the signal is entirely lost in the noise, so that any determination by the receiver is a sheer guess, the receiver cannot be wrong more than half the time on average
	
	Average probability of symbols depends only in $$E_s/N_0$$

### Optimum filter
* Optimum filter definition: filter that maximises the SNR (e.g minimises the effect of noise)
* For unfiltered rectangular data pulses in white noise, the integrate and dump filter is the *optimum detector*.
  
  Also called *matched detector*
	
	For coherent reception, also called *correlation receiver*
* In the case of filtered data transmission, detection filter must be matched to the pulse shaping employed
  
  If $$s(t)$$ is the signal then $$h_\text{opt} = s(T-t)$$
* Convolution in the time-domain corresponds to mutiplication in the frequency (Fourier) domain
  
  Fourier transform of the matched filter: $$H_\text{opt}(f) = S^* (f) e^{-2j \pi f T}$$
  
  Expression of the Fourier transform of the signal after the filter $$S_0(f) = S(f) H_\text{opt}(f) = \vert S(f) \vert^2 e^{-2j \pi f T}$$
  
  Expression of the signal after the filter $$s_0(t) = \int_{\inftym}^{\inftyp} S_0(f) e^{2 j \pi f T} df = \int_{\inftym}^{\inftyp} \vert S(f) \vert^2 df = \int_{\inftym}^{\inftyp} \vert s(t) \vert^2 dt = E_s$$

* Output power: $$E_s^2$$
  
  Noise power: $$\E(n^2(t)) = \frac{N_0}{2} \int_{\inftym}^{\inftyp} \vert H_\text{opt}(f) \vert^2 df = \frac{N_0}{2} \int_{\inftym}^{\inftyp} \vert S(f) \vert^2 df = \frac{N_0}{2} E_s$$

* Expression of the SNR: $$\snr = \frac{2 E_s^2}{N_0 E_s} = \frac{2 E_s}{N_0}$$
  
  Remarks:
  - independent of the waveform
  - same value as the integrate and dump filter for square pulses
* Other technique to implement an optimum filter: correlator receiver $$s_0(t) = \int_0^T r(u)s(u) du$$ with $$r(t) = s(t) + n(t)$$ the received signal
  
  Indeed if output sampled at $$T=t$$: $$s_0(t) = r(t) * h_\text{opt} = \int_0^T r(u) h_\text{opt}(T-u) du = \int_0^T r(u) s(T-(T-u)) du = \int_0^T r(u) s(u) du $$

  Power analysis: $$P(s_0(t)) = P\left( \int_0^T r(u)s(u) du \right) = P\left( \int_0^T s(u) s(u) du \right) + P\left( \int_0^T n(u) s(u) du \right) = E_s^2 + \frac{N_0}{2} E_s$$

  Resulting SNR: $$\snr = \frac{2 E_s}{N_0}$$


## Phase Shift Keying
