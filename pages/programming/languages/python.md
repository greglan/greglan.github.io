---
layout: page
title:  "Python"
permalink: "python.html"
tags: [programming, python]
summary: ""
---

## Virtual environment and cie
* Install `virtualenvwrapper`
* Set `WORKON_HOME` envar in `.profile`
* Create specific virtualenv for each purpose
* Advantage: keeps the system packages isolated and safe
* Never install packages using sudo pip !
* Never install packages using pip if not in a virtualenv !
* [A comparison between tools for virtual environments](https://stackoverflow.com/questions/41573587/what-is-the-difference-between-venv-pyvenv-pyenv-virtualenv-virtualenvwrappe)


## Arguments passing ot functions
* [Object reference passing](https://robertheaton.com/2014/02/09/pythons-pass-by-object-reference-as-explained-by-philip-k-dick/)
* [Strings references](https://stackoverflow.com/questions/986006/how-do-i-pass-a-variable-by-reference)


## Command line argument parsing
```python
import argparse

parser = argparse.ArgumentParser(description="Program description")
parser.add_argument("--cmd_name", dest="variable_name", help="Help for this arg")
parser.add_argument("--iter", type=int)
args = parser.parse_args()

if args.variable_name is not None:
    print("Arg set")
```


## Precision in Numpy
* [Machine limits for floating point type](https://docs.scipy.org/doc/numpy/reference/generated/numpy.finfo.html)


## Resources and references
* [What Every Computer Scientist Should Know About Floating-Point Arithmetic](https://docs.oracle.com/cd/E19957-01/806-3568/ncg_goldberg.html)
* [Advanced Python topics](http://sebastianraschka.com/Articles/2014_deep_python.html#else_clauses)
* [Parralel computing with IPython](https://ipyparallel.readthedocs.io/en/latest/intro.html)
