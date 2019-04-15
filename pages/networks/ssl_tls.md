---
layout: page
title:  "SSL and TLS"
permalink: "ssl-tls.html"
tags: [security, networks]
---


# History
## Secure Sockets Layer (SSL)
* Not used anymore, many vulnerabilities
* Replaced by TLS

## Transport Layer Security (TLS)
* TLS 1.0: adds PFS support using Diffie-Hellman
* TLS 1.2 in 2008. Most used version.
* TLS 1.3: not implemented yet. Focus on improving speed and security (removal
    of unsecure protocols: 3DES, AES + CBC, RC4 removed)


# Connection steps
TODO: insert/make image


# Perfect Forward Secrecy (PFS)
* Also known as *Forward Secrecy*
* Feature of specific key agreement protocols
* Ensures session keys will not be compromised even if the private key of the
server is compromised
* Protects past sessions against future compromises of secret keys/passwords.
Encrypted communications and sessions recorded in the past cannot be retrieved
and decrypted if secret keys/passwords are compromised in the future
* Works by generating a unique session key for every session a user initiates.
Compromise of a single session key will not affect any data other than that
exchanged in the specific session protected by that particular key.


# Decrypting SSL trafic
## With private key
If **Perfect Forward Secrecy** is setup, the private key is not enough to get the stream in plain text.
Cf [this link](https://security.stackexchange.com/questions/71309/it-is-possible-to-decrypt-https-with-the-private-public-pair-if-it-uses-dhe)

## Without the private key
CRIME, BEAST, POODLE attacks. Tricky to use because they need specific versions of SSL, ciphers and partly know what is being exchanged between the client and the server


# Resources
* [Analysing TLS with PFS](https://jimshaver.net/2015/02/11/decrypting-tls-browser-traffic-with-wireshark-the-easy-way/). Based on the Pre Master Key. Allows to decipher the data between a client and the server provided an access on the client exists. Also depends on the server configuration (if seesion reuse is enabled ?
* [Decrypting TLS traffich with DHE](https://security.stackexchange.com/questions/71309/it-is-possible-to-decrypt-https-with-the-private-public-pair-if-it-uses-dhe)
* [ANALYSES DES CONFIGURATIONS SSL/TLS DE SERVEURS SMTP](https://connect.ed-diamond.com/MISC/MISC-096/Analyses-des-configurations-SSL-TLS-de-serveurs-SMTP)
* [Differences between TLS 1.2 and TLS 1.3](https://www.wolfssl.com/differences-between-tls-1-2-and-tls-1-3/)
* [Potential flow in TLS 1.3](https://www.scmagazineuk.com/tls-13-vulnerability-enables-hackers-eavesdrop-encrypted-traffic/article/1525916)
