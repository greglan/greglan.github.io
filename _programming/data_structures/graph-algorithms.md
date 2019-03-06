---
title:  "Graph algorithms"
topic: "data_structures"
tags: programming data_structures graphs
---

# Implementation complexities

| Implementation | Adjacency matrix | Adjacency list | Binary tree forest |
|:--------------:|:----------------:|:--------------:|:------------------:|
| Space | $$O(\vert V \vert^2)$$ | $$\mathcal{O}(\vert V \vert + \vert E \vert)$$ |  |
| Edge insertion | $$\mathcal{O}(1)$$ | $$\mathcal{O}(1)$$ | $$\mathcal{O}(\log (m/n))$$ |
| Deletion | $$\mathcal{O}(1)$$ | $$\mathcal{O}(m/n)$$ | $$\mathcal{O}(\log (m/n))$$ |
| Search | $$\mathcal{O}(1)$$ | $$\mathcal{O}(m/n)$$ | $$\mathcal{O}(\log (m/n))$$ |
| Enumeration | $$\mathcal{O}(\vert V \vert)$$ | $$\mathcal{O}(m/n)$$ | $$\mathcal{O}(m/n)$$ |


# Depth first search
* Complexity: $$\mathcal{O}(\vert V \vert + \vert E \vert)$$
* Implémentation: recursive and imperative
* Visit every nodes reachable from the starting node

```
DFS(G, s):
    V = {s}
    visit(s)

visit(v):
    V = V + {v}
    for each u in G:
        if u not in V:
            visit(u)
```


# Breadth first search
* Complexity: $$\mathcal{O}(\vert V \vert + \vert E \vert)$$
* Nodes are visited by increasing distance to the starting node
* The length of the paths obtained are minimal. Induction proof
* Visit every nodes reachable from the starting node

```
BFS(G, s):
    for each v in G-{s}:
        d[v] = MAX
        p[v] = []

    d[s] = 0
    Q = [s]
    V = []

    while Q not empty:
        u = get(Q)
        for each v in neighbors(u):
            if v not in V:
                d[v] = d[u] + 1
                p[v] = u
                put(Q, v)
        V = V + {u}
```


# Dijkstra
## Initialization
```
Init(G, s):
    for each vertex in G:
        d[v] = MAX
        p[v] = {}
    d[s] = 0
```

## Edge relaxation
```
Relax(u, v, w):
    if d[v] > d[u] + w(u, v):
        d[v] = d[u] + w(u, v)
        p[v] = u
```

## Edge pseudo-relaxation
```
PseudoRelax(u, v, w):
    if d[v] > w(u, v):
        d[v] = w(u, v)
        p[v] = u
```

## Dijkstra algorithm
* Hypothesis: only for paths of positive weight
* Complexity: $$\mathcal{O}(\vert E \vert + \vert V \vert \log \vert V \vert)$$ (Fibonacci queues)
```
Dijkstra(G, w, s):
    Init(G, s)
    S = {}
    Q = PriorityQueue(s)

    while Q != {}:
        u = extract-min(Q)
        S = S + {u}
        for each neighbor v of u:
            if v not in S:
                Relax(u, v, w)
                Q = Q + {v}
```


# Bellman-Ford
* Hypothesis: none, works for paths of weight both positive and negative
* Complexity: $$\mathcal{O}(\vert V \vert \vert E \vert)$$
* Drawback: high complexity for a high number of edges
```
BellmanFord(G, s):
    Init(G, s)

    for i=1 to |V|-1:
        for each edge (u, v):
            Relax(u, v, w)

    for each edge (u, v):
        if d[v] > d[u] + w(u, v):
            return false
    return true
```
