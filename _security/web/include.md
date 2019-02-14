---
title:  "Includes vulnerabilities"
topic: "web"
---
## Introduction
* LFI: Local file inclusion
* RFI: Remote File Inclusion

## Full Path Disclosure (FPD)
* Tool: inspathx (Google)
* PHP example: `file_get_contents(getcwd().$_GET['page'])`. `page` is controlled by the attacker. It can be a relative path to another file or garbage to lead to a path disclosure bug
* Array bug: can be used to lead to a path disclosure bug. `show.php?page=about` modified in `show.php?page[]=about
* Null session cookie: `javascript:void(document.cookie="PHPESSID=")`. Can be prevented by `error_reporting(0)`
* Invalid session cookie: too long cookie (>128 bytes) or invalid char. `javascript:void(document.cookie="PHPESSID=AAAA...A")`,  `javascript:void(document.cookie="PHPESSID=.")`

## Include vulnerability
* Vulnerable code: `include($_GET['page'])`, from http://xxx.xxx.xxx.xxx/index.php?page=about.php. `page` can be a path or an URL
* Works with URL if `allow_url_include`, `allow_url_fopen`
* Protections : `file_exists`, global array of allowed pages
* Null byte: `index.php?page=secret.txt%00`. Used to defeat concatenation with `.php` extension for example.
* PHP filter: `index.php?page=php://filter/convert.base64-encode/resource=index`

## Tactics
* `....//`
* `....\/`
* `..../\`
* `....\\`

## Strategy
* Read unauthorized contents
* Gain access to unauthorized functionalities
* Include server-side scripts to perform actions
* Custom scripts must use the application's language
* Combine include vulnerability with path traversals

### Detection
* Submit the name of known executable resources on the server
* Submit the name of known static resources on the server
