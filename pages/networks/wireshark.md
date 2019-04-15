---
layout: page
title:  "Wireshark"
permalink: "wireshark.html"
tags: [security, networks]
---

# Common filters
```
http.request.method == "POST"
pop.request.command == "USER" || pop.request.command == "PASS"
imap.request contains "login"
smtp.req.command == "AUTH"
```

# Resources and references
TODO
