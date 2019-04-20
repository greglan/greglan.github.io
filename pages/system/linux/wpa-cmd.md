---
layout: page
title:  "Connecting to WIFI from the terminal"
permalink: "wpa-cmd.html"
tags: [linux, networks]
summary: "Memo about connecting to WIFI networks from the terminal"
---

## Manual connection
```bash
ip link set wlan0 up
iw wlan0 scan
sudo wpa_passphrase essid >> /etc/wpa_supplicant.conf
# Type passphrase here
sudo wpa_supplicant -B -D wext -i wlan0 -c /etc/wpa_supplicant.conf
iw wlan0 link # Check connection
sudo dhclient wlan0
```

## nmcli
* List available networks : `nmcli device wifi list`
* Delete saved connection: `nmcli connection delete name`
