---
layout: page
title:  "Command lines cheatsheet"
permalink: "linux-cmd-utils.html"
tags: [linux]
summary: "Various information about the use of a Linux terminal"
---

## Envar
* List all envar: `env`
* List envar of a process: `cat /proc/1234/environ`
* Make a bash variable an env: `export VARNAME`
* Direct env definition: `export VARNAME=VAL`
* `$PATH` separator: `:`. Different on Windows
* Current shell: echo $SHELL; echo $0
    $HOME, $PWD, $TERM, $USER, $UID, $LOGNAME, $DISPLAY
* `PATH` modification: `export PATH=$PATH:/home/user/bin`

## Process
* List all processes: `ps -ax`
* Detailed version: `ps -axl`
* Tree representation: `ps -axf`
* List processes belonging to user's euid: `ps -u user`
* List jobs: `jobs`
* Pause process: `^Z`
* Kill process: `^C`
* Zombie process: processus fils dont le père n'a pas géré la terminaison. Seul moyen pour s'en débarrasser: tuer le père.
* List all running services
```
R=$(runlevel  | awk '{ print $2}')
for s in /etc/rc${R}.d/*; do  basename $s | grep '^S' | sed 's/S[0-9].//g' ;done
```
* TODO: `top`

## Search
* Todo: `locate, updatedb`
* Find commands in common directories: `whereis`
* Find commands in `$PATH`: `which`
* Find files everywhere: `find -name test /`

## Streams
* stdin -> 0
* stdout -> 1
* stderr -> 2
* *stdout* redirection: `command > file`
* *stderr* redirection: `command 2> file`
* *stdout* and *stderr* redirection: `command > file 2>&1`
* Redirect and overwrite: `>`
* Append to file: `>>`

## X system
* Display format: `address_or_name:ServNum.ScreenNum`
* `export DISPLAY=name:0.0`
* Allow connections form host machine: `xhost +machine`


## Unsorted
* Terminal info: `stty -a`
* Output date: `date +%H:%M`
* Clear the copy and cache buffers: `sysctl --write vm.drop_caches=3`
* List enabled unit files: `systemctl list-unit-files | grep enabled`
* View logs of a specific unit: `journalctl -u nginx.service -u php-fpm.service --since today`



## TODO
* cat
* grep (exr rationnelles)
* sort
* uniq
* sed
* tee
* cut
* tr
* split
* paste
* printf
* comm
* cmp
* diff
* patch
* w
* ps
* finger
* mail
* [Hard links](https://bertvv.github.io/notes-to-self/2015/10/18/the-number-of-hard-links-in-ls--l/)
