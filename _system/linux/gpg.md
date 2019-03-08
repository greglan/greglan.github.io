---
title:  "GPG cheatsheet"
topic: "linux"
tags: linux
---

* Export
    * `gpg --output mykey.asc --export -a $GPGKEY`
    * `gpg --export --armor jqdoe@example.com > jqdoe-pubkey.asc`
    * `gpg --export -a "User Name" > public.key`
    * `gpg --export-secret-key -a "User Name" > private.key`
* Export to server: `gpg2 [--keyserver hkp://pgp.mit.edu] --send-key KEYNAME`
* Import
    * `gpg --import public.key`
    * `gpg --allow-secret-key-import --import private.key
`* Delete key:
    * `gpg --delete-key "User Name"`
    * `gpg --delete-secret-key "User Name"`
* List keys:
    * `gpg --list-keys`
    * `gpg --list-secret-keys
`* Encrypt: `gpg --encrypt --sign --armor -r "Receiver User Name" -r "Sender User Name" somefile`
* Decrypt: `gpg -d mydata.tar.gpg`
* Keygen: `gpg --full-gen-key`
* Edit key: `gpg --edit-key`
* Setthe default key: in ~/.bash_profile, `export GPGKEY=D8FC66D2`
