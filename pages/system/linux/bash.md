---
layout: page
title:  "BASH cheatsheet"
permalink: "bash.html"
tags: [linux]
summary: "A collection of useful BASH scripts."
---

## Conditions
```bash
if [ $var -eq 100 ]
then
  echo "Equal 100"
elif [ $var -gt 100 ]
then
  echo "Greater than 100"
elif [ -z "$var" ]
then
    echo "Var is empty of set to empty string"
elif [ ! -z "$var" ]
then
    echo "Var is not empty"
else
  echo "Less than 100"
fi
```

## Some useful tricks
### Argument parsing
```bash
if [ "$1" != "" ]; then
    echo $1
    if [ "$2" != "" ]; then
        echo $1
    else
        echo "Arg 2 is empty"
    fi
else
    echo "Arg 1 is empty"
fi


if [ $# -gt 0 ]; then
    echo "Your command line contains $# arguments"
else
    echo "Your command line contains no arguments"
fi


i=0
for var in "$@"
do
  echo "Arg $i: $var"
  i =$i+1
done
```

### Test for root user
```bash
if [[ $EUID -ne 0 ]]; then
   echo "This script must be run as root"
   exit 1
fi
```

### Test for open port
```bash
test_proxy=`nc -z $IP $PORT`

if [ "$?" -ne 0 ]; then
    echo "Port closed"
else
    echo "Port open"
fi
```

### Perform action for each txt file in directory
```bash
for filename in ./*.txt; do
    mv $filename prefix-$filename
done
```


## Resources and references
* [Parallel commands or programs in BASH](https://www.cyberciti.biz/faq/how-to-run-command-or-code-in-parallel-in-bash-shell-under-linux-or-unix/)
