---
layout: page
title:  "Quantum computers"
permalink: "quantum-computers.html"
tags: [quantum]
summary: "This page presents the circuit model for quantum computation as well as the implementation of basic gates"
---

# Misc
* Not really quantum computers, rather quantum accelerator (similar in architecture to GPUs, FPGAs...)
* Multiple runs of an algorithm to approach a deterministic result
* Emergence: phenomenas emerge due to the collective behavior of original cnstituents.
In superconductor materials, the interaction between electrons,
mediated by vibrations of the crystal lattice, creates the so-called Cooper pairs.
Differently from individual electrons, Cooper pairs can share the same quantum state.
Superconductivity emerges from the concerted state of pairs
that propagates without electrical resistance through the crystal. Moving electrons cause vibrations in the crystal lattice, which exert forces on other electrons, creating Cooper pairs.
* The higher the mobility in a semiconductor, the smaller the disorder. A higher temperature means more particles are moving around in the semiconducter, bumping into the electrons, slowing them down. Decrease the temperature to best increase the mobility

Changing the electric field doesn't change the mobility, only the (drift) velocity.
* Precision of the materials: materials uniformity, chemical composition, and electrical properties.
* To have a working quantum computer you need to couple together many qubits,
while maintaining their long coherence time.
These requirements are often conflicting.
Qubits that are hard to couple together have long coherence times,
because they tend to be isolated.
On the other hand, systems that are easy to couple together tend to lose coherence quickly,
because they can be perturbed easily by the environment.
* To investigate what materials are good hosts for single electron spins, we can use a Transmission Electron Microscope to investigate its properties. This microscope shoots an electron beam through a thin piece of the material. This results in a diffraction pattern on a lattice, which can be studied to figure out properties of the material.
* The building blocks for a quantum computer are a quantum algorithm, a quantum language, a compiler, arithmetic, an instruction set, a micro-architecture, a quantum to classical conversion and a quantum chip.
* Quantum materials provide the environment where qubits, the elemental unit of quantum information processing, are defined and live.
* Precision in material uniformity, chemical composition and electrical properties are crucial for the requirements of having both many qubits and long decoherence times.
* Chemical Vapour Deposition is an industrial process that uses high purity gases to make high quality materials, with desired physical and electronic properties.
* Transmission electron microscopy is a process to inspect the fabricated heterostructures with high resolution.
* Temperature, electric fields and magnetic fields are useful parameters to determine properties of quantum materials such as mobility and electron density.

Usually light (photons) is used to look at things. However the atoms in the material you want to investigate are really small compared to (the wavelength of) photons. To image the atomic structure you need to use something with a smaller wavelength than the size of the atoms for a good resolution.
Particles can be modelled as both particles and waves. The wavelength of a massive particle is depicted by the de Broglie wavelength
* A quantum computer should have some necessary properties to be called a quantum computer. These are called the DiVincenzo criteria:
    - The system must be scalable with well defined qubits
    - The computer must have the ability to initialize the state of qubits
    - Qubits must have long decoherence times
    - The computer must be able to perform a universal set of quantum gates on the qubits
    - It should be possible to measure the qubits

We have to keep those criteria in mind when we choose the material for our qubits. For example, having homogeneous materials makes it possible to scale the system easily.

To ensure long decoherence times, (Qubits decohere when they interact with the environment) Avoid materials with a complex structure, as it is more likely to interact with the qubits. It should be avoided that the material the qubit live in interacts with the qubit. If a material has a complex structure it is harder to avoid these interactions


# Languages
* ScaffCC
* ProjectQ
* OpenQL inspired from OpenCL. Assembly: QASM
