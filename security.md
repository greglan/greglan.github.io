---
layout: category
title: Security
permalink: /security/
sidebar_sort_order: 1
---

<h2>Reversing and application exploitation</h2>
<ul>
  {% for page in site.security %}
    {% if page.topic == 'reversing' %}
      <li>
        <a href="{{ page.url }}">{{ page.title }}</a>
      </li>
    {% endif %}
  {% endfor %}
</ul>


<h2>Cryptography</h2>
<ul>
  {% for page in site.security %}
    {% if page.topic == 'cryptography' %}
      <li>
        <a href="{{ page.url }}">{{ page.title }}</a>
      </li>
    {% endif %}
  {% endfor %}
</ul>


<h2>Web</h2>
<ul>
  {% for page in site.security %}
    {% if page.topic == 'web' %}
      <li>
        <a href="{{ page.url }}">{{ page.title }}</a>
      </li>
    {% endif %}
  {% endfor %}
</ul>


<h2>Misc</h2>
<ul>
  {% for page in site.security %}
    {% if page.topic != 'web' and page.topic != 'cryptography' and page.topic != "reversing" %}
      <li>
        <a href="{{ page.url }}">{{ page.title }}</a>
      </li>
    {% endif %}
  {% endfor %}
</ul>
