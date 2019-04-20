---
layout: page
title:  "Tools"
permalink: "forensics-tools.html"
tags: [security, forensics]
summary: "Tools and useful commands for forensics"
---

## Binary file manipulation
* Extract file from 202 bytes offset: `dd if=input of=extracted bs=1 skip=202`
* Display file as binary: `xxd -b file`

## Steghide
```bash
steghide embed -cf image.jpg -ef message.txt
steghide extract -sf image.jpg
steghide --help
```

## Stegsolve
* Used to analyze images in different planes by taking off bits of the image.
* Install: `wget http://www.caesum.com/handbook/Stegsolve.jar -O stegsolve.jar`
* Launch: `java -jar stegsolve.jar`


## Resources and references
* [DumpIt for Windows memory dumps](https://www.aldeid.com/wiki/Dumpit)
