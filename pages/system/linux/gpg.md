---
layout: page
title:  "GPG cheatsheet"
permalink: "gpg.html"
tags: [linux, cryptography]
summary: "Memo of the main commands of gpg"
---

## Encryption and decryption
* Encrypt: `gpg --encrypt --sign --armor -r "Receiver User Name" -r "Sender User Name" somefile`
* Decrypt: `gpg -d mydata.tar.gpg`

## Signatures
* Sign a document: `gpg --output signature.sig --sign file_to_sign`
* Check signature: `gpg --output file_to_check --verify file_to_check.sig`
* Check signature and extract: `gpg --output file_to_check --decrypt file_to_check.sig`
* --clearsign: TODO
* --detach-sig: TODO

## Key managment
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

* Keygen: `gpg --full-gen-key`
* Edit key: `gpg --edit-key`
* Set the default key: in ~/.bash_profile, `export GPGKEY=D8FC66D2`


## References
* [Signatures](https://www.gnupg.org/gph/en/manual/x135.html)
