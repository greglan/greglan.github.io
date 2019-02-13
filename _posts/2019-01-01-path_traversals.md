---
layout: post
title:  "Path traversal vulnerabilities"
date:   2019-1-1 16:57:56 +0100
---
# Strategy
* Better to request a default file readable by any user: `c:/windows/win.ini`, `/etc/passwd`
* If read access, chain `../` until file found: `../etc/passwd`, `../../etc/passwd` ...
* If write access, try to write a file which should be writable by any user, and one that souldn't be writable by anyone.
  * Windows: `../writetest.txt`, `../windows/system32/config/sam`
  * Unix: files that root may no write are version-dependent, but writing a directory with a file fails: `../tmp/test.txt`, `../tmp`
* If write access, write a new file in the web root. Problems: location of the root directory, and permission to write.
* Assume input is being appended to a static working directory
* Test for input sanitizations
* Use a large number of traversal sequence: ok to go above the root of the FS
* Test for both forward/backslashes whatever the OS detected

## Detection
* Areas related to uploading or downloading files (from/to user or another server)
* Areas displaying files
* URLs which seem to indicate a file or a directory
* URL arguments names: `file, template, include`
* Monitor system activity filtered against our input string
* Filesystem activity monitoring tools:
  * Windows: **FileMon** from SysInternals
  * Linux: **ltrace/ltrace**
  * Sun's Solaris: **truss**
* Try with a subdirectory: `include=/bar.php` and `include=/folder/../bar.php`

## Goals
* Read sensitive data
* Read passwords
* Read logs: usernames, session tokens
* Read source codes: may contain credentials
* Write configuration files
* Write binaries
* Write custom scripts: user's startup folders, `in.ftpd`, web directory


# Tactics
* URL encoding:
  * dot: `%2e`
  * forward slash: `%2f`
  * backslash: `%5c`
* 16-bits unicode encoding:
  * dot: `%u002e`
  * forward slash: `%u2215`
  * backslash: `%u2216`
* Double URL encoding:
  * dot: `%252e`
  * forward slash: `%252f`
  * backslash: `%255c`
* Overlong UTF-8 encoding
*
