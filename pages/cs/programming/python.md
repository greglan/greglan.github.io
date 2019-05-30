---
layout: page
title:  "Python"
permalink: "python.html"
tags: [programming]
summary: "Some things about Python and a cheat-sheet of some common codes"
---

## Administration
### Virtual environment and cie
* Install `virtualenvwrapper`
* Set `WORKON_HOME` envar in `.profile`
* Create specific virtualenv for each purpose
* Advantage: keeps the system packages isolated and safe. Enable to use specific
version of packages
* Never install packages using `sudo pip` !
* Never install packages using pip if not in a virtualenv !
* [A comparison between tools for virtual environments](https://stackoverflow.com/questions/41573587/what-is-the-difference-between-venv-pyvenv-pyenv-virtualenv-virtualenvwrappe)
* [Jupyter and virtual envs](https://anbasile.github.io/programming/2017/06/25/jupyter-venv/)

### Jupyter
* [Add a virtualenv to a Jupyter notebook: install ](https://anbasile.github.io/programming/2017/06/25/jupyter-venv/)
* [Archwiki article](https://wiki.archlinux.org/index.php/Jupyter)


## Arguments passing to functions
* [Object reference passing](https://robertheaton.com/2014/02/09/pythons-pass-by-object-reference-as-explained-by-philip-k-dick/)
* [Strings references](https://stackoverflow.com/questions/986006/how-do-i-pass-a-variable-by-reference)
* [Example](https://github.com/greglan/python_scripts/blob/master/utils/references-example.py)


## Code examples
* [Command line argument parsing]()

### Files and directories
```python
import os

os.getcwd()  # Return the current path
os.chdir("/home/user")
os.chdir("..")
os.listdir()  # Return the directory listing for the current directory
os.listdir("/etc")
os.mkdir('dir_name')

# File modes:
# - w -> Write. Creates the file and overwrite if it already exists
# - a -> Append to end of file
# - r -> Read
# Append 'b' for binary manipulations
f = open(path, mode, encoding='utf8')

f.write(data)  # No '\n' appended
f.readline()  # Reads a string until '\n' is encountered. Returns '' if EOF
f.seek(n)  # Goto n-th byte

for line in f:
    print(line)

f.close()
```

### Exceptions
```python
try:
    # Code likely to have an exception
except IOError, e:
    # Code in case of IOError
    print(e);# Prints the error reason
except (IOError, ValueError):
    # Code if IOError or ValueError
else:
    # Do things we wanted to. Not very used. This code is usually in the 'try'
finally:
    # Code always executed no matter what happened before
```

### Object oriented programming
* String and representation methods: `__str__, __repr__`
* Comparisons methods: `__ne__, __le__, __lt__, __ge__, __gt__`
* Operation methods: `__add__, __sub__, __mul__, __div__, __floordiv__` (// division), `__rmul__` (right multiplication)
* [Example](https://github.com/greglan/python_scripts/blob/master/utils/class-examples.py)

### Object dumping using pickle
```python
import pickle

file = open("file.pkl", 'wb')
pickle.dump(object, file, pickle.HIGHEST_PROTOCOL)
file.close()

file = open("file.pkl", 'rb')
object = pickle.load(file)
file.close()
```


## Resources and references
* [Machine limits for floating point type in Numpy](https://docs.scipy.org/doc/numpy/reference/generated/numpy.finfo.html)
* [What Every Computer Scientist Should Know About Floating-Point Arithmetic](https://docs.oracle.com/cd/E19957-01/806-3568/ncg_goldberg.html)
* [Advanced Python topics](http://sebastianraschka.com/Articles/2014_deep_python.html)
* [Parallel computing with IPython](https://ipyparallel.readthedocs.io/en/latest/intro.html)
* [OCR with Python](https://www.quora.com/What-is-the-best-Python-OCR-library)
* [Tree plots in Python](https://plot.ly/python/tree-plots/)
* [Jupyter Docker stack](https://jupyter-docker-stacks.readthedocs.io/en/latest/)
* [5 advanced features of Python](https://towardsdatascience.com/5-advanced-features-of-python-and-how-to-use-them-73bffa373c84)
