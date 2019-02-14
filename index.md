---
layout: home
permalink: /
---
{% for collection in site.collections %}
{% if collection.label != 'posts' %}
  <h1>{{ collection.label | capitalize }}</h1>
  <ul>
    {% for page in collection.docs %}
      <li>
        <a href="{{ page.url }}">{{ page.title }}</a>
      </li>
    {% endfor %}
  </ul>
{% endif %}
{% endfor %}








{% comment %}
<h1>Posts</h1>
<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>
{% endcomment %}
