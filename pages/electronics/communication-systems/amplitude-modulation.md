---
layout: page
title:  "Amplitude Modulation"
permalink: "amplitude-modulation.html"
tags: [electronics]
summary: "Introduction to Amplitude Modulation"
---

## Introduction
* IF filter ?
* Figure of merit: $$\frac{SNR_{\text{out}}}{SNR_C}$$ with $$SNR_C$$ the SNR of
  the channel
* Input signal $$m(t)$$
* Narrowband noise model: contain an In-phase component and a Quadrature
  component. Expression:

  $$n_c(t) = X_I(t) \cos 2 \pi f_c t + X_Q(t) \sin 2 \pi f_c t$$

  with $$X_I,X_Q$$ Gaussian Amplitude weights representing low-pass random
  processes

## Double Sideband with Suppressed Carrier (DSB-SC)
* Expression of modulated signal: $$s(t) = A_c m(t) \cos 2 \pi f_c t$$
* Average power: $$S_i = \frac{A_c^2}{2}P$$ with $$P$$ average of $$m(t)$$
* Average noise power in the message bandwidth: $$N_i = N_0 B$$
* Expression of the SNR of the channel: $$SNR_C = \frac{A_C^2}{2 B N_0} P$$
* Expression of the signal at the output of the mixer:

  $$x(t) \cos 2 \pi f_c t = \frac{1}{2} A_c m(t) + \frac{1}{2} X_I(t) +
  \frac{1}{2} \left( A_c m(t) + X_I(t) \right) \cos 4 \pi f_c t +
  \frac{1}{2} X_Q(t) \sin 4 \pi f_c t$$
* Expression of the signal after the low pass filtering:
  $$\frac{1}{2} A_c m(t) + \frac{1}{2} X_I (t)$$
* Expression of $$SNR_\text{out}$$: $$SNR_\text{out} = \frac{A_c^2 P}{2B N_0}$$
* Figure of merit: $$\frac{SNR_{\text{out}}}{SNR_C} = 1$$


## Full AM
* Expression of modulated signal:
  $$s(t) = A_c (\frac{m(t)}{A_C} + 1) \cos 2 \pi f_c t$$
