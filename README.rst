

Building the docs
==================

Directory structure:

**source**
    contains the .rst files for the documentation. These are what you edit to make
    changes to the documemntation. 
    
**docs**
     is what is served on github pages.  Don't edit this directly. Use `make github`
     to create docs.     


Sphinx
-------

The html is created from .rst usign sphinx.  I am using Python 3.8.6 and installing 
sphinx in a virtual environtment 

Installing sphinx in a virtual environment:

.. code:: text

    python -m venv dev-guide
    source dev-guide/bin/activate
    pip install Sphinx


To make the docs, in the root directory run:

.. code:: text

    make html

To view the docs:


.. code:: text

   open build/html/index.html 

with your favorite browser.

To make the docs for github (github pages)

.. code:: text

   make github

`make github` builds the docs, then copies the output to /docs.  
Whatever is in /docs is what will show up on github pages when your
push to github.

https://ncar.github.io/dart-developers-guide/

To deactivate the virtual environment

.. code:: text
   
    deavtivate