---
layout: page
title:  "Quantum cheatsheet"
permalink: "quantum-cheatsheet.html"
tags: [maths, quantum]
summary: "Some formulas and definitions"
---
{% include latex-commands.html %}

## Formulas
* Walsh-Hadamard transform: $$H^{\otimes n} = \frac{1}{\sqrt{2^n}} \sum_{x,y} (-1)^{x y} \ket{x} \bra{y}$$
* Von Neumann entropy of a density operator: $$S(\rho) = - \tr (\rho \log_2 \rho) = - \sum_i \lambda_i \log_2 \lambda_i$$
* If $$n$$ real unit vector, rotation about the $$\hat{n}$$ axis: $$R_\hat{n} = e^{-i \theta \hat{n}\cdot\hat{\sigma}} = \cos(\frac{\theta}{2}) I - i \sin(\frac{\theta}{2}) \left(n_x \sigma_x + n_y \sigma_y + n_z \sigma_z \right)$$
* Bloch sphere coordinates: $$\ket{\psi} = a_0 \ket{0} + a_1 \ket{1} = \cos \frac{\theta}{2} \ket{0} + e^{i \Phi} \sin \frac{\theta}{2} \ket{1}$$

![bloch-sphere-wiki](https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Bloch_Sphere.svg/423px-Bloch_Sphere.svg.png)

### Commutation relations for the Pauli matrices

$$
[\sigma_x, \sigma_y] = 2i \sigma_z, \quad [\sigma_y, \sigma_z] = 2i \sigma_x, \quad [\sigma_z, \sigma_x] = 2i \sigma_y
$$

$$
\sigma_x \, \sigma_y = i \sigma_z, \quad \sigma_y \, \sigma_z = i \sigma_x, \quad \sigma_z \, \sigma_x = i \sigma_y\\
\sigma_y \, \sigma_x = -i \sigma_z, \quad \sigma_z \, \sigma_y = -i \sigma_x, \quad \sigma_x \, \sigma_z = -i \sigma_y
$$


## Notable matrices
### Pauli matrices
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


### Rotations
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


## Notable states

$$
\ket{+} = \frac{\ket{0} + \ket{1}}{\sqrt{2}}, \quad

\ket{-} = \frac{\ket{0} - \ket{1}}{\sqrt{2}}, \quad

\ket{i} = \frac{\ket{0} + i \ket{1}}{\sqrt{2}}, \quad

\ket{-i} = \frac{\ket{0} - i \ket{1}}{\sqrt{2}}
$$

$$
\ket{GHZ_n} = \frac{1}{\sqrt{2}}(\ket{0}^{\otimes n} + \ket{1}^{\otimes n}) \quad \text{(Greenberger–Horne–Zeilinger state)}
$$

$$
\ket{W_n} = \frac{1}{\sqrt{n}}( \ket{100 \dots 0} + \ket{010 \dots 0} + \dots + \ket{000 \dots 1}) \quad \text{(W state)}
$$

* Hadamard basis: $$\{\ket{+}, \ket{-} \}$$
