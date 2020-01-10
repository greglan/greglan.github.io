---
layout: page
title:  "Introduction to communication systems"
permalink: "communication-systems-intro.html"
tags: [electronics]
summary: "Introduction to communication systems"
---

$$
\newcommand{\snr}{\text{SNR}}
$$

## Design of a communication system:
* QoS required: data rate, SNR/BER, delays
* Depend on the application: video, voice, real time data...
* Medium of transmission: efficiency relative to QoS
* Cost of equipments, complexity
* Availability and reliability (distance...)

## Metrics
* SNR: Signal to Noise Ratio (S/N). Measure of error in analogue systems. Defined as
  the ratio of the signal's power over the noise's power

  Capacity $$C = B \log_2(1 + SNR)$$ bit/s (with $$B$$ signal bandwidth): max
  data rate supported
* Shannon capacity theorem: determines the capacity of a channel only in the
  case of AWGN (Additive White Gaussian Noise)
* Ratio of the energy per bit $$E_b$$ (J/bit) over the noise power density
  $$N_0$$ (W/Hz)
* Useful equations:
  * $$E_b C = S$$ with S the signal's power
  * $$N_0 B = N$$ with N the noise's power
* Measure of the bandwidth efficiency: C/B
* Measure of the power efficiency: $$E_b/N_0$$

* Shannon-Hartley equation: relate the bandwidth efficiency to the SNR or power
  efficiency

  $$\frac{C}{B} = \log_2(1 + \frac{E_b}{N_0} \frac{C}{B})$$
* BER: Bit Error Rate. Measure of error in digital systems
* PER: Packet Error Rate. Useful measure when communication is performed using
  packets.

  In WIFI, an error in one bit of a single packet prompts the entire packet to
  be sent again, so PER is a good metric


## Shannon curves
* Two possible representations, but both come from the Shannon Hartley equation

![curve-1](/images/electronics/shannon-curve-1.png)

* Shannon Limit: -1.6 dB.
  Lowest value of $$E_b/N_0$$ for which error free communications can be
  achieved whatever the data rate

![curve-2](/images/electronics/shannon-curve-2.png)

## Noise
* 2 main sources of noise: internal and external
* Internal noise: thermally generated noise, shot noise
* Thermal noise: $$P_n = k_B T B = N_0 B$$ where $$k_B = 1.38 \times 10^{-23}$$
  J/K (Boltzmann's constant), $$T$$ temperature in K, $$B$$ bandwidth in Hz,
  $$N_0$$ the single sided noise power spectral density
* External noise: ignition interference,mains Hum, thunderstorms, galactic radio
  noise, interference from other spectrum users...
* White noise: noise that has the same power for every frequency
  
  Gaussian noise: probability of the noise having a given amplitude follows a
  Gaussian probability distribution
  
  Additive noise: noise independent of the signal

  Frequency domain graph

{% include centered-image.html url="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/White_noise.svg/640px-White_noise.svg.png" alt="white-gaussian-noise-wiki" %}

* To obtain the signal usually a narrow-band is used ($$B$$ Hz centered around
  a center frequency $$f_c$$).

  Noise observed after the narrow-band filter: *narrow-band noise*

  Narrowband noise model: contain an In-phase component and a Quadrature
  component. Centered around $$f_c$$

  Expression:

  $$n_c(t) = X_I(t) \cos 2 \pi f_c t + X_Q(t) \sin 2 \pi f_c t$$

  with $$X_I,X_Q$$ Gaussian Amplitude weights representing low-pass random
  processes

  Spectral density graph, time domain graph
* Figure of merit: $$\frac{(\snr)_{\text{out}}}{(\snr)_C}$$ with
  $$(\snr)_C = \frac{\text{Average power of the transmitted signal at the Rx input}}{\text{Average power of noise at the Rx input measured in message bandwidth}}$$
  the SNR of the channel

## Line codes
* Non-return-to-zero (NRZ) codes: for a given data signaling rate, i.e., bit rate, require only half the baseband bandwidth required by the 
  Manchester code (the passband bandwidth is the same). 
  
  When used to represent data in an asynchronous communication scheme, the absence of a neutral state requires other mechanisms for bit synchronization when a separate clock signal is not available.

  NRZ-level itself is not a synchronous system but rather an encoding that can be used in either a synchronous or asynchronous transmission environment, that is, with or without an explicit clock signal involved.
* Unipolar non-return-to-zero level: binary 1 maps to $$+V$$ while binary 0 maps to $$0$$.
  
  Disadvantage: power spectrum of the transmitted signal does not approach zero at zero frequency.

  Consequences:
  - transmitted DC power leads to higher power losses than other encodings 
  - presence of a DC signal component requires that the transmission line be DC-coupled
* Bipolar NRZ codes: binary 1 maps to $$+V$$ while binary 0 maps to $$-V$$
  
  Example: RS232 standard where binary 1 maps to $$[+5, +12]$$ Volts and binary 0 to $$[-12, -5]$$ Volts.


## References
* [Return-to-zero codes](https://en.wikipedia.org/wiki/Return-to-zero)
* [NRZ codes](https://en.wikipedia.org/wiki/Non-return-to-zero)