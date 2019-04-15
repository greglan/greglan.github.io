---
layout: page
title:  "Correlation Power Analysis (CPA)"
permalink: "cpa.html"
tags: [security, cryptography]
---

# Introduction
* Allows to find a secret key stored on a device
* Requires a traces of power consumption for different plaintexts
* Steps:
  - Design a model of the device's power consumption at one specific point in the encryption algorithm
  - Consider every possible option for the subkey. For each guess and each trace, use the known plaintext and the guessed subkey to calculate the power consumption according to the model.
  - Calculate the Pearson correlation coefficient between the modeled and recorded power consumption for every data point
  - Decide which subkey correlates best to the traces
  - Put together the best subkey guesses to obtain the full secret key

# Power consumption model
* Two components to power consumptions in electronics: static power and dynamic power
* Static power consumption: power required to keep the device running. Depends on the number of transistors inside for instance
* Dynamic power consumption: depends on the data moving around inside the device. A bit changed from 0 to 1 induces some current to charge the data line
* Hamming weight $$W$$: number of 1s in a binary number
* Hamming distance $$H$$: number of different bits in two numbers. $$H(x,y) = W(x \wedge y)$$
* If at some point in the encryption algorithm we replace $$x$$ with $$y$$, then the power consumption is likely to be proportional to $$H(x,y)$$

# Pearson's correlation coefficient
* Describes how closely the random variables $$X$$ and $$Y$$ are related. Always in $$[-1,1]$$:
  - If $$Y$$ always increases when $$X$$ increases, will be 1
  - If $$Y$$ always decreases when $$X$$ increases, will be -1
  - If $$Y$$ totally independent from $$X$$, will be 0
* Used to compare the modeled power to the measured traces

$$
\rho_{X,Y} = \frac{\text{cov}(X, Y)}{\sigma_X \sigma_Y} = \frac{E[(X - \mu_X)(Y - \mu_Y)]}{\sqrt{E[(X - \mu_X)^2] E[(Y - \mu_Y)^2]}}
$$


# Attack principle
**Computing the correlations**
$$ r_{i,j} =
\frac{
  \sum_{d=1}^D ( h_{d,i} - \overline{h_i} ) ( t_{d,j} - \overline{t_j} )
}{
  \sqrt{
    \sum_{d=1}^D ( h_{d,i} - \overline{h_i} )^2  
    \sum_{d=1}^D ( t_{d,j} - \overline{t_j} )^2
  }
} =
\frac{
  D\sum_{d=1}^D h_{d,i} t_{d,j} - \sum_{d=1}^D h_{d,i} \sum_{d=1}^D t_{d,j}
}{
  \sqrt{
    \left( \left(\sum_{d=1}^D h_{d,i}\right)^2 - D \sum_{d=1}^D h_{d,i}^2 \right)
    \left( \left(\sum_{d=1}^D t_{d,j}\right)^2 - D \sum_{d=1}^D t_{d,j}^2\right)
  }
}
$$


**Picking the subkey**
The last step is to use the values of $$r_{i,j}$$ to decide which subkey matches our traces most closely. There are two steps to this:

For each subkey i, find the highest value of $$|r_{i,j}|$$. This will discard the time information - we want to know how good our guess was, but we don't care where our guess matched the trace.
Looking at the maximum values for each subkey, find the highest value of $$|r_i|$$. The location $$i$$ of this maximum is our best guess: it correlated more closely with the traces than any other guess.
Note that we're only working with absolute values here because we don't care about the sign of the relationship. All we need to know is that a linear correlation exists.

# Resources and references
* [CPA introduction](https://wiki.newae.com/Correlation_Power_Analysis)
* [RSA example](https://wiki.newae.com/Tutorial_B11_Breaking_RSA)
* [Difference between perfoming CPA in the first and last AES round](https://crypto.stackexchange.com/questions/47680/what-is-the-difference-between-perfoming-correlation-power-analysis-cpa-in-the)
* [CPA example on AES 128](https://www.tandfonline.com/doi/full/10.1080/23742917.2016.1231523)
