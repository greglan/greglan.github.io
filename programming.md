---
layout: category
title: Programming
permalink: /programming/
sidebar_sort_order: 2
---

<ul>
  {% for page in site.programming %}
    <li>
      <a href="{{ page.url }}">{{ page.title }}</a>
    </li>
  {% endfor %}
</ul>
