---
layout: page
title: The HTTP protocol
permalink: "http-protocol.html"
tags: [networks]
summary: "A quick overview of the HTTP protocol"
---

## General structure
```
[Introduction line][SEP]
[Headers seperated by SEP]
[SEP][SEP]
[Body content]
```
SEP: '\r\n' = %0D%0A

## Requests
### Introduction line
* Syntax: `[method][space][page][space][version][SEP]`
* Method field: `GET`, `POST`, ...
* Version field: `HTTP/1.1` or `HTTP/1.0`

### Headers
* *Content-Length*: size of the body content
* *Content-type*: `application/x-www-form-urlencoded` for a POST request
* *Connection*: `Close` or `Keep-Alive`

### Body for POST requests
Same syntax as parameters passing in the URL for GET requests:
`param_name_1=param_value_1&param_name_2=param_value_2`


## Responses
### Introduction line
* Syntax: `[version][space][code_status][space][phrase_state]`
* Version: same as the one speecified in the request
* Status codes:
  - 200 OK
  - 403 Forbidden
  - 404 Not found
  - 500 Internal server error
  - 505 HTTP version not supported

### Headers
```
Date: Fri, 31 Dec 1999 23:59:59 GMT // Date the response was generated
Server: Apache/2.2.3
```

### Body
Contains the resource. Will mostly be an HTML page


## Resources and references
* [HTTP authentication](https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication)
