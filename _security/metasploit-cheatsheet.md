---
title:  "Metasploit cheatsheet"
---

* `db_import pathToNmapScan.xml`
* List hosts: `hosts -c address`
* Automatically store results in Metasploit database: `db_nmap`
* Show stored services in the database (discovered by `db_nmap`): `services`
* Search for Metasploit scanners: `search portscan`
* Search for exploits: `search type:exploit name`


# Resources and references
* [Metasploit commands](https://www.offensive-security.com/metasploit-unleashed/msfconsole-commands/)