---
layout: page
title:  "AVL trees"
permalink: "avl-trees.html"
tags: [programming, data_structures, trees]
summary: ""
---

* Definition: for all nodes, the difference between the height of the left and right subtree is at most 1. Motivation : ensure the height of the tree is *log n* at each insert or delete operation. Ensures average complexity of *O(log n)*
* Comparison with red black trees. Use cases
* Check if BST is an AVL tree : implementation
* Left rotation, right rotation : example, implementation, complexity
* Algorithm to insert $$w$$
  - Perform standard binary search tree insertion of $$w$$
  - Starting from $$w$$, travel up and find the first unbalanced node $$z$$
  - Let $$y$$ be the child of $$z$$ that comes on the path from $$w$$ to $$z$$ 

    Let $$x$$ be the grandchild of $$z$$ that comes on the path from $$w$$ to $$z$$.
* Complexity of insertion algorithm.
* Deletion algorithm. Complexity.

## References
* [GeeksforGeeks part 1](https://www.geeksforgeeks.org/avl-tree-set-1-insertion/)
* [GeeksforGeeks part 2](https://www.geeksforgeeks.org/avl-tree-set-2-deletion/?ref=lbp)