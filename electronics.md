---
layout: category
title: Electronics
permalink: /electronics/
sidebar_sort_order: 3
---

<ul>
  {% for page in site.electronics %}
    <li>
      <a href="{{ page.url }}">{{ page.title }}</a>
    </li>
  {% endfor %}
</ul>
