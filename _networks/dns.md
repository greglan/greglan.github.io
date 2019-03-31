---
title:  "DNS protocol"
topic: ""
tags: networks
---

# Introduction
* DNS = Domain Name System
* A record: address record. 32 bits IPv4 address
* PTR record: pointer record. Pointer to a canonical name. DNS processing isn't performed, only the name is returned
* MX record: mail exchange record. Maps a domain to a list of message transfer agents for that domain


# Dig examples
```bash
dig example.com         # Get A record
dig example.com mx      # Get MX record
dig example.com axfr    # Get all domain record if allowed
dig example.com any     # Get all record with no label for the domain

# Specifying the DNS server
dig @192.168.1.1 example.com mx # Use 192.168.1.1 to perform an MX record query
dig @192.168.1.1 -x 10.10.10.10 # Reverse lookup DNS query to determine the name
```

# Resources and references
* [Wikipedia page on DNS](https://en.wikipedia.org/wiki/Domain_Name_System)
* [List of DNS records](https://en.wikipedia.org/wiki/List_of_DNS_record_types)
* [DNS MX records](https://en.wikipedia.org/wiki/MX_record)
* [Dig examples](https://www.thegeekstuff.com/2012/02/dig-command-examples/)
