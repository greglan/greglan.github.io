---
layout: page
title:  "Android Debug bridge cheatsheet"
summary: "A cheatsheet of useful commands in ADB"
tags: [system, android]
permalink: "adb.html"
---

```
adb shell

adb install appname.apk
adb push appname.apk /data/app
adb pull /data/app/appname.apk

cd data/app
rm -r appname.apk

adb reboot
adb kill-server
exit
```
