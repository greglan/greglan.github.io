---
layout: page
title: Other posts
---
These are posts that don't really fit in a specific category.

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>
