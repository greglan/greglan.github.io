---
layout: page
title:  "Wireshark filters"
permalink: "wireshark.html"
tags: [security, networks]
summary: "Wireshark filters"
---

## Common filters
```
http.request.method == "POST"
pop.request.command == "USER" || pop.request.command == "PASS"
imap.request contains "login"
smtp.req.command == "AUTH"
ip.addr == 192.168.1.1
```

## Resources and references
TODO
