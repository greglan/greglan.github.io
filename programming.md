---
layout: category
title: Programming
permalink: /programming/
sidebar_sort_order: 40
---
<h2>Algorithms</h2>
<ul>
  {% for page in site.programming %}
    {% if page.topic == "algorithms" %}
      <li>
        <a href="{{ page.url }}">{{ page.title }}</a>
      </li>
    {% endif %}
  {% endfor %}
</ul>


<h2>Data structures</h2>
<ul>
  {% for page in site.programming %}
    {% if page.topic == "data_structures" %}
      <li>
        <a href="{{ page.url }}">{{ page.title }}</a>
      </li>
    {% endif %}
  {% endfor %}
</ul>


## TODO
* Fibonacci heaps
* Red black trees
* KD trees
* [Recursivity vs Reentrancy](https://fr.wikipedia.org/wiki/R%C3%A9entrance)
* Add links to repo
