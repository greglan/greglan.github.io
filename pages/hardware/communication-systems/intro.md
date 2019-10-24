---
layout: page
title:  "Introduction to communication systems"
permalink: "communication-systems-intro.html"
tags: [electronics]
summary: "Introduction to communication systems"
---

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
* Gaussian noise: probability of the noise having a given amplitude follows a
  Gaussian probability distribution
* To obtain the signal usually a narrow-band is used ($$B$$ Hz centered around
  a center frequency $$f_c$$).

  Noise observed after the narrow-band filter: narrow-band noise
