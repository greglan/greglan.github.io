---
title:  "Cheatsheet"
---
$$
\newcommand{\bra}[1]{\left< #1 \right|}
\newcommand{\ket}[1]{\left| #1 \right>}
\newcommand{\bk}[2]{\left< #1 \middle| #2 \right>}
\newcommand{\bke}[3]{\left< #1 \middle| #2 \middle| #3 \right>}
$$

# Definitions
* Ket: $$\left\vert x \right>$$
* Bra: $$\left< x \right\vert$$
* Hadamard basis: $$\{\left\vert + \right>, \left\vert - \right> \}$$

# Mathematics
* Bloch sphere coordinates: $$\left\vert \psi \right> = a_0 \left\vert 0 \right> + a_1 \left\vert 1 \right> = \cos \frac{\theta}{2} \left\vert 0 \right> + e^{i \Phi} \sin \frac{\theta}{2} \left\vert 0 \right>$$

![bloch-sphere-wiki](https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Bloch_Sphere.svg/423px-Bloch_Sphere.svg.png)

* Unitary operators preserve the inner product

# Notable states

$$\left\vert + \right> = \frac{\left\vert 0 \right> + \left\vert 1 \right>}{\sqrt{2}}$$

$$\left\vert - \right> = \frac{\left\vert 0 \right> - \left\vert 1 \right>}{\sqrt{2}}$$

$$\left\vert i \right> = \frac{\left\vert 0 \right> + i \left\vert 1 \right>}{\sqrt{2}}$$

$$\left\vert -i \right> = \frac{\left\vert 0 \right> - i \left\vert 1 \right>}{\sqrt{2}}$$


# Notable matrices

$$ W =
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
