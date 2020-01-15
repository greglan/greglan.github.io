---
layout: page
title:  "Amplitude Modulation"
permalink: "amplitude-modulation.html"
tags: [electronics]
summary: "Introduction to amplitude modulation"
---
$$
\newcommand{\snr}{\text{SNR}}
$$

* IF filter: intermediate frequency filter
* In what follows, assume an input signal $$m(t)$$ of bandwidth $$B$$

## Double Sideband with Suppressed Carrier (DSB-SC)
* Expression of modulated signal: $$s(t) = A_c m(t) \cos 2 \pi f_c t$$
* Average input power: $$S_i = \frac{A_c^2}{2}P$$ with $$P$$ average of $$m(t)$$
* Average noise power in the message bandwidth: $$N_i = N_0 B$$
* Expression of the SNR of the channel: $$(\snr)_C = \frac{A_C^2}{2 B N_0} P$$
* Expression of the signal at the output of the mixer:

  $$x(t) \cos 2 \pi f_c t = \frac{1}{2} A_c m(t) + \frac{1}{2} X_I(t) +
  \frac{1}{2} \left( A_c m(t) + X_I(t) \right) \cos 4 \pi f_c t +
  \frac{1}{2} X_Q(t) \sin 4 \pi f_c t$$
* Expression of the signal after the low pass filtering:
  $$\frac{1}{2} A_c m(t) + \frac{1}{2} X_I (t)$$
* Average RX power of the signal: $$S_\text{out} = \frac{A_c^2}{4}P$$

  Proof: $$P/2$$ power distributed over the in-phase and quadrature signals. For the in-phase-signal, $$P/4$$ power distributed over the frequencies $$f_c$$ and $$2 f_c$$
* Total noise power at the demodulated output: $$\frac{N_0 B}{2}$$
* Expression of $$(\snr)_{\text{out}}$$:
  $$(\snr)_{\text{out}} = \frac{A_c^2 P}{2B N_0}$$
* Figure of merit: $$\frac{(\snr)_{\text{out}}}{(\snr)_C} = 1$$
* Demodulation is coherent only

## Full AM
* Expression of modulated signal:
  $$s(t) = A_c (\frac{m(t)}{A_C} + 1) \cos 2 \pi f_c t$$
