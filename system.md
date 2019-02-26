---
layout: category
title: System
permalink: /system/
sidebar_sort_order: 15
---
<h2>ARM</h2>
<ul>
  {% for page in site.system %}
    {% if page.topic == "arm" %}
      <li>
        <a href="{{ page.url }}">{{ page.title }}</a>
      </li>
    {% endif %}
  {% endfor %}
</ul>


<h2>Data structures</h2>
<ul>
  {% for page in site.system %}
    {% if page.topic == "linux" %}
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
