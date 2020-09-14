---
layout: page
title:  "SSH protocol"
permalink: "ssh.html"
tags: [security, networks]
summary: "Configuration of an SSH server and useful commands"
---


## Useful commands
* Use `$SERVER` as a SOCKS5 proxy on local port `$PORT`: `ssh -D $PORT -f -C -q -N $SERVER`
* Nice [visual explanation of port forwarding](https://unix.stackexchange.com/questions/115897/whats-ssh-port-forwarding-and-whats-the-difference-between-ssh-local-and-remot) possibilities.
  
  Optionally add the `-Nf` flags: 
  - `-f`: goto background
  - `-N`: do not execute any commands

## Server configuration
* `HostKey`: generate RSA/ECDSA keys and specify the path. Only use RSA/ECDSA: DSA is unsecure and ED25519 is useless
* `Port`: change that to a non-regular port
* `AllowUsers`: list of users who can SSH, space separated
* `PermitRootLogin`: set to no
* `PubkeyAuthentication`: set to yes
* `PasswordAuthentication`: set to no
* `PasswordAuthentication`: set to no

## User configuration
### Key generation
* Ed25519 is the algorithm of choiceeven though it may not yet be deployed everywhere
* Recommended key generation: `ssh-keygen -o -a 100 -t ed25519 -C "comment like user@computer"`
* See [this article](https://medium.com/risan/upgrade-your-ssh-key-to-ed25519-c6e8d60d3c54), this [answer on StackExchange](https://security.stackexchange.com/questions/143442/what-are-ssh-keygen-best-practices) and the [ArchWiki article](https://wiki.archlinux.org/index.php/SSH_keys#Choosing_the_authentication_key_type)
* Edit a key comment: `ssh-keygen -c -C "New comment" -f ~/.ssh/key`

### ssh_config example
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
* [SSH agent highjacking](https://xorl.wordpress.com/2018/02/04/ssh-hijacking-for-lateral-movement/)
* [SSH agent highjacking](https://www.clockwork.com/news/2012/09/28/602/ssh_agent_hijacking/)
* [FIDO OpenSSH](https://thehackernews.com/2020/02/openssh-fido-security-keys.html)
