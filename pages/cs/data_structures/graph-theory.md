---
layout: page
title:  "Graph theory"
permalink: "graph-theory.html"
tags: [programming, data_structures, graphs]
summary: "Definitions, analysis and properties of graphs"
---

## Definitions
* Directed graph = digraph (Graphe orienté). $$E$$ can be seen as a binary
relation on $$V^2$$ [2, p135]
* Order (ordre) $$\vert G \vert$$: number of vertices $$\vert V \vert$$
* Size (taille) $$\vert \vert G \vert \vert$$: number of edges $$\vert E \vert$$
* Source: vertex that doesn't have a predecessor/no incoming edges [1, p2]
* Sink (puit): vertex that doesn't have a successor/outgoing edges [1, p2]
* Isolated vertex: vertex with no incident edge
* Arêtes consécutives, chemin, cycle, circuit, cycle hamiltonien, chemin
eulérien [2, p136]
* Caractérisation de l'existence d'un cycle eulérien. Algorithm for detection.
Complexity [2, p136]
* Clique d'un graphe [2, p136]
* Composante fortement connexe. Algorithme de calcul, complexité [2, p136]
* Graphe non orienté [2, p137]
* Connected components
* Radius, diameter, center

## Measures
* Average degree: $$\frac{2 \vert \vert G\vert \vert}{\vert G \vert}$$
* Maximum size of a graph of order $$n$$: $$\frac{n(n-1)}{2}$$
* Density $$\rho = \frac{\vert \vert G \vert \vert}{\frac{n(n-1)}{2}}$$

### Centrality
* Degree centrality
* Indegree/outdegree centrality
* Eigenvector centrality

### Clustering
* [Clustering coefficient](https://en.wikipedia.org/wiki/Clustering_coefficient):
measure of the degree to which nodes in a graph tend to cluster together



## Properties
* A directed acyclic graph always has at least one source and one sink [1, p3]
* Acyclicity and topological sort: A graph is directed acyclic if and only if is has a topological sort [1, p3]

$$d(v_i) = \sum_{j=1}^n a_{ij}$$

$$\sum_{v \in V} d(v) = 2 ||G||$$


## Resources and references
* [1] *Yannis Haralambous*, Graphes INF435 2017
* [2] Langages formels, calculabilité et complexité, Oliver Carton
* [Glossary of graph theory terms in English](https://en.wikipedia.org/wiki/Glossary_of_graph_theory_terms)
* [Glossary of graph theory terms in French](https://fr.wikipedia.org/wiki/Lexique_de_la_th%C3%A9orie_des_graphes)
* [Wikipedia distances in graph theory](https://en.wikipedia.org/wiki/Distance_(graph_theory))
* [Wikipedia article on directed acyclic graphs](https://en.wikipedia.org/wiki/Directed_acyclic_graph)
* [Graph clustering example](https://www.quora.com/What-is-graph-clustering)
