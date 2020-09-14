---
layout: page
title: Android 
summary: "A description of the internals of the Android system"
tags: [system]
permalink: "android.html"
---


## Android architecture


## ADB (Android Debug bridge)
```
adb shell

adb install appname.apk
adb push appname.apk /data/app
adb shell "pm list packages -f test"
adb monkey -p com.package.name -v 500
adb am start -n com.package.name/.MainActivity
adb am start -n com.package.name/com.package.name.ActivityName
adb pull /data/app/appname.apk

cd data/app
rm -r appname.apk

adb reboot
adb kill-server
exit
```


# Resources and references
* [General information about Android apps](https://ragingrock.com/AndroidAppRE/app_fundamentals.html)
