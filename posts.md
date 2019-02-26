---
layout: category
title: Other posts
sidebar_sort_order: 90
---
These are posts that don't really fit in a specific category, at least for the moment.

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>
