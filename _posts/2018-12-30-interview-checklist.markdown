---
layout: post
title:  "Checklist to prepare interviews"
date:   2018-12-29 16:57:56 +0100
tags:   [security, programming, system]
permalink: "interview-checklist.html"
summary: "A list of things to know organized by topics"
---
TODO: links to data structures posts

# Programming
* Learn everything in the [programming section](tag_programming.html)
* Sorting: quicksort and mergesort. When to use one against the other
* Hashtables: implementations. Array-only implementation.
* Trees: basic construction, and traversals (DFS, BFS).  Difference between
inorder, postorder and preorder. Binary trees, n-ary trees, and trie-trees.
Implementation of at least one type of balanced binary tree (ared/black tree,
    splay tree, AVL tree).
* Graphs: really important at Google. 3 basic ways to represent a graph in
memory (objects and pointers, matrix, and adjacency list). Pros & cons of each
implementation. Basic graph traversal algorithms: BFS/DFS, computational
complexity, tradeoffs, and implementation. Dijkstra and A*.
* Most famous classes of NP-complete problems: traveling salesman, the knapsack
problem. Be able to recognize them. NP-completeness.
* String algorithms: Rabin-Karp substring search, suffix trees algorithms (e.g.
    what's the longest palindromic substring?).
* Dynamic programming problems, Backtracking problems (e.g., eight queens).
* Interval arithmetic (including interval trees and segment trees).
* Heaps and priority queues.
* Median-of-medians and the quickselect algorithm.
* Linear-time majority element selection.
* Bloom filters
* Regular expressions: implement a pattern matcher for very simple regexes
* Object-oriented design
* Test-driven development
* Scaling the above algorithms to the point where their memory constraints are
violated (e.g., sorting a list too big to contain in memory; finding the most common character in a string too big to contain in memory; etc.).

# Operating systems
* Learn everything in the [system section](tag_system.html). Most notably, everything related to architectures and operating systems.
* Processes, threads. Resources for each.
* Context switching. Initiation by the OS and the hardware. Scheduling basics.
* Concurrency issues. Locks, mutexes, semaphores, monitors and how they work.
Deadlocks and livelocks. How to avoid them ?
* Multicore concurrency constructs.
* Find the most common email in a log file with a one-liner, etc...

# Security
* Learn everything in the [security section](tag_security.html)
* For an hardware security job, looking at the [electronics section](tag_electronics.html) might be useful
* Read security articles: KrebsOnSecurity. Know what's going on in the industry
* Lingo: dictionaries of security acronyms. "25 most used cyber security
buzzwords" or "most important cyber security acronyms". Idea of what SIEM, AD,
and SOC are. Common buzzword analysis [here](https://medium.com/@kshortridge/infosec-startup-buzzword-bingo-2019-edition-d067fb1316cb)
* Most used security tools and softwares. Companies involved in development.

# Others
* Combinatorics, probabilities basics. n-choose-k problems
* Choose uniformly random element from list without knowing its length
* Compute nth Fibonacci number in logarithmic time using matrix exponentiation, etc.).
* Configuration of several HTTP servers
* Knowledge of hypervisors
