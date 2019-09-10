---
layout: page
title:  "Ruby ecosystem guide"
permalink: "ruby.html"
tags: [programming]
summary: "A quick introduction to the Ruby ecosystem"
---

* RVM: Ruby Version Manager. Command line tool
* RubyGems: package manager for gems (ruby modules). Executable gems have to be
  added to the `$PATH` to be available


## Bundler
* Allows to specify the gems needed in an app and the version to use in a Gemfile
* By default, installs all the gems into a shared location
* Using `bundle exec` allows to use the correct version specified in the Gemfile
* Gems installed system-wide are updated with all the other packages, and
  available to all users.
