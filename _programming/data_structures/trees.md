---
title:  "Trees"
topic: "data_structures"
---

# Definitions
* **Using graph formalism**: directed graph *T=(V,E)* where vertices are the nodes of the tree and edges of the form *(x,y)* where *y* is the child of *x*
* **Recursive definition**
* Arbre enraciné: arbre possèdant une racine et orienté, c'est à dire muni d'une hiérarchie. (conception usuelle).
*	**Root**: only node which doesn't have a parent
*	**Leaf**: node without children
*	Noeud interne.
*	Degré d'un noeud: nombre de fils.
*	Arité : Maximum des degrés.
*	Arbre $n$-aire : arbre d'arité $n$.
*	Taille d'un arbre : nombre de ses noeuds internes (y compris la racine)
*	Profondeur d'un noeud : nombre de noeuds le séparant de la racine (en comptant le noeud en question). Convention: racine de profondeur 0.
*	Hauteur d'un arbre : profondeur maximale de ses noeud.
*	Full binary tree / Arbre binaire localement complet: binary tree where every nodes have 0 or 2 children
*	Perfect binary tree / Arbre binaire complet: arbre localement complet dont toutes les feuilles sont à la même hauteur. De manière équivalente, l'arbre est rempli de la gauche vers la droite.
*	Arbre dégénéré ou filiforme : chaque noeud possède 1 ou 0 fils.
*	**Forest**: set of *n* trees
*	Arbre equilibré au sens AVL : pour tout noeud $n$, les hauteurs des sous-arbres gauche et droit de $n$ différent d'au plus 1.



# Properties
Un arbre binaire localement complet de taille $n$ possède $n+1$ feuilles.


# Algorithms
*	Creation of a tree
*	Testing if a tree is empty
*	Récupération des fils.
*	Testing if a node is a leaf
*	Teste si un arbre est un noeud interne.
*	Calcul de la hauteur d'un arbre.
*	Calcul du nombre de noeuds.
*	Calcul du nombre de noeud internes.
*	Calcul du nombre de feuilles.
*	In-order and post-order traversals / parcours infixe, post fixe
*	In-order traversal: visit(left subtree), visit(node), visit(right subtree).
	Sur un arbre binaire de recherche, énumère les noeuds du plus petit au plus grand: in-order
*	Pre-order traversal: visit(node), visit(left subtree), visit(right subtree).
	The root is always the first node visited
*	Post-order traversal: visit(left subtree), visit(right subtree), visit(node).
	The root is always the last node visited
*	Depth First Search (DFS) / Parcours en profondeur
*	Breadth First Search (BFS) / Parcours en largeur
