---
title:  "Binary search trees"
topic: "data_structures"
tags: programming data_structures trees
---

## Definitions and properties
### Definiton
* Binary tree where each node has a key
* For all nodes *x*, every nodes in the left subtree of *x* have a key less than or equal to the key of *x*
* For all nodes *x*, every nodes in the right subtree of *x* have a key greater than the key of *x*
* Conventions: can be a strict inequality or not. A double can be in the left or right subtree
* Successor: minimum element of the right subtree
* Predecessor: maximum element of the left subtree

### Properties
* If a node has two children, its successor doesn't have a left child and its predecessor doesn't have a right child
* To replace a node *x* by a node *y*, it suffices to overwrite the key of *x* by the key of *y* and delete *y*
* Space complexity: *O(n)*


## Search algorithm
* Recursive algorithm
* Iterative algorithm
* Average case complexity: *O(log n)*
* Worst case complexity: *O(n)*


## Insertion algorithm
### Steps
* Search the key of the node to insert
* If it exists, it's over
* Else, the end of the search leads to a leaf. Insert a left or right subtree in that leaf depending on the key to insert

### Complexity
* Average case: *O(log n)*
* Worst case: *O(n)*


## Deletion algorithm
* Implementation: always using the predecessor or the successor can lead to an unbalanced tree. Use the predecessor and the successor alternatively to prevent that
* Average case complexity: *O(log n)*
* Worst case complexity: *O(n)*

### Steps
* If the node is a leaf, delete it
* If the node has only one child, replace it by its child
* If the node *s* has two children: 2 methods
  * Replace *s* by its successor *y*. *y* doesn't have a left child: if it has a right child, attach it to the parent of *y*
  * Replace *s* by its predecessor *y*. *y* doesn't have a right child: if it has a left child, attach it to the parent of *y*
