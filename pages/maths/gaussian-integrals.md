---
layout: page
title:  "Gaussian integrals"
permalink: "gaussian-integrals.html"
summary: "A cheatsheet on Gaussian integrals"
---
{% include latex-commands.html %}

## Simple forms

$$ \int_\R e^{-x^2} dx = \sqrt{\pi}$$

$$ \int_\R e^{-a(x+b)^2} dx = \sqrt{\frac \pi a}$$

## Probability forms

$$f(x) = \frac{1}{\sigma \sqrt{2\pi}} e^{-\frac{(x-\mu)^2}{2 \sigma^2}}$$

$$\int_\R f(x) dx = 1$$

$$\int_\R x f(x) dx = \mu$$

$$\int_\R x^2 f(x) dx = \mu^2 + \sigma^2$$

$$\int_\R (x-\mu)^2 f(x) dx = \sigma^2$$

## Application to a quantum wave-packet
### Intial wavepacket

$$\psi(x, t=0) = \psi(x) =  \frac{1}{\pi^{1/4} \sqrt{\sigma}} e^{- \frac{(x-x_0)^2}{2 \sigma^2}} e^{i p_0 x / \hbar}$$

$$|\psi(x)|^2 = \frac{1}{\sigma \sqrt{\pi}} e^{- \frac{(x-x_0)^2}{\sigma^2}}$$

Note: same as the probability forms with $$\sigma' = \sigma \sqrt{2}$$.

### Normalization

$$\int_\R |\psi(x)|^2 dx = 1$$

### Average position

$$ \average{x} = \int_\R \bke{\psi}{\hat{x}}{\psi} dx =  \int_\R \psi(x)^* x \psi(x) dx = \int_\R x |\psi(x)|^2 dx = x_0$$

### Average momentum

$$\devp{\psi}{x} = \left(-\frac{x-x_0}{\sigma^2} + i \frac{p_0}{\hbar} \right) \psi(x)$$

$$\frac{\hbar}{i} \devp{\psi}{x} = \left(p_0 + i \frac{\hbar(x-x_0)}{\sigma^2} \right) \psi(x)$$

$$\begin{align*}
\average{p_x} = & \; \int_\R \bke{\psi}{\hat{p_x}}{\psi} dx = \int_\R \psi(x)^* \frac{\hbar}{i} \devp{\psi}{x} dx \\
= & \; \int_\R \left(p_0 + i \frac{\hbar(x-x_0)}{\sigma^2} \right)  |\psi(x)|^2 dx \\
= & \; p_0 + \frac{i \hbar}{2} \int_\R \frac{2(x-x_0)}{\sigma^2} \frac{1}{\sigma \sqrt{\pi}} e^{- \frac{(x-x_0)^2}{\sigma^2}} dx
= p_0 - \frac{i \hbar}{2} \left[ |\psi(x)|^2 \right]_\R = p_0
\end{align*}$$

### Average kinetic energy

$$\begin{align*}
\devpp{\psi}{x} = & \; - \frac{1}{\sigma^2} \psi(x) - \frac{x-x_0}{\sigma^2}\devp{\psi}{x} + i \frac{p_0}{\hbar} \devp{\psi}{x} \\
= & \; - \frac{1}{\sigma^2} \psi(x) + \left(-\frac{x-x_0}{\sigma^2} + i \frac{p_0}{\hbar} \right)\left(-\frac{x-x_0}{\sigma^2} + i \frac{p_0}{\hbar} \right) \psi(x) \\
= & \; - \frac{1}{\sigma^2} \psi(x) + \left(i p_0/\hbar  - \frac{x-x_0}{\sigma^2}\right) \left(i p_0/\hbar  - \frac{x-x_0}{\sigma^2}\right) \psi(x) \\
= & \;  \left(- \frac{1}{\sigma^2} - \frac{p_0^2}{\hbar^2} -2i \frac{p_0}{\hbar} \frac{x-x_0}{\sigma^2} + \left(\frac{x-x_0}{\sigma^2} \right)^2 \right) \psi(x)\\
= & \;  \left(- \left(\frac{1}{\sigma^2} + \frac{p_0^2}{\hbar^2} \right) + \left(\frac{x-x_0}{\sigma^2} \right)^2 -2i \frac{p_0}{\hbar} \frac{x-x_0}{\sigma^2} \right) \psi(x)\\
\frac{-\hbar^2}{2m} \devpp{\psi}{x} = & \;
\left(\frac{p_0^2}{2m} + \frac{\hbar^2}{2m \sigma^2} - \frac{\hbar^2}{2m} \left(\frac{x-x_0}{\sigma^2} \right)^2 + i \frac{p_0 \hbar}{m} \frac{x-x_0}{\sigma^2} \right) \psi(x)
\end{align*}$$

$$\begin{align*}
\average{E_c} = & \; \int_\R \bke{\psi}{\hat{E_c}}{\psi} dx = \int_\R \psi(x)^* \frac{-\hbar^2}{2m} \devpp{\psi}{x} dx \\
= & \; \int_\R \left(\frac{p_0^2}{2m} + \frac{\hbar^2}{2m \sigma^2}\right) |\psi(x)|^2 dx  
- \frac{\hbar^2}{2m \sigma^4} \int_\R \left(x-x_0 \right)^2 |\psi(x)|^2 dx 
+ i \frac{p_0 \hbar}{2m} \int_\R \frac{2(x-x_0)}{\sigma^2} |\psi(x)|^2 dx\\
= & \; \frac{p_0^2}{2m} + \frac{\hbar^2}{2m \sigma^2}
- \frac{\hbar^2}{2m \sigma^4} 2\sigma^2
- i \frac{p_0 \hbar}{2m} \left[ |\psi(x)|^2 \right]_\R\\
= & \; \frac{p_0^2}{2m} - \frac{\hbar^2}{2m \sigma^2}
\end{align*}$$

## Resources and references
* [Variance on Wikipedia](https://en.wikipedia.org/wiki/Variance)