---
layout: page
title:  "The BB84 protocol"
permalink: "bb84-protocol.html"
tags: [maths, quantum]
summary: "A simple key distribution protocol"
---

{% include latex-commands.html %}


## A simple protocol
* Support du codage : photons polarisés
* Outil d'émission : polariseur
        Outil de réception : analyseur
* Base $$\oplus$$ :
	- $$\ket{\longrightarrow} = 0$$
    - $$\ket{\uparrow} = 1$$
* Base $$\otimes$$ :
    - $$\ket{\nearrow} = \frac{1}{\sqrt{2}} \left( \ket{\longrightarrow} + \ket{\uparrow} \right) = 0$$
    - $$\ket{\searrow} = \frac{1}{\sqrt{2}} \left( \ket{\longrightarrow} - \ket{\uparrow} \right) = 1$$
* Solution contre l'interception : protocole BB84, Bennett & Brassard, 1984
* Principe : rajout d'une autre base déphasée de $$\theta = \frac{\pi}{4}$$
* Algorithme:
    - Choix alétoire d'une base à l'émission d'un bit, avec mémoire des bases choisies
    - Choix alétoire d'une base à la réception d'un bit, avec mémoire des bases choisies
    - Transmission par le récepteur de la liste des bases utilisées à l'émetteur
    - Réponse de l'émetteur par l'intersection des deux listes
    - Bit accepté par le récepteur ssi base identique
* Vérification de la présence d'un espion : comparaison d'une liste de bits choisis aléatoirement
* Probabilité pour un espion de modifier un bit : $$\frac{1}{4}$$
* Probabilité pour un espion d'avoir écouté $$n$$ bits et n'en avoir modifié aucun : $$\left( \frac{3}{4} \right)^n$$

  Tend vers 0 pour $$n$$ grand.

# Resources and references
* [3] Introduction à l'information quantique, Y.Leroyer and G.Sénizergues
