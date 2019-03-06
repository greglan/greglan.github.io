---
title:  "Binary heaps"
topic: "data_structures"
tags: programming data_structures trees
---

## Definition
* Can be a max-heap or a min-heap
* Min-heap: perfect binary tree where each node is smaller than its children. Consequence: the root is the smallest element
* Space complexity: *O(n)*


# Insertion
### Complexities
* Average case: *O(1)*
* Worst case: *O(log n)* with *n* the number of nodes

### Algorithm
* Insert the new node at the bottom of the tree (that is the right-most bottom)
* Bubble up

## Bubble up algorithm
* Compare the node to its parent
* If in right order, stop. Else, swap them and start again

## Deletion
### Complexities
* Average case: *O(log n)* with *n* the number of nodes
* Worst case: *O(log n)* with *n* the number of nodes

### Algorithm
* Search for the element
* Swap it with the greatest element (rightmost bottom element)
* Bubble down the greatest element that was just swaped

## Search complexity
* Average case: *O(n)* with *n* the number of nodes
* Worst case: *O(n)* with *n* the number of nodes
