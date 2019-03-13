---
title:  "Cheatsheet"
tags: quantum_computing
---
$$
\newcommand{\bra}[1]{\left< #1 \right|}
\newcommand{\ket}[1]{\left| #1 \right>}
\newcommand{\bk}[2]{\left< #1 \middle| #2 \right>}
\newcommand{\bke}[3]{\left< #1 \middle| #2 \middle| #3 \right>}
$$

# Definitions
* Ket: $$\ket{x}>$$
* Bra: $$\bra{x}$$
* Hadamard basis: $$\{\ket{+}, \ket{-} \}$$

# Mathematics
* *Adjoint/Hermitian conjugate* of $$A$$: $$A^\dagger$$
* Hermitian/self-adjoint matrix: $$A = A^\dagger$$
* Normal matrix: $$AA^\dagger = A^\dagger A$$
* $$U$$ unitary iif $$U^\dagger U = I (= U U^\dagger)$$
* Unitary operators preserve the inner product
* Bloch sphere coordinates: $$\ket{\psi} = a_0 \ket{0} + a_1 \ket{1} = \cos \frac{\theta}{2} \ket{0} + e^{i \Phi} \sin \frac{\theta}{2} \ket{1}$$
![bloch-sphere-wiki](https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Bloch_Sphere.svg/423px-Bloch_Sphere.svg.png)


# Notable states

$$\ket{+} = \frac{\ket{0} + \ket{1}}{\sqrt{2}}$$

$$\ket{-} = \frac{\ket{0} - \ket{1}}{\sqrt{2}}$$

$$\ket{i} = \frac{\ket{0} + i \ket{1}}{\sqrt{2}}$$

$$\ket{-i} = \frac{\ket{0} - i \ket{1}}{\sqrt{2}}$$


# Notable matrices

$$ X =
\begin{bmatrix}
0&1\\
1&0
\end{bmatrix}
$$ (rotation of $$\pi$$ around the $$x$$ axis)

$$ Y =
\begin{bmatrix}
0&-i\\
i&0
\end{bmatrix}
$$ (rotation of $$\pi$$ around the $$y$$ axis)

$$ Z =
\begin{bmatrix}
1&0\\
0&-1
\end{bmatrix}
$$ (rotation of $$\pi$$ around the $$z$$ axis)

$$ H =  \frac{1}{\sqrt{2}}
\begin{bmatrix}
1&1\\
1&-1
\end{bmatrix}
$$ (rotation of $$\frac{\pi}{2}$$ around the $$y$$ axis and $$\pi$$ around the $$x$$ axis)
