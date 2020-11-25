---
layout: page
title:  "DNS protocol"
permalink: "dns.html"
tags: [networks]
summary: "A quick introduction to the DNS protocol"
---

## Introduction
* DNS = Domain Name System
* A record: address record. 32 bits IPv4 address
* PTR record: pointer record. Pointer to a canonical name. DNS processing isn't
  performed, only the name is returned
* MX record: mail exchange record. Maps a domain to a list of message transfer
  agents for that domain


## Dig examples
```bash
dig example.com         # Get A record
dig example.com mx      # Get MX record
dig example.com axfr    # Get all domain record if allowed
dig example.com any     # Get all record with no label for the domain

# Specifying the DNS server
dig @192.168.1.1 example.com mx # Use 192.168.1.1 to perform an MX record query
dig @192.168.1.1 -x 10.10.10.10 # Reverse lookup DNS query to determine the name
```


## DNS security
* DNS-over-TLS wraps DNS queries into a TLS session. Uses port 853
* DNS-over-HTTPS makes DNS queries using HTTPS. Uses port 443
* DNSSEC provides authentication and integrity of DNS records but not
  confidentiality
* [Example of manual DNSSEC validation](https://wiki.archlinux.org/index.php/DNSSEC#Basic_DNSSEC_validation)
* Specific DNS resolvers must be installed to automatically used DNSSEC
* [DNSCrypt](https://dnscrypt.info/) prevents DNS spoofing


## Resources and references
* [Wikipedia page on DNS](https://en.wikipedia.org/wiki/Domain_Name_System)
* [List of DNS records](https://en.wikipedia.org/wiki/List_of_DNS_record_types)
* [DNS MX records](https://en.wikipedia.org/wiki/MX_record)
* [Dig examples](https://www.thegeekstuff.com/2012/02/dig-command-examples/)
* [Difference between DNS-over-TLS and DNS-over-HTTPS](https://www.thesslstore.com/blog/dns-over-tls-vs-dns-over-https/)
* [Overview of DNS security](https://www.cloudflare.com/learning/dns/dns-security/)
* [Setting up CloudFlare's DNS](https://developers.cloudflare.com/1.1.1.1/setting-up-1.1.1.1/)
* [DNS resolver supporting various security extensions](https://wiki.archlinux.org/index.php/Dnscrypt-proxy)
* [Setting up a local DNS resolver](https://superuser.com/questions/410053/how-can-i-set-up-a-local-domain-so-that-everyone-on-my-local-network-can-view)