---
title:  "Cheatsheet"
topic: ""
tags: quantum_computing
---
$$
\newcommand{\bra}[1]{\left< #1 \right|}
\newcommand{\ket}[1]{\left| #1 \right>}
\newcommand{\bk}[2]{\left< #1 \middle| #2 \right>}
\newcommand{\bke}[3]{\left< #1 \middle| #2 \middle| #3 \right>}
$$

# Definitions
* Ket: $$\ket{x}$$
* Bra: $$\bra{x}$$
* Hadamard basis: $$\{\ket{+}, \ket{-} \}$$


# Formulas
* $$H^{\otimes n} = \frac{1}{\sqrt{2^n}} \sum_{x,y} (-1)^{x y} \ket{x} \bra{y}$$
* Bloch sphere coordinates: $$\ket{\psi} = a_0 \ket{0} + a_1 \ket{1} = \cos \frac{\theta}{2} \ket{0} + e^{i \Phi} \sin \frac{\theta}{2} \ket{1}$$

![bloch-sphere-wiki](https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Bloch_Sphere.svg/423px-Bloch_Sphere.svg.png)


# Notable states

$$\ket{+} = \frac{\ket{0} + \ket{1}}{\sqrt{2}}$$

$$\ket{-} = \frac{\ket{0} - \ket{1}}{\sqrt{2}}$$

$$\ket{i} = \frac{\ket{0} + i \ket{1}}{\sqrt{2}}$$

$$\ket{-i} = \frac{\ket{0} - i \ket{1}}{\sqrt{2}}$$


# Notable matrices
## Pauli matrices
$$ \sigma_1 = X =
\begin{pmatrix}
0&1\\
1&0
\end{pmatrix}
$$ (rotation of $$\pi$$ around the $$x$$ axis)

$$ \sigma_2 = Y =
\begin{pmatrix}
0&-i\\
i&0
\end{pmatrix}
$$ (rotation of $$\pi$$ around the $$y$$ axis)

$$ \sigma_3 = Z =
\begin{pmatrix}
1&0\\
0&-1
\end{pmatrix}
$$ (rotation of $$\pi$$ around the $$z$$ axis)


## Rotations
$$ X(\theta) = e^{i x \theta / 2} =
\begin{pmatrix}
\cos \theta/2 & -i \sin \theta/2\\
-i \sin \theta/2 &\cos \theta/2
\end{pmatrix}
$$ (rotation of $$\theta$$ around the $$x$$ axis)

$$ Y(\theta) = e^{i y \theta / 2} =
\begin{pmatrix}
\cos \theta/2 & -\sin \theta/2\\
\sin \theta/2 &\cos \theta/2
\end{pmatrix}
$$ (rotation of $$\theta$$ around the $$y$$ axis)

$$ Z(\theta) =
\begin{pmatrix}
e^{i \theta /2} &0\\
0& e^{i \theta /2}
\end{pmatrix}
$$ (rotation of $$\theta$$ around the $$z$$ axis)

$$ H =  \frac{1}{\sqrt{2}}
\begin{pmatrix}
1&1\\
1&-1
\end{pmatrix}
$$ (rotation of $$\frac{\pi}{2}$$ around the $$y$$ axis and $$\pi$$ around the $$x$$ axis)
