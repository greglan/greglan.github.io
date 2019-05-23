---
layout: page
title:  "SSH protocol"
permalink: "ssh.html"
tags: [security, networks]
summary: "Configuration of an SSH server and useful commands"
---


## Useful commands
* Use `$SERVER` as a SOCKS5 proxy on local port `$PORT`: `ssh -D $PORT -f -C -q -N $SERVER`

## Server configuration
* `HostKey`: generate RSA/ECDSA keys and specify the path. Only use RSA/ECDSA: DSA is unsecure and ED25519 is useless
* `Port`: change that to a non-regular port
* `AllowUsers`: list of users who can SSH, space separated
* `PermitRootLogin`: set to no
* `PubkeyAuthentication`: set to yes
* `PasswordAuthentication`: set to no
* `PasswordAuthentication`: set to no

## User configuration through ssh_config
```
# A remote desktop supporting X11 forwarding
Host remote-desktop     
    HostName 8.8.4.4
    ForwardX11 yes

# Pattern matching
Host vm.*
    HostName 8.8.8.8
    User vm-user
    IdentityFile /path/to/vm_key_file
    PubKeyAuthentication yes
    ForwardAgent no
    Port 22

# Default matching pattern
Host *                  
    User default_user
    Port default_port
    VisualHostKey yes
    ForwardAgent yes
    IdentityFile ~/.ssh/default_key_file

```

## Resources and references
* [SSH filtering bypass](https://www.verot.net/socks.htm?lang=en-GB)
* [SSH hardening with 2FA](https://gist.github.com/lizthegrey/9c21673f33186a9cc775464afbdce820)
