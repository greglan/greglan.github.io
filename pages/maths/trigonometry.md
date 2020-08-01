---
layout: page
title:  "Trigonometric formulas"
permalink: "trigonometry.html"
summary: "A cheatsheet about trigonometric formulas"
---
{% include latex-commands.html %}

## Basics

$$\cos^2(x) + \sin^2(x) = 1$$

$$\begin{align}
	\cos(-x) &= \cos(x) 						& \sin(-x) &= - \sin(x) \\\\
	\cos(\pi+x) &= - \cos(x) 					& \sin(\pi+x) &= -\sin(x) \\\\
	\cos\left(\frac{\pi}{2}-x\right) &= \sin(x) & \sin\left(\frac{\pi}{2}-x\right) &= \cos(x) \\\\
	\tan(-x) &= - \tan(x) 						& \tan(x ) &= \frac{\sin(x)}{\cos(x)}
\end{align}$$


## Operations
### Addition

$$\cos(a-b)=\cos(a) \, \cos(b)+\sin(a) \, \sin(b)$$

$$\cos(a+b)=\cos(a) \, \cos(b)-\sin(a) \, \sin(b)$$

$$\sin(a-b)=\sin(a) \, \cos(b)-\sin(b) \, \cos(a)$$

$$\sin(a+b)=\sin(a) \, \cos(b)+\sin(b) \, \cos(a)$$

$$\tan(a+b)=\frac{\tan(a)+\tan(b)}{1-\tan(a) \, \tan(b)}$$

$$\tan(a-b)=\frac{\tan(a)-\tan(b)}{1+\tan(a) \, \tan(b)}$$


### Double angle

$$\cos(2a)=\cos^{2}(a)-\sin^{2}(a)=2\cos^{2}(a)-1=1-2\sin^{2}(a)$$

$$\sin(2a)=2 \, \sin(a) \, \cos(a)$$

$$\tan(2a)=\frac{2\tan(a)}{1-\tan^{2}(a)}$$

$$\cos(3a) = \cos(a+2a) = \cdots = 4 \cos^3(a) - 3 \cos(a)$$

$$\sin(3a) = 3 \sin(a) - 4 \sin^3(a)$$


### Square reduction

$$\cos^{2}(a)=\frac{1+\cos(2a)}{2}\;\;\;\;\;\sin^{2}(a)=\frac{1-\cos(2a)}{2}$$

$$\tan^{2}(a)=\frac{1-\cos(2a)}{1+\cos(2a)}$$

### Product to sum

$$\cos(a) \, \cos(b)=\frac{\cos(b-a)+\cos(a+b)}{2}$$

$$\sin(a) \, \sin(b)=\frac{\cos(b-a)-\cos(a+b)}{2}$$

$$\cos(a) \, \sin(b)=\frac{\sin(b-a)+\sin(a+b)}{2}$$


### Sum to product

$$ \cos(a)+\cos(b)=2 \, \cos\left(\frac{b-a}{2}\right) \, \cos\left(\frac{a+b}{2}\right) $$

$$ \cos(a)-\cos(b)=2 \, \sin\left(\frac{b-a}{2}\right) \, \sin\left(\frac{a+b}{2}\right) $$

$$ \sin(a)+\sin(b)=2 \, \cos\left(\frac{b-a}{2}\right) \, \sin\left(\frac{a+b}{2}\right) $$

$$ \sin(a)-\sin(b)=2 \, \cos\left(\frac{b+a}{2}\right) \, \sin\left(\frac{a-b}{2}\right) $$

$$ \tan(a)+\tan(b)=\frac{\sin(a+b)}{\cos(a) \, \cos(b)}$$

