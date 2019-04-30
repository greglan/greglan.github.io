---
layout: page
title:  "SSH protocol"
permalink: "ssh.html"
tags: [security, networks]
summary: "Implementation of an SSH server and useful commands"
---


* Use `$SERVER` as a SOCKS5 proxy on local port `$PORT`: `ssh -D $PORT -f -C -q -N $SERVER`


## Resources and references
* [SSH filtering bypass](https://www.verot.net/socks.htm?lang=en-GB)
