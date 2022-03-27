# DART web presence

## Documentation

The documentation for DART is written in reStructuredText, then
converted to html using Sphinx. The conversion to html is done
automatically by readthedocs, when new content is pushed to a branch.

Documentation is built for pull requests.  You can view the documentation
build by clicking on `show all checks` then `details`.

![doc-pull](./images/doc-pull-req.png)

You can build the DART documentation locally using Sphinx.

### Installing Sphinx Locally

To install Sphinx in a Python virtual environment:

```
python -m venv dev-guide
source dev-guide/bin/activate
pip install Sphinx
```

To make the docs, run:

```
make html
```

To view the docs:

```
open html/index.html 
```

with your favorite browser.

To deactivate the virtual environment

```
deactivate
```

## Website

There are two repositories to be aware of for the DART website:

<https://github.com/NCAR/dart-web.git> Is the repository used to build
the site.

The website is hosted via GitHub pages on dart.ucar.edu:

<https://github.com/NCAR/DART.git>

For instructions on building the website, read the README at
<https://github.com/NCAR/dart-web>
