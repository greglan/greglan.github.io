---
title:  "Connecting to WPA protected wifi using the command line"
topic: "linux"
tags: linux networks
---
```bash
ip link set wlan0 up
iw wlan0 scan
sudo wpa_passphrase essid >> /etc/wpa_supplicant.conf
# Type passphrase here
sudo wpa_supplicant -B -D wext -i wlan0 -c /etc/wpa_supplicant.conf
iw wlan0 link # Check connection
sudo dhclient wlan0
```
