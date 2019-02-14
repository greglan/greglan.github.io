---
layout: category
title: Electronics
---

<ul>
  {% for page in site.electronics %}
    <li>
      <a href="{{ page.url }}">{{ page.title }}</a>
    </li>
  {% endfor %}
</ul>
